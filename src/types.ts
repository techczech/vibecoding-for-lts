export type Tone = "key" | "caution" | "plain";

export type SlideBlock =
  | {
      type: "callout";
      tone?: Tone;
      title: string;
      body: string;
    }
  | {
      type: "bullets";
      title: string;
      items: string[];
    }
  | {
      type: "process";
      steps: Array<{ label: string; detail: string }>;
    }
  | {
      type: "columns";
      columns: Array<{ title: string; items: string[] }>;
    }
  | {
      type: "exercise";
      title: string;
      steps: string[];
    }
  | {
      type: "reflection";
      questions: string[];
    };

export type Slide = {
  id: string;
  section: string;
  sectionId: string;
  sectionTitle: string;
  navTitle?: string;
  title: string;
  layout: string;
  notes?: string;
  participantPrompt?: string;
  exerciseId?: string;
  reviewStatus?: string;
  blocks?: SlideBlock[];
  body: string;
  sourcePath: string;
  sequence: number;
};

export type DeckData = {
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
  theme: Record<string, unknown>;
  sections: Array<{
    id: string;
    title: string;
    slides: string[];
  }>;
  slides: Slide[];
  generatedAt: string;
};
