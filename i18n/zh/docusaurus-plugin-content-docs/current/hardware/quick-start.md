---
title: 快速开始
description: Indevolt 储能设备安装与首次使用指南
---

# 快速开始

本文档内容作为通用安装指导。**相关型号的差异点在全文中以 💡 提示块标注**，请根据您购买的型号对照阅读。

:::warning

操作前请先阅读**[安全须知](./safety.md)**，以确保安全。

:::

---

## 装箱清单

**电源模块 ：**

<img src={require("./img/power-packing-list.png").default} width="800"/>

**电池模块（可选） ：**

<img src={require("./img/battery-packing-list.png").default} width="800"/>

> 💡 **型号差异提示**：**无 PV 端口**的机型（AC / Eco 机型）不包含 MC4 工具。

---

## 安装

### 选择安装位置

- 请勿在阳光直射、火源或易爆物品附近安装各模块。
- 确保安装位置远离洪水等潜在危险。
- 建议在海拔 2000 m 以下的环境中使用。

### 测量间距

为散热和安全绝缘预留足够空间。

1. 根据待安装的设备配置选择合适的安装空间。

<img src={require("./img/system-size.png").default} width="720"/>

> 💡 **型号差异提示**：其他系列使用不同的扩展电池和容量值：
>
> | 电源模块 | 扩展电池 |
> | ---------------------------- | ----------------- |
> | SolidFlex 2000/Eco | 1,792 Wh |
> | PowerFlex 2000/Eco | 2,009 Wh |
> | SolidFlex 3000 Hybrid/AC | 1,792 Wh |
> | SolidFlex 3000 Hybrid/AC Pro | 2,009.6 Wh |
> | PowerFlex 3000 Hybrid/AC | 2,016 Wh |
>
> | 电池模块 | 扩展电池 |
> | --- | --- |
> | SFA 1800 | 1,792 Wh |
> | SFA 3600 | 3,584 Wh |
> | PFA 2000 | 2,016 Wh |
> | PFA 4000 | 4,032 Wh |

2. 设备尺寸信息：

<img src={require("./img/device-size.png").default} width="600"/>



注意：以下组件不包含在包装内。请确保在安装和电气连接前准备就绪。

<img src={require("./img/tools.png").default} width="480"/>

### 安装步骤

以下步骤以一个电源模块和两个电池模块的安装为例。

1. 在扩展电池底部安装四个支撑脚。
   <img src={require("./img/installation-step1.png").default} width="360"/>

2. 设备背部（散热器区域）必须保持至少 30 mm 的最小间隙，以确保充分通风和高效散热。
   <img src={require("./img/installation-step2.png").default} width="360"/>

3. 调节设备底部四个支撑脚的高度，确保设备处于水平位置，并使用水平仪进行校准。
   <img src={require("./img/installation-step3.png").default} width="480"/>

4. 取下电源模块底部的保护盖，以及中间电池模块顶部和底部的保护盖。

   <img src={require("./img/installation-step4.png").default} width="600"/>

   :::warning

   安装底部电池包时，请保持橡胶塞原位，以防止进水损坏。

   请注意不要取下最底部扩展电池的保护盖，以免损坏设备！
   :::

5. 将扩展电池包依次堆叠，电源模块置于顶部，并连接两个对应的连接器。
   <img src={require("./img/installation-step5.png").default} width="300"/>

6. 使用 M4 十字盘头螺丝将 L 形墙壁支架固定在电源模块下方第一个扩展电池的两侧。
   <img src={require("./img/installation-step6.png").default} width="300"/>

7. 电源模块和电池模块安装完成后，使用 M4 十字盘头螺丝将两个模块固定。

   <img src={require("./img/installation-step7.png").default} width="480"/>

8. 在两侧标记钻孔位置，使用 φ8 钻头钻孔，深度为 60 mm。

   <img src={require("./img/installation-step8.png").default} width="480"/>

9. 用锤子将 M5×60 自攻螺丝的塑料胀塞敲入孔中，然后用十字螺丝刀将 M5×60 自攻螺丝拧紧固定到 L 形墙壁支架上。
   <img src={require("./img/installation-step9.png").default} width="480"/>

   本产品包含一个双重隔离变压器，符合安全要求，无需测量方阵接地绝缘电阻或检测方阵故障电流。

:::info

电源连接必须接入已接地的插座，否则存在触电风险。或者，应将外壳接地。接地点如下图所示。

<img src={require("./img/installation-step10.png").default} width="240"/>

:::

---

## 电气连接

### 连接电缆

:::info 💡 型号差异提示

以下 PV 连接说明仅适用于有 PV 端口的机型。

无 PV 端口的 Eco 和 AC 机型不适用于本节内容。

:::

以下步骤以配备四块太阳能板的系统安装为例。

<img src={require("./img/connect-cables.png").default} width="960"/>

:::info 💡 型号差异提示：并网馈电功率

逆变器的标准交流输出功率限制为 800 W。如果您希望提高此数值，必须由合格电工对装置进行检查，以确认其符合现行安全要求。检查完成后，您可以在 INDEVOLT 应用中申请将功率提升至 3000 W。

**SolidFlex 2000/Eco 和 PowerFlex 2000/Eco** 的功率上限可提升至 **2400 W**。

:::

#### 步骤 1：连接电网

1. 使用随附的带安全插头的电源线，将电源模块连接到家中的电源插座。

<img src={require("./img/connect-grid.png").default} width="720"/>

#### 步骤 2：连接太阳能板

配备四个独立的最大功率点跟踪（MPPT）单元。每个光伏输入作为一个独立的 MPPT 运行。

- 开路电压（Voc）：每个 PV 输入 < 60 V
- 短路电流（Isc）：每个 PV 输入 < 20 A

> 💡 **型号差异提示**：SolidFlex 3000 Hybrid / SolidFlex 3000 Hybrid Pro 手册中标明“短路电流（Isc）：每个 PV 输入 < 22 A”。

- 为获得最佳效率，我们建议太阳能线缆长度不超过 3 m，以减少传输损耗。

- 组件的正极（+）和负极（–）端子必须连接到同一个 PV 输入。

  <img src={require("./img/connect-pv.png").default} width="480"/>

:::warning

注意：
当电池模块发生故障时，系统将锁定。该锁定无法自动恢复，需要专业售后服务处理。经专业售后确认满足要求后，系统功能方可恢复。

:::

### 电力系统

该设备可用于单相或三相家庭系统：

<img src={require("./img/electricity-system.png").default} width="720"/>

### 交流耦合连接

如果您已有微型逆变器，也可以通过交流耦合将微型逆变器的输出连接到设备的 Backup 端子。此时，PV 输入将通过微型逆变器为负载供电。当功率超过 3000 W（可通过 APP 调整）时，设备将与微型逆变器断开连接。

注意：AC /Eco 机型仅支持通过微型逆变器连接太阳能组件，没有 PV 端口。

> 💡 **型号差异提示**：对于 SolidFlex 2000/Eco 和 PowerFlex 2000/Eco，此交流耦合连接的断开阈值为 **2400 W** 而非 3000 W（可通过 APP 调整）。

<img src={require("./img/AC-coupled Connection 1.png").default} width="480"/>

<img src={require("./img/AC-coupled Connection 2.png").default} width="480"/>

---

## 开机

找到主机左侧的 ON/OFF 按钮，长按 2 秒。

设备启动时，前面板上的蓝色 LED 指示灯将以从中心向两侧扩散的动画点亮。

<img src={require("./img/power-on.png").default} width="360"/>
<img src={require("./img/power-on-led-state.png").default} width="240"/>

---

## INDEVOLT APP

通过 INDEVOLT App，您可以：

- 实时监控设备运行状态和当前功率
- 查看电池电量和充放电状态
- 查看每日/每周/每月/每年的发电与用电统计
- 配置能源策略、计划任务，并执行固件升级

📥 首次使用时，请先完成 [App 下载、账号注册和设备设置](https://docs.indevolt.com/docs/app/installation)。
