## 1. Resume Executif

### 1.1 Constat

Microsoft Host Integration Server (HIS) est une couche middleware obsolete qui cree un couplage fournisseur fort avec l'ecosysteme Microsoft pour l'ensemble des acces au Mainframe z/OS.

### 1.2 Exposition au Vendor Lock-in

L'infrastructure HIS concentre **100 % des flux d'integration Mainframe** sur un fournisseur unique. L'exposition est significative :

| Indicateur | Volume | Risque |
|---|---|---|
| Serveurs HIS en production | **6** | Empreinte on-premise incompatible avec la strategie Cloud-First |
| Assemblages Transaction Integrator (TI) | **45** | Integrations point-a-point proprietaires, non decouvrables, non versionnees |
| Pools LU (sessions SNA) | **12** | Protocole SNA/LU6.2 sans chiffrement natif TLS |
| Liens de donnees DB2 (Data Links) | **8** | Point unique de defaillance pour la synchronisation DB2 <-> SQL Server |
| Applications .NET dependantes | **23** | Migration cloud bloquee tant que la dependance HIS subsiste |
| Applications Java dependantes | **4** | Contrainte identique via couches facades .NET |
| Programmes Mainframe exposes | **52** | Accessibles exclusivement via le middleware Microsoft |
| Cout annuel de fonctionnement | **1 850 K$ CAD** | Cout croissant sans valeur ajoutee fonctionnelle |

**Indicateur de risque du statu quo :** :red_circle: **Critique** -- 3 risques sur 5 du registre sont classes critiques (penurie de competences SNA, escalade des couts de licence, obsolescence de la plateforme). Le cout de l'inaction atteint **11 410 K$ CAD sur 5 ans**.

### 1.3 Simplification de la pile reseau

Le retrait de HIS elimine la totalite de la pile SNA/APPN (Systems Network Architecture / Advanced Peer-to-Peer Networking) du reseau de l'institution :

- **Elimination du protocole SNA/LU6.2** -- remplace par HTTPS/TLS 1.3, standard ouvert et chiffre de bout en bout.
- **Suppression du saut intermediaire** -- le chemin passe de 3 sauts (Application -> HIS -> VTAM -> CICS) a 1 saut (Application -> z/OS Connect -> CICS). Latence reduite de ~45 ms a ~12 ms (-73 %).
- **Reduction de la surface d'attaque** -- elimination d'un vecteur non chiffrable (SNA) et de 6 serveurs Windows intermediaires exposes.

### 1.4 Option recommandee

**Option C -- Refonte REST/JSON directe vers z/OS Connect EE** (recommandee a l'unanimite par l'equipe d'architecture).

| Parametre | Valeur |
|---|---|
| Investissement initial (CAPEX) | **3 200 K$ CAD** |
| Cout annuel cible (OPEX) | **420 K$ CAD/an** (vs 1 850 K$ CAD/an) |
| Economie annuelle nette | **1 430 K$ CAD (-77 %)** |
| ROI a 3 ans | **~38 %** |
| ROI a 5 ans | **~142 %** |
| Duree de migration | **22 mois** (6 phases, sans Big Bang) |
| Point d'equilibre | **~27 mois** |

L'investissement est amorti avant la fin de la troisieme annee. Le benefice net cumule atteint +3 485 K$ CAD sur 5 ans.

### 1.5 Synthese Avant / Apres

| Dimension | Avant (HIS) | Apres (z/OS Connect EE) |
|---|---|---|
| Dependance fournisseur | Microsoft -- exclusive et non substituable | Aucune -- protocoles ouverts (HTTPS, REST, JSON, Kafka) |
| Protocole reseau | SNA/LU6.2 -- pas de TLS, pas d'observabilite | HTTPS/TLS 1.3 -- chiffrement mTLS, traces distribuees |
| Latence end-to-end | ~45 ms (3 sauts, 2 protocoles) | ~12 ms (1 saut, 1 protocole) |
| Cout annuel d'exploitation | 1 850 K$ CAD (croissant) | 420 K$ CAD (stable) |
| Conformite reglementaire (DORA, BSIF B-13) | :red_circle: Non conforme -- concentration fournisseur critique | Conforme -- dependance eliminee |
