# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**CorpusInformatique** is a multi-volume French-language educational and reference corpus covering computer science, enterprise system integration, and modern platform engineering. The repository contains exclusively Markdown content — no source code, build system, or CI/CD pipeline. Total: ~180 chapters across 3 sections.

## Repository Structure

```
CorpusInformatique/
├── 1 - Science et Génie Informatique/             # 83 chapter files (flat)
├── 2 - Interopérabilité/                          # 12 chapter files (flat)
├── 3 - Entreprise Agentique/                      # 5 volume subdirectories
│   ├── Volume_I_Fondations_Entreprise_Agentique/  #   28 chapters
│   ├── Volume_II_Infrastructure_Agentique/        #   15 chapters
│   ├── Volume_III_Apache_Kafka_Guide_Architecte/  #   12 chapters
│   ├── Volume_IV_Apache_Iceberg_Lakehouse/        #   18 chapters
│   └── Volume_V_Developpeur_Renaissance/          #   11 chapters
├── README.md
└── CLAUDE.md
```

All sections use a flat structure — chapters are stored directly in their section or volume directory with no subdirectories.

### Section 1 — Science et Génie Informatique (7 volumes, 83 chapters)
Foundational CS curriculum: theoretical foundations (Vol. I), hardware architecture (Vol. II), software methodologies (Vol. III), data/networks/security (Vol. IV), AI (Vol. V), cutting-edge technologies (Vol. VI), cognitive-quantum architecture (Vol. VII). Some chapters have letter suffixes (e.g. `1.1a`) for sub-topics.

### Section 2 — Interopérabilité (11 chapters + annexes)
Enterprise integration across applications, data, and events. Includes an Order-to-Cash case study and an Agentic Enterprise chapter. Annexes file uses `Chapitre_2.A_Annexes.md`.

### Section 3 — Entreprise Agentique (5 volumes, 84 chapters)
- **Volume I**: Fondations (28 ch.) — integration crisis, reactive architecture, cognitive interoperability, agentic governance
- **Volume II**: Infrastructure Agentique (15 ch.) — Kafka/Confluent, Vertex AI, CI/CD, security, compliance
- **Volume III**: Apache Kafka Guide de l'Architecte (12 ch.) — client architecture, stream processing, operations
- **Volume IV**: Apache Iceberg Lakehouse (18 ch.) — architecture, operations, streaming lakehouse, integrations
- **Volume V**: Développeur Renaissance (11 ch.) — systemic thinking, quality, Spec-Driven Development

## Conventions

### Language
All content is written in French with an academic tone.

### File Naming

| Section | Convention | Example |
|---------|-----------|---------|
| 1 | `Chapitre_1.[N]_[Topic].md` | `Chapitre_1.41_Fondements_IA.md` |
| 2 | `Chapitre_2.[N]_[Topic].md` | `Chapitre_2.5_Integration_Evenements.md` |
| 3 | `Chapitre_[Vol].[N]_[Topic].md` | `Chapitre_I.1_Crise_Integration_Systemique.md` |

Section 3 uses Roman numeral volume prefixes (I–V).

### Chapter Internal Structure
- Title heading (`#`) followed by `---` separator
- Numbered sections using `##` with hierarchical sub-numbering (e.g. `## I.3.1`)
- Rich formatting: bold emphasis, blockquote definition boxes (`> **Définition formelle**`), perspective boxes (`> **Perspective stratégique**`), concrete examples (`> **Exemple concret**`)
- Tables for synthesis/comparison
- Mermaid diagrams for architecture and workflows
- Navigation link at chapter end: `*Chapitre suivant: Chapitre X.Y — Title*`

### Content Format
Markdown with hierarchical headings, embedded code blocks, tables, mathematical notation, and Mermaid diagrams. When adding diagrams, prefer Mermaid syntax (renders natively in GitHub).

## Working with This Repository

- Edits must preserve the existing French academic tone and chapter/section numbering scheme.
- When adding or modifying chapters, follow the `Chapitre_X.Y_Topic.md` naming convention and place files flat in the appropriate section or volume directory.
- Cross-references between chapters use relative paths.
- The repository is hosted at `https://github.com/agbruneau/CorpusInformatique.git` on the `main` branch.
