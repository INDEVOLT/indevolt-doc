---
title: Prise en main rapide
description: Guide d’installation et de première utilisation des équipements de stockage d’énergie Indevolt
---

# Prise en main rapide

Ce document s’applique aux équipements de stockage d’énergie **SolidFlex 2000 / PowerFlex 2000** et décrit le processus complet, du déballage à la première mise en service. Il comprend la vérification avant installation, l’installation de l’équipement, la première mise sous tension ainsi que l’ajout du dispositif dans l’application.

:::warning
Avant toute manipulation, veuillez lire les **[Consignes de sécurité](./safety.md)** afin de garantir une utilisation sûre.
:::

## Outils nécessaires

Avant d’installer l’équipement, veuillez préparer les outils suivants :

<img src={require("./img/tools.png").default} width="480"/>

---

## Déballage et vérification des accessoires

1. Vérifiez que l’emballage est intact et non endommagé.  
2. Ouvrez la boîte et retirez soigneusement l’équipement et les accessoires.  
3. Vérifiez la liste des composants pour vous assurer qu’il n’y a ni pièce manquante ni dommage.  

<img src={require("./img/power-packing-list.png").default} width="960"/>

> Si vous avez également acheté un module batterie, veuillez vérifier la liste suivante :  
<img src={require("./img/battery-packing-list.png").default} width="960"/>

---

## Instructions d’installation

:::info
- Ne pas installer le module dans une zone exposée au soleil direct, à proximité de flammes ou de matériaux inflammables ou explosifs.  
- S’assurer que l’emplacement d’installation est protégé contre les risques tels que les inondations.  
- Utilisation recommandée à une altitude inférieure à 2000 m.  
- Maintenir une bonne ventilation pour assurer une dissipation thermique adéquate.  
:::

### Étape 1 : Mesure de l’espace

Déterminez l’espace nécessaire en fonction de la configuration réelle afin de garantir une distance suffisante pour la dissipation thermique et la sécurité électrique.

<img src={require("./img/system-size.png").default} width="720"/>
<img src={require("./img/device-size.png").default} width="600"/>

### Étape 2 : Fixation de l’équipement

Exemple basé sur une configuration de **1 module principal + 2 modules batterie** :

1. Installer 4 pieds de support sous le module batterie d’extension inférieur.  
   <img src={require("./img/installation-step1.png").default} width="360"/>

2. Placer le module batterie au sol et maintenir une distance de 20 à 30 mm par rapport au mur.  
   <img src={require("./img/installation-step2.png").default} width="360"/>

3. Ajuster les quatre pieds afin de garantir que l’équipement soit parfaitement horizontal à l’aide d’un niveau à bulle.  
   <img src={require("./img/installation-step3.png").default} width="480"/>

4. Retirer les caches de protection suivants :  
   - Cache inférieur du module principal  
   - Cache supérieur et inférieur des modules batterie intermédiaires  

   :::warning
   Ne pas retirer le cache du module batterie d’extension inférieur afin d’éviter tout dommage matériel.
   :::

   <img src={require("./img/installation-step4.png").default} width="600"/>

5. Aligner les modules batterie d’extension avec les interfaces correspondantes et les empiler verticalement, puis installer le module principal en haut.  
   <img src={require("./img/installation-step5.png").default} width="240"/>

6. Fixer les supports muraux en forme de L des deux côtés du premier module batterie sous le module principal à l’aide de vis cruciformes M4.  
   <img src={require("./img/installation-step6.png").default} width="240"/>

7. Une fois les modules empilés, fixer le module principal et les modules batterie entre eux avec des vis M4.  
   <img src={require("./img/installation-step7.png").default} width="480"/>

8. Marquer les points de perçage sur le mur, percer des trous de Ø8 mm avec une profondeur d’environ 60 mm.  
   <img src={require("./img/installation-step8.png").default} width="480"/>

9. Insérer les chevilles d’expansion M5×60 dans les trous à l’aide d’un marteau, puis fixer solidement les supports muraux avec un tournevis cruciforme.  
   <img src={require("./img/installation-step9.png").default} width="480"/>

:::info
Ce produit intègre un transformateur d’isolation double conforme aux normes de sécurité. Il n’est pas nécessaire de mesurer la résistance d’isolement du champ photovoltaïque ni de détecter les courants de défaut.

L’unité principale doit être connectée à une prise de terre fiable. Sinon, il existe un risque de choc électrique. Si une prise mise à la terre n’est pas disponible, la mise à la terre du boîtier doit être réalisée. Le point de mise à la terre est indiqué ci-dessous.

<img src={require("./img/installation-step10.png").default} width="240"/>
:::

---

## Connexions électriques

:::info
- L’installation du raccordement au réseau AC doit respecter les réglementations locales. En cas de dépassement des limites autorisées, l’intervention d’un électricien qualifié est recommandée.
:::

Les étapes suivantes décrivent un scénario standard avec quatre panneaux photovoltaïques.

<img src={require("./img/connect-cables.png").default} width="960"/>

### Étape 1 : Connexion au réseau

1. Utiliser le câble d’alimentation fourni avec prise de sécurité (5 m).  
2. Connecter une extrémité au port GRID IN/OUT du module principal.  
3. Brancher l’autre extrémité à une prise secteur domestique ou sur site.  

<img src={require("./img/connect-grid.png").default} width="720"/>

### Étape 2 : Connexion des panneaux photovoltaïques

:::info
Le modèle ECO ne dispose pas de ports photovoltaïques et ne nécessite pas cette étape.
:::

Utiliser les câbles d’extension PV pour connecter les sorties positives et négatives de chaque groupe de panneaux aux entrées PV correspondantes du module principal (PV1, PV2, etc.).

<img src={require("./img/connect-pv.png").default} width="480"/>

:::warning
Il est strictement interdit de connecter plusieurs modules en série, cela pourrait dépasser une tension d’entrée de 60 V et endommager l’équipement.
:::

:::info
En cas de panne du module principal, le système tentera une récupération automatique dans un délai de 15 minutes. Si la récupération échoue, une intervention du service après-vente est requise. Le système ne pourra reprendre son fonctionnement qu’après validation par un technicien qualifié.
:::

---

## Mise sous tension

Localisez le bouton ON/OFF sur le côté gauche du module principal et maintenez-le enfoncé pendant 2 secondes. Lors du démarrage, le voyant LED bleu en façade s’allume avec un effet lumineux du centre vers le haut et le bas.

<img src={require("./img/power-on.png").default} width="360"/>
<img src={require("./img/power-on-led-state.png").default} width="240"/>

---

## Utilisation de l’application

Avec l’application INDEVOLT, vous pouvez :

- Consulter en temps réel l’état de fonctionnement et la puissance actuelle  
- Suivre le niveau de charge et de décharge de la batterie  
- Visualiser les statistiques de production et de consommation (jour / semaine / mois / année)  
- Configurer des stratégies énergétiques, des plannings ou effectuer des mises à jour firmware  

📥 Lors de la première utilisation, veuillez suivre les étapes de [téléchargement, création de compte et ajout de l’appareil](../app/installation.md).