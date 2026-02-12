Le dernier volume explore les domaines de pointe qui redéfinissent les capacités des systèmes informatiques et leur interaction avec le monde réel. L\'**Intelligence Artificielle (IA) et l\'Apprentissage Automatique (ML)** sont traités en profondeur, depuis les méthodes de recherche classiques jusqu\'aux architectures d\'apprentissage profond (Deep Learning) et à l\'apprentissage par renforcement. Le Cursus examine ensuite des **Domaines d\'Application Avancés**, tels que le Traitement du Langage Naturel (TALN), la Vision par Ordinateur, l\'Infographie, la Robotique et l\'Interaction Homme-Machine (IHM). Enfin, le Cursus se conclut par une réflexion essentielle sur les **Aspects Sociétaux et les Horizons Futurs**. Reconnaissant que la technologie n\'est pas neutre, il aborde les questions d\'éthique professionnelle, de droit (protection de la vie privée), et les défis posés par les biais algorithmiques. Il ouvre également la voie aux prochaines révolutions, notamment l\'informatique quantique et le calcul haute performance.

#  Chapitre 41 : Fondements Intelligence Artificielle (IA)

Ce chapitre inaugural du volume consacré à l\'intelligence artificielle (IA) a pour vocation d\'établir les fondations conceptuelles, historiques et algorithmiques de la discipline. Nous débuterons par un survol de l\'histoire et des débats philosophiques qui ont façonné l\'IA, de sa naissance officielle à la conférence de Dartmouth jusqu\'aux questionnements contemporains sur la nature de la pensée et de la conscience. Nous introduirons ensuite le paradigme de l\'agent intelligent, un cadre formel unificateur qui nous permettra de structurer notre exploration du domaine. Le cœur de ce chapitre sera consacré à l\'un des piliers de l\'IA classique : la résolution de problèmes par la recherche. Nous aborderons cette thématique avec une rigueur algorithmique croissante, en commençant par les stratégies de recherche non informées, puis en introduisant la puissance des heuristiques dans les recherches informées comme l\'algorithme A\*. Nous explorerons ensuite des approches alternatives telles que la recherche locale et les algorithmes évolutionnaires. Enfin, nous étendrons notre analyse à des environnements plus complexes : les jeux à deux joueurs, qui nécessitent une recherche adversariale, et les problèmes de satisfaction de contraintes (CSP), qui représentent une classe de problèmes structurés omniprésents en ingénierie et en recherche opérationnelle. À travers ce parcours, l\'objectif est de doter le lecteur d\'une compréhension profonde des mécanismes fondamentaux qui permettent à un agent de raisonner, de planifier et d\'agir de manière intelligente dans un environnement formalisé.

## 41.1 Histoire, Philosophie et Agents Intelligents

Avant de plonger dans la technicité des algorithmes, il est impératif de comprendre le contexte dans lequel l\'intelligence artificielle a émergé. Cette discipline n\'est pas née *ex nihilo* ; elle est l\'aboutissement de siècles de questionnements philosophiques sur la nature de l\'esprit, combinés aux avancées fulgurantes de l\'informatique au milieu du XXe siècle. Cette section retrace cet héritage, de l\'événement fondateur de Dartmouth aux débats philosophiques qui continuent de définir les frontières du domaine, pour enfin introduire le concept d\'agent intelligent, qui servira de fil conducteur à notre étude de l\'IA.

### 41.1.1 L\'acte de naissance d\'une discipline : Le Dartmouth Summer Research Project on Artificial Intelligence

L\'histoire formelle de l\'intelligence artificielle en tant que champ de recherche distinct commence à l\'été 1956, sur le campus du Dartmouth College, dans le New Hampshire. Cependant, pour saisir la portée révolutionnaire de cet événement, il faut d\'abord appréhender le paysage intellectuel et technologique de l\'époque.

**Contexte pré-Dartmouth : des calculateurs aux machines pensantes**

Au début des années 1950, les ordinateurs, ou plutôt les « calculateurs » comme on les appelait alors, étaient perçus comme des machines prodigieuses, mais fondamentalement limitées à l\'exécution de tâches arithmétiques et logiques simples et répétitives. Leur puissance résidait dans leur vitesse d\'exécution, non dans une quelconque capacité d\'analyse ou d\'adaptation. L\'informatique traditionnelle se concentrait sur la résolution de problèmes pour lesquels des algorithmes connus et déterministes existaient déjà.

Néanmoins, l\'idée de machines capables de dépasser ce rôle de simple exécutant et de simuler des facultés cognitives humaines commençait à germer dans l\'esprit de pionniers issus de disciplines variées comme les mathématiques, les sciences cognitives et l\'électronique. La question n\'était plus seulement de savoir comment faire calculer une machine plus vite, mais de savoir si une machine pouvait raisonner, apprendre et trouver ses propres solutions, à l\'image d\'un cerveau humain.

**La proposition de 1955 et la conjecture fondatrice**

C\'est dans ce climat d\'effervescence intellectuelle que John McCarthy, un jeune mathématicien et chercheur en informatique, ressentit le besoin de formaliser et de fédérer ces recherches naissantes. Le 31 août 1955, il s\'associa à trois autres figures majeures de l\'époque --- Marvin Minsky de l\'Université Harvard, Nathaniel Rochester d\'IBM et le père de la théorie de l\'information, Claude Shannon des Bell Telephone Laboratories --- pour rédiger une proposition de financement à la Fondation Rockefeller. L\'objectif était d\'organiser un colloque d\'été de deux mois, l\'année suivante, dédié à un domaine qu\'ils baptisèrent, dans cette même proposition, «

*artificial intelligence* ».

Ce document historique n\'était pas un simple plan de projet technique ; il s\'agissait d\'une déclaration philosophique radicale. Il reposait sur une conjecture audacieuse qui constitue encore aujourd\'hui le postulat fondamental de l\'IA :

> « L\'étude doit procéder sur la base de la conjecture que chaque aspect de l\'apprentissage ou toute autre caractéristique de l\'intelligence peut en principe être décrit avec une telle précision qu\'une machine peut être fabriquée pour le simuler. » 

Cette affirmation représente une rupture philosophique majeure avec la vision dominante de l\'ordinateur. Elle postule que l\'intelligence, dans toutes ses manifestations --- apprentissage, raisonnement, créativité, langage --- n\'est pas une propriété métaphysique insaisissable, mais un processus de traitement de l\'information suffisamment complexe pour être formalisé et, par conséquent, calculable. C\'est cet acte de foi en la calculabilité de l\'intelligence qui a véritablement distingué l\'IA naissante de l\'informatique générale, en orientant le nouveau domaine vers l\'exploration des *inconnues* de la cognition, plutôt que vers la simple application d\'algorithmes *connus*.

**L\'événement de 1956 et son héritage**

Grâce au soutien de la fondation Rockefeller, le *Dartmouth Summer Research Project on Artificial Intelligence* eut bien lieu de juin à août 1956. L\'événement prit la forme d\'une session de remue-méninges prolongée, avec une participation fluctuante d\'une dizaine de scientifiques parmi les plus brillants de l\'époque. Seuls McCarthy, Minsky et Ray Solomonoff restèrent pour la durée complète de l\'atelier.

Contrairement à de nombreuses conférences scientifiques, l\'atelier de Dartmouth ne produisit pas de publication conjointe ou de résultat technique unifié. Son héritage fut bien plus profond et diffus. Premièrement, il officialisa la naissance d\'un nouveau champ de recherche et lui donna un nom. Deuxièmement, il initia des directions de recherche qui allaient devenir centrales, notamment les méthodes symboliques. Troisièmement, il fut le creuset où des concepts fondamentaux furent forgés ; c\'est par exemple au cours de cet été qu\'Arthur Samuel, un des participants, inventa le terme « *machine learning* » pour décrire son programme de jeu de dames capable d\'apprendre de ses erreurs.

L\'influence de Dartmouth se fit sentir au cours des deux décennies suivantes, non pas à travers un rapport de conférence, mais à travers les travaux individuels des participants, qui devinrent les pères fondateurs et les leaders des premiers grands laboratoires d\'IA. L\'atelier a marqué une bifurcation dans l\'histoire de l\'informatique, créant une discipline entièrement dédiée à la résolution de problèmes pour lesquels aucun algorithme satisfaisant n\'existait encore, avec l\'ambition ultime de comprendre et de répliquer l\'intelligence elle-même.

### 41.1.2 Les grandes questions philosophiques : La machine peut-elle penser?

La conjecture de Dartmouth, en affirmant que l\'intelligence est simulable, a immédiatement soulevé une question philosophique fondamentale et provocatrice : une machine peut-elle penser? Ce débat, loin d\'être résolu, a donné naissance à certaines des expériences de pensée les plus célèbres de l\'informatique et de la philosophie de l\'esprit.

**Le Test de Turing : une définition opérationnelle de l\'intelligence**

Conscient de l\'ambiguïté des termes « machine » et « penser », le mathématicien britannique Alan Turing, dès 1950, dans son article séminal *Computing Machinery and Intelligence*, proposa de remplacer cette question par une autre, plus pragmatique et mesurable. Pour ce faire, il imagina une expérience qu\'il nomma le « jeu de l\'imitation », aujourd\'hui universellement connue sous le nom de Test de Turing.

Le protocole original est d\'une élégante simplicité. Il met en scène trois participants : un évaluateur humain (C), qui est isolé, et deux interlocuteurs, un homme (A) et une femme (B). L\'évaluateur communique avec A et B uniquement par le biais d\'un terminal textuel et doit déterminer qui est l\'homme et qui est la femme. L\'homme (A) a pour instruction de tromper l\'évaluateur, tandis que la femme (B) doit l\'aider. Turing utilise ce premier jeu pour illustrer la difficulté d\'identifier une identité sur la seule base du langage.

Il propose ensuite de remplacer l\'un des interlocuteurs (par exemple, A) par une machine. La nouvelle question devient : « L\'évaluateur se trompera-t-il aussi souvent dans ce jeu que lorsque le jeu se déroule entre un homme et une femme? ». Dans sa version moderne et simplifiée, le test consiste pour un évaluateur humain à dialoguer à l\'aveugle avec un humain et une machine. Si, après une conversation d\'une durée déterminée, l\'évaluateur n\'est pas capable d\'identifier de manière fiable qui est la machine, alors on considère que la machine a « réussi » le test.

Turing lui-même avait prédit qu\'aux alentours de l\'an 2000, des machines dotées d\'environ 128 Mo de mémoire seraient capables de tromper 30 % des juges humains après cinq minutes de conversation. Il est crucial de noter que Turing ne prétendait pas qu\'une machine réussissant le test serait consciente ou posséderait une compréhension humaine. Le test est un critère pragmatique et

*comportemental* : il évalue la capacité d\'une machine à *simuler* une conversation humaine de manière indiscernable, et non sa capacité à *comprendre* réellement le sens de cette conversation. C\'est une évaluation de la performance extérieure, pas de la réalité intérieure.

**Le débat sur l\'IA Forte contre l\'IA Faible et l\'argument de la Chambre Chinoise**

Le Test de Turing, en se concentrant exclusivement sur le comportement observable, a laissé un vide philosophique béant concernant la nature de l\'état mental interne de la machine. C\'est précisément ce vide que le philosophe John Searle a cherché à combler en 1980 avec sa célèbre expérience de pensée de la « Chambre Chinoise », qui a popularisé la distinction cruciale entre IA faible et IA forte.

> **IA Faible (ou Étroite)** : Cette hypothèse postule que les machines peuvent être programmées pour *agir comme si* elles étaient intelligentes. Les systèmes d\'IA faible sont des outils puissants, spécialisés dans des tâches précises : jouer aux échecs, reconnaître la parole, conduire une voiture, ou même générer du texte de manière cohérente comme le font les grands modèles de langage (LLM) actuels. Ces systèmes simulent l\'intelligence, mais ne possèdent ni conscience, ni intentionnalité, ni compréhension sémantique. L\'IA faible est la seule forme d\'intelligence artificielle qui existe aujourd\'hui.
>
> **IA Forte (ou Générale, AGI)** : Cette hypothèse, beaucoup plus ambitieuse, affirme qu\'un ordinateur correctement programmé n\'est pas seulement une simulation d\'un esprit, mais est *littéralement* un esprit. Un tel système posséderait une conscience, une compréhension et une intelligence générale équivalentes à celles d\'un être humain, lui permettant d\'accomplir n\'importe quelle tâche intellectuelle. L\'IA forte reste, à ce jour, purement hypothétique.

Pour réfuter la possibilité même de l\'IA forte, Searle a conçu l\'argument de la Chambre Chinoise. Le scénario est le suivant :

> **La configuration :** Un homme qui ne comprend pas un seul mot de chinois est enfermé dans une pièce.
>
> **Les entrées :** Par une fente, on lui passe des feuilles de papier couvertes de symboles chinois, qui sont en réalité des questions.
>
> **Le processus :** L\'homme dispose d\'un manuel d\'instructions extrêmement détaillé, écrit dans sa langue maternelle (par exemple, l\'anglais), qui lui indique comment manipuler les symboles. Les règles sont purement formelles et syntaxiques, du type : « Si vous voyez cette séquence de symboles, écrivez en réponse cette autre séquence de symboles ».
>
> **Les sorties :** L\'homme suit les instructions, manipule les symboles et produit des réponses en chinois qu\'il passe à l\'extérieur par une autre fente.

Du point de vue d\'un observateur extérieur parlant chinois, la chambre répond aux questions de manière parfaitement intelligente et cohérente. La chambre, en tant que système, passe avec succès le Test de Turing en chinois. Pourtant, l\'homme à l\'intérieur n\'a aucune compréhension du chinois. Il ne fait que manipuler des symboles sans en connaître le sens (la sémantique). Pour lui, les symboles chinois pourraient être de simples dessins sans signification.

La conclusion de Searle est puissante : un programme informatique, aussi complexe soit-il, n\'est rien de plus que le manuel d\'instructions de la chambre chinoise. Il exécute des opérations formelles et syntaxiques sur des données. La syntaxe, soutient Searle, n\'est ni suffisante ni constitutive de la sémantique. Par conséquent, même un programme qui passerait le Test de Turing ne « comprendrait » rien, pas plus que l\'homme dans la chambre ne comprend le chinois. L\'IA forte est donc impossible par principe, car la computation est définie par la manipulation de symboles, et non par la compréhension de leur signification.

Loin d\'être invalidé par les progrès récents, l\'argument de Searle trouve une résonance particulière aujourd\'hui. Les grands modèles de langage comme GPT-4, qui excellent à des tests de type Turing , sont en fait la manifestation la plus parfaite de la Chambre Chinoise jamais réalisée. Ils fonctionnent en manipulant des motifs statistiques dans des quantités astronomiques de données textuelles pour produire des séquences de symboles syntaxiquement plausibles. Leur succès ne démontre pas l\'émergence de la conscience, mais illustre plutôt la puissance d\'une manipulation syntaxique à grande échelle, exactement le scénario que Searle décrivait il y a plus de quarante ans. Le succès des LLM au Test de Turing ne réfute pas la Chambre Chinoise ; il la construit.

### 41.1.3 Le paradigme de l\'agent intelligent : un cadre unificateur pour l\'IA

Face à la diversité des problèmes abordés en IA --- de la reconnaissance d\'images à la planification logistique, en passant par le jeu d\'échecs --- les chercheurs ont eu besoin d\'un cadre conceptuel unificateur. Ce cadre est celui de l\'**agent intelligent**. L\'idée est de considérer l\'IA non pas comme la construction d\'un \"cerveau\" désincarné, mais comme l\'étude et la conception d\'agents, c\'est-à-dire d\'entités qui agissent dans un environnement.

**Définition formelle et rationalité**

Un **agent** est défini comme toute entité capable de percevoir son environnement par le biais de **capteurs** (*sensors*) et d\'agir sur cet environnement par le biais d\'**effecteurs** (*actuators*).

> Un agent humain a pour capteurs ses yeux, ses oreilles, etc., et pour effecteurs ses mains, ses jambes, sa bouche.
>
> Un agent robotique a pour capteurs des caméras, des sonars, et pour effecteurs des moteurs, des pinces.
>
> Un agent logiciel (comme un robot d\'indexation web) a pour capteurs les paquets réseau et le contenu des fichiers, et pour effecteurs l\'envoi de paquets et l\'écriture de fichiers.

Le comportement d\'un agent est décrit par sa **fonction d\'agent**, qui met en correspondance n\'importe quelle séquence de perceptions passées avec une action. L\'objectif de l\'IA est de concevoir des **agents rationnels**. Un agent rationnel est celui qui, pour chaque séquence de perceptions possible, sélectionne une action qui est censée maximiser sa **mesure de performance**, compte tenu des informations fournies par la séquence de perceptions et de toutes les connaissances que l\'agent a intégrées. La rationalité dépend donc de quatre éléments : la mesure de performance qui définit le succès, les connaissances préalables de l\'agent sur l\'environnement, la séquence de perceptions de l\'agent jusqu\'à présent, et les actions que l\'agent peut effectuer.

Pour spécifier formellement la tâche d\'un agent, on utilise le cadre **PEAS** (Performance, Environment, Actuators, Sensors). Par exemple, pour un taxi autonome :

> **Performance:** Sécurité, rapidité, confort du passager, respect du code de la route, maximisation des profits.
>
> **Environnement:** Routes, autres véhicules, piétons, panneaux de signalisation, météo.
>
> **Actuateurs:** Volant, accélérateur, frein, clignotants, klaxon, affichage pour le passager.
>
> **Capteurs:** Caméras, GPS, sonar, lidar, accéléromètre, odomètre, capteurs moteur.

**Architectures d\'agents : une hiérarchie de complexité**

La manière dont la fonction d\'agent est implémentée définit son architecture. Russell et Norvig proposent une classification des agents en une hiérarchie de complexité croissante, qui fournit une feuille de route pour les grands thèmes de l\'IA.

> **Agent réactif simple (Simple reflex agent) :** C\'est l\'architecture la plus simple. L\'agent sélectionne ses actions uniquement sur la base de la perception *actuelle*, en ignorant l\'historique des perceptions. Il fonctionne grâce à un ensemble de règles de type **condition-action** (« si telle condition est perçue, alors effectuer telle action »). Par exemple, pour un véhicule autonome, une règle pourrait être « si le véhicule de devant freine, alors freiner ». Ces agents sont très rapides mais ne peuvent fonctionner que dans des environnements entièrement observables, où la perception actuelle suffit pour prendre la bonne décision.
>
> **Agent à base de modèle (Model-based reflex agent) :** Pour gérer des environnements partiellement observables, l\'agent doit maintenir un **état interne** qui représente sa croyance sur l\'état actuel du monde. Cet état est mis à jour en utilisant deux types de connaissances : un **modèle de transition** (comment le monde évolue indépendamment de l\'agent) et un **modèle des capteurs** (comment les actions de l\'agent affectent le monde). Avoir un modèle du monde permet à l\'agent de raisonner sur les aspects non perçus de l\'environnement. Cette nécessité de représenter et de raisonner sur l\'état du monde mène directement aux domaines de la représentation des connaissances et de l\'inférence logique.
>
> **Agent à base de but (Goal-based agent) :** Connaître l\'état du monde n\'est pas toujours suffisant pour décider quoi faire. L\'agent a besoin d\'informations sur ses **buts**, c\'est-à-dire des descriptions de situations désirables. En combinant ses buts avec son modèle du monde, l\'agent peut choisir des actions qui le mèneront à ces buts. La prise de décision devient alors un processus de **recherche** ou de **planification** : l\'agent explore les conséquences de séquences d\'actions pour trouver celle qui atteint le but. Cette architecture est plus flexible que l\'architecture réactive, car les buts peuvent être modifiés facilement. C\'est précisément cette architecture qui motive l\'étude de la résolution de problèmes par la recherche, qui constitue le reste de ce chapitre.
>
> **Agent à base d\'utilité (Utility-based agent) :** Les buts seuls ne permettent pas toujours de distinguer les solutions. Un état but peut être atteint plus rapidement, plus sûrement ou à moindre coût qu\'un autre. Une **fonction d\'utilité** associe un nombre réel à chaque état, représentant un degré de satisfaction ou de \"bonheur\". Un agent à base d\'utilité choisit l\'action qui mène à l\'**utilité attendue** la plus élevée. L\'utilité permet de gérer des buts multiples et contradictoires (par exemple, rapidité contre sécurité) et de prendre des décisions rationnelles en situation d\'incertitude, lorsque les résultats des actions ne sont pas déterministes. Cette architecture est une généralisation de l\'agent à base de but et ouvre la voie à l\'étude de la théorie de la décision, de la théorie des probabilités et de l\'apprentissage par renforcement.

Cette hiérarchie des architectures d\'agents n\'est donc pas une simple taxonomie. Elle constitue une feuille de route conceptuelle pour l\'ensemble du domaine de l\'IA. Chaque niveau de complexité introduit un nouveau type de problème computationnel que les différentes branches de l\'IA s\'efforcent de résoudre. En commençant par l\'agent à base de but, nous allons maintenant nous attaquer au premier de ces grands problèmes : comment un agent peut-il trouver une séquence d\'actions pour atteindre un objectif?

## 41.2 Résolution de Problèmes par la Recherche

Le concept de résolution de problèmes par la recherche est au cœur de l\'intelligence artificielle classique. Il fournit un cadre formel et puissant pour les agents à base de but, leur permettant de trouver des solutions à une vaste gamme de problèmes, de la planification d\'itinéraires à la résolution de casse-têtes logiques. L\'idée centrale est de formuler un problème comme une recherche dans un espace d\'états, où la solution est un chemin menant d\'un état initial à un état but. Cette section est consacrée à une exploration approfondie de ce paradigme, en commençant par la définition rigoureuse d\'un problème de recherche, puis en examinant systématiquement les différentes stratégies algorithmiques pour l\'explorer.

### 41.2.1 Formalisme des problèmes de recherche

Avant de pouvoir résoudre un problème, un agent doit le formuler de manière précise. Un problème de recherche peut être défini formellement par les six composantes suivantes  :

> **L\'espace d\'états (S) :** C\'est l\'ensemble de toutes les configurations possibles que l\'environnement peut occuper. Chaque état est une représentation complète de la situation à un instant donné. Par exemple, dans un problème de navigation routière, un état pourrait être défini par la ville où se trouve l\'agent. Dans le jeu du taquin, un état est une configuration spécifique des tuiles sur le plateau. L\'espace d\'états peut être fini ou infini.
>
> **L\'état initial (s0​) :** C\'est l\'état dans lequel l\'agent commence sa recherche. Il est un élément de l\'espace d\'états S.
>
> **Les actions (ou opérateurs) :** Il s\'agit d\'une description des actions possibles pour l\'agent. On définit souvent une fonction ACTIONS(s) qui retourne l\'ensemble des actions applicables dans un état s∈S. Par exemple, depuis une ville donnée, les actions possibles sont les routes menant aux villes voisines.
>
> **La fonction de transition (ou modèle de transition) :** Elle décrit le résultat de l\'exécution d\'une action. Elle est généralement formalisée par une fonction RESULTAT(s,a) qui retourne l\'état s′ atteint après avoir exécuté l\'action a dans l\'état s. L\'ensemble des états, l\'état initial, les actions et la fonction de transition définissent implicitement le **graphe de l\'espace d\'états**.
>
> **Le test de but :** C\'est une fonction qui détermine si un état donné est un état but. Il peut s\'agir d\'un test d\'égalité avec un état but explicite (par exemple, « être à Bucarest ») ou d\'une propriété abstraite (par exemple, « être en situation d\'échec et mat »). L\'ensemble des états buts est noté F⊆S.
>
> **Le coût du chemin :** Une fonction qui assigne un coût numérique à un chemin. Un chemin est une séquence d\'états connectés par une séquence d\'actions. Le coût d\'un chemin est souvent défini comme la somme des coûts de chaque action le long du chemin. Le coût d\'une action a pour passer de l\'état s à l\'état s′ est noté c(s,a,s′).

Une **solution** à un problème de recherche est un chemin de l\'état initial à un état but. Une **solution optimale** est une solution qui a le coût de chemin le plus bas parmi toutes les solutions possibles.

Le processus de recherche consiste à explorer le graphe de l\'espace d\'états pour trouver un tel chemin. Cette exploration peut être visualisée comme la construction progressive d\'un **arbre de recherche**. La racine de cet arbre est l\'état initial. Les nœuds de l\'arbre correspondent à des états de l\'espace d\'états, et les branches correspondent aux actions. L\'expansion d\'un nœud dans l\'arbre de recherche consiste à appliquer la fonction de transition pour générer tous ses successeurs. Les algorithmes de recherche diffèrent par la manière dont ils choisissent le prochain nœud à explorer.

### 41.2.2 Stratégies de recherche non informée (aveugle)

Les stratégies de recherche non informées, également appelées recherches aveugles, sont des algorithmes qui explorent l\'espace d\'états de manière systématique sans disposer d\'informations supplémentaires sur la localisation du but. L\'ordre d\'expansion des nœuds est uniquement déterminé par leur position dans l\'arbre de recherche. Nous allons étudier les deux stratégies les plus fondamentales : la recherche en largeur d\'abord et la recherche en profondeur d\'abord.

Pour analyser et comparer les algorithmes de recherche, nous utilisons quatre critères principaux  :

> **Complétude :** L\'algorithme garantit-il de trouver une solution si elle existe?
>
> **Optimalité :** L\'algorithme garantit-il de trouver la solution optimale (celle avec le coût le plus bas)?
>
> **Complexité temporelle :** Combien de temps faut-il pour trouver une solution? Généralement mesurée par le nombre de nœuds générés.
>
> **Complexité spatiale :** Quelle quantité de mémoire est nécessaire? Généralement mesurée par le nombre maximal de nœuds stockés en mémoire.

Dans notre analyse, nous utiliserons les notations suivantes :

> b : le **facteur de branchement**, c\'est-à-dire le nombre maximal de successeurs d\'un nœud.
>
> d : la **profondeur** de la solution la moins profonde.
>
> m : la **profondeur maximale** de l\'espace d\'états (peut être infinie).

#### Recherche en largeur d\'abord (Breadth-First Search - BFS)

**Principe**

La recherche en largeur d\'abord (BFS) explore l\'arbre de recherche niveau par niveau. Elle commence par l\'état initial (niveau 0), puis explore tous ses successeurs (niveau 1), puis les successeurs de ces derniers (niveau 2), et ainsi de suite. Pour ce faire, l\'algorithme maintient une structure de données appelée la

**frontière** (ou *open list*), qui contient les nœuds qui ont été générés mais pas encore explorés. Pour BFS, cette frontière est implémentée comme une file de type **premier entré, premier sorti (FIFO)**. Le nœud le moins profond de la frontière est toujours le prochain à être exploré.

**Pseudo-code**

L\'algorithme BFS utilise également un ensemble de nœuds **explorés** (ou *closed list*) pour éviter de traiter plusieurs fois le même état, ce qui est crucial dans les graphes contenant des cycles.

fonction RECHERCHE-EN-LARGEUR(problème) retourne une solution ou un échec\
nœud ← NŒUD(ÉTAT=problème.ÉTAT-INITIAL, CHEMIN-COÛT=0)\
si problème.TEST-BUT(nœud.ÉTAT) alors retourner SOLUTION(nœud)\
\
frontière ← une file FIFO avec nœud comme seul élément\
explorés ← un ensemble vide\
\
boucle infinie :\
si FRONTIÈRE-EST-VIDE?(frontière) alors retourner échec\
\
nœud ← POP(frontière) // Retire le premier élément de la file\
ajouter nœud.ÉTAT à explorés\
\
pour chaque action dans problème.ACTIONS(nœud.ÉTAT) :\
enfant ← NŒUD-ENFANT(problème, nœud, action)\
\
si enfant.ÉTAT n\'est pas dans explorés et n\'est pas dans frontière :\
si problème.TEST-BUT(enfant.ÉTAT) alors retourner SOLUTION(enfant)\
ajouter enfant à la fin de la frontière

**Analyse des propriétés**

> **Complétude :** La recherche en largeur d\'abord est complète. Si une solution existe, BFS la trouvera. En effet, comme l\'algorithme explore niveau par niveau, il finira par atteindre la profondeur d de la solution la moins profonde, à condition que le facteur de branchement b soit fini.
>
> **Optimalité :** BFS est optimale si le coût de toutes les actions est identique (par exemple, coût unitaire). Dans ce cas, la première solution trouvée sera nécessairement celle à la profondeur la plus faible, qui est donc la solution optimale en termes de nombre d\'actions. Si les coûts des actions varient, ce n\'est plus garanti.
>
> **Complexité temporelle :** Dans le pire des cas, BFS doit explorer tous les nœuds jusqu\'à la profondeur d. Le nombre de nœuds est 1+b+b2+\...+bd. La complexité temporelle est donc de l\'ordre de O(bd). C\'est une croissance exponentielle qui rend l\'algorithme impraticable pour des problèmes de grande taille.
>
> **Complexité spatiale :** Le principal problème de BFS est sa consommation de mémoire. La frontière doit stocker tous les nœuds d\'un niveau avant de passer au suivant. Dans le pire des cas, la file contiendra tous les nœuds au niveau d, soit bd nœuds. La complexité spatiale est donc également de O(bd). La mémoire est souvent une contrainte plus limitante que le temps pour BFS.

#### Recherche en profondeur d\'abord (Depth-First Search - DFS)

**Principe**

La recherche en profondeur d\'abord (DFS) explore l\'arbre de recherche en suivant une branche aussi profondément que possible. Lorsqu\'elle atteint un nœud sans successeur ou une profondeur limite, elle revient en arrière (*backtracking*) pour explorer la branche suivante non visitée. Pour implémenter cette stratégie, la frontière est gérée comme une pile de type

**dernier entré, premier sorti (LIFO)**. Le nœud le plus profond de la frontière est toujours le prochain à être exploré. L\'implémentation est souvent plus simple en utilisant la récursivité, où la pile du système gère implicitement la frontière.

**Pseudo-code (version récursive)**

fonction RECHERCHE-EN-PROFONDEUR-RÉCURSIVE(nœud, problème, explorés) retourne une solution ou un échec\
si problème.TEST-BUT(nœud.ÉTAT) alors retourner SOLUTION(nœud)\
\
ajouter nœud.ÉTAT à explorés\
\
pour chaque action dans problème.ACTIONS(nœud.ÉTAT) :\
enfant ← NŒUD-ENFANT(problème, nœud, action)\
\
si enfant.ÉTAT n\'est pas dans explorés :\
résultat ← RECHERCHE-EN-PROFONDEUR-RÉCURSIVE(enfant, problème, explorés)\
si résultat n\'est pas un échec alors retourner résultat\
\
retourner échec

**Analyse des propriétés**

> **Complétude :** La recherche en profondeur d\'abord n\'est pas complète en général. Si l\'arbre de recherche contient des branches de profondeur infinie (ce qui peut arriver même dans des espaces d\'états finis s\'il y a des cycles et qu\'on ne gère pas les états visités), DFS peut s\'y perdre et ne jamais trouver de solution, même si elle existe sur une autre branche. L\'algorithme est complet uniquement pour les espaces d\'états finis et sans cycles (ou si l\'on mémorise tous les états visités).
>
> **Optimalité :** DFS n\'est pas optimale. Elle retourne la première solution qu\'elle trouve, qui peut se trouver très profondément dans l\'arbre et être beaucoup plus coûteuse qu\'une autre solution située sur une branche explorée plus tard.
>
> **Complexité temporelle :** Dans le pire des cas, DFS peut explorer l\'intégralité de l\'arbre de recherche jusqu\'à sa profondeur maximale m. La complexité temporelle est donc de O(bm). Si\
> m est beaucoup plus grand que d, DFS peut être beaucoup plus lente que BFS.
>
> **Complexité spatiale :** C\'est le principal avantage de DFS. L\'algorithme n\'a besoin de stocker en mémoire que le chemin actuel depuis la racine jusqu\'au nœud courant, ainsi que les frères non explorés des nœuds de ce chemin. La taille de la frontière est donc de l\'ordre de b×m. La complexité spatiale est de O(bm), ce qui est linéaire en la profondeur maximale et bien meilleur que la complexité exponentielle de BFS.

#### Le compromis fondamental de la recherche non informée

La comparaison des propriétés de BFS et DFS met en lumière un compromis fondamental et inévitable dans le domaine de la recherche non informée : celui entre la **qualité de la solution et la consommation de mémoire**.

> BFS garantit de trouver la solution la moins profonde (et donc optimale pour des coûts unitaires), mais son besoin en mémoire, qui croît exponentiellement avec la profondeur, le rend inutilisable pour la plupart des problèmes non triviaux.
>
> DFS, à l\'inverse, possède une empreinte mémoire remarquablement faible, linéaire en la profondeur, ce qui lui permet d\'aborder des problèmes beaucoup plus vastes. Cependant, ce gain en mémoire se fait au prix du sacrifice de la complétude (dans les graphes infinis ou avec cycles) et de l\'optimalité.

Ce dilemme --- vouloir la bonne réponse mais risquer de manquer de mémoire (BFS), ou vouloir une réponse qui tient en mémoire mais qui pourrait être mauvaise ou jamais trouvée (DFS) --- n\'est pas un simple détail d\'implémentation. C\'est un défi conceptuel central qui motive directement le développement de tous les algorithmes de recherche plus sophistiqués. Des algorithmes comme la *recherche en profondeur itérative* (qui exécute des DFS successifs avec une profondeur limite croissante) tentent de combiner l\'efficacité spatiale de DFS avec la complétude et l\'optimalité de BFS. Plus fondamentalement, ce compromis justifie la nécessité de s\'éloigner des stratégies \"aveugles\" pour se tourner vers des stratégies \"informées\", capables de guider la recherche plus intelligemment afin de réduire la taille de l\'espace à explorer et de rendre les complexités temporelle et spatiale gérables.

### 41.2.3 Stratégies de recherche informée (heuristique)

Les stratégies de recherche non informées sont souvent trop inefficaces car elles explorent l\'espace d\'états sans tenir compte de la direction du but. L\'idée de la recherche informée, ou recherche heuristique, est d\'utiliser une connaissance spécifique au problème pour guider la recherche vers les régions les plus prometteuses de l\'espace d\'états. Cette connaissance est encapsulée dans une **fonction heuristique**.

Une fonction heuristique, notée h(n), est une fonction qui estime le coût du chemin le moins cher depuis l\'état du nœud n jusqu\'à un état but. L\'heuristique est une \"estimation éclairée\" ; elle n\'est pas nécessairement exacte, mais elle doit être rapide à calculer. Par exemple, pour un problème de navigation entre deux villes, une bonne heuristique est la distance à vol d\'oiseau (distance euclidienne) entre la ville actuelle et la ville de destination.

#### Heuristiques admissibles et cohérentes

La qualité d\'une heuristique est cruciale. Deux propriétés sont particulièrement importantes pour garantir l\'optimalité de certains algorithmes de recherche.

> **Admissibilité :** Une fonction heuristique h est dite **admissible** si, pour chaque nœud n, elle ne surestime jamais le coût réel pour atteindre le but. Formellement, h(n)≤h∗(n), où h∗(n) est le coût réel du chemin optimal de n à un état but. Une heuristique admissible est une heuristique \"optimiste\". La distance à vol d\'oiseau est admissible car le chemin le plus court entre deux points est la ligne droite.
>
> Cohérence (ou Monotonicité) : Une heuristique h est dite cohérente (ou monotone) si, pour chaque nœud n et chaque successeur n′ de n généré par une action a de coût c(n,a,n′), le coût estimé depuis n n\'est pas supérieur au coût de l\'action pour aller de n à n′ plus le coût estimé depuis n′. Formellement, l\'inégalité du triangle doit être respectée :\
> \
> h(n)≤c(n,a,n′)+h(n′)\
> \
> Une conséquence de la cohérence est que les valeurs de f(n) (que nous définirons ci-dessous) le long de n\'importe quel chemin sont non décroissantes. Il est possible de prouver que toute heuristique cohérente est également admissible.43

#### L\'algorithme A\*

L\'algorithme A\* (prononcé \"A étoile\") est l\'algorithme de recherche informée le plus connu. Il combine les avantages de la recherche à coût uniforme (une variante de BFS qui explore en priorité les chemins de plus faible coût) et de la recherche gloutonne (qui explore en priorité les nœuds semblant les plus proches du but). A\* évalue les nœuds de la frontière en combinant ces deux approches.

**Principe**

A\* sélectionne le nœud à explorer en se basant sur la minimisation d\'une fonction d\'évaluation f(n) pour chaque nœud n  :

f(n)=g(n)+h(n)

où :

> g(n) est le coût du chemin depuis l\'état initial jusqu\'au nœud n. C\'est le coût réel du chemin parcouru jusqu\'à présent.
>
> h(n) est la valeur de la fonction heuristique, qui estime le coût du chemin le moins cher de n au but.

Ainsi, f(n) représente une estimation du coût total du chemin le moins cher passant par le nœud n. A\* est un algorithme de recherche *best-first*, car il explore toujours le nœud qui semble être sur le chemin le plus prometteur, c\'est-à-dire celui avec la plus faible valeur de f.

**Pseudo-code**

Pour implémenter cette stratégie, A\* maintient la frontière comme une **file de priorité**, ordonnée par les valeurs de f(n).

fonction RECHERCHE-A-ETOILE(problème) retourne une solution ou un échec\
nœud ← NŒUD(ÉTAT=problème.ÉTAT-INITIAL, CHEMIN-COÛT=0)\
frontière ← une file de priorité ordonnée par CHEMIN-COÛT + h(n), avec nœud comme seul élément\
explorés ← un ensemble vide\
\
boucle infinie :\
si FRONTIÈRE-EST-VIDE?(frontière) alors retourner échec\
\
nœud ← POP(frontière) // Retire le nœud avec le plus petit f(n)\
\
si problème.TEST-BUT(nœud.ÉTAT) alors retourner SOLUTION(nœud)\
\
ajouter nœud.ÉTAT à explorés\
\
pour chaque action dans problème.ACTIONS(nœud.ÉTAT) :\
enfant ← NŒUD-ENFANT(problème, nœud, action)\
\
si enfant.ÉTAT n\'est pas dans explorés et n\'est pas dans frontière :\
ajouter enfant à la frontière\
sinon si enfant.ÉTAT est dans frontière avec un CHEMIN-COÛT plus élevé :\
remplacer ce nœud de la frontière par enfant

**Analyse des propriétés et preuve d\'optimalité**

> **Complétude :** A\* est complet dans les mêmes conditions que la recherche à coût uniforme : tant que le facteur de branchement est fini et que les coûts des actions sont supérieurs à une constante positive, A\* trouvera une solution si elle existe.
>
> **Optimalité :** C\'est la propriété la plus importante de A\*. *A est optimal si l\'heuristique h(n) est admissible*\* (et pour les graphes, si h(n) est cohérente, bien que l\'admissibilité suffise si on prend quelques précautions). Cela signifie que le premier chemin vers un but trouvé par A\* est garanti d\'être un chemin optimal.

*Preuve formelle de l\'optimalité de A avec une heuristique admissible*\*

La preuve de cette propriété fondamentale se fait par contradiction.

> **Hypothèse :** Supposons que A\* ne soit pas optimal. Cela signifie qu\'il termine sa recherche en retournant un chemin vers un état but sous-optimal G2​, alors qu\'il existe un chemin vers un état but optimal G1​. Notons C∗ le coût du chemin optimal (vers G1​) et C2​ le coût du chemin sous-optimal trouvé (vers G2​). Par hypothèse, nous avons C2​\>C∗.
>
> **État de la frontière :** Puisque C2​\>C∗, et que A\* a exploré les chemins par ordre croissant de f(n), il doit exister au moins un nœud n sur le chemin optimal vers G1​ qui n\'a pas encore été exploré au moment où G2​ est sélectionné dans la frontière pour être \"expandu\".
>
> Condition de sélection : A\* a choisi d\'explorer G2​ plutôt que n. Cela signifie que la valeur f de G2​ était inférieure ou égale à la valeur f de n :\
> \
> f(G2​)≤f(n)
>
> Analyse de f(G2​) : Pour un nœud but, l\'heuristique est nulle par définition (h(G2​)=0). Par conséquent, sa valeur f est égale à son coût de chemin g :\
> \
> f(G2​)=g(G2​)+h(G2​)=g(G2​)=C2​
>
> **Analyse de f(n) :** Pour le nœud n qui se trouve sur le chemin optimal vers G1​, sa valeur f est f(n)=g(n)+h(n).

Le coût g(n) est le coût du chemin de l\'état initial à n. Puisque n est sur le chemin optimal, ce coût est optimal.

L\'heuristique h(n) est admissible, ce qui signifie qu\'elle est inférieure ou égale au coût réel optimal pour aller de n à G1​, noté h∗(n): h(n)≤h∗(n).

La somme du coût optimal pour atteindre n et du coût optimal pour aller de n à G1​ est, par définition, le coût optimal total C∗. Donc, g(n)+h∗(n)=C∗.

En combinant ces éléments, nous obtenons :\
\
f(n)=g(n)+h(n)≤g(n)+h∗(n)=C∗

> La contradiction : En rassemblant les inégalités des étapes 3, 4 et 5, nous avons :\
> \
> C2​=f(G2​)≤f(n)≤C∗\
> \
> Cela implique que C2​≤C∗. Or, notre hypothèse de départ était que C2​\>C∗. Nous avons atteint une contradiction.
>
> **Conclusion :** L\'hypothèse initiale est donc fausse. A\* ne peut pas retourner un chemin sous-optimal si son heuristique est admissible. L\'algorithme est donc optimal.
>
> **Complexité temporelle et spatiale :** La complexité de A\* dépend fortement de la qualité de l\'heuristique. Dans le pire des cas (avec une heuristique très mauvaise, par exemple h(n)=0), A\* se comporte comme la recherche à coût uniforme et sa complexité reste exponentielle. Cependant, une bonne heuristique, qui est proche du coût réel sans jamais le surestimer, peut réduire l\'espace de recherche de manière drastique, ramenant la complexité à un niveau polynomial dans de nombreux cas pratiques. La complexité spatiale reste le principal défaut de A\*, car il doit stocker tous les nœuds générés dans la frontière et l\'ensemble des explorés.

### 41.2.4 Stratégies de recherche locale et optimisation

Pour une large classe de problèmes, notamment les problèmes d\'optimisation, le chemin vers la solution n\'a aucune importance ; seul l\'état final compte. Pour ces problèmes, les algorithmes de recherche systématique qui stockent des chemins en mémoire sont souvent inefficaces. Les algorithmes de **recherche locale** offrent une alternative. Ils opèrent sur un état complet unique (la solution courante) et tentent de l\'améliorer de manière itérative en effectuant des modifications locales. Leur principal avantage est une consommation de mémoire très faible, souvent constante (O(1)), car ils n\'ont pas besoin de maintenir un arbre de recherche. Cependant, ils ne sont généralement ni complets ni optimaux.

#### Recuit Simulé (Simulated Annealing)

Le recuit simulé est une métaheuristique de recherche locale inspirée d\'un processus physique en métallurgie. Le recuit est une technique où un métal est chauffé à haute température puis refroidi très lentement. Ce processus permet aux atomes de s\'organiser dans une configuration d\'énergie minimale, formant une structure cristalline stable et solide.

**Principe et analogie**

L\'algorithme de recuit simulé transpose cette idée au monde de l\'optimisation.

> L\'**état** du système correspond à une solution candidate au problème.
>
> L\'**énergie** de l\'état correspond à la valeur de la fonction de coût (ou objectif) que l\'on cherche à minimiser.
>
> La **température** (T) est un paramètre de contrôle de l\'algorithme.

L\'algorithme commence avec une solution aléatoire et une température T élevée. À chaque itération, il génère une solution voisine en appliquant une petite modification à la solution actuelle.

> Si la nouvelle solution est meilleure (coût plus faible), elle est toujours acceptée.
>
> Si la nouvelle solution est moins bonne (coût plus élevé), elle peut quand même être acceptée. C\'est la caractéristique clé du recuit simulé qui lui permet d\'échapper aux optima locaux.

La probabilité d\'accepter un \"mauvais\" mouvement est donnée par le critère de Metropolis :

P(accepter)=e−TΔE​

où ΔE est l\'augmentation du coût (Enouveau​−Eactuel​) et T est la température actuelle.51

> Lorsque T est élevée, la probabilité d\'accepter un mauvais mouvement est grande, ce qui permet à l\'algorithme d\'explorer largement l\'espace des solutions (phase d\'exploration).
>
> À mesure que T diminue, la probabilité d\'accepter des mouvements qui dégradent la solution diminue. L\'algorithme devient plus \"sélectif\" et se concentre sur l\'amélioration de la solution actuelle (phase d\'exploitation).

**Schéma de refroidissement et pseudo-code**

La manière dont la température T diminue au fil du temps est appelée le **schéma de refroidissement**. Un schéma courant est la décroissance géométrique : Tk+1​=αTk​, où α est un facteur proche de 1 (par exemple, 0.99).

fonction RECUIT-SIMULÉ(problème, schéma_refroidissement) retourne une solution\
courant ← NŒUD(ÉTAT=problème.ÉTAT-INITIAL)\
pour t de 1 à ∞ :\
T ← schéma_refroidissement(t)\
si T = 0 alors retourner courant.ÉTAT\
\
prochain ← un successeur choisi aléatoirement de courant\
ΔE ← VALEUR(prochain.ÉTAT) - VALEUR(courant.ÉTAT)\
\
si ΔE \< 0 : // Pour la minimisation, une valeur plus faible est meilleure\
courant ← prochain\
sinon :\
courant ← prochain avec une probabilité e\^(-ΔE / T)

Le recuit simulé est un algorithme puissant qui, avec un schéma de refroidissement suffisamment lent, converge en probabilité vers l\'optimum global. En pratique, on utilise des schémas plus rapides qui trouvent de très bonnes solutions, bien que non garanties d\'être optimales.

#### Algorithmes Génétiques (Genetic Algorithms)

Les algorithmes génétiques (AG) sont une autre classe de métaheuristiques inspirées, cette fois, de la théorie de l\'évolution de Darwin. Au lieu de travailler sur une seule solution, un AG maintient une **population** de solutions candidates qui évoluent sur plusieurs **générations**.

**Principe et représentation**

Chaque solution candidate est représentée par un **chromosome**, qui est typiquement une chaîne de bits, de nombres ou d\'autres symboles. La qualité de chaque chromosome est évaluée par une

**fonction d\'adaptation** (*fitness function*), qui joue le rôle de l\'environnement : les individus les mieux adaptés ont plus de chances de survivre et de se reproduire.

L\'algorithme procède par itérations, appelées générations. À chaque génération, une nouvelle population est créée en appliquant des opérateurs génétiques inspirés de la biologie.

**Opérateurs génétiques fondamentaux**

> **Sélection :** Cette étape consiste à choisir les individus de la population actuelle qui serviront de parents pour la prochaine génération. La sélection est stochastique, mais biaisée en faveur des individus ayant une meilleure fitness. Une méthode classique est la **sélection par roulette** (*roulette-wheel selection*), où chaque individu se voit attribuer une part d\'une \"roulette\" proportionnelle à sa fitness. Un tirage sur cette roulette sélectionne un parent.
>
> **Croisement (Crossover) :** Cet opérateur imite la reproduction sexuée. Deux parents sélectionnés sont combinés pour créer un ou deux nouveaux individus (les enfants). L\'idée est que les enfants hériteront des bonnes caractéristiques de leurs deux parents. Dans le **croisement à un point**, un point de coupure est choisi au hasard sur les chromosomes des parents. Les segments après ce point sont échangés pour former deux nouveaux chromosomes.
>
> **Mutation :** C\'est une modification aléatoire et ponctuelle d\'un chromosome. Par exemple, dans un codage binaire, un bit peut être inversé (0 devient 1 ou vice-versa). La mutation se produit avec une très faible probabilité. Son rôle est crucial : elle introduit de la diversité génétique dans la population, empêchant l\'algorithme de converger prématurément vers un optimum local et permettant l\'exploration de nouvelles régions de l\'espace de recherche.

**Pseudo-code**

fonction ALGORITHME-GÉNÉTIQUE(population, fonction_fitness) retourne un individu\
répéter :\
nouvelle_population ← ensemble vide\
pour i de 1 à TAILLE(population) :\
parent1 ← SÉLECTION-ALÉATOIRE(population, fonction_fitness)\
parent2 ← SÉLECTION-ALÉATOIRE(population, fonction_fitness)\
enfant ← CROISEMENT(parent1, parent2)\
si (petite probabilité) alors enfant ← MUTATION(enfant)\
ajouter enfant à nouvelle_population\
population ← nouvelle_population\
jusqu\'à ce qu\'un critère d\'arrêt soit satisfait (ex: nombre de générations, convergence)\
\
retourner le meilleur individu de la population

Les algorithmes génétiques sont particulièrement efficaces pour les problèmes d\'optimisation complexes et de grande dimension où l\'espace de recherche est vaste et mal compris.

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------ ------------ -------------------------- ---------------------
  Algorithme                                                                                                                                                                                                                                                                                                                                      Complétude   Optimalité   Complexité Temporelle      Complexité Spatiale

  **Recherche en largeur (BFS)**                                                                                                                                                                                                                                                                                                                  Oui¹         Oui²         O(bd)                      O(bd)

  **Recherche en profondeur (DFS)**                                                                                                                                                                                                                                                                                                               Non³         Non          O(bm)                      O(bm)

  **Recherche à coût uniforme (UCS)**                                                                                                                                                                                                                                                                                                             Oui¹         Oui          O(b1+⌊C∗/ϵ⌋)               O(b1+⌊C∗/ϵ⌋)

  **A\***                                                                                                                                                                                                                                                                                                                                         Oui¹         Oui⁴         Dépend de l\'heuristique   O(bd)

  *Tableau 41.1 : Comparaison des propriétés des principaux algorithmes de recherche systématique. Les complexités sont exprimées en fonction du facteur de branchement b, de la profondeur de la solution optimale d, de la profondeur maximale de l\'arbre m, du coût de la solution optimale \$C\^*\$, et du coût minimal d\'une action ϵ.\*                                                        

  ¹ Si le facteur de branchement b est fini.                                                                                                                                                                                                                                                                                                                                                           

  ² Si tous les coûts d\'action sont identiques.                                                                                                                                                                                                                                                                                                                                                       

  ³ Complète dans les espaces d\'états finis si la détection de cycles est implémentée.                                                                                                                                                                                                                                                                                                                

  ⁴ Si l\'heuristique est admissible (ou cohérente pour les graphes).                                                                                                                                                                                                                                                                                                                                  
  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------ ------------ -------------------------- ---------------------

## 41.3 Recherche Adversariale et Théorie des Jeux

Jusqu\'à présent, nous avons considéré des problèmes où l\'agent est le seul acteur dans un environnement qui peut être passif ou stochastique. Cependant, de nombreux scénarios intéressants, comme les jeux de société (échecs, dames, Go) ou les négociations économiques, impliquent plusieurs agents dont les buts sont en conflit. Ces environnements sont qualifiés d\'**adversariaux**. Dans de tels contextes, l\'agent doit planifier ses actions en anticipant les réponses d\'un ou plusieurs adversaires qui, eux aussi, agissent de manière rationnelle pour atteindre leurs propres objectifs. Cette section introduit les fondements de la recherche adversariale pour les jeux à deux joueurs, à information parfaite et à somme nulle.

### 41.3.1 Le principe Minimax pour les jeux à deux joueurs à somme nulle

La formalisation la plus simple d\'un jeu adversarial est celle d\'un jeu à deux joueurs, que nous appellerons **MAX** et **MIN**. MAX cherche à maximiser son score, tandis que MIN cherche à le minimiser. Il s\'agit d\'un **jeu à somme nulle**, ce qui signifie que le gain d\'un joueur est exactement la perte de l\'autre. Les échecs, les dames ou le morpion sont des exemples de tels jeux.

Comme pour la recherche classique, nous pouvons modéliser le jeu par un **arbre de jeu**  :

> Les **nœuds** représentent les états du jeu (par exemple, la configuration de l\'échiquier).
>
> Les **arêtes** représentent les coups possibles.
>
> La **racine** est l\'état initial du jeu.
>
> Les **nœuds terminaux** (feuilles) sont les états où la partie est terminée (victoire, défaite ou nul).

Pour déterminer le meilleur coup à jouer, MAX a besoin d\'une stratégie qui tienne compte des réponses optimales de MIN. C\'est le rôle de l\'**algorithme Minimax**.

**Algorithme Minimax**

L\'algorithme Minimax calcule la valeur optimale d\'un état (nœud) en supposant que les deux joueurs jouent de manière optimale. Pour ce faire, il effectue une recherche en profondeur sur l\'arbre de jeu.

> **Génération de l\'arbre :** L\'algorithme génère l\'arbre de jeu jusqu\'à une certaine profondeur de coupe (car l\'arbre complet est souvent trop grand).
>
> **Fonction d\'évaluation :** Une fonction d\'évaluation heuristique est appliquée aux nœuds feuilles de l\'arbre tronqué. Cette fonction estime la désirabilité de la position pour le joueur MAX. Une valeur positive élevée indique une position favorable à MAX, tandis qu\'une valeur négative élevée indique une position favorable à MIN.
>
> **Propagation des valeurs :** Les valeurs des feuilles sont propagées vers la racine en suivant une règle simple :

À un niveau où c\'est à **MAX** de jouer (un nœud MAX), la valeur du nœud est le **maximum** des valeurs de ses enfants.

À un niveau où c\'est à **MIN** de jouer (un nœud MIN), la valeur du nœud est le **minimum** des valeurs de ses enfants.

> **Décision :** À la racine de l\'arbre, MAX choisit le coup qui mène au nœud successeur ayant la valeur maximale.

La valeur Minimax d\'un nœud est donc la valeur de la position si les deux joueurs continuent à jouer de manière optimale à partir de ce point.

### 41.3.2 Optimisation par élagage Alpha-Bêta

L\'algorithme Minimax est correct, mais il doit explorer l\'intégralité de l\'arbre de jeu jusqu\'à la profondeur de coupe, ce qui est coûteux. L\'**élagage Alpha-Bêta** est une optimisation spectaculaire qui permet d\'obtenir exactement le même résultat que Minimax, mais en explorant une fraction potentiellement beaucoup plus petite de l\'arbre. L\'idée est d\'arrêter l\'évaluation d\'une branche dès que l\'on a la certitude qu\'elle ne pourra pas influencer la décision finale à la racine.

**Mécanisme**

L\'algorithme maintient deux valeurs tout au long de sa descente dans l\'arbre :

> **Alpha (α) :** La meilleure valeur (la plus élevée) trouvée jusqu\'à présent pour **MAX** sur le chemin de la racine au nœud courant. C\'est la valeur minimale que MAX est assuré d\'obtenir. Initialement, α=−∞.
>
> **Bêta (β) :** La meilleure valeur (la plus basse) trouvée jusqu\'à présent pour **MIN** sur le chemin de la racine au nœud courant. C\'est la valeur maximale que MIN est assuré de concéder. Initialement, β=+∞.

La recherche se poursuit tant que α\<β. L\'élagage se produit lorsque cette condition n\'est plus respectée.

> **Coupure Bêta (au niveau d\'un nœud MIN) :** Supposons que nous soyons en train d\'évaluer les enfants d\'un nœud MIN. Si la valeur d\'un de ses enfants est v, la valeur du nœud MIN sera au plus v. Si cette valeur v est inférieure ou égale à α (la meilleure option déjà garantie pour MAX à un niveau supérieur), alors MAX ne choisira jamais cette branche. MIN essaiera d\'obtenir v (ou moins), mais MAX a déjà une alternative qui lui garantit au moins α. Il est donc inutile d\'explorer les autres enfants de ce nœud MIN. On peut \"couper\" la recherche. La condition de coupure est v≤α.
>
> **Coupure Alpha (au niveau d\'un nœud MAX) :** Symétriquement, si nous évaluons les enfants d\'un nœud MAX et que nous trouvons une valeur v supérieure ou égale à β (la meilleure option déjà garantie pour MIN), MIN ne laissera jamais le jeu atteindre cette branche. MAX chercherait à obtenir v (ou plus), mais MIN a déjà une alternative qui lui garantit de ne pas concéder plus que β. Il est donc inutile d\'explorer les autres enfants de ce nœud MAX. La condition de coupure est v≥β.

**Exemple pas-à-pas**

Considérons l\'arbre de jeu suivant, où les valeurs aux feuilles sont les scores du point de vue de MAX.

> La recherche commence à la racine (nœud A, un nœud MAX) avec (α=−∞,β=+∞).
>
> On explore le premier enfant, B (MIN). La recherche récursive est appelée pour B avec (α=−∞,β=+∞).
>
> On explore le premier enfant de B, D (MAX). Appel pour D avec (α=−∞,β=+∞).
>
> On explore les enfants de D. Le premier, H, a la valeur 3. La valeur de D est maintenant max(−∞,3)=3. α pour D devient 3. Le second, I, a la valeur 5. La valeur de D est max(3,5)=5. α pour D devient 5.
>
> D a été entièrement exploré, il retourne la valeur 5.
>
> De retour en B (MIN), on a traité le premier enfant (D). La valeur de B est maintenant min(+∞,5)=5. β pour B devient 5.
>
> On explore le second enfant de B, E (MAX). Appel pour E avec (α=−∞,β=5). Notez que la valeur α est locale, mais β a été propagée.
>
> On explore le premier enfant de E, J, qui a la valeur 6. La valeur de E devient max(−∞,6)=6.
>
> **Coupure!** La valeur courante de E (6) est supérieure ou égale à la valeur β (5) passée en paramètre. 6≥5. Cela signifie que MIN (en B) ne choisira jamais la branche E, car il a déjà une option (D) qui lui garantit un score de 5. Quoi que MAX puisse trouver d\'autre sous E (par exemple, un score de 9 en K), cela n\'a pas d\'importance. La branche K est élaguée. E retourne 6.
>
> De retour en B, sa valeur est min(5,6)=5. B a été entièrement exploré et retourne 5.
>
> De retour à la racine A (MAX), la valeur de A est maintenant max(−∞,5)=5. α pour A devient 5.
>
> On explore le second enfant de A, C (MIN). Appel pour C avec (α=5,β=+∞).\
> \... et ainsi de suite.

L\'efficacité de l\'élagage alpha-bêta n\'est pas constante ; elle est extraordinairement dépendante de l\'ordre dans lequel les coups sont explorés. Si, par un heureux hasard ou une bonne heuristique, l\'algorithme explore toujours le meilleur coup en premier pour chaque nœud, alors l\'élagage est maximal. Dans ce cas idéal, la complexité temporelle passe de O(bd) à environ O(bd/2). Cela signifie que, pour le même temps de calcul, on peut explorer deux fois plus profondément l\'arbre de jeu, un gain exponentiel. À l\'inverse, si les pires coups sont explorés en premier, aucune coupure ne se produit, et l\'algorithme se dégrade pour retrouver la performance de Minimax. Cette sensibilité à l\'ordre des coups explique pourquoi les moteurs de jeu réels investissent des efforts considérables dans des heuristiques d\'ordonnancement des coups (telles que la *killer heuristic* ou l\'utilisation de tables de transposition) pour présenter les coups les plus prometteurs en premier à l\'algorithme alpha-bêta, transformant ainsi une simple optimisation en un outil pratique et puissant pour la recherche profonde dans les arbres de jeu.

### 41.3.3 Au-delà de Minimax : Introduction à la Recherche Arborescente Monte-Carlo (MCTS)

Malgré l\'optimisation apportée par l\'élagage alpha-bêta, cette approche reste limitée aux jeux ayant un facteur de branchement modéré. Pour des jeux comme le Go, où le nombre de coups possibles à chaque tour peut dépasser 200, la construction d\'un arbre de recherche, même tronqué, est calculatoirement impossible. Pour de tels problèmes, une approche radicalement différente a été développée : la Recherche Arborescente Monte-Carlo (MCTS).

**Principe de MCTS**

Au lieu d\'explorer l\'arbre de jeu de manière exhaustive jusqu\'à une certaine profondeur, MCTS estime la valeur de chaque coup possible en effectuant un grand nombre de simulations de parties aléatoires, appelées *playouts* ou *rollouts*. L\'algorithme construit progressivement un arbre de recherche asymétrique, en se concentrant sur les régions les plus prometteuses de l\'espace de jeu.

**Les quatre étapes de MCTS**

Chaque itération de l\'algorithme MCTS se compose de quatre étapes  :

> **Sélection :** En partant de la racine (l\'état actuel du jeu), l\'algorithme descend dans l\'arbre déjà construit. À chaque niveau, il choisit un nœud enfant en utilisant une politique de sélection qui doit équilibrer l\'**exploitation** (choisir le coup qui a le meilleur taux de victoire jusqu\'à présent) et l\'**exploration** (essayer des coups moins explorés qui pourraient se révéler meilleurs). La formule la plus courante pour cet arbitrage est UCT (*Upper Confidence bounds applied to Trees*).
>
> **Expansion :** La phase de sélection se poursuit jusqu\'à ce qu\'un nœud soit atteint qui n\'a pas encore été entièrement exploré (c\'est-à-dire qu\'il a des coups possibles qui n\'ont pas encore été ajoutés à l\'arbre). L\'algorithme choisit alors l\'un de ces coups et crée un nouveau nœud enfant dans l\'arbre.
>
> **Simulation :** À partir de ce nouveau nœud, une partie complète est simulée jusqu\'à son terme. Pour que cette phase soit rapide, les coups sont généralement choisis en utilisant une politique très simple, souvent des coups aléatoires uniformes.
>
> **Rétropropagation (Backpropagation) :** Le résultat de la simulation (victoire ou défaite) est utilisé pour mettre à jour les statistiques de tous les nœuds sur le chemin parcouru depuis le nouveau nœud jusqu\'à la racine. Chaque nœud sur ce chemin voit son compteur de visites incrémenté, ainsi que son compteur de victoires si la simulation a abouti à une victoire.

Après avoir exécuté des milliers, voire des millions, de ces itérations, l\'algorithme dispose de statistiques robustes sur les coups possibles depuis l\'état initial. Le coup finalement joué est celui qui correspond au nœud enfant de la racine le plus visité ou celui ayant le meilleur taux de victoire.

MCTS a été la technologie clé derrière les succès spectaculaires des programmes de jeu de Go, notamment AlphaGo, qui a combiné MCTS avec des réseaux de neurones profonds pour guider les phases de sélection et d\'évaluation, atteignant un niveau de jeu surhumain.

## 41.4 Problèmes de Satisfaction de Contraintes (CSP)

De nombreux problèmes en intelligence artificielle et en ingénierie ne consistent pas à trouver un chemin, mais à trouver un état qui respecte un ensemble de conditions ou de contraintes. Ces problèmes forment une classe spéciale de problèmes de recherche appelés **Problèmes de Satisfaction de Contraintes (CSP)**. Le formalisme des CSP permet de représenter ces problèmes de manière standardisée, ce qui ouvre la voie à des algorithmes de résolution généraux et efficaces.

### 41.4.1 Formalisation des CSP

Un problème de satisfaction de contraintes est défini formellement par un triplet (X,D,C)  :

> **Variables (X) :** Un ensemble fini de variables, X={X1​,X2​,\...,Xn​}.
>
> **Domaines (D) :** Un ensemble de domaines, D={D1​,D2​,\...,Dn​}, où chaque domaine Di​ est l\'ensemble fini des valeurs possibles pour la variable Xi​.
>
> **Contraintes (C) :** Un ensemble fini de contraintes, C={C1​,C2​,\...,Cm​}. Chaque contrainte Cj​ est définie sur un sous-ensemble de variables (son *scope*) et spécifie les combinaisons de valeurs autorisées pour ces variables.

Une **assignation** est une attribution de valeur à une ou plusieurs variables. Une assignation est **consistante** (ou légale) si elle ne viole aucune contrainte. Une assignation est **complète** si toutes les variables ont reçu une valeur. Une **solution** à un CSP est une assignation qui est à la fois complète et consistante.

**Exemples classiques de CSP :**

> **Coloration de carte :** Les variables sont les régions, les domaines sont les couleurs disponibles, et les contraintes stipulent que deux régions adjacentes ne peuvent pas avoir la même couleur.
>
> **Problème des N-Reines :** Les variables sont les colonnes de l\'échiquier (de 1 à N), les domaines sont les lignes (de 1 à N), et les contraintes interdisent que deux reines soient sur la même ligne ou la même diagonale.
>
> **Sudoku :** Les variables sont les 81 cases de la grille, les domaines sont les chiffres de 1 à 9, et les contraintes sont que les chiffres doivent être uniques dans chaque ligne, chaque colonne et chaque bloc de 3x3.
>
> **Ordonnancement :** Les variables peuvent être des tâches, les domaines des plages horaires, et les contraintes peuvent imposer des précédences ou des limitations de ressources.

### 41.4.2 Algorithme de base : Recherche par retour sur trace (Backtracking)

La méthode la plus fondamentale pour résoudre les CSP est la **recherche par retour sur trace** (*backtracking*). Il s\'agit d\'une forme de recherche en profondeur (DFS) qui construit une solution de manière incrémentale, en assignant une valeur à une variable à la fois.

**Principe**

L\'algorithme parcourt les variables une par une. Pour chaque variable, il essaie d\'assigner une valeur de son domaine. Après chaque assignation, il vérifie si l\'assignation partielle est consistante avec toutes les contraintes impliquant les variables déjà assignées.

> Si l\'assignation est consistante, il passe à la variable suivante.
>
> Si l\'assignation viole une contrainte, ou si aucune valeur ne peut être trouvée pour la variable courante, l\'algorithme **revient en arrière** (*backtracks*) : il annule l\'assignation de la variable précédente et essaie la valeur suivante pour celle-ci.

Ce processus se poursuit jusqu\'à ce qu\'une assignation complète et consistante soit trouvée, ou jusqu\'à ce que toutes les possibilités aient été explorées, prouvant qu\'aucune solution n\'existe.

**Pseudo-code**

L\'algorithme est naturellement implémenté de manière récursive.

fonction RECHERCHE-BACKTRACKING(assignation, csp) retourne une solution ou un échec\
si assignation est complète alors retourner assignation\
\
var ← SÉLECTIONNER-VARIABLE-NON-ASSIGNÉE(csp)\
\
pour chaque valeur dans ORDONNER-VALEURS-DOMAINE(var, assignation, csp) :\
si valeur est consistante avec assignation selon les contraintes de csp :\
ajouter {var = valeur} à assignation\
résultat ← RECHERCHE-BACKTRACKING(assignation, csp)\
si résultat n\'est pas un échec alors retourner résultat\
retirer {var = valeur} de assignation // Backtrack\
\
retourner échec

### 41.4.3 Amélioration de l\'efficacité : Heuristiques et Inférence

Le backtracking naïf peut être très inefficace. Il souffre d\'un phénomène appelé *thrashing*, où il explore de manière répétée des branches de l\'arbre de recherche qui échouent pour la même raison. L\'efficacité de la résolution de CSP repose sur des techniques qui permettent d\'élaguer l\'arbre de recherche plus intelligemment, en anticipant les échecs. Ces techniques se répartissent en deux catégories : les heuristiques pour guider la recherche et l\'inférence pour propager les contraintes.

#### Heuristiques d\'ordonnancement

L\'ordre dans lequel les variables sont choisies et les valeurs sont testées a un impact considérable sur la taille de l\'arbre de recherche exploré.

> **Minimum Remaining Values (MRV) :** Cette heuristique, également appelée \"variable la plus contrainte\" ou \"fail-first\", consiste à choisir la prochaine variable à assigner comme étant celle qui a le plus petit nombre de valeurs légales restantes dans son domaine. L\'intuition est que si une variable est difficile à satisfaire, il vaut mieux le savoir le plus tôt possible pour couper la branche de recherche rapidement en cas d\'échec.
>
> **Degree Heuristic :** En cas d\'égalité avec l\'heuristique MRV, la *degree heuristic* peut être utilisée pour départager. Elle consiste à choisir la variable qui est impliquée dans le plus grand nombre de contraintes avec d\'autres variables non encore assignées. Cela permet de réduire le facteur de branchement pour les choix futurs.
>
> **Least Constraining Value (LCV) :** Une fois qu\'une variable a été sélectionnée, cette heuristique suggère d\'essayer les valeurs de son domaine dans un ordre qui laisse le plus de flexibilité possible pour les variables voisines. On choisit la valeur qui élimine le moins de choix pour les variables non assignées connectées par des contraintes. Cela augmente les chances de trouver une solution sans avoir à revenir en arrière.

#### Inférence par propagation de contraintes

L\'inférence, ou propagation de contraintes, consiste à utiliser les contraintes pour déduire des restrictions sur les domaines des variables non encore assignées.

> **Vérification anticipée (Forward Checking) :** C\'est une forme simple d\'inférence. Chaque fois qu\'une valeur est assignée à une variable X, l\'algorithme examine toutes les variables non assignées Y qui sont connectées à X par une contrainte. Pour chacune de ces variables Y, il supprime de son domaine DY​ toutes les valeurs qui sont inconsistantes avec la valeur choisie pour X. Si le domaine d\'une variable Y devient vide, l\'algorithme sait immédiatement que l\'assignation actuelle de X mène à un échec et peut donc revenir en arrière sans explorer plus loin.
>
> **Consistance d\'arc et l\'algorithme AC-3 :** La vérification anticipée ne détecte pas toutes les inconsistances. Une forme d\'inférence plus puissante est la **consistance d\'arc**. Un arc (Xi​,Xj​) dans le graphe de contraintes est dit consistant si, pour chaque valeur x dans le domaine de Xi​, il existe au moins une valeur y dans le domaine de Xj​ telle que l\'assignation (Xi​=x,Xj​=y) est autorisée par la contrainte.\
> L\'**algorithme AC-3** est la méthode la plus courante pour appliquer la consistance d\'arc à un CSP. Il fonctionne comme suit :

Initialiser une file avec tous les arcs du graphe de contraintes.

Tant que la file n\'est pas vide, retirer un arc (Xi​,Xj​).

Pour chaque valeur x dans le domaine de Xi​, vérifier s\'il existe une valeur compatible y dans le domaine de Xj​.

Si aucune valeur compatible n\'est trouvée pour x, supprimer x du domaine de Xi​.

Si le domaine de Xi​ a été modifié, ajouter à la file tous les arcs (Xk​,Xi​) où Xk​ est un voisin de Xi​.

L\'algorithme se termine lorsque la file est vide. Si, à un moment donné, un domaine devient vide, cela signifie que le CSP n\'a pas de solution.

La véritable puissance des solveurs de CSP modernes ne réside ni dans la recherche seule, ni dans l\'inférence seule, mais dans leur **interaction synergique**. L\'approche la plus efficace consiste à **entrelacer** la recherche et l\'inférence. L\'algorithme de backtracking, guidé par des heuristiques comme MRV, fait un choix d\'assignation. Immédiatement après, un algorithme d\'inférence (comme la vérification anticipée ou même AC-3) propage les conséquences de ce choix, en élaguant les domaines des futures variables. Le problème, ainsi simplifié, est ensuite passé à l\'appel récursif suivant de la recherche. Cela crée une boucle de rétroaction puissante : la recherche fait une hypothèse, l\'inférence élague l\'espace des possibilités en fonction de cette hypothèse, ce qui conduit à un espace de recherche plus petit et plus simple pour l\'hypothèse suivante. Cette synergie, bien plus efficace que l\'une ou l\'autre technique appliquée isolément, est la pierre angulaire de la résolution de contraintes moderne.

### Conclusion du Chapitre

Ce chapitre a jeté les bases de l\'intelligence artificielle en tant que discipline scientifique. Partant de ses origines historiques à Dartmouth et des débats philosophiques fondateurs sur la nature de la pensée, nous avons établi le paradigme de l\'agent intelligent comme un cadre conceptuel robuste. C\'est à travers la lentille de l\'agent à base de but que nous avons entrepris une exploration rigoureuse et systématique de la résolution de problèmes par la recherche.

Nous avons vu que la formalisation d\'un problème en termes d\'espace d\'états, d\'actions et de buts permet d\'appliquer une panoplie d\'algorithmes de recherche. Les stratégies non informées comme BFS et DFS illustrent un compromis fondamental entre optimalité et efficacité des ressources, un dilemme qui motive la quête de méthodes plus intelligentes. L\'introduction des fonctions heuristiques avec l\'algorithme A\* a démontré comment une connaissance, même approximative, du problème peut guider la recherche de manière spectaculaire, avec la garantie d\'optimalité sous la condition d\'admissibilité.

Nous avons ensuite élargi notre perspective au-delà des problèmes de recherche de chemin classiques. Les techniques de recherche locale, telles que le recuit simulé et les algorithmes génétiques, ont offert une approche efficace pour les problèmes d\'optimisation où seule la qualité de la solution finale importe. La recherche adversariale, avec les algorithmes Minimax et l\'élagage Alpha-Bêta, a fourni les outils pour raisonner stratégiquement dans des environnements compétitifs. Enfin, les problèmes de satisfaction de contraintes ont présenté un formalisme structuré pour une vaste classe de problèmes d\'assignation, où la synergie entre la recherche par retour sur trace, les heuristiques intelligentes et l\'inférence par propagation de contraintes se révèle être la clé de l\'efficacité.

Les concepts et algorithmes présentés dans ce chapitre --- de la formalisation d\'un problème à l\'analyse des propriétés des algorithmes de recherche --- constituent le socle de l\'IA classique. Ils sont non seulement des outils puissants en eux-mêmes, mais aussi les fondations sur lesquelles reposent des domaines plus avancés de l\'IA, tels que la planification automatisée, l\'apprentissage par renforcement et la représentation des connaissances, qui seront explorés dans les chapitres suivants.

# Chapitre 42 : Connaissance et Raisonnement

## Introduction

Au cœur de l\'intelligence artificielle (IA) se trouvent deux questions fondamentales et indissociables : comment un agent intelligent peut-il se forger une représentation interne du monde qui l\'entoure, et comment peut-il exploiter cette représentation pour raisonner, prendre des décisions et agir de manière cohérente et efficace? Ce chapitre, intitulé « Connaissance et Raisonnement », se consacre à l\'exploration des formalismes et des algorithmes qui constituent la réponse de l\'informatique à ces questions. Nous y aborderons la dualité essentielle entre la *représentation*, qui est l\'acte de modéliser le monde dans un langage compréhensible par la machine, et le *raisonnement*, qui est le processus computationnel permettant de manipuler ce modèle pour en extraire de nouvelles informations, prédire des conséquences ou élaborer des stratégies.

Le parcours que nous proposons au lecteur est structuré autour de trois grands paradigmes qui ont façonné le domaine. Nous débuterons notre exploration dans le monde de la certitude, avec le **raisonnement symbolique**. Cette approche, historiquement fondatrice de l\'IA, postule que la connaissance peut être capturée de manière précise et non ambiguë à l\'aide des langages de la logique formelle. Nous examinerons comment la logique propositionnelle et, plus puissamment, la logique du premier ordre, permettent de décrire des faits, des objets et des relations, et comment des algorithmes d\'inférence, tels que le chaînage avant et le chaînage arrière, agissent comme des moteurs de déduction pour prouver de nouvelles vérités à partir d\'une base de connaissances. Nous étendrons cette vision à l\'échelle du Web avec l\'étude des ontologies et du Web Sémantique, qui visent à structurer la connaissance de manière partagée et interopérable.

Toutefois, le monde réel est rarement certain. L\'information est souvent incomplète, bruitée ou intrinsèquement stochastique. La seconde partie de ce chapitre effectuera donc une transition cruciale vers le **raisonnement probabiliste**, un cadre mathématique rigoureux pour représenter et gérer l\'incertitude. En partant des fondements de la théorie des probabilités et du théorème de Bayes, nous montrerons comment il est possible de mettre à jour nos croyances à la lumière de nouvelles évidences. Nous nous attarderons ensuite sur deux des modèles graphiques probabilistes les plus influents : les réseaux bayésiens, qui offrent une représentation compacte et intuitive des dépendances entre variables, et les modèles de Markov cachés, qui sont spécialisés dans le raisonnement sur des données séquentielles et temporelles. Pour chacun de ces modèles, nous détaillerons les algorithmes d\'inférence fondamentaux qui permettent de répondre à des questions complexes malgré l\'incertitude inhérente.

Enfin, une fois qu\'un agent est capable de raisonner sur l\'état du monde, qu\'il soit certain ou non, la question ultime demeure : que doit-il faire? La troisième et dernière section de ce chapitre introduira la **planification automatisée**, le domaine de l\'IA qui connecte le raisonnement à l\'action délibérée. Nous définirons formellement un problème de planification et présenterons PDDL, le langage standard pour décrire des mondes, des actions et des objectifs. Nous explorerons ensuite différentes stratégies algorithmiques, de la recherche dans l\'espace des états à des approches plus flexibles comme la planification par ordre partiel, qui permettent à un agent de synthétiser une séquence d\'actions --- un plan --- pour atteindre un but désiré.

Ce chapitre guidera ainsi le lecteur depuis les fondements d\'un monde logique et déterministe jusqu\'aux complexités de l\'incertitude et de l\'action, offrant une vue d\'ensemble des outils théoriques et algorithmiques qui permettent aux systèmes complexes de connaître et de raisonner.

## 42.1 Représentation des Connaissances : L\'Approche Symbolique

L\'un des piliers de l\'intelligence artificielle est la capacité d\'un système à posséder une connaissance du monde et à l\'utiliser pour raisonner. L\'approche symbolique, ou logique, postule que cette connaissance peut être représentée par des symboles et que le raisonnement peut être modélisé comme une manipulation formelle de ces symboles, suivant des règles strictes. Cette section établit les fondements de cette approche, en partant des langages logiques les plus élémentaires pour aboutir aux formalismes structurés et à grande échelle qui animent la vision du Web Sémantique. Nous y découvrirons comment l\'IA a emprunté et adapté les outils de la logique formelle pour construire des agents capables de déductions rigoureuses dans des mondes bien définis.

### 42.1.1 Les Fondements Logiques : De la Proposition au Prédicat

Au cœur de l\'approche symbolique se trouve la logique mathématique, qui fournit un cadre non ambigu pour représenter des énoncés sur le monde et pour définir la notion de raisonnement valide. Nous commençons par le formalisme le plus simple, la logique propositionnelle, avant de passer à la logique du premier ordre, beaucoup plus expressive, qui constitue la base de nombreux systèmes d\'IA.

#### La Logique Propositionnelle : Un Premier Formalisme

La logique propositionnelle, également connue sous le nom de calcul propositionnel, est le langage formel le plus simple pour représenter la connaissance. Elle est de nature déclarative, ce qui signifie qu\'elle sépare clairement la connaissance elle-même des mécanismes d\'inférence qui l\'exploitent. Son principe de base est de considérer le monde comme un ensemble de faits, ou propositions, qui sont soit vrais, soit faux, sans aucune nuance.

**Syntaxe**

La syntaxe de la logique propositionnelle définit les règles pour construire des phrases légales dans le langage. Le vocabulaire de base est constitué de deux types d\'éléments  :

> **Les symboles de proposition (ou variables propositionnelles) :** Ce sont des symboles atomiques, généralement représentés par des lettres majuscules comme P, Q, R, qui représentent des faits élémentaires sur le monde. Par exemple, P pourrait signifier « Il pleut » et Q pourrait signifier « Le sol est mouillé ».
>
> **Les connecteurs logiques :** Ces opérateurs permettent de construire des propositions complexes à partir de propositions plus simples. Les cinq connecteurs standards sont :

La négation (¬) : « non »

La conjonction (∧) : « et »

La disjonction (∨) : « ou »

L\'implication (→) : « si\... alors\... »

La biconditionnelle (↔) : « si et seulement si »

À partir de ce vocabulaire, on définit récursivement l\'ensemble des **formules bien formées (fbf)**. Une fbf est soit un symbole de proposition atomique, soit une combinaison de fbf à l\'aide des connecteurs logiques, comme ¬P, (P∧Q), ou (P→Q). Les parenthèses sont utilisées pour lever toute ambiguïté sur la portée des connecteurs.

**Sémantique**

La sémantique définit la signification des phrases, c\'est-à-dire comment leur attribuer une valeur de vérité (vrai ou faux). En logique propositionnelle, la sémantique est définie par les tables de vérité, qui spécifient la valeur de vérité d\'une formule complexe en fonction des valeurs de vérité de ses composantes. Par exemple, la formule P∧Q est vraie si et seulement si P et Q sont toutes les deux vraies.

Cette approche sémantique nous permet de définir plusieurs concepts cruciaux :

> Un **modèle** est une assignation de valeurs de vérité à tous les symboles de proposition.
>
> Une formule est **satisfaisable** s\'il existe au moins un modèle qui la rend vraie.
>
> Une formule est **valide** (ou une **tautologie**) si elle est vraie dans tous les modèles possibles.
>
> Une formule α est une **conséquence logique** d\'une base de connaissances BC (un ensemble de formules), noté BC⊨α, si et seulement si tout modèle qui rend BC vraie rend également α vraie. C\'est la définition formelle de la déduction.

**Limites**

Malgré son élégance et sa simplicité, la logique propositionnelle a un pouvoir expressif très limité. Son ontologie fondamentale est celle de faits atomiques. Elle ne peut pas parler d\'objets individuels, de leurs propriétés, ou des relations qui les lient. Par exemple, pour exprimer la règle « Les puits entraînent une brise dans les cases adjacentes » dans le monde du Wumpus, il faudrait créer une proposition distincte pour chaque case du jeu, comme

Puits_1,1 \$\\rightarrow\$ Brise_1,2, Puits_1,1 \$\\rightarrow\$ Brise_2,1, etc. Il est impossible de formuler une règle générale qui s\'applique à *toutes* les cases. Cette incapacité à généraliser et à quantifier sur des objets est sa principale faiblesse et motive le passage à un langage plus riche.

#### La Logique du Premier Ordre (LPO) : Un Monde d\'Objets et de Relations

La logique du premier ordre (LPO), ou calcul des prédicats, surmonte les limitations de la logique propositionnelle en enrichissant son ontologie. Alors que la logique propositionnelle ne voit que des faits, la LPO modélise un monde peuplé d\'**objets**, de **relations** entre ces objets et de **fonctions** qui mappent des objets à d\'autres objets.

**Syntaxe**

La syntaxe de la LPO étend celle de la logique propositionnelle avec de nouveaux éléments fondamentaux  :

> **Constantes :** Des symboles qui représentent des objets spécifiques (ex: Jean, Table1).
>
> **Variables :** Des symboles qui peuvent se référer à n\'importe quel objet (ex: x, y).
>
> **Prédicats :** Des symboles qui représentent des relations entre des objets. Un prédicat a une arité qui indique le nombre d\'objets qu\'il met en relation (ex: Frere(Jean, Richard), EstSur(Livre, Table1)). Un prédicat d\'arité 1 représente une propriété (ex: Rouge(Pomme)).
>
> **Fonctions :** Des symboles qui représentent une relation fonctionnelle, c\'est-à-dire qui associent un unique objet de sortie à un tuple d\'objets d\'entrée (ex: PereDe(Jean)).
>
> **Quantificateurs :**

Le **quantificateur universel** (∀) : « pour tout ». Permet d\'exprimer des propriétés sur tous les objets d\'un domaine.

Le **quantificateur existentiel** (∃) : « il existe ». Permet d\'affirmer l\'existence d\'au moins un objet ayant une certaine propriété.

Un **terme** est une expression qui se réfère à un objet. Il peut s\'agir d\'une constante, d\'une variable ou d\'une fonction appliquée à des termes. Une **formule atomique** est un prédicat appliqué à des termes. Les formules complexes sont construites à partir de formules atomiques à l\'aide des connecteurs logiques et des quantificateurs. Par exemple, la phrase « Tout humain est mortel » peut être représentée par la formule close (sans variable libre) : ∀x(Humain(x)→Mortel(x)).

**Sémantique**

La sémantique de la LPO est plus complexe que celle de la logique propositionnelle. Une **interprétation** (ou **modèle**) d\'une formule de la LPO est définie par  :

> Un **domaine** non vide d\'objets, D.
>
> Une fonction qui associe chaque symbole de constante à un objet de D.
>
> Une fonction qui associe chaque symbole de prédicat à une relation sur D.
>
> Une fonction qui associe chaque symbole de fonction à une fonction sur D.

Une formule est satisfaite dans un modèle pour une assignation de variables donnée si la relation qu\'elle exprime est vraie dans ce modèle. Par exemple, la formule ∃xFrere(x,Richard) est vraie dans un modèle si l\'objet désigné par Richard est dans la relation Frere avec au moins un autre objet du domaine.

**Expressivité**

Le pouvoir d\'expression de la LPO est considérablement plus grand que celui de la logique propositionnelle. Elle permet de représenter de manière compacte et naturelle des connaissances générales sur le monde, ce qui est essentiel pour de nombreuses applications d\'IA, notamment les systèmes experts dits \"d\'ordre 1\". La capacité à quantifier sur des variables est au cœur de cette expressivité accrue.

Cependant, cette richesse a un coût computationnel. Alors que le problème de la satisfiabilité en logique propositionnelle est décidable (bien que NP-complet), le problème de la validité en logique du premier ordre est seulement **semi-décidable**. Le théorème de complétude de Gödel nous assure que si une formule est une conséquence logique d\'une théorie, alors il existe une preuve formelle de cette formule. En revanche, le théorème d\'indécidabilité de Church-Turing montre qu\'il n\'existe pas d\'algorithme général qui puisse déterminer en un temps fini si une formule quelconque de la LPO n\'est *pas* une conséquence logique. Ce compromis fondamental entre expressivité et complexité computationnelle est un thème central en IA. Il explique pourquoi, en pratique, de nombreux systèmes utilisent des sous-ensembles décidables de la LPO, comme nous le verrons dans la section sur les ontologies.

Le tableau suivant synthétise les différences fondamentales entre ces deux formalismes logiques.

**Tableau 42.1 : Comparaison des Logiques Propositionnelle et du Premier Ordre**

  ------------------------------- ------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------
  Caractéristique                 Logique Propositionnelle                                            Logique du Premier Ordre (LPO)

  **Unité sémantique de base**    Fait (proposition atomique)                                         Objets, Relations (prédicats), Fonctions

  **Ontologie du monde**          Le monde est un ensemble de faits qui sont vrais ou faux.           Le monde est un ensemble d\'objets avec des propriétés et des relations entre eux.

  **Pouvoir expressif**           Limité. Ne peut pas généraliser sur les objets.                     Élevé. Permet la quantification universelle et existentielle sur des ensembles d\'objets.

  **Exemple canonique**           Pluie → SolMouillé                                                  ∀x (Chat(x) → Mammifere(x))

  **Complexité (Décidabilité)**   Décidable. Le problème de la satisfiabilité (SAT) est NP-complet.   Semi-décidable. Valide si prouvable (complétude), mais pas d\'algorithme pour la non-validité (indécidabilité).
  ------------------------------- ------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------

### 42.1.2 Inférence en Logique du Premier Ordre : Les Moteurs de Règles

Avoir un langage formel pour représenter la connaissance n\'est que la première étape. La seconde, tout aussi cruciale, est de disposer de mécanismes pour raisonner à partir de cette connaissance, c\'est-à-dire pour dériver de nouvelles conclusions qui ne sont pas explicitement énoncées dans la base de connaissances initiale. Ce processus est appelé **inférence**. En LPO, l\'inférence est mise en œuvre par des algorithmes qui appliquent systématiquement des règles d\'inférence valides.

#### Le Processus d\'Inférence

Une règle d\'inférence est un schéma qui permet de dériver une nouvelle formule (la conclusion) à partir d\'un ensemble de formules existantes (les prémisses). Pour être valide, une règle doit être **correcte** (sound), c\'est-à-dire qu\'elle ne doit jamais dériver une conclusion fausse à partir de prémisses vraies. Les règles d\'inférence fondamentales pour la LPO incluent :

> **Modus Ponens :** Si nous avons une implication A→B et que nous savons que A est vrai, nous pouvons conclure que B est vrai.
>
> **Instanciation Universelle (UI) :** D\'une phrase universellement quantifiée ∀v,α, on peut inférer n\'importe quelle instanciation de α où la variable v est remplacée par un terme clos (sans variable) g. Par exemple, de ∀xRoi(x)→Mechant(x), on peut inférer Roi(Jean)→Mechant(Jean).
>
> **Instanciation Existentielle (EI) :** D\'une phrase existentiellement quantifiée ∃v,α, on peut inférer une phrase où v est remplacé par un nouveau symbole de constante qui n\'apparaît nulle part ailleurs dans la base de connaissances. Ce nouveau symbole est appelé une **constante de Skolem**. Par exemple, de ∃xCouronne(x)∧SurTete(x,Jean), on peut inférer Couronne(C1​)∧SurTete(C1​,Jean), où C1​ est un identifiant unique pour la couronne en question.

Les algorithmes d\'inférence, souvent appelés **moteurs d\'inférence** dans le contexte des systèmes experts, sont des procédures qui automatisent l\'application de ces règles pour répondre à des requêtes ou pour enrichir une base de connaissances. Les deux stratégies les plus répandues sont le chaînage avant et le chaînage arrière.

#### Le Chaînage Avant (Forward Chaining) : Un Raisonnement Guidé par les Données

Le chaînage avant est une stratégie d\'inférence qui fonctionne de manière \"bottom-up\", c\'est-à-dire des faits vers les conclusions. Il part des faits connus dans la base de connaissances et applique itérativement les règles d\'inférence pour ajouter de nouveaux faits. Ce processus se poursuit jusqu\'à ce qu\'aucun nouveau fait ne puisse être dérivé (on dit que la base de faits est

**saturée**) ou que le but recherché soit atteint.

Le chaînage avant est particulièrement bien adapté aux systèmes où de nouvelles données arrivent continuellement et où l\'on souhaite déduire toutes les conséquences possibles de ces nouvelles informations. C\'est une forme de raisonnement déductif guidé par les données.

**Algorithme Détaillé**

Pour les bases de connaissances en LPO utilisant des règles de la forme Prémisse₁ ∧\... ∧ Prémisseₙ → Conclusion (clauses de Horn définies), l\'algorithme de chaînage avant doit gérer les variables. Le cœur de l\'algorithme repose sur l\'**unification**, qui est le processus de trouver une substitution de variables qui rend deux expressions logiques identiques.

Le cycle de base d\'un moteur d\'inférence en chaînage avant se déroule en trois phases  :

> **Filtrage (Matching) :** Identifier l\'ensemble de toutes les règles dont les prémisses peuvent être satisfaites par les faits actuellement dans la base de connaissances. Cela implique de trouver des substitutions pour les variables des règles.
>
> **Résolution de conflits :** S\'il y a plusieurs règles applicables, choisir laquelle déclencher. Les stratégies peuvent être simples (ex: la première trouvée) ou complexes (ex: la plus spécifique, la plus récente, ou basée sur des méta-règles).
>
> **Exécution (Action) :** Appliquer la substitution trouvée à la conclusion de la règle choisie et ajouter le nouveau fait instancié à la base de connaissances.

Voici une description formelle de l\'algorithme :

fonction FOL-FC-ASK(BC, α) retourne une substitution ou faux\
entrées: BC, une base de connaissances de clauses de Horn\
α, la requête (un atome)\
\
répéter indéfiniment\
nouveaux ← {}\
pour chaque règle dans BC faire\
p₁,\..., pₙ → q est une standardisation de la règle\
pour chaque θ tel que SUBST(θ, p₁ ∧\... ∧ pₙ) = SUBST(θ, f₁ ∧\... ∧ fₙ)\
pour des faits f₁,\..., fₙ dans BC\
q\' ← SUBST(θ, q)\
si q\' ne unifie pas avec un fait déjà dans BC ou dans nouveaux alors\
ajouter q\' à nouveaux\
φ ← UNIFY(q\', α)\
si φ n\'est pas échec alors retourner φ\
si nouveaux est vide alors retourner faux\
ajouter nouveaux à BC

**Exemple Illustratif**

Considérons la base de connaissances suivante  :

> **Base de Faits (BF) :** {Bénédicte, Coralie}
>
> **Base de Règles (BR) :**

R4: Bénédicte → Xavier

R6: Coralie → Denis

R7: Xavier ∧ Coralie → Amélie

R5: Xavier ∧ Amélie → Herman

Si nous cherchons à savoir si Herman est un fait déductible :

> **Cycle 1 :**

R4 est applicable avec le fait Bénédicte. On ajoute Xavier à la BF. BF = {Bénédicte, Coralie, Xavier}.

R6 est applicable avec le fait Coralie. On ajoute Denis à la BF. BF = {Bénédicte, Coralie, Xavier, Denis}.

> **Cycle 2 :**

Maintenant que Xavier et Coralie sont dans la BF, R7 devient applicable. On ajoute Amélie à la BF. BF = {Bénédicte, Coralie, Xavier, Denis, Amélie}.

> **Cycle 3 :**

Maintenant que Xavier et Amélie sont dans la BF, R5 devient applicable. On ajoute Herman à la BF.\
Le but Herman est atteint.

#### Le Chaînage Arrière (Backward Chaining) : Un Raisonnement Guidé par les Buts

Le chaînage arrière adopte une approche \"top-down\", radicalement différente. Il part d\'un but (une requête que l\'on souhaite prouver) et travaille à rebours. Si le but est déjà un fait connu, la preuve est triviale. Sinon, le système recherche des règles dont la conclusion peut s\'unifier avec le but. Les prémisses de ces règles deviennent alors de nouveaux sous-buts à prouver, et le processus est appliqué récursivement.

Cette stratégie est beaucoup plus ciblée que le chaînage avant, car elle n\'explore que les branches du raisonnement qui sont pertinentes pour la question posée. C\'est le mécanisme d\'inférence qui sous-tend des langages de programmation logique comme Prolog.

**Algorithme Détaillé**

L\'algorithme de chaînage arrière est naturellement récursif. Il maintient une liste de buts à prouver. Pour chaque but, il tente de l\'unifier avec des faits ou des conclusions de règles.

fonction FOL-BC-ASK(BC, buts, θ) retourne un générateur de substitutions\
entrées: BC, une base de connaissances\
buts, une liste de buts à prouver\
θ, la substitution courante\
\
si buts est vide alors\
produire θ\
sinon\
premier ← PREMIER(buts)\
reste ← RESTE(buts)\
q\' ← SUBST(θ, premier)\
pour chaque phrase s dans BC telle que\
s = (p₁ ∧\... ∧ pₙ → q) et θ\' ← UNIFY(q, q\') réussit\
nouveaux_buts ← \[p₁,\..., pₙ \| reste\]\
pour chaque θ\'\' dans FOL-BC-ASK(BC, nouveaux_buts, COMPOSE(θ, θ\')) faire\
produire θ\'\'\
pour chaque fait f dans BC telle que θ\' ← UNIFY(f, q\') réussit\
pour chaque θ\'\' dans FOL-BC-ASK(BC, reste, COMPOSE(θ, θ\')) faire\
produire θ\'\'

**Exemple Illustratif**

Reprenons le même exemple, avec la requête Herman.

> **But initial :** Herman.
>
> Le système cherche une règle dont la conclusion est Herman. Il trouve R5: Xavier ∧ Amélie → Herman.
>
> **Nouveaux sous-buts :** Xavier et Amélie.
>
> Le système tente de prouver le premier sous-but, Xavier. Il trouve R4: Bénédicte → Xavier.
>
> **Nouveau sous-but :** Bénédicte.
>
> Le système cherche Bénédicte dans la BF. Il le trouve. Le sous-but Bénédicte est prouvé, donc Xavier est prouvé.
>
> Le système passe au second sous-but initial, Amélie. Il trouve R7: Xavier ∧ Coralie → Amélie.
>
> **Nouveaux sous-buts :** Xavier et Coralie.
>
> Le système tente de prouver Xavier. Comme il vient de le faire, il sait que c\'est un fait prouvable (ou le trouve dans la BF si on utilise la mémorisation).
>
> Le système tente de prouver Coralie. Il le trouve dans la BF.
>
> Les deux sous-buts Xavier et Coralie sont prouvés, donc Amélie est prouvé.
>
> Les deux sous-buts Xavier et Amélie sont maintenant prouvés, donc le but initial Herman est prouvé.

Le choix entre ces deux stratégies d\'inférence n\'est pas anodin ; il reflète une dualité fondamentale dans la manière de résoudre un problème. Le chaînage avant, guidé par les données, est exhaustif et réactif. Il est idéal pour des tâches de surveillance, de classification ou de configuration où l\'on veut explorer toutes les conséquences d\'un état initial. En revanche, le chaînage arrière, guidé par le but, est ciblé et efficace. Il excelle dans les tâches de diagnostic, de consultation ou de preuve de théorème, où une question précise est posée et où il est inutile de dériver des faits non pertinents. La nature de l\'application dicte donc le choix du moteur de raisonnement.

### 42.1.3 Ontologies et le Web Sémantique : La Connaissance Structurée et Partagée

Les formalismes logiques fournissent les outils pour représenter la connaissance et raisonner dessus au sein d\'un agent unique. Cependant, une grande partie de la valeur de la connaissance réside dans sa capacité à être partagée, comprise et réutilisée par différents agents, qu\'ils soient humains ou logiciels. La vision du **Web Sémantique** est née de cette ambition : transformer le Web d\'une collection de documents destinés aux humains en une base de connaissances globale et interconnectée, lisible et exploitable par les machines. Au cœur de cette vision se trouvent les

**ontologies**, des formalismes pour structurer et définir la signification de la connaissance.

#### La Vision du Web Sémantique

Le Web actuel est principalement un web de documents. Les pages HTML contiennent de l\'information, mais le balisage se concentre sur la présentation (\<h1\>, \<p\>) plutôt que sur la signification du contenu. Un ordinateur peut afficher une page listant des événements, mais il ne \"comprend\" pas ce qu\'est un événement, un lieu ou une date. Le Web Sémantique vise à remédier à cela en ajoutant une couche de métadonnées sémantiques qui décrivent explicitement les données et les relations entre elles. L\'objectif est de permettre des tâches plus intelligentes, comme des recherches qui comprennent le sens des mots, une intégration de données transparente entre différentes sources et une automatisation plus poussée des services.

Pour réaliser cette vision, une représentation formelle et partagée de la connaissance est nécessaire. C\'est le rôle des ontologies. Une ontologie, dans ce contexte, est une spécification explicite et formelle d\'une conceptualisation partagée d\'un domaine. En d\'autres termes, elle définit un vocabulaire de termes (classes, propriétés) et spécifie les relations logiques qui les lient, créant un modèle de connaissance commun.

#### Resource Description Framework (RDF) : L\'Échafaudage des Données

La brique de base du Web Sémantique est le **Resource Description Framework (RDF)**. RDF n\'est pas un langage d\'ontologie en soi, mais un modèle de données générique pour faire des déclarations sur des ressources. Le modèle RDF est basé sur une structure simple et puissante : le

**triplet**.

Chaque déclaration RDF est un triplet de la forme (sujet, prédicat, objet) :

> Le **sujet** est la ressource que l\'on décrit.
>
> Le **prédicat** (ou propriété) est une ressource qui décrit une caractéristique ou une relation du sujet.
>
> L\'**objet** est la valeur de cette caractéristique, qui peut être une autre ressource ou une valeur littérale (une chaîne de caractères, un nombre, etc.).

Crucialement, les sujets et les prédicats (et souvent les objets) sont identifiés par des **Uniform Resource Identifiers (URIs)**, les mêmes identifiants uniques utilisés pour les adresses web. Cela permet de créer un graphe de connaissances global et décentralisé : n\'importe qui peut faire des déclarations sur n\'importe quelle ressource, et ces déclarations peuvent être liées entre elles à travers le Web. L\'ensemble de tous les triplets RDF forme un immense graphe orienté et étiqueté. RDF peut être écrit dans différentes syntaxes, les plus courantes étant RDF/XML et Turtle.

#### Web Ontology Language (OWL) : Ajouter la Richesse Sémantique

RDF fournit la structure de base pour énoncer des faits, mais il est sémantiquement très limité. Il ne permet pas de dire, par exemple, qu\'une Personne est une sous-classe d\'un Mammifere, ou que la propriété aPourEnfant ne peut s\'appliquer qu\'à des mammifères et a pour valeur un mammifère. C\'est là qu\'intervient le **Web Ontology Language (OWL)**.

OWL est un langage de modélisation de connaissances, recommandé par le W3C, qui est construit par-dessus RDF. Il fournit un vocabulaire riche pour définir des ontologies et exprimer des axiomes logiques complexes sur les concepts d\'un domaine. OWL permet de passer de simples déclarations de faits à une véritable modélisation de la connaissance.

Les composants clés d\'une ontologie OWL incluent  :

> **Classes (owl:Class) :** Représentent des ensembles ou des catégories d\'individus. Par exemple, Livre, Auteur.
>
> **Hiérarchies de classes (rdfs:subClassOf) :** Permettent d\'organiser les classes dans une taxonomie. Par exemple, on peut déclarer que Roman est une sous-classe de Livre. Un raisonneur peut alors déduire que si un individu est un Roman, il est aussi un Livre.
>
> **Propriétés (owl:ObjectProperty, owl:DatatypeProperty) :** Définissent les relations. Les ObjectProperty lient des individus entre eux (ex: aPourAuteur), tandis que les DatatypeProperty lient un individu à une valeur littérale (ex: dateDePublication).
>
> **Domaine et Portée (rdfs:domain, rdfs:range) :** Permettent de spécifier des contraintes sur les propriétés. Par exemple, le domaine de aPourAuteur pourrait être Livre et sa portée Auteur. Si un raisonneur voit x aPourAuteur y, il peut déduire que x est un Livre et y un Auteur.
>
> **Axiomes complexes :** OWL permet d\'exprimer des contraintes beaucoup plus riches, comme des restrictions de cardinalité (ex: \"un livre a au moins un auteur\"), des classes disjointes (ex: \"rien ne peut être à la fois un Livre et un Auteur\"), des équivalences de classes, etc.

Cette expressivité logique permet à des programmes informatiques, appelés **raisonneurs sémantiques**, de vérifier la cohérence d\'une ontologie et de déduire des connaissances implicites. Par exemple, si on définit un Parent comme une Personne qui aPourEnfant une autre Personne, et qu\'on déclare que Jean aPourEnfant Marie, un raisonneur peut automatiquement inférer que Jean est un Parent.

Pour gérer le compromis entre expressivité et décidabilité, OWL est proposé en trois \"espèces\" ou variantes  :

> **OWL Lite :** La variante la plus simple, avec une expressivité limitée (par ex., cardinalités de 0 ou 1 seulement), mais qui garantit une faible complexité computationnelle.
>
> **OWL DL (Description Logic) :** Offre un très bon équilibre entre une grande expressivité et la garantie que le raisonnement est **décidable** (c\'est-à-dire que tout algorithme d\'inférence terminera). Elle est basée sur une famille de logiques formelles appelées Logiques de Description.
>
> **OWL Full :** La variante la plus expressive, qui ne pose aucune contrainte. Elle offre une flexibilité maximale mais perd la garantie de décidabilité du raisonnement.

L\'émergence de OWL, et en particulier de OWL DL, n\'est pas un accident historique. Elle représente la concrétisation, à l\'échelle du Web, d\'une solution mûrement réfléchie par la communauté de la recherche en logique formelle au dilemme fondamental entre expressivité et complexité. Comme nous l\'avons vu, la LPO complète, bien que très expressive, est semi-décidable, ce qui la rend impropre aux applications web qui exigent des réponses en temps fini. Les Logiques de Description (DL), sur lesquelles OWL DL est fondé, sont des fragments de la LPO soigneusement conçus pour être décidables tout en conservant une expressivité suffisante pour modéliser des domaines complexes. Ainsi, le Web Sémantique ne réinvente pas la roue ; il applique de manière pragmatique des décennies de recherche théorique pour construire une base de connaissances mondiale qui soit à la fois riche et calculable.

## 42.2 Raisonnement en Contexte d\'Incertitude : L\'Approche Probabiliste

Le monde que nous avons exploré jusqu\'à présent, celui de la logique symbolique, est un monde de certitudes. Une proposition est soit vraie, soit fausse ; un fait est soit dans la base de connaissances, soit il ne l\'est pas. Si cette abstraction est puissante pour des domaines formels comme les mathématiques ou des environnements de jeu bien définis, elle se heurte rapidement à la nature fondamentalement incertaine du monde réel. L\'information dont dispose un agent est presque toujours incomplète, ambiguë, ou bruitée. Les actions qu\'il entreprend peuvent avoir des résultats non déterministes. Pour qu\'un agent puisse agir intelligemment dans un tel monde, il doit être capable de gérer et de quantifier cette incertitude.

Cette section marque un changement de paradigme fondamental, passant de la logique à la **théorie des probabilités**. Nous allons établir comment les probabilités fournissent un cadre mathématique rigoureux pour représenter des degrés de croyance et pour les mettre à jour de manière cohérente à la lumière de nouvelles observations. Nous commencerons par le fondement de tout le raisonnement probabiliste moderne, le théorème de Bayes, avant d\'explorer deux des formalismes les plus influents qui le mettent en pratique : les réseaux bayésiens, pour modéliser des systèmes complexes de variables interdépendantes, et les modèles de Markov cachés, pour raisonner sur des séquences temporelles.

### 42.2.1 La Gestion de l\'Incertitude et le Théorème de Bayes

La première étape pour raisonner sous incertitude est d\'adopter un langage capable de l\'exprimer. La logique classique, avec ses valeurs de vérité binaires, est mal équipée pour cette tâche.

#### Pourquoi la Logique ne Suffit Pas

Considérons un agent médical de diagnostic. Un patient présente de la fièvre. La logique classique pourrait nous permettre d\'utiliser une règle comme Fièvre → Grippe. Cependant, cette règle est trop forte ; la fièvre peut avoir de nombreuses autres causes. Une règle plus faible comme Grippe → Fièvre est plus correcte, mais elle ne nous permet pas de conclure quoi que ce soit sur la présence de la grippe à partir de l\'observation de la fièvre (c\'est l\'erreur de raisonnement connue sous le nom d\'affirmation du conséquent).

La logique est confrontée à trois problèmes majeurs dans les domaines réels :

> **L\'ignorance :** L\'agent ne connaît pas tous les facteurs qui influencent le résultat. Il peut y avoir des exceptions non modélisées à chaque règle.
>
> **Le caractère stochastique :** Certains domaines sont intrinsèquement aléatoires. Même en connaissant toutes les conditions, le résultat d\'un lancer de dé ne peut être prédit avec certitude.
>
> **L\'ambiguïté et la complexité :** L\'utilisation de règles logiques pour couvrir toutes les éventualités mènerait à une base de connaissances d\'une taille et d\'une complexité ingérables.

La modélisation probabiliste offre une solution en remplaçant la notion de vérité par celle de **degré de croyance**. Au lieu d\'affirmer qu\'un patient a la grippe, l\'agent peut assigner une probabilité, par exemple 0.1, à cette proposition. Cette approche permet de quantifier l\'incertitude et de la manipuler de manière formelle.

#### Les Fondements de la Théorie des Probabilités

La théorie des probabilités fournit le cadre axiomatique pour le raisonnement sous incertitude. Elle commence par assigner une probabilité numérique P(A) à chaque proposition (ou événement) A, représentant le degré de croyance en sa vérité. Ces probabilités doivent respecter les **axiomes de Kolmogorov** :

> Pour tout événement A, 0≤P(A)≤1.
>
> P(Vrai)=1 et P(Faux)=0.
>
> P(A∨B)=P(A)+P(B)−P(A∧B).

À partir de ces axiomes, on peut définir la probabilité conditionnelle, P(A∣B), qui représente la probabilité de l\'événement A sachant que l\'événement B s\'est produit. Elle est définie comme :

P(A∣B)=P(B)P(A∧B)​,pour P(B)\>0

où P(A∧B) est la probabilité conjointe que A et B se produisent simultanément. Cette équation peut être réarrangée pour donner la règle du produit :

P(A∧B)=P(A∣B)P(B)

Cette règle est l\'une des plus importantes de la théorie des probabilités et constitue la base pour la dérivation du théorème de Bayes.

#### Le Théorème de Bayes : La Pierre Angulaire de l\'Inférence

Le théorème de Bayes est une conséquence directe et simple de la règle du produit, mais son importance pour l\'IA et les statistiques est immense. Il fournit une méthode pour mettre à jour la probabilité d\'une hypothèse à la lumière de nouvelles données.

**Dérivation**

Puisque la conjonction est commutative (A∧B est identique à B∧A), nous pouvons écrire la règle du produit de deux manières :

> P(A∧B)=P(A∣B)P(B)
>
> P(B∧A)=P(B∣A)P(A)

En égalisant les deux côtés droits, nous obtenons :

P(A∣B)P(B)=P(B∣A)P(A)

En divisant par P(B) (en supposant que P(B)=0), nous obtenons la forme standard du théorème de Bayes :

P(A∣B)=P(B)P(B∣A)P(A)​

**Sémantique des Termes**

Chaque terme de cette équation a une interprétation intuitive dans le contexte de l\'inférence, où A est souvent une hypothèse et B une observation (ou évidence) :

> P(A) est la **probabilité a priori** (prior). C\'est notre croyance initiale en l\'hypothèse A *avant* d\'avoir observé l\'évidence B.
>
> P(A∣B) est la **probabilité a posteriori** (posterior). C\'est notre croyance mise à jour en l\'hypothèse A *après* avoir pris en compte l\'observation B. Le but de l\'inférence bayésienne est de calculer cette valeur.
>
> P(B∣A) est la **vraisemblance** (likelihood). C\'est la probabilité d\'observer B si notre hypothèse A est vraie. Ce terme est souvent issu d\'un modèle génératif du monde (comment les causes produisent des effets).
>
> P(B) est l\'**évidence** (evidence ou marginal likelihood). C\'est la probabilité totale d\'observer B, quelle que soit l\'hypothèse. Elle agit comme une constante de normalisation pour s\'assurer que la probabilité a posteriori est une distribution de probabilité valide. On la calcule en marginalisant sur toutes les hypothèses possibles Ai​ : P(B)=∑i​P(B∣Ai​)P(Ai​).

Le théorème de Bayes peut donc être lu comme :

Posterior=EvidenceLikelihood×Prior​

Il formalise le processus d\'apprentissage : on part d\'une croyance a priori, on observe des données, et on utilise la vraisemblance de ces données sous différentes hypothèses pour calculer une croyance a posteriori révisée.21

**Exemple Illustratif : Le Paradoxe des Faux Positifs**

L\'un des exemples les plus éclairants de l\'application du théorème de Bayes est le diagnostic médical, qui met en lumière l\'importance cruciale de la probabilité a priori.

Supposons une maladie rare qui affecte 1% de la population. Il existe un test de dépistage très fiable :

> Si une personne est malade, le test est positif dans 99% des cas (sensibilité de 0.99).
>
> Si une personne est saine, le test est négatif dans 99% des cas (spécificité de 0.99), ce qui signifie qu\'il y a 1% de faux positifs.

Une personne passe le test et le résultat est positif. Quelle est la probabilité qu\'elle soit réellement malade?

Définissons nos événements :

> M : La personne est malade.
>
> ¬M : La personne est saine.
>
> Pos : Le test est positif.

Nous voulons calculer P(M∣Pos). Les informations que nous avons sont :

> P(M)=0.01 (prior)
>
> P(¬M)=1−0.01=0.99
>
> P(Pos∣M)=0.99 (likelihood du test positif pour une personne malade)
>
> P(Pos∣¬M)=0.01 (likelihood du test positif pour une personne saine - le faux positif)

Appliquons le théorème de Bayes :

P(M∣Pos)=P(Pos)P(Pos∣M)P(M)​

Nous devons d\'abord calculer le dénominateur, P(Pos), en utilisant la loi des probabilités totales :

P(Pos)=P(Pos∣M)P(M)+P(Pos∣¬M)P(¬M)

P(Pos)=(0.99×0.01)+(0.01×0.99)

P(Pos)=0.0099+0.0099=0.0198

Maintenant, nous pouvons calculer la probabilité a posteriori :

P(M∣Pos)=0.01980.99×0.01​=0.01980.0099​=0.5

Le résultat est surprenant : malgré un test positif et une fiabilité de 99%, la probabilité que la personne soit réellement malade n\'est que de 50%. L\'intuition nous trompe car elle néglige l\'extrême rareté de la maladie (le faible prior). Dans ce cas, le nombre de personnes saines qui obtiennent un faux positif (0.01×9900=99 sur 10000 personnes) est égal au nombre de personnes malades qui obtiennent un vrai positif (0.99×100=99 sur 10000 personnes).

Cet exemple illustre une propriété fondamentale du raisonnement bayésien : il permet de remonter des effets (un symptôme, un résultat de test) aux causes probables (la maladie). Les modèles du monde sont souvent construits de manière causale, ce qui nous donne facilement accès au terme de vraisemblance

P(effet∣cause). Cependant, pour le diagnostic, nous avons besoin de l\'inverse, P(cause∣effet). Le théorème de Bayes est précisément le mécanisme mathématique qui permet cette inversion, ce qui en fait un outil indispensable pour le diagnostic, l\'apprentissage machine et toutes les formes de raisonnement abductif.

### 42.2.2 Les Réseaux Bayésiens : Structure et Inférence

Le théorème de Bayes nous fournit la règle de base pour mettre à jour une croyance sur une seule variable. Cependant, les problèmes du monde réel impliquent des dizaines, voire des milliers de variables interdépendantes. Représenter la distribution de probabilité jointe sur toutes ces variables devient rapidement impossible. Par exemple, pour n variables binaires, la table de probabilité jointe complète nécessiterait 2n−1 entrées, un nombre qui explose de manière exponentielle. Les **réseaux bayésiens** sont une solution élégante et puissante à ce problème. Ils offrent une représentation graphique compacte de la distribution jointe en exploitant les relations d\'indépendance conditionnelle entre les variables.

#### Structure et Sémantique des Réseaux Bayésiens

Un réseau bayésien est un modèle graphique probabiliste qui combine la théorie des graphes et la théorie des probabilités.

**Définition Formelle**

Un réseau bayésien est défini par un couple (G,Θ) où :

> **G est un graphe orienté acyclique (DAG)**. Les **nœuds** du graphe représentent les variables aléatoires du domaine (ex: Maladie, Symptôme, Test). Les **arcs** orientés représentent des dépendances directes ou des influences causales. Si un arc va de A à B, on dit que A est un **parent** de B.
>
> **Θ est un ensemble de paramètres** qui quantifient les relations dans le graphe. Pour chaque nœud Xi​, il y a une **table de probabilités conditionnelles (CPT)**, P(Xi​∣Parents(Xi​)), qui spécifie la distribution de probabilité de Xi​ pour chaque combinaison de valeurs de ses parents. Les nœuds sans parents ont une CPT qui correspond à leur probabilité a priori.

**La Règle de la Chaîne Bayésienne**

La sémantique d\'un réseau bayésien repose sur une hypothèse fondamentale d\'indépendance conditionnelle : chaque variable est conditionnellement indépendante de ses non-descendants dans le graphe, étant donné ses parents directs. Cette **propriété de Markov locale** est ce qui permet la simplification. Grâce à elle, la distribution de probabilité jointe complète de toutes les variables du réseau peut être factorisée en un produit des probabilités conditionnelles locales définies dans les CPTs :

P(X1​,\...,Xn​)=i=1∏n​P(Xi​∣Parents(Xi​))

Cette factorisation est la clé de la compacité des réseaux bayésiens. Au lieu d\'une table exponentielle, nous n\'avons besoin que de stocker une petite CPT pour chaque variable. Par exemple, dans un réseau où chaque variable a au plus k parents, et où les variables sont binaires, la taille totale des CPTs sera de l\'ordre de n×2k, ce qui est beaucoup plus gérable que 2n si k est petit.

#### Inférence dans les Réseaux Bayésiens

Une fois le réseau construit, il peut être utilisé pour raisonner, c\'est-à-dire pour répondre à des requêtes probabilistes. La tâche d\'**inférence** consiste à calculer la distribution de probabilité a posteriori d\'un ensemble de **variables de requête** (Q), étant donné des observations sur un ensemble de **variables d\'évidence** (E=e). Toutes les autres variables du réseau sont des

**variables cachées** (Z). La requête générale est donc de calculer P(Q∣E=e).

Le problème de l\'inférence exacte dans un réseau bayésien général est NP-difficile. Nous allons explorer deux approches : une méthode exacte, l\'élimination de variables, qui est efficace pour certains réseaux, et une méthode approximative, l\'échantillonnage de Gibbs, utilisée lorsque l\'inférence exacte est infaisable.

#### Inférence Exacte : L\'Algorithme d\'Élimination de Variables

L\'algorithme d\'élimination de variables est une méthode d\'inférence exacte qui évite la construction explicite de la distribution jointe complète. L\'idée est de calculer la somme marginale sur les variables cachées une par une, en \"poussant\" les sommes aussi loin que possible à l\'intérieur du produit des CPTs.

**Facteurs**

L\'algorithme opère sur des entités appelées **facteurs**. Un facteur est une table, similaire à une CPT, qui représente une fonction sur un sous-ensemble de variables. Initialement, les facteurs sont les CPTs du réseau. Au cours de l\'algorithme, de nouveaux facteurs sont créés par multiplication et sommation.

**Algorithme Détaillé**

Pour calculer P(Q∣e), on calcule d\'abord la probabilité jointe P(Q,e) et on normalise à la fin. Le calcul de P(Q,e) se fait en sommant sur toutes les variables cachées Zj​ :

P(Q,e)=z1​∑​\...zm​∑​P(Q,e,z1​,\...,zm​)

L\'algorithme d\'élimination de variables réorganise ce calcul :

> **Initialisation :** Créer une liste de facteurs, un pour chaque CPT du réseau.
>
> **Prise en compte de l\'évidence :** Pour chaque variable d\'évidence Ei​=ei​, modifier tous les facteurs qui contiennent Ei​. Cela se fait en sélectionnant uniquement les lignes de la table du facteur qui sont cohérentes avec l\'observation ei​. Le facteur résultant ne contient plus la variable Ei​.
>
> Élimination des variables cachées : Pour chaque variable cachée Zj​ (selon un ordre d\'élimination prédéfini) :\
> a. Collecter : Rassembler tous les facteurs de la liste qui mentionnent la variable Zj​.\
> b. Multiplier : Calculer le produit ponctuel de tous ces facteurs pour créer un nouveau grand facteur.\
> c. Sommer (Marginaliser) : Sommer la variable Zj​ hors de ce nouveau facteur. Cela crée un facteur plus petit qui ne dépend plus de Zj​.\
> d. Mettre à jour : Remplacer les facteurs collectés dans la liste par ce nouveau facteur marginalisé.
>
> **Finalisation :** À la fin, il ne reste que des facteurs qui ne dépendent que des variables de requête Q. Multiplier tous les facteurs restants pour obtenir un facteur final représentant P(Q,e).
>
> **Normalisation :** Normaliser le facteur final pour obtenir P(Q∣e).

Le pseudo-code suivant formalise ce processus  :

fonction ELIMINATION-ASK(X, e, bn) retourne une distribution sur X\
entrées: X, la variable de requête\
e, l\'évidence observée\
bn, le réseau bayésien\
\
facteurs ←\
pour chaque var dans ORDONNER(bn.VARS) faire\
facteurs.ajouter(CREER-FACTEUR(var, e))\
\
pour chaque var dans ORDRE-ELIMINATION faire\
facteurs ← SOMMER(var, facteurs)\
\
résultat ← PRODUIT-PONCTUEL(facteurs)\
retourner NORMALIZE(résultat)\
\
fonction SOMMER(var, facteurs) retourne une liste de facteurs\
facteurs_avec_var ←\
facteurs_sans_var ←\
\
nouveau_facteur ← PRODUIT-PONCTUEL(facteurs_avec_var)\
nouveau_facteur ← SOMMER-SUR(var, nouveau_facteur)\
\
retourner facteurs_sans_var + \[nouveau_facteur\]

La complexité de cet algorithme dépend de manière cruciale de l\'**ordre d\'élimination**. Un bon ordre peut mener à des calculs rapides, tandis qu\'un mauvais ordre peut générer des facteurs intermédiaires de taille exponentielle. La complexité est exponentielle en la **largeur arborescente (treewidth)** du graphe induit par l\'ordre d\'élimination. Trouver l\'ordre optimal est un problème NP-difficile en soi.

#### Inférence Approximative : L\'Échantillonnage de Gibbs

Lorsque l\'inférence exacte est trop coûteuse, ce qui est le cas pour la plupart des grands réseaux complexes, on se tourne vers des méthodes d\'inférence approximative. Les méthodes de **Monte Carlo par Chaînes de Markov (MCMC)**, comme l\'échantillonnage de Gibbs, sont une classe populaire de ces algorithmes. L\'idée est de générer un grand nombre d\'échantillons aléatoires qui, à la longue, suivent la distribution de probabilité a posteriori, puis d\'estimer les probabilités en comptant les fréquences dans ces échantillons.

**Principe**

L\'échantillonnage de Gibbs est un algorithme MCMC qui construit une chaîne de Markov dont la distribution stationnaire est la distribution a posteriori P(Q,Z∣e) que nous cherchons. Il fonctionne en initialisant un état complet du réseau (une assignation de valeurs à toutes les variables cachées) et en le modifiant itérativement, une variable à la fois.

**Algorithme Détaillé**

> Initialisation :\
> a. Fixer les variables d\'évidence E à leurs valeurs observées e.\
> b. Assigner des valeurs aléatoires à toutes les variables cachées Z. Cela constitue le premier échantillon, ou état, x(0).
>
> Itération : Pour t=1,2,\...,N (pour un grand nombre d\'échantillons N) :\
> a. Pour chaque variable cachée Zi​ dans Z :\
> i. Échantillonner une nouvelle valeur zi(t)​ pour Zi​ à partir de sa distribution conditionnelle, étant donné les valeurs actuelles de toutes les autres variables dans l\'échantillon courant x(t−1). Cette distribution est P(Zi​∣x−i(t−1)​), où x−i​ représente toutes les variables sauf Zi​.
>
> **Estimation :** Après une période de \"rodage\" (burn-in) où les premiers milliers d\'échantillons sont jetés pour laisser la chaîne converger vers sa distribution stationnaire, les échantillons restants sont utilisés pour estimer les probabilités. Par exemple, pour estimer P(Q=q∣e), on compte la proportion d\'échantillons où la variable Q prend la valeur q.

**La Couverture de Markov**

L\'étape clé de l\'échantillonnage de Gibbs est de pouvoir échantillonner efficacement à partir de P(Zi​∣x−i(t−1)​). Grâce à la structure du réseau bayésien, cette distribution conditionnelle ne dépend que d\'un petit sous-ensemble des autres variables, appelé la **couverture de Markov** de Zi​. La couverture de Markov d\'un nœud est constituée de :

> Ses parents
>
> Ses enfants
>
> Les autres parents de ses enfants

Cette propriété rend chaque étape d\'échantillonnage local et computationnellement efficace. La probabilité nécessaire est proportionnelle au produit de la CPT de Zi​ et des CPTs de ses enfants.

La puissance des réseaux bayésiens réside dans leur capacité à représenter élégamment des connaissances complexes et incertaines. Cependant, la tâche de raisonner avec ces modèles, c\'est-à-dire l\'inférence, constitue un défi computationnel majeur. Cette difficulté n\'est pas un simple obstacle technique ; elle est une force motrice fondamentale de la recherche en IA. La complexité exponentielle de l\'inférence exacte a directement conduit au développement d\'un vaste champ de recherche sur les algorithmes d\'inférence approximative, comme l\'échantillonnage de Gibbs ou l\'inférence variationnelle. Le choix d\'un algorithme d\'inférence est donc un compromis central dans la conception de systèmes d\'IA, un arbitrage entre la précision de la réponse et la faisabilité du calcul. Pour les modèles à grande échelle utilisés en vision, en génomique ou en traitement du langage, la capacité à concevoir des approximateurs rapides et fiables est souvent ce qui sépare une théorie élégante d\'une application fonctionnelle.

### 42.2.3 Les Modèles Temporels : Modèles de Markov Cachés (HMM)

Jusqu\'à présent, nous avons considéré des variables dont l\'état ne dépend pas explicitement du temps. Cependant, de nombreux problèmes en IA impliquent le traitement de **séquences**, où l\'ordre des données est crucial. La reconnaissance vocale, le traitement du langage naturel, l\'analyse de séries temporelles financières ou la bio-informatique sont autant de domaines où l\'on doit modéliser des processus qui évoluent dans le temps. Les **Modèles de Markov Cachés (HMM)** sont une classe de modèles probabilistes spécifiquement conçus pour cette tâche. Ils peuvent être vus comme une spécialisation des réseaux bayésiens, \"déroulés\" dans le temps pour modéliser des séquences d\'observations générées par une séquence d\'états sous-jacents qui ne sont pas directement visibles.

#### Raisonnement sur des Séquences

Un HMM modélise un système qui passe par une séquence d\'**états cachés**. À chaque pas de temps, le système se trouve dans un état particulier et génère une **observation** visible. L\'état du système est \"caché\" car nous ne pouvons pas l\'observer directement ; nous n\'avons accès qu\'à la séquence d\'observations qu\'il produit.

**Définition Formelle**

Un Modèle de Markov Caché λ est défini par les paramètres suivants  :

> **Un ensemble de N états cachés**, Q={q1​,q2​,\...,qN​}.
>
> **Un vocabulaire de M symboles d\'observation possibles**, V={v1​,v2​,\...,vM​}.
>
> **Une matrice de probabilités de transition d\'états**, A={aij​}, de taille N×N. Chaque élément aij​=P(st​=qj​∣st−1​=qi​) représente la probabilité de passer de l\'état qi​ à l\'état qj​.
>
> **Une matrice de probabilités d\'émission (ou d\'observation)**, B={bj​(k)}, de taille N×M. Chaque élément bj​(k)=P(ot​=vk​∣st​=qj​) représente la probabilité d\'émettre l\'observation vk​ lorsque le système est dans l\'état qj​.
>
> **Une distribution de probabilité initiale**, π={πi​}, de taille N. Chaque élément πi​=P(s1​=qi​) est la probabilité que le système commence dans l\'état qi​.

**Les Hypothèses de Markov**

La simplicité et la puissance des HMM reposent sur deux hypothèses fondamentales qui limitent les dépendances dans le modèle :

> **Hypothèse de Markov (dépendance d\'état) :** La probabilité de l\'état actuel st​ ne dépend que de l\'état précédent st−1​. Le passé n\'a aucune influence sur le futur, si ce n\'est à travers l\'état présent. Formellement : P(st​∣st−1​,\...,s1​)=P(st​∣st−1​).
>
> **Hypothèse d\'indépendance des observations :** La probabilité de l\'observation actuelle ot​ ne dépend que de l\'état actuel st​. Elle est indépendante des états et observations précédents. Formellement : P(ot​∣st​,st−1​,\...,s1​,ot−1​,\...,o1​)=P(ot​∣st​).

Ces hypothèses permettent de représenter le HMM comme un réseau bayésien dynamique simple, où chaque état st​ a pour unique parent st−1​ et pour unique enfant l\'observation ot​.

#### Les Trois Tâches Fondamentales et leurs Algorithmes

Étant donné un HMM, il y a trois problèmes fondamentaux que l\'on cherche à résoudre. Tous ces problèmes peuvent être résolus efficacement grâce à des algorithmes de **programmation dynamique** qui opèrent sur une structure appelée **treillis (trellis)**. Un treillis est un graphe qui représente tous les chemins possibles à travers les états cachés au fil du temps pour une séquence d\'observations donnée.

#### 1. Évaluation (Filtrage) : Calculer la probabilité d\'une séquence

**Problème :** Étant donné un HMM λ=(A,B,π) et une séquence d\'observations O=(o1​,o2​,\...,oT​), quelle est la probabilité que ce modèle ait généré cette séquence, c\'est-à-dire, comment calculer P(O∣λ)? Cette tâche est cruciale pour comparer différents modèles et choisir celui qui explique le mieux les données.

Une approche naïve consisterait à énumérer tous les chemins d\'états possibles de longueur T, à calculer la probabilité de la séquence d\'observations pour chaque chemin, et à sommer ces probabilités. Cependant, le nombre de chemins est NT, ce qui rend cette approche exponentielle et impraticable.

**Algorithme Forward**

L\'algorithme Forward est un algorithme de programmation dynamique qui résout ce problème en un temps polynomial O(N2T). Il calcule récursivement la probabilité des observations partielles jusqu\'à un certain temps t, en se terminant dans un état spécifique j. Pour ce faire, on définit la variable forward αt​(j) :

αt​(j)=P(o1​,o2​,\...,ot​,st​=qj​∣λ)

C\'est la probabilité jointe d\'avoir observé la séquence jusqu\'à l\'instant t ET de se trouver dans l\'état qj​ à cet instant.

L\'algorithme se déroule en trois étapes  :

> Initialisation (t=1) : Pour chaque état j∈{1,\...,N}, on calcule la probabilité d\'être dans l\'état j au début et d\'observer o1​.\
> \
> α1​(j)=πj​bj​(o1​)
>
> Récursion (t=2,\...,T) : Pour chaque état j, αt​(j) est calculé en se basant sur les valeurs de αt−1​ de tous les états possibles à l\'instant précédent. On somme les probabilités de tous les chemins qui mènent à l\'état j à l\'instant t.\
> \
> αt​(j)=\[i=1∑N​αt−1​(i)aij​\]bj​(ot​)\
> \
> Le terme entre crochets est la probabilité totale d\'arriver à l\'état j à l\'instant t en ayant observé la séquence jusqu\'à ot−1​. On multiplie ensuite par la probabilité d\'émettre l\'observation ot​ depuis l\'état j.
>
> Terminaison : La probabilité totale de la séquence d\'observations est la somme des probabilités de tous les chemins, qui se termine dans n\'importe quel état à l\'instant final T.\
> \
> P(O∣λ)=j=1∑N​αT​(j)

#### 2. Décodage : Trouver la séquence d\'états la plus probable

**Problème :** Étant donné un HMM λ et une séquence d\'observations O, quelle est la séquence d\'états cachés S∗=(s1∗​,\...,sT∗​) la plus probable qui a pu générer ces observations? Cette tâche est essentielle en reconnaissance vocale (trouver la séquence de mots la plus probable pour un signal audio) ou en bio-informatique (trouver les régions codantes les plus probables dans une séquence d\'ADN).

**Algorithme de Viterbi**

L\'algorithme de Viterbi est structurellement très similaire à l\'algorithme Forward, mais avec une différence cruciale : au lieu de sommer les probabilités des chemins entrants, il prend le **maximum**. Il trouve le chemin unique le plus probable plutôt que la probabilité totale de tous les chemins. On définit la

variable de Viterbi δt​(j) :

δt​(j)=s1​,\...,st−1​max​P(s1​,\...,st−1​,st​=qj​,o1​,\...,ot​∣λ)

C\'est la probabilité du chemin le plus probable qui se termine dans l\'état qj​ à l\'instant t en ayant généré les observations jusqu\'à cet instant.

L\'algorithme se déroule en quatre étapes  :

> Initialisation (t=1) :\
> \
> δ1​(j)=πj​bj​(o1​)\
> \
> On initialise également une matrice de pointeurs ψ1​(j)=0 pour garder une trace du chemin.
>
> Récursion (t=2,\...,T) : Pour chaque état j, on calcule la probabilité du meilleur chemin y menant en prenant le maximum sur les états précédents.\
> \
> δt​(j)=\[i=1maxN​(δt−1​(i)aij​)\]bj​(ot​)\
> \
> Simultanément, on stocke l\'état précédent qui a réalisé ce maximum :\
> \
> ψt​(j)=argi=1maxN​(δt−1​(i)aij​)
>
> Terminaison : La probabilité du chemin le plus probable sur toute la séquence est le maximum des valeurs δ à l\'instant final.\
> \
> P∗=j=1maxN​δT​(j)\
> \
> L\'état final du chemin le plus probable est :\
> \
> sT∗​=argj=1maxN​δT​(j)
>
> Retraçage (Backtracking) : Pour retrouver le chemin complet, on suit les pointeurs ψ à rebours depuis l\'état final.\
> \
> st∗​=ψt+1​(st+1∗​)pour t=T−1,\...,1

#### 3. Apprentissage et Lissage : Calculer la probabilité d\'un état passé

**Problème :** Souvent, nous ne connaissons pas les paramètres (A,B,π) d\'un HMM à l\'avance. La tâche d\'**apprentissage** consiste à les estimer à partir d\'un ensemble de séquences d\'observations. L\'algorithme le plus courant pour cela est l\'algorithme de Baum-Welch (une instance de l\'algorithme Espérance-Maximisation), qui nécessite de calculer des probabilités sur les états à n\'importe quel instant t, étant donné la *totalité* de la séquence d\'observations. Cette tâche est appelée **lissage (smoothing)**.

**Algorithme Forward-Backward**

L\'algorithme Forward-Backward permet de calculer efficacement P(st​=qi​∣O,λ), la probabilité d\'être dans l\'état qi​ à l\'instant t en connaissant toutes les observations passées et futures. Il combine les résultats de l\'algorithme Forward avec ceux d\'un algorithme symétrique, l\'

**algorithme Backward**.

On définit d\'abord la variable backward βt​(i) :

βt​(i)=P(ot+1​,ot+2​,\...,oT​∣st​=qi​,λ)

C\'est la probabilité d\'observer la fin de la séquence (de t+1 à T) sachant qu\'on se trouve dans l\'état qi​ à l\'instant t.

L\'algorithme Backward se déroule à rebours dans le temps  :

> Initialisation (t=T) : Par convention, la probabilité d\'une séquence future vide est 1.\
> \
> βT​(i)=1,pour tout i
>
> Récursion (t=T−1,\...,1) : Pour chaque état i, on calcule βt​(i) en considérant toutes les transitions possibles vers un état j à t+1.\
> \
> βt​(i)=j=1∑N​aij​bj​(ot+1​)βt+1​(j)

Une fois que les valeurs α et β sont calculées pour toute la séquence, on peut les combiner pour obtenir la probabilité lissée, notée γt​(i) :

γt​(i)=P(st​=qi​∣O,λ)=P(O∣λ)P(O,st​=qi​∣λ)​

Le numérateur, P(O,st​=qi​∣λ), est la probabilité de la séquence entière et de passer par l\'état qi​ à l\'instant t. On peut le décomposer en utilisant les variables forward et backward :

\$\$ P(O, s_t=q_i \| \\lambda) = P(o_1,\..., o_t, s_t=q_i \| \\lambda) \\times P(o\_{t+1},\..., o_T \| s_t=q_i, \\lambda) = \\alpha_t(i) \\beta_t(i) \$\$

Le dénominateur est simplement P(O∣λ), que l\'on peut calculer avec l\'algorithme Forward. Donc :

\$\$ \\gamma_t(i) = \\frac{\\alpha_t(i) \\beta_t(i)}{\\sum\_{j=1}\^{N} \\alpha_T(j)} = \\frac{\\alpha_t(i) \\beta_t(i)}{\\sum\_{k=1}\^{N} \\alpha_t(k) \\beta_t(k)} \$\$

Le tableau suivant résume les trois problèmes fondamentaux des HMM et met en évidence la similitude structurelle de leurs solutions algorithmiques, toutes basées sur la programmation dynamique à travers un treillis.

**Tableau 42.2 : Synthèse des Algorithmes Fondamentaux pour les HMM**

  ---------------- ---------------------------------------------------------- --------------------------------- ---------------------------------------------------------------------- ------------------------ -------------------------
  Problème         Objectif                                                   Algorithme                        Variable Clé                                                           Opérateur de Récursion   Résultat Final

  **Évaluation**   Calculer la probabilité de la séquence d\'observations.    Algorithme **Forward**            αt​(i) : Probabilité de la séquence partielle se terminant en état i.   **Sommation** (∑)        \$P(O

  **Décodage**     Trouver la séquence d\'états la plus probable.             Algorithme de **Viterbi**         δt​(i) : Probabilité du *meilleur* chemin se terminant en état i.       **Maximum** (max)        La séquence d\'états S∗

  **Lissage**      Calculer la probabilité d\'un état à un instant t donné.   Algorithme **Forward-Backward**   γt​(i)=f(αt​(i),βt​(i)) : Probabilité d\'être en état i à l\'instant t.   **Sommation** (∑)        \$P(s_t=i
  ---------------- ---------------------------------------------------------- --------------------------------- ---------------------------------------------------------------------- ------------------------ -------------------------

Ce tableau met en lumière un point conceptuel essentiel : bien que les trois problèmes semblent distincts, leurs solutions partagent une structure de calcul récursive quasi identique. La différence fondamentale entre l\'évaluation (Forward) et le décodage (Viterbi) se résume au remplacement de l\'opérateur de sommation par l\'opérateur de maximum. Cette élégante dualité, connue sous le nom de semi-anneau (sum-product vs. max-product), est un exemple puissant de la manière dont des problèmes apparemment différents peuvent être résolus par un cadre algorithmique unifié.

## 42.3 Planification Automatisée : De la Connaissance à l\'Action

Après avoir exploré comment un agent peut représenter le monde (section 42.1) et raisonner sur son état, même en présence d\'incertitude (section 42.2), une question fondamentale demeure : comment un agent décide-t-il quoi faire? La **planification automatisée** est la branche de l\'intelligence artificielle qui s\'attaque à ce problème. Elle vise à développer des algorithmes qui permettent à un système autonome de synthétiser une séquence d\'actions --- un **plan** --- pour atteindre un objectif désiré à partir d\'un état initial donné. Cette section fait le pont entre le raisonnement et l\'action, en introduisant les formalismes et les algorithmes qui permettent à un agent de passer de la délibération à l\'exécution.

### 42.3.1 Le Problème de la Planification

La planification peut être vue comme une forme de résolution de problèmes où l\'agent doit trouver un chemin d\'un point de départ à un point d\'arrivée dans un espace abstrait défini par les actions possibles.

#### Définition Formelle

Un problème de planification classique est formellement défini par un tuple contenant les éléments suivants  :

> **Une représentation des états du monde :** Un état est un instantané du monde à un moment donné. Dans la planification classique, un état est souvent représenté par une conjonction de littéraux logiques positifs et clos (sans variable). C\'est l\'hypothèse du **monde clos** : tout littéral qui n\'est pas explicitement mentionné dans l\'état est considéré comme faux.
>
> **Un état initial :** La description complète de l\'état de départ du monde.
>
> **Une description de l\'état but :** Un ensemble de conditions (une conjonction de littéraux positifs) à satisfaire. Un état est un état but s\'il satisfait toutes ces conditions. Il peut y avoir de nombreux états du monde qui sont des états but.
>
> **Un ensemble d\'actions (ou opérateurs) :** Les actions décrivent comment l\'agent peut modifier l\'état du monde. Chaque action est définie par :

**Préconditions :** Une conjonction de littéraux qui doivent être vrais dans l\'état courant pour que l\'action soit applicable.

**Effets :** Une description des changements que l\'action apporte à l\'état. Les effets sont généralement une conjonction de littéraux, certains positifs (qui sont ajoutés à l\'état) et d\'autres négatifs (qui sont retirés de l\'état).

La **solution** à un problème de planification est une séquence d\'actions qui, lorsqu\'elle est exécutée à partir de l\'état initial, mène à un état qui satisfait la description de l\'état but.

#### Hypothèses de la Planification Classique

Pour rendre le problème de planification traitable, le cadre classique repose sur un ensemble d\'hypothèses simplificatrices sur l\'environnement  :

> **Fini :** Le nombre d\'états, d\'objets et d\'actions est fini.
>
> **Entièrement observable :** L\'agent connaît toujours l\'état complet et exact du monde.
>
> **Déterministe :** Les effets d\'une action sont connus avec certitude. L\'exécution d\'une action dans un état donné mène toujours au même état successeur.
>
> **Statique :** Le monde ne change que sous l\'effet des actions de l\'agent. Il n\'y a pas d\'événements externes ou de processus continus.

Ces hypothèses définissent le cadre de la planification classique. Des extensions plus complexes existent pour gérer l\'incertitude (planification probabiliste), l\'observabilité partielle (POMDP), ou le temps (planification temporelle), mais la planification classique reste le fondement du domaine.

### 42.3.2 Langages de Planification : PDDL

Pour que les algorithmes de planification puissent être génériques et indépendants du domaine d\'application, il est nécessaire de disposer d\'un langage standardisé pour décrire les problèmes de planification. Le **Planning Domain Definition Language (PDDL)** est devenu le langage de facto pour cette tâche. Un problème de planification en PDDL est spécifié en deux parties : un fichier de domaine et un fichier de problème.

#### Structure de PDDL

**1. Fichier de Domaine (domain.pddl)**

Ce fichier définit la physique du monde : les types d\'objets, les relations possibles et les actions disponibles. Ses principales sections sont  :

> (:requirements) : Spécifie les fonctionnalités de PDDL utilisées (ex: :strips pour la planification de base, :typing pour les objets typés).
>
> (:types) : Définit une hiérarchie de types pour les objets (ex: block, location).
>
> (:predicates) : Déclare les prédicats (propriétés et relations) avec leurs arguments typés. Par exemple, dans le monde des blocs :\
> Extrait de code\
> (on?b1 - block?b2 - block) ; le bloc?b1 est sur le bloc?b2\
> (clear?b - block) ; le dessus du bloc?b est libre\
> (on-table?b - block) ; le bloc?b est sur la table
>
> (:action) : Définit une action. Chaque action a :

:parameters : Les variables de l\'action avec leurs types.

:precondition : Une formule logique (souvent une conjonction de prédicats) qui doit être vraie pour que l\'action soit exécutable.

:effect : Une formule logique décrivant comment l\'état change. Elle est composée de littéraux positifs (ajouts) et négatifs (suppressions, via le connecteur not).\
Par exemple, l\'action de déplacer un bloc d\'un autre bloc vers la table :

Extrait de code\
(:action move-to-table\
:parameters (?b1 - block?b2 - block)\
:precondition (and (on?b1?b2) (clear?b1))\
:effect (and (on-table?b1) (clear?b2)\
(not (on?b1?b2)))\
)

**2. Fichier de Problème (problem.pddl)**

Ce fichier définit une instance spécifique du problème à résoudre dans le domaine défini précédemment  :

> (:domain) : Fait référence au nom du domaine correspondant.
>
> (:objects) : Liste les objets concrets qui existent dans cette instance du problème (ex: blockA, blockB, blockC).
>
> (:init) : Décrit l\'état initial en listant tous les prédicats qui sont vrais au départ.
>
> (:goal) : Décrit l\'état but comme une conjonction de prédicats qui doivent être rendus vrais.

L\'utilisation de PDDL permet de séparer la définition du domaine de la définition du problème, rendant les planificateurs **indépendants du domaine**. Un même planificateur peut résoudre un problème de logistique, de manipulation de blocs ou de synthèse chimique, tant que ces problèmes sont décrits en PDDL.

### 42.3.3 Algorithmes de Planification Classique

Une fois qu\'un problème est formalisé, un planificateur doit rechercher une solution. Il existe plusieurs approches pour organiser cette recherche, qui diffèrent par l\'espace dans lequel elles opèrent et la manière dont elles gèrent l\'ordre des actions.

#### Planification dans l\'Espace des États (State-Space Planning)

L\'approche la plus intuitive consiste à voir la planification comme un problème de recherche dans un graphe. Les **nœuds** de ce graphe sont les états complets du monde, et les **arcs** sont les actions qui permettent de passer d\'un état à un autre. Le but est de trouver un chemin de l\'état initial à un état qui satisfait les conditions du but. Cette recherche peut se faire dans deux directions.

**Recherche Progressive (Forward Search / Progression Planning)**

La recherche progressive explore l\'espace d\'états en partant de l\'état initial et en avançant vers le but.

> **Principe :** On commence avec l\'état initial. À chaque étape, on génère tous les états successeurs en appliquant toutes les actions dont les préconditions sont satisfaites dans l\'état courant. Le processus se poursuit jusqu\'à ce qu\'un état but soit atteint.
>
> **Avantages :** Cette approche est conceptuellement simple et permet d\'utiliser des algorithmes de recherche heuristique très puissants (comme A\* ou Greedy Best-First Search). Les heuristiques estiment la \"distance\" de l\'état courant au but, guidant la recherche de manière très efficace. Le planificateur Fast Forward (FF) est un exemple célèbre basé sur cette approche.
>
> **Inconvénients :** Le facteur de branchement peut être énorme, car de nombreuses actions peuvent être applicables dans un état donné, même si elles ne sont pas pertinentes pour atteindre le but. La recherche peut se perdre en explorant des séquences d\'actions inutiles.

**Recherche Régressive (Backward Search / Regression Planning)**

La recherche régressive travaille à l\'envers, en partant de la description du but et en remontant vers l\'état initial.

> **Principe :** On commence avec l\'ensemble des conditions du but. À chaque étape, on choisit une action qui est **pertinente** (c\'est-à-dire une action qui a pour effet de réaliser une des conditions du but non encore satisfaites). On calcule ensuite le **prédécesseur** de l\'état, qui est l\'ensemble des conditions qui devaient être vraies avant l\'action pour que, après son exécution, on se retrouve dans l\'état désiré. Ce prédécesseur devient le nouveau sous-but. La recherche se termine lorsqu\'on atteint un sous-but qui est satisfait par l\'état initial.
>
> **Avantages :** Le principal avantage est que l\'on ne considère que les actions pertinentes pour le but. Cela peut réduire considérablement le facteur de branchement et rendre la recherche beaucoup plus ciblée.
>
> **Inconvénients :** Le calcul de la régression d\'un but à travers une action est plus complexe que l\'application d\'une action en avant. De plus, la conception d\'heuristiques informatives est plus difficile.

#### Planification par Ordre Partiel (Partial-Order Planning / Plan-Space Planning)

Les approches de planification dans l\'espace des états s\'engagent sur un **ordre total** des actions à chaque étape de la recherche. Cependant, dans de nombreux problèmes, certaines actions sont indépendantes et peuvent être exécutées dans n\'importe quel ordre. Forcer un ordre prématurément peut conduire à des choix arbitraires qui bloquent la solution et nécessitent un backtracking coûteux. Ce problème, lié à l\'entrelacement d\'actions concurrentes, est une cause majeure de l\'**explosion combinatoire**.

La planification par ordre partiel (POP) aborde ce problème en adoptant le **principe du moindre engagement (Least Commitment)** : ne jamais imposer une contrainte (comme l\'ordre entre deux actions) à moins que cela ne soit absolument nécessaire.

**Recherche dans l\'Espace des Plans**

Au lieu de rechercher dans l\'espace des états du monde, la POP recherche dans l\'**espace des plans**. Un nœud dans cet espace n\'est pas un état, mais un **plan partiel**. Un plan partiel est une structure qui contient  :

> **Un ensemble d\'actions (étapes) :** Les actions qui composent le plan jusqu\'à présent.
>
> **Un ensemble de contraintes d\'ordre :** Des relations de précédence de la forme A≺B, signifiant que l\'action A doit être exécutée avant l\'action B. Ces contraintes définissent un ordre partiel sur les actions.
>
> **Un ensemble de liens causals :** Des relations de la forme Ap​B, indiquant que l\'action A est utilisée pour satisfaire la précondition p de l\'action B. Ce lien protège la condition p : aucune action ne doit venir s\'intercaler entre A et B si elle a pour effet ¬p.

**Algorithme POP**

L\'algorithme POP fonctionne en raffinant itérativement un plan partiel jusqu\'à ce qu\'il soit une solution complète. Il commence avec un plan minimal contenant deux pseudo-actions, Start (dont les effets sont l\'état initial) et Finish (dont les préconditions sont le but). L\'algorithme cherche ensuite à corriger les **défauts (flaws)** du plan jusqu\'à ce qu\'il n\'y en ait plus. Les deux principaux types de défauts sont :

> **Précondition ouverte :** Une précondition p d\'une action B dans le plan n\'est pas encore satisfaite (aucun lien causal ne pointe vers elle).

**Résolution (Établissement) :** On trouve une action A (soit déjà dans le plan, soit une nouvelle action à ajouter) qui a p comme effet. On ajoute alors le lien causal Ap​B et la contrainte d\'ordre A≺B.

> **Menace :** Une action C dans le plan a un effet ¬p qui pourrait annuler la condition protégée par un lien causal Ap​B. Cela se produit si C peut s\'exécuter entre A et B.

**Résolution (Déclobbering) :** On résout la menace en ajoutant une contrainte d\'ordre pour forcer C à s\'exécuter en dehors de l\'intervalle protégé.

**Promotion :** On ajoute la contrainte B≺C, forçant C à s\'exécuter après.

**Démotion :** On ajoute la contrainte C≺A, forçant C à s\'exécuter avant.

L\'algorithme est complet et correct : s\'il existe une solution, il la trouvera. En ne s\'engageant sur un ordre que pour résoudre des menaces, la POP évite une grande partie de la recherche inutile effectuée par les planificateurs à ordre total, surtout dans les problèmes où de nombreux sous-plans peuvent être entrelacés de manière flexible.

Le tableau suivant compare les caractéristiques clés de ces trois approches de planification.

**Tableau 42.3 : Comparaison des Approches de Planification**

  ------------------- ---------------------------------------------- --------------------------------------------- ------------------------------------ -----------------------------------------------------------------------------------------------
  Approche            Espace de Recherche                            Direction de la Recherche                     Gestion de l\'Ordre                  Avantage Principal

  **Progressive**     Espace des états (états du monde)              De l\'état initial vers le but                Ordre total                          Permet l\'utilisation d\'heuristiques d\'état très efficaces.

  **Régressive**      Espace des états (descriptions de sous-buts)   Du but vers l\'état initial                   Ordre total                          Ne considère que les actions pertinentes pour le but, réduisant le branchement.

  **Ordre Partiel**   Espace des plans (plans partiels)              Raffinement de plan (correction de défauts)   Ordre partiel (Moindre engagement)   Flexibilité maximale, évite le backtracking inutile lié à l\'ordre des actions indépendantes.
  ------------------- ---------------------------------------------- --------------------------------------------- ------------------------------------ -----------------------------------------------------------------------------------------------

En y regardant de plus près, le principe du moindre engagement qui sous-tend la planification par ordre partiel n\'est pas une idée isolée. Il s\'agit en fait d\'une méta-heuristique puissante et récurrente pour gérer la complexité dans de nombreux domaines de l\'IA. En recherche avec contraintes (CSP), par exemple, les stratégies de choix de variables consistent souvent à retarder les décisions dans les parties les moins contraintes de l\'espace de recherche. En apprentissage automatique, les méthodes bayésiennes, au lieu de s\'engager sur une seule valeur pour un paramètre, maintiennent une distribution de probabilité sur toutes les valeurs possibles, ne s\'engageant qu\'au moment de la prédiction. Dans tous ces cas, l\'idée est la même : éviter de prendre des décisions arbitraires et prématurées qui pourraient se révéler sous-optimales ou incorrectes, réduisant ainsi la nécessité d\'un backtracking coûteux. La planification par ordre partiel est donc une illustration particulièrement claire d\'un principe de conception de systèmes intelligents beaucoup plus général.

## Conclusion

Ce chapitre a traversé trois territoires fondamentaux du paysage de l\'intelligence artificielle : la représentation logique, le raisonnement probabiliste et la planification automatisée. Notre parcours a débuté dans le domaine ordonné et certain de la logique symbolique, où la connaissance est exprimée avec une précision mathématique et où le raisonnement s\'apparente à une preuve formelle. Nous avons vu comment la logique du premier ordre offre un langage riche pour décrire des mondes complexes d\'objets et de relations, et comment les moteurs d\'inférence, tels que ceux basés sur le chaînage avant et arrière, permettent d\'exploiter cette connaissance de manière systématique. L\'aboutissement de cette approche, le Web Sémantique, étend cette ambition de structuration de la connaissance à l\'échelle planétaire, en s\'appuyant sur les ontologies pour créer un Web de données sémantiquement riches et interopérables.

Nous avons ensuite pivoté vers le défi central de l\'IA : la gestion de l\'incertitude. En adoptant le cadre de la théorie des probabilités, nous avons montré comment le théorème de Bayes fournit un mécanisme rationnel pour mettre à jour nos croyances face à de nouvelles évidences. Cette idée simple est à la base de modèles extraordinairement puissants. Les réseaux bayésiens nous ont offert une méthode pour représenter et raisonner sur les dépendances complexes entre un grand nombre de variables, tandis que les modèles de Markov cachés nous ont fourni les outils pour analyser et décoder des séquences temporelles. À travers l\'étude des algorithmes d\'inférence, qu\'ils soient exacts comme l\'élimination de variables ou approximatifs comme l\'échantillonnage de Gibbs, nous avons touché au cœur du défi computationnel de l\'IA : la complexité de l\'inférence est souvent le principal goulot d\'étranglement, et le développement de méthodes d\'approximation efficaces est un moteur constant d\'innovation.

Enfin, nous avons relié la connaissance et le raisonnement à l\'action par le biais de la planification automatisée. En formalisant les problèmes en termes d\'états, d\'actions et d\'objectifs à l\'aide de langages comme PDDL, nous avons transformé la synthèse de plans en un problème de recherche algorithmique. Que ce soit par l\'exploration systématique de l\'espace des états ou par l\'approche plus flexible de la planification par ordre partiel, ces algorithmes incarnent la capacité d\'un agent à délibérer sur l\'avenir et à construire une séquence d\'opérations pour atteindre ses buts.

En conclusion, la capacité d\'un système à connaître et à raisonner n\'est pas monolithique. Elle repose sur une boîte à outils de formalismes et d\'algorithmes, chacun adapté à des facettes différentes du monde. La logique offre la rigueur pour les domaines structurés ; les probabilités fournissent la flexibilité pour naviguer dans l\'incertitude ; et la planification apporte le cadre pour l\'action intentionnelle. La maîtrise de ces trois paradigmes et de leurs interactions est essentielle pour comprendre les fondements théoriques de l\'intelligence artificielle et pour construire les systèmes complexes de demain.

# Chapitre 43 : Apprentissage Automatique (Machine Learning) - Fondements

## 43.1 Paradigmes d\'Apprentissage et Théorie de l\'Apprentissage Statistique (Biais-Variance)

L\'apprentissage automatique, ou *machine learning*, est une branche de l\'intelligence artificielle et de l\'informatique qui se concentre sur l\'utilisation de données et d\'algorithmes pour imiter la manière dont les humains apprennent, améliorant progressivement sa précision. Ce chapitre a pour vocation d\'établir les fondations théoriques et conceptuelles de ce domaine. Nous commencerons par définir les grands paradigmes qui structurent le champ de l\'apprentissage, avant de plonger dans le cadre formel de la théorie de l\'apprentissage statistique. C\'est au sein de ce cadre que nous introduirons le dilemme fondamental qui anime la quasi-totalité de la modélisation prédictive : le compromis biais-variance. La maîtrise de ces concepts est une condition préalable indispensable à la compréhension profonde des algorithmes qui seront détaillés dans les sections subséquentes.

### 43.1.1 Les Trois Grands Paradigmes de l\'Apprentissage

Le champ de l\'apprentissage automatique est traditionnellement segmenté en trois grandes catégories, différenciées par la nature des données disponibles et l\'objectif de l\'apprentissage : l\'apprentissage supervisé, l\'apprentissage non supervisé et l\'apprentissage par renforcement.

#### Apprentissage Supervisé : Apprendre par l\'Exemple

L\'apprentissage supervisé est le paradigme le plus courant et le plus étudié. Son principe est analogue à celui d\'un élève apprenant sous la direction d\'un professeur. L\'algorithme reçoit un ensemble de données d\'entraînement qui a été préalablement étiqueté par un expert humain ou par un processus automatisé. Chaque point de données est une paire constituée d\'un objet en entrée (un vecteur de caractéristiques) et d\'une sortie désirée (une étiquette ou une valeur cible).

Formellement, étant donné un ensemble de données d\'entraînement de n exemples {(xi​,yi​)}i=1n​, où xi​ est le vecteur de caractéristiques du i-ème exemple et yi​ est son étiquette correspondante, l\'objectif de l\'apprentissage supervisé est d\'apprendre une fonction de mappage f:X→Y. Cette fonction doit être capable de prédire l\'étiquette y pour un nouvel exemple x qui n\'a jamais été vu auparavant. La présence des étiquettes

yi​ constitue la \"supervision\" qui guide le processus d\'apprentissage de l\'algorithme.

Les tâches d\'apprentissage supervisé se divisent principalement en deux catégories :

> **La Classification** : L\'objectif est de prédire une étiquette de classe discrète. La variable de sortie yi​ appartient à un ensemble fini de catégories. Par exemple, un algorithme de classification pourrait être entraîné à distinguer les courriels \"spam\" des \"non-spam\", à identifier si une tumeur est \"bénigne\" ou \"maligne\", ou à reconnaître des chiffres manuscrits (de 0 à 9).
>
> **La Régression** : L\'objectif est de prédire une valeur de sortie continue. La variable de sortie yi​ est un nombre réel. Les applications typiques incluent la prédiction du prix d\'un logement en fonction de ses caractéristiques (superficie, nombre de chambres), l\'estimation de la demande pour un produit, ou la prévision de la température pour le lendemain.

Les applications de l\'apprentissage supervisé sont omniprésentes, allant de la reconnaissance d\'images et de la parole aux systèmes de diagnostic médical, en passant par la détection de transactions frauduleuses et l\'évaluation du risque de crédit.

#### Apprentissage Non Supervisé : Découvrir la Structure Cachée

Contrairement à l\'apprentissage supervisé, l\'apprentissage non supervisé travaille avec des données qui ne sont pas étiquetées. L\'algorithme est confronté à un ensemble de données

{xi​}i=1n​ et sa tâche est de découvrir des motifs, des structures ou des relations inhérentes aux données, sans aucun signal de sortie prédéfini pour le guider. Il s\'agit d\'une forme d\'apprentissage exploratoire, où la machine tente de \"donner un sens\" aux données par elle-même.

Les tâches principales de l\'apprentissage non supervisé incluent :

> **Le Clustering (ou Regroupement)** : Cette technique vise à partitionner un ensemble de données en groupes, ou *clusters*, de telle sorte que les points de données au sein d\'un même cluster soient plus similaires entre eux qu\'avec ceux des autres clusters. La notion de \"similarité\" est généralement définie par une métrique de distance. Les applications courantes sont la segmentation de la clientèle en marketing, le regroupement de documents par sujet, ou l\'identification de communautés dans les réseaux sociaux.
>
> **La Réduction de Dimensionnalité** : Lorsque les données sont décrites par un très grand nombre de caractéristiques (haute dimensionnalité), elles peuvent devenir difficiles à traiter et à visualiser. La réduction de dimensionnalité cherche à réduire le nombre de variables tout en préservant au maximum l\'information pertinente contenue dans les données. Cela peut aider à combattre le \"fléau de la dimensionnalité\", à réduire le bruit et à accélérer les algorithmes d\'apprentissage ultérieurs.
>
> **L\'Apprentissage de Règles d\'Association** : L\'objectif est de découvrir des relations intéressantes entre les variables dans de grands jeux de données. L\'exemple classique est l\'analyse du panier de la ménagère, où l\'on pourrait découvrir une règle telle que \"les clients qui achètent des couches sont également susceptibles d\'acheter de la bière\". Ces règles sont utiles pour les systèmes de recommandation et l\'optimisation des placements de produits.

#### Apprentissage par Renforcement : Apprendre par Essai-Erreur

L\'apprentissage par renforcement est un paradigme fondamentalement différent des deux autres. Il ne s\'appuie pas sur un jeu de données statique, mais sur l\'interaction dynamique entre un

**agent** et un **environnement**. L\'agent apprend à prendre une séquence de **actions** pour maximiser une **récompense** numérique cumulée au fil du temps.

Le processus se déroule comme suit : l\'agent observe l\'**état** actuel de l\'environnement, choisit une action à entreprendre, et l\'environnement répond en passant à un nouvel état et en fournissant une récompense (qui peut être positive, négative ou nulle). L\'objectif de l\'agent est d\'apprendre une

**politique** (une stratégie de prise de décision) qui lui indique quelle action choisir dans chaque état pour maximiser sa récompense totale à long terme.

Le dilemme central de l\'apprentissage par renforcement est le compromis entre l\'**exploration** (tenter de nouvelles actions pour découvrir leurs conséquences) et l\'**exploitation** (utiliser les actions qui sont déjà connues pour donner de bonnes récompenses). Un agent qui n\'explore jamais risque de rester coincé dans une stratégie sous-optimale, tandis qu\'un agent qui explore trop ne capitalise jamais sur ses connaissances acquises.

Ce paradigme est particulièrement bien adapté aux problèmes de contrôle et de prise de décision séquentielle. Ses applications les plus spectaculaires incluent la maîtrise de jeux complexes comme le Go (avec AlphaGo de DeepMind) et les jeux vidéo, ainsi que des domaines plus pratiques comme la robotique, la conduite autonome, la gestion de portefeuille financier et l\'optimisation de chaînes logistiques.

#### Synthèse et Paradigmes Hybrides

Bien que ces trois paradigmes couvrent la majorité des problèmes d\'apprentissage automatique, des approches hybrides existent. L\'**apprentissage semi-supervisé**, par exemple, est utilisé lorsque l\'on dispose d\'une grande quantité de données non étiquetées mais seulement d\'un petit nombre de données étiquetées, ce qui est souvent le cas en pratique car l\'étiquetage est coûteux. L\'algorithme tente alors d\'utiliser la structure des données non étiquetées pour améliorer l\'apprentissage à partir des données étiquetées. L\'

**apprentissage auto-supervisé** est une autre approche puissante où les étiquettes sont générées automatiquement à partir des données elles-mêmes (par exemple, en masquant une partie d\'une image et en demandant au modèle de la reconstruire), permettant d\'exploiter d\'énormes quantités de données non étiquetées pour apprendre des représentations utiles.

### 43.1.2 Le Cadre de la Théorie de l\'Apprentissage Statistique

Pour aborder l\'apprentissage automatique avec rigueur, il est essentiel de le formaliser dans un cadre mathématique. La théorie de l\'apprentissage statistique nous fournit ce cadre, en définissant le problème de l\'apprentissage comme un problème d\'inférence statistique à partir de données.

#### Le Problème de l\'Apprentissage comme Recherche de Fonction

Au cœur de l\'apprentissage supervisé se trouve la quête d\'une fonction prédictive. Nous postulons qu\'il existe une distribution de probabilité jointe inconnue,

P(X,Y), qui régit la relation entre les caractéristiques X et les étiquettes Y. L\'ensemble de données d\'entraînement {(xi​,yi​)}i=1n​ est considéré comme un échantillon de n réalisations indépendantes et identiquement distribuées (i.i.d.) tirées de cette distribution.

L\'objectif de l\'algorithme d\'apprentissage est de sélectionner, à partir d\'un ensemble d\'hypothèses H (un espace de fonctions possibles, par exemple l\'ensemble de toutes les fonctions linéaires), une fonction spécifique f\^​∈H qui approxime au mieux la \"vraie\" relation sous-jacente entre X et Y.

Pour évaluer la qualité d\'une fonction candidate f, nous introduisons une **fonction de perte** (ou fonction de coût), notée L(y,f(x)), qui quantifie l\'erreur commise par le modèle lorsqu\'il prédit f(x) alors que la vraie valeur est y. Pour la régression, une fonction de perte courante est l\'erreur quadratique,

L(y,f(x))=(y−f(x))2. Pour la classification, c\'est souvent la perte 0-1, L(y,f(x))=1y=f(x)​, où 1 est la fonction indicatrice.

Le but ultime n\'est pas de bien performer sur les données que nous avons vues, mais sur de nouvelles données invisibles. Nous cherchons donc à minimiser le **risque attendu** (ou erreur de généralisation), qui est l\'espérance de la fonction de perte sur l\'ensemble de la distribution de données P(X,Y)  :

R(f)=E(X,Y)∼P​=∫L(y,f(x))dP(x,y)

Ce risque attendu représente la véritable performance du modèle en généralisation.

#### La Minimisation du Risque Empirique (MRE)

Le problème fondamental est que la distribution P(X,Y) est inconnue. Par conséquent, le risque attendu R(f) est incalculable en pratique. La théorie de l\'apprentissage statistique propose une solution pragmatique : approximer le risque attendu par le

**risque empirique**, Remp​(f), qui est simplement l\'erreur moyenne calculée sur l\'ensemble d\'entraînement disponible  :

Remp​(f)=n1​i=1∑n​L(yi​,f(xi​))

L\'algorithme d\'apprentissage met alors en œuvre le principe de Minimisation du Risque Empirique (MRE). Il recherche dans l\'espace des hypothèses H la fonction f\^​ qui minimise ce risque empirique :

f\^​=argf∈Hmin​Remp​(f)

Ce principe est au cœur de nombreux algorithmes d\'apprentissage. Cependant, il recèle un piège fondamental. Le fait de minimiser l\'erreur sur l\'échantillon d\'entraînement ne garantit pas une minimisation de l\'erreur sur de nouvelles données. En effet, un modèle suffisamment complexe peut réduire le risque empirique à zéro en \"mémorisant\" simplement les données d\'entraînement, y compris leur bruit et leurs particularités aléatoires. Un tel modèle aura une performance désastreuse en généralisation. Ce phénomène, appelé surapprentissage (overfitting), est la manifestation de l\'échec de l\'hypothèse selon laquelle la minimisation du risque empirique est un bon proxy pour la minimisation du risque attendu. C\'est ici qu\'intervient le dilemme central de la modélisation.

### 43.1.3 Le Dilemme Central : Le Compromis Biais-Variance

Le compromis biais-variance est sans doute le concept le plus important de la théorie de l\'apprentissage statistique. Il fournit un cadre pour comprendre le surapprentissage et le sous-apprentissage et guide la sélection et la régularisation des modèles. Il stipule que l\'erreur de généralisation d\'un modèle peut être décomposée en trois composantes : le biais, la variance et une erreur irréductible.

#### Intuition et Analogie

Pour saisir intuitivement ces concepts, l\'analogie d\'une cible de tir à l\'arc est particulièrement éclairante. Imaginez qu\'un algorithme d\'apprentissage est un archer qui tente d\'atteindre le centre de la cible (la \"vraie\" fonction que nous essayons de modéliser). L\'archer tire plusieurs volées de flèches, chaque volée représentant l\'entraînement du modèle sur un jeu de données d\'entraînement différent (mais tiré de la même distribution).

> **Biais élevé, faible variance** : Les flèches sont toutes groupées, mais loin du centre. L\'archer est constant mais systématiquement à côté de la plaque. Le modèle est stable, mais ses hypothèses de base sont trop simplistes et ne capturent pas la réalité des données. C\'est le **sous-apprentissage** (*underfitting*).
>
> **Biais faible, variance élevée** : Les flèches sont dispersées tout autour du centre. En moyenne, l\'archer vise juste, mais chaque tir est imprévisible. Le modèle est très flexible et capable de capturer la structure des données, mais il est aussi très sensible aux fluctuations spécifiques de chaque jeu de données d\'entraînement, modélisant le bruit comme s\'il s\'agissait d\'un signal. C\'est le **surapprentissage** (*overfitting*).
>
> **Biais faible, faible variance** : Les flèches sont toutes groupées au centre de la cible. C\'est le modèle idéal, à la fois précis et stable.
>
> **Biais élevé, variance élevée** : Les flèches sont dispersées et loin du centre. C\'est le pire des cas, un modèle à la fois imprécis et instable.

#### Définitions Formelles

Formalisons ces concepts. Soit y=f(x)+ϵ la vraie relation, où ϵ est un bruit aléatoire de moyenne nulle et de variance σ2. Soit f\^​(x) le modèle entraîné sur un jeu de données d\'entraînement spécifique.

> Le **Biais** d\'un modèle en un point x est l\'écart entre la prédiction moyenne du modèle (sur tous les jeux de données d\'entraînement possibles) et la vraie valeur. Il mesure l\'erreur systématique du modèle due à ses hypothèses simplificatrices.\
> Biais\[f\^​(x)\]=E\[f\^​(x)\]−f(x)\
> \
> Un biais élevé signifie que le modèle, en moyenne, ne parvient pas à capturer la vraie relation, ce qui conduit au sous-apprentissage.29
>
> La **Variance** d\'un modèle en un point x mesure la variabilité de la prédiction du modèle pour différents jeux de données d\'entraînement. Elle quantifie la sensibilité du modèle aux fluctuations de l\'échantillon d\'apprentissage.\
> Variance\[f\^​(x)\]=E\[(f\^​(x)−E\[f\^​(x)\])2\]\
> \
> Une variance élevée signifie que le modèle est instable et change radicalement ses prédictions en fonction des données d\'entraînement spécifiques qu\'il a vues. C\'est la cause principale du surapprentissage.29

#### Décomposition Mathématique de l\'Erreur Quadratique Moyenne (MSE)

La puissance de ce cadre conceptuel réside dans le fait que, pour la fonction de perte quadratique, l\'erreur de généralisation attendue en un point x peut être décomposée mathématiquement en ces trois termes.

L\'erreur attendue est \$ \\mathbb{E}\[(y - \\hat{f}(x))\^2\] \$. En utilisant le fait que y=f(x)+ϵ et que E\[ϵ\]=0, et après quelques manipulations algébriques, on obtient la décomposition suivante  :

\$\$ \\mathbb{E}\[(y - \\hat{f}(x))\^2\] = \\underbrace{(\\mathbb{E}\[\\hat{f}(x)\] - f(x))\^2}*{\\text{(Biais)}\^2} + \\underbrace{\\mathbb{E}\[(\\hat{f}(x) - \\mathbb{E}\[\\hat{f}(x)\])\^2\]}*{\\text{Variance}} + \\underbrace{\\sigma\^2}\_{\\text{Erreur irréductible}} \$\$

Cette équation est fondamentale. Elle nous dit que l\'erreur totale d\'un modèle est la somme de trois composantes :

> **Le Biais au carré** : L\'erreur due aux hypothèses erronées du modèle.
>
> **La Variance** : L\'erreur due à la sensibilité excessive du modèle à l\'échantillon d\'entraînement.
>
> **L\'Erreur irréductible (σ2)** : Cette erreur est due au bruit inhérent au processus de génération de données lui-même. C\'est une limite inférieure à l\'erreur que n\'importe quel modèle, aussi parfait soit-il, peut atteindre. On ne peut pas la réduire.

#### Le Compromis et la Complexité du Modèle

Le dilemme vient du fait que le biais et la variance sont souvent antagonistes. Lorsque l\'on cherche à réduire l\'un, on a tendance à augmenter l\'autre. Cette relation est directement liée à la **complexité du modèle**.

> Un **modèle simple** (par exemple, une régression linéaire avec peu de caractéristiques) a peu de flexibilité. Il fera des hypothèses fortes sur les données. Il aura donc un **biais élevé** (il ne pourra pas capturer une structure complexe) mais une **faible variance** (il ne changera pas beaucoup d\'un jeu de données à l\'autre). Il est sujet au sous-apprentissage.
>
> Un **modèle complexe** (par exemple, un arbre de décision très profond ou un polynôme de haut degré) a une grande flexibilité. Il peut s\'adapter très finement aux données d\'entraînement. Il aura donc un **biais faible** (il peut capturer des structures très complexes) mais une **variance élevée** (il capturera aussi le bruit, le rendant très instable). Il est sujet au surapprentissage.

L\'objectif de l\'apprentissage automatique n\'est pas de minimiser le biais ou la variance isolément, mais de trouver le \"point idéal\" (*sweet spot*) de complexité du modèle qui minimise l\'erreur totale (Biais² + Variance). Ce compromis est le fil conducteur qui justifie la plupart des techniques que nous allons explorer. La régularisation, par exemple, consiste à introduire volontairement du biais dans un modèle complexe pour réduire drastiquement sa variance. Les méthodes d\'ensemble, comme nous le verrons, sont des stratégies sophistiquées pour gérer ce compromis en combinant plusieurs modèles. La validation croisée est la technique qui nous permettra d\'estimer cette erreur de généralisation et de trouver le bon niveau de complexité. Ainsi, la quête du modèle optimal est une quête d\'équilibre dans ce dilemme fondamental.

## 43.2 Apprentissage Supervisé

Forts de notre compréhension des fondements théoriques, nous plongeons maintenant au cœur des algorithmes qui constituent la boîte à outils de l\'apprentissage supervisé. Cette section est consacrée à l\'étude détaillée des modèles qui apprennent à partir de données étiquetées. Nous allons explorer une gamme d\'approches, des modèles linéaires interprétables, qui forment la base de la modélisation statistique, aux méthodes non linéaires plus complexes et puissantes comme les machines à vecteurs de support et les méthodes d\'ensemble. Pour chaque algorithme, nous adopterons une démarche systématique : nous commencerons par l\'intuition conceptuelle de son fonctionnement, nous poursuivrons avec une formalisation rigoureuse de ses fondements mathématiques, et nous conclurons par une analyse de ses aspects pratiques, incluant ses hyperparamètres clés, ses avantages et ses inconvénients. Cette exploration révélera comment chaque famille d\'algorithmes propose une stratégie distincte pour naviguer le compromis biais-variance et résoudre les tâches de régression et de classification.

### 43.2.1 Régression et Régularisation

Les modèles de régression sont les piliers de la modélisation prédictive. Leur objectif est de modéliser la relation entre une ou plusieurs variables indépendantes (ou caractéristiques) et une variable dépendante continue. Nous commencerons par le modèle le plus fondamental, la régression linéaire, avant d\'aborder son adaptation à la classification, la régression logistique. Enfin, nous introduirons la régularisation, une technique cruciale pour contrôler la complexité de ces modèles et améliorer leur capacité de généralisation.

#### Régression Linéaire

**Intuition et Modèle**

L\'intuition de la régression linéaire est de trouver la \"meilleure\" ligne droite (dans le cas d\'une seule variable prédictive) ou le meilleur hyperplan (dans le cas de plusieurs variables) qui passe à travers un nuage de points de données. Ce modèle suppose que la relation entre la variable dépendante

y et les variables indépendantes x1​,x2​,...,xp​ est linéaire.

Le modèle de régression linéaire simple (une seule variable prédictive x) s\'écrit :

yi​=β0​+β1​xi​+ϵi​

où :

> yi​ est la valeur de la variable dépendante pour la i-ème observation.
>
> xi​ est la valeur de la variable indépendante pour la i-ème observation.
>
> β0​ est l\'ordonnée à l\'origine (intercept), la valeur prédite de y lorsque x=0.
>
> β1​ est la pente (slope), qui représente le changement moyen de y pour une augmentation d\'une unité de x.
>
> ϵi​ est le terme d\'erreur (ou résidu) pour la i-ème observation, qui capture toute la variabilité de y non expliquée par la relation linéaire avec x. On suppose que ces erreurs sont indépendantes, de moyenne nulle et de variance constante σ2.

Ce modèle se généralise à la **régression linéaire multiple** avec p variables prédictives  :

\$\$ y_i = \\beta_0 + \\beta_1 x\_{i1} + \\beta_2 x\_{i2} + \\dots + \\beta_p x\_{ip} + \\epsilon_i = \\beta_0 + \\sum\_{j=1}\^{p} \\beta_j x\_{ij} + \\epsilon_i \$\$

En utilisant la notation matricielle, ce système d\'équations pour n observations peut être écrit de manière compacte 40 :

Y=Xβ+ϵ

où :

> Y est un vecteur de taille n×1 des observations de la variable dépendante.
>
> X est la matrice de conception (design matrix) de taille n×(p+1), où chaque ligne est une observation et chaque colonne une variable prédictive (la première colonne est remplie de 1 pour correspondre au coefficient β0​).
>
> β est un vecteur de taille (p+1)×1 des coefficients du modèle.
>
> ϵ est un vecteur de taille n×1 des termes d\'erreur.

**Fonction de Coût et Solution des Moindres Carrés Ordinaires (MCO)**

Le défi est de trouver les \"meilleurs\" coefficients β qui ajustent le modèle aux données. La méthode la plus courante est celle des **Moindres Carrés Ordinaires** (MCO, ou *Ordinary Least Squares*, OLS). L\'idée est de minimiser la **Somme des Carrés des Résidus** (SCR, ou *Sum of Squared Residuals*, SSR), qui est la somme des carrés des différences entre les valeurs observées yi​ et les valeurs prédites par le modèle y\^​i​=Xβ\^​.

La fonction de coût (ou de perte) est donc :

\$\$ L(\\beta) = \\sum\_{i=1}\^{n} (y_i - \\hat{y}i)\^2 = \\sum{i=1}\^{n} \\left(y_i - \\left(\\beta_0 + \\sum\_{j=1}\^{p} \\beta_j x\_{ij}\\right)\\right)\^2 = \|Y - X\\beta\|\^2_2 \$\$

Pour trouver le vecteur β\^​ qui minimise cette fonction, nous devons calculer le gradient de L(β) par rapport à β et l\'égaler à zéro.

\$\$ \\nabla\_{\\beta} L(\\beta) = \\nabla\_{\\beta} (Y - X\\beta)\^T(Y - X\\beta) = \\nabla\_{\\beta} (Y\^T Y - 2\\beta\^T X\^T Y + \\beta\^T X\^T X \\beta) \$\$\$\$ \\nabla\_{\\beta} L(\\beta) = -2X\^T Y + 2X\^T X \\beta\$\$

En posant le gradient à zéro pour trouver le minimum :

−2XTY+2XTXβ\^​=0

XTXβ\^​=XTY

Ces équations sont connues sous le nom d\'équations normales. Si la matrice XTX est inversible (ce qui est le cas si les variables prédictives ne sont pas parfaitement colinéaires), nous pouvons isoler β\^​ pour obtenir la solution analytique de l\'estimateur des moindres carrés 40 :

β\^​=(XTX)−1XTY

Cet estimateur est le meilleur estimateur linéaire non biaisé (BLUE) sous certaines hypothèses (théorème de Gauss-Markov).

**Avantages et Inconvénients**

> **Avantages** : Très simple, rapide à calculer, et hautement interprétable. Chaque coefficient βj​ quantifie l\'impact de la variable xj​ sur y, en maintenant les autres variables constantes. C\'est un excellent modèle de base.
>
> **Inconvénients** : L\'hypothèse de linéarité est forte et souvent violée en pratique. Il est sensible aux valeurs aberrantes (outliers) en raison de la nature quadratique de la fonction de coût. Sa performance se dégrade en présence de multicolinéarité (variables prédictives fortement corrélées entre elles).

#### Régression Logistique

**Intuition : De la Régression à la Classification**

La régression logistique est un algorithme fondamental de classification, malgré son nom. Elle adapte les principes de la régression linéaire pour prédire une sortie catégorielle binaire (par exemple, 0 ou 1, \"oui\" ou \"non\"). L\'idée centrale est de ne pas modéliser la sortie binaire directement, mais de modéliser la

**probabilité** que la sortie appartienne à une classe particulière.

Pour ce faire, on utilise une combinaison linéaire des caractéristiques, comme en régression linéaire (z=Xβ), mais on passe ensuite cette sortie linéaire à travers une fonction non linéaire qui la \"comprime\" dans l\'intervalle \$\$, la rendant interprétable comme une probabilité.

**Formalisation Mathématique : La Fonction Sigmoïde et la Fonction de Coût**

La fonction utilisée pour cette transformation est la **fonction sigmoïde** (ou fonction logistique)  :

σ(z)=1+e−z1​

Cette fonction a une forme en \"S\" caractéristique. Lorsque z→∞, σ(z)→1. Lorsque z→−∞, σ(z)→0.

La sortie du modèle de régression logistique est donc la probabilité estimée que l\'observation appartienne à la classe positive (classe 1) :

p\^​=P(Y=1∣X)=σ(Xβ)=1+e−Xβ1​

La probabilité d\'appartenir à la classe négative (classe 0) est simplement P(Y=0∣X)=1−p\^​.

La fonction de coût des moindres carrés (SSR) n\'est pas appropriée ici, car elle mènerait à un problème d\'optimisation non convexe avec de multiples minima locaux. À la place, la fonction de coût pour la régression logistique est dérivée du principe du maximum de vraisemblance (Maximum Likelihood Estimation, MLE). La vraisemblance de l\'ensemble des données est la probabilité d\'observer les étiquettes yi​ étant donné les caractéristiques X et les paramètres β. Pour une seule observation, elle s\'écrit P(yi​∣xi​)=p\^​iyi​​(1−p\^​i​)1−yi​. Pour l\'ensemble des données (supposées i.i.d.), la vraisemblance est le produit :

L(β)=i=1∏n​p\^​iyi​​(1−p\^​i​)1−yi​

Maximiser la vraisemblance est équivalent à minimiser le négatif de la log-vraisemblance. Cela nous donne la fonction de coût connue sous le nom d\'entropie croisée binaire (Binary Cross-Entropy) ou log-loss 44 :

J(β)=−n1​i=1∑n​\[yi​log(p\^​i​)+(1−yi​)log(1−p\^​i​)\]

Cette fonction de coût a deux propriétés désirables : elle est convexe, garantissant que nous pouvons trouver un minimum global, et elle pénalise lourdement les prédictions qui sont à la fois fausses et très confiantes (par exemple, prédire une probabilité de 0.99 pour la classe 0 alors que la vraie classe est 1).

**Algorithme d\'Apprentissage : La Descente de Gradient**

Contrairement à la régression linéaire, il n\'existe pas de solution analytique pour minimiser J(β). Nous devons utiliser une méthode d\'optimisation itérative. La plus courante est la **descente de gradient** (*Gradient Descent*). L\'algorithme met à jour les paramètres

β de manière itérative dans la direction opposée du gradient de la fonction de coût :

> Initialiser les paramètres β (par exemple, à zéro).
>
> Répéter jusqu\'à convergence :\
> \
> βj​:=βj​−η∂βj​∂J(β)​\
> \
> où η est le taux d\'apprentissage (learning rate), un hyperparamètre qui contrôle la taille des pas. Le gradient de la fonction de coût pour le paramètre βj​ est :\
> \$\$ \\frac{\\partial J(\\beta)}{\\partial \\beta_j} = \\frac{1}{n} \\sum\_{i=1}\^{n} (\\sigma(x_i\^T \\beta) - y_i) x\_{ij} = \\frac{1}{n} \\sum\_{i=1}\^{n} (\\hat{p}i - y_i) x{ij} \$\$\
> La mise à jour se fait donc en fonction de la moyenne des erreurs de prédiction, pondérée par les valeurs des caractéristiques.

#### Régularisation : Combattre le Surapprentissage

Les modèles linéaires, en particulier lorsqu\'ils ont de nombreuses caractéristiques, peuvent souffrir de surapprentissage. Les coefficients β peuvent atteindre des valeurs très élevées pour s\'adapter au bruit dans les données d\'entraînement, ce qui nuit à la généralisation. La régularisation est une technique qui combat ce phénomène en ajoutant un terme de pénalité à la fonction de coût pour décourager les coefficients d\'être trop grands. C\'est une méthode explicite pour contrôler la complexité du modèle et gérer le compromis biais-variance.

**Régularisation L2 (Ridge Regression)**

La régularisation L2, utilisée dans la **régression de Ridge**, ajoute un terme de pénalité proportionnel à la somme des carrés des coefficients. La fonction de coût devient :

\$\$ L(\\beta){\\text{Ridge}} = \\underbrace{\|Y - X\\beta\|\^2_2}{\\text{Terme d\'erreur (SSR)}} + \\underbrace{\\alpha \\sum\_{j=1}\^{p} \\beta_j\^2}\_{\\text{Pénalité L2}} \$\$

> **Effet** : Cette pénalité, aussi appelée \"weight decay\", pousse tous les coefficients à se rapprocher de zéro, mais sans jamais les atteindre exactement. Elle réduit la magnitude des coefficients, ce qui rend le modèle moins sensible aux données d\'entraînement (réduction de la variance). Elle est particulièrement efficace lorsque les variables prédictives sont fortement corrélées (multicolinéarité), car elle répartit le poids entre elles.
>
> **Hyperparamètre α** : Le paramètre de régularisation α≥0 contrôle la force de la pénalité. Si α=0, on retrouve la régression linéaire MCO. Si α→∞, tous les coefficients tendent vers zéro, résultant en un modèle très simple (biais élevé). Le choix de α est crucial et se fait généralement par validation croisée.

**Régularisation L1 (Lasso Regression)**

La régularisation L1, utilisée dans la **régression Lasso** (Least Absolute Shrinkage and Selection Operator), ajoute un terme de pénalité proportionnel à la somme des valeurs absolues des coefficients. La fonction de coût devient :

\$\$ L(\\beta){\\text{Lasso}} = \\underbrace{\|Y - X\\beta\|\^2_2}{\\text{Terme d\'erreur (SSR)}} + \\underbrace{\\alpha \\sum\_{j=1}\^{p} \|\\beta_j\|}\_{\\text{Pénalité L1}} \$\$

> **Effet** : La pénalité L1 a une propriété remarquable : elle peut réduire certains coefficients exactement à zéro. Cela signifie que la régression Lasso effectue une **sélection de variables** automatique, en éliminant les caractéristiques les moins pertinentes du modèle. Elle produit des modèles\
> **parcimonieux** (*sparse*), ce qui les rend plus simples et plus interprétables.
>
> **Comparaison avec Ridge** : Alors que Ridge est utile pour gérer la multicolinéarité en gardant toutes les variables, Lasso est plus agressif et en sélectionnera une parmi un groupe de variables corrélées, mettant les autres à zéro.

Ces techniques de régularisation peuvent également être appliquées à la régression logistique, où le terme de pénalité est ajouté à la fonction de coût d\'entropie croisée. Le choix entre L1 et L2 dépend de l\'objectif : si l\'on suspecte que de nombreuses caractéristiques sont inutiles et que l\'on souhaite un modèle plus simple, Lasso (L1) est un excellent choix. Si l\'on pense que toutes les caractéristiques sont potentiellement utiles et que l\'on veut surtout stabiliser le modèle, Ridge (L2) est souvent préférable.

### 43.2.2 Classification (Algorithmes Classiques)

Au-delà des modèles linéaires, il existe une riche famille d\'algorithmes de classification, chacun reposant sur des principes et des hypothèses différents. Nous allons maintenant explorer trois des approches les plus fondamentales et les plus influentes : les k-plus proches voisins (un modèle basé sur l\'instance), les classifieurs bayésiens naïfs (un modèle probabiliste) et les arbres de décision (un modèle basé sur des règles).

#### k-Plus Proches Voisins (k-NN)

**Intuition : La Classification par Proximité**

L\'algorithme des k-plus proches voisins (k-NN) est l\'un des algorithmes d\'apprentissage les plus simples et les plus intuitifs. Son principe repose sur l\'adage \"Dis-moi qui sont tes voisins, et je te dirai qui tu es\". Pour classer un nouveau point de données, l\'algorithme regarde simplement les

k points de données les plus proches de lui dans l\'ensemble d\'entraînement et lui assigne la classe qui est la plus fréquente parmi ces k voisins.

k-NN est un exemple d\'**apprentissage basé sur l\'instance** ou d\'**apprentissage paresseux** (*lazy learning*). Il est qualifié de \"paresseux\" car il n\'y a pas de véritable phase d\'entraînement où un modèle est explicitement construit. L\'algorithme se contente de mémoriser l\'intégralité de l\'ensemble d\'entraînement. Tout le travail de calcul se fait au moment de la prédiction.

**Algorithme et Composantes Clés**

Le processus de prédiction pour un nouveau point xnew​ est le suivant :

> **Choisir la valeur de k** : L\'hyperparamètre k, le nombre de voisins à considérer, est défini par l\'utilisateur.
>
> **Calculer les distances** : Calculer la distance entre xnew​ et chaque point xi​ de l\'ensemble d\'entraînement. La métrique de distance la plus courante est la **distance euclidienne**, mais d\'autres métriques comme la **distance de Manhattan** peuvent être utilisées en fonction de la nature des données.
>
> **Identifier les k plus proches voisins** : Trier les points de l\'ensemble d\'entraînement en fonction de leur distance à xnew​ et sélectionner les k points les plus proches.
>
> **Effectuer un vote majoritaire** : Pour une tâche de classification, la classe de xnew​ est déterminée par la classe la plus représentée parmi ses k plus proches voisins. Pour une tâche de régression, la prédiction serait la moyenne des valeurs des\
> k voisins.

**Hyperparamètres et Considérations Pratiques**

> **Le choix de k** : C\'est l\'hyperparamètre le plus critique. Il contrôle directement le compromis biais-variance.

Un **petit k** (par ex., k=1) conduit à un modèle très flexible et complexe. La frontière de décision sera très irrégulière, s\'adaptant aux particularités locales des données. Cela résulte en une **faible biais** mais une **variance élevée**, rendant le modèle sensible au bruit et sujet au surapprentissage.

Un **grand k** lisse la frontière de décision, car la prédiction est basée sur une plus grande région de l\'espace. Cela conduit à un modèle plus simple, avec un **biais élevé** mais une **faible variance**.

Le choix optimal de k se fait généralement par validation croisée. Une règle empirique courante est de choisir k=n​, où n est le nombre d\'échantillons d\'entraînement.

> **Métrique de distance** : Le choix de la métrique de distance dépend du problème. La distance euclidienne est un bon point de départ pour les caractéristiques continues. La normalisation des caractéristiques (par exemple, en les mettant à l\'échelle entre 0 et 1) est presque toujours nécessaire pour que les caractéristiques ayant de grandes échelles ne dominent pas le calcul de la distance.
>
> **Avantages** :

Simple à comprendre et à mettre en œuvre.

Aucune phase d\'entraînement, ce qui le rend rapide à \"adapter\" si de nouvelles données arrivent (il suffit de les ajouter au jeu de données mémorisé).

Naturellement non linéaire, il peut apprendre des frontières de décision complexes.

> **Inconvénients** :

**Coût de calcul élevé à la prédiction** : Il faut calculer les distances avec tous les points de l\'ensemble d\'entraînement pour chaque nouvelle prédiction, ce qui peut être très lent pour de grands jeux de données.

**Besoin de stockage élevé** : L\'algorithme doit stocker l\'intégralité du jeu de données.

**La malédiction de la dimensionnalité** : En haute dimension, la notion de \"proximité\" devient moins significative. La distance entre n\'importe quelle paire de points tend à devenir uniforme, ce qui dégrade considérablement les performances de k-NN.

#### Classifieurs Bayésiens Naïfs (Naive Bayes)

**Intuition : La Classification par Probabilités**

Les classifieurs bayésiens naïfs sont une famille de modèles probabilistes simples mais étonnamment efficaces. L\'intuition est d\'utiliser le **théorème de Bayes** pour calculer la probabilité qu\'une observation appartienne à une certaine classe, étant donné les valeurs de ses caractéristiques. L\'observation est ensuite assignée à la classe qui a la plus haute probabilité.

**Fondements Mathématiques : Le Théorème de Bayes et l\'Hypothèse \"Naïve\"**

Le **théorème de Bayes** est une pierre angulaire de la théorie des probabilités. Il relie la probabilité conditionnelle d\'un événement à sa probabilité conditionnelle inverse. Dans le contexte de la classification, il s\'énonce comme suit  :

P(y∣x1​,...,xp​)=P(x1​,...,xp​)P(x1​,...,xp​∣y)P(y)​

où :

> P(y∣x1​,...,xp​) est la **probabilité a posteriori** : la probabilité que l\'observation appartienne à la classe y étant donné ses caractéristiques X=(x1​,...,xp​). C\'est ce que nous voulons calculer.
>
> P(x1​,...,xp​∣y) est la **vraisemblance** (*likelihood*) : la probabilité d\'observer les caractéristiques X si l\'observation appartient à la classe y.
>
> P(y) est la **probabilité a priori** (*prior*) : la probabilité de la classe y avant de voir les données.
>
> P(x1​,...,xp​) est l\'**évidence** (*evidence*) : la probabilité marginale d\'observer les caractéristiques X.

Pour classer une nouvelle observation, nous calculons la probabilité a posteriori pour chaque classe possible et choisissons la classe qui maximise cette probabilité. Comme l\'évidence P(X) est la même pour toutes les classes, elle agit comme un facteur de normalisation et peut être ignorée lors de la comparaison. La règle de décision devient donc :

y\^​=argymax​P(x1​,...,xp​∣y)P(y)

Le calcul de la vraisemblance P(x1​,...,xp​∣y) reste difficile car il nécessite d\'estimer la distribution jointe de toutes les caractéristiques. C\'est ici qu\'intervient l\'hypothèse \"naïve\" : nous supposons que toutes les caractéristiques sont conditionnellement indépendantes étant donné la classe.57 Mathématiquement, cela signifie :

P(x1​,...,xp​∣y)=i=1∏p​P(xi​∣y)

Cette hypothèse est \"naïve\" car elle est rarement vraie en pratique (par exemple, dans un texte, la présence du mot \"machine\" rend la présence du mot \"learning\" plus probable). Cependant, elle simplifie radicalement le problème : il suffit maintenant d\'estimer la probabilité de chaque caractéristique individuellement pour chaque classe, ce qui est beaucoup plus facile à faire à partir des données d\'entraînement.

La règle de décision finale devient :

y\^​=argymax​P(y)i=1∏p​P(xi​∣y)

Les probabilités a priori P(y) et les vraisemblances conditionnelles P(xi​∣y) sont estimées à partir des fréquences observées dans l\'ensemble d\'entraînement.

**Variantes de Naive Bayes**

La manière dont les vraisemblances P(xi​∣y) sont modélisées dépend du type de données :

> **Gaussian Naive Bayes** : Utilisé lorsque les caractéristiques sont continues. On suppose que pour une classe y donnée, la valeur de la caractéristique xi​ suit une distribution gaussienne (normale). Le modèle apprend la moyenne μiy​ et la variance σiy2​ de chaque caractéristique i pour chaque classe y à partir des données d\'entraînement.
>
> **Multinomial Naive Bayes** : Typiquement utilisé pour la classification de texte, où les caractéristiques représentent des comptes de mots ou des fréquences (par exemple, le nombre de fois qu\'un mot apparaît dans un document). Il modélise la probabilité d\'observer un certain nombre de comptages pour chaque mot du vocabulaire.
>
> **Bernoulli Naive Bayes** : Une autre variante pour les données textuelles, mais qui travaille avec des caractéristiques binaires (présence ou absence d\'un mot), plutôt qu\'avec leurs fréquences.

**Avantages et Inconvénients**

> **Avantages** : Extrêmement rapide à entraîner et à prédire. Il fonctionne bien même avec de petits jeux de données et en haute dimension. Malgré son hypothèse naïve, il est souvent étonnamment performant, en particulier pour la classification de texte (filtrage de spam, analyse de sentiments).
>
> **Inconvénients** : L\'hypothèse d\'indépendance conditionnelle est une forte limitation. Si cette hypothèse est fortement violée, ses performances peuvent être médiocres. De plus, il est connu pour être un mauvais estimateur de probabilités ; bien que la classe prédite soit souvent correcte, les probabilités elles-mêmes ne sont pas fiables.

#### Arbres de Décision

**Intuition : La Classification par Questions Successives**

Les arbres de décision sont des modèles non paramétriques qui prédisent la valeur d\'une variable cible en apprenant des règles de décision simples inférées à partir des caractéristiques des données. Leur structure est analogue à un organigramme, où chaque nœud interne représente un \"test\" sur une caractéristique, chaque branche représente le résultat du test, et chaque nœud feuille représente une étiquette de classe. Pour classer une nouvelle observation, on la fait descendre dans l\'arbre depuis la racine, en suivant le chemin déterminé par les résultats des tests à chaque nœud, jusqu\'à atteindre une feuille qui donne la prédiction.

Leur principal attrait réside dans leur grande **interprétabilité**. La logique de décision est explicite et peut être facilement visualisée et comprise par des non-experts.

**Algorithme de Construction (ID3/C4.5)**

Les arbres de décision sont généralement construits de manière récursive de haut en bas, selon une approche gloutonne (*greedy*). L\'algorithme le plus célèbre est **ID3** (*Iterative Dichotomiser 3*), développé par Ross Quinlan. Son successeur,

**C4.5**, apporte plusieurs améliorations clés.

Le principe de base est le suivant :

> Commencer avec l\'ensemble des données d\'entraînement à la racine de l\'arbre.
>
> À chaque nœud, sélectionner la \"meilleure\" caractéristique pour diviser les données.
>
> Créer une branche pour chaque valeur possible de cette caractéristique.
>
> Répartir les données dans les branches correspondantes.
>
> Répéter le processus récursivement pour chaque branche, en utilisant uniquement les données qui atteignent cette branche.
>
> Arrêter la récursion lorsqu\'un nœud ne contient que des observations d\'une seule classe (nœud pur) ou si aucun autre attribut ne permet d\'améliorer la classification.

**Critère de Division : Entropie et Gain d\'Information**

La question cruciale est : comment choisir la \"meilleure\" caractéristique à chaque étape? La meilleure caractéristique est celle qui divise les données en sous-ensembles les plus \"purs\" ou les plus homogènes possible. Pour mesurer cette pureté, ID3 utilise des concepts de la théorie de l\'information : l\'**entropie** et le **gain d\'information**.

L\'**entropie** d\'un ensemble de données S mesure son degré d\'impureté ou de désordre par rapport aux étiquettes de classe. Si un ensemble est parfaitement pur (tous les exemples appartiennent à la même classe), son entropie est de 0. Si les classes sont parfaitement mélangées (par exemple, 50% de classe A et 50% de classe B), son entropie est maximale (1). La formule est  :

H(S)=−c∈C∑​p(c)log2​p(c)

où C est l\'ensemble des classes et p(c) est la proportion d\'exemples de la classe c dans l\'ensemble S.

Le **gain d\'information** mesure la réduction attendue de l\'entropie après avoir divisé l\'ensemble S en utilisant une caractéristique A. C\'est la différence entre l\'entropie avant la division et l\'entropie moyenne pondérée des sous-ensembles après la division  :

Gain(S,A)=H(S)−v∈Valeurs(A)∑​∣S∣∣Sv​∣​H(Sv​)

où Valeurs(A) est l\'ensemble des valeurs possibles de la caractéristique A, et Sv​ est le sous-ensemble de S pour lequel la caractéristique A a la valeur v.

L\'algorithme ID3 choisit à chaque nœud la caractéristique qui maximise le gain d\'information.

**Améliorations de C4.5 : Ratio de Gain et Données Continues**

L\'algorithme ID3 a un défaut : le gain d\'information a un biais en faveur des caractéristiques qui ont un grand nombre de valeurs distinctes (par exemple, un identifiant unique pour chaque client). Pour corriger ce biais, son successeur **C4.5** utilise le **ratio de gain** (*Gain Ratio*). Le ratio de gain normalise le gain d\'information par l\'entropie de la division elle-même (appelée

*Split Information*), pénalisant ainsi les divisions qui créent de nombreuses petites branches.

De plus, C4.5 peut gérer les caractéristiques numériques continues en les discrétisant dynamiquement. Il trouve le meilleur seuil de division pour transformer une variable continue en une variable binaire.

**Surapprentissage et Élagage (Pruning)**

Les arbres de décision, s\'ils sont laissés à eux-mêmes, ont une forte tendance à croître jusqu\'à ce que chaque feuille soit pure. Cela conduit à des arbres très complexes qui s\'adaptent parfaitement aux données d\'entraînement, y compris au bruit. C\'est un cas classique de haute variance et de surapprentissage.

Pour éviter cela, on utilise une technique appelée **élagage** (*pruning*).

> **Pré-élagage** (*Pre-pruning*) : Arrêter la croissance de l\'arbre plus tôt, en utilisant des critères d\'arrêt comme une profondeur maximale, un nombre minimum d\'échantillons par feuille, ou un seuil minimum de gain d\'information.
>
> **Post-élagage** (*Post-pruning*) : Construire l\'arbre complet, puis supprimer récursivement les branches qui ne fournissent pas de puissance prédictive significative sur un ensemble de validation.

### 43.2.3 Machines à Vecteurs de Support (SVM)

Les Machines à Vecteurs de Support (SVM, de l\'anglais *Support Vector Machines*) sont une classe de classifieurs supervisés puissants et polyvalents, capables de réaliser des classifications linéaires et non linéaires, ainsi que de la régression. L\'intuition fondamentale qui les distingue des autres classifieurs, comme la régression logistique, est qu\'elles ne cherchent pas seulement à trouver une frontière de séparation entre les classes, mais à trouver la *meilleure* frontière possible, celle qui est la plus robuste à de nouvelles données.

#### Intuition Géométrique : La Maximisation de la Marge

Imaginons un problème de classification binaire avec des données qui sont linéairement séparables. Il existe une infinité d\'hyperplans (de droites en 2D) qui peuvent séparer parfaitement les deux classes. Lequel choisir? La régression logistique, par exemple, en choisirait un parmi cette infinité. L\'idée clé des SVM est de choisir l\'hyperplan qui est le plus éloigné possible des points de données les plus proches de chaque classe.

Cet hyperplan est appelé l\'**hyperplan à marge maximale**. La **marge** est définie comme la \"rue\" ou la zone vide entre les deux classes, délimitée par l\'hyperplan de séparation et les points les plus proches de chaque côté. Les SVM cherchent à rendre cette rue aussi large que possible. L\'intuition est qu\'un hyperplan avec une grande marge est plus robuste et généralisera mieux, car il est moins sensible à la position exacte des points d\'entraînement.

Les points de données qui se trouvent sur les bords de cette marge sont appelés les **vecteurs de support**. Ce sont les points les plus difficiles à classer, et ils sont les seuls qui \"supportent\" ou définissent la position et l\'orientation de l\'hyperplan. Si l\'on déplaçait n\'importe quel autre point (non-support), l\'hyperplan de marge maximale ne changerait pas.

#### Formalisation Mathématique

**Le Cas Linéairement Séparable (Marge Dure)**

Considérons un ensemble de données d\'entraînement {(xi​,yi​)}i=1n​, où xi​∈Rp et yi​∈{−1,1}. Un hyperplan de séparation est défini par l\'équation w⋅x+b=0, où w est le vecteur normal à l\'hyperplan et b est le biais.

Nous voulons que tous les points de la classe +1 soient d\'un côté de l\'hyperplan et tous les points de la classe -1 de l\'autre. Plus précisément, nous pouvons imposer les contraintes suivantes :

w⋅xi​+b≥+1pour yi​=+1

w⋅xi​+b≤−1pour yi​=−1

Ces deux contraintes peuvent être combinées en une seule :

yi​(w⋅xi​+b)≥1∀i

La largeur de la marge est égale à ∥w∥2​. Maximiser la marge est donc équivalent à minimiser ∥w∥, ou, pour des raisons de commodité mathématique, à minimiser 21​∥w∥2.

Le problème d\'optimisation pour un SVM à marge dure est donc un problème d\'optimisation quadratique sous contraintes linéaires  :

w,bmin​21​∥w∥2

sujet aˋ yi​(w⋅xi​+b)≥1pour i=1,...,n

**Le Cas Non Linéairement Séparable (Marge Souple)**

Le modèle à marge dure a deux problèmes majeurs : il ne fonctionne que si les données sont parfaitement séparables linéairement, et il est très sensible aux valeurs aberrantes. Pour surmonter cela, nous introduisons le concept de **marge souple** (*soft margin*). L\'idée est d\'autoriser certaines violations de la marge, c\'est-à-dire de permettre à certains points de se trouver à l\'intérieur de la marge ou même du mauvais côté de l\'hyperplan.

Pour ce faire, nous introduisons des **variables ressort** (*slack variables*) ξi​≥0 pour chaque observation. La contrainte devient yi​(w⋅xi​+b)≥1−ξi​.

> Si ξi​=0, le point est correctement classé et en dehors de la marge.
>
> Si 0\<ξi​≤1, le point est correctement classé mais se trouve à l\'intérieur de la marge.
>
> Si ξi​\>1, le point est mal classé.

Nous devons bien sûr pénaliser ces violations. La fonction objectif est modifiée pour inclure une pénalité pour les variables ressort non nulles :

w,b,ξmin​21​∥w∥2+Ci=1∑n​ξi​

\$\$ \\text{sujet à } y_i(w \\cdot x_i + b) \\ge 1 - \\xi_i \\text{ et } \\xi_i \\ge 0 \\quad \\text{pour } i = 1, \\dots, n \$\$

L\'hyperparamètre C\>0 est un paramètre de régularisation qui contrôle le compromis entre deux objectifs contradictoires :

> Avoir une marge aussi large que possible (minimiser ∥w∥2).
>
> Avoir aussi peu de violations de la marge que possible (minimiser ∑ξi​).\
> Un grand C pénalise fortement les erreurs, conduisant à une marge plus étroite et à un modèle qui tente de classer correctement tous les points (faible biais, haute variance). Un petit C autorise plus d\'erreurs, conduisant à une marge plus large et à un modèle plus général (biais plus élevé, faible variance).70

#### L\'Astuce du Noyau (Kernel Trick)

**Le Problème de la Non-Linéarité**

Que faire si la frontière de décision entre les classes n\'est pas linéaire?. Les SVM linéaires échoueront. Une idée puissante est de transformer les données en les projetant dans un espace de caractéristiques de plus grande dimension, où l\'on espère qu\'elles deviendront linéairement séparables. Par exemple, des données qui ne sont pas séparables par une droite en 1D pourraient le devenir par un plan en 2D.

**L\'Astuce Mathématique**

Le calcul explicite de cette transformation ϕ(x) vers un espace de très haute dimension (voire de dimension infinie) peut être coûteux, voire impossible. C\'est là qu\'intervient l\'**astuce du noyau** (*kernel trick*), qui est l\'une des idées les plus élégantes de l\'apprentissage automatique.

En résolvant le problème d\'optimisation des SVM via sa formulation duale (utilisant les multiplicateurs de Lagrange), on découvre que la solution et la fonction de décision ne dépendent que des **produits scalaires** entre les vecteurs d\'entrée, de la forme ⟨xi​,xj​⟩.

L\'astuce consiste à remplacer ce produit scalaire par une **fonction noyau** K(xi​,xj​), qui calcule le produit scalaire des vecteurs dans l\'espace de caractéristiques transformé, *sans jamais avoir à calculer la transformation ϕ elle-même*  :

K(xi​,xj​)=⟨ϕ(xi​),ϕ(xj​)⟩

Cela permet de travailler implicitement dans un espace de très grande dimension de manière très efficace. La fonction de décision devient :

f(x)=signe(i=1∑n​αi​yi​K(xi​,x)+b)

où les αi​ sont les multiplicateurs de Lagrange, qui ne sont non nuls que pour les vecteurs de support.

**Noyaux Courants**

Le choix de la fonction noyau est un hyperparamètre crucial qui détermine la forme de la frontière de décision. Les noyaux les plus utilisés sont :

> **Noyau linéaire** : K(xi​,xj​)=⟨xi​,xj​⟩. Revient au SVM linéaire classique.
>
> **Noyau polynomial** : K(xi​,xj​)=(γ⟨xi​,xj​⟩+r)d. Permet de modéliser des frontières polynomiales.
>
> **Noyau à base radiale (RBF)** ou **noyau gaussien** : K(xi​,xj​)=exp(−γ∥xi​−xj​∥2). C\'est le noyau le plus populaire. Il peut créer des frontières de décision arbitrairement complexes. Il correspond à une projection dans un espace de dimension infinie.
>
> **Noyau sigmoïde** : K(xi​,xj​)=tanh(γ⟨xi​,xj​⟩+r).

Les SVM, en particulier avec le noyau RBF, sont des classifieurs extrêmement puissants, efficaces en haute dimension et robustes au surapprentissage grâce au contrôle de la marge. Leur principal inconvénient est leur coût de calcul, qui peut devenir prohibitif pour de très grands jeux de données.

### 43.2.4 Méthodes d\'Ensemble

Les méthodes d\'ensemble reposent sur une idée simple mais puissante : en combinant les prédictions de plusieurs modèles, on peut obtenir une prédiction globale qui est meilleure que celle de n\'importe quel modèle individuel. C\'est le principe de la \"sagesse de la foule\" appliqué à l\'apprentissage automatique. Ces méthodes sont parmi les plus performantes et les plus utilisées en pratique.

Il existe deux grandes philosophies pour construire un ensemble de modèles. La première, le *bagging*, est une approche démocratique qui consiste à faire la moyenne des prédictions de plusieurs experts indépendants pour réduire l\'incertitude. La seconde, le *boosting*, est une approche hiérarchique où les experts sont formés séquentiellement, chacun apprenant des erreurs de son prédécesseur pour affiner la prédiction.

#### Bagging et Forêts Aléatoires (Random Forests)

**Le Principe du Bagging**

Le **Bagging**, acronyme de **Bootstrap Aggregating**, est une technique d\'ensemble conçue principalement pour **réduire la variance** d\'un modèle. Elle est particulièrement efficace pour les modèles qui sont instables et ont une variance élevée, comme les arbres de décision profonds.

L\'algorithme du Bagging se déroule en trois étapes  :

> **Bootstrap (Échantillonnage avec remise)** : À partir de l\'ensemble d\'entraînement original de taille n, on crée B nouveaux jeux de données d\'entraînement, chacun de taille n, en tirant des échantillons avec remise. En raison de la remise, chaque jeu de données \"bootstrap\" est une version légèrement différente de l\'original, certains points étant dupliqués et d\'autres omis.
>
> **Apprentissage** : On entraîne un modèle de base indépendant (par exemple, un arbre de décision) sur chacun des B jeux de données bootstrap. On obtient ainsi une collection de B modèles, {h1​,h2​,...,hB​}.
>
> **Agrégation** : Pour faire une prédiction sur une nouvelle observation, on recueille les prédictions de chacun des B modèles.

Pour la **classification**, la prédiction finale est la classe qui a reçu le plus de votes (vote majoritaire).

Pour la **régression**, la prédiction finale est la moyenne des prédictions des B modèles.

En faisant la moyenne des prédictions de nombreux modèles qui ont vu des versions légèrement différentes des données, le Bagging lisse les prédictions et réduit la variance globale du modèle final, le rendant plus stable et moins sujet au surapprentissage.

**Les Forêts Aléatoires : Une Amélioration du Bagging**

Les **Forêts Aléatoires** (*Random Forests*) sont une extension et une amélioration de la technique du Bagging spécifiquement appliquée aux arbres de décision. L\'algorithme a été proposé par Leo Breiman et est l\'un des modèles les plus performants et les plus robustes de l\'apprentissage automatique.

Le Bagging réduit la variance en entraînant les arbres sur des sous-ensembles de données différents. Cependant, si une ou quelques caractéristiques sont de très forts prédicteurs, la plupart des arbres bootstrap auront tendance à choisir ces mêmes caractéristiques pour leurs premières divisions. Cela rend les arbres de l\'ensemble **corrélés** entre eux, ce qui limite l\'efficacité de la réduction de la variance par moyennage.

Les forêts aléatoires introduisent une source supplémentaire de hasard pour **décorréler les arbres**. En plus de l\'échantillonnage bootstrap des données, à chaque fois qu\'un nœud d\'un arbre doit être divisé, l\'algorithme ne considère qu\'un

**sous-ensemble aléatoire de caractéristiques** pour trouver la meilleure division.

L\'algorithme de construction d\'une forêt aléatoire est donc :

Pour b=1,...,B :

> Créer un échantillon bootstrap Db​ à partir des données d\'entraînement.
>
> Construire un arbre de décision hb​ sur Db​ en modifiant l\'algorithme de division :

À chaque nœud, sélectionner un sous-ensemble aléatoire de m caractéristiques parmi les p caractéristiques totales (typiquement m≈p​).

Choisir la meilleure division parmi ce sous-ensemble de m caractéristiques uniquement.

Généralement, les arbres sont développés à leur profondeur maximale sans élagage.

Cette double randomisation (sur les données et sur les caractéristiques) produit une collection d\'arbres très diversifiés et peu corrélés. L\'agrégation de leurs prédictions conduit à une réduction significative de la variance, tout en maintenant un biais faible (car les arbres individuels sont profonds et ont un faible biais). Les forêts aléatoires sont réputées pour leur haute précision, leur robustesse au surapprentissage et leur facilité d\'utilisation (peu d\'hyperparamètres à régler).

#### Boosting

**Le Principe du Boosting**

Le **Boosting** est une autre philosophie d\'apprentissage ensembliste. Contrairement au Bagging qui construit des modèles en parallèle et de manière indépendante, le Boosting construit les modèles de manière **séquentielle**, où chaque nouveau modèle tente de corriger les erreurs commises par les modèles précédents.

L\'objectif principal du Boosting est de **réduire le biais**. Il part d\'une collection de

**classifieurs faibles** (*weak learners*) -- des modèles qui sont à peine meilleurs qu\'une supposition aléatoire (par exemple, des arbres de décision très peu profonds, appelés \"souches de décision\" ou *decision stumps*) -- et les combine séquentiellement pour produire un **classifieur fort** (*strong learner*) très performant.

**AdaBoost (Adaptive Boosting)**

**AdaBoost**, ou *Adaptive Boosting*, est l\'un des premiers et des plus célèbres algorithmes de boosting. Son mécanisme est adaptatif : à chaque itération, il se concentre sur les exemples qui ont été mal classés par les modèles précédents.

L\'algorithme fonctionne comme suit  :

> **Initialisation** : Attribuer un poids égal à chaque observation de l\'ensemble d\'entraînement.
>
> Pour m=1,...,M (pour chaque modèle faible) :\
> a. Entraîner un classifieur faible hm​ sur les données d\'entraînement, en utilisant les poids actuels des observations.\
> b. Calculer l\'erreur pondérée ϵm​ de ce classifieur.\
> c. Calculer le poids αm​ de ce classifieur dans le vote final, généralement basé sur son erreur (un classifieur plus précis aura un poids plus élevé).\
> d. Mettre à jour les poids des observations : Augmenter les poids des observations qui ont été mal classées par hm​ et diminuer les poids de celles qui ont été bien classées.
>
> **Prédiction finale** : La prédiction de l\'ensemble est une somme pondérée des prédictions de tous les classifieurs faibles : H(x)=signe(∑m=1M​αm​hm​(x)).

En se concentrant itérativement sur les cas difficiles, AdaBoost construit un ensemble de classifieurs qui, ensemble, forment une frontière de décision complexe et précise.

**Gradient Boosting**

Le **Gradient Boosting** est une généralisation plus puissante et plus flexible du boosting. Il reformule le boosting comme un problème d\'optimisation numérique où l\'objectif est de minimiser la fonction de coût du modèle en ajoutant séquentiellement des classifieurs faibles.

L\'intuition est la suivante : au lieu de ré-pondérer les exemples comme dans AdaBoost, chaque nouveau modèle est entraîné pour prédire les **erreurs** (ou plus précisément, les **résidus**) du modèle précédent.

L\'algorithme de Gradient Boosting pour la régression (avec une perte quadratique) peut être résumé ainsi  :

> **Initialisation** : Commencer avec un modèle simple, généralement la moyenne de la variable cible : F0​(x)=yˉ​.
>
> Pour m=1,...,M :\
> a. Calculer les pseudo-résidus pour chaque observation : rim​=yi​−Fm−1​(xi​). Ces résidus représentent les erreurs du modèle actuel.\
> b. Entraîner un nouveau modèle faible hm​(x) pour qu\'il s\'ajuste à ces résidus.\
> c. Mettre à jour le modèle d\'ensemble : Fm​(x)=Fm−1​(x)+ηhm​(x), où η est un taux d\'apprentissage (learning rate) qui réduit la contribution de chaque arbre pour éviter le surapprentissage.
>
> **Prédiction finale** : Le modèle final est FM​(x).

Le nom \"Gradient Boosting\" vient du fait que les résidus sont proportionnels au **gradient négatif** de la fonction de perte quadratique. Cette interprétation permet de généraliser l\'algorithme à n\'importe quelle fonction de perte différentiable, ce qui le rend applicable à une vaste gamme de problèmes (classification, régression, etc.). Les modèles de Gradient Boosting, tels que XGBoost, LightGBM et CatBoost, sont souvent les algorithmes les plus performants dans les compétitions de science des données sur des données tabulaires.

Le tableau suivant synthétise et compare les algorithmes d\'apprentissage supervisé abordés dans cette section, offrant un guide pour choisir le modèle le plus approprié en fonction des caractéristiques du problème à résoudre. Cette comparaison met en évidence le spectre allant des modèles simples et interprétables aux modèles complexes et puissants, un compromis fondamental dans la pratique de l\'apprentissage automatique.

**Tableau 43.1 - Synthèse Comparative des Algorithmes d\'Apprentissage Supervisé**

  --------------------------- --------------------------- -------------------------------- ------------------ -------------------------------------------------------- ------------------------------------------------------ -----------------------------------------------------------
  Algorithme                  Type de Problème            Frontière de Décision            Interprétabilité   Principale Force                                         Principale Faiblesse                                   Levier sur le Biais-Variance

  **Régression Linéaire**     Régression                  Linéaire                         Élevée             Simplicité, interprétabilité, rapidité                   Hypothèse de linéarité forte                           Complexité du modèle (nombre de caractéristiques)

  **Régression Logistique**   Classification              Linéaire                         Élevée             Sortie probabiliste, interprétabilité                    Ne capture pas les relations non linéaires             Régularisation (α)

  **k-NN**                    Classification/Régression   Non-linéaire                     Moyenne            Simplicité conceptuelle, pas d\'entraînement             Coûteux en prédiction, sensible à la dimensionnalité   Nombre de voisins (k)

  **Naive Bayes**             Classification              Linéaire (implicite)             Moyenne            Très rapide, performant sur les textes                   Hypothèse d\'indépendance \"naïve\"                    Choix du modèle de distribution (Gaussien, etc.)

  **Arbre de Décision**       Classification/Régression   Non-linéaire (axes parallèles)   Élevée             Très interprétable, gère les données mixtes              Tendance au surapprentissage, instable                 Profondeur de l\'arbre, élagage

  **SVM (Noyau Linéaire)**    Classification              Linéaire                         Moyenne            Efficace en haute dimension, marge maximale              Inefficace pour les problèmes non linéaires            Paramètre de coût (C)

  **SVM (Noyau RBF)**         Classification              Non-linéaire                     Faible             Très flexible, peut modéliser des frontières complexes   Coûteux en calcul, sensible aux hyperparamètres        Paramètres C et γ

  **Forêt Aléatoire**         Classification/Régression   Non-linéaire                     Faible             Haute précision, robuste au surapprentissage             Moins interprétable qu\'un seul arbre                  Nombre d\'arbres, nombre de caractéristiques par division

  **Gradient Boosting**       Classification/Régression   Non-linéaire                     Faible             Très haute performance prédictive                        Sensible au surapprentissage si non régularisé         Nombre d\'arbres, taux d\'apprentissage, profondeur
  --------------------------- --------------------------- -------------------------------- ------------------ -------------------------------------------------------- ------------------------------------------------------ -----------------------------------------------------------

## 43.3 Apprentissage Non Supervisé

Nous nous tournons maintenant vers le défi de l\'apprentissage en l\'absence d\'étiquettes. Dans ce paradigme, l\'objectif n\'est plus la prédiction d\'une sortie connue, mais la **découverte** de la structure inhérente et cachée au sein des données. Les algorithmes d\'apprentissage non supervisé sont des outils d\'exploration de données par excellence, nous permettant de segmenter des ensembles de données en groupes cohérents (clustering) ou de simplifier leur représentation en réduisant leur complexité (réduction de dimensionnalité). Ces techniques sont non seulement des fins en elles-mêmes, mais aussi des étapes de prétraitement et d\'ingénierie des caractéristiques d\'une importance capitale, capables d\'améliorer significativement la performance des modèles supervisés en aval.

### 43.3.1 Clustering (Regroupement)

Le clustering est la tâche la plus emblématique de l\'apprentissage non supervisé. Son but est de regrouper un ensemble de points de données de telle sorte que les points d\'un même groupe (ou *cluster*) soient plus similaires les uns aux autres que ceux des autres groupes. Il existe de nombreuses approches pour définir ce qu\'est un \"groupe\", ce qui a donné naissance à différentes familles d\'algorithmes.

#### K-Means (Centroïdes)

**Intuition et Objectif**

K-Means est l\'un des algorithmes de clustering les plus simples et les plus populaires. Son approche est basée sur la notion de centroïdes. L\'algorithme vise à partitionner les données en k clusters distincts, où chaque cluster est représenté par son centre de gravité, ou **centroïde**. L\'objectif est de trouver les positions des centroïdes et d\'assigner chaque point de données à un cluster de manière à minimiser la

**somme des carrés intra-cluster** (ou inertie), c\'est-à-dire la somme des distances au carré entre chaque point et le centroïde de son cluster assigné.

**Algorithme**

L\'algorithme K-Means est un processus itératif qui alterne entre deux étapes jusqu\'à ce que les assignations des clusters ne changent plus :

> **Initialisation** : Choisir k, le nombre de clusters désiré. Initialiser les positions des k centroïdes (par exemple, en les plaçant sur k points de données choisis au hasard).
>
> **Étape d\'Assignation (Expectation)** : Pour chaque point de données, calculer sa distance à chacun des k centroïdes. Assigner le point de données au cluster du centroïde le plus proche.
>
> **Étape de Mise à Jour (Maximization)** : Pour chaque cluster, recalculer la position de son centroïde comme étant la moyenne (le barycentre) de tous les points de données qui lui ont été assignés à l\'étape précédente.
>
> **Répétition** : Répéter les étapes 2 et 3 jusqu\'à ce que les assignations des clusters ne changent plus d\'une itération à l\'autre (convergence).

**Considérations Pratiques**

> **Choix de k** : L\'algorithme nécessite que le nombre de clusters k soit spécifié à l\'avance. Le choix de k est un défi majeur et est souvent déterminé à l\'aide de méthodes heuristiques comme la \"méthode du coude\" (en observant la diminution de l\'inertie en fonction de k) ou le \"score de silhouette\".
>
> **Sensibilité à l\'initialisation** : Le résultat de K-Means peut dépendre des positions initiales des centroïdes. Pour atténuer ce problème, il est courant d\'exécuter l\'algorithme plusieurs fois avec différentes initialisations aléatoires et de conserver la solution qui donne la plus faible inertie.
>
> **Hypothèses sur la forme des clusters** : K-Means fonctionne mieux lorsque les clusters sont de forme sphérique, de taille similaire et de densité uniforme, car son objectif est de minimiser la variance intra-cluster. Il a des difficultés à identifier des clusters de formes allongées ou non convexes.

#### Clustering Hiérarchique

**Intuition et Dendrogramme**

Contrairement à K-Means qui produit une partition \"plate\", le clustering hiérarchique construit une hiérarchie de clusters. Cette hiérarchie est souvent visualisée sous la forme d\'un **dendrogramme**, un diagramme en forme d\'arbre qui montre comment les clusters sont fusionnés (ou divisés) à différents niveaux de similarité. Un avantage majeur de cette approche est qu\'elle ne nécessite pas de présélectionner le nombre de clusters. On peut choisir le nombre de clusters a posteriori en \"coupant\" le dendrogramme à une certaine hauteur.

**Approches**

Il existe deux stratégies principales pour le clustering hiérarchique :

> **Agglomérative (ascendante)** : C\'est l\'approche la plus courante.

**Initialisation** : Chaque point de données commence dans son propre cluster.

**Itérations** : À chaque étape, les deux clusters les plus \"proches\" sont fusionnés en un seul.

**Arrêt** : Le processus se poursuit jusqu\'à ce que tous les points de données soient regroupés dans un seul grand cluster.

> **Divisive (descendante)** :

**Initialisation** : Tous les points de données commencent dans un seul cluster.

**Itérations** : À chaque étape, un cluster est divisé en deux sous-clusters.

**Arrêt** : Le processus se poursuit jusqu\'à ce que chaque point soit dans son propre cluster.

**Critères de Liaison (Linkage)**

Une composante essentielle du clustering hiérarchique agglomératif est le **critère de liaison**, qui définit comment mesurer la distance entre deux clusters (qui peuvent contenir plusieurs points) :

> **Liaison simple (*Single linkage*)** : La distance entre deux clusters est la distance minimale entre un point du premier cluster et un point du second.
>
> **Liaison complète (*Complete linkage*)** : La distance entre deux clusters est la distance maximale entre un point du premier et un point du second.
>
> **Liaison moyenne (*Average linkage*)** : La distance est la moyenne des distances entre toutes les paires de points (un de chaque cluster).
>
> **Liaison de Ward** : Cherche à fusionner les clusters qui minimisent l\'augmentation de la variance intra-cluster totale.

Le choix du critère de liaison peut avoir un impact significatif sur la forme des clusters produits.

#### DBSCAN (Basé sur la Densité)

**Intuition : Clusters comme Régions Denses**

DBSCAN (*Density-Based Spatial Clustering of Applications with Noise*) est un algorithme de clustering qui adopte une approche basée sur la densité. Il définit les clusters comme des régions denses de l\'espace, séparées par des régions de faible densité. Ses deux avantages majeurs sont sa capacité à découvrir des clusters de

**formes arbitraires** (non sphériques) et sa capacité à identifier les points qui n\'appartiennent à aucun cluster, les traitant comme du **bruit** ou des **valeurs aberrantes** (*outliers*).

**Concepts Clés et Algorithme**

DBSCAN repose sur deux hyperparamètres et trois définitions de points :

> **Hyperparamètres** :

eps (ϵ) : Le rayon d\'un voisinage autour d\'un point.

min_samples : Le nombre minimum de points requis à l\'intérieur du voisinage d\'un point (y compris le point lui-même) pour que ce point soit considéré comme un point central.

> **Définitions des points** :

**Point central (*Core point*)** : Un point qui a au moins min_samples points dans son voisinage de rayon eps.

**Point de bordure (*Border point*)** : Un point qui est dans le voisinage d\'un point central mais qui n\'a pas lui-même min_samples points dans son propre voisinage.

**Point de bruit (*Noise point*)** : Un point qui n\'est ni un point central ni un point de bordure.

L\'algorithme parcourt les points de données et forme des clusters en \"connectant\" les points centraux qui sont à portée les uns des autres, puis en y ajoutant les points de bordure. Tout point non assigné à un cluster à la fin du processus est considéré comme du bruit.

### 43.3.2 Réduction de Dimensionnalité

La réduction de dimensionnalité est le processus de réduction du nombre de variables aléatoires prises en considération, via l\'obtention d\'un ensemble de variables principales. Elle est cruciale pour la visualisation de données de haute dimension et pour améliorer l\'efficacité et la performance d\'autres algorithmes d\'apprentissage.

#### Analyse en Composantes Principales (PCA)

**Intuition : Capturer la Variance Maximale**

L\'Analyse en Composantes Principales (PCA) est la technique de réduction de dimensionnalité linéaire la plus connue. L\'intuition est de transformer le système de coordonnées original de nos données en un nouveau système de coordonnées. Les axes de ce nouveau système, appelés **composantes principales**, sont choisis de manière à être orthogonaux les uns aux autres et à capturer séquentiellement la plus grande quantité de variance possible dans les données.

> La **première composante principale** est l\'axe le long duquel la variance des données projetées est maximale.
>
> La **deuxième composante principale** est l\'axe orthogonal au premier qui capture la plus grande partie de la variance restante.
>
> Et ainsi de suite.

En conservant uniquement les premières composantes principales (celles qui capturent le plus de variance), on peut projeter les données sur un sous-espace de dimension inférieure tout en perdant le moins d\'information possible.

**Approche Mathématique**

Mathématiquement, les composantes principales sont les **vecteurs propres** de la matrice de covariance des données. La quantité de variance capturée par chaque composante principale est donnée par la **valeur propre** correspondante. Pour effectuer une PCA, on calcule la matrice de covariance des données (après les avoir centrées), on trouve ses vecteurs propres et ses valeurs propres, on trie les vecteurs propres par ordre décroissant de leurs valeurs propres, et on choisit les k premiers vecteurs propres pour former la nouvelle base sur laquelle on projette les données.

#### Apprentissage de Variétés (Manifold Learning) : t-SNE et UMAP

**Intuition : Déplier la Structure des Données**

Souvent, les données de haute dimension ne remplissent pas tout l\'espace, mais se trouvent sur ou près d\'une **variété** (*manifold*) de dimension inférieure, une sorte de surface courbe intégrée dans l\'espace de grande dimension. L\'apprentissage de variétés regroupe des techniques non linéaires qui tentent de découvrir et de \"déplier\" cette structure de faible dimension.

**t-SNE (t-distributed Stochastic Neighbor Embedding)**

t-SNE est une technique extrêmement populaire pour la **visualisation** de données de haute dimension en 2D ou 3D. Son objectif est de préserver les

**relations de voisinage locales**. Il modélise les similarités entre les points en haute dimension à l\'aide d\'une distribution de probabilité gaussienne et fait de même pour les points dans l\'espace de basse dimension à l\'aide d\'une distribution t de Student (qui a des queues plus lourdes, aidant à mieux séparer les clusters). L\'algorithme minimise ensuite la divergence (la différence) entre ces deux distributions de probabilités à l\'aide de la descente de gradient. Le résultat est souvent une visualisation spectaculaire où les clusters naturels dans les données sont bien séparés et visibles.

**UMAP (Uniform Manifold Approximation and Projection)**

UMAP est une alternative plus récente à t-SNE qui gagne rapidement en popularité. Il est basé sur des fondements mathématiques plus solides issus de la topologie riemannienne et de la théorie des catégories. En pratique, UMAP est souvent

**beaucoup plus rapide** que t-SNE et tend à mieux préserver la **structure globale** des données, en plus de la structure locale. Alors que t-SNE est excellent pour voir si des clusters existent, UMAP peut souvent donner une meilleure idée de la relation entre ces clusters.

Ces techniques non supervisées, en particulier la réduction de dimensionnalité, sont des outils puissants d\'**ingénierie des caractéristiques**. Par exemple, les composantes principales issues d\'une PCA peuvent être utilisées comme de nouvelles caractéristiques décorrélées pour un modèle de régression linéaire, contournant ainsi les problèmes de multicolinéarité. De même, l\'identifiant de cluster obtenu par un algorithme de clustering peut être utilisé comme une nouvelle caractéristique catégorielle pour un classifieur, informant le modèle supervisé de la structure de groupe inhérente aux données. Cette synergie entre l\'apprentissage non supervisé et supervisé est une stratégie clé dans la construction de pipelines d\'apprentissage automatique performants.

## 43.4 Évaluation des Modèles

La construction d\'un modèle prédictif n\'est que la moitié du travail. Un modèle n\'a de valeur que si sa performance peut être quantifiée de manière fiable et objective. Évaluer un modèle ne consiste pas seulement à calculer un score ; il s\'agit de mettre en place un protocole rigoureux qui nous donne confiance dans la capacité du modèle à **généraliser** à de nouvelles données invisibles. Cette section établit les principes fondamentaux et les outils standards pour une évaluation robuste des modèles, en expliquant d\'abord pourquoi une évaluation naïve est vouée à l\'échec, en présentant ensuite la validation croisée comme la norme d\'or pour l\'estimation de la performance, et enfin en détaillant les métriques clés pour les tâches de classification et de régression.

### 43.4.1 Le Piège du Surapprentissage et la Nécessité d\'un Ensemble de Test

**Le Problème Fondamental de l\'Évaluation**

Une erreur cardinale en apprentissage automatique est d\'évaluer la performance d\'un modèle sur les mêmes données qui ont servi à l\'entraîner. Un modèle, en particulier un modèle complexe, peut facilement \"mémoriser\" les réponses de l\'ensemble d\'entraînement, y compris le bruit et les coïncidences. Il peut atteindre une précision de 100% sur ces données, donnant l\'illusion d\'un modèle parfait. Cependant, lorsqu\'il est confronté à de nouvelles données, sa performance s\'effondre car il n\'a pas appris la structure sous-jacente du problème, mais seulement les particularités de l\'échantillon d\'entraînement. C\'est la définition même du

**surapprentissage** (*overfitting*).

**La Solution : La Partition des Données**

Pour obtenir une estimation honnête de la capacité de généralisation d\'un modèle, nous devons l\'évaluer sur des données qu\'il n\'a jamais vues pendant son entraînement. La pratique standard consiste donc à diviser notre ensemble de données initial en au moins deux sous-ensembles  :

> **L\'ensemble d\'entraînement (*Training Set*)** : Utilisé pour entraîner le modèle, c\'est-à-dire pour apprendre les paramètres du modèle (par exemple, les coefficients β d\'une régression ou la structure d\'un arbre de décision).
>
> **L\'ensemble de test (*Test Set*)** : Mis de côté et utilisé **une seule fois**, à la toute fin du processus, pour évaluer la performance du modèle final choisi. La performance sur cet ensemble est notre meilleure estimation de la manière dont le modèle se comportera en production sur de nouvelles données.

Souvent, on introduit un troisième ensemble, l\'**ensemble de validation (*Validation Set*)**, qui est utilisé pendant le développement pour régler les **hyperparamètres** du modèle (par exemple, le k dans k-NN ou le paramètre de régularisation α) et pour la sélection de modèles.

### 43.4.2 Validation Croisée : Une Estimation Robuste de la Performance

**Les Limites d\'une Simple Division Entraînement/Validation**

Utiliser une seule partition fixe en ensemble d\'entraînement et de validation peut être problématique. La performance mesurée sur l\'ensemble de validation peut être très sensible à la manière dont la division a été faite. Par pur hasard, l\'ensemble de validation pourrait contenir des exemples particulièrement \"faciles\" ou \"difficiles\", conduisant à une estimation trop optimiste ou trop pessimiste de la performance de généralisation.

**La Validation Croisée à k-blocs (k-fold Cross-Validation)**

Pour surmonter cette limitation et obtenir une estimation plus stable et robuste de la performance, la technique standard est la **validation croisée à k-blocs** (*k-fold cross-validation*).

L\'algorithme est le suivant :

> **Partition** : Diviser l\'ensemble de données (qui n\'inclut pas l\'ensemble de test final) en k sous-ensembles de taille approximativement égale, appelés \"blocs\" (*folds*). Une valeur courante pour k est 5 ou 10.
>
> Itération : Effectuer k itérations. À chaque itération i (de 1 à k) :\
> a. Considérer le bloc i comme l\'ensemble de validation.\
> b. Considérer les k−1 autres blocs comme l\'ensemble d\'entraînement.\
> c. Entraîner le modèle sur cet ensemble d\'entraînement.\
> d. Évaluer le modèle sur l\'ensemble de validation (le bloc i) et enregistrer le score de performance (par exemple, l\'exactitude ou l\'erreur quadratique moyenne).
>
> **Agrégation** : La performance de validation croisée finale est la **moyenne** des k scores de performance obtenus. On peut également calculer l\'écart-type de ces scores pour avoir une idée de la stabilité de la performance du modèle.

L\'avantage principal de la validation croisée à k-blocs est que chaque point de donnée est utilisé exactement une fois dans un ensemble de validation, ce qui conduit à une utilisation plus efficace des données et à une estimation de la performance moins biaisée et de plus faible variance que celle obtenue avec une seule division.

### 43.4.3 Métriques d\'Évaluation

Le choix de la métrique d\'évaluation est crucial. Il n\'existe pas de métrique universellement \"meilleure\" ; le choix dépend de la nature du problème et, surtout, des objectifs métier. Une métrique mal choisie peut conduire à l\'optimisation d\'un modèle qui, en pratique, est inutile voire nuisible.

#### Pour les Problèmes de Classification

Pour les problèmes de classification, les métriques sont généralement dérivées de la **matrice de confusion**. C\'est un tableau qui compare les classes prédites par le modèle aux classes réelles.

  -------------------- --------------------- ---------------------
                       Prédit : Positif      Prédit : Négatif

  **Réel : Positif**   Vrais Positifs (TP)   Faux Négatifs (FN)

  **Réel : Négatif**   Faux Positifs (FP)    Vrais Négatifs (TN)
  -------------------- --------------------- ---------------------

> **Vrai Positif (TP)** : Le modèle prédit \"positif\" et c\'est correct.
>
> **Vrai Négatif (TN)** : Le modèle prédit \"négatif\" et c\'est correct.
>
> **Faux Positif (FP)** (Erreur de Type I) : Le modèle prédit \"positif\" mais c\'est incorrect.
>
> **Faux Négatif (FN)** (Erreur de Type II) : Le modèle prédit \"négatif\" mais c\'est incorrect.

À partir de cette matrice, on peut définir plusieurs métriques :

> Exactitude (Accuracy) : La proportion de prédictions correctes.\
> \
> Exactitude=TP+TN+FP+FNTP+TN​\
> \
> C\'est une métrique simple, mais elle peut être très trompeuse lorsque les classes sont déséquilibrées. Par exemple, si 99% des courriels ne sont pas des spams, un classifieur qui prédit toujours \"non-spam\" aura une exactitude de 99%, bien qu\'il soit totalement inutile.88
>
> Précision (Precision) : Parmi toutes les prédictions positives, quelle proportion était correcte?\
> \
> Preˊcision=TP+FPTP​\
> \
> La précision est cruciale lorsque le coût d\'un faux positif est élevé. Par exemple, dans un filtre anti-spam, on veut éviter de classer un courriel important (négatif) comme un spam (positif).
>
> Rappel (Recall) ou Sensibilité : Parmi tous les cas réellement positifs, quelle proportion a été détectée par le modèle?\
> \
> Rappel=TP+FNTP​\
> \
> Le rappel est crucial lorsque le coût d\'un faux négatif est élevé. Par exemple, dans le diagnostic médical d\'une maladie grave, il est primordial de ne manquer aucun patient malade (positif).
>
> Score F1 : La moyenne harmonique de la précision et du rappel.\
> \
> F1=2×Preˊcision+RappelPreˊcision×Rappel​\
> \
> Le score F1 fournit un bon équilibre entre la précision et le rappel, et il est particulièrement utile lorsque les classes sont déséquilibrées.88
>
> **Courbe ROC (Receiver Operating Characteristic) et AUC** : La courbe ROC trace le taux de vrais positifs (Rappel) en fonction du taux de faux positifs pour différents seuils de classification. L\'**Aire Sous la Courbe (AUC)** est une métrique agrégée qui représente la capacité du modèle à distinguer les classes. Un AUC de 1.0 représente un classifieur parfait, tandis qu\'un AUC de 0.5 représente un classifieur qui ne fait pas mieux que le hasard.

#### Pour les Problèmes de Régression

Pour les problèmes de régression, où l\'on prédit une valeur continue, les métriques mesurent la distance entre les valeurs prédites et les valeurs réelles.

> Erreur Quadratique Moyenne (Mean Squared Error - MSE) : La moyenne des carrés des erreurs de prédiction.\
> \
> MSE=n1​i=1∑n​(yi​−y\^​i​)2\
> \
> Le MSE pénalise fortement les grandes erreurs en raison de la mise au carré. La racine carrée du MSE (RMSE) est souvent utilisée car elle est dans la même unité que la variable cible, ce qui la rend plus interprétable.88
>
> Coefficient de Détermination (R²) : Mesure la proportion de la variance de la variable dépendante qui est prévisible à partir des variables indépendantes. Il varie généralement entre 0 et 1.\
> \
> R2=1−∑i=1n​(yi​−yˉ​)2∑i=1n​(yi​−y\^​i​)2​\
> \
> Un R2 de 0.85 signifie que le modèle explique 85% de la variabilité des données de la variable cible. C\'est une mesure de la \"qualité de l\'ajustement\" du modèle.36 Il faut cependant être prudent, car le\
> R2 augmente mécaniquement avec l\'ajout de nouvelles variables, qu\'elles soient pertinentes ou non. Le R2 ajusté est une variante qui pénalise l\'ajout de variables inutiles.

En conclusion, une évaluation rigoureuse est une démarche multi-facettes. Elle nécessite une séparation stricte des données, l\'utilisation de techniques robustes comme la validation croisée pour estimer la performance, et le choix judicieux de métriques qui sont en adéquation avec les objectifs finaux de l\'application. C\'est seulement en respectant ces principes que l\'on peut développer des modèles d\'apprentissage automatique qui sont non seulement performants sur le papier, mais aussi fiables et utiles dans le monde réel.

# Chapitre 44 : Apprentissage Profond (Deep Learning)

## Introduction

L\'apprentissage profond (Deep Learning) représente une sous-discipline de l\'apprentissage automatique qui a catalysé une véritable révolution dans le domaine de l\'intelligence artificielle au cours de la dernière décennie. Caractérisé par l\'utilisation de réseaux de neurones artificiels dotés de multiples couches de traitement --- d\'où l\'épithète \"profond\" --- ce champ a permis des avancées spectaculaires et autrefois considérées comme relevant de la science-fiction. Des systèmes de reconnaissance faciale omniprésents dans nos appareils mobiles à la traduction automatique quasi instantanée, en passant par les véhicules autonomes et les diagnostics médicaux assistés par ordinateur, l\'apprentissage profond est devenu le moteur de l\'innovation technologique contemporaine. Son impact s\'étend à des domaines aussi variés que la vision par ordinateur, le traitement du langage naturel, la bio-informatique, la robotique et les systèmes de recommandation.

L\'objectif de ce chapitre est de fournir une introduction à la fois rigoureuse et conceptuelle à l\'apprentissage profond, destinée aux étudiants de cycles supérieurs, aux ingénieurs et aux futurs chercheurs. Notre parcours débutera par les fondements, en retraçant l\'évolution du neurone biologique, source d\'inspiration initiale, vers le neurone formel et le perceptron multicouche, le premier véritable réseau de neurones profond. Nous disséquerons ensuite avec une précision mathématique le cœur mécanique de ces modèles : le processus d\'entraînement. Nous dériverons en détail l\'algorithme de rétropropagation du gradient, pierre angulaire de l\'apprentissage, et analyserons les optimiseurs modernes qui en assurent l\'efficacité.

Le fil conducteur de ce chapitre est l\'idée fondamentale de l\'**apprentissage de représentations hiérarchiques**. La \"profondeur\" d\'un réseau n\'est pas une simple accumulation de couches ; elle confère au modèle la capacité d\'apprendre des caractéristiques de plus en plus abstraites et complexes à chaque niveau de traitement. Une première couche pourra identifier des contours ou des textures simples dans une image, une couche intermédiaire assemblera ces contours pour reconnaître des formes comme des yeux ou des nez, et les couches finales pourront identifier un visage dans son intégralité. Cette capacité à construire une hiérarchie de concepts, du simple au complexe, est ce qui distingue l\'apprentissage profond et sous-tend sa puissance. Nous verrons comment ce principe est exploité de manière explicite dans les architectures spécialisées qui ont révolutionné leurs domaines respectifs : les réseaux de neurones convolutifs (CNN) pour les données à structure de grille comme les images, et les architectures séquentielles comme les réseaux de neurones récurrents (RNN) et les Transformers pour les données ordonnées comme le langage. Enfin, nous conclurons en explorant une nouvelle frontière fascinante : les modèles génératifs, capables non seulement d\'analyser et de classer des données, mais aussi d\'en créer de nouvelles, ouvrant la voie à des applications créatives et innovantes.

## 44.1 Réseaux de Neurones Artificiels (MLP)

Cette première section établit les fondations conceptuelles et mathématiques sur lesquelles repose l\'ensemble de l\'édifice de l\'apprentissage profond. Nous partirons de l\'analogie biologique qui a initialement inspiré le domaine pour construire, étape par étape, un modèle mathématique formel --- le Perceptron Multi-Couches (MLP) --- et démontrer sa capacité théorique à approximer n\'importe quelle fonction complexe.

### 44.1.1 Du Neurone Biologique au Neurone Formel : Le Perceptron

L\'idée de créer une intelligence artificielle en s\'inspirant du cerveau humain est aussi ancienne que le domaine lui-même. Le neurone biologique, unité de base du système nerveux, a servi de premier modèle conceptuel pour les pionniers de l\'informatique.

#### L\'inspiration biologique

Un neurone biologique est une cellule spécialisée dont la fonction est de recevoir, traiter et transmettre des informations. Sa structure se compose de trois parties principales :

> Les **dendrites**, des extensions ramifiées qui agissent comme des antennes, recevant des signaux électrochimiques d\'autres neurones.
>
> Le **soma** (ou corps cellulaire), qui intègre les signaux reçus. Si la somme des signaux entrants dépasse un certain seuil d\'activation, le neurone \"se déclenche\".
>
> L\'**axone**, une longue fibre qui transmet le signal de sortie (le potentiel d\'action) à d\'autres neurones via des jonctions appelées **synapses**.

La force de la connexion synaptique entre deux neurones peut varier, modulant l\'influence qu\'un neurone exerce sur un autre. C\'est ce processus de modulation synaptique qui est considéré comme le substrat de l\'apprentissage et de la mémoire dans le cerveau. Il est crucial de souligner que le neurone artificiel est une

*inspiration* mathématique et une simplification extrême de ce processus biologique complexe, et non une réplication fidèle.

#### Le modèle de McCulloch-Pitts et le Perceptron de Rosenblatt

La première tentative de formalisation mathématique fut le modèle de McCulloch et Pitts en 1943, qui présentait le neurone comme une simple unité logique à seuil binaire, capable de produire une sortie \"1\" (déclenchement) si la somme de ses entrées binaires dépassait un seuil, et \"0\" sinon.

C\'est en 1957 que Frank Rosenblatt, s\'appuyant sur ces idées, inventa le **Perceptron**, un algorithme d\'apprentissage supervisé pour la classification binaire, qui peut être considéré comme le premier neurone artificiel capable d\'apprendre à partir de données. Son fonctionnement est formalisé comme suit :

> **Entrées pondérées :** Le Perceptron reçoit un vecteur d\'entrées x=(x1​,x2​,\...,xn​). Chaque entrée xi​ est multipliée par un poids synaptique associé wi​. Ces poids représentent la force des connexions synaptiques. Le modèle calcule une somme pondérée de ses entrées, à laquelle on ajoute un terme de **biais** b. Le biais est un paramètre supplémentaire qui ne dépend d\'aucune entrée et permet de décaler la frontière de décision, augmentant ainsi la flexibilité du modèle. La somme pondérée, souvent notée\
> z, est donc :\
> \
> z=(i=1∑n​wi​xi​)+b=w⋅x+b
>
> **Fonction d\'activation à seuil :** La sortie du Perceptron est déterminée par une fonction d\'activation, qui dans le cas original est une fonction de Heaviside (ou fonction escalier). Si la somme pondérée z dépasse un certain seuil (qui est effectivement contrôlé par le biais), le neurone produit une sortie de 1 ; sinon, il produit une sortie de 0.\
> y\^​=f(z)={10​si z\>0sinon​

L\'algorithme d\'apprentissage du Perceptron consiste à ajuster itérativement les poids wi​ et le biais b en fonction de l\'erreur de classification sur des exemples d\'entraînement.

#### La limitation fondamentale : la séparabilité linéaire

Géométriquement, l\'équation w⋅x+b=0 définit un hyperplan dans l\'espace des entrées. Le Perceptron classe tous les points d\'un côté de cet hyperplan dans une classe (par exemple, 1) et tous les points de l\'autre côté dans l\'autre classe (0). Par conséquent, un Perceptron ne peut fonctionner que comme un classifieur linéaire, c\'est-à-dire qu\'il ne peut résoudre que des problèmes où les classes sont **linéairement séparables**.

Des fonctions logiques simples comme ET (AND), OU (OR) et NON (NOT) sont linéairement séparables et peuvent être apprises par un unique Perceptron. Cependant, un problème canonique a mis en lumière la limitation fondamentale de ce modèle : la fonction **OU exclusif (XOR)**. La fonction XOR renvoie 1 si ses deux entrées binaires sont différentes, et 0 sinon. Il est impossible de tracer une seule ligne droite pour séparer les points {(0,0),(1,1)} (classe 0) des points {(0,1),(1,0)} (classe 1) dans un plan cartésien.

Cette incapacité à résoudre un problème aussi simple que le XOR, mise en évidence dans le livre \"Perceptrons\" de Marvin Minsky et Seymour Papert en 1969, a eu un effet dévastateur sur le domaine. Elle a conduit à une réduction drastique des financements et de l\'intérêt pour la recherche sur les réseaux de neurones, une période souvent qualifiée de premier \"hiver de l\'IA\". La solution à cette limitation ne viendrait qu\'avec l\'introduction de la profondeur.

### 44.1.2 Le Perceptron Multi-Couches (MLP) et l\'Approximation Universelle

La sortie de \"l\'hiver de l\'IA\" a été rendue possible par la reconnaissance que la puissance des réseaux de neurones ne résidait pas dans un neurone unique, mais dans leur organisation en couches successives. Cette architecture, connue sous le nom de Perceptron Multi-Couches (MLP), a permis de surmonter la contrainte de séparabilité linéaire.

#### Surmonter la linéarité : les couches cachées

Un MLP est une architecture de réseau de neurones à propagation avant (feedforward) composée d\'au moins trois couches de nœuds : une couche d\'entrée, une ou plusieurs **couches cachées**, et une couche de sortie. Chaque neurone d\'une couche est généralement connecté à tous les neurones de la couche précédente (on parle de couche \"pleinement connectée\" ou \"dense\"). L\'information circule de manière unidirectionnelle, de l\'entrée vers la sortie, sans boucle.

Les couches cachées sont la clé pour dépasser les limites du Perceptron. Elles permettent au réseau d\'apprendre des représentations internes des données qui ne sont ni les entrées brutes ni les sorties finales. En substance, chaque couche apprend à transformer les représentations de la couche précédente en des représentations de plus en plus abstraites, permettant au réseau de construire des frontières de décision complexes.

#### Le rôle crucial des fonctions d\'activation non linéaires

Cependant, l\'ajout de couches cachées ne suffit pas. Si les neurones de ces couches utilisaient une fonction d\'activation linéaire (c\'est-à-dire f(z)=z), le MLP resterait un classifieur linéaire. En effet, une composition de transformations linéaires est elle-même une transformation linéaire. Un réseau profond de fonctions linéaires peut toujours être réduit à une seule transformation linéaire équivalente, s\'effondrant ainsi en un modèle sans plus de puissance qu\'un Perceptron unique.

C\'est l\'introduction d\'une **fonction d\'activation non linéaire** après la somme pondérée de chaque neurone qui confère au MLP sa puissance. Cette non-linéarité \"tord\" ou \"plie\" l\'espace des caractéristiques à chaque couche, permettant au réseau de séparer des classes qui ne sont pas linéairement séparables dans l\'espace d\'origine. C\'est cette combinaison de profondeur (couches multiples) et de non-linéarité qui permet de résoudre le problème du XOR et, plus généralement, d\'apprendre des fonctions arbitrairement complexes.

#### Analyse des fonctions d\'activation courantes

Le choix de la fonction d\'activation est une décision de conception cruciale qui influence directement la dynamique de l\'entraînement et les performances du réseau. Plusieurs fonctions ont été proposées et utilisées au fil du temps.

> Fonction Sigmoïde (ou Logistique) :\
> \
> σ(z)=1+e−z1​\
> \
> Historiquement, la fonction sigmoïde a été très populaire car sa sortie, comprise entre 0 et 1, pouvait être interprétée comme une probabilité d\'activation. Cependant, elle présente deux inconvénients majeurs. Premièrement, ses sorties ne sont pas centrées sur zéro. Deuxièmement, et plus grave, elle souffre du problème de saturation : pour des valeurs de z très grandes (positives ou négatives), la dérivée de la sigmoïde tend vers zéro. Comme nous le verrons dans la section sur l\'entraînement, des gradients nuls ou très faibles empêchent les poids de se mettre à jour, ce qui peut stopper l\'apprentissage. C\'est l\'une des causes du problème de la \"disparition du gradient\" (vanishing gradient).8
>
> Tangente Hyperbolique (Tanh) :\
> \
> tanh(z)=ez+e−zez−e−z​=2σ(2z)−1\
> \
> La fonction Tanh est mathématiquement une version redimensionnée et décalée de la sigmoïde. Son intervalle de sortie est \[−1,1\], ce qui la rend centrée sur zéro. Cette propriété est avantageuse car elle tend à produire des activations dans les couches suivantes qui ont une moyenne plus proche de zéro, ce qui peut accélérer la convergence de l\'algorithme d\'optimisation. Cependant, comme la sigmoïde, elle sature pour des valeurs d\'entrée extrêmes et souffre donc également du problème de la disparition du gradient.12
>
> Unité Linéaire Rectifiée (ReLU - Rectified Linear Unit) :\
> \
> f(z)=max(0,z)\
> \
> Introduite plus récemment, la fonction ReLU est devenue la fonction d\'activation par défaut dans la plupart des architectures d\'apprentissage profond. Ses avantages sont multiples :

**Efficacité de calcul :** Elle est extrêmement simple à calculer (une simple opération de seuillage).

**Non-saturation (pour les entrées positives) :** Pour z\>0, la dérivée est constante et égale à 1. Cela atténue considérablement le problème de la disparition du gradient et permet d\'entraîner des réseaux beaucoup plus profonds.\
\
Cependant, la ReLU n\'est pas sans défauts. Son principal inconvénient est le problème du \"neurone mourant\" (Dying ReLU). Si un neurone reçoit une entrée qui le fait produire une sortie de 0, sa dérivée devient également 0. Si, à cause d\'une mise à jour de poids importante, un neurone se retrouve dans cet état, il cessera de s\'activer pour n\'importe quelle entrée et ne pourra plus jamais se mettre à jour, car le gradient qui le traverse sera toujours nul. Pour remédier à cela, plusieurs variantes ont été proposées 12 :

**Leaky ReLU :** f(z)=max(αz,z), où α est une petite constante (ex: 0.01). Cela introduit une petite pente négative, empêchant le gradient de devenir nul pour les entrées négatives.

**Parametric ReLU (PReLU) :** Similaire à Leaky ReLU, mais α est un paramètre appris par le réseau.

**Exponential Linear Unit (ELU) :** f(z)=z si z\>0 et f(z)=α(ez−1) si z≤0. Elle a des sorties moyennes plus proches de zéro et peut être plus robuste au bruit.

Le passage des modèles bio-inspirés comme le Perceptron à des abstractions mathématiques comme le MLP avec des fonctions d\'activation non linéaires a été un tournant. La puissance de l\'apprentissage profond moderne ne découle pas de sa fidélité à la biologie, mais de sa solidité en tant que cadre mathématique pour l\'approximation de fonctions. La composition répétée de transformations linéaires et de non-linéarités simples est le mécanisme fondamental qui permet à ces réseaux de construire des représentations hiérarchiques et des frontières de décision d\'une complexité arbitraire.

#### Le Théorème d\'Approximation Universelle

La puissance expressive des MLP est formalisée par un résultat mathématique fondamental : le **théorème d\'approximation universelle**. Dans sa forme la plus courante, due aux travaux de Cybenko (1989) et Hornik (1991), le théorème énonce que :

*Un perceptron multi-couches avec une seule couche cachée contenant un nombre fini de neurones et une fonction d\'activation non linéaire (par exemple, sigmoïdale) peut approximer n\'importe quelle fonction continue sur un sous-ensemble compact de Rn avec n\'importe quel degré de précision souhaité.* 

En d\'autres termes, pour toute fonction continue f(x) et toute précision ϵ\>0, il existe un MLP à une couche cachée, noté g(x), tel que ∣f(x)−g(x)∣\<ϵ pour toutes les entrées x dans le domaine considéré.

Implications et mises en garde :

Ce théorème est d\'une importance capitale car il garantit que, en théorie, un MLP est un outil suffisamment puissant pour représenter une très large classe de fonctions. Il justifie l\'utilisation des réseaux de neurones comme des modèles d\'apprentissage généraux.

Cependant, il est essentiel de comprendre ses limites  :

> **C\'est un théorème d\'existence :** Il prouve que de tels poids *existent*, mais il ne fournit aucune méthode pour les trouver. Le défi pratique de l\'apprentissage, c\'est-à-dire le processus de recherche de ces poids optimaux, reste entier.
>
> **La largeur peut être arbitrairement grande :** Le théorème ne met pas de limite au nombre de neurones nécessaires dans la couche cachée, qui pourrait être exponentiellement grand et donc irréalisable en pratique.
>
> **Profondeur vs. Largeur :** Des versions plus récentes du théorème ont montré que des réseaux plus profonds peuvent être plus efficaces (nécessiter moins de paramètres au total) que des réseaux larges et peu profonds pour approximer certaines classes de fonctions.

En conclusion, le théorème d\'approximation universelle nous assure que les MLP ont la *capacité de représentation* nécessaire. La section suivante se concentrera sur la manière de réaliser ce potentiel par le biais de l\'entraînement et de l\'optimisation.

  -------------- ----------------------- ---------------------- -------------- ---------------------------------------------------------------------- ----------------------------------------------------------------
  Fonction       Équation Mathématique   Intervalle de Sortie   Dérivée        Avantages                                                              Inconvénients

  **Sigmoïde**   σ(z)=1+e−z1​             (0,1)                  σ(z)(1−σ(z))   Sortie interprétable comme une probabilité; Lisse et différentiable.   Sature (disparition du gradient); Sortie non centrée sur zéro.

  **Tanh**       tanh(z)=ez+e−zez−e−z​    (−1,1)                 1−tanh2(z)     Sortie centrée sur zéro, ce qui peut accélérer la convergence.         Sature (disparition du gradient).

  **ReLU**       f(z)=max(0,z)           \$                                                                                                           
  -------------- ----------------------- ---------------------- -------------- ---------------------------------------------------------------------- ----------------------------------------------------------------

## 44.2 Entraînement et Optimisation

Avoir établi qu\'un Perceptron Multi-Couches possède la capacité théorique d\'approximer des fonctions complexes est une première étape cruciale. Cependant, la question fondamentale demeure : comment trouver les valeurs spécifiques des millions de poids et de biais qui permettent au réseau de réaliser une tâche donnée? Cette section constitue le cœur mécanique de l\'apprentissage profond. Elle détaille le processus par lequel un réseau de neurones \"apprend\" à partir des données, en partant du principe de la minimisation d\'une fonction d\'erreur, en passant par la dérivation rigoureuse de l\'algorithme de rétropropagation qui en est le moteur, jusqu\'à l\'analyse des techniques d\'optimisation et de régularisation qui assurent son efficacité et sa robustesse.

### 44.2.1 La Descente de Gradient et la Fonction de Coût

L\'entraînement d\'un réseau de neurones dans un cadre d\'apprentissage supervisé est fondamentalement un problème d\'optimisation. L\'objectif est d\'ajuster les paramètres du modèle pour qu\'il produise des prédictions aussi précises que possible.

#### Le paradigme de l\'apprentissage supervisé

Le contexte est le suivant : nous disposons d\'un ensemble de données d\'entraînement, constitué de m paires d\'exemples {(x(1),y(1)),(x(2),y(2)),\...,(x(m),y(m))}. Pour chaque exemple,

x(i) est le vecteur d\'entrée (par exemple, les pixels d\'une image) et y(i) est la sortie désirée ou l\'étiquette correcte (par exemple, la classe de l\'image). Notre réseau de neurones, que nous pouvons voir comme une fonction paramétrique complexe f, prend x(i) en entrée et produit une prédiction y\^​(i)=f(x(i);θ), où θ représente l\'ensemble de tous les poids W et biais b du réseau. L\'objectif de l\'apprentissage est de trouver l\'ensemble de paramètres θ∗ qui rend les prédictions y\^​ les plus proches possible des véritables étiquettes y.

#### Quantifier l\'erreur : la fonction de coût

Pour guider ce processus d\'ajustement, nous devons d\'abord quantifier l\'erreur du réseau. C\'est le rôle de la **fonction de coût** (ou fonction de perte, *loss function*), notée J(θ). Cette fonction prend en entrée les paramètres du modèle et calcule un score scalaire qui mesure l\'inadéquation entre les prédictions du réseau et les valeurs réelles sur l\'ensemble des données. Plus l\'erreur est grande, plus la valeur de J(θ) est élevée. Le choix de la fonction de coût dépend de la nature de la tâche :

> **Erreur Quadratique Moyenne (Mean Squared Error - MSE) :** Utilisée principalement pour les tâches de **régression**, où la sortie est une valeur continue. Elle est définie comme la moyenne des carrés des différences entre les prédictions et les valeurs réelles.\
> J(θ)=m1​i=1∑m​(y\^​(i)−y(i))2
>
> **Entropie Croisée (Cross-Entropy Loss) :** C\'est la fonction de coût standard pour les tâches de **classification**. Elle mesure la dissimilarité entre la distribution de probabilité prédite par le modèle (généralement via une fonction d\'activation Softmax en sortie) et la distribution de probabilité réelle (qui est une distribution \"one-hot\", où la probabilité est de 1 pour la classe correcte et 0 pour les autres). Pour la classification binaire, elle se simplifie en  :\
> \
> \$\$ J(\\theta) = -\\frac{1}{m} \\sum\_{i=1}\^{m} \\left\[ y\^{(i)} \\log(\\hat{y}\^{(i)}) + (1-y\^{(i)}) \\log(1-\\hat{y}\^{(i)}) \\right\] \$\$

#### L\'optimisation comme minimisation et l\'algorithme de Descente de Gradient

L\'apprentissage est ainsi reformulé comme un problème d\'optimisation : trouver l\'ensemble de paramètres θ∗ qui minimise la fonction de coût J(θ).

θ∗=argθmin​J(θ)

Étant donné la complexité et la non-convexité de la fonction de coût pour les réseaux de neurones profonds, il est impossible de trouver ce minimum analytiquement. Nous devons recourir à une méthode itérative. L\'algorithme le plus fondamental pour cette tâche est la descente de gradient.

L\'intuition est simple : imaginons la fonction de coût comme un paysage montagneux, où l\'altitude en chaque point représente la valeur de la perte pour un ensemble de paramètres donné. Notre objectif est de trouver le point le plus bas de ce paysage. La descente de gradient propose de partir d\'un point aléatoire (initialisation aléatoire des poids) et de faire de petits pas dans la direction de la pente la plus forte vers le bas. Mathématiquement, la direction de la pente la plus forte est donnée par le **gradient** de la fonction de coût, noté ∇θ​J(θ). Le gradient est un vecteur qui contient les dérivées partielles de la fonction de coût par rapport à chaque paramètre du modèle (∂wij​∂J​, ∂bj​∂J​). Pour descendre, nous nous déplaçons donc dans la direction opposée au gradient.

La règle de mise à jour pour un paramètre générique θj​ (un poids ou un biais) à chaque itération est donc :

θj​←θj​−η∂θj​∂J​

où η est un hyperparamètre appelé taux d\'apprentissage (learning rate). Il contrôle la taille des pas que nous effectuons. Un η trop petit rendra la convergence très lente, tandis qu\'un η trop grand risque de nous faire \"sauter\" par-dessus le minimum et de diverger.19 La question centrale devient alors : comment calculer efficacement le gradient

∇θ​J(θ) pour un réseau contenant potentiellement des millions de paramètres?

### 44.2.2 Dérivation Formelle de l\'Algorithme de Rétropropagation (Backpropagation)

Calculer la dérivée partielle de la fonction de coût par rapport à chaque poids individuellement serait un processus d\'une complexité computationnelle prohibitive. L\'algorithme de **rétropropagation du gradient** (souvent abrégé en *backpropagation* ou *backprop*) est la solution élégante et efficace à ce problème. Il s\'agit d\'un algorithme qui exploite la structure en couches du réseau et la règle de dérivation en chaîne pour calculer tous les gradients en un seul passage vers l\'arrière, après un passage vers l\'avant.

L\'erreur est initialement calculée uniquement à la sortie du réseau, là où la prédiction est comparée à la vérité terrain. La rétropropagation peut être vue comme un mécanisme de distribution de la \"responsabilité\" de cette erreur finale à chaque poids et biais à travers le réseau. Un poids qui a fortement contribué à une grande erreur se verra attribuer une part plus importante de cette erreur et subira une correction plus importante. Cette distribution de la responsabilité est précisément ce que la règle de dérivation en chaîne permet de calculer de manière formelle.

#### Le fondement mathématique : la Règle de Dérivation en Chaîne

La pierre angulaire de la rétropropagation est la règle de dérivation en chaîne du calcul différentiel. Pour une composition de fonctions, si y=f(u) et u=g(x), alors la dérivée de y par rapport à x est donnée par :

∂x∂y​=∂u∂y​∂x∂u​

Dans un réseau de neurones, la fonction de coût est une longue chaîne de fonctions composées (chaque couche est une fonction de la précédente). La rétropropagation applique cette règle de manière itérative, de la dernière couche à la première.26

#### Dérivation pas à pas

Pour dériver l\'algorithme, nous allons établir des notations claires pour un MLP à L couches :

> wjk(l)​ : le poids de la connexion entre le k-ième neurone de la couche l−1 et le j-ième neurone de la couche l.
>
> bj(l)​ : le biais du j-ième neurone de la couche l.
>
> zj(l)​=∑k​wjk(l)​ak(l−1)​+bj(l)​ : la somme pondérée (entrée) du j-ième neurone de la couche l.
>
> aj(l)​=σ(zj(l)​) : l\'activation (sortie) du j-ième neurone de la couche l, où σ est la fonction d\'activation.
>
> J : la fonction de coût.

Notre objectif est de calculer ∂wjk(l)​∂J​ et ∂bj(l)​∂J​ pour tous les l,j,k.

**1. L\'erreur à la couche de sortie (l=L)**

Nous commençons par la fin. Nous définissons un terme d\'erreur δj(l)​ pour chaque neurone j de chaque couche l comme étant la dérivée partielle de la fonction de coût par rapport à la somme pondérée zj(l)​ de ce neurone :

δj(l)​≡∂zj(l)​∂J​

Pour la couche de sortie L, nous pouvons calculer ce terme directement en utilisant la règle en chaîne :

δj(L)​=∂aj(L)​∂J​∂zj(L)​∂aj(L)​​

Les deux termes de ce produit sont faciles à calculer :

> ∂aj(L)​∂J​ est simplement la dérivée de la fonction de coût par rapport à l\'activation de sortie. Pour une erreur quadratique moyenne et un seul exemple, J=21​∑j​(aj(L)​−yj​)2, donc ∂aj(L)​∂J​=(aj(L)​−yj​).
>
> ∂zj(L)​∂aj(L)​​ est la dérivée de la fonction d\'activation, σ′(zj(L)​).

Ainsi, l\'équation pour l\'erreur à la couche de sortie est  :

δj(L)​=∂aj(L)​∂J​σ′(zj(L)​)

En notation vectorielle : δ(L)=∇a​J⊙σ′(z(L)), où ⊙ est le produit d\'Hadamard (multiplication élément par élément).

**2. Propagation de l\'erreur vers l\'arrière (l\<L)**

C\'est ici que la \"rétropropagation\" prend tout son sens. Nous voulons exprimer l\'erreur δ(l) d\'une couche l en fonction de l\'erreur δ(l+1) de la couche suivante l+1. En appliquant à nouveau la règle en chaîne, nous voyons que l\'erreur J est influencée par zj(l)​ à travers toutes les sommes pondérées de la couche suivante, zk(l+1)​ :

\$\$ \\delta\^{(l)}\_j = \\frac{\\partial J}{\\partial z\^{(l)}\_j} = \\sum_k \\frac{\\partial J}{\\partial z\^{(l+1)}\_k} \\frac{\\partial z\^{(l+1)}\_k}{\\partial z\^{(l)}\_j}

\$\$Le premier terme dans la somme est simplement \$\\delta\^{(l+1)}\_k\$. Le second terme se décompose :\$\$

\\frac{\\partial z\^{(l+1)}\_k}{\\partial z\^{(l)}\_j} = \\frac{\\partial z\^{(l+1)}\_k}{\\partial a\^{(l)}\_j} \\frac{\\partial a\^{(l)}\_j}{\\partial z\^{(l)}\_j} \$\$

Sachant que zk(l+1)​=∑j​wkj(l+1)​aj(l)​+bk(l+1)​, on a ∂aj(l)​∂zk(l+1)​​=wkj(l+1)​. Et ∂zj(l)​∂aj(l)​​=σ′(zj(l)​). En substituant, on obtient la relation de récurrence fondamentale de la rétropropagation 19 :

δj(l)​=(k∑​wkj(l+1)​δk(l+1)​)σ′(zj(l)​)

En notation vectorielle : δ(l)=((W(l+1))Tδ(l+1))⊙σ′(z(l)). Cette équation montre que l\'erreur d\'un neurone dans une couche cachée est la somme des erreurs des neurones de la couche suivante, pondérée par les poids des connexions qui les relient, le tout multiplié par la dérivée de sa propre fonction d\'activation.

**3. Calcul des gradients**

Une fois que nous avons calculé les termes d\'erreur δ(l) pour toutes les couches, le calcul des gradients pour les poids et les biais devient trivial. En utilisant une dernière fois la règle en chaîne :

\$\$ \\frac{\\partial J}{\\partial w\^{(l)}\_{jk}} = \\frac{\\partial J}{\\partial z\^{(l)}\_j} \\frac{\\partial z\^{(l)}j}{\\partial w\^{(l)}{jk}} = \\delta\^{(l)}\_j a\^{(l-1)}\_k \$\$

\$\$ \\frac{\\partial J}{\\partial b\^{(l)}\_j} = \\frac{\\partial J}{\\partial z\^{(l)}\_j} \\frac{\\partial z\^{(l)}\_j}{\\partial b\^{(l)}\_j} = \\delta\^{(l)}\_j \\cdot 1 = \\delta\^{(l)}j \$\$

Ces deux équations sont remarquablement simples. Le gradient d\'un poids \$w\^{(l)}{jk}\$ est simplement le produit de l\'activation du neurone d\'origine (ak(l−1)​) et de l\'erreur du neurone de destination (δj(l)​).19

#### Synthèse de l\'algorithme

L\'algorithme de rétropropagation pour un exemple d\'entraînement donné se déroule comme suit :

> **Propagation avant (Forward Pass) :**

Prendre l\'entrée x et la définir comme a(0).

Pour chaque couche l=1,2,\...,L, calculer z(l)=W(l)a(l−1)+b(l) et a(l)=σ(z(l)). Stocker tous les z(l) et a(l).

> **Calcul de l\'erreur de sortie :**

Calculer le vecteur d\'erreur pour la couche de sortie L : δ(L)=∇a​J⊙σ′(z(L)).

> **Rétropropagation de l\'erreur (Backward Pass) :**

Pour chaque couche l=L−1,L−2,\...,2, calculer le vecteur d\'erreur : δ(l)=((W(l+1))Tδ(l+1))⊙σ′(z(l)).

> **Calcul des gradients :**

Pour chaque couche l=1,2,\...,L, les gradients sont : ∂wjk(l)​∂J​=ak(l−1)​δj(l)​ et ∂bj(l)​∂J​=δj(l)​.

Ces gradients sont ensuite utilisés dans un algorithme d\'optimisation, comme la descente de gradient, pour mettre à jour les poids et les biais.

### 44.2.3 Analyse Comparative des Optimiseurs : SGD et Adam

L\'algorithme de descente de gradient de base, qui calcule le gradient sur l\'ensemble du jeu de données avant chaque mise à jour (appelé **Batch Gradient Descent**), est rarement utilisé en pratique pour les grands ensembles de données. Des variantes plus efficaces ont été développées.

#### Descente de Gradient Stochastique (SGD)

La **Descente de Gradient Stochastique (SGD)** va à l\'extrême opposé : elle estime le gradient et met à jour les paramètres en utilisant un seul exemple d\'entraînement à la fois. Entre les deux se trouve la **Mini-batch Gradient Descent**, qui est la méthode la plus couramment utilisée. Elle calcule le gradient sur un petit sous-ensemble aléatoire de données (un \"mini-lot\" ou *mini-batch*) à chaque étape.

> **Avantages :** La SGD et ses variantes par mini-lots sont beaucoup plus rapides en termes de calcul par mise à jour. La nature \"bruitée\" des mises à jour (car le gradient n\'est qu\'une estimation) peut aider l\'algorithme à échapper aux minima locaux peu profonds et à trouver de meilleures solutions.
>
> **Inconvénients :** La trajectoire de la descente est très oscillante, ce qui peut ralentir la convergence globale vers le minimum.

#### Améliorations de la SGD : le Moment

Pour atténuer les oscillations de la SGD, la technique du moment a été introduite. L\'idée est d\'ajouter une \"inertie\" à la mise à jour. Au lieu de se baser uniquement sur le gradient actuel, la mise à jour est une combinaison du gradient actuel et de la direction de mise à jour précédente. On maintient une \"vitesse\" v, qui est une moyenne mobile exponentielle des gradients passés :

vt​=βvt−1​+(1−β)∇θ​J(θt​)

θt+1​=θt​−ηvt​

où β est un hyperparamètre (généralement autour de 0.9). Le moment aide à accélérer la convergence dans les directions où le gradient est constant et à amortir les oscillations dans les directions où il change rapidement.19

#### Optimiseurs Adaptatifs : Adam

Une autre classe d\'optimiseurs, dits **adaptatifs**, a été développée pour ajuster automatiquement le taux d\'apprentissage pour chaque paramètre individuellement. L\'optimiseur **Adam (Adaptive Moment Estimation)** est le plus populaire et souvent le choix par défaut pour de nombreuses applications. Adam combine deux idées principales :

> **Estimation du premier moment (Momentum) :** Il maintient une moyenne mobile exponentielle des gradients passés (la \"vitesse\" mt​), similaire au moment classique.
>
> **Estimation du second moment (Variance) :** Il maintient également une moyenne mobile exponentielle des *carrés* des gradients passés (la \"variance non centrée\" vt​).

La règle de mise à jour pour un paramètre θ est approximativement :

θt+1​=θt​−ηv\^t​​+ϵm\^t​​

où m\^t​ et v\^t​ sont les estimations des moments corrigées du biais d\'initialisation, et ϵ est une petite constante pour éviter la division par zéro. Essentiellement, Adam divise le taux d\'apprentissage par la racine carrée de la variance des gradients passés pour ce paramètre. Si un paramètre a reçu des gradients de grande magnitude par le passé, son taux d\'apprentissage effectif sera réduit. Inversement, s\'il a reçu des gradients faibles, son taux d\'apprentissage sera augmenté. Cela conduit souvent à une convergence beaucoup plus rapide que la SGD.31

#### Le \"Generalization Gap\"

L\'introduction d\'optimiseurs comme Adam a été perçue comme une avancée majeure, simplifiant le réglage du taux d\'apprentissage et accélérant l\'entraînement. Cependant, un corpus croissant de recherches a mis en évidence un phénomène connu sous le nom de **\"generalization gap\"** : bien qu\'Adam converge plus rapidement en termes de perte d\'entraînement, les modèles entraînés avec la SGD (avec moment) atteignent souvent une meilleure performance sur l\'ensemble de test, en particulier dans des domaines comme la vision par ordinateur.

Cela suggère que l\'objectif de l\'optimisation dans les espaces non-convexes n\'est pas simplement de trouver n\'importe quel minimum, mais de trouver un \"bon\" minimum. L\'hypothèse dominante est que la nature plus bruitée de la SGD et son taux d\'apprentissage global l\'aident à s\'installer dans des minima \"larges et plats\" du paysage de la perte. Ces minima plats sont plus robustes : de petites variations dans les données d\'entrée (comme celles entre l\'ensemble d\'entraînement et de test) ne modifient que légèrement la valeur de la perte. En revanche, l\'optimisation plus agressive et par paramètre d\'Adam pourrait le conduire plus rapidement vers des minima \"étroits et profonds\", qui sont moins robustes et généralisent moins bien. Ce compromis entre vitesse de convergence et qualité de la généralisation est un domaine de recherche actif et crucial pour la pratique de l\'apprentissage profond.

### 44.2.4 Stratégies de Régularisation pour la Généralisation

Un modèle avec un grand nombre de paramètres, comme un réseau de neurones profond, a une grande capacité à s\'adapter aux données. S\'il est entraîné trop longtemps sur un ensemble de données limité, il peut commencer à \"mémoriser\" les exemples d\'entraînement, y compris leur bruit et leurs particularités, au lieu d\'apprendre la structure sous-jacente des données. Ce phénomène, appelé **surapprentissage (overfitting)**, se manifeste par une faible erreur sur l\'ensemble d\'entraînement mais une erreur élevée sur des données nouvelles et non vues. Les techniques de

**régularisation** sont essentielles pour combattre le surapprentissage et améliorer la capacité de généralisation du modèle.

#### Régularisation L2 (Weight Decay)

La régularisation L2 est l\'une des formes de régularisation les plus courantes. Elle consiste à ajouter un terme de pénalité à la fonction de coût qui est proportionnel à la somme des carrés de tous les poids du réseau :

Jreg​(θ)=J(θ)+2mλ​w∑​w2

où λ est l\'hyperparamètre de régularisation qui contrôle la force de la pénalité. En minimisant cette nouvelle fonction de coût, l\'algorithme d\'optimisation est incité non seulement à réduire l\'erreur de prédiction, mais aussi à maintenir les poids à de faibles valeurs. Des poids plus petits conduisent à un modèle plus \"simple\", où la sortie change moins radicalement en réponse à de petites variations de l\'entrée. Cela rend le modèle moins sensible au bruit dans les données d\'entraînement et moins susceptible de surapprendre.37

#### Dropout

Le **Dropout** est une technique de régularisation puissante et radicalement différente, proposée par Hinton et ses collaborateurs. L\'idée est simple : pendant l\'entraînement, à chaque itération et pour chaque couche, on \"désactive\" (met à zéro) aléatoirement un certain nombre de neurones avec une probabilité p (une valeur typique est p=0.5). Les neurones désactivés ne participent ni à la propagation avant ni à la rétropropagation lors de cette itération.

L\'intuition est que cette procédure empêche les neurones de développer une co-adaptation complexe. Si un neurone ne peut pas se fier à la présence de ses voisins, il est forcé d\'apprendre des caractéristiques qui sont utiles en elles-mêmes. Une autre interprétation est que le Dropout entraîne implicitement un très grand ensemble de réseaux de neurones \"clairsemés\" (avec différentes architectures) et fait la moyenne de leurs prédictions au moment du test. Cette approche d\'ensemble est un moyen très efficace de réduire le surapprentissage.

  ------------------ ----------------------------------- ---------------------- ------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------
  Optimiseur         Règle de Mise à Jour (simplifiée)   Hyperparamètres Clés   Avantages                                                                                                                       Inconvénients

  **SGD**            θ←θ−η∇J                             η                      Simple; Peut trouver des minima plus larges qui généralisent mieux.                                                             Convergence lente; Sensible au choix de η; Peut osciller fortement.

  **SGD+Momentum**   v←βv+∇J; θ←θ−ηv                     η,β                    Accélère la convergence par rapport à la SGD; Amortit les oscillations.                                                         Nécessite le réglage de β.

  **Adam**           θ←θ−ηv\^​+ϵm\^​                       η,β1​,β2​,ϵ              Convergence très rapide; Taux d\'apprentissage adaptatif par paramètre; Souvent efficace avec les hyperparamètres par défaut.   Peut converger vers des minima plus \"pointus\" et moins bien généraliser (generalization gap); Plus gourmand en mémoire.
  ------------------ ----------------------------------- ---------------------- ------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------

**Tableau 44.2: Synthèse des Algorithmes d\'Optimisation** 

## 44.3 Architectures Spécialisées

Les Perceptrons Multi-Couches (MLP) sont des approximateurs universels, mais leur structure générique, pleinement connectée, ne tire pas parti des structures inhérentes à certains types de données. Pour des données comme les images, qui possèdent une forte structure spatiale, ou le texte, qui a une structure séquentielle, des architectures spécialisées ont été développées. Ces architectures incorporent des \"priors\" ou des hypothèses sur la nature des données directement dans leur conception, ce qui les rend beaucoup plus efficaces en termes de nombre de paramètres et de performance. Cette section explore les trois architectures qui ont défini l\'ère moderne de l\'apprentissage profond : les Réseaux de Neurones Convolutifs (CNN), les Réseaux de Neurones Récurrents (RNN) et leurs variantes, et les Transformers.

### 44.3.1 Réseaux de Neurones Convolutifs (CNN)

Les Réseaux de Neurones Convolutifs sont la pierre angulaire de la vision par ordinateur moderne. Leur conception est directement inspirée par l\'organisation du cortex visuel humain et est spécifiquement conçue pour traiter des données qui ont une topologie de grille, comme les images.

#### Motivation et Intuition

Appliquer un MLP standard à une image, même de taille modeste, présente deux problèmes majeurs :

> **Explosion du nombre de paramètres :** Une image en couleur de 224x224 pixels a 224×224×3≈150,000 valeurs d\'entrée. Si la première couche cachée d\'un MLP contenait 1000 neurones, cela nécessiterait plus de 150 millions de poids juste pour cette première couche. Un tel modèle serait impossible à entraîner sans une quantité astronomique de données et serait extrêmement sujet au surapprentissage.
>
> **Perte de la structure spatiale :** En aplatissant l\'image en un long vecteur, le MLP ignore la topologie 2D. L\'information que les pixels voisins sont fortement corrélés est perdue. De plus, le modèle n\'est pas **invariant à la translation** : si un objet (par exemple, un chat) est appris dans le coin supérieur gauche de l\'image, le modèle ne le reconnaîtra pas automatiquement s\'il apparaît dans le coin inférieur droit. Il devrait réapprendre le motif à chaque nouvel emplacement.

Les CNNs résolvent ces problèmes en intégrant deux idées fondamentales : la localité des connexions et le partage de poids.

#### L\'Opération de Convolution et le Partage de Poids

L\'élément central d\'un CNN est la **couche convolutive**, qui remplace les couches denses des MLP.

> **Champs Récepteurs Locaux :** Au lieu d\'être connecté à chaque pixel de l\'image d\'entrée, un neurone dans une couche convolutive n\'est connecté qu\'à une petite région locale de la couche précédente, appelée son **champ récepteur** (*receptive field*). Cette idée s\'inspire du fait que les neurones du cortex visuel ne répondent qu\'à des stimuli dans une zone restreinte du champ de vision.
>
> **Noyaux (Filtres) :** La connexion locale est implémentée via un **noyau** (*kernel*) ou **filtre**. Un noyau est une petite matrice de poids (par exemple, 3x3 ou 5x5) qui est apprise. Ce noyau agit comme un détecteur de caractéristiques : il est conçu pour s\'activer lorsqu\'il rencontre un motif spécifique dans son champ récepteur, comme un contour vertical, un coin, une couleur particulière, ou une texture.
>
> **L\'Opération de Convolution :** L\'opération de convolution consiste à faire \"glisser\" ce noyau sur toute l\'image d\'entrée, de gauche à droite et de haut en bas. À chaque position, on calcule le produit scalaire entre les poids du noyau et les valeurs des pixels de l\'image sous-jacente. Le résultat de ce calcul pour une position donnée est une seule valeur dans la sortie. En effectuant cette opération sur toute l\'image, on produit une nouvelle matrice 2D appelée **carte de caractéristiques** (*feature map*). Cette carte indique les emplacements où la caractéristique détectée par le noyau est présente dans l\'image. Mathématiquement, pour une image d\'entrée\
> I et un noyau K, la valeur de la carte de caractéristiques en position (i,j) est  :\
> (I∗K)(i,j)=m∑​n∑​I(i−m,j−n)K(m,n)
>
> **Partage de Poids (Weight Sharing) :** C\'est le concept le plus important. Le *même* ensemble de poids (le même noyau) est utilisé pour balayer toute l\'image. Cette idée, radicalement différente des MLP où chaque connexion a son propre poids, a deux conséquences transformatrices  :

**Réduction drastique des paramètres :** Au lieu d\'apprendre des millions de poids, on n\'apprend que les quelques poids du noyau (par exemple, 9 poids pour un noyau 3x3).

**Invariance à la translation :** Puisque le même détecteur de caractéristiques est appliqué partout, le réseau peut reconnaître un motif quel que soit son emplacement dans l\'image.

Une couche convolutive typique apprend plusieurs noyaux en parallèle, chacun spécialisé dans la détection d\'une caractéristique différente. Si une couche a 64 noyaux, elle produira 64 cartes de caractéristiques en sortie, formant un \"volume\" de caractéristiques.

#### Le Sous-Échantillonnage : Couches de Pooling

Après une couche de convolution (et généralement une fonction d\'activation non linéaire comme ReLU), il est courant d\'insérer une **couche de pooling** (ou sous-échantillonnage). Son rôle est de réduire progressivement la dimension spatiale (largeur et hauteur) des cartes de caractéristiques, ce qui a plusieurs avantages :

> **Réduction de la charge de calcul :** Moins de données à traiter dans les couches suivantes.
>
> **Robustesse aux petites variations :** Elle rend la représentation plus robuste aux petites translations et distorsions de la caractéristique dans l\'image.
>
> **Agrandissement du champ récepteur effectif :** En agrégeant l\'information, les neurones des couches plus profondes \"voient\" une plus grande partie de l\'image d\'origine.

L\'opération de pooling la plus courante est le **Max Pooling**. Elle consiste à faire glisser une petite fenêtre (par exemple, 2x2) sur la carte de caractéristiques et à ne conserver que la valeur maximale dans cette fenêtre. Si une caractéristique est détectée n\'importe où dans la fenêtre, le max pooling s\'assure que cette information est transmise, tout en ignorant la position exacte.

#### Architecture Typique d\'un CNN

Une architecture de CNN classique est un empilement de plusieurs blocs, chacun composé d\'une ou plusieurs couches de convolution, suivies d\'une fonction d\'activation (généralement ReLU) et d\'une couche de pooling. Cette partie convolutive du réseau agit comme un extracteur de caractéristiques hiérarchique : les premières couches apprennent des caractéristiques simples (contours, couleurs), et les couches plus profondes combinent ces caractéristiques pour en former de plus complexes (formes, parties d\'objets).

À la fin de cette pile convolutive, les cartes de caractéristiques finales (qui sont de petite taille spatiale mais de grande profondeur) sont aplaties en un seul vecteur. Ce vecteur est ensuite passé à un ou plusieurs couches pleinement connectées (un MLP standard) qui effectuent la tâche de classification finale.

### 44.3.2 Réseaux de Neurones Récurrents (RNN, LSTM, GRU)

Alors que les CNNs exploitent la structure spatiale, les **Réseaux de Neurones Récurrents (RNN)** sont conçus pour modéliser des données où l\'ordre est fondamental : les **séquences**. Le langage naturel, les séries temporelles financières, les signaux audio ou les données génomiques sont des exemples de données séquentielles où la signification d\'un élément dépend des éléments qui le précèdent.

#### Motivation et Intuition

Les MLP et les CNNs traitent chaque entrée de manière indépendante. Ils n\'ont pas de \"mémoire\" inhérente pour se souvenir des entrées précédentes. Les RNNs résolvent ce problème en introduisant une **boucle de récurrence**. L\'idée est de traiter les éléments d\'une séquence un par un, et à chaque étape, de conserver une \"mémoire\" ou un \"état\" qui résume les informations vues jusqu\'à présent.

#### L\'Architecture du RNN Simple

Un RNN simple peut être vu comme un neurone ou une couche de neurones qui, en plus de recevoir l\'entrée actuelle, reçoit également sa propre sortie de l\'étape de temps précédente. Cette boucle permet à l\'information de persister. La relation de récurrence qui définit un RNN est la suivante :

ht​=fW​(ht−1​,xt​)

où :

> xt​ est le vecteur d\'entrée à l\'instant t.
>
> ht−1​ est l\'**état caché** (*hidden state*) à l\'instant t−1. Il sert de mémoire de la séquence passée.
>
> ht​ est le nouvel état caché à l\'instant t.
>
> fW​ est la fonction de transition, généralement une transformation affine suivie d\'une non-linéarité (comme Tanh), paramétrée par un ensemble de poids W (qui inclut les poids pour l\'entrée et les poids récurrents pour l\'état caché précédent).

Crucialement, les **mêmes poids W sont utilisés à chaque pas de temps**. C\'est l\'équivalent du partage de poids des CNNs, mais dans le domaine temporel. Le réseau apprend une seule règle de transition qui est appliquée de manière répétée. La sortie du réseau à l\'instant t, notée y\^​t​, est généralement calculée à partir de l\'état caché ht​.

#### Le Problème de la Mémoire à Long Terme : Disparition et Explosion du Gradient

Pour entraîner un RNN, on utilise une version de la rétropropagation appelée **Backpropagation Through Time (BPTT)**. Elle consiste à \"dérouler\" le réseau dans le temps, créant une longue chaîne de calculs, puis à appliquer l\'algorithme de rétropropagation standard.

C\'est là qu\'apparaît un problème fondamental. Pour calculer le gradient de la perte à l\'instant t par rapport à un état caché lointain hk​ (avec k≪t), la règle en chaîne implique de multiplier de manière répétée la matrice de poids récurrente Whh​ (la partie de W qui multiplie ht−1​) :

\$\$ \\frac{\\partial h_t}{\\partial h_k} = \\prod\_{i=k+1}\^{t} \\frac{\\partial h_i}{\\partial h\_{i-1}} \\propto (W\_{hh})\^{t-k} \$\$

Si les valeurs singulières dominantes de la matrice Whh​ sont inférieures à 1, ce produit tendra exponentiellement vers zéro à mesure que l\'intervalle t−k augmente. C\'est le problème de la disparition du gradient (vanishing gradient). Le signal d\'erreur provenant du futur s\'évanouit avant d\'atteindre le passé lointain, rendant impossible pour le réseau d\'apprendre des dépendances à long terme.48 Inversement, si ces valeurs sont supérieures à 1, le produit explose, menant au problème de l\'

**explosion du gradient** (*exploding gradient*), qui rend l\'entraînement instable.

#### Architectures à Portes : LSTM et GRU

Pour surmonter le problème de la disparition du gradient, des architectures de RNN plus sophistiquées ont été développées. Elles reposent sur l\'idée de **portes** (*gates*), des mécanismes neuronaux qui apprennent à réguler le flux d\'information.

> Long Short-Term Memory (LSTM) :\
> Introduit par Hochreiter et Schmidhuber en 1997, le LSTM est une architecture qui a révolutionné le traitement des séquences. Sa conception vise explicitement à permettre à l\'information de circuler sans être altérée sur de longues périodes, tout en permettant des mises à jour ciblées.55 L\'innovation clé est l\'introduction d\'un\
> **état de la cellule** (Ct​) en plus de l\'état caché (ht​).

**État de la cellule (Ct​) :** C\'est le cœur de la mémoire à long terme. On peut l\'imaginer comme un \"tapis roulant\" d\'information. Il traverse toute la chaîne séquentielle avec seulement des transformations linéaires mineures, ce qui permet au gradient de fluer facilement.\
\
L\'information est ajoutée ou retirée de l\'état de la cellule via trois portes :

**Porte d\'oubli (Forget Gate) :** Une couche sigmoïde qui regarde ht−1​ et xt​ et décide quelle proportion de l\'information de l\'état de la cellule précédent (Ct−1​) doit être oubliée (une sortie de 0 signifie \"oublier complètement\", une sortie de 1 signifie \"garder complètement\").

**Porte d\'entrée (Input Gate) :** Elle décide quelle nouvelle information stocker dans l\'état de la cellule. Elle est composée de deux parties : une couche sigmoïde qui décide quelles valeurs mettre à jour, et une couche Tanh qui crée un vecteur de nouvelles valeurs candidates. Le produit de ces deux éléments est ensuite ajouté à l\'état de la cellule.

**Porte de sortie (Output Gate) :** Elle détermine la sortie de la cellule, ht​. Elle prend l\'état de la cellule Ct​, le passe à travers une Tanh, puis le filtre avec une couche sigmoïde (basée sur ht−1​ et xt​) pour ne produire que les parties pertinentes de l\'information mémorisée.

> Gated Recurrent Unit (GRU) :\
> Introduit plus récemment par Cho et al. (2014), le GRU est une simplification du LSTM qui a souvent des performances comparables mais avec moins de paramètres, ce qui le rend plus rapide à entraîner.59 Le GRU fusionne l\'état de la cellule et l\'état caché et n\'utilise que deux portes :

**Porte de mise à jour (Update Gate) :** Elle joue un rôle similaire à celui des portes d\'oubli et d\'entrée du LSTM. Elle décide quelle proportion de l\'état caché précédent conserver et quelle proportion de la nouvelle information candidate intégrer.

**Porte de réinitialisation (Reset Gate) :** Elle détermine quelle partie de la mémoire passée (ht−1​) doit être oubliée avant de calculer les nouvelles informations candidates.

Ces architectures à portes ont permis aux RNNs de modéliser avec succès des dépendances sur des centaines de pas de temps, débloquant des applications complexes en traduction automatique, reconnaissance de la parole et génération de texte.

### 44.3.3 Transformers et Mécanismes d\'Attention

Malgré le succès des LSTMs et des GRUs, deux limitations fondamentales persistaient :

> **Traitement séquentiel :** La nature récurrente de ces modèles impose un traitement séquentiel des données. Il faut calculer ht−1​ pour pouvoir calculer ht​, ce qui empêche une parallélisation massive sur les GPU modernes et rend l\'entraînement sur de très longues séquences lent.
>
> **Goulot d\'étranglement informationnel :** Bien que les portes aident, le chemin que l\'information doit parcourir entre deux points éloignés dans une séquence reste long. Dans les architectures encodeur-décodeur pour la traduction, toute la phrase source était compressée en un seul vecteur de contexte de taille fixe, un goulot d\'étranglement évident.

Le **mécanisme d\'attention**, initialement proposé pour améliorer ces modèles encodeur-décodeur, a fourni la clé pour surmonter ces limites. L\'idée de l\'attention est de permettre au modèle, à chaque étape, de \"regarder\" directement et de se concentrer sur les parties les plus pertinentes de la séquence d\'entrée, plutôt que de se fier à un résumé compressé. L\'architecture

**Transformer**, introduite dans l\'article \"Attention Is All You Need\" de Vaswani et al. (2017), a poussé cette idée à son paroxysme en se débarrassant entièrement de la récurrence et en ne s\'appuyant que sur l\'attention.

#### Le Mécanisme d\'Auto-Attention (Self-Attention)

Le cœur du Transformer est l\'**auto-attention**. C\'est un mécanisme qui permet à chaque élément d\'une séquence d\'interagir directement avec tous les autres éléments de cette même séquence pour calculer sa propre représentation. Il pèse l\'importance de chaque autre mot par rapport au mot courant. Le calcul se fait via trois vecteurs appris pour chaque mot d\'entrée :

> **Requête (Query, Q) :** Un vecteur représentant le mot courant, qui \"interroge\" les autres mots.
>
> **Clé (Key, K) :** Un vecteur représentant un autre mot dans la séquence, qui sert d\'étiquette pour sa valeur.
>
> **Valeur (Value, V) :** Un vecteur représentant le contenu informationnel d\'un autre mot.

Le processus pour un mot donné est le suivant :

> **Calcul des scores :** Le vecteur Requête du mot courant est comparé à chaque vecteur Clé de tous les mots de la séquence (y compris lui-même) via un produit scalaire. Un score élevé signifie une forte pertinence.
>
> **Mise à l\'échelle et Normalisation (Softmax) :** Les scores sont divisés par la racine carrée de la dimension des vecteurs Clé, dk​​, pour stabiliser les gradients. Ils sont ensuite passés à travers une fonction softmax, qui les transforme en un ensemble de poids (les \"poids d\'attention\") qui somment à 1.
>
> **Sortie :** La nouvelle représentation du mot courant est calculée comme la somme pondérée de tous les vecteurs Valeur de la séquence, où les poids sont les poids d\'attention calculés à l\'étape précédente.

La formule complète est  :

Attention(Q,K,V)=softmax(dk​​QKT​)V

Ce mécanisme a un avantage majeur : le chemin entre deux mots quelconques dans la séquence est de longueur 1. L\'information peut circuler directement, résolvant le problème des dépendances à long terme. De plus, tous ces calculs peuvent être effectués en parallèle pour tous les mots de la séquence, car il n\'y a pas de dépendance temporelle.

#### L\'Architecture du Transformer

Le modèle Transformer utilise ce mécanisme d\'auto-attention comme brique de base pour construire une architecture encodeur-décodeur puissante.

> **Attention Multi-Têtes (Multi-Head Attention) :** Au lieu d\'effectuer une seule fonction d\'attention, le Transformer l\'exécute plusieurs fois en parallèle. Chaque \"tête\" d\'attention apprend des projections linéaires différentes pour les vecteurs Q, K et V, ce qui lui permet de se concentrer sur différents aspects de la relation entre les mots (par exemple, une tête pourrait se concentrer sur les relations syntaxiques, une autre sur les relations sémantiques). Les sorties de toutes les têtes sont ensuite concaténées et projetées pour produire la sortie finale.
>
> **Encodage Positionnel (Positional Encoding) :** Puisque le mécanisme d\'auto-attention est invariant à l\'ordre des mots (c\'est un traitement d\'ensemble), l\'information sur la position des mots dans la séquence est perdue. Pour réinjecter cette information cruciale, des vecteurs d\'**encodage positionnel**, qui dépendent de la position du mot, sont ajoutés aux vecteurs d\'entrée avant la première couche.
>
> **Structure de l\'Encodeur et du Décodeur :** Le Transformer est composé d\'une pile de N encodeurs identiques et d\'une pile de N décodeurs identiques.

Chaque **bloc encodeur** est composé de deux sous-couches : une couche d\'attention multi-têtes (auto-attention), suivie d\'un réseau de neurones à propagation avant (un MLP simple). Des connexions résiduelles et une normalisation de couche sont appliquées autour de chaque sous-couche.

Chaque **bloc décodeur** est similaire mais insère une troisième sous-couche. Il possède une couche d\'auto-attention multi-têtes (avec un \"masque\" pour empêcher de prêter attention aux positions futures lors de la génération), une couche d\'**attention croisée** multi-têtes (où les Requêtes viennent du décodeur et les Clés et Valeurs viennent de la sortie de l\'encodeur), et enfin un réseau de neurones à propagation avant.

Cette architecture, en abandonnant la récurrence au profit d\'un accès global et parallèle via l\'attention, a établi de nouveaux records de performance dans presque toutes les tâches de traitement du langage naturel et est devenue le fondement des grands modèles de langage modernes.

  ----------------- --------------------------- ------------------------------------------------------------ --------------------------------------------------------- ---------------------------------------------------
  Modèle            Traitement de la Séquence   Mécanisme de Mémoire                                         Gestion des Dépendances Longues                           Complexité par Couche

  **RNN Simple**    Séquentiel                  État caché simple (ht​)                                       Mauvaise (disparition/explosion du gradient)              Faible

  **LSTM**          Séquentiel                  État de la cellule (Ct​) + 3 portes (oubli, entrée, sortie)   Bonne (grâce aux portes et à l\'état de la cellule)       Élevée

  **GRU**           Séquentiel                  État caché + 2 portes (mise à jour, réinitialisation)        Bonne (grâce aux portes)                                  Moyenne

  **Transformer**   Parallèle                   Accès global via auto-attention (Q, K, V)                    Excellente (chemin de longueur 1 entre tous les tokens)   Très élevée (quadratique en longueur de séquence)
  ----------------- --------------------------- ------------------------------------------------------------ --------------------------------------------------------- ---------------------------------------------------

**Tableau 44.3: Comparaison Architecturale des Modèles Séquentiels** 

## 44.4 Modèles Génératifs

Jusqu\'à présent, nous avons exploré des architectures conçues pour des tâches **discriminatives** : étant donné une entrée X, prédire une sortie Y. Ces modèles apprennent à discriminer entre différentes classes ou à prédire une valeur continue. Cette dernière section du chapitre aborde une classe de modèles fondamentalement différente : les **modèles génératifs**. Leur objectif n\'est pas de classifier des données existantes, mais d\'apprendre la distribution sous-jacente des données d\'entraînement afin de pouvoir en **générer** de nouvelles instances, plausibles et inédites.

### 44.4.1 Modèles Discriminatifs vs Génératifs : Une Distinction Fondamentale

La distinction entre ces deux familles de modèles peut être formalisée en termes de probabilités :

> **Modèles Discriminatifs :** Ils apprennent la probabilité conditionnelle P(Y∣X). Étant donné une entrée X, quelle est la probabilité de la sortie Y? Ils se concentrent sur l\'apprentissage de la **frontière de décision** entre les classes. La plupart des modèles d\'apprentissage supervisé que nous avons vus (MLP pour la classification, CNNs, RNNs) sont de nature discriminative.
>
> **Modèles Génératifs :** Ils apprennent la probabilité conjointe P(X,Y) ou, dans le cas non supervisé, la distribution des données elles-mêmes, P(X). Ils cherchent à modéliser la manière dont les données sont générées. Une fois que P(X) est apprise, on peut en tirer des échantillons pour créer de nouvelles données.

Les modèles génératifs sont souvent plus complexes et nécessitent plus de données, mais ils sont aussi plus puissants. Leurs applications vont bien au-delà de la simple génération de contenu (images, texte, musique) ; ils sont également utilisés pour la détection d\'anomalies (un point de données avec une très faible probabilité sous P(X) est probablement une anomalie), l\'imputation de données manquantes, et même dans des cadres d\'apprentissage semi-supervisé. Nous allons nous concentrer sur deux des architectures génératives profondes les plus influentes : les Auto-encodeurs Variationnels (VAE) et les Réseaux Antagonistes Génératifs (GAN).

### 44.4.2 Les Auto-encodeurs Variationnels (VAE)

Les Auto-encodeurs Variationnels (VAE) sont des modèles génératifs qui s\'appuient sur l\'architecture des auto-encodeurs standards, mais en y ajoutant une couche de rigueur probabiliste inspirée de l\'inférence bayésienne variationnelle.

#### L\'Intuition : Un Auto-encodeur Probabiliste

Un auto-encodeur standard est un réseau de neurones non supervisé composé de deux parties : un **encodeur** qui comprime les données d\'entrée x en une représentation de faible dimension dans un **espace latent** z, et un **décodeur** qui tente de reconstruire l\'entrée originale x\^ à partir de cette représentation latente z. Il est entraîné à minimiser l\'erreur de reconstruction entre

x et x\^.

Cependant, l\'espace latent d\'un auto-encodeur standard n\'est généralement pas structuré de manière à permettre une génération de données cohérente. Il peut y avoir des \"trous\" ; des points dans l\'espace latent qui, une fois décodés, ne produisent rien de significatif. Le VAE résout ce problème en forçant l\'espace latent à être continu et bien organisé. Il ne mappe pas l\'entrée à un unique point dans l\'espace latent, mais à une **distribution de probabilité** sur cet espace.

#### Architecture et Approche Probabiliste

L\'architecture d\'un VAE est la suivante :

> L\'**encodeur** (aussi appelé réseau d\'inférence ou de reconnaissance) prend une entrée x et produit les paramètres d\'une distribution de probabilité dans l\'espace latent. Typiquement, on suppose que cette distribution est une Gaussienne, donc l\'encodeur produit un vecteur de moyennes μ et un vecteur de log-variances log(σ2).
>
> Un point latent z est ensuite **échantillonné** de cette distribution, c\'est-à-dire z∼N(μ,σ2I).
>
> Le **décodeur** (aussi appelé réseau génératif) prend ce point latent z en entrée et reconstruit l\'échantillon de données x\^.

#### La Fonction de Coût ELBO (Evidence Lower Bound)

L\'entraînement du VAE se fait en optimisant une fonction de coût spécifique dérivée de la théorie de l\'information, appelée **Evidence Lower Bound (ELBO)**. La minimisation de la perte (qui est l\'opposé de l\'ELBO) accomplit deux objectifs simultanément  :

> **Perte de reconstruction :** Ce terme mesure la différence entre l\'entrée originale x et la sortie reconstruite x\^. Il s\'agit généralement de l\'erreur quadratique moyenne pour des données réelles ou de l\'entropie croisée pour des données binaires. Ce terme pousse le VAE à encoder suffisamment d\'informations dans z pour pouvoir reconstruire fidèlement x.
>
> **Divergence de Kullback-Leibler (KL) :** Ce terme agit comme un régularisateur. Il mesure la \"distance\" entre la distribution apprise par l\'encodeur pour une entrée donnée, q(z∣x)=N(μ,σ2I), et une distribution a priori simple, généralement une Gaussienne centrée réduite, p(z)=N(0,I). En minimisant cette divergence KL, on force l\'encodeur à produire des distributions qui sont proches de la distribution a priori. Cela a pour effet d\'organiser l\'espace latent : les encodages des différentes entrées sont regroupés autour de l\'origine, créant un espace continu et dense qui est propice à la génération.

#### L\'Astuce de Reparamétrisation (Reparameterization Trick)

Un défi majeur dans l\'entraînement du VAE est que le gradient ne peut pas être rétropropagé à travers l\'étape d\'échantillonnage aléatoire. L\'astuce de reparamétrisation est une solution ingénieuse à ce problème. Au lieu d\'échantillonner directement z à partir de la distribution N(μ,σ2I), on externalise l\'aléa. On échantillonne un bruit ϵ à partir d\'une distribution standard fixe N(0,I), puis on calcule z de manière déterministe :

z=μ+σ⊙ϵ

où ⊙ est la multiplication élément par élément. Le résultat z suit toujours la distribution désirée, mais le chemin de calcul de z à partir de μ et σ est maintenant déterministe et différentiable. Le gradient peut donc circuler de la perte de reconstruction, à travers le décodeur, à travers z, jusqu\'aux paramètres μ et σ de l\'encodeur, permettant l\'entraînement de l\'ensemble du modèle de bout en bout.75

Les VAE représentent une approche d\'inférence élégante pour la modélisation générative. Ils apprennent un espace latent structuré et interprétable. Cependant, ils ont tendance à produire des résultats (en particulier des images) qui sont un peu flous, car la perte de reconstruction moyennée sur la distribution latente favorise des solutions conservatrices.

### 44.4.3 Les Réseaux Antagonistes Génératifs (GAN)

Introduits par Ian Goodfellow et ses collaborateurs en 2014, les **Réseaux Antagonistes Génératifs (GAN)** proposent une approche radicalement différente et puissante pour la modélisation générative, basée sur la théorie des jeux.

#### L\'Intuition : Un Jeu à Deux Joueurs

Un GAN est composé de deux réseaux de neurones qui sont entraînés en compétition l\'un contre l\'autre  :

> **Le Générateur (G) :** Son rôle est celui d\'un \"faussaire\". Il prend en entrée un vecteur de bruit aléatoire z (provenant d\'un espace latent simple) et sa tâche est de le transformer en une donnée synthétique x\^=G(z) qui ressemble le plus possible aux vraies données.
>
> **Le Discriminateur (D) :** Son rôle est celui d\'un \"expert\" ou d\'un \"policier\". Il reçoit en entrée soit une vraie donnée x de l\'ensemble d\'entraînement, soit une fausse donnée x\^ du générateur. Sa tâche est de déterminer si la donnée qu\'il voit est réelle ou synthétique.

L\'entraînement est un processus dynamique. Le discriminateur s\'améliore en apprenant à mieux distinguer le vrai du faux. Le générateur, en retour, reçoit le signal du discriminateur (le gradient de la perte) et s\'améliore en apprenant à produire des données de plus en plus réalistes pour tromper le discriminateur.

#### Le Jeu Minimax

Ce processus est formalisé comme un jeu minimax à deux joueurs. Le discriminateur D veut maximiser la probabilité de classer correctement les vraies et les fausses données, tandis que le générateur G veut minimiser la probabilité que le discriminateur détecte ses créations. La fonction de valeur V(D,G) du jeu est :

Gmin​Dmax​V(D,G)=Ex∼pdata​(x)​+Ez∼pz​(z)​

> Le terme maxD​ signifie que le discriminateur veut maximiser cette valeur. Pour une entrée réelle x, il veut que D(x) soit proche de 1. Pour une entrée fausse G(z), il veut que D(G(z)) soit proche de 0, ce qui maximise log(1−D(G(z))).
>
> Le terme minG​ signifie que le générateur veut minimiser cette valeur. Il ne peut influencer que le second terme. Pour minimiser log(1−D(G(z))), il doit faire en sorte que D(G(z)) soit le plus proche possible de 1, c\'est-à-dire qu\'il doit tromper le discriminateur en lui faisant croire que ses données sont réelles.

L\'entraînement se fait de manière alternée : on fixe le générateur et on entraîne le discriminateur pour quelques étapes (montée de gradient), puis on fixe le discriminateur et on entraîne le générateur pour une étape (descente de gradient).

#### Convergence et Défis

En théorie, ce jeu atteint un **équilibre de Nash** où le générateur a appris à reproduire parfaitement la distribution des données réelles. À ce point, ses sorties sont indiscernables des vraies données, et le discriminateur est complètement confus, produisant une probabilité de 0.5 pour n\'importe quelle entrée.

En pratique, l\'entraînement des GANs est notoirement instable et difficile. Les principaux défis incluent :

> **Non-convergence :** Les paramètres des deux réseaux peuvent osciller sans jamais atteindre un équilibre stable.
>
> **Effondrement de mode (Mode Collapse) :** C\'est un problème courant où le générateur découvre une ou quelques sorties qui trompent particulièrement bien le discriminateur et se met à ne produire que cette faible variété d\'échantillons, au lieu d\'apprendre toute la diversité de la distribution des données.
>
> **Disparition du gradient :** Si le discriminateur devient trop fort trop rapidement, il peut rejeter les sorties du générateur avec une très grande confiance. Le gradient renvoyé au générateur devient alors très faible, et ce dernier cesse d\'apprendre.

Malgré ces défis, les GANs et leurs nombreuses variantes (DCGAN, StyleGAN, CycleGAN) ont produit des résultats d\'un réalisme saisissant, en particulier dans la génération d\'images, et ont redéfini l\'état de l\'art dans le domaine des modèles génératifs.

Les VAE et les GAN incarnent deux philosophies distinctes de la génération. Le VAE adopte une approche basée sur l\'inférence probabiliste, cherchant à modéliser explicitement une distribution via l\'optimisation de la vraisemblance. Le GAN, quant à lui, utilise une approche basée sur la théorie des jeux, où la notion de \"réalisme\" n\'est pas définie par une fonction de perte fixe comme la MSE, mais est apprise dynamiquement par le discriminateur. C\'est cette fonction de perte adaptative qui permet aux GANs de capturer les textures et les structures complexes du monde réel avec une fidélité que les fonctions de perte basées sur les pixels peinent à atteindre.

# Chapitre 45 : Apprentissage par Renforcement (RL)

## Introduction

L\'apprentissage par renforcement (AR) constitue le troisième grand paradigme de l\'apprentissage automatique, se distinguant de l\'apprentissage supervisé et de l\'apprentissage non supervisé par son approche unique de l\'acquisition de connaissances. Alors que l\'apprentissage supervisé apprend à partir de données étiquetées et que l\'apprentissage non supervisé cherche à découvrir des structures latentes dans des données non étiquetées, l\'apprentissage par renforcement aborde le problème de la prise de décision séquentielle. Il se concentre sur la manière dont un agent intelligent doit agir dans un environnement afin de maximiser une notion de récompense cumulative. Le principe fondamental repose sur l\'idée d\'un apprentissage par essais et erreurs, où un agent, qu\'il soit un programme informatique, un robot ou un système autonome, apprend de les conséquences de ses actions plutôt que d\'être explicitement enseigné.

Au cœur de ce paradigme se trouve la boucle d\'interaction agent-environnement, un cycle continu qui définit le processus d\'apprentissage. À chaque instant, l\'agent observe l\'état actuel de son environnement. Sur la base de cette observation, il sélectionne une action parmi un ensemble d\'actions possibles. L\'environnement, en réponse à cette action, transite vers un nouvel état et fournit à l\'agent une récompense, un signal scalaire qui évalue la désirabilité de la transition qui vient de se produire. Ce cycle se répète, formant une trajectoire d\'états, d\'actions et de récompenses. L\'objectif ultime de l\'agent n\'est pas de maximiser la récompense immédiate, mais la somme cumulée des récompenses sur le long terme. Cette distinction est cruciale, car elle oblige l\'agent à équilibrer les gains à court terme avec les bénéfices potentiels à long terme, un défi connu sous le nom de compromis entre l\'exploration et l\'exploitation.

Pour illustrer les concepts qui seront développés tout au long de ce chapitre, nous nous appuierons sur des exemples pédagogiques récurrents. Le plus fondamental est celui du « Monde de la grille » (*Grid World*), un environnement simple où un agent doit naviguer sur une grille bidimensionnelle pour atteindre un état objectif tout en évitant les obstacles. Cet exemple, malgré sa simplicité, permet de visualiser concrètement des notions abstraites telles que les états, les actions, les politiques et les fonctions de valeur. Nous évoquerons également des problèmes classiques de la littérature, comme celui du pendule inversé, où l\'objectif est d\'apprendre à maintenir une perche en équilibre, ou des problèmes de gestion de stock, où une séquence de décisions de commande doit être prise pour maximiser les profits. Ces exemples serviront de fil conducteur pour démontrer comment les fondements théoriques se traduisent en solutions algorithmiques.

Ce chapitre est structuré de manière à guider le lecteur depuis les fondements mathématiques jusqu\'aux algorithmes les plus avancés. Nous commencerons, dans la section 45.1, par établir le cadre formel de l\'apprentissage par renforcement : le Processus Décisionnel de Markov (MDP). Cette section est la pierre angulaire de tout le chapitre, car elle fournit le langage mathématique nécessaire pour définir rigoureusement le problème de la décision séquentielle. Nous y dériverons les équations de Bellman, qui sont au cœur de la quasi-totalité des algorithmes d\'AR. Dans la section 45.2, nous explorerons les méthodes de résolution basées sur la programmation dynamique, qui permettent de trouver des solutions optimales lorsque le modèle de l\'environnement est parfaitement connu. Par la suite, la section 45.3 abordera le cas plus réaliste de l\'apprentissage sans modèle, où l\'agent doit apprendre les dynamiques de l\'environnement directement par l\'expérience. Nous y étudierons en détail les méthodes de Monte Carlo, d\'apprentissage par différence temporelle, et les algorithmes fondamentaux que sont le Q-Learning et SARSA. Enfin, la section 45.4 nous projettera dans l\'ère moderne de l\'apprentissage par renforcement profond (*Deep Reinforcement Learning*), où les réseaux de neurones profonds sont utilisés pour résoudre des problèmes d\'une complexité auparavant inaccessible, en approximant les fonctions de valeur ou en apprenant directement des politiques complexes. Cette progression logique vise à fournir une compréhension exhaustive et nuancée de ce domaine fascinant et en pleine expansion.

## 45.1 Le Cadre Formel : Processus Décisionnels de Markov (MDP)

Pour aborder de manière rigoureuse le problème de l\'apprentissage par l\'interaction, il est indispensable de disposer d\'un cadre mathématique formel. Ce cadre permet de transformer l\'idée intuitive d\'un agent apprenant par essais et erreurs en un problème d\'optimisation bien défini. Le Processus Décisionnel de Markov, ou MDP (*Markov Decision Process*), est ce cadre. Il offre un formalisme pour modéliser la prise de décision dans des situations où les résultats sont en partie aléatoires et en partie sous le contrôle d\'un décideur.

### 45.1.1 La Formalisation de la Décision Séquentielle

La puissance du formalisme des MDP repose sur une hypothèse fondamentale : la propriété de Markov. Cette propriété stipule que l\'état actuel d\'un système contient toute l\'information nécessaire pour prédire son futur. Autrement dit, le futur est conditionnellement indépendant du passé, étant donné le présent. Formellement, un état

St​ à l\'instant t est dit de Markov si et seulement si la probabilité de transition vers l\'état suivant St+1​ ne dépend que de l\'état actuel St​ et de l\'action prise At​, et non de la séquence complète des états et actions précédents. Mathématiquement, cela s\'exprime par :

P(St+1​∣St​,At​)=P(St+1​∣S1​,A1​,\...,St​,At​)

Cette hypothèse est une simplification puissante. Elle nous permet de nous affranchir de la nécessité de conserver un historique complet des interactions de l\'agent, ce qui serait souvent infaisable en pratique. L\'état devient un résumé suffisant du passé. Dans le contexte des problèmes de décision, un MDP étend le concept de chaîne de Markov, qui modélise les transitions stochastiques entre états, en y ajoutant deux composantes essentielles : le **choix**, représenté par un ensemble d\'actions possibles, et un **objectif**, formalisé par une fonction de récompense. L\'apprentissage par renforcement peut ainsi être perçu comme le problème du contrôle optimal de processus stochastiques satisfaisant la propriété de Markov.

### 45.1.2 Définition Formelle d\'un Processus Décisionnel de Markov

Un Processus Décisionnel de Markov est formellement défini par un 5-uplet ⟨S,A,P,R,γ⟩, où chaque composante a une signification précise. La compréhension détaillée de chacun de ces éléments est un prérequis indispensable à l\'étude des algorithmes de résolution.

#### L\'Espace d\'États (S)

S est l\'ensemble de tous les états possibles dans lesquels l\'agent et l\'environnement peuvent se trouver. Un état est une description complète de la configuration du système à un instant donné. L\'espace d\'états peut être discret et fini, comme dans le cas d\'un jeu d\'échecs ou d\'un Monde de la grille où chaque case représente un état distinct. Il peut également être continu et de grande dimension, comme l\'ensemble des angles et des vitesses angulaires des articulations d\'un bras robotique, ou l\'ensemble des pixels d\'une image représentant l\'environnement perçu par un véhicule autonome. Dans ce chapitre, sauf mention contraire, nous nous concentrerons principalement sur les MDP finis, où l\'ensemble

S est fini.

#### L\'Espace d\'Actions (A)

A est l\'ensemble de toutes les actions que l\'agent peut entreprendre. Similaire à l\'espace d\'états, l\'espace d\'actions peut être discret (par exemple, les quatre mouvements \'haut\', \'bas\', \'gauche\', \'droite\' dans un Monde de la grille) ou continu (par exemple, l\'angle de braquage du volant d\'une voiture). Il est important de noter que l\'ensemble des actions disponibles peut dépendre de l\'état actuel de l\'agent. On note alors A(s) l\'ensemble des actions possibles dans l\'état s∈S.

#### Le Modèle de Transition (P)

P est la fonction de probabilité de transition, qui définit la dynamique de l\'environnement. Elle spécifie la probabilité de passer à un état futur s′ en partant d\'un état s et en exécutant une action a. Formellement, P est une fonction définie par :

P(s′∣s,a)=Pr(St+1​=s′∣St​=s,At​=a)

Cette fonction capture la nature stochastique de l\'environnement. Par exemple, si un robot se déplace sur une surface glissante, l\'action \'avancer\' peut le faire avancer (probabilité élevée), mais aussi le faire glisser sur le côté (probabilité plus faible). La somme des probabilités de transition depuis un couple

(s,a) vers tous les états successeurs possibles s′ doit être égale à 1 : ∑s′∈S​P(s′∣s,a)=1. L\'ensemble des dynamiques P est souvent appelé le **modèle** de l\'environnement.

#### La Fonction de Récompense (R)

R est la fonction de récompense, qui définit l\'objectif de l\'agent. C\'est un signal scalaire que l\'environnement envoie à l\'agent après chaque transition. La récompense immédiate rt​ dépend de l\'état de départ st−1​, de l\'action exécutée at−1​ et de l\'état d\'arrivée st​. La fonction de récompense peut être définie de plusieurs manières, mais une formulation courante est R(s,a,s′), qui représente la récompense attendue lors de la transition de l\'état s à l\'état s′ après avoir effectué l\'action a.

R(s,a,s′)=E

La conception de cette fonction est une partie cruciale de la modélisation d\'un problème en AR. Elle doit précisément traduire le but à atteindre. Par exemple, dans un jeu, une récompense de +1 pour une victoire, -1 pour une défaite, et 0 pour tous les autres mouvements est une structure de récompense courante. Dans un problème de navigation, on pourrait attribuer une grande récompense positive pour l\'atteinte de la cible et une petite récompense négative à chaque pas pour encourager l\'agent à trouver le chemin le plus court.

#### Le Facteur d\'Escompte (γ)

γ est le facteur d\'escompte (ou facteur d\'actualisation), un nombre réel compris dans l\'intervalle \$ D\'un point de vue conceptuel, γ modélise une préférence pour les récompenses immédiates par rapport aux récompenses futures. Une récompense reçue dans k pas de temps est escomptée d\'un facteur γk.

Un agent avec γ proche de 0 est dit \"myope\" : il se préoccupe principalement de la récompense immédiate et accorde peu d\'importance au futur lointain. À l\'inverse, un agent avec γ proche de 1 est dit \"prévoyant\" : il accorde une grande importance aux récompenses futures et planifie sur un horizon plus long. Le choix de

γ est donc un hyperparamètre qui dépend de la nature de la tâche.

### 45.1.3 Politiques et Fonctions de Valeur : Évaluer le Comportement

Une fois le cadre du MDP défini, l\'objectif est de trouver une manière d\'agir, une stratégie, qui maximise les récompenses sur le long terme. Cette stratégie est formalisée par le concept de politique, et son efficacité est mesurée par les fonctions de valeur.

#### Politique (π)

Une politique, notée π, est une prescription du comportement de l\'agent. Elle définit quelle action choisir dans un état donné. Formellement, une politique stochastique π(a∣s) est une distribution de probabilité sur l\'ensemble des actions A pour chaque état s∈S.

π(a∣s)=Pr(At​=a∣St​=s)

Cette fonction indique la probabilité que l\'agent choisisse l\'action a lorsqu\'il se trouve dans l\'état s. Une politique doit respecter les contraintes d\'une distribution de probabilité : ∑a∈A(s)​π(a∣s)=1 et π(a∣s)≥0 pour tout s,a. Un cas particulier important est celui de la politique déterministe, où pour chaque état, une seule action est choisie avec une probabilité de 1. Dans ce cas, la politique est une simple fonction π:S→A. La solution à un problème d\'AR est une politique optimale.

#### Retour (G_t)

L\'objectif de l\'agent est de maximiser la somme cumulée des récompenses. Cette somme est appelée le **retour**. Pour un horizon infini, le retour escompté à partir de l\'instant t, noté Gt​, est défini comme la somme des récompenses futures, pondérées par le facteur d\'escompte γ :

Gt​=Rt+1​+γRt+2​+γ2Rt+3​+⋯=k=0∑∞​γkRt+k+1​

Cette équation peut être écrite de manière récursive, ce qui sera fondamental pour la suite :

Gt​=Rt+1​+γGt+1​

Le retour est une variable aléatoire qui dépend des actions choisies par l\'agent et des transitions stochastiques de l\'environnement. L\'objectif de l\'agent est donc de maximiser l\'espérance de ce retour.

#### Fonction de Valeur d\'État (Vπ(s))

La fonction de valeur d\'état, notée Vπ(s), quantifie la \"qualité\" d\'un état s sous une politique π. Elle est définie comme l\'espérance du retour Gt​ lorsque l\'agent part de l\'état s et suit ensuite la politique π.

Vπ(s)=Eπ​

L\'indice π dans l\'espérance Eπ​ indique que cette valeur dépend de la politique suivie par l\'agent, car les actions futures sont choisies selon π(a∣s). Intuitivement, Vπ(s) répond à la question : \"En moyenne, quel retour cumulé puis-je espérer obtenir si je me trouve dans l\'état s et que je suis la stratégie π pour toujours?\"

#### Fonction de Valeur d\'Action (Qπ(s,a))

De manière similaire, la fonction de valeur d\'action, notée Qπ(s,a), quantifie la qualité non pas d\'un état, mais d\'une paire état-action (s,a) sous une politique π. Elle est définie comme l\'espérance du retour Gt​ lorsque l\'agent part de l\'état s, exécute l\'action a, et suit ensuite la politique π.

Qπ(s,a)=Eπ​

Intuitivement, Qπ(s,a) répond à la question : \"En moyenne, quel retour cumulé puis-je espérer obtenir si, dans l\'état s, je prends l\'action a une fois, puis que je suis la stratégie π pour toujours?\"

Ces deux fonctions de valeur sont intimement liées. La valeur d\'un état est l\'espérance des valeurs des actions possibles depuis cet état, pondérée par la politique :

Vπ(s)=a∈A(s)∑​π(a∣s)Qπ(s,a)

Cette dualité entre V et Q est fondamentale. Pour agir de manière optimale, un agent doit choisir la meilleure action. S\'il ne connaît que la fonction de valeur d\'état optimale V∗, il a besoin d\'un modèle de l\'environnement (P et R) pour simuler les conséquences de chaque action et choisir celle qui mène à l\'état de plus grande valeur. En revanche, si l\'agent connaît la fonction de valeur d\'action optimale Q∗, il peut simplement choisir l\'action a qui maximise Q∗(s,a) pour l\'état courant s, sans avoir besoin du modèle. Cette distinction explique pourquoi les algorithmes d\'apprentissage sans modèle, que nous verrons plus loin, se concentrent sur l\'apprentissage de la fonction

Q.

### 45.1.4 Les Équations Fondamentales de Bellman

Les équations de Bellman, nommées d\'après le mathématicien Richard Bellman, sont la pierre angulaire de la plupart des algorithmes d\'apprentissage par renforcement. Elles expriment une relation récursive entre la valeur d\'un état (ou d\'une paire état-action) et la valeur des états successeurs. Cette structure récursive est une manifestation directe de la propriété de sous-structure optimale : la solution optimale d\'un problème peut être construite à partir des solutions optimales de ses sous-problèmes. Dans le contexte des MDPs, la valeur d\'un état (le problème) est définie en fonction de la valeur des états futurs (les sous-problèmes), ce qui permet des solutions itératives.

#### Dérivation de l\'Équation d\'Espérance de Bellman pour Vπ

Partons de la définition de la fonction de valeur d\'état Vπ(s) et utilisons la forme récursive du retour Gt​=Rt+1​+γGt+1​.

Vπ(s)=Eπ​

Vπ(s)=Eπ​

Par la linéarité de l\'espérance, nous pouvons séparer les termes :

Vπ(s)=Eπ​+γEπ​

Maintenant, développons chaque terme en conditionnant sur les variables aléatoires qui déterminent leur valeur : l\'action At​ et l\'état suivant St+1​.

Vπ(s)=a∈A(s)∑​π(a∣s)s′∈S∑​P(s′∣s,a)E

En utilisant la définition de la fonction de récompense R(s,a,s′) et la définition de la fonction de valeur Vπ(s′), qui est Eπ​, nous obtenons :

\$\$V\^\\pi(s) = \\sum\_{a \\in A(s)} \\pi(a\|s) \\sum\_{s\' \\in S} P(s\'\|s, a) \\left\$\$

Ceci est l\'**équation d\'espérance de Bellman pour Vπ**. Elle établit que la valeur d\'un état s sous une politique π est la somme pondérée, sur toutes les actions possibles, de la récompense immédiate attendue plus la valeur escomptée de l\'état suivant.

#### Dérivation de l\'Équation d\'Espérance de Bellman pour Qπ

Une dérivation similaire peut être effectuée pour la fonction de valeur d\'action Qπ(s,a).

Qπ(s,a)=Eπ​

Qπ(s,a)=Eπ​

\$\$Q\^\\pi(s,a) = \\sum\_{s\' \\in S} P(s\'\|s, a) \\left \\right\]\$\$

En reconnaissant que Eπ​ est simplement Vπ(s′), nous avons :

\$\$Q\^\\pi(s,a) = \\sum\_{s\' \\in S} P(s\'\|s, a) \\left\$\$

Nous pouvons substituer l\'expression de Vπ(s′) en termes de Qπ pour obtenir une récursion uniquement en termes de Q :

\$\$Q\^\\pi(s,a) = \\sum\_{s\' \\in S} P(s\'\|s, a) \\left\$\$

Ceci est l\'**équation d\'espérance de Bellman pour Qπ**.

#### Politiques et Fonctions de Valeur Optimales

L\'objectif de l\'apprentissage par renforcement est de trouver une politique qui est meilleure ou égale à toutes les autres politiques. Une telle politique est appelée une **politique optimale**, notée π∗​. Une politique π est considérée meilleure qu\'une politique π′ si et seulement si Vπ(s)≥Vπ′(s) pour tous les états s∈S. Les politiques optimales partagent la même fonction de valeur d\'état optimale, notée V∗, et la même fonction de valeur d\'action optimale, notée Q∗, définies comme suit  :

V∗(s)=πmax​Vπ(s)∀s∈S

Q∗(s,a)=πmax​Qπ(s,a)∀s∈S,a∈A(s)

#### Équations d\'Optimalité de Bellman

Les équations d\'optimalité de Bellman spécifient la relation récursive que les fonctions de valeur optimales doivent satisfaire. Elles sont similaires aux équations d\'espérance, mais intègrent un opérateur de maximisation sur les actions, ce qui les rend non linéaires.

Pour V∗, la valeur d\'un état sous une politique optimale doit être égale au retour attendu de la meilleure action depuis cet état :

V∗(s)=a∈A(s)max​Q∗(s,a)

\$\$V\^\*(s) = \\max\_{a \\in A(s)} \\sum\_{s\' \\in S} P(s\'\|s, a) \\left\$\$

Ceci est l\'**équation d\'optimalité de Bellman pour V∗**.

Pour Q∗, la relation est la suivante :

Q∗(s,a)=E

\$\$Q\^\*(s,a) = \\sum\_{s\' \\in S} P(s\'\|s, a) \\left\$\$

En substituant V∗(s′) par maxa′​Q∗(s′,a′), nous obtenons l\'**équation d\'optimalité de Bellman pour Q∗** :

\$\$Q\^\*(s,a) = \\sum\_{s\' \\in S} P(s\'\|s, a) \\left\$\$

Ces équations d\'optimalité sont fondamentales car elles fournissent une spécification pour la solution que nous cherchons. Si nous pouvons trouver une fonction de valeur V ou Q qui satisfait ces équations, nous avons alors trouvé les fonctions de valeur optimales, à partir desquelles une politique optimale peut être directement extraite en choisissant l\'action qui maximise la valeur attendue à chaque état. Les algorithmes que nous allons étudier dans les sections suivantes sont essentiellement des méthodes pour résoudre ces équations.

## 45.2 Résolution par Programmation Dynamique (Modèle Connu)

La programmation dynamique (PD) est une famille de méthodes algorithmiques qui permettent de résoudre des problèmes complexes en les décomposant en sous-problèmes plus simples et en résolvant ces derniers de manière récursive. Dans le contexte de l\'apprentissage par renforcement, la PD est utilisée pour calculer des politiques optimales pour un Processus Décisionnel de Markov (MDP) lorsque son modèle --- c\'est-à-dire les probabilités de transition

P(s′∣s,a) et la fonction de récompense R(s,a,s′) --- est entièrement connu. Ce scénario est souvent désigné sous le terme de **planification**, par opposition à l\'apprentissage, car l\'agent ne découvre pas l\'environnement par l\'expérience mais planifie sa stratégie optimale en utilisant sa connaissance parfaite des dynamiques du monde.

Les algorithmes de PD exploitent la structure des fonctions de valeur et les équations de Bellman pour trouver itérativement la politique optimale π∗​. Ils fonctionnent par un processus d\'**amorçage** (*bootstrapping*), où les estimations de la valeur d\'un état sont mises à jour en se basant sur les estimations de la valeur des états successeurs. Cette idée de \"mettre à jour des estimations à partir d\'autres estimations\" est un concept central qui traverse tout le domaine de l\'AR. Bien que l\'hypothèse d\'un modèle connu soit restrictive et rarement satisfaite dans les problèmes du monde réel, l\'étude de la PD est essentielle. Elle fournit les fondations théoriques et algorithmiques sur lesquelles reposent les méthodes d\'apprentissage sans modèle plus complexes. Les deux principaux algorithmes de PD pour résoudre les MDPs sont l\'itération de politique et l\'itération de valeur.

### 45.2.1 Itération de Politique (Policy Iteration)

L\'itération de politique est un algorithme qui trouve la politique optimale en alternant itérativement entre deux phases distinctes : l\'évaluation de la politique et l\'amélioration de la politique. Le processus commence avec une politique arbitraire (souvent uniforme et aléatoire) et l\'améliore de manière répétée jusqu\'à ce qu\'elle ne puisse plus être améliorée, garantissant ainsi la convergence vers la politique optimale.

#### Étape 1 : Évaluation de la Politique (Policy Evaluation)

La première phase, l\'évaluation de la politique, a pour objectif de calculer la fonction de valeur d\'état, Vπ(s), pour une politique fixe π. Pour ce faire, nous utilisons l\'équation d\'espérance de Bellman pour Vπ que nous avons établie précédemment :

\$\$V\^\\pi(s) = \\sum\_{a \\in A(s)} \\pi(a\|s) \\sum\_{s\' \\in S} P(s\'\|s, a) \\left\$\$

Pour un MDP fini, cette équation représente un système de ∣S∣ équations linéaires avec ∣S∣ inconnues (les valeurs Vπ(s) pour chaque état s). Si le nombre d\'états n\'est pas trop grand, ce système peut être résolu analytiquement. Cependant, pour des problèmes de grande taille, une approche itérative est plus pratique.

L\'évaluation itérative de politique consiste à initialiser un vecteur de valeurs V0​ de manière arbitraire (par exemple, à zéro pour tous les états) et à appliquer de manière répétée la mise à jour de Bellman comme une règle d\'affectation. À chaque itération k, nous calculons une nouvelle estimation de la fonction de valeur Vk+1​ à partir de l\'estimation précédente Vk​ pour tous les états s∈S :

\$\$V\_{k+1}(s) \\leftarrow \\sum\_{a \\in A(s)} \\pi(a\|s) \\sum\_{s\' \\in S} P(s\'\|s, a) \\left\$\$

Cette opération, appelée un balayage complet (*full backup*), est répétée jusqu\'à ce que les changements dans le vecteur de valeurs deviennent négligeables, c\'est-à-dire jusqu\'à ce que maxs∈S​∣Vk+1​(s)−Vk​(s)∣ soit inférieur à un petit seuil θ\>0. La séquence {Vk​} est garantie de converger vers Vπ lorsque k→∞.

Voici le pseudo-code pour l\'évaluation itérative de politique :

Algorithme : Évaluation Itérative de Politique\
\
Entrées : une politique π, un MDP \<S, A, P, R, γ\>, un seuil de convergence θ\
\
1. Initialiser V(s) = 0 pour tout s dans S\
2. Répéter :\
3. Δ ← 0\
4. Pour chaque s dans S :\
5. v ← V(s)\
6. V(s) ← Σ_a π(a\|s) Σ\_{s\'} P(s\'\|s,a)\
7. Δ ← max(Δ, \|v - V(s)\|)\
8. Jusqu\'à ce que Δ \< θ\
9. Retourner V

#### Étape 2 : Amélioration de la Politique (Policy Improvement)

Une fois que nous avons une estimation convergée de la fonction de valeur Vπ pour la politique actuelle π, la deuxième phase consiste à améliorer cette politique. L\'idée est de se demander, pour chaque état s, s\'il serait préférable de choisir une action a=π(s) et de suivre ensuite la politique π. Pour évaluer une telle déviation, nous utilisons la fonction de valeur d\'action Qπ(s,a):

\$\$Q\^\\pi(s,a) = \\sum\_{s\' \\in S} P(s\'\|s, a) \\left\$\$

Si, pour un état s, nous trouvons une action a telle que Qπ(s,a)\>Vπ(s), cela signifie qu\'il est strictement meilleur de choisir l\'action a dans l\'état s puis de continuer avec la politique π, que de suivre π dès le départ.

Le principe d\'amélioration de la politique consiste à construire une nouvelle politique, π′, qui est \"gloutonne\" (*greedy*) par rapport à la fonction de valeur Vπ. Pour chaque état s, la nouvelle politique π′ choisit l\'action qui maximise Qπ(s,a)  :

π′(s)=arga∈A(s)max​Qπ(s,a)

\$\$\\pi\'(s) = \\arg\\max\_{a \\in A(s)} \\sum\_{s\' \\in S} P(s\'\|s, a) \\left\$\$

Le **théorème d\'amélioration de la politique** stipule que cette nouvelle politique gloutonne π′ est une amélioration garantie par rapport à π, ou au moins aussi bonne. C\'est-à-dire, Vπ′(s)≥Vπ(s) pour tous les états s∈S. Si l\'amélioration est stricte pour au moins un état, alors la nouvelle politique est strictement meilleure. Si Vπ′=Vπ, alors Vπ doit être la fonction de valeur optimale V∗, et π et π′ sont toutes deux des politiques optimales.

#### Algorithme Complet et Convergence

L\'algorithme d\'itération de politique combine ces deux étapes dans une boucle. On commence par une politique π0​ et on génère une séquence de politiques et de fonctions de valeur :

\$\$ \\pi_0 \\xrightarrow{\\text{Évaluation}} V\^{\\pi_0} \\xrightarrow{\\text{Amélioration}} \\pi_1 \\xrightarrow{\\text{Évaluation}} V\^{\\pi_1} \\xrightarrow{\\text{Amélioration}} \\pi_2 \\xrightarrow{\\text{\...}} \\pi\_\* \\xrightarrow{\\text{Évaluation}} V\^\* \$\$

Le processus s\'arrête lorsque la politique ne change plus entre deux itérations, c\'est-à-dire lorsque πk+1​=πk​. À ce stade, la politique est stable et la condition Vπk+1​=Vπk​ est satisfaite, ce qui implique que Vπk​ est la fonction de valeur optimale V∗. Étant donné qu\'un MDP fini n\'a qu\'un nombre fini de politiques déterministes possibles, cet algorithme est garanti de converger vers une politique optimale en un nombre fini d\'itérations.

Voici le pseudo-code de l\'algorithme complet d\'itération de politique  :

Algorithme : Itération de Politique\
\
1. Initialisation\
2. Initialiser une politique π de manière arbitraire (ex: aléatoire) pour tout s dans S\
3. Initialiser V(s) = 0 pour tout s dans S\
\
4. Répéter (Boucle d\'itération de politique) :\
5. // Étape 1: Évaluation de la politique\
6. Répéter (Boucle d\'évaluation) :\
7. Δ ← 0\
8. Pour chaque s dans S :\
9. v ← V(s)\
10. V(s) ← Σ_a π(a\|s) Σ\_{s\'} P(s\'\|s,a)\
11. Δ ← max(Δ, \|v - V(s)\|)\
12. Jusqu\'à ce que Δ \< θ\
\
13. // Étape 2: Amélioration de la politique\
14. politique_stable ← vrai\
15. Pour chaque s dans S :\
16. action_ancienne ← π(s)\
17. π(s) ← argmax_a Σ\_{s\'} P(s\'\|s,a)\
18. Si action_ancienne ≠ π(s), alors politique_stable ← faux\
\
19. Jusqu\'à ce que politique_stable soit vrai\
\
20. Retourner π et V

### 45.2.2 Itération de Valeur (Value Iteration)

L\'itération de politique présente un inconvénient potentiel : l\'étape d\'évaluation de la politique peut être coûteuse en calcul, car elle nécessite de multiples balayages de l\'espace d\'états pour faire converger la fonction de valeur. L\'itération de valeur est un algorithme de programmation dynamique qui contourne ce problème en combinant l\'étape d\'évaluation et l\'étape d\'amélioration en une seule mise à jour.

#### Principe et Règle de Mise à Jour

L\'itération de valeur peut être vue comme une version tronquée de l\'itération de politique, où l\'étape d\'évaluation est arrêtée après un seul balayage. Cette intuition est formalisée en utilisant directement l\'équation d\'optimalité de Bellman comme une règle de mise à jour itérative. Au lieu de calculer la valeur pour une politique spécifique, l\'itération de valeur met directement à jour les estimations pour se rapprocher de la fonction de valeur optimale V∗.

La règle de mise à jour fondamentale de l\'itération de valeur est la suivante, appliquée à chaque état s à chaque itération k  :

\$\$V\_{k+1}(s) \\leftarrow \\max\_{a \\in A(s)} \\sum\_{s\' \\in S} P(s\'\|s, a) \\left\$\$

Cette mise à jour combine en une seule étape l\'équivalent d\'un balayage d\'évaluation de politique et d\'une étape d\'amélioration. L\'opérateur maxa​ correspond à l\'amélioration de la politique (choisir la meilleure action), et l\'utilisation de Vk​ dans le terme de droite pour calculer Vk+1​ correspond à un pas d\'évaluation.

L\'algorithme d\'itération de valeur consiste simplement à répéter cette mise à jour pour tous les états jusqu\'à ce que le vecteur de valeurs converge. La condition d\'arrêt est la même que pour l\'évaluation de politique : lorsque la plus grande modification apportée à une valeur d\'état au cours d\'un balayage est inférieure à un seuil θ.

Voici le pseudo-code de l\'algorithme d\'itération de valeur :

Algorithme : Itération de Valeur\
\
Entrées : un MDP \<S, A, P, R, γ\>, un seuil de convergence θ\
\
1. Initialiser V(s) = 0 pour tout s dans S\
2. Répéter :\
3. Δ ← 0\
4. Pour chaque s dans S :\
5. v ← V(s)\
6. V(s) ← max_a Σ\_{s\'} P(s\'\|s,a)\
7. Δ ← max(Δ, \|v - V(s)\|)\
8. Jusqu\'à ce que Δ \< θ\
9.\
10. // Extraire une politique déterministe optimale\
11. Initialiser une politique π\
12. Pour chaque s dans S :\
13. π(s) ← argmax_a Σ\_{s\'} P(s\'\|s,a)\
14. Retourner π et V

#### Preuve de Convergence

La convergence de l\'itération de valeur vers la fonction de valeur optimale V∗ est une propriété mathématique fondamentale qui peut être prouvée formellement. La preuve repose sur le concept des applications contractantes et le théorème du point fixe de Banach.

Définissons l\'opérateur d\'optimalité de Bellman, T, qui agit sur une fonction de valeur V pour en produire une nouvelle :

\$\$(TV)(s) = \\max\_{a \\in A(s)} \\sum\_{s\' \\in S} P(s\'\|s, a) \\left\$\$

L\'algorithme d\'itération de valeur peut alors être écrit de manière compacte comme Vk+1​=TVk​. La fonction de valeur optimale V∗ est un point fixe de cet opérateur, c\'est-à-dire V∗=TV∗.

Pour prouver la convergence, nous devons montrer que T est une **application contractante** dans la norme infinie (L∞​). La norme infinie d\'une fonction de valeur est définie comme ∣∣V∣∣∞​=maxs∈S​∣V(s)∣. Une application T est une contraction s\'il existe une constante \$c \\in - \\max_a \\sum\_{s\'} P(s\'\|s,a) \\right\| \$\$

En utilisant la propriété ∣maxx​f(x)−maxx​g(x)∣≤maxx​∣f(x)−g(x)∣, nous avons :

≤amax​​s′∑​P(s′∣s,a)−s′∑​P(s′∣s,a)​

=amax​​γs′∑​P(s′∣s,a)\[U(s′)−V(s′)\]​

Puisque ∑s′​P(s′∣s,a)=1 et P(s′∣s,a)≥0, la somme est une moyenne pondérée. Donc :

≤amax​γs′∑​P(s′∣s,a)∣U(s′)−V(s′)∣

≤γamax​s′∑​P(s′∣s,a)s′′max​∣U(s′′)−V(s′′)∣

=γ∣∣U−V∣∣∞​amax​s′∑​P(s′∣s,a)

=γ∣∣U−V∣∣∞​

Puisque cela est vrai pour tout s, nous pouvons prendre le maximum sur tous les états :

∣∣TU−TV∣∣∞​=smax​∣(TU)(s)−(TV)(s)∣≤γ∣∣U−V∣∣∞​

Comme \$\\gamma \\in

L\'itération de valeur, en revanche, a des itérations beaucoup moins coûteuses. Chaque itération ne consiste qu\'en un seul balayage de l\'espace d\'états, avec une complexité proportionnelle à ∣S∣2∣A∣. Cependant, elle peut nécessiter un grand nombre de ces itérations pour que la fonction de valeur converge, surtout pour des valeurs de γ proches de 1.

Le choix entre les deux dépend donc du problème. Pour les problèmes avec un grand nombre d\'actions mais un nombre modéré d\'états, l\'itération de politique peut être avantageuse car elle pourrait converger en peu d\'améliorations de politique. Pour les problèmes avec un très grand nombre d\'états, où la résolution complète du système d\'équations de l\'évaluation de politique est prohibitive, l\'itération de valeur est souvent préférée.

Le tableau suivant synthétise les principales différences entre ces deux algorithmes fondamentaux.

  ------------------------------ ------------------------------------------------------------------- -------------------------------------------------------------------
  Critère                        Itération de Politique                                              Itération de Valeur

  **Équation de mise à jour**    Équation d\'espérance de Bellman (pour Vπ)                          Équation d\'optimalité de Bellman (pour V∗)

  **Opération principale**       Évaluation complète de πk​, puis amélioration gloutonne              Un seul balayage combinant évaluation et amélioration

  **Complexité par itération**   Élevée (résolution d\'un système linéaire ou multiples balayages)   Faible (un seul balayage de l\'espace d\'états)

  **Nombre d\'itérations**       Généralement faible                                                 Potentiellement élevé

  **Convergence**                Converge lorsque la politique devient stable                        Converge lorsque la fonction de valeur devient stable

  **Politique intermédiaire**    Une politique valide et complète est maintenue à chaque itération   La politique n\'est extraite qu\'à la fin, après convergence de V
  ------------------------------ ------------------------------------------------------------------- -------------------------------------------------------------------

En pratique, des algorithmes hybrides existent, comme l\'itération de politique modifiée, qui exécute seulement un nombre fixe de balayages d\'évaluation de politique au lieu d\'attendre la convergence complète, offrant un compromis entre les deux approches.

La limitation fondamentale de toutes les méthodes de programmation dynamique reste cependant la même : elles exigent une connaissance complète du modèle de l\'environnement (P et R). Cette \"malédiction de la modélisation\" rend la PD inapplicable à la plupart des problèmes du monde réel, où les dynamiques sont soit inconnues, soit trop complexes pour être spécifiées explicitement. Cette contrainte est la principale motivation pour explorer les méthodes d\'apprentissage sans modèle, qui constituent le sujet de la section suivante. La PD est un outil de planification, pas un outil d\'apprentissage.

## 45.3 Apprentissage sans modèle (Modèle Inconnu)

Dans la section précédente, nous avons exploré comment trouver une politique optimale en utilisant la programmation dynamique, sous l\'hypothèse cruciale que nous possédons un modèle parfait de l\'environnement. Cependant, dans la grande majorité des applications pratiques, cette hypothèse n\'est pas tenable. Pour des problèmes complexes comme la conduite autonome, la robotique avancée ou les jeux stratégiques comme le Go, les dynamiques de l\'environnement (P et R) sont soit inconnues, soit si vastes et complexes qu\'il est impossible de les spécifier explicitement. C\'est ici qu\'intervient l\'apprentissage sans modèle (

*model-free learning*).

Les méthodes sans modèle apprennent une politique optimale non pas par la planification, mais directement par l\'expérience. L\'agent interagit avec l\'environnement, collecte des trajectoires d\'états, d\'actions et de récompenses, et utilise ces échantillons pour estimer les fonctions de valeur et améliorer sa politique. Cette approche est au cœur de ce que l\'on entend communément par \"apprentissage\" par renforcement.

Au sein de l\'apprentissage sans modèle, on distingue deux objectifs principaux :

> **La prédiction** : Étant donné une politique π, le but est d\'estimer sa fonction de valeur, Vπ ou Qπ. C\'est l\'équivalent sans modèle de l\'étape d\'évaluation de politique.
>
> **Le contrôle** : Le but est de trouver la politique optimale, π∗​. C\'est l\'équivalent sans modèle de l\'itération de politique ou de valeur.

Cette section explorera les trois grandes familles de méthodes d\'apprentissage sans modèle : les méthodes de Monte Carlo, l\'apprentissage par différence temporelle, et les algorithmes de contrôle qui en découlent, Q-Learning et SARSA. Ces algorithmes, dans leur forme tabulaire, sont les fondations de l\'AR classique et permettent de surmonter la \"malédiction de la modélisation\", bien qu\'ils soient eux-mêmes confrontés à la \"malédiction de la dimensionnalité\", qui motivera la transition vers l\'apprentissage profond.

### 45.3.1 Méthodes de Monte Carlo (MC)

Les méthodes de Monte Carlo (MC) représentent l\'approche la plus simple et la plus intuitive de l\'apprentissage à partir de l\'expérience. Elles estiment les fonctions de valeur en moyennant les retours empiriques obtenus à la fin d\'épisodes complets. Un épisode est une séquence d\'interactions qui se déroule d\'un état initial jusqu\'à un état terminal. L\'idée fondamentale de MC est que l\'espérance d\'une variable aléatoire peut être approximée par la moyenne d\'un grand nombre d\'échantillons de cette variable. Dans notre cas, la fonction de valeur

Vπ(s) est l\'espérance du retour Gt​ ; les méthodes MC l\'estiment donc en calculant la moyenne des retours observés après avoir visité l\'état s.

#### Prédiction par Monte Carlo

Pour estimer Vπ(s) pour une politique π donnée, l\'agent suit la politique π et génère un grand nombre d\'épisodes. Pour chaque épisode, une fois qu\'il est terminé, on parcourt la séquence d\'états visités. Pour chaque occurrence d\'un état s, on calcule le retour Gt​ qui a suivi cette occurrence. La valeur de l\'état s est alors mise à jour comme la moyenne de tous les retours observés.

Il existe deux variantes principales de la prédiction par MC  :

> **First-Visit MC (MC de la première visite)** : Pour chaque épisode, on ne considère que le retour suivant la *première* visite à l\'état s.
>
> **Every-Visit MC (MC de chaque visite)** : On considère les retours suivant *chaque* visite à l\'état s au sein d\'un même épisode.

La mise à jour de la valeur peut être implémentée de manière incrémentale pour éviter de stocker tous les retours. Pour un état St​ avec un retour observé Gt​, la mise à jour est :

V(St​)←V(St​)+α(Gt​−V(St​))

où α est un taux d\'apprentissage (qui peut être constant ou décroissant). Cette formule ajuste l\'estimation actuelle V(St​) dans la direction de l\'erreur entre le retour observé Gt​ et l\'estimation actuelle.

#### Contrôle par Monte Carlo

Pour le contrôle (trouver la politique optimale), nous devons estimer la fonction de valeur d\'action Qπ(s,a), car elle nous permet de choisir les meilleures actions sans connaître le modèle. Le principe est le même : on moyenne les retours pour chaque paire (s,a).

Cependant, un problème se pose. Si la politique π est déterministe, nous pourrions ne jamais explorer certaines actions pour certains états, et donc ne jamais pouvoir estimer leur valeur. Pour garantir que nous continuons à explorer toutes les actions, nous devons nous assurer que la politique que nous suivons est \"exploratoire\". Une solution théorique est l\'hypothèse des **départs exploratoires** (*exploring starts*), où chaque épisode commence à une paire (s,a) choisie aléatoirement, garantissant que toutes les paires sont éventuellement visitées.

En pratique, les départs exploratoires sont souvent irréalisables. Une approche plus courante consiste à utiliser des politiques \"douces\" (*soft policies*), qui ont une probabilité non nulle de sélectionner n\'importe quelle action. La politique **ϵ-greedy** est un exemple canonique : avec une probabilité 1−ϵ, l\'agent choisit l\'action gloutonne (celle avec la plus grande valeur Q estimée), et avec une probabilité ϵ, il choisit une action au hasard parmi toutes les actions possibles.

L\'algorithme de contrôle MC on-policy suit le même schéma que l\'itération de politique : il alterne entre l\'évaluation de la politique (en utilisant les épisodes générés pour mettre à jour Q) et l\'amélioration de la politique (en rendant la politique ϵ-greedy par rapport à la nouvelle table Q).

#### Avantages et Inconvénients

Le principal avantage des méthodes MC est qu\'elles fournissent une estimation **non biaisée** de la fonction de valeur, car elles se basent sur le retour réel et complet Gt​. Cependant, elles souffrent de plusieurs inconvénients majeurs :

> **Variance élevée** : Le retour Gt​ est la somme de nombreuses variables aléatoires (récompenses), ce qui peut entraîner une variance élevée dans les estimations, ralentissant la convergence.
>
> **Applicabilité limitée aux tâches épisodiques** : MC ne peut effectuer de mise à jour qu\'à la fin d\'un épisode. Il n\'est donc pas applicable aux tâches continues qui n\'ont pas d\'état terminal.
>
> **Lenteur d\'apprentissage** : L\'apprentissage peut être lent si les épisodes sont très longs, car il faut attendre leur conclusion pour mettre à jour les valeurs.

Ces limitations motivent l\'introduction de la famille d\'algorithmes suivante : l\'apprentissage par différence temporelle.

### 45.3.2 Apprentissage par Différence Temporelle (TD)

L\'apprentissage par différence temporelle (TD) est l\'une des idées les plus centrales de l\'apprentissage par renforcement. Il combine les avantages des méthodes de Monte Carlo et de la programmation dynamique. Comme MC, le TD learning apprend directement de l\'expérience brute sans modèle de l\'environnement. Comme la PD, il met à jour ses estimations de valeur en se basant en partie sur d\'autres estimations apprises, un processus connu sous le nom de *bootstrapping*.

#### Prédiction par TD(0)

L\'algorithme de prédiction TD le plus simple est le TD(0). Il vise à estimer la fonction de valeur Vπ pour une politique π. Après chaque pas de temps, l\'agent observe la transition (St​,At​,Rt+1​,St+1​). Au lieu d\'attendre la fin de l\'épisode pour obtenir le retour complet Gt​ comme le fait MC, TD(0) forme une cible pour sa mise à jour après un seul pas. La cible TD est Rt+1​+γV(St+1​). C\'est une estimation du retour Gt​, où la récompense immédiate Rt+1​ est réelle, mais le reste du retour, γGt+1​, est approximé par la valeur actuelle estimée de l\'état suivant, γV(St+1​).

La règle de mise à jour de TD(0) pour la valeur de l\'état St​ est la suivante :

\$\$V(S_t) \\leftarrow V(S_t) + \\alpha \\left\$\$

Le terme entre crochets est appelé l\'erreur de différence temporelle (erreur TD), notée δt​ :

δt​=Rt+1​+γV(St+1​)−V(St​)

Cette erreur mesure la différence entre l\'estimation actuelle V(St​) et une meilleure estimation, la cible TD. L\'algorithme ajuste l\'estimation actuelle dans la direction de cette erreur.42

#### Avantages du TD sur le MC

Les méthodes TD présentent plusieurs avantages significatifs par rapport aux méthodes MC :

> **Apprentissage en ligne et tâches continues** : Le TD met à jour les valeurs après chaque pas de temps, il n\'a pas besoin d\'attendre la fin d\'un épisode. Cela lui permet d\'apprendre plus rapidement et de s\'appliquer à des tâches continues sans état terminal.
>
> **Variance plus faible** : La cible TD dépend d\'une seule récompense réelle Rt+1​ et d\'une seule transition, tandis que la cible MC dépend de toutes les récompenses jusqu\'à la fin de l\'épisode. Par conséquent, la cible TD a généralement une variance beaucoup plus faible que le retour MC, ce qui conduit à un apprentissage plus rapide.
>
> **Biais** : En contrepartie, la cible TD est **biaisée** car elle utilise l\'estimation V(St+1​), qui peut être inexacte, surtout au début de l\'apprentissage. Les méthodes MC sont non biaisées. C\'est un exemple classique du compromis biais-variance en apprentissage automatique. En pratique, la réduction de la variance offerte par le TD est souvent plus bénéfique que l\'introduction du biais, ce qui en fait une méthode plus efficace dans de nombreux cas.

### 45.3.3 Q-Learning : Contrôle TD Hors-Politique (Off-Policy)

Le Q-Learning est sans doute l\'algorithme d\'apprentissage par renforcement le plus connu et l\'une des avancées les plus importantes du domaine. C\'est un algorithme de contrôle par différence temporelle qui apprend directement la fonction de valeur d\'action optimale, Q∗(s,a), indépendamment de la politique que l\'agent suit pour explorer l\'environnement. Cette propriété le classe comme un algorithme **hors-politique** (*off-policy*).

#### Principe et Règle de Mise à Jour

L\'idée centrale du Q-Learning est d\'utiliser l\'équation d\'optimalité de Bellman pour Q∗ comme base pour sa règle de mise à jour. Rappelons l\'équation :

Q∗(s,a)=E

Le Q-Learning approxime cette espérance en utilisant un seul échantillon de transition (St​,At​,Rt+1​,St+1​). La règle de mise à jour, appliquée après chaque transition, est la suivante 52 :

\$\$Q(S_t, A_t) \\leftarrow Q(S_t, A_t) + \\alpha \\left\$\$

Analysons cette mise à jour :

> Q(St​,At​) est la valeur actuelle estimée.
>
> Rt+1​+γmaxa′​Q(St+1​,a′) est la cible TD.
>
> La différence entre la cible et la valeur actuelle est l\'erreur TD.

La caractéristique distinctive du Q-Learning est l\'opérateur maxa′​. Lors du calcul de la cible, l\'algorithme estime la valeur de l\'état suivant St+1​ en supposant que l\'agent y choisira la meilleure action possible (celle qui maximise la valeur Q), conformément à une politique gloutonne. Cependant, l\'action At​ qui a conduit à cette mise à jour a pu être choisie par une politique différente, par exemple une politique ϵ-greedy qui inclut de l\'exploration. Le Q-Learning apprend donc la valeur de la politique optimale (la politique cible, gloutonne) tout en suivant une autre politique pour générer des données (la politique comportementale, exploratoire). Cette dissociation est la définition même de l\'apprentissage hors-politique. Elle rend le Q-Learning très puissant et flexible, car il peut apprendre la politique optimale même à partir de données d\'exploration sous-optimales ou d\'observations d\'un autre agent.

#### Pseudo-code de l\'algorithme

Voici le pseudo-code pour l\'algorithme de Q-Learning tabulaire.

Algorithme : Q-Learning (Contrôle TD Hors-Politique)\
\
Initialiser la table Q(s,a) arbitrairement (ex: à 0) pour tout s, a\
Paramètres : taux d\'apprentissage α, facteur d\'escompte γ, probabilité d\'exploration ε\
\
Pour chaque épisode :\
Initialiser l\'état S\
Tant que S n\'est pas un état terminal :\
Choisir l\'action A depuis S en utilisant une politique dérivée de Q (ex: ε-greedy)\
// Avec probabilité 1-ε, A = argmax_a\' Q(S, a\')\
// Avec probabilité ε, A = action aléatoire\
\
Exécuter l\'action A\
Observer la récompense R et le nouvel état S\'\
\
// Mise à jour de la valeur Q\
Q(S, A) ← Q(S, A) + α \*\
\
S ← S\'

Sous des conditions standards (chaque paire (s,a) est visitée une infinité de fois et le taux d\'apprentissage α respecte les conditions de Robbins-Monro), il a été prouvé que Q(s,a) converge avec une probabilité de 1 vers la fonction de valeur d\'action optimale Q∗(s,a).

### 45.3.4 SARSA : Contrôle TD Sur-Politique (On-Policy)

SARSA est une alternative à Q-Learning qui appartient à la catégorie des algorithmes **sur-politique** (*on-policy*). Son nom est un acronyme qui décrit la séquence d\'événements utilisée pour sa mise à jour : **S**tate, **A**ction, **R**eward, **S**tate (suivant), **A**ction (suivante).

#### Principe et Règle de Mise à Jour

Contrairement au Q-Learning, qui apprend la politique optimale indépendamment de la politique d\'exploration, SARSA apprend la valeur de la politique qu\'il est en train de suivre, y compris ses aspects exploratoires. La mise à jour de SARSA est très similaire à celle du Q-Learning, mais avec une différence cruciale dans la construction de la cible TD.

Après avoir exécuté l\'action At​ dans l\'état St​ et observé la récompense Rt+1​ et le nouvel état St+1​, l\'agent choisit sa *prochaine* action, At+1​, en utilisant la même politique (par exemple, ϵ-greedy) qu\'il utilise pour l\'exploration. C\'est cette action At+1​ qui est utilisée pour former la cible TD.

La règle de mise à jour de SARSA est la suivante  :

\$\$Q(S_t, A_t) \\leftarrow Q(S_t, A_t) + \\alpha \\left\$\$

La différence fondamentale réside dans le terme Q(St+1​,At+1​) qui remplace le maxa′​Q(St+1​,a′) du Q-Learning. SARSA met à jour sa connaissance en se basant sur la valeur de l\'action qu\'il va *effectivement* prendre ensuite, et non sur la meilleure action possible. Il évalue donc la politique comportementale, ce qui en fait un algorithme sur-politique.

#### Pseudo-code de l\'algorithme

Le pseudo-code de SARSA est très proche de celui du Q-Learning, la principale différence étant le moment où la prochaine action est choisie.

Algorithme : SARSA (Contrôle TD Sur-Politique)\
\
Initialiser la table Q(s,a) arbitrairement (ex: à 0) pour tout s, a\
Paramètres : taux d\'apprentissage α, facteur d\'escompte γ, probabilité d\'exploration ε\
\
Pour chaque épisode :\
Initialiser l\'état S\
Choisir l\'action A depuis S en utilisant une politique dérivée de Q (ex: ε-greedy)\
\
Tant que S n\'est pas un état terminal :\
Exécuter l\'action A\
Observer la récompense R et le nouvel état S\'\
\
Choisir la prochaine action A\' depuis S\' en utilisant la même politique dérivée de Q\
\
// Mise à jour de la valeur Q\
Q(S, A) ← Q(S, A) + α \*\
\
S ← S\'\
A ← A\'

### 45.3.5 Analyse Comparative : Q-Learning vs. SARSA

La distinction entre sur-politique (SARSA) et hors-politique (Q-Learning) n\'est pas seulement une subtilité mathématique ; elle a des implications profondes sur le comportement de l\'agent et la nature de la politique apprise.

L\'exemple classique du **dilemme de la falaise** (*Cliff Walking*) illustre parfaitement cette différence. Imaginez un agent dans un monde de grille qui doit aller d\'un point de départ à un point d\'arrivée. Entre les deux se trouve une falaise. Tomber de la falaise entraîne une très forte récompense négative. Le chemin le plus court vers le but longe le bord de la falaise. Un chemin plus long mais plus sûr s\'éloigne de la falaise. L\'agent suit une politique

ϵ-greedy.

> **Comportement du Q-Learning** : Le Q-Learning est \"optimiste\". Sa règle de mise à jour avec l\'opérateur max lui fait apprendre la valeur de la politique optimale (gloutonne), qui consiste à prendre le chemin le plus court le long de la falaise. Il ignore le fait que la politique d\'exploration (ϵ-greedy) qu\'il suit le fera parfois, avec une probabilité ϵ, choisir une action aléatoire qui le fera tomber de la falaise. Il apprend donc une politique optimale mais risquée.
>
> **Comportement de SARSA** : SARSA est \"réaliste\". Sa règle de mise à jour prend en compte l\'action At+1​ réellement choisie par la politique ϵ-greedy. Il apprend donc que s\'approcher de la falaise est dangereux, car même si l\'action gloutonne est sûre, l\'action d\'exploration occasionnelle peut être catastrophique. Par conséquent, SARSA apprendra une politique plus conservatrice et plus sûre, qui s\'éloigne de la falaise, même si ce chemin est plus long. Il apprend la meilleure politique *possible compte tenu du fait qu\'il doit explorer*.

Cette différence est cruciale dans les applications du monde réel. Pour un robot d\'entrepôt, une politique de type SARSA, plus sûre et évitant les collisions même si elle est légèrement moins efficace, pourrait être préférable à une politique de type Q-Learning qui, bien qu\'optimale en théorie, pourrait entraîner des accidents coûteux en pratique.

Le tableau suivant résume cette comparaison fondamentale.

  ----------------------------------- --------------------------------------------------------------------------- ---------------------------------------------------------------------
  Critère                             Q-Learning                                                                  SARSA

  **Type de politique**               Hors-politique (*Off-policy*)                                               Sur-politique (*On-policy*)

  **Règle de mise à jour**            Q(S,A)←Q(S,A)+α                                                             Q(S,A)←Q(S,A)+α

  **Politique apprise**               Apprend la valeur de la politique optimale (gloutonne)                      Apprend la valeur de la politique comportementale (ex: ϵ-greedy)

  **Comportement (ex: falaise)**      Optimiste : apprend le chemin le plus court et le plus risqué               Conservateur : apprend un chemin plus long mais plus sûr

  **Stabilité**                       Peut être moins stable en raison de l\'estimation optimiste                 Généralement plus stable, car il suit la politique actuelle

  **Efficacité d\'échantillonnage**   Plus efficace, peut réutiliser des données de n\'importe quelle politique   Moins efficace, doit générer des données avec la politique actuelle
  ----------------------------------- --------------------------------------------------------------------------- ---------------------------------------------------------------------

En conclusion de cette section, les méthodes d\'apprentissage sans modèle nous ont libérés de la contrainte de connaître le modèle de l\'environnement. Cependant, les algorithmes présentés (MC, Q-Learning, SARSA) reposent sur une représentation tabulaire des fonctions de valeur. Cette approche est limitée aux problèmes avec des espaces d\'états et d\'actions discrets et de petite taille. Lorsque les états sont continus (par exemple, des images) ou que le nombre d\'états discrets est astronomique (par exemple, au jeu de Go), il devient impossible de stocker et de remplir une table Q. C\'est la

**malédiction de la dimensionnalité**, et la surmonter est la principale motivation de la dernière section de ce chapitre, consacrée à l\'apprentissage par renforcement profond.

## 45.4 Apprentissage par Renforcement Profond (DRL)

Les méthodes d\'apprentissage sans modèle que nous avons étudiées jusqu\'à présent, telles que le Q-Learning et SARSA, reposent sur une représentation tabulaire des fonctions de valeur. Cette approche, bien que fondamentale, se heurte à un mur lorsque la complexité de l\'environnement augmente. Dans de nombreux problèmes du monde réel, l\'espace d\'états peut être extrêmement vaste, voire infini. Pensez à un jeu vidéo où l\'état est représenté par les pixels bruts de l\'écran, ou à un robot dont l\'état est un vecteur de mesures continues provenant de multiples capteurs. Dans de tels scénarios, il est matériellement impossible de stocker une table de valeurs pour chaque état ou chaque paire état-action. C\'est ce qu\'on appelle la **malédiction de la dimensionnalité**.

De plus, l\'approche tabulaire manque de capacité de **généralisation**. Chaque entrée de la table est apprise indépendamment. L\'agent n\'a aucun moyen de généraliser ce qu\'il a appris sur un état à des états similaires mais jamais rencontrés. Si un robot apprend à éviter un obstacle à une certaine position, il doit tout réapprendre s\'il rencontre le même obstacle à une position légèrement différente.

L\'apprentissage par renforcement profond (*Deep Reinforcement Learning*, DRL) est né de la nécessité de surmonter ces limitations. L\'idée centrale du DRL est de remplacer la table de valeurs par un **approximateur de fonction** puissant et flexible : un réseau de neurones profond. Au lieu d\'apprendre la valeur de chaque état individuellement, l\'agent apprend les paramètres (les poids, notés θ) d\'un réseau qui peut prendre un état s en entrée et produire une estimation de sa valeur, V(s;θ), ou des valeurs de ses actions, Q(s,a;θ). Cette approche permet non seulement de gérer des espaces d\'états de grande dimension, mais aussi de généraliser l\'apprentissage à des états non vus.

Cette section explore deux des familles d\'algorithmes les plus influentes du DRL : les Réseaux Q-Profonds (DQN), qui étendent les méthodes basées sur la valeur, et les méthodes de Gradient de Politique, qui apprennent directement une représentation paramétrée de la politique.

### 45.4.1 Les Réseaux Q-Profonds (Deep Q-Networks - DQN)

Le Deep Q-Network (DQN) est un algorithme qui a marqué un tournant dans l\'histoire de l\'IA en démontrant la capacité d\'un agent à apprendre à jouer à des jeux vidéo Atari 2600 à un niveau surhumain, directement à partir des pixels bruts de l\'écran. Il combine l\'algorithme de Q-Learning avec un réseau de neurones à convolution (CNN) pour approximer la fonction de valeur d\'action Q∗(s,a).

#### Principe

Dans l\'architecture DQN, le réseau de neurones prend en entrée une représentation de l\'état s (par exemple, une pile de quelques images consécutives du jeu pour capturer le mouvement) et produit en sortie un vecteur de valeurs Q, une pour chaque action possible dans l\'espace d\'actions discret. L\'agent peut alors choisir l\'action avec la plus grande valeur Q estimée.

L\'apprentissage se fait en minimisant une fonction de perte (loss function) qui mesure l\'écart entre la prédiction du réseau et une cible, de la même manière que dans l\'apprentissage supervisé. La cible est dérivée de l\'équation de Bellman. Pour une transition (s,a,r,s′), la perte est typiquement l\'erreur quadratique moyenne entre la valeur Q prédite Q(s,a;θ) et la cible TD y:

y=r+γa′max​Q(s′,a′;θ)

\$\$ L(\\theta) = \\mathbb{E}{(s,a,r,s\') \\sim D} \\left\[ \\left( r + \\gamma \\max{a\'} Q(s\', a\'; \\theta) - Q(s, a; \\theta) \\right)\^2 \\right\] \$\$

Les poids θ du réseau sont alors mis à jour par descente de gradient stochastique pour minimiser cette perte.

#### Le Problème de l\'Instabilité

Cependant, la combinaison naïve du Q-Learning avec des réseaux de neurones non linéaires est notoirement instable. Deux problèmes majeurs apparaissent  :

> **Corrélation des échantillons** : Les expériences sont générées séquentiellement. Les échantillons consécutifs (st​,at​,rt+1​,st+1​) et (st+1​,at+1​,rt+2​,st+2​) sont fortement corrélés. L\'entraînement d\'un réseau de neurones sur des données aussi corrélées viole l\'hypothèse d\'indépendance des échantillons et peut conduire à un apprentissage inefficace et à des oscillations.
>
> **Cible mouvante (*Moving Target*)** : Dans l\'équation de perte, la cible y dépend elle-même des poids du réseau θ. À chaque mise à jour des poids, la cible change également. C\'est comme essayer d\'atteindre une cible qui bouge constamment, ce qui peut empêcher l\'algorithme de converger.

Pour résoudre ces problèmes d\'instabilité, l\'algorithme DQN original a introduit deux innovations clés qui sont devenues des standards dans le domaine du DRL basé sur la valeur.

#### Innovation Clé 1 : La Mémoire de Rejeu (Experience Replay)

Pour briser les corrélations dans la séquence d\'expériences, la **mémoire de rejeu** (*experience replay buffer*) est utilisée. Au lieu d\'entraîner le réseau sur la transition la plus récente, l\'agent stocke ses expériences --- les tuples (s,a,r,s′) --- dans une grande mémoire tampon de taille fixe.

Pendant la phase d\'apprentissage, au lieu d\'utiliser la dernière transition, l\'algorithme échantillonne un mini-batch de transitions de manière aléatoire à partir de cette mémoire. Ce mécanisme a deux avantages majeurs :

> Il **décorrèle les échantillons** utilisés pour l\'entraînement, ce qui stabilise l\'apprentissage et le rapproche des conditions de l\'apprentissage supervisé.
>
> Il **augmente l\'efficacité des données**, car chaque expérience peut être réutilisée plusieurs fois pour différentes mises à jour des poids, ce qui est particulièrement important lorsque l\'interaction avec l\'environnement est coûteuse.

#### Innovation Clé 2 : Le Réseau Cible (Target Network)

Pour résoudre le problème de la cible mouvante, le DQN utilise une deuxième architecture de réseau de neurones : le **réseau cible** (*target network*). Ce réseau, noté Q(s,a;θ−), est une copie du réseau principal (ou en ligne) Q(s,a;θ). Le réseau cible est utilisé pour calculer la valeur de l\'état suivant dans la cible TD, la rendant ainsi stable.

La fonction de perte devient alors :

\$\$ L(\\theta) = \\mathbb{E}{(s,a,r,s\') \\sim D} \\left\[ \\left( r + \\gamma \\max{a\'} Q(s\', a\'; \\theta\^-) - Q(s, a; \\theta) \\right)\^2 \\right\] \$\$

Les poids θ du réseau principal sont mis à jour par descente de gradient à chaque étape d\'apprentissage. Les poids θ− du réseau cible, en revanche, sont maintenus fixes. Ils ne sont mis à jour que périodiquement (par exemple, tous les C pas d\'entraînement) en copiant les poids du réseau principal : θ−←θ. Cette mise à jour périodique et moins fréquente garantit que la cible reste stable sur de courtes périodes, ce qui empêche les oscillations et stabilise considérablement l\'apprentissage.

#### Algorithme et Extensions

L\'algorithme DQN complet intègre ces deux mécanismes. Il alterne entre la collecte d\'expériences dans la mémoire de rejeu et l\'entraînement du réseau principal sur des mini-batchs, en utilisant le réseau cible pour générer les cibles de mise à jour.

Depuis l\'introduction du DQN, de nombreuses améliorations ont été proposées pour affiner ses performances. Parmi les plus importantes, on peut citer :

> **Double DQN** : Il s\'attaque au problème de la surestimation des valeurs Q, qui est une tendance des algorithmes de Q-Learning. Il découple la sélection de la meilleure action de l\'évaluation de sa valeur, en utilisant le réseau principal pour la sélection et le réseau cible pour l\'évaluation.
>
> **Dueling DQN** : Cette architecture de réseau sépare l\'estimation de la fonction de valeur d\'état V(s) et de la fonction d\'avantage A(s,a), puis les combine pour obtenir les valeurs Q. Cela permet un apprentissage plus efficace de la valeur des états.
>
> **Prioritized Experience Replay** : Au lieu d\'échantillonner les expériences de manière uniforme, cette technique donne la priorité aux transitions pour lesquelles l\'erreur TD est la plus grande, car ce sont celles dont l\'agent a le plus à apprendre.

### 45.4.2 Les Méthodes de Gradient de Politique (Policy Gradients)

Les DQN et leurs variantes appartiennent à la famille des méthodes basées sur la valeur. Une approche alternative et tout aussi puissante en DRL est celle des **méthodes de gradient de politique** (*policy gradient methods*). Au lieu d\'apprendre une fonction de valeur et d\'en dériver une politique implicite (en choisissant l\'action gloutonne), ces méthodes apprennent directement une politique paramétrée, π(a∣s;θ).

#### Principe et Avantages

La politique est représentée par un réseau de neurones qui prend un état s en entrée et produit en sortie une distribution de probabilité sur les actions. L\'objectif est de trouver les paramètres θ du réseau qui maximisent une fonction de performance, généralement le retour attendu J(θ)=Eτ∼πθ​​\[G0​\].

L\'apprentissage se fait par **montée de gradient** sur cette fonction de performance. On ajuste les paramètres θ dans la direction du gradient ∇θ​J(θ), qui indique comment modifier les poids pour augmenter le retour attendu.

Cette approche directe présente plusieurs avantages par rapport aux méthodes basées sur la valeur  :

> **Gestion des actions continues** : Elles peuvent naturellement gérer des espaces d\'actions continus, où le réseau peut produire directement les paramètres d\'une distribution continue (par exemple, la moyenne et l\'écart-type d\'une gaussienne).
>
> **Apprentissage de politiques stochastiques** : Elles apprennent explicitement des politiques stochastiques, ce qui peut être optimal dans certains environnements et aide à l\'exploration.
>
> **Meilleures propriétés de convergence** : Elles ont tendance à avoir de meilleures propriétés de convergence en pratique, avec des mises à jour plus douces.

#### Le Théorème du Gradient de Politique

La question clé est de savoir comment calculer le gradient de la performance ∇θ​J(θ) alors que la performance dépend à la fois des actions choisies par la politique et des dynamiques de l\'environnement. Le **théorème du gradient de politique** fournit une expression analytique de ce gradient qui ne dépend pas de la dérivée des dynamiques de l\'environnement (qui sont inconnues) :

\$\$\\nabla\_\\theta J(\\theta) = \\mathbb{E}\_{\\pi\_\\theta} \\left\$\$

Ce théorème est fondamental. Il nous dit que le gradient est l\'espérance d\'un produit de deux termes :

> ∇θ​logπθ​(At​∣St​) : Le \"score\". C\'est un vecteur qui indique dans quelle direction ajuster les paramètres θ pour augmenter la probabilité de l\'action At​ qui a été prise dans l\'état St​.
>
> Qπθ​(St​,At​) : La fonction de valeur d\'action. Ce terme pondère le score. Si l\'action At​ a mené à un bon résultat (valeur Q élevée), nous voulons augmenter sa probabilité. Si elle a mené à un mauvais résultat (valeur Q faible), nous voulons diminuer sa probabilité.

### 45.4.3 L\'Algorithme REINFORCE

L\'algorithme REINFORCE, également connu sous le nom de Monte Carlo Policy Gradient, est l\'implémentation la plus directe du théorème du gradient de politique.

#### Principe et Déroulement

REINFORCE utilise le retour complet d\'un épisode, Gt​=∑k=tT​γk−tRk+1​, comme une estimation non biaisée de Qπθ​(St​,At​). L\'algorithme fonctionne de la manière suivante :

> **Génération d\'une trajectoire** : L\'agent utilise sa politique actuelle πθ​ pour générer un épisode complet, en stockant la séquence d\'états, d\'actions et de récompenses.
>
> **Calcul des retours** : Une fois l\'épisode terminé, pour chaque pas de temps t de l\'épisode, l\'algorithme calcule le retour escompté Gt​.
>
> Mise à jour des poids : Les paramètres de la politique sont mis à jour par montée de gradient, en utilisant les retours calculés pour pondérer les scores. La règle de mise à jour pour un seul pas de temps est :\
> \
> θ←θ+αγtGt​∇θ​logπθ​(At​∣St​)

L\'intuition est simple : pour chaque action prise, si le retour qui a suivi était élevé, on ajuste les poids pour rendre cette action plus probable à l\'avenir dans cet état. Si le retour était faible, on la rend moins probable.

#### Pseudo-code de l\'algorithme

Voici le pseudo-code de l\'algorithme REINFORCE.

Algorithme : REINFORCE\
\
Initialiser les paramètres de la politique θ de manière aléatoire\
Paramètres : taux d\'apprentissage α, facteur d\'escompte γ\
\
Pour chaque épisode :\
Générer un épisode complet en suivant la politique π_θ :\
S_0, A_0, R_1, S_1, A_1, R_2,\..., S\_{T-1}, A\_{T-1}, R_T\
\
Pour t de T-1 à 0 :\
// Calculer le retour à partir de l\'instant t\
G ← Σ\_{k=t+1}\^{T} γ\^{k-t-1} R_k\
\
// Mettre à jour les paramètres de la politique\
θ ← θ + α \* γ\^t \* G \* ∇\_θ log(π_θ(A_t\|S_t))

#### Limites et Améliorations

La principale faiblesse de REINFORCE est la **variance élevée** de l\'estimation du gradient. Le retour Gt​ peut varier considérablement d\'un épisode à l\'autre, même avec des changements mineurs dans les actions, ce qui rend l\'apprentissage lent et instable.

Une technique courante pour réduire cette variance est d\'introduire une ligne de base (baseline), b(St​), qui est soustraite du retour. Le gradient devient :

\$\$\\nabla\_\\theta J(\\theta) = \\mathbb{E}\_{\\pi\_\\theta} \\left\$\$

Tant que la ligne de base ne dépend pas de l\'action At​, cette modification ne change pas l\'espérance du gradient (elle reste non biaisée) mais peut considérablement réduire sa variance. Un choix naturel pour la ligne de base est une estimation de la fonction de valeur d\'état, V(St​). Le terme (Gt​−V(St​)) est alors une estimation de l\'avantage A(St​,At​)=Q(St​,At​)−V(St​). Cette idée est au cœur des méthodes Acteur-Critique, qui apprennent simultanément une politique (l\'acteur) et une fonction de valeur (le critique) pour réduire la variance, menant à des algorithmes plus avancés comme A2C et PPO.86

### 45.4.4 Synthèse et Perspectives

L\'avènement de l\'apprentissage par renforcement profond a unifié deux domaines puissants de l\'intelligence artificielle : la théorie de la décision séquentielle de l\'AR et la capacité de représentation de l\'apprentissage profond. Cette convergence a permis de résoudre des problèmes d\'une échelle et d\'une complexité sans précédent.

Les deux familles d\'algorithmes présentées, basées sur la valeur (DQN) et sur la politique (gradients de politique), représentent des approches distinctes avec des compromis différents.

  ---------------------------- ------------------------------------------------------------------------------------------ -------------------------------------------------------------------------
  Critère                      DQN (Basé sur la valeur)                                                                   REINFORCE (Basé sur la politique)

  **Entité apprise**           Fonction de valeur d\'action Q(s,a;θ)                                                      Politique \$\\pi(a

  **Type d\'actions**          Discret                                                                                    Discret et Continu

  **Type de politique**        Implicite, quasi-déterministe (gloutonne)                                                  Explicite, stochastique

  **Stabilité / Variance**     Moins de variance grâce au bootstrapping, mais instable sans techniques de stabilisation   Variance élevée (MC), mais mises à jour plus stables

  **Efficacité des données**   Élevée (hors-politique, mémoire de rejeu)                                                  Faible (sur-politique, les trajectoires ne sont utilisées qu\'une fois)
  ---------------------------- ------------------------------------------------------------------------------------------ -------------------------------------------------------------------------

Le choix entre ces approches dépend du problème. Le DQN est souvent très efficace en termes de données pour les problèmes à actions discrètes grâce à sa nature hors-politique. Les méthodes de gradient de politique sont plus générales, s\'appliquant aux actions continues, et peuvent être plus stables dans certains cas, bien que moins efficaces en termes d\'échantillons.

Le futur du DRL réside probablement dans la combinaison des forces de ces deux mondes. Les algorithmes Acteur-Critique, tels que A2C/A3C et PPO, font exactement cela : ils utilisent une fonction de valeur (le critique) pour réduire la variance des mises à jour de la politique (l\'acteur), offrant un compromis robuste qui est à la base de nombreuses réussites récentes en DRL. Alors que le domaine continue d\'évoluer, les fondements établis dans ce chapitre --- des MDP aux DQN et aux gradients de politique --- restent les piliers sur lesquels reposent toutes les innovations futures.

# Chapitre 46 : Traitement du Langage Naturel (TALN/NLP)

## Introduction : Du Langage Humain à la Représentation Computationnelle

Le langage naturel, dans sa richesse et sa complexité, représente à la fois le véhicule de la pensée humaine et l\'un des défis les plus profonds de l\'intelligence artificielle. Pour l\'humain, la communication verbale ou écrite est une seconde nature, une faculté acquise avec une aisance déconcertante. Pourtant, cette apparente simplicité masque une structure d\'une complexité computationnelle immense. L\'ambiguïté lexicale (le mot « avocat » désigne-t-il un fruit ou un juriste?), la dépendance au contexte (« Elle est terrible! » peut être un compliment ou une critique), et la nécessité d\'une vaste connaissance du monde pour interpréter correctement une phrase sont autant d\'obstacles qui ont longtemps rendu le langage humain quasi impénétrable pour les machines. Le traitement automatique du langage naturel (TALN), ou

*Natural Language Processing* (NLP) en anglais, est la discipline à l\'intersection de l\'informatique, de l\'intelligence artificielle et de la linguistique qui se consacre à doter les ordinateurs de la capacité de comprendre, d\'interpréter et de générer le langage humain.

Ce chapitre se propose de raconter l\'histoire de cette quête, une histoire marquée par une évolution spectaculaire des paradigmes. Nous suivrons un parcours chronologique et conceptuel, débutant avec les premières approches qui traitaient le langage comme une séquence de symboles discrets. Ces méthodes, bien que fondamentales, se heurtaient rapidement aux limites de leur propre représentation. Nous verrons comment la nécessité de capturer la *signification* des mots a conduit à une véritable révolution : le passage des représentations symboliques à des représentations vectorielles continues, ou *plongements lexicaux*. Ce changement a transformé le langage en un objet géométrique, où la sémantique devient mesurable et manipulable par des opérations algébriques.

Forts de cette nouvelle capacité à représenter le sens, nous explorerons ensuite comment le TALN a pu s\'attaquer à des applications complexes et à haute valeur ajoutée, telles que l\'analyse de sentiments, la traduction automatique et la conception de systèmes de dialogue. Chacune de ces applications n\'a pas seulement bénéficié des avancées théoriques, mais a également servi de catalyseur, poussant les architectures de modèles à leurs limites et inspirant de nouvelles innovations.

Enfin, nous aborderons la période contemporaine, dominée par l\'émergence des grands modèles de langage (LLMs). Nous verrons comment une architecture particulière, le *Transformer*, en abandonnant les contraintes séquentielles des modèles précédents au profit d\'un mécanisme d\'attention massivement parallèle, a permis une mise à l\'échelle sans précédent. Cette nouvelle échelle a fait émerger des capacités de compréhension et de génération de langage d\'une qualité stupéfiante, donnant naissance à un nouveau paradigme d\'interaction avec les machines : l\'ingénierie de prompt. Ce voyage, des compteurs de mots aux architectures neuronales profondes, illustre une tendance fondamentale en intelligence artificielle : une abstraction croissante, passant de la manipulation de règles explicites à l\'apprentissage de représentations latentes dans des espaces de très haute dimension.

## 46.1 Traitement du texte et Modèles de langage

Avant qu\'un algorithme puisse « comprendre » ou même simplement traiter du texte, celui-ci doit être transformé d\'une simple chaîne de caractères bruts en une structure de données organisée et normalisée. Cette section inaugurale se consacre à ces fondations indispensables. Nous commencerons par disséquer le pipeline de prétraitement, une série d\'étapes de nettoyage et de structuration sans lesquelles toute analyse ultérieure serait viciée. Ensuite, nous nous plongerons dans la première tentative formelle et mathématiquement rigoureuse de modéliser le langage : les modèles statistiques, et plus particulièrement les modèles n-grammes. Ces modèles, bien que conceptuellement simples, nous introduiront à des défis fondamentaux, comme le problème de la sparsité des données, dont la résolution a été un moteur d\'innovation majeur dans le domaine.

### 46.1.1 Le Pipeline Fondamental de Prétraitement Textuel

Le texte que l\'on trouve dans le monde réel -- qu\'il provienne de pages web, de courriels, de livres numérisés ou de messages sur les réseaux sociaux -- est intrinsèquement « bruyant ». Il est truffé de ponctuation, de variations de casse, de balises de formatage (comme le HTML), d\'erreurs de frappe et d\'autres artefacts qui, s\'ils sont conservés, peuvent gravement nuire à la performance des modèles de TALN. L\'objectif du prétraitement est de nettoyer et de standardiser ce texte brut pour le transformer en une représentation propre et cohérente, prête à être analysée par des algorithmes. Ce pipeline, bien que ses étapes puissent varier en fonction de la tâche, constitue la première étape cruciale de la quasi-totalité des projets de TALN.

#### Segmentation

La première opération consiste généralement à diviser un long document en unités de traitement plus petites et sémantiquement cohérentes. La plupart du temps, cette unité est la phrase. Cette étape, appelée segmentation de phrases (*sentence segmentation*), peut sembler triviale : il suffirait de découper le texte à chaque fois qu\'un point, un point d\'interrogation ou un point d\'exclamation est rencontré. Cependant, la réalité linguistique est plus complexe. Un point peut marquer la fin d\'une phrase, mais il peut aussi faire partie d\'une abréviation (ex: « M. Tremblay »), d\'une URL ou d\'un nombre décimal. Des bibliothèques de TALN modernes comme spaCy ou NLTK utilisent des modèles pré-entraînés et des heuristiques sophistiquées pour gérer ces ambiguïtés et identifier correctement les frontières des phrases.

#### Tokenisation

Une fois le texte segmenté en phrases, l\'étape suivante est la tokenisation, qui consiste à décomposer chaque phrase en ses unités fondamentales : les *tokens*. Ces tokens sont les briques de base sur lesquelles les modèles de langage sont construits.

> **Principes et Stratégies :** La tokenisation transforme une chaîne de caractères continue en une liste de tokens. L\'approche la plus simple est la tokenisation par espacement, qui divise la phrase à chaque espace blanc. Cependant, cette méthode est limitée. Par exemple, dans la phrase « J\'aime le TALN! », une tokenisation par espacement produirait , fusionnant le mot « aime » avec l\'apostrophe et le mot « TALN » avec la ponctuation. Des approches plus robustes utilisent des expressions régulières ou des règles linguistiques pour séparer correctement la ponctuation et gérer les contractions, produisant un résultat plus propre comme .
>
> **Tokenisation par sous-mots (Subword Tokenization) :** Pour les grands modèles de langage modernes, la tokenisation au niveau du mot pose un problème majeur : la taille du vocabulaire. Un vocabulaire qui inclut chaque mot unique d\'un grand corpus peut contenir des millions d\'entrées, ce qui est coûteux en mémoire et en calcul. De plus, cette approche ne peut pas gérer les mots rares ou inconnus (mots hors-vocabulaire ou *Out-Of-Vocabulary* - OOV) qui n\'ont pas été vus lors de l\'entraînement. La solution qui s\'est imposée est la tokenisation par sous-mots. Des algorithmes comme *Byte-Pair Encoding* (BPE), *WordPiece* ou *SentencePiece* apprennent à décomposer les mots en unités plus petites et récurrentes. Par exemple, le mot « déconstitutionnalisation » pourrait être tokenisé en \[\"dé\", \"constitution\", \"nal\", \"isation\"\]. Cette approche présente deux avantages majeurs : elle maintient un vocabulaire de taille raisonnable et peut représenter n\'importe quel mot, même inconnu, en le décomposant en sous-mots connus. Elle capture également des informations morphologiques, car des mots partageant un même morphème (comme \"-isation\") partageront un token de sous-mot.

#### Normalisation et Nettoyage

Cette étape vise à réduire le « bruit » et la variabilité non pertinente dans les données textuelles.

> **Conversion en minuscules (Lowercasing) :** C\'est l\'une des étapes de normalisation les plus courantes et les plus simples. En convertissant tout le texte en minuscules, on s\'assure que des mots comme « Langage », « langage » et « LANGAGE » sont traités comme un seul et même token. Cela permet de réduire la taille effective du vocabulaire et d\'éviter que le modèle ne traite ces variations comme des mots distincts, ce qui aide à combattre la sparsité des données. Bien que généralement bénéfique, cette étape peut parfois être indésirable, par exemple lorsque la casse porte une information sémantique (comme la distinction entre la marque « Apple » et le fruit « apple » en anglais).
>
> **Suppression des éléments non pertinents :** Selon la source des données, le texte peut contenir des éléments qui n\'apportent aucune valeur sémantique pour la tâche visée. Il est courant d\'utiliser des expressions régulières pour supprimer les balises HTML, les URLs, les adresses électroniques, les nombres ou les caractères spéciaux qui ne sont pas pertinents pour l\'analyse.

#### Filtrage des Mots Vides (Stop Words)

Toutes les langues contiennent des mots extrêmement fréquents qui servent principalement de liants grammaticaux mais portent peu de contenu sémantique. En français, des mots comme « le », « la », « de », « un », « et », « à » en sont des exemples typiques. Ces mots sont appelés *mots vides* ou *stop words*.

> **Rôle et justification :** Dans de nombreuses tâches de TALN, comme la classification de documents ou la recherche d\'information, ces mots peuvent introduire du bruit et augmenter inutilement la dimensionnalité des données. En les supprimant, on permet au modèle de se concentrer sur les mots porteurs de sens, ce qui peut améliorer à la fois l\'efficacité et la performance.
>
> **Mise en œuvre :** Le filtrage des mots vides se fait généralement en comparant chaque token à une liste prédéfinie de mots à exclure. Des bibliothèques comme NLTK et spaCy fournissent des listes de mots vides pour de nombreuses langues. Il est cependant crucial de noter qu\'il n\'existe pas de liste universelle. Une liste de mots vides doit être adaptée au corpus et à la tâche. Par exemple, dans un contexte d\'analyse de sentiments sur des critiques de films, le mot « pas » dans « ce n\'est pas bon » est essentiel pour capturer la négation et ne devrait pas être considéré comme un mot vide.

#### Racinisation (Stemming) vs. Lemmatisation

L\'un des défis de la variabilité linguistique est la flexion morphologique : un même mot de base (ou lemme) peut apparaître sous de nombreuses formes différentes (ex: « marcher », « marche », « marchons », « marchaient »). Pour que les modèles puissent reconnaître que toutes ces formes se réfèrent au même concept, on utilise des techniques de normalisation morphologique. Les deux approches principales sont la racinisation et la lemmatisation.

> **Racinisation (Stemming) :** La racinisation est une approche heuristique et algorithmique qui vise à réduire un mot à sa racine (*stem*) en supprimant les affixes (principalement les suffixes). C\'est une méthode rapide et computationnellement peu coûteuse. L\'algorithme de Porter, par exemple, est un standard classique pour l\'anglais. Cependant, cette approche est \"brute\" et peut produire des racines qui ne sont pas des mots valides dans la langue. Par exemple, l\'algorithme de Lovins pourrait réduire « argue », « argued », « argues » et « arguing » à la racine « argu », qui n\'est pas un mot anglais. De même, en français, « marcher » et « marchons » pourraient être réduits à « march ». Le principal inconvénient est cette perte de validité linguistique et le risque de sur-racinisation (réduire des mots de sens différents à la même racine) ou de sous-racinisation (ne pas réduire des mots de même sens à la même racine).
>
> **Lemmatisation :** La lemmatisation est une approche plus sophistiquée et linguistiquement informée. Elle vise à ramener un mot à sa forme canonique ou de dictionnaire, appelée *lemme*. Pour ce faire, elle utilise des dictionnaires et une analyse morphologique, prenant souvent en compte le contexte grammatical du mot (sa partie du discours, ou *Part-of-Speech* - POS). Par exemple, pour lemmatiser correctement le mot anglais « saw », un lemmatiseur doit savoir s\'il est utilisé comme un nom (une scie) ou comme un verbe (le passé de *to see*). Le résultat de la lemmatisation est toujours un mot linguistiquement valide (ex: « marchaient » devient « marcher »). Cette précision a un coût : la lemmatisation est significativement plus lente et plus complexe à mettre en œuvre que la racinisation, car elle nécessite des ressources linguistiques considérables.

Le choix entre ces deux techniques est un compromis classique en ingénierie. Pour des tâches où la vitesse est primordiale et où une certaine imprécision est acceptable, comme la recherche d\'information à grande échelle, la racinisation peut être suffisante. Pour des applications qui exigent une haute précision sémantique, comme les systèmes de réponse aux questions ou les agents conversationnels, la lemmatisation est généralement préférée. Le tableau suivant synthétise les caractéristiques et les cas d\'usage de chaque approche.

**Tableau 46.1 : Comparaison détaillée entre la Racinisation et la Lemmatisation**

  ---------------------------- -------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------ --------------------------------------------------------------------------
  Critère                      Racinisation (Stemming)                                                                Lemmatisation                                                                                                Cas d\'usage typiques

  **Principe**                 Heuristique : troncature de suffixes basée sur des règles.                             Linguistique : utilisation de dictionnaires et d\'analyses morphologiques pour trouver la forme canonique.   

  **Vitesse**                  Très rapide.                                                                           Plus lente.                                                                                                  Racinisation pour le traitement de masse (indexation de recherche).

  **Coût Computationnel**      Faible.                                                                                Élevé, nécessite des ressources linguistiques.                                                               Lemmatisation pour les applications interactives (chatbots).

  **Qualité du Résultat**      La racine n\'est pas garantie d\'être un mot valide (ex: \"studies\" -\> \"studi\").   Le lemme est toujours un mot valide (ex: \"studies\" -\> \"study\").                                         Lemmatisation pour la génération de texte ou l\'analyse sémantique fine.

  **Dépendance au Contexte**   Ne tient généralement pas compte du contexte grammatical (POS tag).                    Peut utiliser le contexte pour désambiguïser (ex: \"saw\" verbe vs. nom).                                    Racinisation quand le contexte est moins crucial.
  ---------------------------- -------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------ --------------------------------------------------------------------------

### 46.1.2 Les Modèles de Langage Statistiques : Prédire le Prochain Mot

Une fois le texte prétraité et transformé en une séquence de tokens, la question fondamentale devient : comment modéliser la structure et la plausibilité de ces séquences? Un modèle de langage est une tentative de répondre à cette question en utilisant les outils de la théorie des probabilités.

#### Définition Formelle d\'un Modèle de Langage

Formellement, un modèle de langage est une fonction qui assigne une probabilité à une séquence de mots w1​,w2​,...,wm​. Cette probabilité, notée P(w1​,w2​,...,wm​), quantifie la vraisemblance que cette séquence de mots apparaisse dans une langue donnée. Un bon modèle de langage devrait assigner une probabilité élevée à une phrase grammaticalement correcte et sémantiquement plausible comme « le chat dort sur le tapis », et une probabilité très faible, voire nulle, à une séquence de mots aléatoire comme « tapis le sur dort chat le ». Cette capacité à quantifier la plausibilité d\'une phrase est au cœur de nombreuses applications, de la correction orthographique à la traduction automatique.

Le défi est de calculer cette probabilité jointe. La **règle de la chaîne** (ou *chain rule*) de la théorie des probabilités nous permet de décomposer cette probabilité jointe en un produit de probabilités conditionnelles  :

P(w1​,w2​,...,wm​)=P(w1​)×P(w2​∣w1​)×P(w3​∣w1​,w2​)×⋯×P(wm​∣w1​,...,wm−1​)

P(w1​,...,wm​)=k=1∏m​P(wk​∣w1​,...,wk−1​)

Cependant, cette formulation exacte est intraitable en pratique. Calculer la probabilité d\'un mot étant donné toute l\'histoire des mots qui le précèdent nécessiterait une quantité de données astronomique pour estimer de manière fiable toutes les combinaisons possibles. C\'est ici qu\'intervient une simplification cruciale.

#### Le Modèle N-gramme et l\'Hypothèse de Markov

Pour rendre le problème tractable, les modèles n-grammes introduisent une simplification radicale : **l\'hypothèse de Markov**. Cette hypothèse postule que la probabilité d\'un mot ne dépend pas de toute l\'histoire qui le précède, mais seulement d\'une fenêtre fixe des

n−1 mots précédents.

P(wk​∣w1​,...,wk−1​)≈P(wk​∣wk−n+1​,...,wk−1​)

Cette approximation transforme un problème de dépendance à long terme en un problème de dépendance locale. La valeur de n définit l\'ordre du modèle  :

> **Unigramme (n=1) :** Le modèle le plus simple. Chaque mot est considéré comme indépendant des autres. P(wk​∣w1​,...,wk−1​)≈P(wk​). La probabilité d\'une phrase est simplement le produit des probabilités de ses mots.
>
> **Bigramme (n=2) :** La probabilité d\'un mot ne dépend que du mot qui le précède immédiatement. P(wk​∣w1​,...,wk−1​)≈P(wk​∣wk−1​). C\'est un modèle de chaîne de Markov de premier ordre.
>
> **Trigramme (n=3) :** La probabilité d\'un mot dépend des deux mots précédents. P(wk​∣w1​,...,wk−1​)≈P(wk​∣wk−2​,wk−1​).

Avec cette hypothèse, le calcul de la probabilité d\'une phrase devient une simple multiplication des probabilités des n-grammes qui la composent. Pour estimer ces probabilités conditionnelles, on utilise l\'**estimation par maximum de vraisemblance** (*Maximum Likelihood Estimation* - MLE), qui consiste simplement à compter les occurrences des n-grammes dans un grand corpus d\'entraînement. Par exemple, pour un modèle bigramme, la probabilité est calculée comme suit  :

P(wi​∣wi−1​)=C(wi−1​)C(wi−1​,wi​)​

où C(wi−1​,wi​) est le nombre de fois où le bigramme (wi−1​,wi​) apparaît dans le corpus, et C(wi−1​) est le nombre total d\'occurrences du mot wi−1​.

#### Le Problème Fondamental de la Sparsité des Données

Les modèles n-grammes, malgré leur élégance mathématique, se heurtent à un mur lorsqu\'ils sont confrontés à la réalité des données linguistiques : la **sparsité** (ou lacunarité). Le langage est incroyablement productif. Même avec un corpus de plusieurs milliards de mots, la grande majorité des séquences de mots grammaticalement valides n\'apparaîtront jamais.

Ce phénomène a une conséquence catastrophique pour le calcul des probabilités par MLE. Si un n-gramme valide (par exemple, le bigramme « réacteur nucléaire ») n\'est jamais apparu dans le corpus d\'entraînement, son compte C(reˊacteur,nucleˊaire) sera de zéro. Par conséquent, sa probabilité estimée sera de zéro. En raison de la nature multiplicative du modèle, toute phrase contenant ce bigramme se verra assigner une probabilité totale de zéro.

Le modèle devient ainsi incapable de généraliser. Il considère comme impossibles des phrases parfaitement plausibles, simplement parce qu\'il ne les a pas vues pendant son entraînement. C\'est un cas extrême de sur-apprentissage (*overfitting*). Pour qu\'un modèle n-gramme soit utilisable en pratique, il est impératif de résoudre ce « problème du zéro ».

#### Techniques de Lissage (Smoothing)

Le lissage est une famille de techniques statistiques conçues pour adresser le problème de la sparsité. L\'idée générale est de prendre une petite partie de la masse de probabilité des n-grammes qui ont été observés et de la redistribuer aux n-grammes qui n\'ont pas été observés, s\'assurant ainsi qu\'aucun n-gramme n\'ait une probabilité de zéro.

> **Lissage de Laplace (Add-one Smoothing) :** C\'est la méthode la plus simple et la plus intuitive. Elle consiste à prétendre que nous avons vu chaque n-gramme possible une fois de plus que ce que nous avons réellement compté. On ajoute donc 1 au numérateur de chaque calcul de probabilité. Pour maintenir une distribution de probabilité valide (dont la somme est 1), il faut ajuster le dénominateur en conséquence. Pour un modèle bigramme, la formule devient  :\
> PLaplace​(wi​∣wi−1​)=C(wi−1​)+VC(wi−1​,wi​)+1​\
> où V est la taille du vocabulaire (le nombre de mots uniques dans le corpus). Cette technique garantit que même les n-grammes non vus (C=0) auront une petite probabilité non nulle. Cependant, le lissage de Laplace est considéré comme une méthode trop agressive et grossière. En pratique, il déplace une part trop importante de la masse de probabilité vers les événements non vus, ce qui pénalise de manière excessive les probabilités des événements réellement observés. Pour cette raison, il est rarement utilisé dans les modèles de langage modernes.
>
> **Lissages Avancés : Good-Turing et Kneser-Ney :** Pour surmonter les défauts du lissage de Laplace, des techniques plus sophistiquées ont été développées. Bien qu\'une description mathématique exhaustive dépasse le cadre de cette introduction, il est essentiel d\'en comprendre l\'intuition.

**Lissage de Good-Turing :** Cette méthode, développée par Alan Turing et I. J. Good à Bletchley Park, repose sur une idée ingénieuse : utiliser la fréquence des choses que l\'on a vues une seule fois pour estimer la probabilité totale des choses que l\'on n\'a jamais vues. Il s\'appuie sur la notion de « fréquence des fréquences » :\
Nr​ est le nombre de n-grammes qui apparaissent exactement r fois dans le corpus. La probabilité totale des n-grammes non vus (r=0) peut être estimée par NN1​​, où N est le nombre total de n-grammes. Good-Turing utilise ensuite cette information pour ajuster les comptes de tous les n-grammes, réduisant légèrement les comptes des n-grammes vus pour libérer de la masse de probabilité.

**Lissage de Kneser-Ney :** Largement considéré comme l\'état de l\'art des techniques de lissage pour les modèles n-grammes, le lissage de Kneser-Ney introduit une intuition linguistique plus fine : la **probabilité de continuation**. L\'idée est qu\'un mot qui apparaît dans une grande variété de contextes différents est plus susceptible d\'apparaître dans un nouveau contexte qu\'un mot qui apparaît très fréquemment mais toujours dans le même contexte. L\'exemple classique oppose le mot « Francisco » au mot « the » en anglais. « Francisco » a une fréquence unigramme élevée, mais il apparaît presque exclusivement après « San ». En revanche, « the » apparaît après une multitude de mots différents. Kneser-Ney ne se base pas sur la probabilité brute d\'un mot, mais sur le nombre de types de mots différents qui le précèdent. Cette approche s\'est avérée extrêmement efficace pour modéliser la distribution des n-grammes.

### 46.1.3 Synthèse des Idées Clés et Implications de la Section

Cette première exploration des fondations du TALN met en lumière une tension fondamentale qui a façonné le développement du domaine. D\'un côté, le modèle n-gramme, avec son cadre mathématique élégant basé sur l\'hypothèse de Markov, offre une approche simple et interprétable pour modéliser la probabilité des séquences linguistiques. De l\'autre, cette abstraction se heurte violemment à la nature intrinsèquement lacunaire et à longue traîne du langage humain. La plupart des combinaisons de mots possibles n\'apparaîtront jamais, même dans les corpus les plus vastes, créant un paysage de données où les zéros sont la norme et les occurrences, l\'exception.

Ce conflit entre la propreté du modèle et le désordre des données donne naissance au « problème du zéro », qui rend l\'estimation directe par maximum de vraisemblance inutilisable pour toute tâche de généralisation. Dans ce contexte, les techniques de lissage ne doivent pas être vues comme de simples optimisations techniques. Elles représentent une reconnaissance profonde de cette tension. Le passage du lissage de Laplace, naïf et brutal, aux méthodes sophistiquées comme Good-Turing et Kneser-Ney, est une quête pour « réparer » le modèle probabiliste, pour le forcer à mieux s\'aligner avec la nature incomplète des données observables.

Cette lutte incessante contre la sparsité est un thème central qui traverse l\'histoire du TALN. Elle révèle les limites inhérentes à une approche qui traite les mots comme des symboles discrets et indépendants. Cette prise de conscience motivera directement la transition vers le paradigme suivant, exploré dans la section 46.2 : celui des représentations denses et continues, où l\'idée de similarité sémantique peut enfin être capturée explicitement.

## 46.2 Plongements lexicaux (Word Embeddings)

Les modèles n-grammes, même avec des techniques de lissage sophistiquées, souffrent d\'un défaut fondamental : ils ne possèdent aucune notion de similarité sémantique. Pour un tel modèle, les mots « roi » et « reine » sont aussi dissemblables que les mots « roi » et « tournevis ». Chaque mot est une entité atomique, un symbole discret sans relation intrinsèque avec les autres. Cette limitation a constitué un obstacle majeur au progrès du TALN. La solution est venue d\'un changement de paradigme radical : cesser de représenter les mots par des identifiants arbitraires et commencer à les représenter par des vecteurs denses dans un espace continu de haute dimension. Cette section explore cette révolution des plongements lexicaux, ou *word embeddings*, qui a permis de « géométriser » la sémantique.

### 46.2.1 La Révolution Sémantique : Des Mots aux Vecteurs

#### Limites des Représentations Discrètes : le Codage « One-Hot »

La manière la plus directe de représenter un mot pour un algorithme est le **codage « one-hot »** (ou codage disjonctif complet). Si notre vocabulaire contient V mots uniques, chaque mot est représenté par un vecteur de taille V. Ce vecteur est entièrement composé de zéros, à l\'exception d\'un unique \'1\' à l\'indice correspondant au mot dans le vocabulaire. Par exemple, si notre vocabulaire est

\[le, chat, sur, tapis\], le mot « chat » serait représenté par le vecteur \`\`.

Cette représentation, bien que simple, présente trois défauts majeurs qui la rendent impraticable pour des tâches sémantiques :

> **Très haute dimensionnalité :** La taille du vecteur est égale à la taille du vocabulaire, qui peut facilement atteindre des dizaines ou des centaines de milliers de mots. Cela mène au « fléau de la dimensionnalité », rendant les calculs inefficaces et les modèles difficiles à entraîner.
>
> **Sparsité extrême :** Chaque vecteur ne contient qu\'un seul \'1\' et des milliers de zéros, ce qui est une utilisation très inefficace de l\'espace de représentation.
>
> **Orthogonalité sémantique :** C\'est le défaut le plus critique. Dans un espace vectoriel, le produit scalaire entre deux vecteurs one-hot de mots différents est toujours nul. Cela signifie que tous les vecteurs de mots sont orthogonaux les uns aux autres. Géométriquement, le vecteur de « roi » est aussi distant du vecteur de « reine » que du vecteur de « chaussure ». Cette représentation est incapable de capturer la moindre notion de similarité ou de relation sémantique.

#### L\'Hypothèse Distributionnelle : le Fondement Théorique

La percée conceptuelle qui a permis de surmonter ces limites est **l\'hypothèse distributionnelle**. Formulée par le linguiste J.R. Firth en 1957, son adage le plus célèbre est : « *You shall know a word by the company it keeps* » (« On reconnaît un mot à la compagnie qu\'il fréquente »). L\'idée est que les mots qui apparaissent dans des contextes linguistiques similaires ont tendance à avoir des significations similaires. Par exemple, les mots « café » et « thé » apparaîtront souvent dans des phrases avec des mots comme « boire », « tasse », « sucre » ou « chaud ». En analysant statistiquement ces cooccurrences sur un vaste corpus, on peut en déduire que « café » et « thé » sont sémantiquement proches. C\'est ce principe qui est au cœur de tous les modèles de plongements lexicaux modernes. L\'objectif est d\'apprendre, pour chaque mot, un vecteur dense de faible dimension (typiquement entre 50 et 300 dimensions) tel que la position de ce vecteur dans l\'espace reflète son usage contextuel, et donc sa signification.

### 46.2.2 Word2Vec : Apprendre les Représentations par Prédiction

En 2013, une équipe de chercheurs de Google dirigée par Tomas Mikolov a présenté **Word2Vec**, une approche qui a popularisé et rendu extrêmement efficaces les plongements lexicaux. Plutôt que de simplement compter les cooccurrences, Word2Vec apprend les vecteurs de mots en entraînant un réseau de neurones peu profond (avec une seule couche cachée) à effectuer une tâche de prédiction auxiliaire sur un grand corpus de texte. Le modèle n\'est pas entraîné pour la tâche de prédiction elle-même, mais pour les poids de sa couche cachée : ces poids constituent les plongements lexicaux. Word2Vec se décline en deux architectures principales.

#### Architecture Continuous Bag-of-Words (CBOW)

Le modèle CBOW, ou « sac de mots continu », apprend à **prédire un mot cible à partir des mots de son contexte**. Étant donné une fenêtre de contexte (par exemple, les deux mots avant et les deux mots après), le modèle prend les vecteurs des mots de contexte, les combine (généralement en les moyennant), et tente de prédire le mot qui se trouve au centre.

Par exemple, dans la phrase « le chat gris dort sur le tapis », si le mot cible est « dort » et la fenêtre de contexte est de taille 2, les mots de contexte sont \[chat, gris, sur, le\]. Le modèle CBOW apprendra à prédire « dort » à partir de la représentation combinée de ces quatre mots. Cette approche est rapide à entraîner et donne de bons résultats, en particulier pour les mots fréquents.

#### Architecture Skip-gram

Le modèle Skip-gram fonctionne de manière inverse à CBOW : il apprend à **prédire les mots du contexte à partir d\'un mot central**. En reprenant l\'exemple précédent, le modèle prendrait le mot « dort » en entrée et serait entraîné à prédire les mots

\[chat, gris, sur, le\] en sortie. Pour chaque mot d\'entrée, le modèle génère donc plusieurs paires d\'entraînement (mot d\'entrée, mot de contexte).

Cette approche est computationnellement plus coûteuse que CBOW, car elle génère plus d\'exemples d\'entraînement. Cependant, elle est réputée pour mieux fonctionner sur des corpus plus petits et pour produire des représentations de meilleure qualité pour les mots rares.

#### Optimisations Computationnelles : le Défi du Softmax et l\'Échantillonnage Négatif

Un défi majeur pour ces deux architectures est le coût de la couche de sortie. Pour prédire un mot, le modèle doit calculer une probabilité pour chaque mot du vocabulaire via une fonction **softmax**. Si le vocabulaire contient 50 000 mots, cela signifie calculer 50 000 probabilités et normaliser sur l\'ensemble, pour chaque exemple d\'entraînement. Cette opération est extrêmement coûteuse et rendait l\'entraînement sur de grands corpus infaisable.

L\'innovation clé qui a rendu Word2Vec praticable est **l\'échantillonnage négatif** (*negative sampling*). Au lieu de transformer le problème en une classification multi-classes massive, l\'échantillonnage négatif le reformule en une série de problèmes de classification binaire. Pour chaque paire positive

(mot_cible, mot_contexte) issue du corpus, le modèle génère un certain nombre (k) d\'exemples négatifs en associant le mot_cible à des mots tirés aléatoirement du vocabulaire (qui ne sont pas dans son contexte). L\'objectif du modèle devient alors beaucoup plus simple : pour une paire donnée, prédire si elle est une vraie paire de contexte (étiquette 1) ou une paire négative générée aléatoirement (étiquette 0).

Cette astuce réduit considérablement la charge de calcul. À chaque étape, au lieu de mettre à jour des millions de poids dans la matrice de sortie, le modèle n\'a besoin de mettre à jour que les poids correspondant au mot de contexte positif et aux k mots de contexte négatifs (généralement k est petit, entre 5 et 20).

### 46.2.3 GloVe : Capturer les Statistiques Globales de Cooccurrence

Peu de temps après Word2Vec, des chercheurs de l\'Université de Stanford ont proposé une autre approche influente appelée **GloVe** (*Global Vectors for Word Representation*). GloVe cherche à combiner les avantages des deux grandes familles de méthodes pour l\'apprentissage de vecteurs : les méthodes basées sur le comptage (comme l\'Analyse Sémantique Latente, qui factorise de grandes matrices de cooccurrence) et les méthodes basées sur la prédiction locale (comme Word2Vec).

Le principe de GloVe est d\'entraîner un modèle directement sur les **statistiques de cooccurrence globales** du corpus. Il construit d\'abord une grande matrice X où chaque entrée Xij​ représente le nombre de fois que le mot j apparaît dans le contexte du mot i. Ensuite, le modèle apprend des vecteurs de mots wi​ et wj​ de telle sorte que leur produit scalaire soit directement lié au logarithme de leur probabilité de cooccurrence. La fonction de coût est une régression des moindres carrés pondérée pour donner moins d\'importance aux paires de mots très fréquentes (souvent des mots vides) ou très rares (potentiellement bruitées). En intégrant explicitement les statistiques globales dans son objectif d\'apprentissage, GloVe offre une alternative puissante à l\'approche locale de Word2Vec.

### 46.2.4 Comparaison et Propriétés des Plongements Statiques

Word2Vec et GloVe représentent deux philosophies différentes pour atteindre un objectif similaire. Le tableau ci-dessous met en évidence leurs distinctions clés.

**Tableau 46.2 : Comparaison des approches Word2Vec et GloVe**

  -------------------------------- ----------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------
  Critère                          Word2Vec                                                                                              GloVe (Global Vectors)

  **Principe fondamental**         Apprentissage prédictif basé sur le contexte local (fenêtre glissante).                               Apprentissage basé sur le comptage, en factorisant la matrice de cooccurrence globale.

  **Type de données utilisées**    Paires (mot, contexte) streamées à partir du corpus.                                                  Matrice de cooccurrence mot-mot pré-calculée sur l\'ensemble du corpus.

  **Nature de l\'apprentissage**   En ligne (*online*), le modèle voit les exemples un par un et met à jour ses poids.                   Par lots (*batch*), le modèle est entraîné sur la matrice globale.

  **Performance sur mots rares**   Le modèle Skip-gram est particulièrement performant pour capturer la sémantique des mots rares.       Peut être moins performant car les comptes rares sont moins fiables statistiquement.

  **Efficacité**                   Très efficace sur des corpus massifs car il ne nécessite pas de stocker la matrice de cooccurrence.   Peut être plus rapide sur des corpus de taille moyenne à grande, mais nécessite une mémoire importante pour la matrice.
  -------------------------------- ----------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------

Au-delà de leurs différences, la propriété la plus remarquable et la plus surprenante de ces espaces vectoriels est l\'émergence de **structures linéaires qui encodent des analogies**. L\'exemple le plus célèbre, qui a démontré la puissance de ces représentations, est la relation vectorielle :

vect(« roi »)−vect(« homme »)+vect(« femme »)≈vect(« reine »)

Cette équation montre que des concepts abstraits comme le genre ou la relation capitale-pays (vect(\"France\") - vect(\"Paris\") ≈ vect(\"Allemagne\") - vect(\"Berlin\")) sont capturés comme de simples translations dans l\'espace vectoriel. La sémantique, autrefois un concept purement linguistique, devenait ainsi un objet géométrique, manipulable par des opérations algébriques de base.

### 46.2.5 Vers la Contextualisation : Les Limites des Plongements Statiques

Malgré leur puissance, les modèles comme Word2Vec et GloVe partagent une limitation fondamentale : ils sont **statiques**. Chaque mot du vocabulaire se voit assigner un unique vecteur, qui est utilisé quel que soit le contexte dans lequel le mot apparaît.

Cette approche ignore un aspect fondamental du langage : la **polysémie**. Un mot peut avoir plusieurs significations très différentes. Par exemple, le mot « banque » aura le même vecteur dans les phrases « Je dépose de l\'argent à la banque » et « Nous nous sommes assis sur la banque de sable ». Cette incapacité à désambiguïser le sens en fonction du contexte est une contrainte majeure.

La première avancée significative pour surmonter cette limite a été **ELMo** (*Embeddings from Language Models*), introduit en 2018. ELMo a été le pionnier des

**plongements contextuels**. L\'idée n\'est plus de stocker un dictionnaire de vecteurs fixes, mais de générer un vecteur pour un mot à la volée, en fonction de la phrase entière dans laquelle il se trouve.

Pour ce faire, ELMo utilise un réseau de neurones récurrents bidirectionnel (un bi-LSTM) profond, pré-entraîné sur une tâche de modélisation de langage à grande échelle. Pour obtenir la représentation d\'un mot dans une phrase donnée, la phrase entière est passée à travers ce bi-LSTM. Le vecteur final du mot est alors une combinaison pondérée des états cachés du bi-LSTM à toutes ses couches pour ce mot. Les couches inférieures du modèle tendent à capturer des informations syntaxiques (comme la partie du discours), tandis que les couches supérieures capturent des informations sémantiques plus complexes et dépendantes du contexte.

Avec ELMo, le vecteur du mot « banque » sera donc différent dans les deux exemples ci-dessus, résolvant ainsi le problème de la polysémie. Cette transition d\'une représentation statique (un mot = un vecteur) à une représentation dynamique (un mot dans un contexte = un vecteur) a marqué un tournant décisif, pavant la voie à l\'ère des modèles contextuels profonds comme BERT et GPT.

### 46.2.6 Synthèse des Idées Clés et Implications de la Section

Le passage des modèles de comptage aux plongements lexicaux constitue bien plus qu\'une simple amélioration technique ; c\'est un changement de paradigme conceptuel que l\'on peut qualifier de **géométrisation de la sémantique**. Les mots cessent d\'être des identifiants discrets et isolés pour devenir des points dans un espace vectoriel continu. La structure de cet espace, apprise à partir de vastes corpus, est telle que la distance géométrique entre les vecteurs reflète leur proximité sémantique. Cette transformation a une conséquence inattendue et profonde : des relations sémantiques et syntaxiques complexes, comme les analogies, émergent sous forme d\'opérations algébriques simples. Le langage, un système symbolique et abstrait, devient un objet mathématique sur lequel il est possible de raisonner géométriquement. C\'est cette propriété fondamentale qui a permis aux réseaux de neurones, qui excellent dans l\'apprentissage de transformations dans des espaces vectoriels, de réaliser des progrès spectaculaires dans de nombreuses tâches de TALN.

Cependant, cette révolution portait en elle sa propre limite. Les modèles comme Word2Vec et GloVe, en assignant un unique vecteur à chaque mot, reposent sur l\'hypothèse implicite qu\'un mot possède un sens unique et statique. Cette simplification est contredite par la nature même du langage, riche en polysémie et en nuances contextuelles. L\'introduction d\'ELMo marque la prise de conscience systématique de ce problème. En proposant que la représentation d\'un mot ne soit plus une entrée de dictionnaire fixe mais une fonction de la phrase entière, ELMo établit un nouveau principe : le sens n\'est pas une propriété intrinsèque d\'un mot, mais une propriété émergente de son interaction avec son contexte. Ce passage d\'un vecteur statique à une représentation dynamique et contextualisée est une étape conceptuelle aussi importante que le passage initial du comptage aux vecteurs. Il sert de pont intellectuel entre l\'ère des plongements statiques et l\'ère des Transformers, où le calcul de ces interactions contextuelles deviendra le cœur même de l\'architecture.

## 46.3 Applications Fondamentales du TALN

Avec la capacité de représenter les mots et leurs relations sémantiques sous forme de vecteurs, le champ du TALN a pu s\'attaquer à des problèmes d\'une complexité bien plus grande. Cette section se penche sur trois applications fondamentales qui ont non seulement été transformées par ces nouvelles représentations, mais qui ont aussi, par leurs propres défis, poussé à l\'innovation architecturale. L\'analyse de sentiments, la traduction automatique et les systèmes de dialogue sont devenus des bancs d\'essai cruciaux, révélant les limites des modèles existants et catalysant le développement de nouvelles approches, notamment le mécanisme d\'attention.

### 46.3.1 Analyse de Sentiments : Comprendre l\'Opinion

L\'analyse de sentiments, également connue sous le nom d\'exploration d\'opinions (*opinion mining*), est la tâche qui consiste à identifier et à extraire des informations subjectives à partir de sources textuelles. Son objectif le plus courant est de déterminer la **polarité émotionnelle** d\'un texte, c\'est-à-dire de le classer comme positif, négatif ou neutre. Cette application est d\'une importance capitale dans le monde des affaires, où elle est utilisée pour analyser les avis sur les produits, surveiller la réputation d\'une marque sur les réseaux sociaux, évaluer le service client et comprendre les tendances du marché.

#### Formalisation et Approches

Fondamentalement, l\'analyse de sentiments est un problème de **classification de texte**. L\'entrée du modèle est un morceau de texte (un tweet, une critique de restaurant, un commentaire de client) et la sortie est une étiquette de classe discrète (positif, négatif, neutre). Les approches pour résoudre ce problème ont évolué parallèlement aux avancées du TALN :

> **Approches basées sur des lexiques :** Les premières méthodes reposaient sur des dictionnaires de mots (lexiques) où chaque mot est associé à un score de sentiment prédéfini (par exemple, « excellent » = +3, « mauvais » = -2). Pour analyser un texte, on additionne les scores des mots qu\'il contient. Ces méthodes sont simples à mettre en œuvre mais manquent de robustesse. Elles peinent à gérer la négation (« ce film n\'est *pas* bon »), l\'ironie, le sarcasme et les mots dont la polarité dépend du contexte (le mot « imprévisible » peut être positif pour un film à suspense mais négatif pour une voiture).
>
> **Approches d\'apprentissage supervisé classique :** Avec l\'avènement de l\'apprentissage automatique, l\'analyse de sentiments a été abordée comme une tâche de classification standard. On utilise un ensemble de données étiquetées (textes annotés comme positifs ou négatifs) pour entraîner un classifieur comme une machine à vecteurs de support (SVM) ou une régression logistique. Les caractéristiques (*features*) d\'entrée étaient initialement basées sur des sacs de mots ou des n-grammes. L\'introduction des plongements lexicaux a permis une amélioration significative : en moyennant les vecteurs des mots d\'un texte, on obtenait une représentation vectorielle unique pour ce texte, capturant sa sémantique globale de manière bien plus efficace qu\'un simple comptage de mots.
>
> **Approches neuronales profondes :** Les réseaux de neurones profonds ont permis de franchir une nouvelle étape. Des architectures comme les réseaux de neurones convolutifs (CNNs), initialement conçus pour la vision par ordinateur, se sont révélés efficaces pour détecter des n-grammes sémantiques pertinents dans un texte. Les réseaux de neurones récurrents (RNNs) et leurs variantes comme les LSTMs, en traitant le texte de manière séquentielle, sont capables de capturer l\'ordre des mots et les dépendances à plus longue distance, ce qui est crucial pour comprendre des structures complexes comme la négation. Ces modèles prennent en entrée la séquence complète des plongements de mots et apprennent à extraire automatiquement les caractéristiques les plus discriminantes pour la classification de sentiments.

### 46.3.2 Traduction Automatique : D\'une Langue à l\'Autre

La traduction automatique (TA) est l\'une des tâches les plus anciennes et les plus difficiles du TALN. Son évolution illustre parfaitement la transition des modèles statistiques complexes vers des architectures neuronales de bout en bout (*end-to-end*).

#### L\'Ère Statistique (SMT - Statistical Machine Translation)

Pendant près de deux décennies, la traduction automatique statistique a été le paradigme dominant. L\'approche SMT est fondée sur l\'apprentissage de modèles de probabilité à partir de vastes corpus parallèles, c\'est-à-dire des collections de textes alignés phrase par phrase dans deux langues. En utilisant le théorème de Bayes, le problème de la traduction de la phrase source

S en la phrase cible C est modélisé comme la recherche de la phrase C qui maximise la probabilité P(C∣S). Cette probabilité est décomposée en deux composantes :

> Un **modèle de traduction**, P(S∣C), qui estime la probabilité que la phrase source S soit la traduction de la phrase cible C. Ce modèle est appris à partir des alignements de mots et de segments de phrases dans le corpus parallèle.
>
> Un **modèle de langage**, P(C), qui estime la probabilité que la phrase C soit une phrase bien formée dans la langue cible. Il s\'agit typiquement d\'un modèle n-gramme entraîné sur un grand corpus monolingue.

Les systèmes SMT étaient des constructions complexes, composées de nombreux sous-modèles entraînés indépendamment, et nécessitaient une ingénierie de caractéristiques considérable. Bien qu\'ils aient représenté une avancée majeure par rapport aux systèmes à base de règles, ils peinaient à gérer les différences structurelles profondes entre les langues et les dépendances à longue portée.

#### La Révolution Neuronale (NMT - Neural Machine Translation)

Au milieu des années 2010, la traduction automatique neuronale a émergé et a rapidement supplanté la SMT, offrant des traductions plus fluides et plus précises. La NMT aborde la traduction comme un problème unique d\'apprentissage de bout en bout à l\'aide d\'un seul grand réseau de neurones.

> **L\'Architecture Encodeur-Décodeur :** Le cœur de la NMT est l\'architecture **encodeur-décodeur** (parfois appelée *Seq2Seq*).

**L\'Encodeur :** Un réseau de neurones (typiquement un RNN ou un LSTM) lit la phrase source mot par mot. À chaque étape, il met à jour son état interne (ou *état caché*). Après avoir lu le dernier mot, l\'état caché final de l\'encodeur est considéré comme un résumé numérique de toute la phrase source. Ce vecteur, souvent appelé **vecteur de contexte** ou **vecteur de pensée**, est une représentation de la phrase source dans un espace sémantique de taille fixe.

**Le Décodeur :** Un second réseau de neurones (également un RNN/LSTM) est initialisé avec le vecteur de contexte fourni par l\'encodeur. Son rôle est de générer la phrase cible mot par mot. À chaque étape, il produit un mot, et ce mot est ensuite utilisé comme entrée pour l\'étape suivante, jusqu\'à ce qu\'un token de fin de phrase soit généré.

> **Le Goulot d\'Étranglement de l\'Information et l\'Innovation de l\'Attention :** Cette architecture simple et élégante souffrait d\'un défaut majeur : toute l\'information de la phrase source, quelle que soit sa longueur ou sa complexité, devait être compressée dans ce seul vecteur de contexte de taille fixe. C\'était un **goulot d\'étranglement informationnel**. Pour les phrases longues, le modèle avait du mal à conserver les informations du début de la phrase.

La solution à ce problème a été l\'une des innovations les plus importantes de l\'histoire du TALN moderne : le **mécanisme d\'attention**. L\'intuition est la suivante : au lieu de forcer l\'encodeur à tout résumer en un seul vecteur, on lui permet de produire une séquence d\'états cachés, un pour chaque mot de la phrase source. Ensuite, à chaque étape de la génération, le décodeur a la capacité de « regarder en arrière » et de porter son attention sur les différentes parties de la phrase source.

Concrètement, avant de générer chaque mot cible, le décodeur calcule un **score d\'attention** entre son état caché actuel et chacun des états cachés de l\'encodeur. Ces scores sont passés à travers une fonction softmax pour créer une distribution de probabilité (les poids d\'attention) sur les mots sources. Ces poids sont ensuite utilisés pour calculer une somme pondérée des états cachés de l\'encodeur. Le résultat est un **vecteur de contexte dynamique** qui change à chaque étape de la traduction, permettant au décodeur de se concentrer sur les mots sources les plus pertinents pour prédire le prochain mot cible. Ce mécanisme a non seulement résolu le problème des longues dépendances et amélioré considérablement la qualité de la traduction, mais il a aussi jeté les bases de l\'architecture Transformer, qui allait suivre.

### 46.3.3 Systèmes de Dialogue : L\'Interaction Homme-Machine

Les systèmes de dialogue, ou agents conversationnels, visent à permettre une interaction naturelle entre les humains et les machines. On distingue généralement deux grandes catégories de systèmes.

#### Agents Conversationnels Orientés Tâche (Task-Oriented)

Ces systèmes sont conçus pour aider un utilisateur à atteindre un objectif spécifique dans un domaine bien défini, comme réserver un billet de train, vérifier la météo ou commander de la nourriture. Leur architecture est souvent modulaire et comprend typiquement quatre composants  :

> **Compréhension du Langage Naturel (NLU) :** Ce module analyse l\'énoncé de l\'utilisateur pour en extraire son *intention* (ce que l\'utilisateur veut faire, ex: reserver_vol) et les *entités* ou *slots* (les paramètres de l\'intention, ex: destination=Paris, date=demain).
>
> **Gestionnaire d\'État du Dialogue (DST - Dialogue State Tracker) :** Ce composant maintient une représentation de l\'état actuel de la conversation. Il accumule les informations fournies par l\'utilisateur au fil des tours de parole pour savoir ce qui a déjà été dit et ce qui manque pour accomplir la tâche.
>
> **Politique de Dialogue (DP - Dialogue Policy) :** En fonction de l\'état du dialogue, ce module décide de la prochaine action du système (par exemple, poser une question pour obtenir une information manquante, interroger une base de données, ou confirmer une réservation).
>
> **Génération de Langage Naturel (NLG) :** Une fois l\'action décidée, ce module la transforme en une réponse textuelle compréhensible pour l\'utilisateur.

#### Agents Conversationnels Ouverts (Open-Domain)

Contrairement aux systèmes orientés tâche, les agents à domaine ouvert (souvent appelés *chatbots*) ne sont pas conçus pour accomplir une tâche précise, mais pour mener une conversation engageante et cohérente sur une multitude de sujets. Leur objectif est de simuler une conversation humaine de manière plausible. Les défis sont immenses : ils doivent posséder une vaste connaissance du monde, maintenir la cohérence sur de longs échanges, et faire preuve de personnalité. Le développement de ces systèmes a été l\'un des principaux moteurs de la recherche sur les grands modèles de langage, qui, par leur nature générative et leur vaste connaissance pré-entraînée, sont particulièrement bien adaptés à cette tâche.

### 46.3.4 Synthèse des Idées Clés et Implications de la Section

L\'étude de ces applications révèle un principe fondamental du progrès en intelligence artificielle : les applications ne sont pas de simples débouchés pour la technologie, mais des moteurs d\'innovation architecturale. La traduction automatique neuronale en est l\'exemple parfait. Le modèle encodeur-décodeur basé sur les RNNs était une avancée conceptuelle majeure, mais c\'est son application pratique à des phrases de plus en plus longues qui a mis en évidence sa faiblesse structurelle : le goulot d\'étranglement du vecteur de contexte.

Le mécanisme d\'attention n\'a pas été conçu dans un vide théorique. Il a été développé spécifiquement pour résoudre ce problème pratique et pressant en NMT. En permettant au décodeur d\'accéder dynamiquement à l\'ensemble de la représentation de la source, l\'attention a non seulement fait exploser les performances de la traduction, mais a aussi introduit une idée beaucoup plus générale et puissante : celle d\'une interaction pondérée entre tous les éléments d\'une séquence. Cette idée, née des contraintes d\'une application, s\'est avérée si fondamentale qu\'elle est devenue la pierre angulaire de l\'architecture qui allait redéfinir non seulement le TALN, mais une grande partie de l\'apprentissage profond : le Transformer. Ce cycle vertueux, où un problème concret catalyse une solution abstraite et généralisable, est une illustration parfaite du dialogue constant entre la théorie et l\'ingénierie qui caractérise l\'avancement de la science.

## 46.4 Grands Modèles de Langage (LLMs) et Ingénierie de Prompt

Nous arrivons à la dernière étape de notre parcours, qui nous mène à l\'état de l\'art actuel du Traitement du Langage Naturel. Le mécanisme d\'attention, initialement un ajout astucieux à l\'architecture encodeur-décodeur pour la traduction, devient ici le composant central et unique. En se débarrassant complètement de la récurrence, l\'architecture *Transformer* a ouvert la voie à une mise à l\'échelle des modèles d\'une ampleur jusqu\'alors inimaginable. Cette nouvelle échelle a donné naissance aux Grands Modèles de Langage (LLMs), des systèmes qui non seulement excellent dans les tâches traditionnelles du TALN, mais qui ont également fait émerger de nouvelles capacités et un paradigme d\'interaction entièrement nouveau : l\'ingénierie de prompt.

### 46.4.1 L\'Architecture Transformer : « Attention is All You Need »

En 2017, un article de recherche de Google intitulé « Attention Is All You Need » a introduit une architecture qui allait révolutionner le domaine. Le

**Transformer** a proposé de se passer entièrement des réseaux de neurones récurrents (RNNs) et convolutifs (CNNs), qui étaient jusqu\'alors les piliers des modèles de traitement de séquences, pour ne reposer que sur des mécanismes d\'attention. L\'avantage principal de cette approche est l\'élimination du traitement séquentiel inhérent aux RNNs, qui empêchait une parallélisation efficace. Avec le Transformer, tous les éléments d\'une séquence peuvent être traités simultanément, ce qui a permis d\'entraîner des modèles beaucoup plus grands sur des quantités de données beaucoup plus importantes.

Bien que cette architecture soit détaillée dans le Chapitre 44, rappelons ici ses composants essentiels :

> **Auto-attention (Self-Attention) :** C\'est le cœur du Transformer. Ce mécanisme permet à chaque token d\'une séquence d\'interagir directement avec tous les autres tokens de la même séquence. Pour chaque token, le modèle calcule trois vecteurs : une **Requête** (*Query* - Q), une **Clé** (*Key* - K) et une **Valeur** (*Value* - V). La compatibilité entre la requête d\'un token et la clé de chaque autre token est calculée (généralement par un produit scalaire), produisant des scores d\'attention. Ces scores sont normalisés via une fonction softmax pour obtenir des poids, qui sont ensuite utilisés pour calculer une somme pondérée des vecteurs Valeur. Le résultat est une nouvelle représentation pour chaque token qui est enrichie par le contexte de la séquence entière, permettant de modéliser des dépendances à longue distance de manière très efficace.
>
> **Attention Multi-têtes (Multi-Head Attention) :** Plutôt que d\'effectuer une seule opération d\'attention, le Transformer l\'exécute en parallèle dans plusieurs « têtes ». Chaque tête d\'attention apprend à se concentrer sur différents types de relations entre les mots (par exemple, une tête pourrait se spécialiser dans les relations syntaxiques, une autre dans les relations sémantiques). Les sorties de toutes les têtes sont ensuite concaténées et transformées linéairement, produisant une représentation finale beaucoup plus riche et nuancée.
>
> **Structure Encodeur-Décodeur :** Le modèle Transformer original conserve une structure encodeur-décodeur. L\'encodeur traite la séquence d\'entrée (par exemple, une phrase en français) et produit une représentation contextuelle. Le décodeur prend cette représentation et génère la séquence de sortie (la phrase en anglais), en utilisant également l\'auto-attention sur les tokens qu\'il a déjà générés.
>
> **Encodage Positionnel (Positional Encoding) :** Puisque l\'auto-attention traite tous les tokens simultanément, l\'architecture n\'a aucune information inhérente sur l\'ordre des mots dans la séquence. Pour remédier à cela, des **encodages positionnels** sont ajoutés aux plongements lexicaux à l\'entrée du modèle. Ce sont des vecteurs de même dimension que les plongements, généralement calculés à l\'aide de fonctions sinusoïdales de différentes fréquences, qui donnent à chaque position dans la séquence une signature unique et permettent au modèle d\'apprendre les relations d\'ordre.

### 46.4.2 Le Paradigme Dominant : Pré-entraînement et Ajustement Fin

Le succès des LLMs ne repose pas seulement sur l\'architecture Transformer, mais aussi sur un paradigme d\'entraînement en deux étapes qui s\'est avéré extraordinairement efficace.

> **Phase de Pré-entraînement (Pre-training) :** La première étape consiste à entraîner un modèle Transformer de très grande taille sur une tâche **auto-supervisée** en utilisant un corpus de texte massif et non étiqueté. Ce corpus peut inclure des téraoctets de données provenant d\'Internet, de livres, d\'articles, etc.. Les tâches auto-supervisées les plus courantes sont :

**Modélisation du langage (Language Modeling) :** Prédire le prochain mot d\'une séquence.

**Modélisation du langage masqué (Masked Language Modeling) :** Prédire des mots qui ont été masqués (remplacés par un token spécial \`\`) dans une phrase.

> L\'objectif de cette phase n\'est pas de spécialiser le modèle pour une tâche particulière, mais de lui faire acquérir une compréhension profonde et générale du langage : sa syntaxe, sa sémantique, ses relations logiques, et même une quantité considérable de connaissances factuelles sur le monde, encodées implicitement dans ses poids. Le résultat de cette étape est un**modèle de fondation** ou **modèle de base**.
>
> **Phase d\'Ajustement Fin (Fine-tuning) :** Une fois le modèle pré-entraîné, il peut être adapté à des tâches spécifiques. Cette seconde étape, appelée ajustement fin, consiste à continuer l\'entraînement du modèle, mais cette fois-ci sur un jeu de données beaucoup plus petit, spécifique à la tâche et étiqueté par des humains (par exemple, des critiques de films avec des étiquettes de sentiment). Comme le modèle a déjà une compréhension riche du langage, il lui faut très peu d\'exemples pour s\'adapter à la nouvelle tâche. Ce paradigme est extrêmement puissant car il mutualise le coût computationnel énorme du pré-entraînement : un seul modèle de base peut être ajusté pour des centaines de tâches différentes avec un effort relativement faible.

### 46.4.3 Architectures Fondamentales des LLMs

Bien que basés sur le Transformer, les LLMs les plus influents ont adopté des variantes architecturales spécialisées, principalement en utilisant soit la partie encodeur, soit la partie décodeur du modèle original.

> **BERT (Bidirectional Encoder Representations from Transformers) :** Développé par Google, BERT est un modèle qui utilise exclusivement la pile d\'**encodeurs** du Transformer.

**Architecture et Pré-entraînement :** BERT est pré-entraîné sur l\'objectif de **Masked Language Modeling (MLM)**. On lui présente une phrase où certains mots ont été masqués, et sa tâche est de prédire ces mots masqués. Comme l\'encodeur traite toute la phrase en une seule fois, il peut utiliser le contexte à la fois à gauche et à droite du mot masqué pour faire sa prédiction. C\'est pourquoi BERT est qualifié de **bidirectionnel**.

**Cas d\'usage :** En raison de sa compréhension contextuelle profonde et bidirectionnelle, BERT excelle dans les tâches de **compréhension du langage naturel (NLU)**. Il est idéal pour la classification de texte, la reconnaissance d\'entités nommées (NER), l\'analyse de sentiments, et la réponse à des questions où il faut extraire une réponse d\'un passage. BERT est un modèle de\
*représentation* : sa sortie principale est un plongement de haute qualité pour chaque token d\'entrée.

> **GPT (Generative Pre-trained Transformer) :** Développé par OpenAI, GPT est un modèle qui utilise exclusivement la pile de **décodeurs** du Transformer.

**Architecture et Pré-entraînement :** GPT est pré-entraîné sur l\'objectif de **modélisation de langage causale (Causal Language Modeling)**, qui est la tâche classique de prédire le prochain mot d\'une séquence. Le mécanisme d\'attention dans le décodeur est masqué pour empêcher le modèle de voir les mots futurs. Il est donc **unidirectionnel** ou **autorégressif** : il ne peut utiliser que le contexte de gauche pour faire ses prédictions.

**Cas d\'usage :** Cette nature autorégressive rend GPT intrinsèquement apte à la **génération de langage naturel (NLG)**. Il excelle dans des tâches comme la rédaction de textes, le résumé, la traduction, la génération de code et la création d\'agents conversationnels fluides et cohérents. GPT est un modèle\
*génératif* : sa fonction principale est de produire de nouvelles séquences de tokens.

Le tableau suivant résume les différences fondamentales entre ces deux familles de modèles qui ont défini le paysage des LLMs.

**Tableau 46.3 : Comparaison architecturale et fonctionnelle de BERT et GPT**

  ------------------------------------- ------------------------------------------------------------------------------ ----------------------------------------------------------------
  Caractéristique                       BERT (Bidirectional Encoder Representations from Transformers)                 GPT (Generative Pre-trained Transformer)

  **Bloc de Transformer utilisé**       Encodeur seulement                                                             Décodeur seulement

  **Directionnalité de l\'attention**   Bidirectionnelle (contexte gauche et droit)                                    Unidirectionnelle / Autorégressive (contexte gauche seulement)

  **Objectif de pré-entraînement**      Modélisation de Langage Masqué (MLM)                                           Modélisation de Langage Causale (CLM)

  **Tâches de prédilection**            Compréhension du Langage (NLU) : classification, NER, analyse de sentiments.   Génération de Langage (NLG) : rédaction, résumé, dialogue.

  **Type de modèle**                    Modèle de représentation (produit des plongements riches).                     Modèle génératif (produit de nouvelles séquences de texte).
  ------------------------------------- ------------------------------------------------------------------------------ ----------------------------------------------------------------

### 46.4.4 L\'Ingénierie de Prompt : Dialoguer avec les LLMs

Une des conséquences les plus surprenantes de la mise à l\'échelle des LLMs est l\'émergence d\'une capacité appelée **apprentissage en contexte** (*in-context learning*). Les modèles deviennent si bons à reconnaître des motifs qu\'ils peuvent apprendre à effectuer une nouvelle tâche simplement à partir de quelques exemples fournis dans l\'instruction d\'entrée (le *prompt*), sans aucune mise à jour de leurs poids. Cette découverte a donné naissance à une nouvelle discipline : l\'

**ingénierie de prompt**.

> **Apprentissage par l\'Exemple en Contexte :**

**Requêtes *Zero-shot* :** On demande au modèle d\'effectuer une tâche directement, sans lui fournir d\'exemple. Par exemple : « Traduis la phrase suivante en anglais : Le chat est sur le tapis. ».

**Requêtes *One-shot* :** On fournit au modèle un unique exemple pour lui montrer le format de sortie attendu. Par exemple : « Français: pomme -\> Anglais: apple. Français: maison -\> ».

**Requêtes *Few-shot* :** On fournit plusieurs exemples (généralement de 2 à 5) pour guider le modèle plus précisément. Cette approche est souvent la plus efficace pour obtenir des résultats de haute qualité sur des tâches complexes.

> **Techniques de Raisonnement Avancées : la Chaîne de Pensée (Chain-of-Thought)**\
> Pour les tâches qui nécessitent un raisonnement en plusieurs étapes (comme résoudre un problème mathématique ou une énigme logique), demander directement la réponse finale au modèle mène souvent à l\'échec. La technique de la **chaîne de pensée** (*Chain-of-Thought* - CoT) consiste à inciter le modèle à décomposer son raisonnement et à l\'expliciter étape par étape avant de donner la réponse finale.\
> Cette approche améliore de manière spectaculaire les capacités de raisonnement des LLMs. En forçant le modèle à générer les étapes intermédiaires, on lui alloue plus de calculs pour le problème et on contraint sa sortie à suivre un chemin logique. De manière remarquable, il suffit souvent d\'ajouter la simple phrase « Réfléchissons étape par étape » (*Let\'s think step-by-step*) à la fin d\'un prompt pour déclencher ce comportement de raisonnement (approche *zero-shot CoT*).

### 46.4.5 Synthèse des Idées Clés et Implications de la Section

L\'avènement des LLMs marque le **triomphe de l\'échelle et de la généralisation**. L\'architecture Transformer, en brisant le goulot d\'étranglement séquentiel des RNNs grâce à la parallélisation de l\'attention, a rendu possible l\'entraînement de modèles sur des volumes de données et avec un nombre de paramètres qui étaient auparavant du domaine de la science-fiction. À une certaine échelle, un changement qualitatif se produit : les modèles ne se contentent plus d\'apprendre des statistiques de surface, ils développent des capacités de généralisation qui leur permettent d\'effectuer des tâches pour lesquelles ils n\'ont pas été explicitement entraînés, simplement en suivant des instructions en langage naturel. Le paradigme pré-entraînement/ajustement fin est la concrétisation de ce principe : un investissement massif est réalisé une fois pour créer un modèle de fondation universel, qui est ensuite spécialisé à faible coût pour une myriade d\'applications. Le TALN est ainsi passé d\'un champ où l\'on construisait des milliers de modèles experts spécialisés à un champ dominé par quelques modèles généralistes massifs.

Cette transformation a également fait émerger **l\'interaction comme une nouvelle forme de programmation**. Historiquement, l\'exécution d\'une tâche par un ordinateur nécessitait un code explicite. Avec l\'apprentissage supervisé, on programmait en fournissant des milliers d\'exemples étiquetés. Avec les LLMs et l\'apprentissage en contexte, la frontière s\'estompe davantage. On « programme » désormais le modèle en dialoguant avec lui en langage naturel, en lui montrant quelques exemples dans un prompt. L\'ingénierie de prompt devient une compétence essentielle, une nouvelle interface homme-machine où le langage humain agit comme un langage de programmation de très haut niveau. Des techniques comme la chaîne de pensée peuvent être vues comme de nouvelles « structures de contrôle » dans ce paradigme, guidant le flux de raisonnement du modèle. Cela ouvre la porte à une démocratisation de la création d\'applications d\'IA, mais soulève également de nouveaux défis en matière de fiabilité, de sécurité et de contrôle du comportement de ces systèmes complexes. Le développeur de demain pourrait bien être, en partie, un « psychologue de LLMs », cherchant les incitations les plus efficaces pour obtenir le comportement désiré.

# Chapitre 47 : Vision par Ordinateur

## 47.1 Traitement d\'images : Des pixels aux contours

La vision par ordinateur, en tant que discipline scientifique, ambitionne de doter les machines d\'une capacité d\'interprétation et de compréhension du monde visuel analogue, voire supérieure, à celle de l\'humain. À la base de cette quête se trouve une entité fondamentale : l\'image numérique. Avant de pouvoir reconnaître des objets, suivre des mouvements ou reconstruire des scènes en trois dimensions, il est impératif de maîtriser les opérations les plus élémentaires qui permettent de manipuler, de transformer et d\'analyser cette représentation discrète de notre réalité. Cette section inaugurale pose les fondations mathématiques et algorithmiques sur lesquelles repose l\'ensemble du champ. Nous débuterons par une définition formelle de l\'image numérique, la présentant comme une structure de données --- une matrice ou un tenseur --- sur laquelle des opérations peuvent être appliquées. L\'opération de convolution 2D sera ensuite introduite, non pas comme une simple technique, mais comme le concept unificateur qui relie le traitement d\'images \"classique\" aux architectures d\'apprentissage profond qui dominent aujourd\'hui le domaine. Nous explorerons comment cette unique opération, par le biais de noyaux spécifiquement conçus, permet de réaliser des tâches de filtrage essentielles, telles que le lissage pour la réduction du bruit ou le rehaussement des détails. Enfin, nous culminerons avec l\'étude de l\'algorithme de détection de contours de Canny, un exemple paradigmatique d\'un pipeline multi-étapes intelligent, conçu pour extraire une information sémantique de haut niveau --- les frontières des objets --- à partir des simples valeurs d\'intensité des pixels. Ce parcours, du pixel au contour, illustre une progression fondamentale en vision par ordinateur : la transformation de données brutes en représentations structurées et signifiantes.

### 47.1.1 Fondements de l\'image numérique

Le traitement d\'image (en anglais, *image processing*) consiste à appliquer des transformations mathématiques sur des images numériques dans le but d\'améliorer leur qualité ou d\'en extraire de l\'information. Pour ce faire, il est essentiel de comprendre la nature même de l\'objet que nous manipulons.

**Définition formelle**

Une image numérique est une représentation d\'une image bidimensionnelle sous une forme finie et discrète, accessible à un ordinateur. Formellement, elle peut être définie comme une fonction I(x,y) où (x,y) sont des coordonnées spatiales discrètes, et la valeur de la fonction I à ces coordonnées, I(x,y), est une mesure de l\'intensité ou de la couleur du point correspondant. Ces éléments fondamentaux de l\'image, situés à chaque coordonnée

(x,y), sont appelés **pixels**, une contraction de l\'anglais *picture element*.

**Représentation matricielle et types d\'images**

Dans la pratique, une image numérique est stockée et manipulée comme une matrice (ou un tableau à deux dimensions) où chaque élément correspond à un pixel. La nature des valeurs contenues dans cette matrice définit le type de l\'image :

> **Image binaire :** C\'est la forme la plus simple. Chaque pixel ne peut prendre que deux valeurs, typiquement 0 pour le noir et 1 pour le blanc. Elle est représentée par une matrice de 0 et de 1. Ce type d\'image est souvent le résultat d\'un processus de seuillage.
>
> **Image en niveaux de gris (*grayscale*) :** Chaque pixel représente une intensité lumineuse, sans information de couleur. Les valeurs des pixels sont généralement des entiers quantifiés sur un certain nombre de bits. Le standard le plus courant est l\'encodage sur 8 bits, ce qui permet 256 niveaux d\'intensité distincts, allant de 0 (noir absolu) à 255 (blanc absolu). L\'image est donc une matrice unique de dimensions\
> H×W, où H est la hauteur et W la largeur de l\'image en pixels.
>
> **Image en couleur :** Pour représenter la couleur, plusieurs canaux d\'intensité sont combinés. Le modèle le plus répandu est le modèle **RVB (Rouge, Vert, Bleu)**, ou RGB en anglais. Ce modèle est additif, signifiant que les couleurs sont créées en additionnant différentes intensités de ces trois couleurs primaires. Une image couleur RVB est donc représentée non pas par une seule matrice, mais par trois matrices de dimensions\
> H×W, une pour chaque canal de couleur. On peut ainsi la conceptualiser comme un tenseur de dimensions H×W×3. Chaque pixel\
> (x,y) est défini par un triplet de valeurs (R,V,B), par exemple (255, 0, 0) pour un rouge pur ou (255, 255, 255) pour le blanc. D\'autres espaces colorimétriques existent, comme le modèle\
> **YUV**, qui sépare la luminance (Y, l\'intensité lumineuse) des informations de chrominance (U et V, la couleur). Ce découplage est particulièrement utile en compression vidéo et dans certaines applications de traitement d\'images.

**L\'histogramme d\'image**

Un outil d\'analyse fondamental pour une image en niveaux de gris est son **histogramme**. L\'histogramme est une fonction discrète h(i) qui donne le nombre de pixels ni​ ayant une intensité spécifique i dans l\'image. Il s\'agit donc d\'un graphique représentant la distribution des niveaux de gris.

L\'histogramme fournit une information globale et statistique sur l\'image : une image sombre aura un histogramme concentré vers les faibles intensités, tandis qu\'une image claire aura un histogramme concentré vers les hautes intensités. Une image à faible contraste aura un histogramme resserré sur une petite plage de valeurs. Des techniques comme l\'**égalisation d\'histogramme** visent à étaler cet histogramme sur toute la plage dynamique pour augmenter le contraste global de l\'image.

Cependant, l\'histogramme a une limitation majeure : il perd toute information spatiale. Deux images structurellement très différentes peuvent avoir exactement le même histogramme. Il nous renseigne sur la composition tonale de l\'image, mais pas sur l\'agencement des pixels qui la composent.

### 47.1.2 L\'opération de convolution 2D : Le cœur du traitement spatial

Alors que l\'histogramme offre une vue globale, la plupart des opérations de traitement d\'images de bas niveau sont locales : la nouvelle valeur d\'un pixel est calculée en fonction de sa valeur et de celles de ses voisins. L\'outil mathématique qui formalise cette opération de voisinage est la **convolution**.

La convolution est sans doute l\'opération la plus fondamentale en traitement d\'images et en vision par ordinateur. Elle est au cœur des filtres classiques que nous allons étudier, mais elle constitue également le bloc de construction essentiel des réseaux de neurones convolutifs (CNNs), les architectures qui ont révolutionné le domaine. Comprendre la convolution, c\'est donc jeter un pont entre les fondements classiques et les techniques de pointe.

**Définition mathématique**

La convolution discrète 2D est une opération qui combine une image d\'entrée I avec une petite matrice appelée **noyau** (ou *kernel* en anglais), notée K, pour produire une image de sortie O. Mathématiquement, elle se définit comme suit  :

O(x,y)=(I∗K)(x,y)=i=−∞∑∞​j=−∞∑∞​I(x−i,y−j)K(i,j)

Dans le contexte d\'images et de noyaux de tailles finies, si le noyau K a des dimensions (2a+1)×(2b+1), la formule devient :

O(x,y)=i=−a∑a​j=−b∑b​I(x−i,y−j)K(i,j)

Il est important de noter que la définition mathématique de la convolution implique un retournement du noyau (K(i,j) est appliqué à I(x−i,y−j)). Dans de nombreuses implémentations, notamment en apprentissage profond, on utilise plutôt la **corrélation croisée**, qui n\'effectue pas ce retournement. Si le noyau est symétrique (par exemple, un noyau gaussien), les deux opérations sont équivalentes. Dans le cas contraire, les résultats diffèrent, bien que la distinction soit souvent gommée dans la terminologie des CNNs où l\'opération est systématiquement appelée \"convolution\".

**Intuition visuelle et paramètres clés**

L\'opération de convolution peut être visualisée comme une \"fenêtre glissante\". Le noyau, qui est généralement beaucoup plus petit que l\'image (par exemple, 3x3 ou 5x5 pixels), est superposé à une région de l\'image d\'entrée, en commençant par le coin supérieur gauche. On effectue alors une multiplication élément par élément entre les valeurs du noyau et les valeurs des pixels de l\'image qu\'il recouvre. La somme de tous ces produits donne la valeur d\'un seul pixel dans l\'image de sortie. Le noyau est ensuite décalé sur l\'image d\'entrée, et le processus est répété jusqu\'à ce que toute l\'image ait été parcourue. Le résultat est une nouvelle image, souvent appelée

**carte de caractéristiques** (*feature map*), qui représente la réponse de l\'image au filtre défini par le noyau.

Cette opération est contrôlée par trois hyperparamètres principaux :

> **Le Noyau (Kernel) :** C\'est une petite matrice de poids qui définit la transformation à appliquer. La nature du noyau détermine l\'effet du filtre : flou, rehaussement de contours, etc. Sa taille est typiquement impaire (3x3, 5x5) pour qu\'il possède un pixel central, ce qui permet d\'aligner la sortie avec l\'entrée sans décalage spatial.
>
> **La Foulée (Stride) :** Ce paramètre définit le nombre de pixels de décalage du noyau à chaque étape de son glissement sur l\'image. Une foulée de 1 (le cas le plus courant) signifie que le noyau se déplace d\'un pixel à la fois. Une foulée supérieure à 1 a pour effet de sous-échantillonner la sortie, produisant une carte de caractéristiques de dimensions spatiales réduites. Par exemple, avec une foulée de 2, la hauteur et la largeur de la sortie seront environ divisées par deux.
>
> **Le Bourrage (Padding) :** Lorsque le noyau est appliqué aux bords de l\'image, une partie de celui-ci se retrouve en dehors des limites de l\'image. Sans traitement particulier, l\'image de sortie serait plus petite que l\'image d\'entrée. De plus, les pixels sur les bords de l\'image seraient moins pris en compte dans le calcul que les pixels centraux. Pour pallier ces problèmes, on utilise le bourrage, qui consiste à ajouter des pixels (généralement de valeur 0, d\'où le nom de *zero-padding*) autour de l\'image d\'entrée. Un bourrage bien choisi permet de conserver les dimensions spatiales de l\'image après la convolution, ce qui est crucial dans les architectures de réseaux de neurones profonds pour empiler de nombreuses couches. La taille du bourrage\
> P nécessaire pour conserver les dimensions avec un noyau de taille K×K et une foulée de 1 est donnée par P=(K−1)/2.

La convolution est une opération linéaire et invariante par translation, ce qui signifie que le même filtre est appliqué à chaque position de l\'image. C\'est cette propriété qui permet aux CNNs d\'apprendre des motifs (caractéristiques) et de les détecter n\'importe où dans l\'image.

### 47.1.3 Filtrage spatial : Modifier l\'image par son voisinage

Le filtrage spatial est l\'application de la convolution avec des noyaux spécifiquement conçus pour obtenir un effet désiré sur l\'image. En se basant sur la théorie du traitement du signal, on peut classer ces filtres en fonction de leur effet sur les fréquences spatiales de l\'image. Les basses fréquences correspondent aux zones d\'intensité uniforme ou à variation lente, tandis que les hautes fréquences correspondent aux changements brusques d\'intensité, comme les contours, les détails fins et le bruit.

**Filtres passe-bas : Lissage et réduction du bruit**

Un filtre passe-bas a pour objectif d\'atténuer ou de supprimer les hautes fréquences spatiales d\'une image, tout en laissant passer les basses fréquences. L\'effet principal de ce type de filtre est un

**lissage** ou un **flou**. En moyennant les valeurs des pixels dans un voisinage, les variations rapides sont atténuées, ce qui a pour conséquence de réduire l\'impact du bruit et d\'estomper les détails fins.

L\'exemple le plus emblématique de filtre passe-bas est le **filtre gaussien**. Le noyau de ce filtre est généré à partir d\'une fonction gaussienne 2D :

G(x,y)=2πσ21​e−2σ2x2+y2​

où (x,y) sont les distances par rapport au centre du noyau et σ est l\'écart-type de la gaussienne. Un noyau discret est créé en échantillonnant cette fonction sur une grille (par exemple, 5x5) et en normalisant la somme de ses éléments à 1 pour conserver la luminosité globale de l\'image. Le paramètre σ contrôle l\'intensité du flou : un σ plus grand produit un noyau plus étalé et donc un flou plus prononcé.

Par exemple, un noyau gaussien 3x3 avec σ=1 pourrait ressembler à :

KGauss​=161​​121​242​121​​

L\'application de ce filtre par convolution sur une image va remplacer chaque pixel par une moyenne pondérée de son voisinage, où les poids sont plus élevés pour les pixels centraux, conformément à la forme en cloche de la gaussienne. Cette opération est la première étape cruciale de nombreux algorithmes, notamment le détecteur de contours de Canny, car elle permet de stabiliser le calcul des dérivées en présence de bruit.

**Filtres passe-haut : Rehaussement des détails et des contours**

À l\'opposé, un filtre passe-haut accentue les hautes fréquences spatiales. Il a pour effet de rehausser les détails, d\'aiguiser les contours et, par conséquent, d\'amplifier le bruit présent dans l\'image. Les régions uniformes de l\'image sont atténuées ou supprimées par cette procédure.

Ces filtres sont souvent basés sur des approximations de la dérivée seconde de l\'image, comme l\'**opérateur de Laplace**. Un noyau laplacien typique est :

KLaplace​=​010​1−41​010​​ou​111​1−81​111​​

La somme des coefficients de ce noyau est nulle. Lorsqu\'il est appliqué à une région d\'intensité constante, le résultat de la convolution est zéro. En revanche, au niveau d\'un contour (un changement brusque d\'intensité), la réponse sera forte et non nulle. L\'image résultante d\'un filtrage laplacien met en évidence les contours et les détails fins. Pour réaliser un rehaussement de l\'image originale, on peut soustraire l\'image filtrée par le laplacien de l\'image originale, ce qui a pour effet d\'aiguiser les contours.

Ces deux types de filtres, passe-bas et passe-haut, illustrent la puissance de la convolution avec des noyaux \"faits main\". Ils permettent de manipuler le contenu fréquentiel d\'une image pour des tâches spécifiques d\'amélioration ou d\'extraction de caractéristiques.

### 47.1.4 Détection de contours : L\'algorithme de Canny

Les contours, qui correspondent aux frontières des objets dans une scène, sont des caractéristiques sémantiques de première importance. Ils sont caractérisés par une discontinuité, ou un changement rapide, de l\'intensité lumineuse. Mathématiquement, un tel changement correspond à un maximum local de la magnitude du gradient de l\'image.

Les premiers opérateurs de détection de contours, comme les **opérateurs de Prewitt et de Sobel**, sont des filtres de convolution conçus pour approximer la dérivée première de l\'image dans les directions horizontale (Gx​) et verticale (Gy​). Par exemple, les noyaux de Sobel sont :

KSobel,x​=​−1−2−1​000​121​​etKSobel,y​=​−101​−202​−101​​

En convoluant l\'image avec ces deux noyaux, on obtient deux cartes de gradient, Gx​ et Gy​. La magnitude du gradient en chaque pixel est alors G=Gx2​+Gy2​​, et son orientation est θ=arctan(Gy​/Gx​). Une magnitude de gradient élevée indique la présence probable d\'un contour.

Cependant, ces opérateurs simples souffrent de plusieurs défauts : ils sont très sensibles au bruit et produisent des contours épais et mal définis. C\'est dans ce contexte que John Canny a proposé en 1986 un algorithme multi-étapes qui est devenu la référence en matière de détection de contours. L\'approche de Canny est remarquable car elle a été conçue pour être \"optimale\" selon trois critères explicites  :

> **Bonne détection :** Le taux d\'erreur doit être faible, c\'est-à-dire que l\'algorithme doit marquer le plus de vrais contours possible tout en marquant le moins de faux contours possible.
>
> **Bonne localisation :** Les points marqués comme contours doivent être aussi proches que possible du centre du vrai contour.
>
> **Réponse unique :** Un seul contour dans l\'image ne doit pas donner lieu à plusieurs réponses (pas de contours multiples).

Cette démarche illustre une tendance fondamentale en vision par ordinateur : la recherche de la robustesse par la conception de pipelines intelligents où chaque étape résout un problème spécifique. L\'algorithme de Canny n\'est pas une opération unique, mais une cascade de décisions qui raffinent progressivement le résultat.

**Les étapes détaillées de l\'algorithme de Canny**

L\'algorithme se décompose en quatre étapes principales  :

> **Réduction du bruit :** La première étape consiste à lisser l\'image avec un filtre gaussien. Le calcul du gradient est une opération de différenciation, qui est par nature très sensible au bruit. Sans lissage préalable, le bruit dans l\'image créerait de nombreux faux contours. L\'application d\'un flou gaussien atténue ce bruit et prépare l\'image pour un calcul de gradient plus stable. La taille du filtre gaussien (contrôlée par son écart-type σ) est un paramètre important : un filtre plus grand réduit davantage le bruit mais peut aussi estomper et déplacer légèrement les contours les plus fins.
>
> **Calcul de la magnitude et de l\'orientation du gradient :** Une fois l\'image lissée, l\'algorithme calcule l\'intensité (magnitude) et la direction du gradient pour chaque pixel, en utilisant des filtres de type Sobel. On obtient ainsi deux cartes : une carte de magnitude, où les valeurs élevées indiquent des changements d\'intensité importants, et une carte d\'orientation, qui indique la direction de ces changements (perpendiculaire au contour).
>
> **Suppression des non-maxima :** L\'image de magnitude du gradient produit des arêtes larges. Pour satisfaire le critère de réponse unique et obtenir des contours d\'une épaisseur d\'un seul pixel, une étape d\'amincissement est nécessaire. C\'est le rôle de la suppression des non-maxima. Pour chaque pixel, on examine sa magnitude de gradient. On regarde ensuite la direction du gradient en ce point (quantifiée, par exemple, en quatre directions : horizontale, verticale, et les deux diagonales). On compare alors la magnitude du pixel courant avec celle de ses deux voisins situés le long de cette direction de gradient. Si la magnitude du pixel courant n\'est pas un maximum local (c\'est-à-dire, si elle n\'est pas plus grande que celle de ses deux voisins), sa valeur est mise à zéro. Autrement, elle est conservée. Ce processus ne garde que les \"crêtes\" les plus fines de la carte de gradient.
>
> **Seuillage par hystérésis :** La dernière étape consiste à décider quels pixels de la carte des maxima locaux sont de vrais contours et lesquels sont dus au bruit ou à des variations de texture non significatives. Plutôt que d\'utiliser un seuil unique, qui rendrait difficile la distinction entre contours faibles mais réels et bruit, Canny a proposé un seuillage à deux niveaux, ou seuillage par hystérésis. Deux seuils sont définis : un seuil haut (Thigh​) et un seuil bas (Tlow​).

Tout pixel dont la magnitude de gradient est supérieure à Thigh​ est immédiatement considéré comme un pixel de contour \"fort\" et est inclus dans le résultat final.

Tout pixel dont la magnitude est inférieure à Tlow​ est immédiatement rejeté.

Un pixel dont la magnitude se situe entre Tlow​ et Thigh​ est considéré comme un pixel de contour \"faible\". Il n\'est inclus dans le résultat final que s\'il est connecté (directement ou indirectement, via d\'autres pixels faibles) à un pixel de contour fort.

Cette technique permet de \"suivre\" les contours. Les segments de contours forts agissent comme des points d\'ancrage, et l\'algorithme connecte les segments plus faibles qui leur sont adjacents, tout en ignorant les pixels de bruit isolés qui, même s\'ils ont un gradient modéré, ne sont connectés à rien de significatif. Le résultat final est une image binaire de contours fins et bien connectés.

L\'algorithme de Canny, par sa conception rigoureuse, reste un outil de détection de contours extrêmement performant et largement utilisé, même à l\'ère de l\'apprentissage profond, souvent comme une étape de prétraitement ou pour l\'évaluation de méthodes plus modernes.

## 47.2 Extraction de caractéristiques : L\'ère des descripteurs \"faits main\"

Avec la capacité d\'extraire des informations fondamentales comme les contours, la vision par ordinateur s\'est ensuite attaquée à des tâches de plus haut niveau, telles que la reconnaissance d\'objets, la mise en correspondance d\'images pour la stéréovision ou la création de panoramas. Pour ces applications, comparer des images entières pixel par pixel est à la fois inefficace du point de vue calculatoire et extrêmement fragile face aux transformations les plus simples. Une photographie du même objet prise sous un angle différent, à une autre échelle ou sous un éclairage changeant, produira des matrices de pixels radicalement différentes. La solution à ce problème a défini une ère entière de la vision par ordinateur, celle de l\'ingénierie manuelle de caractéristiques (*hand-crafted features*). L\'idée centrale est de ne plus travailler sur l\'image brute, mais d\'en extraire un ensemble de \"points d\'intérêt\" saillants et de les décrire d\'une manière qui soit robuste --- ou invariante --- à ces transformations. Cette section explore ce paradigme, qui a culminé avec le développement de l\'algorithme SIFT (Scale-Invariant Feature Transform). SIFT n\'est pas seulement un algorithme ; il représente l\'apogée d\'une philosophie où l\'intuition humaine et une expertise profonde en géométrie et en traitement du signal sont méticuleusement employées pour encoder, étape par étape, les propriétés d\'invariance souhaitées dans un descripteur numérique. Nous disséquerons en détail ce monument algorithmique, puis nous présenterons son successeur, SURF (Speeded Up Robust Features), qui illustre une autre vérité fondamentale en ingénierie : l\'importance cruciale de la vitesse de calcul pour l\'applicabilité pratique.

### 47.2.1 La quête de l\'invariance : Pourquoi des points d\'intérêt?

Pour des tâches comme la reconnaissance d\'un objet spécifique dans une scène encombrée ou l\'assemblage de plusieurs photos en un panorama, l\'approche globale consistant à analyser l\'image entière est vouée à l\'échec. L\'objet peut être partiellement occulté, vu sous un angle différent, ou apparaître plus petit ou plus grand. La solution consiste à adopter une approche locale : identifier des points d\'intérêt distinctifs sur l\'objet (par exemple, des coins, des \"blobs\" de texture) et les utiliser comme points d\'ancrage pour la reconnaissance et la mise en correspondance.

Ces points d\'intérêt, ou **keypoints**, doivent être détectables de manière répétée sur différentes images du même objet malgré les variations de prise de vue. Une fois un point d\'intérêt détecté, une région locale autour de ce point est analysée pour créer une signature numérique, appelée **descripteur**. Ce descripteur doit posséder des propriétés d\'invariance spécifiques pour être utile  :

> **Invariance à la translation :** Le descripteur est calculé localement autour du point d\'intérêt, donc sa position globale dans l\'image n\'a pas d\'importance.
>
> **Invariance à l\'échelle :** L\'objet peut apparaître plus grand ou plus petit. Le détecteur de points d\'intérêt doit être capable de trouver les mêmes points à différentes échelles, et le descripteur doit être calculé sur une région de taille proportionnelle à l\'échelle de détection.
>
> **Invariance à la rotation :** L\'objet peut être tourné dans le plan de l\'image. L\'algorithme doit assigner une orientation canonique au point d\'intérêt et calculer le descripteur par rapport à cette orientation.
>
> **Robustesse aux changements d\'illumination :** Le descripteur doit être insensible aux changements de luminosité et de contraste globaux (par exemple, passer d\'un éclairage intérieur à la lumière du jour).
>
> **Robustesse aux déformations affines :** Idéalement, le descripteur devrait également tolérer des changements de point de vue plus complexes (déformations perspectives).

La conception d\'un algorithme capable de satisfaire toutes ces exigences a été un défi majeur, brillamment relevé par David Lowe avec SIFT.

### 47.2.2 SIFT (Scale-Invariant Feature Transform) : L\'algorithme de référence

Proposé par David Lowe en 1999 et finalisé en 2004, l\'algorithme SIFT est une solution complète et intégrée qui a dominé le domaine de l\'extraction de caractéristiques locales pendant plus d\'une décennie. Sa robustesse et sa performance en ont fait la méthode de référence pour une multitude d\'applications, de la reconnaissance d\'objets à la reconstruction 3D. Le succès de SIFT repose sur un pipeline en quatre étapes majeures, chacune conçue pour conférer une propriété d\'invariance spécifique.

**1. Détection des extrema dans l\'espace des échelles**

La première étape vise à identifier des points d\'intérêt candidats qui sont stables à travers les changements d\'échelle. Pour ce faire, SIFT construit une représentation de l\'image à plusieurs échelles, appelée **espace des échelles** (*scale space*).

> **Construction de l\'espace des échelles :** L\'espace des échelles est généré en convoluant de manière répétée l\'image d\'entrée avec des filtres gaussiens dont l\'écart-type σ augmente progressivement. Cela produit une série d\'images de plus en plus floues. L\'image est ensuite sous-échantillonnée (sa taille est réduite de moitié), et le processus de floutage est répété. Chaque niveau de sous-échantillonnage est appelé une **octave**. Cette pyramide d\'images simule l\'observation de la scène à différentes distances.
>
> **Différence de Gaussiennes (DoG) :** Calculer les réponses à des filtres à différentes échelles est coûteux. Lowe a montré qu\'une approximation efficace du **Laplacien de Gaussienne (LoG)** normalisé, un excellent détecteur de \"blobs\" (régions de forme circulaire), pouvait être obtenue en calculant simplement la différence entre deux images gaussiennes voisines dans l\'espace des échelles : D(x,y,σ)=L(x,y,kσ)−L(x,y,σ), où L est l\'image convoluée avec un gaussien et k est un facteur constant. Cette opération, la\
> **Différence de Gaussiennes (DoG)**, est très rapide à calculer.
>
> **Détection des extrema locaux :** Les points d\'intérêt candidats sont identifiés comme étant les extrema (maxima ou minima) locaux dans l\'espace des échelles DoG. Pour ce faire, chaque pixel d\'une image DoG est comparé à ses 26 voisins : ses 8 voisins dans la même image, et les 9 voisins correspondants dans l\'image DoG de l\'échelle supérieure et de l\'échelle inférieure au sein de la même octave. Si un pixel est le plus grand ou le plus petit de tous ses 26 voisins, il est marqué comme un point d\'intérêt candidat. Le fait que la détection se fasse dans un volume 3D (deux dimensions spatiales + l\'échelle) garantit que les points détectés sont stables à la fois spatialement et à travers les échelles.

**2. Localisation précise des points clés**

La détection d\'extrema sur une grille discrète de pixels et d\'échelles produit des localisations imprécises. De plus, tous les extrema ne sont pas de bons points d\'intérêt. Cette deuxième étape a donc pour but de raffiner la position des candidats et d\'éliminer les points instables.

> **Affinage de la localisation :** Pour chaque point candidat, une expansion de Taylor du second ordre de la fonction DoG est utilisée pour interpoler la position de l\'extremum avec une précision sous-pixel et sous-échelle. Cela permet de trouver la localisation beaucoup plus précise du véritable maximum ou minimum.
>
> **Rejet des points de faible contraste :** Les points dont la valeur de la fonction DoG à l\'extremum interpolé est inférieure à un certain seuil sont rejetés. Ces points sont considérés comme peu distinctifs et instables, probablement dus au bruit.
>
> **Élimination des réponses sur les arêtes :** Les extrema de la DoG ont une forte réponse le long des arêtes, mais ces points sont mal localisés perpendiculairement à l\'arête. Pour éliminer ces points instables, SIFT utilise la **matrice Hessienne** 2x2 calculée au niveau du point d\'intérêt. Le ratio des valeurs propres de cette matrice donne une mesure de la courbure principale. Si ce ratio est supérieur à un certain seuil, cela signifie qu\'il y a une courbure principale beaucoup plus grande que l\'autre (caractéristique d\'une arête), et le point est rejeté. Seuls les points bien localisés dans toutes les directions (comme les coins) sont conservés.

**3. Assignation d\'une orientation**

À ce stade, nous avons des points d\'intérêt stables en position et en échelle. Pour atteindre l\'invariance à la rotation, il faut leur assigner une orientation canonique.

> **Calcul des gradients :** Pour chaque point clé, on considère une région voisine à l\'échelle correspondante. Dans cette région, on calcule la magnitude et l\'orientation du gradient pour chaque pixel.
>
> **Histogramme des orientations :** Un histogramme des orientations est créé, avec typiquement 36 classes (bins) couvrant les 360 degrés. Chaque pixel de la région voisine vote pour une classe d\'orientation, et son vote est pondéré par la magnitude de son gradient et par un poids gaussien qui décroît avec la distance au point clé.
>
> **Assignation de l\'orientation principale :** Le pic le plus élevé de cet histogramme lissé définit l\'orientation principale du point clé. Pour plus de robustesse, toute orientation dont le pic atteint au moins 80% du pic principal est également conservée, créant ainsi plusieurs points clés au même endroit et à la même échelle, mais avec des orientations différentes. Toutes les étapes suivantes seront effectuées par rapport à cette (ou ces) orientation(s), ce qui garantit l\'invariance à la rotation de l\'image.

**4. Création du descripteur de point clé**

La dernière étape consiste à générer une description unique et robuste pour chaque point clé (avec sa position, son échelle et son orientation).

> **Fenêtre de description :** Une fenêtre de 16x16 pixels est définie autour du point clé. Cette fenêtre est tournée pour s\'aligner avec l\'orientation principale assignée à l\'étape précédente. Les calculs de gradient à l\'intérieur de cette fenêtre sont donc effectués dans un système de coordonnées relatif, ce qui assure l\'invariance à la rotation.
>
> **Grille d\'histogrammes :** La fenêtre de 16x16 est divisée en une grille de 4x4 sous-régions (de 4x4 pixels chacune).
>
> **Calcul des histogrammes locaux :** Dans chaque sous-région, un histogramme de 8 orientations de gradient est calculé. Comme précédemment, les contributions sont pondérées par la magnitude du gradient. Cette division en sous-régions permet de capturer la structure spatiale de la distribution des gradients tout en tolérant de légères déformations.
>
> **Formation du vecteur SIFT :** Les 16 histogrammes de 8 classes sont concaténés pour former un unique vecteur de caractéristiques de 16×8=128 dimensions.
>
> **Normalisation :** Enfin, ce vecteur de 128 dimensions est normalisé à une longueur unitaire. Cette étape le rend robuste aux changements d\'illumination affines (changements de luminosité et de contraste). Une étape de seuillage est également appliquée pour réduire l\'influence des gradients très forts, par exemple dus à des changements d\'illumination non uniformes.

Le vecteur SIFT de 128 flottants qui en résulte est une signature très distinctive et robuste du voisinage du point d\'intérêt, prête à être utilisée pour la mise en correspondance avec les descripteurs d\'autres images.

### 47.2.3 SURF (Speeded Up Robust Features) : L\'alternative rapide

Bien que SIFT ait établi une norme de performance et de robustesse, son coût de calcul, principalement dû aux nombreuses convolutions gaussiennes, le rendait difficile à utiliser dans des applications en temps réel. C\'est ce besoin de vitesse qui a motivé le développement de SURF en 2006 par Herbert Bay et ses collègues. SURF n\'est pas une réinvention complète, mais plutôt une réingénierie astucieuse de SIFT, visant à approximer ses étapes clés avec des opérations beaucoup plus rapides. Cette démarche est un exemple classique en ingénierie et en informatique : lorsqu\'un algorithme performant mais lent existe, l\'innovation consiste souvent à trouver des approximations intelligentes qui préservent l\'essentiel de la performance tout en réduisant drastiquement la complexité de calcul.

Les deux innovations majeures de SURF sont l\'utilisation des images intégrales et l\'approximation des opérateurs gaussiens par des filtres en boîte.

**Images intégrales pour une convolution ultra-rapide**

L\'**image intégrale**, aussi connue sous le nom de *summed-area table*, est une structure de données qui permet de calculer la somme des intensités de pixels à l\'intérieur de n\'importe quel rectangle de l\'image en un temps constant, indépendamment de la taille du rectangle. La valeur de l\'image intégrale Iint​ au point (x,y) est la somme de tous les pixels situés dans le rectangle défini par l\'origine et le point (x,y). Une fois cette table pré-calculée (ce qui se fait en une seule passe sur l\'image), la somme des pixels dans un rectangle quelconque peut être obtenue avec seulement quatre accès à la table et trois opérations arithmétiques. Cette astuce est au cœur de l\'accélération de SURF.

**Détecteur \"Fast-Hessian\"**

Au lieu d\'utiliser la DoG pour approximer le LoG, SURF se base sur le **déterminant de la matrice Hessienne** pour détecter les points d\'intérêt de type \"blob\". La matrice Hessienne, qui utilise les dérivées secondes de l\'image, est également sensible aux blobs. L\'innovation de SURF est d\'approximer ces dérivées secondes non pas avec des filtres gaussiens, mais avec des **filtres en boîte** (*box filters*). Ces filtres sont composés de régions rectangulaires simples, et leurs réponses peuvent être calculées de manière extrêmement efficace en utilisant l\'image intégrale.

De plus, pour construire l\'espace des échelles, SURF adopte une approche différente de SIFT. Au lieu de réduire la taille de l\'image à chaque octave, SURF garde l\'image à sa taille originale et applique des filtres en boîte de tailles croissantes. Grâce aux images intégrales, l\'application d\'un grand filtre en boîte n\'est pas plus coûteuse que celle d\'un petit filtre, ce qui constitue un gain de vitesse considérable. Les maxima du déterminant de la Hessienne à travers les différentes échelles de filtres donnent les points d\'intérêt SURF.

**Descripteur basé sur les ondelettes de Haar**

Pour la description des points d\'intérêt, SURF s\'écarte également de l\'histogramme de gradients de SIFT.

> **Assignation de l\'orientation :** Une orientation est d\'abord assignée au point d\'intérêt en calculant les réponses à des **ondelettes de Haar** en x et y dans un voisinage circulaire. La direction dominante de ces réponses détermine l\'orientation du point.
>
> **Création du descripteur :** Une région carrée de 20s x 20s (où s est l\'échelle du point) est définie autour du point et orientée selon l\'orientation principale. Cette région est divisée en une grille de 4x4 sous-régions. Pour chaque sous-région, les réponses aux ondelettes de Haar en x et y sont calculées et sommées. Pour chaque sous-région, on stocke quatre valeurs : la somme des réponses en x, la somme des réponses en y, la somme de leurs valeurs absolues. Cela donne un descripteur de 4×4×4=64 dimensions, soit deux fois plus compact que celui de SIFT. Une version étendue à 128 dimensions existe également pour une plus grande distinctivité.

Grâce à ces approximations et à l\'utilisation intensive des images intégrales, SURF est plusieurs fois plus rapide que SIFT, tout en conservant une bonne robustesse, ce qui l\'a rendu très populaire pour les applications nécessitant une analyse en temps réel.

### Tableau comparatif : SIFT vs. SURF

Le tableau suivant synthétise les différences fondamentales entre SIFT et SURF, mettant en lumière le compromis entre la rigueur mathématique et la vitesse de calcul qui les distingue. Ce choix entre SIFT et SURF est emblématique des décisions que les ingénieurs en vision doivent souvent prendre : privilégier la précision maximale ou la performance en temps réel.

  ------------------------------ -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------
  Caractéristique                SIFT (Scale-Invariant Feature Transform)                                                                                                                                         SURF (Speeded-Up Robust Features)

  **Détecteur de points**        Différence de Gaussiennes (DoG), approximation du Laplacien de Gaussienne (LoG).                                                                                             Déterminant de la matrice Hessienne, approximé par des filtres en boîte.

  **Descripteur**                Histogrammes de gradients orientés (16 sous-régions x 8 orientations).                                                                                                       Sommes des réponses d\'ondelettes de Haar.

  **Dimension du descripteur**   128.                                                                                                                                                                         64 (ou 128 en version étendue).

  **Vitesse**                    Lente, en raison des convolutions gaussiennes itératives.                                                                                                                    Rapide, grâce à l\'utilisation des images intégrales.

  **Robustesse**                 Très robuste aux changements d\'échelle et de rotation. Souvent considéré comme plus précis et robuste, notamment face aux changements de point de vue et d\'illumination.   Robuste, mais généralement un peu moins performant que SIFT dans des conditions de transformation extrêmes. Très performant face au flou.

  **Innovation clé**             Construction rigoureuse de l\'espace des échelles pour une invariance théoriquement fondée.                                                                                      Utilisation des images intégrales pour une accélération massive des calculs de convolution avec des filtres en boîte.
  ------------------------------ -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------

En conclusion, SIFT reste la référence en termes de robustesse et de précision, ce qui en fait un excellent choix pour les applications hors ligne où la qualité des correspondances est primordiale. SURF, quant à lui, offre un compromis exceptionnel entre vitesse et performance, le rendant idéal pour les systèmes embarqués et les applications en temps réel où la latence est un facteur critique.

## 47.3 Détection d\'objets : Des propositions de régions à la prédiction unique

L\'avènement de l\'apprentissage profond, et en particulier des réseaux de neurones convolutifs (CNNs), a provoqué un changement de paradigme radical en vision par ordinateur. Alors que l\'ère précédente, incarnée par SIFT et SURF, reposait sur l\'ingénierie manuelle de caractéristiques, les CNNs ont introduit la capacité d\'**apprendre** automatiquement les caractéristiques pertinentes directement à partir des données. Cette capacité a transformé toutes les tâches de la vision, mais son impact a été particulièrement spectaculaire dans le domaine de la détection d\'objets.

Cette section retrace l\'évolution fulgurante des détecteurs d\'objets basés sur l\'apprentissage profond. Nous commencerons par les approches pionnières à deux étapes, comme la famille des R-CNN, qui suivaient une logique intuitive : d\'abord générer des propositions de régions potentiellement intéressantes, puis classifier le contenu de ces régions. Bien que très précises, leur complexité et leur lenteur ont ouvert la voie à une véritable révolution : les détecteurs à une étape (*single-shot detectors*). Des architectures comme YOLO (You Only Look Once) et SSD (Single Shot MultiBox Detector) ont repensé le problème fondamentalement. Plutôt que de suivre un pipeline séquentiel, elles traitent la détection comme un problème de régression unique et massivement parallèle, prédisant toutes les boîtes englobantes et les classes en une seule passe du réseau. Ce passage d\'un processus délibératif en deux temps à une prédiction instantanée a non seulement permis d\'atteindre des vitesses en temps réel, mais il a aussi illustré la puissance des réseaux profonds pour apprendre des tâches complexes de bout en bout. Nous verrons que, une fois ce paradigme établi, la principale innovation a consisté à mieux gérer la détection d\'objets à différentes échelles, un défi au cœur des différences architecturales entre YOLO et SSD.

### 47.3.1 Définition de la tâche et métriques

La détection d\'objets est une tâche plus complexe que la classification d\'images. Alors que la classification répond à la question \"Quel objet se trouve dans cette image?\", la détection d\'objets doit répondre à deux questions simultanément : \"Quels objets se trouvent dans cette image?\" et \"Où se trouvent-ils?\". La réponse à la seconde question est fournie sous la forme d\'une **boîte englobante** (*bounding box*), généralement définie par les coordonnées de son coin supérieur gauche et ses dimensions (largeur et hauteur), ou par les coordonnées de deux coins opposés.

Pour évaluer la performance d\'un détecteur d\'objets, deux métriques principales sont utilisées :

> **Intersection sur Union (IoU) :** Pour une prédiction donnée, l\'IoU mesure le degré de chevauchement entre la boîte englobante prédite (Bp​) et la boîte englobante de vérité terrain (Bgt​). Elle est définie comme le rapport de l\'aire de leur intersection sur l\'aire de leur union :\
> IoU(Bp​,Bgt​)=Area(Bp​∪Bgt​)Area(Bp​∩Bgt​)​\
> Une prédiction est généralement considérée comme correcte (un \"Vrai Positif\", TP) si son IoU avec la vérité terrain dépasse un certain seuil (souvent 0.5).
>
> **Précision Moyenne (mAP - mean Average Precision) :** C\'est la métrique standard pour évaluer la performance globale d\'un détecteur. Pour chaque classe d\'objet, on calcule la **Précision Moyenne (AP)**, qui est l\'aire sous la courbe Précision-Rappel. La Précision mesure la proportion de détections correctes parmi toutes les détections, tandis que le Rappel mesure la proportion de détections correctes parmi tous les objets qui auraient dû être détectés. La mAP est ensuite calculée en faisant la moyenne des AP sur toutes les classes d\'objets.

### 47.3.2 Les approches à deux étapes : La famille R-CNN

Les premières approches de détection d\'objets par apprentissage profond qui ont connu un grand succès suivaient un pipeline en deux étapes, souvent résumé par \"proposer puis classifier\" (*proposals then classification*).

L\'idée initiale, introduite par R-CNN (Regions with CNN features), consistait à utiliser un algorithme externe (comme Selective Search) pour générer environ 2000 propositions de régions dans l\'image. Chaque proposition était ensuite redimensionnée et passée indépendamment dans un CNN pour en extraire des caractéristiques, qui étaient finalement utilisées pour classifier la région et affiner les coordonnées de la boîte. Cette méthode, bien que révolutionnaire en termes de précision, était extrêmement lente.

Des améliorations successives, Fast R-CNN puis **Faster R-CNN**, ont cherché à accélérer ce pipeline. L\'innovation majeure de Faster R-CNN a été d\'intégrer la génération de propositions de régions directement dans le réseau de neurones. Pour ce faire, il introduit un sous-réseau appelé **Region Proposal Network (RPN)**. Le RPN est un petit réseau entièrement convolutif qui glisse sur la carte de caractéristiques principale générée par le CNN de base. À chaque position, il prédit si la région correspond à un objet ou à un fond, et propose des boîtes englobantes de différentes échelles et rapports d\'aspect (appelées

*anchor boxes*).

Le pipeline de Faster R-CNN est donc le suivant :

> L\'image entière est passée une seule fois dans un CNN de base pour générer une carte de caractéristiques globale.
>
> Le RPN utilise cette carte de caractéristiques pour générer des propositions de régions d\'intérêt.
>
> Pour chaque proposition, les caractéristiques correspondantes sont extraites de la carte globale (via une opération appelée RoI Pooling).
>
> Ces caractéristiques sont ensuite passées dans des couches entièrement connectées pour la classification finale de l\'objet et la régression précise de la boîte englobante.

En partageant les calculs de convolution entre le RPN et le réseau de détection, Faster R-CNN est devenu beaucoup plus rapide que ses prédécesseurs. Il a établi une nouvelle norme en matière de précision et reste une référence importante, en particulier pour les applications où la précision, notamment sur les petits objets, prime sur la vitesse. Cependant, avec une vitesse d\'environ 7 images par seconde (FPS), il restait trop lent pour de nombreuses applications en temps réel.

### 47.3.3 Les détecteurs à une étape (Single-Shot) : La révolution du temps réel

La lenteur inhérente aux modèles à deux étapes a motivé la recherche d\'une approche radicalement différente. L\'idée des détecteurs à une étape est d\'éliminer complètement l\'étape de proposition de régions et de prédire simultanément les classes et les localisations des boîtes englobantes en une seule passe à travers le réseau. Deux architectures, YOLO et SSD, sont devenues les figures de proue de cette révolution.

**YOLO (You Only Look Once)**

L\'approche de YOLO, comme son nom l\'indique, est de regarder l\'image une seule fois pour effectuer toutes les prédictions. Il reformule la détection d\'objets non pas comme un problème de classification sur de multiples régions, mais comme un unique problème de régression.

> **Philosophie et architecture (YOLOv1) :**

**Division en grille :** L\'image d\'entrée est redimensionnée (par exemple, en 448x448) et divisée en une grille de S×S cellules (par exemple, 7x7).

**Prédiction par cellule :** Chaque cellule de la grille est responsable de la détection des objets dont le centre tombe à l\'intérieur de cette cellule. Chaque cellule prédit :

B boîtes englobantes (dans YOLOv1, B=2). Pour chaque boîte, elle prédit 5 valeurs : les coordonnées du centre (x,y) relatives à la cellule, la largeur w et la hauteur h relatives à l\'image entière, et un **score de confiance**.

C probabilités de classe conditionnelles, P(Classei​∣Objet), où C est le nombre total de classes.

**Score de confiance :** Ce score est défini comme P(Objet)×IoUpredtruth​. Il reflète à la fois la probabilité que la boîte contienne un objet et la qualité de la prédiction de la boîte.

**Sortie du réseau :** Le réseau produit un tenseur de sortie de dimensions S×S×(B×5+C). Pour une grille 7x7, 2 boîtes par cellule et 20 classes (PASCAL VOC), cela donne un tenseur de 7x7x30.

L\'avantage de YOLO est sa vitesse fulgurante, car il ne nécessite qu\'une seule évaluation du réseau. De plus, comme il voit l\'image entière, il fait moins d\'erreurs de fond que les méthodes basées sur des régions. Cependant, YOLOv1 avait des limitations, notamment des difficultés à détecter les petits objets et les objets très proches les uns des autres, car chaque cellule ne pouvait prédire qu\'un nombre limité de boîtes et un seul ensemble de classes.

> **Évolution (YOLOv2/9000 et au-delà) :** Pour surmonter ces limitations, les versions ultérieures ont introduit des améliorations clés. **YOLOv2** a notamment incorporé les **boîtes d\'ancrage** (*anchor boxes*) popularisées par Faster R-CNN. Au lieu de prédire directement les coordonnées des boîtes, le réseau prédit des décalages par rapport à un ensemble de boîtes de priors de différentes formes et tailles, ce qui facilite l\'apprentissage. D\'autres améliorations comme la normalisation par lots (*batch normalization*), l\'utilisation d\'un classifieur à plus haute résolution et l\'entraînement multi-échelles ont considérablement amélioré sa précision tout en conservant sa vitesse.

**SSD (Single Shot MultiBox Detector)**

Proposé à peu près en même temps que YOLOv2, SSD offre un autre point de vue sur la détection en une étape, en s\'attaquant de front au problème de la détection d\'objets à différentes échelles, une faiblesse des premières versions de YOLO.

> **Philosophie et architecture :** L\'innovation centrale de SSD est d\'effectuer des prédictions à partir de **plusieurs cartes de caractéristiques** à différentes résolutions le long du réseau.

**Réseau de base et couches auxiliaires :** SSD utilise un réseau de classification standard pré-entraîné (comme VGG16) comme \"colonne vertébrale\" (*backbone*) pour extraire des caractéristiques. À la fin de ce réseau de base, une série de couches convolutives supplémentaires sont ajoutées, dont la taille spatiale diminue progressivement.

**Prédictions multi-échelles :** Les prédictions de détection ne sont pas faites uniquement à la fin du réseau, mais à partir de plusieurs cartes de caractéristiques sélectionnées à différentes profondeurs. Les cartes de caractéristiques des couches plus profondes ont une faible résolution spatiale et un grand champ réceptif ; elles sont donc utilisées pour détecter les grands objets. Les cartes des couches moins profondes ont une haute résolution et sont utilisées pour détecter les petits objets.

**Boîtes par défaut (*Default Boxes*) :** Similairement aux boîtes d\'ancrage, SSD associe à chaque emplacement de chaque carte de caractéristiques un ensemble de boîtes par défaut avec différentes échelles et rapports d\'aspect. Pour chaque boîte par défaut, le réseau prédit un ensemble de décalages pour mieux l\'ajuster à l\'objet, ainsi que les scores de confiance pour chaque classe.

En combinant les prédictions de plusieurs échelles, SSD atteint un excellent équilibre entre vitesse et précision. Il est généralement plus précis que les premières versions de YOLO, en particulier pour les petits objets, tout en étant nettement plus rapide que Faster R-CNN.

### 47.3.4 Post-traitement : La suppression des non-maxima (NMS)

Un effet secondaire des détecteurs à une étape (et dans une moindre mesure, des RPN) est qu\'ils produisent un très grand nombre de détections candidates pour un même objet. Par exemple, plusieurs cellules de la grille de YOLO ou plusieurs boîtes par défaut de SSD peuvent détecter le même objet avec des scores de confiance élevés et des boîtes légèrement différentes. Il est donc nécessaire d\'appliquer une étape de post-traitement pour filtrer ces détections redondantes et ne conserver que la meilleure boîte pour chaque objet. Cette technique est appelée **suppression des non-maxima (NMS)**.

L\'algorithme NMS est une procédure de regroupement avide (*greedy*) qui fonctionne comme suit :

> Prendre la liste de toutes les boîtes prédites pour une classe donnée, avec leurs scores de confiance.
>
> Écarter toutes les boîtes dont le score est inférieur à un certain seuil de confiance.
>
> Trier les boîtes restantes par score de confiance, du plus élevé au plus bas.
>
> Sélectionner la boîte avec le score le plus élevé et l\'ajouter à la liste des prédictions finales.
>
> Calculer l\'IoU de cette boîte avec toutes les autres boîtes restantes dans la liste.
>
> Supprimer de la liste toutes les boîtes qui ont un IoU avec la boîte sélectionnée supérieur à un seuil NMS (par exemple, 0.5).
>
> Répéter les étapes 4 à 6 jusqu\'à ce que la liste des boîtes à traiter soit vide.

Ce processus est répété pour chaque classe d\'objet, garantissant qu\'un seul objet ne génère qu\'une seule détection finale.

### Tableau comparatif : Architectures de détection d\'objets

Le choix d\'une architecture de détection d\'objets dépend fortement des contraintes de l\'application. Le tableau ci-dessous résume les caractéristiques, forces et faiblesses des trois principales familles de détecteurs, illustrant le compromis fondamental entre vitesse et précision.

  -------------------------- ------------------------------------------------------------------- -------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------
  Caractéristique            Faster R-CNN (Deux Étapes)                                          YOLO (Une Étape)                                                                             SSD (Une Étape)

  **Principe**               Propositions de régions (RPN) + Classification.                     Régression directe sur une grille.                                                           Prédictions sur des cartes de caractéristiques multi-échelles.

  **Vitesse (FPS)**          Lente (\~5-7 FPS)                                                   Très rapide (les versions modernes dépassent 100 FPS)                                        Rapide (\~22-59 FPS)

  **Précision (mAP)**        Très élevée (souvent la référence en termes de précision).          Bonne à très bonne (les versions modernes sont très compétitives).                           Très bonne, souvent un excellent compromis vitesse/précision.

  **Force principale**       Précision maximale, excellente performance sur les petits objets.   Vitesse temps réel, utilise le contexte global de l\'image.                                  Bon équilibre vitesse/précision, bonne gestion native des objets de tailles variées.

  **Faiblesse principale**   Lenteur, architecture complexe à entraîner et à déployer.           Les premières versions étaient moins précises sur les petits objets ou les objets groupés.   Moins performant que Faster R-CNN sur les très petits objets.
  -------------------------- ------------------------------------------------------------------- -------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------

Ce tableau met en évidence la dynamique du domaine : alors que Faster R-CNN a longtemps été le roi de la précision, les architectures à une étape comme YOLO et SSD ont continuellement amélioré leur précision au fil des versions, réduisant l\'écart tout en conservant leur avantage de vitesse, ce qui les rend de plus en plus dominantes pour une large gamme d\'applications pratiques.

## 47.4 Segmentation d\'images : Comprendre la scène au niveau du pixel

Alors que la détection d\'objets se contente de localiser des objets à l\'aide de boîtes englobantes rectangulaires, de nombreuses applications exigent une compréhension beaucoup plus fine et détaillée de la scène. La **segmentation d\'images** répond à ce besoin en allant au-delà des boîtes pour assigner une étiquette à **chaque pixel** de l\'image. Cette tâche, aussi appelée prédiction dense, représente l\'un des niveaux de compréhension de scène les plus élevés en vision par ordinateur. Elle est cruciale pour des domaines comme la conduite autonome (où il faut délimiter précisément la route, les trottoirs, les piétons), l\'imagerie médicale (pour délimiter les tumeurs ou les organes) et l\'édition d\'images.

Cette section explore les architectures de réseaux de neurones profonds qui ont permis de résoudre ce problème complexe. Nous commencerons par distinguer les deux principales variantes de la tâche : la segmentation **sémantique** et la segmentation d\'**instance**. Nous étudierons ensuite l\'architecture pionnière, le **Réseau Entièrement Convolutif (FCN)**, qui a démontré comment transformer un réseau de classification en un puissant outil de segmentation. Enfin, nous nous concentrerons sur l\'architecture **U-Net**, une conception élégante et symétrique qui est devenue la norme de facto dans de nombreux domaines, en particulier en imagerie biomédicale. L\'analyse de U-Net révélera l\'importance capitale des **connexions résiduelles (*skip connections*)**, un mécanisme architectural qui résout une tension fondamentale dans les réseaux profonds : la nécessité de combiner l\'information sémantique de haut niveau (\"ce qu\'est l\'objet\") avec l\'information spatiale de bas niveau (\"où il se trouve précisément\").

### 47.4.1 Au-delà des boîtes : Définitions

La segmentation d\'images se décline en plusieurs variantes, chacune avec un objectif légèrement différent. Les deux plus importantes sont la segmentation sémantique et la segmentation d\'instance.

> **Segmentation Sémantique :** L\'objectif de la segmentation sémantique est d\'assigner à chaque pixel de l\'image une étiquette de classe correspondante. Par exemple, dans une scène de rue, tous les pixels appartenant à une voiture seront étiquetés comme \"voiture\", tous les pixels de la route comme \"route\", et tous les pixels du ciel comme \"ciel\". La caractéristique principale de la segmentation sémantique est qu\'elle ne distingue pas les différentes instances d\'une même classe. S\'il y a trois voitures dans la scène, tous leurs pixels seront regroupés sous la même étiquette \"voiture\". C\'est une tâche de classification au niveau du pixel.
>
> **Segmentation d\'Instance :** La segmentation d\'instance est une tâche plus complexe qui combine les objectifs de la détection d\'objets et de la segmentation sémantique. Elle vise non seulement à classifier chaque pixel, mais aussi à identifier et à séparer chaque instance d\'objet. Dans notre scène de rue, chaque voiture serait non seulement segmentée, mais aussi identifiée de manière unique : \"voiture_1\", \"voiture_2\", \"voiture_3\". Cela permet de compter les objets et de les analyser individuellement.
>
> **Segmentation Panoptique :** Plus récemment, le concept de segmentation panoptique a été introduit pour unifier les deux tâches précédentes. L\'objectif est de produire une segmentation complète et cohérente de l\'image où chaque pixel se voit attribuer à la fois une étiquette sémantique et un identifiant d\'instance. Cette approche fait la distinction entre les \"choses\" (*things*), qui sont des objets comptables (comme les voitures, les piétons) et qui nécessitent une segmentation d\'instance, et le \"fourbi\" (*stuff*), qui sont des régions amorphes de fond (comme le ciel, l\'herbe, la route) et qui nécessitent une segmentation sémantique.

Cette section se concentrera principalement sur les architectures fondamentales de la segmentation sémantique, FCN et U-Net, car elles constituent la base de nombreuses autres méthodes.

### 47.4.2 FCN (Fully Convolutional Network) : Le pionnier de la segmentation de bout en bout

Avant 2015, la segmentation sémantique était souvent abordée avec des pipelines complexes impliquant l\'extraction de caractéristiques au niveau de patchs d\'image, suivie d\'une classification. Le travail de Long, Shelhamer et Darrell sur les **Réseaux Entièrement Convolutifs (FCN)** a constitué une percée majeure en proposant une approche de bout en bout.

**L\'idée clé**

Les réseaux de neurones convolutifs (CNNs) utilisés pour la classification d\'images, comme AlexNet ou VGG, sont excellents pour apprendre des hiérarchies de caractéristiques. Cependant, leurs dernières couches sont généralement des couches entièrement connectées (*fully connected layers*), qui traitent le vecteur de caractéristiques aplati et produisent une seule prédiction pour toute l\'image. Ce faisant, elles perdent toute l\'information spatiale qui est cruciale pour la segmentation.

L\'idée fondamentale du FCN est de prendre un réseau de classification éprouvé et de le transformer en un réseau entièrement convolutif, capable de produire une carte de prédictions denses (une carte de segmentation) plutôt qu\'un seul vecteur de probabilités. Pour ce faire, les couches entièrement connectées sont remplacées par des couches de convolution 1x1. Une couche de convolution 1x1 est mathématiquement équivalente à une couche entièrement connectée lorsqu\'elle est appliquée à une carte de caractéristiques, mais elle a l\'avantage de préserver la structure spatiale et de pouvoir fonctionner sur des entrées de taille arbitraire.

**Architecture**

L\'architecture d\'un FCN peut être comprise comme une structure encodeur-décodeur :

> **Encodeur (Chemin de sous-échantillonnage) :** La première partie du réseau est un CNN de classification standard (par exemple, VGG16) sans ses couches entièrement connectées. Cette partie agit comme un encodeur. À travers une série de couches de convolution et de pooling (ou de convolutions à foulée), la résolution spatiale de l\'image est progressivement réduite, tandis que le nombre de canaux de caractéristiques augmente. Les couches profondes de l\'encodeur capturent des informations sémantiques de haut niveau et contextuelles (\"quoi\"), mais au détriment de la résolution spatiale (\"où\").
>
> **Décodeur (Chemin de sur-échantillonnage) :** La carte de caractéristiques finale de l\'encodeur est de petite taille spatiale mais sémantiquement riche. Pour obtenir une carte de segmentation de la même taille que l\'image d\'entrée, il faut la sur-échantillonner. FCN utilise une technique de sur-échantillonnage appris appelée **convolution transposée** (parfois appelée à tort déconvolution). La convolution transposée effectue l\'opération inverse d\'une convolution normale, en projetant chaque caractéristique de la carte de basse résolution vers une région plus grande dans la carte de haute résolution, avec des poids qui sont appris pendant l\'entraînement.

**Amélioration avec les connexions résiduelles (*Skip Connections*)**

Un sur-échantillonnage direct de la carte de caractéristiques finale (qui peut avoir une résolution 32 fois plus petite que l\'entrée) produit des cartes de segmentation très grossières et floues, car une grande partie de l\'information de localisation fine a été perdue dans l\'encodeur.

Pour remédier à cela, FCN a introduit le concept de **connexions résiduelles**. L\'idée est de combiner les informations des couches profondes (sémantiques mais grossières) avec celles des couches moins profondes (détaillées mais moins sémantiques).

> **FCN-32s :** C\'est le modèle de base qui sur-échantillonne la dernière couche par un facteur de 32.
>
> **FCN-16s :** Ce modèle prend la sortie de la dernière couche, la sur-échantillonne par un facteur de 2, puis la fusionne (par addition élément par élément) avec la carte de caractéristiques de l\'avant-dernière couche de pooling (pool4). Le résultat est ensuite sur-échantillonné par un facteur de 16.
>
> **FCN-8s :** Le processus est répété une fois de plus, en fusionnant la sortie de FCN-16s (avant son dernier sur-échantillonnage) avec la carte de caractéristiques de la couche de pooling précédente (pool3).

Ces connexions résiduelles permettent de raffiner progressivement les prédictions en réintégrant des détails de localisation plus fins, conduisant à des segmentations beaucoup plus précises au niveau des frontières des objets.

### 47.4.3 U-Net : L\'architecture symétrique pour la précision

Développée en 2015 par Ronneberger, Fischer et Brox, l\'architecture U-Net a été initialement conçue pour la segmentation d\'images biomédicales, un domaine où les données d\'entraînement sont souvent rares et où la précision des contours des structures (comme les cellules) est d\'une importance capitale. U-Net a repris et systématisé l\'idée des connexions résiduelles de FCN en proposant une architecture élégante, symétrique et extrêmement efficace.

L\'architecture U-Net n\'est pas simplement une amélioration de FCN ; elle incarne un principe de conception puissant. Si un réseau apprend à compresser l\'information spatiale en une représentation sémantique de manière hiérarchique (l\'encodage), alors la reconstruction de l\'information spatiale (le décodage) devrait suivre un chemin symétrique et tout aussi hiérarchique. Cette symétrie est la clé de sa capacité à reconstruire des segmentations précises.

**Architecture**

Comme son nom l\'indique, l\'architecture a une forme de \"U\". Elle se compose de deux chemins principaux :

> **Chemin de Contraction (Encodeur) :** La partie gauche du \"U\" est un chemin de contraction typique. Il est constitué de blocs répétés, chaque bloc contenant deux convolutions 3x3 (avec activation ReLU), suivies d\'une opération de max pooling 2x2 avec une foulée de 2 pour le sous-échantillonnage. À chaque étape de sous-échantillonnage, la résolution spatiale est divisée par deux et le nombre de canaux de caractéristiques est doublé. Ce chemin permet de capturer le contexte global de l\'image.
>
> **Chemin d\'Expansion (Décodeur) :** La partie droite du \"U\" est un chemin d\'expansion symétrique. Il vise à reconstruire une carte de segmentation à la pleine résolution. Chaque étape du décodeur comprend :

Une opération de **sur-échantillonnage** (par exemple, une convolution transposée 2x2) qui divise par deux le nombre de canaux de caractéristiques et double la résolution spatiale.

Une **concaténation** avec la carte de caractéristiques correspondante du chemin de contraction. C\'est l\'élément central de U-Net.

Deux convolutions 3x3 (avec activation ReLU) pour affiner les caractéristiques.

> **Le rôle central des connexions résiduelles (*Skip Connections*) :** La caractéristique la plus distinctive et la plus importante de U-Net est la manière dont elle met en œuvre les connexions résiduelles. À chaque niveau du chemin d\'expansion, la carte de caractéristiques sur-échantillonnée est **concaténée** avec la carte de caractéristiques de même résolution provenant du chemin de contraction. Ces connexions (représentées par les flèches grises horizontales dans les diagrammes de U-Net) sont massives et permettent au réseau de propager directement l\'information contextuelle de haut niveau vers les couches de résolution supérieure.

Le succès de U-Net est presque entièrement attribuable à ces connexions. Elles résolvent une tension fondamentale dans les réseaux convolutifs. En descendant dans l\'encodeur, le réseau apprend **\"ce qui\"** se trouve dans l\'image (les caractéristiques sémantiques) mais perd l\'information précise de **\"où\"** cela se trouve (la localisation spatiale). Le chemin du décodeur, partant de la représentation la plus sémantique et compressée, sait \"quoi\" reconstruire, mais peine à le localiser avec précision. Les connexions résiduelles agissent comme des ponts, transportant l\'information de \"où\" (les cartes de caractéristiques à haute résolution des premières couches de l\'encodeur, riches en détails de contours) directement aux étapes correspondantes du décodeur. Le décodeur peut alors utiliser cette information de localisation précise pour affiner les frontières de la représentation sémantique qu\'il est en train de reconstruire. C\'est cette fusion du \"quoi\" et du \"où\" à de multiples échelles qui confère à U-Net sa puissance et sa capacité à produire des segmentations très précises, même avec peu de données d\'entraînement.

La couche finale du réseau est généralement une convolution 1x1 qui mappe le nombre de canaux de caractéristiques au nombre de classes de segmentation désirées, suivie d\'une fonction d\'activation (par exemple, softmax) pour produire les probabilités de classe pour chaque pixel.

## 47.5 Reconstruction 3D : De la 2D à la perception de la profondeur

Jusqu\'à présent, notre exploration de la vision par ordinateur s\'est principalement concentrée sur l\'interprétation d\'images bidimensionnelles. Cependant, le monde qui nous entoure est tridimensionnel. La projection de cette réalité 3D sur un capteur d\'image 2D est un processus qui, par nature, perd une information cruciale : la **profondeur**. L\'un des objectifs les plus ambitieux et les plus fondamentaux de la vision par ordinateur est d\'inverser ce processus, c\'est-à-dire d\'inférer la structure tridimensionnelle d\'une scène à partir d\'une ou plusieurs de ses projections bidimensionnelles. Cette tâche est connue sous le nom de **reconstruction 3D**.

Cette section finale introduit les principes de base de la reconstruction 3D en se concentrant sur le cas le plus fondamental et le plus intuitif : la **vision stéréoscopique**. Nous nous inspirerons de la vision humaine, où nos deux yeux, capturant des images légèrement différentes de la même scène, permettent à notre cerveau de percevoir le relief et la profondeur. Nous verrons comment ce principe peut être formalisé mathématiquement par la

**géométrie épipolaire**, un cadre élégant qui impose des contraintes géométriques puissantes sur le problème. Cette géométrie transforme le défi apparemment insurmontable de la mise en correspondance de pixels entre deux images en un problème de recherche beaucoup plus simple. Enfin, nous définirons le concept de **disparité** et montrerons comment sa mesure permet de calculer directement une carte de profondeur de la scène. Cette section illustre parfaitement comment des principes géométriques purs, combinés aux techniques d\'extraction de caractéristiques et de mise en correspondance, permettent de résoudre un problème de perception fondamental et de faire un pas de plus vers une vision artificielle véritablement complète.

### 47.5.1 Le défi de la troisième dimension

Lorsqu\'une caméra capture une image, elle effectue une projection en perspective : tous les points 3D situés sur une même droite passant par le centre optique de la caméra sont projetés sur le même pixel 2D dans l\'image. L\'information de la distance de ces points par rapport à la caméra est donc perdue. Pour récupérer cette information de profondeur, une seule image ne suffit pas. Il faut au moins deux vues de la même scène, prises depuis des points de vue différents.

C\'est précisément le principe de la **vision stéréoscopique humaine**. L\'écartement moyen d\'environ 6.5 cm entre nos deux yeux fait que chacun perçoit une image légèrement différente de l\'autre. Cette petite différence, appelée **disparité binoculaire**, est exploitée par notre cerveau pour fusionner les deux images et créer une sensation de relief et de profondeur, un processus connu sous le nom de **stéréopsie**.

En vision par ordinateur, on cherche à imiter ce processus en utilisant deux caméras (ou une seule caméra qui se déplace) pour capturer une paire d\'images stéréo. Le défi principal consiste alors à résoudre le **problème de la correspondance** : pour un pixel donné dans l\'image gauche, il faut trouver le pixel correspondant dans l\'image droite, c\'est-à-dire le pixel qui est la projection du même point 3D dans la scène. Une fois cette correspondance établie, la profondeur du point 3D peut être calculée par triangulation.

### 47.5.2 Fondements de la vision stéréoscopique

Le problème de la correspondance est difficile. Un patch de pixels dans l\'image gauche peut avoir de nombreux patchs similaires dans l\'image droite, ce qui peut conduire à des appariements erronés. Heureusement, la géométrie de la configuration à deux caméras impose une contrainte très forte qui simplifie considérablement la recherche. Cette contrainte est décrite par la **géométrie épipolaire**.

**La géométrie épipolaire : Le cadre mathématique**

La géométrie épipolaire décrit la relation géométrique projective entre deux vues d\'une même scène 3D. Elle ne dépend que des paramètres intrinsèques des caméras et de leur position et orientation relatives, mais pas de la structure de la scène elle-même.

Considérons une configuration stéréo avec deux caméras, une gauche et une droite, dont les centres optiques sont OL​ et OR​.

> **Ligne de base :** La droite qui passe par les deux centres optiques OL​ et OR​ est appelée la ligne de base.
>
> **Épipôles :** L\'**épipôle** gauche, eL​, est la projection du centre optique de la caméra droite, OR​, sur le plan image de la caméra gauche. Symétriquement, l\'épipôle droit, eR​, est la projection de OL​ sur le plan image de la caméra droite. Les épipôles sont donc les points d\'intersection de la ligne de base avec les plans images.
>
> **Plan épipolaire :** Soit P un point quelconque dans la scène 3D. Le plan défini par les trois points P, OL​ et OR​ est appelé le **plan épipolaire**. Il existe une famille de plans épipolaires, tous pivotant autour de la ligne de base.
>
> **Lignes épipolaires :** L\'intersection d\'un plan épipolaire avec le plan image de la caméra gauche est une droite appelée **ligne épipolaire** gauche. De même, son intersection avec le plan image droit est la ligne épipolaire droite. Toutes les lignes épipolaires d\'une image passent par l\'épipôle de cette image.

**La contrainte épipolaire**

L\'importance de cette géométrie réside dans la **contrainte épipolaire**. Considérons un point 3D P qui se projette en pL​ sur l\'image gauche et en pR​ sur l\'image droite. Par construction, le point P, les centres optiques OL​ et OR​, et les projections pL​ et pR​ se trouvent tous sur le même plan épipolaire.

Cela a une conséquence fondamentale : si nous connaissons la position de pL​ dans l\'image gauche, nous savons que son point correspondant pR​ dans l\'image droite doit se trouver sur la ligne épipolaire associée au plan (P,OL​,OR​). Autrement dit, la recherche du point correspondant pR​ n\'a pas besoin de se faire sur toute l\'image 2D droite, mais seulement le long de cette ligne 1D. Cette contrainte réduit considérablement la complexité et l\'ambiguïté du problème de correspondance.

**La Matrice Fondamentale**

La relation géométrique décrite ci-dessus peut être capturée algébriquement par une matrice 3x3 appelée la **matrice fondamentale**, notée F. Si les coordonnées homogènes des points correspondants sont pL​ et pR​, alors la contrainte épipolaire s\'exprime par l\'équation  :

pRT​FpL​=0

Cette matrice F encapsule toute la géométrie épipolaire du système stéréo. Elle peut être calculée à partir d\'un ensemble d\'au moins 7 ou 8 paires de points correspondants entre les deux images, sans qu\'il soit nécessaire de connaître les paramètres des caméras. Une fois F connue, pour n\'importe quel point pL​ de l\'image gauche, la ligne épipolaire correspondante lR​ dans l\'image droite est donnée par lR​=FpL​.

### 47.5.3 Calcul de la carte de disparité

Dans de nombreuses applications pratiques, les caméras stéréo sont montées de telle sorte que leurs plans images sont coplanaires et leurs axes optiques sont parallèles. C\'est ce qu\'on appelle une **configuration stéréo rectifiée**. Dans ce cas particulier, la géométrie épipolaire se simplifie énormément : toutes les lignes épipolaires sont des droites horizontales et alignées entre les deux images. La recherche du point correspondant à pL​=(xL​,yL​) se fait donc simplement le long de la même ligne yR​=yL​ dans l\'image droite.

**Définition de la disparité**

Dans une configuration rectifiée, la **disparité** d pour un point est simplement la différence de coordonnées horizontales entre sa position dans l\'image gauche et sa position dans l\'image droite  :

d=xL​−xR​

**Relation entre disparité et profondeur**

La disparité est directement et inversement proportionnelle à la profondeur Z du point 3D par rapport au plan des caméras. La relation est donnée par la formule de triangulation simple :

Z=df⋅B​

où f est la distance focale des caméras (supposées identiques) et B est la longueur de la ligne de base (la distance entre les deux centres optiques).

Cette relation est intuitive :

> Un objet très éloigné (Z→∞) aura des projections presque identiques dans les deux yeux, donc une disparité très faible (d→0).
>
> Un objet très proche (Z→0) aura des projections très différentes, donc une disparité élevée.

**La carte de disparité**

L\'objectif d\'un algorithme de stéréovision est de calculer la disparité pour chaque pixel de l\'image (ou du moins, pour une grande partie d\'entre eux). Le résultat est une **carte de disparité**, qui est une image en niveaux de gris où l\'intensité de chaque pixel est proportionnelle à la disparité calculée à cet endroit. Les objets proches apparaissent brillants (disparité élevée) et les objets lointains apparaissent sombres (disparité faible). Cette carte est une représentation dense de la structure 3D de la scène, équivalente à une carte de profondeur.

Le calcul de la carte de disparité implique généralement trois étapes :

> **Calcul du coût de correspondance :** Pour chaque pixel de l\'image gauche et pour chaque disparité possible le long de la ligne épipolaire, on calcule un coût de correspondance (par exemple, la somme des différences au carré ou la corrélation croisée normalisée sur une petite fenêtre autour des pixels).
>
> **Agrégation du coût :** Le coût est agrégé dans un voisinage pour obtenir une mesure plus robuste.
>
> **Optimisation/Sélection de la disparité :** Pour chaque pixel, on sélectionne la disparité qui minimise le coût agrégé. Des algorithmes plus avancés utilisent des techniques d\'optimisation globale (comme les coupes de graphe ou la programmation dynamique) pour trouver une carte de disparité lisse et cohérente.

La reconstruction 3D à partir de la stéréovision est un domaine actif de recherche, avec des méthodes modernes basées sur l\'apprentissage profond qui apprennent à prédire directement les cartes de disparité à partir de paires d\'images stéréo, souvent en utilisant des architectures de type encodeur-décodeur similaires à celles vues pour la segmentation. Elle représente une convergence de nombreuses techniques de vision, de l\'extraction de caractéristiques locales pour la mise en correspondance à l\'apprentissage de modèles denses, pour atteindre l\'un des objectifs ultimes de la discipline : percevoir le monde en trois dimensions.

# Chapitre 48 : Infographie et Visualisation

## Introduction

L\'infographie, ou la synthèse d\'images par ordinateur, est une discipline qui se situe à la confluence de l\'informatique, des mathématiques, de la physique et de l\'art. Son objectif fondamental est de créer une représentation visuelle, généralement une image bidimensionnelle, à partir d\'une description numérique et abstraite d\'une scène tridimensionnelle. Loin d\'être un simple processus de production d\'images, elle représente une quête pour simuler la réalité visuelle, ou pour créer des mondes stylisés, en modélisant l\'interaction complexe de la lumière avec la matière. Ce chapitre a pour ambition de démystifier l\'ensemble de ce processus, en disséquant la séquence d\'opérations logiques et mathématiques qui transforment un ensemble de données géométriques et de propriétés de surface en une image photoréaliste ou stylisée.

Notre exploration suivra un parcours thématique qui reflète la progression logique de la synthèse d\'images. Nous débuterons par l\'architecture globale de ce processus, le **pipeline de rendu graphique**. Cette \"chaîne de montage\" conceptuelle, implémentée au cœur des processeurs graphiques (GPU), décompose la tâche colossale de la création d\'une image en une série d\'étapes gérables, allant de la description de la scène à la couleur finale de chaque pixel.

Ensuite, nous nous pencherons sur la matière première de tout monde virtuel : sa représentation. La section sur la **modélisation géométrique et les textures** explorera comment les objets sont construits numériquement, le plus souvent sous forme de maillages de polygones, et comment leur apparence de surface est enrichie de détails et de couleurs grâce à l\'application d\'images 2D appelées textures.

Le cœur de ce chapitre sera consacré à l\'étude des deux grandes philosophies qui gouvernent l\'étape cruciale du rendu. D\'une part, la **rastérisation**, un paradigme optimisé pour la vitesse et l\'interactivité, qui projette la géométrie 3D sur un écran 2D avant de déterminer la couleur de chaque pixel. Cette approche, qui domine le domaine du temps réel comme les jeux vidéo, sera analysée en profondeur, avec un accent particulier sur les transformations géométriques et les modèles d\'illumination locaux tels que le modèle de Phong. D\'autre part, nous explorerons le

**lancer de rayons (ray tracing)**, une approche radicalement différente qui simule le trajet physique des rayons lumineux à travers la scène. Bien que plus coûteuse en calculs, cette méthode permet d\'atteindre un niveau de réalisme inégalé en modélisant nativement des phénomènes complexes comme les réflexions, les réfractions et les ombres douces, jetant ainsi les bases de l\'illumination globale.

Enfin, nous introduirons la dimension temporelle en abordant les principes fondamentaux de l\'**animation et de la simulation physique**. Nous verrons comment le mouvement est créé, que ce soit par le contrôle direct de l\'artiste via l\'animation par images clés ou par l\'émergence de comportements réalistes grâce à la simulation des lois de la dynamique newtonienne.

À travers ce parcours, nous verrons que l\'infographie est une discipline d\'abstractions et de compromis, où la rigueur mathématique et la simulation physique sont constamment mises en balance avec l\'efficacité algorithmique et les contraintes matérielles.

## 48.1 Le Pipeline de Rendu Graphique : De la Scène à l\'Image

Le processus de transformation d\'une description de scène 3D en une image 2D est une tâche d\'une complexité considérable. Pour la rendre gérable et, surtout, pour l\'exécuter à des vitesses permettant l\'interactivité, l\'infographie moderne s\'appuie sur une abstraction puissante : le pipeline de rendu graphique. Ce modèle conceptuel décompose le problème en une série d\'étapes séquentielles, chacune spécialisée dans une tâche précise.

### 48.1.1 La Chaîne de Montage Conceptuelle

Le pipeline de rendu peut être visualisé comme une chaîne de montage industrielle. En entrée, on fournit les matières premières : des données décrivant la géométrie des objets (listes de sommets), les matériaux qui les recouvrent (textures, couleurs), la position et les caractéristiques des sources lumineuses, et le point de vue de l\'observateur (la caméra). En sortie, on obtient le produit fini : une image 2D, c\'est-à-dire un tableau de pixels colorés.

Cette abstraction n\'est pas purement théorique; elle est directement incarnée dans l\'architecture matérielle des unités de traitement graphique (GPU). Chaque étape du pipeline correspond à des unités de calcul spécialisées sur la puce du GPU, conçues pour exécuter leur tâche spécifique avec une efficacité maximale. Cette spécialisation matérielle est la clé des performances phénoménales des systèmes graphiques modernes, capables de traiter des milliards de sommets et de pixels par seconde.

Conceptuellement, le pipeline se divise en deux grandes phases :

> **La Phase Géométrique :** Cette phase opère sur les primitives géométriques de la scène (principalement des triangles) et leurs sommets. Son rôle est de déterminer où et comment ces primitives apparaîtront à l\'écran. Elle implique des transformations mathématiques, des projections et le découpage de la géométrie qui n\'est pas visible.
>
> **La Phase de Rastérisation et des Pixels :** Une fois la géométrie projetée en 2D, cette phase prend le relais. Elle convertit les primitives 2D en un ensemble de \"fragments\" (des pixels potentiels), puis exécute des calculs complexes pour déterminer la couleur finale de chaque pixel visible à l\'écran.

Au fil des deux dernières décennies, ce pipeline a connu une évolution fondamentale. Initialement rigide et configurable uniquement par des états prédéfinis (un pipeline à \"fonction fixe\"), il est devenu de plus en plus programmable. L\'introduction des \"nuanceurs\" (shaders) --- de petits programmes exécutés directement sur le GPU à des étapes clés --- a transformé le rendu graphique. Ce passage d\'un modèle de configuration matérielle à un modèle de programmation logicielle a transféré un immense pouvoir créatif et algorithmique aux développeurs, permettant une explosion de l\'innovation dans les techniques de rendu, les effets visuels et le réalisme.

### 48.1.2 L\'Étape d\'Application (Application Stage)

La toute première étape du pipeline se déroule en dehors du GPU, sur le processeur central (CPU) de l\'ordinateur. C\'est l\'étape d\'application, où réside la logique du programme qui utilise les graphismes : un jeu vidéo, un logiciel de conception assistée par ordinateur (CAO), un visualiseur de données, etc.

Les responsabilités de cette étape sont vastes et variées :

> **Gestion de la Scène :** C\'est ici que la scène 3D est assemblée. Cela peut impliquer le chargement de modèles 3D à partir de fichiers, la gestion d\'une structure de données de scène (comme un graphe de scène) et la détermination des objets qui sont potentiellement visibles.
>
> **Logique et Simulation :** L\'étape d\'application gère les interactions de l\'utilisateur, met à jour l\'état du monde virtuel, exécute des simulations physiques (comme la trajectoire d\'un projectile ou le comportement d\'un tissu), détecte les collisions entre objets et gère l\'intelligence artificielle des personnages non-joueurs.
>
> **Préparation des Données pour le Rendu :** La tâche cruciale de cette étape est de préparer et d\'envoyer au GPU toutes les données nécessaires pour le rendu de l\'image suivante. Cela inclut les maillages géométriques (sous forme de tampons de sommets ou *vertex buffers*), les textures, les paramètres des matériaux, les positions et propriétés des lumières, et la position et l\'orientation de la caméra.

L\'étape d\'application est la plus flexible de tout le pipeline, car elle est entièrement contrôlée par le logiciel. Cependant, la communication entre le CPU et le GPU peut devenir un goulot d\'étranglement. Une application performante doit minimiser le nombre de commandes envoyées au GPU et transférer les données de manière efficace, souvent en téléversant de grandes quantités de données à l\'avance et en ne mettant à jour que ce qui change d\'une image à l\'autre.

### 48.1.3 L\'Étape de Géométrie (Geometry Stage)

Une fois que les données de la scène sont transférées au GPU, l\'étape de géométrie commence. Cette phase est entièrement prise en charge par le matériel du GPU et a pour objectif de traiter les informations de sommets pour préparer les primitives au rendu.

#### Le Nuanceur de Sommets (Vertex Shader)

Le cœur de l\'étape de géométrie est le **nuanceur de sommets** (*vertex shader*). C\'est un programme qui est exécuté une fois pour chaque sommet de chaque objet à rendre. Sa responsabilité principale et obligatoire est d\'effectuer les transformations géométriques. Il prend en entrée les attributs d\'un sommet (au minimum, sa position dans l\'espace local de l\'objet) et doit produire en sortie la position de ce même sommet dans un espace de coordonnées spécial appelé \"espace de découpage\" (

*clip space*). Ce processus, détaillé mathématiquement dans la section 48.3.1, implique typiquement une série de multiplications par des matrices de transformation (Modèle, Vue, Projection).

Le nuanceur de sommets peut également effectuer d\'autres opérations par sommet, comme :

> Transformer les normales de surface pour les calculs d\'éclairage.
>
> Générer ou transformer les coordonnées de texture.
>
> Effectuer des calculs d\'éclairage par sommet (comme dans l\'ombrage de Gouraud).
>
> Réaliser des déformations animées de la géométrie (morphing, animation de squelette).

Il est important de noter qu\'un nuanceur de sommets opère dans l\'isolement : il traite un sommet à la fois et n\'a aucune information sur les autres sommets de la primitive ou de l\'objet.

#### Étapes Optionnelles : Tessellation et Nuanceurs de Géométrie

Les pipelines graphiques modernes (comme ceux définis par DirectX 11+ et OpenGL 4+) incluent des étapes optionnelles entre le nuanceur de sommets et la rastérisation, offrant une flexibilité accrue pour manipuler la géométrie à la volée.

> **Tessellation :** Cette étape permet de subdiviser dynamiquement des primitives de bas niveau (souvent des patchs) en une géométrie plus fine, composée de nombreux triangles. Elle est contrôlée par deux types de nuanceurs : le **nuanceur de coque** (*hull shader*), qui détermine le niveau de subdivision, et le **nuanceur de domaine** (*domain shader*), qui calcule la position des nouveaux sommets générés. La tessellation est extrêmement utile pour implémenter des systèmes de niveau de détail (LOD) adaptatifs, où les objets proches de la caméra sont rendus avec une haute résolution polygonale, qui diminue à mesure qu\'ils s\'éloignent.
>
> **Nuanceur de Géométrie (Geometry Shader) :** Exécuté après le nuanceur de sommets (ou la tessellation), le nuanceur de géométrie est unique car il opère sur une primitive entière (par exemple, les trois sommets d\'un triangle). Il a la capacité de modifier, de supprimer ou même de générer de nouvelles primitives. Par exemple, un nuanceur de géométrie pourrait prendre un point en entrée et générer un quad orienté vers la caméra (\
> *billboard*), ou prendre un triangle et en extruder les arêtes pour créer des \"nageoires\" de volume pour des techniques d\'ombrage avancées.

#### Le Découpage (Clipping)

Après que les sommets ont été transformés en espace de découpage, le matériel effectue une opération à fonction fixe appelée **découpage** (*clipping*). L\'espace de découpage définit un volume de vue canonique (souvent un cube ou un prisme rectangulaire). Toute primitive qui se trouve entièrement en dehors de ce volume est simplement rejetée. Les primitives qui traversent les frontières du volume sont découpées, c\'est-à-dire que de nouveaux sommets sont créés le long des plans de découpage pour former de nouvelles primitives qui se trouvent entièrement à l\'intérieur du volume de vue. Ce processus garantit que seules les géométries potentiellement visibles poursuivent leur chemin dans le pipeline, économisant ainsi des ressources de calcul précieuses.

### 48.1.4 L\'Étape de Rastérisation (Rasterization Stage)

L\'étape de rastérisation marque une transition fondamentale : on passe du monde continu de la géométrie (points, lignes, triangles) au monde discret de l\'image (une grille de pixels). La rastérisation, aussi appelée conversion de balayage (*scan conversion*), est le processus qui prend une primitive 2D projetée (après les transformations et le découpage) et détermine quels pixels de l\'écran sont \"couverts\" par cette primitive.

Pour chaque primitive, la rastérisation génère un ensemble de **fragments**. Un fragment peut être considéré comme un \"pixel potentiel\". Il correspond à un pixel spécifique sur l\'écran et contient toutes les informations nécessaires pour déterminer la couleur finale de ce pixel. Ces informations sont obtenues en interpolant les attributs des sommets de la primitive (comme la couleur, la profondeur, les coordonnées de texture) sur toute sa surface. Par exemple, si un sommet d\'un triangle est rouge et un autre est bleu, un fragment situé à mi-chemin entre eux aura une couleur interpolée violette.

Cette étape est l\'une des plus optimisées du GPU. Elle est implémentée comme un circuit matériel à fonction fixe, non programmable, capable de traiter des milliards de triangles par seconde. Les algorithmes précis utilisés, comme ceux basés sur les fonctions de bord, sont conçus pour être massivement parallèles et efficaces.

### 48.1.5 L\'Étape des Pixels (Pixel Stage)

Une fois que la rastérisation a produit un flux de fragments pour chaque primitive, l\'étape des pixels (parfois appelée étape des opérations sur les fragments) prend le relais pour traiter ces fragments et, finalement, les écrire dans le tampon d\'image (*framebuffer*).

#### Le Nuanceur de Pixels (Pixel Shader)

Similaire au nuanceur de sommets, le **nuanceur de pixels** (ou **nuanceur de fragments**, *fragment shader*) est une autre étape entièrement programmable. Ce programme est exécuté pour chaque fragment généré par la rastérisation. Son rôle principal est de calculer la couleur finale du fragment.

En entrée, le nuanceur de pixels reçoit les attributs interpolés du fragment (coordonnées de texture, normale, couleur de sommet, etc.). Il a également accès aux textures et à d\'autres données globales de la scène (comme les propriétés des lumières). À partir de ces informations, il exécute un code qui peut être arbitrairement complexe pour produire une couleur de sortie (généralement une valeur RGBA). C\'est ici que la magie visuelle opère :

> **Application de textures :** Le nuanceur utilise les coordonnées de texture interpolées pour lire la couleur correspondante dans une image de texture.
>
> **Éclairage par pixel :** Il effectue des calculs d\'éclairage complexes (comme le modèle de Phong) en utilisant la normale interpolée, ce qui permet d\'obtenir des reflets spéculaires lisses et précis.
>
> **Effets spéciaux :** Brouillard, lueur, distorsions, et une myriade d\'autres effets sont implémentés dans le nuanceur de pixels.

Un nuanceur de pixels peut également décider d\'ignorer un fragment (par exemple, pour créer des découpes dans une texture), l\'empêchant ainsi de passer aux étapes suivantes.

#### Opérations par Fragment (Per-Fragment Operations)

Après l\'exécution du nuanceur de pixels, chaque fragment passe par une dernière série d\'opérations à fonction fixe avant de pouvoir potentiellement modifier un pixel dans le tampon d\'image. Ces tests sont cruciaux pour gérer correctement l\'occlusion et la transparence.

> **Test de Profondeur (Depth Test / Z-buffering) :** C\'est le mécanisme principal pour la détermination des surfaces cachées. Le GPU maintient un tampon de profondeur (*Z-buffer*), un tableau 2D qui stocke la valeur de profondeur du pixel le plus proche de la caméra dessiné jusqu\'à présent. Pour chaque fragment, sa profondeur interpolée est comparée à la valeur dans le Z-buffer. Si le fragment est plus proche, sa couleur est écrite dans le tampon d\'image et le Z-buffer est mis à jour avec la nouvelle profondeur. Sinon, le fragment est plus loin qu\'un autre déjà dessiné à cet emplacement, il est donc caché et simplement ignoré. Ce test est fondamental pour un rendu 3D correct.
>
> **Test de Stencil (Stencil Test) :** Un test similaire au test de profondeur, mais qui opère sur un tampon de \"pochoir\" (*stencil buffer*). Il permet des opérations plus complexes comme le masquage, la création de portails ou le rendu de volumes d\'ombre.
>
> **Mélange (Blending) :** Si un fragment passe tous les tests, il doit être combiné avec la couleur déjà présente dans le tampon d\'image. Pour les objets opaques, la nouvelle couleur remplace simplement l\'ancienne. Pour les objets transparents ou translucides, le **mélange alpha** est utilisé. La couleur du fragment est combinée avec la couleur existante en fonction de la valeur alpha (opacité) du fragment, créant ainsi des effets de transparence.

Ce n\'est qu\'après avoir réussi cette séquence finale de tests et d\'opérations qu\'un fragment devient enfin un pixel coloré dans l\'image finale, qui est ensuite affichée à l\'écran.

## 48.2 La Représentation du Monde Virtuel : Modélisation Géométrique et Textures

Avant de pouvoir rendre une scène, il faut d\'abord la décrire. La modélisation géométrique est le processus de définition de la forme des objets dans un espace tridimensionnel. Si la géométrie fournit le \"squelette\" d\'un objet, les textures fournissent sa \"peau\", ajoutant couleur, motif et détails de surface. Cette section explore les techniques fondamentales utilisées pour représenter la forme et l\'apparence des objets dans le monde virtuel.

### 48.2.1 La Fondation Polygonale : Le Maillage (Mesh)

La méthode la plus répandue et la plus universelle pour représenter la surface d\'un objet 3D est le **maillage polygonal** (*polygon mesh*). Un maillage est une collection d\'éléments géométriques simples qui, ensemble, approximant la forme d\'une surface, qu\'elle soit simple comme un cube ou complexe comme un personnage.

#### Les Composants d\'un Maillage

Un maillage est défini par trois types d\'éléments interconnectés  :

> **Sommets (Vertices) :** Ce sont les briques de base du maillage. Un sommet est un point dans l\'espace 3D, défini par ses coordonnées cartésiennes (x,y,z). Au-delà de sa position, un sommet est un conteneur pour divers **attributs** qui seront utilisés plus tard dans le pipeline de rendu. Ces attributs incluent typiquement :

**La normale de surface :** Un vecteur unitaire (N) perpendiculaire à la surface au niveau du sommet, essentiel pour les calculs d\'éclairage.

**Les coordonnées de texture :** Une paire de coordonnées (U,V) qui lie le sommet à un point sur une image de texture 2D.

**La couleur de sommet :** Une couleur (par exemple, RGBA) directement associée au sommet, utilisée pour des effets comme l\'ombrage de Gouraud.

> **Arêtes (Edges) :** Une arête est un segment de ligne qui relie deux sommets. Les arêtes définissent la structure filaire (*wireframe*) de l\'objet.
>
> **Faces (Polygons) :** Une face est une surface plane définie par une séquence ordonnée de sommets. L\'ensemble des faces constitue la surface visible de l\'objet. Bien que des polygones avec un nombre arbitraire de côtés (n-gones) soient possibles dans les logiciels de modélisation, pour le rendu, ils sont presque universellement décomposés en primitives plus simples :

**Triangles :** Le triangle est la primitive fondamentale en infographie temps réel. Sa propriété la plus importante est qu\'il est **garanti d\'être coplanaire** : ses trois sommets définissent toujours un plan unique. Cette simplicité rend les algorithmes de rastérisation et d\'interpolation beaucoup plus rapides et robustes.

**Quadrilatères (Quads) :** Les quads sont souvent préférés par les artistes 3D car ils permettent de créer des maillages avec une topologie plus propre et plus facile à manipuler, notamment pour l\'animation et la subdivision de surface. Cependant, avant d\'être envoyés au GPU, les quads sont systématiquement **triangulés** (divisés en deux triangles).

#### Topologie et Densité du Maillage

La qualité d\'un modèle 3D ne dépend pas seulement de sa forme, mais aussi de la manière dont ses polygones sont organisés. La **topologie** d\'un maillage décrit la connectivité de ses sommets, arêtes et faces. Une \"bonne topologie\" est cruciale pour un ombrage correct et des déformations prévisibles en animation. Un maillage \"propre\" évite les problèmes tels que les arêtes non-manifold (partagées par plus de deux faces) ou les faces qui s\'auto-intersectent.

La **densité** du maillage, c\'est-à-dire le nombre de polygones utilisés pour décrire une surface, est un facteur clé dans le compromis entre qualité visuelle et performance  :

> **Modèles Low-Poly (faible densité polygonale) :** Ces modèles utilisent un nombre minimal de polygones pour définir la forme générale d\'un objet. Ils sont optimisés pour la performance et sont la norme dans les applications en temps réel comme les jeux vidéo et la réalité virtuelle. Les détails fins sont ajoutés via des textures, notamment des *normal maps*.
>
> **Modèles High-Poly (haute densité polygonale) :** Ces modèles utilisent un très grand nombre de polygones pour capturer des détails géométriques fins. Ils sont typiques des films d\'animation, des effets spéciaux et des rendus architecturaux où la qualité prime sur la vitesse de rendu. Ils sont souvent créés à l\'aide de techniques de sculpture numérique ou de subdivision de surface.

#### Formats de Fichiers

La géométrie et les attributs d\'un maillage sont stockés dans divers formats de fichiers. L\'un des plus simples et des plus courants est le format **OBJ** de Wavefront. C\'est un format texte qui liste explicitement les positions des sommets (v), les coordonnées de texture (vt), les normales (vn), puis définit chaque face (f) en référençant les indices de ses sommets, coordonnées de texture et normales correspondants. D\'autres formats plus complexes comme FBX ou glTF peuvent stocker des informations supplémentaires, telles que des animations, des squelettes et des descriptions complètes de matériaux.

### 48.2.2 Habiller la Géométrie : Le Mappage de Texture (Texture Mapping)

Un maillage polygonal définit la forme d\'un objet, mais il ne dit rien sur l\'apparence de sa surface. Le **mappage de texture** est une technique fondamentale et extraordinairement puissante qui consiste à appliquer une image 2D, appelée **texture**, sur la surface d\'un modèle 3D pour lui conférer des détails visuels complexes sans avoir à augmenter sa complexité géométrique. C\'est l\'équivalent numérique de l\'application de papier peint sur un mur ou d\'un autocollant sur une boîte.

Une **texture** est une image matricielle (un tableau de pixels) où chaque pixel, appelé **texel**, contient des données. Si l\'utilisation la plus évidente est de stocker des informations de couleur, le concept a été étendu pour représenter une vaste gamme de propriétés de surface, permettant des matériaux beaucoup plus réalistes.

#### Au-delà de la Couleur : Les Différents Types de Cartes de Texture

Dans les pipelines de rendu modernes, en particulier ceux basés sur le rendu physique réaliste (Physically Based Rendering, PBR), un matériau est souvent décrit par un ensemble de cartes de texture, chacune contrôlant un aspect spécifique de l\'interaction de la lumière avec la surface  :

> **Carte de Diffusion / Albedo (Diffuse/Albedo Map) :** C\'est la carte de texture la plus fondamentale. Elle définit la couleur de base de la surface, c\'est-à-dire la couleur de la lumière qu\'elle réfléchit de manière diffuse. Dans les workflows PBR, on parle de carte d\'albédo, qui représente la couleur pure du matériau sans aucune information d\'éclairage ou d\'ombre.
>
> **Carte de Normales (Normal Map) :** C\'est une technique d\'illusion d\'optique puissante. Au lieu de stocker des couleurs, cette texture stocke des vecteurs. Chaque texel contient un vecteur (encodé dans les canaux R, G, B) qui représente la direction de la normale de surface à cet endroit. Lors du rendu, le nuanceur de pixels utilise cette normale \"truquée\" issue de la texture au lieu de la normale réelle du polygone pour les calculs d\'éclairage. Cela permet de simuler des détails de surface très fins (bosses, fissures, pores de la peau) sur un modèle low-poly, donnant l\'illusion d\'une géométrie beaucoup plus complexe.
>
> **Cartes de Réflectivité (Specular, Roughness, Metallic Maps) :** Ces cartes contrôlent les reflets spéculaires.

Une **carte spéculaire** (*specular map*) traditionnelle définit la couleur et l\'intensité des reflets.

Dans les workflows PBR, on utilise plutôt une **carte de rugosité** (*roughness map*) qui indique à quel point la surface est microscopiquement rugueuse (une valeur faible pour un miroir, une valeur élevée pour du béton), et une **carte métallique** (*metallic map*) qui définit si la surface est un métal ou un diélectrique (isolant), deux types de matériaux qui réfléchissent la lumière très différemment.

> **Carte d\'Occlusion Ambiante (Ambient Occlusion Map) :** C\'est une carte en niveaux de gris qui simule les ombres douces dans les cavités et les crevasses d\'un objet, là où la lumière ambiante a du mal à pénétrer. Elle ajoute un réalisme subtil en assombrissant les zones de contact et les recoins, améliorant la perception de la forme.

La dissociation entre la géométrie de bas niveau et l\'apparence de surface de haut niveau est l\'une des optimisations les plus fondamentales de l\'infographie. Elle permet d\'atteindre une fidélité visuelle immense avec un coût de calcul géométrique relativement faible. Le *normal mapping* est l\'exemple par excellence de cette philosophie, où une information complexe d\'éclairage est encodée dans une simple texture pour créer une illusion de relief convaincante, contournant ainsi les limitations matérielles.

### 48.2.3 Le Pont entre 2D et 3D : Coordonnées UV

Pour appliquer correctement une texture 2D sur un maillage 3D, il est nécessaire d\'établir une correspondance précise entre chaque point de la surface du modèle et un point de l\'image de texture. C\'est le rôle du **mappage UV**.

#### Définition des Coordonnées UV

Les lettres **U** et **V** sont utilisées pour désigner les axes horizontal et vertical de l\'espace de la texture 2D, afin de les distinguer des axes X, Y et Z de l\'espace 3D du modèle. L\'espace UV est généralement normalisé, de sorte que les coordonnées

(U,V) varient de (0,0) dans un coin de la texture à (1,1) dans le coin opposé.

Le processus de mappage UV consiste à assigner à chaque sommet du maillage 3D une coordonnée UV 2D. Cette coordonnée \"épingle\" ce sommet à un emplacement spécifique sur l\'image de texture.

#### Le Processus de Dépliage (UV Unwrapping)

La création de ces coordonnées UV est un processus appelé **dépliage UV** (*UV unwrapping*). L\'analogie la plus courante est celle d\'un patron de couture ou du dépliage d\'une boîte en carton. L\'artiste 3D doit conceptuellement \"découper\" le maillage 3D le long de certaines arêtes, appelées **coutures** (*seams*), puis l\'aplatir pour créer une représentation 2D sans chevauchement, appelée la **carte UV** (*UV map*).

Le choix de l\'emplacement des coutures est un art en soi. Elles doivent être placées dans des zones peu visibles du modèle (par exemple, sous les bras d\'un personnage, à l\'arrière d\'un objet) pour minimiser les discontinuités visibles dans la texture appliquée. Un bon dépliage UV cherche également à minimiser la distorsion : les polygones sur la carte UV doivent avoir des proportions aussi proches que possible de leurs homologues sur le maillage 3D pour que la texture ne paraisse pas étirée ou compressée.

Les logiciels de modélisation 3D offrent divers outils pour faciliter ce processus, notamment des méthodes de projection automatiques  :

> **Projection Planaire :** Projette les UV comme si on utilisait un projecteur. Idéal pour les surfaces planes.
>
> **Projection Cylindrique/Sphérique :** Enveloppe les UV autour d\'une forme cylindrique ou sphérique. Utile pour les objets comme les bouteilles, les bras ou les planètes.

#### Utilisation dans le Pipeline de Rendu

Une fois que chaque sommet possède une coordonnée UV, ces dernières deviennent un attribut de sommet, tout comme la position et la normale. Lors de l\'étape de rastérisation, pour chaque fragment généré à l\'intérieur d\'un triangle, le GPU interpole les coordonnées UV des trois sommets du triangle pour calculer la coordonnée UV précise de ce fragment. Cette coordonnée UV interpolée est ensuite utilisée par le nuanceur de pixels pour effectuer une **recherche de texture** (*texture lookup* ou *texture sampling*), c\'est-à-dire pour lire la couleur du texel correspondant dans la carte de texture. C\'est ainsi que l\'image 2D est \"peinte\" sur la surface 3D, pixel par pixel.

## 48.3 Le Paradigme Dominant : Rendu par Rastérisation et Modèles d\'Illumination

La rastérisation est le paradigme de rendu qui domine l\'infographie en temps réel. Sa popularité et son efficacité découlent de son approche directe : au lieu de simuler le trajet complexe de la lumière, elle projette la géométrie de la scène sur l\'écran et se concentre ensuite sur la coloration des pixels. Cette section plonge au cœur de ce processus, en détaillant le parcours mathématique d\'un sommet depuis l\'espace de l\'objet jusqu\'à l\'écran, les algorithmes de conversion de la géométrie en pixels, et les modèles utilisés pour simuler l\'interaction de la lumière avec les surfaces.

### 48.3.1 Le Voyage d\'un Sommet : Le Pipeline de Transformation Géométrique

Le voyage d\'un sommet, de sa définition locale à sa position finale sur un écran 2D, est une séquence de transformations mathématiques. Chaque transformation déplace le sommet d\'un système de coordonnées (ou \"espace\") à un autre. Pour unifier ces opérations, l\'infographie utilise les **coordonnées homogènes**. En ajoutant une quatrième composante, w, à un vecteur 3D (x,y,z), on obtient un vecteur 4D (x,y,z,w). Pour un point, w=1, et pour une direction, w=0. Cette représentation permet d\'exprimer toutes les transformations géométriques affines (translation, rotation, mise à l\'échelle) sous la forme d\'une unique multiplication par une matrice 4x4.

Le pipeline de transformation standard se compose des étapes suivantes  :

> Espace Local (ou Modèle) → Espace Monde :\
> Chaque objet d\'une scène est modélisé dans son propre système de coordonnées, appelé espace local (object space ou model space). C\'est un repère pratique où l\'origine (0,0,0) est souvent le centre de l\'objet. Pour placer cet objet dans la scène globale, on applique une matrice de modèle (Mmodeˋle​). Cette matrice encode la position, l\'orientation (rotation) et la taille (mise à l\'échelle) de l\'objet dans l\'espace monde (world space), qui est le système de coordonnées commun à tous les objets de la scène.\
> \
> Pmonde​=Mmodeˋle​⋅Plocal​
>
> Espace Monde → Espace Vue (ou Caméra) :\
> Ensuite, il faut positionner la caméra virtuelle. Plutôt que de déplacer la caméra, il est mathématiquement plus simple de transformer la scène entière pour que la caméra se retrouve à l\'origine, regardant dans une direction standard (généralement le long de l\'axe -Z). C\'est le rôle de la matrice de vue (Mvue​). Elle est en fait l\'inverse de la transformation qui placerait la caméra dans l\'espace monde. Le résultat est que tous les sommets sont maintenant exprimés dans l\'espace vue (view space ou camera space).\
> \
> Pvue​=Mvue​⋅Pmonde​
>
> Espace Vue → Espace de Découpage (Clip Space) :\
> Cette étape est cruciale car elle simule la perspective. La matrice de projection (Mprojection​) transforme le volume de vue 3D, appelé tronc de visualisation (view frustum), en un volume canonique, généralement un cube unitaire dont les coordonnées varient de -1 à 1 sur chaque axe. Ce cube est appelé l\'espace des coordonnées normalisées de l\'appareil (Normalized Device Coordinates, NDC).

**Projection en perspective :** C\'est la projection la plus courante. Elle modifie la coordonnée w des sommets. Les objets plus éloignés de la caméra (avec une plus grande valeur de Z dans l\'espace vue) auront une plus grande valeur de w après transformation, ce qui les fera paraître plus petits après la division perspective.

Projection orthographique : Utilisée pour les vues 2D ou techniques, cette projection ne modifie pas la perspective. Les objets conservent la même taille quelle que soit leur distance à la caméra.\
La sortie de cette étape est un sommet dans l\'espace de découpage (clip space).\
\
Pclip​=Mprojection​⋅Pvue​

> Division Perspective et Transformation Viewport :\
> Après le découpage (clipping), qui élimine tout ce qui est en dehors du volume NDC, la division perspective est effectuée. Les coordonnées x,y,z de chaque sommet en clip space sont divisées par sa coordonnée w.\
> \
> PNDC​=(Pclip​.x/Pclip​.w,Pclip​.y/Pclip​.w,Pclip​.z/Pclip​.w)\
> \
> Les coordonnées résultantes (xNDC​,yNDC​) sont maintenant dans un carré 2D allant de -1 à 1. La dernière étape, la transformation viewport, mappe ces coordonnées aux coordonnées finales de la fenêtre d\'affichage, c\'est-à-dire les coordonnées en pixels de l\'image (par exemple, de (0,0) à (1920,1080)).11 La coordonnée\
> zNDC​ est conservée pour le test de profondeur.

### 48.3.2 De la Géométrie aux Pixels : L\'Algorithme de Rastérisation

Une fois les sommets d\'un triangle transformés en coordonnées d\'écran, la rastérisation prend le relais. Son but est de déterminer l\'ensemble des centres de pixels qui se trouvent à l\'intérieur de ce triangle 2D.

#### L\'Algorithme des Fonctions de Bord

Une méthode de rastérisation très efficace et couramment implémentée en matériel est basée sur les fonctions de bord (edge functions). Le principe est le suivant : chaque arête d\'un triangle peut être vue comme une ligne qui sépare le plan 2D en deux demi-plans. Pour une arête définie par deux sommets V0​(x0​,y0​) et V1​(x1​,y1​), on peut définir une fonction de bord E(x,y) pour n\'importe quel point P(x,y) :

E(P)=(x−x0​)(y1​−y0​)−(y−y0​)(x1​−x0​)

Le signe du résultat de cette fonction indique de quel côté de la ligne (définie par l\'arête) se trouve le point P.15 En définissant les sommets du triangle dans un ordre cohérent (par exemple, dans le sens antihoraire), un point

P est considéré comme étant à l\'intérieur du triangle si et seulement si il se trouve du même côté (par exemple, le côté \"droit\") des trois arêtes simultanément. L\'algorithme de rastérisation parcourt donc tous les pixels dans un rectangle englobant le triangle et évalue les trois fonctions de bord pour le centre de chaque pixel. Si les trois résultats ont le signe positif (ou sont nuls), le pixel est couvert par le triangle et un fragment est généré.

#### Coordonnées Barycentriques et Interpolation

Les fonctions de bord fournissent un bénéfice supplémentaire : leurs résultats peuvent être utilisés pour calculer les **coordonnées barycentriques** (λ0​,λ1​,λ2​) de n\'importe quel point P à l\'intérieur du triangle. Ces trois nombres représentent les poids respectifs des trois sommets

V0​,V1​,V2​ pour définir la position de P. Ils ont deux propriétés clés :

> P=λ0​V0​+λ1​V1​+λ2​V2​
>
> λ0​+λ1​+λ2​=1

L\'utilité principale des coordonnées barycentriques est l\'interpolation. N\'importe quel attribut défini aux sommets (couleur, normale, coordonnée de texture, profondeur) peut être interpolé sur toute la surface du triangle. Si un attribut A a les valeurs A0​,A1​,A2​ aux sommets, sa valeur interpolée AP​ au point P est simplement :

AP​=λ0​A0​+λ1​A1​+λ2​A2​

Cette interpolation est le mécanisme par lequel les fragments générés par la rastérisation obtiennent leurs attributs, qui seront ensuite utilisés par le nuanceur de pixels.

Il est crucial de noter que, pour obtenir des résultats visuellement corrects en présence de perspective, l\'interpolation doit être **corrigée pour la perspective**. Une interpolation linéaire simple dans l\'espace écran entraînerait des distorsions, notamment pour les textures. La méthode correcte consiste à interpoler les attributs divisés par la coordonnée w de chaque sommet, puis à diviser le résultat par la valeur de 1/w interpolée.

### 48.3.3 La Physique de la Lumière Locale : Le Modèle d\'Illumination de Phong

Une fois qu\'un fragment est généré, le nuanceur de pixels doit déterminer sa couleur. Pour cela, il utilise un **modèle d\'illumination** (ou *modèle de réflexion*). Un modèle d\'**illumination locale** calcule la couleur d\'un point sur une surface en ne considérant que les propriétés de ce point, les propriétés des sources lumineuses et la position de la caméra, ignorant les interactions avec les autres objets de la scène (comme la lumière réfléchie par un mur voisin).

Le modèle de réflexion de Phong, développé par Bui Tuong Phong, est un modèle empirique simple mais efficace qui est devenu un standard en infographie temps réel. Il décompose la lumière réfléchie en trois composantes  :

> Composante Ambiante (Iambiante​):\
> Cette composante simule l\'illumination indirecte de manière très approximative. Elle représente la lumière qui a rebondi tellement de fois dans la scène qu\'elle semble provenir de toutes les directions de manière uniforme. C\'est une couleur constante ajoutée à tous les objets pour éviter que les parties non directement éclairées ne soient complètement noires.\
> \
> Iambiante​=ka​⋅Ia​\
> \
> où ka​ est le coefficient de réflexion ambiante du matériau (sa \"couleur ambiante\") et Ia​ est l\'intensité de la lumière ambiante de la scène.
>
> Composante Diffuse (Idiffuse​):\
> Cette composante modélise la réflexion sur les surfaces mates ou rugueuses (dites Lambertiennes). Ces surfaces diffusent la lumière incidente de manière égale dans toutes les directions. L\'intensité de la lumière réfléchie dépend de l\'angle d\'incidence de la lumière. Conformément à la loi de Lambert, elle est maximale lorsque la lumière frappe la surface perpendiculairement et nulle lorsqu\'elle est rasante.\
> \
> Idiffuse​=kd​⋅Il​⋅max(0,N⋅L)\
> \
> où kd​ est le coefficient de réflexion diffuse du matériau (sa \"couleur de base\"), Il​ est l\'intensité de la source lumineuse, N est le vecteur normal unitaire à la surface, et L est le vecteur unitaire pointant de la surface vers la source lumineuse. Le produit scalaire N⋅L est égal au cosinus de l\'angle entre les deux vecteurs.
>
> Composante Spéculaire (Ispeˊculaire​):\
> Cette composante simule les reflets brillants et concentrés que l\'on observe sur les surfaces lisses et polies, comme le plastique ou le métal. Contrairement à la lumière diffuse, la lumière spéculaire est réfléchie principalement dans une direction spécifique : la direction de réflexion miroir. Le reflet n\'est visible que si la caméra se trouve près de cette direction.\
> \
> Ispeˊculaire​=ks​⋅Il​⋅(max(0,R⋅V))α\
> \
> où ks​ est le coefficient de réflexion spéculaire du matériau, V est le vecteur unitaire pointant de la surface vers la caméra, et R est le vecteur unitaire de la direction de réflexion parfaite de L par rapport à N (calculé comme R=2(N⋅L)N−L). L\'exposant de brillance α (ou shininess) contrôle la taille et l\'intensité du reflet : une valeur élevée produit un petit reflet très intense (surface très lisse), tandis qu\'une valeur faible produit un reflet large et diffus (surface moins lisse).

L\'intensité lumineuse totale pour une source de lumière est la somme de ces trois composantes. S\'il y a plusieurs sources lumineuses, leurs contributions diffuse et spéculaire sont additionnées :

Itotale​=Iambiante​+i∈lumieˋres∑​(Idiffuse,i​+Ispeˊculaire,i​)

### 48.3.4 L\'Art de l\'Ombrage (Shading) : Comparaison des Techniques

Il est essentiel de distinguer le *modèle d\'illumination* (la formule mathématique, comme celle de Phong) de la *technique d\'ombrage* (*shading*), qui définit où et à quelle fréquence ce modèle est appliqué. La progression des techniques d\'ombrage peut être vue comme une application directe des principes de la théorie de l\'échantillonnage. Chaque étape augmente la fréquence d\'échantillonnage du modèle d\'illumination sur la surface de l\'objet, permettant de reconstruire plus fidèlement le signal lumineux final. Ce compromis entre la fréquence d\'échantillonnage (qualité) et le coût de calcul (performance) est l\'un des arbitrages les plus fondamentaux en infographie temps réel.

> **Ombrage Plat (Flat Shading) :** C\'est la technique la plus simple et la plus rapide. Le modèle d\'illumination est évalué une seule et unique fois pour chaque polygone (triangle). On utilise la normale géométrique de la face du triangle, et la couleur calculée est appliquée uniformément à tous les pixels du triangle. Le résultat est un aspect facetté et anguleux, où chaque polygone est clairement visible. C\'est un sous-échantillonnage extrême du signal lumineux.
>
> **Ombrage de Gouraud (Gouraud Shading) :** Développée par Henri Gouraud, cette technique améliore considérablement la qualité visuelle. Le modèle d\'illumination est calculé à chaque sommet du polygone, en utilisant une normale de sommet (souvent la moyenne des normales des faces adjacentes). Les couleurs résultantes aux sommets sont ensuite interpolées linéairement sur toute la surface du polygone lors de la rastérisation. Cela produit des transitions de couleur douces entre les faces, donnant une illusion de courbure. Cependant, l\'ombrage de Gouraud a une faiblesse majeure : les reflets spéculaires qui se trouvent au milieu d\'un polygone (et non près d\'un sommet) seront manqués ou mal rendus. Si la fréquence du signal lumineux (le reflet) est plus élevée que la fréquence d\'échantillonnage (la densité des sommets), des artefacts d\'aliasing apparaissent.
>
> **Ombrage de Phong (Phong Shading) :** À ne pas confondre avec le *modèle* de Phong, cette technique d\'interpolation offre la meilleure qualité. Au lieu d\'interpoler les couleurs finales, l\'ombrage de Phong interpole les vecteurs normaux des sommets sur toute la surface du polygone. Ensuite, pour chaque fragment (pixel) généré par la rastérisation, le modèle d\'illumination de Phong est calculé en utilisant cette normale interpolée. Comme le calcul est effectué par pixel, cette méthode peut reproduire correctement les reflets spéculaires, même au milieu de grands polygones, produisant des surfaces lisses et des reflets précis. C\'est la technique la plus coûteuse car elle exige un calcul d\'illumination complet pour chaque pixel, mais elle est la norme pour le rendu de haute qualité en temps réel.

Le tableau suivant synthétise les caractéristiques de ces trois techniques.

  ------------------------- ----------------------------------------------------- ---------------------------------------- ----------------------------------------
  Critère                   Ombrage Plat (Flat Shading)                           Ombrage de Gouraud                       Ombrage de Phong

  **Point de Calcul**       Une fois par polygone                                 À chaque sommet                          À chaque pixel (fragment)

  **Valeur Interpolée**     Aucune (couleur constante)                            Couleur                                  Vecteur Normal

  **Coût de Calcul**        Très faible                                           Faible à moyen                           Élevé

  **Qualité Visuelle**      Facetté, anguleux                                     Lisse (transitions de couleur)           Très lisse, réaliste

  **Reflets Spéculaires**   Inexistants (sauf si la face entière est un reflet)   Médiocre (souvent manqués ou déformés)   Précis et lisses

  **Artefacts Typiques**    Apparence \"low-poly\" évidente                       Bandes de Mach, reflets instables        Aucun (si la géométrie est suffisante)
  ------------------------- ----------------------------------------------------- ---------------------------------------- ----------------------------------------

### 48.3.5 La Gestion de l\'Occlusion : L\'Algorithme du Z-Buffer

Dans une scène 3D, certains objets en cachent d\'autres. La rastérisation traite les polygones dans un ordre qui n\'est pas nécessairement du plus éloigné au plus proche. Il faut donc un mécanisme pour résoudre le problème de la détermination des surfaces cachées (*Hidden Surface Removal*). L\'algorithme le plus utilisé est le

**Z-buffering** (ou *depth buffering*).

Le principe est simple mais efficace. En plus du **tampon de couleur** (*color buffer*) qui stocke les valeurs de couleur de l\'image finale, le GPU gère un **tampon de profondeur** (*Z-buffer*). C\'est un tableau 2D de la même résolution que l\'image, où chaque cellule stocke une valeur de profondeur (généralement la coordonnée Z après la transformation de projection, normalisée entre 0 et 1).

L\'algorithme fonctionne comme suit  :

> **Initialisation :** Avant de rendre une nouvelle image, le tampon de couleur est effacé avec la couleur de fond, et chaque valeur du Z-buffer est initialisée à la valeur de profondeur maximale possible (par exemple, 1.0, représentant l\'infini ou le plan de découpage lointain).
>
> **Rastérisation :** Pour chaque triangle de la scène, la rastérisation génère des fragments. Pour chaque fragment à la position d\'écran (x,y), sa profondeur zfrag​ est calculée par interpolation des valeurs de profondeur de ses sommets.
>
> **Test de Profondeur :** La valeur zfrag​ est comparée à la valeur actuellement stockée dans le Z-buffer à la même position, zbuffer​(x,y).
>
> **Mise à Jour :**

Si zfrag​\<zbuffer​(x,y), cela signifie que le nouveau fragment est plus proche de la caméra que tout ce qui a été dessiné jusqu\'à présent à ce pixel. Le fragment est donc visible. Deux mises à jour sont effectuées : le Z-buffer est mis à jour avec la nouvelle profondeur (zbuffer​(x,y)=zfrag​), et la couleur du fragment est écrite dans le tampon de couleur à la position (x,y).

Si zfrag​≥zbuffer​(x,y), le fragment est caché par une surface déjà dessinée. Il est donc simplement ignoré, et aucune mise à jour n\'est effectuée.

Le Z-buffer est extrêmement efficace car il est simple à implémenter en matériel et ne dépend pas de l\'ordre dans lequel les polygones sont rendus. Ses principales limitations sont sa précision finie, qui peut conduire à des artefacts de \"Z-fighting\" (scintillement) lorsque deux surfaces sont très proches l\'une de l\'autre, et sa difficulté à gérer nativement la transparence, qui nécessite généralement de trier les objets transparents et de les rendre après les objets opaques.

## 48.4 La Quête du Photoréalisme : Lancer de Rayons et Illumination Globale

Si la rastérisation excelle dans la production d\'images à haute vitesse, elle peine à simuler de manière naturelle des phénomènes optiques complexes comme les réflexions fidèles, les réfractions à travers des matériaux transparents ou les ombres douces. Ces effets nécessitent de connaître les interactions entre les objets, une information que l\'approche \"objet par objet\" de la rastérisation ignore. Pour atteindre un niveau de réalisme supérieur, un paradigme de rendu fondamentalement différent est nécessaire : le lancer de rayons (*ray tracing*). Cette section explore cette approche, qui simule le trajet de la lumière pour modéliser la physique de la formation d\'une image.

Le tableau suivant met en opposition les deux grandes philosophies du rendu 3D, servant de prélude à notre exploration du lancer de rayons. Il met en évidence les forces et les faiblesses inhérentes de la rastérisation que le lancer de rayons vient combler.

  ---------------------------- ------------------------------------------------- -----------------------------------------------------------
  Critère                      Rastérisation                                     Lancer de Rayons (Ray Tracing)

  **Principe de base**         Projection de la géométrie 3D sur l\'écran 2D     Simulation du trajet inverse des rayons lumineux

  **Boucle principale**        Par primitive (triangle)                          Par pixel de l\'image

  **Ordre de traitement**      Centré sur l\'objet (*Object-order*)              Centré sur l\'image (*Image-order*)

  **Performance**              Très rapide, optimisé pour le temps réel          Coûteux en calculs, traditionnellement pour le hors-ligne

  **Gestion des ombres**       Techniques additionnelles (ex: *shadow maps*)     Naturelle (via les rayons d\'ombre)

  **Réflexions/Réfractions**   Approximations (ex: *environment maps*)           Naturelles et précises (via les rayons récursifs)

  **Illumination globale**     Non gérée nativement (approximations complexes)   Fondement des algorithmes d\'illumination globale
  ---------------------------- ------------------------------------------------- -----------------------------------------------------------

### 48.4.1 Un Paradigme Alternatif : L\'Algorithme Fondamental du Lancer de Rayons

Contrairement à la rastérisation qui est un processus *object-order* (la boucle principale parcourt les objets), le lancer de rayons est un processus *image-order*. La boucle principale parcourt chaque pixel de l\'image finale et se demande : \"Quelle est la couleur de la lumière qui atteint la caméra à travers ce pixel?\". Pour répondre à cette question, on simule le trajet d\'un rayon lumineux en sens inverse, de la caméra vers la scène.

L\'algorithme de base, souvent appelé **Ray Casting**, fonctionne comme suit  :

> **Génération des Rayons Primaires :** Pour chaque pixel de l\'image, un **rayon primaire** est généré. Ce rayon a pour origine la position de la caméra et sa direction est calculée pour passer à travers le centre (ou un point d\'échantillonnage) du pixel sur le plan de l\'image virtuel.
>
> **Calcul d\'Intersection :** Ce rayon est ensuite testé pour une intersection avec chaque objet de la scène. Le cœur mathématique du lancer de rayons réside dans ces tests d\'intersection géométrique. Pour des primitives simples, les solutions sont analytiques :

**Rayon-Sphère :** En substituant l\'équation paramétrique du rayon dans l\'équation implicite de la sphère, on obtient une équation du second degré. Le discriminant de cette équation révèle s\'il y a zéro, une (tangence) ou deux intersections.

**Rayon-Triangle :** Des algorithmes efficaces comme celui de Möller-Trumbore permettent de calculer le point d\'intersection et ses coordonnées barycentriques directement.\
\
Parmi toutes les intersections trouvées pour un rayon donné, seule la plus proche de l\'origine du rayon (la caméra) est conservée. C\'est le point de la surface qui est visible à travers ce pixel.

> **Calcul de l\'Ombrage :** Si une intersection est trouvée en un point P sur un objet :

**Rayons d\'Ombre :** Pour chaque source lumineuse de la scène, un **rayon d\'ombre** (*shadow ray*) est lancé depuis le point P en direction de la source lumineuse.

**Test d\'Occlusion :** On teste si ce rayon d\'ombre intersecte un autre objet *entre* le point P et la source lumineuse. Si c\'est le cas, le point P est à l\'ombre par rapport à cette source. Sinon, il est directement éclairé.

**Calcul de la Couleur :** La couleur finale du pixel est calculée en appliquant un modèle d\'illumination locale (comme le modèle de Phong) au point P, en ne tenant compte que des sources lumineuses qui ne sont pas bloquées.

Si le rayon primaire n\'intersecte aucun objet, le pixel prend la couleur de fond de la scène. Cet algorithme résout de manière intrinsèque le problème des surfaces cachées et produit des ombres portées nettes et précises.

### 48.4.2 Simuler les Réflexions et Réfractions : Le Lancer de Rayons Récursif

Le *Ray Casting* ne modélise que l\'illumination directe. Pour atteindre un véritable photoréalisme, il est essentiel de simuler les rebonds de la lumière sur les surfaces. C\'est l\'apport fondamental de l\'algorithme de **lancer de rayons récursif** proposé par Turner Whitted en 1980.

L\'idée est d\'étendre l\'algorithme de base en traitant la lumière réfléchie et réfractée comme de nouvelles sources de lumière pour le point d\'intersection. Le processus devient récursif  :

> La couleur d\'un point P est la somme de son illumination locale (calculée comme dans le Ray Casting) ET des contributions des rayons secondaires.
>
> **Rayon de Réflexion :** Si la surface au point P est réfléchissante (comme un miroir), un nouveau **rayon de réflexion** est généré. Sa direction est calculée selon la loi de la réflexion (l\'angle de réflexion est égal à l\'angle d\'incidence). L\'algorithme de lancer de rayons est alors appelé **récursivement** avec ce nouveau rayon. La couleur retournée par cet appel récursif (pondérée par le coefficient de réflexion du matériau) est ajoutée à la couleur du point P.
>
> **Rayon de Réfraction :** Si la surface est transparente (comme du verre ou de l\'eau), un **rayon de réfraction** (ou transmis) est généré. Sa direction est calculée en utilisant la **loi de Snell-Descartes**, qui dépend des indices de réfraction des deux milieux. De même, un appel récursif est fait avec ce rayon réfracté, et la couleur retournée (pondérée par le coefficient de transparence du matériau) est ajoutée au résultat final.

Pour éviter une récursion infinie (par exemple, entre deux miroirs se faisant face), une profondeur de récursion maximale est définie. Lorsqu\'un rayon atteint cette profondeur, aucun nouveau rayon secondaire n\'est lancé. L\'algorithme de Whitted a été une révolution, car il a permis de générer pour la première fois des images avec des réflexions et des réfractions multiples et physiquement correctes.

### 48.4.3 La Lumière dans son Ensemble : L\'Illumination Globale et l\'Équation de Rendu

Le lancer de rayons de style Whitted est puissant, mais il ne simule que les rebonds sur des surfaces parfaitement spéculaires (miroirs) ou diélectriques (verre). Il ignore un aspect fondamental de la lumière dans le monde réel : les rebonds sur les surfaces diffuses. La lumière qui frappe un mur rouge ne disparaît pas ; une partie est absorbée, et une partie est réfléchie sous forme de lumière rouge, qui va à son tour éclairer subtilement les objets voisins (un phénomène appelé **saignement de couleur** ou *color bleeding*).

L\'**Illumination Globale (GI)** est le terme générique pour les algorithmes qui cherchent à simuler *tous* les trajets possibles de la lumière dans une scène, incluant non seulement la lumière directe des sources, mais aussi la lumière indirecte qui a rebondi une ou plusieurs fois sur des surfaces diffuses ou spéculaires.

La base théorique de toute l\'illumination globale est l\'**Équation de Rendu**, formulée indépendamment par David Immel et James Kajiya en 1986. Cette équation est une formulation mathématique, basée sur la physique de l\'optique géométrique, de l\'équilibre de l\'énergie lumineuse en un point d\'une surface. Elle stipule que la lumière sortant (

Lo​) d\'un point x dans une direction ωo​ est la somme de la lumière que ce point émet de lui-même (Le​) et de toute la lumière incidente (Li​) provenant de toutes les directions possibles de l\'hémisphère Ω au-dessus de ce point, réfléchie dans la direction ωo​.

Sa forme intégrale est la suivante :

\$\$ L_o(x, \\omega_o) = L_e(x, \\omega_o) + \\int\_{\\Omega} f_r(x, \\omega_i, \\omega_o) L_i(x, \\omega_i) (\\omega_i \\cdot \\vec{n}) d\\omega_i \$\$

Décortiquons ses termes :

> Lo​(x,ωo​) : La **luminance** (énergie lumineuse par unité de surface, par unité d\'angle solide) sortant du point x dans la direction ωo​. C\'est la valeur que nous cherchons à calculer.
>
> Le​(x,ωo​) : La luminance émise par le point x (uniquement non nulle si x est sur une source lumineuse).
>
> ∫Ω​\...dωi​ : Une intégrale sur toutes les directions entrantes ωi​ de l\'hémisphère Ω centrée sur le point x.
>
> fr​(x,ωi​,ωo​) : La **Fonction de Distribution de Réflectance Bidirectionnelle** (BRDF). C\'est une fonction qui décrit les propriétés de réflectivité du matériau au point x. Elle définit quelle proportion de la lumière arrivant de la direction ωi​ est réfléchie dans la direction ωo​.
>
> Li​(x,ωi​) : La luminance incidente arrivant au point x depuis la direction ωi​.
>
> (ωi​⋅n) : Le produit scalaire entre la direction de la lumière incidente et la normale n à la surface. Ce terme cosinus (loi de Lambert) module l\'énergie incidente en fonction de l\'angle.

La nature profondément récursive de l\'équation est cachée dans le terme Li​. La lumière incidente arrivant en x depuis une direction ωi​ n\'est autre que la lumière sortante Lo​ d\'un autre point y de la scène, visible depuis x dans cette direction. Cette interdépendance rend la résolution de l\'équation extrêmement difficile. L\'équation de rendu a transformé l\'infographie d\'un domaine d\'astuces algorithmiques en une discipline basée sur la simulation physique, fournissant un \"étalon-or\" théorique.

### 48.4.4 Une Solution par Monte-Carlo : Le Path Tracing

Puisqu\'il n\'existe pas de solution analytique générale à l\'équation de rendu, elle doit être résolue numériquement. Le **Path Tracing** (traçage de chemin) est un algorithme qui applique les **méthodes de Monte-Carlo** pour estimer la valeur de l\'intégrale de l\'équation de rendu.

L\'intégration de Monte-Carlo est une technique statistique qui permet d\'approximer la valeur d\'une intégrale complexe en calculant la moyenne d\'un grand nombre d\'échantillons évalués en des points choisis aléatoirement dans le domaine d\'intégration.

L\'algorithme de Path Tracing applique ce principe de manière élégante  :

> **Échantillonnage par Pixel :** Pour chaque pixel, on lance non pas un, mais N rayons primaires (souvent avec de légères variations de position pour l\'anticrénelage). Chaque rayon deviendra un \"chemin\" lumineux.
>
> **Construction d\'un Chemin :** Un rayon est lancé dans la scène. Lorsqu\'il intersecte une surface au point P :

On évalue la contribution de l\'éclairage direct en ce point (en lançant un rayon d\'ombre vers les sources lumineuses).

Pour simuler la lumière indirecte (l\'intégrale), au lieu de lancer des rayons dans toutes les directions, on choisit **une seule direction de rebond aléatoire** ωrebond​ dans l\'hémisphère au-dessus de P. Ce choix est souvent pondéré par la BRDF du matériau pour privilégier les directions qui réfléchissent le plus de lumière (une technique appelée *importance sampling*).

Un nouveau rayon est lancé depuis P dans la direction ωrebond​.

> **Récursion du Chemin :** Ce processus est répété. Le nouveau rayon intersecte une autre surface, on choisit une nouvelle direction de rebond aléatoire, et ainsi de suite. Le rayon forme un \"chemin\" à travers la scène.
>
> **Condition d\'Arrêt :** Le chemin est terminé lorsqu\'il atteint une profondeur de récursion maximale ou, plus couramment, en utilisant une technique statistique appelée \"roulette russe\", où le chemin a une probabilité de s\'arrêter à chaque rebond, probabilité qui augmente à mesure que sa contribution énergétique diminue. Si un chemin atteint une source lumineuse, la contribution de cette source est ajoutée.
>
> **Moyennage :** La lumière accumulée le long d\'un chemin complet constitue un seul échantillon de la luminance pour le pixel de départ. La couleur finale du pixel est simplement la **moyenne** des couleurs de tous les N chemins tracés pour ce pixel.

Le Path Tracing est un algorithme d\'une grande puissance et simplicité conceptuelle. Il est **impartial**, ce qui signifie qu\'en augmentant le nombre d\'échantillons N, le résultat converge mathématiquement vers la solution correcte de l\'équation de rendu. Son principal inconvénient est sa lente convergence : avec un faible nombre d\'échantillons, l\'image résultante est très \"bruitée\" (pleine de grain), car l\'estimation statistique est de mauvaise qualité. Obtenir une image propre nécessite de calculer des centaines, voire des milliers de chemins par pixel, ce qui explique son coût de calcul historiquement élevé.

## 48.5 Donner Vie au Virtuel : Animation et Simulation Physique

Jusqu\'à présent, nous avons considéré la création d\'images statiques. L\'animation introduit la dimension du temps, transformant les scènes en mondes dynamiques. Le mouvement en infographie peut être créé de deux manières fondamentalement différentes : soit il est dicté par la main de l\'artiste, soit il émerge des lois de la physique. Cette section explore ces deux approches, de la technique traditionnelle de l\'animation par images clés à la complexité de la simulation physique.

### 48.5.1 L\'Animation Dirigée par l\'Artiste : Le Keyframing

L\'**animation par images clés** (*keyframing*) est la technique la plus fondamentale et la plus utilisée en animation 3D. Elle est l\'héritière directe des méthodes de l\'animation traditionnelle sur celluloïd, où les animateurs principaux dessinaient les poses les plus importantes d\'un mouvement, laissant aux assistants le soin de dessiner les images intermédiaires.

#### Le Principe des Images Clés

Le principe est simple et puissant :

> **Définition des Poses Clés :** L\'animateur travaille avec une **ligne de temps** (*timeline*). Pour un objet ou un personnage, il définit ses propriétés (position, rotation, échelle) à des moments spécifiques et cruciaux du temps. Chaque ensemble de propriétés à un instant T est une **image clé** (*keyframe*). Par exemple, pour faire sauter une balle, l\'animateur pourrait définir une clé pour la position de la balle au sol au temps\
> t=0, une autre pour sa position au sommet de sa trajectoire au temps t=0.5, et une dernière pour son retour au sol au temps t=1.
>
> **Interpolation des Images Intermédiaires :** Le logiciel se charge ensuite de calculer automatiquement les images intermédiaires (*in-betweens* ou *tweening*). Il **interpole** les valeurs des propriétés entre les images clés pour créer une transition fluide.

Cette approche offre un contrôle total à l\'artiste, qui peut sculpter le mouvement avec précision en ajustant la position et le moment de chaque clé.

#### Le Rôle Crucial de l\'Interpolation

La manière dont le logiciel calcule les \"in-betweens\" a un impact énorme sur la qualité et la nature du mouvement.

> **Interpolation Linéaire :** La méthode la plus simple consiste à interpoler linéairement les valeurs entre deux clés. Si un objet se déplace de la position P0​ à P1​, sa position à mi-chemin dans le temps sera exactement au milieu du segment \[P0​,P1​\]. Cela produit un mouvement à vitesse constante, qui est souvent perçu comme mécanique et peu naturel.
>
> **Interpolation par Splines :** Pour obtenir des mouvements organiques et crédibles, avec des accélérations et des décélérations douces (*ease-in* et *ease-out*), on utilise des courbes mathématiques plus sophistiquées appelées **splines**. Un spline est une courbe polynomiale par morceaux qui assure une certaine continuité à ses points de jonction.

Les propriétés de l\'objet (par exemple, sa coordonnée X) ne sont plus interpolées le long d\'une droite, mais suivent une courbe de spline au fil du temps. Les animateurs peuvent manipuler directement ces courbes (souvent appelées *animation curves* ou *f-curves*) et leurs tangentes pour affiner le *timing* (la durée d\'une action) et le *spacing* (la distance parcourue entre chaque image), qui sont les principes fondamentaux de l\'animation.

Différents types de splines sont utilisés, comme les **splines de Bézier**, les **B-splines**, ou les **splines de Hermite**. Une variante particulièrement intuitive pour l\'animation est la **spline de Catmull-Rom**, qui a la propriété pratique de passer directement par tous ses points de contrôle (les images clés), ce qui la rend très prévisible pour l\'animateur.

### 48.5.2 L\'Animation Dirigée par les Lois de la Physique

Une approche alternative au keyframing est l\'**animation basée sur la physique**, où le mouvement n\'est pas spécifié manuellement mais est calculé en simulant les lois de la dynamique newtonienne. Au lieu de définir des positions, l\'animateur définit des propriétés physiques (masse, friction, élasticité) et des forces (gravité, vent, explosions), et le mouvement émerge comme une conséquence de ces interactions.

Cette approche offre un réalisme inégalé pour certains types de phénomènes. Il serait extrêmement fastidieux, voire impossible, d\'animer à la main l\'effondrement d\'un bâtiment ou les milliers de débris d\'une explosion. La simulation physique génère ces mouvements complexes de manière procédurale.

Cependant, cette méthode a aussi des inconvénients. Elle est souvent moins contrôlable : il peut être difficile d\'obtenir un résultat artistique précis en manipulant uniquement des forces et des paramètres physiques. De plus, les simulations peuvent être très coûteuses en temps de calcul, en particulier lorsqu\'elles impliquent de nombreuses interactions et collisions.

Le futur de l\'animation de personnages ne réside pas dans un choix binaire entre le contrôle artistique du keyframing et le réalisme de la simulation, mais dans leur synthèse intelligente. Les outils modernes tendent de plus en plus vers une hybridation. Des logiciels comme Cascadeur permettent à un animateur de définir des poses clés, puis utilisent des solveurs physiques pour ajuster les trajectoires, garantir la plausibilité du centre de masse, et ajouter des effets secondaires réalistes comme l\'inertie et le moment cinétique. Ce passage d\'une animation entièrement

*spécifiée* par l\'artiste à une animation *assistée* par la physique représente une évolution majeure du domaine, combinant le meilleur des deux mondes pour produire des mouvements à la fois dirigeables et crédibles.

### 48.5.3 Systèmes de Particules et Dynamique des Corps Rigides

Deux des techniques les plus importantes de l\'animation basée sur la physique sont les systèmes de particules et la dynamique des corps rigides.

#### Systèmes de Particules

Un **système de particules** est une technique utilisée pour modéliser des phénomènes \"flous\" ou chaotiques qui sont difficiles à représenter avec des maillages polygonaux traditionnels. Cela inclut le feu, la fumée, la pluie, la neige, les étincelles, les cascades ou la poussière.

Le principe est de simuler le comportement d\'un grand nombre de points individuels, les **particules**. Chaque particule est un objet simple avec un ensemble d\'attributs :

> Position et vélocité
>
> Couleur et opacité
>
> Taille et orientation
>
> Âge et durée de vie

Un \"émetteur\" génère continuellement de nouvelles particules. Le mouvement de chaque particule est ensuite mis à jour à chaque pas de temps, gouverné par un ensemble de règles ou de forces simples, comme la gravité, la force du vent, ou des forces de turbulence. Les particules meurent lorsqu\'elles atteignent la fin de leur durée de vie. Le comportement complexe et organique du phénomène global (par exemple, le tourbillonnement d\'une fumée) n\'est pas programmé explicitement ; il émerge de l\'interaction de ces milliers de particules suivant des règles simples.

#### Dynamique des Corps Rigides

La **dynamique des corps rigides** (*rigid body dynamics*) simule le mouvement d\'objets solides qui ne se déforment pas sous l\'effet des forces. C\'est la base de la simulation de la chute d\'objets, des collisions, des empilements, etc.

La simulation est fondée sur les lois du mouvement de Newton  :

> **Mouvement de Translation :** Le mouvement du centre de masse de l\'objet est gouverné par l\'équation F=ma, où F est la somme de toutes les forces externes (gravité, forces de contact), m est la masse de l\'objet, et a est l\'accélération de son centre de masse.
>
> **Mouvement de Rotation :** La rotation de l\'objet autour de son centre de masse est gouvernée par une équation similaire pour le moment angulaire : τ=Iα, où τ est la somme des couples (moments de force), I est le moment d\'inertie (qui décrit la résistance de l\'objet à la rotation), et α est l\'accélération angulaire.

Les deux plus grands défis dans la simulation de corps rigides sont :

> **La Détection de Collision :** Déterminer de manière robuste et efficace si et quand deux objets de formes complexes se touchent.
>
> **La Réponse à la Collision :** Calculer les forces d\'impulsion et de friction qui résultent d\'une collision pour modifier correctement les vitesses linéaires et angulaires des objets, en respectant les principes de conservation de la quantité de mouvement et du moment cinétique.

Ces simulations sont au cœur de la plupart des moteurs de jeu modernes et des systèmes d\'effets spéciaux, fournissant une base pour un monde virtuel interactif et physiquement crédible.

## Conclusion

Ce chapitre a parcouru le vaste paysage de l\'infographie, depuis les fondations conceptuelles du pipeline de rendu jusqu\'aux frontières du photoréalisme et de l\'animation dynamique. Nous avons vu que la création d\'une image de synthèse est un processus remarquablement structuré, une \"chaîne de montage\" qui transforme des données abstraites en une expérience visuelle.

Nous avons établi que le **pipeline de rendu**, avec sa séquence d\'étapes (Application, Géométrie, Rastérisation, Pixel), constitue le cadre organisationnel de la quasi-totalité du rendu en temps réel. L\'évolution de ce pipeline, passant d\'une structure matérielle fixe à une architecture hautement programmable via les **nuanceurs**, a été le principal moteur de l\'innovation visuelle au cours des dernières décennies, permettant une flexibilité et une sophistication sans précédent.

La représentation du monde virtuel repose sur une dichotomie fondamentale et efficace : la **géométrie**, définie par des **maillages polygonaux**, et l\'**apparence**, conférée par des **textures**. Le **mappage UV** sert de pont ingénieux entre ces deux domaines, permettant de créer des mondes visuellement riches avec une complexité géométrique gérable.

Le cœur du rendu se divise en deux paradigmes. La **rastérisation**, rapide et efficace, projette la géométrie sur l\'écran et détermine la couleur des pixels en se basant sur des modèles d\'illumination locale comme celui de Phong. Sa progression, de l\'ombrage plat à l\'ombrage de Gouraud puis de Phong, illustre un principe fondamental : l\'amélioration de la qualité visuelle est souvent une question d\'augmentation de la fréquence d\'échantillonnage du modèle d\'illumination. En parallèle, le **lancer de rayons** offre une approche basée sur la simulation physique du trajet de la lumière. Bien que plus coûteux, il résout nativement des problèmes complexes comme les ombres, les réflexions et les réfractions. L\'avènement de l\'**équation de rendu** a fourni un cadre mathématique unificateur pour tout le transport de la lumière, transformant l\'infographie en une discipline de simulation. Le **Path Tracing**, en tant que méthode de Monte-Carlo pour résoudre cette équation, représente l\'état de l\'art pour la génération d\'images photoréalistes.

Enfin, l\'introduction de la dimension temporelle nous a menés à l\'**animation**. Nous avons contrasté le contrôle artistique direct de l\'**animation par images clés**, rendue fluide par l\'interpolation via des splines, avec le réalisme émergent de la **simulation physique**. La tendance actuelle est à la convergence de ces deux mondes, où des outils intelligents assistent l\'intention de l\'artiste avec des contraintes physiques pour produire des mouvements à la fois expressifs et crédibles.

En somme, l\'infographie est un domaine de dualités : géométrie et apparence, rastérisation et lancer de rayons, contrôle artistique et simulation physique. La maîtrise de cette discipline réside dans la compréhension de ces compromis et dans l\'art de les combiner pour repousser sans cesse les limites du possible, que ce soit pour créer des jeux vidéo interactifs, des films d\'animation saisissants ou des visualisations scientifiques éclairantes.

# **Chapitre 49 : Interaction Homme-Machine (IHM/HCI)**

L\'Interaction Homme-Machine (IHM), ou *Human-Computer Interaction* (HCI) en anglais, est une discipline scientifique, technologique et conceptuelle qui se situe au carrefour de l\'informatique, de la psychologie cognitive, du design et des sciences sociales. Son objectif fondamental est d\'étudier et d\'optimiser la relation entre les êtres humains et les systèmes informatiques. Loin de se limiter à la simple conception d\'interfaces graphiques esthétiques, l\'IHM s\'attache à rendre la technologie non seulement utilisable et efficace, mais également utile, accessible et agréable. La prémisse centrale de cette discipline est que les systèmes doivent être conçus pour l\'humain, en tenant compte de ses capacités, de ses limites et de ses objectifs. Cette approche place l\'utilisateur au cœur absolu du processus de conception, transformant la création de technologies d\'un exercice purement technique en une quête pour augmenter les capacités humaines et enrichir l\'expérience vécue.

Ce chapitre propose une exploration exhaustive de l\'Interaction Homme-Machine, en guidant le lecteur depuis les fondements psychologiques qui régissent la perception et la cognition humaines jusqu\'aux frontières les plus avancées de la discipline, telles que les interfaces immersives en réalité virtuelle et augmentée. La première section établira le socle théorique en examinant comment l\'architecture cognitive humaine contraint et informe la conception. La deuxième section fera le pont vers la pratique en présentant les principes directeurs et les heuristiques qui guident la création d\'interfaces utilisateur (UI) et la conception d\'une expérience utilisateur (UX) de qualité. La troisième section détaillera les méthodologies et les processus, notamment la conception centrée sur l\'utilisateur (UCD), qui permettent de mettre en œuvre ces principes de manière structurée et itérative. Enfin, les deux dernières sections aborderont des domaines spécialisés mais cruciaux : l\'accessibilité et la conception inclusive, qui visent à rendre la technologie équitable pour tous, et les défis uniques posés par les réalités étendues (XR), qui redéfinissent la nature même de l\'interaction.

## **49.1 Fondements Psychologiques et Cognitifs**

Pour concevoir des systèmes interactifs efficaces, il est impératif de comprendre l\'acteur principal de cette interaction : l\'être humain. La conception d\'interfaces n\'est pas un art subjectif, mais une science appliquée qui puise ses racines dans la psychologie cognitive. Comprendre comment les humains perçoivent, traitent, mémorisent l\'information et prennent des décisions est la clé pour créer des technologies qui semblent intuitives et naturelles. Cette section explore les modèles et les lois fondamentaux qui décrivent le fonctionnement du système cognitif humain et qui constituent le socle théorique sur lequel repose toute la discipline de l\'IHM.

### **49.1.1 Le Modèle du Processeur Humain (MPH) de Card, Moran et Newell**

Au début des années 1980, Stuart Card, Thomas Moran et Allen Newell ont proposé un modèle séminal qui a jeté les bases d\'une approche d\'ingénierie de l\'IHM : le Modèle du Processeur Humain (*Model Human Processor*, MPH). Ce modèle, décrit dans leur ouvrage de 1983,

*The Psychology of Human-Computer Interaction*, établit une analogie puissante entre l\'humain et un système de traitement de l\'information. Bien qu\'il s\'agisse d\'une simplification de la complexité de la cognition humaine, le MPH fournit un cadre quantitatif pour analyser et prédire la performance humaine dans des tâches d\'interaction de bas niveau.

Le modèle décompose le système humain en trois sous-systèmes interdépendants : le système perceptif, le système moteur et le système cognitif. Chacun de ces sous-systèmes est caractérisé par un processeur et des mémoires associées. Les paramètres clés qui décrivent ces composantes sont :

> Le temps de cycle du processeur (τ), qui représente le temps nécessaire pour un cycle de traitement élémentaire.
>
> La capacité de la mémoire (µ), soit la quantité d\'information pouvant être stockée.
>
> La persistance de l\'information en mémoire (δ), souvent exprimée comme la demi-vie d\'un élément d\'information.

#### **Le Système Perceptif et les Mémoires Sensorielles**

Le système perceptif est la porte d\'entrée de l\'information provenant de l\'environnement. Il est responsable de la transformation des stimuli physiques (lumière, son) en représentations internes. Le MPH postule un processeur perceptif avec un temps de cycle moyen τp​≈100 ms (avec une plage de 50 à 200 ms). Ce paramètre a des implications directes et concrètes pour la conception d\'interfaces. Par exemple, pour qu\'une séquence d\'images fixes soit perçue comme une animation fluide, chaque image doit être affichée pendant une durée inférieure à ce cycle. De même, deux événements se produisant à moins de 100 ms d\'intervalle sont souvent perçus comme simultanés, ce qui est crucial pour maintenir un sentiment de causalité directe dans l\'interface (par exemple, un retour visuel immédiat après un clic).

Associées au système perceptif, les mémoires sensorielles agissent comme des tampons de très courte durée qui retiennent une image fidèle du stimulus sensoriel juste assez longtemps pour qu\'il soit traité. On distingue principalement :

> **La mémoire iconique (visuelle) :** Elle a une capacité relativement grande (µ ≈ 17 \"lettres\") mais une persistance très faible (δ ≈ 200 ms). Elle permet au système cognitif d\'intégrer des informations visuelles qui arrivent séquentiellement, comme les saccades oculaires lors de la lecture.
>
> **La mémoire échoïque (auditive) :** Sa capacité est plus faible (µ ≈ 5 \"lettres\") mais sa persistance est nettement plus longue (δ ≈ 1500 ms). Cette persistance plus longue explique pourquoi nous pouvons parfois \"ré-entendre\" quelque chose qui vient d\'être dit, même si nous n\'y prêtions pas attention initialement.

#### **Le Système Cognitif et la Mémoire**

Le système cognitif est le cœur du traitement de l\'information. C\'est là que les décisions sont prises, que les problèmes sont résolus et que les souvenirs sont formés. Son processeur a un temps de cycle moyen τc​≈70 ms (avec une plage de 25 à 170 ms). Il opère selon un cycle fondamental de \"reconnaissance-action\" : à chaque cycle, le contenu de la mémoire de travail active des actions associées en mémoire à long terme, qui à leur tour modifient le contenu de la mémoire de travail. Le système cognitif s\'appuie sur deux systèmes de mémoire distincts mais interconnectés : la mémoire de travail et la mémoire à long terme.

La Mémoire de Travail (MDT)

La mémoire de travail (MDT), anciennement appelée mémoire à court terme, est l\'espace mental actif où l\'information est consciemment manipulée et traitée.6 Elle est le goulot d\'étranglement de la cognition humaine, car elle est sévèrement limitée sur deux dimensions cruciales :

> **Capacité limitée :** La MDT ne peut contenir qu\'un très petit nombre d\'éléments d\'information simultanément. George Miller, dans son article de 1956, a estimé cette capacité à \"sept, plus ou moins deux\" chunks (ou mnèmes). Un \"chunk\" est une unité d\'information significative (une lettre, un mot, un concept). Des recherches plus récentes suggèrent que la capacité réelle pourrait être encore plus faible, de l\'ordre de 3 à 4 chunks.
>
> **Persistance faible :** Sans effort de répétition ou de rafraîchissement, l\'information en MDT s\'estompe rapidement, en quelques secondes seulement (δ ≈ 7 s pour 3 chunks).

Cette double limitation de la mémoire de travail est le concept le plus important de la psychologie cognitive pour un concepteur d\'IHM. Toute tâche qui exige de l\'utilisateur qu\'il retienne et manipule trop d\'informations simultanément est vouée à provoquer des erreurs et de la frustration. C\'est la source fondamentale de ce que l\'on appelle la charge cognitive.

La Mémoire à Long Terme (MLT)

En contraste frappant avec la MDT, la mémoire à long terme (MLT) est un vaste réservoir de connaissances, de compétences et d\'expériences. Sa capacité et sa durée de stockage sont considérées comme quasi illimitées.1 L\'information y est stockée sous forme de réseaux sémantiques complexes, ou

**schémas**. Un schéma est une structure cognitive qui organise des connaissances sur un concept ou une procédure (par exemple, le schéma de \"conduire une voiture\" ou de \"commander dans un restaurant\").

L\'apprentissage est le processus par lequel l\'information est transférée de la MDT vers la MLT, par la construction et le renforcement de ces schémas. L\'expertise dans un domaine se caractérise par la possession de nombreux schémas riches et automatisés. Lorsqu\'un expert est confronté à une situation familière, il peut charger un schéma entier en mémoire de travail comme un seul \"chunk\", contournant ainsi les limites de la MDT et libérant des ressources cognitives pour des tâches de plus haut niveau.

#### **La Théorie de la Charge Cognitive (TCC)**

Développée par le psychologue de l\'éducation John Sweller dans les années 1980, la Théorie de la Charge Cognitive (TCC) s\'appuie directement sur les limitations de la mémoire de travail pour expliquer comment la charge mentale imposée par une tâche affecte l\'apprentissage et la performance. La TCC postule que la charge cognitive totale imposée à un utilisateur est la somme de trois types de charges distinctes  :

> **La Charge Cognitive Intrinsèque :** C\'est la complexité inhérente à la tâche elle-même, déterminée par le nombre d\'éléments d\'information à traiter simultanément et leurs interconnexions. Par exemple, apprendre une simple addition a une charge intrinsèque faible, tandis que comprendre la dérivation en calcul en a une élevée. Cette charge dépend aussi de l\'expertise de l\'utilisateur : ce qui est complexe pour un novice peut être simple pour un expert qui possède déjà les schémas pertinents en MLT.
>
> **La Charge Cognitive Extrinsèque (ou Inutile) :** C\'est la charge mentale imposée par la manière dont l\'information est présentée, et non par la tâche elle-même. Une interface mal conçue --- avec une navigation confuse, des informations superflues, une terminologie obscure ou une mise en page incohérente --- augmente la charge extrinsèque. L\'utilisateur doit dépenser de précieuses ressources cognitives pour \"comprendre l\'interface\" au lieu de \"réaliser sa tâche\".
>
> **La Charge Cognitive Essentielle (Germane) :** C\'est l\'effort mental que l\'utilisateur consacre activement à la construction de schémas et à l\'apprentissage, c\'est-à-dire au transfert d\'informations de la MDT vers la MLT. C\'est la \"bonne\" charge cognitive, celle qui mène à la compréhension et à la maîtrise.

L\'objectif principal de la conception d\'interface, du point de vue de la TCC, est de **minimiser la charge extrinsèque** afin de libérer le plus de ressources possible en mémoire de travail. Ces ressources peuvent alors être allouées soit à la gestion de la charge intrinsèque (pour les tâches complexes), soit à la promotion de la charge essentielle (pour l\'apprentissage). Une interface qui surcharge la mémoire de travail de l\'utilisateur avec des éléments inutiles (charge extrinsèque) entrave sa capacité à accomplir sa tâche et à apprendre à utiliser le système.

### **49.1.2 Lois Fondamentales et Modèles Prédictifs en IHM**

Au-delà du cadre général du MPH, la psychologie expérimentale a produit des lois quantitatives qui modélisent des aspects spécifiques de la performance humaine. Deux de ces lois sont particulièrement fondamentales en IHM car elles permettent de prédire le temps nécessaire pour effectuer des actions élémentaires : pointer et choisir.

#### **La Loi de Fitts : Modélisation du temps de pointage**

En 1954, le psychologue Paul Fitts a mené des expériences pour modéliser la vitesse et la précision du mouvement humain. Il a découvert une relation mathématique robuste qui prédit le temps nécessaire pour se déplacer vers une cible. La loi de Fitts est l\'un des modèles prédictifs les plus réussis et les plus durables en IHM.

La loi est généralement exprimée par la formule suivante :

T=a+blog2​(WD​+1)

Où :

> T est le temps moyen pour atteindre la cible.
>
> a et b sont des constantes empiriques qui dépendent du dispositif de pointage (souris, doigt, etc.).
>
> D est la distance entre le point de départ et le centre de la cible.
>
> W est la largeur de la cible, mesurée sur l\'axe du mouvement.

Le terme log2​(WD​+1) est appelé l\'**indice de difficulté (ID)** de la tâche. Il capture l\'essence de la loi : le temps de pointage augmente avec la distance à parcourir (D) et diminue avec la taille de la cible (W). Cette loi modélise le compromis fondamental entre vitesse et précision du système moteur humain : pour atteindre rapidement une cible lointaine ou petite, il faut une plus grande précision, ce qui demande plus de temps.

Bien que formulée bien avant l\'avènement des interfaces graphiques, la loi de Fitts a des implications profondes et directes pour leur conception :

> **Taille et espacement des cibles :** Les éléments interactifs (boutons, icônes, liens hypertextes) doivent être suffisamment grands pour être facilement et rapidement sélectionnés. C\'est particulièrement critique pour les interfaces tactiles, où le doigt est moins précis qu\'un curseur de souris. De plus, un espacement adéquat entre les cibles réduit le risque d\'erreurs de sélection.
>
> **La magie des coins et des bords de l\'écran :** Pour un curseur de souris, les bords et les coins d\'un écran agissent comme des barrières physiques. Le curseur ne peut pas aller plus loin. Du point de vue de la loi de Fitts, cela signifie que la largeur effective (W) de la cible dans la direction du bord est infinie. Par conséquent, l\'indice de difficulté est très faible, et ces zones sont les plus rapides à atteindre sur l\'écran. C\'est la raison pour laquelle les systèmes d\'exploitation placent stratégiquement des éléments d\'interaction importants aux bords de l\'écran, comme la barre de menus de macOS en haut ou la barre des tâches de Windows en bas.
>
> **Proximité des éléments liés :** Pour minimiser le temps de déplacement, les contrôles qui sont susceptibles d\'être utilisés en séquence doivent être placés à proximité les uns des autres. Par exemple, dans un formulaire, le bouton \"Soumettre\" devrait être placé juste après le dernier champ de saisie pour minimiser la distance D à parcourir. De même, les menus contextuels (clic droit) sont efficaces car ils apparaissent directement sous le curseur, rendant la distance\
> D quasi nulle.

#### **La Loi de Hick (ou Hick-Hyman) : Modélisation du temps de décision**

Alors que la loi de Fitts modélise le temps d\'une action physique, la loi de Hick modélise le temps d\'une action cognitive : la prise de décision. Formulée par William Hick et Ray Hyman dans les années 1950, elle stipule que le temps nécessaire pour prendre une décision augmente de manière logarithmique avec le nombre de choix disponibles.

La loi est exprimée par la formule :

T=blog2​(n+1)

Où :

> T est le temps de décision.
>
> b est une constante empirique.
>
> n est le nombre de choix possibles.

La relation logarithmique est cruciale : doubler le nombre de choix n\'entraîne pas un doublement du temps de décision, mais une augmentation constante. Néanmoins, chaque choix supplémentaire ajoute une charge cognitive et augmente le temps de réaction.

Les implications de la loi de Hick pour la conception d\'interfaces sont omniprésentes :

> **Simplification des menus et de la navigation :** Des listes de navigation longues et non structurées peuvent submerger l\'utilisateur et ralentir sa recherche d\'information. Il est préférable de regrouper les options en catégories logiques et de présenter une hiérarchie claire. Cela réduit le nombre effectif de choix (n) à chaque étape de la navigation.
>
> **Décomposition des tâches complexes :** Les processus qui impliquent de nombreuses décisions, comme un formulaire d\'inscription ou un processus de paiement en ligne, doivent être décomposés en plusieurs étapes plus petites. Chaque écran présente alors un nombre limité de choix, ce qui réduit la charge cognitive et le temps de décision à chaque étape, rendant le processus global moins intimidant et plus rapide à compléter.
>
> **Mise en évidence des options recommandées :** Lorsqu\'une interface présente de nombreux choix, mettre en évidence les options les plus courantes ou recommandées peut considérablement accélérer la décision pour la majorité des utilisateurs. Cela réduit l\'effort de recherche et de comparaison en guidant l\'attention de l\'utilisateur.
>
> **Intégration progressive (*Progressive Onboarding*) :** Pour les nouveaux utilisateurs, présenter d\'emblée toutes les fonctionnalités d\'une application complexe est une recette pour la surcharge cognitive. Une meilleure approche consiste à introduire les fonctionnalités progressivement, en ne montrant au début que l\'essentiel, puis en dévoilant des options plus avancées au fur et à mesure que l\'utilisateur se familiarise avec le système. L\'intégration de Slack est un excellent exemple de cette approche.

Le Modèle du Processeur Humain, bien que formulé il y a plusieurs décennies et parfois critiqué pour sa vision séquentielle qui ne capture pas entièrement le traitement parallèle du cerveau humain , demeure la pierre angulaire conceptuelle de l\'IHM. Sa valeur durable ne réside pas tant dans sa capacité à prédire avec une précision d\'ingénieur les temps de réaction, mais dans le fait qu\'il offre un

**modèle mental** puissant aux concepteurs. Il fournit la justification causale des principes de conception qui seront abordés plus loin. La capacité limitée de la mémoire de travail  est la raison fondamentale pour laquelle il faut privilégier la \"reconnaissance plutôt que le rappel\". Le compromis vitesse-précision du système moteur  est la raison d\'être de la loi de Fitts. Le cycle \"reconnaissance-action\" du processeur cognitif  explique pourquoi un retour d\'information immédiat est si vital. Ainsi, le MPH transforme les règles de design de simples directives en nécessités cognitives.

De même, les lois de Fitts et Hick ont vu leur rôle évoluer. Dans les interfaces modernes, qui incluent des interactions tactiles, gestuelles et en trois dimensions, l\'application littérale de leurs formules mathématiques devient complexe et parfois inadéquate. Par exemple, la notion de \"largeur\" d\'une cible gestuelle dans un espace 3D est ambiguë. La loi de Hick, quant à elle, suppose des choix discrets, alors que dans une interface riche, le contexte visuel et sémantique influence fortement la décision. Cependant, leur pertinence demeure intacte car elles se sont transformées de lois prédictives en

**heuristiques de conception** fondamentales. Le principe de Fitts (\"rendre les cibles importantes grandes et proches\") et celui de Hick (\"réduire et organiser les choix\") restent des guides extraordinairement puissants pour minimiser l\'effort physique et mental de l\'utilisateur. Elles ont évolué d\'outils d\'ingénierie pour des tâches simples à des principes directeurs pour la gestion de la complexité dans les systèmes interactifs modernes.

## **49.2 Principes de conception d\'interfaces (UI) et Expérience Utilisateur (UX)**

Après avoir établi les fondations cognitives qui régissent la manière dont les humains interagissent avec l\'information, il est temps de faire le pont vers la pratique du design. Comment traduire cette compréhension théorique en interfaces concrètes qui soient à la fois fonctionnelles et agréables à utiliser? Cette section présente les cadres de pensée, les principes et les règles empiriques qui guident la création de systèmes interactifs de haute qualité. Elle commence par clarifier une distinction fondamentale mais souvent mal comprise : celle entre l\'Interface Utilisateur (UI) et l\'Expérience Utilisateur (UX).

### **49.2.1 Distinction Fondamentale : Interface Utilisateur (UI) vs. Expérience Utilisateur (UX)**

Dans le domaine de la conception numérique, les termes \"UI\" et \"UX\" sont fréquemment utilisés, parfois de manière interchangeable, ce qui peut prêter à confusion. Pourtant, ils désignent deux aspects distincts mais interdépendants du processus de conception. Comprendre leur différence est essentiel pour appréhender la portée de l\'IHM moderne.

#### **Définition de l\'Interface Utilisateur (UI)**

L\'Interface Utilisateur (UI) représente le **point de contact tangible et visible** entre un utilisateur et un produit numérique. Elle concerne l\'ensemble des éléments visuels et interactifs qu\'un utilisateur voit et avec lesquels il interagit sur un écran. L\'UI est une discipline strictement numérique. Ses composantes incluent :

> **Les éléments visuels :** La typographie, les palettes de couleurs, les icônes, les images, l\'espacement et la mise en page générale des écrans.
>
> **Les éléments interactifs :** Les boutons, les champs de formulaire, les menus déroulants, les barres de navigation, les interrupteurs (toggles) et tout autre contrôle permettant à l\'utilisateur de manipuler le système.

Le travail d\'un designer UI est de traduire la structure et la logique d\'un produit (souvent définies par le designer UX) en une interface graphique polie, esthétiquement plaisante et fonctionnelle. Une bonne UI est claire, cohérente et efficace. Elle guide l\'œil de l\'utilisateur, rend les actions évidentes et crée une identité visuelle forte pour le produit. Quand elle est bien faite, l\'UI devient presque invisible : l\'utilisateur n\'a pas à réfléchir à la manière d\'utiliser l\'interface, il l\'utilise simplement.

#### **Définition de l\'Expérience Utilisateur (UX)**

L\'Expérience Utilisateur (UX) est un concept beaucoup plus large et holistique. Elle englobe le **ressenti global et l\'ensemble des perceptions** d\'une personne lorsqu\'elle interagit avec un produit, un service ou une entreprise. Contrairement à l\'UI, l\'UX n\'est pas limitée au monde numérique ; on peut parler de l\'UX d\'une cafetière, d\'un service de transport en commun ou d\'une visite dans un magasin.

L\'UX design se concentre sur la totalité du parcours de l\'utilisateur pour résoudre un problème ou atteindre un objectif. Il s\'intéresse à des questions telles que :

> **L\'utilité :** Le produit répond-il à un besoin réel?
>
> **L\'utilisabilité :** Le produit est-il facile et efficace à utiliser? 
>
> **L\'accessibilité :** Le produit peut-il être utilisé par des personnes ayant des capacités diverses?
>
> **La désirabilité :** L\'expérience est-elle agréable, engageante et émotionnellement satisfaisante?
>
> **La crédibilité :** L\'utilisateur a-t-il confiance dans le produit et l\'entreprise qui le propose?

Le designer UX travaille en amont et tout au long du projet. Ses tâches incluent la recherche utilisateur pour comprendre les besoins et les frustrations, la création de personas, la définition de l\'architecture de l\'information, la conception des parcours utilisateurs et la création de prototypes pour tester les concepts.

#### **La Relation entre UI et UX : Une Synergie Essentielle**

La meilleure façon de comprendre la relation entre UI et UX est de reconnaître que **l\'UI est une composante cruciale de l\'UX, mais qu\'elle ne la définit pas entièrement**. Une bonne UX est le résultat d\'une orchestration réussie de nombreux facteurs, dont l\'UI.

Une analogie couramment utilisée est celle de la construction d\'une maison :

> **L\'UX est l\'architecte.** Il conçoit les fondations, la structure, l\'agencement des pièces et la circulation pour s\'assurer que la maison est fonctionnelle, sûre et répond aux besoins de ses habitants.
>
> **L\'UI est le décorateur d\'intérieur.** Il choisit la couleur des murs, le mobilier, l\'éclairage et les finitions pour rendre la maison esthétiquement plaisante et agréable à vivre.

Une maison avec une architecture brillante (bonne UX) mais une décoration laide et peu pratique (mauvaise UI) ne sera pas une expérience agréable. Inversement, une maison magnifiquement décorée (bonne UI) mais avec des couloirs trop étroits et une cuisine non fonctionnelle (mauvaise UX) sera une source de frustration quotidienne.

Dans le monde numérique, cela se traduit par des exemples concrets :

> Un site de commerce électronique peut avoir une apparence magnifique avec de belles images et une typographie élégante (bonne UI), mais si le processus de paiement est long, confus et demande des informations redondantes, l\'expérience utilisateur globale (UX) sera mauvaise, et les ventes en souffriront.
>
> À l\'inverse, un site web peut être très fonctionnel et permettre de trouver rapidement l\'information (bonne UX), mais s\'il a une apparence datée et peu professionnelle (mauvaise UI), il risque de ne pas inspirer confiance et de faire fuir les utilisateurs.

La distinction entre UI et UX marque une étape importante dans la maturité de la discipline de l\'IHM. Les débuts du domaine étaient fortement axés sur l\'ergonomie de l\'artefact technique et graphique (l\'UI), avec des questions comme \"Ce bouton est-il assez grand?\" ou \"Ce menu est-il lisible?\". L\'émergence du terme UX, popularisé par Don Norman alors qu\'il travaillait chez Apple , a élargi le champ de vision pour englober l\'ensemble du parcours de l\'utilisateur, y compris ses émotions, ses objectifs et son contexte. Ce passage d\'une perspective d\'ingénierie centrée sur le produit à une perspective holistique centrée sur l\'humain est l\'essence même de l\'IHM moderne.

### **49.2.2 Les 10 Heuristiques d\'Utilisabilité de Jakob Nielsen**

Pour guider la conception et l\'évaluation d\'interfaces, des ensembles de principes directeurs ont été développés. Parmi les plus influents et les plus utilisés figurent les **10 heuristiques d\'utilisabilité** proposées par Jakob Nielsen et Rolf Molich au début des années 1990. Une \"heuristique\" est une règle empirique, un principe général qui sert de guide pour la résolution de problèmes ou la prise de décision. Ce ne sont pas des règles spécifiques et rigides, mais plutôt des points de repère qui aident les concepteurs à créer des interfaces plus utilisables et les évaluateurs à identifier rapidement les problèmes potentiels lors d\'une

**évaluation heuristique**.

Ces heuristiques ne sont pas des inventions arbitraires ; elles sont des traductions pratiques des limitations et des capacités du processeur humain décrites dans la section précédente. Chaque heuristique peut être vue comme un \"symptôme\" observable d\'un principe cognitif sous-jacent.

#### **1. Visibilité de l\'état du système**

> **Principe :** Le système doit toujours tenir les utilisateurs informés de ce qui se passe, en fournissant un retour d\'information approprié dans un délai raisonnable.
>
> **Lien cognitif :** Cette heuristique répond au besoin humain de contrôle et de prévisibilité. Sans retour d\'information, l\'utilisateur est dans l\'incertitude, ce qui augmente la charge cognitive et l\'anxiété. Un feedback immédiat confirme que l\'action a été prise en compte et permet à l\'utilisateur de planifier sa prochaine action.
>
> **Bonne conception :** Une barre de progression claire lors du téléchargement d\'un fichier, l\'icône \"en cours de frappe\...\" dans une messagerie instantanée, ou un message de confirmation \"Article ajouté au panier\" sur un site de commerce électronique.
>
> **Mauvaise conception :** Cliquer sur un bouton \"Envoyer\" et ne voir aucune indication que le système traite la demande. L\'utilisateur ne sait pas s\'il doit attendre, cliquer à nouveau ou si l\'action a échoué.

#### **2. Correspondance entre le système et le monde réel**

> **Principe :** Le système doit parler le langage de l\'utilisateur, avec des mots, des phrases et des concepts familiers, plutôt qu\'un jargon technique. Les informations doivent apparaître dans un ordre naturel et logique.
>
> **Lien cognitif :** Cette heuristique tire parti des schémas mentaux existants de l\'utilisateur, stockés dans sa mémoire à long terme. En utilisant des métaphores et des conventions du monde réel, on réduit la charge cognitive nécessaire pour apprendre et comprendre l\'interface.
>
> **Bonne conception :** L\'utilisation d\'une icône de corbeille pour la suppression de fichiers, le concept de \"panier\" pour les achats en ligne, ou des interrupteurs virtuels qui ressemblent et se comportent comme des interrupteurs physiques.
>
> **Mauvaise conception :** Afficher un message d\'erreur cryptique comme \"Erreur d\'exécution 0x80070057\" au lieu d\'expliquer le problème en termes simples.

#### **3. Contrôle et liberté de l\'utilisateur**

> **Principe :** Les utilisateurs font souvent des erreurs. Ils ont besoin d\'une \"sortie de secours\" clairement marquée pour quitter un état non désiré sans avoir à suivre un long processus. Les fonctions \"Annuler\" et \"Refaire\" sont essentielles.
>
> **Lien cognitif :** La possibilité d\'annuler une action réduit l\'anxiété et la peur de l\'erreur. Cela encourage l\'exploration et l\'apprentissage, car l\'utilisateur sait qu\'il peut revenir en arrière s\'il se trompe. Cela soutient un sentiment de contrôle et d\'agentivité.
>
> **Bonne conception :** Le bouton \"Annuler\" dans la fenêtre d\'envoi d\'un courriel sur Gmail, qui apparaît brièvement après l\'envoi, ou la fonction \"Annuler la frappe\" (Ctrl+Z) omniprésente dans les éditeurs de texte.
>
> **Mauvaise conception :** Une fenêtre modale qui ne peut être fermée qu\'en faisant un choix, sans option d\'annulation, piégeant ainsi l\'utilisateur. Ou encore, un processus en plusieurs étapes qui ne permet pas de revenir à l\'étape précédente pour corriger une information.

#### **4. Cohérence et standards**

> **Principe :** Les utilisateurs ne devraient pas avoir à se demander si des mots, des situations ou des actions différents signifient la même chose. Il faut suivre les conventions de la plateforme et maintenir une cohérence interne.
>
> **Lien cognitif :** La cohérence permet aux utilisateurs de transférer leurs connaissances d\'une partie d\'un site à une autre, et d\'un site à un autre (c\'est la **Loi de Jakob** : les utilisateurs passent la plupart de leur temps sur *d\'autres* sites). Cela réduit la charge d\'apprentissage et rend l\'interface prévisible.
>
> **Bonne conception :** Utiliser une icône de loupe pour la recherche, placer le logo de l\'entreprise en haut à gauche comme lien vers la page d\'accueil, et maintenir une structure de navigation et un style visuel constants sur toutes les pages d\'un site web.
>
> **Mauvaise conception :** Changer l\'emplacement du menu de navigation principal d\'une page à l\'autre, ou utiliser le même mot pour désigner deux actions différentes dans l\'interface.

#### **5. Prévention des erreurs**

> **Principe :** Une conception soignée qui prévient les problèmes est préférable à de bons messages d\'erreur.
>
> **Lien cognitif :** La détection et la correction d\'erreurs sont des processus cognitivement coûteux qui interrompent le flux de la tâche de l\'utilisateur. Prévenir l\'erreur en amont minimise cette charge.
>
> **Bonne conception :** Griser le bouton \"Soumettre\" d\'un formulaire tant que tous les champs obligatoires ne sont pas remplis. Proposer une boîte de dialogue de confirmation avant une action destructive comme \"Voulez-vous vraiment supprimer ce fichier?\". Utiliser des sélecteurs de date au lieu de champs de texte libre pour éviter les formats incorrects.
>
> **Mauvaise conception :** Un formulaire qui permet à l\'utilisateur de soumettre des données incorrectes (par exemple, des lettres dans un champ de numéro de carte de crédit) pour ensuite afficher une page d\'erreur.

#### **6. Reconnaître plutôt que se rappeler**

> **Principe :** Minimiser la charge mémorielle de l\'utilisateur en rendant les objets, les actions et les options visibles. L\'utilisateur ne devrait pas avoir à se souvenir d\'informations d\'une partie de l\'interface à une autre.
>
> **Lien cognitif :** C\'est une application directe de la limitation de la mémoire de travail. La reconnaissance (identifier quelque chose de familier) est cognitivement beaucoup moins exigeante que le rappel (récupérer une information de la mémoire sans indice).
>
> **Bonne conception :** Afficher les \"articles récemment consultés\" sur un site de commerce électronique. Les menus des éditeurs de texte qui montrent toutes les options disponibles au lieu d\'exiger de l\'utilisateur qu\'il se souvienne des commandes.
>
> **Mauvaise conception :** Un site de voyage qui demande à l\'utilisateur de se souvenir et de retaper les informations de son vol sur la page de location de voiture, au lieu de les pré-remplir automatiquement.

#### **7. Flexibilité et efficacité d\'utilisation**

> **Principe :** Le système doit être efficace à la fois pour les utilisateurs novices et experts. Des accélérateurs, invisibles pour les novices, peuvent souvent accélérer l\'interaction pour les experts.
>
> **Lien cognitif :** L\'apprentissage modifie les schémas mentaux. Une interface flexible permet aux utilisateurs de passer de stratégies d\'exploration (novices) à des stratégies d\'exécution optimisées (experts) à mesure qu\'ils se familiarisent avec le système.
>
> **Bonne conception :** Les raccourcis clavier (par exemple, Ctrl+C pour copier) dans les logiciels de bureau. La possibilité de personnaliser une barre d\'outils pour y placer les fonctions les plus utilisées.
>
> **Mauvaise conception :** Un système qui force tous les utilisateurs, même les plus expérimentés, à passer par un assistant en plusieurs étapes pour accomplir une tâche simple et répétitive.

#### **8. Esthétique et design minimaliste**

> **Principe :** Les dialogues ne doivent contenir que des informations pertinentes et nécessaires. Chaque unité d\'information supplémentaire dans une interface rivalise avec les unités pertinentes et diminue leur visibilité relative.
>
> **Lien cognitif :** Cette heuristique vise à maximiser le \"ratio signal/bruit\". En éliminant le bruit (éléments visuels ou textuels non pertinents), on réduit la charge cognitive extrinsèque et on permet à l\'utilisateur de se concentrer plus facilement sur le signal (l\'information et les actions importantes).
>
> **Bonne conception :** La page d\'accueil de Google, qui est presque entièrement dédiée à sa fonction principale : la recherche.
>
> **Mauvaise conception :** Une page d\'actualités surchargée de publicités clignotantes, de pop-ups, de vidéos en lecture automatique et de multiples colonnes de texte, rendant difficile la lecture de l\'article principal.

#### **9. Aider les utilisateurs à reconnaître, diagnostiquer et corriger les erreurs**

> **Principe :** Les messages d\'erreur doivent être exprimés en langage clair (sans codes), indiquer précisément le problème et suggérer de manière constructive une solution.
>
> **Lien cognitif :** Un bon message d\'erreur transforme une situation de blocage en une opportunité d\'apprentissage. Il guide l\'utilisateur vers la solution, réduit la frustration et lui permet de conserver son sentiment de contrôle sur le système.
>
> **Bonne conception :** Lorsqu\'un utilisateur crée un mot de passe, un message comme : \"Le mot de passe doit contenir au moins 8 caractères, une majuscule et un chiffre\" avec une indication visuelle des critères respectés.
>
> **Mauvaise conception :** Un message laconique comme \"Mot de passe invalide\" ou, pire, un code d\'erreur comme \"Erreur #5051\".

#### **10. Aide et documentation**

> **Principe :** Même s\'il est préférable que le système puisse être utilisé sans documentation, il peut être nécessaire de fournir une aide. Cette information doit être facile à rechercher, axée sur la tâche de l\'utilisateur, présenter des étapes concrètes et ne pas être trop volumineuse.
>
> **Lien cognitif :** L\'aide doit être conçue pour minimiser la charge cognitive. Une aide contextuelle, qui apparaît au moment et à l\'endroit où elle est nécessaire, est beaucoup plus efficace qu\'un manuel d\'utilisation massif que l\'utilisateur doit lire et mémoriser.
>
> **Bonne conception :** Une petite icône \"?\" à côté d\'un champ de formulaire complexe qui, au survol, affiche une infobulle expliquant ce qui est attendu. Une barre de recherche bien visible dans une section FAQ.
>
> **Mauvaise conception :** Un unique lien \"Aide\" dans le pied de page du site qui mène à un document PDF de 200 pages, non interrogeable et mal structuré.

### **49.2.3 Les 8 Règles d\'Or de la Conception d\'Interfaces de Ben Shneiderman**

Contemporain des travaux de Nielsen, Ben Shneiderman, un autre pionnier de l\'IHM, a proposé son propre ensemble de principes, connus sous le nom des **8 Règles d\'Or de la Conception d\'Interfaces**. Bien qu\'il y ait des chevauchements significatifs avec les heuristiques de Nielsen, les règles de Shneiderman mettent un accent particulier sur l\'autonomisation de l\'utilisateur et le sentiment de contrôle. Elles sont moins un outil d\'évaluation qu\'une philosophie de conception proactive.

> **Rechercher la cohérence :** Cette règle, similaire à celle de Nielsen, insiste sur la cohérence des séquences d\'actions, de la terminologie et des mises en page. Des actions similaires devraient être représentées de manière similaire pour assurer la prévisibilité.
>
> **Permettre aux utilisateurs fréquents d\'utiliser des raccourcis :** Identique à l\'heuristique 7 de Nielsen, cette règle préconise de concevoir des interfaces qui permettent aux experts d\'augmenter leur vitesse d\'interaction via des raccourcis, des touches de fonction ou des macros.
>
> **Offrir un feedback informatif :** Pour chaque action de l\'utilisateur, le système doit fournir un retour. Shneiderman précise que la nature du feedback doit être proportionnelle à l\'importance de l\'action : un feedback discret pour les actions fréquentes et mineures, et un feedback plus substantiel pour les actions importantes et rares.
>
> **Concevoir des dialogues qui aboutissent à une clôture :** Les séquences d\'actions devraient être organisées en groupes avec un début, un milieu et une fin clairs. La fin d\'une transaction ou d\'une tâche doit être marquée par un feedback informatif (par exemple, un message de confirmation \"Votre commande a été passée\"), ce qui procure à l\'utilisateur un sentiment d\'accomplissement et libère sa mémoire de travail.
>
> **Offrir une gestion simple des erreurs :** Cette règle combine la prévention et la correction. L\'interface doit être conçue pour minimiser la possibilité d\'erreurs. Si une erreur se produit, le système doit offrir des mécanismes simples et compréhensibles pour permettre à l\'utilisateur de se remettre sur la bonne voie.
>
> **Permettre une réversibilité aisée des actions :** Comme l\'heuristique 3 de Nielsen, cette règle souligne l\'importance des fonctions \"Annuler\". Shneiderman insiste sur le fait que cette capacité réduit l\'anxiété de l\'utilisateur et encourage l\'exploration d\'options inconnues, car les actions ne sont pas perçues comme irréversibles.
>
> **Soutenir un locus de contrôle interne :** C\'est peut-être la contribution la plus distinctive de Shneiderman. Cette règle stipule que les utilisateurs expérimentés désirent ardemment sentir qu\'ils sont aux commandes du système et que le système répond à leurs actions. Ils doivent être les initiateurs des actions, pas simplement des répondants. Le système doit être prévisible et ne pas effectuer d\'actions inattendues. Un design qui respecte cette règle donne à l\'utilisateur un sentiment de compétence et de confiance.
>
> **Réduire la charge de la mémoire à court terme :** En lien direct avec les limites de la mémoire de travail, cette règle préconise de concevoir des interfaces qui ne nécessitent pas que l\'utilisateur se souvienne d\'informations d\'un écran à l\'autre. Shneiderman cite la nécessité d\'affichages simples, de multiples fenêtres pour la comparaison d\'informations et de formats de saisie de données qui réduisent la charge mémorielle.

Ensemble, les heuristiques de Nielsen et les règles de Shneiderman forment un corpus de principes de conception robustes et éprouvés. Un concepteur qui comprend les fondements cognitifs de la section 49.1 n\'a pas besoin de mémoriser ces 18 principes comme un dogme. Il peut plutôt les déduire et les appliquer de manière flexible en se posant continuellement la question fondamentale : \"Cette conception respecte-t-elle les limites de la mémoire, de l\'attention et de la perception de mon utilisateur?\".

## **49.3 Processus de Conception Centrée Utilisateur (UCD) et Évaluation**

La connaissance des principes cognitifs et des heuristiques de conception est nécessaire mais pas suffisante pour garantir la création d\'un produit réussi. Il faut une méthodologie structurée pour appliquer ces connaissances de manière systématique et, surtout, pour valider les décisions de conception auprès des véritables utilisateurs. Cette méthodologie est la Conception Centrée Utilisateur (UCD, pour *User-Centered Design*). Elle représente le passage d\'une conception basée sur l\'intuition du concepteur à une conception basée sur des données empiriques provenant des utilisateurs.

### **49.3.1 Le Processus de Conception Centrée Utilisateur (UCD)**

#### **Philosophie et Principes**

La Conception Centrée Utilisateur est avant tout une **philosophie de conception** qui place les besoins, les objectifs et les limites des utilisateurs finaux au centre de chaque étape du processus de développement. Son postulat fondamental est que les personnes les mieux placées pour guider la conception d\'un produit sont celles qui l\'utiliseront au final. L\'objectif est de créer des produits qui ne sont pas seulement techniquement réalisables et commercialement viables, mais qui sont surtout désirables et utilisables du point de vue de l\'utilisateur, ce qui conduit à une meilleure adoption, une plus grande satisfaction et une fidélité accrue.

La norme internationale ISO 9241-210 (qui remplace l\'ancienne ISO 13407) formalise les principes de la conception centrée sur l\'opérateur humain. Ces principes incluent :

> Une conception basée sur une compréhension explicite des utilisateurs, de leurs tâches et de leurs environnements.
>
> La participation active des utilisateurs tout au long du processus de conception et de développement.
>
> Une conception pilotée et affinée par des évaluations centrées sur l\'utilisateur.
>
> Un processus itératif où les solutions sont progressivement améliorées.
>
> Une conception qui prend en compte l\'ensemble de l\'expérience utilisateur.
>
> Une équipe de conception multidisciplinaire, intégrant des compétences en design, en psychologie, en ingénierie et en gestion de produit.

#### **Le Cycle Itératif de l\'UCD**

L\'UCD n\'est pas un processus linéaire avec un début et une fin définis, mais un **cycle itératif**. Chaque cycle est une boucle qui permet d\'affiner progressivement la solution de conception en se basant sur les retours d\'information. Ce processus de raffinement continu est fondamental, car il reconnaît qu\'il est presque impossible de concevoir la solution parfaite du premier coup. L\'itération permet de construire, de tester, d\'apprendre et d\'améliorer de manière cyclique.

Le cycle UCD, tel que défini par la norme ISO, se compose de quatre phases interdépendantes qui se répètent tout au long du projet :

1\. Comprendre et spécifier le contexte d\'utilisation

Cette première phase est une phase de recherche et d\'analyse. L\'objectif est de répondre à des questions fondamentales sur les utilisateurs et leur monde.52

> **Qui sont les utilisateurs?** On cherche à comprendre leurs caractéristiques démographiques, leurs compétences, leur expérience, leurs limitations et leurs motivations. Des outils comme les **personas** (représentations archétypales et semi-fictives des utilisateurs cibles) sont créés à cette étape pour donner un visage humain à la cible.
>
> **Quelles sont leurs tâches et leurs objectifs?** On analyse les buts que les utilisateurs cherchent à atteindre et les étapes concrètes (tâches) qu\'ils réalisent pour y parvenir.
>
> **Dans quel environnement opèrent-ils?** On étudie le contexte physique (bureau, mobilité), social (travail en équipe, pression sociale) et technique (appareils utilisés, connectivité) dans lequel l\'interaction aura lieu.\
> \
> Les méthodes utilisées à cette étape incluent les entretiens avec les utilisateurs, les sondages, l\'observation sur le terrain et l\'analyse de données existantes.51

2\. Spécifier les exigences de l\'utilisateur et de l\'organisation

Les informations collectées lors de la première phase sont ensuite traduites en exigences claires et mesurables.52 Ces exigences définissent ce que le système doit faire pour répondre aux besoins des utilisateurs tout en étant aligné avec les objectifs de l\'organisation (par exemple, augmenter les revenus, réduire les coûts de support).56

> **Exigences utilisateur :** Elles décrivent les besoins et les objectifs de l\'utilisateur (par exemple, \"L\'utilisateur doit pouvoir comparer deux produits côte à côte\").
>
> **Exigences fonctionnelles :** Elles découlent des exigences utilisateur et spécifient les fonctionnalités concrètes du système (par exemple, \"Le système doit fournir un bouton \'Comparer\' sur les pages produits\").
>
> **Exigences d\'utilisabilité :** Elles définissent des objectifs de performance mesurables (par exemple, \"Un nouvel utilisateur doit pouvoir finaliser un achat en moins de 3 minutes avec un taux de succès de 95%\").

3\. Produire des solutions de conception

C\'est la phase de création où les idées prennent forme. L\'équipe de conception génère des solutions pour répondre aux exigences définies.56 Ces solutions sont matérialisées à travers une série d\'artefacts de fidélité croissante :

> **Croquis et wireframes basse-fidélité :** Des dessins simples, souvent sur papier, qui se concentrent sur la structure, la mise en page et le flux d\'interaction, sans se soucier des détails visuels.
>
> **Maquettes (Mockups) moyenne-fidélité :** Des représentations visuelles plus détaillées de l\'interface, incluant les couleurs, la typographie et les icônes, mais généralement statiques.
>
> **Prototypes haute-fidélité :** Des versions interactives de l\'interface qui simulent de près le produit final. Ils permettent de tester non seulement l\'apparence mais aussi le comportement de l\'interface.

4\. Évaluer la conception

Cette phase est le moteur de l\'itération. Les solutions de conception produites sont testées par rapport aux exigences définies, en impliquant les utilisateurs.51 L\'objectif est d\'identifier ce qui fonctionne bien et, plus important encore, ce qui pose problème (points de friction, erreurs, incompréhensions).59 Les résultats de cette évaluation --- qu\'ils soient qualitatifs ou quantitatifs --- alimentent directement la phase suivante du cycle. Les problèmes identifiés mènent à une nouvelle phase de compréhension, de redéfinition des exigences ou de production de nouvelles solutions de conception. Le cycle se répète jusqu\'à ce que les objectifs d\'utilisabilité soient atteints et que la conception soit jugée satisfaisante.

Ce processus itératif est une forme de **réduction du risque**. Plutôt que de parier sur une conception unique développée en vase clos pendant des mois, l\'UCD valide les hypothèses à chaque étape. La recherche utilisateur réduit le risque de construire un produit dont personne n\'a besoin. Le prototypage réduit le risque de s\'engager dans un développement coûteux sur la base d\'une mauvaise idée. L\'évaluation continue réduit le risque de lancer un produit inutilisable. Ainsi, l\'UCD n\'est pas une dépense supplémentaire, mais un investissement stratégique qui augmente considérablement les chances de succès d\'un produit en assurant son adéquation avec les besoins du marché.

### **49.3.2 Méthodes d\'Évaluation de l\'Utilisabilité**

L\'évaluation est au cœur du processus UCD. Il existe une panoplie de méthodes pour évaluer l\'utilisabilité d\'une interface, chacune avec ses forces, ses faiblesses et son contexte d\'application idéal. On peut les classer en deux grandes familles : les méthodes d\'inspection, qui reposent sur l\'expertise de spécialistes sans impliquer directement les utilisateurs finaux, et les méthodes empiriques, qui consistent à observer des utilisateurs réels en interaction avec le système.

#### **Méthodes d\'Inspection (par des experts)**

Ces méthodes sont souvent qualifiées de \"discount usability\" car elles sont généralement plus rapides et moins coûteuses à mettre en œuvre que les tests avec des utilisateurs.

Évaluation Heuristique

L\'évaluation heuristique est l\'une des méthodes d\'inspection les plus populaires. Elle consiste à faire inspecter une interface par un petit groupe d\'évaluateurs experts (typiquement 3 à 5).39 Chaque expert examine l\'interface de manière indépendante et juge sa conformité par rapport à un ensemble de principes d\'utilisabilité reconnus, appelés

**heuristiques** (le plus souvent, les 10 heuristiques de Jakob Nielsen décrites dans la section précédente).

> **Processus :** Les évaluateurs parcourent l\'interface et notent chaque problème d\'utilisabilité qu\'ils rencontrent, en spécifiant quelle(s) heuristique(s) est (sont) violée(s). Ils attribuent également un score de sévérité à chaque problème (par exemple, de cosmétique à catastrophique) pour aider à prioriser les corrections.
>
> **Avantages :** C\'est une méthode rapide, peu coûteuse et facile à organiser. Elle peut être appliquée très tôt dans le processus de conception, même sur des maquettes statiques, et permet de détecter un grand nombre de problèmes évidents.
>
> **Limites :** La qualité des résultats dépend fortement de l\'expertise des évaluateurs. Il y a un risque de \"faux positifs\" (signaler des problèmes qui n\'en sont pas réellement pour les utilisateurs) et de manquer des problèmes spécifiques au contexte d\'usage des utilisateurs réels. La méthode reste subjective et ne remplace pas l\'observation directe des utilisateurs.

Inspection Cognitive (Cognitive Walkthrough)

L\'inspection cognitive est une méthode d\'inspection plus structurée, spécifiquement conçue pour évaluer la facilité d\'apprentissage d\'une interface, en particulier pour les nouveaux utilisateurs.62 L\'évaluateur se met dans la peau d\'un utilisateur novice qui tente d\'accomplir une tâche spécifique pour la première fois.

> **Processus :** Pour chaque étape de la tâche, l\'évaluateur essaie de raconter une \"histoire crédible\" de l\'interaction en répondant à quatre questions fondamentales :

**L\'utilisateur essaiera-t-il d\'atteindre le bon objectif?** (L\'utilisateur sait-il ce qu\'il doit faire à cette étape?)

**L\'utilisateur remarquera-t-il que l\'action correcte est disponible?** (Le contrôle nécessaire est-il visible et identifiable?)

**L\'utilisateur associera-t-il l\'action correcte à l\'objectif qu\'il poursuit?** (L\'étiquette ou l\'icône du contrôle est-elle compréhensible?)

**Si l\'action correcte est effectuée, l\'utilisateur verra-t-il que des progrès sont réalisés vers son objectif?** (Le feedback du système est-il clair et encourageant?).\
\
Si l\'évaluateur ne peut pas répondre \"oui\" de manière convaincante à l\'une de ces questions, il identifie un problème d\'utilisabilité potentiel.

> **Avantages :** Très efficace pour identifier les obstacles à l\'apprentissage et les ruptures dans le flux d\'une tâche. Elle fournit des diagnostics très précis sur les causes des problèmes.
>
> **Limites :** Elle est laborieuse et peut prendre beaucoup de temps pour des tâches complexes. Elle se concentre sur le parcours d\'un nouvel utilisateur et peut manquer des problèmes liés à une utilisation à long terme ou à l\'efficacité.

#### **Méthodes Empiriques (avec des utilisateurs)**

Ces méthodes sont considérées comme fournissant les données les plus fiables car elles proviennent de l\'observation directe du public cible.

Tests d\'Utilisabilité

Le test d\'utilisabilité est la méthode d\'évaluation la plus fondamentale et la plus efficace en IHM.67 Il consiste à observer des utilisateurs représentatifs de la population cible pendant qu\'ils tentent de réaliser des tâches réalistes à l\'aide du produit ou d\'un prototype.59 L\'objectif n\'est pas de tester l\'utilisateur, mais de

**tester le produit** pour voir où il échoue à répondre à ses besoins.

> **Protocole :** La préparation est essentielle. Elle inclut la définition d\'objectifs clairs pour le test, le recrutement de participants correspondant aux personas (souvent, 5 utilisateurs suffisent pour identifier environ 85% des problèmes d\'utilisabilité), la rédaction d\'un scénario de test avec des tâches concrètes et la préparation d\'une grille d\'observation pour recueillir les données.
>
> **Déroulement :** Les tests peuvent être **modérés**, avec un facilitateur qui guide la session, pose des questions et s\'assure que l\'utilisateur est à l\'aise, ou **non modérés**, où l\'utilisateur suit des instructions via un logiciel. Ils peuvent avoir lieu en laboratoire (environnement contrôlé) ou à distance (dans le contexte naturel de l\'utilisateur). Une technique courante est le protocole du \"penser à voix haute\" (\
> *think-aloud*), où l\'on demande à l\'utilisateur de verbaliser ses pensées, ses attentes et ses frustrations pendant qu\'il interagit avec l\'interface.
>
> **Analyse :** Les données recueillies sont à la fois **quantitatives** (taux de succès des tâches, temps de complétion, nombre d\'erreurs) et **qualitatives** (observations des comportements, citations des utilisateurs, réponses aux questionnaires de satisfaction comme le SUS - *System Usability Scale*). L\'analyse de ces données permet d\'identifier les problèmes d\'utilisabilité, de comprendre leurs causes profondes, de les prioriser en fonction de leur impact et de formuler des recommandations de conception concrètes.

Ces méthodes d\'évaluation ne sont pas mutuellement exclusives ; au contraire, elles sont plus puissantes lorsqu\'elles sont combinées de manière stratégique. Un processus d\'évaluation mature peut commencer par une évaluation heuristique en début de projet pour un \"nettoyage\" rapide et peu coûteux des défauts les plus évidents. Ensuite, une inspection cognitive peut être utilisée pour affiner le parcours d\'apprentissage sur un premier prototype. Enfin, des tests d\'utilisabilité sur un prototype plus avancé permettent de valider la conception et de découvrir des problèmes plus subtils et contextuels que seuls de vrais utilisateurs peuvent révéler. Cette approche en couches assure que les tests utilisateurs, plus coûteux, sont utilisés de manière plus efficace, en se concentrant sur les problèmes complexes plutôt que sur des erreurs de conception évidentes que les experts auraient pu corriger en amont.

#### **Tableau Comparatif des Méthodes d\'Évaluation**

Le tableau suivant synthétise et compare les trois principales méthodes d\'évaluation discutées, offrant un guide pour choisir l\'approche la plus appropriée en fonction des objectifs et des contraintes d\'un projet.

  ---------------------------- ------------ ---------------------- ------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------
  Méthode d\'Évaluation        Type         Participants           Phase du Projet                             Avantages                                                                                                                        Inconvénients

  **Test d\'utilisabilité**    Empirique    Utilisateurs finaux    Conception, Développement, Post-lancement   Données réelles et objectives , identifie problèmes concrets et inattendus, mesure la satisfaction.                      Coûteux en temps et en argent, logistique de recrutement complexe.

  **Évaluation Heuristique**   Inspection   Experts en ergonomie   Toutes phases, surtout en début             Rapide, peu coûteux, ne nécessite pas d\'utilisateurs, identifie les problèmes évidents.                                     Subjectif, dépend de l\'expertise de l\'évaluateur, risque de faux positifs, ne reflète pas l\'expérience utilisateur réelle.

  **Inspection Cognitive**     Inspection   Experts en ergonomie   Conception, Prototypage                     Efficace pour évaluer la facilité d\'apprentissage pour les novices , identifie les ruptures dans le parcours utilisateur.   Ne mesure pas la performance, centré sur une vision \"pas à pas\" qui peut manquer des problèmes globaux.
  ---------------------------- ------------ ---------------------- ------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------

## **49.4 Accessibilité et Conception Inclusive**

Une technologie véritablement centrée sur l\'humain doit être utilisable par tous, indépendamment des capacités physiques, sensorielles ou cognitives de chacun. L\'accessibilité et la conception inclusive sont des domaines de l\'IHM qui visent à garantir que les produits et services numériques n\'excluent personne. Loin d\'être une simple considération technique ou une obligation légale, cette approche est une question d\'équité, d\'éthique et, de plus en plus, un avantage commercial stratégique.

### **49.4.1 Définitions et Philosophie**

Bien que souvent utilisés de manière interchangeable, les termes \"accessibilité\" et \"conception inclusive\" représentent deux concepts liés mais distincts, reflétant une évolution dans la manière de penser la conception pour la diversité humaine.

#### **Accessibilité**

L\'accessibilité, dans son sens le plus strict, se réfère à la **conception de produits, d\'appareils, de services ou d\'environnements pour les personnes en situation de handicap**. L\'objectif est d\'éliminer les barrières qui empêcheraient une personne ayant une déficience visuelle, auditive, motrice ou cognitive d\'accéder à l\'information et aux fonctionnalités sur un pied d\'égalité avec les autres. Au Canada, environ 22% de la population âgée de 15 ans et plus vit avec au moins un handicap, soulignant l\'importance cruciale de cette démarche. L\'accessibilité est souvent une approche réactive ou adaptative, qui cherche à fournir des \"accommodements\" pour que les systèmes existants puissent être utilisés par des groupes spécifiques.

#### **Conception Inclusive (ou Conception Universelle)**

La conception inclusive, également connue sous le nom de conception universelle, est une **philosophie de conception plus large et proactive**. Son but n\'est pas de concevoir pour un groupe spécifique, mais de créer des produits et des environnements qui sont

**utilisables par le plus grand nombre de personnes possible, dès le départ**, sans nécessiter d\'adaptation ou de conception spécialisée. Elle reconnaît la diversité humaine comme une norme et non comme une exception.

L\'analogie la plus célèbre est celle de la **rampe d\'accès** (ou *curb cut*). Conçue à l\'origine pour permettre aux personnes en fauteuil roulant de franchir les trottoirs (une mesure d\'accessibilité), elle s\'est avérée bénéfique pour un éventail beaucoup plus large d\'utilisateurs : les parents avec des poussettes, les livreurs avec des chariots, les voyageurs avec des valises à roulettes, et même les cyclistes. C\'est l\'essence de la conception inclusive : une solution conçue pour un cas d\'usage \"extrême\" améliore l\'expérience pour tous.

La distinction clé réside donc dans l\'approche : l\'accessibilité se concentre sur la résolution des problèmes d\'un groupe d\'utilisateurs identifié, tandis que la conception inclusive intègre la diversité des besoins humains comme une contrainte de conception fondamentale dès le début du processus. L\'accessibilité est un résultat, la conception inclusive est le processus qui permet d\'y parvenir de la manière la plus élégante et la plus universelle possible.

### **49.4.2 Standards et Lignes Directrices : Les WCAG**

Pour rendre l\'objectif de l\'accessibilité web concret et mesurable, le World Wide Web Consortium (W3C) a développé un ensemble de lignes directrices qui font office de standard international : les **Web Content Accessibility Guidelines (WCAG)**. Ces directives fournissent un cadre détaillé pour les concepteurs et les développeurs afin de créer du contenu web accessible.

La structure des WCAG est hiérarchique, ce qui permet de les aborder à différents niveaux de détail  :

> **Principes :** Quatre principes fondamentaux qui forment la base de l\'accessibilité.
>
> **Lignes directrices (Guidelines) :** Treize lignes directrices qui fournissent les objectifs de base à atteindre sous chaque principe. Elles ne sont pas directement testables.
>
> **Critères de succès :** Pour chaque ligne directrice, il existe des critères de succès testables. Chaque critère est associé à un niveau de conformité : A (le plus bas), AA (le niveau cible pour la plupart des législations) et AAA (le plus élevé).
>
> **Techniques :** Des suggestions concrètes (suffisantes ou consultatives) pour satisfaire aux critères de succès.

#### **Les Quatre Principes Fondamentaux (POUR)**

Les WCAG sont organisés autour de quatre principes qui stipulent que pour être accessible, le contenu doit être **P**erceptible, **U**tilisable (*Operable*), **C**ompréhensible (*Understandable*) et **R**obuste (l\'acronyme anglais est POUR).

**1. Perceptible**

> **Principe :** L\'information et les composants de l\'interface utilisateur doivent être présentés aux utilisateurs de manière qu\'ils puissent les percevoir. Cela signifie que le contenu ne peut pas être invisible à tous leurs sens.
>
> **Exemples de critères de succès :**

**Texte alternatif (1.1.1) :** Fournir une description textuelle pour tout contenu non textuel (comme les images) afin que les lecteurs d\'écran puissent la lire à voix haute pour les utilisateurs aveugles.

**Alternatives pour les médias temporels (1.2) :** Proposer des sous-titres pour les vidéos afin de les rendre accessibles aux personnes sourdes ou malentendantes, et des audiodescriptions pour décrire les informations visuelles importantes aux personnes aveugles.

**Contraste (minimum) (1.4.3) :** Assurer un rapport de contraste suffisant entre le texte et son arrière-plan pour garantir la lisibilité pour les personnes malvoyantes.

**2. Utilisable (Operable)**

> **Principe :** Les composants de l\'interface utilisateur et la navigation doivent être utilisables. L\'interface ne peut pas exiger une interaction qu\'un utilisateur ne peut pas effectuer.
>
> **Exemples de critères de succès :**

**Accessible au clavier (2.1.1) :** Toutes les fonctionnalités du site doivent être accessibles en utilisant uniquement un clavier, sans nécessiter de souris. C\'est essentiel pour les utilisateurs ayant des handicaps moteurs.

**Assez de temps (2.2.1) :** Donner aux utilisateurs suffisamment de temps pour lire et utiliser le contenu. Si une session a une limite de temps, l\'utilisateur doit pouvoir la prolonger.

**Crises et réactions physiques (2.3.1) :** Ne pas concevoir de contenu qui clignote plus de trois fois par seconde, car cela peut déclencher des crises d\'épilepsie photosensible.

**Titres et étiquettes (2.4.6) :** Utiliser des titres et des étiquettes clairs et descriptifs pour aider les utilisateurs à comprendre le contenu et à naviguer.

**3. Compréhensible (Understandable)**

> **Principe :** L\'information et le fonctionnement de l\'interface utilisateur doivent être compréhensibles.
>
> **Exemples de critères de succès :**

**Lisible (3.1.1) :** La langue principale de chaque page doit être identifiable par la machine pour que les lecteurs d\'écran puissent utiliser la bonne prononciation.

**Prévisible (3.2.1) :** Les pages web doivent apparaître et fonctionner de manière prévisible. Par exemple, changer le réglage d\'un composant ne doit pas changer le contexte de la page de manière inattendue.

**Assistance à la saisie (3.3.1) :** Aider les utilisateurs à éviter et à corriger les erreurs. Si une erreur de saisie est détectée, elle doit être clairement identifiée et décrite à l\'utilisateur.

**4. Robuste**

> **Principe :** Le contenu doit être suffisamment robuste pour pouvoir être interprété de manière fiable par une grande variété d\'agents utilisateurs, y compris les technologies d\'assistance.
>
> **Exemples de critères de succès :**

**Analyse syntaxique (4.1.1) :** S\'assurer que le code (par exemple, HTML) est bien formé, avec des balises de début et de fin complètes et des éléments correctement imbriqués, afin d\'éviter que les technologies d\'assistance ne l\'interprètent mal.

**Nom, rôle, valeur (4.1.2) :** Pour tous les composants de l\'interface utilisateur, leur nom et leur rôle doivent pouvoir être déterminés par la machine, et les états et propriétés qui changent doivent pouvoir être notifiés aux technologies d\'assistance.

Adopter ces principes n\'est pas simplement une contrainte technique ou une case à cocher pour la conformité légale. C\'est une démarche qui pousse les concepteurs à créer des solutions plus claires, plus flexibles et plus résilientes. En résolvant les problèmes pour les utilisateurs ayant des besoins spécifiques, on découvre souvent des solutions qui améliorent l\'expérience pour l\'ensemble des utilisateurs. Le sous-titrage, initialement conçu pour les personnes sourdes, est maintenant massivement utilisé par tous dans les transports en commun. Les exigences de contraste élevé, vitales pour les malvoyants, améliorent la lisibilité pour quiconque utilise son téléphone en plein soleil. La navigation claire et prévisible, essentielle pour les utilisateurs de lecteurs d\'écran, bénéficie à toute personne pressée ou distraite. L\'accessibilité n\'est donc pas un jeu à somme nulle ; c\'est un puissant catalyseur d\'innovation et une pierre angulaire d\'une expérience utilisateur véritablement universelle.

## **49.5 Réalité Virtuelle (VR), Réalité Augmentée (AR) et Réalité Mixte (MR)**

Alors que les sections précédentes se sont concentrées sur les paradigmes d\'interaction largement établis des interfaces graphiques 2D (écrans d\'ordinateur, téléphones intelligents), cette dernière section explore les frontières de l\'IHM. Les technologies immersives, collectivement appelées Réalité Étendue (XR), remettent en question les conventions d\'interaction que nous tenons pour acquises. En plongeant l\'utilisateur dans des environnements 3D ou en fusionnant le monde numérique et le monde physique, la XR ouvre des possibilités extraordinaires mais présente également des défis d\'interaction et de conception entièrement nouveaux.

### **49.5.1 Définitions et le Continuum Virtuel-Réel**

Pour naviguer dans le paysage de la XR, il est essentiel de comprendre les distinctions entre ses principales composantes. Le concept du **continuum réalité-virtualité**, proposé par Paul Milgram, offre un cadre utile pour classer ces technologies. Ce continuum est un axe qui s\'étend d\'un environnement entièrement réel à une extrémité, à un environnement entièrement virtuel à l\'autre.

> **Réalité Virtuelle (VR) :** Située à l\'extrémité virtuelle du continuum, la VR vise à **immerger totalement** l\'utilisateur dans un environnement entièrement généré par ordinateur, le coupant de ses perceptions du monde réel. À l\'aide d\'un casque qui bloque la vision et l\'ouïe du monde extérieur, la VR cherche à tromper les sens pour créer un sentiment de\
> **présence**, c\'est-à-dire l\'illusion d\'être réellement \"là\", dans l\'espace virtuel. Les applications vont des jeux vidéo et du divertissement à des simulations de formation complexes (chirurgie, pilotage) et à la visualisation de données.
>
> **Réalité Augmentée (AR) :** L\'AR se situe plus près de l\'extrémité réelle du continuum. Elle ne remplace pas la vision du monde réel, mais la **superpose** avec des informations ou des objets virtuels. L\'utilisateur reste ancré dans son environnement physique, qui est \"augmenté\" par une couche de données numériques. Les applications les plus courantes se font via les écrans de téléphones intelligents (par exemple, les filtres Snapchat ou le jeu Pokémon GO) ou des lunettes transparentes. L\'AR est utilisée pour la navigation, la maintenance industrielle, la visualisation de produits dans son propre salon ou l\'affichage d\'informations contextuelles.
>
> **Réalité Mixte (MR) :** La MR est une forme plus avancée de l\'AR, qui se situe entre l\'AR et la VR sur le continuum. La distinction clé est que dans la MR, les objets virtuels ne sont pas simplement superposés au monde réel ; ils sont\
> **conscients de l\'environnement physique et peuvent interagir avec lui en temps réel**. Par exemple, une balle virtuelle pourrait rebondir sur une table réelle ou un personnage virtuel pourrait s\'asseoir sur un canapé réel. La MR nécessite une compréhension 3D sophistiquée de l\'environnement, ce qui permet une fusion beaucoup plus convaincante et interactive des mondes réel et virtuel.
>
> **Réalité Étendue (XR) :** C\'est un terme générique qui englobe l\'ensemble du continuum, de la VR à l\'AR en passant par la MR. Il est utilisé pour parler de ces technologies immersives de manière collective.

### **49.5.2 Défis d\'Interaction Spécifiques aux Technologies Immersives**

La transition d\'un écran 2D à un espace 3D immersif brise de nombreux paradigmes d\'interaction. Les actions simples comme \"cliquer\" ou \"faire défiler\" doivent être entièrement repensées. Cela crée un ensemble de défis uniques en matière d\'IHM.

#### **Navigation 3D (Locomotion)**

Le défi de la locomotion est l\'un des plus fondamentaux en VR : comment permettre à un utilisateur de se déplacer dans un vaste monde virtuel alors que son corps est confiné à un petit espace physique? 

> **Problématiques :** Une mauvaise conception de la locomotion peut entraîner une désorientation spatiale, une difficulté à atteindre précisément une destination, et surtout, la **cybercinétose** (voir ci-dessous).
>
> **Techniques courantes :**

**Déplacement à l\'échelle de la pièce (*Room-scale*) :** L\'utilisateur se déplace physiquement dans une zone de jeu définie. C\'est la méthode la plus naturelle et la moins susceptible de provoquer la cybercinétose, mais elle est limitée par la taille de l\'espace physique.

**Téléportation :** L\'utilisateur pointe un contrôleur vers une destination et s\'y \"téléporte\" instantanément. Cette méthode élimine le conflit sensoriel du mouvement et réduit considérablement la cybercinétose, mais elle peut briser le sentiment d\'immersion et la continuité spatiale.

**Déplacement continu (*Artificial locomotion*) :** L\'utilisateur se déplace à l\'aide du joystick d\'un contrôleur, de manière similaire à un jeu vidéo traditionnel. Cette méthode offre une grande liberté de mouvement et préserve la continuité spatiale, mais c\'est aussi celle qui est la plus susceptible de provoquer une cybercinétose intense.

#### **Manipulation d\'Objets Virtuels**

Comment saisir, déplacer, faire pivoter et redimensionner des objets dans un espace 3D sans la précision d\'une souris et d\'un clavier?

> **Problématiques :** La sélection d\'objets distants, la manipulation fine, et la gestion de l\'occlusion (lorsqu\'un objet en cache un autre) sont des défis complexes.
>
> **Techniques courantes :**

**Ray-casting :** L\'utilisateur émet un \"rayon\" virtuel depuis son contrôleur pour pointer et sélectionner des objets à distance.

**Manipulation directe :** L\'utilisateur \"saisit\" les objets virtuels avec ses contrôleurs suivis, permettant une interaction plus naturelle et directe, comme s\'il utilisait ses propres mains.

**Interfaces gestuelles :** Avec le suivi des mains (*hand tracking*), les utilisateurs peuvent manipuler des objets directement avec leurs doigts, sans contrôleurs, bien que cette méthode soit souvent moins précise.

#### **Cybercinétose (Motion Sickness)**

La cybercinétose, ou mal de la réalité virtuelle, est l\'un des plus grands obstacles à l\'adoption généralisée de la VR. Il s\'agit d\'un ensemble de symptômes désagréables qui peuvent survenir lors d\'une immersion virtuelle.

> **Symptômes :** Nausées, vertiges, maux de tête, sueurs froides, pâleur et désorientation. Ces symptômes peuvent persister plusieurs heures après la fin de l\'exposition.
>
> **Causes :** La cause principale est un **conflit sensoriel** entre le système visuel et le système vestibulaire (situé dans l\'oreille interne, il est responsable de notre sens de l\'équilibre et du mouvement). En VR, lorsque l\'utilisateur se déplace virtuellement (par exemple, avec un joystick), ses yeux perçoivent un mouvement que son corps et son oreille interne ne ressentent pas. Le cerveau reçoit des signaux contradictoires, une situation qu\'il peut interpréter comme une neurotoxine (similaire à une intoxication), déclenchant la nausée comme mécanisme de défense. Un autre facteur technique majeur est la\
> **latence** : tout décalage, même de quelques millisecondes, entre les mouvements de la tête de l\'utilisateur et la mise à jour de l\'image affichée dans le casque peut provoquer ou aggraver la cybercinétose.
>
> **Solutions de conception et d\'ingénierie :**

**Matérielles :** Assurer un taux de rafraîchissement de l\'affichage très élevé (90 Hz ou plus) et une latence \"mouvement-à-photon\" la plus faible possible.

**Logicielles (Locomotion) :** Privilégier les méthodes de déplacement qui minimisent le conflit sensoriel, comme la téléportation. Pour le déplacement continu, éviter les accélérations et décélérations brusques.

**Logicielles (Visuelles) :** Des techniques comme le **vignettage dynamique** (réduire le champ de vision périphérique pendant le mouvement) peuvent réduire l\'intensité du flux optique et atténuer les symptômes. Fournir un point de référence stable dans l\'environnement virtuel (comme un cockpit ou un tableau de bord) peut également aider.

**Utilisateur :** Il est crucial de limiter la durée des premières sessions pour permettre une accoutumance progressive. Faire des pauses régulières est également recommandé.

Le développement de la XR force la discipline de l\'IHM à un retour aux sources. Alors que les interfaces graphiques 2D se sont construites sur des couches successives de conventions et de métaphores (le \"bureau\", les \"fenêtres\", les \"fichiers\"), la XR n\'a pas encore de langage d\'interaction universellement accepté. Pour en créer un, les concepteurs doivent puiser non plus dans des métaphores abstraites, mais dans les fondements de la perception spatiale humaine, de la proprioception et du fonctionnement du système vestibulaire. La cybercinétose n\'est pas un simple \"bug\" d\'interface ; c\'est la manifestation d\'un conflit physiologique profond. Sa résolution dépend d\'une compréhension fine de la manière dont le cerveau intègre les signaux sensoriels. La conception de la navigation 3D ne peut se contenter de transposer les commandes 2D ; elle doit s\'inspirer de la façon dont les humains s\'orientent dans le monde physique. Ainsi, après s\'être éloignée du monde physique avec les interfaces graphiques, l\'IHM est maintenant contrainte de s\'y reconnecter à un niveau beaucoup plus fondamental.

Enfin, les défis de la XR ne sont pas seulement techniques, mais aussi sociaux et éthiques. L\'immersion totale et la fusion du réel et du virtuel soulèvent des questions qui dépassent le cadre de la simple utilisabilité. La puissance de la VR pour la formation est immense, mais elle porte aussi le risque d\'expériences traumatisantes si elle n\'est pas conçue de manière responsable. L\'AR, en superposant des informations sur notre réalité , soulève des questions de vie privée, de surcharge d\'information et d\'équité. La prochaine frontière de l\'IHM ne consistera pas seulement à résoudre les problèmes d\'interaction en 3D, mais aussi à établir les cadres éthiques pour concevoir ces expériences puissantes de manière à augmenter l\'humanité, et non à la diminuer.

# Chapitre 50 : Systèmes Embarqués, Robotique et IoT : L\'Interaction Cyber-Physique

## Introduction

L\'aube du XXIe siècle a été marquée par une transformation silencieuse mais profonde de notre interaction avec le monde numérique. Loin des supercalculateurs confinés dans des salles climatisées ou des ordinateurs personnels trônant sur nos bureaux, l\'informatique s\'est disséminée, s\'est miniaturisée et s\'est fondue dans le tissu même de notre réalité physique. Des appareils ménagers qui anticipent nos besoins aux véhicules qui naviguent de manière autonome, en passant par les réseaux de capteurs qui surveillent la santé de notre planète, nous assistons à l\'émergence d\'une nouvelle classe de systèmes où les frontières entre le calcul, la communication et le contrôle des processus physiques s\'estompent. Ce chapitre se consacre à l\'étude de ce domaine en pleine expansion, à l\'intersection de trois disciplines autrefois distinctes mais aujourd\'hui inextricablement liées : les systèmes embarqués, l\'Internet des Objets (IoT) et la robotique. Ensemble, ils forment le cœur de ce que l\'on nomme désormais les systèmes cyber-physiques (Cyber-Physical Systems, CPS).

L\'objectif de ce chapitre est de poser le cadre conceptuel et technique permettant de comprendre ces systèmes complexes. Nous présenterons la convergence de ces trois domaines non pas comme une simple juxtaposition de technologies, mais comme la naissance d\'une discipline d\'ingénierie à part entière, dont l\'enjeu principal est la maîtrise de l\'interaction intime entre les algorithmes et le matériel d\'une part, et les processus physiques qu\'ils gouvernent d\'autre part. La thèse centrale qui sous-tend notre analyse est la suivante : la conception et le déploiement de systèmes autonomes et connectés modernes, qu\'il s\'agisse de drones de livraison, de réseaux électriques intelligents ou de robots chirurgicaux, exigent une compréhension holistique et intégrée des contraintes matérielles fondamentales, des garanties temporelles offertes par le logiciel, et des algorithmes d\'interaction avec un monde physique par nature incertain et dynamique.

Pour ce faire, notre exploration sera structurée en cinq parties logiques, progressant des fondements les plus élémentaires vers les applications les plus sophistiquées. La **Partie I** établira les fondations matérielles et conceptuelles, en définissant la nature des systèmes embarqués, en analysant les unités de calcul qui en constituent le cerveau, et en disséquant les contraintes fondamentales de taille, de poids, d\'énergie, de coût et de temps qui dictent leur conception. La **Partie II** se plongera dans le cœur logiciel de ces systèmes, en se concentrant sur la dimension la plus critique : le temps. Nous y expliquerons pourquoi les systèmes d\'exploitation conventionnels sont inadaptés et comment les systèmes d\'exploitation temps réel (RTOS), à travers des algorithmes d\'ordonnancement spécifiques, parviennent à garantir le déterminisme requis par les applications critiques. La **Partie III** étendra notre analyse à des réseaux de milliards d\'appareils en explorant l\'architecture systémique de l\'Internet des Objets et les protocoles de communication légers qui permettent à des objets aux ressources extrêmement limitées de participer à cet écosystème global. La **Partie IV** abordera la concrétisation de ces systèmes sous la forme de robots, en se focalisant sur les deux fonctions qui les définissent : la perception de l\'environnement via les capteurs et l\'action sur cet environnement via les actionneurs, ainsi que les principes de contrôle en boucle fermée qui lient perception et action. Enfin, la **Partie V** traitera des aspects les plus avancés de l\'autonomie, en explorant comment un robot modélise son propre corps, comment il navigue dans un environnement inconnu grâce au SLAM (Simultaneous Localization and Mapping), et comment il planifie des mouvements sûrs et efficaces pour accomplir ses tâches.

À travers ce parcours, nous chercherons à équiper le lecteur, qu\'il soit étudiant avancé, chercheur ou ingénieur, des outils théoriques et pratiques nécessaires pour naviguer dans le paysage complexe et fascinant des systèmes qui perçoivent, pensent et agissent sur le monde physique.

## Partie I : Fondements des Systèmes Embarqués : Du Matériel aux Contraintes

Au cœur de tout dispositif qui interagit avec le monde physique se trouve un système embarqué. Cette première partie a pour vocation d\'établir les fondations matérielles et conceptuelles de ces systèmes. Nous commencerons par une définition rigoureuse de ce qu\'est un système embarqué, en le distinguant de l\'informatique généraliste. Nous analyserons ensuite les composants de calcul qui en sont le cerveau -- les microprocesseurs et les microcontrôleurs -- en soulignant les compromis architecturaux qui guident leur choix. Par la suite, nous examinerons en profondeur les contraintes fondamentales qui régissent la conception de ces systèmes, un équilibre constant entre la taille, le poids, la consommation d\'énergie, le coût et les exigences temporelles. Enfin, nous conclurons cette partie en étudiant l\'aboutissement de l\'intégration matérielle : le Système sur Puce (System-on-Chip, SoC), qui incarne la réponse de l\'industrie à ces contraintes multiples.

### Section 1.1 : Définition et Caractéristiques Fondamentales des Systèmes Embarqués

Un système embarqué, traduction de l\'anglais \"embedded system\", est un système informatique spécialisé, conçu pour exécuter une ou quelques fonctions dédiées au sein d\'un système mécanique ou électronique plus vaste. Contrairement à un ordinateur personnel polyvalent capable d\'exécuter une multitude de tâches, un système embarqué est optimisé pour une mission précise, souvent avec des exigences de performance, de fiabilité et de coût très spécifiques. Le terme \"embarqué\", \"intégré\" ou encore \"enfoui\" traduit bien cette notion : le système informatique n\'est pas l\'objet principal, mais une composante intégrée qui en pilote le fonctionnement. On les trouve partout, des smartphones aux appareils électroménagers, des automobiles aux équipements médicaux, où ils améliorent l\'efficacité et permettent l\'automatisation.

L\'architecture d\'un système embarqué combine trois éléments essentiels : un processeur (microprocesseur ou microcontrôleur), de la mémoire et des périphériques d\'entrée/sortie (E/S). Le logiciel qui s\'exécute sur ce matériel est appelé

*firmware* ou micrologiciel. Il est généralement stocké dans une mémoire non volatile de type ROM (Read-Only Memory), EPROM, EEPROM ou Flash, plutôt que sur un disque dur. Ce firmware est intimement lié au matériel qu\'il contrôle, au point que la distinction entre les deux n\'est pas toujours évidente pour l\'utilisateur final. Les systèmes embarqués fonctionnent souvent avec des ressources matérielles limitées : peu de mémoire, une puissance de calcul relativement faible, et des interfaces utilisateur minimalistes (quelques boutons, des LED) voire inexistantes.

L\'interaction avec le monde physique est une caractéristique centrale. Le système traite des données d\'entrée pour produire des actions en sortie. Les entrées proviennent de diverses sources : des capteurs qui mesurent des grandeurs physiques (température, mouvement, position GPS), des interfaces utilisateur (boutons, écrans tactiles), ou des bus de communication (Ethernet, Wi-Fi, 4G, LoRa). Après traitement de ces données, le logiciel prend une décision qui se traduit par une action matérielle en sortie, via des actionneurs (moteurs, électrovannes), des afficheurs (écrans, LED) ou l\'envoi d\'informations à d\'autres systèmes.

On peut établir une taxonomie des systèmes embarqués selon plusieurs axes pour mieux comprendre leur diversité :

> **Selon la connectivité :** On distingue les systèmes autonomes (*standalone*), qui fonctionnent de manière indépendante sans connexion réseau, et les systèmes en réseau, qui sont connectés à un réseau filaire ou sans fil pour communiquer et fournir des résultats.
>
> **Selon les contraintes temporelles :** Une distinction cruciale est faite entre les systèmes temps réel et les autres. Un système temps réel est soumis à des contraintes temporelles strictes et doit accomplir sa tâche dans un délai imparti, sans quoi une défaillance est considérée avoir eu lieu. Nous explorerons cette notion en détail dans la Partie II.
>
> **Selon la mobilité :** Les systèmes embarqués mobiles, comme ceux des smartphones ou des tablettes, sont spécifiquement conçus pour être compacts, efficaces et économes en énergie afin de préserver l\'autonomie de la batterie.

Les domaines d\'application des systèmes embarqués sont extraordinairement vastes et en constante expansion. Dans le secteur **automobile**, ils sont omniprésents, contrôlant des fonctions critiques comme les systèmes de freinage antiblocage (ABS), les airbags, la direction assistée ou la gestion du moteur. Un véhicule moderne peut contenir plus d\'une centaine de processeurs embarqués. Dans le domaine

**médical**, ils sont au cœur des appareils d\'imagerie (IRM), des moniteurs de signes vitaux (ECG) et des dispositifs portables de suivi de santé. Le secteur

**aérospatial** et la défense dépendent massivement de systèmes embarqués pour la navigation, le contrôle de vol et les communications dans les avions, les satellites et les sondes spatiales. L\'

**électroménager** et l\'**électronique grand public** en sont également saturés, des fours à micro-ondes aux télévisions intelligentes. Enfin, ils sont le pilier de l\'

**automatisation industrielle** (contrôle de processus, automates programmables) et des **télécommunications** (routeurs, modems).

### Section 1.2 : L\'Unité Centrale de Traitement : Analyse Comparative des Microprocesseurs et des Microcontrôleurs

Au cœur de tout système embarqué se trouve une unité de traitement qui exécute le firmware. Ce \"cerveau\" peut prendre deux formes principales : le microprocesseur (µP) ou le microcontrôleur (µC). Bien que tous deux soient des circuits intégrés fournissant de l\'intelligence aux appareils électroniques, leurs architectures, leurs philosophies de conception et leurs domaines d\'application diffèrent fondamentalement. Comprendre cette distinction est la première étape cruciale dans la conception d\'un système embarqué.

La différence architecturale la plus fondamentale réside dans le degré d\'intégration. Un **microprocesseur** est une unité centrale de traitement (CPU) pure. Il contient l\'unité arithmétique et logique (UAL) et les registres, mais il ne peut fonctionner seul. Pour former un système de calcul complet, il doit être connecté, via un bus externe, à des composants périphériques distincts : de la mémoire vive (RAM) pour les données volatiles, de la mémoire non volatile (ROM ou Flash) pour le programme, et des circuits d\'E/S pour communiquer avec l\'extérieur. Cette architecture modulaire, souvent basée sur le modèle de von Neumann où données et programme partagent le même espace mémoire, offre une grande flexibilité et permet d\'atteindre des performances très élevées.

À l\'opposé, un **microcontrôleur** est un système informatique quasi complet intégré sur une seule puce. En plus de la CPU, il intègre sur le même circuit intégré de la RAM, de la ROM/Flash, et une panoplie de périphériques d\'E/S programmables : des minuteurs (

*timers*), des convertisseurs analogique-numérique (ADC), des ports de communication série (UART, SPI, I2C), etc.. Cette approche \"tout-en-un\" le rend autonome et spécialisé pour des fonctions de contrôle spécifiques.

Cette divergence architecturale découle d\'une philosophie de conception radicalement différente. Le microprocesseur est conçu pour la **polyvalence et la performance brute**. Les modèles modernes fonctionnent à des fréquences d\'horloge de l\'ordre du gigahertz (GHz), leur permettant d\'exécuter des systèmes d\'exploitation complexes et de réaliser des calculs intensifs. Le microcontrôleur, quant à lui, est conçu pour le

**contrôle dédié et l\'efficacité énergétique**. Sa vitesse d\'horloge est bien plus modeste, allant du kilohertz (kHz) à quelques centaines de mégahertz (MHz), ce qui est amplement suffisant pour sa tâche de contrôle tout en minimisant la consommation d\'énergie. De nombreux microcontrôleurs intègrent des modes de veille et d\'économie d\'énergie sophistiqués, une caractéristique souvent absente des microprocesseurs.

L\'impact de ce choix sur la conception globale d\'un système embarqué est considérable. L\'utilisation d\'un microprocesseur mène à des cartes de circuits imprimés (PCB) plus grandes et plus complexes, car il faut loger et interconnecter tous les composants externes. La consommation énergétique totale du système est également plus élevée. À l\'inverse, un microcontrôleur permet de concevoir des systèmes extrêmement compacts, avec un circuit simplifié, un coût total réduit et une très faible consommation d\'énergie, ce qui le rend idéal pour les appareils alimentés par batterie.

Les microcontrôleurs eux-mêmes peuvent être classifiés selon plusieurs critères, notamment leur largeur de bus de données (8 bits, 16 bits, 32 bits), qui détermine la quantité de données qu\'ils peuvent traiter simultanément. Les µC 8 bits sont adaptés aux tâches de contrôle simples, tandis que les µC 32 bits, souvent basés sur des architectures RISC (Reduced Instruction Set Computer) comme ARM Cortex-M, offrent des performances proches de celles de microprocesseurs légers et sont utilisés dans des applications plus avancées. Il est important de noter que la frontière entre les microcontrôleurs haut de gamme et les microprocesseurs d\'entrée de gamme est devenue de plus en plus floue avec l\'émergence de puces hybrides et de systèmes sur puce (SoC).

Le tableau suivant synthétise les différences clés entre ces deux composants.

**Tableau 1.1 : Tableau Comparatif : Microprocesseur (µP) vs. Microcontrôleur (µC)**

  ----------------------------- ---------------------------------------------------------------------------- --------------------------------------------------------------- ------------------------------------------------------------------------
  Caractéristique               Microprocesseur (µP)                                                         Microcontrôleur (µC)                                            Implication pour la Conception

  **Architecture**              Unité de traitement (CPU) seule                                              Système complet sur une puce (CPU, RAM, ROM, E/S)               Le µC simplifie drastiquement le design du circuit.

  **Composants intégrés**       CPU, registres                                                               CPU, registres, mémoires, timers, ADC, ports de communication   Réduction du nombre de composants, de la taille et du coût avec un µC.

  **Mémoire**                   Externe (RAM, ROM) connectée via un bus                                      Interne (sur la puce)                                           Le µP offre une plus grande flexibilité en termes de taille mémoire.

  **Périphériques**             Externes, connectés via un bus                                               Intégrés sur la puce                                            Le µC est optimisé pour l\'interaction avec le monde physique.

  **Vitesse d\'horloge**        Élevée (GHz)                                                                 Faible à modérée (kHz - MHz)                                    Le µP est destiné aux calculs intensifs ; le µC au contrôle.

  **Consommation**              Élevée                                                                       Très faible, avec des modes d\'économie d\'énergie              Le µC est le choix par défaut pour les appareils sur batterie.

  **Coût**                      Coût de la puce plus élevé, coût total du système élevé                      Coût de la puce très faible, coût total du système faible       Le µC est économiquement viable pour la production de masse.

  **Taille du circuit**         Grande et complexe                                                           Compact et simple                                               Le µC permet une miniaturisation poussée.

  **Système d\'exploitation**   Nécessite généralement un OS (Linux, Windows Embedded)                       Peut fonctionner sans OS ou avec un RTOS léger                  La programmation du µC est plus proche du matériel (*bare-metal*).

  **Cas d\'usage typiques**     Ordinateurs, serveurs, systèmes embarqués haute performance (infotainment)   Appareils ménagers, automobile, IoT, contrôle industriel        Le µP pour la puissance de calcul, le µC pour le contrôle dédié.
  ----------------------------- ---------------------------------------------------------------------------- --------------------------------------------------------------- ------------------------------------------------------------------------

### Section 1.3 : Contraintes de Conception : L\'Équilibre SWaP-C (Size, Weight, and Power - Cost) et Temporel

La conception de systèmes embarqués est un art du compromis. Contrairement au développement de logiciels pour ordinateurs de bureau, où les ressources sont considérées comme quasi illimitées, l\'ingénieur en systèmes embarqués est constamment confronté à un ensemble de contraintes non fonctionnelles strictes qui dictent chaque choix architectural, matériel et logiciel. Ces contraintes, souvent désignées par l\'acronyme anglais SWaP-C (Size, Weight, and Power - Cost), ainsi que les contraintes temporelles, forment un espace de conception multidimensionnel où l\'amélioration d\'un paramètre se fait souvent au détriment d\'un autre.

Taille et Poids (Size & Weight)

La miniaturisation est une force motrice de l\'industrie électronique. Dans de nombreux domaines d\'application, la taille et le poids sont des contraintes critiques. Pour les dispositifs portables (wearables), les implants médicaux, les drones ou les satellites, chaque millimètre et chaque gramme compte.17 Cette contrainte influence directement la topologie du circuit imprimé, le choix des boîtiers des composants (plus petits, mais plus difficiles à souder et à refroidir), et favorise l\'intégration de multiples fonctions sur une seule puce, menant à l\'adoption de microcontrôleurs et de SoC.19

Énergie (Power)

Pour tout système mobile ou autonome fonctionnant sur batterie ou pile, la consommation d\'énergie est sans doute la contrainte la plus importante.4 L\'autonomie du dispositif en dépend directement. La conception doit donc viser une frugalité énergétique maximale, ce qui est un problème transverse affectant toutes les couches du système.21 Au niveau matériel, cela implique de choisir des composants à très faible consommation (processeurs, mémoires, capteurs) et de concevoir des circuits d\'alimentation efficaces.22 Au niveau logiciel, cela se traduit par des stratégies agressives de gestion de l\'énergie (

*power management*), comme l\'utilisation de multiples modes de veille où les périphériques non utilisés sont éteints, et le système ne se réveille que périodiquement ou sur interruption pour effectuer sa tâche. La performance et la consommation sont souvent antagonistes : faire fonctionner un processeur plus rapidement (fréquence plus élevée) augmente quadratiquement la puissance dynamique dissipée. Des techniques comme le DVFS (Dynamic Voltage and Frequency Scaling) permettent d\'ajuster dynamiquement la tension et la fréquence du processeur en fonction de la charge de calcul, réalisant ainsi un compromis en temps réel entre performance et consommation.

Coût (Cost)

Dans les marchés de grande consommation comme l\'électronique grand public ou l\'automobile, le coût de production unitaire est un facteur déterminant.7 Le succès commercial d\'un produit peut se jouer sur quelques centimes.27 Cette pression économique impose des choix drastiques : utilisation de microcontrôleurs moins puissants, limitation de la quantité de mémoire RAM et Flash, simplification des capteurs et des actionneurs. Le coût de développement (NRE - Non-Recurring Engineering) doit également être amorti sur le volume de production. Pour des produits de niche à forte valeur ajoutée comme l\'avionique, le coût des composants est moins critique que leur fiabilité et leur certification, mais pour un jouet électronique produit à des millions d\'exemplaires, le coût est la contrainte reine.27

Contraintes Temporelles

Un système embarqué n\'est pas seulement jugé sur l\'exactitude logique de ses calculs, mais aussi sur leur exactitude temporelle. Il doit être capable de réagir à des événements de son environnement et de produire des résultats dans des délais spécifiés.4 Pour un système de contrôle de vol, une commande de stabilisation calculée avec une microseconde de retard peut être aussi inutile, voire dangereuse, qu\'un calcul erroné.6 Cette contrainte de temps réel, qu\'elle soit stricte ou souple, a des implications profondes sur l\'architecture logicielle, notamment sur le choix du système d\'exploitation et des algorithmes d\'ordonnancement, comme nous le verrons dans la Partie II.

Fiabilité et Sécurité (Reliability & Safety)

Dans de nombreux domaines, les systèmes embarqués remplissent des fonctions critiques où une défaillance peut avoir des conséquences graves sur les biens ou les personnes.4 L\'automobile, l\'aéronautique, le médical et le contrôle de processus industriels sont des exemples où la fiabilité et la sûreté de fonctionnement sont primordiales.4 La conception doit alors intégrer des mécanismes pour garantir cette fiabilité, tels que des redondances matérielles (doubles contrôleurs), des algorithmes de détection et de correction d\'erreurs, des

*watchdog timers* pour redémarrer le système en cas de blocage, et le respect de normes de sécurité sectorielles strictes (ex: ISO 26262 pour l\'automobile).

### Section 1.4 : L\'Intégration Poussée : Le Système sur Puce (System-on-Chip, SoC)

L\'aboutissement logique de la pression exercée par les contraintes SWaP-C est l\'intégration de la quasi-totalité d\'un système électronique complexe sur un unique circuit intégré : le Système sur Puce, ou SoC. Un SoC n\'est pas simplement un microcontrôleur plus puissant ; c\'est un système hétérogène complet, une véritable \"carte mère sur une puce\", qui peut contenir un ou plusieurs cœurs de processeurs (CPU), des processeurs graphiques (GPU), des processeurs de signal numérique (DSP), de la mémoire, des contrôleurs de périphériques (USB, Ethernet), des modules de communication sans fil (Wi-Fi, Bluetooth), et d\'autres accélérateurs matériels spécialisés, le tout interconnecté par des bus sur la puce.

Cette intégration massive, rendue possible par les progrès continus de la gravure des semi-conducteurs décrits par la loi de Moore, offre des avantages considérables. Premièrement, elle répond directement aux contraintes SWaP-C : la taille et le poids sont drastiquement réduits, la consommation d\'énergie diminue car les signaux n\'ont plus à parcourir de longues pistes sur un circuit imprimé, et le coût de production en très grand volume est bien inférieur à celui d\'un système assemblé à partir de multiples puces. Deuxièmement, les performances sont améliorées. La proximité des composants sur le silicium permet d\'augmenter les fréquences d\'horloge et de réduire la latence des communications internes.

Cependant, cette évolution représente un déplacement fondamental de la complexité. La conception d\'un système embarqué traditionnel impliquait l\'intégration *physique* de composants discrets sur un circuit imprimé. Le défi était celui de l\'électronicien : sélectionner les puces, concevoir le PCB, gérer le routage des pistes et les interférences électromagnétiques. Avec l\'avènement du SoC, ce défi physique est largement résolu, mais il est remplacé par un défi d\'intégration *logique* infiniment plus complexe. Le concepteur de SoC n\'assemble plus des puces, mais des blocs de propriété intellectuelle (IPs) -- des designs de circuits pré-conçus et pré-vérifiés pour des fonctions spécifiques (un cœur de CPU, un contrôleur USB, etc.) -- qu\'il doit interconnecter, vérifier et valider sur le silicium.

Cette nouvelle forme de complexité a engendré de nouveaux défis de conception majeurs. La vérification d\'un SoC avant sa fabrication (le \"tape-out\") est un processus extrêmement long et coûteux, car une erreur dans le design découverte après la gravure peut invalider des millions d\'euros d\'investissement. Cela a nécessité le développement d\'outils de conception assistée par ordinateur (CAO) et de simulation extrêmement sophistiqués. De plus, un SoC est par nature non-évolutif : il est impossible de mettre à jour sa partie matérielle. En cas de panne d\'un seul de ses multiples composants, c\'est l\'ensemble de la puce qui doit être remplacé. Enfin, le prototypage et le développement logiciel sur une cible aussi complexe avant même qu\'elle n\'existe physiquement sont rendus possibles par l\'utilisation de plateformes de prototypage rapide comme les FPGA (Field-Programmable Gate Array), des circuits logiques reconfigurables sur lesquels l\'architecture du futur SoC peut être émulée. Ainsi, la complexité de la conception embarquée n\'a pas disparu ; elle a migré du monde physique de la carte électronique vers le monde logique et abstrait de la conception de circuits intégrés à très grande échelle.

## Partie II : Le Cœur Logiciel : Systèmes d\'Exploitation et Ordonnancement Temps Réel

Si le matériel constitue le corps d\'un système embarqué, le logiciel en est l\'esprit. Cette deuxième partie se plonge au cœur de l\'architecture logicielle qui anime ces systèmes, en se concentrant sur la dimension la plus distinctive et la plus critique de ce domaine : la gestion du temps. Nous commencerons par établir la distinction fondamentale entre les systèmes d\'exploitation généralistes, conçus pour le confort et l\'efficacité moyenne, et les systèmes d\'exploitation temps réel (RTOS), dont l\'unique raison d\'être est la prévisibilité temporelle. Nous affinerons ensuite cette notion en classifiant les systèmes selon la criticité des conséquences d\'un retard. Puis, nous analyserons les algorithmes d\'ordonnancement qui sont les mécanismes fondamentaux permettant à un RTOS de tenir ses promesses temporelles. Nous aborderons ensuite l\'un des pièges les plus insidieux de la programmation temps réel, l\'inversion de priorité, avant de conclure par une étude de cas historique et spectaculaire -- le bug de la mission Mars Pathfinder -- qui illustre parfaitement les enjeux et les solutions liés à ces concepts.

### Section 2.1 : Systèmes d\'Exploitation : Approches Généralistes vs. Temps Réel (RTOS)

Un système d\'exploitation (OS) est un logiciel qui gère les ressources matérielles d\'un ordinateur et fournit des services communs aux applications. Cependant, les objectifs et les philosophies de conception d\'un OS généraliste (Général-Purpose Operating System, GPOS), tel que Windows, macOS ou les distributions Linux de bureau, sont radicalement différents de ceux d\'un Système d\'Exploitation Temps Réel (Real-Time Operating System, RTOS).

Un GPOS est optimisé pour le **cas moyen**. Ses principaux objectifs sont de maximiser le débit (*throughput*) global du système, d\'assurer un partage équitable des ressources (notamment du temps CPU) entre de multiples applications et utilisateurs, et d\'offrir une expérience utilisateur riche et réactive. Pour atteindre ces buts, il utilise des mécanismes complexes comme la mémoire virtuelle, les systèmes de cache sophistiqués et des politiques d\'ordonnancement qui visent l\'équité (par exemple, en donnant la priorité aux tâches interactives). Le corollaire de cette approche est l\'absence totale de garantie sur le temps de réponse d\'une tâche spécifique. Le temps nécessaire pour exécuter un morceau de code peut varier considérablement en fonction de la charge globale du système, des interruptions, des défauts de page, etc..

Un RTOS, à l\'inverse, est conçu autour d\'un unique principe directeur : la **prévisibilité temporelle** ou le **déterminisme**. L\'affirmation fondamentale des systèmes temps réel n\'est pas \"mon système est rapide\", mais \"mon système garantit le respect des échéances\". La justesse d\'une opération dans un système temps réel ne dépend pas seulement de la valeur du résultat, mais aussi du moment où ce résultat est produit. Un résultat correct livré en retard est une erreur. Pour offrir cette garantie, un RTOS est construit sur un ensemble de caractéristiques clés :

> **Ordonnanceur préemptif basé sur les priorités :** Le cœur d\'un RTOS est son ordonnanceur (*scheduler*). Il garantit qu\'à tout instant, c\'est la tâche la plus prioritaire prête à s\'exécuter qui détient le contrôle du CPU. Si une tâche de plus haute priorité devient prête, elle préempte (interrompt) immédiatement la tâche en cours d\'exécution de plus basse priorité.
>
> **Latence faible et bornée :** Le temps qui s\'écoule entre l\'occurrence d\'un événement externe (une interruption matérielle, par exemple) et l\'exécution du code qui doit le traiter (la routine de service d\'interruption) doit être non seulement court, mais surtout borné, c\'est-à-dire qu\'il doit exister une limite supérieure connue et garantie. De même, le temps de changement de contexte (le processus de sauvegarde de l\'état d\'une tâche et de restauration de l\'état d\'une autre) doit être minimal et prévisible.
>
> **Primitives de synchronisation prévisibles :** Les mécanismes utilisés pour coordonner les tâches et protéger les ressources partagées, tels que les sémaphores, les mutex et les files de messages, sont spécifiquement conçus pour éviter les attentes non bornées et pour avoir un comportement temporel déterministe.
>
> **Légèreté et modularité :** Conçu pour des environnements aux ressources limitées, un RTOS a une empreinte mémoire minimale et une surcharge de traitement faible. Il est souvent modulaire, permettant au développeur de n\'inclure que les services strictement nécessaires à l\'application.

Cette focalisation sur la prévisibilité du pire des cas, plutôt que sur la performance du cas moyen, est ce qui distingue fondamentalement un RTOS d\'un GPOS. C\'est un changement de paradigme où la métrique de performance la plus importante n\'est pas la vitesse moyenne, mais la capacité à prouver mathématiquement qu\'aucune échéance critique ne sera jamais manquée. Cette philosophie influence l\'ensemble de la pile technologique : des choix matériels (parfois en désactivant les caches pour rendre les temps d\'accès mémoire prévisibles) aux outils de compilation (qui doivent aider à analyser le pire temps d\'exécution ou WCET d\'un code), en passant bien sûr par les algorithmes de l\'OS lui-même. La conception d\'un système temps réel devient un exercice de réduction de l\'incertitude à tous les niveaux.

### Section 2.2 : La Criticité Temporelle : Systèmes Temps Réel Stricts (Hard) et Souples (Soft)

Tous les systèmes temps réel ne sont pas égaux face aux conséquences d\'un retard. La classification la plus importante au sein des systèmes temps réel se base sur la criticité du respect des échéances. On distingue principalement deux catégories : les systèmes temps réel stricts et les systèmes temps réel souples.

Systèmes Temps Réel Stricts (Hard Real-Time)

Dans un système temps réel strict, le non-respect d\'une seule échéance est considéré comme une défaillance catastrophique du système, pouvant entraîner des pertes matérielles, financières, voire humaines.36 La validité d\'un calcul est binaire : soit il est produit à temps et il est correct, soit il est en retard et il est totalement invalide, équivalent à une erreur.45 Pour ces systèmes, la prévisibilité doit être absolue et le déterminisme maximal.44 La conception doit reposer sur une analyse formelle du pire temps d\'exécution (Worst-Case Execution Time, WCET) de chaque tâche critique et sur des tests d\'ordonnançabilité qui prouvent mathématiquement que toutes les échéances seront toujours respectées, quelles que soient les circonstances.43 Les exemples typiques incluent les systèmes de contrôle de vol d\'aéronefs, les systèmes de freinage ABS dans une voiture, les contrôleurs de pacemakers ou les systèmes de sécurité d\'une centrale nucléaire.36

Systèmes Temps Réel Souples (Soft Real-Time)

Dans un système temps réel souple, le respect des échéances est important, mais leur manquement occasionnel n\'est pas catastrophique. Il entraîne une dégradation de la qualité de service (QoS), mais pas une défaillance complète du système.36 L\'utilité d\'un résultat diminue progressivement après son échéance, mais elle n\'est pas nécessairement nulle.39 L\'objectif de la conception n\'est plus de garantir le respect de 100% des échéances, mais de s\'assurer que les tâches critiques sont prioritaires et que les échéances sont respectées en moyenne ou avec une probabilité élevée.42 Les exemples incluent les systèmes de streaming multimédia (où la perte d\'une trame vidéo ou audio est acceptable), les jeux vidéo en ligne, ou certains systèmes d\'acquisition de données où la perte d\'un échantillon occasionnel n\'invalide pas l\'ensemble de la mesure.36

Il existe également une catégorie intermédiaire, parfois appelée **Temps Réel Ferme (Firm Real-Time)**. Dans ces systèmes, un résultat en retard est aussi inutile que dans un système strict (sa valeur est nulle), mais le système peut tolérer un certain nombre d\'échéances manquées sans que cela soit considéré comme une défaillance. Un exemple pourrait être un système de prédiction sur les marchés financiers, où une prédiction qui arrive après la clôture du marché est inutile, mais le système peut survivre à quelques prédictions manquées.

Cette distinction est fondamentale car elle guide l\'ensemble du processus de conception, le niveau de rigueur de l\'analyse, le choix des algorithmes et, en fin de compte, le coût et la complexité du système final.

### Section 2.3 : Algorithmes d\'Ordonnancement Fondamentaux : Rate-Monotonic (RM) et Earliest-Deadline-First (EDF)

L\'ordonnanceur est le composant du RTOS qui décide quelle tâche doit s\'exécuter à un instant donné. Pour garantir le respect des échéances, il s\'appuie sur des algorithmes dont le comportement est mathématiquement analysable. Deux algorithmes, introduits dans un article fondateur de Liu et Layland en 1973, forment la base de la théorie de l\'ordonnancement temps réel : Rate-Monotonic (RM) et Earliest-Deadline-First (EDF).

Rate-Monotonic Scheduling (RMS)

L\'algorithme RM est l\'archétype des ordonnanceurs à priorités statiques (ou fixes). Le principe est simple et intuitif : la priorité de chaque tâche est assignée avant l\'exécution du système et ne change jamais. Cette priorité est inversement proportionnelle à la période de la tâche : plus une tâche est fréquente (période courte), plus sa priorité est élevée.36 L\'idée sous-jacente est qu\'une tâche qui doit s\'exécuter souvent est plus urgente qu\'une tâche qui s\'exécute rarement.

RM est dit **optimal** parmi la classe des algorithmes à priorités statiques : si un ensemble de tâches périodiques ne peut pas être ordonnancé par RM, alors aucun autre algorithme à priorités statiques ne pourra le faire. Pour vérifier si un ensemble de tâches est ordonnançable par RM, on peut utiliser un test d\'acceptabilité. Le plus connu est la condition suffisante de Liu et Layland, qui stipule que le système est garanti d\'être ordonnançable si l\'utilisation totale du processeur (

U=∑(Ci​/Ti​), où Ci​ est le temps d\'exécution et Ti​ la période de la tâche i) est inférieure à une certaine borne. Cette borne dépend du nombre de tâches

n et tend vers ln(2)≈69.3% lorsque n tend vers l\'infini. Cela signifie que RM peut laisser jusqu\'à 30% de la puissance du CPU inutilisée tout en ne pouvant garantir l\'ordonnançabilité. Des tests plus précis (tests exacts basés sur l\'analyse du temps de réponse) existent mais sont plus complexes à calculer.

Earliest-Deadline-First (EDF)

L\'algorithme EDF est le principal représentant des ordonnanceurs à priorités dynamiques. Ici, la priorité d\'une tâche n\'est pas fixe mais est réévaluée à chaque instant. La règle est simple : la tâche qui a l\'échéance absolue la plus proche dans le temps est celle qui a la plus haute priorité et qui doit s\'exécuter.36

EDF est **optimal** parmi tous les algorithmes d\'ordonnancement préemptifs sur un monoprocesseur : si un ensemble de tâches est ordonnançable par n\'importe quel algorithme, alors il est aussi ordonnançable par EDF. L\'un des grands avantages d\'EDF est la simplicité et la puissance de son test d\'ordonnançabilité. Pour un ensemble de tâches périodiques où l\'échéance est égale à la période, la condition nécessaire et suffisante est que l\'utilisation totale du processeur soit inférieure ou égale à 100% (

U≤1). EDF peut donc, en théorie, utiliser pleinement les capacités du processeur.

Le choix entre RM et EDF est un compromis classique en conception de systèmes temps réel. EDF est plus efficace en termes d\'utilisation des ressources, mais il est souvent perçu comme plus complexe à implémenter (il faut gérer une file d\'attente de tâches triée par échéance) et, surtout, son comportement en cas de surcharge (quand U\>1) est imprévisible : n\'importe quelle tâche peut manquer son échéance, y compris la plus critique. RM, bien que moins efficace, a un comportement beaucoup plus prévisible en cas de surcharge : seules les tâches de plus basse priorité manqueront leurs échéances, tandis que les tâches de plus haute priorité continueront de fonctionner correctement. Pour cette raison, dans les systèmes critiques où la prévisibilité en cas de défaillance est plus importante que l\'efficacité maximale, RM est souvent préféré.

**Tableau 2.1 : Analyse Comparative des Algorithmes d\'Ordonnancement RM et EDF**

  ----------------------------------- ---------------------------------------------------------------------------------------- ------------------------------------------------------------------------------
  Critère                             Rate-Monotonic (RM)                                                                      Earliest-Deadline-First (EDF)

  **Type de priorité**                Statique (fixe)                                                                          Dynamique

  **Principe d\'assignation**         Priorité inversement proportionnelle à la période de la tâche                            Priorité à la tâche ayant l\'échéance la plus proche

  **Complexité d\'implémentation**    Simple (liste de priorités fixes)                                                        Plus complexe (file de priorités dynamique)

  **Surcharge à l\'exécution**        Faible (les priorités ne changent pas)                                                   Plus élevée (réévaluation des priorités à chaque événement)

  **Utilisation CPU max. garantie**   ≈69.3% (test simple), jusqu\'à 100% (test exact)                                         100%

  **Comportement en surcharge**       Prévisible : les tâches de basse priorité échouent en premier                            Imprévisible : n\'importe quelle tâche peut échouer

  **Prévisibilité**                   Élevée, surtout en cas de défaillance                                                    Élevée en conditions nominales, faible en surcharge

  **Cas d\'usage privilégiés**        Systèmes critiques où la robustesse aux pannes est essentielle (avionique, automobile)   Systèmes où l\'utilisation maximale des ressources est critique (multimédia)
  ----------------------------------- ---------------------------------------------------------------------------------------- ------------------------------------------------------------------------------

### Section 2.4 : Le Problème de l\'Inversion de Priorité et ses Solutions

Dans un système préemptif basé sur les priorités, la règle d\'or est qu\'une tâche ne peut être empêchée de s\'exécuter que par une tâche de priorité supérieure. Cependant, lorsque les tâches doivent partager des ressources (comme un port de communication, une zone mémoire, un bus de données), ce principe peut être violé de manière insidieuse, menant à un phénomène dangereux connu sous le nom d\'**inversion de priorité**.

Le scénario classique de l\'inversion de priorité implique trois tâches de priorités différentes : Haute (H), Moyenne (M) et Basse (L). Le déroulement est le suivant  :

> La tâche de basse priorité (L) démarre et acquiert une ressource partagée en la verrouillant avec un mutex ou un sémaphore.
>
> La tâche de haute priorité (H) devient prête à s\'exécuter. Elle préempte L, comme attendu.
>
> La tâche H s\'exécute jusqu\'à ce qu\'elle ait besoin d\'accéder à la même ressource partagée. Comme la ressource est verrouillée par L, H est bloquée et doit attendre que L la libère.
>
> La tâche L reprend donc l\'exécution pour terminer sa section critique et libérer la ressource.
>
> C\'est ici que le problème survient : la tâche de priorité moyenne (M), qui n\'a pas besoin de la ressource partagée, devient prête à s\'exécuter. Comme sa priorité est supérieure à celle de L, elle préempte L.
>
> La tâche M s\'exécute, empêchant L de progresser. Par conséquent, L ne peut pas libérer la ressource, et H, la tâche la plus critique du système, reste bloquée. Effectivement, la tâche de priorité moyenne M a indirectement bloqué la tâche de priorité haute H. Les priorités ont été \"inversées\".

On distingue l\'inversion de priorité **bornée**, où H attend simplement que L termine sa section critique (ce qui est un comportement normal et acceptable si la section critique est courte), de l\'inversion **non-bornée**, où la durée de blocage de H dépend du temps d\'exécution de M, qui peut être arbitrairement long. C\'est cette forme non-bornée qui est particulièrement dangereuse et peut conduire à des défaillances du système.

Pour résoudre ce problème, des protocoles de synchronisation spécifiques ont été développés :

> **Protocole d\'Héritage de Priorité (Priority Inheritance Protocol - PIP) :** C\'est la solution la plus simple. Lorsqu\'une tâche H de haute priorité est bloquée par une tâche L de basse priorité qui détient une ressource, la priorité de L est temporairement élevée pour devenir égale à celle de H. Dans notre scénario, lorsque H se bloque sur le mutex, la priorité de L est élevée à celle de H. Ainsi, lorsque M devient prête, elle ne peut plus préempter L, car L s\'exécute maintenant à une priorité supérieure. L peut alors terminer rapidement sa section critique, libérer la ressource, et sa priorité revient à son niveau initial. H peut alors s\'exécuter. Le PIP résout le problème de l\'inversion non-bornée.
>
> **Protocole du Plafond de Priorité (Priority Ceiling Protocol - PCP) :** C\'est une solution plus sophistiquée qui prévient les inversions de priorité avant même qu\'elles ne se produisent. Chaque ressource partagée se voit assigner une \"priorité plafond\", qui est la priorité la plus élevée de toutes les tâches qui pourraient potentiellement utiliser cette ressource. Lorsqu\'une tâche (même de basse priorité) acquiert la ressource, sa propre priorité est immédiatement et temporairement élevée à la priorité plafond de la ressource. Cela garantit qu\'aucune autre tâche susceptible d\'utiliser la ressource (ou une autre ressource qui pourrait mener à un interblocage) ne pourra la préempter. Le PCP est plus complexe mais résout non seulement l\'inversion de priorité mais aussi les problèmes d\'interblocage (\
> *deadlock*).

### Section 2.5 : Étude de Cas Historique : Le Bug de la Mission Mars Pathfinder

L\'inversion de priorité n\'est pas un simple problème théorique. L\'un des exemples les plus célèbres et les plus spectaculaires de ses conséquences s\'est produit en 1997, à des millions de kilomètres de la Terre, lors de la mission Mars Pathfinder de la NASA.

Quelques jours après son atterrissage réussi sur Mars, la sonde Pathfinder a commencé à subir des redémarrages complets et inattendus de son système informatique. Ces redémarrages entraînaient la perte de précieuses données scientifiques collectées mais non encore transmises à la Terre. La situation était critique pour une mission dont la durée de vie était limitée.

Les ingénieurs du Jet Propulsion Laboratory (JPL) se sont lancés dans une course contre la montre pour diagnostiquer le problème. Heureusement, le système embarqué de Pathfinder, basé sur le RTOS VxWorks, disposait de capacités de télémétrie détaillées. En rejouant sur une réplique exacte de la sonde au sol la séquence d\'événements qui précédait chaque redémarrage, ils ont pu reproduire le bug et l\'identifier. Il s\'agissait d\'un cas d\'école d\'inversion de priorité non-bornée.

L\'architecture logicielle de la sonde comprenait, entre autres, les tâches suivantes :

> Une tâche de **haute priorité** (H) pour la gestion du bus d\'information, responsable du transfert des données critiques.
>
> Une tâche de **basse priorité** (L) pour la collecte de données météorologiques.
>
> Une tâche de **priorité moyenne** (M) pour les communications.

La tâche de collecte de données (L) et la tâche de gestion du bus (H) partageaient une ressource (le bus d\'information), protégée par un mutex. Parfois, la tâche (L) acquérait le mutex. Si la tâche (H) avait besoin du bus à ce moment-là, elle se bloquait, en attendant que (L) le libère. Si, à ce moment précis, la tâche de communication (M) devenait active, elle préemptait la tâche (L). La tâche (H), la plus critique, se retrouvait alors bloquée, en attente d\'une tâche (L) qui était elle-même empêchée de s\'exécuter par une tâche (M) moins prioritaire. Le système était équipé d\'un *watchdog timer*, un mécanisme de sécurité qui surveille l\'activité des tâches critiques. Constatant que la tâche de gestion du bus (H) ne donnait plus de signe de vie pendant une période prolongée, le watchdog concluait à une défaillance grave et déclenchait un redémarrage complet du système par mesure de sécurité.

La solution était conceptuellement simple. Le RTOS VxWorks offrait la possibilité d\'activer le protocole d\'héritage de priorité sur ses mutex. Cette option était contrôlée par un paramètre booléen qui, pour des raisons de performance, avait été laissé à FALSE (désactivé) lors de la configuration initiale du système. La véritable prouesse des ingénieurs du JPL fut de corriger ce bug à distance. VxWorks incluait un interpréteur C destiné au débogage. Les ingénieurs ont écrit un court programme en C, l\'ont téléversé sur la sonde via le lien de communication, et ont utilisé l\'interpréteur pour exécuter une commande qui modifiait la valeur de la variable globale contrôlant l\'héritage de priorité, la passant de

FALSE à TRUE. Le problème fut résolu, et les redémarrages cessèrent, sauvant ainsi la mission scientifique.

Cet incident historique a fourni plusieurs leçons fondamentales pour l\'ingénierie des systèmes embarqués critiques : l\'importance cruciale de conserver des mécanismes de journalisation et de débogage, même dans le logiciel de production ; la démonstration que des concepts théoriques d\'ordonnancement peuvent avoir des conséquences très pratiques et critiques ; et, comme l\'ont admis plus tard les ingénieurs, le danger de négliger des anomalies observées lors des tests (des redémarrages similaires avaient été observés mais attribués à des \"problèmes matériels aléatoires\") sous la pression des délais.

## Partie III : L\'Internet des Objets (IoT) : Connectivité et Échange de Données à Grande Échelle

Après avoir exploré les fondements matériels et logiciels d\'un système embarqué individuel, nous élargissons maintenant notre perspective pour considérer des réseaux de milliards de ces dispositifs. L\'Internet des Objets (Internet of Things, IoT) représente l\'extension du concept de système embarqué à une échelle planétaire, où des objets du quotidien, dotés de capacités de détection, de traitement et de communication, sont interconnectés via Internet. Cette partie décortique l\'architecture systémique qui sous-tend l\'IoT, en modélisant une solution complète comme une pile de couches fonctionnelles. Nous nous concentrerons ensuite sur un défi technique majeur : comment permettre à des objets aux ressources extrêmement contraintes de communiquer efficacement. Cela nous amènera à analyser en détail les protocoles de communication légers, notamment MQTT et CoAP, qui sont devenus les piliers de la connectivité IoT.

### Section 3.1 : Architecture de l\'IoT : Une Approche Systémique Multicouche

Une solution IoT complète est un système complexe qui va bien au-delà du simple objet connecté. Elle englobe la capture de données, leur transmission, leur stockage, leur analyse et leur présentation à l\'utilisateur final. Pour gérer cette complexité, il est courant de modéliser l\'architecture de l\'IoT de manière multicouche, où chaque couche représente une abstraction de fonctionnalités spécifiques. Bien que le nombre exact de couches puisse varier selon les modèles (4, 5, ou 7 couches sont souvent citées), une décomposition fonctionnelle en six couches offre une vision complète et cohérente.

> **Couche de Perception (ou Couche Périphérique) :** C\'est la couche la plus basse, l\'interface directe avec le monde physique. Elle est constituée des \"choses\" (Things) de l\'IoT. Elle inclut les **capteurs** qui collectent des données brutes sur l\'environnement (température, humidité, mouvement, lumière, etc.) et les **actionneurs** qui exécutent des actions physiques (ouvrir une vanne, allumer une lumière). Cette couche est responsable de la numérisation du monde réel.
>
> **Couche de Connectivité (ou Couche Réseau) :** Cette couche a pour rôle d\'assurer la transmission fiable des données collectées par la couche de perception vers les couches supérieures de traitement. Elle est elle-même souvent subdivisée. D\'abord, un réseau local (parfois appelé *Sensor-to-Gateway Network*) connecte les capteurs à une passerelle (*gateway*) en utilisant des technologies de courte ou moyenne portée et à faible consommation comme Bluetooth Low Energy (BLE), Zigbee, ou LoRaWAN. Ensuite, la\
> **passerelle**, qui agit comme un agrégateur et un traducteur de protocole, transmet les données vers Internet via des réseaux à plus longue portée comme le Wi-Fi, l\'Ethernet, ou les réseaux cellulaires (4G, 5G, NB-IoT).
>
> **Couche de Traitement des Données (ou Couche Edge/Cloud) :** C\'est ici que les données brutes sont transformées en informations de valeur. Cette couche peut être implémentée à deux niveaux. Le **Edge Computing** (calcul en périphérie) consiste à effectuer un pré-traitement, un filtrage ou une analyse des données directement sur la passerelle ou sur un serveur local, proche de la source des données. Cette approche réduit la latence, diminue la quantité de données à envoyer sur Internet (économisant ainsi de la bande passante et de l\'énergie), et peut améliorer la confidentialité. Les données (brutes ou pré-traitées) sont ensuite généralement envoyées au\
> **Cloud**, où des plateformes de Big Data, des bases de données et des algorithmes d\'intelligence artificielle (IA) et d\'apprentissage automatique (Machine Learning, ML) permettent une analyse approfondie, la détection de tendances et la prise de décision à grande échelle.
>
> **Couche Applicative :** C\'est la couche visible par l\'utilisateur final. Elle fournit les outils pour interagir avec le système IoT. Cela inclut des applications mobiles, des portails web et des tableaux de bord (*dashboards*) qui permettent de visualiser les données, de recevoir des alertes, de contrôler les appareils à distance et d\'analyser les informations générées. Cette couche expose également des API (Application Programming Interfaces) pour permettre l\'intégration avec d\'autres systèmes logiciels.
>
> **Couche Processus (ou Couche Métier) :** Cette couche, souvent la plus abstraite, est responsable de l\'intégration de la solution IoT dans les processus et les flux de travail de l\'entreprise. Elle aligne les informations et les capacités de l\'IoT avec les objectifs stratégiques de l\'organisation, permettant l\'automatisation des opérations, l\'optimisation des processus et la création de nouveaux modèles économiques.
>
> **Couche de Sécurité :** La sécurité n\'est pas une couche isolée mais une préoccupation transversale qui doit être intégrée à tous les niveaux de l\'architecture. Cela va de la sécurisation physique des capteurs contre le sabotage, au chiffrement des communications sur le réseau, en passant par la protection des données dans le cloud et la gestion des identités et des accès au niveau de l\'application.

### Section 3.2 : Protocoles de Communication pour Environnements Contraints

La viabilité de l\'architecture IoT repose sur la capacité de milliards d\'appareils, souvent de simples capteurs alimentés par une petite batterie, à communiquer de manière efficace et économe en énergie. Les protocoles qui ont fait le succès de l\'Internet traditionnel, comme la pile TCP/IP et le protocole applicatif HTTP, se révèlent souvent inadaptés à ce contexte.

Le protocole TCP (Transmission Control Protocol) a été conçu pour garantir une livraison fiable et ordonnée des données, ce qui nécessite un processus de \"poignée de main\" (*handshake*) en trois temps pour établir une connexion, ainsi qu\'un système d\'acquittements pour chaque paquet envoyé. Ce mécanisme, bien que robuste, génère une surcharge de communication (*overhead*) significative, consommatrice de bande passante et d\'énergie. De même, le protocole HTTP, avec ses en-têtes textuels et verbeux, est mal adapté à la transmission de quelques octets de données d\'un capteur. L\'en-tête d\'une simple requête HTTP peut être plusieurs fois plus volumineux que la charge utile (la valeur de température, par exemple).

Face à ces limitations, la communauté de l\'ingénierie a développé une nouvelle classe de protocoles de communication, dits \"légers\", spécifiquement conçus pour les environnements contraints de l\'IoT (*constrained environments*). Ces protocoles visent à  :

> **Minimiser la surcharge de protocole :** Utilisation d\'en-têtes binaires, compacts et fixes.
>
> **Réduire la consommation d\'énergie :** Moins de données à transmettre signifie moins de temps d\'activité pour la radio, qui est souvent le composant le plus énergivore d\'un appareil IoT.
>
> **Fonctionner sur des réseaux peu fiables :** Prise en compte des pertes de paquets et des déconnexions fréquentes, typiques des réseaux sans fil à faible puissance et longue portée (LPWAN - Low-Power Wide-Area Network).
>
> **Gérer des ressources de calcul limitées :** Implémentation simple nécessitant peu de mémoire et de puissance de traitement sur le microcontrôleur de l\'objet.

Deux protocoles se sont imposés comme des standards de facto dans cet espace : **MQTT (Message Queuing Telemetry Transport)** et **CoAP (Constrained Application Protocol)**.

### Section 3.3 : Analyse Comparative Détaillée : MQTT vs. CoAP

Le choix entre MQTT et CoAP est l\'une des décisions architecturales les plus importantes lors de la conception d\'une solution IoT. Bien que tous deux soient des protocoles légers, ils reposent sur des philosophies de communication fondamentalement différentes, ce qui les rend plus ou moins adaptés à certains cas d\'usage.

> **Protocole de Transport :** C\'est la différence la plus fondamentale. **MQTT** fonctionne exclusivement au-dessus de **TCP**. Il hérite ainsi de la fiabilité de TCP : garantie de livraison, ordre des paquets et contrôle de flux. Le coût de cette fiabilité est une surcharge plus élevée, notamment pour l\'établissement de la connexion.\
> **CoAP**, à l\'inverse, est conçu pour fonctionner sur **UDP** (User Datagram Protocol). UDP est un protocole \"sans connexion\" et \"fire and forget\", beaucoup plus léger que TCP, mais qui n\'offre aucune garantie de livraison. CoAP doit donc réimplémenter une couche de fiabilité optionnelle au niveau applicatif.
>
> **Modèle de Communication :** **MQTT** est basé sur un modèle de **publication-abonnement (publish-subscribe)**. Les clients ne communiquent pas directement mais via un serveur central appelé *broker*. Ce modèle est asynchrone et favorise le découplage entre les producteurs et les consommateurs de données.\
> **CoAP** utilise un modèle **requête-réponse** similaire à HTTP, basé sur l\'architecture REST (Representational State Transfer). C\'est un modèle synchrone où un client interroge directement un serveur pour obtenir ou modifier une ressource.
>
> **Surcharge et Efficacité :** En raison de son utilisation d\'UDP et de son en-tête binaire compact (4 octets minimum), **CoAP** est généralement considéré comme plus efficace pour la transmission de petites quantités de données. Des études comparatives montrent que pour une même charge utile, une transaction CoAP/UDP peut consommer jusqu\'à 70% de bande passante en moins qu\'une transaction MQTT/TCP, ce qui se traduit directement par des économies d\'énergie significatives pour les appareils sur batterie.
>
> **Sécurité :** Les deux protocoles intègrent des mécanismes de sécurité robustes. MQTT s\'appuie sur **TLS (Transport Layer Security)** pour sécuriser la connexion TCP. CoAP utilise **DTLS (Datagram Transport Layer Security)**, son équivalent pour les datagrammes UDP.

Le choix entre les deux protocoles est donc un arbitrage sur l\'endroit où l\'on place l\'intelligence et la complexité du système. Avec MQTT, une grande partie de l\'intelligence (routage, gestion des sessions, filtrage) est déportée sur le broker, simplifiant la logique des clients IoT. C\'est une architecture idéale pour des systèmes distribués, événementiels, où de nombreux appareils doivent communiquer de manière flexible. Avec CoAP, le protocole est minimaliste et la complexité est reportée sur la logique applicative des points de terminaison. C\'est une architecture plus adaptée aux interactions point-à-point simples, où l\'efficacité énergétique prime sur tout le reste.

**Tableau 3.1 : Comparaison des Protocoles IoT : MQTT vs. CoAP**

  ------------------------------ -------------------------------------------------------------------------------------- ----------------------------------------------------------------------
  Caractéristique                MQTT (Message Queuing Telemetry Transport)                                             CoAP (Constrained Application Protocol)

  **Modèle de communication**    Publication-Abonnement (Publish-Subscribe)                                             Requête-Réponse (Client-Serveur, RESTful)

  **Protocole de transport**     TCP                                                                                    UDP

  **Fiabilité**                  Élevée, héritée de TCP. Niveaux de QoS 0, 1, 2.                                        Gérée au niveau applicatif (messages Confirmables/Non-confirmables).

  **Surcharge (Overhead)**       Faible (en-tête 2 octets), mais TCP ajoute une surcharge significative.                Très faible (en-tête 4 octets), UDP est minimaliste.

  **Consommation d\'énergie**    Plus élevée en raison de la nature connectée de TCP.                                   Très faible, optimisé pour les appareils sur batterie.

  **Sécurité**                   TLS (Transport Layer Security)                                                         DTLS (Datagram Transport Layer Security)

  **Modèle d\'interaction**      Asynchrone, piloté par les événements, plusieurs-à-plusieurs.                          Synchrone (par défaut), un-à-un.

  **Découverte de services**     Non intégrée (dépend du broker ou de conventions).                                     Intégrée (requête GET sur /.well-known/core).

  **Gestion des sessions**       Intégrée (sessions persistantes, \"Last Will and Testament\").                         Pas de gestion de session native.

  **Qualité de Service (QoS)**   3 niveaux (0: au plus une fois, 1: au moins une fois, 2: exactement une fois).         2 niveaux (Confirmable ≈ QoS 1, Non-confirmable ≈ QoS 0).

  **Cas d\'usage**               Flottes de véhicules, applications de messagerie, monitoring industriel, smart home.   Capteurs sur batterie, smart metering, automatisation de bâtiments.
  ------------------------------ -------------------------------------------------------------------------------------- ----------------------------------------------------------------------

### Section 3.4 : Le Modèle Publication-Abonnement de MQTT : Flexibilité et Découplage

Le modèle de communication de MQTT, connu sous le nom de publication-abonnement (ou *pub/sub*), est l\'une des clés de sa popularité et de sa puissance pour les applications IoT. Il repose sur trois acteurs principaux : les **éditeurs** (*publishers*), les **abonnés** (*subscribers*), et un intermédiaire central, le **courtier** (*broker*).

> **L\'Éditeur** est un client MQTT (par exemple, un capteur de température) qui envoie des messages.
>
> **L\'Abonné** est un client MQTT (par exemple, une application sur un smartphone) qui reçoit des messages.
>
> **Le Broker** est un serveur qui reçoit tous les messages des éditeurs, les filtre et les distribue aux abonnés intéressés.

Le concept central qui relie ces acteurs est le **sujet** (*topic*). Un topic est une chaîne de caractères, structurée de manière hiérarchique avec des / comme séparateurs (par exemple, maison/salon/temperature), qui sert de canal de communication. L\'éditeur ne publie pas un message à destination d\'un abonné spécifique, mais sur un topic particulier. De même, un abonné ne se connecte pas à un éditeur, mais s\'abonne à un ou plusieurs topics qui l\'intéressent. Les abonnés peuvent utiliser des caractères génériques (

*wildcards*) pour s\'abonner à plusieurs topics simultanément : le + remplace un seul niveau hiérarchique, tandis que le \# remplace plusieurs niveaux à la fin du topic.

Cette architecture médiée par un broker offre un **triple découplage** fondamental entre les participants, ce qui la rend extrêmement flexible et évolutive  :

> **Découplage spatial :** L\'éditeur et l\'abonné n\'ont pas besoin de se connaître. Ils n\'ont besoin que de l\'adresse du broker. Un capteur peut être ajouté ou retiré du système sans que les applications qui consomment ses données n\'aient à être modifiées.
>
> **Découplage temporel :** L\'éditeur et l\'abonné n\'ont pas besoin d\'être connectés en même temps. MQTT supporte les **sessions persistantes**. Si un abonné se déconnecte, le broker peut stocker les messages publiés sur les topics auxquels il est abonné et les lui délivrer à sa prochaine reconnexion.
>
> **Découplage de synchronisation :** Les opérations de publication et de réception sont asynchrones. L\'éditeur publie un message et peut continuer son travail sans attendre que les abonnés le reçoivent.

Pour gérer la fiabilité dans des réseaux potentiellement instables, MQTT définit trois niveaux de **Qualité de Service (QoS)** que le client peut spécifier pour chaque message  :

> **QoS 0 (Au plus une fois) :** Le message est envoyé une seule fois, sans acquittement. C\'est le mode le plus rapide mais le moins fiable (\"fire and forget\").
>
> **QoS 1 (Au moins une fois) :** Le message est envoyé jusqu\'à ce qu\'un acquittement (PUBACK) soit reçu. Le message est garanti d\'arriver, mais des doublons sont possibles.
>
> **QoS 2 (Exactement une fois) :** Un mécanisme de poignée de main en quatre temps garantit que le message est reçu une et une seule fois. C\'est le mode le plus fiable, mais aussi le plus lent et le plus consommateur de ressources.

### Section 3.5 : Le Modèle Requête-Réponse de CoAP : Efficacité et Intégration Web

CoAP a été conçu avec une philosophie différente, en s\'inspirant directement du modèle qui a fait le succès du World Wide Web : l\'architecture REST (Representational State Transfer) sur HTTP. CoAP peut être vu comme une adaptation de ce modèle pour les objets et les réseaux contraints.

Le modèle de CoAP est une interaction **client-serveur** synchrone. Un **client** CoAP envoie une **requête** à un **serveur** CoAP pour interagir avec une **ressource** (par exemple, l\'état d\'un capteur). Cette ressource est identifiée par une URI (Uniform Resource Identifier), tout comme une page web (par exemple, coap://\[adresse_ip\]:5683/temperature).

Les interactions sont basées sur les mêmes quatre verbes principaux que HTTP :

> **GET :** Pour récupérer la valeur actuelle d\'une ressource.
>
> **POST :** Pour créer une nouvelle ressource ou déclencher une action.
>
> **PUT :** Pour mettre à jour la valeur d\'une ressource existante.
>
> **DELETE :** Pour supprimer une ressource.

Le serveur traite la requête et renvoie une **réponse**, qui contient un code de statut (similaire aux codes HTTP 200 OK, 404 Not Found, etc.) et, potentiellement, une charge utile (*payload*) contenant les données demandées.

Comme CoAP fonctionne sur UDP, il doit gérer lui-même la fiabilité. Il le fait de manière simple et optionnelle via deux types de messages  :

> **Messages Confirmables (CON) :** Le client envoie un message CON et attend un acquittement (ACK) du serveur. S\'il ne reçoit pas d\'ACK dans un certain délai, il retransmet le message. Cela correspond approximativement à un niveau de QoS 1.
>
> **Messages Non-confirmables (NON) :** Le message est envoyé sans attente d\'acquittement. Cela correspond à un niveau de QoS 0.

Conscient des limites du modèle purement requête-réponse pour de nombreuses applications IoT qui nécessitent des mises à jour spontanées, CoAP inclut une extension standardisée appelée **Observe**. Un client peut envoyer une requête GET avec une option \"Observe\", s\'enregistrant ainsi auprès du serveur pour cette ressource. Le serveur enverra alors une réponse immédiate avec la valeur actuelle, puis continuera à envoyer de nouvelles réponses (notifications) à chaque fois que l\'état de la ressource changera. Cela permet de simuler un modèle de type publication-abonnement de manière efficace et standardisée, sans la nécessité d\'un broker central.

## Partie IV : La Robotique : Perception et Action sur le Monde Physique

La robotique représente la concrétisation ultime des systèmes cyber-physiques, où le calcul et le monde physique ne sont pas seulement en interaction, mais forment une entité unifiée capable de percevoir, de raisonner et d\'agir de manière autonome. Cette partie se concentre sur les deux fonctions fondamentales qui définissent un robot : sa capacité à percevoir son environnement, c\'est-à-dire la **perception**, et sa capacité à le modifier ou à s\'y déplacer, c\'est-à-dire l\'**action**. Nous commencerons par définir les capteurs et les actionneurs comme les \"sens\" et les \"muscles\" du robot. Nous analyserons ensuite en détail les technologies de capteurs clés pour la perception spatiale, comme les caméras, le LiDAR et les unités de mesure inertielle. Puis, nous nous tournerons vers l\'action mécanique en classifiant les différents types de moteurs et servomoteurs. Enfin, nous lierons la perception et l\'action à travers l\'étude du principe de contrôle en boucle fermée le plus universel en robotique : le contrôleur PID.

### Section 4.1 : L\'Interface Sensorielle : Capteurs, Transducteurs et Chaîne d\'Acquisition

Un robot est fondamentalement un système mécatronique qui couple un mécanisme physique, des capteurs pour percevoir son état et celui de son environnement, et des actionneurs pour agir. Le fonctionnement d\'un robot peut être modélisé par une boucle de contrôle perpétuelle :

**Percevoir, Penser, Agir** (Sense, Think, Act). Les capteurs et les actionneurs constituent les interfaces d\'entrée et de sortie de cette boucle, reliant la partie \"cyber\" (le programme, la partie commande) à la partie \"physique\" (le robot et son environnement).

Un **capteur** est un transducteur qui convertit une grandeur physique (telle que la température, la lumière, la force, la distance) en un signal, généralement électrique, qui peut être lu et traité par un microcontrôleur ou un ordinateur. Ils sont les équivalents des sens humains pour une machine, lui fournissant les informations nécessaires pour prendre des décisions.

Un **actionneur** est un transducteur qui effectue l\'opération inverse : il convertit une forme d\'énergie, typiquement un signal de commande électrique, en une action physique. Cette action peut être un mouvement (rotation d\'une roue, flexion d\'une articulation), l\'émission de lumière (une LED), de son (un buzzer), ou la modification d\'un flux (une électrovanne). Les actionneurs sont les \"muscles\" du robot.

On peut classifier les capteurs selon plusieurs critères pertinents pour la robotique :

> **Capteurs internes vs. externes :** Les capteurs internes, ou proprioceptifs, mesurent l\'état interne du robot. Les exemples incluent les encodeurs sur les moteurs qui mesurent la position des articulations, ou les gyroscopes qui mesurent la vitesse de rotation du robot. Les capteurs externes, ou extéroceptifs, mesurent les propriétés de l\'environnement. Les exemples incluent les caméras, les capteurs de distance à ultrasons ou les capteurs de contact.
>
> **Capteurs logiques vs. analogiques :** Un capteur logique, ou Tout-ou-Rien (TOR), fournit une information binaire (0 ou 1, vrai ou faux). Un bouton-poussoir (appuyé/relâché) ou un détecteur de fin de course en sont des exemples. Un capteur analogique fournit un signal continu dont la valeur (par exemple, une tension) est proportionnelle à la grandeur physique mesurée. Une photorésistance, dont la résistance varie avec la luminosité, est un capteur analogique.

La chaîne d\'information part donc des capteurs, qui fournissent des données à la partie commande (le \"cerveau\" du robot), laquelle exécute un programme pour traiter ces informations et envoie des ordres aux actionneurs pour réaliser une tâche.

### Section 4.2 : La Perception Spatiale : Caméras, LiDAR et Unités de Mesure Inertielle (IMU)

Pour qu\'un robot puisse naviguer et interagir de manière intelligente avec son environnement, il doit être capable de répondre à deux questions fondamentales : \"Où suis-je?\" et \"Qu\'y a-t-il autour de moi?\". La perception spatiale est donc une capacité cruciale. Trois familles de capteurs sont devenues prépondérantes pour doter les robots de cette capacité.

> **Caméras :** Ce sont des capteurs passifs qui fonctionnent comme nos yeux, en capturant la lumière réfléchie par l\'environnement. Elles fournissent une information extrêmement riche sous forme d\'images, contenant des données sur la couleur, la texture, les formes et les motifs. Les caméras sont peu coûteuses, légères et compactes. Cependant, leur performance dépend fortement des conditions d\'éclairage ambiant. De plus, une caméra standard ne mesure pas directement la distance. L\'estimation de la profondeur à partir d\'images 2D (vision monoculaire) est un problème complexe, souvent résolu aujourd\'hui par des algorithmes d\'apprentissage profond. Les systèmes de vision stéréoscopique, utilisant deux caméras, peuvent calculer la profondeur par triangulation, de manière similaire à la vision humaine.
>
> **LiDAR (Light Detection and Ranging) :** Le LiDAR est un capteur actif qui fonctionne sur le principe d\'un radar, mais en utilisant de la lumière (un faisceau laser) au lieu d\'ondes radio. Il émet une impulsion laser et mesure le temps qu\'elle met pour revenir après avoir été réfléchie par un objet. Connaissant la vitesse de la lumière, il peut en déduire la distance de l\'objet avec une très grande précision. En faisant tourner le faisceau laser, un LiDAR 2D ou 3D peut balayer l\'environnement et générer en temps réel une carte de millions de points, appelée \"nuage de points\", qui représente la géométrie de l\'environnement. Le principal avantage du LiDAR est sa capacité à fournir des mesures de distance directes, précises et fiables, quelles que soient les conditions d\'éclairage. Il est devenu le capteur de référence pour la cartographie, la localisation et la détection d\'obstacles dans les véhicules autonomes et les robots mobiles. Ses inconvénients sont un coût et une consommation d\'énergie généralement plus élevés que ceux des caméras, ainsi que des difficultés à percevoir certaines surfaces comme le verre ou les objets noirs absorbants.
>
> **Unité de Mesure Inertielle (IMU - Inertial Measurement Unit) :** Contrairement aux caméras et au LiDAR qui sont des capteurs externes, l\'IMU est un capteur interne qui mesure le mouvement propre du robot. Une IMU combine typiquement trois capteurs  :

Un **accéléromètre** tri-axial, qui mesure l\'accélération linéaire (y compris la gravité) le long des trois axes (x, y, z).

Un **gyroscope** tri-axial, qui mesure la vitesse de rotation angulaire autour des trois axes.

Souvent, un magnétomètre tri-axial, qui mesure le champ magnétique terrestre et fournit une référence de cap absolue (comme une boussole).\
En intégrant mathématiquement les données de l\'accéléromètre et du gyroscope au fil du temps, un système de navigation inertielle peut estimer en continu l\'évolution de la position, de la vitesse et de l\'orientation du robot. C\'est ce qu\'on appelle l\'odométrie inertielle. L\'avantage majeur de l\'IMU est qu\'elle fournit des informations de mouvement à très haute fréquence (des centaines ou des milliers de fois par seconde) et est totalement indépendante de l\'environnement extérieur. Son inconvénient majeur est la dérive : de minuscules erreurs de mesure, inévitables, s\'accumulent à chaque intégration, conduisant à une erreur de position qui croît de manière quadratique ou cubique avec le temps.93 Après quelques secondes ou minutes, l\'estimation de la position peut devenir complètement fausse.

Aucun de ces capteurs n\'est donc parfait. La robustesse de la perception en robotique moderne n\'est pas atteinte en choisissant un unique \"meilleur\" capteur, mais en **fusionnant** intelligemment les données de plusieurs capteurs complémentaires pour pallier leurs faiblesses mutuelles. Par exemple, on combine les données à haute fréquence de l\'IMU (pour une estimation fluide du mouvement à court terme) avec les données à plus basse fréquence d\'un LiDAR ou d\'une caméra (pour corriger périodiquement la dérive en se recalant sur des points de repère fixes dans l\'environnement). Cette fusion de capteurs est un problème d\'estimation d\'état probabiliste, et elle a fait d\'algorithmes comme le **Filtre de Kalman** (et ses variantes non linéaires comme l\'EKF et l\'UKF) une brique logicielle aussi fondamentale pour la robotique que le contrôleur PID. La complexité se déplace ainsi de la conception de capteurs parfaits vers la conception d\'algorithmes sophistiqués capables de synthétiser une perception cohérente et fiable à partir de flux de données hétérogènes, bruitées et incomplètes.

### Section 4.3 : L\'Action Mécanique : Typologie et Sélection des Moteurs et Servomoteurs

Les actionneurs sont les composants qui permettent au robot d\'exécuter des actions physiques. En robotique, l\'action la plus courante est le mouvement, et les actionneurs les plus utilisés sont donc les moteurs électriques. Le choix du bon type de moteur est une décision critique qui dépend des exigences spécifiques de l\'application en termes de couple, de vitesse, de précision, de coût et d\'efficacité énergétique.

> **Moteurs à Courant Continu (CC / DC) :** Ce sont les moteurs les plus courants en robotique mobile.

**Moteurs à balais (Brushed DC) :** Leur principe est simple : des balais en carbone assurent le contact électrique avec un collecteur rotatif pour commuter le courant dans les enroulements du rotor, créant ainsi un champ magnétique qui le fait tourner. Ils sont peu coûteux, simples à contrôler (la vitesse est grossièrement proportionnelle à la tension) et offrent un couple de démarrage élevé. Leurs principaux inconvénients sont l\'usure mécanique des balais et du collecteur, qui nécessite une maintenance et limite leur durée de vie, et la génération d\'étincelles qui créent des interférences électromagnétiques.

**Moteurs sans balais (Brushless DC - BLDC) :** Dans un moteur BLDC, la configuration est inversée : les aimants permanents sont sur le rotor et les enroulements sur le stator. La commutation du courant dans les enroulements est réalisée électroniquement par un contrôleur externe, qui doit connaître la position du rotor (généralement via des capteurs à effet Hall). Cette conception élimine l\'usure et le frottement des balais, ce qui se traduit par une efficacité supérieure, une plus longue durée de vie, moins de bruit, et un meilleur rapport puissance/poids. Leur inconvénient est la nécessité d\'une électronique de commande plus complexe et donc plus coûteuse.

> **Moteurs Pas-à-pas (Stepper Motors) :** Ces moteurs sont conçus pour tourner d\'un angle précis, ou \"pas\", à chaque impulsion électrique qu\'ils reçoivent. Ils peuvent ainsi être contrôlés en position de manière très précise en **boucle ouverte**, c\'est-à-dire sans avoir besoin d\'un capteur de retour de position. Ils excellent pour maintenir une position fixe (ils ont un couple de maintien élevé) et offrent un bon couple à basse vitesse. Leurs inconvénients sont qu\'ils peuvent \"perdre des pas\" si la charge ou l\'accélération est trop élevée, ce que le contrôleur ne peut pas détecter en boucle ouverte. Ils sont également moins efficaces énergétiquement, car ils consomment du courant même à l\'arrêt pour maintenir leur position, et leur couple diminue rapidement à haute vitesse.
>
> **Servomoteurs :** Un servomoteur n\'est pas un type de moteur en soi, mais un **système d\'actionnement en boucle fermée**. Il intègre dans un même boîtier un moteur (généralement un moteur CC ou CA), un jeu d\'engrenages pour réduire la vitesse et augmenter le couple, un capteur de position (un potentiomètre pour les servos de modélisme, un encodeur de haute précision pour les servos industriels), et un circuit de contrôle. Le circuit de contrôle reçoit une consigne de position, la compare en permanence à la position réelle mesurée par le capteur, et pilote le moteur pour annuler l\'erreur. Les servomoteurs permettent ainsi un contrôle extrêmement précis et robuste de la position, de la vitesse et du couple, ce qui en fait le choix privilégié pour les articulations de bras robotiques et les applications exigeantes.

Le tableau suivant résume les caractéristiques de ces actionneurs pour guider leur sélection.

**Tableau 4.1 : Typologie des Actionneurs en Robotique : Avantages et Inconvénients**

  ---------------------------------- ------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------
  Type d\'Actionneur                 Principe de Fonctionnement                                                Avantages                                                                                                Inconvénients                                                                               Applications Typiques

  **Moteur CC à balais**             Commutation mécanique par balais et collecteur.                           Faible coût, contrôle simple, couple de démarrage élevé.                                                 Usure, maintenance, durée de vie limitée, bruit électrique.                                 Jouets, robotique éducative, applications à faible coût.

  **Moteur CC sans balais (BLDC)**   Commutation électronique externe.                                         Haute efficacité, longue durée de vie, pas de maintenance, haute vitesse, bon rapport puissance/poids.   Contrôleur plus complexe et coûteux.                                                        Drones, robots mobiles haute performance, ventilateurs.

  **Moteur Pas-à-pas**               Rotation par pas angulaires discrets en boucle ouverte.                   Contrôle de position simple et précis sans capteur, bon couple de maintien et à basse vitesse.           Perte de pas possible, faible couple à haute vitesse, consommation constante, résonances.   Imprimantes 3D, machines CNC, positionnement précis.

  **Servomoteur**                    Système en boucle fermée avec moteur, réducteur, capteur et contrôleur.   Très haute précision en position, vitesse et couple ; robuste aux perturbations.                         Coût plus élevé, complexité mécanique et électronique.                                      Bras robotiques industriels, articulations de robots humanoïdes, aéromodélisme.
  ---------------------------------- ------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------

### Section 4.4 : Principes de Contrôle en Boucle Fermée : Le Contrôleur PID (Proportionnel-Intégral-Dérivé)

Pour qu\'un robot puisse accomplir une tâche avec précision, il ne suffit pas d\'envoyer une commande à un moteur et d\'espérer qu\'il atteigne la position désirée. Le monde réel est plein de perturbations : frottements, variations de charge, imperfections mécaniques. Le contrôle en **boucle fermée** (*closed-loop control*) est la stratégie qui permet de surmonter ces incertitudes. Le principe est de mesurer en permanence l\'état réel du système (par exemple, la position d\'une articulation via un encodeur) et de le comparer à l\'état désiré (la consigne, ou *setpoint*). La différence entre les deux, appelée **erreur**, est utilisée par un algorithme de contrôle pour calculer une nouvelle commande à envoyer à l\'actionneur, dans le but de réduire cette erreur à zéro.

L\'algorithme de contrôle en boucle fermée le plus utilisé en robotique et dans l\'industrie, en raison de sa simplicité, de sa robustesse et de son efficacité, est le contrôleur **PID (Proportionnel-Intégral-Dérivé)**. Il calcule la commande de sortie

u(t) en combinant trois termes, chacun jouant un rôle distinct dans la correction de l\'erreur e(t)=consigne(t)−mesure(t).

La formule complète du contrôleur PID est :

u(t)=Kp​e(t)+Ki​∫0t​e(τ)dτ+Kd​dtde(t)​

Analysons chaque terme :

> **Le terme Proportionnel (P) :** C\'est le cœur du contrôleur. La commande de sortie est directement proportionnelle à l\'erreur actuelle : uP​(t)=Kp​e(t). Il agit comme un \"ressort virtuel\" dont la force de rappel est d\'autant plus grande que l\'on est loin de la cible. Le gain\
> Kp​ détermine la \"raideur\" de ce ressort. Un Kp​ élevé permet une réaction rapide, mais s\'il est trop élevé, le système peut dépasser la cible (*overshoot*) et osciller autour d\'elle avant de se stabiliser.
>
> **Le terme Dérivé (D) :** Ce terme réagit à la vitesse de variation de l\'erreur : uD​(t)=Kd​dtde(t)​. Il a un effet d\'amortissement, agissant comme un \"frein virtuel\" qui s\'oppose aux changements rapides. Son rôle est de prédire le comportement futur de l\'erreur et de stabiliser le système en réduisant l\'overshoot et les oscillations causés par le terme P. Un gain\
> Kd​ bien réglé permet au système de s\'approcher de la consigne plus rapidement et plus en douceur.
>
> **Le terme Intégral (I) :** Ce terme prend en compte le passé en accumulant l\'erreur au fil du temps : uI​(t)=Ki​∫0t​e(τ)dτ. Son rôle principal est d\'éliminer l\'**erreur en régime permanent** (*steady-state error*), c\'est-à-dire la petite erreur résiduelle qui peut subsister même lorsque le système semble stable, en raison de forces constantes comme la gravité ou les frottements. Tant qu\'il y a une erreur, même minime, l\'intégrale continue de croître, augmentant la commande jusqu\'à ce que l\'erreur soit complètement annulée. Cependant, ce terme doit être utilisé avec précaution : il peut déstabiliser le système, augmenter l\'overshoot et provoquer un phénomène de\
> *windup*, où l\'intégrale accumule une valeur excessive lors de grands changements de consigne.

Le processus de **réglage (tuning)** des trois gains Kp​, Ki​ et Kd​ est une étape critique et souvent empirique. Il s\'agit de trouver le bon équilibre pour obtenir une réponse qui soit à la fois rapide (temps de montée court), stable (peu ou pas d\'overshoot) et précise (pas d\'erreur en régime permanent).

## Partie V : La Robotique : Modélisation, Navigation et Planification du Mouvement

Après avoir étudié comment un robot perçoit et agit, nous abordons maintenant les aspects les plus sophistiqués de son intelligence : comment il se représente lui-même et le monde, comment il s\'oriente dans un environnement inconnu, et comment il planifie ses actions pour atteindre un but. Cette dernière partie explore les fondements algorithmiques de l\'autonomie. Nous commencerons par la modélisation mathématique du robot lui-même, à travers la cinématique directe et inverse. Nous nous attaquerons ensuite au défi central de la navigation autonome, le problème du SLAM. Enfin, nous conclurons en examinant les techniques de planification de mouvement qui permettent à un robot de calculer des trajectoires sûres et efficaces.

### Section 5.1 : Modélisation du Mouvement : Cinématique Directe et Inverse

Pour contrôler un robot manipulateur, comme un bras industriel, il est essentiel de disposer d\'un modèle mathématique précis qui relie le mouvement de ses articulations au mouvement de son outil ou de sa pince (appelé l\'effecteur terminal). On distingue deux problèmes fondamentaux, qui sont l\'inverse l\'un de l\'autre : la cinématique directe et la cinématique inverse.

> **Cinématique Directe (Forward Kinematics) :** Ce problème répond à la question : \"Si je connais les angles de chaque articulation du robot, où se trouve exactement l\'effecteur dans l\'espace?\". On part de l\'**espace articulaire** (l\'ensemble des valeurs des variables de chaque articulation, noté q) pour calculer la position et l\'orientation de l\'effecteur dans l\'**espace opérationnel** (l\'espace cartésien, noté X). Ce problème est relativement simple et a toujours une solution unique. Il est généralement résolu en modélisant le robot comme une chaîne de corps rigides et en multipliant successivement des matrices de transformation homogènes qui décrivent le passage d\'une articulation à la suivante. La convention de Denavit-Hartenberg (DH) est une méthode standardisée pour définir ces matrices. La relation s\'écrit\
> X=f(q).
>
> **Cinématique Inverse (Inverse Kinematics) :** C\'est le problème inverse, et il est beaucoup plus crucial en pratique : \"Pour atteindre une position et une orientation désirées avec mon effecteur, quels angles dois-je donner à chaque articulation?\". On cherche donc à trouver\
> q à partir d\'un X donné, soit q=f−1(X). Ce problème est nettement plus complexe car, contrairement à la cinématique directe, il n\'a pas toujours de solution unique. Il peut n\'y avoir aucune solution (si la cible est hors de l\'espace de travail du robot), une seule solution, un nombre fini de solutions (différentes postures du bras pour atteindre le même point), ou une infinité de solutions (pour les robots dits \"redondants\", qui ont plus d\'articulations que nécessaire pour la tâche). La résolution peut être analytique pour des robots simples ou doit faire appel à des méthodes numériques itératives pour des architectures plus complexes.

Au cœur de la relation entre les vitesses dans ces deux espaces se trouve la **matrice Jacobienne** (J). Elle relie les vitesses articulaires (q˙​) à la vitesse (linéaire et angulaire) de l\'effecteur (X˙) par la relation linéaire X˙=J(q)q˙​. La Jacobienne dépend de la configuration actuelle du robot

q\. Elle est fondamentale non seulement pour le contrôle en vitesse, mais aussi pour l\'analyse des **singularités**. Une singularité est une configuration du robot (par exemple, un bras complètement tendu) où la matrice Jacobienne perd son rang, ce qui signifie que le robot perd la capacité de se déplacer dans certaines directions de l\'espace opérationnel, quel que soit le mouvement de ses articulations. Ces configurations sont généralement à éviter car elles peuvent entraîner des vitesses articulaires infinies pour un mouvement fini de l\'effecteur.

### Section 5.2 : Le Défi de la Navigation Autonome : Le Problème du SLAM (Simultaneous Localization and Mapping)

Pour qu\'un robot mobile soit véritablement autonome, il doit pouvoir naviguer dans des environnements pour lesquels il ne dispose pas de carte préexistante. C\'est le défi fondamental de la **Localisation et Cartographie Simultanées (Simultaneous Localization and Mapping, SLAM)**.

Le SLAM est souvent décrit comme le problème de \"l\'œuf et de la poule\" de la robotique. Pour construire une carte précise d\'un environnement, un robot a besoin de connaître sa position exacte à chaque instant où il effectue une mesure. Mais pour se localiser précisément dans un environnement, il a besoin d\'une carte précise. Le SLAM consiste à résoudre ces deux problèmes interdépendants simultanément : le robot construit une carte tout en utilisant cette même carte, en cours de construction, pour estimer sa propre trajectoire.

Les premières approches pour résoudre le SLAM étaient de nature **probabiliste**, car l\'incertitude sur la position du robot (due aux erreurs d\'odométrie) et sur la position des points de repère (due au bruit des capteurs) est au cœur du problème.

> **EKF-SLAM :** Les premières solutions performantes utilisaient le Filtre de Kalman Étendu (EKF). L\'état du système était représenté par un grand vecteur contenant la pose du robot ainsi que les positions de tous les points de repère observés. Une énorme matrice de covariance capturait les incertitudes et les corrélations entre toutes ces variables. À chaque mouvement, l\'incertitude augmentait. À chaque observation d\'un point de repère, l\'incertitude diminuait. Cette approche fonctionne bien pour des environnements de taille limitée, mais son coût de calcul, qui croît de manière quadratique avec le nombre de points de repère, la rend impraticable pour de grandes cartes.
>
> **GraphSLAM :** Une approche plus moderne et plus scalable modélise le problème sous la forme d\'un graphe. Les nœuds du graphe représentent les poses successives du robot au cours de sa trajectoire et les positions des points de repère. Les arêtes représentent les contraintes spatiales entre ces nœuds : une arête entre deux poses successives représente le mouvement mesuré par l\'odométrie, et une arête entre une pose et un point de repère représente une mesure du capteur. Le problème du SLAM se transforme alors en un vaste problème d\'optimisation non linéaire : trouver la configuration du graphe (les positions des poses et des repères) qui minimise l\'erreur globale par rapport à toutes les mesures.

Un aspect crucial et particulièrement difficile du SLAM est la **fermeture de boucle (loop closure)**. Il s\'agit pour le robot de reconnaître un endroit qu\'il a déjà visité. Lorsqu\'une fermeture de boucle est détectée, une nouvelle contrainte puissante est ajoutée au graphe, reliant deux poses qui peuvent être très éloignées dans le temps. L\'optimisation du graphe avec cette nouvelle contrainte permet de corriger de manière drastique la dérive qui s\'est accumulée tout au long de la trajectoire, améliorant considérablement la cohérence globale de la carte.

Plus récemment, l\'**intelligence artificielle** a révolutionné le domaine du SLAM. Au lieu de s\'appuyer sur des caractéristiques géométriques simples (points, lignes) qui sont sensibles aux variations d\'apparence, les systèmes de

**Visual SLAM** modernes utilisent des réseaux de neurones profonds (CNN) pour extraire des descripteurs de lieux beaucoup plus robustes et sémantiques. De plus, l\'IA permet de gérer les **environnements dynamiques** : en utilisant la segmentation sémantique, le robot peut identifier et ignorer les objets mobiles (personnes, véhicules) qui perturbaient les algorithmes SLAM classiques, qui supposaient un monde statique. L\'aboutissement de cette tendance est l\'émergence de représentations de scènes neuronales comme les

**NeRFs (Neural Radiance Fields)**, où le SLAM ne se contente plus de construire un nuage de points, mais apprend une fonction continue qui peut générer des vues photoréalistes de la scène sous n\'importe quel angle.

### Section 5.3 : Planification de Mouvement : Espace de Configuration et Algorithmes de Recherche de Chemin

Une fois qu\'un robot sait où il est et dispose d\'une carte de son environnement, il doit être capable de planifier un mouvement pour se rendre d\'un point de départ à un point d\'arrivée sans entrer en collision avec les obstacles. C\'est le problème de la **planification de mouvement (motion planning)**.

Ce qui semble simple pour un humain est un problème algorithmique d\'une grande complexité, en particulier pour les robots avec de nombreuses articulations. La clé pour résoudre ce problème est une puissante abstraction mathématique : l\'**espace des configurations (Configuration Space, ou C-Space)**. Au lieu de raisonner sur la géométrie complexe du robot se déplaçant dans l\'espace de travail 2D ou 3D, on transforme le problème en la recherche d\'un chemin pour un

**point unique** dans un espace de plus haute dimension. Une **configuration** est un ensemble de valeurs qui définit de manière unique la position de chaque point du robot (par exemple, le vecteur de tous les angles de ses articulations). Le C-Space est l\'ensemble de toutes les configurations possibles du robot.

Dans ce C-Space, les obstacles de l\'espace de travail sont transformés en **C-Obstacles**. Un C-Obstacle est l\'ensemble de toutes les configurations pour lesquelles le robot entrerait en collision avec un obstacle. La planification de mouvement se résume alors à trouver un chemin continu pour un point, de la configuration de départ à la configuration d\'arrivée, dans la partie de l\'espace des configurations qui est libre de C-Obstacles (appelée

*C-free*). Cette cascade d\'abstractions révèle la nature profonde de la robotique moderne : il s\'agit de trouver les bonnes représentations mathématiques pour transformer des problèmes physiques apparemment insolubles en problèmes algorithmiques standards.

Une fois le problème formulé dans le C-Space, plusieurs familles d\'algorithmes peuvent être utilisées pour trouver un chemin :

> **Algorithmes basés sur une grille (déterministes) :** Pour les C-Spaces de faible dimension, on peut superposer une grille et modéliser le problème comme une recherche de chemin dans un graphe. L\'algorithme\
> **A\* (A-star)** est particulièrement efficace dans ce contexte. C\'est un algorithme de recherche de plus court chemin \"informé\" : il explore le graphe en priorisant les nœuds qui minimisent la somme du coût réel depuis le départ et d\'une **estimation heuristique** du coût restant jusqu\'à l\'arrivée (par exemple, la distance euclidienne). A\* garantit de trouver le chemin optimal (le plus court) si l\'heuristique est \"admissible\" (c\'est-à-dire qu\'elle ne surestime jamais le coût réel).
>
> **Algorithmes basés sur l\'échantillonnage (probabilistes) :** Pour les C-Spaces de haute dimension (par exemple, un bras robotique à 6 ou 7 articulations), la taille de la grille devient exponentiellement grande (la \"malédiction de la dimensionnalité\"). Les méthodes probabilistes contournent ce problème en explorant l\'espace de manière aléatoire au lieu de le discrétiser de manière exhaustive.

**Probabilistic Roadmaps (PRM) :** L\'algorithme échantillonne un grand nombre de configurations aléatoires dans le C-free, puis tente de les connecter entre elles par des chemins simples et sans collision. Cela construit une \"carte routière\" de l\'espace libre, sur laquelle une recherche de chemin (comme A\*) peut ensuite être effectuée rapidement.

**Rapidly-exploring Random Trees (RRT) :** L\'algorithme RRT fait croître un arbre de trajectoires atteignables à partir de la configuration de départ. À chaque itération, il choisit un point aléatoire dans le C-Space et étend la branche de l\'arbre la plus proche dans cette direction, favorisant ainsi l\'exploration des régions encore inconnues de l\'espace.

Ces algorithmes ne planifient pas seulement un chemin, mais une séquence de configurations que le robot devra ensuite suivre grâce à ses contrôleurs, fermant ainsi la boucle entre la planification de haut niveau et le contrôle de bas niveau.

## Conclusion

Au terme de ce parcours, qui nous a menés des contraintes d\'un microcontrôleur unique aux défis de la navigation autonome d\'un robot complexe, une image cohérente émerge : celle d\'un domaine unifié, celui des systèmes cyber-physiques. Les systèmes embarqués, l\'Internet des Objets et la robotique ne sont plus des îles technologiques isolées, mais les facettes interdépendantes d\'une même révolution où le calcul s\'entremêle intimement avec le monde physique.

Nous avons vu comment les contraintes fondamentales de coût, de taille et d\'énergie qui régissent la conception des **systèmes embarqués** ont poussé à une intégration matérielle sans précédent, culminant avec le Système sur Puce. Cette miniaturisation et cette efficacité ont été les catalyseurs qui ont rendu possible l\'**Internet des Objets**, en permettant de doter des milliards d\'objets du quotidien de capacités de détection et de communication. L\'IoT, à son tour, fournit l\'infrastructure de connectivité et de traitement des données à grande échelle qui permet à la **robotique** de sortir des usines pour devenir une technologie ambiante et collaborative. Un robot mobile moderne est, par essence, une collection de systèmes embarqués temps réel, un nœud puissant de l\'IoT, qui perçoit, planifie et agit.

Cette interdépendance est la clé de voûte du domaine. La fiabilité d\'un système de freinage autonome (robotique) dépend de la prévisibilité temporelle garantie par son RTOS (logiciel embarqué). L\'efficacité d\'une flotte de drones de livraison (robotique) repose sur la flexibilité du protocole de communication MQTT (IoT) qui coordonne leurs actions. La pertinence des données d\'un réseau de capteurs agricoles (IoT) dépend de l\'optimisation énergétique de chaque nœud (système embarqué).

En nous tournant vers l\'avenir, la tendance la plus marquante est sans aucun doute l\'infusion de l\'intelligence artificielle à tous les niveaux de la pile cyber-physique. Nous avons vu son impact transformer le problème du SLAM, passant d\'une optimisation géométrique fragile à une compréhension robuste de la scène. Mais ce n\'est qu\'un début. L\'apprentissage automatique, et en particulier l\'apprentissage profond, est en train de remodeler la conception même de ces systèmes. Des approches d\'apprentissage de bout en bout (*end-to-end learning*), où un réseau de neurones apprend directement à transformer les données brutes des capteurs en commandes pour les actionneurs, commencent à concurrencer les pipelines de traitement traditionnels (perception, modélisation, planification, contrôle). Ces nouvelles approches promettent des systèmes plus adaptatifs, capables d\'apprendre de leur expérience et de fonctionner dans des environnements complexes et non structurés, bien au-delà de ce que les algorithmes programmés manuellement peuvent accomplir. Le défi de demain ne sera plus seulement de concevoir des systèmes qui exécutent une tâche de manière fiable, mais de créer des systèmes autonomes capables d\'apprendre, de s\'adapter et d\'évoluer en interaction constante avec le monde physique. La maîtrise de cette nouvelle frontière de l\'ingénierie sera l\'un des enjeux scientifiques et technologiques majeurs des décennies à venir.
