---
title: Équilibrage du SOC des batteries
description: Comprendre comment le système ajuste et protège automatiquement les batteries lorsque leur niveau de charge est déséquilibré
---

# Équilibrage du SOC des batteries

## 1. Qu’est-ce que l’équilibrage du SOC

Le SOC (State of Charge) représente le pourcentage de charge d’une batterie.

Lorsque le dispositif de micro-stockage énergétique est connecté à plusieurs batteries, même des batteries du même modèle peuvent présenter des différences de niveau de charge en raison du temps d’utilisation, de la température ou des conditions de charge.

Dans ce cas, le système effectue automatiquement un **équilibrage du SOC** afin de maintenir les niveaux de charge des batteries aussi proches que possible.

En termes simples :

> Les batteries ayant un SOC plus élevé fournissent davantage d’énergie, tandis que celles ayant un SOC plus faible en fournissent moins, ce qui permet de réduire progressivement l’écart.

---

## 2. Pourquoi l’équilibrage du SOC est nécessaire

- Prolonger la durée de vie des batteries : éviter une usure inégale
- Améliorer l’efficacité du système : fonctionnement plus stable lorsque les niveaux sont proches
- Garantir la sécurité : réduire les risques de surchauffe ou de dommages

---

## 3. Pourquoi un déséquilibre apparaît

Même des batteries du même modèle ne sont jamais parfaitement identiques.

Causes courantes :

- Légères différences de capacité ou de résistance interne dès la fabrication
- Différences de charge et de décharge selon les batteries pendant l’utilisation
- Mélange de batteries neuves et anciennes avec des niveaux de vieillissement différents
- [Consommation en veille](./standby-power.md) du système pouvant être répartie différemment entre les batteries
- Baisse de précision du calcul du SOC à faible courant, entraînant des écarts cumulés
- Stratégies du système, par exemple certaines batteries prioritaires pour la décharge ou la recharge

Avec le temps, ces différences s’accumulent et entraînent un déséquilibre du SOC.

---

## 4. Limites des systèmes de connexion traditionnels

Dans les systèmes de stockage d’énergie traditionnels, plusieurs batteries sont généralement connectées en série, en parallèle ou en combinaison.

Dans ces architectures, les batteries sont directement liées entre elles, ce qui nécessite une forte homogénéité.

**Connexion en série**

Le système est limité par la batterie la plus faible.

Par exemple, si une batterie a une capacité plus faible ou est plus vieillissante, elle se charge ou se décharge plus rapidement.

Dans ce cas, l’ensemble du système doit s’arrêter plus tôt pour protéger les batteries.

**Connexion en parallèle**

Lorsqu’il existe une différence de tension entre deux batteries :

- La batterie avec un SOC plus élevé se décharge vers celle avec un SOC plus faible
- Un courant de circulation interne apparaît entre les batteries

Cela entraîne :

- Une génération de chaleur supplémentaire
- Des pertes d’énergie
- Un vieillissement accéléré des batteries

---

## 5. Comment le DCDC résout ces problèmes

Le système de micro-stockage utilise une architecture DCDC. Chaque batterie est connectée via un module DCDC indépendant.

On peut le considérer comme un « régulateur intelligent » dédié à chaque batterie, ce qui évite les interactions directes entre elles.

Comparé aux systèmes traditionnels :

| Connexion traditionnelle | Architecture DCDC |
| --- | --- |
| Batteries directement connectées | Batteries connectées indépendamment |
| Forte exigence d’homogénéité | Moins dépendant de l’homogénéité |
| Interactions entre batteries | Isolation entre batteries |
| Répartition de puissance difficile | Gestion indépendante de la puissance |
| Mélange de batteries difficile | Meilleure compatibilité avec différents états de batteries |

Ainsi, dans une architecture DCDC :

- Un certain écart de SOC entre les batteries est toléré
- Le système ajuste automatiquement la répartition de puissance
- Le SOC tend progressivement vers l’équilibre pendant le fonctionnement

---

## 6. Comment fonctionne l’équilibrage du SOC

Le système ajuste automatiquement l’équilibrage grâce aux modules DCDC intégrés et à l’EMS (système de gestion de l’énergie) :

- Répartition proportionnelle de la puissance de charge et de décharge selon les écarts de SOC entre les batteries  
- Les batteries avec un SOC élevé fournissent plus d’énergie ou se rechargent moins
- Les batteries avec un SOC faible fournissent moins d’énergie ou sont prioritairement rechargées

Pendant le fonctionnement dynamique, le système autorise un certain écart de SOC entre les batteries. Cet écart est généralement compris entre **3 % et 15 %**.

> *Exemple :*
> - *Batterie 1 : SOC 80 %*
> - *Batterie 2 : SOC 40 %*
> - *Charge : 900 W*
>
> *L’EMS peut répartir la puissance comme suit :*
> - *Batterie 1 (SOC élevé) : environ 600 W de décharge*
> - *Batterie 2 (SOC faible) : environ 300 W de décharge*
>
> *Avec le temps, l’écart diminue progressivement jusqu’à l’équilibre.*

---

## 7. Équilibrage à faible niveau de charge

Lorsque le niveau global des batteries est faible, le système privilégie la sécurité et l’alimentation de base.

<details className="custom-details">
  <summary className="custom-details__summary">Comment consulter / configurer la réserve de secours</summary>

  Étapes dans l’application :

  Page appareil → Sélectionner le micro-stockage → Cliquer sur l’icône <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> → Paramètres SoC → Réserve de Secours (5 % ~ 100 %)

  <img src={require("../energy-mode/img/select_device.png").default} width="240"/>
  <img src={require("../energy-mode/img/device_info.png").default} width="240"/>
  <img src={require("../energy-mode/img/device_setting.png").default} width="240"/>
  <img src={require("./img/soc_settings.png").default} width="240"/>
  <img src={require("./img/backup_reserve.png").default} width="240"/>
</details>

### 7.1 Décharge

- Lorsqu’une batterie atteint le niveau de réserve de secours, elle arrête de se décharger et passe en veille.
- Les autres batteries au-dessus de ce seuil continuent à alimenter la charge.

### 7.2 Charge

**◽ Avec photovoltaïque (PV / PV+AC)**

Toutes les batteries se chargent simultanément.

**◽ Charge uniquement sur réseau (AC)**

| Version EMS | Comportement |
| --- | --- |
| Inférieure à 1.01.05 | Lorsque le SOC total est inférieur à la réserve de secours, toutes les batteries se chargent ensemble ; la charge s’arrête lorsque le SOC atteint le seuil |
| 1.01.05 ou supérieur | Lorsque le SOC total est inférieur au seuil, priorité aux batteries sous le seuil ; arrêt lorsque le SOC atteint le seuil |

📌 Voir les détails : [Logique de recharge](./recharge.md)

### 7.3 Veille

**◽ Consommation de l’unité principale**

La présence d’un module d’alimentation auxiliaire AC influence la source d’alimentation en veille. Cette information sera affichée dans l’application ultérieurement.

Consommation en veille profonde de l’unité principale : environ 6 W

- Sans module auxiliaire : alimenté par la **batterie interne**, ce qui entraîne une baisse plus rapide du SOC de l’unité principale  
- Avec module auxiliaire : alimenté par le **module auxiliaire**, lequel utilise le réseau électrique lorsqu’il est connecté, réduisant ainsi la consommation de la batterie  


**◽ Consommation des batteries**

Environ 2 W, toujours alimentée par la batterie elle-même.

📌 Voir : [Consommation en veille](./standby-power.md)