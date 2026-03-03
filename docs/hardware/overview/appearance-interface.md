---
title: Appearance & Interface Description
description: Overview of the device’s external structure, interface layout, button functions, and LED status indicators for SolidFlex / PowerFlex micro energy storage.
---

# Appearance & Interface Description

## Appearance

<img src={require("./img/appearance.png").default} width="480"/>

| No. | Function |
|----|----------|
| 1  | Operating status LED |
| 2  | ON/OFF button |
| 3  | Wireless module |
| 4  | MC4 connection for PV input 1 |
| 5  | MC4 connection for PV input 2 |
| 6  | MC4 connection for PV input 3 |
| 7  | MC4 connection for PV input 4 |
| 8  | Grid connection port |
| 9  | Backup power port |
| 10 | Protective conductor screw hole (minimum conductor cross-section: 4 mm²) |
| 11 | Bracket mounting hole |

:::info
The ECO model does not include ports 4–7.
:::

---

## Button

| Operation | Function |
|------------|----------|
| Press and hold for 2 seconds in the OFF state | Power on |
| Press and hold for 2 seconds in the ON state | Power off |
| Press and hold for 10 seconds in the ON state | Reset Bluetooth and Wi-Fi |

---

## LED Indicators

| LED | Description | Status |
|:--:|-------------|--------|
| <img src={require("./img/led-starting.png").default} style={{ height: 150 }}/> | Blue LED lights up from the center outward (up and down) | Starting |
| <img src={require("./img/led-charging.png").default} style={{ height: 150 }}/> | Green LED lights upward from current battery level | Charging |
| <img src={require("./img/led-discharging.png").default} style={{ height: 150 }}/> | Blue LED turns off downward from current battery level | Discharging |
| <img src={require("./img/led-iot-failure.png").default} style={{ height: 150 }}/> | LED shows yellow | IoT connection failure |
| <img src={require("./img/led-fault.png").default} style={{ height: 150 }}/> | LED shows red | Fault |
| <img src={require("./img/led-shutdown.png").default} style={{ height: 150 }}/> | Blue LED lights from both sides toward the center | Shutting down |
| <img src={require("./img/led-reset.png").default} style={{ height: 150 }}/> | Blue LED flashes three times | Device reset successful |