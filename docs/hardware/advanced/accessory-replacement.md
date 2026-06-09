---
title: Accessory Replacement
description: Replace the WiFi+LAN module and migrate device settings and historical data.
---

# Accessory Replacement

This guide applies to the following models:
- PowerFlex 2000
- PowerFlex 2000 Eco
- PowerFlex 3000 AC
- PowerFlex 3000 Hybrid
- SolidFlex 2000
- SolidFlex 2000 Eco
- SolidFlex 3000 AC

## Before You Start

Before starting the replacement, ensure that the package is intact. Open the package and remove all accessories. Verify the quantity and model of each item against the packing list.

<img src={require("./img/packing_list.png").default} width="960"/>

---

## Step 1. Remove the Existing Module

:::warning
Before replacing the module, please ensure that the device is powered off.
:::

**1. Remove the fastening screws**

Use the screwdriver included in the package to remove the six screws securing the module. 

> Note: Keep the screws in a safe place, as they will be reused during installation.

<img src={require("./img/remove_screws.png").default} width="360"/>

**2. Remove the existing module**

Carefully pull the module straight out from the slot.

<img src={require("./img/remove_module.png").default} width="360"/>

**3. Disconnect the communication cable**

Press and hold the locking tab on the connector, then gently unplug the communication cable.

<img src={require("./img/unplug_cable.png").default} width="360"/>

:::tip
After removing the module, check whether the slot is compatible with the screw connectors of the new module.
<img src={require("./img/model_confirmation.png").default} width="360"/>
:::

---

## Step 2. Install the New Module

**1. Connect the communication cable**

Insert the communication cable into the corresponding connector on the new PCB until it is securely connected.

<img src={require("./img/connect_cable.png").default} width="360"/>

**2. Install the new module**

Align the new module with the slot and gently push it into place until it is fully seated.

<img src={require("./img/install_module.png").default} width="360"/>

**3. Secure the module**

Reinstall the six screws removed earlier and tighten them securely using the screwdriver.

<img src={require("./img/fasten_screws.png").default} width="360"/>

**4. Verify the installation**

Check that:

* The module is fully inserted.
* All screws are securely tightened.
* The cover plate is properly secured and not loose.

<img src={require("./img/check_installation.png").default} width="360"/>

**5. Apply the new serial number label**

Cover the original serial number label on the device using the new SN sticker provided in the package. The App will recognize the device using the new serial number.

Ensure that both of the following are properly covered:

- The original label on the top-right side of the device
   <img src={require("./img/cover_sn1.png").default} width="720"/>

- The nameplate label on the side of the device
   <img src={require("./img/cover_sn2.png").default} width="600"/>

---

## Step 3. Update the Device Information in the App

:::tip
Before starting:
- Ensure Bluetooth is enabled on your phone.
- Ensure your device is turned on.
- Keep your phone close to the device throughout the process.
:::

### 1. Update device information

1. In the device settings, tap **Accessory Replacement**. 
2. Scan the QR code on the new accessory.
3. Tap **Next**, review the **Replacement Confirmation** information, and then tap **OK** to continue.
4. Wait for the replacement process to complete.   
   > During this process, the system automatically updates the accessory information and migrates the device settings, including cluster settings, load source settings, linked devices.
5. After the accessory information has been updated successfully, tap **Next** to continue.

<img src={require("./img/accessory_replacement.png").default} width="240"/>
<img src={require("./img/scan_qr_code.png").default} width="240"/>
<img src={require("./img/accessory_info.png").default} width="240"/>
<img src={require("./img/confirm_replacement.png").default} width="240"/>
<img src={require("./img/connect_accessory.png").default} width="240"/>
<img src={require("./img/connect_accessory_success.png").default} width="240"/>

### 2. Migrate historical data

Tap **Start Migration** to migrate historical data.

If you do not want to migrate historical data immediately, tap **Skip**. You can start the migration later from [Replacement History](#4-view-replacement-history).

<img src={require("./img/data_sync.png").default} width="240"/>
<img src={require("./img/skip_data_sync.png").default} width="240"/>

### 3. Reconnect the device to the network

1. Enter the Wi-Fi network name (SSID) and password, then tap **Set Up**.
2. Wait until the network connection is established successfully.

<img src={require("./img/wifi_settings.png").default} width="240"/>
<img src={require("./img/wifi_connected.png").default} width="240"/>

---

## 4. View Replacement History

To view previous replacement records, go to: **Settings > Accessory Replacement**

In **Replacement History**, you can:
- View replacement records, including the replacement time, settings migration status, and historical data migration status.
- Tap **Start Migration** for a specific record to open the Device Migration page. Start historical data migration if it has not yet started.

<img src={require("./img/accessory_replacement.png").default} width="240"/>
<img src={require("./img/replacement_history.png").default} width="240"/>
<img src={require("./img/device_migration.png").default} width="240"/>

:::info
Data migration is performed automatically in the cloud after it has been started. You do not need to stay on the Device Migration page while the migration is in progress.

You can view the migration status and progress at any time in Replacement History.

:::

