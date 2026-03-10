---
title: Standby Power Consumption
description: Understand the device’s internal power consumption under different operating modes and its impact on actual energy usage.
---

# Standby Power Consumption

During normal use, you may notice that the battery level slowly decreases even when the device is not charging or discharging. In most cases, this is a normal behavior of the system.

**Why does the device consume power even when it seems “inactive”?**

Energy storage devices do not operate only during charging or discharging. Even when no power is delivered externally, the system must maintain basic internal operations. For example, the control system must remain ready, the Battery Management System (BMS) continuously monitors battery status, and the communication module stays online.

As long as the device is powered on, these modules consume a small amount of energy. This energy usage can be considered the device’s operational maintenance cost. Therefore, seeing a small amount of power consumption in standby mode is normal.



## Main Factors

Standby power consumption is not a single fixed value. It may vary depending on system configuration and operating conditions. The main factors include:

### 1. Grid Connection Status (Grid-tied / Off-grid)

**Grid-tied mode**

When the device is connected to the grid, some functions can rely on the grid for operation. As a result, system power consumption is usually lower.

**Off-grid mode**

When operating off-grid, the system must maintain its own power supply capability. More modules remain active, resulting in higher standby power consumption.

In simple terms:

- Grid-tied: the system can rely on the grid, resulting in lower consumption.  
- Off-grid: the system must maintain its own supply capability, resulting in higher consumption.



### 2. Whether Bypass Mode Is Enabled

When bypass is enabled and the grid is available, loads can be powered directly by the grid and the main unit battery. In this case, the system mainly maintains control, monitoring, and bypass-related circuits, so the power consumption is typically lower than maintaining inverter operation in off-grid mode but higher than deep standby.

When bypass is disabled and the system is off-grid, the device automatically enters deep standby mode to reduce power consumption.

In simple terms:

- Bypass enabled: the grid directly powers the load while the system remains on standby.  
- Bypass disabled: the system may need to keep the inverter ready or running.



### 3. Whether Deep Standby Is Enabled

When the deep standby function is enabled, the system enters a low-power mode. If there is no charging or discharging demand, some high-power modules (such as the inverter) enter sleep mode, while only basic monitoring and communication functions remain active.

In simple terms:

- Deep standby enabled: the device enters a power-saving mode  
- Deep standby disabled: the device remains ready to respond at any time, resulting in higher power consumption



### 4. Whether an AC Auxiliary Power Supply Is Available

The AC auxiliary power supply is used to power the device’s internal control system. The newer PowerFlex / SolidFlex 2000 models are equipped with an **AC auxiliary power supply**.

If the device is connected to the grid and has an AC auxiliary supply, some internal modules can be powered by the grid instead of the battery, thereby reducing battery consumption.

In simple terms:

- With AC auxiliary power: part of the standby consumption comes from the grid  
- Without AC auxiliary power: this consumption may come from the battery

---

## Different Operating States

Depending on whether the device is connected to the grid and how the system operates, the device may run in different states.

:::note
- The following information applies only to the **PowerFlex / SolidFlex 2000 series**, and does not apply to the **PowerFlex / SolidFlex 1200 or 3000 series**.
- The following power values are **typical values**. Actual values may vary slightly due to factors such as ambient temperature, communication status, and the number of battery packs.
- Total power consumption = Main unit consumption (including the internal battery and control system) + Battery pack quantity × Battery pack consumption.
:::


### Grid-Tied Mode

**🔌Bypass Enabled**

In this state, loads are typically powered by the grid and the main unit battery. **Power consumption remains the same regardless of whether deep standby is enabled or disabled.**

| Model                                    | Main Unit Power (W) | Battery Pack Power (W) |
| ---------------------------------------- | ------------------- | ---------------------- |
| PowerFlex 2000                           | 20                  | 0                      |
| SolidFlex 2000                           | 20                  | 0                      |
| PowerFlex 2000 (with AC auxiliary power) | 20                  | 0                      |
| SolidFlex 2000 (with AC auxiliary power) | 20                  | 0                      |


**🔌Bypass Disabled**

<table>
<thead>
<tr>
<th></th>
<th colspan="2">Deep Standby Enabled</th>
<th colspan="2">Deep Standby Disabled</th>
</tr>
</thead>
<tbody>
<tr>
<td>Model</td>
<td>Main Unit Power (W)</td>
<td>Battery Pack Power (W)</td>
<td>Main Unit Power (W)</td>
<td>Battery Pack Power (W)</td>
</tr>
<tr>
<td>PowerFlex 2000</td>
<td>7</td>
<td>2</td>
<td>20</td>
<td>0</td>
</tr>
<tr>
<td>SolidFlex 2000</td>
<td>7</td>
<td>2</td>
<td>20</td>
<td>0</td>
</tr>
<tr>
<td>PowerFlex 2000 (with AC auxiliary power)</td>
<td>7 (supplied by AC auxiliary power)</td>
<td>2</td>
<td>20</td>
<td>0</td>
</tr>
<tr>
<td>SolidFlex 2000 (with AC auxiliary power)</td>
<td>7 (supplied by AC auxiliary power)</td>
<td>2</td>
<td>20</td>
<td>0</td>
</tr>
</tbody>
</table>



### Off-Grid Mode

When operating off-grid, the system cannot rely on the grid and must maintain its own power supply capability. Therefore, standby power consumption is usually higher than in grid-tied mode.

**🔌Bypass Enabled**

The system needs to keep the inverter ready to supply power to loads at any time. **Power consumption remains the same regardless of whether deep standby is enabled or disabled.**

:::note
If bypass is enabled and the off-grid **Sleep Mode → Standby Shutdown Countdown** reaches its configured time, the power consumption will become the same as when bypass is disabled.
:::

| Model                                    | Main Unit Power (W) | Battery Pack Power (W) |
| ---------------------------------------- | ------------------- | ---------------------- |
| PowerFlex 2000                           | 29                  | 5                      |
| SolidFlex 2000                           | 29                  | 5                      |
| PowerFlex 2000 (with AC auxiliary power) | 29                  | 5                      |
| SolidFlex 2000 (with AC auxiliary power) | 29                  | 5                      |



**🔌Bypass Disabled**

When operating off-grid with bypass disabled, the device automatically enters deep standby mode.

| Model                                    | Main Unit Power (W) | Battery Pack Power (W) |
| ---------------------------------------- | ------------------- | ---------------------- |
| PowerFlex 2000                           | 7                   | 2                      |
| SolidFlex 2000                           | 7                   | 2                      |
| PowerFlex 2000 (with AC auxiliary power) | 7                   | 2                      |
| SolidFlex 2000 (with AC auxiliary power) | 7                   | 2                      |