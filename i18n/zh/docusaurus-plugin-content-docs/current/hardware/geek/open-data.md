---
title: OpenData API
description: 通过标准 HTTP 接口访问本地设备数据并控制 INDEVOLT 微型储能系统。
---

# OpenData API

## 1️⃣ 介绍 {#introduction}

OpenData是为基于WiFi的INDEVOLT物联网设备设计的轻量级通信框架。设备通过WiFi接入本地网络，支持数据主动推送与外部查询响应。

**核心功能**

- 设备数据获取：实时拉取设备数据。
- 设备控制：动态调整设备参数及配置。

**使用场景**

- 接收外部HTTP查询请求

  <img src={require("./img/opendata-use-case.png").default} width="240"/>

---

## 2️⃣ 准备 {#preparations}

### 步骤一、安装工具 {#install-tools}

> - **[Postman](https://www.getpostman.com/) / cURL**：用于调用HTTP API获取设备数据或更新设备配置。
> - 任一网络调试工具(如 [NetAssist](https://www.cmsoft.cn/resource/102.html))：用于接收UDP广播。

### 步骤二、开启 API {#enable-api}

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> 在默认状态下设备API功能未开启，需要开启后才能使用API。OpenData提供以下三种方式：
> - [HTTP](#http)
> - [HTTP Digest](#http-digest)
> - HTTPS （目前不支持，敬请期待）
> 
> 您可在 INDEVOLT App 中设置本地API：
> - **设备已联网**：推荐使用 **云端设置**，操作更简单  
> - **设备暂未联网**：可通过**本地蓝牙设置**，直接与设备连接即可完成配置
> 
> <Tabs>
>   <TabItem value="cloud" label="云端" default>
>     <img src={require("./img/select_device.png").default} width="200"/>
>     <img src={require("./img/device_info.png").default} width="200"/>
>     <img src={require("./img/select_local_api.png").default} width="200"/>
>     <img src={require("./img/local_api.png").default} width="200"/>
>   </TabItem>
>   <TabItem value="local" label="本地蓝牙">
>     <img src={require("./img/profile_page.png").default} width="200"/>
>     <img src={require("./img/scan_qr_code.png").default} width="200"/>
>     <img src={require("./img/connect_device.png").default} width="200"/>
>     <img src={require("./img/device_connected.png").default} width="200"/>
>     <img src={require("./img/select_local_api2.png").default} width="200"/>
>     <img src={require("./img/local_api2.png").default} width="200"/>
>   </TabItem>
> </Tabs>

### 步骤三、查看固件版本 {#check-firmware}

> 若设备版本低于表格所列版本，请更新设备固件。
> 
> | Model                       | Applicable firmware version               |
> | --------------------------- | ----------------------------------------- |
> | BK1600/BK1600Ultra          | V1.3.0A_R006.072_M4848_00000039           |
> | SolidFlex2000/PowerFlex2000 | CMS：V1406.07.002E |
>
> 请在 INDEVOLT App 中查看设备固件版本。
> 
> <Tabs>
>   <TabItem value="cloud" label="云端" default>
>     <img src={require("./img/select_device.png").default} width="200"/>
>     <img src={require("./img/device_info.png").default} width="200"/>
>     <img src={require("./img/select_firmware2.png").default} width="200"/>
>     <img src={require("./img/view_firmware_version2.png").default} width="200"/>
>   </TabItem>
>   <TabItem value="local" label="本地蓝牙">
>     <img src={require("./img/profile_page.png").default} width="200"/>
>     <img src={require("./img/scan_qr_code.png").default} width="200"/>
>     <img src={require("./img/connect_device.png").default} width="200"/>
>     <img src={require("./img/device_connected.png").default} width="200"/>
>     <img src={require("./img/select_firmware.png").default} width="200"/>
>     <img src={require("./img/view_firmware_version.png").default} width="200"/>
>   </TabItem>
> </Tabs>

 
### 步骤四、获取 IP 地址 {#obtain-ip}

> 以下三种方法任选其一：
> - 🧩方法 1：路由器管理后台查询；
> - 🧩方法 2：App设备设置界面查看；
>   <img src={require("./img/select-network.png").default} width="240"/>
>   <img src={require("./img/view_ip.png").default} width="240"/>
> - 🧩方法 3: UDP广播获取IP
> 
>       (1) 确保设备接入的WiFi网络与电脑处于同一局域网。  
>       (2) 打开网络调试工具。  
>       (3) 选择 **UDP** 协议。  
>       (4) 选择 Local Host Addr。  
>       (5) 设置Local Host Port为**10000**。  
>       (6) 单击 **Open**。  
>         <img src={require("./img/udp-settings.png").default} width="120"/>
>       (7) 在Remote设置广播地址及端口：**255.255.255.255:8099**。  
>         <img src={require("./img/set-udp-remote.png").default} width="480"/>
>       (8) 在消息框里填写AT指令：**AT+IGDEVICEIP**。  
>       (9) 单击 **Send**。  
>         <img src={require("./img/send-at-command.png").default} width="360"/>
>       (10) 同一局域网内的INDEVOLT设备会回复其IP地址和SN号。
>       <img src={require("./img/udp-message.png").default} width="360"/>

---

## 3️⃣ HTTP使用说明 {#http}

### 3.1 请求结构 {#request-structure}

**请求方法**

| 方法 | 说明                     |
| ---- | ------------------------ |
| GET  | 请求服务器返回指定资源。 |
| POST | 请求服务器执行特定操作。 |

**请求地址**

```
http://{IP_ADDRESS}:8080/rpc/{API}
```
其中：
- `{IP_ADDRESS}`：设备的IP地址。
- `{API}`：调用的HTTP API。

**请求示例**

- 获取设备数据：
  ```
  POST http://192.168.31.213:8080/rpc/Indevolt.GetData?config={"t":[1664,1665]}
  ```

**cURL 命令示例**

- 获取电池 SOC:

  ```
  curl -g -X POST -H "Content-Type: application/json" "http://192.168.1.75:8080/rpc/Indevolt.GetData?config={\"t\":[6002]}"
  ```


### 3.2 错误码 {#errors}

| 状态码 | 描述                         | 说明                          |
| --- | -------------------------- | --------------------------- |
| 400 | Bad Request                | 服务器无法理解请求格式；客户端需修改请求后重试。    |
| 401 | Unauthorized               | 请求需要身份验证；客户端需提供有效凭证。        |
| 403 | Forbidden                  | 服务器理解请求，但拒绝执行，通常由于权限不足。     |
| 404 | Not Found                  | 服务器找不到请求的资源，可能资源不存在或已被删除。   |
| 405 | Method Not Allowed         | 请求的方法与资源不兼容，例如对只读资源执行写操作。   |
| 408 | Request Timeout            | 服务器等待请求超时，客户端可稍后重试。         |
| 409 | Conflict                   | 请求与资源的当前状态冲突，例如多用户同时编辑同一资源。 |
| 410 | Gone                       | 请求的资源已被永久删除且无新的地址。          |
| 500 | Internal Server Error      | 服务器遇到未知错误，无法完成请求。           |
| 501 | Not Implemented            | 服务器不支持请求的方法，无法执行。           |
| 502 | Bad Gateway                | 作为网关或代理的服务器从上游服务器收到无效响应。    |
| 503 | Service Unavailable        | 服务器当前无法处理请求，可能由于过载或维护。      |
| 504 | Gateway Timeout            | 作为网关或代理的服务器未能及时从上游服务器收到响应。  |
| 505 | HTTP Version Not Supported | 服务器不支持请求使用的 HTTP 版本。        |

## 4️⃣ HTTP Digest {#http-digest}

Digest认证技术用于网络通信中验证用户身份，避免密码明文传输。

在HTTP+Digest模式下：
- 首次使用或恢复出厂设置的设备需要先使用 `User.SetConfig` 接口修改默认密码。
- 修改密码成功后，可使用其他接口。

**工具**

- ASCII → 十六进制转换器  
- 十六进制 → Base64 转换器  
- AES-GCM 加密工具  

**修改密码示例**

1. 将新密码、原始密码与随机数转换为十六进制。

   |          | ASCII 字符串 | 十六进制                                                               |
   | -------- | ------------ | ---------------------------------------------------------------------- |
   | 新密码   | qwertyui     | 71 77 65 72 74 79 75 69                                                |
   | 原始密码 | qazwsxed     | 71 61 7a 77 73 78 65 64 00 00 00 00 00 00 00 00 <br />(补齐至 16 字节) |
   | 随机数   | 123456       | 31 32 33 34 35 36 00 00 00 00 00 00 <br />(补齐至 12 字节)             |

2. 使用 AES-GCM 工具加密，在工具中填写对应信息进行加密。
   <img src={require("./img/aes-gcm-info.png").default} width="480"/>

3. 将密文和 Tag 转换为 Base64。

   |      | 十六进制                                        | Base64                   |
   | ---- | ----------------------------------------------- | ------------------------ |
   | 密文 | 4e b2 90 67 54 02 d4 c4                         | TrKQZ1QC1MQ=             |
   | Tag  | cf 0b d0 4e 37 a0 e6 bb cb 74 1b cb ce ab 72 9a | zwvQTjeg5rvLdBvLzqtymg== |


4. 完成 Digest Authentication 字段并发送 `User.SetConfig` 请求。
     <span className="http-method-badge">POST</span> **`http://{IP_ADDRESS}:8080/rpc/User.SetConfig?config={"Password":"{PASSWORD}"}`**
     
     其中：
     - `{IP_ADDRESS}`：设备 IP 地址。
     - `{PASSWORD}`：经过 AES128-GCM 加密后并转换为 Base64 的密文。

   <img src={require("./img/digest-auth.png").default} width="720"/>

| 参数名         | 类型            | 描述                                                                                                                                             | 是否必填 |
| ------------ | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| Username     | String          | 默认值 `opend`                                                                                                                                   | 必填     |
| Password     | String          | 默认设备密钥。<br /><br />- 使用 **默认密码** 只能请求 **`User.SetConfig`** 接口修改密码。<br />- 修改密码后，使用 **新密码** 可以调用其他接口。 | 必填     |
| Realm        | String          | - 调用 **`User.SetConfig`** 修改密码时，需要提供 **AES128-GCM Tag**。<br />- 调用 **其他接口** 时，可以使用随机值。                              | 必填     |
| Nonce        | Digest 默认类型 | 可使用随机值                                                                                                                                     | 必填     |
| Algorithm    | Digest 默认类型 | MD5                                                                                                                                              | 必填     |
| qop          | Digest 默认类型 | auth                                                                                                                                             | 必填     |
| Nonce Count  | Digest 默认类型 | 可使用随机值                                                                                                                                     | 必填     |
| Client Nonce | Digest 默认类型 | 可使用随机值                                                                                                                                     | 必填     |

---

## 5️⃣ API {#api}

| 组件                    | 说明                                                      |
| ---------------------------- | ---------------------------------------------------------------- |
| [`Indevolt`](#indevolt) | 读取 INDEVOLT 设备数据，控制设备。                         |
| [`Sys`](#sys)           | 获取设备 CMS (Communication Management System) 信息。 |

---

## 6️⃣ `Indevolt` {#indevolt}

`Indevolt` 允许你通过标准 HTTP 请求 **获取设备实时数据** 并 **发送控制命令**。

### 6.1 获取设备数据 {#retrieve-data}

:::note 示例

- 请求示例

  <span className="http-method-badge">POST</span> **`http://192.168.31.213:8080/rpc/Indevolt.GetData?config={"t":[1664,1665]}`**

- 返回示例

  ```json
  {
   "1664":100,
   "1665":251
  }
  ```  

:::


> **方法: `Indevolt.GetData`**
> 
> **参数**
> 
> | 参数名 | 类型   | 说明                                                                              |
> | --------- | ------ | ---------------------------------------------------------------------------------------- |
> | config    | Object | `t`：请求数据的地址，见下表 `cJSON Point` 列。 |
> 
> **返回值**
> 
> JSON 格式的设备数据。
>
> <Tabs>
>   <TabItem value="sf2000" label="SolidFlex2000/PowerFlex2000" default>
> 
>   <table><thead>
>     <tr>
>       <th>cJSON 点位</th>
>       <th>cJSON 值类型</th>
>       <th>单位</th>
>       <th>说明</th>
>       <th>Enum 定义</th>
>       <th>API</th>
>       <th>注释</th>
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
>       <td></td>
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
>       <td>Comprehensive electrical energy, including (DC+AC+Bypass)</td>
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
>       <td>Total electrical energy of micro-inverter input for grid-connected access</td>
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
>    | cJSON 点位 | cJSON 值类型 | 单位 | 说明 | Enum 定义 |API	|
>    | ----------- | ---------------- | ---- | ----------------- | ----- |-|
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


### 6.2 控制设备 {#control-device}


:::note 示例：设置实时控制模式

-  请求示例 

    <span className="http-method-badge">POST</span> **`http://192.168.31.213:8080/rpc/Indevolt.SetData?config={"f":16,"t":47005,"v":[4]}`**

- 返回示例

  ```json
  {"result": true}
  ```

:::


:::note 示例：设置放电状态、功率、SOC。

- 请求示例

  <span className="http-method-badge">POST</span> **`http://192.168.31.213:8080/rpc/Indevolt.SetData?config={"f":16,"t":47015,"v":[2,700,5]}`**

- 返回示例

  ```json
  {"result": true}
  ```
:::

> **方法: `Indevolt.SetData`**
> 
> **参数**
> 
> | 参数名 | 类型   | 说明        |
> | --------- | ------ | ----------------- |
> | config    | Object | `f`：功能码，统一用16；<br />`t`: 寄存器地址，见下表 **`cJSON 点位`** 列；<br />`v`: 写入值，见下表 **`值`** 列。 |
> 
> <Tabs>
>   <TabItem value="sf2000" label="SolidFlex2000/PowerFlex2000" default>
>     | cJSON 点位 | cJSON 值类型 | 单位 | 说明    | 值        | API |
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
>     | cJSON 点位 | cJSON 值类型 | 单位 | 说明 | 值                                       | API |
>     | ----------- | ---------------- | ---- | ----------------- | ------------------- |---|
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
> 实时控制模式下，可一次性写入状态、功率、SOC值以控制设备充放电。
> :::
> 
> **返回值**
> 
> | 参数名 | 类型 | 说明                        |
> | --------- | ---- | ---------------------------------- |
> | `result`    | Bool | `true`: success; `false`: failure. |


## 7️⃣ `Sys` {#sys}

`Sys` 用于获取固件版本信息，包括 CMS（Communication Management System）信息。

:::note 示例

- 请求示例

  <span className="http-method-badge">GET</span> `http://192.168.31.213:8080/rpc/Sys.GetConfig`

- 返回示例

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

> **方法: `Sys.GetConfig`**
> 
> **返回值**
> 
> | 参数名 | 类型   | 说明               |
> | --------- | ------ | ----------------------- |
> | `device`  | Object | 设备配置信息请参见下表。|
> 
> 设备配置
> 
> | 参数名  | 类型   | 说明                    |
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
  <summary>**Q: HTTP 访问返回 401 Unauthorized。**</summary>

  - 检查 Digest 认证的用户名和密码是否正确。
  - 首次使用/恢复出厂设置的设备只支持访问指定接口 `User.SetConfig`。详情请见 [Digest 认证](#http-digest)，修改密码成功后用新密码认证即可正常使用其他接口。
</details>

<details>
  <summary>**Q: 发送广播指令后设备未返回 IP 地址。**</summary>

  OpenData API尚未开启，导致该功能不可用。详情请见[开启 API](#enable-api)。
</details>
