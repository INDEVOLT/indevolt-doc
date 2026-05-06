---
title: Appearance & Interface
description: Overview of the device’s external structure, interface layout, button functions, and LED status indicators for SolidFlex / PowerFlex micro energy storage.
---

# Appearance & Interface

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

| LED                                                                                         | Description                                              | Status                  |
| ------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ----------------------- |
| <div class="table-img-box"><img src={require("./img/led-starting.png").default} /></div>    | Blue LED lights up from the center outward (up and down) | Starting                |
| <div class="table-img-box"><img src={require("./img/led-charging.png").default} /></div>    | Green LED lights upward from current battery level       | Charging                |
| <div class="table-img-box"><img src={require("./img/led-discharging.png").default} /></div> | Blue LED turns off downward from current battery level   | Discharging             |
| <div class="table-img-box"><img src={require("./img/led-iot-failure.png").default} /></div> | LED shows yellow                                         | IoT connection failure  |
| <div class="table-img-box"><img src={require("./img/led-fault.png").default} /></div>       | LED shows red                                            | Fault                   |
| <div class="table-img-box"><img src={require("./img/led-shutdown.png").default} /></div>    | Blue LED lights from both sides toward the center        | Shutting down           |
| <div class="table-img-box"><img src={require("./img/led-reset.png").default} /></div>       | Blue LED flashes three times                             | Device reset successful |