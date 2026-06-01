import type { DeckData } from "../../types";

export const deckData = {
  "schemaVersion": 1,
  "title": "Vibecoding for Learning Technologists",
  "subtitle": "From AI tools to AI-supported course work",
  "slug": "vibecoding-for-lts",
  "session": {
    "format": "hands-on workshop",
    "duration": "90 minutes",
    "audience": "learning technologists and digital education colleagues",
    "owner": "Dominik Lukes",
    "affiliation": "AI Competency Centre / OERC, University of Oxford"
  },
  "delivery": {
    "pageTitle": "Vibecoding for Learning Technologists",
    "preferredExtension": ".html",
    "githubPages": true,
    "noteExport": {
      "jsonFileName": "vibecoding-for-lts-notes.json",
      "markdownFileName": "vibecoding-for-lts-notes.md"
    }
  },
  "theme": {
    "colors": {
      "navy": "#002147",
      "ink": "#141821",
      "paper": "#f6f7f8",
      "surface": "#ffffff",
      "line": "#d7dde5",
      "muted": "#647084",
      "magenta": "#9d2f62",
      "teal": "#177e89",
      "amber": "#b7791f"
    },
    "typography": {
      "heading": "system-ui",
      "body": "system-ui"
    },
    "layout": {
      "slideRatio": "16 / 9",
      "notesPanel": true,
      "overviewSearch": true,
      "printHandout": true
    }
  },
  "sections": [
    {
      "id": "orientation",
      "title": "Orientation",
      "slides": [
        "title",
        "current-state",
        "role-evolution",
        "model-and-harness"
      ]
    },
    {
      "id": "landscape",
      "title": "Current Landscape",
      "slides": [
        "model-landscape-refresh",
        "harnesses",
        "workshop-path"
      ]
    },
    {
      "id": "studio",
      "title": "Google AI Studio",
      "slides": [
        "ai-studio-build",
        "ai-studio-reflection"
      ]
    },
    {
      "id": "codex",
      "title": "Codex On The Desktop",
      "slides": [
        "codex-downloads",
        "codex-reflection"
      ]
    },
    {
      "id": "canvas",
      "title": "Canvas And Course Work",
      "slides": [
        "canvas-sandbox",
        "canvas-reflection",
        "single-html-canvas"
      ]
    },
    {
      "id": "practice",
      "title": "Practices",
      "slides": [
        "codex-practices",
        "closing"
      ]
    }
  ],
  "slides": [
    {
      "id": "title",
      "section": "orientation",
      "navTitle": "Vibecoding for Learning Technologists",
      "title": "Vibecoding for Learning Technologists",
      "layout": "title",
      "blocks": [
        {
          "type": "callout",
          "tone": "key",
          "title": "Today's promise",
          "body": "We will move from asking AI questions to asking it to build, inspect, connect, and publish usable course materials."
        }
      ],
      "body": "Learning technologists are about to meet AI as a practical colleague in the\ncourse production stack.",
      "sourcePath": "content/slides/001-title.md",
      "sectionId": "orientation",
      "sectionTitle": "Orientation",
      "sequence": 1
    },
    {
      "id": "current-state",
      "section": "orientation",
      "navTitle": "What is the current state of AI",
      "title": "What is the current state of AI",
      "layout": "statement",
      "blocks": [
        {
          "type": "bullets",
          "title": "What has changed",
          "items": [
            "Agents over chatbots for multi-step work",
            "Coding agents running on the desktop",
            "Models connected to files, browsers, APIs, and course platforms",
            "Small custom tools becoming normal workshop artefacts"
          ]
        }
      ],
      "body": "The centre of gravity is moving from answers in a box to AI-supported work in\nfolders, browsers, and platforms.",
      "sourcePath": "content/slides/002-current-state.md",
      "sectionId": "orientation",
      "sectionTitle": "Orientation",
      "sequence": 2
    },
    {
      "id": "role-evolution",
      "section": "orientation",
      "navTitle": "Evolution of roles",
      "title": "Evolution of roles",
      "layout": "process",
      "blocks": [
        {
          "type": "process",
          "steps": [
            {
              "label": "Oracle",
              "detail": "Answers questions."
            },
            {
              "label": "Assistant",
              "detail": "Takes dictation and drafts."
            },
            {
              "label": "Researcher",
              "detail": "Searches, compares, and summarises."
            },
            {
              "label": "Tool maker",
              "detail": "Builds small apps and learning objects."
            },
            {
              "label": "Tool user",
              "detail": "Operates local and web tools on your behalf."
            }
          ]
        }
      ],
      "body": "The role change matters because each step asks learning technologists to support\nnew expectations, not just new prompts.",
      "sourcePath": "content/slides/003-role-evolution.md",
      "sectionId": "orientation",
      "sectionTitle": "Orientation",
      "sequence": 3
    },
    {
      "id": "model-and-harness",
      "section": "orientation",
      "navTitle": "Things you should know",
      "title": "Things you should know",
      "layout": "comparison",
      "blocks": [
        {
          "type": "columns",
          "columns": [
            {
              "title": "Model",
              "items": [
                "Language, vision, code, and reasoning capability",
                "Tool-use planning",
                "Reasoning about computer state"
              ]
            },
            {
              "title": "Harness",
              "items": [
                "Runs the model in a loop",
                "Connects to files, browsers, APIs, and terminals",
                "Decides what the model can actually touch"
              ]
            }
          ]
        }
      ],
      "body": "Most confusion disappears once we ask whether we are discussing the intelligence\ninside the model or the surrounding machinery that lets it act.",
      "sourcePath": "content/slides/004-model-and-harness.md",
      "sectionId": "orientation",
      "sectionTitle": "Orientation",
      "sequence": 4
    },
    {
      "id": "model-landscape-refresh",
      "section": "landscape",
      "navTitle": "Current top models",
      "title": "Current top models",
      "layout": "checklist",
      "reviewStatus": "refresh-before-session",
      "blocks": [
        {
          "type": "callout",
          "tone": "caution",
          "title": "Refresh near delivery",
          "body": "Model names, tiers, context windows, prices, and benchmark positions change too quickly to freeze in early prep."
        },
        {
          "type": "bullets",
          "title": "Use the final list to discuss",
          "items": [
            "Capability",
            "Cost and latency",
            "Tool use",
            "Availability through institutional accounts",
            "Reliability for education workflows"
          ]
        }
      ],
      "body": "Treat model ranking as a reading practice, not a memorisation exercise.",
      "sourcePath": "content/slides/005-model-landscape-refresh.md",
      "sectionId": "landscape",
      "sectionTitle": "Current Landscape",
      "sequence": 5
    },
    {
      "id": "harnesses",
      "section": "landscape",
      "navTitle": "Current top harnesses",
      "title": "Current top harnesses",
      "layout": "comparison",
      "blocks": [
        {
          "type": "columns",
          "columns": [
            {
              "title": "Desktop",
              "items": [
                "OpenAI Codex",
                "Claude Code",
                "Google Antigravity",
                "OpenCode and similar terminals"
              ]
            },
            {
              "title": "Web",
              "items": [
                "Google AI Studio",
                "Lovable",
                "Replit",
                "Canvas and LMS integrations"
              ]
            }
          ]
        }
      ],
      "body": "The same model can feel completely different when the harness changes the files,\ntools, permissions, and feedback loop around it.",
      "sourcePath": "content/slides/006-harnesses.md",
      "sectionId": "landscape",
      "sectionTitle": "Current Landscape",
      "sequence": 6
    },
    {
      "id": "workshop-path",
      "section": "landscape",
      "navTitle": "Getting started",
      "title": "Getting started",
      "layout": "process",
      "blocks": [
        {
          "type": "process",
          "steps": [
            {
              "label": "1. Build",
              "detail": "Make an H5P-like object in Google AI Studio."
            },
            {
              "label": "2. Inspect",
              "detail": "Use Codex on a local folder."
            },
            {
              "label": "3. Connect",
              "detail": "Use Codex with a Canvas sandbox."
            },
            {
              "label": "4. Package",
              "detail": "Turn a web activity into one HTML file."
            },
            {
              "label": "5. Practise",
              "detail": "Set up repeatable working habits."
            }
          ]
        }
      ],
      "body": "The order is deliberate: first see what is possible, then make it operational.",
      "sourcePath": "content/slides/007-workshop-path.md",
      "sectionId": "landscape",
      "sectionTitle": "Current Landscape",
      "sequence": 7
    },
    {
      "id": "ai-studio-build",
      "section": "studio",
      "navTitle": "Step 1: Google AI Studio",
      "title": "Step 1: Google AI Studio",
      "layout": "exercise",
      "exerciseId": "01-ai-studio-h5p",
      "blocks": [
        {
          "type": "exercise",
          "title": "Hands-on task",
          "steps": [
            "Open Google AI Studio.",
            "Choose a familiar H5P-style interaction.",
            "Ask for a single-page web version.",
            "Test whether the interaction teaches what it should."
          ]
        }
      ],
      "body": "The point is not to replace H5P. The point is to feel how quickly a custom\nlearning object can move from idea to testable prototype.",
      "sourcePath": "content/slides/008-ai-studio-build.md",
      "sectionId": "studio",
      "sectionTitle": "Google AI Studio",
      "sequence": 8
    },
    {
      "id": "ai-studio-reflection",
      "section": "studio",
      "navTitle": "Reflection on Google AI Studio",
      "title": "Reflection on Google AI Studio",
      "layout": "reflection",
      "blocks": [
        {
          "type": "reflection",
          "questions": [
            "What can be done with this?",
            "What does it mean for learning technologists?",
            "What knowledge is required?",
            "What infrastructure is required?",
            "What alternatives already exist?"
          ]
        }
      ],
      "body": "The practical question is not whether the prototype runs. It is whether the\nteam can judge, improve, maintain, and place it responsibly.",
      "sourcePath": "content/slides/009-ai-studio-reflection.md",
      "sectionId": "studio",
      "sectionTitle": "Google AI Studio",
      "sequence": 9
    },
    {
      "id": "codex-downloads",
      "section": "codex",
      "navTitle": "Step 2: Codex",
      "title": "Step 2: Codex",
      "layout": "exercise",
      "exerciseId": "02-codex-downloads-visualisation",
      "blocks": [
        {
          "type": "exercise",
          "title": "Hands-on task",
          "steps": [
            "Open a local project folder in Codex.",
            "Ask Codex to inspect the files before acting.",
            "Ask for an organisation plan and a simple visualisation.",
            "Review the plan before allowing file changes."
          ]
        }
      ],
      "body": "This is where AI stops being a text box and becomes an agent reading the shape\nof local work.",
      "sourcePath": "content/slides/010-codex-downloads.md",
      "sectionId": "codex",
      "sectionTitle": "Codex On The Desktop",
      "sequence": 10
    },
    {
      "id": "codex-reflection",
      "section": "codex",
      "navTitle": "Reflections on Codex",
      "title": "Reflections on Codex",
      "layout": "reflection",
      "blocks": [
        {
          "type": "reflection",
          "questions": [
            "What can be done with this?",
            "How does it build on the AI Studio experience?",
            "What knowledge is required?",
            "What infrastructure is required?",
            "What should remain human-reviewed?"
          ]
        }
      ],
      "body": "Desktop agents make local work visible to AI, so the quality of folders,\ninstructions, and review habits starts to matter.",
      "sourcePath": "content/slides/011-codex-reflection.md",
      "sectionId": "codex",
      "sectionTitle": "Codex On The Desktop",
      "sequence": 11
    },
    {
      "id": "canvas-sandbox",
      "section": "canvas",
      "navTitle": "Step 3: Manage a Canvas course with Codex",
      "title": "Step 3: Manage a Canvas course with Codex",
      "layout": "exercise",
      "exerciseId": "03-canvas-sandbox-page",
      "blocks": [
        {
          "type": "exercise",
          "title": "Hands-on task",
          "steps": [
            "Create a project folder for the Canvas work.",
            "Store the Canvas API token outside committed files.",
            "Ask Codex to draft a page for a sandbox course.",
            "Review the page before publishing."
          ]
        },
        {
          "type": "callout",
          "tone": "caution",
          "title": "Safety boundary",
          "body": "Sandbox first. Scoped credentials. No live student data."
        }
      ],
      "body": "Platform work is where agent power becomes institutional responsibility.",
      "sourcePath": "content/slides/012-canvas-sandbox.md",
      "sectionId": "canvas",
      "sectionTitle": "Canvas And Course Work",
      "sequence": 12
    },
    {
      "id": "canvas-reflection",
      "section": "canvas",
      "navTitle": "Reflections on Codex and Canvas",
      "title": "Reflections on Codex and Canvas",
      "layout": "reflection",
      "blocks": [
        {
          "type": "reflection",
          "questions": [
            "What can be done with this?",
            "What does it mean for learning technologists?",
            "What does it mean for Canvas users?",
            "What new knowledge do Canvas users need?",
            "Where should the support boundary sit?"
          ]
        }
      ],
      "body": "The new capability is not just content creation. It is course operations with\nautomation close to the platform.",
      "sourcePath": "content/slides/013-canvas-reflection.md",
      "sectionId": "canvas",
      "sectionTitle": "Canvas And Course Work",
      "sequence": 13
    },
    {
      "id": "single-html-canvas",
      "section": "canvas",
      "navTitle": "Step 4: Bring it all together",
      "title": "Step 4: Bring it all together",
      "layout": "exercise",
      "exerciseId": "04-single-html-canvas-embed",
      "blocks": [
        {
          "type": "exercise",
          "title": "Hands-on task",
          "steps": [
            "Download or copy the generated web activity into a folder.",
            "Open the folder in Codex.",
            "Ask Codex to make a single-file HTML version.",
            "Upload the file to Canvas and embed it in a page."
          ]
        },
        {
          "type": "bullets",
          "title": "Support questions",
          "items": [
            "Accessibility",
            "Versioning",
            "Browser compatibility",
            "Who fixes it when the course changes?"
          ]
        }
      ],
      "body": "Single-file HTML can make small custom activities portable, but portability is\nnot the same as governance.",
      "sourcePath": "content/slides/014-single-html-canvas.md",
      "sectionId": "canvas",
      "sectionTitle": "Canvas And Course Work",
      "sequence": 14
    },
    {
      "id": "codex-practices",
      "section": "practice",
      "navTitle": "Reflections on Codex and Canvas part 2",
      "title": "Reflections on Codex and Canvas part 2",
      "layout": "reflection",
      "blocks": [
        {
          "type": "reflection",
          "questions": [
            "What will be the new role of UI / backend?",
            "How can we support this use of Canvas?",
            "What infrastructure do we need to take advantage of this?",
            "What more knowledge to LTs need?"
          ]
        }
      ],
      "body": "The reflection returns to Canvas after the single HTML step.",
      "sourcePath": "content/slides/015-codex-practices.md",
      "sectionId": "practice",
      "sectionTitle": "Practices",
      "sequence": 15
    },
    {
      "id": "closing",
      "section": "practice",
      "navTitle": "Step 5: Set up good Codex practices",
      "title": "Step 5: Set up good Codex practices",
      "layout": "checklist",
      "blocks": [
        {
          "type": "bullets",
          "title": "Getting started",
          "items": [
            "Work in folders",
            "Keep an AGENTS.md file in every folder that describes what the folder is for",
            "Keep instructions in Markdown files",
            "Ask Codex to keep changelog",
            "Set up skills for repeatable actions",
            "Learn from other people's skills"
          ]
        }
      ],
      "body": "Set up good Codex practices.",
      "sourcePath": "content/slides/016-closing.md",
      "sectionId": "practice",
      "sectionTitle": "Practices",
      "sequence": 16
    }
  ],
  "generatedAt": "2026-06-01T08:53:57.590Z"
} satisfies DeckData;
