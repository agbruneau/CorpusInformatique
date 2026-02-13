# Plan : Site MkDocs Material pour CorpusInformatique

## Contexte

Le corpus contient 177 fichiers Markdown (1,57M mots, ~5000 pages PDF) répartis en 3 sections. Il n'existe aucune infrastructure de documentation, CI/CD, ou configuration de déploiement. L'objectif est de publier le corpus comme site web navigable sur GitHub Pages avec MkDocs Material.

## Fichiers à créer

### 1. `mkdocs.yml` (racine du repo)

Configuration principale :

- **docs_dir: `.`** — servir le contenu directement depuis la racine (pas de déplacement de fichiers)
- **Theme** : Material avec langue `fr`, palette light/dark, navigation tabs
- **Mermaid** : activé via `pymdownx.superfences` avec custom fence pour mermaid
- **Search** : plugin search avec `lang: fr`
- **Navigation** : structure explicite en 3 sections avec sous-sections par volume
- **Extensions** : tables, admonitions (pour les blocs `> **Définition**`), code highlighting, table of contents, footnotes
- **Exclusions** : exclure CLAUDE.md, .claude/, .github/ du site

Navigation structurée :

```
nav:
  - Accueil: README.md
  - I — Science et Génie Informatique:
      - Vol. I — Fondations Théoriques (I.1–I.6): [6 fichiers]
      - Vol. II — Architecture Matérielle (I.7–I.15): [9 fichiers]
      - Vol. III — Systèmes Logiciels (I.16–I.29): [14 fichiers]
      - Vol. IV — Données, Réseaux, Sécurité (I.30–I.40): [11 fichiers]
      - Vol. V — Intelligence Artificielle (I.41–I.50): [10 fichiers]
      - Vol. VI — Technologies Avant-Garde (I.51–I.60): [10 fichiers]
      - Vol. VII — Architecture Cognitivo-Quantique (I.61–I.79): [19 fichiers]
      - Annexes: [2 fichiers]
  - II — Interopérabilité: [12 fichiers]
  - III — Entreprise Agentique:
      - Volume I — Fondations (I.1–I.28): [28 fichiers]
      - Volume II — Infrastructure (II.1–II.15): [15 fichiers]
      - Volume III — Apache Kafka (III.1–III.12): [12 fichiers]
      - Volume IV — Apache Iceberg (IV.1–IV.16 + annexes): [18 fichiers]
      - Volume V — Développeur Renaissance (V.0–V.10): [11 fichiers]
```

### 2. `requirements.txt` (racine)

```
mkdocs-material>=9.5
pymdown-extensions>=10.0
```

### 3. `.gitignore` (racine)

```
site/
__pycache__/
.venv/
```

### 4. `.github/workflows/deploy-docs.yml`

Workflow GitHub Actions :

- Trigger : push sur `main`
- Steps : checkout → setup Python → install deps → mkdocs gh-deploy --force
- Déploie automatiquement sur la branche `gh-pages`

## Approche technique

- **Pas de déplacement de fichiers** : `docs_dir: .` permet à MkDocs de servir directement depuis la racine du repo
- **Chemins avec accents et espaces** : MkDocs gère les chemins avec accents nativement ; les espaces dans les noms de répertoires sont supportés
- **Mermaid** : rendu côté client via le JavaScript intégré à Material, configuré dans `pymdownx.superfences`
- **Admonitions** : les blocs `> **Définition formelle**` existants seront rendus comme des blockquotes stylisés ; optionnellement convertibles en admonitions `!!! note` plus tard
- **Code highlighting** : automatique avec `pymdownx.highlight` + `pymdownx.superfences`

## Vérification

1. **Local** : `pip install -r requirements.txt && mkdocs serve` → vérifier le rendu sur http://localhost:8000
2. **Navigation** : vérifier que les 177 chapitres sont accessibles
3. **Mermaid** : vérifier le rendu des 23 diagrammes
4. **Search** : tester la recherche en français
5. **Deploy** : pousser sur main → vérifier GitHub Pages
