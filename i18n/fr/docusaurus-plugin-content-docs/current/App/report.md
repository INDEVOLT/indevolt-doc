---
title: Rapport
description: Analyse énergétique multidimensionnelle pour des insights sur les tendances de consommation et les économies.
---

# Rapport

La page **Rapport** fournit une analyse complète des données énergétiques de votre domicile, prenant en charge quatre dimensions temporelles : **Jour, Semaine, Mois et Année**. Vous pouvez passer d'une dimension à l'autre via les onglets en haut et ajuster la période. La page affichera dynamiquement les données pour la période sélectionnée.

<img src={require("./img/report.png").default} width="240"/>

## 1. Indicateurs de Données

### 1.1 Données Quotidiennes

| Paramètre                  | Description                                                                                                               |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **Production**             | Énergie PV totale produite pendant la période sélectionnée.                                                               |
| **Consommation**           | Consommation électrique totale du foyer pendant la période sélectionnée, incluant l'énergie PV, la batterie et le réseau. |
| **Depuis le réseau**       | Électricité totale achetée depuis le réseau public.                                                                       |
| **Vers le réseau**         | Électricité totale injectée dans le réseau public.                                                                        |
| **Décharger**              | Énergie totale restituée par le système de stockage de la batterie pendant la période.                                    |
| **Charger**                | Énergie totale stockée par le système de batterie pendant la période.                                                     |
| **Solaire**                | Puissance PV en temps réel au point sélectionné sur le graphique.                                                         |
| **Charge**                 | Puissance totale consommée par tous les appareils domestiques au point sélectionné.                                       |
| **Depuis le Réseau**       | Puissance en temps réel tirée du réseau public au point sélectionné.                                                      |
| **Vers le Réseau**         | Puissance en temps réel injectée dans le réseau public au point sélectionné.                                              |
| **Charger**                | Puissance de charge de la batterie en temps réel au point sélectionné sur le graphique.                                   |
| **Décharger**              | Puissance de décharge de la batterie en temps réel au point sélectionné sur le graphique.                                 |
| **SOC**                    | État de charge de la batterie (%) au moment sélectionné.                                                                  |
| **Bénéfices**              | Revenus estimés selon le tarif d'électricité applicable. Voir formules ci-dessous.                                        |
| **Impact environnemental** | Affiche des métriques telles que la réduction totale de CO₂, l'équivalent en arbres plantés et les économies de charbon.  |

<img src={require("./img/report_daily1.png").default} width="240"/>
<img src={require("./img/report_daily2.png").default} width="240"/>

### 1.2 Données Hebdomadaires / Mensuelles / Annuelles

| Paramètre                  | Description                                                                                                               |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **Production**             | Énergie PV totale produite pendant la période sélectionnée.                                                               |
| **Consommation**           | Consommation électrique totale du foyer pendant la période sélectionnée, incluant l'énergie PV, la batterie et le réseau. |
| **Depuis le réseau**       | Électricité totale achetée depuis le réseau public.                                                                       |
| **Vers le réseau**         | Électricité totale injectée dans le réseau public.                                                                        |
| **Décharger**              | Énergie totale restituée par le système de stockage de la batterie pendant la période.                                    |
| **Charger**                | Énergie totale stockée par le système de batterie pendant la période.                                                     |
| **Production**             | Énergie PV produite dans la plage personnalisée sélectionnée sur le graphique.                                            |
| **Consommation**           | Consommation totale du foyer pour la plage personnalisée.                                                                 |
| **Depuis le réseau**       | Électricité achetée au réseau pour la plage personnalisée.                                                                |
| **Vers le réseau**         | Électricité injectée dans le réseau pour la plage personnalisée.                                                          |
| **Charger**                | Énergie stockée dans la batterie pour la plage personnalisée.                                                             |
| **Décharger**              | Énergie de la batterie utilisée par le foyer pour la plage personnalisée.                                                 |
| **Bénéfices**              | Revenus estimés selon le tarif d'électricité applicable. Voir formules ci-dessous.                                        |
| **Impact Environnemental** | Affiche des métriques telles que la réduction totale de CO₂, l'équivalent en arbres plantés et les économies de charbon.  |

<img src={require("./img/report_week1.png").default} width="240"/>
<img src={require("./img/report_week2.png").default} width="240"/>

:::info
Les paramètres affichés peuvent varier en fonction des appareils connectés à chaque domicile. Veuillez vous référer à votre interface réelle.
:::

### 1.3 Revenus

Les revenus se composent de deux parties : **économies de coûts** et **revenus de vente**, calculés selon le [plan tarifaire](./profile.md#3-tarif) configuré pour votre domicile.

1. <u>**Économies de Coût** = Énergie Économisée × Prix d’Achat</u>  

   L'énergie économisée est calculée selon les méthodes suivantes selon les données disponibles :
   - Lorsque la consommation et l'importation depuis le réseau sont disponibles :  
     **Énergie Économisée = Consommation Totale − Importation Réseau**
   - Lorsque ces données ne sont pas disponibles :  
     **Énergie Économisée = Production + Décharge Batterie − Charge Batterie**

2. <u>**Revenus de Vente** = Énergie Exportée × Prix de Vente</u>  
   En l'absence d'exportation, les revenus d'exportation sont nuls.

3. <u>**Revenus Totaux Quotidiens** = Économies de Coût + Revenus de Vente</u>

Vous pouvez appuyer sur la section Revenus pour ouvrir la page des Statistiques de Revenus, où vous pouvez :
- Voir les revenus par **jour, semaine, mois ou année**.  
- Passer entre **Bénéfice Total** et **Revenus des Ventes**.  
- Voir le plan tarifaire utilisé pour les calculs et appuyer pour le modifier.  

<img src={require("./img/earnings.png").default} width="240"/>

## 2. Fonctionnalités

### 2.1 Mode Avancé

Appuyez sur l’icône <img src={require("./img/config_icon.png").default} width="25" style={{verticalAlign: "middle"}}/> en haut à droite pour passer en **Mode Avancé**, qui offre une visualisation plus intuitive des flux d’énergie.

<img src={require("./img/mode_selection.png").default} width="240"/>
<img src={require("./img/advanced_mode.png").default} width="240"/>

### 2.2 Vues de Données

Chaque dimension temporelle propose un **Aperçu** ainsi que des vues détaillées pour **Charge**, **Solaire**, **Batterie** et **Réseau**. Appuyez sur les icônes correspondantes pour passer entre les vues.

<img src={require("./img/report_overview.png").default} width="240"/>

### 2.3 Contrôle de l’Affichage du Graphique

Au-dessus de la zone du graphique, appuyez sur un bouton indicateur pour **afficher ou masquer** la ligne de données correspondante. Cela vous aide à vous concentrer sur des métriques spécifiques pour une analyse plus claire.

<img src={require("./img/chart_control.png").default} width="240"/>
