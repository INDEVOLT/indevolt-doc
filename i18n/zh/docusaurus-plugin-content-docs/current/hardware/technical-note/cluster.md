---
title: 并机说明
description: 了解如何将多台储能设备连接为一个系统，以获得更大的容量和输出功率
---

# 并机说明

## 1. 什么是并机


并机是指将多台微储设备连接为一个统一运行的系统，由多台设备共同完成供电、储能与能量管理。

在并机系统中，需要指定 1 台设备作为主机，负责系统控制与运行协调，其余设备作为从机接入系统。设备之间会自动通信并协同工作。

并机后，系统的总输出功率和总储能容量都会提升，更适合高负载、长时间备电或后期扩容场景

---

## 2. 为什么需要并机

单台设备的功率和容量有限。当家庭负载较大，或希望获得更长的供电时间时，可以通过并机扩展系统能力。

**提升输出功率**

多台设备可以同时输出功率，从而带动更大的负载。

> 例如：
> - 1 台 SolidFlex 2000 设备，最大输出约为 2400W
> - 2 台并机后，系统最大输出约为 4800W
> - 实际可输出功率仍会受到电网限制、线路规格以及当地法规限制。


**提升储能容量**

并机后，多台设备的电池共同参与储能，可显著延长供电时间。

> 例如：
> - 1 台 SolidFlex 2000 设备搭配 5 个 SFA1800：电池总量 10.8kWh
> - 两套并机后，总容量约为 21.6kWh

**灵活扩容**

系统支持逐步增加设备。用户可以先安装 1 台设备，后续再根据实际需求增加新的设备，而无需一次性完成全部配置，更适合分阶段建设。

---

## 3. 支持设备

支持以下机型作为主机或从机：

<table><thead>
  <tr>
    <th></th>
    <th colspan="2">集中式并机（有线）</th>
    <th colspan="2">协同式并机（无线）</th>
    <th>固件版本要求</th>
  </tr></thead>
<tbody>
  <tr>
    <td>型号</td>
    <td>主机</td>
    <td>从机</td>
    <td>主机</td>
    <td>从机</td>
    <td></td>
  </tr>
  <tr>
    <td>PowerFlex 2000</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td></td>
  </tr>
  <tr>
    <td>SolidFlex 2000</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td></td>
  </tr>
  <tr>
    <td>BK1600</td>
    <td>❌</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td></td>
  </tr>
  <tr>
    <td>BK1600 Ultra</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td></td>
  </tr>
  <tr>
    <td>SP16</td>
    <td>❌</td>
    <td>✅</td>
    <td>❌</td>
    <td>✅</td>
    <td></td>
  </tr>
</tbody>
</table>

---

## 4. 并机方式

系统支持以下两种并机方式，用户可根据实际安装环境选择。

**协同式并机（无线）**

设备通过 Wi-Fi 网络通信，由主机统一协调运行。

这种方式无需额外通信线，安装更简单，适合设备距离较近、局域网稳定的场景。

- 所有设备需连接至同一路由器
- Wi-Fi 信号需保持稳定
- 路由器异常、断电或网络不稳定时，设备可能暂时退出并机状态


**集中式并机（有线）**

设备通过电源线连接主设备与从设备，所有设备的交流输入与输出都会集中到主设备，由主设备统一进行电能输入与输出。

相比无线方式，有线并机的通信更加稳定，抗干扰能力更强，更适合设备较多或对稳定性要求较高的场景。

连接方式如下：
- 主设备：使用 GRID IN/OUT 接口
- 从设备：连接 Backup 接口

若有两个从设备，则按以下方式依次串联连接：
- 主设备 GRID IN/OUT → 从设备 1 Backup  
- 从设备 1 GRID IN/OUT → 从设备 2 Backup

---

## 5. 并机运行规则

并机运行过程中，系统会自动完成设备协调与功率分配，无需人工干预。

**系统容量限制**

系统最多支持 3 台设备并机：1 台主机 + 最多 2 台从机

**输出能力说明**

并机后的最大输出功率如下：
- 普通负载：7200W（3 × 2400W）
- 连接微逆场景：10800W（3 × 3600W）

> 注意：并机状态下，若旁路口连接微逆设备，可能存在功率显示不准确的问题，目前仍在持续优化中。

**功率分配行为**

并机运行时，系统会根据设备电量与负载情况自动分配功率，因此：
- 不同设备的输出功率可能不同
- 并非所有设备都会同时参与输出
- 电量较高的设备会优先承担负载

在不同负载情况下，系统的典型行为如下：
| 负载功率     | 系统行为                        |
| ------------ | ------------------------------- |
| 低于 200W    | 仅 SOC 最高的单台设备承担       |
| 200W ～ 500W | 两台 SOC 较高的设备分担         |
| 超过 500W    | 所有从设备参与，按 SOC 占比分配 |

---

## 6. 如何并机

可通过 INDEVOLT App 完成并机配置。

在开始前，请确认：

- 所有设备均支持并机
- 设备固件已更新至要求版本
- 所有设备均已正常开机
- 无线并机时，所有设备已连接同一路由器
- 有线并机时，设备已按要求完成线缆连接


### 步骤 1：进入并机设置

在设备详情页，点击右上角 <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> 图标进入设置页面，选择**并机设置**。

点击**新建并机关系**，开始创建并机集群。

<img src={require("./img/device_info.png").default} width="240"/>
<img src={require("./img/cluster_device_settings.png").default} width="240"/>
<img src={require("./img/create_cluster.png").default} width="240"/>


### 步骤 2：配置集群参数

进入创建页面后，需要对集群进行基础配置，包括名称、并机方式以及功率相关限制。

:::warning
请确保相关参数符合当地电网要求及法律法规。
:::

<img src={require("./img/creating_cluster.png").default} width="240"/>
<img src={require("./img/cluster_name.png").default} width="240"/>
<img src={require("./img/cluster_mode.png").default} width="240"/>
<img src={require("./img/cluster_output_limit.png").default} width="240"/>
<img src={require("./img/cluster_feed_in_limit.png").default} width="240"/>


### 步骤 3：添加主机和从机

在可并机设备列表中，长按设备卡片，拖拽设备至主机或从机区域。

<img src={require("./img/cluster_devices.png").default} width="240"/>


### 步骤 4：确认并保存配置

确认所有信息无误后，点击**保存**完成并机配置。
<img src={require("./img/cluster_created.png").default} width="240"/>


### 步骤 5：查看和设置集群

并机成功后，App 会自动进入并机分组详情页，在这里可以查看整个集群的运行状态，包括主机与从机关系、实时功率以及用能策略。

点击页面右上角 <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> 进入设置后，可以对集群进行进一步管理，例如修改参数或解除并机关系。

<img src={require("./img/cluster_info.png").default} width="240"/>
<img src={require("./img/cluster_settings.png").default} width="240"/>
