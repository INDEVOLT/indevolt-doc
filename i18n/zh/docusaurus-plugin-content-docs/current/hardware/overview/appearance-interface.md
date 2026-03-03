---
title: 设备外观与接口说明
description: Guide
---

# 设备外观与接口说明


## 外观

<img src={require("./img/appearance.png").default} width="480"/>

| 序号 | 功能                                      |
| ---- | ----------------------------------------- |
| 1    | 运行状态LED                               |
| 2    | 开/关按键                                 |
| 3    | 无线模块                                  |
| 4    | MC4光伏输入接口1                          |
| 5    | MC4光伏输入接口2                          |
| 6    | MC4光伏输入接口3                          |
| 7    | MC4光伏输入接口4                          |
| 8    | 并网接口                                  |
| 9    | 备电接口                                  |
| 10   | 保护导体螺丝孔（保护导体截面积至少4 mm²） |
| 11   | 支架固定孔                                |

:::info
ECO型号无 4–7 端口。
:::

## 按键

| 操作               | 功能            |
| ------------------ | --------------- |
| 关机状态下长按2秒  | 开机            |
| 开机状态下长按2秒  | 关机            |
| 开机状态下长按10秒 | 重置蓝牙和Wi-Fi |


## LED


|                                  LED                                   | 描述                      | 状态         |
| :--------------------------------------------------------------------: | ------------------------- | ------------ |
|  <img src={require("./img/led-starting.png").default} style={{ height: 150 }}/>   | 蓝色LED从中心向上下点亮   | 启动中       |
|  <img src={require("./img/led-charging.png").default} style={{ height: 150 }}/>   | 绿色LED从当前电量向上点亮 | 充电中       |
| <img src={require("./img/led-discharging.png").default} style={{ height: 150 }}/> | 蓝色LED从当前电量向下熄灭 | 放电中       |
| <img src={require("./img/led-iot-failure.png").default} style={{ height: 150 }}/> | LED显示黄色               | IoT连接失败  |
|    <img src={require("./img/led-fault.png").default} style={{ height: 150 }}/>    | LED显示红色               | 故障         |
|  <img src={require("./img/led-shutdown.png").default} style={{ height: 150 }}/>   | 蓝色LED从两侧向中心点亮   | 关闭中       |
|    <img src={require("./img/led-reset.png").default} style={{ height: 150 }}/>    | 蓝色LED闪烁三次           | 设备重置成功 |