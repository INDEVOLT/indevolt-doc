---
title: FAQ & Troubleshooting
description: Frequently Asked Questions and Usage Guide for INDEVOLT Micro Energy Storage Systems
---

# FAQ & Troubleshooting

## 1. Compatibility & Basic Requirements

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: What specifications of solar panels are compatible with the device?
  </summary>

  A: We recommend solar panels with:
  - Open-circuit voltage (Voc) between **10–60V**
  - Short-circuit current (Isc) not exceeding **20A**
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: Can the device operate below 0°C? What is the ideal battery operating temperature range?
  </summary>

  A: The system can charge and discharge normally below 0°C, and PV generation will continue to operate.

  However, winter sunlight conditions may reduce solar production. In such cases, PV power is typically sufficient for self-consumption, minimizing energy waste.

  Recommended battery temperature range:
  - Charging: **-20°C to 55°C**
  - Discharging: **-20°C to 55°C**
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: Which brands are currently supported?
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
  Q: Do I need an external microinverter?
  </summary>

  A: For non-Eco models, an additional microinverter is **not required**. The device includes a built-in microinverter with **4 MPPT inputs (Maximum Power Point Tracking)**.

  If higher PV output is required, an external microinverter can be added.

  **Note**: Eco versions do not support MPPT.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: What should I pay attention to before installing or adding expansion batteries?
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
  Q: Can the system operate during a power outage?
  </summary>

  A: Yes. During a grid outage, the system can continue operating and charge via PV.

  The maximum off-grid output power depends on the specific product model.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: Can the grid port be used during a power outage?
  </summary>

  A: No. In accordance with anti-islanding safety standards, the system will not feed power into the grid during an outage.

  During a grid outage, only the off-grid (EPS) output can supply loads.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: Can the emergency AC output on Phase 2 of the SolidFlex 2000 be connected to outlets on other phases?
  </summary>

  A: No.

  The emergency AC output is designed as a bypass port for independent operation only. It must **not** be connected to the grid, including outlets on other phases.

  Doing so may cause short circuits, equipment damage, or trigger grid protection mechanisms.

  Even if the neutral line is shared, voltage differences between phases can cause faults. Always follow the phase labeling on the device.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: What is Bypass Mode?
  </summary>

  A: Bypass Mode allows the system to support specific external devices such as microinverters or critical loads.

  When enabled:
  - You can select the connected device type in the device or app settings  
  - The app will display corresponding device icons and energy flow status. 
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: How can I monitor data or adjust settings if the internet connection is lost?
  </summary>

  A: The system continues operating locally even without internet access.

  You can connect via Bluetooth:
  - Option 1: Select “Bluetooth Connection” on the device login page  
  - Option 2: Go to “Profile” → “Direct Device Connection” in the app  
</details>

---

## 3. Charging, Discharging & Energy Management

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: Is it a problem if multiple batteries have different SOC levels?
  </summary>

  A: No.

  The device uses DC-DC optimizers to manage differences in charge levels between battery packs.

  Each battery pack includes:
  - An independent BMS (Battery Management System)  
  - A DC-DC optimizer  

  Different capacities or SOC levels can operate together safely.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: Does the system balance SOC between modules?
  </summary>

  A: Yes. SOC balancing occurs automatically during normal charge and discharge cycles.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: How do I prevent feeding power into the grid?
  </summary>

  A: In the device or app under “Power Settings,” set the feed-in power limit to **0**.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: Can discharge be controlled by both time and SOC?
  </summary>

  A: Yes. This can be configured through Home Assistant by combining and time-based automation and SOC threshold rules.  
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: How do I set the battery to charge only from solar?
  </summary>

  A: In the app’s SOC Settings, select “PV Only” as the charging source.

  > Note: If SOC ≤ 5% and PV power is insufficient, the system may automatically charge from the grid to protect the battery.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: At what PV power level does charging begin?
  </summary>

  A: Charging begins when PV input exceeds **50W**.

  Since the system consumes approximately 35W internally and has conversion losses, charging below 50W would not effectively charge the battery.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: Why doesn’t the app show charging at low PV power?
  </summary>

  A: Charging is displayed only when net power reaching the battery exceeds the display threshold.

  At low PV levels:
  - Part of the energy is consumed by the system’s internal operation and power conversion  
  - The remaining power reaching the battery is minimal (below the display threshold)  

  If the charging power is below the system’s display threshold, the app may show the status as “Idle.” However, the battery may still be charging slowly. This is normal behavior.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: Should I fully charge the battery before first use?
  </summary>

  A: Yes. Fully charge once before first use to calibrate SOC for accurate display.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: When the battery is fully charged, will the solar panels stop generating power? Is it dangerous?
  </summary>

  A: No safety risk. When the battery reaches full charge, the solar panels will continue generating power, and this does not pose any safety risk:

  - Power generation & excess energy handling: After the battery is full, the solar panels continue to operate normally. Any excess energy will be fed into the grid according to the app settings (if “Feed excess power to grid” is enabled). If the microinverter is disconnected, the system will limit excess power to prevent battery overcharging.
  - Safety protection: The device includes built-in overcharge protection. When the battery SOC reaches 100%, charging automatically stops. There is no safety risk as long as the transfer switch is properly connected and protection functions are enabled.

</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: Why does the emergency socket not supply power after disconnecting from the grid?
  </summary>

  A: The operation of this outlet depends on the type of connected device and the selected operating mode. Details are as follows:
  - Mode behavior: If a microinverter is connected to the outlet, the system automatically switches to microinverter mode. If a load is connected, the system switches to EPS (Emergency Power Supply) mode. The selected mode is recorded by the system.
  - Power supply conditions: If the grid (AC) is disconnected or the device has not been restarted, the system will continue operating based on the last recorded mode. In microinverter mode, when the grid is disconnected, the outlet will not supply power in order to protect the off-grid port. Only in EPS mode will the outlet provide power during a grid outage.

  How to ensure power is available during an outage
  - While the device is still connected to the grid, connect your critical loads to the emergency outlet. The system will automatically enter EPS Mode.
  - Alternatively, restart the device. After rebooting, the system defaults to EPS Mode. If a microinverter is connected afterward, it will switch back to Microinverter Mode.

  Additionally, if the battery SOC is below 5% when the grid is disconnected, the emergency outlet may not supply power.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: What is the power consumption of the SolidFlex 2000?
  </summary>

  A: The SolidFlex 2000 has two operating power consumption levels:

  - **Operating mode** (during charging, discharging, or powering loads): approximately **30W**  
  - **Deep standby mode** (no charging or discharging, low-power operation): approximately **10W**
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: Does the device always consume power from the battery, or can it use solar power directly?
  </summary>

  A: The device does not always draw power from the battery. The power source depends on how external devices are connected:

  - If the load is connected to the **bypass port** (which functions like a combination of an energy meter and load connection), solar energy from the MPPT input will first supply the load. Any excess solar power will then be used to charge the battery.
  - If the load is not connected to the bypass port, the device will prioritize power from the battery or grid, depending on the configured power priority settings.
</details>

---

## 4. Expansion, Battery & Parallel Operation

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: What are the functions and usage of Cluster Mode?
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
  Q: Can PowerFlex and SolidFlex systems operate together in Cluster Mode?
  </summary>

  A: Currently, PowerFlex and SolidFlex systems do not support mixed operation in Cluster Mode. Each system must operate independently according to its own control logic.

  Both systems use new-generation energy storage battery cells, and the SOC safe operating range is 0–100%. Operating within this range does not affect the designed cycle life.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: If there are two battery packs, can the output power be set to 2×2400W or is the total power limited to 2400W?
  </summary>

  A: **The total system discharge power limit is 2400W**, not 2×2400W.

  If the device has a hardware power limit (such as inverter capacity or circuit load limit), the maximum total output must follow the device specification.

  For more details, please refer to the device manual or check the maximum configurable Max AC Output Power in the Power Settings section of the device interface in the app.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: The battery parameter shows a maximum power of 2400W, but the current default configuration is 800W. Can the power be adjusted to 2400W?
  </summary>

  A: The discharge capability depends on the number of battery packs installed.

  To increase discharge power to 2400W, additional battery packs are required. Simply adjusting software parameters cannot increase hardware power output.

  After adding battery packs, discharge capability will increase accordingly. Ensure circuit load compatibility to avoid device failure due to excessive load.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: How is power distributed when multiple devices operate in parallel?
  </summary>

  A: The system uses a hierarchical power distribution strategy based on SOC level and load power:

  - When discharge power is below **200W**, the device with the highest SOC supplies the entire load.  
  - When discharge power is between **200W and 500W**, two devices with higher SOC share the load.  
  - When discharge power exceeds **500W**, all subdevices participate in discharge, and power is allocated proportionally based on SOC.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: What is the maximum number of SolidFlex 2000 devices and SFA1800 battery modules supported?
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
  Q: After connecting multiple SolidFlex 2000 units, will firmware or system software limit total power output? What is the maximum total capacity recognized by the app?
  </summary>

  A:

  - **Firmware power limit:**  
    When multiple SolidFlex 2000 battery clusters are connected, firmware does not restrict total power output. Users can adjust system power settings in the app as needed (ensure circuit load capacity is not exceeded).

  - **App capacity recognition:**  
    The app does not impose a maximum recognized system capacity. For example, if two SolidFlex 2000 units are connected, the app will display each unit’s installed capacity separately and also show the total cluster capacity.
</details>

---

## 5. Connected Devices & System Integration

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: Can one Shelly current transformer control multiple SolidFlex 2000 clusters? Is the control centralized or independent?
  </summary>

  A: One Shelly current transformer can simultaneously control multiple SolidFlex 2000 battery clusters using centralized control. All controlled devices will execute the same command, such as starting discharge or adjusting discharge power.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: Can the system integrate with other brands of energy storage systems?
  </summary>

  A: Yes. Integration can be achieved through Home Assistant.

  Ensure that both systems are connected to Home Assistant and device authorization and command interfacing are completed.
</details>

---

## 6. Energy Consumption Optimization

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: When the battery reaches backup SOC, standby power is still supplied by the battery instead of switching to grid power. How can this be resolved?
  </summary>

  A: Recommended solutions:

  1. Enable AC bypass so that standby power automatically switches to grid supply when backup SOC is reached, reducing battery self-discharge.  
  2. Reduce backup SOC threshold by 5–10% to decrease frequent charging cycles.  
  3. Enable grid charging only during off-peak electricity price periods (e.g., nighttime).  
  4. Optimize PV utilization by prioritizing solar power for standby load and battery charging.
</details>

---

## 7. Warranty

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: What is the warranty period? What components are covered?
  </summary>

  A: The product comes with a **10-year warranty** and covers the battery, AC inverter, and the complete system (Please refer to the terms and conditions of the contract for details. Consumable parts are excluded).
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: Is the 8000-cycle lifespan a contractual warranty parameter or only a theoretical rating?
  </summary>

  A: The 8000-cycle lifespan is based on real-world testing results (the device uses two large battery cells to improve cycle stability) and is contractually guaranteed.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: What is the guaranteed remaining battery capacity (SOH) at the end of the warranty period?
  </summary>

  A: Not less than **70% SOH**.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: What is the depth of discharge (DOD) for the 8000-cycle rating?
  </summary>

  A: The 8000-cycle lifespan is based on **100% DOD**, while the system reserves approximately **5% battery protection capacity**.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: What is the maximum allowable depth of discharge (DOD) under warranty conditions?
  </summary>

  A: Under warranty conditions, the battery supports up to **100% DOD**. For daily use, it is recommended to avoid frequent full discharge.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: What is the operating temperature range covered by the warranty?
  </summary>

  A: The warranty-covered operating temperature range is **-20°C to 55°C**.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Q: Does the system automatically limit charge/discharge C-rate to extend battery lifespan?
  </summary>

  A: The system allows manual power adjustment and automatically limits charge/discharge rates based on battery status (such as SOC and temperature) to prevent damage and extend battery life.
</details>