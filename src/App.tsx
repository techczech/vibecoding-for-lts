import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, List, X } from "lucide-react";
import { deckData } from "./data/generated/deck";
import type { OutlineItem, Slide } from "./types";

const noteStorageKey = `${deckData.slug}:n:v2`;

type NotesState = Record<string, string>;

function readStoredNotes(): NotesState {
  try {
    const raw = window.localStorage.getItem(noteStorageKey);
    return raw ? (JSON.parse(raw) as NotesState) : {};
  } catch {
    return {};
  }
}

function renderItems(items: OutlineItem[]) {
  if (!items.length) return null;
  return (
    <ul className="outline-list">
      {items.map((item) => (
        <li key={item.text}>
          <span>{item.text}</span>
          {renderItems(item.children)}
        </li>
      ))}
    </ul>
  );
}

function SlideView({ slide }: { slide: Slide }) {
  return (
    <article className="slide" aria-labelledby={`slide-title-${slide.id}`}>
      <div className="slide-kicker">
        <span>{String(slide.sequence).padStart(2, "0")}</span>
      </div>
      <div className="slide-content">
        <h1 id={`slide-title-${slide.id}`}>{slide.title}</h1>
        {renderItems(slide.items)}
      </div>
    </article>
  );
}

function Overview({
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
  return (
    <aside className="drawer">
      <button className="icon-button" onClick={onClose}>
        <X size={18} aria-hidden="true" />
      </button>
      <nav className="slide-list">
        {slides.map((slide) => (
          <button
            className={slide.id === currentSlide.id ? "active" : ""}
            key={slide.id}
            onClick={() => onSelect(slide.id)}
          >
            <span>{String(slide.sequence).padStart(2, "0")}</span>
            <strong>{slide.title}</strong>
          </button>
        ))}
      </nav>
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
  const [overviewOpen, setOverviewOpen] = useState(false);

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
        setOverviewOpen(false);
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
      if (target?.tagName === "TEXTAREA") return;

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
      if (event.key === "Escape") setOverviewOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, goToIndex, slides.length]);

  return (
    <div className="deck-app">
      <header className="topbar">
        <strong>{deckData.title}</strong>
        <div className="toolbar">
          <button onClick={() => setOverviewOpen(true)}>
            <List size={18} aria-hidden="true" />
          </button>
        </div>
      </header>

      <main className="deck-shell">
        <section className="stage">
          <SlideView slide={currentSlide} />
          <div className="slide-controls">
            <button onClick={() => goToIndex(currentIndex - 1)} disabled={currentIndex === 0}>
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <div className="progress-wrap">
              <span>{String(currentIndex + 1).padStart(2, "0")}</span>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${progress}%` }} />
              </div>
              <span>{String(slides.length).padStart(2, "0")}</span>
            </div>
            <button onClick={() => goToIndex(currentIndex + 1)} disabled={currentIndex === slides.length - 1}>
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </section>

        <aside className="notes-panel">
          <textarea
            value={notes[currentSlide.id] ?? ""}
            onChange={(event) => setNotes((current) => ({ ...current, [currentSlide.id]: event.currentTarget.value }))}
          />
        </aside>
      </main>

      <footer className="statusbar">
        <span>{currentSlide.title}</span>
        <span>{String(currentIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
      </footer>

      {overviewOpen ? (
        <>
          <Overview slides={slides} currentSlide={currentSlide} onClose={() => setOverviewOpen(false)} onSelect={goToSlide} />
          <button className="drawer-scrim" onClick={() => setOverviewOpen(false)} />
        </>
      ) : null}
    </div>
  );
}
