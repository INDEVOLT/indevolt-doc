---
title: Apparence et interfaces
description: Description de l’apparence et des interfaces de l’appareil
---

# Apparence et interfaces

## Apparence

<img src={require("./img/appearance.png").default} width="480"/>

| N° | Fonction |
|----|----------|
| 1  | LED d’état de fonctionnement |
| 2  | Bouton Marche / Arrêt |
| 3  | Module sans fil |
| 4  | Interface d’entrée photovoltaïque MC4 1 |
| 5  | Interface d’entrée photovoltaïque MC4 2 |
| 6  | Interface d’entrée photovoltaïque MC4 3 |
| 7  | Interface d’entrée photovoltaïque MC4 4 |
| 8  | Interface de raccordement au réseau |
| 9  | Interface alimentation de secours |
| 10 | Trou de vis du conducteur de protection (section minimale du conducteur de protection : 4 mm²) |
| 11 | Trou de fixation du support |

:::info
Le modèle ECO ne dispose pas des ports 4 à 7.
:::

---

## Bouton

| Action | Fonction |
|--------|----------|
| Appui long 2 s en mode arrêt | Mise sous tension |
| Appui long 2 s en mode marche | Arrêt |
| Appui long 10 s en mode marche | Réinitialisation du Bluetooth et du Wi-Fi |

---

## LED

| LED                                                                                         | Description                                                               | État                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------ |
| <div class="table-img-box"><img src={require("./img/led-starting.png").default} /></div>    | LED bleue s’allume du centre vers le haut et le bas                       | Démarrage                |
| <div class="table-img-box"><img src={require("./img/led-charging.png").default} /></div>    | LED verte s’allume progressivement vers le haut selon le niveau de charge | En charge                |
| <div class="table-img-box"><img src={require("./img/led-discharging.png").default} /></div> | LED bleue s’éteint progressivement vers le bas selon le niveau de charge  | En décharge              |
| <div class="table-img-box"><img src={require("./img/led-iot-failure.png").default} /></div> | LED jaune                                                                 | Échec de connexion IoT   |
| <div class="table-img-box"><img src={require("./img/led-fault.png").default} /></div>       | LED rouge                                                                 | Défaut système           |
| <div class="table-img-box"><img src={require("./img/led-shutdown.png").default} /></div>    | LED bleue s’allume des deux côtés vers le centre                          | Arrêt en cours           |
| <div class="table-img-box"><img src={require("./img/led-reset.png").default} /></div>       | LED bleue clignote trois fois                                             | Réinitialisation réussie |