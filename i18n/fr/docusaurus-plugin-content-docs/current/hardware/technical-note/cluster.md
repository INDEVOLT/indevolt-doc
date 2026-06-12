---
title: Guide du Cluster
description: Découvrez comment connecter plusieurs systèmes de stockage d’énergie afin d’augmenter la capacité et la puissance de sortie
---

# Guide du Cluster

## 1. Qu’est-ce que le cluster ?

Le mode Cluster permet de connecter plusieurs unités de stockage d’énergie en un seul système fonctionnant de manière coordonnée, afin d’assurer ensemble l’alimentation, le stockage et la gestion de l’énergie.

Dans un cluster, une unité doit être définie comme appareil principal. Elle est responsable du contrôle global et de la coordination du système, tandis que les autres unités fonctionnent comme appareils secondaires. Les appareils communiquent automatiquement entre eux et travaillent de manière synchronisée.

Après la mise en parallèle, la puissance totale de sortie et la capacité totale de stockage augmentent, ce qui convient particulièrement aux charges importantes, aux besoins d’alimentation de secours longue durée ou aux extensions futures.

---

## 2. Pourquoi utiliser le cluster ?

La puissance et la capacité d’un seul appareil sont limitées. Lorsque la consommation du foyer augmente ou qu’une autonomie plus longue est souhaitée, le cluster permet d’étendre les capacités du système.

**Augmentation de la puissance de sortie**

Plusieurs appareils peuvent fournir de l’énergie simultanément afin d’alimenter des charges plus importantes.

> Exemple :
> - 1 appareil SolidFlex 2000 : puissance maximale de l’onduleur d’environ 2400 W
> - 2 appareils en parallèle : puissance maximale d’environ 4800 W
> - La puissance réellement disponible reste soumise aux limites du réseau, du câblage et des réglementations locales.

**Augmentation de la capacité de stockage**

Après la mise en parallèle, les batteries de tous les appareils participent ensemble au stockage d’énergie, ce qui permet d’allonger significativement la durée d’alimentation.

> Exemple :
> - 1 SolidFlex 2000 avec 5 modules SFA1800 : capacité totale de 10,8 kWh
> - 2 systèmes en parallèle : capacité totale d’environ 21,6 kWh

**Extension flexible**

Le système permet une extension progressive. Les utilisateurs peuvent commencer avec un seul appareil puis ajouter de nouvelles unités selon leurs besoins, sans devoir installer l’ensemble du système dès le départ.

---

## 3. Appareils compatibles

Les modèles suivants peuvent être utilisés comme appareil principal ou secondaire :

<table><thead>
  <tr>
    <th></th>
    <th colspan="2">Cluster centralisé</th>
    <th colspan="2">Cluster coordonné</th>
  </tr></thead>
<tbody>
  <tr>
    <td>Modèle</td>
    <td>Principal</td>
    <td>Secondaire</td>
    <td>Principal</td>
    <td>Secondaire</td>
  </tr>
  <tr>
    <td>PowerFlex 2000</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>SolidFlex 2000</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>BK1600</td>
    <td>❌</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>BK1600 Ultra</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
</tbody>
</table>

:::info

- Le cluster entre les modèles SolidFlex 2000 / PowerFlex 2000 et BK1600 / BK1600 Ultra n’a pas encore été entièrement validé. Il n’est donc pas recommandé de les mélanger dans une même installation. En revanche, les modèles SolidFlex 2000 et PowerFlex 2000 sont entièrement compatibles entre eux.
- En mode cluster :
  - Les panneaux photovoltaïques peuvent être connectés via les interfaces **PV**
  - La connexion de micro-onduleurs et de charges via l’interface **Backup** est encore en cours d’optimisation et n’est pas totalement prise en charge pour le moment

:::

---

## 4. Mode Cluster

Le système prend en charge deux modes de fonctionnement adaptés à différents environnements d’installation.

La communication entre appareils peut s’effectuer via :
- Wi-Fi
- Ethernet
- RS485

Les utilisateurs peuvent choisir le mode de communication le plus adapté selon le câblage et l’environnement réseau disponibles sur site.

### 4.1 Cluster coordonné

Chaque appareil est connecté individuellement au réseau et gère séparément son entrée et sa sortie AC. Les appareils synchronisent leurs données via le réseau de communication, tandis que l’appareil principal coordonne l’état de fonctionnement et la répartition de puissance.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="gen1" label="SolidFlex 2000 / PowerFlex 2000" default>
    <img src={require("./img/coordinated_gen2.png").default} width="480" />
  </TabItem>
  <TabItem value="gen2" label="BK1600 / BK1600 Ultra">
    <img src={require("./img/coordinated_gen1.png").default} width="480" />
  </TabItem>
</Tabs>

### 4.2 Cluster centralisé

Les appareils secondaires sont reliés successivement à l’appareil principal par des câbles d’alimentation. Toutes les entrées et sorties AC sont regroupées sur l’appareil principal, qui assure la connexion au réseau et la gestion globale des flux d’énergie.

Méthode de connexion :
- L’appareil principal est connecté au réseau via **GRID IN/OUT**
- Le port **Backup** du principal est connecté au **GRID IN/OUT** du premier appareil secondaire
- En présence de plusieurs appareils secondaires, ils sont reliés en cascade via **Backup → GRID IN/OUT**

<Tabs>
  <TabItem value="gen1" label="SolidFlex 2000 / PowerFlex 2000" default>
    <img src={require("./img/centralized_gen2.png").default} width="480" />
  </TabItem>
  <TabItem value="gen2" label="BK1600 / BK1600 Ultra">
    <img src={require("./img/centralized_gen1.png").default} width="480"/>
  </TabItem>
</Tabs>

---

## 5. Règles de fonctionnement

Lorsque le Cluster est en fonctionnement, le système coordonne automatiquement les appareils et répartit la puissance sans intervention manuelle.

### 5.1 Limites du système

Le système prend en charge jusqu’à 3 appareils en parallèle :
- 1 appareil principal
- Jusqu’à 2 appareils secondaires

### 5.2 Capacité de sortie

La puissance maximale après mise en parallèle est la suivante :
- Charges standard : 7200 W (3 × 2400 W)
- Avec micro-onduleurs connectés : 10800 W (3 × 3600 W)

> Remarque : en mode cluster, l’affichage de puissance peut être imprécis lorsque des micro-onduleurs ou des charges sont connectés au port bypass. Cette fonction est encore en cours d’optimisation.

:::danger
Assurez-vous que la puissance maximale du système respecte les réglementations électriques et normes de sécurité locales.
:::

### 5.3 Répartition de puissance

En fonctionnement parallèle, le système répartit automatiquement la puissance selon le niveau de batterie et la charge :

- La puissance de sortie peut différer d’un appareil à l’autre
- Tous les appareils ne participent pas nécessairement simultanément
- Les appareils ayant le SOC le plus élevé sont prioritaires

Comportement typique selon la charge :

| Puissance de charge | Comportement du système |
| ------------------- | ----------------------- |
| Inférieure à 200 W  | Un seul appareil avec le SOC le plus élevé fournit l’énergie |
| 200 W à 500 W       | Les deux appareils avec le SOC le plus élevé partagent la charge |
| Supérieure à 500 W  | Tous les appareils participent, avec une répartition proportionnelle au SOC |

---

## 6. Comment configurer le cluster

La configuration peut être effectuée via l’application INDEVOLT.

Avant de commencer, assurez-vous que :

- Tous les appareils prennent en charge le cluster
- Tous les appareils sont correctement allumés

### Étape 1 : Accéder aux paramètres de cluster

Dans la page de détails de l’appareil, appuyez sur l’icône <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> en haut à droite pour accéder aux paramètres, puis sélectionnez **Cluster**.

Appuyez sur **Créer un cluster** pour commencer.

<img src={require("./img/device_info.png").default} width="240"/>
<img src={require("./img/cluster_device_settings.png").default} width="240"/>
<img src={require("./img/create_cluster.png").default} width="240"/>

### Étape 2 : Configurer les paramètres du cluster

Après avoir accédé à la page de création, configurez les paramètres de base du cluster : nom, mode de fonctionnement et limites de puissance.

:::danger
Assurez-vous que les paramètres configurés respectent les exigences du réseau et les réglementations locales.
:::

<img src={require("./img/creating_cluster.png").default} width="240"/>
<img src={require("./img/cluster_name.png").default} width="240"/>
<img src={require("./img/cluster_mode.png").default} width="240"/>
<img src={require("./img/cluster_output_limit.png").default} width="240"/>
<img src={require("./img/cluster_feed_in_limit.png").default} width="240"/>

### Étape 3 : Ajouter les appareils principaux et secondaires

Dans la liste des appareils compatibles, maintenez appuyée la carte de l’appareil puis faites-la glisser dans la zone principale ou secondaire.

<img src={require("./img/cluster_devices.png").default} width="240"/>

### Étape 4 : Confirmer et enregistrer la configuration

Après vérification des informations, appuyez sur **Enregistrer** pour finaliser la configuration du Cluster.

<img src={require("./img/cluster_created.png").default} width="240"/>

### Étape 5 : Consulter et gérer le cluster

Une fois la configuration terminée, l’application ouvre automatiquement la page de détails du cluster. Vous pouvez y consulter l’état du système, les relations entre appareils principaux et secondaires, la puissance en temps réel et les stratégies énergétiques.

Appuyez sur l’icône <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> en haut à droite pour accéder aux paramètres avancés et gérer le cluster, par exemple modifier les paramètres ou dissocier les appareils.

<img src={require("./img/cluster_info.png").default} width="240"/>
<img src={require("./img/cluster_settings.png").default} width="240"/>