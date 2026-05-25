---
title: MQTT 说明
description: 介绍如何通过 MQTT 查看和控制微储设备。
---

# MQTT 说明


## 1. 什么是 MQTT？

MQTT（Message Queuing Telemetry Transport）是一种专为物联网（IoT）设备设计的轻量级消息通信协议。

它特别适合：

- 设备数量多
- 网络环境不稳定
- 数据量较小
- 需要实时通信

通过 MQTT，你可以：
- 实时监控设备设备：SOC、功率、运行状态等  
- 远程控制：远程设置充放电模式 
- 接入第三方系统：如：Home Assistant、HEMS、云平台等 

MQTT 采用“发布 / 订阅”模式：

| 角色       | 说明                                |
| ---------- | ----------------------------------- |
| Broker     | MQTT 消息服务器，所有消息的中转站。设备间不直接通信，都连到 Broker，由它负责接收、过滤并转发消息|
|MQTT Client | 指任何连接到 Broker 的设备、应用程序或服务。它既可以发布消息（Publisher）或订阅消息（Subscriber），也可以同时具备两种能力。|

## 2. 系统架构

[微储] → MQTT → [Broker] ← MQTT → [App / 云平台 / HEMS]

1. 微储（客户端）通过 TCP/IP 连接 MQTT Broker，可选使用TLS/SSL加密以保障通信安全
2. 微储主动发布运行数据至 broker
3. App / 云平台（客户端）订阅对应 Topic
4. Broker 接收已发布的消息，并将其转发给所有订阅了相关主题的设备


## 3. 适用设备

本功能适用于支持 MQTT 的设备：

- SolidFlex 2000
- PowerFlex 2000
- BK1600
- BK1600 Ultra


## 4. 如何使用

### 准备

- ✅ 设备已正常通电
- ✅ 设备已联网
- ✅ 已获取 MQTT 连接信息


### 开启 MQTT

设备的 MQTT 功能默认关闭，需要在 App 中手动开启。



### MQTT 连接参数


| 参数        | 说明                                  |
| ----------- | ------------------------------------- |
| Broker 地址 | MQTT 服务器地址                       |
| 端口        | 1883（非加密） / 8883（TLS/SSL 加密） |
| Client ID   | 默认使用设备序列号（SN）              |
| 用户名      | MQTT 登录账号，默认为空，支持自定义     |
| 密码        | MQTT 登录密码，默认为空，支持自定义     |



### Topic

MQTT Topic 可以理解成消息的“分类名称”或“消息路径”。Broker 会根据 Topic 判断消息属于哪一类，再将消息转发给对应订阅者。

**命名规范**

Topic 结构类似文件目录：`energy/device1/soc`，建议使用统一命名规范：
- 使用全小写
- 使用 `/` 分层
- 不要以`/`开头或结尾
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


### QoS

QoS（Quality of Service）表示消息传递的可靠性等级。

| QoS   | 说明                                 |
| ----- | ------------------------------------ |
| QoS 0 | 最多发送一次，速度最快，但不保证收到 |
| QoS 1 | 至少送达一次，可能重复               |
| QoS 2 | 仅送达一次，可靠性最高               |

通常建议：
- 实时状态数据：QoS 0 或 1
- 控制命令：QoS 1

## 操作示例





## FAQ

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