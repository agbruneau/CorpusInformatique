# Plan : Site MkDocs Material pour CorpusInformatique

## Contexte

Le corpus contient 177 fichiers Markdown de contenu (1,57M mots, ~5000 pages PDF) répartis en 3 sections (81 + 12 + 84). L'objectif est de publier le corpus comme site web navigable sur GitHub Pages avec MkDocs Material.

## Fichiers créés

### 1. `mkdocs.yml` (racine du repo)

Configuration principale :

- **docs_dir: `docs`** — répertoire `docs/` contenant des liens symboliques vers le contenu (créés par CI)
- **Theme** : Material avec langue `fr`, palette light/dark, navigation tabs, `navigation.sections`, `navigation.expand`, `navigation.top`, `toc.integrate`, `search.suggest`, `search.highlight`, `content.code.copy`
- **Mermaid** : activé via `pymdownx.superfences` avec custom fence pour mermaid
- **Search** : plugin search avec `lang: fr`
- **Navigation** : structure explicite en 3 sections avec sous-sections par volume (177 fichiers)
- **Extensions** : tables, admonitions, details, highlight, inlinehilite, superfences, tabbed, mark, arithmatex, footnotes, toc (permalink: true)
- **Exclusions** : `not_in_nav` pour CLAUDE.md et plan.md
- **extra** : liens sociaux vers le repo GitHub
- **MathJax** : chargé via extra_javascript (unpkg CDN)

Navigation structurée (81 + 12 + 84 = 177 fichiers de contenu) :

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
      - Annexes (I.80–I.81): [2 fichiers]
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
docs/
__pycache__/
.venv/
```

### 4. `.github/workflows/deploy-docs.yml`

Workflow GitHub Actions :

- **Trigger** : push sur `main`
- **Permissions** : `contents: write`
- **Runner** : `ubuntu-latest`
- **Steps** :
  1. `actions/checkout@v4`
  2. `actions/setup-python@v5` avec Python 3.12
  3. `pip install -r requirements.txt`
  4. **Setup docs/** : création de symlinks (`ln -s`) vers les 3 répertoires de contenu et README.md
  5. `mkdocs gh-deploy --force --clean --verbose`
- **Déploie** automatiquement sur la branche `gh-pages`

## Approche technique

- **Symlinks au lieu de `docs_dir: .`** : MkDocs interdit que le config file soit dans le docs_dir. Solution : `docs_dir: docs` avec des liens symboliques créés en CI vers les répertoires de contenu réels
- **Pas de déplacement de fichiers** : les fichiers Markdown restent à leur emplacement d'origine ; seuls des symlinks sont créés dans `docs/`
- **`docs/` dans `.gitignore`** : le répertoire `docs/` est éphémère, créé à la volée par CI et en local
- **Chemins avec accents et espaces** : MkDocs gère les chemins avec accents nativement
- **Mermaid** : rendu côté client via le JavaScript intégré à Material
- **Admonitions** : les blocs `> **Définition formelle**` existants sont rendus comme des blockquotes stylisés
- **Code highlighting** : automatique avec `pymdownx.highlight` + `pymdownx.superfences`
- **Mathématiques** : `pymdownx.arithmatex` avec MathJax pour les notations mathématiques existantes
- **Chapitres 80–81** : les anciens annexes I.A et I.B sont désormais les chapitres I.80 et I.81, listés sous "Annexes" dans la navigation

## Statut

- [x] mkdocs.yml créé avec navigation complète (177 fichiers)
- [x] requirements.txt créé
- [x] .gitignore créé
- [x] GitHub Actions workflow créé
- [x] Build local validé — 178 pages HTML générées (177 + accueil)
- [ ] Pousser sur main → déclencher GitHub Actions → vérifier GitHub Pages

## Notes

- **100 warnings** sur des liens croisés cassés dans le contenu (anciennes conventions de nommage type `Chapitre_1.29` au lieu de `Chapitre_I.29`). Ce sont des problèmes pré-existants dans le contenu, non causés par la configuration MkDocs. Le build CI utilise le mode non-strict pour éviter l'échec.
- Pour tester localement : créer les symlinks dans `docs/` puis `mkdocs serve`
