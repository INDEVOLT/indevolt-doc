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


### 4.2 功率设置

在功率设置页面，您可以设置设备的功率限制，包括：最大交流输出功率、最大交流输入功率、最大馈网功率。

1. 进入设备设置页面，点击**功率设置**。
2. 选择需要修改的功率项。
3. 滑动选择需要设置的功率值。
4. 点击**保存**以应用设置。

<img src={require("./img/device_settings.png").default} width="240"/>
<img src={require("./img/power_settings.png").default} width="240"/>
<img src={require("./img/ac_output_power.png").default} width="240"/>

#### 设置超过 800W 的交流功率

如果需要将最大交流输出功率或最大交流输入功率设置为超过 800W，系统会根据您设置的设备使用国家，显示不同的提示或验证流程。

:::info

根据**德国**安全标准，插电式电池系统的交流输出功率不得超过 **800W**。因此，当德国用户尝试设置超过 800W 时，需要进行 专业模式验证，以确保安装符合安全规范。

其他国家用户在设置超过 800W 时，只会看到安全提示，无需进行验证。

:::


**第一步：设置设备使用国家**

在设备设置页面中，找到**设备使用国家**，并从列表中选择您所在的国家。
<img src={require("./img/device_settings.png").default} width="240"/>
<img src={require("./img/device_country.png").default} width="240"/>

**第二步：申请邀请码（仅德国用户）**

当德国地区用户首次设置超过 800W 功率时，需要进行**专业模式验证**，获取邀请码后才能完成设置。

1. 在设置超过 800W 并点击保存后，App 会弹出专业模式验证页面。
2. 点击**申请激活码**。
3. 填写以下信息后点击**保存**提交申请：
   - 用户信息
   - 设备信息
   - 安装人员信息
   - 安装场景照片
4. 提交后，可在**激活码信息**区域查看审核状态。若页面未及时更新审核信息，可返回专业模式验证页面，点击查看申请信息：
   - 审核中：申请正在审核
   - 审核通过：系统会显示邀请码
   - 审核失败：需要根据提示重新提交照片，例如：
     - 图片不清晰
     - 拍摄角度或内容不完整
     - 无法确认安装合规性
     - 图片与申请设备不匹配
     - 图片不符合真实性要求
5. 审核通过后，复制邀请码并粘贴到**专业模式验证**页面对应输入框，点击**提交**完成验证。
  
     <img src={require("./img/verification1.png").default} width="240"/>
     <img src={require("./img/verification2.png").default} width="240"/>
     <img src={require("./img/verification3.png").default} width="240"/>
     <img src={require("./img/auth_failure.png").default} width="240"/>
     <img src={require("./img/auth_success.png").default} width="240"/>


**第三步：确认并保存功率设置**

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="german" label="德国" default>

    完成验证后，当功率设置超过法规建议值时，App 会弹出安全提示。点击 **继续保存** 即可应用设置。
    <img src={require("./img/800w_confirmation.png").default} width="240"/>

  </TabItem>
  <TabItem value="others" label="其他国家">
    
    当功率设置超过 800W 时，App 会显示法规安全提示。确认提示内容后，点击**继续保存**即可应用设置。
    <img src={require("./img/safety_note.png").default} width="240"/>

  </TabItem>
</Tabs>


### 4.3 关联设备

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

### 4.4 网络设置

点击**网络设置**按钮，可查看设备当前连接的Wi-Fi名称及获取的IP地址。

<img src={require("./img/select_network_settings.png").default} width="240"/>
<img src={require("./img/network_settings.png").default} width="240"/>


### 4.5 固件升级

点击**固件升级**按钮，可查看设备当前固件版本及可用更新。如有新版本，点击**立即更新**即可在线升级。

<img src={require("./img/select_fw_update.png").default} width="240"/>
<img src={require("./img/fw_update.png").default} width="240"/>

## 5. 并机分组

当多台储能设备通过并机连接后，它们将作为一个统一的能源集群进行管理和显示。集群由一台主机设备统一协调控制，自动分配电能，并同步应用运行模式、馈网限制等。
<img src={require("./img/cluster_device_list.png").default} width="240"/>


点击该并机分组卡片，即可进入集群详情页面，查看主从设备关系、集群的用能策略、实时功率数据。
<img src={require("./img/cluster_info.png").default} width="240"/>


点击详情页右上角的设置图标 ⚙，可修改集群配置以及解除并机关系。
<img src={require("./img/cluster_settings.png").default} width="240"/>
