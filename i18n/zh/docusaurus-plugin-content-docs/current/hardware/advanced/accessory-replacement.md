---
title: 配件更换
description: 更换 WiFi+LAN 模块并迁移设备设置及历史数据。
---

# 配件更换

本指南适用于以下型号：
- PowerFlex 2000
- PowerFlex 2000 Eco
- PowerFlex 3000 AC
- PowerFlex 3000 Hybrid
- SolidFlex 2000
- SolidFlex 2000 Eco
- SolidFlex 3000 AC


## 准备

请确认包装完好无损。打开包装盒，取出所有配件，并根据装箱清单核对配件数量及型号是否正确。

<img src={require("./img/packing_list.png").default} width="960"/>

---

## 步骤 1. 拆卸原模块

:::warning
更换模块前，请确保设备已断电。
:::

**1. 拆下固定螺丝**

使用包装内附带的螺丝刀拆下固定模块的 6 颗螺丝。

> 注意：请妥善保管螺丝，安装新模块时需要重新使用。

<img src={require("./img/remove_screws.png").default} width="360"/>

**2. 拆下原模块**

沿插槽方向平稳拉出模块。

<img src={require("./img/remove_module.png").default} width="360"/>

**3. 断开通信线缆**

按住连接器上的卡扣，然后轻轻拔出通信线缆。

<img src={require("./img/unplug_cable.png").default} width="360"/>

:::tip
拆下模块后，请检查设备插槽是否与新模块的螺丝孔位匹配。
<img src={require("./img/model_confirmation.png").default} width="360"/>
:::

---

## 步骤 2. 安装新模块

**1. 连接通信线缆**

将通信线缆插入新 PCB 板对应的接口，并确保连接牢固。

<img src={require("./img/connect_cable.png").default} width="360"/>

**2. 安装新模块**

将新模块与插槽对齐，并轻轻推入，直至完全安装到位。

<img src={require("./img/install_module.png").default} width="360"/>

**3. 固定模块**

使用之前拆下的 6 颗螺丝重新固定模块，并使用螺丝刀将其拧紧。

<img src={require("./img/fasten_screws.png").default} width="360"/>

**4. 检查安装情况**

确认以下项目：

* 模块已完全插入。
* 所有螺丝均已牢固拧紧。
* 盖板安装牢固，无松动现象。

<img src={require("./img/check_installation.png").default} width="360"/>

**5. 粘贴新的序列号标签**

使用包装内提供的新 SN 标签覆盖设备原有的序列号标签。App 将通过新的序列号识别设备。

请确保以下两个位置的原标签均已正确覆盖：

* 设备右上角的原序列号标签

  <img src={require("./img/cover_sn1.png").default} width="720"/>

* 设备侧面的铭牌标签

  <img src={require("./img/cover_sn2.png").default} width="600"/>

---

## 步骤 3. 在 App 中更新设备信息

:::tip
开始前请确保：
- 手机蓝牙已开启。
- 设备已开机。
- 在整个操作过程中，手机尽量靠近设备。
:::

### 1. 更新设备信息

1. 在设备设置页面，点击 **Accessory Replacement**。

2. 扫描新配件上的二维码。  

3. 点击 **Next**，查看 **Replacement Confirmation** 信息，然后点击 **OK** 继续。

4. 等待更换流程完成。

   > 在此过程中，系统会自动更新配件信息并迁移设备设置，包括集群设置、负载来源设置以及关联设备。

5. 配件信息更新成功后，点击 **Next** 继续。

<img src={require("./img/accessory_replacement.png").default} width="240"/>
<img src={require("./img/scan_qr_code.png").default} width="240"/>
<img src={require("./img/accessory_info.png").default} width="240"/>
<img src={require("./img/confirm_replacement.png").default} width="240"/>
<img src={require("./img/connect_accessory.png").default} width="240"/>
<img src={require("./img/connect_accessory_success.png").default} width="240"/>

### 2. 迁移历史数据

点击 **Start Migration** 迁移历史数据。

如果暂时不想迁移历史数据，可点击 **Skip**。您也可以稍后在 [更换记录](#4-查看更换记录) 中启动迁移。

<img src={require("./img/data_sync.png").default} width="240"/>
<img src={require("./img/skip_data_sync.png").default} width="240"/>

### 3. 重新连接设备网络

1. 输入 Wi-Fi 名称（SSID）和密码，然后点击 **Set Up**。
2. 等待网络连接成功。

<img src={require("./img/wifi_settings.png").default} width="240"/>
<img src={require("./img/wifi_connected.png").default} width="240"/>

---

## 4. 查看更换记录

如需查看历史更换记录，进入：**Settings > Accessory Replacement**

在 **Replacement History** 中，您可以：

* 查看更换记录，包括更换时间、设置迁移状态以及历史数据迁移状态。
* 点击对应记录中的 **Start Migration**，进入设备迁移页面。若历史数据尚未开始迁移，可在此启动迁移。

<img src={require("./img/accessory_replacement.png").default} width="240"/>
<img src={require("./img/replacement_history.png").default} width="240"/>
<img src={require("./img/device_migration.png").default} width="240"/>

:::info
历史数据迁移在启动后会自动通过云端完成，迁移过程中无需停留在设备迁移页面。

您可以随时在 **Replacement History** 中查看迁移进度和状态。
:::