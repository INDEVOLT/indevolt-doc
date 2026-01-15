---
title: 设备
description: 集中管理家庭能源设备，实时监控设备状态与运行数据。
---

# 设备

设备页面集中展示您家庭中所有的能源设备，并列出设备SN、在线状态及数据更新时间等关键信息。点击右上角 **+** 按钮，即可[添加设备](./add-device.md)。

<img src={require("./img/device.png").default} width="240"/>


## 1. 编辑设备

点击页面下方的**编辑**按钮，选择设备，或**长按**设备卡片，即可进入编辑模式，支持以下操作：
- 网络设置：点击**网络设置**按钮进入设置，配置流程与添加设备时的[配网](./add-device.md#步骤三配置网络)步骤一致。
- 重命名：点击**重命名**按钮修改设备名称。
- 删除设备：点击**删除设备**按钮。App会弹窗二次确认，当您确认后即可删除当前设备。删除后您将无法看到设备的数据，请谨慎操作。

<img src={require("./img/edit_device1.png").default} width="240"/>
<img src={require("./img/edit_device2.png").default} width="240"/>


## 2. 设备详情

点击设备卡片进入设备详情页。详情页展示连接信号、SN、实时数据、快刷功能开关（⚡）等通用信息，以及因设备类型不同而显示的特定参数与功能。

<img src={require("./img/device_info.png").default} width="240"/>


## 3. 统计

点击设备详情页右上角的 <img src={require("./img/statistics_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> 图标，可进入统计页面，查看日、周、月、年不同维度下的数据曲线。

<img src={require("./img/statistics.png").default} width="240"/>


## 4. 设备设置

点击设备详情页右上角的 <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> 图标，可进入设置页面，包含设备名称、关联设备、网络设置、固件升级，以及其他设备特定功能。

<img src={require("./img/settings.png").default} width="240"/>

### 4.1 修改设备名称

点击**设备名称**栏，即可直接修改设备在App中显示的名称。

<img src={require("./img/change_deivce_name.png").default} width="240"/>

### 4.2 关联设备

为便于集中查看数据与管理，系统支持为设备建立父子关联关系：

- 储能设备可作为父设备，添加关联子设备。
  
    <img src={require("./img/select_link_subdevice.png").default} width="240"/>
    <img src={require("./img/link_subdevice1.png").default} width="240"/>
    <img src={require("./img/link_subdevice2.png").default} width="240"/>  
- 其他类型设备可作为子设备，关联至父设备。
  
    <img src={require("./img/select_link_parent_device.png").default} width="240"/>
    <img src={require("./img/link_parent_device1.png").default} width="240"/>
    <img src={require("./img/link_parent_device2.png").default} width="240"/>  

若家庭中暂无可用以关联的设备，请先点击[添加设备](./add-device.md)按钮，将所需设备加入家庭。
<img src={require("./img/link_new_device.png").default} width="240"/>  

### 4.3 网络设置

点击**网络设置**按钮，可查看设备当前连接的Wi-Fi名称及获取的IP地址。

<img src={require("./img/select_network_settings.png").default} width="240"/>
<img src={require("./img/network_settings.png").default} width="240"/>


### 4.4 固件升级

点击**固件升级**按钮，可查看设备当前固件版本及可用更新。如有新版本，点击**立即更新**即可在线升级。

<img src={require("./img/select_fw_update.png").default} width="240"/>
<img src={require("./img/fw_update.png").default} width="240"/>
