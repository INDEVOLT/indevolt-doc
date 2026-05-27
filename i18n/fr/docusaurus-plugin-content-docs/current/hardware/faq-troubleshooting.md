---
title: FAQ et dépannage
description: Questions fréquentes et instructions d’utilisation des équipements de stockage d’énergie INDEVOLT
---

# FAQ et dépannage

## 1. Compatibilité et exigences de base

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. Q : Avec quels types de panneaux solaires l’appareil est-il compatible ?
  </summary>

  R : Il est recommandé d’utiliser des panneaux solaires dont la tension à circuit ouvert (Voc) est comprise entre 10 et 60 V, et dont le courant de court-circuit (Isc) ne dépasse pas 20 A.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  2. Q : L’appareil peut-il fonctionner en dessous de 0 °C ? Quelle est la plage de température idéale de la batterie ?
  </summary>

  R : L’appareil peut continuer à fonctionner normalement (charge et décharge) en dessous de 0 °C. La production photovoltaïque reste également possible. Toutefois, en raison des conditions d’ensoleillement hivernal, la production peut diminuer ; dans ce cas, l’énergie solaire est généralement suffisante pour l’autoconsommation, sans gaspillage d’énergie.

  Plage de température idéale de la batterie :
    - Charge : -20 à 55 °C  
    - Décharge : -20 à 55 °C  
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  3. Q : Avec quelles marques de produits l’appareil est-il compatible ?
  </summary>

  R : Il est actuellement compatible avec des produits des marques Shelly, SOLARMAN et INDEVOLT.
</details>


## 2. Installation, câblage et utilisation

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. Q : Faut-il un micro-onduleur supplémentaire ?
  </summary>

  R : Selon le modèle, la situation est la suivante :  
  - Modèles non ECO : micro-onduleur intégré, aucun équipement supplémentaire requis, avec 4 MPPT (suivi du point de puissance maximale). Pour augmenter la puissance photovoltaïque, un micro-onduleur supplémentaire peut être ajouté.  
  - Modèles ECO : ne prennent pas en charge le MPPT.  
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  2. Q : Quelles précautions prendre avant d’insérer ou d’ajouter une batterie d’extension ?
  </summary>

  R : L’appareil doit impérativement être complètement hors tension avant toute opération. Toute connexion ou déconnexion sous tension est strictement interdite, sous peine d’endommagement de l’appareil ou de risque pour la sécurité.  

  Procédure correcte :  
      1. Débrancher l’entrée photovoltaïque et l’alimentation secteur (AC) ;  
      2. Maintenir le bouton d’alimentation enfoncé pendant 2 secondes pour éteindre l’appareil ;  
      3. Une fois l’appareil éteint, insérer la batterie d’extension ;  
      4. Reconnecter les panneaux solaires et remettre sous tension pour reprendre l’utilisation.  
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  3. Q : L’appareil peut-il fonctionner en cas de coupure de courant ?
  </summary>

  R : En cas de panne de courant domestique, l’appareil peut continuer à fonctionner normalement. Il peut être rechargé via le photovoltaïque, et sa puissance de sortie hors réseau dépend du modèle.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  4. Q : Peut-on utiliser le port réseau (grid) en cas de coupure ?
  </summary>

  R : Conformément aux normes de certification de raccordement au réseau, l’appareil doit être équipé d’une fonction anti-îlotage (afin d’éviter toute injection d’électricité dans le réseau lors d’une panne, pour garantir la sécurité des techniciens). Par conséquent, en cas de coupure du réseau, il n’est pas possible d’alimenter le réseau via le port de raccordement ; seule la sortie hors réseau peut alimenter les charges.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  5. Q : Comment comprendre le mode bypass ?
  </summary>

  R : Le mode bypass est un mode de fonctionnement conçu pour s’adapter à certains équipements externes. Lorsqu’il est activé, il permet de connecter des micro-onduleurs, des charges critiques et d’autres dispositifs.  

  L’utilisateur peut activer ou désactiver ce mode selon les équipements connectés, via l’appareil ou l’application. Une fois activé, l’application affiche les équipements connectés ainsi que le flux d’énergie en temps réel, facilitant le suivi du système.  

  👉 Voir les détails : [Instructions du port bypass](./technical-note/bypass.md)
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  6. Q : Comment consulter les données de surveillance et modifier les paramètres en cas de perte de connexion réseau ?
  </summary>

  R : En cas de perte de connexion réseau, les fonctions de base de l’appareil continuent de fonctionner normalement. Les données peuvent être consultées via Bluetooth en connexion locale :  
    - Méthode 1 : sur l’écran de connexion du compte, sélectionner Connexion Directe À L’Appareil pour établir une liaison Bluetooth ;  
    - Méthode 2 : dans l’application, aller dans la page « Mon compte » et utiliser la fonction Connexion Directe À L’Appareil pour se connecter directement.
</details>

## 3. Gestion de la charge/décharge et stratégie de gestion de l’énergie

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. Q : Si plusieurs batteries ont des niveaux de SOC différents, est-ce un problème ?
  </summary>

  R : Non, c’est un fonctionnement normal.

  Chaque batterie est équipée d’un optimiseur DC-DC indépendant, et le système peut coordonner automatiquement les différences de niveau d’énergie entre les batteries. Même avec des batteries de capacités ou de SOC différents, elles peuvent être utilisées ensemble : le système effectue automatiquement un équilibrage du SOC, sans intervention manuelle.

  👉 Voir les détails : [Explication de l’équilibrage du SOC](./technical-note/soc-balancing.md)
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  2. Q : Comment configurer l’appareil pour qu’il n’injecte pas d’électricité dans le réseau domestique ?
  </summary>

  R : Dans l’application, allez dans les « Paramètres De Puissance » de l’appareil et définissez la Limite D’injection sur 0.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  3. Q : Peut-on contrôler la décharge en fonction du temps et du niveau d’énergie ?
  </summary>

  R : Oui. Vous pouvez configurer cela via Home Assistant en mode de contrôle en temps réel, en ajoutant des règles basées sur le temps et des seuils de SOC afin de réaliser un contrôle combiné.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  4. Q : Comment configurer l’appareil pour charger la batterie uniquement via les panneaux solaires ?
  </summary>

  R : Dans l’application, configurez un planning personnalisé et sélectionnez le mode de charge « uniquement photovoltaïque ».

  > **Remarque** : afin de préserver la santé de la batterie, lorsque le niveau de charge est très faible (SOC ≤ 3 %) et que la puissance photovoltaïque est insuffisante, le système peut automatiquement utiliser le réseau électrique pour charger la batterie afin d’assurer sa protection.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  5. Q : À partir de quelle puissance photovoltaïque l’appareil commence-t-il à charger ?
  </summary>

  R : Le système commence à charger la batterie lorsque la puissance photovoltaïque dépasse 50 W. La consommation propre de l’appareil est d’environ 35 W, et en tenant compte des pertes de conversion, une puissance inférieure à 50 W ne permet généralement pas de charger efficacement la batterie.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  6. Q : Pourquoi, lorsque la puissance photovoltaïque est faible, l’appareil n’affiche-t-il pas « en charge » ?
  </summary>

  R : Lorsque la puissance photovoltaïque est faible, une partie de l’énergie est d’abord utilisée pour le fonctionnement de l’appareil et les pertes de conversion. La puissance réellement injectée dans la batterie peut donc être très faible.

  Si la puissance de charge effective est inférieure au seuil d’affichage, l’application indique « en veille », mais la batterie peut tout de même être en charge lente — c’est un fonctionnement normal.

  Seuils d’affichage :

  - Puissance de charge ≥ 30 W : affichage « en charge »  
  - Puissance de décharge ≥ 60 W : affichage « en décharge »  
  - En dessous de ces seuils : affichage « en veille »
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  7. Q : Faut-il charger complètement la batterie avant la première utilisation ?
  </summary>

  R : Il est recommandé de charger complètement la batterie une fois avant la première utilisation, afin de calibrer la valeur du SOC et garantir que l’affichage dans l’application corresponde à la charge réelle de la batterie, améliorant ainsi l’expérience utilisateur.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  8. Q : Une fois la batterie pleine, les panneaux solaires continuent-ils à produire de l’électricité ? Est-ce sûr ?
  </summary>

  R : L’appareil dispose d’une protection contre la surcharge. Lorsque le SOC atteint 100 %, la charge de la batterie s’arrête automatiquement — c’est un comportement normal.

  Une fois la batterie pleine, le comportement des panneaux solaires dépend de l’état du système et des paramètres de l’application :

  - Si des charges consomment de l’électricité, les panneaux alimentent directement ces charges ;  
  - Si l’injection réseau est activée, l’excédent est injecté dans le réseau selon la puissance maximale définie dans l’application ;  
  - S’il n’y a pas de demande, le système réduit ou stoppe automatiquement la production utile.

  L’ensemble est géré automatiquement par le système et ne présente aucun risque pour l’appareil, la batterie ou les panneaux solaires.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  9. Q : Pourquoi le port Backup n’a-t-il pas de sortie lorsque le réseau est coupé ?
  </summary>

  R : Plusieurs causes possibles :

  - Si la version du firmware EMS est inférieure à 1.01.08 et que le port Backup fonctionne en mode micro-onduleur, le système peut bloquer la décharge hors réseau pour des raisons de protection ;  
  - Si le niveau de batterie (SOC) est inférieur à 5 %, le port peut également cesser de fournir de l’énergie.

  Vérifiez les points suivants :
  - Mettre à jour le firmware EMS vers la version 1.01.08 ou supérieure ;  
  - Vérifier que le niveau de batterie n’est pas trop faible.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  10. Q : Quelle est la consommation électrique du modèle SolidFlex 2000 ?
  </summary>

  R : La consommation du SolidFlex 2000 dépend de l’état de fonctionnement :

  - En fonctionnement (charge, décharge ou alimentation des charges) : environ 30 W ;  
  - En veille profonde (aucune charge/décharge, fonctionnement basse consommation) : la consommation varie selon la configuration du système, voir [consommation en veille](./technical-note/standby-power.md).
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  11. Q : La consommation des charges provient-elle toujours de la batterie ou peut-elle être directement alimentée par le photovoltaïque ?
  </summary>

  R : Cela dépend.

  - Lorsque la production photovoltaïque est suffisante, le système privilégie l’alimentation directe des charges via le solaire, et l’excédent sert à charger la batterie ;  
  - Lorsque la production est insuffisante, la batterie complète l’alimentation ;  
  - Pour les appareils produits après décembre 2025, un module d’alimentation auxiliaire AC est intégré, et en veille profonde, l’alimentation provient du réseau électrique.
</details>

## 4. Extension, batteries et cluster

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. Q : Qu’est-ce que le mode cluster ? Comment l’utiliser ?
  </summary>

  R : Un cluster désigne un système dans lequel plusieurs équipements de stockage d’énergie sont interconnectés afin de fonctionner comme un système unifié, partageant l’alimentation, le stockage et la gestion de l’énergie.

  Utilisation : après avoir ajouté tous les appareils dans l’application et terminé leur mise en réseau, accédez à la page « Appareils », puis ouvrez « Cluster ». Suivez les instructions pour ajouter les appareils à regrouper. Une fois l’appairage terminé, le mode cluster est activé. Vous pouvez également définir les règles de répartition de puissance et les seuils de SOC dans cette interface.

  👉 Voir les détails : [Explication du fonctionnement en parallèle](./technical-note/cluster.md)
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  2. Q : Les systèmes PowerFlex et SolidFlex peuvent-ils fonctionner ensemble en mode cluster ?
  </summary>

  R : Oui, les systèmes PowerFlex et SolidFlex sont compatibles et peuvent fonctionner ensemble en mode cluster.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  3. Q : Avec deux batteries en parallèle, la puissance peut-elle être réglée à 2 × 2400 W ou est-elle limitée à 2400 W au total ?
  </summary>

  R : Vous pouvez consulter la Puissance de Sortie AC Max. configurable dans la section « Paramètres de puissance » du groupe en parallèle dans l’application.

  Selon le mode de fonctionnement, la capacité de sortie diffère :

  - Coordonné : chaque appareil est connecté individuellement au réseau et gère sa propre entrée/sortie AC. Chaque batterie peut donc fournir jusqu’à 2400 W.  
  - Centralisé : toutes les entrées et sorties AC sont regroupées sur l’appareil maître, qui gère la connexion au réseau et la sortie. Dans ce cas, la puissance totale peut atteindre jusqu’à 2 × 2400 W au niveau du maître.

  Cependant, la puissance réellement configurable doit respecter les réglementations locales et les normes électriques en vigueur.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  4. Q : Comment la puissance est-elle répartie entre plusieurs appareils en parallèle ?
  </summary>

  R : Le système utilise une répartition hiérarchique basée sur le SOC et la charge :

  - Lorsque la puissance de décharge est ＜ 200 W : seul l’appareil avec le SOC le plus élevé fournit l’ensemble de la puissance ;  
  - Entre 200 W et 500 W : les deux appareils ayant les SOC les plus élevés se partagent la charge ;  
  - Au-delà de 500 W : tous les appareils esclaves participent à la décharge, avec une répartition proportionnelle au SOC de chaque unité.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  5. Q : La puissance maximale affichée est de 2400 W, mais la configuration par défaut est de 800 W. Peut-on la régler à 2400 W ?
  </summary>

  R : La puissance de décharge dépend du nombre de modules de batterie. Pour atteindre 2400 W, il est nécessaire d’ajouter davantage de modules de batterie ; un simple réglage logiciel ne suffit pas.

  Après ajout de modules, la capacité de décharge augmente en conséquence. Il est important de s’assurer que le câblage et la charge électrique sont adaptés afin d’éviter toute surcharge ou défaillance.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  6. Q : Combien d’unités SolidFlex 2000 et de modules SFA1800 sont supportées au maximum ? Quelle est la puissance totale ?
  </summary>

  R :
  - Nombre maximal de modules : chaque SolidFlex 2000 peut connecter jusqu’à 5 modules SFA1800, pour une capacité maximale de 10,8 kWh par unité (5 modules SFA1800).  
  - Puissance de décharge totale : la puissance nominale d’un SolidFlex 2000 est de 2400 W. Le système peut supporter jusqu’à 3 unités SolidFlex 2000 en cluster sans fil, avec une puissance totale maximale de 7200 W (3 × 2400 W).
</details>


## 5. Interconnexion système

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. Q : Peut-on interconnecter le système avec des systèmes de stockage d’autres marques ?
  </summary>

  R : Oui. L’interconnexion est possible via Home Assistant. Les deux systèmes doivent être intégrés à Home Assistant et disposer des autorisations ainsi que des interfaces de contrôle nécessaires.
</details>


## 6. Garantie

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. Q : Quelle est la durée de garantie du produit ? Quels composants sont couverts ?
  </summary>

  R : Le produit bénéficie d’une **garantie limitée de 10 ans**. La garantie couvre la batterie, l’onduleur AC et l’ensemble du système (sauf pièces d’usure, selon les conditions contractuelles).
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  2. Q : La durée de vie de 8000 cycles est-elle contractuelle ou uniquement théorique ?
  </summary>

  R : Les 8000 cycles sont une valeur issue de tests réels (le système utilise deux cellules de grande capacité, améliorant la stabilité des cycles). Cette valeur a une validité contractuelle.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  3. Q : Quel est le SOH garanti à la fin de la période de garantie ?
  </summary>

  R : Le SOH garanti est d’au moins 70 %.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  4. Q : Quelle est la profondeur de décharge maximale (DOD) autorisée ?
  </summary>

  R : Dans le cadre de la garantie, la profondeur de décharge maximale est de 100 %. Toutefois, une utilisation quotidienne optimisée est recommandée pour éviter des cycles de décharge complète fréquents.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  5. Q : Le système limite-t-il automatiquement le taux de charge/décharge (C-rate) pour prolonger la durée de vie de la batterie ?
  </summary>

  R : Oui. Le système permet également un réglage manuel de la puissance de charge/décharge et ajuste automatiquement le C-rate en fonction de l’état de la batterie (SOC, température, etc.) afin d’éviter les contraintes excessives et de prolonger la durée de vie.
</details>