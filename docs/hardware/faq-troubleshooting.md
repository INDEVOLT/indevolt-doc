---
title: FAQ & Troubleshooting
description: Frequently Asked Questions and Usage Guide for INDEVOLT Micro Energy Storage Systems
---

# FAQ & Troubleshooting

## 1. Compatibility & Basic Requirements

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. Q: What specifications of solar panels are compatible with the device?
  </summary>

  A: We recommend solar panels with:
  - Open-circuit voltage (Voc) between **10–60V**
  - Short-circuit current (Isc) not exceeding **20A**
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  2. Q: Can the device operate below 0°C? What is the ideal battery operating temperature range?
  </summary>

  A: The system can charge and discharge normally below 0°C, and PV generation will continue to operate.

  However, winter sunlight conditions may reduce solar production. In such cases, PV power is typically sufficient for self-consumption, minimizing energy waste.

  Recommended battery temperature range:
  - Charging: **-20°C to 55°C**
  - Discharging: **-20°C to 55°C**
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  3. Q: Which brands are currently supported?
  </summary>

  A: The system currently supports integration with:
  - Shelly  
  - Solarman  
  - Indevolt  
</details>

---

## 2. Installation, Wiring & Operation

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. Q: Do I need an external microinverter?
  </summary>

  A: For non-Eco models, an additional microinverter is **not required**. The device includes a built-in microinverter with **4 MPPT inputs (Maximum Power Point Tracking)**.

  If higher PV output is required, an external microinverter can be added.

  **Note**: Eco versions do not support MPPT.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  2. Q: What should I pay attention to before installing or adding expansion batteries?
  </summary>

  A: The system **must be powered off** before adding expansion batteries. Hot-plugging may damage the product.

  Proper procedure:
  1. Disconnect the AC power plug  
  2. Press and hold the power button for 2 seconds to turn off the device  
  3. Insert the expansion battery after shutdown  
  4. Reconnect the solar panels and resume operation  
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  3. Q: Can the system operate during a power outage?
  </summary>

  A: Yes. During a grid outage, the system can continue operating and charge via PV.

  The maximum off-grid output power depends on the specific product model.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  4. Q: Can the grid port be used during a power outage?
  </summary>

  A: No. In accordance with anti-islanding safety standards, the system will not feed power into the grid during an outage.

  During a grid outage, only the off-grid (EPS) output can supply loads.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  5. Q: What is Bypass Mode?
  </summary>

  A: Bypass Mode allows the system to support specific external devices such as microinverters or critical loads.

  When enabled:
  - You can select the connected device type in the device or app settings  
  - The app will display corresponding device icons and energy flow status. 
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  6. Q: How can I monitor data or adjust settings if the internet connection is lost?
  </summary>

  A: The system continues operating locally even without internet access.

  You can connect via Bluetooth:
  - Option 1: Select “Bluetooth Connection” on the device login page  
  - Option 2: Go to “Profile” → “Direct Device Connection” in the app  
</details>

---

## 3. Expansion, Battery & Parallel Operation

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. Q: What are the functions and usage of Cluster Mode?
  </summary>

  A: Cluster Mode allows multiple identical Micro Energy Storage devices (e.g., multiple SolidFlex 2000 units) to be networked via wireless or wired connections for coordinated operation.

  Key functions include:

  - **Unified scheduling:** Multiple devices share load information and distribute charge/discharge power according to preset rules to improve overall efficiency.  
  - **Capacity stacking:** The total battery capacity of multiple devices is combined to meet higher load or longer runtime requirements.  
  - **Redundancy backup:** If one device fails, other devices can continue operating to ensure power supply stability.

  Setup steps:

  After adding and connecting all devices in the app, go to device settings page, select **Cluster**, follow the prompts to add devices to the cluster, and complete pairing to enable Cluster Mode. 
  
  You can also configure power distribution rules and SOC thresholds in this interface.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  2. Q: Can PowerFlex and SolidFlex systems operate together in Cluster Mode?
  </summary>

  A: Currently, PowerFlex and SolidFlex systems support mixed operation in Cluster Mode.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  3. Q: The battery parameter shows a maximum power of 2400W, but the current default configuration is 800W. Can the power be adjusted to 2400W?
  </summary>

  A: The discharge capability depends on the number of battery packs installed.

  To increase discharge power to 2400W, additional battery packs are required. Simply adjusting software parameters cannot increase hardware power output.

  After adding battery packs, discharge capability will increase accordingly. Ensure circuit load compatibility to avoid device failure due to excessive load.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  4. Q: How is power distributed when multiple devices operate in parallel?
  </summary>

  A: The system uses a hierarchical power distribution strategy based on SOC level and load power:

  - When discharge power is below **200W**, the device with the highest SOC supplies the entire load.  
  - When discharge power is between **200W and 500W**, two devices with higher SOC share the load.  
  - When discharge power exceeds **500W**, all subdevices participate in discharge, and power is allocated proportionally based on SOC.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  5. Q: What is the maximum number of SolidFlex 2000 devices and SFA1800 battery modules supported?
  </summary>

  A:

  - **Maximum device count:**  
    - Up to 3 SolidFlex 2000 units can form a wireless cluster.  
    - One Shelly current transformer can control these 3 units.  
    - Each SolidFlex 2000 can support up to 5 SFA1800 battery modules.  
    - Maximum capacity per unit is 10.8 kWh (5 SFA1800 modules).

  - **Total discharge power limit:**  
    - Rated discharge power of one SolidFlex 2000 is 2400W.  
    - When 3 units operate in cluster mode, the total discharge power limit is 7200W (3 × 2400W).
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  6. Q: After connecting multiple SolidFlex 2000 units, will firmware or system software limit total power output? What is the maximum total capacity recognized by the app?
  </summary>

  A:

  - **Firmware power limit:**  
    When multiple SolidFlex 2000 battery clusters are connected, firmware does not restrict total power output. Users can adjust system power settings in the app as needed (ensure circuit load capacity is not exceeded).

  - **App capacity recognition:**  
    The app does not impose a maximum recognized system capacity. For example, if two SolidFlex 2000 units are connected, the app will display each unit’s installed capacity separately and also show the total cluster capacity.
</details>

---

## 4. Connected Devices & System Integration

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. Q: Can the system integrate with other brands of energy storage systems?
  </summary>

  A: Yes. Integration can be achieved through Home Assistant.

  Ensure that both systems are connected to Home Assistant and device authorization and command interfacing are completed.
</details>

---

## 5. Warranty

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. Q: What is the warranty period? What components are covered?
  </summary>

  A: The product comes with a **10-year warranty** and covers the battery, AC inverter, and the complete system (Please refer to the terms and conditions of the contract for details. Consumable parts are excluded).
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  2. Q: Is the 8000-cycle lifespan a contractual warranty parameter or only a theoretical rating?
  </summary>

  A: The 8000-cycle lifespan is based on real-world testing results (the device uses two large battery cells to improve cycle stability) and is contractually guaranteed.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  3. Q: What is the guaranteed remaining battery capacity (SOH) at the end of the warranty period?
  </summary>

  A: Not less than **70% SOH**.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  4. Q: What is the depth of discharge (DOD) for the 8000-cycle rating?
  </summary>

  A: The 8000-cycle lifespan is based on **100% DOD**, while the system reserves approximately **5% battery protection capacity**.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  5. Q: What is the maximum allowable depth of discharge (DOD) under warranty conditions?
  </summary>

  A: Under warranty conditions, the battery supports up to **100% DOD**. For daily use, it is recommended to avoid frequent full discharge.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  6. Q: What is the operating temperature range covered by the warranty?
  </summary>

  A: The warranty-covered operating temperature range is **-20°C to 55°C**.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  7. Q: Does the system automatically limit charge/discharge C-rate to extend battery lifespan?
  </summary>

  A: The system allows manual power adjustment and automatically limits charge/discharge rates based on battery status (such as SOC and temperature) to prevent damage and extend battery life.
</details>