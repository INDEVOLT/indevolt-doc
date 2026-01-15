---
title: 智能
description: 智能调节能源使用，充分利用电价差异实现节能增收。
---

# 智能

智能模式会根据实时变化的电价，自动帮您控制储能设备的充电与放电，从而：

- 减少电费支出
- 提升光伏和电池利用率
- 在电价波动中获得更高收益

简单来说：电价低就充电，电价高就放电，全程自动优化。

:::info 适用条件
1. 家庭使用使用动态/分时电价（非固定电价）。
2. 家庭配备INDEVOLT储能设备。
:::

## 1. 设备运行状态说明

**充电（低电价时）**

设备的实际充电功率由逆变器的最大输入功率决定。

- 系统优先使用光伏电量为电池充电；
- 当光伏电量不足时，系统将自动从电网补电；
- 当电池充满后，充电任务自动结束。


**放电（高电价或高用电需求时）**

实际放电功率由当前负载来源（电表/插座/默认负载）决定。

- 设备优先使用光伏供电；
- 光伏不足时，电池自动补充供电；
- 当电池电量达到应急电量值时，将自动停止放电。

**静止（不在策略充放时段）**

在静止状态下，电池不会主动充电或者放电
- 光伏发电优先供给家中用电设备；
- 当光伏功率大于负载且电池SOC未达100%时, 多余电量将自动回充至电池；
- 电池充满后，光伏功率会自动被限制。

## 2. 激活智能模式

1. 点击**更多内容**，进入功能介绍页面。
2. 仔细阅读服务协议与相关说明。确认无误后，勾选**我已阅读并同意服务协议**，点击**下一步**按钮完成激活。

   <img src={require("./img/smart.png").default} width="240"/>
   <img src={require("./img/activate_smart.png").default} width="240"/>


## 3. 价格策略

价格策略是智能模式的核心，它通过预设的价格阈值，智能控制设备在电价低时充电、电价高时放电，从而充分利用电价波动实现收益最大化。

### 3.1 新增策略

1. 点击价格策略模块右上角的 <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> 图标进入设置。
2. 根据页面提示，确保您已设置好[电价](./profile.md#31-添加电价)，并且家庭里已添加可参与策略的设备。若无，可分别点击对应区域进入设置。点击**下一步**按钮进入正式设置。
3. 设定触发设备充放电行为的 **[目标价格](#调整目标价格)**（手动/自动），以及**未满足条件时的策略**（自用优先/静止），点击**下一步**。
4. 选择**参与策略的设备**，点击**下一步**。
5. 预览系统根据您的设置生成的充放电计划，点击**启用**按钮开启策略。

   <img src={require("./img/set_strategy.png").default} width="240"/>
   <img src={require("./img/strategy_requirements.png").default} width="240"/>
   <img src={require("./img/price_setting.png").default} width="240"/>
   <img src={require("./img/select_strategy_device.png").default} width="240"/>
   <img src={require("./img/preview_strategy.png").default} width="240"/>


### 3.2 查看策略

若已创建策略，价格策略模块会显示当前计划状态（静止/自用优先/充电/放电）及开关控制。

<img src={require("./img/price_strategy.png").default} width="240"/>

点击**价格策略**模块即可查看其运行计划以及策略所应用的设备。

<img src={require("./img/view_strategy.png").default} width="240"/>

点击价格策略页面右上角的日志图标，可查看策略日志，追溯所有历史修改记录以及开启/关闭状态变更情况。

<img src={require("./img/strategy_log.png").default} width="240"/>


### 3.3 修改策略

在价格策略页面，您可以随时对已创建的策略进行调整，包括修改适用的设备和调整目标价格。

#### 修改策略设备

1. 在策略详情页面，点击 **设备运行详情** 模块右侧的编辑按钮。
2. 页面将显示当前家庭所有支持智能控制的设备，重新选择目标设备。
3. 点击 **下一步**，预览根据新设备生成的充放电计划，确认后点击 **启用**。
<img src={require("./img/view_strategy.png").default} width="240"/>
<img src={require("./img/set_strategy_device.png").default} width="240"/>
<img src={require("./img/confirm_strategy.png").default} width="240"/>

#### 调整目标价格

1. 在策略详情页面，点击 **电力市场价格** 模块右侧的编辑按钮。
2. 您可以按需设定**目标价格**，系统提供两种方式：
   - 手动：直接输入您期望的充（低价）放电（高价）触发价格，适合您有明确目标电价时使用。
   - 自动：设定目标价差，并选择高价与低价时段，系统会自动计算出最佳触发电价。
3. 设置**未满足条件时的策略**（如果当前电价不符合充放条件时，设备会自动切换为）：
   - 自用优先：优先使用光伏和电池供家中用电。
   - 静止：暂停充放，光伏发电优先供家用。
4. 点击 **下一步**，预览更新后的充放电计划，确认后点击 **启用**。
<img src={require("./img/view_strategy.png").default} width="240"/>
<img src={require("./img/strategy_price1.png").default} width="240"/>
<img src={require("./img/strategy_price2.png").default} width="240"/>
<img src={require("./img/confirm_strategy.png").default} width="240"/>
