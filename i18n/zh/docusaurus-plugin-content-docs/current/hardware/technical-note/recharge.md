---
title: 补电逻辑说明
description: 了解设备在不同电量和补电来源下的自动补电策略
---

# 补电逻辑说明


## 1. 概述

设备会根据**电池剩余电量**（SOC）、**应急电量**以及 **补电来源**，自动执行不同的补电策略，核心目标如下：
- 保留最低应急电量，避免电池过度放电
- 优先利用光伏进行补电
- 在需要时引入 AC 补电，提高系统恢复能力
- 避免电池在临界电量附近频繁切换

系统根据所选的**补电来源**，自动执行以下两种逻辑模式，无需人工干预：
- **PV+AC**：优先使用光伏充电；当光伏功率不足时，自动从电网补充电量
- **仅PV**：优先使用光伏为电池充电


:::info **准备：设置应急电量**


👉 APP操作步骤：设备页面-点击对应的微储设备-点击<img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/>图标-点击电量设置-设置应急电量（5%~100%）

<img src={require("../energy-mode/img/select_device.png").default} width="240"/>
<img src={require("../energy-mode/img/device_info.png").default} width="240"/>
<img src={require("../energy-mode/img/device_setting.png").default} width="240"/>
<img src={require("./img/soc_settings.png").default} width="240"/>
<img src={require("./img/backup_reserve.png").default} width="240"/>
:::


## 2. PV+AC

当补电来源为 **PV+AC** 时，系统支持通过 AC 和 PV 共同参与补电。

👉 **APP操作步骤**：设备页面-点击对应的微储设备-点击<img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/>图标-点击电量设置
1. 设置**补电来源**：选择**PV+AC**
2. 设置**补电功率**：设置AC补电时的功率，默认 500W
   - SolidFlex/PowerFlex 2000：100W～2400W
   - BK1600/BK1600 Ultra：100W～1200W

<img src={require("./img/charging_source_ac.png").default} width="240"/>
<img src={require("./img/charging_power.png").default} width="240"/>


**运行逻辑**

| 电池电量（SOC） | 系统状态 | 系统行为说明                               |
| --------------- | -------- | ------------------------------------------ |
| 高于应急电量    | 正常运行 | 电池可正常充放电                           |
| = 应急电量      | 进入保护 | 停止电池放电，保留应急电量；光伏仍可供负载 |
| ＜ 应急电量 2%  | 启动补电 | **PV + AC 同时充电**，快速恢复电量         |
| 恢复到应急电量  | 停止 AC  | 停止市电充电，仅保留光伏充电               |
| ＞ 应急电量 2%  | 恢复正常 | 恢复电池放电                               |




## 3. 仅PV

当 补电来源为**仅PV**时，系统优先通过光伏进行补电。

:::info
在一般情况下，不主动使用 AC 给电池充电；但在极低电量场景下，系统仍会触发保护性 AC 补电逻辑。
:::


👉 **APP操作步骤**：设备页面-点击对应的微储设备-点击<img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/>图标-点击电量设置

- 设置**补电来源**：选择**仅PV**  

    <img src={require("./img/charging_source_pv.png").default} width="240"/>


**运行逻辑**

| 电池电量（SOC） | 系统状态     | 系统行为说明                        |
| --------------- | ------------ | ----------------------------------- |
| 高于应急电量    | 正常运行     | 电池可正常充放电                    |
| = 应急电量      | 进入保护     | 停止电池放电；光伏仍可供负载        |
| ＜ 应急电量 2%  | 光伏补电     | **仅使用光伏充电**                  |
| ≈ 3%（总电量）  | 极低电量保护 | 自动启用 PV + AC 充电，防止电池耗尽 |
| ≥ 5%（总电量）  | 退出保护     | 停止 AC，恢复为仅光伏充电           |
| ＞ 应急电量 2%  | 恢复正常     | 恢复电池放电                        |



## 4. 两种补电模式的区别

| 场景  | 到达应急电量           | 低于应急电量 2%  | 低电量保护                              | 恢复放电条件        |
| ----- | ---------------------- | ---------------- | --------------------------------------- | ------------------- |
| PV+AC | 停止放电，PV可响应负载 | PV + AC 共同补电 | -                                       | 充至比应急电量高 2% |
| 仅PV  | 停止放电，PV可响应负载 | 仅 PV 补电       | 总电量 3% 触发 PV + AC 回充，5% 停止 AC | 充至比应急电量高 2% |