---
title: Home Assistant Integration
description: Integrate the INDEVOLT micro energy storage with Home Assistant to enable local monitoring and automation.
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# Home Assistant Integration

## Prerequisite

### 1️⃣ Home Assistant environment

Home Assistant has been installed in accordance with the [official installation guide](https://www.home-assistant.io/installation/).  

### 2️⃣ Same local network

Devices and Home Assistant server are on the same local network.  

### 3️⃣ Obtain the device IP address

Indevolt device is powered on and has obtained an IP address. Choose any one of the following methods to get IP address:

**🧩 Method 1 – Check Router**

Log in to your router. Find the device IP in the connected device list.

**🧩 Method 2 – Check in INDEVOLT App**

Check in App device settings:
<img src={require("./img/select-network.png").default} width="240"/>
<img src={require("./img/view_ip.png").default} width="240"/>

**🧩Method 3: Obtain IP via UDP broadcast**

1. Ensure the device's WiFi network and computer are on the same local area network.  
2. Open a network debugging tool.  
3. Select **UDP** protocol.  
4. Select Local Host Addr.  
5. Set Local Host Port to **10000**.  
6. Click **Open**.  
    <img src={require("./img/udp-settings.png").default} width="120"/>

7. Configure Remote with broadcast address and port: **255.255.255.255:8099.**
    <img src={require("./img/set-udp-remote.png").default} width="480"/>

8. Enter AT command in message box: **AT+IGDEVICEIP**.  
9. Click **Send**.  
    <img src={require("./img/send-at-command.png").default} width="360"/>

10. INDEVOLT devices on the same network will respond with their IP address and serial number (SN).
    <img src={require("./img/udp-message.png").default} width="360"/>

### 4️⃣ Enable Local API

Ensure the Indevolt device local API is enabled. OpenData provides three modes, but this integration only supports the HTTP method.
- HTTP
- HTTP Digest
- HTTPS (Currently unsupported, coming soon)

You can configure the local API in the INDEVOLT App:
<img src={require("./img/profile_page.png").default} width="200"/>
<img src={require("./img/scan_qr_code.png").default} width="200"/>
<img src={require("./img/connect_device.png").default} width="200"/>
<img src={require("./img/device_connected.png").default} width="200"/>
<img src={require("./img/select_local_api.png").default} width="200"/>
<img src={require("./img/local_api.png").default} width="200"/>
   
### 5️⃣ Firmware requirement

Ensure device firmware version meets or exceeds the minimum version listed in the table below.

| Model                       | Minimum applicable firmware version |
| --------------------------- | ----------------------------------- |
| BK1600/BK1600Ultra          | V1.3.0A_R006.072_M4848_00000039     |
| SolidFlex2000/PowerFlex2000 | CMS：V1406.07.002E                  |



## Step 1: Download the Indevolt Integration File {#step1}

1. Access the [GitHub repository](https://github.com/INDEVOLT/homeassistant-indevolt).
2. Click **Code** > **Download ZIP**.  
    <img src={require("./img/download-zip.png").default} width="240"/>

3. Extract the ZIP file to your computer.

## Step 2: Locate the HA configuration directory path {#step2}

- Home Assistant OS：Please ensure the configuration directory exists at `/config`.
- Home Assistant Container：The configuration directory can be uniquely identified by the `configuration.yaml` file.

:::tip

The directory must include the `configuration.yaml` file to proceed. 

```
configuration directory/
└── configuration.yaml
```
:::


## Step 3: Create the Custom Integration Directory {#step3}

1. Navigate to the config directory.
2. Create the `custom_components` directory (if it does not already exist).
```
config directory/
├── custom_components/
└── configuration.yaml
```

:::info
All custom integrations must be placed under the `custom_components` directory. Otherwise, Home Assistant will fail to recognize them.
:::

## Step 4: Add the Integration File​ {#step4}

Copy the entire extracted indevolt folder to the `custom_components` directory.

```
config directory/
└── custom_components/
    ├── indevolt/
       ├── __init__.py
       ├── manifest.json
       ├── ...
```

## Step 5: Restart Home Assistant {#step5}

1. In the Web Interface, navigate to **Settings** > **System**.
   <img src={require("./img/select-ha-settings.png").default} width="720"/>

2. Click the restart icon in the upper right corner.
    <img src={require("./img/click-restart-icon.png").default} width="480"/>

3. Click **Restart Home Assistant**.
    <img src={require("./img/restart-ha.png").default} width="360"/>
   
4. Click **RESTART**.
    <img src={require("./img/click-restart.png").default} width="360"/>
   

## Step 6: Add the Integration to Home Assistant {#step6}

1. After restarting, access the Web Interface and navigate to **Settings** > **Devices & Services**.
   <img src={require("./img/select-device-service.png").default} width="720"/>

2. Click the button in the lower right corner **+ADD INTEGRATION**.
   <img src={require("./img/add-integration.png").default} width="180"/>

3. Search for the Integration **indevolt**.
   <img src={require("./img/search-integration.png").default} width="360"/>

4. Configure Parameters​：
   - **host**: The device IP address can be obtained by checking the router or the companion app.​
   - **scan_interval**: Used to control data update frequency, default: 30 seconds.​

    <img src={require("./img/set-integration.png").default} width="300"/>

5. Click **Submit** to complete the installation.
6. The power module and battery packs will be displayed after installation. Click **Skip and Finish** to complete the setup process.
   - Each power module supports up to 5 battery packs.
   - If no battery pack is connected, the corresponding field will be shown as None.
   - When battery packs are connected, the serial number (SN) of each battery pack will be displayed for identification.
   <img src={require("./img/finish.png").default} width="360"/>


## View Integration​

Select the INDEVOLT integration. Upon successful installation, device and entity information will be displayed.​
  <img src={require("./img/view-integration.png").default} width="360"/>
  <img src={require("./img/view-device.png").default} width="720"/>


## Update Integration​

1. Download the latest version of the integration package.
2. Overwrite the files in the `custom_components`/`indevolt` directory.
3. Click the three-dot menu next to the previously added device and select **Delete**.
    <img src={require("./img/delete-device.png").default} width="720"/>
4. Restart Home Assistant.
5. Click the button **Add Entry** and follow the same device setup process to add the device again.


## Create Automation: Set Real-Time Control

1. Go to **Settings** > **Automations & scenes**.
    <img src={require("./img/automation.png").default} width="720"/>
2. Click the button in the lower right corner **+ Create automation**.
    <img src={require("./img/create-automation1.png").default} width="720"/>
3. Select **Create new automation**.
    <img src={require("./img/create-automation2.png").default} width="360"/>
4. Click **+ Add Trigger** and configure the trigger event based on your requirements.
    <img src={require("./img/new-automation.png").default} width="540"/>
5. Click **+ Add Action** to configure the device action.
6. Search for mode and select Set SolidFlex2000/PowerFlex2000 Work Mode (as an example).
    <img src={require("./img/search-mode.png").default} width="360"/>
7. In the **Target** section, click **+ Choose Device** and select your device from the list.
    <img src={require("./img/choose-target1.png").default} width="720"/>
    <img src={require("./img/choose-target2.png").default} width="360"/>

8. In the **Work Mode** section, choose **Real-Time Control**, then configure **Status**, **Power**, and **Target SOC** as needed.
    <img src={require("./img/set-mode1.png").default} width="360"/>
    <img src={require("./img/set-mode2.png").default} width="360"/>
9. Click **Save** to complete the automation setup.


## FAQ

| ​​Issue                            | ​	​​Solution                                                                                                  |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Integration not appearing in search results | Check the folder path: `custom_components`/`indevolt`                                                         |
| Device connection failure​                  | 1. Verify the IP address is correct.<br />2. Check the device network status.                                 |
| No data available for entity                | ​​	1.Verify device power supply.<br />2. Check device network connectivity.<br />3. Check Home Assistant log error messages. |
