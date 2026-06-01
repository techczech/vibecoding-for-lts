export type OutlineItem = {
  text: string;
  children: OutlineItem[];
};

export type Slide = {
  id: string;
  title: string;
  items: OutlineItem[];
  sequence: number;
};

export type DeckData = {
  schemaVersion: number;
  title: string;
  slug: string;
  slides: Slide[];
  generatedAt: string;
};
