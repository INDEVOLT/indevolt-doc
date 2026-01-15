---
title: Add Devices
description: Add your devices for management and data monitoring.
---

# Add Devices

When you log in for the first time, the app will automatically create a default home named **My Home**, which is used to manage all your devices.

INDEVOLT currently supports the following brands:
- INDEVOLT
- SOLARMAN
- Deye
- EverHome
- Shelly

Different brands or models of devices may have different methods for adding and configuration. During actual operation, please follow the interface guidance and instructions in your App.


## Step 1: Tap “Add Device”

Tap the **Add Device** button, or tap the **+** icon in the top right > **Add Device**.

<img src={require("./img/add_device.png").default} width="240"/>

## Step 2: Select Your Device

:::tip Before you start

1. Turn on your phone’s Bluetooth so the app can connect to the device. If Bluetooth is off, the app will remind you to enable it.  
2. Find the QR code and serial number (SN) on your device.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="scan" label="Method 1: Scan QR Code" default>
  
  1. Tap the scan icon in the top right corner of the app.  
  2. Scan the QR code on your device, or enter the SN manually.

      <img src={require("./img/discover_devices.png").default} width="240"/>
      <img src={require("./img/scan_qr_code.png").default} width="240"/>
      <img src={require("./img/connecting_device.png").default} width="240"/>

  </TabItem>

  <TabItem value="bluetooth" label="Method 2: Bluetooth Discovery">

  :::info
  Bluetooth discovery currently supports SOLARMAN, INDEVOLT, and IZYPOWER devices. Tap **View Devices Supporting Bluetooth Discovery** in the app for more details.
  :::

  1. Make sure Bluetooth is turned on. If it’s off, the app will prompt you to enable it.  
  2. The app will automatically scan and list nearby Bluetooth devices. Select your device based on the product name and SN.

      <img src={require("./img/enable_bluetooth.png").default} width="240"/>
      <img src={require("./img/discover_devices.png").default} width="240"/>
      <img src={require("./img/connecting_device.png").default} width="240"/>

  </TabItem>

  <TabItem value="manual" label="Method 3: Add Manually">

  1. Select the device brand.  
  2. Select the specific model under that brand.  
  3. Scan the QR code on your device or enter the SN manually.

      <img src={require("./img/discover_devices.png").default} width="240"/>
      <img src={require("./img/select_device.png").default} width="240"/>
      <img src={require("./img/scan_qr_code.png").default} width="240"/>
      <img src={require("./img/connecting_device.png").default} width="240"/>

  </TabItem>
</Tabs>

## Step 3: Configure the Network

1. Make sure your phone is connected to your home Wi-Fi, and that the displayed network matches the one you want to use. Enter the Wi-Fi **password**.  
2. If your phone is connected to Wi-Fi but the system cannot detect it, you can manually enter the SSID and password.
3. After confirming everything is correct, tap **Set Up**.
   <img src={require("./img/select_wifi.png").default} width="240"/>

4. Device is added successfully.
   <img src={require("./img/connect_bluetooth.png").default} width="240"/>
   <img src={require("./img/configure_network.png").default} width="240"/>
   <img src={require("./img/wifi_connected.png").default} width="240"/>

5. *(Optional)* You can add linked devices following the same steps. If you want to do this later, tap the **\<** back button in the top left to exit.
   <img src={require("./img/link_device.png").default} width="240"/>

:::info

1. Please use a 2.4G Wi-Fi network during setup. 5G networks are not supported.  
2. After adding a device, it may take a few minutes before data appears in the app.

:::

:::tip

If the setup fails, please check the following and try again:

1. Make sure Wi-Fi and Bluetooth are enabled on your phone.  
2. Ensure your home Wi-Fi has internet access.  
3. Check that your router has not enabled a blacklist/whitelist.  
4. Try reducing the distance between your phone and the device.  
5. Try another Wi-Fi network.  
6. Remove special characters such as ( , ; ‘ ’ = “ ” ` ) from the Wi-Fi name.

:::

## Next Steps

After adding your device, you can:

- View device data in the **[Home](./home.md)** and **[Report](./report.md)** tabs.  
- Manage all devices in the **[Device](./device.md)** tab.  
- Set smart charge/discharge plans in the **[Smart](./smart.md)** tab.
