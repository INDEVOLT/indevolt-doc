---
title: Appareils liés
description: Associer le système de stockage INDEVOLT aux équipements domestiques pour une gestion énergétique plus intelligente et plus sûre
---

# Appareils liés

En reliant le système de stockage INDEVOLT à d’autres équipements domestiques (prise intelligente, compteur intelligent ou lecteur de compteur), le système peut partager en toute sécurité les données de consommation sur le réseau local. Cela permet une estimation plus précise des besoins énergétiques et un ajustement automatique de la charge et de la décharge.

## Pourquoi lier d’autres appareils

Sans appareils associés, le système de stockage ne peut pas détecter les variations de charge et fonctionne uniquement selon des règles fixes :

- il ne connaît pas la consommation réelle du foyer et ne peut pas ajuster la puissance en temps réel  
- il fonctionne uniquement selon une puissance fixe ou un planning prédéfini  

Dans la pratique, cela peut entraîner :

- **Sur-décharge** → injection d’énergie vers le réseau  
- **Sous-décharge** → recours au réseau électrique alors que la batterie pourrait suffire  

:::tip
Le rôle essentiel de la liaison d’appareils est de **fournir un retour de consommation au système**, afin de permettre une adaptation dynamique de la charge et de la décharge.
:::

## Appareils pouvant être liés

Selon votre usage, les types d’appareils suivants peuvent être associés au système :

### Prise intelligente

Adaptée au contrôle précis d’un ou de plusieurs appareils spécifiques.

**Fonctionnalités :**

- mesure en temps réel de la puissance des appareils connectés  
- décharge adaptée à cette charge pour un ajustement précis  
- alimentation uniquement des appareils de cette prise, sans impact sur les autres circuits  

### Compteur intelligent

Adapté à une gestion énergétique globale du foyer.

**Fonctionnalités :**

- mesure de la consommation totale du foyer en temps réel  
- détection des flux entre réseau et habitation (import / export)  
- ajustement automatique pour atteindre un objectif de **zéro injection** ou maximiser l’autoconsommation  

### Lecteur de compteur

Solution alternative lorsque le compteur ne peut pas être connecté directement.

**Fonctionnement :**

- le système n’est pas connecté directement au compteur  
- les données sont lues via un lecteur externe  
- la puissance est ajustée en fonction des informations relevées  

## Comment lier un appareil

:::info Préparation
Avant de commencer, assurez-vous que :

- le système INDEVOLT et les appareils à lier sont ajoutés au même foyer  
- tous les appareils sont allumés et correctement connectés au réseau  

👉 Si ce n’est pas encore fait, consultez : [Ajouter un appareil](../../app/add-device.md)
:::

1. Dans l’application INDEVOLT, ouvrez la page **Appareil** et sélectionnez le système de stockage  
2. Accédez à la page détails de l’appareil
3. Cliquez sur **+ Ajouter un Sous-Appareil**  
4. Sélectionnez l’appareil à lier dans la liste  
5. Cliquez sur **lier** et attendez la configuration automatique  

<img src={require("../energy-mode/img/select_device.png").default} width="240"/>
<img src={require("../energy-mode/img/device_info.png").default} width="240"/>
<img src={require("./img/link_device.png").default} width="240"/>

Une fois la liaison réussie, les appareils associés apparaissent en bas de la page. En sélectionnant un sous-appareil, vous pouvez consulter la puissance en temps réel, l’état de fonctionnement et les données historiques.

<img src={require("./img/device_linked.png").default} width="240"/>