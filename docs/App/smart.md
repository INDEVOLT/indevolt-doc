---
title: Smart
description: Optimize energy use based on price changes to cut costs and boost earnings.
---

# Smart

Smart Mode analyzes dynamic electricity prices and automatically optimizes your device’s charging and discharging strategy. Its goal is to reduce overall electricity costs, improve energy efficiency, and maximize your economic benefits.

:::info Requirements
1. The home uses a non-fixed electricity tariff.
2. The home is equipped with an INDEVOLT energy storage system.
:::

## 1. Activate Smart Mode

1. Tap **More** to enter the feature introduction page.
2. Read the Service Agreement and related information. After confirming everything is correct, check **I have read and agree to the Service Agreement**. Tap **Next** to complete activation.

   <img src={require("./img/smart.png").default} width="240"/>
   <img src={require("./img/activate_smart.png").default} width="240"/>


## 2. Pricing Strategy

Pricing Strategy is the core of Smart Mode. By setting price thresholds, the system intelligently charges when prices are low and discharges when prices are high - maximizing the benefits from electricity price fluctuations.

### 2.1 Create a New Strategy

Before creating a strategy, make sure you have set up your [electricity tariff](./profile.md#3-tariff):

1. Tap the <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> icon in the Price-based Strategy section to enter the settings page.
2. Follow the prompts to ensure you have configured the [electricity tariff](./profile.md#31-add-tariff) and added eligible strategy devices to your home. If not, tap the corresponding sections to complete setup, then tap **Next** to proceed.
3. The page will display all compatible devices in your home. **Select the device** to apply the strategy to, then tap **Next**.
4. Set the **target price** for charging/discharging, then tap **Next**.
5. Preview the automatically generated Today's Charge and Discharging Plan. Confirm and tap **Save**.
6. Newly created strategies are disabled by default. Tap **Enable** to activate the strategy.

   <img src={require("./img/set_strategy.png").default} width="240"/>
   <img src={require("./img/strategy_requirements.png").default} width="240"/>
   <img src={require("./img/set_strategy_device.png").default} width="240"/>
   <img src={require("./img/strategy_price1.png").default} width="240"/>

### 2.2 View Strategy

After a strategy is created, the Price-based Strategy section will show the current status (Idle / Charge / Discharge) and the toggle switch.

<img src={require("./img/price_strategy.png").default} width="240"/>

Tap the **Pricing Strategy** section to view the schedule and the devices currently using the strategy.

<img src={require("./img/view_strategy.png").default} width="240"/>

Tap the log icon at the top-right of the price strategy page to open the strategy log and review all historical modifications and status changes.

<img src={require("./img/strategy_log.png").default} width="240"/>


### 2.3 Edit Strategy

On the price strategy page, you can update existing strategies at any time, including modifying applied devices or adjusting the target trigger price.

**Edit Applied Devices**

1. In the strategy details page, tap the **edit button** next to the **Device Status** module.
2. Re-select the target device from the list of all Smart-compatible home devices.
3. Tap **Next** to preview the updated charge/discharge plan. Confirm and tap **Enable**.

<img src={require("./img/view_strategy.png").default} width="240"/>
<img src={require("./img/set_strategy_device.png").default} width="240"/>

**Adjust Target Price**

1. In the strategy details page, tap the **edit button** next to the **Electricity Market Prices** module to reset the target price.
2. Set the price using one of the following options:
   - **Manual**: directly enter the trigger price for charging (low price) and discharging (high price).
   - **Auto**: define the target price difference and select the high/low price time windows. The system calculates prices automatically.
3. Tap **Next**, preview the updated plan, then confirm and tap **Enable**.

<img src={require("./img/view_strategy.png").default} width="240"/>
<img src={require("./img/strategy_price1.png").default} width="240"/>
<img src={require("./img/strategy_price2.png").default} width="240"/>
