---
title: MQTT
description: 介绍如何通过 MQTT 查看和控制微储设备。
---

# MQTT


## 1. 什么是 MQTT？

MQTT（Message Queuing Telemetry Transport）是一种常用于物联网设备的轻量级消息通信协议。它可以让设备、App、服务器之间实时交换数据，特别适合以下场景：
- 设备数量多
- 网络环境不稳定
- 数据量较小
- 需要实时通信

通过 MQTT，你可以：

- 实时查看设备状态（SOC、功率、运行模式等）
- 远程控制设备
- 接入 Home Assistant、HEMS 等第三方平台
- 与云平台进行数据同步
- 实现多设备自动化联动

MQTT 使用“发布 / 订阅（Publish / Subscribe）”模式。你可以把 MQTT Broker 理解成一个“消息中转站”。例如：
1. 微储设备上传一条消息：“当前 SOC = 65%”
2. MQTT Broker 接收到消息
3. 所有订阅该主题的系统都会收到这条数据

---

## 2. 系统架构

```text
┌──────────────────────┐
│   App / HEMS / PC    │
│     MQTT Client      │
└──────────┬───────────┘
           ▲
           │  MQTT
           │  Publish / Subscribe
           ▼
┌──────────┴───────────┐
│      MQTT Broker     │
└──────────┬───────────┘
           ▲
           │  MQTT
           │  Publish / Subscribe
           ▼
┌──────────┴───────────┐
│       微储设备        │
│     MQTT Client      │
└──────────────────────┘
```

| 设备            | 角色        | 说明                           |
| --------------- | ----------- | ------------------------------ |
| App / HEMS / PC | MQTT Client | 连接到 Broker，订阅设备数据或发送控制命令     |
| MQTT Broker     | MQTT Broker | 消息服务器，负责接收、过滤并转发 MQTT 消息 |
| 微储设备        | MQTT Client | 连接到 Broker，上传设备数据并接收控制命令     |


1. 微储连接 MQTT Broker，可选使用TLS/SSL加密以保障通信安全
2. 设备主动发布运行数据至 broker
3. App 或第三方系统订阅对应 Topic（主题）
4. MQTT Broker 接收已发布的消息，并将其转发给所有订阅方
5. 用户可通过 MQTT 下发控制命令
6. 设备接收命令并执行对应操作

---

## 3. 适用设备

本功能适用于支持 MQTT 的设备：

- SolidFlex 2000
- PowerFlex 2000
- BK1600
- BK1600 Ultra

---

## 4. 如何使用

### 4.1 准备

- ✅ 设备已正常通电
- ✅ 设备已联网
- ✅ 已获取 MQTT 连接信息


### 4.2 开启 MQTT

设备的 MQTT 功能默认关闭，需要在 App 中手动开启。



### 4.3 MQTT 连接参数


| 参数        | 说明                                  |
| ----------- | ------------------------------------- |
| Broker 地址 | MQTT 服务器地址                       |
| 端口        | 1883（非加密） / 8883（TLS/SSL 加密） |
| Client ID   | 默认使用设备序列号（SN）              |
| 用户名      | MQTT 登录账号，默认为空，支持自定义     |
| 密码        | MQTT 登录密码，默认为空，支持自定义     |



### 4.4 Topic

MQTT Topic 可以理解成消息的“分类名称”或“消息路径”。Broker 会根据 Topic 判断消息属于哪一类，再将消息转发给对应订阅者。

**命名规范**

Topic 结构类似文件目录：`energy/device1/soc`，建议使用统一命名规范：
- 使用全小写
- 使用 `/` 分层，但不要以`/`开头或结尾
- 避免空格和特殊字符
- 命名保持统一

**通配符**

MQTT 支持在订阅时使用通配符，方便批量接收消息。

| 通配符 | 作用         | 示例 |
| ------ | ------------ | ---- |
| `+`    | 匹配单层     |  `energy/+/soc` <br />可以匹配 `energy/device1/soc`，`energy/device2/soc`；<br />但不能匹配 `energy/group/device1/soc`，因为多了一层   |
| `#`    | 匹配所有层级 | `energy/#` <br />表示订阅 `energy` 下所有 Topic，包括：`energy/device1/soc`、`energy/device1/power`、`energy/device2/status`     |

:::info
发布消息时必须使用完整的 Topic，不允许使用通配符。
:::


### 4.5 QoS

QoS（Quality of Service）表示消息传递的可靠性等级。

| QoS   | 说明                                 |
| ----- | ------------------------------------ |
| QoS 0 | 最多发送一次，速度最快，但不保证收到 |
| QoS 1 | 至少发送一次，可能重复               |
| QoS 2 | 仅送达一次，可靠性最高               |

通常建议：
- 实时状态数据：QoS 0 或 1
- 控制命令：QoS 1

## 5. 操作示例





## 6. FAQ

<details>
  <summary>**Q: MQTT 无法连接**</summary>

  请检查：
  - Broker 地址是否正确
  - 用户名和密码是否正确
  - 网络是否正常
  - 是否开启 TLS 加密
</details>


<details>
  <summary>**Q: 为什么订阅后收不到数据？**</summary>

  请检查：
  - Topic 是否正确
  - Topic 大小写是否一致
  - 是否订阅了错误层级
  - 设备是否在线
</details>