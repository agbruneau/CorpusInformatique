# CLAUDE.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:

- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:

- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:

```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

## Project Overview

**CorpusInformatique** is a multi-volume French-language educational and reference corpus covering computer science, enterprise system integration, and modern platform engineering. The repository contains 177 Markdown content files across 3 sections, plus a MkDocs Material build pipeline with GitHub Actions deployment to GitHub Pages.

## Repository Structure

```
CorpusInformatique/
├── I - Science et Genie Informatique/               # 81 files (flat)
├── II - Interopérabilité/                            # 12 files (flat)
├── III - Entreprise Agentique/                       # 5 volume subdirectories
│   ├── Volume_I_Fondations_Entreprise_Agentique/     #   28 chapters
│   ├── Volume_II_Infrastructure_Agentique/           #   15 chapters
│   ├── Volume_III_Apache_Kafka_Guide_Architecte/     #   12 chapters
│   ├── Volume_IV_Apache_Iceberg_Lakehouse/           #   18 files (16 ch. + 2 annexes)
│   └── Volume_V_Developpeur_Renaissance/             #   11 chapters
├── .github/workflows/deploy-docs.yml                 # GitHub Actions CI/CD
├── css/extra.css                                      # MkDocs custom styling
├── mkdocs.yml                                         # MkDocs Material configuration
├── build-docs.sh                                      # Local build script
├── requirements.txt                                   # Python dependencies
├── README.md
├── CLAUDE.md
└── .gitignore
```

All sections use a flat structure — chapters are stored directly in their section or volume directory with no subdirectories.

### Section I — Science et Génie Informatique (7 volumes, 81 files)

Foundational CS curriculum: theoretical foundations (Vol. I), hardware architecture (Vol. II), software methodologies (Vol. III), data/networks/security (Vol. IV), AI (Vol. V), cutting-edge technologies (Vol. VI), cognitive-quantum architecture (Vol. VII). Chapters I.1–I.81.

| Volume | Chapitres    | Thème                                  | Nombre |
| ------ | ------------ | --------------------------------------- | ------ |
| I      | I.1 – I.6   | Fondations théoriques                  | 6      |
| II     | I.7 – I.15  | Architecture et ingénierie matérielle | 9      |
| III    | I.16 – I.29 | Systèmes logiciels et méthodologies   | 14     |
| IV     | I.30 – I.40 | Données, réseaux et sécurité        | 11     |
| V      | I.41 – I.50 | Intelligence artificielle               | 10     |
| VI     | I.51 – I.60 | Technologies avant-garde                | 10     |
| VII    | I.61 – I.81 | Architecture cognitivo-quantique        | 21     |

### Section II — Interopérabilité (12 files: 11 chapters + annexes)

Enterprise integration across applications, data, and events. Includes an Order-to-Cash case study and an Agentic Enterprise conclusion chapter. Annexes file uses `Chapitre_II.A_Annexes.md`.

### Section III — Entreprise Agentique (5 volumes, 84 files)

- **Volume I**: Fondations (28 ch.) — integration crisis, reactive architecture, cognitive interoperability, agentic governance
- **Volume II**: Infrastructure Agentique (15 ch.) — Kafka/Confluent, Vertex AI, CI/CD, security, compliance
- **Volume III**: Apache Kafka Guide de l'Architecte (12 ch.) — client architecture, stream processing, operations
- **Volume IV**: Apache Iceberg Lakehouse (18 files: 16 ch. + 2 annexes) — architecture, operations, streaming lakehouse, integrations
- **Volume V**: Développeur Renaissance (11 ch., V.0–V.10) — systemic thinking, quality, Spec-Driven Development

## Conventions

### Language

All content is written in French with an academic tone.

### File Naming

All sections use Roman numeral prefixes for section/volume identification:

| Section | Convention                        | Example                                          |
| ------- | --------------------------------- | ------------------------------------------------ |
| I       | `Chapitre_I.[N]_[Topic].md`     | `Chapitre_I.41_Fondements_IA.md`               |
| II      | `Chapitre_II.[N]_[Topic].md`    | `Chapitre_II.5_Integration_Evenements.md`      |
| III     | `Chapitre_[Vol].[N]_[Topic].md` | `Chapitre_I.1_Crise_Integration_Systemique.md` |

- Section III uses Roman numeral volume prefixes (I–V) matching the volume number.
- Section III annexes use letter suffixes: `Chapitre_IV.Annexe_A_...md`.
- Topic names use underscores and stripped accents (e.g., `Resilience_Observabilite`).

### Chapter Internal Structure

- Title heading (`#`) followed by `---` separator (in most chapters)
- Numbered sections using `##` with hierarchical sub-numbering (e.g., `## 41.1`, `### 41.1.1`)
- Rich formatting: bold emphasis, blockquote definition boxes (`> **Définition formelle**`), perspective boxes (`> **Perspective stratégique**`), concrete examples (`> **Exemple concret**`)
- Tables for synthesis/comparison
- Mermaid diagrams for architecture and workflows
- Navigation link at chapter end: `*Chapitre suivant: Chapitre X.Y — Title*`

### Content Format

Markdown with hierarchical headings, embedded code blocks, tables, mathematical notation, and Mermaid diagrams. When adding diagrams, prefer Mermaid syntax (renders natively in GitHub).

### Enriched Content Statistics

- **23 Mermaid diagrams** across 22 files (Section I: 7, Section II: 5, Section III: 11)
- **~1 069 code blocks** across 64 files in 11+ languages (top 3: Python 193, SQL 169, Java 151)
- **196 cross-references** across 43 files linking chapters inter- and intra-section

## Build & Deployment Infrastructure

The repository uses **MkDocs Material** to generate a documentation site deployed to GitHub Pages.

| File | Purpose |
| ---- | ------- |
| `mkdocs.yml` | Site configuration: Material theme, navigation structure, Mermaid/MathJax/syntax-highlighting extensions |
| `requirements.txt` | Python dependencies (`mkdocs>=1.6`, `mkdocs-material>=9.5`) |
| `build-docs.sh` | Local dev script: `./build-docs.sh` (serve) or `./build-docs.sh build` (static site) |
| `css/extra.css` | Custom CSS (text justification) |
| `.github/workflows/deploy-docs.yml` | GitHub Actions: on push to `main`, builds and deploys via `mkdocs gh-deploy` |
| `.gitignore` | Excludes generated `site/` and `docs/` directories |

The build copies content into a temporary `docs/` directory, then MkDocs renders it. The `mkdocs.yml` nav section maps all 177 chapters to the site structure.

## Working with This Repository

- Edits must preserve the existing French academic tone and chapter/section numbering scheme.
- When adding or modifying chapters, follow the `Chapitre_[Section].[N]_Topic.md` naming convention with Roman numeral section prefixes, and place files flat in the appropriate section or volume directory.
- Cross-references between chapters use relative paths (including `../` for cross-section links).
- The repository is hosted at `https://github.com/agbruneau/CorpusInformatique.git` on the `main` branch.
