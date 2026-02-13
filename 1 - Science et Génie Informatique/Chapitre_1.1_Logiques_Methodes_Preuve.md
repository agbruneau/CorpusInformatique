# Chapitre 1 : Logiques et Méthodes de Preuve

## Introduction

La logique, dans son essence, est la science du raisonnement valide. Ses origines remontent aux syllogismes d\'Aristote, mais son développement formel, initié par des pionniers tels que Frege, Russell et Hilbert, a jeté les bases non seulement des mathématiques modernes, mais aussi, de manière inextricable, de l\'informatique théorique. Loin d\'être une simple branche des mathématiques, la logique s\'est révélée être le véritable calcul de la computation, le langage universel qui permet de décrire, d\'analyser et de construire les systèmes informatiques, des plus simples aux plus complexes. Alan Turing et Alonzo Church, en formalisant la notion même de calcul, ont démontré que les processus algorithmiques pouvaient être entièrement capturés par des systèmes logiques formels, établissant ainsi un lien indissoluble entre la preuve et le programme.

Ce chapitre a pour vocation de poser les fondations de ce lien. Il explore la dualité fondamentale qui est au cœur de toute logique formelle : la distinction entre la **syntaxe** et la **sémantique**. La syntaxe concerne la structure des énoncés, les règles qui gouvernent la formation de formules bien écrites à partir d\'un alphabet de symboles. C\'est le domaine de la manipulation formelle, purement symbolique, indépendante de toute signification. La sémantique, quant à elle, s\'intéresse au \"sens\" de ces formules, à leur interprétation et à leur valeur de vérité. C\'est elle qui nous permet de dire si un énoncé est vrai ou faux dans un certain contexte. L\'informatique, dans sa globalité, navigue constamment entre ces deux pôles : un programme est un objet syntaxique, une suite de caractères respectant la grammaire d\'un langage, mais son exécution et son utilité dépendent de sa sémantique, de ce qu\'il accomplit dans le monde réel.

La maîtrise de ce formalisme est indispensable pour l\'ingénieur et le chercheur en informatique. La conception de circuits logiques, qui sont à la base de tous les processeurs modernes, est une application directe de la logique propositionnelle. La sémantique des langages de programmation, la vérification de la correction des logiciels et des systèmes matériels, la conception des langages de requête pour les bases de données, et le développement de l\'intelligence artificielle reposent tous sur les formalismes plus expressifs de la logique des prédicats. La logique fournit le cadre rigoureux nécessaire pour spécifier le comportement d\'un système, pour raisonner sur ses propriétés et pour prouver qu\'il se comportera comme attendu.

Ce chapitre se déroulera en quatre parties. La **Partie I** est consacrée à la **logique propositionnelle**, l\'algèbre du raisonnement binaire. Nous y définirons rigoureusement sa syntaxe et sa sémantique, explorerons les notions de tautologie, de contradiction et de satisfiabilité, et introduirons les formes normales qui sont essentielles pour le traitement algorithmique. La **Partie II** étendra notre champ d\'action à la **logique des prédicats**, un langage beaucoup plus riche permettant de parler d\'objets, de leurs propriétés et des relations qui les unissent, grâce à l\'introduction des quantificateurs. La **Partie III** abordera les **systèmes de preuve formelle**, des mécanismes syntaxiques permettant de dériver des conclusions valides à partir de prémisses. Nous y étudierons deux systèmes paradigmatiques : la déduction naturelle, qui modélise le raisonnement humain, et le principe de résolution, optimisé pour l\'automatisation. Enfin, la **Partie IV** fera le pont entre ces formalismes et les **méthodes de raisonnement** fondamentales utilisées en mathématiques et en informatique, telles que la preuve par contraposée, le raisonnement par l\'absurde, le principe des tiroirs et, surtout, le raisonnement par induction, qui est la clé de voûte de la preuve de correction des algorithmes et des structures de données récursives.

## Partie I : La Logique Propositionnelle -- L\'Algèbre du Raisonnement

La logique propositionnelle, également connue sous le nom de calcul des propositions, constitue le premier échelon de la formalisation du raisonnement. Son pouvoir expressif est limité, car elle traite les propositions comme des entités atomiques indivisibles, sans analyser leur structure interne. Cependant, sa simplicité est précisément ce qui en fait un outil d\'une puissance et d\'une importance fondamentales en informatique. Elle modélise parfaitement le monde binaire des circuits électroniques, où les signaux sont soit hauts (vrai), soit bas (faux), et constitue la base de l\'algèbre de Boole qui régit le fonctionnement de chaque porte logique au sein d\'un processeur. De plus, elle sert de fondement à des logiques plus complexes et introduit les concepts essentiels de syntaxe, de sémantique, de validité et de prouvabilité qui seront généralisés par la suite.

### 1.1. Syntaxe et Sémantique : Le Langage des Propositions

L\'étude de tout langage formel, y compris la logique propositionnelle, commence par la distinction cruciale entre sa syntaxe et sa sémantique. Cette dualité est le principe organisateur central de la logique.

- La **syntaxe** définit l\'ensemble des règles qui permettent de construire des énoncés correctement formés, appelés formules. Elle s\'intéresse à la structure et à la forme des expressions, indépendamment de leur signification. C\'est la grammaire du langage logique.

- La **sémantique** attribue un sens, une signification, aux formules syntaxiquement correctes. En logique propositionnelle, ce sens est une valeur de vérité : vrai ou faux. C\'est la théorie de l\'interprétation du langage.

#### 1.1.1. Syntaxe Formelle

La syntaxe de la logique propositionnelle définit comment construire des formules valides à partir d\'un ensemble de symboles de base.

##### Alphabet

Le langage est construit sur un alphabet Σ, qui est l\'union de trois ensembles de symboles disjoints  :

1.  Un ensemble infini dénombrable P={p,q,r,p1​,p2​,...} de **variables propositionnelles** (ou atomes). Chaque variable représente une proposition élémentaire, un énoncé simple qui peut être vrai ou faux, comme \"il pleut\" ou \"n\>2\".

2.  Un ensemble de **connecteurs logiques** :

    - ¬ (négation, \"non\")

    - ∧ (conjonction, \"et\")

    - ∨ (disjonction, \"ou\")

    - → (implication, \"si\... alors\...\")

    - ↔ (équivalence ou bi-implication, \"si et seulement si\")

3.  Des symboles de ponctuation : les **parenthèses** ( et ).

##### Formules Bien Formées (EBF)

Toutes les chaînes de caractères construites avec l\'alphabet Σ ne sont pas des formules valides. L\'ensemble des **Expressions Bien Formées** (EBF), noté F, est le plus petit ensemble de mots sur Σ qui satisfait les règles de construction suivantes, définies de manière inductive  :

- **(Règle de base)** Toute variable propositionnelle p∈P est une EBF.

- **(Règles inductives)** Si F et G sont des EBF, alors les expressions suivantes sont aussi des EBF :

  - (¬F)

  - (F∧G)

  - (F∨G)

  - (F→G)

  - (F↔G)

Cette définition récursive est fondamentale. Elle garantit que toute formule est construite en un nombre fini d\'étapes à partir des atomes. Par exemple, la chaîne (p→(¬q)) est une EBF car p et q sont des EBF (règle de base), donc (¬q) est une EBF (règle inductive), et enfin (p→(¬q)) est une EBF (règle inductive). En revanche, la chaîne p∧q) n\'est pas une EBF car la parenthèse ouvrante est mal placée.

##### Arbres de Décomposition

La nature inductive de la définition des EBF garantit une propriété essentielle : la **lecture unique**. Chaque EBF peut être décomposée de manière unique en ses sous-formules immédiates. Cette structure de décomposition peut être visualisée sous la forme d\'un **arbre de décomposition** (ou arbre syntaxique). La racine de l\'arbre est le connecteur principal de la formule, et ses enfants sont les racines des arbres de décomposition de ses sous-formules immédiates. Les feuilles de l\'arbre sont les variables propositionnelles.

Par exemple, l\'arbre de décomposition de la formule ((p∧(¬q))→r) est :

→\
/ \\\
∧ r\
/ \\\
p ¬\
\|\
q

Cet arbre montre que le connecteur principal est →, qui relie la sous-formule (p∧(¬q)) à la sous-formule r. Cette structure arborescente est non seulement une aide visuelle, mais elle est aussi au cœur de nombreux algorithmes qui opèrent sur les formules logiques, comme les algorithmes d\'évaluation sémantique.

##### Conventions et Abréviations

Pour améliorer la lisibilité et éviter une prolifération de parenthèses, on adopte des conventions de précédence entre les connecteurs. L\'ordre de priorité décroissante est généralement le suivant  :

1.  ¬

2.  ∧

3.  ∨

4.  →

5.  ↔

Ainsi, la formule ¬p∧q→r est interprétée comme (((¬p)∧q)→r). Les parenthèses restent nécessaires pour outrepasser ces priorités, comme dans ¬(p∧q).

De plus, il est courant de définir certains symboles comme des abréviations. Par exemple, les constantes logiques \"vrai\" (⊤) et \"faux\" (⊥) peuvent être introduites. On peut également définir l\'équivalence comme une abréviation de la double implication  :

- (F↔G) est une abréviation pour ((F→G)∧(G→F)).

Ces conventions permettent de simplifier l\'écriture sans altérer la rigueur formelle du langage.

#### 1.1.2. Sémantique Formelle

La sémantique donne un sens aux formules bien formées. En logique propositionnelle, ce sens est une valeur de vérité, déterminée par l\'interprétation des variables propositionnelles de base.

##### Domaine de Vérité et Valuation

Le domaine sémantique est l\'ensemble des valeurs de vérité, B={Vrai,Faux}, que l\'on représente souvent par l\'ensemble binaire {1,0} pour des raisons de commodité algébrique.

Le point de départ de l\'interprétation sémantique est la **valuation** (parfois appelée interprétation ou assignation). Une valuation est une fonction v:P→{1,0} qui assigne une valeur de vérité à chaque variable propositionnelle. Une valuation représente un \"état du monde\" possible, où chaque proposition atomique est soit vraie, soit fausse.

##### Extension aux Formules Complexes et Tables de Vérité

Le cœur de la sémantique propositionnelle est la définition inductive de la valeur de vérité d\'une formule complexe, qui étend la fonction de valuation v de P à l\'ensemble de toutes les EBF, F. Cette extension, notée vˉ:F→{1,0}, est définie comme suit  :

- **Base :** Si F est une variable propositionnelle p, alors vˉ(p)=v(p).

- **Induction :** Si F et G sont des EBF, alors :

  - vˉ((¬F))=1 si et seulement si vˉ(F)=0.

  - vˉ((F∧G))=1 si et seulement si vˉ(F)=1 et vˉ(G)=1.

  - vˉ((F∨G))=1 si et seulement si vˉ(F)=1 ou vˉ(G)=1.

  - vˉ((F→G))=1 si et seulement si vˉ(F)=0 ou vˉ(G)=1. (Équivalent à : vˉ((F→G))=0 ssi vˉ(F)=1 et vˉ(G)=0).

  - vˉ((F↔G))=1 si et seulement si vˉ(F)=vˉ(G).

Ces règles définissent formellement la signification de chaque connecteur. Elles peuvent être visualisées et calculées systématiquement à l\'aide de **tables de vérité**. Une table de vérité énumère toutes les valuations possibles pour les variables d\'une formule et donne la valeur de vérité de la formule pour chaque valuation. S\'il y a

n variables propositionnelles, il y a 2n valuations possibles.

La table suivante présente les définitions sémantiques formelles des connecteurs logiques. Elle n\'est pas seulement un outil de calcul, mais l\'incarnation même de la sémantique en logique propositionnelle.

**Table 1.1 : Tables de Vérité des Connecteurs Logiques**

  -------- -------- -------- -------- -------- -------- --------
  p        q        ¬p       p∧q      p∨q      p→q      p↔q

  1        1        0        1        1        1        1

  1        0        0        0        1        0        0

  0        1        1        0        1        1        0

  0        0        1        0        0        1        1
  -------- -------- -------- -------- -------- -------- --------

Une attention particulière doit être portée à la sémantique de l\'implication (p→q). Elle est fausse uniquement dans le cas où l\'antécédent (p) est vrai et le conséquent (q) est faux. Elle est donc vraie chaque fois que l\'antécédent est faux, un principe connu sous le nom de *ex falso sequitur quodlibet* (\"du faux découle n\'importe quoi\"). Cette définition, bien que parfois contre-intuitive par rapport à l\'usage causal du \"si\... alors\...\" dans le langage naturel, est absolument cruciale pour la rigueur du raisonnement mathématique. Elle capture l\'idée que d\'une prémisse fausse, on peut déduire n\'importe quelle conclusion sans invalider le raisonnement lui-même.

### 1.2. Analyse Sémantique des Formules

Une fois la sémantique établie, nous pouvons classer les formules en fonction de leurs propriétés de vérité et définir les relations fondamentales qui existent entre elles. Ces concepts sont au cœur du raisonnement automatisé.

#### 1.2.1. Classification des Formules

En fonction de leur comportement sur l\'ensemble de toutes les valuations possibles, les formules se répartissent en trois catégories mutuellement exclusives.

- **Tautologie :** Une formule F est une **tautologie** (ou est **valide**) si elle est vraie pour *toute* valuation v. On note ce fait ⊨F. Une tautologie représente une vérité logique universelle, indépendante de l\'état du monde. L\'exemple paradigmatique est la *loi du tiers exclu*, p∨¬p, qui est toujours vraie, que p soit vrai ou faux.

- **Contradiction :** Une formule F est une **contradiction** (ou une **antilogie**, ou est **insatisfaisable**) si elle est fausse pour *toute* valuation v. Une contradiction représente une fausseté logique universelle. L\'exemple le plus simple est la *loi de non-contradiction*, p∧¬p.

- **Formule Contingente :** Une formule F est **contingente** si elle n\'est ni une tautologie ni une contradiction. Sa valeur de vérité dépend de la valuation choisie. Il existe au moins une valuation qui la rend vraie et au moins une qui la rend fausse. Les variables propositionnelles elles-mêmes sont les formules contingentes les plus simples.

#### 1.2.2. Concepts Centraux pour le Raisonnement Automatique

Ces classifications mènent à des notions plus fines, essentielles pour les applications informatiques.

- **Modèle :** Une valuation v est un **modèle** pour une formule F si v rend F vraie, c\'est-à-dire vˉ(F)=1. On note alors v⊨F et on dit que \"v satisfait F\".

- **Satisfiabilité (SAT) :** Une formule F est **satisfiable** si elle admet au moins un modèle, c\'est-à-dire s\'il existe au moins une valuation qui la rend vraie. Une formule est donc satisfiable si et seulement si elle n\'est pas une contradiction. Le problème de déterminer si une formule donnée est satisfiable, connu sous le nom de problème\
  **SAT**, est l\'un des problèmes les plus étudiés en informatique théorique.

#### 1.2.3. Relations entre Formules

La sémantique nous permet également de formaliser les relations de déduction et d\'équivalence entre différentes formules.

- **Conséquence Logique :** Une formule G est une **conséquence logique** d\'un ensemble de formules Γ={F1​,...,Fn​} (noté Γ⊨G) si tout modèle qui satisfait simultanément toutes les formules de Γ est aussi un modèle de G. Cela formalise l\'idée d\'un argument valide : si les prémisses (\
  Fi​) sont vraies, alors la conclusion (G) doit nécessairement être vraie.

- **Équivalence Logique :** Deux formules F et G sont **logiquement équivalentes** (noté F≡G) si elles ont la même table de vérité, c\'est-à-dire si pour toute valuation v, vˉ(F)=vˉ(G). Des formules équivalentes sont interchangeables dans n\'importe quel contexte logique sans en altérer la valeur de vérité.

#### 1.2.4. L\'Interconnexion des Concepts Sémantiques

Ces différentes notions sémantiques ne sont pas isolées ; elles forment un réseau de concepts étroitement liés, où la résolution d\'un type de problème peut être ramenée à la résolution d\'un autre. Cette interdépendance est fondamentale, car elle démontre qu\'un algorithme capable de résoudre un seul de ces problèmes fondamentaux peut, en principe, les résoudre tous.

1.  **Équivalence et Tautologie :** Deux formules F et G sont logiquement équivalentes si et seulement si la formule (F↔G) est une tautologie. Vérifier l\'équivalence de deux formules revient donc à vérifier la validité d\'une seule formule.

2.  **Conséquence et Tautologie :** Une formule G est une conséquence logique d\'un ensemble de prémisses {F1​,...,Fn​} si et seulement si la formule (F1​∧⋯∧Fn​)→G est une tautologie. La notion de déduction valide est ainsi ramenée à la vérification d\'une tautologie.

3.  **Tautologie et Contradiction :** Une formule F est une tautologie si et seulement si sa négation, ¬F, est une contradiction (insatisfaisable).

Ces réductions convergent vers un point central : le problème de la **satisfiabilité (SAT)**. Si nous disposons d\'un algorithme capable de déterminer si une formule est satisfiable, nous pouvons résoudre tous les autres problèmes sémantiques :

- Pour vérifier si F est une **tautologie**, on vérifie si ¬F est insatisfiable.

- Pour vérifier si F est une **contradiction**, on vérifie si F est insatisfiable.

- Pour vérifier si F≡G, on vérifie si ¬(F↔G) est insatisfiable.

- Pour vérifier si F⊨G, on vérifie si F∧¬G est insatisfiable.

Cette convergence explique pourquoi le problème SAT est considéré comme le problème prototypique de la NP-complétude et pourquoi des décennies de recherche ont été consacrées au développement de **solveurs SAT** efficaces. Un solveur SAT n\'est pas seulement un outil pour un problème de niche ; c\'est un moteur de raisonnement universel pour toute la logique propositionnelle.

### 1.3. Équivalences Notables et Formes Normales

Si les tables de vérité fournissent une méthode sémantique pour analyser les formules, elles deviennent rapidement impraticables à mesure que le nombre de variables augmente (2n lignes). Une approche alternative, plus algébrique et syntaxique, consiste à transformer les formules en utilisant des règles de réécriture qui préservent l\'équivalence logique.

#### 1.3.1. L\'Algèbre des Propositions

Les lois d\'équivalence logique forment une véritable algèbre sur l\'ensemble des formules. Elles permettent de manipuler, simplifier et canoniser les expressions logiques. Le tableau suivant recense les lois les plus fondamentales.

**Table 1.2 : Principales Lois d\'Équivalence Logique**

  ---------------------------- --------------------- --------------------- ---------------
  Nom de la Loi                Forme avec ∧          Forme avec ∨          Source(s)

  **Commutativité**            F∧G≡G∧F               F∨G≡G∨F

  **Associativité**            (F∧G)∧H≡F∧(G∧H)       (F∨G)∨H≡F∨(G∨H)

  **Idempotence**              F∧F≡F                 F∨F≡F

  **Distributivité**           F∧(G∨H)≡(F∧G)∨(F∧H)   F∨(G∧H)≡(F∨G)∧(F∨H)

  **Lois de De Morgan**        ¬(F∧G)≡¬F∨¬G          ¬(F∨G)≡¬F∧¬G

  **Absorption**               F∧(F∨G)≡F             F∨(F∧G)≡F

  **Éléments Neutres**         F∧⊤≡F                 F∨⊥≡F

  **Éléments Absorbants**      F∧⊥≡⊥                 F∨⊤≡⊤

  **Double Négation**          \\multicolumn{2}{c    }{¬¬F≡F}

  **Tiers Exclu**              \\multicolumn{2}{c    }{F∨¬F≡⊤}

  **Non-Contradiction**        \\multicolumn{2}{c    }{F∧¬F≡⊥}

  **Définition Implication**   \\multicolumn{2}{c    }{F→G≡¬F∨G}

  **Définition Équivalence**   \\multicolumn{2}{c    }{F↔G≡(F→G)∧(G→F)}
  ---------------------------- --------------------- --------------------- ---------------

Ces lois peuvent être prouvées formellement, soit en construisant les tables de vérité pour les deux côtés de l\'équivalence et en vérifiant qu\'elles sont identiques , soit par des preuves algébriques qui utilisent des lois déjà établies pour en dériver de nouvelles.

#### 1.3.2. Formes Normales

Pour de nombreuses applications algorithmiques, il est avantageux de travailler avec des formules qui ont une structure syntaxique standardisée, ou canonique. Les formes normales les plus importantes sont la Forme Normale Conjonctive (FNC) et la Forme Normale Disjonctive (FND).

- **Définitions Préliminaires**  :

  - Un **littéral** est une variable propositionnelle (p) ou sa négation (¬p).

  - Une **clause** (ou somme élémentaire) est une disjonction de littéraux (ex: p∨¬q∨r).

  - Un **terme** (ou produit élémentaire) est une conjonction de littéraux (ex: p∧¬q∧r).

- **Forme Normale Conjonctive (FNC)** : Une formule est en FNC si elle est une conjonction de clauses. Exemple : (p∨¬q)∧(¬p∨r)∧q.

- **Forme Normale Disjonctive (FND)** : Une formule est en FND si elle est une disjonction de termes. Exemple : (p∧¬q)∨(¬p∧r)∨q.

Un théorème fondamental de la logique propositionnelle stipule que **toute formule possède une FNC et une FND qui lui sont logiquement équivalentes**. Cette propriété garantit que nous pouvons toujours transformer une formule quelconque en une de ces formes standards.

#### 1.3.3. Algorithmes de Conversion en Formes Normales

Il existe deux approches principales pour convertir une formule en forme normale.

**Table 1.3: Algorithmes de Conversion en FNC/FND**

  ---------------- -------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------
  Méthode          Description                                                    Procédure pour la FND                                                                                                                                                                                                                                                                                                                                                                                      Procédure pour la FNC                                                                                                                                                                                               Source(s)

  **Sémantique**   Basée sur la table de vérité de la formule.                    Pour chaque ligne de la table où la formule est **vraie** (valeur 1), construire un terme (conjonction) qui correspond à cette valuation (le minterme). La FND est la disjonction de tous ces termes.                                                                                                                                                                                                      Pour chaque ligne de la table où la formule est **fausse** (valeur 0), construire une clause (disjonction) qui est la négation de cette valuation (le maxterme). La FNC est la conjonction de toutes ces clauses.

  **Syntaxique**   Basée sur l\'application successive des lois d\'équivalence.   1\. **Éliminer ↔ et →** en utilisant leurs définitions (A↔B≡..., A→B≡¬A∨B). 2. **Pousser les négations** vers l\'intérieur en utilisant les lois de De Morgan et la double négation, jusqu\'à ce qu\'elles ne portent que sur des variables (mise en forme normale négative). 3. **Appliquer la distributivité** de ∧ sur ∨ pour \"sortir\" les conjonctions et obtenir une disjonction de conjonctions.   1\. **Éliminer ↔ et →**. 2. **Pousser les négations** vers l\'intérieur. 3. **Appliquer la distributivité** de ∨ sur ∧ pour \"sortir\" les disjonctions et obtenir une conjonction de disjonctions.
  ---------------- -------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------

#### 1.3.4. Le Compromis entre Équivalence et Satisfiabilité

Bien que les méthodes ci-dessus garantissent la conversion en une forme normale *équivalente*, elles présentent un inconvénient majeur : la taille de la formule résultante peut croître de manière exponentielle par rapport à la taille de la formule originale. Par exemple, la conversion de la formule

(p1​∧q1​)∨(p2​∧q2​)∨⋯∨(pn​∧qn​) en FNC par distributivité génère 2n clauses. Cette explosion combinatoire rend l\'approche syntaxique directe impraticable pour des applications réelles comme la vérification de circuits ou la résolution de problèmes de planification.

C\'est ici qu\'intervient une distinction subtile mais cruciale : la différence entre **l\'équivalence logique** et **l\'équisatisfiabilité**. Deux formules sont équisatisfiables si elles sont soit toutes les deux satisfiables, soit toutes les deux insatisfiables. L\'équisatisfiabilité est une relation plus faible que l\'équivalence (deux formules équivalentes sont toujours équisatisfiables, mais la réciproque est fausse).

Pour de nombreuses applications, notamment la résolution SAT, il n\'est pas nécessaire de préserver l\'équivalence exacte de la formule originale. Il suffit de générer une nouvelle formule en FNC qui est satisfiable si et seulement si l\'originale l\'est. La **transformation de Tseitin** est une technique algorithmique ingénieuse qui accomplit précisément cela, en temps linéaire.

Le principe de la transformation de Tseitin est d\'introduire de nouvelles variables propositionnelles pour représenter les sous-formules. Pour chaque sous-formule S de la formule originale F, on introduit une nouvelle variable xS​ et on ajoute un ensemble de clauses qui forcent l\'équivalence xS​↔S. Par exemple, pour une sous-formule A∧B, on introduit une nouvelle variable xA∧B​ et on ajoute les clauses équivalentes à xA∧B​↔(xA​∧xB​), qui sont (¬xA∧B​∨xA​), (¬xA∧B​∨xB​), et (¬xA​∨¬xB​∨xA∧B​). En appliquant ce processus à toutes les sous-formules, on obtient une grande conjonction de petites clauses, à laquelle on ajoute la clause finale \[xF​\] (pour forcer la formule entière à être vraie). La FNC résultante est équisatisfiable à la formule originale et sa taille est linéaire par rapport à celle-ci. Ce compromis est au cœur de l\'efficacité des solveurs SAT modernes.

#### 1.3.5. Minimisation des Formes Normales

Dans des domaines comme la conception de circuits logiques, l\'objectif n\'est pas seulement de trouver une forme normale, mais de trouver la forme normale *la plus simple* (avec le moins de littéraux ou de termes/clauses), car cela se traduit directement par un circuit moins coûteux et plus rapide. Le problème de la minimisation de fonctions booléennes est un problème d\'optimisation complexe.

L\'**algorithme de Quine-McCluskey** est une méthode tabulaire systématique pour trouver une FND minimale pour une fonction booléenne donnée. Il est plus systématique que les tableaux de Karnaugh et peut être programmé pour un plus grand nombre de variables. L\'algorithme se déroule en deux étapes majeures.

1.  **Identification des Implicants Premiers :**

    - On liste tous les mintermes (les valuations qui rendent la fonction vraie) de la fonction.

    - On groupe les mintermes par nombre de \'1\' dans leur représentation binaire.

    - On compare itérativement les termes de groupes adjacents. Si deux termes ne diffèrent que par un seul bit, ils sont fusionnés en un nouveau terme où le bit différent est remplacé par un tiret - (qui signifie \"indifférent\"). Les deux termes originaux sont marqués comme \"couverts\".

    - On répète ce processus de fusion avec les nouveaux termes jusqu\'à ce qu\'aucune fusion ne soit plus possible.

    - Les termes qui n\'ont pas été couverts à l\'issue de ce processus sont les **implicants premiers** de la fonction. Un implicant premier est un terme qui ne peut être simplifié davantage tout en continuant à n\'impliquer que des mintermes de la fonction originale.

2.  **Construction de la Table des Implicants Premiers :**

    - On construit une table avec les implicants premiers en lignes et les mintermes originaux en colonnes.

    - On coche une case (i,j) si l\'implicant premier i \"couvre\" (implique) le minterme j.

    - On identifie les **implicants premiers essentiels** : ce sont ceux qui sont les seuls à couvrir un certain minterme. Ces implicants doivent obligatoirement faire partie de la solution minimale.

    - On sélectionne les implicants premiers essentiels et on retire de la table tous les mintermes qu\'ils couvrent.

    - S\'il reste des mintermes non couverts, on choisit un sous-ensemble minimal d\'implicants premiers restants pour couvrir les mintermes restants. Cette dernière étape est un problème de couverture d\'ensemble (set cover), qui est NP-difficile, mais souvent gérable en pratique pour des tailles raisonnables.

La disjonction des implicants premiers essentiels et des implicants choisis à la dernière étape forme la FND minimale de la fonction.

## Partie II : La Logique des Prédicats -- Un Langage pour les Objets et leurs Relations

Si la logique propositionnelle fournit l\'algèbre fondamentale du raisonnement, son pouvoir expressif reste sévèrement limité. Elle ne peut pas pénétrer la structure interne des propositions. Pour elle, \"Tous les hommes sont mortels\" et \"Socrate est un homme\" sont simplement deux atomes distincts, p et q, sans aucun lien logique apparent. Il est donc impossible, dans ce cadre, de déduire formellement que \"Socrate est mortel\". Pour capturer la richesse du raisonnement mathématique et du langage naturel, il nous faut un langage plus puissant, capable de parler d\'objets, de leurs propriétés, des relations qui les unissent, et de faire des affirmations générales sur eux. C\'est le rôle de la logique du premier ordre, ou calcul des prédicats.

### 2.1. Des Propositions aux Prédicats : Limites et Extensions

La transition vers la logique des prédicats est motivée par la nécessité de surmonter les limitations inhérentes au calcul propositionnel.

#### 2.1.1. Limites de la Logique Propositionnelle

La principale limitation est l\'incapacité à analyser la structure sujet-prédicat des énoncés. Des affirmations comme :

1.  Tous les informaticiens aiment la logique.

2.  Alice est une informaticienne.

Ne peuvent être formalisées qu\'en tant que deux variables, p et q. La conclusion évidente, \"Alice aime la logique\", ne peut être dérivée. La logique propositionnelle manque des outils pour exprimer la notion de \"tous\", pour appliquer une propriété générale (\"aimer la logique\") à un individu spécifique (\"Alice\"), et pour relier les concepts (\"informaticien\") entre les phrases.

#### 2.1.2. Introduction Intuitive des Nouveaux Concepts

La logique des prédicats enrichit notre langage formel avec trois nouveaux types d\'éléments  :

- **Termes :** Des expressions qui désignent des **objets** ou des **individus** dans un univers de discours. Les termes peuvent être des **constantes** (comme Socrate, 0) ou des **variables** (x, y,\...) qui représentent des objets non spécifiés. Ils peuvent aussi être construits à l\'aide de **fonctions** (comme père_de(x) ou successeur(n)).

- **Prédicats :** Des expressions qui dénotent des **propriétés** d\'objets ou des **relations** entre objets. Un prédicat appliqué à des termes forme une proposition atomique qui est soit vraie, soit fausse. Par exemple, Homme(x) est un prédicat à un argument (unaire) qui exprime la propriété \"être un homme\". Père(x, y) est un prédicat à deux arguments (binaire) qui exprime la relation \"x est le père de y\". L\'arité d\'un prédicat est le nombre d\'arguments qu\'il requiert.

- **Quantificateurs :** Des symboles qui permettent de faire des affirmations générales sur les variables.

  - Le **quantificateur universel** ∀ (\"pour tout\") permet d\'affirmer qu\'une propriété est vraie pour tous les objets du domaine. ∀x,Homme(x)→Mortel(x) se lit \"Pour tout x, si x est un homme, alors x est mortel\".

  - Le **quantificateur existentiel** ∃ (\"il existe\") permet d\'affirmer qu\'il existe au moins un objet dans le domaine qui possède une certaine propriété. ∃x,Informaticien(x)∧AimeLaLogique(x) se lit \"Il existe au moins un x tel que x est un informaticien et x aime la logique\".

**Table 2.1 : Comparaison Logique Propositionnelle vs. Logique des Prédicats**

  ----------------------- ------------------------------------------------ ----------------------------------------------------------------------
  Caractéristique         Logique Propositionnelle                         Logique des Prédicats (Premier Ordre)

  **Unité de base**       Proposition atomique (p,q)                       Termes (objets) et prédicats (propriétés/relations)

  **Structure interne**   Aucune                                           Les propositions sont structurées (ex: P(f(c),x))

  **Sémantique**          Valeurs de vérité assignées aux atomes           Interprétation dans un domaine d\'objets

  **Généralisation**      Impossible                                       Possible via les quantificateurs (∀,∃)

  **Expressivité**        Limitée à des combinaisons booléennes de faits   Riche, capable de formaliser les mathématiques et le langage naturel
  ----------------------- ------------------------------------------------ ----------------------------------------------------------------------

### 2.2. Syntaxe de la Logique du Premier Ordre

La syntaxe de la logique du premier ordre est une extension de celle de la logique propositionnelle, définissant un vocabulaire plus riche et des règles de formation plus complexes.

#### 2.2.1. Alphabet Étendu

Un langage du premier ordre est défini par sa **signature**, qui spécifie les symboles non logiques. L\'alphabet complet comprend  :

- **Symboles logiques (communs à tous les langages du premier ordre) :**

  - Connecteurs logiques : ¬,∧,∨,→,↔

  - Quantificateurs : ∀,∃

  - Parenthèses : (, )

  - Un ensemble infini de variables : x,y,z,x1​,...

- **Symboles non logiques (spécifiques à une signature) :**

  - Un ensemble de symboles de **constantes** : c1​,c2​,...

  - Un ensemble de symboles de **fonctions**, chacun avec une arité n≥1 : f1​,f2​,...

  - Un ensemble de symboles de **prédicats** (ou relations), chacun avec une arité n≥0 : P1​,P2​,... (les prédicats d\'arité 0 sont équivalents aux variables propositionnelles).

#### 2.2.2. Définition Inductive des Termes et Formules

À partir de cet alphabet, on construit deux types d\'expressions syntaxiques : les termes et les formules.

##### Termes

Un **terme** est une expression qui a pour but de nommer un objet du domaine. L\'ensemble des termes est défini inductivement  :

- **(Base)** Toute variable est un terme.

- **(Base)** Toute constante est un terme.

- **(Induction)** Si f est un symbole de fonction d\'arité n et si t1​,...,tn​ sont des termes, alors f(t1​,...,tn​) est un terme.

Par exemple, si c est une constante, x une variable, et f une fonction binaire, alors c, x, f(x,c), et f(c,f(x,x)) sont des termes.

##### Formules

Une **formule** est une expression qui a pour but de faire une affirmation (vraie ou fausse) sur les objets. L\'ensemble des formules est également défini inductivement  :

1.  **Formules Atomiques :**

    - Si P est un symbole de prédicat d\'arité n et si t1​,...,tn​ sont des termes, alors P(t1​,...,tn​) est une formule (appelée formule atomique).

    - Si t1​ et t2​ sont des termes, t1​=t2​ est une formule atomique (si le langage inclut l\'égalité).

2.  **Formules Complexes :**

    - Si F et G sont des formules, alors (¬F), (F∧G), (F∨G), (F→G), et (F↔G) sont des formules.

    - Si F est une formule et x est une variable, alors (∀xF) et (∃xF) sont des formules.

#### 2.2.3. Quantification et Variables

La distinction entre variables libres et liées est l\'un des aspects les plus subtils et les plus importants de la syntaxe du premier ordre.

- **Portée (Scope) :** Dans une formule (∀xF) ou (∃xF), la formule F est appelée la **portée** du quantificateur. Le quantificateur \"agit\" sur toutes les occurrences de\
  x à l\'intérieur de cette portée.

- **Variables Libres et Liées :** Une occurrence d\'une variable x dans une formule est dite **liée** si elle se trouve dans la portée d\'un quantificateur ∀x ou ∃x. Sinon, elle est dite **libre**.

  - Dans la formule ∀x(P(x)→Q(y)), l\'occurrence de x dans P(x) est liée. L\'occurrence de y dans Q(y) est libre.

  - Dans la formule (∃xP(x))∧Q(x), la première occurrence de x est liée, mais la seconde est libre. Pour éviter cette ambiguïté, il est de bonne pratique de renommer les variables liées pour qu\'elles soient distinctes des variables libres.

- **Formules Closes (Énoncés) :** Une formule qui ne contient aucune variable libre est appelée une **formule close** ou un **énoncé**. Seules les formules closes ont une valeur de vérité qui peut être déterminée indépendamment d\'une assignation de valeurs aux variables. Elles font des affirmations générales sur un domaine. Par exemple,\
  ∀x∃y(y\>x) est un énoncé sur les nombres, tandis que y\>x n\'est pas un énoncé car sa vérité dépend des valeurs assignées à x et y.

### 2.3. Sémantique de la Logique du Premier Ordre

La sémantique de la logique du premier ordre est considérablement plus riche que celle de la logique propositionnelle. Une formule n\'a plus une valeur de vérité absolue ; sa vérité est toujours relative à une **interprétation** dans un **modèle** donné. C\'est le domaine d\'étude de la **théorie des modèles**. Une formule comme

∀x∃yP(x,y) n\'est ni vraie ni fausse en soi. Elle est vraie dans le modèle des entiers naturels où P(x,y) signifie \"y\>x\", mais elle est fausse dans le même modèle si P(x,y) signifie \"y\<x\". La sémantique formelle a donc pour but de définir précisément les conditions sous lesquelles une formule est vraie *dans une structure donnée*.

#### 2.3.1. Structure d\'Interprétation (Modèle)

Une **structure d\'interprétation** (ou **modèle**) M pour un langage du premier ordre donné est un couple M=(D,I) où  :

1.  D est un ensemble non vide appelé le **domaine** ou l\'univers du discours. C\'est l\'ensemble des objets sur lesquels les variables et les quantificateurs portent.

2.  I est une **fonction d\'interprétation** qui associe chaque symbole non logique du langage à un élément, une fonction ou une relation sur le domaine D :

    - Pour chaque symbole de constante c, I(c) est un élément de D.

    - Pour chaque symbole de fonction f d\'arité n, I(f) est une fonction de Dn dans D.

    - Pour chaque symbole de prédicat P d\'arité n, I(P) est une relation sur Dn (c\'est-à-dire un sous-ensemble de Dn).

#### 2.3.2. Satisfaction d\'une Formule

Pour évaluer la vérité d\'une formule contenant des variables libres, nous avons besoin d\'une **assignation** (ou valuation de variables) σ, qui est une fonction associant chaque variable à un élément du domaine D.

On définit alors la notion de **satisfaction**, notée M,σ⊨F (\"le modèle M satisfait la formule F sous l\'assignation σ\"), par induction sur la structure de la formule F.

D\'abord, on étend l\'interprétation I et l\'assignation σ à tous les termes :

- \[c\]σM​=I(c)

- \[x\]σM​=σ(x)

- \[f(t1​,...,tn​)\]σM​=I(f)(\[t1​\]σM​,...,\[tn​\]σM​)

Ensuite, on définit la satisfaction pour les formules :

- **Formules atomiques :**

  - M,σ⊨P(t1​,...,tn​) si et seulement si le n-uplet (\[t1​\]σM​,...,\[tn​\]σM​) appartient à la relation I(P).

- **Connecteurs logiques :**

  - M,σ⊨¬F ssi il n\'est pas le cas que M,σ⊨F.

  - M,σ⊨F∧G ssi M,σ⊨F et M,σ⊨G.

  - (Les autres connecteurs suivent les règles propositionnelles).

- **Quantificateurs :**

  - M,σ⊨∀xF si et seulement si pour **tout** élément d∈D, on a M,σ\[x↦d\]⊨F, où σ\[x↦d\] est l\'assignation identique à σ sauf qu\'elle assigne d à x.

  - M,σ⊨∃xF si et seulement s\'il **existe** un élément d∈D tel que M,σ\[x↦d\]⊨F.

Si une formule F est close (sans variable libre), sa satisfaction ne dépend pas de l\'assignation σ. On peut alors simplement écrire M⊨F et dire que \"F est vraie dans le modèle M\" ou que \"M est un modèle de F\".

#### 2.3.3. Validité et Satisfiabilité

Les notions de validité et de satisfiabilité sont généralisées à partir de la logique propositionnelle  :

- Une formule F est **satisfiable** s\'il existe au moins un modèle M et une assignation σ tels que M,σ⊨F.

- Une formule F est **valide** (ou une **tautologie du premier ordre**) si elle est vraie dans **tous** les modèles possibles pour **toutes** les assignations possibles. On note alors ⊨F.

Des exemples de formules valides incluent ∀xP(x)→∃xP(x) (à condition que le domaine soit non vide) ou encore ¬(∃xP(x))↔∀x¬P(x) (loi de De Morgan pour les quantificateurs).

## Partie III : Systèmes de Preuve Formelle -- La Mécanique de la Déduction

La sémantique définit la notion de vérité et de conséquence logique (⊨). Cependant, pour vérifier qu\'une formule est une conséquence logique d\'un ensemble de prémisses, il faudrait en théorie examiner tous les modèles possibles, ce qui est infini et donc infaisable. Les **systèmes de preuve formelle** (ou systèmes de déduction) offrent une approche alternative, purement syntaxique. Ils fournissent un ensemble de règles d\'inférence qui permettent de dériver des formules (des théorèmes) à partir d\'un ensemble d\'axiomes ou d\'hypothèses, par simple manipulation de symboles. L\'objectif est de créer un système tel que les formules \"prouvables\" (dérivables syntaxiquement, noté ⊢) coïncident exactement avec les formules \"valides\" (vraies sémantiquement, noté ⊨). C\'est l\'objet des théorèmes de correction et de complétude.

### 3.1. La Déduction Naturelle

La déduction naturelle, développée par Gerhard Gentzen, est un système de preuve conçu pour refléter aussi fidèlement que possible la structure du raisonnement logique humain. Son principe central est le raisonnement à partir d\'**hypothèses** qui peuvent être introduites temporairement puis \"déchargées\" ou \"annulées\". Par exemple, pour prouver une implication

A→B, la méthode naturelle consiste à supposer A, à en déduire B, puis à conclure que A→B est vrai, déchargeant ainsi l\'hypothèse initiale A.

Le système est organisé autour de paires de règles pour chaque connecteur et quantificateur : une **règle d\'introduction** qui explique comment construire une formule contenant ce symbole, et une **règle d\'élimination** qui explique comment utiliser une formule contenant ce symbole pour en déduire autre chose.

#### 3.1.1. Règles d\'Introduction et d\'Élimination

Le tableau suivant présente les règles de la déduction naturelle pour la logique classique. Une déduction est représentée par un arbre de preuve, où les feuilles sont des axiomes ou des hypothèses, les nœuds internes sont des applications de règles, et la racine est la conclusion. La notation \[A\] au-dessus d\'une prémisse indique que l\'hypothèse A est déchargée par l\'application de la règle.

**Table 3.1 : Système de Règles de la Déduction Naturelle**

  --------------------------------- ---------------------------- ----------------------------------------------------
  Connecteur                        Règle d\'Introduction        Règle d\'Élimination

  **Axiome**                        A⊢A (ax)

  **Conjonction** (∧)               Γ,Δ⊢A∧BΓ⊢AΔ⊢B​(∧I)            Γ⊢AΓ⊢A∧B​(∧Eg​)Γ⊢BΓ⊢A∧B​(∧Ed​)

  **Implication** (→)               Γ⊢A→BΓ,\[A\]⊢B​(→I)           Γ,Δ⊢BΓ⊢AΔ⊢A→B​(→E,Modus Ponens)

  **Disjonction** (∨)               Γ⊢A∨BΓ⊢A​(∨Ig​)Γ⊢A∨BΓ⊢B​(∨Id​)   Γ,Δ,Θ⊢CΓ⊢A∨BΔ,\[A\]⊢CΘ,⊢C​(∨E,Raisonnement par cas)

  **Négation** (¬)                  Γ⊢¬AΓ,\[A\]⊢⊥​(¬I)            Γ,Δ⊢⊥Γ⊢AΔ⊢¬A​(¬E)

  **Absurde** (⊥)                                                Γ⊢AΓ⊢⊥​(⊥E,Ex falso quodlibet)

  **Raisonnement par l\'absurde**                                Γ⊢AΓ,\[¬A\]⊢⊥​(RAA)

  **Quant. Universel** (∀)          Γ⊢∀xAΓ⊢A\[x↦y\]​(∀I)∗         Γ⊢A\[x↦t\]Γ⊢∀xA​(∀E)

  **Quant. Existentiel** (∃)        Γ⊢∃xAΓ⊢A\[x↦t\]​(∃I)          Γ,Δ⊢BΓ⊢∃xAΔ,\[A\[x↦y\]\]⊢B​(∃E)∗∗
  --------------------------------- ---------------------------- ----------------------------------------------------

\* Condition pour (∀I) : La variable y ne doit pas apparaître libre dans Γ ou dans ∀xA. Cela garantit que la preuve de A\[x↦y\] est générique et ne dépend pas d\'une propriété spécifique de y.

\*\* Condition pour (∃E) : La variable y ne doit pas apparaître libre dans Γ,Δ,B ou ∃xA. Cela garantit que y agit comme un témoin arbitraire pour l\'existence.

#### 3.1.2. Construction de Preuves Formelles

Illustrons le système avec la preuve de la transitivité de l\'implication : (A→B),(B→C)⊢(A→C).

1.  (A→B)⊢(A→B) (Axiome)

2.  (B→C)⊢(B→C) (Axiome)

3.  A⊢A (Axiome, hypothèse temporaire)

4.  (A→B),A⊢B (Modus Ponens sur 1 et 3)

5.  (A→B),(B→C),A⊢C (Modus Ponens sur 2 et 4)

6.  (A→B),(B→C)⊢(A→C) (Intro → sur 5, décharge l\'hypothèse A)

La dernière ligne est la conclusion souhaitée. Chaque étape est une application rigoureuse d\'une règle d\'inférence.

#### 3.1.3. Logique Constructive et Correspondance de Curry-Howard

Le choix des règles n\'est pas anodin. La règle du raisonnement par l\'absurde (RAA), ou de manière équivalente l\'axiome du tiers exclu (A∨¬A), est la marque de la **logique classique**. Si l\'on retire cette règle, on obtient un système plus faible mais aux propriétés remarquables : la **logique intuitionniste** ou **constructive**.

Dans une preuve constructive, pour démontrer A∨B, il faut soit fournir une preuve de A, soit fournir une preuve de B. Pour démontrer ∃xP(x), il faut exhiber un témoin t et fournir une preuve de P(t). Les preuves d\'existence non constructives (par exemple, \"supposons qu\'un tel x n\'existe pas et dérivons une contradiction\") ne sont pas valides.

Cette distinction a des implications profondes en informatique. La **correspondance de Curry-Howard** établit un isomorphisme entre les preuves en logique intuitionniste et les programmes dans certains langages de programmation typés (comme le lambda-calcul simplement typé). Dans cette correspondance :

- Une proposition est un type.

- Une preuve d\'une proposition est un programme (un terme) de ce type.

- La simplification d\'une preuve (élimination des détours) correspond à l\'exécution (réduction) du programme.

Ainsi, prouver une formule de manière constructive, c\'est écrire un programme qui la réalise. Cette connexion profonde entre logique et calcul est à la base des assistants de preuve comme Coq et Agda, où l\'on peut écrire des programmes et prouver leur correction dans un cadre unifié.

### 3.2. Le Principe de Résolution

Contrairement à la déduction naturelle avec sa panoplie de règles, le **principe de résolution** est un système de preuve qui n\'utilise qu\'une seule règle d\'inférence. Cette simplicité en fait un candidat idéal pour l\'automatisation du raisonnement, et il est au cœur de la plupart des démonstrateurs de théorèmes modernes et des solveurs logiques.

La méthode de résolution opère sur des formules qui ont été préalablement converties en une forme standard appelée **forme clausale**. La stratégie de preuve est une preuve par réfutation : pour démontrer qu\'une conclusion F découle d\'un ensemble de prémisses Γ, on montre que l\'ensemble Γ∪{¬F} est insatisfaisable (contradictoire).

#### 3.2.1. Mise en Forme Clausale

La forme clausale est une généralisation de la FNC. Un ensemble de clauses est interprété comme la conjonction de ses clauses, et chaque clause est une disjonction de littéraux.

- **Logique Propositionnelle :** La conversion se fait en appliquant l\'algorithme de mise en FNC vu précédemment. Il est crucial, pour l\'efficacité, d\'utiliser une transformation qui préserve la satisfiabilité (comme la transformation de Tseitin) plutôt que l\'équivalence, afin d\'éviter l\'explosion de la taille de la formule.

- **Logique du Premier Ordre :** La conversion est plus complexe et requiert plusieurs étapes :

  1.  **Mise en Forme Normale Prénexe :** La formule est transformée en une formule équivalente où tous les quantificateurs apparaissent au début. Ceci est réalisé en utilisant des équivalences logiques pour \"remonter\" les quantificateurs (ex: (∀xA)∧B≡∀x(A∧B) si x n\'est pas libre dans B).

  2.  **Skolémisation :** Les quantificateurs existentiels sont éliminés. Chaque variable quantifiée existentiellement est remplacée par un **terme de Skolem**. Si le ∃x est dans la portée de quantificateurs universels ∀y1​,...,∀yn​, alors x est remplacé par f(y1​,...,yn​), où f est un nouveau symbole de fonction (une **fonction de Skolem**). Si ∃x n\'est dans la portée d\'aucun quantificateur universel, x est remplacé par une nouvelle constante (une **constante de Skolem**). La skolémisation ne préserve pas l\'équivalence, mais elle préserve la satisfiabilité.

  3.  **Mise en FNC de la Matrice :** La partie sans quantificateur de la formule (la matrice) est convertie en FNC en utilisant les méthodes propositionnelles.

  4.  **Suppression des Quantificateurs Universels :** Les ∀ restants sont implicites ; toutes les variables sont considérées comme universellement quantifiées.

Le résultat est un ensemble de clauses du premier ordre.

#### 3.2.2. La Règle de Résolution

**Table 3.2: La Règle de Résolution et ses Applications**

  -------------------- --------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ ---------------
  Cas                  Règle d\'Inférence    Description                                                                                                                                                                                                                                      Source(s)

  **Propositionnel**   C1​∨C2​C1​∨pC2​∨¬p​        À partir de deux clauses contenant un littéral et sa négation, on déduit une nouvelle clause (le **résolvant**) contenant tous les autres littéraux des deux clauses parentes.

  **Premier Ordre**    (C1​∨C2​)σC1​∨L1​C2​∨¬L2​​   L1​ et L2​ sont des littéraux atomiques. S\'il existe une substitution σ (l\'**unificateur le plus général**, ou MGU) telle que L1​σ=L2​σ, alors on peut déduire le résolvant. L\'unification est l\'algorithme qui trouve une telle substitution.
  -------------------- --------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ ---------------

L\'**unification** est le processus qui consiste à trouver une substitution de termes pour des variables qui rend deux expressions identiques. Par exemple, pour unifier P(x,f(a)) et P(g(y),f(z)), l\'unificateur le plus général est la substitution σ={x↦g(y),z↦a}. L\'unification est l\'opération clé qui permet d\'appliquer la résolution en logique du premier ordre.

#### 3.2.3. La Preuve par Réfutation : Exemple Détaillé

Montrons que l\'argument \"Tous les hommes sont mortels. Socrate est un homme. Donc, Socrate est mortel.\" est valide.

1.  **Formalisation :**

    - Prémisse 1 : ∀x(H(x)→M(x))

    - Prémisse 2 : H(s)

    - Conclusion à prouver : M(s)

2.  **Négation de la Conclusion :** ¬M(s)

3.  **Mise en Forme Clausale :**

    - Prémisse 1 : ∀x(¬H(x)∨M(x)). La forme clausale est {¬H(x)∨M(x)}.

    - Prémisse 2 : H(s). La forme clausale est {H(s)}.

    - Négation de la conclusion : ¬M(s). La forme clausale est {¬M(s)}.

    - Ensemble de clauses initial S={{¬H(x)∨M(x)},{H(s)},{¬M(s)}}.

4.  **Dérivation par Résolution :**

    - \(1\) {¬H(x)∨M(x)} (de S)

    - \(2\) {H(s)} (de S)

    - \(3\) {¬M(s)} (de S)

    - \(4\) {M(s)} (Résolvant de (1) et (2) avec l\'unificateur σ={x↦s})

    - \(5\) {} (la clause vide, ⊥) (Résolvant de (3) et (4))

Puisque nous avons dérivé la clause vide, l\'ensemble de clauses initial est insatisfaisable. Par conséquent, la conclusion originale est une conséquence logique des prémisses.

## Partie IV : Méthodes de Raisonnement et Applications Fondamentales

Les systèmes de preuve formels comme la déduction naturelle et la résolution fournissent les fondations rigoureuses de la logique. Cependant, dans la pratique quotidienne des mathématiques et de l\'informatique, les preuves sont rarement écrites avec ce niveau de détail formel. Elles suivent plutôt des schémas de raisonnement de plus haut niveau. Cette dernière partie a pour but de connecter ces méthodes de preuve pratiques aux formalismes logiques que nous avons établis, montrant qu\'elles ne sont pas des techniques ad-hoc mais des applications rigoureuses des principes logiques.

### 4.1. Techniques de Démonstration en Mathématiques et Informatique

Les méthodes de preuve les plus courantes peuvent être comprises comme des stratégies pour construire une déduction formelle.

**Table 4.1: Structure des Méthodes de Preuve**

  ---------------------------- ------------- ------------------------------------------------------------ ---------------------------------------------------------------------------------------------------- ------------
  Méthode                      Objectif      Structure Logique                                            Justification Formelle                                                                               Source(s)

  **Preuve Directe**           Prouver P→Q   Supposer P. En déduire Q par une suite d\'étapes logiques.   Application directe de la règle d\'introduction de l\'implication (→I) en déduction naturelle.

  **Preuve par Contraposée**   Prouver P→Q   Supposer ¬Q. En déduire ¬P.                                  Basée sur l\'équivalence logique (P→Q)≡(¬Q→¬P). On construit une preuve directe de la contraposée.

  **Preuve par l\'Absurde**    Prouver P     Supposer ¬P. En déduire une contradiction (⊥).               Application directe de la règle du raisonnement par l\'absurde (RAA) en déduction naturelle.
  ---------------------------- ------------- ------------------------------------------------------------ ---------------------------------------------------------------------------------------------------- ------------

#### 4.1.1. Le Principe des Tiroirs (Pigeonhole Principle)

Le principe des tiroirs est une technique de comptage simple mais d\'une puissance surprenante pour prouver l\'existence de certaines propriétés dans des ensembles finis.

- **Forme Simple :** Si n+1 objets (pigeons) sont placés dans n boîtes (tiroirs), alors au moins une boîte doit contenir plus d\'un objet.

- **Forme Généralisée :** Si n objets sont placés dans m boîtes, alors au moins une boîte doit contenir au moins ⌈n/m⌉ objets, où ⌈⋅⌉ est la fonction plafond.

La preuve de ce principe est un exemple classique de raisonnement par l\'absurde. Pour la forme simple : supposons que chaque boîte contienne au plus un objet. Comme il y a n boîtes, il y a au total au plus n×1=n objets. Ceci contredit le fait qu\'il y a n+1 objets. Donc, l\'hypothèse initiale est fausse, et au moins une boîte doit contenir plus d\'un objet.

La caractéristique la plus importante du principe des tiroirs est qu\'il s\'agit d\'une **preuve d\'existence non constructive**. Il garantit l\'existence d\'une boîte surpeuplée, mais ne donne aucune information sur laquelle c\'est, ni comment la trouver. Cette propriété en fait un outil puissant pour établir des bornes et des limitations fondamentales.

Une application classique et fondamentale en informatique concerne les **tables de hachage**. Une table de hachage est une structure de données qui mappe des clés d\'un grand univers U à des indices dans un tableau de taille m, où m est généralement beaucoup plus petit que la taille de U. Ce mappage est réalisé par une fonction de hachage h:U→{0,...,m−1}. Puisque l\'ensemble des clés possibles (les \"pigeons\") est plus grand que le nombre d\'indices de tableau (les \"tiroirs\"), le principe des tiroirs garantit que les **collisions** --- deux clés distinctes k1​=k2​ telles que h(k1​)=h(k2​) --- sont inévitables. Toute la théorie des tables de hachage est donc construite non pas sur l\'évitement des collisions, mais sur leur gestion efficace. Ce principe est également utilisé en cryptographie pour prouver l\'existence de collisions dans les fonctions de hachage cryptographiques.

### 4.2. Le Principe d\'Induction : Raisonner sur les Structures Récursives

Le fil conducteur de ce chapitre a été la notion de définition inductive : nous avons défini les formules bien formées de manière inductive, puis les fonctions sur ces formules de manière récursive. Il est donc naturel qu\'il existe une méthode de preuve spécifiquement adaptée à ces structures : le **raisonnement par induction**. L\'induction et la récursion sont les deux faces d\'une même médaille : la récursion est une méthode pour construire ou calculer, tandis que l\'induction est une méthode pour raisonner sur ces constructions. C\'est sans doute le principe de preuve le plus important en informatique théorique, car il permet de prouver des propriétés sur des objets de taille potentiellement infinie (comme tous les entiers naturels) ou des structures de données récursives (comme les listes et les arbres).

#### 4.2.1. Induction Simple et Forte sur **N**

- **Induction Simple (ou Faible) :** Pour prouver qu\'une propriété P(n) est vraie pour tous les entiers naturels n≥n0​, on procède en deux étapes  :

  1.  **Cas de Base :** On prouve que P(n0​) est vraie.

  2.  **Étape Inductive :** On suppose que P(k) est vraie pour un entier arbitraire k≥n0​ (c\'est l\'**hypothèse de récurrence**), et on utilise cette hypothèse pour prouver que P(k+1) est vraie.

- **Induction Forte (ou Complète) :** L\'induction forte est une variante où l\'hypothèse de récurrence est plus puissante  :

  1.  **Cas de Base :** On prouve P(n0​).

  2.  **Étape Inductive :** On suppose que P(i) est vraie pour **tous** les entiers i tels que n0​≤i≤k, et on utilise cette hypothèse pour prouver que P(k+1) est vraie.

Bien que l\'induction forte semble plus puissante, les deux principes sont logiquement équivalents. Cependant, l\'induction forte est souvent plus naturelle pour les problèmes où la propriété de k+1 dépend de plusieurs prédécesseurs, comme dans la preuve du théorème fondamental de l\'arithmétique (tout entier supérieur à 1 est un produit de nombres premiers).

#### 4.2.2. Induction Structurelle

L\'induction structurelle généralise le principe d\'induction à tout ensemble défini inductivement, comme l\'ensemble des formules, des listes, ou des arbres binaires. La structure de la preuve par induction structurelle suit directement la structure de la définition inductive de l\'ensemble. Pour prouver qu\'une propriété

P(x) est vraie pour tous les éléments x d\'un ensemble inductif X :

1.  **Cas de Base :** On prouve que P(b) est vraie pour chaque élément de base b de X.

2.  **Étape Inductive :** Pour chaque règle de construction inductive r de X (par exemple, si x1​,...,xn​ sont dans X, alors r(x1​,...,xn​) est dans X), on suppose que la propriété est vraie pour les composants (P(x1​),...,P(xn​) sont vraies) et on prouve qu\'elle est alors vraie pour l\'élément construit P(r(x1​,...,xn​)).

Par exemple, pour prouver une propriété sur tous les arbres binaires, on la prouverait pour l\'arbre vide (cas de base), puis on supposerait qu\'elle est vraie pour un sous-arbre gauche G et un sous-arbre droit D pour prouver qu\'elle est vraie pour un nœud ayant G et D comme enfants.

#### 4.2.3. Applications à la Preuve de Correction d\'Algorithmes

L\'induction est l\'outil principal pour prouver formellement qu\'un algorithme est correct. La correction totale d\'un algorithme se compose de deux propriétés distinctes  :

1.  **Correction Partielle :** *Si* l\'algorithme termine, alors il produit le résultat attendu.

    - Pour les **algorithmes récursifs**, la correction partielle se prouve naturellement par induction (simple, forte ou structurelle) sur la structure des entrées. On suppose que les appels récursifs sur des entrées \"plus petites\" retournent le bon résultat (hypothèse de récurrence) et on montre que la combinaison de ces résultats produit le bon résultat pour l\'entrée actuelle.

    - Pour les **algorithmes itératifs** (avec des boucles), la correction partielle est prouvée à l\'aide d\'un **invariant de boucle**. Un invariant de boucle est une propriété qui est vraie avant la première itération et qui, si elle est vraie avant une itération, reste vraie après cette itération. On prouve par induction sur le nombre d\'itérations que l\'invariant est vrai à chaque étape. En combinant l\'invariant avec la condition d\'arrêt de la boucle, on peut alors démontrer que le résultat final est correct.

2.  **Terminaison :** L\'algorithme s\'arrête en un temps fini pour toute entrée valide.

    - La terminaison est également prouvée par induction. On doit trouver une quantité (un \"variant\") qui est associée à l\'état de l\'algorithme, qui prend ses valeurs dans un ensemble bien fondé (comme les entiers naturels avec l\'ordre ≥), et qui **décroît strictement** à chaque appel récursif ou à chaque itération de boucle. Comme il ne peut y avoir de séquence infinie strictement décroissante dans un ensemble bien fondé, l\'algorithme doit nécessairement terminer.

## Conclusion

Ce chapitre a entrepris un voyage au cœur des fondements de l\'informatique, en partant des briques élémentaires de la logique propositionnelle pour atteindre les structures expressives de la logique des prédicats, et en reliant les notions sémantiques de vérité aux mécanismes syntaxiques de la preuve. Plusieurs thèmes centraux ont émergé.

Premièrement, la **dualité syntaxe-sémantique** est le principe organisateur de tout langage formel. La capacité de manipuler des symboles selon des règles strictes (syntaxe) tout en garantissant que ces manipulations préservent la vérité (sémantique) est ce qui rend le raisonnement formel et la computation possibles. Deuxièmement, le pouvoir de l\'**abstraction** nous a permis de passer d\'énoncés atomiques à des prédicats sur des mondes d\'objets, montrant comment des langages de plus en plus riches peuvent être construits sur des bases plus simples. Troisièmement, le lien intime entre les **définitions inductives et le raisonnement par induction** s\'est révélé être la clé de voûte de la preuve en informatique, nous permettant de raisonner sur des structures et des processus potentiellement infinis. Enfin, nous avons vu l\'importance des **compromis** fondamentaux, comme celui entre l\'expressivité d\'un langage et la complexité calculatoire de son analyse, ou celui entre l\'équivalence logique et l\'équisatisfiabilité, qui est au cœur de l\'efficacité des outils de raisonnement automatique.

Les concepts introduits ici --- satisfiabilité, modèles, déduction, unification, induction --- ne sont pas de simples curiosités théoriques. Ils constituent le socle sur lequel reposent des domaines avancés qui seront explorés dans les chapitres suivants de cet ouvrage. La **vérification formelle** des systèmes critiques, qui garantit la sûreté des logiciels et du matériel, utilise des techniques de *model checking* et des démonstrateurs de théorèmes basés sur la logique des prédicats. La **sémantique des langages de programmation** s\'appuie sur des systèmes logiques pour définir précisément le comportement des programmes. Le **raisonnement automatique en intelligence artificielle**, de la planification à la représentation des connaissances, utilise la résolution et d\'autres calculs logiques comme moteurs d\'inférence. La

**théorie des bases de données** utilise la logique du premier ordre pour définir les langages de requête et pour raisonner sur l\'intégrité des données.

En somme, la logique n\'est pas seulement un outil pour l\'informaticien ; elle est l\'échafaudage même sur lequel la discipline est construite. Une compréhension profonde de ses fondements est la condition sine qua non pour passer de la simple programmation à la véritable ingénierie de systèmes complexes, fiables et intelligents.

