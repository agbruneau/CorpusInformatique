# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**CorpusInformatique** is a multi-volume French-language educational and reference corpus covering computer science, enterprise system integration, and modern platform engineering. The repository contains exclusively Markdown content — no source code, build system, or CI/CD pipeline. Total: 177 files across 3 sections.

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
├── README.md
├── CLAUDE.md
└── plan.md
```

All sections use a flat structure — chapters are stored directly in their section or volume directory with no subdirectories.

### Section I — Science et Génie Informatique (7 volumes, 81 files)

Foundational CS curriculum: theoretical foundations (Vol. I), hardware architecture (Vol. II), software methodologies (Vol. III), data/networks/security (Vol. IV), AI (Vol. V), cutting-edge technologies (Vol. VI), cognitive-quantum architecture (Vol. VII). Chapters I.1–I.81.

| Volume | Chapitres | Thème | Nombre |
|--------|-----------|-------|--------|
| I | I.1 – I.6 | Fondations théoriques | 6 |
| II | I.7 – I.15 | Architecture et ingénierie matérielle | 9 |
| III | I.16 – I.29 | Systèmes logiciels et méthodologies | 14 |
| IV | I.30 – I.40 | Données, réseaux et sécurité | 11 |
| V | I.41 – I.50 | Intelligence artificielle | 10 |
| VI | I.51 – I.60 | Technologies avant-garde | 10 |
| VII | I.61 – I.81 | Architecture cognitivo-quantique | 21 |

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

| Section | Convention | Example |
|---------|-----------|---------|
| I | `Chapitre_I.[N]_[Topic].md` | `Chapitre_I.41_Fondements_IA.md` |
| II | `Chapitre_II.[N]_[Topic].md` | `Chapitre_II.5_Integration_Evenements.md` |
| III | `Chapitre_[Vol].[N]_[Topic].md` | `Chapitre_I.1_Crise_Integration_Systemique.md` |

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
- **785 code blocks** across 45 files in 17 languages (top 3: Python 194, SQL 176, Java 151)
- **102 cross-references** across 43 files linking chapters inter- and intra-section

## Working with This Repository

- Edits must preserve the existing French academic tone and chapter/section numbering scheme.
- When adding or modifying chapters, follow the `Chapitre_[Section].[N]_Topic.md` naming convention with Roman numeral section prefixes, and place files flat in the appropriate section or volume directory.
- Cross-references between chapters use relative paths (including `../` for cross-section links).
- The repository is hosted at `https://github.com/agbruneau/CorpusInformatique.git` on the `main` branch.
