---
title: 第三方逆变器接入
description: 接入第三方逆变器，实现光伏发电监测、余电充电和能源管理。
---

# 第三方逆变器接入

如果您家中已安装其他品牌的光伏逆变器，可通过以下方式将逆变器数据接入配套云平台，从而实现：
- 实时查看光伏发电情况
- 分析家庭用电与余电流向
- 优化储能充放电策略

目前支持以下两种接入方式：

1. [云平台账号绑定（云云对接）](#方式一云云对接)
2. [使用智能插座或智能电表采集发电数据](#方式二通过智能插座或电表采集数据)

---

## 方式一：云云对接

```mermaid
flowchart LR

PV[光伏组件]
INV[逆变器]
THIRD[第三方云平台<br/>GOODWE / GROWATT / SolarEdge 等]
CLOUD[云平台]
APP[INDEVOLT App]

PV --> INV
INV --> THIRD
THIRD -->|账号授权| CLOUD
CLOUD --> APP
```

### 适用场景

目前支持以下品牌：

* GOODWE
* GROWATT
* FusionSolar
* SolarEdge
* SolaX
* Solplanet

后续将持续支持更多品牌。

### 工作原理

通过绑定第三方能源平台账号，App 可直接获取该账号下的逆变器数据。

### 配置步骤

1. 打开 INDEVOLT App，进入 **我的** 页面。
2. 点击 **连接能源品牌**。
3. 选择对应的逆变器品牌。
4. 根据页面提示登录并授权第三方平台账号。
5. 授权完成后，系统会自动同步该账号下的设备列表，并添加至家庭。

👉 详细授权说明：[连接能源品牌](https://docs.indevolt.com/zh/docs/category/brand-connection)

---

## 方式二：通过智能插座或电表采集数据

**智能插座**

```mermaid
flowchart LR

PV[光伏组件]
INV[逆变器]
PLUG[智能插座]

CLOUD[云平台]
APP[INDEVOLT App]

PV --> INV
INV -->|交流输出| PLUG
PLUG -.数据上传.-> CLOUD
CLOUD --> APP
```

**智能电表**


```mermaid
flowchart LR

PV[光伏组件]
INV[逆变器]
CT((CT))
METER[智能电表]

CLOUD[云平台]
APP[INDEVOLT App]

PV --> INV
INV -->|交流输出| CT
CT --> METER
METER -.数据上传.-> CLOUD
CLOUD --> APP
```

### 工作原理

通过智能插座或智能电表测量逆变器输出功率，并将采集到的数据作为光伏发电数据参与能源统计。

### 配置步骤

#### 步骤 1：安装测量设备

根据实际情况选择以下任一种方案：

<u>方案 A：智能插座</u>

- 将逆变器交流输出接入插座

<u>方案 B：智能电表 + CT</u>

- 电表本体接入家庭电路，测量电压
- CT 夹在逆变器交流输出线路上，测量电流方向和大小

#### 步骤 2：添加设备

在 INDEVOLT App 中添加智能插座或智能电表，并确保设备在线。

#### 步骤 3：配置数据源

1. 打开 App。
2. 进入 **我的** > **数据源设置**。
3. 在 **光伏** 数据源中点击 **自定义**。
4. 选择参与能源统计的插座或电表。
5. 保存配置。

<img src={require("./img/profile.png").default} width="240"/>
<img src={require("./img/data_source.png").default} width="240"/>
<img src={require("./img/solar.png").default} width="240"/>
<img src={require("./img/select_solar_device1.png").default} width="240"/>
<img src={require("./img/select_solar_device2.png").default} width="240"/>


配置完成后，系统将自动把所选设备采集到的功率数据识别为光伏发电数据，并用于家庭能源流向分析、发电量统计、能源看板展示。

:::warning
* 请确保测量设备安装在逆变器输出回路。
* CT 安装方向错误可能导致功率显示为负值或异常。
* 该方案为间接测量方式，实际数据可能与逆变器显示值存在轻微差异。
:::