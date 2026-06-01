# Publication Checklist

Use this before publishing the repository, sharing the GitHub Pages URL, or
using the deck in a live session.

## Privacy

- No Canvas API tokens or copied `.env` files.
- No account screenshots.
- No participant data.
- No private local paths.
- No private draft notes beyond the public-safe outline.

## Factual Freshness

- Refresh current model examples.
- Refresh current harness examples.
- Test Google AI Studio steps.
- Test Codex local-folder steps.
- Test Canvas sandbox steps with a non-production course.
- Test single-file HTML upload and embed in Canvas.

## Build

```bash
bun install
bun run build
bun run audit:single
```

## Manual Checks

- Open `dist/index.html` from disk.
- Move through slides with buttons and keyboard.
- Search in the overview drawer.
- Type notes for at least two slides.
- Export notes as Markdown.
- Export notes as JSON.
- Print or preview handout mode.
