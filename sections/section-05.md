## 5. Scenarios de Retrait

### Objectif

Presenter trois scenarios mutuellement exclusifs pour le retrait de Microsoft Host Integration Server (HIS), evalues selon une grille de criteres uniformes afin de permettre une decision eclairee. Chaque option est analysee sous les angles suivants : Complexite de mise en oeuvre, Reduction du Vendor Lock-in, Impact sur la latence, Cout d'investissement (CAPEX), Cout recurrent (OPEX), Risque de migration, et Alignement strategique.

### Grille d'evaluation uniforme

| Critere | Description |
|---------|-------------|
| Complexite de mise en oeuvre | Effort d'implementation (Faible / Moyen / Eleve) |
| Reduction du Vendor Lock-in | Degre d'elimination de la dependance Microsoft (Nulle / Partielle / Totale) |
| Impact sur la latence | Amelioration, degradation ou neutralite sur les temps de reponse end-to-end |
| Cout d'investissement (CAPEX) | Estimation budgetaire initiale |
| Cout recurrent (OPEX) | Couts annuels de fonctionnement post-migration |
| Risque de migration | Probabilite de regression fonctionnelle ou d'interruption de service |
| Alignement strategique | Conformite avec les strategies Cloud-First et API-First |

---

### 5.1 -- Option A : Containment (Virtualisation / Conteneurisation de HIS)

#### 5.1.1 Description de la strategie

L'option Containment consiste a encapsuler les 6 serveurs HIS existants dans des machines virtuelles (Azure VM) ou des conteneurs Windows (Windows Containers sur Azure Kubernetes Service -- AKS). L'objectif est de prolonger la duree de vie operationnelle de l'infrastructure HIS sans modifier l'architecture logicielle sous-jacente.

Le scenario se decline en deux variantes :

- **Variante VM** : Migration lift-and-shift des 6 serveurs HIS vers des VMs Azure (Windows Server 2022) avec conservation integrale de la configuration SNA Gateway, Transaction Integrator et Data Links.
- **Variante Conteneur** : Empaquetage des composants HIS dans des conteneurs Windows deployables sur AKS. Cette variante requiert la resolution des contraintes de compatibilite liees aux dependances COM+ et DCOM du Transaction Integrator.

Dans les deux cas, les 45 TI assemblies, les 12 LU pools et les 8 Data Links DB2 restent inchanges. Le protocole SNA/LU6.2 continue d'etre utilise pour la communication avec le Mainframe via VTAM.

#### 5.1.2 Analyse des limites

Cette approche presente des limites structurelles majeures :

- **Dependance SNA/LU6.2 non eliminee** : La conteneurisation de HIS ne modifie pas les protocoles de communication. L'ensemble de la chaine SNA (VTAM, LU pools, DLC) reste en place, avec ses contraintes de chiffrement, de routage et de diagnostic.
- **Aucune reduction du Vendor Lock-in** : Les 23 applications .NET et les 4 applications Java dependantes continuent de s'integrer au Mainframe exclusivement via les API proprietaires de HIS (TI COM+, .NET Interop, DRDA via Data Links). Microsoft reste le fournisseur exclusif de la couche d'integration.
- **Complexite d'exploitation accrue** : L'ajout d'une couche de virtualisation ou de conteneurisation ne simplifie pas l'architecture ; elle ajoute un niveau d'abstraction supplementaire a gerer (orchestration Kubernetes, images Windows, mises a jour de securite du runtime HIS).
- **Aucune amelioration de latence** : Le trajet reseau reste identique -- Application -> HIS -> SNA Gateway -> VTAM -> CICS -- avec les memes sauts intermediaires et la meme conversion de protocole.
- **Support Microsoft non garanti** : L'execution de HIS dans des conteneurs Windows n'est pas un scenario officiellement supporte par Microsoft. Les incidents en production pourraient ne pas etre couverts par le support Premier/Unified.

#### 5.1.3 Cas d'usage valides

Malgre ses limites, l'option Containment est pertinente dans des contextes precis :

- **Prolongation temporaire pour les flux a faible priorite** : Pendant la migration des flux critiques (paiements, consultation de comptes), les flux secondaires (reporting interne, extractions batch) peuvent rester sur une infrastructure HIS virtualisee.
- **Reduction de l'empreinte physique on-premise** : Si l'institution souhaite accelerer la fermeture de centres de donnees physiques, la migration des VMs HIS vers Azure permet de liberer du rack space sans refactoring applicatif.
- **Strategie de coexistence (dual-run)** : Pendant la phase de migration progressive de l'Option C (22 mois), les serveurs HIS conteneurises peuvent servir de chemin de repli (fallback) pour les domaines non encore migres.

#### 5.1.4 Architecture conteneurisee

```mermaid
graph TB
    subgraph Azure Cloud
        subgraph AKS Cluster - Windows Node Pool
            C1[Container HIS<br/>SNA Gateway<br/>Win Server Core 2022]
            C2[Container HIS<br/>Transaction Integrator<br/>COM+ / .NET Interop]
            C3[Container HIS<br/>Data Links<br/>DRDA Provider]
        end
        AV[Azure Virtual Network<br/>Hub-Spoke Topology]
    end

    subgraph Applications
        APP1[23 Applications .NET]
        APP2[4 Applications Java]
    end

    subgraph Mainframe z/OS
        VTAM[VTAM / SNA]
        CICS[CICS TS v5.6]
        DB2[DB2 z/OS v13]
    end

    APP1 -->|DCOM / TCP| C2
    APP2 -->|TCP via JCA| C2
    C2 -->|SNA LU6.2| C1
    C1 -->|SNA LU6.2<br/>via ExpressRoute| VTAM
    VTAM --> CICS
    C3 -->|DRDA<br/>via ExpressRoute| DB2

    style C1 fill:#8B0000,stroke:#fff,color:#fff
    style C2 fill:#8B0000,stroke:#fff,color:#fff
    style C3 fill:#8B0000,stroke:#fff,color:#fff
```

> **Constat** : L'architecture reste fondamentalement identique a l'etat actuel. Seul le support d'execution change (conteneurs au lieu de serveurs bare-metal). Les protocoles proprietaires (SNA/LU6.2, DCOM, DRDA) sont integralement conserves.

#### 5.1.5 Evaluation selon la grille uniforme

| Critere | Evaluation | Detail |
|---------|------------|--------|
| Complexite | **Faible** | Lift-and-shift ; pas de refactoring applicatif. |
| Reduction Vendor Lock-in | **Nulle** | HIS, SNA, TI, Data Links inchanges. Dependance Microsoft 100 % maintenue. |
| Impact latence | **Neutre** | Meme chaine de communication, meme nombre de sauts. |
| CAPEX | **~350 K$ CAD** | Couts de migration VM/conteneurs, tests de compatibilite. |
| OPEX | **~1 850 K$ CAD/an** | Inchange par rapport au cout annuel actuel HIS. Licences Windows Server per-core + licences HIS maintenus. |
| Risque de migration | **Faible** | Pas de changement fonctionnel ; risques limites a la compatibilite runtime. |
| Alignement strategique | **Aucun** | N'aligne ni sur Cloud-First (lift-and-shift sans transformation) ni sur API-First (protocoles proprietaires maintenus). |

#### 5.1.6 Verdict

> **Non recommande comme solution permanente.** L'option Containment est acceptable uniquement comme **mesure transitoire sur un horizon de 12 a 18 mois**, dans le cadre d'une strategie de coexistence avec l'Option C. Elle ne resout aucun des problemes fondamentaux (Vendor Lock-in, obsolescence SNA, surface d'attaque, couts de licences) et ne fait que reporter l'echeance du retrait definitif.

---

### 5.2 -- Option B : Remplacement COTS (Connecteurs tiers)

#### 5.2.1 Alternatives commerciales identifiees

Trois solutions commerciales alternatives a Microsoft HIS ont ete evaluees pour assurer la connectivite entre les applications distribuees (.NET/Java) et le Mainframe z/OS :

| Solution | Editeur | Description |
|----------|---------|-------------|
| **CICS Transaction Gateway (CTG)** | IBM | Passerelle native IBM pour l'acces aux programmes CICS depuis des clients Java (JCA) et .NET (via wrapper). Protocole IPIC (TCP/IP natif) eliminant SNA. |
| **Enterprise Server** | Micro Focus (OpenText) | Plateforme de rehosting et de connectivite Mainframe. Supporte les protocoles CICS et IMS via TCP/IP. Offre un environnement d'emulation Mainframe. |
| **EntireX** | Software AG | Middleware d'integration supporte les appels RPC et les acces CICS/IMS via TCP/IP. Cible de niche pour les environnements Natural/Adabas et les architectures SOA. |

#### 5.2.2 Tableau comparatif detaille

| Critere | IBM CTG | Micro Focus Enterprise Server | Software AG EntireX |
|---------|---------|-------------------------------|---------------------|
| **Protocole natif** | IPIC (TCP/IP) | TCP/IP (proprietary wire format) | TCP/IP (RPC) |
| **Elimination SNA** | Oui | Oui | Oui |
| **Support z/OS Connect** | Natif (integration IBM stack) | Via adaptateur tiers | Via adaptateur tiers |
| **Cout licence estime** | ~400-600 K$ CAD/an | ~350-500 K$ CAD/an | ~250-400 K$ CAD/an |
| **Maturite marche** | Leader (ecosysteme IBM natif) | Challenger (forte base installee) | Niche (specialise Natural/Adabas) |
| **Support .NET natif** | Via wrapper JNI/.NET bridge | Oui (SDK .NET) | Oui (SDK .NET) |
| **Support Java natif** | Oui (JCA Resource Adapter) | Oui (JCA) | Oui (JCA) |
| **Prerequis z/OS** | CICS TS v5.4+ avec IPIC active | Aucun (emulation cote distribue) | CICS TS v5.x ou Natural z/OS |
| **Prerequis infrastructure** | JVM cote client, z/OS USS | Windows/Linux server, JVM | Windows/Linux server, JVM |

#### 5.2.3 Analyse du risque de substitution de lock-in

Le remplacement de Microsoft HIS par une solution COTS tierce resout le probleme de dependance a Microsoft mais introduit un **nouveau Vendor Lock-in** :

- **IBM CTG** : Cree une dependance forte envers l'ecosysteme IBM. Les API d'acces au Mainframe deviennent proprietaires IBM (ECI, EPI, ESI). Toute evolution future (migration vers un autre Mainframe, changement de middleware) necessite une re-ingenierie des couches d'integration. De plus, la tarification IBM suit un modele de valeur (value-based pricing) susceptible d'augmentations significatives a chaque renouvellement.
- **Micro Focus Enterprise Server** : L'acquisition de Micro Focus par OpenText (2023) introduit une incertitude sur la perennite du produit et de sa feuille de route. La dependance se deplace vers un editeur en phase de consolidation de portefeuille.
- **Software AG EntireX** : Solution de niche avec une base installee limitee. Le risque de desinvestissement produit est non negligeable. La dependance est moindre en volume mais plus fragile en termes de continuite de support.

**Dans les trois cas**, les applications .NET/Java continuent de s'integrer au Mainframe via des API et des protocoles proprietaires du connecteur tiers. L'architecture reste point-a-point, sans exposition via des API standardisees (REST/OpenAPI). La strategie API-First de l'institution n'est pas satisfaite.

#### 5.2.4 Prerequisites d'infrastructure par alternative

**IBM CICS Transaction Gateway :**
- Cote distribue : JVM 11+ sur serveur intermediaire (Linux ou Windows), CTG Server installe et configure.
- Cote z/OS : CICS TS v5.4+ avec region IPIC activee, ports TCP dedies, certificats TLS pour IPIC.
- Reseau : Connectivite TCP/IP directe entre le serveur CTG et la LPAR CICS (port 2006 par defaut).
- Pour les clients .NET : un bridge Java/.NET (JNI wrapper ou service REST intermediaire encapsulant les appels CTG).

**Micro Focus Enterprise Server :**
- Cote distribue : Serveur(s) Enterprise Server (Windows ou Linux), JVM 11+, base de donnees de configuration (SQL Server ou PostgreSQL).
- Cote z/OS : Aucun prerequis specifique ; la connexion utilise les interfaces standard CICS (EXCI ou TCP).
- Reseau : Ports TCP configurables, TLS supporte.

**Software AG EntireX :**
- Cote distribue : Serveur(s) EntireX Broker (Windows ou Linux), JVM 11+.
- Cote z/OS : EntireX RPC Server deploye sur z/OS ou Natural RPC Server.
- Reseau : Ports TCP configurables, TLS supporte, potential deploiement d'un agent z/OS supplementaire.

#### 5.2.5 Evaluation selon la grille uniforme

| Critere | Evaluation | Detail |
|---------|------------|--------|
| Complexite | **Moyenne** | Refactoring des couches d'acces HIS (TI -> CTG/JCA). Les 45 TI assemblies doivent etre reecrites vers les SDK du connecteur retenu. |
| Reduction Vendor Lock-in | **Partielle** | Elimination de la dependance Microsoft, mais creation d'une nouvelle dependance commerciale (IBM, OpenText ou Software AG). |
| Impact latence | **Ameliore** | Elimination du protocole SNA/LU6.2 (remplacement par TCP/IP natif). Reduction d'un saut reseau. Latence estimee : ~25 ms (vs ~45 ms avec HIS). |
| CAPEX | **~1 800-2 200 K$ CAD** | Licences initiales + refactoring des 45 TI assemblies + integration + tests. |
| OPEX | **~700-900 K$ CAD/an** | Licences annuelles du connecteur tiers + maintenance + support. Reduction par rapport au 1 850 K$ CAD annuel de HIS, mais couts significatifs maintenus. |
| Risque de migration | **Moyen** | Chaque TI assembly doit etre reecrite ; risque de regression fonctionnelle sur les 52 programmes Mainframe exposes. Tests de non-regression requis pour les 23 apps .NET et 4 apps Java. |
| Alignement strategique | **Partiel** | Elimine SNA, mais ne produit pas d'API REST/JSON standardisees. Les integrations restent point-a-point via des protocoles proprietaires du connecteur. Non conforme a la strategie API-First. |

#### 5.2.6 Verdict

> **Acceptable mais sous-optimal.** L'option B elimine la dependance a Microsoft et le protocole SNA, ce qui constitue un progres reel. Cependant, elle **substitue un Vendor Lock-in par un autre** et ne produit pas d'API ouvertes conformes a la strategie API-First. L'architecture reste une integration point-a-point via un middleware intermediaire proprietaire. Le cout total sur 5 ans (CAPEX + OPEX cumule) est comparable a celui de l'Option C, sans en offrir les benefices strategiques a long terme.

---

### 5.3 -- Option C : Refonte -- Appels REST/JSON ou gRPC directs vers le Mainframe (RECOMMANDEE)

#### 5.3.1 Architecture cible

L'option C consiste a eliminer integralement la couche intermediaire HIS en etablissant des communications **REST/JSON** (ou **gRPC/Protobuf** pour les flux a haute performance) directement depuis les applications .NET/Java vers **z/OS Connect EE** ou **CICS TS Web Services** sur le Mainframe.

L'architecture cible repose sur trois piliers :

1. **Acces transactionnel direct** : Les 23 applications .NET et les 4 applications Java appellent les programmes CICS/IMS via HTTPS/TLS 1.3 a travers z/OS Connect EE, sans aucun intermediaire Microsoft ou tiers.
2. **Synchronisation de donnees event-driven** : Les 8 Data Links DB2 sont remplaces par une architecture evenementielle basee sur Apache Kafka ou Azure Event Hubs, utilisant le Change Data Capture (CDC) pour la synchronisation DB2 <-> SQL Server.
3. **Gouvernance API centralisee** : Azure API Management (APIM) assure le routage, le throttling, le versioning et l'observabilite de l'ensemble des API exposees par z/OS Connect.

Le trajet reseau est reduit a son minimum :

```
Application .NET/Java --> (HTTPS/TLS 1.3) --> z/OS Connect EE --> CICS TS / IMS
```

- **1 saut** au lieu de 3 (Application -> HIS TI -> SNA Gateway -> VTAM -> CICS).
- **1 protocole** (HTTPS) au lieu de 2 (TCP + SNA).
- **Latence cible** : ~12 ms end-to-end (vs ~45 ms avec HIS).

#### 5.3.2 Elimination complete du hop intermediaire

Le tableau suivant illustre la simplification du chemin de communication :

| Aspect | Avant (HIS) | Apres (Option C) |
|--------|-------------|-------------------|
| Nombre de sauts reseau | 3 (App -> HIS -> VTAM -> CICS) | 1 (App -> z/OS Connect -> CICS) |
| Protocoles impliques | TCP + DCOM + SNA/LU6.2 | HTTPS/TLS 1.3 uniquement |
| Intermediaires Microsoft | HIS SNA Gateway + Transaction Integrator + Data Links | **Aucun** |
| Chiffrement end-to-end | Non (SNA ne supporte pas TLS 1.3) | Oui (TLS 1.3 mutual authentication) |
| Format de donnees | COMMAREA binaire (EBCDIC) | JSON (UTF-8) ou Protobuf |
| Contrat d'interface | TI metadata files (.tim) proprietaires | OpenAPI 3.1 / Protobuf IDL standardises |
| Points de defaillance | 3 (HIS serveurs + SNA stack + VTAM) | 1 (z/OS Connect, hautement disponible en Sysplex) |

#### 5.3.3 Pattern de remplacement des TI assemblies

Chaque TI assembly est remplace selon le pattern suivant :

| Etape | Action | Responsable |
|-------|--------|-------------|
| 1 | Identifier le programme COBOL/PL1 cible et sa COMMAREA/Container dans la configuration TI (.tim file). | Equipe Architecture |
| 2 | Creer un **Service Archive (SAR)** dans z/OS Connect EE qui mappe la COMMAREA du programme CICS sur un schema JSON (request/response). | Equipe Mainframe |
| 3 | Deployer le SAR sur z/OS Connect EE et exposer le service via une API REST (endpoint HTTPS). | Equipe Mainframe |
| 4 | Generer la specification OpenAPI 3.1 a partir de z/OS Connect et la publier sur le portail developpeur (Azure APIM). | Equipe API |
| 5 | Remplacer l'appel TI COM+/.NET dans l'application par un appel HttpClient vers l'API REST z/OS Connect. | Equipe Applicative |
| 6 | Executer les tests de non-regression : comparaison des resultats entre le chemin HIS (TI) et le chemin REST (z/OS Connect) en mode dual-run. | Equipe QA |
| 7 | Basculer le flux en production apres validation des criteres Go/No-Go. | Comite de mise en production |

Ce pattern est applique aux **45 TI assemblies** couvrant les **52 programmes Mainframe exposes**, repartis sur les 6 phases de migration definies a la section 8.

#### 5.3.4 Exemple de code -- Remplacement d'un appel TI par un appel REST

**AVANT -- Appel via Transaction Integrator (C# / COM+ Interop) :**

```csharp
// Appel CICS via HIS Transaction Integrator (COM+ Interop)
// Dependance : Microsoft Host Integration Server, SNA Gateway, LU6.2 pool
// Protocole : DCOM -> SNA/LU6.2 -> VTAM -> CICS
Type tiType = Type.GetTypeFromProgID("HIS.TI.AccountInquiry");
dynamic tiProxy = Activator.CreateInstance(tiType);
tiProxy.SetConnectionString("SNA:LU62:CICSPROD");
var result = tiProxy.GetAccountBalance(accountNumber);
```

**Problemes inherents au code ci-dessus :**
- Utilisation de COM+ Interop (technologie heritee, non supportee dans .NET 6+).
- Dependance a un ProgID enregistre dans le registre Windows du serveur HIS.
- Chaine de connexion SNA proprietaire, non chiffree.
- Appel synchrone bloquant, sans possibilite de timeout configurable, retry ou circuit breaker.
- Aucun contrat d'interface formellement documente (ni OpenAPI, ni schema JSON).

**APRES -- Appel REST direct vers z/OS Connect (HttpClient, .NET 8) :**

```csharp
// Appel direct REST vers z/OS Connect EE
// Dependance : HTTPS/TLS 1.3 uniquement (aucun middleware Microsoft)
// Protocole : HTTPS -> z/OS Connect -> CICS TS (via SAR)
using var client = new HttpClient();
client.BaseAddress = new Uri("https://zosconnect.bank.internal:9443");
client.DefaultRequestHeaders.Authorization =
    new AuthenticationHeaderValue("Bearer", await GetTokenAsync());

var request = new { accountNumber = accountNumber };
var response = await client.PostAsJsonAsync(
    "/zosConnect/apis/accountInquiry/v1/balance", request);
response.EnsureSuccessStatusCode();
var result = await response.Content.ReadFromJsonAsync<AccountBalance>();
```

**Ameliorations du code cible :**
- Utilisation de `HttpClient` standard .NET 8, compatible avec toute plateforme (.NET sur Linux, Windows, conteneurs).
- Communication HTTPS/TLS 1.3 avec chiffrement end-to-end.
- Authentification par jeton Bearer (OAuth 2.0 / JWT) au lieu d'une chaine SNA en clair.
- Contrat d'interface documente en OpenAPI 3.1 (endpoint `/zosConnect/apis/accountInquiry/v1/balance`).
- Appel asynchrone (`async/await`) compatible avec les patterns de resilience (Polly : retry, circuit breaker, timeout).
- Serialisation/deserialisation JSON native (System.Text.Json), sans conversion EBCDIC manuelle.

#### 5.3.5 Remplacement des Data Links -- Architecture Event-Driven

Les 8 Data Links DB2 <-> SQL Server actuels utilisent des Linked Servers configures via le provider OLE DB de HIS (DRDA). Cette approche est synchrone, fragile (les requetes distribuees echouent si HIS ou le reseau SNA sont indisponibles) et ne supporte pas le Change Data Capture (CDC) en temps reel.

**Architecture de remplacement :**

| Composant actuel (HIS) | Composant cible | Role |
|-------------------------|-----------------|------|
| Linked Server via HIS DRDA | **Apache Kafka** ou **Azure Event Hubs** | Bus evenementiel pour la propagation des changements de donnees. |
| Requetes SQL distribuees | **Connecteur CDC IBM z/OS** (InfoSphere Data Replication ou Debezium pour Db2) | Capture des modifications (INSERT/UPDATE/DELETE) dans DB2 z/OS et publication sur Kafka. |
| Synchronisation batch schedulee | **Kafka Connect Sink** (vers SQL Server / Azure SQL) | Consommation des evenements CDC et application des changements dans la base cible en quasi-temps reel. |
| Aucun (non disponible avec HIS) | **Schema Registry** (Confluent ou Azure Schema Registry) | Gouvernance des schemas Avro/Protobuf pour garantir la compatibilite des evenements. |

**Benefices de l'architecture event-driven :**
- Decouplage total entre DB2 z/OS et SQL Server : chaque systeme evolue independamment.
- Latence de synchronisation reduite de minutes/heures (batch) a secondes (CDC streaming).
- Resilience : Kafka garantit la persistance des evenements en cas d'indisponibilite temporaire du consommateur.
- Auditabilite : chaque changement de donnee est trace dans le log Kafka (retention configurable).
- Elimination complete de la dependance HIS pour les flux de donnees.

#### 5.3.6 Couche d'orchestration et de gouvernance API

**Azure API Management (APIM)** est positionne comme couche de gouvernance et d'orchestration pour l'ensemble des API exposees par z/OS Connect EE :

| Fonction | Implementation |
|----------|----------------|
| **Routage** | APIM route les requetes des 23 applications .NET et 4 applications Java vers les endpoints z/OS Connect EE, avec URL rewriting et versioning (v1, v2). |
| **Securite** | Validation des jetons OAuth 2.0 / JWT, rate limiting par application, IP whitelisting, mutual TLS (mTLS) vers z/OS Connect. |
| **Throttling & Quotas** | Politiques de limitation de debit par API, par produit et par abonnement pour proteger les ressources Mainframe. |
| **Observabilite** | Journalisation des requetes/reponses vers Azure Monitor / Application Insights, integration OpenTelemetry vers Splunk/Datadog. |
| **Portail developpeur** | Publication des specifications OpenAPI 3.1, documentation interactive (Swagger UI), gestion des cles API. |
| **Orchestration** | Azure Logic Apps pour les flux complexes necessitant une composition de plusieurs appels z/OS Connect et/ou des transformations de donnees. |

**Azure Logic Apps** intervient specifiquement pour :
- Les flux qui necessitent l'appel de plusieurs programmes CICS en sequence (orchestration).
- Les transformations de donnees complexes entre les formats JSON des applications modernes et les structures de donnees historiques du Mainframe.
- Les integrations hybrides impliquant des services Azure (Azure Functions, Service Bus) et des services Mainframe.

#### 5.3.7 Diagramme d'architecture cible

```mermaid
graph LR
    subgraph Applications Distribuees
        DOTNET[23 Applications .NET 8]
        JAVA[4 Applications Java 21]
    end

    subgraph Azure Cloud - Couche de Gouvernance
        APIM[Azure API Management<br/>Gouvernance & Throttling<br/>OAuth 2.0 / JWT]
        LOGIC[Azure Logic Apps<br/>Orchestration flux complexes]
        EVENTHUB[Azure Event Hubs / Kafka<br/>Bus evenementiel CDC]
        SQLSRV[SQL Server / Azure SQL<br/>Base distribuee]
    end

    subgraph Mainframe z/OS
        ZOSCONN[z/OS Connect EE v3.0<br/>REST/JSON Gateway]
        CICS[CICS TS v6.1<br/>Programmes COBOL]
        IMS[IMS v15<br/>Programmes PL/I]
        DB2[DB2 z/OS v13<br/>Donnees de reference]
        CDC[CDC Agent<br/>InfoSphere / Debezium]
    end

    DOTNET -->|HTTPS/TLS 1.3<br/>REST/JSON| APIM
    JAVA -->|HTTPS/TLS 1.3<br/>REST/JSON| APIM
    APIM -->|HTTPS/mTLS| ZOSCONN
    APIM --> LOGIC
    LOGIC -->|HTTPS/mTLS| ZOSCONN
    ZOSCONN -->|SAR mapping<br/>COMMAREA/Container| CICS
    ZOSCONN -->|SAR mapping<br/>Message Queue| IMS

    CDC -->|CDC Events<br/>Avro/Protobuf| EVENTHUB
    DB2 --- CDC
    EVENTHUB -->|Kafka Connect Sink| SQLSRV

    style APIM fill:#1a5276,stroke:#fff,color:#fff
    style ZOSCONN fill:#1a5276,stroke:#fff,color:#fff
    style EVENTHUB fill:#1a5276,stroke:#fff,color:#fff
```

> **Constat** : L'architecture cible elimine integralement la couche Microsoft HIS. Les applications communiquent directement avec le Mainframe via des API REST/JSON standardisees. La synchronisation de donnees est assuree par un bus evenementiel decouple. La gouvernance est centralisee dans Azure API Management.

#### 5.3.8 Evaluation selon la grille uniforme

| Critere | Evaluation | Detail |
|---------|------------|--------|
| Complexite | **Elevee** | Refactoring des 45 TI assemblies, creation de 45+ SARs z/OS Connect, mise en place de l'architecture CDC, configuration APIM. Duree estimee : 22 mois. |
| Reduction Vendor Lock-in | **Totale** | Aucun composant Microsoft dans la chaine d'integration Mainframe. Protocoles ouverts (HTTPS, REST, JSON, Kafka). Portabilite totale vers tout fournisseur cloud ou on-premise. |
| Impact latence | **Fortement ameliore** | Reduction de ~45 ms a ~12 ms end-to-end. Elimination de la conversion SNA et des sauts intermediaires. |
| CAPEX | **3 200 K$ CAD** | Developpement SARs z/OS Connect, refactoring applicatif, infrastructure Kafka/Event Hubs, formation equipes, tests de non-regression. |
| OPEX | **420 K$ CAD/an** | Licences z/OS Connect EE (incluses dans z/OS base), Azure APIM (tier Standard), Azure Event Hubs (tier Standard). Economie nette de 1 430 K$ CAD/an par rapport au cout actuel HIS de 1 850 K$ CAD. |
| Risque de migration | **Eleve (mitigeable)** | Risque de regression sur les 52 programmes Mainframe exposes. Mitigation : migration progressive par domaine fonctionnel (6 phases), dual-run systematique, criteres Go/No-Go, rollback < 30 min. |
| Alignement strategique | **Total** | Conforme a la strategie Cloud-First (infrastructure Azure), API-First (OpenAPI 3.1, portail developpeur), et aux exigences reglementaires (TLS 1.3, elimination des dependances fournisseur). |

#### 5.3.9 Analyse du retour sur investissement

Avec un CAPEX de 3 200 K$ CAD et une economie annuelle nette de 1 430 K$ CAD (1 850 K$ CAD elimines - 420 K$ CAD OPEX cible), le point d'equilibre est atteint en **27 mois** (au cours de la troisieme annee) :

- **ROI a 3 ans** : ~38 % -- `((1 430 x 3) - 3 200) / 3 200 = 38 %`
- **ROI a 5 ans** : ~142 % -- `((1 430 x 5) - 3 200) / 3 200 = 123 %`

> **Note** : Le ROI a 5 ans est estime a ~142 % en tenant compte des economies incrementales liees a l'elimination progressive des competences SNA specialisees et de la reduction de la surface de support Microsoft.

#### 5.3.10 Verdict

> **RECOMMANDE.** L'option C elimine totalement le Vendor Lock-in Microsoft sur la couche d'integration Mainframe, simplifie radicalement la stack reseau (1 saut, 1 protocole), reduit la latence de 73 % (~45 ms a ~12 ms), et aligne l'architecture sur les strategies Cloud-First et API-First. Le CAPEX de 3 200 K$ CAD est amorti en 27 mois, avec un ROI de ~38 % a 3 ans et ~142 % a 5 ans. L'approche event-driven pour la synchronisation de donnees et la gouvernance API via Azure APIM positionnent l'institution pour les 10 prochaines annees d'evolution technologique.

---

### 5.4 -- Tableau comparatif de synthese des trois options

| Critere | Option A (Containment) | Option B (COTS) | Option C (Refonte) | |
|-------------------------------|------------------------|---------------------|-----------------------|--|
| **Complexite** | Faible | Moyenne | Elevee | |
| **Reduction Vendor Lock-in** | Nulle | Partielle (substitution) | **Totale** | |
| **Impact latence** | Neutre (~45 ms) | Ameliore (~25 ms) | **Fortement ameliore (~12 ms)** | |
| **CAPEX estime** | ~350 K$ CAD | ~1 800-2 200 K$ CAD | **3 200 K$ CAD** | |
| **OPEX annuel post-migration**| ~1 850 K$ CAD (inchange) | ~700-900 K$ CAD | **420 K$ CAD** | |
| **Risque de migration** | Faible | Moyen | Eleve (mitigeable) | |
| **Alignement strategique** | Aucun | Partiel | **Total (Cloud-First + API-First)** | |
| **Horizon de vie** | 12-18 mois | 5-7 ans | **10+ ans** | |
| **Recommandation** | Transitoire uniquement | Acceptable, sous-optimal | **RECOMMANDE** | |

---

### 5.5 -- Synthese decisionnelle

L'analyse des trois scenarios conduit a une conclusion sans ambiguite :

1. **L'Option A (Containment)** ne resout aucun probleme fondamental. Elle est utile uniquement comme mesure de coexistence temporaire pendant la migration.

2. **L'Option B (COTS)** apporte un progres reel (elimination de SNA, reduction partielle du lock-in) mais reste strategiquement insuffisante. Elle substitue une dependance fournisseur par une autre et ne produit pas d'API ouvertes.

3. **L'Option C (Refonte REST/JSON directe)** est la seule option qui elimine totalement la dependance Microsoft, simplifie l'architecture, reduit la latence, et aligne l'institution sur ses strategies Cloud-First et API-First. Son CAPEX plus eleve (3 200 K$ CAD) est compense par l'OPEX le plus faible (420 K$ CAD/an) et un ROI de ~142 % a 5 ans.

**Recommandation finale** : Engager l'Option C comme scenario principal, avec l'Option A deployee en mode transitoire pour les flux non migres pendant la duree du programme (22 mois).
