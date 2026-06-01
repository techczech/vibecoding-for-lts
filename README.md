# Vibecoding for Learning Technologists

This repository contains a browser-native presentation, participant note-taking
surface, exercises, and synthetic sample files for a training session on AI
tool making and tool use in learning technology work.

The main deliverable is a **single HTML presentation**. Participants can move
through the session, write notes against each slide, and export their notes as
Markdown or JSON.

## Contents

- [Start here](#start-here)
- [Repository layout](#repository-layout)
- [Build and preview](#build-and-preview)
- [GitHub Pages](#github-pages)
- [Publication checks](#publication-checks)

## Start Here

1. Review the canonical outline in [content/source-outline.md](content/source-outline.md).
2. Edit deck metadata in [content/deck.yml](content/deck.yml).
3. Edit slide files in [content/slides](content/slides).
4. Use the exercises in [exercises](exercises).
5. Use synthetic participant practice files in [sample-files](sample-files).

## Repository Layout

- **`content/`** holds the editable deck source.
- **`src/`** holds the React presentation app.
- **`exercises/`** holds facilitator-ready exercise sheets.
- **`sample-files/`** holds synthetic files for live practice.
- **`docs/`** holds planning and publication notes.
- **`dist/index.html`** is the packaged single-file output after `bun run build`.

## Build And Preview

Install dependencies:

```bash
bun install
```

Run the local site:

```bash
bun run dev
```

Build the packaged presentation:

```bash
bun run build
```

Audit the single-file output:

```bash
bun run audit:single
```

## GitHub Pages

The workflow in [.github/workflows/pages.yml](.github/workflows/pages.yml)
builds the Vite site and deploys `dist/` to GitHub Pages on every push to
`main`.

The deployed page is still one HTML app. The source Markdown and sample files
stay in the repository so the session can be maintained after delivery.

## Publication Checks

Before making the repository public or sharing the Pages URL:

- **Refresh factual claims** about current models, harnesses, product names, and
  Canvas behaviour.
- **Check privacy**: no private notes, local paths, participant data, tokens, or
  account screenshots should be committed.
- **Test the deck from disk** by opening `dist/index.html` with `file://`.
- **Export notes** as both Markdown and JSON and confirm the files contain the
  expected slide IDs and note text.
- **Run the audit** with `bun run audit:single`.

## Source Note

This repository was scaffolded from a private draft outline. The committed
source keeps the session structure but does not commit the private vault path
or private provenance.
