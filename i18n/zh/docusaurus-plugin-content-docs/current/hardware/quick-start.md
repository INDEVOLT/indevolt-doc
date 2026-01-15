---
title: 快速上手
description: Indevolt阳台储能设备安装与初次使用指南
---

# 快速上手

本章节指导用户从开箱到设备初次使用的完整流程，包括安装前检查、设备安装、首次开机以及 App 添加设备等步骤。

:::warning

在操作前，请先阅读 **[安全须知](./safety.md)** 以确保安全。

:::


## 准备工具

在安装设备前，请准备以下工具：
   
<img src={require("./img/tools.png").default} width="480"/>

---

## 开箱与配件清单核对

1. 确保包装完整无损。
2. 打开包装盒，逐一取出设备及配件。  
3. 对照清单确认无缺件或损坏。   
   <img src={require("./img/power-packing-list.png").default} width="960"/>
   
   > 如果您还选购了电池模块，请对照以下清单  
   <img src={require("./img/battery-packing-list.png").default} width="960"/>

---

## 设备安装说明

:::info
- 请勿将模块安装在阳光直射、靠近明火或易燃易爆物品的区域。
- 确保安装位置免受洪水等潜在危害的影响。
- 建议在海拔2000米以下的环境中使用。
- 保持安装位置通风良好，方便散热。  
:::

**步骤1：测量距离**

根据实际设备配置计算所需安装空间，确保设备安装后留有足够的散热和安全绝缘空间。

<img src={require("./img/system-size.png").default} width="480"/>
<img src={require("./img/device-size.png").default} width="480"/>

**步骤2：固定设备**

以下示例以 **1 个电源模块 + 2 个电池模块** 为例：

1. 在最底部的扩展电池模块底部安装 4 个支撑脚。
   <img src={require("./img/installation-step1.png").default} width="360"/>
2. 将电池模块放置在地面上，并与墙面保持 20–30 mm 的距离。
   <img src={require("./img/installation-step2.png").default} width="360"/>
3. 调整设备底部四个支撑脚的高度，使设备保持水平状态，并使用水平仪进行校准。
   <img src={require("./img/installation-step3.png").default} width="480"/>
4. 拆除以下位置的防护盖：
   - 电源模块底部的防护盖
   - 中间电池模块顶部和底部的防护盖

   :::warning
   请勿拆除最底部扩展电池的防护盖，以免造成设备损坏。
   :::

   <img src={require("./img/installation-step4.png").default} width="600"/>

5. 将扩展电池模块对准对应接口，逐个向上叠放，并将电源模块安装在最上方。
   <img src={require("./img/installation-step5.png").default} width="240"/>
6. 使用 M4 十字螺钉，将 L 形墙面固定支架安装在电源模块下方的第一个扩展电池模块两侧。
   <img src={require("./img/installation-step6.png").default} width="240"/>
7. 在电源模块与电池模块叠放完成后，使用 M4 十字螺钉将两个模块固定在一起。
   <img src={require("./img/installation-step7.png").default} width="480"/>
8. 在墙面两侧标记钻孔位置，使用直径 Ø8 mm 的钻头钻孔，孔深约 60 mm。
   <img src={require("./img/installation-step8.png").default} width="480"/>
9.  使用锤子将 M5×60 自攻螺钉配套的塑料膨胀套敲入孔中，然后使用十字螺丝刀将螺钉拧紧，将 L 形墙面固定支架牢固固定在墙面上。
    <img src={require("./img/installation-step9.png").default} width="480"/>


:::info

本产品内置双重隔离变压器，符合相关安全要求，无需测量光伏阵列的接地绝缘电阻，也无需检测阵列故障电流。

主机连接必须接入已接地的电源插座，否则可能存在触电风险。如无法使用接地插座，应对设备外壳进行接地处理，设备接地点位置如下图所示。

<img src={require("./img/installation-step10.png").default} width="240"/>

:::

---

## 电气连接
   
:::info
- 以下光伏连接说明仅适用于**非ECO型号**。ECO型号不配备光伏端口，不适用本节内容。
- 交流并网电源的安装须符合当地法规；若超出允许范围，建议聘请专业电工进行操作。
:::

以下连接步骤以配套四块太阳能板的标准场景为例。
<img src={require("./img/connect-cables.png").default} width="960"/>

**步骤 1：连接电网**

1. 使用产品随附的带安全插头的电源线（5米）。
2. 将电源线一端接入主机的 GRID IN/OUT 端口。
3. 将电源线另一端的插头接入家庭或现场的电源插座。

<img src={require("./img/connect-grid.png").default} width="720"/>

**步骤 2：连接太阳能板**

使用光伏延长线，将每组太阳能板的正负极输出端分别接入主机对应的 PV输入接口（标有PV1, PV2等）。

<img src={require("./img/connect-pv.png").default} width="480"/>

:::warning
严禁将两个或多个组件串联连接，否则可能导致输入电压超过60V并损坏设备。
:::

:::info
当主机发生故障时，系统将锁定。此锁定无法自动恢复，需由专业[售后人员](./after-sales.md)处理。经专业售后确认符合要求后，系统功能方可恢复。
:::

---

## 开机

找到位于主机左侧的 ON/OFF 按键，长按2秒。主机启动时，机身正面的蓝色LED指示灯将被点亮，并以从中心向上下扩散的动效显示。
<img src={require("./img/power-on.png").default} width="360"/>
<img src={require("./img/power-on-led-state.png").default} width="240"/>

---

## 使用 App

通过 INDEVOLT App，您可以：

- 实时查看设备运行状态和当前功率
- 了解电池剩余电量与充放电情况
- 查看家庭的日/周/月/年发电与用电统计
- 设置用能策略、定时计划或执行固件升级

📥 初次使用 App 时，请先完成[下载安装、账号注册与设备添加](../app/installation.md)。
