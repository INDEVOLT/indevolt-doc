---
title: Calibration de l'énergie
description: Permet à l’appareil de recalibrer régulièrement le niveau de batterie pour une indication plus précise
---

# Calibration de l'énergie


## 1. Qu’est-ce que la calibration de l'énergie ?

En utilisation quotidienne, le niveau de batterie affiché (SoC) est estimé par un algorithme. Avec le temps, une certaine dérive peut apparaître.

La **calibration de l'énergie** consiste à effectuer périodiquement une charge complète, afin de corriger l’affichage du niveau de batterie et améliorer la précision du pourcentage.

:::info
L’appareil optimise en continu la précision de l’estimation du SoC via des algorithmes. À l’avenir, un algorithme de type filtre de Kalman sera également intégré afin d’améliorer encore la précision sur le long terme.
:::

## 2. Que se passe-t-il lors de la calibration ?

Lorsque la période de calibration définie est atteinte, le système lance automatiquement une calibration :

- Priorité à la recharge via le **photovoltaïque (PV)**  
- Si la production PV est insuffisante, utilisation automatique du **réseau (AC)**  
- Jusqu’à ce que la batterie soit **complètement chargée**, marquant la fin de la calibration  

👉 En résumé : la batterie est chargée à 100 % pour recalibrer le point de référence.


## 3. Pourquoi la calibration est-elle nécessaire ?

Sans calibration régulière, les problèmes suivants peuvent apparaître :

- Affichage du niveau de batterie imprécis  
- Arrêt prématuré ou chute anormale du niveau de batterie  
- Impact sur les logiques de gestion (ex. arrêt de la décharge)


## 4. Comment configurer la calibration ?


👉 Étapes dans l’application : page appareil → sélectionner l’appareil → <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> → paramètres SoC → Calibration De L'Énergie

<img src={require("../energy-mode/img/select_device.png").default} width="240"/>
<img src={require("../energy-mode/img/device_info.png").default} width="240"/>
<img src={require("../energy-mode/img/device_setting.png").default} width="240"/>
<img src={require("./img/soc_settings.png").default} width="240"/>


| Paramètre | Description | Recommandation |
|----------|-------------|----------------|
| Intervalle de calibration | Durée depuis la dernière charge complète (5 à 60 jours) | Recommandé : 14 jours (2 semaines) |
| Heure de début de calibration | Heure autorisée pour démarrer la calibration une fois la période atteinte | Choisir une période avec forte production PV ou un tarif électrique bas |
| Puissance de recharge | Utilise la puissance de recharge actuelle (puissance AC, par défaut 500 W) | À ajuster selon la capacité du circuit |

<img src={require("./img/calibration_interval.png").default} width="240"/>
<img src={require("./img/calibration_start_time.png").default} width="240"/>
<img src={require("./img/charging_power.png").default} width="240"/>