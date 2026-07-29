---
title: HTTP/HTTPS 概述
description: 通过标准 HTTP 接口访问本地设备数据并控制 INDEVOLT 微型储能系统。
---

# # HTTP/HTTPS 概述

INDEVOLT 微储提供基于 HTTP/HTTPS 的 REST API，可用于本地网络中的设备监控、参数读取和控制。所有接口均采用 JSON 作为数据交换格式。

---

## 1. 准备 {#preparations}

### 步骤一、安装工具 {#install-tools}

> - **[Postman](https://www.getpostman.com/)、cURL 或其他 HTTP 调试工具**：用于调用 HTTP API 获取设备数据或更新设备配置。

### 步骤二、开启 API {#enable-api}

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> 在默认状态下设备 API 功能未开启，需要开启后才能使用 API。OpenData 提供以下方式：
> - [HTTP](#http)
> - [HTTP Digest](#http-digest)
> - [HTTPS](#https)（暂未支持，敬请期待）
> 
> 您可在 INDEVOLT App 中设置本地 API：
> - **设备已联网**：推荐使用 **云端设置**，操作更简单  
> - **设备暂未联网**：可通过**本地蓝牙设置**，直接与设备连接即可完成配置
> 
> <Tabs>
>   <TabItem value="cloud" label="云端" default>
>     <img src={require("./img/device_info.png").default} width="200"/>
>     <img src={require("./img/select_local_api.png").default} width="200"/>
>     <img src={require("./img/connect_device.png").default} width="200"/>
>     <img src={require("./img/select_http.png").default} width="200"/>
>     <img src={require("./img/http.png").default} width="200"/>
>   </TabItem>
>   <TabItem value="local" label="本地蓝牙">
>     <img src={require("./img/profile_page.png").default} width="200"/>
>     <img src={require("./img/scan_qr_code.png").default} width="200"/>
>     <img src={require("./img/connect_device.png").default} width="200"/>
>     <img src={require("./img/device_connected.png").default} width="200"/>
>     <img src={require("./img/select_local_api2.png").default} width="200"/>
>     <img src={require("./img/select_http.png").default} width="200"/>
>     <img src={require("./img/http.png").default} width="200"/>
>   </TabItem>
> </Tabs>

### 步骤三、查看固件版本 {#check-firmware}

> 若设备版本低于表格所列版本，请更新设备固件。
> 
> | 型号                       | 最低支持版本              |
> | --------------------------- | ----------------------------------------- |
> | BK1600 / BK1600 Ultra          | V1.3.0A_R006.072_M4848_00000039           |
> | SolidFlex 2000 / PowerFlex 2000 | CMS：V1406.07.002E |
> | PowerFlex 3000 AC<br />PowerFlex 3000 Hybrid<br />SolidFlex 3000 AC<br />SolidFlex 3000 AC Pro<br />SolidFlex 3000 Hybrid Pro  | CMS: V1409.08.3034  |
> | SolidFlex 1200 | CMS: V1407.07.202E |
>
> 请在 INDEVOLT App 中查看设备固件版本。
> 
> <Tabs>
>   <TabItem value="cloud" label="云端" default>
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

 
### 步骤四、获取设备 IP 地址 {#obtain-ip}

> 以下三种方法任选其一：
> - 🧩方法 1：路由器管理后台查询；
> - 🧩方法 2：App设备设置界面查看；
>   <img src={require("./img/select-network.png").default} width="200"/>
>   <img src={require("./img/view_ip.png").default} width="200"/>
> - 🧩方法 3: UDP广播获取IP
> 
>       (1) 确保设备接入的WiFi网络与电脑处于同一局域网。  
>       (2) 打开任一网络调试工具（如 [NetAssist](https://www.cmsoft.cn/resource/102.html)）。  
>       (3) 选择 **UDP** 协议。  
>       (4) 选择 Local Host Addr。  
>       (5) 设置 Local Host Port 为**10000**。  
>       (6) 单击 **Open**。  
>         <img src={require("./img/udp-settings.png").default} width="120"/>
>       (7) 在Remote设置广播地址及端口：**255.255.255.255:8099**。  
>         <img src={require("./img/set-udp-remote.png").default} width="480"/>
>       (8) 在消息框里填写 AT 指令：**AT+IGDEVICEIP**。  
>       (9) 单击 **Send**。  
>         <img src={require("./img/send-at-command.png").default} width="360"/>
>       (10) 同一局域网内的INDEVOLT设备会回复其IP地址和SN号。
>       <img src={require("./img/udp-message.png").default} width="360"/>

---

## 2. HTTP 使用说明 {#http}

### 2.1 请求格式 {#request-structure}

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
- `{IP_ADDRESS}`：设备的 IP 地址。
- `{API}`：API 名称，例如 `Indevolt.GetData`。完整接口说明请参见 [API 参考](./http-api.md)。

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

### 2.2 请求频率限制 {#rate-limit}

为保证设备稳定运行，建议控制 API 调用频率。

| 类型         | 限制   |
| ------------ | ------ |
| 建议请求间隔 | ≥ 5 秒 |
| 最小支持间隔 | 1 秒   |
| 响应时长     | 1 秒   |


### 2.3 错误码 {#errors}

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

---

## 3. HTTP Digest Authentication {#http-digest}

设备支持 HTTP Digest Authentication 对请求进行身份认证，可避免密码以明文方式传输，提高通信安全性。

在 HTTP+Digest 模式下：
- 首次使用或恢复出厂设置的设备需要先使用 `User.SetConfig` 接口修改默认密码。
- 修改密码成功后，可使用其他接口，后续所有接口均使用新密码认证。

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


4. 配置 HTTP Digest Authentication 参数，并发送 `User.SetConfig` 请求。  

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

## 4. HTTPS（暂不支持）{#https}

HTTPS 基于 TLS 对通信数据进行加密，并通过数字证书验证服务器身份，可有效防止数据被窃听或篡改。

HTTP 与 HTTPS 使用相同的 API 接口，请求方法、请求参数及响应格式完全一致，仅需将请求地址中的协议由 `http://` 替换为 `https://`。

---

## 5. FAQ {#faq}

<details>
  <summary>**Q: HTTP 访问返回 401 Unauthorized。**</summary>

  - 检查 Digest 认证的用户名和密码是否正确。
  - 首次使用/恢复出厂设置的设备只支持访问指定接口 `User.SetConfig`。详情请见 [Digest 认证](#http-digest)，修改密码成功后用新密码认证即可正常使用其他接口。
</details>

<details>
  <summary>**Q: 发送广播指令后设备未返回 IP 地址。**</summary>

  OpenData API尚未开启，导致该功能不可用。详情请见[开启 API](#enable-api)。
</details>
