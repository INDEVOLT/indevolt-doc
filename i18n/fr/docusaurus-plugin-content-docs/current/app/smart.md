---
title: Intelligent
description: Ajuster intelligemment l’utilisation de l’énergie afin de tirer pleinement parti des différences de prix de l’électricité pour réaliser des économies et augmenter les revenus.
---

# Intelligent

La fonctionnalité intelligente ajuste automatiquement la stratégie de charge et de décharge de la batterie via **le mode de tarification dynamique** ou le **mode IA**, afin de tirer pleinement parti des différences de prix de l’électricité et de la production photovoltaïque, d’améliorer l’efficacité énergétique et d’augmenter les revenus。


## 1. Mode de tarification dynamique

Le mode de tarification dynamique contrôle intelligemment l’appareil grâce à des seuils de prix prédéfinis : il charge lorsque le prix est bas et décharge lorsqu’il est élevé, afin de maximiser les revenus liés aux fluctuations des prix。

- Réduire les dépenses d’électricité
- Améliorer l’utilisation du photovoltaïque et de la batterie
- Obtenir davantage de revenus grâce aux fluctuations des prix

En termes simples : prix bas → charge, prix élevé → décharge, optimisation entièrement automatique。

:::info Conditions d’application
1. Le foyer utilise un tarif d’électricité dynamique。
2. Le foyer est équipé d’un système de stockage INDEVOLT。
:::

### 1.1 Fonctionnement de l’appareil

#### 🔋 Charge (lorsque le prix est bas)

La puissance de charge réelle de l’appareil est déterminée par la puissance d’entrée maximale de l’onduleur。

- Le système utilise en priorité l’énergie photovoltaïque pour charger la batterie；
- Lorsque l’énergie photovoltaïque est insuffisante, le système prélève automatiquement de l’électricité sur le réseau；
- Lorsque la batterie est pleine, la charge s’arrête automatiquement。


| Mode | Description |
|------|------|
| PV + AC | Le photovoltaïque est prioritaire pour charger la batterie, tout en autorisant un apport du réseau pour assister la charge. Convient pour le stockage d’énergie pendant les périodes de prix bas. La puissance de charge est limitée par la valeur définie. Une fois la batterie pleine, l’alimentation depuis le réseau s’arrête et la puissance PV est automatiquement réduite. |
| PV Uniquement | Utilise uniquement le photovoltaïque pour charger la batterie. Une fois la batterie pleine, l’énergie alimente en priorité les charges, et l’excédent est injecté dans le réseau dans les limites autorisées ; en cas de dépassement, la production PV est automatiquement réduite. |


#### ⚡ Décharge (lorsque le prix est élevé ou la demande importante)

La puissance de décharge réelle dépend de la source de charge actuelle (compteur / prise / charge par défaut)。

- L’appareil utilise en priorité l’énergie photovoltaïque；
- Lorsque le photovoltaïque est insuffisant, la batterie fournit automatiquement un complément；
- Lorsque le niveau de batterie atteint la réserve d’urgence, la décharge s’arrête automatiquement。

| Mode | Description |
|------|------|
| Puissance AC fixe | La batterie décharge en continu à la puissance définie. En présence de micro-onduleurs photovoltaïques, le photovoltaïque est prioritaire. En l’absence de charge ou en cas de dépassement des limites réseau, la sortie s’arrête et le système effectue des vérifications périodiques pour reprendre automatiquement.|
| Décharge à la demande | La batterie décharge automatiquement en fonction de la consommation réelle du foyer, avec une puissance limitée par la valeur définie. En l’absence de charge ou en cas de dépassement des limites réseau, la sortie s’arrête automatiquement。|


#### ⏸️ Inactif (hors période de charge/décharge définie)

En état inactif, la batterie ne décharge pas activement et l’excédent photovoltaïque est utilisé pour la charge。
- La production photovoltaïque alimente en priorité les appareils du foyer；
- Lorsque la puissance PV est supérieure à la charge et que le SOC de la batterie n’a pas atteint 100 %, l’énergie excédentaire recharge automatiquement la batterie；
- Une fois la batterie pleine, la puissance PV est automatiquement limitée。

| Mode | Description |
|------|------|
| Autoconsommation | Le photovoltaïque alimente en priorité les charges du foyer, l’excédent étant stocké dans la batterie. Une fois la batterie pleine, l’énergie restante est injectée dans le réseau dans les limites autorisées. En cas de dépassement, le système réduit automatiquement la production PV. Les périodes non définies utilisent ce mode par défaut。|
| Priorité de charge PV | Le photovoltaïque charge en priorité la batterie, puis alimente les charges du foyer une fois la batterie pleine. En cas d’excédent, celui-ci est géré dans les limites autorisées avec réduction automatique de la production PV。|


:::info
- Tous les réglages de puissance sont limités par les spécifications matérielles。
- « Limite réseau » désigne la puissance maximale autorisée d’injection dans le réseau。
- Dans certains cas, la puissance PV est automatiquement réduite afin d’éviter de dépasser la limite réseau, et l’appareil conserve une consommation de veille minimale。
:::


### 1.2 Activer la stratégie

1. Cliquez sur **Mode de tarification dynamique** en haut à droite <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/>。
2. Vérifiez que les configurations suivantes sont terminées：  

   ✅ Le [**tarif dynamique**](./profile.md#31-ajouter-un-tarif) est configuré  
   ✅ Des équipements pouvant participer à la stratégie ont été ajoutés  

   Si ce n’est pas le cas, cliquez sur la zone correspondante pour configurer, puis cliquez sur **Suivant**。

3. Définissez le **[prix cible](#ajuster-le-prix-cible)** déclenchant la charge/décharge：
   - Modes manuel / automatique / intelligent pris en charge  
   - Choisissez la **stratégie de secours** (autoconsommation / verille) 
 
   Une fois terminé, cliquez sur **Suivant**。

4. Sélectionnez les **appareils participant à la stratégie**, puis cliquez sur **Suivant**。
   > （Optionnel）Cliquez sur **⚙ Paramètres avancés** pour configurer le [mode de fonctionnement](#11-fonctionnement-de-lappareil) selon les périodes de prix  
   
5. Prévisualisez le plan de charge/décharge, puis cliquez sur **Activer**。

<img src={require("./img/smart.png").default} width="240"/>
<img src={require("./img/strategy_requirements.png").default} width="240"/>
<img src={require("./img/price_setting.png").default} width="240"/>
<img src={require("./img/select_strategy_device.png").default} width="240"/>
<img src={require("./img/preview_strategy.png").default} width="240"/>

### 1.3 Voir la stratégie

Si une stratégie est créée, le module affiche l’état actuel（inactif / charge / décharge）ainsi que le bouton de contrôle。

<img src={require("./img/dynamic_pricing_strategy.png").default} width="240"/>

Cliquez sur **Mode de tarification dynamique** pour voir le plan et les appareils appliqués。

<img src={require("./img/view_strategy.png").default} width="240"/>

Cliquez sur l’icône <img src={require("./img/history_icon.png").default} width="24" style={{verticalAlign: "middle"}}/> en haut à droite pour consulter les prix du marché, le SOC et les journaux de stratégie（historique des modifications）。

<img src={require("./img/strategy_log.png").default} width="240"/>

### 1.4 Modifier la stratégie

Dans la page de mode, vous pouvez ajuster la stratégie à tout moment, y compris les appareils et le prix cible。

#### Modifier les appareils

1. Sur la page de détails, cliquez sur <img src={require("./img/edit_icon.png").default} width="24" style={{verticalAlign: "middle"}}/> à droite d'**État de l'appareil**。
2. Sélectionnez à nouveau les appareils cibles。
3. （Optionnel）Cliquez sur **Paramètres avancés** pour ajuster le mode selon les périodes de prix。
4. Cliquez sur **Suivant**, prévisualisez puis cliquez sur **Activer**。

<img src={require("./img/view_strategy.png").default} width="240"/>
<img src={require("./img/set_strategy_device.png").default} width="240"/>
<img src={require("./img/device_advanced_mode.png").default} width="240"/>
<img src={require("./img/confirm_strategy.png").default} width="240"/>


#### Ajuster le prix cible

1. Sur la page de détails, cliquez sur <img src={require("./img/edit_icon.png").default} width="24" style={{verticalAlign: "middle"}}/> à droite de **Prix du marché**。
2. Définissez le **prix cible**：
   - Manuel：définir directement les seuils  
   - Automatique：définir plage et écart, calcul automatique  
   - Intelligent：définir uniquement l’écart  

   > 💡 Plus l’écart est grand, moins les déclenchements sont fréquents；plus il est petit, plus ils sont fréquents。  

3. Définissez la stratégie de secours：
   - Autoconsommation: privilégier l’utilisation du photovoltaïque et de la batterie pour alimenter le foyer.  
   - Veille: suspendre la charge et la décharge, le photovoltaïque alimente en priorité le foyer.  

4. Cliquez sur **Suivant**, prévisualisez puis cliquez sur **Activer**。

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
