import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import fg from "fast-glob";
import matter from "gray-matter";

type RawDeck = {
  schemaVersion: number;
  title: string;
  subtitle: string;
  slug: string;
  session: Record<string, unknown>;
  delivery: {
    pageTitle: string;
    preferredExtension: string;
    githubPages: boolean;
    noteExport: {
      jsonFileName: string;
      markdownFileName: string;
    };
  };
  sections: Array<{
    id: string;
    title: string;
    slides: string[];
  }>;
};

type SlideSource = {
  id: string;
  section: string;
  navTitle?: string;
  title: string;
  layout: string;
  notes?: string;
  participantPrompt?: string;
  exerciseId?: string;
  reviewStatus?: string;
  blocks?: unknown[];
};

const root = process.cwd();
const contentDir = path.join(root, "content");
const slidesDir = path.join(contentDir, "slides");
const generatedDir = path.join(root, "src", "data", "generated");
const outPath = path.join(generatedDir, "deck.ts");

async function readYamlFile<T>(filePath: string): Promise<T> {
  const raw = await fs.readFile(filePath, "utf8");
  return matter(`---\n${raw}\n---`).data as T;
}

function normalizeBody(body: string): string {
  return body.trim().replace(/\r\n/g, "\n");
}

async function main() {
  const deck = await readYamlFile<RawDeck>(path.join(contentDir, "deck.yml"));
  const theme = await readYamlFile<Record<string, unknown>>(path.join(contentDir, "theme.yml"));
  const slideFiles = await fg("*.md", { cwd: slidesDir, absolute: true });
  const slidesById = new Map<string, SlideSource & { body: string; sourcePath: string }>();

  for (const filePath of slideFiles.sort()) {
    const parsed = matter(await fs.readFile(filePath, "utf8"));
    const data = parsed.data as SlideSource;
    if (!data.id) throw new Error(`Missing slide id: ${filePath}`);
    if (slidesById.has(data.id)) throw new Error(`Duplicate slide id: ${data.id}`);

    slidesById.set(data.id, {
      ...data,
      body: normalizeBody(parsed.content),
      sourcePath: path.relative(root, filePath),
    });
  }

  const orderedSlides = deck.sections.flatMap((section) =>
    section.slides.map((slideId) => {
      const slide = slidesById.get(slideId);
      if (!slide) {
        throw new Error(`Section ${section.id} references missing slide ${slideId}`);
      }
      return {
        ...slide,
        sectionId: section.id,
        sectionTitle: section.title,
      };
    }),
  );

  const missingFromDeck = [...slidesById.keys()].filter(
    (slideId) => !orderedSlides.some((slide) => slide.id === slideId),
  );
  if (missingFromDeck.length) {
    throw new Error(`Slides not listed in content/deck.yml: ${missingFromDeck.join(", ")}`);
  }

  const output = {
    schemaVersion: deck.schemaVersion,
    title: deck.title,
    subtitle: deck.subtitle,
    slug: deck.slug,
    session: deck.session,
    delivery: deck.delivery,
    theme,
    sections: deck.sections,
    slides: orderedSlides.map((slide, index) => ({
      ...slide,
      sequence: index + 1,
    })),
    generatedAt: new Date().toISOString(),
  };

  await fs.mkdir(generatedDir, { recursive: true });
  await fs.writeFile(
    outPath,
    `import type { DeckData } from "../../types";\n\nexport const deckData = ${JSON.stringify(
      output,
      null,
      2,
    )} satisfies DeckData;\n`,
    "utf8",
  );
  console.log(`Generated ${path.relative(root, outPath)} with ${orderedSlides.length} slides.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
