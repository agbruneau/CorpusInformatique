# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**CorpusInformatique** is a multi-volume French-language educational and reference corpus covering computer science, enterprise system integration, and modern platform engineering. The repository contains exclusively Markdown content — no source code, build system, or CI/CD pipeline.

## Repository Structure

```
CorpusInformatique/
├── 1 - Cursus - Science et Génie Informatique/   # 7-volume CS curriculum
├── 2 - Interopérabilité/                          # Enterprise integration treatise
└── 3 - Entreprise Agentique/                      # 5-volume agentic enterprise series
```

### Volume 1 — Cursus (7 volumes)
Foundational computer science curriculum: theoretical foundations, hardware architecture, software methodologies, data/networks/security, AI, cutting-edge technologies, and cognitive-quantum architecture.

### Volume 2 — Interopérabilité (14 chapters)
Enterprise integration from theoretical foundations through application/data/event integration, standards, resilience, and reference architecture. Includes an Order-to-Cash process case study.

### Volume 3 — Entreprise Agentique (5 volumes)
- **Volume I**: Foundations — integration crisis, reactive architecture, cognitive interoperability, agentic governance
- **Volume II**: Infrastructure — Kafka/Confluent, Vertex AI, CI/CD, security
- **Volume III**: Apache Kafka Architect Guide — client architecture, stream processing, operations
- **Volume IV**: Apache Iceberg Lakehouse — architecture design, operations, integrations
- **Volume V**: Développeur Renaissance — human-centered perspectives on technology practice

## Conventions

- **Language**: All content is written in French.
- **Directory naming**: `Partie_[N]_[Description]` for parts, nested within volume folders.
- **File naming**: `Chapitre_[Volume].[Chapter]_[Topic].md` (e.g., `Chapitre_1.3_Machines_Formelles.md`).
- **Content format**: Markdown with hierarchical headings, embedded code blocks, tables, and mathematical notation.
- **No build tools**: This is a pure documentation repository managed through Git.

## Working with This Repository

- Edits should preserve the existing French academic tone and chapter/section numbering scheme.
- When adding or modifying chapters, maintain consistency with the `Chapitre_X.Y_Topic.md` naming convention.
- Cross-references between chapters should use relative paths.
- The repository is hosted at `https://github.com/agbruneau/CorpusInformatique.git` on the `main` branch.
