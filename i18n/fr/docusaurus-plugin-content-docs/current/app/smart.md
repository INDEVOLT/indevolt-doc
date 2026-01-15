---
title: Intelligent
description: Optimisez l'utilisation de l'énergie en fonction des variations de prix pour réduire les coûts et augmenter les gains.
---

# Intelligent

Le mode intelligent analyse les variations en temps réel des prix de l’électricité et contrôle automatiquement la charge et la décharge des systèmes de stockage d’énergie afin de :

- réduire les dépenses d’électricité ;
- améliorer l’utilisation du photovoltaïque et des batteries ;
- obtenir des gains plus élevés grâce aux fluctuations des prix de l’électricité.

En résumé : charger lorsque le prix est bas, décharger lorsque le prix est élevé — avec une optimisation entièrement automatique.


:::info Conditions
1. La famille utilise des tarifs d’électricité dynamiques ou à plages horaires (tarifs non fixes).
2. La famille est équipée d'un système de stockage d'énergie INDEVOLT.
:::

## 1. Fonctionnement de l’appareil

**Charge (lorsque le prix de l’électricité est bas)**

La puissance réelle de charge de l’appareil est déterminée par la puissance d’entrée maximale de l’onduleur.

- Le système utilise en priorité l’énergie photovoltaïque pour charger la batterie ;
- lorsque la production photovoltaïque est insuffisante, le système complète automatiquement l’énergie depuis le réseau ;
- lorsque la batterie est entièrement chargée, la charge s’arrête automatiquement.

**Décharge (lorsque le prix de l’électricité est élevé ou que la demande est forte)**

La puissance réelle de décharge dépend de la source de charge actuelle (compteur / prise / charge par défaut).

- L’appareil privilégie l’alimentation par le photovoltaïque ;
- lorsque le photovoltaïque est insuffisant, la batterie prend automatiquement le relais ;
- lorsque le niveau de batterie atteint la réserve d’urgence, la décharge s’arrête automatiquement.

**Statique (en dehors des périodes de charge/décharge de la stratégie)**

En état statique, la batterie ne charge ni ne décharge activement.

- La production photovoltaïque alimente en priorité les appareils domestiques ;
- lorsque la puissance photovoltaïque est supérieure à la charge et que le SOC de la batterie n’a pas atteint 100 %, l’excédent est automatiquement stocké dans la batterie ;
- une fois la batterie pleine, la puissance photovoltaïque est automatiquement limitée.


## 2. Activer le mode intelligent

1. Appuyez sur **Plus d'informations** pour accéder à la page de présentation de la fonctionnalité.  
2. Lisez l'accord de Service et les informations associées. Après avoir confirmé que tout est correct, cochez **J'ai lu et j'accepte l'accord de service**. Appuyez sur **Suivant** pour compléter l'activation.

   <img src={require("./img/smart.png").default} width="240"/>
   <img src={require("./img/activate_smart.png").default} width="240"/>


## 3. Piloté par les prix

La stratégie piloté sur les prix est le cœur du mode intelligent. En définissant des seuils de prix, le système charge intelligemment lorsque les prix sont bas et décharge lorsque les prix sont élevés, maximisant ainsi les bénéfices des fluctuations des tarifs électriques.

### 3.1 Créer une stratégie

Avant de créer une stratégie, assurez-vous d'avoir configuré votre [tarif d'électricité](./profile.md#3-tarif) :

1. Appuyez sur l’icône <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> dans la section Piloté par les prix pour accéder à la page des paramètres.  
2. Suivez les instructions à l’écran et assurez-vous que vous avez configuré un [tarif d’électricité](./profile.md#31-ajouter-un-tarif) et ajouté des appareils compatibles à votre foyer. Si ce n’est pas le cas, appuyez sur les zones correspondantes pour terminer la configuration, puis appuyez sur **Suivant** pour continuer.
3. Définissez le **[prix cible](#ajuster-le-prix-cible)** (manuel/automatique) qui déclenche la charge et la décharge, ainsi que **la stratégie lorsque la condition n'est pas remplie** (priorité à l'auto-consommation / veille), puis appuyez sur **Suivant**.
4. Sélectionnez les **appareils participant à la stratégie**, puis appuyez sur **Suivant**.
5. Prévisualisez le plan de charge/décharge généré par le système. Appuyez sur **Activer** pour la mettre en œuvre.

   <img src={require("./img/set_strategy.png").default} width="240"/>
   <img src={require("./img/strategy_requirements.png").default} width="240"/>
   <img src={require("./img/price_setting.png").default} width="240"/>
   <img src={require("./img/select_strategy_device.png").default} width="240"/>
   <img src={require("./img/preview_strategy.png").default} width="240"/>



### 3.2 Voir la Stratégie

Après création d'une stratégie, la section Piloté par les prix* affichera l'état actuel (Veille / Priorité à l'Auto-consommation / Charge / Décharge) et le bouton de bascule.

<img src={require("./img/price_strategy.png").default} width="240"/>

Appuyez sur la section **Piloté par les prix** pour consulter le planning et les appareils utilisant actuellement la stratégie.

<img src={require("./img/view_strategy.png").default} width="240"/>

Appuyez sur l’icône de journal en haut à droite de la page Stratégie de prix pour accéder au journal de la stratégie et retracer toutes les modifications historiques ainsi que les changements d’état (activé/désactivé).

<img src={require("./img/strategy_log.png").default} width="240"/>


### 3.3 Modifier la Stratégie

Sur la page Stratégie de prix, vous pouvez à tout moment ajuster les stratégies créées, y compris modifier les appareils associés ou ajuster le prix cible de déclenchement.

#### Modifier les appareils de la stratégie

1. Dans la page de détails de la stratégie, appuyez sur le **bouton modifier** à côté du module **État de l’appareil**.
2. Sélectionnez à nouveau l’appareil cible parmi la liste de tous les appareils.
3. Appuyez sur **Suivant** pour prévisualiser le nouveau plan de charge/décharge, confirmez et appuyez sur **Activer**.

<img src={require("./img/view_strategy.png").default} width="240"/>
<img src={require("./img/set_strategy_device.png").default} width="240"/>
<img src={require("./img/confirm_strategy.png").default} width="240"/>

#### Ajuster le prix cible

1. Dans la page de détails de la stratégie, appuyez sur le bouton Modifier à côté du module **Prix du marché de l’électricité**.
2. Le système propose deux méthodes :
   - Manuel: saisissez directement le prix de déclenchement souhaité pour charge (prix bas) et décharge (prix élevé).
   - Automatique: définissez le prix cible et sélectionnez les plages horaires hautes/basses. Le système calculera automatiquement les prix.
3. Définissez la **stratégie lorsque la condition n'est pas remplie** (lorsque le prix actuel ne correspond pas aux conditions de charge/décharge, l’appareil basculera automatiquement vers) :
   - **Priorité à l’auto-consommation** : privilégier l’utilisation du photovoltaïque et de la batterie pour l’alimentation domestique.
   - **Veille** : suspendre la charge et la décharge, le photovoltaïque alimentant en priorité la maison.
4. Appuyez sur **Suivant**, prévisualisez le plan mis à jour, puis appuyez sur **Activer** pour confirmer.

<img src={require("./img/view_strategy.png").default} width="240"/>
<img src={require("./img/strategy_price1.png").default} width="240"/>
<img src={require("./img/strategy_price2.png").default} width="240"/>
<img src={require("./img/confirm_strategy.png").default} width="240"/>
