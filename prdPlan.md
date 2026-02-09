# Plan d'exécution — Rédaction MS-HIS.md + Présentation HTML

## Contexte

Le PRD (`prd.md`) définit les exigences strictes pour rédiger une étude d'opportunité de retrait de Microsoft Host Integration Server (HIS). Le travail produit deux livrables : `MS-HIS.md` (~25 pages) et `presentation.html` (dark theme moderne). L'exécution utilise des **Agent Teams** (agents parallèles via Task) organisés en vagues (waves).

## Constantes partagées (injectées dans chaque agent)

Tous les agents utiliseront ces valeurs identiques pour garantir la cohérence inter-sections :

```
SERVEURS_HIS = 6
TI_ASSEMBLIES = 45
LU_POOLS = 12
DATA_LINKS_DB2 = 8
APPS_DOTNET_DEPENDANTES = 23
APPS_JAVA_DEPENDANTES = 4
PROGRAMMES_MAINFRAME_EXPOSES = 52
COUT_ANNUEL_HIS = 1 850 K$ CAD
CAPEX_OPTION_C = 3 200 K$ CAD
OPEX_ANNUEL_CIBLE = 420 K$ CAD
ROI_3_ANS = ~38%
ROI_5_ANS = ~142%
DUREE_MIGRATION = 22 mois
```

---

## Wave 0 — Préparation (séquentiel)

- Créer le répertoire `sections/`

---

## Wave 1 — Sections indépendantes (5 agents en parallèle)

| Agent | Section | Fichier | Contenu clé |
|-------|---------|---------|-------------|
| W1-A | §2 Contexte & Alignement | `sections/section-02.md` | Cloud-First, API-First, DORA/BSIF, roadmap z/OS Connect, diagramme Mermaid, matrice de traçabilité |
| W1-B | §3 Analyse As-Is | `sections/section-03.md` | Inventaire HIS (tableau), LU pools, TI assemblies, Data Links, dépendances amont/aval, diagramme Mermaid As-Is |
| W1-C | §4 Risques | `sections/section-04.md` | Registre de risques R-01→R-05, références factuelles, coût de l'inaction sur 5 ans |
| W1-D | §5 Scénarios de retrait | `sections/section-05.md` | 3 options (Containment/COTS/Refonte), tableaux comparatifs, code C# avant/après, 3 diagrammes Mermaid, verdicts |
| W1-E | §8 Plan de mise en œuvre | `sections/section-08.md` | 6 phases domaine par domaine, Gantt Mermaid 22 mois, dual-run, rollback <30min, Go/No-Go, Big Bang interdit |

---

## Wave 2 — Sections dépendantes (2 agents en parallèle)

Lancés **après** la fin de Wave 1. Chaque agent lit les fichiers de Wave 1 nécessaires.

| Agent | Section | Fichier | Dépendances | Contenu clé |
|-------|---------|---------|-------------|-------------|
| W2-A | §6 Étude financière | `sections/section-06.md` | section-03, section-05 | Coûts actuels, CAPEX migration, OPEX cible, tableau financier 5 colonnes, ROI 3/5 ans, sensibilité ±20%, fourchettes optimiste/réaliste/pessimiste |
| W2-B | §7 Architecture cible | `sections/section-07.md` | section-03, section-05 | Diagramme As-Is vs To-Be côte à côte, protocoles/ports, standards (OpenAPI 3.1, TLS 1.3, OAuth 2.0), gouvernance API, résilience (circuit breaker, OpenTelemetry) |

---

## Wave 3 — Sections de synthèse (2 agents en parallèle)

Lancés **après** Waves 1 et 2. Chaque agent lit TOUTES les sections précédentes.

| Agent | Section | Fichier | Contenu clé |
|-------|---------|---------|-------------|
| W3-A | §1 Résumé exécutif | `sections/section-01.md` | 1 page max, ton décisionnel, problématique en 1 phrase, quantification lock-in, tableau Avant/Après 5 lignes, ROI, indicateur de risque |
| W3-B | §9 Annexes | `sections/section-09.md` | Glossaire (A), Inventaire TI (B), RACI (C), Références documentaires (D), Template PV ateliers (E) |

---

## Wave 4 — Assemblage et contrôle qualité (1 agent séquentiel)

L'agent assembleur :
1. Lit les 9 fichiers `sections/section-XX.md`
2. Assemble dans `MS-HIS.md` avec en-tête (titre, classification, version, date, auteur)
3. Ajoute la table des matières avec liens
4. Vérifie la numérotation hiérarchique (1, 1.1, 1.1.1)
5. Valide la cohérence des chiffres (Section 1 vs Sections 3/6)
6. Vérifie la syntaxe Mermaid
7. Vérifie que tous les critères d'acceptation du PRD sont satisfaits
8. Écrit le fichier final `MS-HIS.md`

**Checklist PRD :**
- [ ] Toutes sections "Obligatoire" présentes
- [ ] Tous diagrammes inclus et lisibles
- [ ] Tous tableaux comparatifs remplis
- [ ] ROI chiffré sur 3 ans minimum
- [ ] Plan anti-Big Bang respecté
- [ ] Exemple de code avant/après fourni

---

## Wave 5 — Présentation HTML (1 agent séquentiel)

L'agent lit `MS-HIS.md` et produit `presentation.html` :

**Design :**
- Dark theme (#1a1a2e fond, #e0e0e0 texte, accents gradient bleu-violet)
- Police sans-serif moderne (Inter/system)
- Layout en slides avec CSS scroll-snap
- Navigation clavier (flèches, espace)
- Barre de progression + compteur de slides

**Stack technique (single-file HTML) :**
- Chart.js (CDN) pour graphiques financiers
- Mermaid.js (CDN) pour diagrammes d'architecture
- CSS responsive + `@media print`

**~18 slides :**

| # | Slide | Source |
|---|-------|--------|
| 1 | Titre + métadonnées | En-tête |
| 2 | Problématique + niveau de risque | §1 |
| 3 | Quantification Vendor Lock-in (grands chiffres) | §1, §3 |
| 4 | Alignement stratégique | §2 |
| 5 | Architecture As-Is (Mermaid) | §3 |
| 6 | Inventaire HIS (cartes chiffrées) | §3 |
| 7 | Registre de risques (cartes couleur) | §4 |
| 8 | Coût de l'inaction (bar chart Chart.js) | §4 |
| 9 | Option A — Containment | §5 |
| 10 | Option B — COTS | §5 |
| 11 | Option C — Refonte (recommandée + diagramme) | §5 |
| 12 | Comparaison des 3 scénarios (tableau styled) | §5 |
| 13 | Vue financière (ROI chart) | §6 |
| 14 | Projection cash flow (line chart) | §6 |
| 15 | Architecture cible To-Be (Mermaid) | §7 |
| 16 | Avant/Après côte à côte | §7 |
| 17 | Timeline migration (Gantt horizontal) | §8 |
| 18 | Recommandation + prochaines étapes | §1 |

---

## Fichiers critiques

| Fichier | Rôle |
|---------|------|
| `prd.md` | Source de vérité (lecture seule) |
| `sections/section-01.md` à `section-09.md` | Fichiers intermédiaires par section |
| `MS-HIS.md` | Livrable final — étude d'opportunité |
| `presentation.html` | Livrable final — présentation exécutive |

---

## Vérification

1. Ouvrir `MS-HIS.md` dans un viewer Markdown (VS Code preview) — vérifier rendu des tableaux et diagrammes Mermaid
2. Ouvrir `presentation.html` dans un navigateur — vérifier navigation, graphiques Chart.js, diagrammes Mermaid, responsive
3. Valider les critères d'acceptation du PRD (checklist §Wave 4)
4. Nettoyage optionnel du répertoire `sections/` après validation
