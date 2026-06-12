---
title: Famille
description: Surveillez dynamiquement les flux d'énergie de votre maison et suivez en temps réel la production, la consommation et le stockage d'énergie.
---

# Famille

La page **Famille** est la page principale permettant de consulter et de gérer les données énergétiques de votre maison. Vous pouvez y visualiser en temps réel la production photovoltaïque, la consommation électrique, la charge et la décharge de la batterie, ainsi que les achats et ventes d'électricité avec le réseau. Un schéma des flux d'énergie vous permet également de visualiser clairement la circulation de l'énergie.

<img src={require("./img/home_intro.png").default} width="240"/>

| N° | Fonction | Description |
| --- | --- | --- |
| 1 | Famille | Affiche le nom de la maison actuelle. Appuyez dessus pour consulter, changer ou gérer les maisons associées à votre compte. |
| 2 | + | Ajouter un appareil |
| 3 | Météo | Consulter les conditions météorologiques et la température en temps réel du lieu de résidence de la maison |
| 4 | Flux d'énergie | Affiche de manière dynamique et visuelle les sources et destinations de l'énergie au sein de la maison |
| 5 | Tableau de bord | Personnaliser le thème du schéma des flux d'énergie et les indicateurs affichés |
| 6 | Données journalières | Consulter les statistiques de production, de consommation et de revenus du jour |

## 1. Maison

Si votre compte gère plusieurs maisons, vous pouvez passer de l'un à l'autre à tout moment pour consulter leurs données énergétiques.

### 1.1 Changer de maison

Appuyez sur le nom de la maison situé en haut à gauche pour afficher tous les maisons créées sous votre compte. Après avoir sélectionné la maison souhaitée, la page affichera les données énergétiques correspondantes.

<img src={require("./img/tap_myhome.png").default} width="240"/>
<img src={require("./img/select_home.png").default} width="240"/>

### 1.2 Gestion des maisons

Appuyez sur **Gérer** au bas de la liste des maisons pour accéder à la page de gestion.

#### Ajouter une maison

1. Sur la page de gestion des maisons, appuyez sur le bouton **+** situé en haut à droite.
2. Suivez les instructions à l'écran pour renseigner les informations de la maison.

Pour plus de détails, consultez : [Ajouter une maison](./profile.md#21-ajouter-une-maison)

#### Modifier ou supprimer une maison

Sur la page de gestion des maisons, sélectionnez la maison à modifier pour accéder à sa page d'informations et effectuer les opérations suivantes :

- [Modifier](./profile.md#22-modifier-une-maison) le nom, l'adresse et les paramètres associés de la maison.
- [Supprimer](./profile.md#23-supprimer-une-maison) la maison.

<img src={require("./img/select_home.png").default} width="240"/>
<img src={require("./img/manage_home.png").default} width="240"/>

## 2. Ajouter un appareil

Appuyez sur le bouton **+** situé en haut à droite de la page d'accueil pour commencer à ajouter un appareil.

Pour des instructions détaillées, consultez : [Ajouter un appareil](./add-device.md).

## 3. Météo

La carte météo affiche les conditions météorologiques et la température en temps réel du lieu où se trouve votre maison, afin de vous aider à mieux comprendre la production et la consommation d'énergie en fonction des conditions climatiques.

## 4. Flux d'énergie

Le flux d'énergie représente de manière visuelle et dynamique les sources d'énergie et leurs destinations en temps réel au sein de votre maison. Le sens des flux affichés correspond au sens réel de circulation de l'énergie.

- Actualiser les données : faites glisser la page vers le bas pour actualiser les données.
- Modifier le thème : pour changer le style du schéma, utilisez la configuration du [tableau de bord](#5-tableau-de-bord).
- Configurer les sources de données : les données affichées proviennent des paramètres des [sources de données](./profile.md#5-source-de-données). Vous pouvez appuyer sur chaque élément pour modifier sa configuration.

<img src={require("./img/power_flow.png").default} width="240"/>

## 5. Tableau de bord

Appuyez sur le bouton <img src={require("./img/config_icon.png").default} width="25" style={{verticalAlign: "middle"}}/> pour accéder à la page de configuration et personnaliser le contenu affiché sur la page d'accueil.

Vous pouvez :

- Choisir le thème du schéma des flux d'énergie
- Définir les cartes de données journalières à afficher
- Modifier l'ordre d'affichage des cartes de données

<img src={require("./img/select_dashboard.png").default} width="240"/>
<img src={require("./img/dashboard.png").default} width="240"/>

### 5.1 Thème des flux d'énergie

Appuyez sur **Flux d'énergie** pour choisir un style d'affichage différent.

<img src={require("./img/configure_power_flow.png").default} width="240"/>

### 5.2 Affichage des données journalières

Vous pouvez sélectionner les cartes de [données journalières](#6-données-journalières) à afficher sur la page d'accueil.

#### Automatique

Le système affiche automatiquement les cartes correspondant aux sources de données actuellement configurées.

Si aucune source de données n'est disponible pour un indicateur donné, la carte correspondante ne sera pas affichée.

<img src={require("./img/configure_daily1.png").default} width="240"/>

#### Manuel

Sélectionnez manuellement les éléments de données que vous souhaitez afficher.

<img src={require("./img/configure_daily2.png").default} width="240"/>

### 5.3 Modifier l'ordre des données

Maintenez une carte enfoncée puis faites-la glisser pour modifier librement l'ordre d'affichage des données. Une fois l'ordre ajusté, la section des données journalières de la page d'accueil sera réorganisée en conséquence, ce qui vous permettra de placer les informations les plus importantes en tête de liste.

<img src={require("./img/configure_daily1.png").default} width="240"/>
<img src={require("./img/data_order.png").default} width="240"/>

## 6. Données journalières

La section des données journalières regroupe les statistiques énergétiques cumulées depuis le début de la journée jusqu'à l'instant présent, afin de vous aider à mieux comprendre l'utilisation de l'énergie dans votre maison.

<img src={require("./img/daily.png").default} width="240"/>

| Donnée | Description |
| --- | --- |
| Économies | [Revenus](./report.md#13-revenus) calculés selon le tarif électrique actuel. Appuyez sur la carte du tarif pour consulter les statistiques détaillées. |
| Production | Production totale d'énergie photovoltaïque de la journée |
| Réseau | Quantité totale d'électricité achetée et vendue au réseau pendant la journée |
| Consommation | Consommation totale d'électricité de la maison pendant la journée |
| Tarif | Tarif actuel d'achat et de vente d'électricité |
| Batterie | Quantité totale d'énergie chargée et déchargée par la batterie pendant la journée |
| Auto-consommé | (Énergie consommée directement depuis le photovoltaïque + énergie photovoltaïque utilisée pour charger la batterie) / production totale. Indique la part de l'énergie photovoltaïque utilisée par la maison. |
| Autarcie | (Énergie consommée provenant de la production photovoltaïque + énergie consommée provenant de la décharge de la batterie) / consommation totale. Indique la part de la consommation couverte par l'énergie produite localement. |

Vous pouvez personnaliser les indicateurs affichés ici via la configuration du [tableau de bord](#5-tableau-de-bord).