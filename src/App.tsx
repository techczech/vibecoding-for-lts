import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  FileJson,
  FileText,
  List,
  PanelRight,
  Presentation,
  Printer,
  Search,
  StickyNote,
  X,
} from "lucide-react";
import { deckData } from "./data/generated/deck";
import type { Slide, SlideBlock } from "./types";

const noteStorageKey = `${deckData.slug}:participant-notes:v1`;

type NotesState = Record<string, string>;
type Drawer = "overview" | "presenter" | null;

function readStoredNotes(): NotesState {
  try {
    const raw = window.localStorage.getItem(noteStorageKey);
    return raw ? (JSON.parse(raw) as NotesState) : {};
  } catch {
    return {};
  }
}

function downloadText(fileName: string, content: string, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  anchor.click();
  URL.revokeObjectURL(url);
}

function markdownParagraphs(text: string) {
  return text
    .split(/\n{2,}/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function BlockRenderer({ block }: { block: SlideBlock }) {
  if (block.type === "callout") {
    return (
      <aside className={`callout callout-${block.tone ?? "plain"}`}>
        <strong>{block.title}</strong>
        <p>{block.body}</p>
      </aside>
    );
  }

  if (block.type === "bullets") {
    return (
      <div className="slide-block">
        <h3>{block.title}</h3>
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  if (block.type === "process") {
    return (
      <ol className="process-list">
        {block.steps.map((step) => (
          <li key={step.label}>
            <strong>{step.label}</strong>
            <span>{step.detail}</span>
          </li>
        ))}
      </ol>
    );
  }

  if (block.type === "columns") {
    return (
      <div className="columns-block">
        {block.columns.map((column) => (
          <section key={column.title}>
            <h3>{column.title}</h3>
            <ul>
              {column.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    );
  }

  if (block.type === "exercise") {
    return (
      <div className="exercise-block">
        <h3>{block.title}</h3>
        <ol>
          {block.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <div className="reflection-block">
      {block.questions.map((question) => (
        <p key={question}>{question}</p>
      ))}
    </div>
  );
}

function SlideView({ slide }: { slide: Slide }) {
  return (
    <article className={`slide slide-${slide.layout}`} aria-labelledby={`slide-title-${slide.id}`}>
      <div className="slide-kicker">
        <span>{String(slide.sequence).padStart(2, "0")}</span>
        <span>{slide.sectionTitle}</span>
        {slide.reviewStatus ? <span className="review-pill">Review</span> : null}
      </div>
      <div className="slide-content">
        <h1 id={`slide-title-${slide.id}`}>{slide.title}</h1>
        <div className="slide-body-copy">
          {markdownParagraphs(slide.body).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="slide-blocks">
          {(slide.blocks ?? []).map((block, index) => (
            <BlockRenderer block={block} key={`${block.type}-${index}`} />
          ))}
        </div>
      </div>
    </article>
  );
}

function NotesPanel({
  slide,
  value,
  onChange,
}: {
  slide: Slide;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <aside className="notes-panel" aria-label="Participant notes">
      <div className="panel-heading">
        <StickyNote size={18} aria-hidden="true" />
        <h2>Notes</h2>
      </div>
      <p className="note-prompt">{slide.participantPrompt}</p>
      <textarea
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
        aria-label={`Notes for slide ${slide.sequence}`}
        placeholder="Write session notes here..."
      />
    </aside>
  );
}

function OverviewDrawer({
  slides,
  currentSlide,
  onClose,
  onSelect,
}: {
  slides: Slide[];
  currentSlide: Slide;
  onClose: () => void;
  onSelect: (slideId: string) => void;
}) {
  const [query, setQuery] = useState("");
  const normalisedQuery = query.trim().toLowerCase();
  const results = slides.filter((slide) => {
    if (!normalisedQuery) return true;
    return `${slide.title} ${slide.navTitle ?? ""} ${slide.sectionTitle} ${slide.body}`
      .toLowerCase()
      .includes(normalisedQuery);
  });

  return (
    <aside className="drawer" aria-label="Slide overview">
      <div className="drawer-header">
        <div>
          <span>Overview</span>
          <h2>{deckData.title}</h2>
        </div>
        <button className="icon-button" onClick={onClose} aria-label="Close overview">
          <X size={18} aria-hidden="true" />
        </button>
      </div>
      <label className="search-field">
        <Search size={17} aria-hidden="true" />
        <input
          value={query}
          onChange={(event) => setQuery(event.currentTarget.value)}
          placeholder="Search slides"
        />
      </label>
      <nav className="slide-list" aria-label="Slides">
        {results.map((slide) => (
          <button
            className={slide.id === currentSlide.id ? "active" : ""}
            key={slide.id}
            onClick={() => onSelect(slide.id)}
          >
            <span>{String(slide.sequence).padStart(2, "0")}</span>
            <strong>{slide.navTitle ?? slide.title}</strong>
            <small>{slide.sectionTitle}</small>
          </button>
        ))}
      </nav>
    </aside>
  );
}

function PresenterDrawer({ slide, onClose }: { slide: Slide; onClose: () => void }) {
  return (
    <aside className="drawer presenter-drawer" aria-label="Presenter notes">
      <div className="drawer-header">
        <div>
          <span>Presenter Notes</span>
          <h2>{slide.navTitle ?? slide.title}</h2>
        </div>
        <button className="icon-button" onClick={onClose} aria-label="Close presenter notes">
          <X size={18} aria-hidden="true" />
        </button>
      </div>
      <div className="presenter-copy">
        <p>{slide.notes}</p>
        {slide.exerciseId ? (
          <p>
            Exercise: <code>{slide.exerciseId}</code>
          </p>
        ) : null}
        <p>
          Source: <code>{slide.sourcePath}</code>
        </p>
      </div>
    </aside>
  );
}

export default function App() {
  const slides = deckData.slides;
  const [currentIndex, setCurrentIndex] = useState(() => {
    const fromHash = window.location.hash.replace("#", "");
    const index = slides.findIndex((slide) => slide.id === fromHash);
    return index >= 0 ? index : 0;
  });
  const [notes, setNotes] = useState<NotesState>(() => readStoredNotes());
  const [drawer, setDrawer] = useState<Drawer>(null);

  const currentSlide = slides[currentIndex] ?? slides[0];
  const progress = slides.length ? ((currentIndex + 1) / slides.length) * 100 : 0;

  const goToIndex = useCallback(
    (nextIndex: number) => {
      const bounded = Math.min(slides.length - 1, Math.max(0, nextIndex));
      setCurrentIndex(bounded);
      window.history.replaceState(null, "", `#${slides[bounded].id}`);
    },
    [slides],
  );

  const goToSlide = useCallback(
    (slideId: string) => {
      const index = slides.findIndex((slide) => slide.id === slideId);
      if (index >= 0) {
        goToIndex(index);
        setDrawer(null);
      }
    },
    [goToIndex, slides],
  );

  useEffect(() => {
    window.localStorage.setItem(noteStorageKey, JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      if (target?.tagName === "TEXTAREA" || target?.tagName === "INPUT") return;

      if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault();
        goToIndex(currentIndex + 1);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToIndex(currentIndex - 1);
      }
      if (event.key === "Home") goToIndex(0);
      if (event.key === "End") goToIndex(slides.length - 1);
      if (event.key.toLowerCase() === "o") setDrawer("overview");
      if (event.key.toLowerCase() === "n") setDrawer("presenter");
      if (event.key === "Escape") setDrawer(null);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, goToIndex, slides.length]);

  const notePayload = useMemo(
    () =>
      slides.map((slide) => ({
        slideId: slide.id,
        sequence: slide.sequence,
        section: slide.sectionTitle,
        title: slide.title,
        prompt: slide.participantPrompt ?? "",
        note: notes[slide.id] ?? "",
      })),
    [notes, slides],
  );

  function exportJson() {
    downloadText(
      deckData.delivery.noteExport.jsonFileName,
      JSON.stringify(
        {
          schemaVersion: 1,
          deck: {
            title: deckData.title,
            slug: deckData.slug,
          },
          exportedAt: new Date().toISOString(),
          notes: notePayload,
        },
        null,
        2,
      ),
      "application/json",
    );
  }

  function exportMarkdown() {
    const body = [
      `# ${deckData.title} Notes`,
      "",
      `Exported: ${new Date().toISOString()}`,
      "",
      ...notePayload.flatMap((entry) => [
        `## ${String(entry.sequence).padStart(2, "0")}. ${entry.title}`,
        "",
        `Section: ${entry.section}`,
        "",
        entry.prompt ? `Prompt: ${entry.prompt}` : "",
        "",
        entry.note || "_No notes recorded._",
        "",
      ]),
    ].join("\n");
    downloadText(deckData.delivery.noteExport.markdownFileName, body, "text/markdown");
  }

  if (!currentSlide) {
    return <main className="empty-state">No slides generated. Run `bun run build:content`.</main>;
  }

  return (
    <div className="deck-app">
      <header className="topbar">
        <div className="brand">
          <Presentation size={22} aria-hidden="true" />
          <div>
            <span>AI Competency Centre / OERC</span>
            <strong>{deckData.title}</strong>
          </div>
        </div>
        <div className="toolbar" aria-label="Presentation controls">
          <button onClick={() => setDrawer("overview")} title="Overview">
            <List size={18} aria-hidden="true" />
            <span>Overview</span>
          </button>
          <button onClick={() => setDrawer("presenter")} title="Presenter notes">
            <PanelRight size={18} aria-hidden="true" />
            <span>Presenter</span>
          </button>
          <button onClick={() => window.print()} title="Print handout">
            <Printer size={18} aria-hidden="true" />
            <span>Print</span>
          </button>
          <button onClick={exportMarkdown} title="Export notes as Markdown">
            <FileText size={18} aria-hidden="true" />
            <span>Markdown</span>
          </button>
          <button onClick={exportJson} title="Export notes as JSON">
            <FileJson size={18} aria-hidden="true" />
            <span>JSON</span>
          </button>
        </div>
      </header>

      <main className="deck-shell">
        <section className="stage" aria-live="polite">
          <SlideView slide={currentSlide} />
          <div className="slide-controls">
            <button onClick={() => goToIndex(currentIndex - 1)} disabled={currentIndex === 0}>
              <ChevronLeft size={18} aria-hidden="true" />
              <span>Back</span>
            </button>
            <div className="progress-wrap" aria-label={`Slide ${currentIndex + 1} of ${slides.length}`}>
              <span>{String(currentIndex + 1).padStart(2, "0")}</span>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${progress}%` }} />
              </div>
              <span>{String(slides.length).padStart(2, "0")}</span>
            </div>
            <button onClick={() => goToIndex(currentIndex + 1)} disabled={currentIndex === slides.length - 1}>
              <span>Next</span>
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </section>

        <NotesPanel
          slide={currentSlide}
          value={notes[currentSlide.id] ?? ""}
          onChange={(value) => setNotes((current) => ({ ...current, [currentSlide.id]: value }))}
        />
      </main>

      <footer className="statusbar">
        <span>{currentSlide.sectionTitle}</span>
        <span>{currentSlide.navTitle ?? currentSlide.title}</span>
        <span>{deckData.subtitle}</span>
      </footer>

      {drawer === "overview" ? (
        <OverviewDrawer slides={slides} currentSlide={currentSlide} onClose={() => setDrawer(null)} onSelect={goToSlide} />
      ) : null}
      {drawer === "presenter" ? <PresenterDrawer slide={currentSlide} onClose={() => setDrawer(null)} /> : null}
      {drawer ? <button className="drawer-scrim" aria-label="Close drawer" onClick={() => setDrawer(null)} /> : null}
      <div className="export-live-region" aria-live="polite">
        <Download size={1} aria-hidden="true" />
      </div>
    </div>
  );
}
