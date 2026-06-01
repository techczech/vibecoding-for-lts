import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const sourcePath = path.join(root, "content", "source-outline.md");
const generatedDir = path.join(root, "src", "data", "generated");
const outPath = path.join(generatedDir, "deck.ts");

type OutlineItem = {
  text: string;
  children: OutlineItem[];
};

type OutlineSlide = {
  id: string;
  title: string;
  items: OutlineItem[];
  sequence: number;
};

const headingIds = new Map<string, string>([
  ["Vibecoding for Learning Technologists", "title"],
  ["What is the current state of AI", "current-state"],
  ["Evolution of roles", "role-evolution"],
  ["Things you should know", "model-and-harness"],
  ["Current top models", "model-landscape-refresh"],
  ["Current top harnesses", "harnesses"],
  ["Getting started", "workshop-path"],
  ["Step 1: Google AI Studio", "ai-studio-build"],
  ["Reflection on Google AI Studio", "ai-studio-reflection"],
  ["Step 2: Codex", "codex-downloads"],
  ["Reflections on Codex", "codex-reflection"],
  ["Step 3: Manage a Canvas course with Codex", "canvas-sandbox"],
  ["Reflections on Codex and Canvas", "canvas-reflection"],
  ["Step 4: Bring it all together", "single-html-canvas"],
  ["Reflections on Codex and Canvas part 2", "codex-practices"],
  ["Step 5: Set up good Codex practices", "closing"],
]);

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function bulletDepth(rawIndent: string) {
  const expanded = rawIndent.replace(/\t/g, "  ");
  return Math.floor(expanded.length / 2);
}

function addBullet(items: OutlineItem[], stack: OutlineItem[][], depth: number, text: string) {
  while (stack.length <= depth) stack.push(items);
  stack.length = depth + 1;
  const parent = stack[depth] ?? items;
  const item = { text, children: [] };
  parent.push(item);
  stack[depth + 1] = item.children;
}

function parseOutline(raw: string): OutlineSlide[] {
  const slides: Array<Omit<OutlineSlide, "sequence">> = [];
  let current: Omit<OutlineSlide, "sequence"> | null = null;
  let stack: OutlineItem[][] = [];

  for (const line of raw.replace(/\r\n/g, "\n").split("\n")) {
    const h1 = line.match(/^# (.+)$/);
    const h2 = line.match(/^## (.+)$/);
    const bullet = line.match(/^(\s*)- (.+)$/);

    if (h1 || h2) {
      const title = (h1?.[1] ?? h2?.[1] ?? "").trim();
      current = {
        id: headingIds.get(title) ?? slugify(title),
        title,
        items: [],
      };
      slides.push(current);
      stack = [current.items];
      continue;
    }

    if (bullet && current) {
      addBullet(current.items, stack, bulletDepth(bullet[1]), bullet[2].trim());
    }
  }

  return slides.map((slide, index) => ({
    ...slide,
    sequence: index + 1,
  }));
}

async function main() {
  const raw = await fs.readFile(sourcePath, "utf8");
  const slides = parseOutline(raw);
  const title = slides[0]?.title ?? "Vibecoding for Learning Technologists";

  const output = {
    schemaVersion: 2,
    title,
    slug: "vibecoding-for-lts",
    slides,
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
  console.log(`Generated ${path.relative(root, outPath)} with ${slides.length} outline slides.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
