---
title: Cluster Guide
description: Learn how to connect multiple energy storage devices into one cluster system for higher capacity and output power.
---

# Cluster Guide

## 1. What Is a Cluster

A cluster refers to connecting multiple micro energy storage devices into one unified system, allowing them to work together for power supply, energy storage, and energy management.

In a cluster system, one device must be configured as the main unit, which is responsible for system control and coordination. The remaining devices operate as sub units connected to the same cluster. All devices communicate and work together automatically.

After clustering is enabled, both the total output power and total storage capacity of the system increase, making it suitable for higher loads, longer backup duration, or future system expansion.

---

## 2. Why Use a Cluster

A single device has limited power output and storage capacity. When household loads increase or longer backup time is required, clustering can be used to expand system capability.

**Increase Output Power**

Multiple devices can output power simultaneously, allowing the system to support larger loads.

> Example:
> - One SolidFlex 2000 unit can provide up to approximately 2400W inverter output.
> - Two devices in a cluster can provide up to approximately 4800W inverter output.
> - Actual available output power may still be limited by grid conditions, wiring specifications, and local regulations.


**Increase Storage Capacity**

After clustering is enabled, the batteries of all devices work together, significantly extending backup time.

> Example:
> - One SolidFlex 2000 with 5 SFA1800 batteries provides a total battery capacity of 10.8kWh.
> - Two clustered systems provide approximately 21.6kWh total capacity.


**Flexible Expansion**

The system supports gradual expansion. Users can start with a single device and add more devices later according to actual needs, without completing the entire installation at once. This is ideal for phased deployment.

---

## 3. Supported Devices

The following models can be used as main or sub units:

<table>
<thead>
  <tr>
    <th></th>
    <th colspan="2">Centralized Cluster</th>
    <th colspan="2">Coordinated Cluster</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Model</td>
    <td>Main</td>
    <td>Sub</td>
    <td>Main</td>
    <td>Sub</td>
  </tr>
  <tr>
    <td>PowerFlex 2000</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>SolidFlex 2000</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>BK1600</td>
    <td>❌</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>BK1600 Ultra</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
</tbody>
</table>

:::info

- Mixed clustering between SolidFlex 2000 / PowerFlex 2000 and BK1600 / BK1600 Ultra has not been fully validated and is not recommended. However, SolidFlex 2000 and PowerFlex 2000 can operate in the same cluster normally.
- During cluster operation:
  - PV input through the **PV port** is supported
  - Connecting microinverters or loads through the **Backup port** is still under optimization and is not yet fully supported

:::

---

## 4. Cluster Modes

The system supports two cluster modes for different installation environments.

Communication between devices supports the following methods:
- Wi-Fi
- Ethernet
- RS485

Users can choose the most suitable communication method according to the installation environment and network conditions.

### 4.1 Coordinated Cluster

Each device connects independently to the grid and handles its own AC input and output. Devices synchronize data through the communication network, while the main unit coordinates system operation status and power distribution.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="gen1" label="SolidFlex 2000 / PowerFlex 2000" default>
    <img src={require("./img/coordinated_gen2.png").default} width="480" />
  </TabItem>
  <TabItem value="gen2" label="BK1600 / BK1600 Ultra">
    <img src={require("./img/coordinated_gen1.png").default} width="480" />
  </TabItem>
</Tabs>

### 4.2 Centralized Cluster

Sub devices are connected sequentially to the main device through AC power cables. All AC input and output are ultimately centralized through the main device, which handles the overall grid connection and power management.

Connection method:
- The main device connects to the grid through the **GRID IN/OUT** port
- The **Backup** port of the main device connects to the **GRID IN/OUT** port of the first sub device
- If multiple sub devices are used, continue cascading connections through **Backup → GRID IN/OUT**

<Tabs>
  <TabItem value="gen1" label="SolidFlex 2000 / PowerFlex 2000" default>
    <img src={require("./img/centralized_gen2.png").default} width="480" />
  </TabItem>
  <TabItem value="gen2" label="BK1600 / BK1600 Ultra">
    <img src={require("./img/centralized_gen1.png").default} width="480"/>
  </TabItem>
</Tabs>

---

## 5. Cluster Operating Rules

During cluster operation, the system automatically coordinates devices and distributes power without manual intervention.

### 5.1 System Capacity Limits

The system supports up to 3 devices in one cluster:
- 1 main device
- Up to 2 sub devices

### 5.2 Output Capability

Maximum output power in cluster mode:
- Standard loads: 7200W (3 × 2400W)
- With microinverters connected: 10800W (3 × 3600W)

> Note:
> When microinverters or loads are connected through the Backup port during cluster operation, power display accuracy may be affected. This function is still under continuous optimization.

:::danger
Ensure the maximum system output power complies with local electrical and safety regulations.
:::

### 5.3 Power Distribution Behavior

During cluster operation, the system automatically distributes power based on device SOC and load conditions. Therefore:
- Different devices may output different power levels
- Not all devices will participate in output at the same time
- Devices with higher SOC may prioritize supplying the load

Typical system behavior under different load conditions:

| Load Power    | System Behavior |
| ------------- | ---------------- |
| Below 200W    | Only the device with the highest SOC supplies power |
| 200W ~ 500W   | Two devices with higher SOC share the load |
| Above 500W    | All sub devices participate and distribute power based on SOC ratio |

---

## 6. How to Create a Cluster

A cluster can be configured through the INDEVOLT App.

Before starting, make sure:
- All devices support clustering
- All devices are powered on normally

### Step 1: Enter Cluster Settings

On the device details page, tap the <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> icon in the upper-right corner to enter the settings page, then select **Cluster**.

Tap **Create a Cluster** to start creating a cluster.

<img src={require("./img/device_info.png").default} width="240"/>
<img src={require("./img/cluster_device_settings.png").default} width="240"/>
<img src={require("./img/create_cluster.png").default} width="240"/>

### Step 2: Configure Cluster Parameters

On the creation page, configure the basic cluster settings, including the cluster name, cluster mode, and power-related limits.

:::danger
Ensure all configuration parameters comply with local grid requirements and regulations.
:::

<img src={require("./img/creating_cluster.png").default} width="240"/>
<img src={require("./img/cluster_name.png").default} width="240"/>
<img src={require("./img/cluster_mode.png").default} width="240"/>
<img src={require("./img/cluster_output_limit.png").default} width="240"/>
<img src={require("./img/cluster_feed_in_limit.png").default} width="240"/>

### Step 3: Add Main and Sub Devices

In the available device list, press and hold a device card, then drag it into the main or sub area.

<img src={require("./img/cluster_devices.png").default} width="240"/>

### Step 4: Confirm and Save

After confirming that all settings are correct, tap **Save** to complete the cluster configuration.

<img src={require("./img/cluster_created.png").default} width="240"/>

### Step 5: View and Manage the Cluster

After successful configuration, the App automatically enters the cluster details page, where you can view the overall system status, including main/sub relationships, real-time power, and energy strategies.

Tap the <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> icon in the upper-right corner to enter settings, where you can further manage the cluster, such as modifying parameters or removing the cluster relationship.

<img src={require("./img/cluster_info.png").default} width="240"/>
<img src={require("./img/cluster_settings.png").default} width="240"/>