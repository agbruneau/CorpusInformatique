# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**CorpusInformatique** is a multi-volume French-language educational and reference corpus covering computer science, enterprise system integration, and modern platform engineering. The repository contains exclusively Markdown content — no source code, build system, or CI/CD pipeline.

## Repository Structure

```
CorpusInformatique/
├── 1 - Cursus - Science et Génie Informatique/   # 7-volume CS curriculum (monolithic files)
├── 2 - Interopérabilité/                          # Enterprise integration treatise (11 chapters + annexes)
└── 3 - Entreprise Agentique/                      # 5-volume agentic enterprise series (granular chapters)
```

### Section 1 — Cursus (7 volumes)
Foundational computer science curriculum: theoretical foundations, hardware architecture, software methodologies, data/networks/security, AI, cutting-edge technologies, and cognitive-quantum architecture.

### Section 2 — Interopérabilité (11 chapters + annexes)
Enterprise integration from theoretical foundations through application/data/event integration, standards, resilience, and reference architecture. Includes an Order-to-Cash process case study and an Agentic Enterprise chapter.

### Section 3 — Entreprise Agentique (5 volumes)
- **Volume I**: Foundations (28 chapters) — integration crisis, reactive architecture, cognitive interoperability, agentic governance, transformation roadmap
- **Volume II**: Infrastructure (15 chapters) — Kafka/Confluent, Vertex AI, CI/CD, security, compliance
- **Volume III**: Apache Kafka Architect Guide (12 chapters) — client architecture, use cases, stream processing, operations
- **Volume IV**: Apache Iceberg Lakehouse (16 chapters + annexes) — architecture design, operations, integrations, Canadian context
- **Volume V**: Développeur Renaissance (10 chapters) — human-centered perspectives, systemic thinking, quality, Spec-Driven Development

## Conventions

### Language
All content is written in French with an academic tone.

### File Naming (three coexisting conventions)

| Section | Convention | Example |
|---------|-----------|---------|
| 1 – Cursus | `Cursus - Volume [N] - [Titre].md` | `Cursus - Volume I - Fondations Théoriques de l'Informatique.md` |
| 2 – Interopérabilité | `NN_Description.md` | `01_Introduction_Problematique.md` |
| 3 – Entreprise Agentique | `Chapitre_[Vol].[Chap]_[Topic].md` | `Chapitre_I.1_Crise_Integration_Systemique.md` |

**Target convention**: `Chapitre_[Vol].[Chap]_[Topic].md` (Section 3 style). Sections 1 and 2 use legacy conventions pending migration.

### Directory Naming
- Section 3: `Partie_[N]_[Description]` for parts, nested within volume folders.
- Sections 1 and 2: flat structure (no subdirectories for parts).

### Consolidated Files
Each volume in Section 3 contains a `Volume_[N]_Consolide.md` file that aggregates all chapters of that volume into a single document. These are the authoritative consolidated versions. **Do not duplicate these files elsewhere in the repository.**

### Content Format
Markdown with hierarchical headings, embedded code blocks, tables, and mathematical notation. No build tools — this is a pure documentation repository managed through Git.

## Working with This Repository

- Edits should preserve the existing French academic tone and chapter/section numbering scheme.
- When adding or modifying chapters in Section 3, maintain consistency with the `Chapitre_X.Y_Topic.md` naming convention.
- Cross-references between chapters should use relative paths.
- When adding diagrams, prefer Mermaid syntax (renders natively in GitHub).
- The repository is hosted at `https://github.com/agbruneau/CorpusInformatique.git` on the `main` branch.

## Known Improvement Areas

- **Section 1**: Monolithic files (up to 12K lines each) — planned migration to per-chapter files with `Chapitre_X.Y` naming.
- **Section 2**: Legacy `NN_Description.md` naming — planned migration to `Chapitre_2.N_Description.md`.
- **Cross-references**: Currently sparse; should be enriched with explicit relative-path links between related chapters across sections.
- **Visual diagrams**: No Mermaid/SVG diagrams yet; priority additions include Kafka architecture, Iceberg layers, Agentic Mesh topology, and Order-to-Cash flow.
