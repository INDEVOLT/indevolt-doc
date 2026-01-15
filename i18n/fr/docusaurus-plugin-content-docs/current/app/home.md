---
title: Famille
description: Surveillez le flux d’énergie de votre domicile en temps réel, y compris la production, la consommation et le stockage.
---

# Famille

La page **Accueil** sert d’interface principale pour gérer les données énergétiques de votre domicile actuel. Elle fournit un aperçu de la production, de la consommation et du flux global d’énergie en temps réel.

<img src={require("./img/home_intro.png").default} width="240"/>

| N°  | Fonction          | Description                                                                                                                                 |
| --- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Maison         | Affiche le nom de la maison actuelle. Appuyez pour voir, changer de maison ou gérer toutes les maisons liées à votre compte.                  |
| 2   | +                 | Ajouter un nouvel appareil à votre domicile.                                                                                               |
| 3   | Tableau de bord   | Personnalisez le thème du graphique de flux énergétique et choisissez les données à afficher.                                               |
| 4   | Météo             | Affiche la météo locale et la température en temps réel.                                                                                   |
| 5   | Aller configurer | Si aucun plan tarifaire n’est défini, un bouton **Aller configurer** apparaît — appuyez pour définir les prix d’achat/vente. Si un plan existe, il affiche le tarif du jour. |
| 6   | Flux d’énergie    | Un graphique dynamique montrant d’où provient l’énergie de votre domicile et où elle est utilisée.                                         |
| 7   | Quotidien         | Affiche un résumé quotidien de la production et de la consommation d’énergie, ainsi que d’autres indicateurs clés.                           |

## 1. Ma Maison

### 1.1 Changer de maison

**Appuyez sur le nom de la maison** en haut à gauche pour ouvrir la liste de toutes les maisons liées à votre compte. Choisissez une maison pour accéder à sa vue des données énergétiques.

<img src={require("./img/tap_myhome.png").default} width="240"/>
<img src={require("./img/select_home.png").default} width="240"/>

### 1.2 Gérer la maison

Appuyez sur **Gérer** en bas de la liste pour accéder à la page de gestion.

<img src={require("./img/tap_manage_home.png").default} width="240"/>
<img src={require("./img/manage_home.png").default} width="240"/>

**Ajouter une maison**

1. Sur la page de gestion des maisons, appuyez sur le bouton **+** en haut à droite.  
2. Suivez les étapes à l’écran pour saisir les informations de la nouvelle maison. Pour plus de détails, consultez la section **[Ajouter une maison](./profile.md#21-ajouter-une-maison)**.

**Modifier une maison**

Sélectionnez la maison que vous souhaitez mettre à jour pour ouvrir sa page d’informations. Vous pouvez :  
- [**Modifier**](./profile.md#22-modifier-une-maison) le nom, l’adresse ou d’autres paramètres de la maison.  
- [**Supprimer**](./profile.md#23-supprimer-une-maison) la maison.  

## 2. Ajouter un appareil

Consultez le guide **[Ajouter des appareils](./add-device.md)** pour apprendre à connecter un nouvel appareil à votre domicile.

## 3. Tableau de bord

Appuyez sur le bouton de configuration du tableau de bord pour ouvrir la page des paramètres.

<img src={require("./img/select_dashboard.png").default} width="240"/>
<img src={require("./img/dashboard.png").default} width="240"/>

- **Flux d’énergie** : appuyez sur l’option **Flux d’énergie** pour choisir un thème.
    <img src={require("./img/configure_power_flow.png").default} width="240"/>

- **Au quotidien** : sélectionnez les données que vous souhaitez afficher sur la page Accueil.
    <img src={require("./img/configure_daily.png").default} width="240"/>

## 4. Météo

Cette section affiche la météo et la température en temps réel à l’emplacement de votre domicile.

## 5. Aller à la configuration

Cette zone affiche un contenu différent selon la configuration de votre tarif :

- Si aucun plan tarifaire n’est défini, un bouton **Aller configurer** apparaît. Appuyez pour définir les prix d’achat/vente.  
- Si un plan existe, il affiche les prix du jour. Appuyez pour consulter les prix passés.

## 6. Flux d’énergie

Le graphique de flux d’énergie montre visuellement d’où provient l’énergie de votre domicile et où elle est utilisée en temps réel.

- Rafraîchir : tirez vers le bas pour actualiser les données.  
- Paramètres du thème : pour changer le thème, allez dans **[Tableau de bord](#3-tableau-de-bord)**.
- Définir la source de données: Les données affichées dans le graphique de flux proviennent des paramètres de [source de données](./profile.md#5-source-de-données). Vous pouvez les ajuster selon vos besoins.

<img src={require("./img/power_flow.png").default} width="240"/>

## 7. Quotidien

La vue des données quotidiennes résume la production et la consommation totale de la journée.

| Paramètre            | Description                                                                                                                  |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Auto-consommé      | (Électricité utilisée directement du solaire + solaire utilisée pour charger la batterie) / production solaire totale – montre combien d’électricité PV a été utilisée à l’intérieur du domicile. |
| Autarcie             | (Charge provenant du PV + Charge provenant de la batterie) / Consommation totale – montre quelle part de l’électricité de votre domicile provient de votre propre énergie. |
| Production            | Production solaire totale de la journée.                                                                                     |
| Consommation          | Consommation totale d’électricité du foyer pour la journée.                                                                  |
| Depuis le réseau      | Électricité totale achetée au réseau aujourd’hui.                                                                            |
| Vers le réseau        | Électricité totale injectée dans le réseau aujourd’hui.                                                                      |
| Charger               | Énergie totale stockée dans la batterie.                                                                                     |
| Décharger             | Énergie totale fournie par la batterie.                                                                                      |

<img src={require("./img/daily.png").default} width="240"/>

Vous pouvez personnaliser les paramètres affichés ici via les réglages du **[Tableau de bord](#3-tableau-de-bord)**.
