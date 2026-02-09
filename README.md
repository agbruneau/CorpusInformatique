# Étude d'opportunité — Retrait de Microsoft Host Integration Server (HIS)

Étude d'architecture d'entreprise portant sur le retrait technologique de Microsoft Host Integration Server (HIS) pour une institution financière. L'ensemble de la documentation est rédigé en **français**.

## Livrables

| Fichier | Description |
|---------|-------------|
| `MS-HIS.md` | Document principal de l'étude (~3 200 lignes) |
| `MS-HIS.pdf` | Version PDF générée via Pandoc et XeLaTeX |
| `presentation.html` | Diaporama interactif HTML5 (Chart.js, Mermaid.js, thème sombre, navigation clavier) |
| `MS-HIS-Presentation.pdf` | Version PDF de la présentation |

## Structure du dépôt

```
├── MS-HIS.md            # Étude complète (livrable principal)
├── presentation.html    # Présentation exécutive interactive
├── prd.md               # Exigences de rédaction (9 sections)
├── prdPlan.md           # Plan d'orchestration multi-vagues
├── sections/            # Fichiers intermédiaires par section (01–09)
├── images/              # Diagrammes PNG générés par Mermaid
├── build-pdf.mjs        # Script de génération PDF
├── titlepage.tex        # Page de titre LaTeX
└── CLAUDE.md            # Instructions pour Claude Code
```

## Sommaire de l'étude

L'étude recommande le **scénario C — Accès REST/JSON direct via z/OS Connect EE** (sans middleware intermédiaire) selon une migration **progressive par domaine** en 6 phases sur 22 mois.

### Métriques clés

| Métrique | Valeur |
|----------|--------|
| Serveurs HIS actuels | 6 |
| Assemblages COM+/TI | 45 |
| Applications .NET dépendantes | 23 |
| Applications Java dépendantes | 4 |
| Programmes mainframe exposés | 52 |
| Coût annuel actuel | 1 850 K$ CAD |
| Budget CAPEX | 3 200 K$ CAD |
| OPEX cible | 420 K$ CAD/an |
| ROI à 3 ans | 38 % |
| ROI à 5 ans | 142 % |
| Durée de migration | 22 mois |

## Génération du PDF

### Prérequis

- [Node.js](https://nodejs.org/)
- [Mermaid CLI](https://github.com/mermaid-js/mermaid-cli) (`mmdc` sur le PATH)
- [Pandoc](https://pandoc.org/)
- [XeLaTeX](https://tug.org/texlive/) (via TeX Live ou MiKTeX)

### Commande

```bash
node build-pdf.mjs
```

Le script extrait les blocs Mermaid de `MS-HIS.md`, génère les PNG dans `images/`, puis produit `MS-HIS.pdf` via Pandoc avec la page de titre LaTeX.

## Licence

Usage interne — Confidentiel.
