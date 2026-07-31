---
title: Modbus 概述
description: 了解如何通过 Modbus TCP 或 Modbus RTU 与微储设备通信，实现本地数据读取与控制。
---

# Modbus 概述

Modbus 是一种广泛应用于工业自动化和能源管理领域的通信协议，用于让不同设备之间交换数据。

通过 Modbus，家庭能源管理系统（HEMS）、上位机或第三方系统可以读取微储设备的运行状态，也可以根据需要发送控制指令。

---

## 1. Modbus TCP / RTU

微储支持以下两种 Modbus 通信方式：

- **Modbus TCP**：基于以太网传输 Modbus 数据，设备接入局域网后，HEMS 或上位机可以通过设备的 IP 地址访问微储，实现数据读取和控制。
- **Modbus RTU**：基于 RS485 总线传输 Modbus 数据，设备之间通过 RS485 通信线连接，由主设备轮询读取数据。（暂未支持，敬请期待）

两者采用相同的 Modbus 协议，访问同一套设备数据，仅通信介质和连接方式不同。

---

## 2. 工作原理

Modbus 采用 **Client / Server** 通信模式。微储可根据应用场景作为 Modbus Server 或 Modbus Client 使用。

### 2.1 作为 Modbus Server

当微储作为 Modbus Server 时，外部系统（如 HEMS 或上位机）作为 Modbus Client 访问微储。

```mermaid
flowchart LR
    A["HEMS / 上位机<br/>(Modbus Client)"]

    A -->|Modbus TCP| B["TCP/IP 网络"]
    B --> C["微储设备<br/>(Modbus Server)"]

```

1. Client 向微储发送读取或写入请求。
2. 请求通过 TCP/IP 传输至设备。
3. 微储读取对应寄存器的数据，或执行控制指令。
4. 微储返回执行结果。
5. Client 对数据进行显示、记录或自动化控制。

### 2.2 作为 Modbus Client

当微储作为 Modbus Client 时，微储可以连接第三方 Modbus TCP Server，读取设备数据，实现能源管理和设备联动。

```mermaid
flowchart LR
    A["微储设备<br/>(Modbus Client)"]

    A -->|Modbus TCP| B["TCP/IP 网络"]
    B --> C["第三方设备<br/>(Modbus Server)"]
```
1. 微储向第三方 Modbus Server 发送读取请求。
2. 第三方设备返回对应寄存器数据。
3. 微储根据获取的数据进行能源管理和设备联动。

---

## 3. 适用设备

本功能适用于支持 Modbus 的设备：

| 型号    | 最低适用固件版本   |
| ------- | ------------------ |
| PowerFlex 2000<br />PowerFlex 2000 Eco<br />SolidFlex 2000<br />SolidFlex 2000 Eco | CMS: V140C.0B.0036<br />EMS：V1.01.08 |
| PowerFlex 3000 AC<br />PowerFlex 3000 Hybrid<br />SolidFlex 3000 AC<br />SolidFlex 3000 AC Pro<br />SolidFlex 3000 Hybrid Pro  | CMS: V140C.09.3036  |
| SolidFlex 1200 | CMS: V140B.09.2036 |


---

## 4. 如何使用

### 4.1 准备

开始前，请确认以下内容：

- ✅ 设备支持 Modbus 功能
- ✅ 设备已正常运行
- ✅ 已完成网络或 RS485 接线

:::info
如果设备当前仅支持 Wi-Fi 通讯，在需要接入有线网络或 RS485 通信的场景下，可更换为新版本通信模块（支持 Wi-Fi、以太网与 RS485 串口）。

具体更换方法请参考：[配件更换](../advanced/accessory-replacement.md)
:::

### 4.2 开启 Modbus

设备的 Modbus 功能默认关闭，需要在 App 中手动开启。

设备可配置为 Modbus 服务器、Modbus 客户端或同时支持两种模式。如果设备配置为客户端，则需指定服务器地址。

<img src={require("./img/device_info.png").default} width="200"/>
<img src={require("./img/select_local_api.png").default} width="200"/>
<img src={require("./img/connect_device.png").default} width="200"/>
<img src={require("./img/select_modbus.png").default} width="200"/>
<img src={require("./img/modbus_tcp.png").default} width="200"/>

### 4.3 配置通信参数

在第三方系统或 Modbus 工具中，配置参数：

**Modbus TCP**

| 参数     | 说明                |
| -------- | ------------------- |
| 设备 IP  | 微储的 IP 地址      |
| TCP 端口 | 默认为`8899`        |
| Slave ID | 设备标识，默认为`1` |


### 4.4 读取数据

连接成功后，即可读取设备寄存器。寄存器地址请参考 [Modbus 寄存器说明](./modbus-register-table.md)。

---

## 5. 推荐读取频率

| 类型         | 限制   |
| ------------ | ------ |
| 建议请求间隔 | ≥ 5 秒 |
| 最小支持间隔 | 1 秒   |
| 响应时长     | 1 秒   |

频繁读取可能增加设备通信负载，影响通信稳定性。

---

## 6. 常用功能码

| 功能码 | 说明                                     |
| ------ | ---------------------------------------- |
| `0x03` | 读取保持寄存器（Read Holding Registers） |
| `0x04` | 读取输入寄存器（Read Input Registers）   |
| `0x06` | 写单个寄存器（Write Single Register）    |
| `0x10` | 写多个寄存器（Write Multiple Registers） |

---

## 7. Python 示例

```python
from pymodbus.client import ModbusTcpClient

client = ModbusTcpClient(
    host="190.160.3.167",
    port=8899
)

client.connect()

result = client.read_holding_registers(
    address=0x0478,
    count=1,
    device_id=1
)

print(result.registers)

client.close()
```

---

## 8. FAQ

<details>
  <summary>**Q: 无法连接设备**</summary>

  请检查：
  - 设备是否已经开启 Modbus
  - 客户端与设备是否位于同一局域网（Modbus TCP）
  - RS485 接线是否正确（Modbus RTU）
  - 通信参数是否正确
</details>

<details>
  <summary>**Q: 读取数据失败**</summary>

  请检查：
  - 连接是否正常
  - 功能码是否正确
  - 寄存器地址是否正确
  - 数据类型是否匹配
</details>
