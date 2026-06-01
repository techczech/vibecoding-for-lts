## Project

- Mode: hybrid; primary research/content, supporting web development and project management.
- Scope: public-safe training repo for a browser-native slide deck, participant notes, exercises, and sample practice files.
- Users: learning technologists.
- Status: draft scaffold; refresh model/tool claims before publish.

## First Move

- New substantive work: create or update `_TASK-LOG/<YYYY-MM-DD>-<slug>.md`.
- Before publishing: run privacy and factual freshness pass.

## Commands

- Create task: `python3 _AGENT-INSTRUCTIONS/scripts/new-task.py "Short task title"`.
- Install deps: `bun install`.
- Build content data: `bun run build:content`.
- Dev site: `bun run dev`.
- Package site: `bun run build`.
- Audit single HTML: `bun run audit:single`.
- Audit instructions: `python3 ~/gitrepos/02_workskills/agents-md-streamline/scripts/agents_md_audit.py AGENTS.md`.

## Routing

- Canonical deck metadata: `content/deck.yml`.
- Slide source: `content/slides/`.
- Browser app source: `src/`.
- Generated data: `src/data/generated/`; rebuild, do not hand-edit.
- Participant exercises: `exercises/`.
- Synthetic practice files: `sample-files/`.
- Project docs: `docs/`.
- GitHub Pages workflow: `.github/workflows/pages.yml`.
- Agent-only procedure/cache: `_AGENT-INSTRUCTIONS/`.
- Operational task state: `_TASK-LOG/`.

## Constraints

- Public-safe by default. Do not commit private notes, participant data, API keys, Canvas tokens, account screenshots, or private local paths.
- Private vault draft: do not commit source path or verbatim private note.
- Treat current model/tool lists as dated claims; verify near delivery before presenting as current.
- Keep editable content in Markdown/YAML; compile to generated TypeScript before rendering.
- Keep participant-facing prose human-readable: short paragraphs, verbs, clear actions.

## Build

- Build normal Vite/React site first; single HTML is the packaged output.
- Packaged HTML: no fetches, external fonts, CDNs, root-absolute assets, or SPA path routing.
- Preserve note export contract when changing note UI: JSON plus Markdown export.
- Keep sample files synthetic unless explicit permission says otherwise.

## Self-Healing

On user correction: classify, route, optionally promote.
Protocol: `_AGENT-INSTRUCTIONS/self-healing.md`.

## Verification

- Run `bun run build` after code/content changes.
- Run `bun run audit:single` before sharing the HTML.
- Test `file://dist/index.html`: slides, notes, exports, drawer search, print.
- Run instruction audit after changing `AGENTS.md`.
