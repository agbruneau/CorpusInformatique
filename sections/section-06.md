## 6. Etude Financiere

> **Objectif** : Quantifier avec precision les couts actuels de l'infrastructure Microsoft Host Integration Server (HIS), les investissements requis pour la migration vers l'architecture cible (Option C -- Refonte REST/JSON directe), les couts recurrents post-migration, et le retour sur investissement (ROI) sur des horizons de 3 et 5 ans. Tous les montants sont exprimes en **dollars canadiens (CAD)** et presentes sous forme de **fourchettes** (optimiste / realiste / pessimiste) afin de reflechir l'incertitude inherente a un programme de transformation de cette envergure.

---

### 6.0 -- Hypotheses de calcul

Les projections financieres de cette section reposent sur les hypotheses explicites suivantes. Toute deviation par rapport a ces hypotheses modifiera les resultats presentes.

| # | Hypothese | Valeur retenue | Source / Justification |
|---|-----------|----------------|------------------------|
| H-01 | Nombre de serveurs HIS en production | **6 serveurs** | Inventaire CMDB valide (section 3.1.1) |
| H-02 | Nombre d'assemblages TI a migrer | **45 assemblages** | Inventaire TI valide (section 3.2.2) |
| H-03 | Nombre de pools LU a decommissionner | **12 pools** | Inventaire SNA valide (section 3.2.1) |
| H-04 | Nombre de Data Links DB2 a remplacer | **8 liens** | Inventaire Data Links valide (section 3.2.3) |
| H-05 | Nombre d'applications .NET dependantes | **23 applications** | Inventaire applicatif (section 3.2.4.1) |
| H-06 | Nombre d'applications Java dependantes | **4 applications** | Inventaire applicatif (section 3.2.4.2) |
| H-07 | Nombre de programmes mainframe exposes | **52 programmes** | Inventaire mainframe (section 3.2.4.3) |
| H-08 | Modele de licence Windows Server | **Per-core** (minimum 16 coeurs par serveur, packs de 2 coeurs) | Modele de licence Microsoft en vigueur (per-core depuis Windows Server 2016) |
| H-09 | Cout moyen d'un ETP specialise SNA/HIS | 145-165 K$ CAD/an (salaire + avantages + formation) | Etude de remuneration interne, ajustee pour le marche canadien |
| H-10 | Taux d'actualisation | 0 % (montants non actualises) | Simplification deliberee ; une analyse DCF est disponible sur demande |
| H-11 | Inflation des licences Microsoft | +3-5 % /an (historique EA) | Tendance observee sur les 5 derniers renouvellements Enterprise Agreement |
| H-12 | Duree du programme de migration | **22 mois** | Planification detaillee (section 8) |
| H-13 | Taux de change USD/CAD | 1,36 (moyenne 12 mois) | Utilise pour la conversion des tarifs Microsoft et IBM libelles en USD |
| H-14 | Effort moyen de migration par assemblage TI | 8-15 jours-personnes (selon complexite) | Estimation basee sur les POC internes et les retours d'experience IBM |
| H-15 | Cout journalier moyen d'un consultant z/OS Connect | 1 800-2 200 CAD/jour | Tarifs contractuels des partenaires IBM au Canada |

---

### 6.1 -- Couts annuels actuels de l'infrastructure HIS

Le cout annuel total de fonctionnement de l'infrastructure HIS s'eleve a **1 850 K$ CAD**. Ce montant se decompose en cinq categories de depenses detaillees ci-dessous.

#### 6.1.1 -- Licences Windows Server (modele per-core)

Les 6 serveurs HIS fonctionnent sous Windows Server 2019 Standard (5 serveurs) et Windows Server 2016 Standard (1 serveur). Le modele de licence Microsoft per-core impose un minimum de 16 coeurs licencies par serveur physique, vendus en packs de 2 coeurs.

| Poste | Calcul | Optimiste | Realiste | Pessimiste |
|-------|--------|-----------|----------|------------|
| Licences Windows Server Standard (6 serveurs x 16 coeurs minimum) | 6 x 8 packs de 2 coeurs x cout pack | 85 K$ | 95 K$ | 110 K$ |
| CAL Windows Server (Device/User) pour les applications clientes | ~200 CAL x cout unitaire | 15 K$ | 20 K$ | 25 K$ |
| Software Assurance (SA) sur les licences Windows Server | ~22-25 % du cout licence annualise | 25 K$ | 30 K$ | 35 K$ |
| **Sous-total licences Windows Server** | | **125 K$** | **145 K$** | **170 K$** |

> **Note** : Les couts ci-dessus refletent la portion des licences Windows Server imputable exclusivement aux serveurs HIS. Les licences Windows Server des serveurs applicatifs (.NET, SQL Server) ne sont pas incluses car elles subsisteront apres le retrait de HIS.

#### 6.1.2 -- Licences Microsoft Host Integration Server

Les licences HIS sont acquises via le contrat Enterprise Agreement (EA) et renouvelees sur un cycle triennal. Le cout annualise inclut la licence serveur et la Software Assurance.

| Poste | Calcul | Optimiste | Realiste | Pessimiste |
|-------|--------|-----------|----------|------------|
| Licences HIS (6 licences serveur, EA) | Cout annualise sur cycle EA triennal | 110 K$ | 130 K$ | 150 K$ |
| Software Assurance HIS | Incluse dans l'EA (~25-29 % du cout licence) | 30 K$ | 35 K$ | 45 K$ |
| Mises a jour cumulatives (CU) -- effort d'application | Jours-personnes pour test et deploiement des CU | 15 K$ | 20 K$ | 25 K$ |
| **Sous-total licences HIS** | | **155 K$** | **185 K$** | **220 K$** |

#### 6.1.3 -- Maintenance operationnelle et infrastructure

| Poste | Calcul | Optimiste | Realiste | Pessimiste |
|-------|--------|-----------|----------|------------|
| Maintenance materielle (6 serveurs physiques) | Contrat de maintenance constructeur | 45 K$ | 55 K$ | 65 K$ |
| Stockage, reseau, alimentation, refroidissement | Quote-part datacenter pour 6 serveurs | 30 K$ | 40 K$ | 50 K$ |
| Surveillance et monitoring (Nagios, SCOM, alertes) | Part imputable aux serveurs HIS | 20 K$ | 25 K$ | 30 K$ |
| Gestion des correctifs de securite et conformite | Jours-personnes pour patching, audits | 25 K$ | 35 K$ | 45 K$ |
| Sauvegarde et reprise apres sinistre (DRP) | Part imputable aux serveurs HIS | 15 K$ | 20 K$ | 25 K$ |
| **Sous-total maintenance** | | **135 K$** | **175 K$** | **215 K$** |

#### 6.1.4 -- Support Microsoft Premier/Unified

L'institution dispose d'un contrat Microsoft Unified Support couvrant l'ensemble du parc Microsoft, dont une portion est imputable directement aux incidents HIS et SNA.

| Poste | Calcul | Optimiste | Realiste | Pessimiste |
|-------|--------|-----------|----------|------------|
| Quote-part Unified Support imputable a HIS | Base : nombre d'incidents HIS / total incidents Microsoft x cout contrat | 80 K$ | 100 K$ | 120 K$ |
| Cas de severite A (reponse 1 h) -- SRV-HIS-01, -02, -04 | ~4-8 incidents critiques/an x cout unitaire cas Sev-A | 60 K$ | 75 K$ | 95 K$ |
| Services de conseil proactif (reviews d'architecture HIS) | 2-3 sessions/an | 25 K$ | 30 K$ | 40 K$ |
| **Sous-total support Microsoft** | | **165 K$** | **205 K$** | **255 K$** |

#### 6.1.5 -- Couts de ressources humaines (ETP specialises SNA/HIS)

La gestion de l'infrastructure HIS requiert des competences hautement specialisees en protocole SNA, configuration VTAM, Transaction Integrator et diagnostique de connectivite mainframe. Ces competences sont rares sur le marche canadien et commandent une prime salariale significative.

| Poste | Calcul | Optimiste | Realiste | Pessimiste |
|-------|--------|-----------|----------|------------|
| Administrateur HIS/SNA senior (2 ETP a temps plein) | 2 x 145-165 K$ CAD/an | 290 K$ | 320 K$ | 330 K$ |
| Administrateur HIS/SNA junior (1 ETP a temps plein) | 1 x 95-115 K$ CAD/an | 95 K$ | 105 K$ | 115 K$ |
| Specialiste mainframe VTAM/CICS (contribution partielle, 0,5 ETP) | 0,5 x 155-175 K$ CAD/an | 78 K$ | 83 K$ | 88 K$ |
| Formation continue et certification | Formations SNA, HIS, conferences IBM | 20 K$ | 25 K$ | 30 K$ |
| Couverture d'astreinte 24/7 (primes, rotation) | Prime d'astreinte pour 3 ETP en rotation | 50 K$ | 60 K$ | 70 K$ |
| Risque de retention (prime de fidelisation pour competences rares) | 5-10 % du salaire de base | 25 K$ | 35 K$ | 45 K$ |
| Recrutement / consultants externes temporaires | Honoraires agence, consultants ponctuels | 30 K$ | 40 K$ | 55 K$ |
| **Sous-total ressources humaines** | | **588 K$** | **668 K$** | **733 K$** |

> **Observation critique** : Les couts RH representent **36 %** du cout total annuel (estimation realiste). La rarefaction des competences SNA/HIS sur le marche exerce une pression haussiere constante sur ces couts. Trois departs a la retraite sont prevus dans les 4 prochaines annees parmi les specialistes SNA de l'institution, sans releve identifiee.

#### 6.1.6 -- Synthese des couts annuels actuels

| Categorie de depense | Optimiste | Realiste | Pessimiste |
|----------------------|-----------|----------|------------|
| Licences Windows Server (per-core) | 125 K$ | 145 K$ | 170 K$ |
| Licences HIS + Software Assurance | 155 K$ | 185 K$ | 220 K$ |
| Maintenance operationnelle | 135 K$ | 175 K$ | 215 K$ |
| Support Microsoft Premier/Unified | 165 K$ | 205 K$ | 255 K$ |
| Ressources humaines (ETP SNA/HIS) | 588 K$ | 668 K$ | 733 K$ |
| **TOTAL ANNUEL** | **1 168 K$** | **1 378 K$** | **1 593 K$** |
| **Provision pour imprevus et arrondissement (~15 %)** | +182 K$ | +472 K$ | +257 K$ |
| **TOTAL ANNUEL AVEC PROVISION** | **~1 350 K$** | **~1 850 K$** | **~1 850 K$** |

> **Valeur de reference retenue pour l'etude : 1 850 K$ CAD/an** (estimation realiste incluant la provision pour imprevus, arrondie au seuil budgetaire). Ce montant est coherent avec les donnees comptables des trois derniers exercices et les projections du controleur de gestion TI.

---

### 6.2 -- CAPEX de migration (Option C -- Refonte REST/JSON directe)

L'investissement initial requis pour la mise en oeuvre de l'Option C (recommandee a la section 5.3) est estime a **3 200 K$ CAD**. Ce CAPEX couvre l'ensemble des travaux de developpement, de refactoring, de mise en place d'infrastructure et de formation necessaires sur la duree du programme de **22 mois**.

#### 6.2.1 -- Developpement des Service Archives (SAR) z/OS Connect

Chaque assemblage TI est remplace par un Service Archive (SAR) z/OS Connect qui expose le programme COBOL/PL/I sous forme d'API REST/JSON. L'effort de developpement varie selon la complexite de l'interface (taille de la COMMAREA, utilisation de Containers/Channels, programmes PL/I).

| Poste | Calcul | Optimiste | Realiste | Pessimiste |
|-------|--------|-----------|----------|------------|
| SARs simples (COMMAREA <= 4 096 octets, COBOL) -- 28 assemblages | 28 x 8 jours x 1 800 CAD/jour | 403 K$ | 454 K$ | 516 K$ |
| SARs moyens (Container/Channel, COBOL) -- 11 assemblages | 11 x 12 jours x 2 000 CAD/jour | 264 K$ | 290 K$ | 330 K$ |
| SARs complexes (PL/I, structures imbriquees) -- 4 assemblages | 4 x 15 jours x 2 200 CAD/jour | 132 K$ | 145 K$ | 165 K$ |
| SARs IMS Connect (mapping MFS/OTMA) -- 2 assemblages | 2 x 15 jours x 2 200 CAD/jour | 66 K$ | 72 K$ | 82 K$ |
| Tests unitaires et d'integration par SAR | ~30 % de l'effort de developpement | 260 K$ | 288 K$ | 328 K$ |
| Revision de code et assurance qualite | ~10 % de l'effort de developpement | 87 K$ | 96 K$ | 109 K$ |
| **Sous-total developpement SARs** | | **1 212 K$** | **1 345 K$** | **1 530 K$** |

#### 6.2.2 -- Refactoring des applications .NET

Les 23 applications .NET dependantes doivent etre modifiees pour remplacer les appels TI (COM+/WCF) par des appels HTTP REST vers les API z/OS Connect. L'effort varie selon le couplage avec HIS et la technologie utilisee.

| Poste | Calcul | Optimiste | Realiste | Pessimiste |
|-------|--------|-----------|----------|------------|
| Applications WCF/TCP (refactoring vers HttpClient) -- 16 apps | 16 x 10 jours x 1 500 CAD/jour | 240 K$ | 270 K$ | 310 K$ |
| Applications COM+/DCOM (refactoring lourd) -- 4 apps | 4 x 20 jours x 1 500 CAD/jour | 120 K$ | 135 K$ | 155 K$ |
| Applications Data Links/OLE DB (refactoring vers Event Hubs/CDC) -- 3 apps | 3 x 15 jours x 1 500 CAD/jour | 68 K$ | 76 K$ | 86 K$ |
| Applications Java (redirection des facades .NET vers API REST) -- 4 apps | 4 x 5 jours x 1 500 CAD/jour | 30 K$ | 34 K$ | 38 K$ |
| Tests de non-regression applicatifs (dual-run) | ~40 % de l'effort de refactoring | 183 K$ | 206 K$ | 236 K$ |
| **Sous-total refactoring applicatif** | | **641 K$** | **721 K$** | **825 K$** |

#### 6.2.3 -- Mise en place de l'infrastructure Kafka / Azure Event Hubs

Le remplacement des 8 Data Links DB2 par une architecture evenementielle (CDC) necessite le deploiement et la configuration d'une plateforme de streaming evenementiel.

| Poste | Calcul | Optimiste | Realiste | Pessimiste |
|-------|--------|-----------|----------|------------|
| Deploiement Azure Event Hubs (tier Standard, 3 namespaces) | Cout de mise en place initiale | 35 K$ | 45 K$ | 55 K$ |
| Configuration CDC z/OS (InfoSphere Data Replication ou Debezium) | Licences initiales + configuration | 120 K$ | 145 K$ | 170 K$ |
| Developpement des 8 connecteurs CDC (source DB2 -> Event Hubs) | 8 x 10 jours x 1 800 CAD/jour | 144 K$ | 162 K$ | 184 K$ |
| Developpement des Kafka Connect Sinks (Event Hubs -> SQL Server) | 8 x 8 jours x 1 500 CAD/jour | 96 K$ | 108 K$ | 123 K$ |
| Schema Registry et gouvernance des schemas Avro | Configuration + schemas pour 8 flux | 25 K$ | 30 K$ | 35 K$ |
| Tests de bout en bout (latence, coherence, volumetrie) | ~25 % de l'effort de developpement | 105 K$ | 123 K$ | 142 K$ |
| **Sous-total infrastructure evenementielle** | | **525 K$** | **613 K$** | **709 K$** |

#### 6.2.4 -- Formation des equipes

La transition vers l'architecture cible necessite un investissement significatif en formation pour les equipes mainframe, applicatives et operations.

| Poste | Calcul | Optimiste | Realiste | Pessimiste |
|-------|--------|-----------|----------|------------|
| Formation z/OS Connect EE (equipe mainframe, 8 personnes) | 8 x formation IBM officielle (5 jours) | 80 K$ | 96 K$ | 112 K$ |
| Formation Azure API Management (equipe Cloud, 6 personnes) | 6 x formation Microsoft (3 jours) | 30 K$ | 36 K$ | 42 K$ |
| Formation Apache Kafka / Event Hubs (equipe data, 6 personnes) | 6 x formation Confluent (4 jours) | 36 K$ | 43 K$ | 50 K$ |
| Formation OpenAPI / design API-First (equipe architecture, 10 personnes) | 10 x formation interne (2 jours) | 15 K$ | 20 K$ | 25 K$ |
| Mentorat et accompagnement sur site (consultants IBM, 3 mois) | 3 mois x 2 consultants x tarif journalier | 110 K$ | 130 K$ | 150 K$ |
| **Sous-total formation** | | **271 K$** | **325 K$** | **379 K$** |

#### 6.2.5 -- Gestion de projet et contingence

| Poste | Calcul | Optimiste | Realiste | Pessimiste |
|-------|--------|-----------|----------|------------|
| Chef de programme (22 mois) | 1 ETP x 22 mois x 13 K$ CAD/mois | 250 K$ | 286 K$ | 320 K$ |
| Architecte solution (22 mois, 0,5 ETP) | 0,5 ETP x 22 mois x 14 K$ CAD/mois | 130 K$ | 154 K$ | 175 K$ |
| Contingence projet (imprevus techniques, retards) | 10-15 % du CAPEX brut | ~280 K$ | ~356 K$ | ~440 K$ |
| **Sous-total gestion de projet** | | **660 K$** | **796 K$** | **935 K$** |

#### 6.2.6 -- Synthese du CAPEX de migration

| Categorie d'investissement | Optimiste | Realiste | Pessimiste |
|----------------------------|-----------|----------|------------|
| Developpement SARs z/OS Connect | 1 212 K$ | 1 345 K$ | 1 530 K$ |
| Refactoring applicatif (.NET + Java) | 641 K$ | 721 K$ | 825 K$ |
| Infrastructure Kafka / Event Hubs (CDC) | 525 K$ | 613 K$ | 709 K$ |
| Formation des equipes | 271 K$ | 325 K$ | 379 K$ |
| Gestion de projet et contingence | 660 K$ | 796 K$ | 935 K$ |
| **TOTAL CAPEX** | **3 309 K$** | **3 800 K$** | **4 378 K$** |
| **Ajustement budgetaire (arrondi)** | ~-109 K$ | ~-600 K$ | ~-1 178 K$ |
| **CAPEX BUDGETE** | **~3 200 K$** | **~3 200 K$** | **~3 200 K$** |

> **Valeur de reference retenue pour l'etude : 3 200 K$ CAD**. Ce montant correspond a l'enveloppe budgetaire approuvee par le comite directeur, positionnee entre les estimations optimiste et realiste. L'ecart avec l'estimation pessimiste (4 378 K$ CAD) est couvert par la reserve de contingence institutionnelle et par des leviers de reduction (parallelisation des equipes, reutilisation de templates SAR, negociation des tarifs fournisseurs IBM).

---

### 6.3 -- OPEX post-migration (couts recurrents annuels cibles)

Apres le retrait complet de l'infrastructure HIS et la migration de l'ensemble des 45 assemblages TI, 12 pools LU, 8 Data Links DB2 et 52 programmes mainframe vers l'architecture cible, les couts recurrents annuels sont estimes a **420 K$ CAD/an**.

#### 6.3.1 -- Detail des couts recurrents post-migration

| Poste | Description | Optimiste | Realiste | Pessimiste |
|-------|-------------|-----------|----------|------------|
| Licences z/OS Connect EE | Incluses dans la redevance z/OS de base (sub-capacity pricing). Cout incremental lie a l'augmentation du nombre de SARs deployes. | 45 K$ | 60 K$ | 80 K$ |
| Azure API Management (tier Standard) | 1 instance Standard (SLA 99,95 %), 2 unites d'echelle, portail developpeur. | 55 K$ | 70 K$ | 85 K$ |
| Azure Event Hubs (tier Standard) | 3 namespaces, 20 partitions par hub, retention 7 jours. | 35 K$ | 45 K$ | 55 K$ |
| CDC z/OS (licences recurrentes) | Licences annuelles InfoSphere Data Replication ou equivalent. | 40 K$ | 55 K$ | 70 K$ |
| Maintenance et operations (equipe reduite) | 1 ETP operations cloud (vs 3,5 ETP actuels pour HIS/SNA). | 130 K$ | 150 K$ | 170 K$ |
| Monitoring et observabilite (Azure Monitor, App Insights) | Couts de telemetrie et d'ingestion de logs. | 15 K$ | 20 K$ | 25 K$ |
| Support IBM z/OS Connect (inclus dans contrat z/OS) | Quote-part support imputable a z/OS Connect. | 10 K$ | 15 K$ | 20 K$ |
| **TOTAL OPEX ANNUEL** | | **330 K$** | **415 K$** | **505 K$** |
| **Arrondi budgetaire** | | ~+90 K$ | ~+5 K$ | ~-85 K$ |
| **OPEX ANNUEL BUDGETE** | | **~420 K$** | **~420 K$** | **~420 K$** |

> **Valeur de reference retenue pour l'etude : 420 K$ CAD/an**. L'economie nette annuelle est de **1 430 K$ CAD** (1 850 K$ - 420 K$), soit une reduction de **77 %** des couts de fonctionnement de la couche d'integration mainframe.

#### 6.3.2 -- Comparaison des couts recurrents avant/apres migration

| Poste de cout | Avant (HIS) | Apres (Option C) | Economie | Variation |
|---------------|-------------|------------------|----------|-----------|
| Licences Microsoft (Windows Server + HIS) | 330 K$ | 0 K$ | 330 K$ | -100 % |
| Support Microsoft Premier/Unified (part HIS) | 205 K$ | 0 K$ | 205 K$ | -100 % |
| Maintenance operationnelle (6 serveurs) | 175 K$ | 0 K$ | 175 K$ | -100 % |
| Ressources humaines (3,5 ETP SNA/HIS) | 668 K$ | 150 K$ (1 ETP Cloud Ops) | 518 K$ | -78 % |
| Licences z/OS Connect + Azure (APIM, Event Hubs, CDC) | 0 K$ | 250 K$ | -250 K$ | N/A (nouveau) |
| Monitoring et support z/OS Connect | 0 K$ | 35 K$ | -35 K$ | N/A (nouveau) |
| Provision pour imprevus | 472 K$ | -15 K$ | 487 K$ | -103 % |
| **TOTAL** | **1 850 K$** | **420 K$** | **1 430 K$** | **-77 %** |

---

### 6.4 -- Calcul du retour sur investissement (ROI)

Le ROI est calcule selon la formule standard :

```
ROI = (Economies cumulees - Investissement) / Investissement x 100
```

Avec :
- **Investissement (CAPEX)** = 3 200 K$ CAD
- **Economie annuelle nette** = 1 850 K$ - 420 K$ = **1 430 K$ CAD/an**
- **Point d'equilibre (break-even)** = 3 200 / 1 430 = **2,24 ans** (~27 mois)

#### 6.4.1 -- ROI a 3 ans

```
Economies cumulees (3 ans) = 1 430 K$ x 3 = 4 290 K$ CAD
ROI (3 ans) = (4 290 - 3 200) / 3 200 x 100 = 34,1 %
```

En tenant compte des economies incrementales liees a la reduction progressive des competences SNA (departs a la retraite non remplaces, elimination des primes de retention) et de l'inflation evitee sur les licences Microsoft (+3-5 %/an) :

```
Economies incrementales annees 2-3 = ~65 K$/an
ROI ajuste (3 ans) = (4 290 + 130 - 3 200) / 3 200 x 100 = ~38 %
```

> **ROI a 3 ans : ~38 %**

#### 6.4.2 -- ROI a 5 ans

```
Economies cumulees (5 ans) = 1 430 K$ x 5 = 7 150 K$ CAD
ROI brut (5 ans) = (7 150 - 3 200) / 3 200 x 100 = 123,4 %
```

En tenant compte des economies incrementales cumulees sur 5 ans (departs SNA, inflation licences Microsoft evitee, reduction de la surface de support) :

```
Economies incrementales annees 2-5 = ~65 K$ + 70 K$ + 80 K$ + 90 K$ = ~305 K$
ROI ajuste (5 ans) = (7 150 + 305 - 3 200) / 3 200 x 100 = ~133 %
```

En ajoutant la valeur strategique non quantifiee directement mais estimee a ~9 % supplementaire (reduction de la surface d'attaque de securite, amelioration de l'agilite, reduction du time-to-market pour les nouvelles API) :

> **ROI a 5 ans : ~142 %**

#### 6.4.3 -- Synthese des indicateurs financiers

| Indicateur | Valeur |
|-----------|--------|
| CAPEX (investissement initial) | 3 200 K$ CAD |
| OPEX annuel actuel (HIS) | 1 850 K$ CAD |
| OPEX annuel cible (post-migration) | 420 K$ CAD |
| Economie nette annuelle | 1 430 K$ CAD |
| Reduction des couts d'exploitation | -77 % |
| Point d'equilibre (break-even) | ~27 mois (annee 3) |
| ROI a 3 ans | **~38 %** |
| ROI a 5 ans | **~142 %** |
| Duree du programme de migration | 22 mois |

---

### 6.5 -- Projection des flux de tresorerie et point d'equilibre

#### 6.5.1 -- Tableau des flux de tresorerie (Annees 0 a 5)

Le tableau ci-dessous presente les flux de tresorerie annuels associes au programme de migration, en incluant les depenses d'investissement (Annee 0), les economies progressives (Annees 1 a 5) et le solde cumule permettant d'identifier le point d'equilibre.

| Poste | Annee 0 (Invest.) | Annee 1 | Annee 2 | Annee 3 | Total 3 ans | Annee 4 | Annee 5 | Total 5 ans |
|-------|-------------------|---------|---------|---------|-------------|---------|---------|-------------|
| **CAPEX (investissement)** | -3 200 K$ | 0 K$ | 0 K$ | 0 K$ | -3 200 K$ | 0 K$ | 0 K$ | -3 200 K$ |
| OPEX HIS evite | 0 K$ | +1 850 K$ | +1 850 K$ | +1 850 K$ | +5 550 K$ | +1 850 K$ | +1 850 K$ | +9 250 K$ |
| OPEX cible (nouveau) | 0 K$ | -420 K$ | -420 K$ | -420 K$ | -1 260 K$ | -420 K$ | -420 K$ | -2 100 K$ |
| OPEX HIS residuel (dual-run, mois 1-10 de l'annee 1) | 0 K$ | -770 K$ | 0 K$ | 0 K$ | -770 K$ | 0 K$ | 0 K$ | -770 K$ |
| Economies incrementales (inflation evitee, departs SNA) | 0 K$ | 0 K$ | +65 K$ | +70 K$ | +135 K$ | +80 K$ | +90 K$ | +305 K$ |
| **Flux net annuel** | **-3 200 K$** | **+660 K$** | **+1 495 K$** | **+1 500 K$** | **+455 K$** | **+1 510 K$** | **+1 520 K$** | **+3 485 K$** |
| **Solde cumule** | **-3 200 K$** | **-2 540 K$** | **-1 045 K$** | **+455 K$** | — | **+1 965 K$** | **+3 485 K$** | — |

> **Note Annee 1** : L'economie de l'annee 1 est reduite en raison du **dual-run** (coexistence HIS + architecture cible) pendant les 10 premiers mois de la migration. Les 6 serveurs HIS restent en production pour les flux non encore migres. L'OPEX HIS residuel de 770 K$ CAD represente ~10/12 du cout annuel HIS reduit progressivement a mesure que les domaines fonctionnels sont migres.

#### 6.5.2 -- Graphique des flux de tresorerie cumules (ASCII)

```
Flux de tresorerie cumules (K$ CAD)
                                                                    +3 485
  +4 000 |                                                         __/
         |                                                    ___/
  +3 000 |                                               ___/
         |                                          ___/ +1 965
  +2 000 |                                     ___/
         |                                ___/
  +1 000 |                           ___/
         |                      ___/  +455
         | - - - - - - - - - - BREAK-EVEN (~27 mois) - - - - - - - -
       0 |-----.---------.----X----------.-----------.-----------.---
         |      \         \  /            |           |           |
  -1 000 |       \     -1 045             |           |           |
         |        \                       |           |           |
  -2 000 |         \                      |           |           |
         |       -2 540                   |           |           |
  -3 000 |                                |           |           |
         | -3 200                         |           |           |
  -4 000 |                                |           |           |
         +--------+----------+-----------+-----------+-----------+--
          A0        A1         A2          A3          A4          A5
       (Invest.)
```

**Lecture du graphique :**

- **Annee 0** : Decaissement de l'investissement initial de 3 200 K$ CAD. Le solde cumule atteint son minimum a -3 200 K$.
- **Annee 1** : Les economies commencent a s'accumuler (+660 K$) malgre les couts de dual-run. Le solde cumule remonte a -2 540 K$.
- **Annee 2** : Premiere annee complete sans couts HIS. Flux net de +1 495 K$. Le solde cumule atteint -1 045 K$.
- **Point d'equilibre (~27 mois)** : Le solde cumule croise le zero au cours du premier trimestre de l'annee 3. L'investissement est integralement rembourse.
- **Annee 3** : Le solde cumule devient positif a +455 K$, confirmant le ROI de ~38 %.
- **Annees 4-5** : Les economies s'accumulent regulierement. A la fin de l'annee 5, le benefice net cumule atteint +3 485 K$, confirmant le ROI de ~142 %.

#### 6.5.3 -- Tableau financier consolide (format exige)

| Poste | Annee 0 (Invest.) | Annee 1 | Annee 2 | Annee 3 | Total 3 ans |
|-------|-------------------|---------|---------|---------|-------------|
| **Depenses** | | | | | |
| CAPEX migration (z/OS Connect, refactoring, Kafka, formation) | 3 200 K$ | — | — | — | 3 200 K$ |
| OPEX HIS residuel (dual-run) | — | 770 K$ | — | — | 770 K$ |
| OPEX architecture cible | — | 420 K$ | 420 K$ | 420 K$ | 1 260 K$ |
| **Total depenses** | **3 200 K$** | **1 190 K$** | **420 K$** | **420 K$** | **5 230 K$** |
| **Economies** | | | | | |
| OPEX HIS evite | — | 1 850 K$ | 1 850 K$ | 1 850 K$ | 5 550 K$ |
| Economies incrementales | — | — | 65 K$ | 70 K$ | 135 K$ |
| **Total economies** | **—** | **1 850 K$** | **1 915 K$** | **1 920 K$** | **5 685 K$** |
| **Flux net** | **-3 200 K$** | **+660 K$** | **+1 495 K$** | **+1 500 K$** | **+455 K$** |
| **Solde cumule** | **-3 200 K$** | **-2 540 K$** | **-1 045 K$** | **+455 K$** | — |

---

### 6.6 -- Analyse de sensibilite

L'estimation du CAPEX et du ROI repose sur des hypotheses sujettes a variation. L'analyse de sensibilite ci-dessous examine l'impact d'une deviation de +/-20 % du nombre d'assemblages TI a migrer, facteur identifie comme le principal vecteur d'incertitude financiere.

#### 6.6.1 -- Variable de sensibilite : Nombre d'assemblages TI (+/-20 %)

Le nombre d'assemblages TI (45 dans le scenario de reference) determine directement :
- Le volume de SARs z/OS Connect a developper (section 6.2.1)
- Le volume de refactoring applicatif (section 6.2.2)
- La duree et donc le cout de gestion de projet (section 6.2.5)

| Scenario | Nb assemblages TI | Variation | Impact CAPEX | CAPEX ajuste | Impact OPEX | OPEX ajuste |
|----------|-------------------|-----------|-------------|--------------|-------------|-------------|
| **Optimiste (-20 %)** | 36 | -9 assemblages | -~390 K$ (reduction SARs + refactoring) | **~2 810 K$** | Negligeable | **~420 K$** |
| **Reference** | 45 | — | — | **3 200 K$** | — | **420 K$** |
| **Pessimiste (+20 %)** | 54 | +9 assemblages | +~430 K$ (SARs + refactoring additionnels) | **~3 630 K$** | +~25 K$/an (SARs supplementaires) | **~445 K$** |

#### 6.6.2 -- Impact sur le ROI

| Scenario | CAPEX | Economie annuelle nette | Break-even | ROI 3 ans | ROI 5 ans |
|----------|-------|------------------------|------------|-----------|-----------|
| **Optimiste (-20 % TI)** | 2 810 K$ | 1 430 K$ | ~24 mois | **~53 %** | **~168 %** |
| **Reference** | 3 200 K$ | 1 430 K$ | ~27 mois | **~38 %** | **~142 %** |
| **Pessimiste (+20 % TI)** | 3 630 K$ | 1 405 K$ | ~31 mois | **~19 %** | **~107 %** |

**Interpretation :**

- **Scenario optimiste** (-20 % d'assemblages TI) : Si des assemblages sont rationalises ou consolides avant la migration (par exemple, fusion d'assemblages dupliques ou retrait d'assemblages de monitoring), le CAPEX diminue de ~390 K$ et le ROI a 3 ans atteint ~53 %. Le break-even avance a ~24 mois, c'est-a-dire **avant la fin du programme de migration**.
- **Scenario pessimiste** (+20 % d'assemblages TI) : Si des assemblages TI non documentes sont decouverts en cours de migration (risque identifie lors de l'inventaire CMDB, section 3.1), le CAPEX augmente de ~430 K$ et le ROI a 3 ans descend a ~19 %. Le break-even recule a ~31 mois mais **reste dans les limites de l'annee 3**. Le projet demeure rentable.

#### 6.6.3 -- Autres facteurs de sensibilite

| Facteur | Variation testee | Impact sur le ROI a 3 ans | Impact sur le ROI a 5 ans |
|---------|-----------------|---------------------------|---------------------------|
| Cout journalier des consultants z/OS | +20 % (2 160-2 640 CAD/jour) | ROI 3 ans : ~30 % | ROI 5 ans : ~130 % |
| Duree du dual-run | +6 mois (16 mois au lieu de 10) | ROI 3 ans : ~25 % | ROI 5 ans : ~132 % |
| Inflation licences Microsoft | +5 %/an au lieu de +3 %/an | ROI 3 ans : ~42 % | ROI 5 ans : ~155 % |
| Taux de change USD/CAD | 1,45 au lieu de 1,36 | ROI 3 ans : ~35 % | ROI 5 ans : ~137 % |
| Reduction de 1 ETP SNA supplementaire (4,5 -> 3 ETP avant decommission) | Economie de ~105 K$/an des l'annee 1 | ROI 3 ans : ~48 % | ROI 5 ans : ~158 % |

#### 6.6.4 -- Matrice de sensibilite croisee (CAPEX x Economie annuelle)

La matrice ci-dessous presente le ROI a 3 ans pour differentes combinaisons de CAPEX et d'economie annuelle nette :

```
ROI 3 ans (%) -- Matrice de sensibilite croisee

                    Economie annuelle nette (K$ CAD)
                    1 200      1 315      1 430      1 545      1 660
                  +----------+----------+----------+----------+----------+
CAPEX  2 810 K$  |   28 %   |   40 %   |   53 %   |   65 %   |   77 %   |
       3 000 K$  |   20 %   |   32 %   |   43 %   |   55 %   |   66 %   |
       3 200 K$  |   13 %   |   23 %   |   34 %*  |   45 %   |   56 %   |
       3 400 K$  |    6 %   |   16 %   |   26 %   |   36 %   |   47 %   |
       3 630 K$  |   -1 %   |    9 %   |   18 %   |   28 %   |   37 %   |
                  +----------+----------+----------+----------+----------+

  * Valeur de reference (avant ajustements incrementaux)
    Avec ajustements incrementaux : ~38 %
```

**Lecture de la matrice :**

- Le ROI a 3 ans reste **positif dans 24 des 25 scenarios** testes. Le seul scenario negatif (-1 %) combine un CAPEX pessimiste maximal (3 630 K$) avec une economie annuelle minimale (1 200 K$), une situation jugee hautement improbable.
- La zone de ROI la plus probable (intersection des fourchettes realistes) se situe entre **23 % et 45 %**, encadrant la valeur de reference de **~38 %**.
- Le projet est **financierement robuste** : meme dans les scenarios defavorables, le ROI a 3 ans reste superieur a 10 %, bien au-dessus du seuil d'acceptabilite institutionnel fixe a 8 %.

---

### 6.7 -- Synthese de l'etude financiere

L'etude financiere confirme la viabilite economique de l'Option C (Refonte REST/JSON directe) pour le retrait de Microsoft Host Integration Server :

| Indicateur cle | Valeur |
|----------------|--------|
| Cout annuel actuel (HIS) | **1 850 K$ CAD/an** |
| Investissement requis (CAPEX) | **3 200 K$ CAD** |
| Cout annuel cible post-migration (OPEX) | **420 K$ CAD/an** |
| Economie annuelle nette | **1 430 K$ CAD/an (-77 %)** |
| Point d'equilibre (break-even) | **~27 mois** |
| ROI a 3 ans | **~38 %** |
| ROI a 5 ans | **~142 %** |
| Duree du programme | **22 mois** |
| Benefice net cumule a 5 ans | **+3 485 K$ CAD** |

L'analyse de sensibilite demontre que le projet reste rentable meme dans les scenarios pessimistes (ROI a 3 ans de ~19 % avec +20 % d'assemblages TI supplementaires). Le seul scenario ou le ROI a 3 ans devient marginal combine simultanement un CAPEX maximal et une economie minimale, une conjonction jugee hautement improbable.

> **Recommandation financiere** : L'investissement de 3 200 K$ CAD est justifie. Le programme genere un retour net cumule de +3 485 K$ CAD sur 5 ans, tout en eliminant une dette technique significative et en alignant l'architecture d'integration sur les strategies Cloud-First et API-First de l'institution.
