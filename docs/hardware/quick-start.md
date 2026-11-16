---
title: Quick Start
description: Indevolt energy storage device installation and first-use guide
---

# Quick Start

The content of this document serves as the general user manual. **Differences of the models are highlighted as 💡 notes throughout this document.** Please match the notes according to the model you purchased.

:::warning

Before operation, please read the **[Safety Instructions](./safety.md)** first to ensure safety.

:::

---

## Packing List

**Power Module :**

<img src={require("./img/power-packing-list.png").default} width="800"/>

**Battery Module (optional) :**

<img src={require("./img/battery-packing-list.png").default} width="800"/>

> 💡 **Model difference note**:  models **without a PV port** (AC / Eco models) do not include MC4 Connector Removal Tool.

---

## Installation

### Select installation location

- Do not install the modules near direct sunlight, fire or explosive materials.
- Ensure that the location is protected from potential hazards such as flooding.
- Recommended for use at altitudes below 2000m.

### Measure the distance

Reserve sufficient space for heat dissipation and safety insulation.

1. Select the appropriate installation space depending on the device configuration to be installed.

<img src={require("./img/system-size.png").default} width="720"/>

> 💡 **Model difference note**: Other series use different expansion batteries and capacity values:
>
> | Module Power                 | Expansion Battery |
> | ---------------------------- | ----------------- |
> | SolidFlex 2000/Eco           | 1,792 Wh          |
> | PowerFlex 2000/Eco           | 2,009Wh           |
> | SolidFlex 3000 Hybrid/AC     | 1,792 Wh          |
> | SolidFlex 3000 Hybrid/AC Pro | 2,009.6Wh         |
> | PowerFlex 3000 Hybrid/AC     | 2,016Wh           |
>
> | Module Battery | Expansion Battery |
> | --- | --- |
> | SFA 1800 | 1,792 Wh |
> | SFA 3600 | 3,584 Wh |
> | PFA 2000 | 2,016 Wh |
> | PFA 4000 | 4,032 Wh |

2. Device Size Information: 

<img src={require("./img/device-size.png").default} width="600"/>



Note: The following components are not included in this package. Please make sure that they are ready before installation and electrical connection.

<img src={require("./img/tools.png").default} width="480"/>

### Installation

The following steps describe the installation of a power module and two battery modules as an example.

1. Install four support feet on the bottom of the expansion battery.
   <img src={require("./img/installation-step1.png").default} width="360"/>

2. A minimum clearance of 30 mm must be maintained at the rear of the device (heatsink area) to ensure adequate ventilation and efficient heat dissipation.
   <img src={require("./img/installation-step2.png").default} width="360"/>

3. Adjust the height of the four support feet at the bottom of the equipment to ensure it is in a level position, calibrate using a level.
   <img src={require("./img/installation-step3.png").default} width="480"/>

4. Remove the bottom protective cap of the power module, as well as removing the protective caps at the top and bottom of the middle battery module.

   <img src={require("./img/installation-step4.png").default} width="600"/>

   :::warning

   When installing the bottom battery pack, keep the rubber plug in place to prevent water damage.

   Please be careful not to remove the protective cap of the bottom most expansion battery to avoid damage to the device!
   :::

5. Stack the expansion battery packs one after another with the power module on top, connecting the two corresponding connectors.
   <img src={require("./img/installation-step5.png").default} width="300"/>

6. Attach the L-shaped wall bracket to both sides of the first expansion battery under the power module using M4 Phillips screws.
   <img src={require("./img/installation-step6.png").default} width="300"/>

7. After the power module and battery module are installed, Secure the two modules using M4 Phillips screws.

   <img src={require("./img/installation-step7.png").default} width="480"/>

8. Mark the position of the drill holes on both sides and use a drill with a φ8 drill bit and a depth of 60 mm.

   <img src={require("./img/installation-step8.png").default} width="480"/>

9. Use a hammer to insert the plastic sleeve of the M5×60 self-tapping screw into the hole, and then use a Phillips screwdriver to fasten the M5×60 self-tapping screw to the L-shaped wall mounting bracket.
   <img src={require("./img/installation-step9.png").default} width="480"/>

   This product contains a dual isolation transformer that complies with safety requirements without 

   requiring measurement of the array grounding insulation resistance or detection of array fault currents.

:::info

The mains connection must be connected to an earthed socket, otherwise there is a risk of electric shock. Alternatively, the housing should be earthed. The earthing point is shown below.

<img src={require("./img/installation-step10.png").default} width="240"/>

:::

---

## Electrical Connection

### Connecting the cables

:::info 💡 Model difference note

The following PV connection instructions apply only to No-Eco and No-AC model. 

Eco and AC models, which do not have a PV port, are not covered in this section.

:::

The following steps describe the installation of a system with four solar panels as an example.

<img src={require("./img/connect-cables.png").default} width="960"/>

:::info 💡 Model difference note: Grid feed-in power

The standard AC output power of the inverter is limited to 800 W. Should you wish to increase this value, the installation must be inspected by a qualified electrician to confirm compliance with current safety requirements. Following this inspection, you may apply within the INDEVOLT application to increase the power to 3000 W.

The **SolidFlex 2000/Eco and PowerFlex 2000/Eco** manuals state the same procedure with a limit that can be increased to **2400 W** instead.

:::

#### Step 1: Connect the Grid

1. Connect the power module to a power socket at home using the mains cable with safety plug supplied.

<img src={require("./img/connect-grid.png").default} width="720"/>

#### Step 2: Connect the Solar Panels

Features four independent Maximum Power Point Tracking (MPPT) units. Each photovoltaic input operates as a separate MPPT.

- Open-circuit voltage (Voc): < 60 V per PV input
- Short-circuit current (Isc): < 20 A per PV input

> 💡 **Model difference note**: The SolidFlex 3000 Hybrid / SolidFlex 3000 Hybrid Pro manuals specify "Short-circuit current (Isc): < 22 A per PV input".

- For optimum efficiency, we recommend solar cables with a maximum length of 3 m to reduce transmission losses.

- The positive (+) and negative (–) terminals of a module must be connected to the same PV input.

  <img src={require("./img/connect-pv.png").default} width="480"/>

:::warning

NOTE:
When the battery module malfunctions, the system will lock. This lock cannot be automatically restored and requires professional after-sales service. The system function will be resumed after confirmation by professional after-sales that it meets the requirements.

:::

### Electricity system

The device can be used in single-phase or three-phase household systems:

<img src={require("./img/electricity-system.png").default} width="720"/>

### AC-coupled Connection

If you already have a micro-inverter, you can also couple the output of the micro-inverter to the Backup Terminal of the device via AC-coupled. At this time, the PV input will be provided to the load through the micro-inverter. If the power exceeds 3000W (can be adjusted through the APP), the device will disconnect from the micro-inverter. 

Note: AC /Eco model only support connection to solar modules via micro-inverters and do not have a PV port.

> 💡 **Model difference note**: For the SolidFlex 2000/Eco and PowerFlex 2000/Eco, the disconnect threshold of this AC-coupled connection is **2400 W** instead of 3000 W (can be adjusted through the APP).

<img src={require("./img/AC-coupled Connection 1.png").default} width="480"/>

<img src={require("./img/AC-coupled Connection 2.png").default} width="480"/>

---

## Power On

Locate the ON/OFF button on the left side of the main unit and press and hold for 2 seconds.

When the unit starts, the blue LED indicator on the front panel will illuminate with an animation spreading outward from the center.

<img src={require("./img/power-on.png").default} width="360"/>
<img src={require("./img/power-on-led-state.png").default} width="240"/>

---

## INDEVOLT APP

With the INDEVOLT App, you can:

- Monitor real-time device status and current power
- Check battery level and charge/discharge status
- View daily/weekly/monthly/yearly energy generation and consumption statistics
- Configure energy strategies, schedules, and perform firmware upgrades

📥 For first-time use, please complete the [App download, account registration, and device setup](https://docs.indevolt.com/docs/app/installation).
