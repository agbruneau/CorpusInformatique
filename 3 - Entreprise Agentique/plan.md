# Plan d'exécution — Aplatissement des répertoires Partie

## Objectif

Rapatrier tous les fichiers Markdown contenus dans les sous-répertoires `Partie_*` (et assimilés) de chaque Volume vers la racine du répertoire Volume correspondant, puis supprimer les sous-répertoires désormais vides. Le résultat final est une structure plate par Volume : chaque Volume ne contient que ses fichiers `.md` directement, sans arborescence intermédiaire.

---

## État actuel

```
3 - Entreprise Agentique/
├── Volume_I_Fondations_Entreprise_Agentique/
│   ├── Partie_1_Crise_Fondations_Architecturales/        (6 chapitres)
│   ├── Partie_2_Infrastructure_Ecosysteme_Technique/      (5 chapitres)
│   ├── Partie_3_Interoperabilite_Cognitive_Paradigme_Agentique/ (6 chapitres)
│   ├── Partie_4_Operationnalisation_Transformation/       (6 chapitres)
│   └── Partie_5_Industrialisation_Prospective_Synthese/   (5 chapitres)
│                                                     Total : 28 chapitres, 5 Parties
│
├── Volume_II_Infrastructure_Agentique/
│   ├── Partie_1_Fondamentaux_Kafka_Confluent/             (5 chapitres)
│   ├── Partie_2_Vertex_AI_Patrons_Avances/                (4 chapitres)
│   ├── Partie_3_CI_CD_Observabilite_Tests/                (3 chapitres)
│   └── Partie_4_Securite_Conformite/                      (3 chapitres)
│                                                     Total : 15 chapitres, 4 Parties
│
├── Volume_III_Apache_Kafka_Guide_Architecte/
│   ├── Partie_1_Architecture_Clients_Kafka/               (4 chapitres)
│   ├── Partie_2_Cas_Usage_Patrons/                        (3 chapitres)
│   ├── Partie_3_Stream_Processing_Gestion/                (3 chapitres)
│   └── Partie_4_Operations_Avenir/                        (2 chapitres)
│                                                     Total : 12 chapitres, 4 Parties
│
├── Volume_IV_Apache_Iceberg_Lakehouse/
│   ├── Annexes/                                           (2 fichiers)
│   ├── Partie_1_Valeur_Lakehouse/                         (3 chapitres)
│   ├── Partie_2_Concevoir_Architecture/                   (6 chapitres)
│   ├── Partie_3_Operer_Lakehouse/                         (4 chapitres)
│   └── Partie_4_Integrations_Perspectives/                (3 chapitres)
│                                                     Total : 16 chapitres + 2 annexes, 4 Parties + 1 Annexes
│
└── Volume_V_Developpeur_Renaissance/
    ├── Introduction_Convergence_Ages_Or/                   (1 fichier)
    ├── Partie_1_Curiosite_Contexte_Historique/             (2 chapitres)
    ├── Partie_2_Pensee_Systemique_Communication/           (2 chapitres)
    ├── Partie_3_Qualite_Capital_Humain/                    (2 chapitres)
    └── Partie_4_Epilogue_Mandats/                         (4 chapitres)
                                                      Total : 10 chapitres + 1 introduction, 4 Parties + 1 Introduction
```

**Total global : 81 chapitres + 2 annexes + 1 introduction = 84 fichiers à déplacer, 22 sous-répertoires à supprimer.**

---

## État cible

```
3 - Entreprise Agentique/
├── Volume_I_Fondations_Entreprise_Agentique/
│   ├── Chapitre_I.1_Crise_Integration_Systemique.md
│   ├── Chapitre_I.2_Fondements_Dimensions_Interoperabilite.md
│   ├── ...
│   └── Chapitre_I.28_Conclusion_Architecture_Intentionnelle_Sagesse_Collective.md
│
├── Volume_II_Infrastructure_Agentique/
│   ├── Chapitre_II.1_Ingenierie_Plateforme.md
│   ├── ...
│   └── Chapitre_II.15_Conformite_Reglementaire_Gestion_Confidentialite.md
│
├── Volume_III_Apache_Kafka_Guide_Architecte/
│   ├── Chapitre_III.1_Decouvrir_Kafka.md
│   ├── ...
│   └── Chapitre_III.12_Avenir_Kafka.md
│
├── Volume_IV_Apache_Iceberg_Lakehouse/
│   ├── Annexe_A_Specification_Apache_Iceberg.md
│   ├── Annexe_B_Glossaire.md
│   ├── Chapitre_IV.1_Monde_Lakehouse_Iceberg.md
│   ├── ...
│   └── Chapitre_IV.16_Conclusion_Perspectives_2026_2030.md
│
└── Volume_V_Developpeur_Renaissance/
    ├── Introduction.md
    ├── Chapitre_V.1_Convergence_Ages_Or.md
    ├── ...
    └── Chapitre_V.10_Spec_Driven_Development.md
```

---

## Architecture d'exécution par agents (Team)

### Équipe : `flatten-volumes`

| Agent | Type | Rôle | Volume assigné |
|-------|------|------|-----------------|
| `team-lead` | Coordinateur | Crée les tâches, surveille la progression, valide les résultats | — |
| `agent-vol-I` | general-purpose | Aplatit Volume I (28 fichiers, 5 Parties) | Volume I |
| `agent-vol-II` | general-purpose | Aplatit Volume II (15 fichiers, 4 Parties) | Volume II |
| `agent-vol-III` | general-purpose | Aplatit Volume III (12 fichiers, 4 Parties) | Volume III |
| `agent-vol-IV` | general-purpose | Aplatit Volume IV (18 fichiers, 4 Parties + Annexes) | Volume IV |
| `agent-vol-V` | general-purpose | Aplatit Volume V (11 fichiers, 4 Parties + Introduction) | Volume V |

### Parallélisme

Les 5 agents de volume travaillent **en parallèle** — aucune dépendance croisée entre volumes. Le coordinateur attend la complétion de tous les agents avant la phase de validation.

---

## Tâches détaillées

### Phase 0 — Préparation (team-lead)

| # | Tâche | Description |
|---|-------|-------------|
| T0.1 | Créer l'équipe `flatten-volumes` | Initialiser l'équipe et le task list |
| T0.2 | Créer les 5 tâches de volume | Une tâche par volume, assignée à l'agent correspondant |
| T0.3 | Vérifier l'état git | S'assurer que le working tree est propre avant les modifications |

### Phase 1 — Déplacement des fichiers (agents volume, en parallèle)

Chaque agent exécute la séquence suivante pour son volume assigné :

| # | Tâche | Commande type | Détail |
|---|-------|---------------|--------|
| T1.1 | Lister les sous-répertoires | `ls` du répertoire Volume | Identifier tous les `Partie_*` et répertoires spéciaux |
| T1.2 | Déplacer les fichiers via `git mv` | `git mv <Partie_N>/<fichier>.md ./` | Déplacer chaque fichier `.md` à la racine du Volume |
| T1.3 | Vérifier l'absence de collision | Contrôler qu'aucun fichier du même nom n'existe déjà à la racine | Les noms `Chapitre_X.Y_*.md` sont uniques par conception |
| T1.4 | Supprimer les sous-répertoires | `git rm -r <Partie_N>/` ou suppression manuelle | Les répertoires doivent être vides après T1.2 |
| T1.5 | Vérifier la complétude | Comparer le nombre de fichiers déplacés au décompte attendu | Signaler toute anomalie |

#### Cas particuliers par volume

**Volume IV — Annexes :**
- Le répertoire `Annexes/` contient `Annexe_A_Specification_Apache_Iceberg.md` et `Annexe_B_Glossaire.md`
- Ces fichiers doivent être déplacés à la racine du Volume IV au même titre que les chapitres
- Le répertoire `Annexes/` est ensuite supprimé

**Volume V — Introduction :**
- Le répertoire `Introduction_Convergence_Ages_Or/` contient `Introduction.md`
- Ce fichier doit être déplacé à la racine du Volume V
- Le répertoire `Introduction_Convergence_Ages_Or/` est ensuite supprimé

### Phase 2 — Validation (team-lead)

| # | Tâche | Description |
|---|-------|-------------|
| T2.1 | Vérifier la structure finale | Confirmer que chaque Volume ne contient que des fichiers `.md` à la racine, sans sous-répertoires |
| T2.2 | Vérifier le décompte total | 84 fichiers au total (81 chapitres + 2 annexes + 1 introduction) |
| T2.3 | Exécuter `git status` | Vérifier que tous les déplacements sont correctement trackés par git |
| T2.4 | Rapport de complétion | Résumer les opérations effectuées par chaque agent |

### Phase 3 — Commit (team-lead, après validation utilisateur)

| # | Tâche | Description |
|---|-------|-------------|
| T3.1 | Stage des modifications | `git add -A` pour les fichiers déplacés et répertoires supprimés |
| T3.2 | Créer le commit | Message : `Aplatissement Section 3 : suppression des répertoires Partie` |
| T3.3 | Nettoyage | Supprimer l'équipe `flatten-volumes` et le task list associé |

---

## Commandes de référence par volume

### Volume I (agent-vol-I)

```bash
BASE="C:\Users\agbru\OneDrive\Documents\GitHub\CorpusInformatique\3 - Entreprise Agentique\Volume_I_Fondations_Entreprise_Agentique"

# Déplacer les fichiers de chaque Partie
git mv "$BASE/Partie_1_Crise_Fondations_Architecturales/"*.md "$BASE/"
git mv "$BASE/Partie_2_Infrastructure_Ecosysteme_Technique/"*.md "$BASE/"
git mv "$BASE/Partie_3_Interoperabilite_Cognitive_Paradigme_Agentique/"*.md "$BASE/"
git mv "$BASE/Partie_4_Operationnalisation_Transformation/"*.md "$BASE/"
git mv "$BASE/Partie_5_Industrialisation_Prospective_Synthese/"*.md "$BASE/"

# Supprimer les répertoires vides
git rm -r "$BASE/Partie_1_Crise_Fondations_Architecturales"
git rm -r "$BASE/Partie_2_Infrastructure_Ecosysteme_Technique"
git rm -r "$BASE/Partie_3_Interoperabilite_Cognitive_Paradigme_Agentique"
git rm -r "$BASE/Partie_4_Operationnalisation_Transformation"
git rm -r "$BASE/Partie_5_Industrialisation_Prospective_Synthese"
```

### Volume II (agent-vol-II)

```bash
BASE="C:\Users\agbru\OneDrive\Documents\GitHub\CorpusInformatique\3 - Entreprise Agentique\Volume_II_Infrastructure_Agentique"

git mv "$BASE/Partie_1_Fondamentaux_Kafka_Confluent/"*.md "$BASE/"
git mv "$BASE/Partie_2_Vertex_AI_Patrons_Avances/"*.md "$BASE/"
git mv "$BASE/Partie_3_CI_CD_Observabilite_Tests/"*.md "$BASE/"
git mv "$BASE/Partie_4_Securite_Conformite/"*.md "$BASE/"

git rm -r "$BASE/Partie_1_Fondamentaux_Kafka_Confluent"
git rm -r "$BASE/Partie_2_Vertex_AI_Patrons_Avances"
git rm -r "$BASE/Partie_3_CI_CD_Observabilite_Tests"
git rm -r "$BASE/Partie_4_Securite_Conformite"
```

### Volume III (agent-vol-III)

```bash
BASE="C:\Users\agbru\OneDrive\Documents\GitHub\CorpusInformatique\3 - Entreprise Agentique\Volume_III_Apache_Kafka_Guide_Architecte"

git mv "$BASE/Partie_1_Architecture_Clients_Kafka/"*.md "$BASE/"
git mv "$BASE/Partie_2_Cas_Usage_Patrons/"*.md "$BASE/"
git mv "$BASE/Partie_3_Stream_Processing_Gestion/"*.md "$BASE/"
git mv "$BASE/Partie_4_Operations_Avenir/"*.md "$BASE/"

git rm -r "$BASE/Partie_1_Architecture_Clients_Kafka"
git rm -r "$BASE/Partie_2_Cas_Usage_Patrons"
git rm -r "$BASE/Partie_3_Stream_Processing_Gestion"
git rm -r "$BASE/Partie_4_Operations_Avenir"
```

### Volume IV (agent-vol-IV)

```bash
BASE="C:\Users\agbru\OneDrive\Documents\GitHub\CorpusInformatique\3 - Entreprise Agentique\Volume_IV_Apache_Iceberg_Lakehouse"

# Parties
git mv "$BASE/Partie_1_Valeur_Lakehouse/"*.md "$BASE/"
git mv "$BASE/Partie_2_Concevoir_Architecture/"*.md "$BASE/"
git mv "$BASE/Partie_3_Operer_Lakehouse/"*.md "$BASE/"
git mv "$BASE/Partie_4_Integrations_Perspectives/"*.md "$BASE/"

# Annexes (cas particulier)
git mv "$BASE/Annexes/"*.md "$BASE/"

# Suppression
git rm -r "$BASE/Partie_1_Valeur_Lakehouse"
git rm -r "$BASE/Partie_2_Concevoir_Architecture"
git rm -r "$BASE/Partie_3_Operer_Lakehouse"
git rm -r "$BASE/Partie_4_Integrations_Perspectives"
git rm -r "$BASE/Annexes"
```

### Volume V (agent-vol-V)

```bash
BASE="C:\Users\agbru\OneDrive\Documents\GitHub\CorpusInformatique\3 - Entreprise Agentique\Volume_V_Developpeur_Renaissance"

# Parties
git mv "$BASE/Partie_1_Curiosite_Contexte_Historique/"*.md "$BASE/"
git mv "$BASE/Partie_2_Pensee_Systemique_Communication/"*.md "$BASE/"
git mv "$BASE/Partie_3_Qualite_Capital_Humain/"*.md "$BASE/"
git mv "$BASE/Partie_4_Epilogue_Mandats/"*.md "$BASE/"

# Introduction (cas particulier)
git mv "$BASE/Introduction_Convergence_Ages_Or/"*.md "$BASE/"

# Suppression
git rm -r "$BASE/Partie_1_Curiosite_Contexte_Historique"
git rm -r "$BASE/Partie_2_Pensee_Systemique_Communication"
git rm -r "$BASE/Partie_3_Qualite_Capital_Humain"
git rm -r "$BASE/Partie_4_Epilogue_Mandats"
git rm -r "$BASE/Introduction_Convergence_Ages_Or"
```

---

## Critères de succès

- [ ] Chaque Volume contient exclusivement des fichiers `.md` — aucun sous-répertoire restant
- [ ] Le décompte par volume est respecté : Vol. I (28), Vol. II (15), Vol. III (12), Vol. IV (18), Vol. V (11)
- [ ] Tous les déplacements utilisent `git mv` pour préserver l'historique
- [ ] `git status` montre uniquement des renommages (renamed), pas de fichiers supprimés/ajoutés dissociés
- [ ] Le commit est propre et documenté

---

## Risques et mitigations

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Collision de noms de fichiers | Écrasement de contenu | Vérification pré-déplacement (T1.3) — improbable car nommage unique |
| Références internes cassées | Liens relatifs invalides | Hors périmètre de ce plan — à traiter dans une tâche ultérieure si nécessaire |
| Perte d'historique git | Traçabilité réduite | Utilisation de `git mv` au lieu de `mv` + `git add` |
| Erreur de déplacement partiel | État incohérent | Chaque agent vérifie la complétude (T1.5) avant de signaler la fin |
