---
title: Veille normale et Veille profonde
description: Présentation de la fonction de veille profonde, des conditions de déclenchement et des précautions d'utilisation des systèmes de stockage d'énergie
---

# Veille normale et Veille profonde

## 1. Présentation des modes veille

Lorsqu'un système de stockage d'énergie n'a temporairement aucun besoin de charge ou d'alimentation, le système passe en mode veille afin de réduire la consommation d'énergie du dispositif. En mode veille, l'appareil continue de surveiller l'état de la batterie et reprend automatiquement son fonctionnement lorsqu'un besoin de charge ou d'alimentation est détecté.

Selon le niveau d'économie d'énergie, les modes veille sont divisés en deux états :

- **Veille normale** : adaptée aux courtes périodes sans besoin de charge ou de décharge. L'appareil conserve une capacité de réponse rapide.
- **Veille profonde** : adaptée aux longues périodes sans besoin de charge ou de décharge. Certaines fonctions non essentielles sont désactivées afin de réduire davantage la consommation d'énergie.

La veille profonde est un état d'économie d'énergie avancé basé sur la veille normale. Elle ne signifie pas que l'appareil est éteint.


## 2. Différences entre la veille profonde et la veille normale

| Élément de comparaison | Veille normale | Veille profonde |
| ---------------------- | -------------- | --------------- |
| Scénario d'utilisation | Absence de besoin de charge ou de décharge pendant une courte période | Absence de besoin de charge ou de décharge pendant une longue période |
| Consommation d'énergie | Faible | Plus faible |
| État du système | L'onduleur reste en mode veille | L'onduleur passe en mode veille prolongée |
| Vitesse de reprise | Plus rapide | Relativement plus lente |
| Temps de commutation EPS | Environ 100 ms | Environ 1 à 2 s |

👉 Voir les informations détaillées sur la consommation d'énergie : [Consommation en veille](../technical-note/standby-power.md#consommation-par-état)

> Remarque : comme la veille profonde nécessite la réactivation de certaines fonctions avant la reprise du fonctionnement normal, le temps de commutation de l'EPS (alimentation de secours) après la sortie de veille profonde est légèrement plus long qu'en veille normale.


## 3. Présentation de la veille profonde

### 3.1 Qu'est-ce que la veille profonde ?

La veille profonde est un état de fonctionnement à faible consommation d'énergie. Lorsque l'appareil ne détecte aucun besoin de charge ou de sortie pendant une longue période, le système passe automatiquement en veille profonde afin de réduire sa propre consommation d'énergie.

En veille profonde :

- Les fonctions de protection de la batterie restent actives ;
- L'appareil continue de surveiller les entrées externes et les besoins en énergie ;
- L'appareil reprend automatiquement son fonctionnement normal lorsqu'un besoin est détecté.


### 3.2 Pourquoi l'appareil passe-t-il en veille profonde ?

Même lorsqu'un système de stockage d'énergie ne charge pas et ne fournit pas d'énergie, il consomme une petite quantité d'énergie pour maintenir le fonctionnement du système.

Exemples :

- La nuit, lorsqu'il n'y a ni production photovoltaïque ni consommation par une charge ;
- Lorsque l'appareil reste inutilisé pendant une longue période.

La veille profonde permet de réduire la consommation en veille dans ces situations de faible utilisation et ainsi de limiter la consommation d'énergie de la batterie.


### 3.3 Comment configurer la veille profonde

La fonction de veille profonde permet de configurer une période d'activation :

- L'heure de début et l'heure de fin peuvent être définies ;
- Les paramètres sur plusieurs jours (passage à minuit) sont pris en charge ;
- La configuration par défaut est une activation toute la journée (00:00 - 23:59).

Procédure de réglage :

1. Dans la page des paramètres de l'appareil, sélectionnez **Veille profonde** ;
2. Définissez la période d'activation de la veille profonde.

<img src={require("../energy-mode/img/device_setting.png").default} width="240"/>
<img src={require("./img/deep_standby.png").default} width="240"/>
<img src={require("./img/deep_standby_time.png").default} width="240"/>

Une fois la configuration terminée, l'appareil passe automatiquement en veille profonde lorsque les conditions requises sont remplies.


### 3.4 Comment quitter la veille profonde

L'appareil quitte automatiquement la veille profonde dans les situations suivantes :

- Un besoin de charge est détecté ;
- Un besoin d'alimentation est détecté ;
- Une source d'alimentation externe est détectée (par exemple une entrée photovoltaïque ou une entrée secteur AC) ;
- Une commande est effectuée via le bouton de l'appareil.

Après la sortie de veille profonde, l'appareil revient au mode de fonctionnement normal.