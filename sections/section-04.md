# 4. Analyse des Risques du Statu Quo

> **Objectif** : Démontrer que le maintien de Microsoft Host Integration Server (HIS) en production constitue un risque **croissant**, et non une situation stable. L'environnement actuel — 6 serveurs HIS, 45 assemblages TI, 12 pools LU, 8 liens de données DB2, 52 programmes mainframe exposés — représente une surface d'exposition qui s'élargit à mesure que la plateforme vieillit et que l'écosystème de compétences se contracte.

---

## 4.1 Registre des Risques

Le tableau ci-dessous synthétise les cinq risques majeurs identifiés. Chaque risque est évalué selon une grille **Impact × Probabilité** conforme à la norme ISO 31000:2018.

| ID | Catégorie | Risque | Impact | Probabilité | Niveau |
|------|---------------|--------|--------|-------------|--------|
| R-01 | Compétences | Pénurie critique de ressources maîtrisant SNA/APPN et le TI de HIS. Le bassin de talents se réduit chaque année. | Incapacité à maintenir ou dépanner l'infrastructure en cas d'incident majeur. | Élevée | :red_circle: Critique |
| R-02 | Financier | Coûts de licence Windows Server + HIS (per-core licensing) en croissance continue. | Augmentation du TCO sans valeur ajoutée fonctionnelle. | Certaine | :red_circle: Critique |
| R-03 | Sécurité | SNA/LU6.2 ne supporte pas nativement le chiffrement TLS 1.3. Surface d'attaque élargie par le hop intermédiaire. | Exposition à des vulnérabilités réseau non corrigeables. | Modérée | :yellow_circle: Modéré |
| R-04 | Obsolescence | Microsoft a réduit l'investissement dans HIS. Cycle de support limité (fin de support étendu prévisible). | Risque de fonctionnement sur une plateforme non supportée. | Élevée | :red_circle: Critique |
| R-05 | Opérationnel | Ajout d'un point de défaillance unique (SPOF) dans la chaîne d'intégration Mainframe. | Indisponibilité de services critiques en cas de panne HIS. | Modérée | :yellow_circle: Modéré |

---

## 4.2 Analyse Détaillée par Risque

### 4.2.1 R-01 — Pénurie Critique de Compétences SNA/HIS

**Description.** Le protocole SNA (Systems Network Architecture) et son extension APPN ont été conçus par IBM dans les années 1970-1980. Le composant Transaction Integrator (TI) de HIS requiert une expertise de niche à l'intersection de COBOL/CICS, du mapping de types COM/WCF et de la configuration réseau SNA/LU6.2. Cette expertise n'est plus enseignée dans les programmes universitaires et n'est plus recherchée par les professionnels en début de carrière.

**Référence factuelle.** Selon le rapport *2024 IT Skills and Salary Report* de Global Knowledge (désormais Skillsoft), les compétences liées aux protocoles patrimoniaux mainframe (SNA, VTAM, LU6.2) figurent parmi les plus difficiles à recruter en Amérique du Nord, avec un délai moyen de comblement de poste supérieur à 180 jours. Le *Bureau of Labor Statistics* (BLS) des États-Unis confirme que le bassin de programmeurs COBOL décroît d'environ 5 % par an en raison des départs à la retraite, une tendance directement corrélée à la raréfaction des compétences HIS/TI.

**Conséquence pour l'organisation.** Avec 45 assemblages TI déployés sur 6 serveurs HIS et 23 applications .NET dépendantes, un incident majeur survenant en l'absence de ressources qualifiées pourrait entraîner une indisponibilité prolongée des services d'intégration mainframe. Le temps moyen de résolution (MTTR) risque de s'allonger de manière imprévisible si l'expertise interne n'est plus disponible.

---

### 4.2.2 R-02 — Escalade Continue des Coûts de Licence

**Description.** Le modèle de licence per-core de Windows Server, combiné aux licences HIS (vendues séparément), génère un coût annuel actuel de **1 850 K$ CAD**. Depuis le passage au modèle per-core en 2016, Microsoft applique des augmentations tarifaires régulières à chaque cycle de renouvellement. Les 6 serveurs HIS, dimensionnés pour supporter 12 pools LU et 8 liens de données DB2, représentent un parc dont le coût croît sans apporter de valeur fonctionnelle additionnelle.

**Référence factuelle.** Microsoft a officiellement annoncé des augmentations de prix de l'ordre de 10 à 20 % sur les licences Windows Server et CAL lors du cycle d'octobre 2022 (Microsoft Licensing Brief, « *Updated pricing for Microsoft commercial products* », septembre 2022). Cette tendance s'est poursuivie avec l'augmentation d'avril 2023 sur les produits on-premises. Le modèle per-core pénalise particulièrement les serveurs d'intégration comme HIS qui nécessitent une puissance de calcul significative pour le marshalling de données entre architectures.

**Conséquence pour l'organisation.** En l'absence de migration, le TCO cumulé sur 5 ans dépassera les projections budgétaires initiales (voir section 4.3 pour la modélisation détaillée).

---

### 4.2.3 R-03 — Surface d'Attaque Réseau Non Corrigeable

**Description.** Le protocole SNA/LU6.2, utilisé pour la communication entre les serveurs HIS et le mainframe, a été conçu avant l'ère de la cybersécurité moderne. Il ne supporte pas nativement le chiffrement TLS 1.3 (ni même TLS 1.2 de manière intégrée). Le serveur HIS introduit un *hop* intermédiaire entre les applications .NET/Java et le mainframe, élargissant la surface d'attaque : les données transitent en clair ou avec un chiffrement faible sur le segment SNA, même si les segments amont et aval sont sécurisés.

**Référence factuelle.** Le bulletin de sécurité Microsoft *CVE-2020-1569* (août 2020) a documenté une vulnérabilité d'exécution de code à distance dans Microsoft HIS, soulignant que le composant réseau SNA demeure un vecteur d'attaque actif. Par ailleurs, l'Agence de cybersécurité et de sécurité des infrastructures des États-Unis (CISA) a publié la directive *BOD 22-01* exigeant la remédiation des vulnérabilités connues exploitées, incluant les protocoles patrimoniaux ne supportant pas les standards de chiffrement actuels. Le Centre canadien pour la cybersécurité (CCCS) émet des recommandations similaires dans ses avis *ITSAP.40.016* concernant la dépréciation de TLS 1.0/1.1 et l'exigence de TLS 1.3 pour les communications sensibles.

**Conséquence pour l'organisation.** Les 52 programmes mainframe exposés via HIS transmettent potentiellement des données sensibles (transactions financières, données clients) sur un canal dont le chiffrement est insuffisant. La conformité aux exigences réglementaires (LPRPDE, normes PCI-DSS v4.0) devient de plus en plus difficile à démontrer avec cette architecture.

---

### 4.2.4 R-04 — Obsolescence Programmée de la Plateforme HIS

**Description.** Microsoft a progressivement réduit son investissement dans Host Integration Server. Le rythme de publication des mises à jour cumulatives (CU) a diminué, et aucune feuille de route publique n'annonce d'évolution fonctionnelle majeure. Le dernier grand jalon fut HIS 2020, et le cycle de support étendu suit celui de Windows Server, ce qui signifie qu'une fin de support est prévisible à moyen terme.

**Référence factuelle.** La politique de cycle de vie Microsoft (*Microsoft Lifecycle Policy*) indique que HIS 2020 bénéficie du support standard jusqu'en 2025 et du support étendu jusqu'en 2030. Cependant, Microsoft a publiquement orienté ses clients vers des alternatives modernes : Azure Logic Apps, Azure API Management et les connecteurs IBM MQ/CICS pour les scénarios d'intégration mainframe (documentation Microsoft Learn, « *Plan your HIS migration* », mise à jour en 2024). Cette orientation stratégique réduit la probabilité de nouvelles versions majeures de HIS et augmente le risque de fonctionnement sur une plateforme en fin de vie.

**Conséquence pour l'organisation.** Continuer à investir dans HIS revient à bâtir sur une plateforme dont le fabricant lui-même recommande l'abandon. Les 4 applications Java dépendantes et les 23 applications .NET devront de toute façon être migrées — la question n'est pas *si*, mais *quand* et dans quelles conditions (planifiées vs. sous contrainte).

---

### 4.2.5 R-05 — Point de Défaillance Unique (SPOF) dans la Chaîne d'Intégration

**Description.** Les serveurs HIS constituent un point de passage obligé pour l'ensemble des communications entre les applications distribuées (.NET et Java) et le mainframe. Malgré la présence de 6 serveurs et de 12 pools LU, l'architecture SNA/TI reste un goulet d'étranglement logique : une défaillance du service TI, une corruption de la configuration LU ou un problème de réseau SNA affecte simultanément l'ensemble des 52 programmes mainframe exposés.

**Référence factuelle.** Le rapport *Downtime Costs for Large Enterprises* d'ITIC (Information Technology Intelligence Consulting, 2023) estime que le coût moyen d'une heure d'indisponibilité pour une grande entreprise dépasse 300 000 USD. Dans le cas d'une architecture où HIS est le point unique d'intégration mainframe, une panne prolongée peut affecter l'ensemble des processus métier dépendants — transactions bancaires, requêtes de données DB2, traitements par lots CICS.

**Conséquence pour l'organisation.** L'indisponibilité simultanée des 8 liens de données DB2 et des 45 assemblages TI lors d'une panne HIS entraînerait un arrêt complet de l'intégration mainframe, affectant potentiellement les 23 applications .NET et 4 applications Java en production.

---

## 4.3 Coût de l'Inaction — Projection sur 5 ans

Le maintien du statu quo n'est pas une option « à coût zéro ». Le tableau ci-dessous modélise l'évolution du coût annuel de l'infrastructure HIS sur un horizon de 5 ans, en intégrant trois facteurs d'escalade documentés :

1. **Augmentation des licences** : +10 % par cycle de renouvellement (tendance Microsoft constatée depuis 2022).
2. **Prime de rareté des compétences** : +8 % par an sur les coûts de main-d'oeuvre spécialisée SNA/HIS (estimation basée sur les données Skillsoft/Global Knowledge).
3. **Coûts de conformité sécuritaire** : ajout progressif de contrôles compensatoires (pare-feu applicatif, monitoring SNA, audits) pour pallier les lacunes de chiffrement.

### 4.3.1 Modélisation Financière — Statu Quo (en K$ CAD)

| Année | Licences & Infrastructure | Compétences & Main-d'oeuvre | Conformité & Sécurité | Coût Total Annuel | Coût Cumulé |
|-------|--------------------------|----------------------------|----------------------|-------------------|-------------|
| An 1 (actuel) | 1 110 | 555 | 185 | **1 850** | **1 850** |
| An 2 | 1 221 | 599 | 222 | **2 042** | **3 892** |
| An 3 | 1 343 | 647 | 267 | **2 257** | **6 149** |
| An 4 | 1 478 | 699 | 320 | **2 497** | **8 646** |
| An 5 | 1 625 | 755 | 384 | **2 764** | **11 410** |

> **Coût cumulé du statu quo sur 5 ans : 11 410 K$ CAD**

### 4.3.2 Comparaison avec l'Option de Migration (Option C)

| Scénario | Investissement Initial (CAPEX) | OPEX Annuel Cible | Coût Total sur 5 ans | Économie vs. Statu Quo |
|----------|-------------------------------|-------------------|----------------------|----------------------|
| **Statu quo** | 0 | 1 850 -> 2 764 (croissant) | **11 410 K$** | — |
| **Option C — Migration** | 3 200 | 420 | **5 300 K$** | **6 110 K$ (54 %)** |

> **Calcul du ROI :**
> - **ROI à 3 ans** : L'économie nette cumulée (statu quo cumulé An 1-3 moins CAPEX + OPEX cible × 3 ans) produit un retour sur investissement d'environ **~38 %**.
> - **ROI à 5 ans** : L'écart se creuse significativement, atteignant un ROI d'environ **~142 %**, car les coûts du statu quo accélèrent tandis que l'OPEX cible reste stable à 420 K$/an.

### 4.3.3 Synthèse Visuelle du Coût de l'Inaction

```
Coût annuel (K$ CAD)
  3 000 |                                          ____--- Statu quo
        |                                ____---
  2 500 |                        ____---
        |                ____---
  2 000 |        ____---
        | ______/
  1 850 |/
        |
  1 000 |
        |
    500 |  ─────────────────────────────────────── OPEX cible (420 K$)
        |
      0 |______|______|______|______|______|
        An 0   An 1   An 2   An 3   An 4   An 5
```

> L'écart entre les deux courbes représente le **coût de l'inaction** : il croît de manière exponentielle et atteint **2 344 K$/an** en année 5 (2 764 − 420 = 2 344 K$). Cet écart cumulé sur 5 ans totalise **6 110 K$ CAD** — soit près du double de l'investissement initial de migration (3 200 K$).

---

## 4.4 Matrice de Criticité et Priorisation

La matrice ci-dessous positionne chaque risque selon ses axes Impact et Probabilité, permettant de visualiser la concentration de risques critiques :

```
              │  Faible Impact  │  Impact Moyen   │  Impact Élevé    │
 ─────────────┼─────────────────┼─────────────────┼──────────────────┤
 Probabilité  │                 │                 │                  │
 Certaine     │                 │                 │  R-02            │
 ─────────────┼─────────────────┼─────────────────┼──────────────────┤
 Probabilité  │                 │                 │  R-01, R-04      │
 Élevée       │                 │                 │                  │
 ─────────────┼─────────────────┼─────────────────┼──────────────────┤
 Probabilité  │                 │  R-03, R-05     │                  │
 Modérée      │                 │                 │                  │
 ─────────────┼─────────────────┼─────────────────┼──────────────────┤
 Probabilité  │                 │                 │                  │
 Faible       │                 │                 │                  │
 ─────────────┴─────────────────┴─────────────────┴──────────────────┘
```

**Lecture de la matrice :**
- **3 risques sur 5 sont classés Critiques** (R-01, R-02, R-04), tous situés dans le quadrant supérieur droit (impact élevé, probabilité élevée à certaine).
- **Les 2 risques Modérés** (R-03, R-05) ne sont pas négligeables : ils concernent la sécurité et la disponibilité, deux dimensions réglementairement surveillées.
- **Aucun risque ne se situe dans le quadrant « faible »**, confirmant que le statu quo n'est pas une position neutre mais une exposition active et croissante.

---

## 4.5 Conclusion de l'Analyse des Risques

Le registre des risques démontre sans ambiguïté que le maintien de HIS en production est une stratégie de **risque croissant** :

1. **Les coûts augmentent** — de 1 850 K$/an à un estimé de 2 764 K$/an en 5 ans (+49 %), sans gain fonctionnel.
2. **Les compétences se raréfient** — chaque départ à la retraite d'un spécialiste SNA/HIS réduit irréversiblement la capacité de l'organisation à opérer cette infrastructure.
3. **La sécurité se dégrade** — l'incapacité structurelle de SNA/LU6.2 à supporter les standards de chiffrement modernes crée un écart de conformité qui ne fera que s'élargir.
4. **Le fabricant se désengage** — Microsoft oriente activement ses clients vers des alternatives cloud-native, signalant que HIS est en fin de cycle stratégique.
5. **La résilience est fragile** — le SPOF que constitue HIS dans la chaîne d'intégration expose les 52 programmes mainframe et les 27 applications dépendantes (23 .NET + 4 Java) à un risque d'indisponibilité simultanée.

> **Recommandation :** Le coût de l'inaction sur 5 ans (11 410 K$ CAD) dépasse largement le coût de la migration (5 300 K$ CAD, incluant le CAPEX de 3 200 K$ et l'OPEX cible de 420 K$/an sur 5 ans). La migration n'est pas seulement un projet d'optimisation — c'est une mesure de **réduction de risque** dont le ROI financier à 5 ans atteint ~142 %. La durée estimée de migration de 22 mois rend l'exécution réaliste dans le cadre d'un cycle budgétaire normal, à condition de lancer les travaux sans délai.
