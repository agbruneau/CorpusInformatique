# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository

General-purpose experimentation repository (`agbruneau/Experimentation`). Currently contains a large-scale enterprise architecture study on Microsoft Host Integration Server (HIS) retirement for a financial institution. All documentation is written in **French**.

## Environment

- Platform: Windows (OneDrive-synced path)
- Git remote: https://github.com/agbruneau/Experimentation.git
- Default branch: main

## Project Structure

- `prd.md` — Product requirements document defining the 9-section study structure and acceptance criteria
- `prdPlan.md` — Multi-wave orchestration plan (5 waves of parallel agent work) for assembling the study
- `sections/` — 9 intermediate section files (`section-01.md` through `section-09.md`) used during authoring
- `MS-HIS.md` — Final assembled study document (~3,200 lines), the primary deliverable
- `presentation.html` — Interactive HTML5 slide deck (Chart.js, Mermaid.js, dark theme, keyboard navigation)
- `build-pdf.mjs` — Node.js build script: extracts Mermaid diagrams → renders PNGs → generates PDF via Pandoc
- `titlepage.tex` — LaTeX title page included in PDF output
- `images/` — Generated PNG diagrams (output of build script)

## Build Commands

### Generate PDF from MS-HIS.md

```bash
node build-pdf.mjs
```

**Prerequisites:** `mermaid-cli` (provides `mmdc`), `pandoc`, and `xelatex` must be installed and on PATH. The script:
1. Extracts all `mermaid` code blocks from `MS-HIS.md`
2. Renders each to PNG via `mmdc` (saved to `images/`)
3. Generates `MS-HIS.pdf` via `pandoc --pdf-engine=xelatex` with the LaTeX title page

There is no `package.json` — the build script uses only Node.js built-ins plus the external CLI tools above.

## Key Domain Constants (from prdPlan.md)

These shared metrics are referenced across all sections and must stay consistent:

| Metric | Value |
|--------|-------|
| HIS servers | 6 |
| COM+/TI assemblies | 45 |
| LU pools | 12 |
| DB2 Data Links | 8 |
| Dependent .NET apps | 23 |
| Dependent Java apps | 4 |
| Mainframe programs exposed | 52 |
| Annual cost (current) | 1,850 K$ CAD |
| CAPEX budget | 3,200 K$ CAD |
| Target OPEX | 420 K$ CAD/year |
| ROI @ 3 years | 38% |
| ROI @ 5 years | 142% |
| Migration duration | 22 months |

## Architecture Notes

- The recommended retirement path is **Option C — Direct REST/JSON via z/OS Connect EE** (no intermediate middleware)
- Migration strategy is **progressive domain-by-domain** (6 phases over 22 months, explicitly anti-Big Bang)
- The study follows a wave-based authoring model: independent sections first, then dependent sections, then synthesis sections (executive summary + appendices last)
