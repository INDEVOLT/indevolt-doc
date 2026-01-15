---
title: 我的
description: 管理个人账户与个性化设置，定制专属的能源管理体验。
---

# 我的

单击底部标签栏**我的**进入页面。该页面用于用于管理账号信息、调整应用设置及配置个性化选项。

<img src={require("./img/profile_page.png").default} width="240"/>

## 1. 账号

点击**账号**进入账号设置页面，可查看和管理所有账号相关配置。

<img src={require("./img/select_account.png").default} width="240"/>
<img src={require("./img/account.png").default} width="240"/>


### 1.1 账号信息

点击**账号信息**按钮，进入详细账号信息页，可更换个人头像、修改用户名、更新绑定的邮箱或手机号。

<img src={require("./img/profile.png").default} width="240"/>
<img src={require("./img/account_profile.png").default} width="240"/>


### 1.2 修改密码

点击**修改密码**按钮，按提示输入原密码及新密码后，点击**保存**。保存成功后，系统将自动跳转至登录页，请使用新密码重新登录。

<img src={require("./img/select_change_password.png").default} width="240"/>
<img src={require("./img/change_password.png").default} width="240"/>


### 1.3 账号注销

:::warning
注销账号将永久删除账号所有信息，且无法恢复，请您谨慎操作。
:::

1. [删除](#23-删除家庭)账号内的所有家庭。
2. 点击**账号注销**按钮开始注销流程。
3. 请仔细阅读页面上的内容以及《账号注销提醒》，确认您符合注销条件并了解相关后果。如无疑问，请勾选**我已阅读并同意账号注销提醒**。
4. 点击**确认注销**按钮继续下一步。
5. 为保障账号安全，系统将要求您验证身份：输入账号密码，验证绑定的手机号或邮箱。
6. 输入收到的验证码，点击**完成**即可完成账号注销。

   <img src={require("./img/delete_account.png").default} width="240"/>
   <img src={require("./img/account_cancellation.png").default} width="240"/>
   <img src={require("./img/logout_account_verification.png").default} width="240"/>

### 1.4 退出登录

点击**退出登录**按钮将安全退出当前账号，系统将返回至登录页面。

<img src={require("./img/logout.png").default} alt="App overview" width="240"/>
<img src={require("./img/exit.png").default} alt="App overview" width="240"/>

### 1.5 记住密码

记住密码功能可帮助您保存**账号登录密码**及**设备配网时的 Wi-Fi 密码**，避免重复输入。

您可通过控制记住密码的开关设置是否记住账号密码以及Wi-Fi密码。

<img src={require("./img/account.png").default} width="240"/>

## 2. 家庭信息

点击当前家庭名，进入家庭信息页。

<img src={require("./img/select_my_home.png").default} width="240"/>
<img src={require("./img/edit_home.png").default} width="240"/>


### 2.1 添加家庭

1. 点击右上角的 **+** 按钮。
2. 在新增页面中，完善家庭信息：
   - 房屋名称：为此家庭设置一个易于识别的名称。
   - 所在地区：App将自动获取国家信息，您也可手动点击选择。
   - 家庭地址：App会自动填充大致地区；您也可单击地址栏旁的图标，在Mapbox地图上重新定位。
3. 信息确认无误后，点击**添加**按钮。新家庭将立即出现在您的家庭列表中。

   <img src={require("./img/add_home.png").default} width="240"/>
   <img src={require("./img/location.png").default} width="240"/>
   <img src={require("./img/home_address.png").default} width="240"/>


### 2.2 编辑家庭信息

您可以编辑以下家庭信息：
<img src={require("./img/edit_home.png").default} width="240"/>

#### 2.2.1 家庭名称

点击名称字段进行修改。
<img src={require("./img/edit_home_name.png").default} width="240"/>

#### 2.2.2 家庭地址

点击地址字段重新选择或定位。
<img src={require("./img/edit_home_address.png").default} width="240"/>

#### 2.2.3 电网及光伏情况

设置家庭的用电与售电方式：
- 是否从电力公司购电。
- 是否获准售电给电力公司。

  <img src={require("./img/grid_supply1.png").default} width="240"/>
  <img src={require("./img/grid_supply2.png").default} width="240"/>

#### 2.2.4 添加家庭成员

1. 点击**添加成员**按钮。
2. 设置成员权限：成员（仅限查看数据）或管理员（拥有编辑权限）。
3. 点击**下一步**。
4. 输入对方的账号（邮箱或手机号）。
5. 点击**查找**按钮。
6. 在搜索结果中，点击用户旁的添加图标。
7. 页面提示**添加成功**即完成操作。

   <img src={require("./img/add_home_member.png").default} width="240"/>
   <img src={require("./img/select_member_permission.png").default} width="240"/>
   <img src={require("./img/invite_member.png").default} width="240"/>
   <img src={require("./img/member_added.png").default} width="240"/>

#### 2.2.5 管理家庭成员权限

1. 在成员列表中，点击想要修改权限的成员，进入其信息页面。
2. 点击**家庭权限**字段。
3. 选择新的权限级别：

   | 成员权限 | 说明                                                   |
   | -------- | ------------------------------------------------------ |
   | 成员     | 仅限查看家庭及设备数据。                               |
   | 管理员   | 拥有编辑家庭设置的权限。                               |
   | 拥有者   | 将家庭的所有权转让给对方，您将失去当前家庭的所有权限。 |

4. 点击**确定**按钮。

   <img src={require("./img/select_member.png").default} width="240"/>
   <img src={require("./img/manage_member_permission.png").default} width="240"/>

#### 2.2.6 删除家庭成员

在成员信息页面底部，点击**删除**按钮。App会弹窗二次确认，当您确认后即可移除当前成员。

<img src={require("./img/delete_member.png").default} width="240"/>

### 2.3 删除家庭

在家庭管理页面底部，点击**删除**按钮。App会弹窗二次确认，当您确认后即可移除当前家庭。

:::warning
此操作不可逆，将清空该家庭的所有数据，请谨慎操作！
:::

<img src={require("./img/delete_home.png").default} width="240"/>


## 3. 电价设置

点击**电价设置**按钮，进入电价管理界面。

<img src={require("./img/select_tariff.png").default} width="240"/>
<img src={require("./img/tariff.png").default} width="240"/>


### 3.1 添加电价

点击 **+添加电价**按钮，开始创建新的**购电或售电价格**方案。
<img src={require("./img/add_price.png").default} width="240"/>
<img src={require("./img/electricity_price.png").default} width="240"/>

购电电价与售电电价的设置流程相似，以下以购电电价为例进行说明：
<img src={require("./img/configure_price.png").default} width="240"/>

1. 设置电价方案的**开始与结束时间**。
   - 结束时间默认设置为现在，电价将持续应用。
      
      <img src={require("./img/price_start_end_time1.png").default} width="240"/>

   - 如需设置历史时段电价，请关闭现在按钮后手动选择起止时间。

      <img src={require("./img/price_start_end_time2.png").default} width="240"/>

2. 选择家庭**所在区域**。
3. 从列表中选择您的**电力供应商**。
4. 配置**电价方案**：
   - **动态**：需设置税费与每月固定收取的基础费用。
      
      <img src={require("./img/dynamic_tariff.png").default} width="240"/>

   - **静态**：需设置基础费用与不同时段的分时电价（TOU）。

      <img src={require("./img/static_tariff1.png").default} width="240"/>
      <img src={require("./img/static_tariff2.png").default} width="240"/>
      <img src={require("./img/static_tariff3.png").default} width="240"/>
5. 点击**保存**按钮。

:::info

此处设置的电价仅用于App内部的数据可视化与估算，不作为实际计费依据。精确的电费账单请以电力供应商提供的为准。

:::

### 3.2 查看历史电价

点击右上角图标查看历史电价。
<img src={require("./img/history_price_plan1.png").default} width="240"/>
<img src={require("./img/history_price_plan2.png").default} width="240"/>


## 4. 并机设置

并机设置功能支持通过有线或无线连接方式，将多个储能设备或逆变器组合为一个整体系统，从而实现设备容量扩展与负载均衡。


:::info 前提条件
- 当前家庭下至少有一台储能设备及一台其他兼容设备。
- 所有参与并机的设备必须处于开机状态，并连接到同一WiFi网络。
:::

您需为设备配置主从模式：指定一台作为主机，其余作为从机，由主机统一协调所有从机设备运行。

下表是支持作为主机和从机的设备型号：

<table><thead>
  <tr>
    <th></th>
    <th colspan="2">有线并机</th>
    <th colspan="2">无线并机</th>
  </tr></thead>
<tbody>
  <tr>
    <td>型号</td>
    <td>主机</td>
    <td>从机</td>
    <td>主机</td>
    <td>从机</td>
  </tr>
  <tr>
    <td>BK1600</td>
    <td>✗</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
  </tr>
  <tr>
    <td>BK1600 Ultra</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
  </tr>
  <tr>
    <td>PowerFlex 2000</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
  </tr>
  <tr>
    <td>SolidFlex 2000</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
  </tr>
  <tr>
    <td>智能插座</td>
    <td>✗</td>
    <td>✓</td>
    <td>✗</td>
    <td>✓</td>
  </tr>
</tbody>
</table>


**配置步骤**

1. 点击**并机设置**按钮进入设置。
2. 点击**新建并机关系**开始设置。
3. 设置**并机方式**：有线或无线。从可并机设备区域中，长按设备卡片，将设备拖拽至对应的主从设备框中。
4. 设置交流输出的**功率上限**。请注意，该数值需符合电网公司及当地法规要求。
5. 点击**保存**完成并机关系设置。

   <img src={require("./img/select_cluster.png").default} width="240"/>
   <img src={require("./img/cluster.png").default} width="240"/>
   <img src={require("./img/create_cluster.png").default} width="240"/>
   <img src={require("./img/output_power_limit.png").default} width="240"/>
   <img src={require("./img/cluster_created.png").default} width="240"/>
   <img src={require("./img/view_cluster.png").default} width="240"/>

## 5. 数据源设置

通过数据源设置，您可以指定用于家庭能源统计的数据来源，以提升统计数据的准确性和可信度。系统支持设置四类数据源：光伏、电池、电网、负载。

1. 点击**数据源设置**进入设置。
2. 选择您想配置的数据源类型。
3. 单击右侧**自定义**，勾选一个或多个设备作为该数据源的统计输入。
4. 完成选择后，点击**保存**以生效设置。

   <img src={require("./img/profile_page.png").default} width="240"/>
   <img src={require("./img/select_data_source.png").default} width="240"/>
   <img src={require("./img/tap_custom.png").default} width="240"/>
   <img src={require("./img/choose_data_source_device.png").default} width="240"/>
   <img src={require("./img/save_data_source.png").default} width="240"/>


## 6. 显示设置

点击**显示设置**按钮，即可根据您的个人偏好自定义App的视觉与格式显示。

### 6.1 语言

支持多种界面语言切换，可选：简体中文、英语、法语、德语、意大利语、荷兰语。
<img src={require("./img/language.png").default} width="240"/>

### 6.2 深色模式

开启或关闭深色模式，以适应不同光线环境下的使用需求。
<img src={require("./img/dark_mode.png").default} width="240"/>

### 6.3 温度单位

根据您的使用习惯，选择温度显示单位：摄氏度（℃） 或 华氏度（℉）。
<img src={require("./img/temperature_unit.png").default} width="240"/>

### 6.4 日期时间格式

自定义日期和时间显示方式：年月日排列顺序、12小时制或24小时制选择。
<img src={require("./img/date_time_format.png").default} width="240"/>

### 6.5 小数点偏好

设置小数点的显示方式：圆点或逗号，符合不同地区的数字阅读习惯。
<img src={require("./img/decimal_preference.png").default} width="240"/>


点击**保存**按钮后，所有设置更改将立即生效，您可随时返回此页面调整您的偏好。

## 7. 建议板

建议板是您与我们直接沟通的渠道，可用于提交产品建议或反馈使用中遇到的问题。


点击**建议板**按钮即可进入功能主界面。
<img src={require("./img/select_suggestion_board.png").default} width="240"/>

在该页面中，您可以进行以下操作：

- 查看建议：浏览其他用户提出的功能建议与反馈。
   <img src={require("./img/suggestions.png").default} width="240"/>

- 报告问题：点击**直接报告问题**描述问题，详细描述您遇到的问题并提交报告。
   <img src={require("./img/tap_report_issue.png").default} width="240"/>
   <img src={require("./img/report_issue.png").default} width="240"/>
  
- 分享建议：点击**分享建议**，向我们提出您的产品改进想法或新功能建议。
   <img src={require("./img/share_suggestion.png").default} width="240"/>


## 8. 运营维护服务

为便于设备运维，您可点击**运营维护服务**按钮，添加并管理相关的服务商（如经销商、安装商）。授权后，服务商将能够查看您家庭的基本设备信息，从而提供更精准的运维支持。

<img src={require("./img/select_operation_service.png").default} width="240"/>
<img src={require("./img/operation_service.png").default} width="240"/>

## 9. 设备直连

设备直连功能基于蓝牙近端通信技术，让您无需通过家庭网络，即可直接监控和管理兼容的设备。


:::info
此功能当前支持INDEVOLT设备：
- BK1600
- BK1600Ultra
- SolidFlex2000
- PowerFlex2000

更多设备支持正在持续更新中，敬请期待。
:::

:::tip 准备工作
确保手机蓝牙功能已开启，同时目标设备已启动并处于可配对状态。
:::

1. 点击**设备直连**按钮。
2. 使用App扫描设备机身上的二维码，以自动识别设备。
3. 点击**连接设备**按钮，并将手机靠近设备。系统将自动建立蓝牙连接。
4. 连接成功后，即可查看设备实时数据，并可进行充放电计划设置与设备参数配置。
5. 完成设备监控后，点击页面左上角的**返回箭头 (\<)** 退出设备直连模式。

   <img src={require("./img/select_device_connection.png").default} width="240"/>
   <img src={require("./img/scan_qr_code.png").default} width="240"/>
   <img src={require("./img/connect_device.png").default} width="240"/>
   <img src={require("./img/device_connected.png").default} width="240"/>
   <img src={require("./img/disconnect_device.png").default} width="240"/>


## 10. 远程调试

本功能旨在协助售后技术人员快速定位并解决您设备的潜在问题。

:::tip 准备工作
- 确保待调试设备已通电，并能通过4G/5G/或Wi-Fi等方式正常接入互联网。
- 调试过程中，请保持手机与设备间的蓝牙连接稳定，建议将手机屏幕设置为常亮，避免休眠导致连接中断。
:::

1. 点击**远程调试**按钮进入设置。
2. 阅读页面信息并点击**下一步**按钮。
3. 扫描设备机身上的二维码，或手动输入设备SN码，以建立蓝牙连接。
4. 系统将自动生成一个**远程调试ID**。请将此ID提供给技术支持人员，以便其远程接入并进行诊断。

   <img src={require("./img/select_remote_support.png").default} width="240"/>
   <img src={require("./img/remote_support.png").default} width="240"/>
   <img src={require("./img/scan_qr_code.png").default} width="240"/>
   <img src={require("./img/remote_id.png").default} width="240"/>

:::info
- 调试过程不会影响设备的正常运行。
- 此功能仅用于官方技术人员进行故障诊断，请勿将远程ID透露给非授权人员。
- 调试完成后，请主动退出远程调试模式，以终止远程连接，确保信息安全。
:::

## 11. 关于INDEVOLT

点击**关于INDEVOLT**，了解关于App应用的相关信息，包含当前版本、服务及隐私协议、第三方信息共享清单、应用权限说明、系统权限管理等信息。

<img src={require("./img/select_about_indevolt.png").default} width="240"/>
<img src={require("./img/about_indevolt.png").default} width="240"/>
