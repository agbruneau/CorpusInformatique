## 9. Annexes

> **Objectif :** Centraliser l'ensemble des documents de reference, glossaires, matrices et modeles necessaires a la bonne comprehension et a l'execution du programme de retrait de Microsoft Host Integration Server (HIS). Chaque annexe est autonome et peut etre consultee independamment.

---

### Annexe A -- Glossaire des termes techniques

Le glossaire ci-dessous couvre les termes, protocoles et technologies references dans l'ensemble du present document. Les definitions sont formulees dans le contexte specifique du projet de retrait HIS.

| Terme | Definition |
|-------|------------|
| **SNA** (*Systems Network Architecture*) | Architecture reseau proprietaire d'IBM, concue dans les annees 1970 pour les communications mainframe. SNA definit les protocoles de session, de transport et de presentation utilises par les terminaux 3270 et les passerelles HIS pour communiquer avec VTAM. Dans le contexte du projet, SNA est le protocole d'interconnexion entre les 6 serveurs HIS et le mainframe z15, supporte par les 12 pools LU. |
| **LU 6.2** (*Logical Unit type 6.2*) | Type d'unite logique SNA permettant la communication programme-a-programme (*peer-to-peer*) entre systemes distribues et mainframe. LU 6.2, egalement appele APPC, est le protocole sous-jacent utilise par les 45 assemblages TI pour invoquer les programmes CICS et IMS. Il est le principal protocole a eliminer lors de la migration vers z/OS Connect (HTTP/REST). |
| **APPN** (*Advanced Peer-to-Peer Networking*) | Extension d'IBM a SNA, ajoutant des capacites de routage dynamique et de resolution de noms entre les noeuds du reseau SNA. APPN permet aux sessions LU 6.2 de s'etablir sans definition statique de chaque chemin dans VTAM. Dans l'architecture actuelle, APPN est active sur SRV-HIS-01 et SRV-HIS-05 pour le routage automatique des sessions. |
| **TI** (*Transaction Integrator*) | Composant de Microsoft HIS qui genere des classes proxy (.NET ou COM+) a partir des definitions d'interface des programmes mainframe (COBOL copybooks, MFS). Les 45 assemblages TI du perimetre constituent la couche d'abstraction permettant aux 23 applications .NET d'invoquer les 52 programmes mainframe exposes. La migration consiste a remplacer ces proxys par des appels REST vers z/OS Connect. |
| **COMMAREA** (*Communication Area*) | Zone memoire partagee de CICS utilisee pour l'echange de donnees entre un programme client et un programme serveur CICS. La COMMAREA est limitee a 32 763 octets. Dans l'inventaire des TI assemblies, 28 des 45 assemblages utilisent COMMAREA comme zone d'echange. |
| **SAR** (*Service Archive*) | Artefact de deploiement de z/OS Connect EE. Un fichier SAR (.sar) encapsule la definition d'un service RESTful mapant une interface JSON vers un programme mainframe CICS ou IMS. La creation des SARs pour les 52 programmes mainframe exposes constitue le livrable principal de l'equipe mainframe pour chaque phase de migration. |
| **DRDA** (*Distributed Relational Database Architecture*) | Protocole ouvert defini par The Open Group pour l'acces a distance aux bases de donnees relationnelles. Dans l'architecture actuelle, le fournisseur OLE DB pour DB2 de HIS utilise DRDA (port TCP 446) sur SRV-HIS-04 pour les 8 Linked Servers SQL Server vers DB2 z/OS. La migration remplacera ce mecanisme par IBM Data Gate ou un acces JDBC natif. |
| **IPIC** (*IP Interconnectivity*) | Protocole TCP/IP natif de CICS TS permettant la communication inter-regions et la connectivite depuis des clients externes sans passer par SNA/VTAM. IPIC est le protocole utilise par z/OS Connect EE pour atteindre les regions CICS, eliminant ainsi la dependance a SNA et aux pools LU. |
| **CDC** (*Change Data Capture*) | Technique de capture incrementale des modifications de donnees dans une base source (DB2 z/OS) pour les repliquer vers une base cible (SQL Server, Kafka). Le CDC est utilise dans la phase 2 du programme pour remplacer les 8 Data Links DB2 par un flux evenementiel Kafka, garantissant la coherence des donnees sans passer par le fournisseur DRDA de HIS. |
| **VTAM** (*Virtual Telecommunications Access Method*) | Logiciel systeme IBM z/OS qui gere les sessions SNA entre les unites logiques (LU) et les applications mainframe (CICS, IMS). VTAM est le point d'entree SNA sur le mainframe z15 ; il recoit les connexions des passerelles SNA HIS (SRV-HIS-01 et SRV-HIS-05). Apres la migration, les definitions VTAM APPL associees aux pools LU HIS seront desactivees. |
| **CICS** (*Customer Information Control System*) | Serveur transactionnel IBM z/OS hebergeant les programmes en ligne (COBOL, PL/I). Dans le perimetre du projet, 8 regions CICS TS 5.6 (CICSPROD1/2, CICSLOAN1/2, CICSINS1, CICSPAY1, CICSFX01, CICSCRM1) hebergent 27 des 52 programmes mainframe exposes via HIS. Apres la migration, ces programmes seront accedes via z/OS Connect EE en utilisant le protocole IPIC. |
| **IMS** (*Information Management System*) | Systeme de gestion de bases de donnees hierarchiques et de transactions d'IBM. IMS TM 15.3 heberge 25 des 52 programmes mainframe du perimetre, accessibles via IMS Connect (HWSSMPL1). Les assemblages TI COM+ sur SRV-HIS-03 communiquent avec IMS via le format MFS (Message Format Service). |
| **z/OS Connect** (*z/OS Connect Enterprise Edition*) | Composant IBM z/OS qui expose les programmes CICS et IMS sous forme d'API RESTful (JSON/HTTPS). z/OS Connect EE est la pierre angulaire de l'architecture cible : il remplace la totalite des 45 assemblages TI et des 12 pools LU en fournissant un point d'acces moderne, securise (mTLS, OAuth 2.0) et observable (OpenAPI, OpenTelemetry). |
| **APIM** (*API Management*) | Plateforme de gestion du cycle de vie des API (publication, securisation, throttling, monetisation). Dans l'architecture cible, Azure API Management (ou equivalent) sera deploye en frontal de z/OS Connect pour gerer l'authentification OAuth 2.0/JWT, le rate limiting et le portail developpeur. |
| **mTLS** (*mutual Transport Layer Security*) | Extension du protocole TLS ou le client et le serveur s'authentifient mutuellement par certificats X.509. mTLS est exige dans l'architecture cible pour tous les flux entre les applications distribuees et z/OS Connect EE, conformement aux exigences DORA et BSIF B-13. |
| **OAuth 2.0** | Protocole d'autorisation delegue (RFC 6749) utilise dans l'architecture cible pour delivrer des jetons d'acces aux applications souhaitant consommer les API z/OS Connect via l'API Management. Le flux *client_credentials* est privilegie pour les communications machine-a-machine. |
| **JWT** (*JSON Web Token*) | Format de jeton standardise (RFC 7519) utilise conjointement avec OAuth 2.0 pour vehiculer les claims d'identite et d'autorisation entre l'API Management et z/OS Connect. Les JWT sont signes (JWS) et chiffres (JWE) conformement aux politiques de securite institutionnelles. |
| **OpenAPI** (*anciennement Swagger*) | Specification (v3.1) de description d'API RESTful en format JSON ou YAML. z/OS Connect EE genere automatiquement les documents OpenAPI pour chaque SAR deploye. Ces specifications alimentent le portail developpeur de l'API Management et servent de contrat d'interface entre les equipes. |
| **Avro** (*Apache Avro*) | Format de serialisation de donnees utilise dans les flux Apache Kafka pour le transport des evenements CDC entre DB2 z/OS et les consommateurs distribues. Avro offre un schema evolutif (schema registry) qui facilite la gestion des changements de structure de donnees. |
| **gRPC** (*Google Remote Procedure Call*) | Protocole RPC haute performance base sur HTTP/2 et Protocol Buffers. gRPC est utilise par certaines applications Java (OpenBanking.API) pour communiquer avec la couche facade .NET. Apres la migration, ces flux pourront etre simplifies en appelant directement z/OS Connect via REST/HTTPS. |
| **Protobuf** (*Protocol Buffers*) | Format de serialisation binaire de Google, utilise comme format de message par gRPC. Les definitions Protobuf (.proto) des interfaces actuelles devront etre converties en schemas OpenAPI lors de la migration des flux gRPC vers REST. |

---

### Annexe B -- Inventaire complet des TI assemblies

L'inventaire ci-dessous synthetise les 45 assemblages Transaction Integrator recenses a la section 3.2.2, enrichis des informations de criticite et de la phase de migration prevue selon le plan de mise en oeuvre (section 8).

#### B.1 -- Tableau de synthese

| # | Nom de l'assemblage | Technologie | Interface cible | Programme appele | Criticite | Phase de migration |
|---|---------------------|-------------|-----------------|------------------|-----------|--------------------|
| 1 | BNK.Accounts.Inquiry.TI | .NET (WCF) | CICS TS 5.6 -- CICSPROD1 | ACCTINQ0 (COBOL) | Critique | Phase 1 |
| 2 | BNK.Accounts.Update.TI | .NET (WCF) | CICS TS 5.6 -- CICSPROD1 | ACCTUPD0 (COBOL) | Critique | Phase 1 |
| 3 | BNK.Accounts.Open.TI | .NET (WCF) | CICS TS 5.6 -- CICSPROD1 | ACCTOPN0 (COBOL) | Critique | Phase 1 |
| 4 | BNK.Accounts.Close.TI | .NET (WCF) | CICS TS 5.6 -- CICSPROD1 | ACCTCLS0 (COBOL) | Critique | Phase 1 |
| 5 | BNK.Transfer.Domestic.TI | .NET (WCF) | CICS TS 5.6 -- CICSPROD2 | XFRDMS00 (COBOL) | Critique | Phase 2 |
| 6 | BNK.Transfer.Intl.TI | .NET (WCF) | CICS TS 5.6 -- CICSPROD2 | XFRINT00 (COBOL) | Critique | Phase 3 |
| 7 | BNK.Transfer.Batch.TI | .NET (WCF) | CICS TS 5.6 -- CICSPROD2 | XFRBAT00 (COBOL) | Elevee | Phase 2 |
| 8 | LN.PersonalLoan.Calc.TI | .NET (WCF) | CICS TS 5.6 -- CICSLOAN1 | LNCALC00 (COBOL) | Elevee | Phase 4 |
| 9 | LN.PersonalLoan.Create.TI | .NET (WCF) | CICS TS 5.6 -- CICSLOAN1 | LNCREA00 (COBOL) | Elevee | Phase 4 |
| 10 | LN.PersonalLoan.Status.TI | .NET (WCF) | CICS TS 5.6 -- CICSLOAN1 | LNSTAT00 (COBOL) | Elevee | Phase 4 |
| 11 | LN.Mortgage.Calc.TI | .NET (WCF) | CICS TS 5.6 -- CICSLOAN2 | MTCALC00 (COBOL) | Elevee | Phase 4 |
| 12 | LN.Mortgage.Create.TI | .NET (WCF) | CICS TS 5.6 -- CICSLOAN2 | MTCREA00 (COBOL) | Elevee | Phase 4 |
| 13 | LN.Mortgage.Amort.TI | .NET (WCF) | CICS TS 5.6 -- CICSLOAN2 | MTAMRT00 (COBOL) | Elevee | Phase 4 |
| 14 | INS.Policy.Inquiry.TI | .NET (WCF) | CICS TS 5.6 -- CICSINS1 | INSINQ00 (COBOL) | Elevee | Phase 3 |
| 15 | INS.Policy.Create.TI | .NET (WCF) | CICS TS 5.6 -- CICSINS1 | INSCRE00 (COBOL) | Elevee | Phase 3 |
| 16 | INS.Claim.Submit.TI | .NET (WCF) | CICS TS 5.6 -- CICSINS1 | INSCLM00 (COBOL) | Elevee | Phase 3 |
| 17 | INS.Claim.Status.TI | .NET (WCF) | CICS TS 5.6 -- CICSINS1 | INSSTS00 (COBOL) | Elevee | Phase 3 |
| 18 | PAY.Domestic.Execute.TI | .NET (WCF) | CICS TS 5.6 -- CICSPAY1 | PAYDMS00 (COBOL) | Critique | Phase 2 |
| 19 | PAY.Domestic.Reverse.TI | .NET (WCF) | CICS TS 5.6 -- CICSPAY1 | PAYREV00 (COBOL) | Critique | Phase 2 |
| 20 | PAY.Intl.Execute.TI | .NET (WCF) | CICS TS 5.6 -- CICSPAY1 | PAYINT00 (COBOL) | Critique | Phase 3 |
| 21 | PAY.Intl.Status.TI | .NET (WCF) | CICS TS 5.6 -- CICSPAY1 | PAYSTS00 (COBOL) | Critique | Phase 3 |
| 22 | PAY.Batch.Clearing.TI | .NET (WCF) | CICS TS 5.6 -- CICSPAY1 | PAYCLR00 (COBOL) | Critique | Phase 2 |
| 23 | FX.Rate.Inquiry.TI | .NET (WCF) | CICS TS 5.6 -- CICSFX01 | FXRATE00 (COBOL) | Elevee | Phase 3 |
| 24 | FX.Trade.Execute.TI | .NET (WCF) | CICS TS 5.6 -- CICSFX01 | FXTRAD00 (COBOL) | Elevee | Phase 3 |
| 25 | FX.Position.Report.TI | .NET (WCF) | CICS TS 5.6 -- CICSFX01 | FXPOSN00 (PL/I) | Elevee | Phase 3 |
| 26 | CRM.Customer.Inquiry.TI | .NET (WCF) | CICS TS 5.6 -- CICSCRM1 | CUSTINQ0 (COBOL) | Elevee | Phase 1 |
| 27 | CRM.Customer.Update.TI | .NET (WCF) | CICS TS 5.6 -- CICSCRM1 | CUSTUPD0 (COBOL) | Elevee | Phase 1 |
| 28 | CRM.Interaction.Log.TI | .NET (WCF) | CICS TS 5.6 -- CICSCRM1 | CUSTLOG0 (COBOL) | Elevee | Phase 1 |
| 29 | BNK.GL.PostEntry.TI | COM+ | IMS TM 15.3 -- IMSPROD1 | GLPOST00 (COBOL) | Critique | Phase 2 |
| 30 | BNK.GL.TrialBalance.TI | COM+ | IMS TM 15.3 -- IMSPROD1 | GLTBAL00 (COBOL) | Critique | Phase 2 |
| 31 | BNK.GL.Reconcile.TI | COM+ | IMS TM 15.3 -- IMSPROD1 | GLRECN00 (COBOL) | Critique | Phase 2 |
| 32 | BNK.GL.Extract.TI | COM+ | IMS TM 15.3 -- IMSPROD1 | GLEXTR00 (COBOL) | Critique | Phase 2 |
| 33 | BNK.GL.CurrencyReval.TI | COM+ | IMS TM 15.3 -- IMSPROD1 | GLCURR00 (PL/I) | Critique | Phase 2 |
| 34 | LN.Amort.Schedule.TI | COM+ | IMS TM 15.3 -- IMSLOAN1 | LNAMRT00 (COBOL) | Elevee | Phase 4 |
| 35 | LN.Amort.Recalc.TI | COM+ | IMS TM 15.3 -- IMSLOAN1 | LNRCAL00 (COBOL) | Elevee | Phase 4 |
| 36 | LN.Provision.Calc.TI | COM+ | IMS TM 15.3 -- IMSLOAN1 | LNPROV00 (COBOL) | Elevee | Phase 5 |
| 37 | LN.InterestAccrual.TI | COM+ | IMS TM 15.3 -- IMSLOAN1 | LNINTC00 (COBOL) | Elevee | Phase 5 |
| 38 | BNK.DDA.Balance.TI | .NET (WCF) | IMS TM 15.3 -- IMSPROD1 | DDABAL00 (COBOL) | Critique | Phase 1 |
| 39 | BNK.DDA.Statement.TI | .NET (WCF) | IMS TM 15.3 -- IMSPROD1 | DDASTM00 (COBOL) | Critique | Phase 1 |
| 40 | BNK.DDA.Hold.TI | .NET (WCF) | IMS TM 15.3 -- IMSPROD1 | DDAHLD00 (COBOL) | Critique | Phase 2 |
| 41 | REG.Reporting.Extract.TI | COM+ | IMS TM 15.3 -- IMSPROD1 | REGRPT00 (PL/I) | Critique | Phase 5 |
| 42 | REG.Compliance.Check.TI | COM+ | IMS TM 15.3 -- IMSPROD1 | REGCHK00 (PL/I) | Critique | Phase 5 |
| 43 | REG.AML.Screen.TI | .NET (WCF) | IMS TM 15.3 -- IMSPROD1 | REGAML00 (COBOL) | Critique | Phase 3 |
| 44 | UTIL.Ping.Health.TI | .NET (WCF) | CICS TS 5.6 -- CICSPROD1 | HLTHCK00 (COBOL) | Moyenne | Phase 1 |
| 45 | UTIL.Trace.Diag.TI | COM+ | IMS TM 15.3 -- IMSPROD1 | DIAGTR00 (COBOL) | Moyenne | Phase 1 |

#### B.2 -- Repartition par phase de migration

| Phase | Domaine fonctionnel | Nb. assemblages | Assemblages inclus (par #) |
|:-----:|---------------------|:---------------:|---------------------------|
| Phase 1 | Consultation de comptes | 8 | #1, #2, #3, #4, #26, #27, #28, #38, #39, #44, #45 (*) |
| Phase 2 | Paiements domestiques | 12 | #5, #7, #18, #19, #22, #29, #30, #31, #32, #33, #40 |
| Phase 3 | Paiements internationaux | 15 | #6, #14, #15, #16, #17, #20, #21, #23, #24, #25, #43 |
| Phase 4 | Gestion des prets | 6 | #8, #9, #10, #11, #12, #13, #34, #35 |
| Phase 5 | Reporting reglementaire | 4 | #36, #37, #41, #42 |
| **Total** | | **45** | |

(*) Les assemblages utilitaires (#44, #45) sont migres en Phase 1 pour valider le pattern de monitoring natif de z/OS Connect des la premiere phase.

#### B.3 -- Repartition par technologie

| Technologie | Nombre | Pourcentage | Serveur HIS hebergeant |
|-------------|:------:|:-----------:|------------------------|
| .NET (WCF) | 28 | 62 % | SRV-HIS-02 |
| COM+ | 17 | 38 % | SRV-HIS-03 |
| **Total** | **45** | **100 %** | |

#### B.4 -- Repartition par interface mainframe cible

| Interface cible | Nombre | Programmes appelant |
|-----------------|:------:|---------------------|
| CICS TS 5.6 | 28 | 27 programmes COBOL + 1 programme PL/I |
| IMS TM 15.3 | 17 | 14 programmes COBOL + 3 programmes PL/I |
| **Total** | **45** | **52 programmes (incluant 7 sous-programmes internes)** |

---

### Annexe C -- Matrice RACI du projet de retrait

La matrice RACI ci-dessous definit les responsabilites de chaque role pour les activites cles du programme de retrait HIS. Les roles sont definis en coherence avec la structure de gouvernance du programme (section 8).

**Legende :**

| Lettre | Signification |
|:------:|---------------|
| **R** | *Responsible* -- Realise l'activite |
| **A** | *Accountable* -- Approuve et rend des comptes (un seul par activite) |
| **C** | *Consulted* -- Fournit une expertise ou un avis avant la decision |
| **I** | *Informed* -- Est informe du resultat ou de l'avancement |

#### C.1 -- Matrice RACI principale

| Activite | Sponsor Executif | Chef de Programme | Architecte Solution | Equipe Mainframe | Equipe Applicative (.NET/Java) | Equipe Reseau | Equipe Securite | Equipe QA | Equipe DBA | Responsable Metier |
|----------|:----------------:|:-----------------:|:-------------------:|:----------------:|:------------------------------:|:-------------:|:---------------:|:---------:|:----------:|:------------------:|
| **Approbation du budget** (CAPEX 3 200 K$ CAD) | **A** | R | C | I | I | I | I | I | I | C |
| **Developpement des SARs z/OS Connect** (52 programmes) | I | A | C | **R** | C | I | C | I | I | I |
| **Refactoring des applications** (23 .NET + 4 Java) | I | A | C | C | **R** | I | I | C | I | C |
| **Configuration reseau et firewall** (ouverture HTTPS/Kafka) | I | A | C | C | I | **R** | C | I | I | I |
| **Configuration mTLS et securite** (certificats, OAuth 2.0, JWT) | I | A | C | C | C | C | **R** | I | I | I |
| **Pilotage du dual-run** (shadow, parallel, canary) | I | **A** | R | C | C | C | C | R | C | I |
| **Tests de non-regression** (critere G-01, 100 % reussite) | I | A | C | C | C | I | I | **R** | C | C |
| **Decision Go/No-Go** (bascule de chaque phase) | **A** | R | C | C | C | C | C | C | C | R |
| **Decommissionnement HIS** (6 serveurs, 12 LU pools, 8 Data Links) | I | **A** | C | R | I | R | R | I | **R** | I |

#### C.2 -- Detail par phase du programme

##### Phase 1 -- Consultation de comptes (8 TI assemblies, 3 mois)

| Activite detaillee | Sponsor | Chef Prog. | Archi. | Mainframe | Apps | Reseau | Securite | QA | DBA | Metier |
|--------------------|:-------:|:----------:|:------:|:---------:|:----:|:------:|:--------:|:--:|:---:|:------:|
| Deploiement z/OS Connect EE sur LPAR | I | A | C | **R** | I | C | C | I | I | I |
| Creation des 8 SARs Phase 1 | I | A | C | **R** | C | I | I | I | I | I |
| Refactoring des clients .NET (WCF vers REST) | I | A | C | I | **R** | I | I | I | I | I |
| Ouverture flux HTTPS (port 9443) | I | A | C | C | I | **R** | C | I | I | I |
| Emission certificats mTLS | I | A | C | C | I | I | **R** | I | I | I |
| Tests de non-regression Phase 1 | I | A | C | C | C | I | I | **R** | I | C |
| Dual-run (21 jours) | I | **A** | R | C | C | I | I | R | I | I |
| Go/No-Go Phase 1 | **A** | R | C | C | C | I | C | C | I | R |

##### Phase 6 -- Decommissionnement HIS (2 mois)

| Activite detaillee | Sponsor | Chef Prog. | Archi. | Mainframe | Apps | Reseau | Securite | QA | DBA | Metier |
|--------------------|:-------:|:----------:|:------:|:---------:|:----:|:------:|:--------:|:--:|:---:|:------:|
| Desactivation des 12 LU pools | I | A | C | **R** | I | I | I | I | I | I |
| Suppression des 8 Data Links DB2 | I | A | C | I | I | I | I | I | **R** | I |
| Retrait des 6 serveurs HIS (decommission OS) | I | **A** | C | I | I | R | C | I | I | I |
| Nettoyage regles firewall SNA | I | A | C | I | I | **R** | C | I | I | I |
| Suppression des definitions VTAM APPL | I | A | C | **R** | I | I | I | I | I | I |
| Audit de securite final | I | A | C | C | I | C | **R** | I | I | I |
| Cloture du programme et rapport final | **A** | R | C | I | I | I | I | I | I | C |

---

### Annexe D -- References documentaires

#### D.1 -- Bulletins et avis de securite Microsoft

| Reference | Titre | Date | Pertinence pour le projet |
|-----------|-------|:----:|---------------------------|
| CVE-2020-1569 | Microsoft Edge (EdgeHTML-based) Memory Corruption Vulnerability (affectant egalement les composants HIS Session Integrator) | Aout 2020 | Vulnerabilite critique demontrant le risque de surface d'attaque de la couche HIS. Corrigee par CU, mais illustrant la fragilite de l'ecosysteme. |
| Microsoft Lifecycle Policy -- HIS 2016 | Fin du support etendu : octobre 2025 | Publie 2016 | SRV-HIS-06 fonctionne sous HIS 2016. Apres octobre 2025, aucun correctif de securite ne sera disponible. |
| Microsoft Lifecycle Policy -- HIS 2020 | Fin du support etendu : janvier 2031 | Publie 2020 | Les 5 autres serveurs HIS utilisent HIS 2020. Bien que le support soit actif jusqu'en 2031, la rarefaction des competences et le cout justifient un retrait anticipe. |
| Microsoft HIS 2020 CU4 Release Notes | Correctifs cumulatifs pour HIS 2020 | Octobre 2023 | Derniere mise a jour cumulative deployee sur SRV-HIS-01, -02, -04, -05. |

#### D.2 -- Documentation IBM z/OS Connect

| Reference | Titre | Version | Pertinence pour le projet |
|-----------|-------|:-------:|---------------------------|
| IBM SC27-9584 | z/OS Connect Enterprise Edition -- Guide d'installation et de configuration | V3.x | Documentation de reference pour le deploiement des SARs et la configuration des API Requester/Provider. |
| IBM SC27-9585 | z/OS Connect EE -- Guide de programmation des services | V3.x | Procedures de creation des SARs a partir des copybooks COBOL et des definitions MFS IMS. |
| IBM SC27-9586 | z/OS Connect EE -- Reference de l'API REST | V3.x | Specification des endpoints REST generes, format JSON, gestion des erreurs. |
| IBM Redbook SG24-8494 | Extending z/OS Connect with API Management | 2023 | Patterns d'integration entre z/OS Connect et Azure API Management (APIM). |
| IBM SC27-8631 | IMS Connect Guide | V15.3 | Configuration d'IMS Connect (HWSSMPL1) pour la connectivite z/OS Connect vers IMS TM. |

#### D.3 -- Cadres reglementaires et normatifs

| Reference | Titre | Emetteur | Pertinence pour le projet |
|-----------|-------|----------|---------------------------|
| Reglement (UE) 2022/2554 | **DORA** -- Digital Operational Resilience Act | Parlement europeen / Conseil de l'UE | Exigences de resilience operationnelle numerique applicables aux institutions financieres. Imposent des tests de resilience, la gestion du risque TIC et la surveillance des prestataires tiers critiques. Le retrait de HIS contribue a la reduction du risque TIC lie aux technologies obsolescentes. |
| Ligne directrice B-13 | **Gestion du risque lie aux technologies et du cyberrisque** | Bureau du surintendant des institutions financieres (BSIF), Canada | Exigences specifiques aux institutions financieres canadiennes en matiere de gestion du risque technologique, incluant la modernisation des systemes patrimoniaux et la gestion de l'obsolescence. Directement applicable au retrait de HIS. |
| NIST SP 800-53 Rev. 5 | Security and Privacy Controls for Information Systems | NIST, Etats-Unis | Controles de securite de reference pour la configuration mTLS, OAuth 2.0 et la gestion des certificats dans l'architecture cible. |
| PCI DSS v4.0 | Payment Card Industry Data Security Standard | PCI SSC | Exigences de securite applicables aux flux de paiement (domaines migres en phases 2 et 3). |

#### D.4 -- Documents strategiques internes

| Reference interne | Titre | Date | Portee |
|-------------------|-------|:----:|--------|
| STR-CLOUD-2025 | Strategie Cloud et Modernisation des Infrastructures | Janvier 2025 | Feuille de route de migration vers le cloud hybride. Le retrait de HIS s'inscrit dans l'axe "Elimination des middlewares proprietaires". |
| STR-API-2025 | Strategie API et Economie de Plateforme | Mars 2025 | Principes directeurs pour l'exposition des services via des API RESTful. z/OS Connect et APIM sont identifies comme composants strategiques. |
| ARCH-MF-2024 | Architecture de Reference Mainframe | Octobre 2024 | Architecture cible pour l'integration mainframe, incluant z/OS Connect EE, IMS Connect, IPIC et les patterns CDC/Kafka. |
| ARCH-SEC-2025 | Architecture de Reference Securite -- Integration Mainframe | Fevrier 2025 | Standards de securite pour les flux mainframe : mTLS 1.3, OAuth 2.0/JWT, gestion des certificats, rotation automatique. |
| GOV-PROJ-2024 | Cadre de Gouvernance des Programmes de Transformation | Septembre 2024 | Methodologie de gestion de programme, processus Go/No-Go, matrice RACI, comites de pilotage. |
| FIN-BC-HIS-2025 | Business Case -- Retrait de Microsoft HIS | Avril 2025 | Analyse financiere detaillee : CAPEX 3 200 K$ CAD, OPEX cible 420 K$ CAD/an, ROI a 3 ans ~38 %, ROI a 5 ans ~142 %. |

#### D.5 -- Benchmarks de performance

| Source | Titre | Resultats cles |
|--------|-------|----------------|
| IBM Performance Report -- z/OS Connect EE V3 | Throughput and Latency Benchmarks | Latence mediane de 8-12 ms pour les invocations CICS via IPIC (vs. 35-45 ms via SNA/LU6.2 + HIS TI). Debit soutenu de 5 000 transactions/seconde par LPAR. |
| Tests internes (POC Phase 0) | Proof of Concept -- ACCTINQ0 via z/OS Connect | Latence P50 = 11 ms, P95 = 18 ms, P99 = 28 ms (contre P50 = 42 ms, P95 = 65 ms, P99 = 110 ms via HIS). Reduction de latence de 73 % au P50. |
| Tests internes (POC Phase 0) | Proof of Concept -- GLPOST00 via z/OS Connect + IMS Connect | Latence P50 = 15 ms, P95 = 24 ms (contre P50 = 55 ms, P95 = 95 ms via HIS COM+). Reduction de latence de 73 % au P50. |
| Kafka Connect CDC Benchmark | Throughput CDC DB2 z/OS vers Kafka | Debit soutenu de 50 000 evenements/seconde avec une latence de replication < 500 ms. Compatible avec les 935 000 lignes/jour transitant par les 8 Data Links actuels. |

---

### Annexe E -- Template de proces-verbal des ateliers de decouverte

Le modele ci-dessous est utilise pour documenter chaque atelier de decouverte mene dans le cadre de l'analyse de l'etat actuel et de la conception de l'architecture cible. Un proces-verbal est produit pour chaque atelier et archive dans le referentiel documentaire du programme.

---

#### PROCES-VERBAL D'ATELIER DE DECOUVERTE

**Programme :** Retrait de Microsoft Host Integration Server (HIS)

---

**Informations generales**

| Champ | Valeur |
|-------|--------|
| Numero de l'atelier | ATL-HIS-XXX |
| Date | JJ/MM/AAAA |
| Heure de debut | HH:MM |
| Heure de fin | HH:MM |
| Lieu / Lien visioconference | ___________________________ |
| Animateur | ___________________________ |
| Scribe | ___________________________ |

---

**Participants**

| # | Nom | Role | Equipe | Present / Excuse |
|---|-----|------|--------|:----------------:|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |

---

**Ordre du jour**

| # | Sujet | Duree prevue | Presentateur |
|---|-------|:------------:|--------------|
| 1 | | | |
| 2 | | | |
| 3 | | | |

---

**Compte rendu des discussions**

| # | Sujet discute | Points cles | Decisions prises | Responsable |
|---|---------------|-------------|------------------|-------------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |

---

**Composants HIS identifies ou valides lors de l'atelier**

| # | Composant HIS (serveur, TI assembly, LU pool, Data Link) | Observation | Impact sur la migration | Criticite |
|---|----------------------------------------------------------|-------------|------------------------|-----------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |

---

**Risques et enjeux souleves**

| # | Risque / Enjeu | Probabilite (F/M/E) | Impact (F/M/E) | Action de mitigation proposee | Responsable |
|---|----------------|:--------------------:|:--------------:|-------------------------------|-------------|
| 1 | | | | | |
| 2 | | | | | |

---

**Actions a suivre**

| # | Action | Responsable | Echeance | Statut |
|---|--------|-------------|:--------:|:------:|
| 1 | | | | A faire |
| 2 | | | | A faire |
| 3 | | | | A faire |

---

**Prochaine reunion**

| Champ | Valeur |
|-------|--------|
| Date prevue | JJ/MM/AAAA |
| Objectif | ___________________________ |

---

**Approbation du proces-verbal**

| Role | Nom | Signature | Date |
|------|-----|-----------|:----:|
| Animateur | | | |
| Scribe | | | |
| Responsable metier | | | |

---

> **Note :** Ce modele est disponible en format electronique dans le referentiel documentaire du programme (SharePoint > Programme HIS > Templates > ATL-HIS-Template.docx). Tout atelier de decouverte doit donner lieu a un proces-verbal dans un delai de 48 heures suivant la tenue de l'atelier.

---

*Fin de la section 9 -- Annexes*
