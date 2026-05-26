---
title: PV/Battery Temperature Derating Explanation
description: Understand how the system limits power output under high and low temperature conditions
---

# PV/Battery Temperature Derating Explanation

The system can operate at full power within an appropriate temperature range. When the temperature becomes too high or too low, the system will automatically reduce power. This behavior is called **derating**.

Derating is a normal protection mechanism that allows the system to operate in a safer condition. It helps prevent failures caused by overheating or overcooling, and also extends the lifespan of the equipment. Once the temperature returns to a safe range, the system will automatically restore rated power without manual intervention.

---

## PV Thermal Derating

Under normal conditions, the system maximizes power generation. However, at higher temperatures, continuous full-power operation can introduce additional stress. When the internal PV conversion module (**MPPT**) temperature becomes too high, the system will automatically reduce PV power to protect the device.

:::info
The ECO series does not include a PV DC input interface and cannot be directly connected to PV modules. This section does not apply.
:::

**Why does derating occur?**

The PV conversion module generates heat continuously during DC-DC power conversion, and higher power leads to more heat. External factors can further increase temperature, such as:

- High ambient temperature at midday in summer  
- Poor ventilation at the installation site  

If the temperature continues to rise while operating at full power, it may lead to overheating, reduced efficiency, or even damage. Therefore, the system reduces output power to maintain safe operation.

**What will you notice?**

In actual use, PV derating may appear as:

- PV generation does not reach the theoretical peak  
- The generation curve appears “flattened” during midday  

These are normal protective behaviors.

**Derating behavior**

When the temperature of the internal PV conversion module (MPPT) rises, the system limits the maximum PV power in steps. Power is automatically restored when temperature decreases:

- When temperature is above **93°C**, max power is limited to **80%** of rated power  
  - Example: total power `2400W × 80% = 1920W`; per PV channel `600W × 80% = 480W`  
  - Rated power is restored when temperature drops below **75°C**

- When temperature is above **96°C**, max power is limited to **60%** of rated power  
  - Example: total power `2400W × 60% = 1440W`; per PV channel `600W × 60% = 360W`  
  - Rated power is restored when temperature drops below **80°C**

---

## Battery Temperature Derating

Compared to the PV conversion module, the battery is more sensitive to temperature. Therefore, its protection strategy is stricter. Both high and low temperatures can trigger derating.

**Why does derating occur?**

Battery operation is based on chemical reactions, which are highly sensitive to temperature:

- High temperature: accelerates aging and may introduce safety risks  
- Low temperature: slows down chemical reactions; charging may cause damage  

To ensure safe operation, the system limits charge and discharge power.

**What will you notice?**

- Charging becomes slower, or may stop completely  
- Discharge power is reduced  
- Rated charge/discharge power cannot be reached  

**Derating behavior**

Battery charge and discharge power dynamically adjusts with temperature:

- **At high temperatures**: the system reduces charging power and limits discharge capability. If temperature continues to rise, charging and discharging will stop to prevent overheating.
- **At low temperatures**: the system mainly limits charging, since charging at low temperatures may cause irreversible damage to lithium batteries. Discharge capability is also reduced.  
    > In winter, it is common to see “discharging works, but charging is unavailable.”

The values in the table below represent the capability of a single unit (main unit or battery pack).  
**Actual system power = per-unit power × number of units**, and it will not exceed the system’s maximum charge/discharge power limit.

<table><thead>
  <tr>
    <th></th>
    <th colspan="2">SolidFlex 2000 / SolidFlex 2000 Eco / SFA1800</th>
    <th colspan="2">PowerFlex 2000 / PowerFlex 2000 Eco / PFA2000</th>
  </tr></thead>
<tbody>
  <tr>
    <td>Temperature (°C)</td>
    <td>Max Charge Power (W)</td>
    <td>Max Discharge Power (W)</td>
    <td>Max Charge Power (W)</td>
    <td>Max Discharge Power (W)</td>
  </tr>
  <tr>
    <td>≤ -20</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>-20 &lt; T ≤ -10</td>
    <td>0</td>
    <td>304</td>
    <td>0</td>
    <td>341</td>
  </tr>
  <tr>
    <td>-10 &lt; T ≤ 0</td>
    <td>0</td>
    <td>380</td>
    <td>0</td>
    <td>426</td>
  </tr>
  <tr>
    <td>0 &lt; T ≤ 4</td>
    <td>179</td>
    <td>761</td>
    <td>200</td>
    <td>853</td>
  </tr>
  <tr>
    <td>4 &lt; T ≤ 10</td>
    <td>537</td>
    <td>761</td>
    <td>602</td>
    <td>853</td>
  </tr>
  <tr>
    <td>10 &lt; T ≤ 52</td>
    <td>896</td>
    <td>1075</td>
    <td>1004</td>
    <td>1205</td>
  </tr>
  <tr>
    <td>52 &lt; T ≤ 53 (restores to rated power when T ≤ 51°C)</td>
    <td>448</td>
    <td>380</td>
    <td>502</td>
    <td>426</td>
  </tr>
  <tr>
    <td>&gt; 53</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
</tbody></table>

<img src={require("./img/bat_charging_power.png").default} width="960"/>
<img src={require("./img/bat_discharging_power.png").default} width="960"/>


**How to Check Battery Temperature**

Indevolt App steps: Device page → Select the corresponding micro storage device → Tap <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> → Select **Temperature** → View main battery and battery pack temperatures

<img src={require("../energy-mode/img/select_device.png").default} width="240"/>
<img src={require("../energy-mode/img/device_info.png").default} width="240"/>
<img src={require("./img/device_setting2.png").default} width="240"/>
<img src={require("./img/temperature.png").default} width="240"/>