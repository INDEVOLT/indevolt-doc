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

  A: Depending on the model, the situation is as follows:
  - Non-ECO models: A built-in microinverter is included, so no additional configuration is required. The device includes 4 MPPT (Maximum Power Point Tracking) channels. If higher PV output power is needed, additional microinverters can be connected.
  - ECO models: MPPT is not supported
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  2. Q: What should I pay attention to before installing or adding expansion batteries?
  </summary>

  A: The operation must be performed only when the device is completely powered off. Hot plugging is strictly prohibited, otherwise it may cause device damage or safety hazards. The correct procedure is as follows:  
      1. Disconnect the PV input connection and unplug the AC power cable;  
      2. Press and hold the power button for 2 seconds to turn off the device;  
      3. After the device is powered off, insert the expansion battery;  
      4. Reconnect the solar panels and restore power to resume use.  
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

  👉 For detailed instructions, see: [Bypass Socket Guide](./technical-note/bypass.md)
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  6. Q: How can I monitor data or adjust settings if the internet connection is lost?
  </summary>

  A: The system continues operating locally even without internet access. You can connect via Bluetooth:
  - Option 1: Select “Direct Device Connection” on the login page  
  - Option 2: Go to “Profile” → “Direct Device Connection” in the app  
</details>

---

## 3. Charging, Discharging, and Energy Management Strategies

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. Q: Will it cause issues if multiple batteries have different SOC levels?
  </summary>

  A: No, this is normal.  

  Each battery pack is equipped with an independent DC-DC optimizer, allowing the system to automatically coordinate power differences between batteries. Even battery packs with different capacities and SOC levels can be mixed and used together. The system will automatically balance the SOC without requiring manual intervention.

  👉 For detailed instructions, see: [SOC Balancing Guide](./technical-note/soc-balancing.md)
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  2. Q: How can I configure the device so it does not feed power into the home grid?
  </summary>

  A: In the App, go to the device's **Power Settings** and set the Feed-in Power Limit to 0.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  3. Q: Can discharging be controlled based on both time and battery level?
  </summary>

  A: Yes. You can configure conditions in Home Assistant by adding both time rules and SOC threshold rules in real-time control mode to achieve combined control.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  4. Q: How can I configure the device to charge the battery using solar panels?
  </summary>

  A: Set up Charge/Discharge Schedule in the App and select **Solar Only Charging** as the charging mode.
  
  > **Note**: To maintain battery health, when the battery level is extremely low (SOC ≤ 3%) and PV power is insufficient, the system will automatically charge from the grid to protect battery safety.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  5. Q: At what PV power level will the device start charging?
  </summary>

  A: The system will begin charging the battery when PV power exceeds 50W. The device itself consumes approximately 35W during operation, and additional losses occur during power conversion. If PV power is below 50W, the remaining available power after losses is generally insufficient to charge the battery.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  6. Q: Why does the device not display “Charging” when PV power is low?
  </summary>

  A: When PV power is low, part of the generated energy is first used for the device’s own operation and power conversion. As a result, the actual charging power entering the battery may be very small.

  If the actual charging power is below the system display threshold, the App will display the status as “Idle,” although the battery may still be charging slowly in the background. This is normal.

  The display thresholds are as follows:

  - Charging power ≥ 30W: displays “Charging”;
  - Discharging power ≥ 60W: displays “Discharging”;
  - Below the above thresholds: displays “Idle”.

</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  7. Q: Is it necessary to fully charge the battery before using the energy storage product?
  </summary>

  A: It is recommended to fully charge the battery once before first use to calibrate the SOC value. This helps ensure that the SOC displayed in the App accurately reflects the actual battery level and improves the overall user experience.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  8. Q: After the battery is fully charged, will the solar panels stop generating power? Is this safe?
  </summary>

  A: The device includes built-in overcharge protection. When the battery SOC reaches 100%, the system will automatically stop charging the battery. This is normal behavior.

  After the battery is fully charged, whether the solar panels continue generating power depends on the current system status and App settings:

  - If loads are still consuming power, the solar panels will continue supplying power to the loads;
  - If feed-in is enabled, excess power will be exported to the grid according to the “Feed-in Power Limit” setting in the App;
  - If there is no power demand, the system will automatically reduce or stop drawing power from the solar panels.

  The entire process is automatically controlled by the system and will not damage the device, battery, or solar panels, so it is safe to use.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  9. Q: Why is there no power output from the Backup port after disconnecting the grid?
  </summary>

  A: Possible reasons include:
  
  - When the EMS firmware version is lower than 1.01.08, if the Backup port is operating in microinverter mode, the system will disable off-grid discharge on that port to protect the device;
  - When the battery SOC is lower than 5%, the port may also stop supplying power.

  It is recommended to check the following:
  - Upgrade the EMS firmware in the App to version 1.01.08 or later;
  - Confirm whether the current battery level is too low.
  
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  10. Q: What is the power consumption of the SolidFlex 2000 device?
  </summary>

  A: The power consumption of the SolidFlex 2000 depends on the operating state:
  - Working state (charging, discharging, or supplying power to loads): approximately 30W;
  - Deep standby state (no charging or discharging, low-power operation): power consumption varies depending on system settings. See [Standby Power Consumption Guide](./technical-note/standby-power.md) for details.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  11. Q: Is load power always supplied from the battery, or can it use PV power directly?
  </summary>

  A: Not necessarily.
  - When PV generation is sufficient, the system will prioritize using PV power to supply loads, and excess energy will be used to charge the battery.
  - When PV power is insufficient, the battery will supplement the power supply.
  - Devices manufactured after December 2025 include an AC auxiliary power module, which allows deep standby operation to be powered from the grid.

</details>

---

## 4. Expansion, Battery & Parallel Operation

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. Q: What is Cluster Mode? How do I use it?
  </summary>

  A: A cluster refers to connecting multiple micro energy storage devices into one unified operating system, allowing multiple devices to work together for power supply, energy storage, and energy management.
  
  How to use it: After adding and configuring the network for all devices in the App, go to the device **Settings** page, select **Cluster**, and follow the instructions to add the devices you want to group together. Once pairing is completed, Cluster Mode will be enabled. You can also configure parameters such as power distribution rules and SOC thresholds on this page.

  👉 For detailed instructions, see: [Cluster Guide](./technical-note/cluster.md)
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  2. Q: Can PowerFlex and SolidFlex systems operate together in Cluster Mode?
  </summary>

  A: Currently, PowerFlex and SolidFlex systems support mixed operation in Cluster Mode.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  3. Q: If I have two clustered battery groups, can the output power be set to 2 × 2400W, or is the total output limited to 2400W?
  </summary>

  A: You can check the maximum configurable AC output power of the current system on the **Power Settings** page within the App’s cluster group settings.  

  The system output capability varies depending on the cluster configuration method:
  - Coordinated: Each device is independently connected to the grid and handles its own AC input and output. Therefore, each battery group can provide up to 2400W output independently.
  - Centralized: All AC inputs and outputs are centralized through the main device, which connects to the grid and manages output uniformly. After clustering, the maximum output power on the main device side can reach up to 2 × 2400W.
  
  However, the actual configurable output power must also comply with local grid requirements, electrical standards, and regulations.
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
  5. Q: The battery parameter shows a maximum power of 2400W, but the default configured power is 800W. Can it be adjusted to 2400W?
  </summary>

  A: The discharge capability of the device is determined by the number of battery packs. If you want to increase the discharge power to 2400W, additional battery packs must be added. Power cannot be increased simply by adjusting parameters.  

  After adding more battery packs, the device’s discharge capability will increase accordingly. Please ensure that the electrical load is properly matched to avoid equipment failure due to overload.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  6. Q: What is the maximum number of SolidFlex 2000 units and SFA1800 battery modules supported by the system? What is the total power limit?
  </summary>

  A:  
  - Maximum configuration: Each SolidFlex 2000 unit can connect up to 5 SFA1800 battery modules. The maximum energy storage capacity per unit is 10.8 kWh (total capacity of 5 SFA1800 modules).  
  - Total discharge power limit: The rated discharge power of a single SolidFlex 2000 is 2400W. The system supports up to 3 SolidFlex 2000 units in a wireless cluster, with a total combined discharge power limit of 7200W (3 × 2400W).
</details>

---

## 5. Connected Devices & System Integration

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. Q: Can the system integrate with other brands of energy storage systems?
  </summary>

  A: Yes. Integration can be achieved through Home Assistant.

  Ensure that both systems are connected to Home Assistant and device authorization and command interfacing are completed.
</details>

---

## 6. Warranty

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
  4. Q: What is the maximum allowable depth of discharge (DOD) under warranty conditions?
  </summary>

  A: Under warranty conditions, the battery supports up to **100% DOD**. For daily use, it is recommended to avoid frequent full discharge.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  5. Q: Does the system automatically limit charge/discharge C-rate to extend battery lifespan?
  </summary>

  A: The system allows manual power adjustment and automatically limits charge/discharge rates based on battery status (such as SOC and temperature) to prevent damage and extend battery life.
</details>