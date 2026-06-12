---
title: Autoconsommation
description: Priorisation de l’utilisation de l’énergie photovoltaïque pour maximiser l’autoconsommation
---

# Autoconsommation

En mode **autoconsommation**, le système de stockage d’énergie INDEVOLT ajuste en temps réel les puissances de charge et de décharge en fonction de la consommation du foyer. Il privilégie l’utilisation de l’énergie photovoltaïque afin de réduire l’achat d’électricité sur le réseau et d’éviter l’injection vers le réseau public.

L’ensemble du processus est entièrement automatique et ne nécessite aucune intervention manuelle. Le système gère la répartition de l’énergie selon la configuration définie.


## Utilisateurs concernés

Ce mode est recommandé si vous :

- disposez d’une installation photovoltaïque et souhaitez maximiser l’autoconsommation  
- souhaitez réduire votre consommation d’électricité réseau et vos coûts énergétiques  
- avez une consommation électrique relativement stable au quotidien  
- préférez un fonctionnement entièrement automatisé du système  


## Fonctionnement du système

En mode autoconsommation, la répartition de l’énergie est automatiquement gérée selon la production et la consommation.

**Priorité de production**

- L’énergie photovoltaïque alimente en priorité les charges domestiques  
- L’excédent d’énergie photovoltaïque est utilisé pour charger la batterie  
- Une fois la batterie pleine, le surplus peut être injecté dans le réseau (selon la configuration d’injection)  

**Priorité de consommation**

- Les charges domestiques sont alimentées en priorité par l’énergie photovoltaïque  
- En cas d’insuffisance solaire, la batterie assure le complément  
- Si l’énergie solaire et la batterie sont insuffisantes, le réseau électrique fournit le reste  


## Sélection des charges

Pour permettre au système de déterminer correctement la puissance de décharge, il est nécessaire de choisir le type de charge approprié.

**Prise intelligente**

- Le système ajuste la décharge en fonction de la puissance réelle des appareils connectés  
- Une puissance de compensation peut être définie pour affiner la sortie  
- Puissance réelle = charge mesurée + compensation  
- Adapté aux utilisateurs souhaitant alimenter des appareils spécifiques ou contrôler précisément la puissance  

**Compteur**

- Le compteur doit être installé côté entrée réseau  
- Le système vise à maintenir la puissance du compteur à zéro :
  - Puissance positive → décharge pour compenser la consommation  
  - Puissance négative → charge pour absorber l’excédent  
- Adapté aux utilisateurs souhaitant zéro injection et une autoconsommation maximale  

**Charge clé**

- Le système alimente uniquement les charges connectées à la sortie secours (bypass), sans injection réseau  
- Adapté aux équipements essentiels uniquement  

**Personnalisé (courbe de charge)**

- La journée peut être divisée en jusqu’à 48 plages horaires avec une puissance définie pour chaque période  

:::info
Lorsque le type de charge est défini sur prise intelligente ou compteur intelligent, et que celui-ci est hors ligne, le système bascule automatiquement sur la courbe de charge.
:::

:::warning
Une configuration de courbe de charge trop élevée ou incorrecte peut entraîner une injection vers le réseau.
:::


## Configuration du mode autoconsommation

**Étapes de configuration :**

1. Vérifiez que votre appareil est ajouté à votre foyer dans l’application INDEVOLT  
2. Accédez à l’onglet **Appareils**, puis sélectionnez l’équipement concerné  
3. Cliquez sur la section du mode énergétique pour accéder à la sélection du mode  
4. Choisissez **Autoconsommation**, puis cliquez sur **Paramètres**  
5. Sélectionnez le [type de charge](#sélection-des-charges) selon votre installation (prise intelligente / compteur / charge clé / personnalisé)  
6. Cliquez sur **Enregistrer** pour appliquer immédiatement les paramètres  

<img src={require("./img/select_device.png").default} width="240"/>
<img src={require("./img/select_energy_mode.png").default} width="240"/>
<img src={require("./img/self_consume_prioritized.png").default} width="240"/>
<img src={require("./img/load_settings.png").default} width="240"/>


## Paramètres recommandés de l’appareil

Dans la page de l’appareil, cliquez sur l’icône **⚙** en haut à droite.

<img src={require("./img/device_info.png").default} width="240"/>
<img src={require("./img/device_setting.png").default} width="240"/>

Pour un fonctionnement optimal, il est recommandé de configurer les paramètres suivants :

| Paramètre | Configuration recommandée |
| ---------- | -------------------------- |
| Puissance de sortie AC Max (décharge) | Supérieure à la consommation réelle du foyer et conforme à la réglementation locale |
| Puissance d’entrée AC Max (charge) | Supérieure à la puissance de charge souhaitée |
| Limite d’injection | Recommandée à `0` (anti-injection activé) |
| Bypass Socket | Désactivé en l’absence de besoin spécifique |
| Réserve de secours | Recommandée à 20 % |