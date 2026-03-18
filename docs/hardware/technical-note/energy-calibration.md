---
title: Energy Calibration
description: Help your device periodically calibrate battery levels for more accurate SoC readings
---

# Energy Calibration

## 1. What is Energy Calibration?

In daily use, the device’s displayed battery level (SoC) is estimated through algorithms, which may develop some deviation over time.

**Energy calibration** allows the device to perform a periodic “full charge,” correcting the battery level display and improving accuracy.

:::info
The device continuously optimizes SoC estimation through algorithms. In future updates, Kalman filtering will be introduced to further improve long-term accuracy.
:::

## 2. What happens during calibration?

When the configured calibration interval is reached, the system will automatically perform a calibration:

- Prioritizes **PV (solar) charging**
- Automatically enables **AC charging** if PV power is insufficient
- Continues until the battery is **fully charged**

👉 Simply put: the battery is charged to 100% once to reset the reference point.


## 3. Why is Energy calibration necessary?

Without regular calibration, the following issues may occur:

- Inaccurate battery level display  
- Unexpected shutdown or abnormal drops in battery level  
- Incorrect behavior in recharge logic (e.g., stopping discharge too early)


## 4. How to configure Energy calibration?

👉 App steps: Device page → Select your device → <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> → SoC Settings → Energy Calibration  

<img src={require("../energy-mode/img/select_device.png").default} width="240"/>
<img src={require("../energy-mode/img/device_info.png").default} width="240"/>
<img src={require("../energy-mode/img/device_setting.png").default} width="240"/>
<img src={require("./img/soc_settings.png").default} width="240"/>

| Setting              | Description                                      | Recommendation                          |
|---------------------|--------------------------------------------------|----------------------------------------|
| Calibration Interval | Time since last full charge (5–60 days)          | Recommended: 14 days (2 weeks)         |
| Calibration Start Time | Time window when calibration is allowed to start | Choose daytime (good PV) or low-tariff hours |
| Recharge Power       | Uses current recharge power (AC power, default 500W) | Adjust based on circuit capacity       |

<img src={require("./img/calibration_interval.png").default} width="240"/>
<img src={require("./img/calibration_start_time.png").default} width="240"/>
<img src={require("./img/charging_power.png").default} width="240"/>