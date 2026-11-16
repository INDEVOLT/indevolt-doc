---
title: Démarrage rapide
description: Guide d'installation et de première utilisation du stockage d'énergie Indevolt
---

# Démarrage rapide

Le contenu de ce document constitue le manuel d'utilisation général. **Les différences des modèles sont signalées par des remarques 💡 dans tout le document.** Veuillez vous reporter aux remarques correspondant au modèle que vous avez acheté.

:::warning

Avant toute utilisation, veuillez d'abord lire les **[Consignes de sécurité](./safety.md)** pour garantir votre sécurité.

:::

---

## Liste de colisage

**Module d'alimentation :**

<img src={require("./img-fr/power-packing-list.png").default} width="800"/>

**Module batterie (en option) :**

<img src={require("./img-fr/battery-packing-list.png").default} width="800"/>

> 💡 **Remarque sur les différences entre modèles** : les modèles **sans port PV** (modèles AC / Eco) n'incluent Outil de démontage du connecteur MC4.

---

## Installation

### Choix de l'emplacement

- Ne pas installer près de la lumière directe du soleil, du feu ou de matériaux explosifs.
- L'emplacement doit être protégé contre les risques d'inondation.
- Utiliser sous les 2000 m d'altitude max.

### Jeux d'encombrement

Réserver un espace suffisant pour la dissipation thermique et l'isolation électrique.

1. Sélectionner l'espace d'installation approprié en fonction de la configuration de l'appareil à installer.

<img src={require("./img-fr/system-size.png").default} width="720"/>

> 💡 **Remarque sur les différences entre modèles** : les autres séries utilisent des batteries d'extension et des valeurs de capacité différentes :
>
> | Module d'alimentation | Batterie d'extension |
> | ---------------------------- | ----------------- |
> | SolidFlex 2000/Eco | 1792 Wh |
> | PowerFlex 2000/Eco | 2009 Wh |
> | SolidFlex 3000 Hybrid/AC | 1792 Wh |
> | SolidFlex 3000 Hybrid/AC Pro | 2009,6 Wh |
> | PowerFlex 3000 Hybrid/AC | 2016 Wh |
>
> | Module batterie | Batterie d'extension |
> | --- | --- |
> | SFA 1800 | 1792 Wh |
> | SFA 3600 | 3584 Wh |
> | PFA 2000 | 2016 Wh |
> | PFA 4000 | 4032 Wh |

2. Dimensions du produit :

<img src={require("./img-fr/device-size.png").default} width="600"/>



Remarque : Les composants suivants ne sont pas inclus dans ce colis. Veuillez vous assurer qu'ils sont prêts avant l'installation et le raccordement électrique.

<img src={require("./img-fr/tools.png").default} width="480"/>

### Installation

Les étapes suivantes décrivent l'installation d'un module d'alimentation et de deux batteries d'extension à titre d'exemple.

1. Installez quatre pieds de support au bas de la batterie d'extension.
   <img src={require("./img-fr/installation-step1.png").default} width="360"/>

2. Un espace libre minimum de 30 mm doit être respecté à l'arrière de l'appareil (zone du dissipateur thermique) afin de garantir une ventilation adéquate et une dissipation thermique efficace.
   <img src={require("./img-fr/installation-step2.png").default} width="360"/>

3. Ajuster la hauteur des quatre pieds de support au bas de l'appareil pour s'assurer qu'il soit horizontal, en calibrant à l'aide d'un niveau à bulle.
   <img src={require("./img-fr/installation-step3.png").default} width="480"/>

4. Enlever le capuchon de protection du bas du module d'alimentation, ainsi que les capuchons de protection du haut et du bas du module de batterie central.

   <img src={require("./img-fr/installation-step4.png").default} width="600"/>

   :::warning

   Lors de l'installation du module de batterie inférieur, maintenez le bouchon en caoutchouc en place pour éviter tout dommage causé par l'eau.

   Attention : Ne pas enlever le capuchon de protection du module de batterie d'extension le plus bas pour éviter d'endommager l'appareil !
   :::

5. Empiler les modules de batterie d'extension les uns après les autres, avec le module d'alimentation en haut. Pour cela, il faut connecter les deux connecteurs correspondants.
   <img src={require("./img-fr/installation-step5.png").default} width="300"/>

6. Fixer le support mural en forme de L sur les deux côtés du premier module de batterie d'extension sous le module d'alimentation à l'aide de vis Phillips M4.
   <img src={require("./img-fr/installation-step6.png").default} width="300"/>

7. Après l'installation du module d'alimentation et des modules de batterie, fixer les 2 modules avec des vis Phillips M4.

   <img src={require("./img-fr/installation-step7.png").default} width="480"/>

8. Marquer la position des trous à percer sur les deux côtés et utiliser une perceuse avec un foret de φ8 mm et une profondeur de 60 mm.

   <img src={require("./img-fr/installation-step8.png").default} width="480"/>

9. Insérer le manchon en plastique de la vis auto-taillant M5×60 dans le trou à l'aide d'un marteau, puis serrer la vis auto-taillant M5×60 dans le support mural en forme de L à l'aide d'un tournevis Phillips.
   <img src={require("./img-fr/installation-step9.png").default} width="480"/>

   Ce produit contient un transformateur à double isolation qui respecte les exigences de sécurité sans avoir besoin de mesurer la résistance d'isolation de la terre du tableau photovoltaïque ou de détecter les courants de défaut du tableau.

:::info

La connexion au réseau doit être connectée à une prise de terre, sinon il y a un grand risque d'électrocution. Autre possibilité, le boîtier doit être mis à la terre. Le point de mise à la terre est indiqué ci-dessous.

<img src={require("./img-fr/installation-step10.png").default} width="240"/>

:::

---

## Raccordement électrique

### Connexion des câbles

:::info 💡 Remarque sur les différences entre modèles

Les instructions de connexion PV suivantes s'appliquent uniquement aux modèles non-Eco et non-AC.

Les modèles Eco et AC, qui ne disposent pas de port PV, ne sont pas concernés par cette section.

:::

Les étapes suivantes décrivent l'installation d'un système avec quatre panneaux solaires à titre d'exemple.

<img src={require("./img-fr/connect-cables.png").default} width="960"/>

:::info 💡 Remarque sur les différences entre modèles : puissance d'injection réseau

La puissance de sortie CA standard de l'onduleur est limitée à 800 W. Si vous souhaitez augmenter cette valeur, l'installation doit être inspectée par un électricien qualifié afin de confirmer sa conformité aux exigences de sécurité en vigueur. À l'issue de cette inspection, vous pouvez faire une demande via l'application INDEVOLT afin d'augmenter la puissance à 3000 W.

Les manuels des **SolidFlex 2000/Eco et PowerFlex 2000/Eco** décrivent la même procédure avec une limite pouvant être augmentée à **2400 W** à la place.

:::

#### Étape 1 : Raccorder le réseau

1. Connectez le module d'alimentation à une prise secteur à domicile en utilisant le câble d'alimentation avec la prise de sécurité fournie.

<img src={require("./img-fr/connect-grid.png").default} width="720"/>

#### Étape 2 : Raccorder les panneaux solaires

Dispose de quatre unités indépendantes de suivi du point de puissance maximale (MPPT). Chaque entrée photovoltaïque fonctionne comme un MPPT distinct.

- Tension en circuit ouvert (Voc) : < 60 V par entrée PV.
- Courant de court-circuit (Isc) : < 20 A par entrée PV.

> 💡 **Remarque sur les différences entre modèles** : les manuels des SolidFlex 3000 Hybrid / SolidFlex 3000 Hybrid Pro indiquent « Courant de court-circuit (Isc) : < 22 A par entrée PV ».

- Pour une efficacité optimale, nous recommandons d'utiliser des câbles solaires d'une longueur maximale de 3 m afin de réduire les pertes de transmission.

- Les bornes positive (+) et négative (–) d'un module doivent être connectées à la même entrée PV.

  <img src={require("./img-fr/connect-pv.png").default} width="480"/>

:::warning

Remarque :
En cas de panne du module de batterie, le système se verrouillera. Ce verrouillage ne peut pas être restauré automatiquement et nécessite l'assistance du service après-vente. La fonctionnalité du système sera rétablie après confirmation par le service après-vente que les conditions sont remplies.

:::

### Système électrique

L'appareil peut être utilisé dans des systèmes domestiques monophasés ou triphasés :

<img src={require("./img-fr/electricity-system.png").default} width="720"/>

### Connexion en CA

Si vous disposez déjà d'un micro-onduleur, vous pouvez également coupler la sortie du micro-onduleur au terminal de secours de l'appareil via un couplage en CA. À ce moment-là, l'entrée PV alimentera la charge via le micro-onduleur. Si la puissance dépasse 3000 W (ce seuil peut être ajusté via l'application), l'appareil se déconnectera du micro-onduleur.

Remarque : Les modèles AC / Eco ne supportent la connexion aux modules solaires que via des micro-onduleurs et ne disposent pas de port PV.

> 💡 **Remarque sur les différences entre modèles** : pour les SolidFlex 2000/Eco et PowerFlex 2000/Eco, le seuil de déconnexion de ce couplage en CA est de **2400 W** au lieu de 3000 W (ajustable via l'application).

<img src={require("./img-fr/AC-coupled Connection 1.png").default} width="480"/>

<img src={require("./img-fr/AC-coupled Connection 2.png").default} width="480"/>

---

## Mise sous tension

Localisez le bouton ON/OFF sur le côté gauche de l'unité principale et maintenez-le enfoncé pendant 2 secondes.

Au démarrage, le voyant LED bleu du panneau avant s'allume avec une animation s'étendant du centre vers les extrémités.

<img src={require("./img-fr/power-on.png").default} width="360"/>
<img src={require("./img-fr/power-on-led-state.png").default} width="240"/>

---

## INDEVOLT APP

Avec l'application INDEVOLT, vous pouvez :

- surveiller en temps réel l'état de fonctionnement des appareils et la puissance actuelle
- vérifier le niveau de batterie et l'état de charge/décharge
- consulter les statistiques quotidiennes/hebdomadaires/mensuelles/annuelles de production et de consommation d'énergie
- configurer des stratégies et des planifications énergétiques et effectuer des mises à niveau du firmware

📥 Pour une première utilisation, veuillez d'abord compléter le [téléchargement de l'application, la création de compte et la configuration de l'appareil](https://docs.indevolt.com/docs/app/installation).
