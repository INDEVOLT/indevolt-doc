---
title: Smart
description: Intelligently optimize energy usage to maximize savings and earnings through electricity price differences.
---

# Smart

The Smart feature automatically adjusts battery charging and discharging strategies through **Dynamic Pricing Mode** or **AI Mode**, making full use of electricity price differences and photovoltaic (PV) generation to improve energy efficiency and increase savings.


## 1. Dynamic Pricing Mode

Dynamic Pricing Mode uses preset price thresholds to intelligently control when the system charges (at low prices) and discharges (at high prices), helping you maximize returns from price fluctuations.

- Reduce electricity costs  
- Improve PV and battery utilization  
- Capture more value from price fluctuations  

In short: charge when prices are low, discharge when prices are high — fully automated.

:::info Requirements
1. Your home uses dynamic electricity pricing.  
2. Your home has an INDEVOLT micro energy storage added in the App.  
:::

### 1.1 How the Device Operates

#### 🔋 Charging (during low-price periods)

Actual charging power is limited by the inverter’s maximum input capacity.

- PV power is used first to charge the battery;  
- If PV is insufficient, the system automatically draws power from the grid;  
- Charging stops automatically once the battery is full.  


| Mode | Description |
|------|------|
| PV + AC | Prioritizes PV charging while allowing grid power to assist. Ideal for storing energy during low-price periods. Charging power is capped at the configured limit. Once the battery is full, grid charging stops and PV output is automatically reduced. |
| PV Only | Uses only PV to charge the battery. Once fully charged, PV power supplies household loads first, with excess energy fed into the grid within allowed limits. If limits are exceeded, PV output is automatically reduced. |


#### ⚡ Discharging (during high-price periods or high demand)

Actual discharging power depends on the current load source (meter / smart plug / default load).

- PV power is prioritized for supplying loads;  
- If PV is insufficient, the battery automatically supplements power;  
- Discharging stops automatically when the battery reaches the reserve SOC level.  

| Mode | Description |
|------|------|
| Fixed AC Power | The battery discharges at a constant configured power. If PV microinverters are present, PV supply is prioritized. Output stops when there is no load or when grid limits are exceeded, and the system periodically checks and resumes automatically. |
| On-Demand | The battery dynamically adjusts output based on real-time household demand, capped at the configured power. Output stops automatically when there is no load or grid limits are exceeded. |


#### ⏸️ Idle (outside scheduled charging/discharging periods)

In idle state, the battery does not actively discharge, and surplus PV energy is used to charge the battery.

- PV generation is prioritized for household consumption;  
- If PV exceeds load demand and the battery SOC is below 100%, excess energy charges the battery;  
- Once the battery is full, PV output is automatically limited.  

| Mode | Description |
|------|------|
| Self-Consumption | PV power is used for household loads first, with excess stored in the battery. Once the battery is full, remaining energy is fed into the grid within allowed limits. If generation exceeds grid limits, PV output is reduced automatically. This is the default mode for unspecified time periods. |
| PV Priority Charging | PV prioritizes charging the battery first, then supplies household loads after the battery is full. Any remaining surplus is handled within allowed limits, with PV output reduced if necessary. |


:::info
- All power settings are subject to hardware limitations.  
- "Grid limit" refers to the maximum allowed export power to the grid.  
- In some cases, PV output is automatically reduced to avoid exceeding grid limits. The system will still maintain basic standby consumption.  
:::


### 1.2 Enable Strategy

1. Tap the <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> icon in the top-right corner of the **Dynamic Pricing Mode** module.  
2. Make sure the following are set up:  

   ✅ **[Dynamic tariff](./profile.md#31-add-electricity-price)** has been configured  
   ✅ Devices participating in the strategy have been added  

   If not, complete the setup and tap **Next**.  

3. Set the **[target price](#adjust-target-price)** to trigger charging/discharging:  
   - Manual / Auto / Smart modes are supported  
   - Choose the **fallback strategy** (Self-consumption / Idle) when conditions are not met  

   Then tap **Next**.  

4. Select the **device for the strategy**, then tap **Next**.  
   > (Optional) Tap **⚙ Advanced Settings** to configure [operating modes](#11-how-the-device-operates) for different price periods  

5. Preview the plan and tap **Enable** to activate it.  

<img src={require("./img/smart.png").default} width="240"/>
<img src={require("./img/strategy_requirements.png").default} width="240"/>
<img src={require("./img/price_setting.png").default} width="240"/>
<img src={require("./img/select_strategy_device.png").default} width="240"/>
<img src={require("./img/preview_strategy.png").default} width="240"/>


### 1.3 View Strategy

Once a strategy is created, the Dynamic Pricing Mode module displays the current status (Idle / Charging / Discharging) along with a toggle switch.

<img src={require("./img/dynamic_pricing_strategy.png").default} width="240"/>

Tap the module to view the detailed schedule and participating devices.

<img src={require("./img/view_strategy.png").default} width="240"/>


Tap the <img src={require("./img/history_icon.png").default} width="24" style={{verticalAlign: "middle"}}/> icon in the top-right corner to view electricity market prices, SOC, and strategy logs (history of changes).

<img src={require("./img/strategy_log.png").default} width="240"/>


### 1.4 Modify Strategy

You can update the strategy at any time, including changing devices or adjusting the target price.

#### Modify Devices

1. On the strategy details page, tap the <img src={require("./img/edit_icon.png").default} width="24" style={{verticalAlign: "middle"}}/> next to **Device Status**.  
2. Select the desired devices from all available devices.  
3. (Optional) Tap **Advanced Settings** to adjust operation modes for different price periods.  
4. Tap **Next**, review the changes, and tap **Enable**.  

<img src={require("./img/view_strategy.png").default} width="240"/>
<img src={require("./img/set_strategy_device.png").default} width="240"/>
<img src={require("./img/device_advanced_mode.png").default} width="240"/>
<img src={require("./img/confirm_strategy.png").default} width="240"/>

#### Adjust Target Price

1. On the strategy details page, tap the <img src={require("./img/edit_icon.png").default} width="24" style={{verticalAlign: "middle"}}/> next to **Market Prices**.  
2. Configure the **target price**:  
   - Manual: directly set charge/discharge trigger prices  
   - Auto: define high/low price ranges and price difference; the system calculates optimal trigger points  
   - Smart: only set the price difference; the system optimizes automatically  

   > 💡 A larger price difference results in fewer activations; a smaller difference leads to more frequent charging and discharging.  

3. Set the **fallback strategy**:  
   - Self-consumption: prioritize PV and battery for household usage  
   - Idle: pause charging/discharging, PV supplies loads first  

4. Tap **Next**, review, and tap **Enable**.  

<img src={require("./img/view_strategy.png").default} width="240"/>
<img src={require("./img/strategy_price1.png").default} width="240"/>
<img src={require("./img/strategy_price2.png").default} width="240"/>
<img src={require("./img/strategy_price3.png").default} width="240"/>
<img src={require("./img/confirm_strategy.png").default} width="240"/>

---

## 2. AI Mode

AI Mode uses historical data to intelligently predict **PV generation** and **household electricity consumption**. By combining this with **electricity pricing information**, it automatically generates an optimized charge and discharge plan to maximize overall energy revenue.


### 2.1 Enable AI Mode

1. Tap the <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> icon in the top right corner of the **AI Mode** module.  
2. Follow the on-screen instructions to ensure the following conditions are met:  
   ✅ [Electricity pricing](./profile.md#31-add-electricity-price) has been configured  
   ✅ Devices that can participate in the strategy have been added  
   ✅ Electricity consumption data is available: a meter or meter reader has been added and consumption data has been obtained  
   If not completed, tap the corresponding section to configure it, then tap **Next**.  

3. If the system detects PV information, add the **address** and **PV details**. If not, check whether there are PV devices not connected to the platform to ensure prediction accuracy. Tap **Next**.  
   > (Optional) Tap **⚙ Advanced Settings** to configure the [price spread](#modify-price-difference).  

4. Select the **devices participating in the strategy**, then tap **Next**.  
5. Preview the system-generated forecast, then tap **Enable** to activate AI Mode.  

<img src={require("./img/smart.png").default} width="240"/>
<img src={require("./img/ai_mode_conditions.png").default} width="240"/>
<img src={require("./img/ai_mode_address.png").default} width="240"/>
<img src={require("./img/ai_mode_device.png").default} width="240"/>
<img src={require("./img/ai_mode_preview.png").default} width="240"/>


### 2.2 View AI Mode

After enabling, the AI Mode module displays the current plan status (Idle / Charging / Discharging) and a toggle control.
<img src={require("./img/ai_mode_activated.png").default} width="240"/>


Tap the AI Mode module to enter the details page and view the current strategy status, revenue, and participating devices.
<img src={require("./img/ai_mode.png").default} width="240"/>


Tap the revenue section at the top to open the **Revenue Details** page, where you can view AI Mode revenue, Basic Mode revenue, and a comparison between the two.
<img src={require("./img/revenue_details.png").default} width="240"/>


### 2.3 Modify AI Mode

On the AI Mode page, tap the **…** icon in the top right corner to access more settings.
<img src={require("./img/ai_mode.png").default} width="240"/>
<img src={require("./img/ai_mode_more.png").default} width="240"/>


#### Modify Devices

1. On the AI Mode page, tap the <img src={require("./img/edit_icon.png").default} width="24" style={{verticalAlign: "middle"}}/> icon on the right side of the **Device Status** module.  
2. Re-select the devices participating in the strategy.  

<img src={require("./img/ai_mode.png").default} width="240"/>
<img src={require("./img/ai_mode_select_device.png").default} width="240"/>



#### View Historical Details

Select **History Details** to view past operation data.
<img src={require("./img/ai_mode_historical.png").default} width="240"/>


#### Modify Address Information

Select **Address Information** to update the **location and home address**.
<img src={require("./img/ai_mode_edit_address.png").default} width="240"/>


#### Modify Installed PV Capacity

Select **PV Installed Capacity**, enter the actual installed capacity, and save.
<img src={require("./img/ai_mode_edit_pv.png").default} width="240"/>


#### Modify Price Difference

AI automatically determines charge and discharge timing based on the configured **price difference** to optimize overall revenue. A smaller spread creates more opportunities for profit but results in more frequent battery cycling.

1. Select **Advanced Settings**.  
2. In the **Set Price Difference** section, choose **Manual** or **Auto**. If Manual is selected, drag the slider to set the target spread.  
3. Tap **Save**.  

<img src={require("./img/ai_mode_advanced_settings1.png").default} width="240"/>
<img src={require("./img/ai_mode_advanced_settings2.png").default} width="240"/>