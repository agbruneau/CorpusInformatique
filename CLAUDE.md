# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**CorpusInformatique** is a multi-volume French-language educational and reference corpus covering computer science, enterprise system integration, and modern platform engineering. The repository contains exclusively Markdown content — no source code, build system, or CI/CD pipeline.

## Repository Structure

```
CorpusInformatique/
├── 1 - Cursus - Science et Génie Informatique/   # 83 individual chapter files (Chapitre_1.N_Topic.md)
├── 2 - Interopérabilité/                          # 12 chapter files (Chapitre_2.N_Topic.md)
├── 3 - Entreprise Agentique/                      # 5 volumes with granular chapters (Chapitre_Vol.N_Topic.md)
├── INDEX.md                                        # Navigation map + glossary (52 terms) + cross-references
├── README.md                                       # Project overview
└── CLAUDE.md                                       # This file
```

### Section 1 — Cursus (7 volumes, 83 chapters)
Foundational computer science curriculum covering theoretical foundations (Vol. I), hardware architecture (Vol. II), software methodologies (Vol. III), data/networks/security (Vol. IV), AI (Vol. V), cutting-edge technologies (Vol. VI), and cognitive-quantum architecture (Vol. VII). All chapters are individual files using `Chapitre_1.N_Topic.md` convention.

### Section 2 — Interopérabilité (11 chapters + annexes)
Enterprise integration from theoretical foundations through application/data/event integration, standards, resilience, and reference architecture. Includes an Order-to-Cash process case study and an Agentic Enterprise chapter. Uses `Chapitre_2.N_Topic.md` convention.

### Section 3 — Entreprise Agentique (5 volumes, 81 chapters)
- **Volume I**: Fondations (28 chapters, 5 Parties) — integration crisis, reactive architecture, cognitive interoperability, agentic governance, transformation roadmap
- **Volume II**: Infrastructure Agentique (15 chapters, 4 Parties) — Kafka/Confluent, Vertex AI, CI/CD, security, compliance
- **Volume III**: Apache Kafka Guide de l'Architecte (12 chapters, 4 Parties) — client architecture, use cases, stream processing, operations
- **Volume IV**: Apache Iceberg Lakehouse (16 chapters + annexes, 4 Parties) — architecture design, operations, streaming lakehouse, integrations
- **Volume V**: Développeur Renaissance (10 chapters, Intro + 4 Parties) — systemic thinking, quality, Spec-Driven Development

## Conventions

### Language
All content is written in French with an academic tone.

### File Naming

| Section | Convention | Example |
|---------|-----------|---------|
| 1 – Cursus | `Chapitre_1.[N]_[Topic].md` | `Chapitre_1.41_Fondements_IA.md` |
| 2 – Interopérabilité | `Chapitre_2.[N]_[Topic].md` | `Chapitre_2.5_Integration_Evenements.md` |
| 3 – Entreprise Agentique | `Chapitre_[Vol].[N]_[Topic].md` | `Chapitre_I.1_Crise_Integration_Systemique.md` |

All sections use a unified `Chapitre_X.Y_Topic.md` naming convention.

### Directory Naming
- Section 3: `Partie_[N]_[Description]` for parts, nested within volume folders.
- Sections 1 and 2: flat structure (no subdirectories for parts).

### Consolidated Files
Each volume in Section 3 contains a `Volume_[N]_Consolide.md` file that aggregates all chapters of that volume into a single document. These are the authoritative consolidated versions. **Do not duplicate these files elsewhere in the repository.**

### Content Enrichment
- **22 Mermaid diagrams** across all sections (architecture, workflows, patterns)
- **10 practical code blocks** (YAML configs, Python/PySpark, Java, CI/CD pipelines)
- **99 cross-references** linking 42 chapters across 16 themes
- **52-term glossary** in INDEX.md

### Content Format
Markdown with hierarchical headings, embedded code blocks, tables, mathematical notation, and Mermaid diagrams. No build tools — this is a pure documentation repository managed through Git.

## Working with This Repository

- Edits should preserve the existing French academic tone and chapter/section numbering scheme.
- When adding or modifying chapters, maintain consistency with the `Chapitre_X.Y_Topic.md` naming convention.
- Cross-references between chapters use relative paths with a `### Références croisées` section at the end of chapters.
- When adding diagrams, prefer Mermaid syntax (renders natively in GitHub).
- The repository is hosted at `https://github.com/agbruneau/CorpusInformatique.git` on the `main` branch.
- Consult INDEX.md for the complete navigation map and glossary.
