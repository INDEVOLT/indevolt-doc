---
title: MQTT Topic
description: Description of the INDEVOLT MQTT Topic structure and message format.
---

# MQTT Topic

INDEVOLT MQTT provides the following default Topic structure. Developers can customize the Topic structure according to actual deployment requirements.

| Topic | Description |
| ---------------------------- | ------------ |
| [`/test/subtopic`](#1-data-reporting) | Device data reporting |
| [`/test/subtopic/control`](#2-control-command) | Control commands |
| [`/test/subtopic/control_ack`](#3-control-response) | Control execution results |

## 1. Data Reporting

The device actively publishes operating data through the data Topic.

**Topic**

`/test/subtopic`

**Subscribe**

```bash
# Example: connect to a local MQTT Broker
# Replace 127.0.0.1 with your MQTT Broker address if using a remote Broker
mosquitto_sub -h 127.0.0.1 -t "/test/subtopic" -v
```

**Data Types**

A single Topic may contain multiple data types. Clients can identify the message type through the `dataType` field.

The Key in the JSON message corresponds to the device data point, and the Value represents the corresponding data value. For detailed data point definitions, refer to [MQTT Data Points](./mqtt-data-points.md).

| dataType       | Description                |
| -------------- | -------------------------- |
| gateway_data   | Gateway information        |
| battery_data   | Battery data               |
| inv_data       | Inverter data              |
| subdevice_info | Sub-device information data |
| subdevice_data | Sub-device data             |

**Example Message**

```json
{
  "GW_SN": "xxxxxxxx",
  "dataType": "gateway_data",
  "firmwareVersion": "V140C.0B.0036",
  "rssiWifi": "-41",
  "ssidWifi": "QXTS",
  "bssidWifi": "",
  "iP": "190.160.3.167"
}
```

---

## 2. Control Command

Third-party systems can send control requests to the device through the control Topic.

**Topic**

`/test/subtopic/control`

**Publish**

```bash
# Example: connect to a local MQTT Broker
# Replace 127.0.0.1 with your MQTT Broker address if using a remote Broker
mosquitto_pub -h 127.0.0.1 -t "/test/subtopic/control" -m '{}'
```

**Message Format**

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

**Field Description**

| Field      | Type   | Description                            |
| ---------- | ------ | -------------------------------------- |
| `GW_SN`    | String | Gateway serial number.                 |
| `dataType` | String | Message type, fixed as `modbusString`. |
| `SN1`      | String | Target device serial number.           |
| `dataMap`  | Array  | List of Modbus commands.               |

### `dataMap` Description

The `dataMap` array can contain one or multiple Modbus commands. The device executes commands sequentially according to the array order.

| Field           | Type   | Description                                  |
| --------------- | ------ | -------------------------------------------- |
| `groupNum`      | String | Total number of commands.                    |
| `groupID`       | String | Current command ID, starting from `0`.       |
| `commandString` | String | Modbus command in hexadecimal string format. |

The content of `commandString` must follow the Modbus message format, including the device address, function code, register address, data, and CRC checksum.

For detailed register addresses, refer to: [Modbus Register Description](./modbus-register-table.md).

---

## 3. Control Response

After executing a control command, the device returns the execution result through the control response Topic.

**Topic**

`/test/subtopic/control_ack`

**Subscribe**

```bash
# Example: connect to a local MQTT Broker
# Replace 127.0.0.1 with your MQTT Broker address if using a remote Broker
mosquitto_sub -h 127.0.0.1 -t "/test/subtopic/control_ack" -v
```

**Example Message**

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

**Field Description**

| Field             | Type   | Description              |
| ----------------- | ------ | ------------------------ |
| `result`          | String | Command execution result |
| `commandResponse` | String | Modbus response data     |
