---
title: Self-Consumed Prioritized
description: Prioritize solar energy usage to maximize self-consumption ratio
---

# Self-Consumed Prioritized

In **Self-Consumed Prioritized** mode, the Indevolt Micro Energy Storage system dynamically adjusts charging and discharging power based on household energy demand.

The system prioritizes solar PV generation, reduces grid electricity consumption, and prevents reverse energy feed-in to the grid.

The entire process is automatic and requires no manual intervention.

## Suitable Users

This mode is recommended if you:

- Have installed PV modules and want to maximize self-generated energy utilization  
- Want to reduce grid electricity consumption and energy costs  
- Have relatively regular daily energy usage patterns  
- Prefer automatic system operation with minimal configuration  

## How the System Works

In Self-Consumed Prioritized mode, the system automatically distributes energy based on generation and consumption conditions.

**Energy Generation Priority**

- Solar PV generation is **first used to supply household loads**  
- Excess PV energy is **used to charge the battery**  
- After the battery is fully charged, remaining energy may be fed into the grid (depending on feed-in settings)

**Energy Consumption Priority**

- Household loads are powered **first by solar PV energy**  
- When PV energy is insufficient, the **battery provides supplemental discharge**  
- When both PV and battery energy are insufficient, power is drawn from the **grid**

---

## Load Settings

To help the system accurately determine required discharge power, you need to select an appropriate load type.

**Smart Plug**

- The system discharges according to the actual power consumption of devices connected to the smart plug  
- Additional power offset can be configured for fine-tuning output power  
- Actual dispatch power = Plug load power + offset power  
- Suitable for users who want to power only specific devices or precisely control discharge power  

**Smart Meter**

- The meter must be installed on the **grid input side**  
- The system aims to maintain **meter power = 0**:

  - Positive meter power → system discharges to compensate consumption  
  - Negative meter power → system charges to absorb excess energy  

- Suitable for users who want whole-house zero feed-in and maximize self-consumption  

**Key Load**

- The system supplies power only to loads connected through the bypass port and does not feed power back to the grid  
- Suitable for users who only need to protect essential devices  

**Custom (Load Curve)**

- The day can be divided into up to **48 time segments**, each configured with different output power  

:::info
If the load is set to Smart Plug or Smart Meter and the device goes offline, the system will automatically switch to discharge based on the load curve power.
:::

:::warning
If the load curve is set too high or is unreasonable, grid feed-in may occur.
:::

## How to Configure Self-Consumed Prioritized

**Steps:**

1. Ensure your device has been added to your home in the **INDEVOLT App**  
2. Tap the **Device** tab at the bottom and select the device card to enter the device details page  
3. Tap the energy mode area (which dynamically displays the selected mode) to enter the mode selection page  
4. Select **Self-Consumed Prioritized** and tap **Settings**  
5. Select the appropriate [load type](#load-settings) based on actual conditions (Smart Plug / Smart Meter / Critical Load / Custom Configuration)  
6. Tap **Save** to apply the settings immediately  

<img src={require("./img/select_device.png").default} width="240"/>
<img src={require("./img/select_energy_mode.png").default} width="240"/>
<img src={require("./img/self_consume_prioritized.png").default} width="240"/>
<img src={require("./img/load_settings.png").default} width="240"/>


## Recommended Device Parameter Settings

On the device details page, tap the **⚙ Settings** icon in the upper right corner to enter the settings page.

<img src={require("./img/device_info.png").default} width="240"/>
<img src={require("./img/device_setting.png").default} width="240"/>

For a more stable user experience, the following configurations are recommended:

| Settings | Recommended Configuration |
|----------------------------|--------------------------------|
| Max AC output power (discharge) | Not lower than the home actual load power and compliant with local regulations |
| Inverter input limit (charge) | Not lower than the desired charging power |
| Feed-in power limit | Recommended value: `0` (enable zero feed-in) |
| Bypass | Keep disabled unless necessary |
| Backup SOC | Recommended: 20% |