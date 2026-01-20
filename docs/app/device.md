---
title: Device
description: Manage home energy devices and monitor real-time status and data.
---

# Device

The **Device** page displays all energy devices in your home, listing key information such as device SN, online status, and last data update time. Tap the **+** button in the top-right corner to [add a device](./add-device.md).

<img src={require("./img/device.png").default} width="240"/>


## 1. Edit Devices

Tap the **Edit** button at the bottom of the page, select a device, or **long-press** a device card to enter edit mode. The following actions are supported:
- WLAN: Tap **WLAN** to configure the network. The process is the same as [Network Configuration](./add-device.md#step-3-configure-the-network) during device addition.
- Rename: Tap **Rename** to change the device name.
- Delete: Tap **Delete**. The app will show a confirmation popup. After confirming, the device will be removed. Once deleted, you will no longer be able to view its data - please proceed with caution.

<img src={require("./img/edit_device1.png").default} width="240"/>
<img src={require("./img/edit_device2.png").default} width="240"/>


## 2. Device Details

Tap a device card to enter its details page. This page displays general information such as signal strength, SN, real-time data, quick-refresh function (⚡), as well as device-specific parameters and features depending on the device type.

<img src={require("./img/device_info.png").default} width="240"/>


## 3. Statistics

Tap the <img src={require("./img/statistics_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> icon in the top-right corner of the device detail page to enter the Statistics page, where you can view data curves for daily, weekly, monthly, and yearly dimensions.

<img src={require("./img/statistics.png").default} width="240"/>


## 4. Device Settings

Tap the <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> icon in the top-right corner of the device detail page to enter the Settings page. This section includes device name, linked devices, network settings, firmware update, and other device-specific functions.

<img src={require("./img/settings.png").default} width="240"/>

### 4.1 Change Device Name

Tap the **Device Name** field to modify how the device name appears in the app.

<img src={require("./img/change_deivce_name.png").default} width="240"/>


### 4.2 Link Parent Device / Sub-Devices

To simplify data viewing and management, the system allows establishing parent-child relationships between devices:

- **Storage devices** can act as parent devices and add linked sub- devices.
  
    <img src={require("./img/select_link_subdevice.png").default} width="240"/>
    <img src={require("./img/link_subdevice1.png").default} width="240"/>
    <img src={require("./img/link_subdevice2.png").default} width="240"/>  

- **Other device types** can serve as sub-devices linked to a parent device.
  
    <img src={require("./img/select_link_parent_device.png").default} width="240"/>
    <img src={require("./img/link_parent_device1.png").default} width="240"/>
    <img src={require("./img/link_parent_device2.png").default} width="240"/>  

If no devices are available for linking, please click **Add Device** to include the device in your home first.  
<img src={require("./img/link_new_device.png").default} width="240"/>  


### 4.3 Network Settings

Tap **Network Settings** to view the Wi-Fi name the device is connected to and its assigned IP address.

<img src={require("./img/select_network_settings.png").default} width="240"/>
<img src={require("./img/network_settings.png").default} width="240"/>


### 4.4 Firmware Update

Tap **Firmware Update** to view the device’s current firmware version and available updates. If a new version is available, tap **Apply** to upgrade online.

<img src={require("./img/select_fw_update.png").default} width="240"/>
<img src={require("./img/fw_update.png").default} width="240"/>

## 5. Cluster

When multiple energy storage devices are connected in parallel, they are managed and displayed as a unified energy cluster. The cluster is centrally coordinated by a main device, which automatically distributes energy and synchronizes operating modes, feed-in limits, and other settings.
<img src={require("./img/cluster_device_list.png").default} width="240"/>

Tap the cluster card to enter the cluster details page, where you can view the main–sub device relationship, the cluster’s energy management strategy, and real-time power data.
<img src={require("./img/cluster_info.png").default} width="240"/>

Tap the settings icon ⚙ in the upper-right corner of the details page to modify the cluster configuration or disband the cluster.
<img src={require("./img/cluster_settings.png").default} width="240"/>
