---
title: Backup Charging Logic
description: Understand the device’s automatic charging strategies under different battery levels and recharge sources
---

# Backup Charging Logic

## 1. Overview

The device automatically applies different charging strategies based on the **battery State of Charge (SOC)**, **Backup Reserve**, and **Recharge Source**. The main objectives are:

- Maintain a minimum Backup Reserve to prevent over-discharge  
- Prioritize solar (PV) charging whenever possible  
- Introduce AC charging when necessary to improve system recovery  
- Avoid frequent switching near critical SOC thresholds  

Depending on the selected **Recharge Source**, the system automatically operates in one of the following modes without manual intervention:

- **PV + AC**: Prioritizes PV charging; when PV power is insufficient, the system supplements with grid (AC) power  
- **PV Only**: Charges the battery using PV as the primary source  

:::info **Preparation: Set Backup Reserve**

👉 App steps: Device page → Select your device → Tap <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> → SoC Settings → Set Backup Reserve (5%–100%)

<img src={require("../energy-mode/img/select_device.png").default} width="240"/>
<img src={require("../energy-mode/img/device_info.png").default} width="240"/>
<img src={require("../energy-mode/img/device_setting.png").default} width="240"/>
<img src={require("./img/soc_settings.png").default} width="240"/>
<img src={require("./img/backup_reserve.png").default} width="240"/>

:::



## 2. PV + AC

When the **Recharge Source** is set to **PV + AC**, both AC and PV can be used for charging.

👉 **App steps**: Device page → Select your device → Tap <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> → SoC Settings

1. Set **Recharge Source**: Select **PV + AC**  
2. Set **Recharge Power**: Configure AC charging power (default: 500W)  
   - SolidFlex/PowerFlex 2000: 100W–2400W  
   - BK1600/BK1600 Ultra: 100W–1200W  

<img src={require("./img/charging_source_ac.png").default} width="240"/>
<img src={require("./img/charging_power.png").default} width="240"/>

**Operating Logic**

| Battery SOC        | System Status | Behavior Description                                      |
| ------------------ | ------------ | --------------------------------------------------------- |
| Above Backup Reserve | Normal       | Battery charges and discharges normally                   |
| = Backup Reserve   | Protection   | Stops discharging; PV can still supply loads              |
| < Backup Reserve - 2% | Recharging  | **PV + AC charge simultaneously** for fast recovery       |
| Back to Backup Reserve    | Stop AC      | Stops AC charging; PV charging continues                  |
| > Backup Reserve + 2% | Normal   | Battery discharging resumes                               |



## 3. PV Only

When the **Recharge Source** is set to **PV Only**, the system prioritizes PV charging.

:::info
Under normal conditions, AC charging is not actively used. However, in extremely low SOC scenarios, protective AC charging may still be triggered.
:::

👉 **App steps**: Device page → Select your device → Tap <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> → SoC Settings

- Set **Recharge Source**: Select **PV Only**

<img src={require("./img/charging_source_pv.png").default} width="240"/>

**Operating Logic**

| Battery SOC            | System Status       | Behavior Description                                      |
| ---------------------- | ------------------- | --------------------------------------------------------- |
| Above Backup Reserve   | Normal              | Battery charges and discharges normally                   |
| = Backup Reserve       | Protection          | Stops discharging; PV can still supply loads              |
| < Backup Reserve - 2%  | PV Charging         | **Only PV is used for charging**                          |
| ≈ 3% (total SOC)       | Critical Protection | PV + AC charging is automatically enabled                 |
| ≥ 5% (total SOC)       | Exit Protection     | Stops AC; returns to PV-only charging                     |
| > Backup Reserve + 2%  | Normal              | Battery discharging resumes                               |

---

## 4. Differences Between the Two Modes

| Scenario | At Backup Reserve              | Below Backup Reserve - 2% | Low SOC Protection                                   | Resume Discharge Condition |
| -------- | ----------------------------- | -------------------------- | --------------------------------------------------- | -------------------------- |
| PV + AC  | Stop discharging; PV supports load | PV + AC charging       | -                                                   | Battery SOC > Backup Reserve + 2%  |
| PV Only  | Stop discharging; PV supports load | PV only charging       | At 3% total SOC: PV + AC enabled; at 5%: AC stops   | Battery SOC > Backup Reserve + 2%  |