---
title: Home Assistant Integration
description: Integrate the INDEVOLT micro energy storage with Home Assistant to enable local monitoring and automation.
slug: /home-asssitant

---

# Home Assistant Integration

## Prerequisite {#prerequisite}

✅Home Assistant has been installed in accordance with the [official installation guide](https://www.home-assistant.io/installation/).  

✅Devices and Home Assistant server are on the same local network.  

✅Indevolt device is powered on and has obtained an IP address. Choose any one of the following methods to get IP address:
    - 🧩Method 1: Query via router’s management list;
    - 🧩Method 2: Check in App device settings:
      <img src={require("./img/select-network.png").default} width="240"/>
      <img src={require("./img/view-ip.png").default} width="240"/>
    - 🧩Method 3: Obtain IP via UDP broadcast:

        (1) Ensure the device's WiFi network and computer are on the same local area network.  
        (2) Open a network debugging tool.  
        (3) Select **UDP** protocol.  
        (4) Select Local Host Addr.  
        (5) Set Local Host Port to **10000**.  
        (6) Click **Open**.  
          <img src={require("./img/udp-settings.png").default} width="120"/>
        (7) Configure Remote with broadcast address and port: **255.255.255.255:8099.**
          <img src={require("./img/set-udp-remote.png").default} width="480"/>
        (8) Enter AT command in message box: **AT+IGDEVICEIP**.  
        (9) Click **Send**.  
          <img src={require("./img/send-at-command.png").default} width="360"/>
        (10) INDEVOLT devices on the same network will respond with their IP address and serial number (SN).
          <img src={require("./img/udp-message.png").default} width="360"/>

✅Ensure Indevolt device API is enabled.

    OpenData provides three modes, but this integration only supports the HTTP method.
    - HTTP
    - HTTP+ Digest Authentication
    - HTTPS (Currently unsupported, coming soon)

  You can configure the local API in the INDEVOLT App:
  <img src={require("./img/profile_page.png").default} width="200"/>
  <img src={require("./img/scan_qr_code.png").default} width="200"/>
  <img src={require("./img/connect_device.png").default} width="200"/>
  <img src={require("./img/device_connected.png").default} width="200"/>
  <img src={require("./img/select-local-api.png").default} width="200"/>
  <img src={require("./img/local-api.png").default} width="200"/>
   

✅Ensure device firmware version meets or exceedsthe minimum version listed in the table below.

    | Model                       | Applicable firmware version     |
    | --------------------------- | ------------------------------- |
    | BK1600/BK1600Ultra          | V1.3.0A_R006.072_M4848_00000039 |
    | SolidFlex2000/PowerFlex2000 | V1.3.09_R00D.012_M4801_00000015 |


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
   - **port**: The default port is 8080.​
   - **scan_interval**: Used to control data update frequency, default: 30 seconds.​
   - **device_model**: device model.

    <img src={require("./img/set-integration.png").default} width="300"/>

5. Click **SUBMIT** to complete the installation.


## View Integration​

Select the INDEVOLT integration. Upon successful installation, device and entity information will be displayed.​
  <img src={require("./img/view-integration.png").default} width="360"/>

  <img src={require("./img/view-device.png").default} width="720"/>


## Update Integration​

1. Download the latest version of the integration package.
2. Overwrite the files in the `custom_components`/`indevolt` directory.
3. Restart Home Assistant.
4. The integration will update automatically without requiring reconfiguration.


## FAQ

| ​​Issue                            | ​	​​Solution                                                                                                  |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Integration not appearing in search results | Check the folder path: `custom_components`/`indevolt`                                                         |
| Device connection failure​                  | 1. Verify the IP address is correct.<br />2. Check the device network status.                                 |
| No data available for entity                | ​​	1.Verify device power supply.<br />2. Check device network connectivity.<br />3. Check Home Assistant log error messages. |
