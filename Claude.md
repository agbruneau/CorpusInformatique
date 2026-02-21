# CLAUDE.md — CorpusInformatique

Corpus encyclopédique francophone couvrant les fondements de l'informatique, l'interopérabilité d'entreprise et l'entreprise agentique. Publié via MkDocs Material sur GitHub Pages.

## Projet

- **URL** : https://agbruneau.github.io/CorpusInformatique/
- **Auteur** : André-Guy Bruneau
- **Langue** : Français exclusivement
- **Licence** : Tous droits réservés
- **Contenu** : ~176 fichiers Markdown répartis en 3 sections majeures

## Structure

```
I - Science et Génie Informatique/    # 80 chapitres (9 volumes) — curriculum CS complet
II - Interopérabilité/                # 12 chapitres — intégration d'entreprise
III - Entreprise Agentique/           # 84 fichiers (5 volumes) — systèmes agents distribués
css/                                  # extra.css (thème personnalisé)
docs/                                 # Fichiers préparés pour MkDocs (générés)
site/                                 # Site statique construit
```

## Stack technique

- **MkDocs 1.6+** avec Material Theme v9.5
- **Python 3.12** (CI/CD GitHub Actions)
- **MathJax 3** pour les notations LaTeX
- **Mermaid** pour les diagrammes d'architecture (23 diagrammes)
- **GitHub Actions** → `mkdocs gh-deploy` vers GitHub Pages

## Conventions de contenu

- **Nommage** : `Chapitre_[Section].[N]_[Sujet].md` (ex: `Chapitre_I.1_Fondements_Logiques_Raisonnement.md`)
- **Structure des chapitres** : Titre numéroté → Séparateurs `---` → Sous-sections imbriquées (##, ###, ####)
- **Références croisées** : 196 liens inter-chapitres reliant 43 chapitres
- **Blocs de code** : ~1069 blocs dans 11+ langages (Python, SQL, Java, YAML, JSON, Bash, Go, etc.)
- **Admonitions** : Blockquotes (`>`) pour définitions et notes stratégiques
- **Tableaux de synthèse** : Mappent concepts théoriques → applications modernes

## Build et déploiement

```bash
./build-docs.sh         # Sert localement (http://127.0.0.1:8000)
./build-docs.sh build   # Génère le site statique
```

Le script nettoie `docs/`, copie les 3 sections + CSS, puis génère le site.

## Directives pour Claude

1. **Langue** : Toujours rédiger en français. Terminologie technique anglaise acceptée quand consacrée.
2. **Style académique** : Prose structurée, ton encyclopédique, rigueur des sources.
3. **Cohérence** : Respecter la numérotation existante (I.1–I.80, II.1–II.12, III par volumes).
4. **Diagrammes** : Utiliser Mermaid (supporté nativement par MkDocs Material et GitHub).
5. **Pas de modification structurelle** : Ne pas renommer les fichiers, changer la hiérarchie, ou modifier `mkdocs.yml` sans demande explicite.
6. **Modifications chirurgicales** : Toucher uniquement ce qui est demandé. Ne pas « améliorer » le contenu adjacent.
7. **Vérification** : Après toute modification de contenu, valider que les références croisées restent cohérentes.
