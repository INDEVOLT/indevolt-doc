---
title: MQTT Topic
description: INDEVOLT MQTT Topic 结构及消息格式说明。
---

# MQTT Topic

INDEVOLT MQTT 默认提供以下 Topic 结构，开发者可根据实际部署需求进行自定义。

| Topic                        | 说明         |
| ---------------------------- | ------------ |
| [`/test/subtopic`](#1-数据上报)             | 设备数据上报 |
| [`/test/subtopic/control`](#2-控制命令)     | 控制命令     |
| [`/test/subtopic/control_ack`](#3-控制应答) | 控制执行结果 |

## 1. 数据上报

设备通过数据 Topic 主动发布运行数据。

**Topic**

`/test/subtopic`

**Subscribe**

```bash
# Example: connect to a local MQTT Broker
# Replace 127.0.0.1 with your MQTT Broker address if using a remote Broker
mosquitto_sub -h 127.0.0.1 -t "/test/subtopic" -v
```

**数据类型**

同一个 Topic 下可能包含多种数据类型，客户端可通过 `dataType` 字段区分消息类型。

JSON 消息中的 Key 对应设备数据点位，Value 为对应的数据值。详细数据点定义请参考 [MQTT Data Points](./mqtt-data-points)。

| dataType       | 说明           |
| -------------- | -------------- |
| gateway_data   | 网关信息       |
| battery_data   | 电池数据       |
| inv_data       | 逆变器数据     |
| subdevice_info | 子设备信息数据 |
| subdevice_data | 子设备数据     |

**示例消息**

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="battery" label="battery_data" default>
   
```json
{
    "GW_SN": "xxxxxxxxxx",
    "dataType": "battery_data",
    "1118": 10108,
    "1109": 10045,
    "1119": 138,
    "1120": 10175,
    "614": 1792,
    "142": 3.59,
    ...
}
```
   
  </TabItem>
  <TabItem value="gateway" label="gateway_data">

```json
{
    "GW_SN": "xxxxxxxxxx",
    "dataType": "gateway_data",
    "firmwareVersion": "V140C.0B.0036",
    "rssiWifi": "-41",
    "ssidWifi": "QXTS",
    "bssidWifi": "",
    "iP": "190.160.3.167"
}
```

  </TabItem>
</Tabs>



---

## 2. 控制命令

第三方系统可以通过控制 Topic 向设备发送控制请求。

**Topic**

`/test/subtopic/control`

**Publish**

```bash
# Example: connect to a local MQTT Broker
# Replace 127.0.0.1 with your MQTT Broker address if using a remote Broker
mosquitto_pub -h 127.0.0.1 -t "/test/subtopic/control" -m '{}'
```

**消息格式**

```json
{
    "GW_SN": "xxxxxxxx",    
    "dataType": "modbusString",    
    "SN1": "xxxxxxxx",    
    "dataMap": [
        {
            "groupNum": "2"    
        },
        {
            "groupID": "0",    
            "commandString": "010300000001840A"    
        },
        {
            "groupID": "1",
            "commandString": "0110000001020000303A"    
        }
    ]
}
```

**字段说明**

| 字段       | 类型   | 说明                                      |
| ---------- | ------ | ----------------------------------------- |
| `GW_SN`    | String | 网关序列号。                              |
| `dataType` | String | 消息类型，固定为 `modbusString`。 |
| `SN1`      | String | 目标设备序列号。                          |
| `dataMap`  | Array  | Modbus 命令列表。                         |

**`dataMap` 说明**

`dataMap` 中可包含一条或多条 Modbus 命令，设备按照数组顺序依次执行。

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `groupNum` | String | 命令总数。 |
| `groupID` | String | 当前命令编号，从 `0` 开始。 |
| `commandString` | String | Modbus 指令，十六进制字符串格式。 |

`commandString` 的内容应符合 Modbus 报文格式，包括设备地址、功能码、寄存器地址、数据及 CRC 校验。具体寄存器地址请参考：[Modbus 寄存器说明](./modbus-register-table.md)。

---

## 3. 控制应答

设备执行控制命令后，通过控制应答 Topic 返回执行结果。

**Topic**

`/test/subtopic/control_ack`

**Subscribe**

```bash
# Example: connect to a local MQTT Broker
# Replace 127.0.0.1 with your MQTT Broker address if using a remote Broker
mosquitto_sub -h 127.0.0.1 -t "/test/subtopic/control_ack" -v
```

**示例消息**

```json
{
    "GW_SN": "xxxxxxxx",
    "dataType": "modbusString",
    "SN1": "xxxxxxxx",
    "dataMap": [
        {
            "groupNum": "2"
        },
        {
            "groupID": "0",
            "result": "success",
            "commandResponse": "018302C0F1"
        },
        {
            "groupID": "1",
            "result": "success",
            "commandResponse": "0190030C01"
        }
    ]
}
```

**字段说明**

| 字段              | 类型   | 说明            |
| ----------------- | ------ | --------------- |
| `result`          | String | 命令执行结果    |
| `commandResponse` | String | Modbus 返回数据 |

