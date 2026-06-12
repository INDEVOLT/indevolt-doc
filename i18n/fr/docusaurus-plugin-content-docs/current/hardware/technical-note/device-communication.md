---
title: Communication avec les équipements externes
description: Comprendre comment la micro-stockage communique avec les compteurs, prises et autres appareils, ainsi que la mise à jour des données
---

# Communication avec les équipements externes

Lorsque vous connectez un compteur, une prise ou tout autre appareil au système de micro-stockage, celui-ci communique automatiquement avec ces équipements afin de récupérer les données de consommation ou de production.

- **Communication locale (réseau local)** : utilisée pour obtenir des données en temps réel (réponse rapide)
- **Communication cloud (à distance)** : utilisée pour l’affichage dans l’application et l’historique des données

Les modes de communication varient légèrement selon les marques, mais le système s’adapte automatiquement sans configuration manuelle.

| Marque      | Communication locale | Communication cloud |
|------------|----------------------|---------------------|
| Shelly     | HTTP                 | Cloud via micro-stockage     |
| Ecotracker | HTTP                 | Cloud via micro-stockage     |
| Stromleser | HTTP                 | Cloud via micro-stockage     |
| HomeWizard | HTTP                 | Cloud via micro-stockage     |
| SOLARMAN       | Diffusion UDP        | Cloud direct  |
| INDEVOLT   | Protocole propriétaire | Cloud via micro-stockage  |

:::tip
“Cloud via micro-stockage” signifie que les données sont d’abord envoyées à la micro-stockage, puis centralisées et transmises au cloud par celle-ci.
:::

## 1. Communication locale

La communication locale est utilisée pour récupérer les **données en temps réel** des appareils. La fréquence de mise à jour peut varier selon les équipements.

:::info
La fonction de réglage de la fréquence de rafraîchissement des données de l’appareil n’est pas encore disponible. Elle sera ajoutée ultérieurement dans l’application.
:::

### 1.1 Appareils utilisant la communication HTTP

Les données sont récupérées via une API HTTP sur le réseau local, avec une bonne stabilité.

- **Intervalle par défaut** : 2 secondes  
- **Plage réglable** :
  - SolidFlex 2000 / PowerFlex 2000 : ≥ 1 seconde
  - BK1600 / BK1600 Ultra : ≥ 2 secondes

- **Appareils compatibles**

  <table><thead>
    <tr>
      <th>Marque</th>
      <th>Type</th>
      <th>Modèle</th>
    </tr></thead>
  <tbody>
    <tr>
      <td rowspan="3">Shelly</td>
      <td>Compteur monophasé</td>
      <td>Shelly Pro EM</td>
    </tr>
    <tr>
      <td>Compteur triphasé</td>
      <td>Shelly 3EM<br />Shelly Pro 3 EM (400)<br />Shelly Pro 3EM 3CT 63</td>
    </tr>
    <tr>
      <td>Prise</td>
      <td>Shelly Plug<br />Shelly Plug S Gen3</td>
    </tr>
    <tr>
      <td>Ecotracker</td>
      <td>Lecteur infrarouge</td>
      <td>EcoTracker IR</td>
    </tr>
    <tr>
      <td>Stromleser</td>
      <td>Lecteur infrarouge</td>
      <td>stormleser.one</td>
    </tr>
    <tr>
      <td>HomeWizard</td>
      <td>Lecteur P1</td>
      <td>HWE-P1</td>
    </tr>
  </tbody>
  </table>

:::note
Les appareils suivants ne sont pas encore intégrés au système micro-stockage et ne prennent pas encore en charge la communication des données :

<table><thead>
  <tr>
    <th>Marque</th>
    <th>Type</th>
    <th>Modèle</th>
  </tr></thead>
<tbody>
  <tr>
    <td rowspan="3">Shelly</td>
    <td>Compteur monophasé</td>
    <td>Shelly EM<br />Shelly EM Gen3</td>
  </tr>
  <tr>
    <td>Compteur triphasé</td>
    <td>Shelly 3EM-63T Gen3</td>
  </tr>
  <tr>
    <td>Prise</td>
    <td>Shelly Wave Plug S<br />Shelly Plus Plug S <br />Shelly Outdoor Plug S Gen3</td>
  </tr>
</tbody>
</table>
:::

### 1.2 Appareils SOLARMAN

Les appareils SOLARMAN envoient leurs données via une **diffusion locale (broadcast)**, sans interrogation, pour une meilleure réactivité.

| Type           | Modèle                                                   | Intervalle par défaut | Minimum |
|----------------|----------------------------------------------------------|------------------------|----------|
| Compteur monophasé  | MR1-D5-WR<br />MR1-D5-W                                  | 150 ms                | ≥150 ms  |
| Compteur triphasé   | MR3-D5-WR<br />MR3-D5-W<br />MR3-D4-WRE<br />MR3-D4-WE   | 150 ms                | ≥150 ms  |
| Lecteur infrarouge     | NIR-12-EU<br />NIR-32-EU                                 | 150 ms                | ≥150 ms  |
| Lecteur P1     | P1-2W<br />P1-2W-C                                       | 500 ms                | ≥150 ms  |
| Prise          | SP-2W-EU                                                 | 500 ms                | ≥150 ms  |

:::note
Les appareils suivants sont en cours d’intégration et seront pris en charge dans une future version :
- P1-2WR
:::

### 1.3 Appareils INDEVOLT

Communication via protocole propriétaire Indevolt.

- **Intervalle par défaut** : 2 secondes  
- **Plage réglable** : ≥ 1 seconde  

- **Appareils compatibles**

  | Type           | Modèle |
  |----------------|--------|
  | Compteur monophasé  | SMD1   |
  | Compteur triphasé   | SMD3   |
  | Prise          | SP16   |

## 2. Communication cloud

Les données cloud permettent la consultation à distance, par exemple dans l’application.

Tous les appareils suivent les mêmes règles :
- **Intervalle par défaut** : 300 secondes (5 minutes)
- **Mode rafraîchissement rapide activé** : 1 seconde