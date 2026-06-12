---
title: Plan de charge/décharge
description: Définir des cycles de charge et de décharge par plages horaires pour un contrôle précis de la consommation
---

# Plan de charge/décharge

Le mode **Plan de charge/décharge** vous permet de définir précisément, pour chaque période de la journée, si le système doit charger, décharger ou rester en veille.

Une fois configuré, le système exécute automatiquement le planning sans intervention quotidienne.


## Utilisateurs concernés

Ce mode est recommandé si vous :

- êtes soumis à des tarifs heures pleines / heures creuses ou tarifs de type dynamique  
- avez des différences importantes de consommation entre le jour et la nuit  
- avez des habitudes de vie et de consommation régulières  


## Fonctionnement du système

Dans ce mode, vous pouvez diviser la journée en plusieurs plages horaires et définir un mode de fonctionnement pour chacune.

- **Charge** : la batterie se charge à la puissance définie  
- **Décharge** : le système alimente les charges selon la puissance ou la demande  
- **Veille** : aucun cycle actif de charge ou de décharge  

**Priorité de consommation**

- L’énergie photovoltaïque alimente en priorité les charges domestiques  
- En cas d’insuffisance solaire, la batterie prend le relais  
- Si la production solaire et la batterie sont insuffisantes, le réseau électrique fournit le complément  


## Sélection des charges

| Type de charge | Période de décharge | Période de charge |
| -------------- | ------------------- | ------------------ |
| Prise intelligente | La décharge est ajustée selon la puissance réelle des appareils connectés à la prise. Une puissance de décalage peut être ajoutée pour ajuster la sortie. `Puissance réelle = charge mesurée + puissance de décalage` | Charge effectuée selon la puissance définie dans le planning |
| Compteur (installé côté entrée réseau) | Le système maintient une puissance cible de zéro : puissance positive → compensation de décharge, puissance négative → absorption en charge | Charge effectuée selon la puissance définie dans le planning |
| Charge clé | Le système alimente uniquement les équipements connectés à la sortie bypass, sans injection réseau | Charge effectuée selon la puissance définie dans le planning |
| Personnalisée (courbe de charge) | Décharge selon la puissance définie par la courbe de charge | Charge effectuée selon la puissance définie dans le planning |

:::info
Lorsque le type de charge est une prise intelligente ou un compteur intelligent et que celui-ci est hors ligne, le système bascule automatiquement sur la courbe de charge.
:::

:::info
Pour éviter toute surcharge ou anomalie, le système applique automatiquement la valeur la plus restrictive :
- En décharge : minimum entre puissance maximale AC, courbe de charge et puissance de charge  
- En charge : minimum entre puissance maximale d’entrée de l’onduleur et puissance de charge définie  
:::


## Configuration du plan de charge/décharge

**Étapes de configuration :**

1. Vérifiez que votre appareil est ajouté dans votre foyer via l’application INDEVOLT  
2. Accédez à l’onglet **Appareil**, puis sélectionnez l’équipement concerné  
3. Cliquez sur la section du mode énergétique pour accéder à la sélection du mode  
4. Choisissez **Plan de Charge/Décharge**, puis cliquez sur **Paramètres**  
5. Cliquez sur **+ Ajouter Un Plan** :
   - définir l’heure de début et de fin 
   - choisir le mode : Charge / Décharge / Veille
   - définir le mode de contrôle correspondant 
6. Cliquez sur **Enregistrer** pour appliquer immédiatement les paramètres  

<img src={require("./img/select_device.png").default} width="240"/>
<img src={require("./img/select_energy_mode.png").default} width="240"/>
<img src={require("./img/charge_discharge_schedule.png").default} width="240"/>
<img src={require("./img/select_add_plan.png").default} width="240"/>

## Paramètres recommandés de l’appareil

Dans la page de l’appareil, cliquez sur l’icône **⚙** en haut à droite.

Pour un fonctionnement stable, il est recommandé de configurer :

| Paramètre | Configuration recommandée |
| ---------- | -------------------------- |
| Puissance de sortie AC Max (décharge) | Supérieure à la consommation réelle du foyer et conforme à la réglementation locale |
| Puissance d’entrée AC Max (charge) | Supérieure à la puissance de charge souhaitée |
| Limite d’injection | Recommandée à `0` (anti-injection activé) |
| Bypass Socket | Désactivé en l’absence de besoin spécifique |
| Réserve de secours | Recommandée à 20 % |
