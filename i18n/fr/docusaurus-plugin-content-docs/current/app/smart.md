---
title: Intelligent
description: Ajuster intelligemment l’utilisation de l’énergie afin de tirer pleinement parti des différences de prix de l’électricité pour réaliser des économies et augmenter les revenus.
---

# Intelligent

La fonctionnalité intelligente ajuste automatiquement la stratégie de charge et de décharge de la batterie via le **[mode de tarification dynamique](#1-mode-de-tarification-dynamique)** ou le **[mode IA](#2-mode-ia)**, afin de tirer pleinement parti des différences de prix de l’électricité et de la production photovoltaïque, d’améliorer l’efficacité énergétique et d’augmenter les revenus.


## 1. Mode de tarification dynamique

Le mode de tarification dynamique contrôle intelligemment l’appareil grâce à des seuils de prix prédéfinis : il charge lorsque le prix est bas et décharge lorsqu’il est élevé, afin de maximiser les revenus liés aux fluctuations des prix.

- Réduire les dépenses d’électricité
- Améliorer l’utilisation du photovoltaïque et de la batterie
- Obtenir davantage de revenus grâce aux fluctuations des prix

En termes simples : prix bas → charge, prix élevé → décharge, optimisation entièrement automatique.

:::info Conditions d’application
1. Le foyer utilise un tarif d’électricité dynamique.
2. Le foyer est équipé d’un système de stockage INDEVOLT.
:::

### 1.1 Fonctionnement des appareils

#### 🔋 Charge (périodes à bas tarif)

Lorsque le prix de l'électricité est inférieur au prix cible, le système commence à charger la batterie.

| Mode de charge | Description |
|------|------|
| Recharge solaire + réseau | La batterie est chargée en priorité par l'énergie photovoltaïque, avec la possibilité d'utiliser l'électricité du réseau en complément. Ce mode est adapté aux périodes où le prix de l'électricité est bas. La puissance de charge est limitée à la valeur définie. Une fois la batterie complètement chargée, l'alimentation depuis le réseau est arrêtée et la production photovoltaïque est automatiquement réduite. |
| Recharge solaire uniquement | La batterie est chargée uniquement à partir de l'énergie photovoltaïque. Une fois la batterie complètement chargée, l'énergie produite alimente en priorité les charges du foyer. L'excédent est injecté dans le réseau dans les limites autorisées. Si la limite d'injection est atteinte, la production photovoltaïque est automatiquement réduite. |

#### ⚡ Décharge (périodes à tarif élevé)

Lorsque le prix de l'électricité est supérieur au prix cible, le système utilise en priorité l'énergie stockée dans la batterie. La puissance de décharge réelle dépend de la source de charge actuellement configurée (compteur / prise connectée / charge par défaut).

| Mode de décharge | Description |
|------|------|
| Puissance de sortie fixe | La batterie se décharge en continu à la puissance définie. En présence de micro-onduleurs photovoltaïques, l'énergie photovoltaïque est utilisée en priorité. En l'absence de charge ou en cas de dépassement de la limite d'injection réseau, la sortie est arrêtée. Le système effectue ensuite des vérifications périodiques et reprend automatiquement le fonctionnement lorsque les conditions sont remplies. |
| Autoconsommation | La batterie adapte automatiquement sa puissance de décharge en fonction de la consommation électrique instantanée du foyer, dans la limite de la puissance maximale définie. En l'absence de charge ou en cas de dépassement de la limite d'injection réseau, la sortie est automatiquement arrêtée. |

#### ⏸️ Veille (périodes à tarif intermédiaire)

Lorsque le prix de l'électricité ne remplit ni les conditions de charge ni celles de décharge, le système passe en mode veille. La batterie ne se charge ni ne se décharge activement.

| Mode de fonctionnement | Description |
|------|------|
| Solaire alimente foyer en priorité | Ce mode est utilisé par défaut pour les périodes non configurées.<br />1. L'énergie photovoltaïque alimente en priorité les charges du foyer.<br />2. L'énergie excédentaire est stockée dans la batterie.<br />3. Une fois la batterie complètement chargée, l'excédent est injecté dans le réseau dans les limites autorisées.<br />4. Si la production dépasse la limite d'injection, le système réduit automatiquement la puissance photovoltaïque. |
| Solaire charge batterie en priorité | 1. L'énergie photovoltaïque est utilisée en priorité pour charger la batterie.<br />2. Une fois la batterie complètement chargée, elle alimente les charges du foyer.<br />3. Si de l'énergie excédentaire reste disponible, elle est injectée dans le réseau dans les limites autorisées.<br />4. Si la production dépasse la limite d'injection, le système réduit automatiquement la puissance photovoltaïque. |

:::warning
- Tous les réglages de puissance sont limités par les spécifications matérielles.
- « Limite réseau » désigne la puissance maximale autorisée d’injection dans le réseau.
- Dans certains cas, la puissance PV est automatiquement réduite afin d’éviter de dépasser la limite réseau, et l’appareil conserve une consommation de veille minimale.
:::


### 1.2 Activer la stratégie

1. Cliquez sur **Mode de tarification dynamique** en haut à droite <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/>.
2. Vérifiez que les configurations suivantes sont terminées：  

   ✅ Le [**tarif dynamique**](./profile.md#31-ajouter-un-tarif) est configuré  
   ✅ Des équipements pouvant participer à la stratégie ont été ajoutés  

   Si ce n’est pas le cas, cliquez sur la zone correspondante pour configurer, puis cliquez sur **Suivant**.

3. Définissez le **[prix cible](#ajuster-le-prix-cible)** déclenchant la charge/décharge：modes manuel / automatique / intelligent pris en charge; une fois terminé, cliquez sur **Suivant**.

4. Sélectionnez les **appareils participant à la stratégie**, puis cliquez sur **Suivant**.
   > （Optionnel）Cliquez sur <img src={require("./img/edit_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> pour configurer le [mode de fonctionnement](#11-fonctionnement-des-appareils) selon les périodes de prix.  
   
5. Prévisualisez le plan de charge/décharge, puis cliquez sur **Activer**.

<img src={require("./img/smart.png").default} width="240"/>
<img src={require("./img/strategy_requirements.png").default} width="240"/>
<img src={require("./img/price_setting.png").default} width="240"/>
<img src={require("./img/select_strategy_device.png").default} width="240"/>
<img src={require("./img/device_advanced_mode.png").default} width="240"/>
<img src={require("./img/preview_strategy.png").default} width="240"/>

### 1.3 Voir la stratégie

Si une stratégie est créée, le module affiche l’état actuel（charge / décharge / veille）ainsi que le bouton de contrôle.

<img src={require("./img/dynamic_pricing_strategy.png").default} width="240"/>

Cliquez sur **Mode de tarification dynamique** pour voir le plan et les appareils appliqués.

Cliquez sur l’icône <img src={require("./img/history_icon.png").default} width="24" style={{verticalAlign: "middle"}}/> en haut à droite pour consulter les prix du marché, le SOC et les journaux de stratégie（historique des modifications）.

<img src={require("./img/view_strategy.png").default} width="240"/>
<img src={require("./img/strategy_log.png").default} width="240"/>

### 1.4 Modifier la stratégie

Dans la page de mode, vous pouvez ajuster la stratégie à tout moment, y compris les appareils et le prix cible.

#### Modifier les appareils

1. Sur la page de détails, cliquez sur <img src={require("./img/edit_icon.png").default} width="24" style={{verticalAlign: "middle"}}/> à droite d'**État de l'appareil**.
2. Sélectionnez à nouveau les appareils cibles.
3. （Optionnel）Cliquez sur <img src={require("./img/edit_icon.png").default} width="24" style={{verticalAlign: "middle"}}/> pour ajuster le mode selon les périodes de prix.
4. Cliquez sur **Suivant**, prévisualisez puis cliquez sur **Activer**.

<img src={require("./img/view_strategy.png").default} width="240"/>
<img src={require("./img/set_strategy_device.png").default} width="240"/>
<img src={require("./img/device_advanced_mode.png").default} width="240"/>
<img src={require("./img/confirm_strategy.png").default} width="240"/>


#### Ajuster le prix cible

1. Sur la page des détails de la stratégie, appuyez sur <img src={require("./img/edit_icon.png").default} width="24" style={{verticalAlign: "middle"}}/> à droite de la section **Prix du marché**.

2. Définissez le **prix cible** :

   - **Manuel** : définissez directement un prix en dessous duquel la batterie commence à se charger et un prix au-dessus duquel elle commence à se décharger. Ce mode convient si vous avez des objectifs de prix précis.
   - **Automatique** : définissez une plage de prix basse, une plage de prix élevée ainsi qu'un écart de prix. Le système calcule automatiquement les seuils de déclenchement optimaux.
   - **Intelligent** : définissez uniquement l'écart de prix. Le système optimise automatiquement les seuils de déclenchement.

   :::tip
   Plus l'écart de prix est important, plus les cycles de charge et de décharge sont déclenchés uniquement lorsque la différence de prix est significative, ce qui réduit leur fréquence. À l'inverse, un écart de prix plus faible entraîne des charges et décharges plus fréquentes.
   :::

3. Appuyez sur **Suivant**, prévisualisez la stratégie puis **Activer**.

<img src={require("./img/view_strategy.png").default} width="240"/>
<img src={require("./img/strategy_price1.png").default} width="240"/>
<img src={require("./img/strategy_price2.png").default} width="240"/>
<img src={require("./img/strategy_price3.png").default} width="240"/>
<img src={require("./img/confirm_strategy.png").default} width="240"/>

---

## 2. Mode IA

Le mode IA analyse les données historiques pour prédire intelligemment la **production photovoltaïque** et la **consommation électrique du foyer**. En combinant ces informations avec les **tarifs de l’électricité**, il génère automatiquement un plan de charge et de décharge optimisé afin d’améliorer les revenus énergétiques globaux.


### 2.1 Activer le mode IA

1. Appuyez sur l’icône <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> en haut à droite du module **Mode IA**.  
2. Suivez les instructions à l’écran et assurez-vous que les conditions suivantes sont remplies :  
   ✅ Le [tarif d’électricité](./profile.md#31-ajouter-un-tarif) est configuré  
   ✅ Des équipements pouvant participer à la stratégie ont été ajoutés  
   ✅ Les données de consommation sont disponibles : un compteur ou un dispositif de relevé a été ajouté et les données ont été collectées  
   Si ce n’est pas le cas, appuyez sur la section correspondante pour effectuer la configuration, puis cliquez sur **Suivant**.  

3. Si le système détecte des informations photovoltaïques, ajoutez l’**adresse** ainsi que les informations **photovoltaïques**. Sinon, vérifiez si certains équipements photovoltaïques ne sont pas connectés à la plateforme afin de garantir la précision des prévisions. Cliquez sur **Suivant**.  
   > (Optionnel) Appuyez sur **⚙ Paramètres avancés** pour configurer l’[écart de prix](#modifier-lécart-de-prix).  

4. Sélectionnez les **équipements participant à la stratégie**, puis cliquez sur **Suivant**.  
5. Prévisualisez les prévisions générées par le système, puis cliquez sur **Activer** pour activer le mode IA.  

<img src={require("./img/smart.png").default} width="240"/>
<img src={require("./img/ai_mode_conditions.png").default} width="240"/>
<img src={require("./img/ai_mode_address.png").default} width="240"/>
<img src={require("./img/ai_mode_device.png").default} width="240"/>
<img src={require("./img/ai_mode_preview.png").default} width="240"/>



### 2.2 Consulter le mode IA

Une fois activé, le module Mode IA affiche l’état actuel du plan (veille / charge / décharge) ainsi que le bouton de contrôle.
<img src={require("./img/ai_mode_activated.png").default} width="240"/>

Appuyez sur le module Mode IA pour accéder à la page de détails et consulter l’état de fonctionnement de la stratégie, les revenus ainsi que les équipements participants.
<img src={require("./img/ai_mode.png").default} width="240"/>

Appuyez sur le module de revenus en haut pour accéder à la page **Revenus Détails**, où vous pouvez consulter les revenus du mode IA, du mode standard ainsi que leur comparaison.
<img src={require("./img/revenue_details.png").default} width="240"/>


### 2.3 Modifier le mode IA

Dans la page Mode IA, appuyez sur l’icône **…** en haut à droite pour accéder aux paramètres supplémentaires.
<img src={require("./img/ai_mode.png").default} width="240"/>
<img src={require("./img/ai_mode_more.png").default} width="240"/>

#### Modifier les équipements

1. Dans la page Mode IA, appuyez sur l’icône <img src={require("./img/edit_icon.png").default} width="24" style={{verticalAlign: "middle"}}/> à droite du module **État de l'appareil**.  
2. Sélectionnez à nouveau les équipements participant à la stratégie.  

<img src={require("./img/ai_mode.png").default} width="240"/>
<img src={require("./img/ai_mode_select_device.png").default} width="240"/>

#### Consulter l’historique

Sélectionnez **Détails historiques** pour consulter les données de fonctionnement passées.
<img src={require("./img/ai_mode_historical.png").default} width="240"/>

#### Modifier les informations d’adresse

Sélectionnez **Informations d’adresse** pour mettre à jour la **région et l’adresse du domicile**.
<img src={require("./img/ai_mode_edit_address.png").default} width="240"/>

#### Modifier la capacité photovoltaïque installée

Sélectionnez **Puissance installée PV**, saisissez la capacité réelle installée, puis enregistrez.
<img src={require("./img/ai_mode_edit_pv.png").default} width="240"/>

#### Modifier l’écart de prix

L’IA détermine automatiquement les moments de charge et de décharge en fonction de l’**écart de prix** défini afin d’optimiser les revenus globaux. Plus l’écart est faible, plus les opportunités de gain sont nombreuses, mais les cycles de la batterie seront également plus fréquents.

1. Sélectionnez **Paramètres avancés**.  
2. Dans la section **Définir l’écart de prix**, choisissez **Manuel** ou **Automatique**. Si vous choisissez le mode manuel, vous pouvez ajuster la valeur cible à l’aide du curseur.  
3. Cliquez sur **Enregistrer**.  

<img src={require("./img/ai_mode_advanced_settings1.png").default} width="240"/>
<img src={require("./img/ai_mode_advanced_settings2.png").default} width="240"/>
