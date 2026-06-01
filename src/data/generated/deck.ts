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
      "navTitle": "Title",
      "title": "Vibecoding for Learning Technologists",
      "layout": "title",
      "notes": "Frame this as a practical session about what becomes possible when AI can make tools and use tools inside real education workflows.",
      "participantPrompt": "What course-support task would you like AI to help with by the end of the session?",
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
      "navTitle": "Current state",
      "title": "The interesting shift is not just better chat.",
      "layout": "statement",
      "notes": "Name the shift gently: chatbots remain useful, but the live question is what happens when AI can act through tools.",
      "participantPrompt": "Where do you currently draw the line between advice, automation, and delegated work?",
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
      "navTitle": "Roles",
      "title": "AI roles keep accumulating.",
      "layout": "process",
      "notes": "Do not present these as historical eras that replace each other. They stack.",
      "participantPrompt": "Which role is already useful to you, and which one feels least familiar?",
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
      "navTitle": "Model + harness",
      "title": "Separate the model from the harness.",
      "layout": "comparison",
      "notes": "This is the conceptual anchor for the session. It makes Codex, Claude Code, AI Studio, Lovable, and Canvas workflows easier to compare.",
      "participantPrompt": "When an AI tool impresses you, is the model impressive, the harness impressive, or both?",
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
      "navTitle": "Model refresh",
      "title": "The model list is a freshness task.",
      "layout": "checklist",
      "reviewStatus": "refresh-before-session",
      "notes": "The draft outline named specific current top models. Refresh this slide shortly before delivery rather than treating those names as stable.",
      "participantPrompt": "What evidence would make you trust a claim that one model is better for your work?",
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
      "navTitle": "Harnesses",
      "title": "Harnesses decide what AI can do in practice.",
      "layout": "comparison",
      "notes": "Use examples familiar to participants but avoid turning this into a vendor ranking.",
      "participantPrompt": "Which harness category would be easiest to introduce safely in your team?",
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
      "navTitle": "Workshop path",
      "title": "The workshop moves from playful build to platform workflow.",
      "layout": "process",
      "notes": "Preview the hands-on sequence so participants can attach each demo to a purpose.",
      "participantPrompt": "Which step feels most directly connected to your current work?",
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
      "navTitle": "AI Studio build",
      "title": "Step 1: make a small learning object.",
      "layout": "exercise",
      "exerciseId": "01-ai-studio-h5p",
      "notes": "Ask participants to think of a familiar H5P activity, then ask AI Studio to recreate the interaction as a small web app.",
      "participantPrompt": "What activity pattern would you ask AI Studio to recreate?",
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
      "navTitle": "Studio reflection",
      "title": "Reflection: what did tool making require?",
      "layout": "reflection",
      "notes": "Bring discussion back to learning design, governance, accessibility, and support.",
      "participantPrompt": "What knowledge did the prototype assume you already had?",
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
      "navTitle": "Codex folder",
      "title": "Step 2: let Codex work inside a folder.",
      "layout": "exercise",
      "exerciseId": "02-codex-downloads-visualisation",
      "notes": "Use synthetic sample files first. The private Downloads folder is a useful metaphor, not a public exercise dataset.",
      "participantPrompt": "What folder on your machine would benefit from analysis, cleanup, or visualisation?",
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
      "navTitle": "Codex reflection",
      "title": "Reflection: what changed on the desktop?",
      "layout": "reflection",
      "notes": "Connect this back to trust, review, permissions, and local working habits.",
      "participantPrompt": "What would make you comfortable letting an agent touch local files?",
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
      "navTitle": "Canvas sandbox",
      "title": "Step 3: connect Codex to a Canvas sandbox.",
      "layout": "exercise",
      "exerciseId": "03-canvas-sandbox-page",
      "notes": "Use a sandbox course and a scoped API token. Do not demonstrate with live student data.",
      "participantPrompt": "Which Canvas task would be safe enough to test in a sandbox first?",
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
      "navTitle": "Canvas reflection",
      "title": "Reflection: what changes for Canvas users?",
      "layout": "reflection",
      "notes": "Use this to surface the new support questions: credentials, templates, approvals, accessibility, and rollback.",
      "participantPrompt": "What would a safe Canvas agent workflow need in your context?",
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
      "navTitle": "Single HTML",
      "title": "Step 4: package the activity as one HTML file.",
      "layout": "exercise",
      "exerciseId": "04-single-html-canvas-embed",
      "notes": "This is the bridge between AI-made web prototypes and deployable learning materials.",
      "participantPrompt": "What makes a single HTML activity easier or harder to support than a normal web app?",
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
      "navTitle": "Practices",
      "title": "Step 5: make Codex work repeatable.",
      "layout": "checklist",
      "notes": "This is the bridge to sustainable practice rather than one-off demos.",
      "participantPrompt": "Which one habit would make your next agent session safer or easier?",
      "blocks": [
        {
          "type": "bullets",
          "title": "Working habits",
          "items": [
            "Work in folders.",
            "Keep an AGENTS.md file in every project.",
            "Write instructions in Markdown files.",
            "Ask Codex to keep a task log.",
            "Use skills for repeatable actions.",
            "Learn from other people's skills."
          ]
        }
      ],
      "body": "The real productivity gain is not one spectacular prompt. It is a folder where\nfuture work can resume cleanly.",
      "sourcePath": "content/slides/015-codex-practices.md",
      "sectionId": "practice",
      "sectionTitle": "Practices",
      "sequence": 15
    },
    {
      "id": "closing",
      "section": "practice",
      "navTitle": "Closing",
      "title": "Learning technologists become the bridge.",
      "layout": "statement",
      "notes": "Close by naming the role: not passive recipients of AI tools, but people who can shape how those tools enter learning environments.",
      "participantPrompt": "What is one workflow you now want to prototype, and what guardrail should come with it?",
      "blocks": [
        {
          "type": "callout",
          "tone": "key",
          "title": "Working conclusion",
          "body": "The new role is not to chase every tool. It is to understand which harnesses are safe, useful, supportable, and educationally meaningful."
        }
      ],
      "body": "Vibecoding matters when it lets teams make better learning experiences without\nlosing judgement, supportability, or care.",
      "sourcePath": "content/slides/016-closing.md",
      "sectionId": "practice",
      "sectionTitle": "Practices",
      "sequence": 16
    }
  ],
  "generatedAt": "2026-06-01T08:48:13.077Z"
} satisfies DeckData;
