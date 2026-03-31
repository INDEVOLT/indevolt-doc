---
title: OpenData API
description: Access local device data and control the INDEVOLT micro energy storage system via standard HTTP APIs.
---

# OpenData API

## 1️⃣ Introduction {#introduction}

OpenData is a lightweight communication framework designed for WiFi-based INDEVOLT IoT devices. Devices connect to local networks via WiFi, supporting both active data push and response to external queries.

**Core Features**

- **Device data acquisition**: Real-time pulling of device data.
- **Device control**: Dynamic adjustment of device parameters and configurations.

**Use Cases**

- Receiving external HTTP query requests.  

  <img src={require("./img/opendata-use-case.png").default} width="240"/>

---

## 2️⃣ Preparations {#preparations}

### Step 1: Install Tools {#install-tools}

> - **[Postman](https://www.getpostman.com/) / cURL**: Used for invoking HTTP APIs to retrieve device data or update device configurations.
> - Any **network debugging tool** (e.g., [NetAssist](https://www.cmsoft.cn/resource/102.html)): Used for receiving UDP broadcasts.

### Step 2: Enable API {#enable-api}

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Device APIs are disabled by default and must be enabled before use. OpenData provides three modes:
> - [HTTP](#http)
> - [HTTP Digest](#http-digest)
> - HTTPS (Currently unsupported, coming soon)
>
> You can configure the **Local API** in the INDEVOLT App:
> - **Device is online**: It is recommended to use **Cloud Configuration**, which is simpler to operate  
> - **Device is not online**: You can use **Local Bluetooth Configuration** to connect directly to the device and complete the setup
> 
> <Tabs>
>   <TabItem value="cloud" label="Cloud" default>
>     <img src={require("./img/select_device.png").default} width="200"/>
>     <img src={require("./img/device_info.png").default} width="200"/>
>     <img src={require("./img/select_local_api.png").default} width="200"/>
>     <img src={require("./img/local_api.png").default} width="200"/>
>   </TabItem>
>   <TabItem value="local" label="Local Bluetooth">
>     <img src={require("./img/profile_page.png").default} width="200"/>
>     <img src={require("./img/scan_qr_code.png").default} width="200"/>
>     <img src={require("./img/connect_device.png").default} width="200"/>
>     <img src={require("./img/device_connected.png").default} width="200"/>
>     <img src={require("./img/select_local_api2.png").default} width="200"/>
>     <img src={require("./img/local_api2.png").default} width="200"/>
>   </TabItem>
> </Tabs>
> 

### Step 3: Check Firmware Version {#check-firmware}

> If it is lower than the minimum version listed in the table below, please update the firmware.
> 
> | Model                       | Applicable firmware version               |
> | --------------------------- | ----------------------------------------- |
> | BK1600/BK1600Ultra          | V1.3.0A_R006.072_M4848_00000039           |
> | SolidFlex2000/PowerFlex2000 | CMS：CMS：V1406.07.002E                   |
>
> You can check the device firmware version in the INDEVOLT app. 
> 
> <Tabs>
>   <TabItem value="cloud" label="Cloud" default>
>     <img src={require("./img/select_device.png").default} width="200"/>
>     <img src={require("./img/device_info.png").default} width="200"/>
>     <img src={require("./img/select_firmware2.png").default} width="200"/>
>     <img src={require("./img/view_firmware_version2.png").default} width="200"/>
>   </TabItem>
>   <TabItem value="local" label="Local Bluetooth">
>     <img src={require("./img/profile_page.png").default} width="200"/>
>     <img src={require("./img/scan_qr_code.png").default} width="200"/>
>     <img src={require("./img/connect_device.png").default} width="200"/>
>     <img src={require("./img/device_connected.png").default} width="200"/>
>     <img src={require("./img/select_firmware.png").default} width="200"/>
>     <img src={require("./img/view_firmware_version.png").default} width="200"/>
>   </TabItem>
> </Tabs>

 
### Step 4: Obtain IP Address {#obtain-ip}

> Choose any one of the following methods:
> - 🧩Method 1: Query via router’s management list;
> - 🧩Method 2: Check in App device settings:
>   <img src={require("./img/select-network.png").default} width="240"/>
>   <img src={require("./img/view_ip.png").default} width="240"/>
> - 🧩Method 3: Obtain IP via UDP broadcast:
> 
>     (1) Ensure the device's WiFi network and computer are on the same local area network.  
>     (2) Open a network debugging tool.  
>     (3) Select **UDP** protocol.  
>     (4) Select Local Host Addr.  
>     (5) Set Local Host Post to **10000**.  
>     (6) Click **Open**.  
>       <img src={require("./img/udp-settings.png").default} width="120"/>
>     (7) Configure Remote with broadcast address and port: **255.255.255.255:8099.**
>       <img src={require("./img/set-udp-remote.png").default} width="480"/>
>     (8) Enter AT command in message box: **AT+IGDEVICEIP**.  
>     (9) Click **Send**.  
>       <img src={require("./img/send-at-command.png").default} width="360"/>
>     (10) INDEVOLT devices on the same network will respond with their IP address and serial number (SN).
>       <img src={require("./img/udp-message.png").default} width="360"/>

---

## 3️⃣ HTTP Usage {#http}

### 3.1 Request Structure {#request-structure}

**Request Methods**

| Method | Description                                          |
| ------ | ---------------------------------------------------- |
| GET    | Requests the server to return specified resources.   |
| POST   | Requests the server to perform specified operations. |

**Request Address**

```
http://{IP_ADDRESS}:8080/rpc/{API}
```
where
- `{IP_ADDRESS}`: Device IP address.
- `{API}`: HTTP API to be invoked.

**Request Example**

- Retrieve device data:

  ```
  POST http://192.168.31.213:8080/rpc/Indevolt.GetData?config={"t":[1664,1665]}
  ```

**cURL command Example**

- Retrieve battery SOC:

  ```
  curl -g -X POST -H "Content-Type: application/json" "http://192.168.1.75:8080/rpc/Indevolt.GetData?config={\"t\":[6002]}"
  ```

### 3.2 Errors {#errors}

| Status code | Description                | Explanation                                                                                                                         |
| ----------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 400         | Bad Request                | The server cannot understand the format of the request; the client should modify the request and try again.                         |
| 401         | Unauthorized               | The request requires authentication; the client needs to provide valid credentials.                                                 |
| 403         | Forbidden                  | The server understands the request but refuses to execute it, usually due to permission issues.                                     |
| 404         | Not Found                  | The server cannot find the requested resource, possibly because the resource does not exist or has been deleted.                    |
| 405         | Method Not Allowed         | The requested method is incompatible with the resource, for example, performing a write operation on a read-only resource.          |
| 408         | Request Timeout            | The server times out while waiting for the request; the client can retry later.                                                     |
| 409         | Conflict                   | The request conflicts with the current state of the resource, for example, multiple users editing the same resource simultaneously. |
| 410         | Gone                       | The requested resource has been permanently deleted and there is no new address.                                                    |
| 500         | Internal Server Error      | The server encounters an unknown error and cannot complete the request.                                                             |
| 501         | Not Implemented            | The server does not support the requested method and cannot execute it.                                                             |
| 502         | Bad Gateway                | The server, acting as a gateway or proxy, received an invalid response from the upstream server.                                    |
| 503         | Service Unavailable        | The server is currently unable to handle the request, possibly due to overload or maintenance.                                      |
| 504         | Gateway Timeout            | The server, acting as a gateway or proxy, did not receive a timely response from the upstream server.                               |
| 505         | HTTP Version Not Supported | The server does not support the HTTP version used in the request.                                                                   |

---

## 4️⃣ HTTP Digest {#http-digest}

Digest Authentication verifies user identity in network communications, preventing plaintext password transmission.

In HTTP + Digest mode:
- New or factory-reset devices must first use the `User.SetConfig` interface to modify the default password.
- Other APIs become accessible only after successful password modification.

**Required tools**

- ASCII to hexadecimal converter
- Hexadecimal to base64 converter
- AES_GCM encryption tool

**Password modification example**

1. Convert the new password, original password, and random number from string to hexadecimal.


|                   | ASCII string | Hexadecimal                                                                      |
| ----------------- | ------------ | -------------------------------------------------------------------------------- |
| New password      | qwertyui     | 71 77 65 72 74 79 75 69                                                          |
| Original password | qazwsxed     | 71 61 7a 77 73 78 65 64 00 00 00 00 00 00 00 00 <br />(Supplement 0 to 16 bytes) |
| Random number     | 123456       | 31 32 33 34 35 36 00 00 00 00 00 00 <br />(Supplement 0 to 12 bytes)             |

2. Use AES_GCM encryption tool to encrypt, fill in the corresponding information as follows.
   <img src={require("./img/aes-gcm-info.png").default} width="480"/>


3. Convert ciphertext and tag from hexadecimal to base64.

|            | Hexadecimal                                     | Base64                   |
| ---------- | ----------------------------------------------- | ------------------------ |
| Ciphertext | 4e b2 90 67 54 02 d4 c4                         | TrKQZ1QC1MQ=             |
| Tag        | cf 0b d0 4e 37 a0 e6 bb cb 74 1b cb ce ab 72 9a | zwvQTjeg5rvLdBvLzqtymg== |

4. Complete the digest authentication fields and send the `User.SetConfig` request with the new password. The result returns true, indicating successful modification.

     <span className="http-method-badge">POST</span> **`http://{IP_ADDRESS}:8080/rpc/User.SetConfig?config={"Password":"{PASSWORD}"}`**
     
     where
     - `{IP_ADDRESS}`：Device IP address.
     - `{PASSWORD}`：Base64-encoded ciphertext encrypted with AES128-GCM.

   <img src={require("./img/digest-auth.png").default} width="720"/>

| Parameter    | Type                   | Description                                                                                                                                                                                                                                      | Attribute |
| ------------ | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Username     |  String       | Default `opend`                                                                                                                                                                                                                               | required  |
| Password     | String       | Default device key. <br /><br />- Using the **default password** can only request the **`User.SetConfig`** interface to change the password. <br />- Once the password is modified, using the **modified password** can request other interfaces. | required  |
| Realm        | String       | - If calling the **`User.SetConfig`** interface to update the password, you need to pass the **AES128-GCM tag** value. <br />- If calling **other interfaces** in Base64 format, you may use a **random value**.                                       | required  |
| Nonce        | Default type of Digest | Random values can be used                                                                                                                                                                                                                     | required  |
| Algorithm    | Default type of Digest | MD5                                                                                                                                                                                                                                           | required  |
| qop          | Default type of Digest | auth                                                                                                                                                                                                                                          | required  |
| Nonce Count  | Default type of Digest | Random values can be used                                                                                                                                                                                                                     | required  |
| Client Nonce | Default type of Digest | Random values can be used                                                                                                                                                                                                                     | required  |

---

## 5️⃣ API {#api}

| Component               | Description                                                      |
| ----------------------- | ---------------------------------------------------------------- |
| [`Indevolt`](#indevolt) | Retrieve device data and control device.                         |
| [`Sys`](#sys)           | Obtain CMS (Communication Management System) information. |

---

## 6️⃣ `Indevolt` {#indevolt}

`Indevolt` allows you to retrieve real-time device data and send control commands by making standard HTTP requests.

### 6.1 Retrieve device data {#retrieve-data}

:::note Example

- Request

  <span className="http-method-badge">POST</span> **`http://192.168.31.213:8080/rpc/Indevolt.GetData?config={"t":[1664,1665]}`**

- Response

  ```json
  {
   "1664":100,
   "1665":251
  }
  ```  

:::



> **Function: `Indevolt.GetData`**
> 
> **Parameter**
> 
> | Parameter | Type   | Description                                                                              |
> | --------- | ------ | ---------------------------------------------------------------------------------------- |
> | config    | Object | `t`: The request address for data, specified in the `cJSON Point` column of the table below. |
> 
> **Return value**
> 
> Device data in JSON format.
>
> <Tabs>
>   <TabItem value="sf2000" label="SolidFlex2000/PowerFlex2000" default>
> 
>   <table><thead>
>     <tr>
>       <th>cJSON Point</th>
>       <th>cJSON Value Type</th>
>       <th>Unit</th>
>       <th>Point Description</th>
>       <th>Enum Definition</th>
>       <th>API</th>
>       <th>Annotation</th>
>     </tr></thead>
>   <tbody>
>     <tr>
>       <td colspan="7" style={{ textAlign: 'center' }}>SN </td>
>     </tr>
>     <tr>
>       <td>0</td>
>       <td>String</td>
>       <td></td>
>       <td>Device SN</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td colspan="7" style={{ textAlign: 'center' }}>Firmware Version Information</td>
>     </tr>
>     <tr>
>       <td>1118</td>
>       <td>String</td>
>       <td></td>
>       <td>PG2000Series EMS</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>1109</td>
>       <td>String</td>
>       <td></td>
>       <td>PG2000Series BMS-MB</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td> 1119 </td>
>       <td>String</td>
>       <td></td>
>       <td>PG2000Series PCS </td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>1120</td>
>       <td>String</td>
>       <td></td>
>       <td>PG2000Series DCDC </td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td> 1136</td>
>       <td>String</td>
>       <td></td>
>       <td>SFA/PFA DCDC1 </td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>1137 </td>
>       <td>String</td>
>       <td></td>
>       <td>SFA/PFA BMS1 </td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>1138 </td>
>       <td>String</td>
>       <td></td>
>       <td>SFA/PFA DCDC2 </td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>1139 </td>
>       <td>String</td>
>       <td></td>
>       <td> SFA/PFA BMS2</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td> 1140</td>
>       <td>String</td>
>       <td></td>
>       <td> SFA/PFA DCDC3</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>1141 </td>
>       <td>String</td>
>       <td></td>
>       <td>SFA/PFA BMS3 </td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>1142 </td>
>       <td>String</td>
>       <td></td>
>       <td> SFA/PFA DCDC4</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>1143</td>
>       <td>String</td>
>       <td></td>
>       <td>SFA/PFA BMS4 </td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>       <tr>
>       <td>1098 </td>
>       <td>String</td>
>       <td></td>
>       <td> SFA/PFA DCDC5</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>1099</td>
>       <td>String</td>
>       <td></td>
>       <td>SFA/PFA BMS5 </td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td colspan="7" style={{ textAlign: 'center' }}>System Operating Information</td>
>     </tr>
>     <tr>
>       <td>7101</td>
>       <td>Enum</td>
>       <td></td>
>       <td>Working Mode</td>
>       <td>1: Self-consumed Prioritized<br />4: Real-time Control<br />5: Charge/Discharge Schedule</td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>142</td>
>       <td>Num</td>
>       <td>kWh</td>
>       <td>Rated Capacity</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>2618</td>
>       <td>Num</td>
>       <td></td>
>       <td>Grid Charging</td>
>       <td>1000: Disable<br />1001: Enable</td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>11009</td>
>       <td>Num</td>
>       <td>W</td>
>       <td>Inverter Input Limit</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>2101</td>
>       <td>Num</td>
>       <td>W</td>
>       <td>Total AC Input Power</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>2108</td>
>       <td>Num</td>
>       <td>W</td>
>       <td>Total AC Output Power</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>11010</td>
>       <td>Num</td>
>       <td>W</td>
>       <td>Feed-in Power Limit</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>11011</td>
>       <td>Num</td>
>       <td>W</td>
>       <td>Max AC Output Power</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>680</td>
>       <td>Num</td>
>       <td></td>
>       <td>Bypass</td>
>       <td>0: Disable<br />1: Enable </td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>11039</td>
>       <td>Num</td>
>       <td></td>
>       <td>Bypass mode</td>
>       <td>0: Eps<br />1: M-Inv</td>
>       <td>`Indevolt.GetData`</td>
>       <td>Automatically switch according to forward and reverse current</td>
>     </tr>
>     <tr>
>       <td>6105</td>
>       <td>Num</td>
>       <td>%</td>
>       <td>Backup SOC</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>7171</td>
>       <td>Num</td>
>       <td></td>
>       <td>Light</td>
>       <td>0: Disable<br />1: Enable </td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>8646</td>
>       <td>Num</td>
>       <td>Day</td>
>       <td>Battery Calibration: Cycle </td>
>       <td>0-60 <br />0: OFF</td>
>       <td>`Indevolt.GetData`</td>
>       <td>Operating time without full charge</td>
>     </tr>
>     <tr>
>       <td>8647</td>
>       <td>Num</td>
>       <td>Time</td>
>       <td>Battery Calibration: Start Time</td>
>       <td> DEC-->HEX<br />H: hour<br />L: minute </td>
>       <td>`Indevolt.GetData`</td>
>       <td>e.g.: 256-->0100<br /><br />01(HEX-H)-->01h<br />00(HEX-L)-->00min</td>
>     </tr>
>     <tr>
>       <td>2802</td>
>       <td>Num</td>
>       <td>W</td>
>       <td>Battery Calibration: Charging power (AC)</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td colspan="7" style={{ textAlign: 'center' }}>Cluster Information</td>
>     </tr>
>     <tr>
>       <td>606</td>
>       <td>Enum</td>
>       <td></td>
>       <td>Master-slave identification</td>
>       <td>1000: Master<br />1001: Slave<br />1002: None</td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td colspan="7" style={{ textAlign: 'center' }}>Bypass Power</td>
>     </tr>
>     <tr>
>       <td>667</td>
>       <td>Float</td>
>       <td>W</td>
>       <td>Bypass power</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td>Real-time power flowing through the bypass path.<br/>- Grid-tied: power may come from the microinverter or be supplied directly to loads<br/>- Off-grid: power is directly supplied to loads</td>
>     </tr>
>     <tr>
>       <td colspan="7" style={{ textAlign: 'center' }}>Electrical Energy Information</td>
>     </tr>
>     <tr>
>       <td>2107</td>
>       <td>Num</td>
>       <td>kWh</td>
>       <td>Total AC Input Energy</td>
>       <td>  </td>
>       <td>`Indevolt.GetData`</td>
>       <td>Total energy imported from the grid. This energy can be used to charge the battery or directly supply loads through bypass.</td>
>     </tr>
>     <tr>
>       <td>2104</td>
>       <td>Num</td>
>       <td>kWh</td>
>       <td>Total AC Output Energy</td>
>       <td>  </td>
>       <td>`Indevolt.GetData`</td>
>       <td>Comprehensive electrical energy, including (DC+AC+Bypass)</td>
>     </tr>
>     <tr>
>       <td>11035</td>
>       <td>Num</td>
>       <td>Wh</td>
>       <td>Daily bypass M-inv input energy</td>
>       <td>  </td>
>       <td>`Indevolt.GetData`</td>
>       <td>Daily electrical energy of micro-inverter input for grid-connected access</td>
>     </tr>
>     <tr>
>       <td>11034</td>
>       <td>Num</td>
>       <td>Wh</td>
>       <td>Total bypass M-inv input energy</td>
>       <td>  </td>
>       <td>`Indevolt.GetData`</td>
>       <td>Total energy coming from the microinverter. This is only available in grid-tied mode, when the system is connected to a microinverter.</td>
>     </tr>
>     <tr>
>     <td>11037</td>
>       <td>Num</td>
>       <td> KWh</td>
>       <td>Daily off-grid bypass output energy</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td>Daily electrical energy of off - grid bypass discharge</td>
>     </tr>
>     <tr>
>       <td>2105</td>
>       <td>Num</td>
>       <td> KWh</td>
>       <td>Total off-grid bypass output energy</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td>Total electrical energy of off-grid bypass discharge</td>
>     </tr>
>     <tr>
>       <td>9285</td>
>       <td>Num</td>
>       <td> Wh</td>
>       <td>Daily bypass output energy</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td>Daily electrical energy of bypass discharge (grid-connected + off-grid)</td>
>     </tr>
>     <tr>
>         <td>9284</td>
>         <td>Num</td>
>         <td>Wh</td>
>         <td>Total bypass output energy</td>
>         <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td>Total electrical energy of bypass discharge (grid-connected + off-grid)</td>
>     </tr>
>     <tr>
>       <td>1502</td>
>       <td>Num</td>
>       <td>kWh</td>
>       <td>Daily PV Generation</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>1505</td>
>       <td>Num</td>
>       <td>Wh</td>
>       <td>Cumulative Production</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>6004</td>
>       <td>Num</td>
>       <td>kWh</td>
>       <td>Battery Daily Charging Energy</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>6005</td>
>       <td>Num</td>
>       <td>kWh</td>
>       <td>Battery Daily Discharging Energy</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>6006</td>
>       <td>Num</td>
>       <td>kWh</td>
>       <td>Battery Total Charging Energy</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>6007</td>
>       <td>Num</td>
>       <td>kWh</td>
>       <td>Battery Total Discharging Energy</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td colspan="7" style={{ textAlign: 'center' }}>Electricity Meter Status</td>
>     </tr>
>     <tr>
>       <td>7120</td>
>       <td>Enum</td>
>       <td></td>
>       <td>Meter Connection Status</td>
>       <td>1000: Enable<br />1001: Disable</td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>11016</td>
>       <td>Float</td>
>       <td>W</td>
>       <td>Meter Power</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td colspan="7" style={{ textAlign: 'center' }}>Grid Information</td>
>     </tr>
>     <tr>
>       <td>2600</td>
>       <td>Num</td>
>       <td>V</td>
>       <td>Grid Voltage</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>2612</td>
>       <td>Num</td>
>       <td>Hz</td>
>       <td>Grid Frequency</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td colspan="7" style={{ textAlign: 'center' }}>Battery Pack Operating Parameters</td>
>     </tr>
>     <tr>
>       <td>6001</td>
>       <td>Enum</td>
>       <td> </td>
>       <td>Battery Charge/Discharge State</td>
>       <td>1000: Static<br />1001: Charging<br />1002: Discharging</td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>6000</td>
>       <td>Num</td>
>       <td>W</td>
>       <td>Battery Power</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>6002</td>
>       <td>Num</td>
>       <td>%</td>
>       <td>Battery SOC Total</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9008</td>
>       <td>String</td>
>       <td> </td>
>       <td>Batt SN-MB</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9000</td>
>       <td>Num</td>
>       <td>%</td>
>       <td>Batt SOC-MB</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9004</td>
>       <td>Num</td>
>       <td>V</td>
>       <td>Batt V-MB</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9013</td>
>       <td>Num</td>
>       <td>A</td>
>       <td>Batt I-MB</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9012</td>
>       <td>Num</td>
>       <td>℃</td>
>       <td>Batt Temp-MB</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9009</td>
>       <td>Num</td>
>       <td>V</td>
>       <td>Batt Cell1 V-MB</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9011</td>
>       <td>Num</td>
>       <td>V</td>
>       <td>Batt Cell2 V-MB</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9032</td>
>       <td>String</td>
>       <td> </td>
>       <td>Batt SN-Pack1</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9016</td>
>       <td>Num</td>
>       <td>%</td>
>       <td>Batt SOC-Pack1</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9020</td>
>       <td>Num</td>
>       <td>V</td>
>       <td>Batt V-Pack1</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>19173</td>
>       <td>Num</td>
>       <td>A</td>
>       <td>Batt I-Pack1</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9030</td>
>       <td>Num</td>
>       <td>℃</td>
>       <td>Batt Temp-Pack1</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9021</td>
>       <td>Num</td>
>       <td>V</td>
>       <td>Batt Cell1 V-Pack1</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9023</td>
>       <td>Num</td>
>       <td>V</td>
>       <td>Batt Cell2 V-Pack1</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9051</td>
>       <td>String</td>
>       <td> </td>
>       <td>Batt SN-Pack2</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9035</td>
>       <td>Num</td>
>       <td>%</td>
>       <td>Batt SOC-Pack2</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9039</td>
>       <td>Num</td>
>       <td>V</td>
>       <td>Batt V-Pack2</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>19174</td>
>       <td>Num</td>
>       <td>A</td>
>       <td>Batt I-Pack2</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9049</td>
>       <td>Num</td>
>       <td>℃</td>
>       <td>Batt Temp-Pack2</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9040</td>
>       <td>Num</td>
>       <td>V</td>
>       <td>Batt Cell1 V-Pack2</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9042</td>
>       <td>Num</td>
>       <td>V</td>
>       <td>Batt Cell2 V-Pack2</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9070</td>
>       <td>String</td>
>       <td> </td>
>       <td>Batt SN-Pack3</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9054</td>
>       <td>Num</td>
>       <td>%</td>
>       <td>Batt SOC-Pack3</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9058</td>
>       <td>Num</td>
>       <td>V</td>
>       <td>Batt V-Pack3</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>19175</td>
>       <td>Num</td>
>       <td>A</td>
>       <td>Batt I-Pack3</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9068</td>
>       <td>Num</td>
>       <td>℃</td>
>       <td>Batt Temp-Pack3</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9059</td>
>       <td>Num</td>
>       <td>V</td>
>       <td>Batt Cell1 V-Pack3</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9061</td>
>       <td>Num</td>
>       <td>V</td>
>       <td>Batt Cell2 V-Pack3</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9165</td>
>       <td>Num</td>
>       <td> </td>
>       <td>Batt SN-Pack4</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9149</td>
>       <td>Num</td>
>       <td>%</td>
>       <td>Batt SOC-Pack4</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9153</td>
>       <td>Num</td>
>       <td>V</td>
>       <td>Batt V-Pack4</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>19176</td>
>       <td>Num</td>
>       <td>A</td>
>       <td>Batt I-Pack4</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9163</td>
>       <td>Num</td>
>       <td>℃</td>
>       <td>Batt Temp-Pack4</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9154</td>
>       <td>Num</td>
>       <td>V</td>
>       <td>Batt Cell1 V-Pack4</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9156</td>
>       <td>Num</td>
>       <td>V</td>
>       <td>Batt Cell2 V-Pack4</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9218</td>
>       <td>String</td>
>       <td> </td>
>       <td>Batt SN-Pack5</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9202</td>
>       <td>Num</td>
>       <td>%</td>
>       <td>Batt SOC-Pack5</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9206</td>
>       <td>Num</td>
>       <td>V</td>
>       <td>Batt V-Pack5</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>19177</td>
>       <td>Num</td>
>       <td>A</td>
>       <td>Batt I-Pack5</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9216</td>
>       <td>Num</td>
>       <td>℃</td>
>       <td>Batt Temp-Pack5</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9219</td>
>       <td>Num</td>
>       <td>V</td>
>       <td>Batt Cell1 V-Pack5</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>9222</td>
>       <td>Num</td>
>       <td>V</td>
>       <td>Batt Cell2 V-Pack5</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td colspan="7" style={{ textAlign: 'center' }}>PV Operating Parameters</td>
>     </tr>
>     <tr>
>       <td>1501</td>
>       <td>Num</td>
>       <td>W</td>
>       <td>Total DC Output Power</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>1632</td>
>       <td>Num</td>
>       <td>A</td>
>       <td>DC Input Current 1</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>1600</td>
>       <td>Num</td>
>       <td>V</td>
>       <td>DC Input Voltage 1</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>1664</td>
>       <td>Num</td>
>       <td>W</td>
>       <td>DC Input Power 1</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>1633</td>
>       <td>Num</td>
>       <td>A</td>
>       <td>DC Input Current 2</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>1601</td>
>       <td>Num</td>
>       <td>V</td>
>       <td>DC Input Voltage 2</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>1665</td>
>       <td>Num</td>
>       <td>W</td>
>       <td>DC Input Power 2</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>1634</td>
>       <td>Num</td>
>       <td>A</td>
>       <td>DC Input Current 3</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>1602</td>
>       <td>Num</td>
>       <td>V</td>
>       <td>DC Input Voltage 3</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>1666</td>
>       <td>Num</td>
>       <td>W</td>
>       <td>DC Input Power 3</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>1635</td>
>       <td>Num</td>
>       <td>A</td>
>       <td>DC Input Current 4</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>1603</td>
>       <td>Num</td>
>       <td>V</td>
>       <td>DC Input Voltage 4</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>     <tr>
>       <td>1667</td>
>       <td>Num</td>
>       <td>W</td>
>       <td>DC Input Power 4</td>
>       <td></td>
>       <td>`Indevolt.GetData`</td>
>       <td></td>
>     </tr>
>   </tbody>
>   </table>
>
>  </TabItem>
>  <TabItem value="bk1600" label="BK1600/BK1600Ultra">
>
> 
> 
>    | cJSON Point | cJSON Value Type | Unit | Point Description | Enum Definition |API	|
>    | ----------- | ---------------- | ---- | ----------------- | --------------- |-|
>    | 0           | Float            |      | Device SN         |                 |`Indevolt.GetData`|
>    |  7101       | Enum             |      | Working mode      | 0: Outdoor Portable<br />1: Self-consumed Prioritized<br />5: Charge/Discharge Schedule |`Indevolt.GetData`|
>    |   1664      |    Float         |   W    |     DC Input Power1   |                 |`Indevolt.GetData`|
>    |   1665      |    Float         |   W    |     DC Input Power2   |                 |`Indevolt.GetData`|
>    |   2108      |    Float         |   W    |     Total AC Output Power   |                 |`Indevolt.GetData`|
>    |   1502      |    Float         |   kWh    |   Daily Production     |                 |`Indevolt.GetData`|
>    |   1505      |    Float         |0.001kWh |    Cumulative Production    |                 |`Indevolt.GetData`|
>    |   2101      |    Float         |   W    |     Total AC Input Power   |                 |`Indevolt.GetData`|
>    |   2107      |    Float         |   kWh    |   Total AC Input Energy     |                 |`Indevolt.GetData`|
>    |   1501      |    Float         |   W    |     Total DC Output Power   |                 |`Indevolt.GetData`|
>    |   6000      |    Float         |   W    |     Battery Power   |                 |`Indevolt.GetData`|
>    |   6001      |    Enum          |       |      Battery Charge/Discharge State  |  1000: Static<br />1001: Charging<br />1002: Discharging  |`Indevolt.GetData`|
>    |   6002      |    Float         |   %    |     Battery SOC   |                 |`Indevolt.GetData`|
>    |   6105      |    Float         |   %    |     Emergency power supply   |                 |`Indevolt.GetData`|
>    |   6004      |    Float         |   kWh    |   Battery Daily Charging Energy     |                 |`Indevolt.GetData`|
>    |   6005      |    Float         |   kWh    |   Battery Daily Discharging Energy     |                 |`Indevolt.GetData`|
>    |   6006      |    Float         |   kWh    |   Battery Total Charging Energy     |                 |`Indevolt.GetData`|
>    |   6007      |    Float         |   kWh    |   Battery Total Discharging Energy     |                 |`Indevolt.GetData`|
>    |   7120      |    Enum          |       |      Meter Connection Status  |   1000: Enable<br />1001: Disable |`Indevolt.GetData`|
>    |   21028     |    Float         |   W    |     Meter Power   |                 |`Indevolt.GetData`|
> 
>   </TabItem>
> </Tabs>


### 6.2 Control device {#control-device}


:::note Example: Set working mode

-  Request 

    <span className="http-method-badge">POST</span> **`http://192.168.31.213:8080/rpc/Indevolt.SetData?config={"f":16,"t":47005,"v":[4]}`**

- Response

  ```json
  {"result": true}
  ```

:::


:::note Example: Set discharging state, power and SOC

- Request

  <span className="http-method-badge">POST</span> **`http://192.168.31.213:8080/rpc/Indevolt.SetData?config={"f":16,"t":47015,"v":[2,700,5]}`**

- Response

  ```json
  {"result": true}
  ```
:::

> **Function: `Indevolt.SetData`**
> 
> **Parameter**
> 
> | Parameter | Type   | Description        |
> | --------- | ------ | ----------------- |
> | config    | Object | `f`: function code, **16** by default;<br />`t`: register address, see the **`cJSON Point`** column in the table below;<br />`v`: write value, see the **`Value`** column in the table below. |
> 
> <Tabs>
>   <TabItem value="sf2000" label="SolidFlex2000/PowerFlex2000" default>
>     | cJSON Point | cJSON Value Type | Unit | Point Description    | Value                                 |API|
>     | ----------- | ---------------- | ---- | -------------------- | --------------------------------------|---|
>     | 47005       | Enum             |      | Mode Setting| 1: Self-consumed Prioritized<br />4: Real-time control<br />5: Charge/Discharge Schedule |`Indevolt.SetData`|
>     | 47015       | UINT             |      | State Setting (Only available in real-time control)| 0: Standby<br />1: Charging<br />2: Discharging     |`Indevolt.SetData`|
>     | 47016       | INT              | W    | Power Setting (Only available in real-time control)| MAX Charging: 50–2400<br />MAX Discharging: 50–2400    |`Indevolt.SetData`|
>     | 47017       | UINT             | %    | SOC Setting (Only available in real-time control)| 5-100         |`Indevolt.SetData`|
>     | 1147        | INT              | W    | Max AC Output Power Setting|  50-2400                                  |`Indevolt.SetData`|
>     | 1146        | INT              | W    | Feed-in Power Limit Setting|  50-2400                                  |`Indevolt.SetData`|
>     | 1143        | UINT             |      | Grid Charging Setting| 0: Disable<br />1: Enable                       |`Indevolt.SetData`|
>     | 1138        | INT              | W    | Inverter Input Limit Setting| 100-2400                                 |`Indevolt.SetData`|
>     | 1           | Enum             |      | Load Setting|    1: Smart Plug<br />2: Meter<br />3: Key Load<br />4: Custom     |`Indevolt.SetData`|
>     | 7266        | Enum             |      | Bypass Setting| 0: Disable<br />1: Enable                                        |`Indevolt.SetData`|
>     | 1142        | INT              | %    | Backup SOC Setting|                                                              |`Indevolt.SetData`|
>     | 7265        | Enum             |      | Light Setting| 0: Disable<br />1: Enable                                         |`Indevolt.SetData`|
> 
>   </TabItem>
>   <TabItem value="bk1600" label="BK1600/BK1600Ultra">
>     | cJSON Point | cJSON Value Type | Unit | Point Description | Value                                                                                    |API|
>     | ----------- | ---------------- | ---- | ----------------- | ---------------------------------------------------------------------------------------- |---|
>     | 47005       | Enum             |      | Mode              | 1: Self-consumed Prioritized<br />2: Charge/discharge Schedule<br />4: Real-time Control |`Indevolt.SetData`|
>     | 47015       | UINT             |      | State             | 0: Standby<br />1: Charging<br />2: Discharging                                          |`Indevolt.SetData`|
>     | 47016       | INT              | W    | Power             | Charging: 0-1200<br />Discharging: 0-800                                                 |`Indevolt.SetData`|
>     | 47017       | UINT             | %    | SOC               | 0-100                                                                                    |`Indevolt.SetData`|
>     
>   </TabItem>
> </Tabs>
> 
> 
> :::info
> In real-time control mode, device charging/discharging can be controlled by simultaneously writing state, power, and SOC values.
> :::
> 
> **Return value**
> 
> | Parameter | Type | Description                        |
> | --------- | ---- | ---------------------------------- |
> | `result`    | Bool | `true`: success; `false`: failure. |

---

## 7️⃣ `Sys` {#sys}

This class is used to obtain firmware version, including CMS (Communication Management System) information.

:::note Example

- Request

  <span className="http-method-badge">GET</span> `http://192.168.31.213:8080/rpc/Sys.GetConfig`

- Response

  ```json
  {
    "device": {
      "hostname": "",
      "timezone": 480,
      "type": "CMS-SF2000",
      "sn": "",
      "mac": "7C3E82EF997F",
      "fw": "T1.4.06_ROOD. 072_M4801_0000002C",
      "f_ver": "T1406.07.002C",
      "p_ver": "VOD.00.08",
      "time": "2025-12-18 09:44:57",
      "time_stamp": 1766051097,
      "run_time": 2244
    }
  }
  ```
:::

> **Function: `Sys.GetConfig`**
> 
> **Return value**
> 
> | Parameter | Type   | Description                                               |
> | --------- | ------ | --------------------------------------------------------- |
> | `device`    | Object | See the table below for device configuration information. |
> 
> device configuration
> 
> | Parameter  | Type   | Description                    |
> | ---------- | ------ | ------------------------------ |
> | `hostname`   | String | Device name                    |
> | `timezone`   | Num    | Timezone                       |
> | `type`       | String | Device model                   |
> | `sn`         | String | Device serial number           |
> | `mac`        | String | Device MAC address             |
> | `fw`         | String | Device firmware version        |
> | `f_ver`      | String | PG2000Series CMS               |
> | `p_ver`      | String | PG2000Series Pfile             |
> | `time`       | String | Current time                   |
> | `time_stamp` | Num    | Current timestamp (in seconds) |
> | `run_time`   | Num    | Device runtime (in seconds)    |

---

## 8️⃣ FAQ {#faq}

<details>
  <summary>**Q: HTTP request returns 401 Unauthorized.**</summary>

  - Verify the username and password for Digest Authentication.
  - New/factory-reset devices only support access to the designated interface: `User.SetConfig`. Refer to [Digest Authentication](#http-digest) section - other APIs become accessible after successful password modification and authentication with the new password.
</details>

<details>
  <summary>**Q: Device fails to return IP address after broadcast command.**</summary>

  The OpenData API is not enabled, making this function inactive. Refer to [Enable API](#enable-api) section.
</details>
