---
title: 智能
description: 智能调节能源使用，充分利用电价差异实现节能增收。
---

# 智能

智能功能通过 **动态电价优化** 或 **AI 模式**，自动调整电池的充放电策略，充分利用电价差异和光伏发电，提高能源利用率并增加收益。


## 1. 动态电价优化

动态电价优化通过预设的价格阈值，智能控制设备在电价低时充电、电价高时放电，从而充分利用电价波动实现收益最大化。

- 减少电费支出
- 提升光伏和电池利用率
- 在电价波动中获得更高收益

简单来说：电价低就充电，电价高就放电，全程自动优化。

:::info 适用条件
1. 家庭使用使用动态电价。
2. 家庭配备INDEVOLT储能设备。
:::

### 1.1 设备如何运行

#### 🔋 充电（低电价时）

设备的实际充电功率由逆变器的最大输入功率决定。

- 系统优先使用光伏电量为电池充电；
- 当光伏电量不足时，系统将自动从电网补电；
- 当电池充满后，充电任务自动结束。


| 模式 | 说明 |
|------|------|
| PV + AC | 光伏优先充电池，同时允许从电网取电辅助充电，适合电价低谷时段蓄电。充电功率以设定值为上限。电池充满后，停止电网取电，光伏自动降功率运行。 |
| 仅 PV | 仅使用光伏为电池充电。电池充满后优先供负载，余电在允许范围内并网；若超过并网限制，自动降低光伏输出。 |


#### ⚡ 放电（高电价或高用电需求时）

实际放电功率由当前负载来源（电表/插座/默认负载）决定。

- 设备优先使用光伏供电；
- 光伏不足时，电池自动补充供电；
- 当电池电量达到应急电量值时，将自动停止放电。

| 模式 | 说明 |
|------|------|
| 固定AC功率 | 电池按设定功率持续放电。若存在光伏微逆，优先由光伏供电。无负载或超出并网限制时停止输出，系统定时检测并自动恢复。|
| 按需放电 | 电池根据家庭实时用电需求自动放电，放电功率以设定值为上限。若无负载或超出并网限制，自动停止输出。|


#### ⏸️ 静止（不在策略充放时段）

在静止状态下，电池不主动放电，光伏有余电时自动充电
- 光伏发电优先供给家中用电设备；
- 当光伏功率大于负载且电池SOC未达100%时, 多余电量将自动回充至电池；
- 电池充满后，光伏功率会自动被限制。

| 模式 | 说明 |
|------|------|
| 光伏优先自用 | 光伏优先供家庭负载，多余电量存入电池。电池充满后，余电在允许范围内并网。若发电超出并网限制，系统会自动降低光伏输出。未设置的时间段将默认采用此模式。|
| 光伏优先充电 | 光伏优先为电池充电，电池充满后再供家庭负载。如仍有余电，在允许范围内并自动降低光伏输出。|


:::info
- 所有功率设置均受设备硬件规格约束 。
- “并网限制”指电网允许的馈入功率上限。
- 部分状态下光伏自动降功率，是为避免超出并网限制，设备仍会保留基础待机功耗。
:::


### 1.2 开启策略

1. 点击**动态电价优化**模块右上角 <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/>。
2. 确认已完成以下配置：  

   ✅ 已设置[**动态电价**](./profile.md#31-添加电价)  
   ✅ 已添加可参与策略的设备  

   如未完成，可点击对应区域进行设置，然后点击**下一步**。

3. 设定触发设备充放电行为的 **[目标价格](#调整目标价格)**：
   - 支持手动 / 自动 / 智能三种方式  
   - 选择**未满足条件时的策略**（自用优先 / 静止） 
 
   设置完成后点击**下一步**。

4. 选择**参与策略的设备**，点击**下一步**。
   > （可选）点击 **⚙ 高级设置**，配置不同电价时段下的[运行模式](#11-设备如何运行)  
   
5. 预览充放电计划，确认无误后点击**启用**。

<img src={require("./img/smart.png").default} width="240"/>
<img src={require("./img/strategy_requirements.png").default} width="240"/>
<img src={require("./img/price_setting.png").default} width="240"/>
<img src={require("./img/select_strategy_device.png").default} width="240"/>
<img src={require("./img/preview_strategy.png").default} width="240"/>


### 1.3 查看策略

若已创建策略，动态电价优化模块会显示当前计划状态（静止/充电/放电）及开关控制。

<img src={require("./img/dynamic_pricing_strategy.png").default} width="240"/>

点击**动态电价优化**模块即可查看其运行计划以及已应用设备。

<img src={require("./img/view_strategy.png").default} width="240"/>

点击页面右上角的 <img src={require("./img/history_icon.png").default} width="24" style={{verticalAlign: "middle"}}/> 图标，可查看电力市场价格、SOC，以及策略日志（历史修改记录）。

<img src={require("./img/strategy_log.png").default} width="240"/>


### 1.4 修改策略

在动态电价优化页面，您可以随时调整策略，包括修改适用的设备和调整目标价格。

#### 修改设备

1. 在策略详情页面，点击 **设备运行详情** 模块右侧 <img src={require("./img/edit_icon.png").default} width="24" style={{verticalAlign: "middle"}}/>。
2. 页面将显示当前家庭所有支持智能控制的设备，重新选择目标设备。
3. （可选）点击**高级设置**，调整不同电价时段的运行方式。
4. 点击 **下一步**，预览并点击 **启用**。
<img src={require("./img/view_strategy.png").default} width="240"/>
<img src={require("./img/set_strategy_device.png").default} width="240"/>
<img src={require("./img/device_advanced_mode.png").default} width="240"/>
<img src={require("./img/confirm_strategy.png").default} width="240"/>

#### 调整目标价格

1. 在策略详情页面，点击 **电力市场价格** 模块右侧 <img src={require("./img/edit_icon.png").default} width="24" style={{verticalAlign: "middle"}}/>。
2. 设定**目标价格**：
   - 手动：直接设置充电 / 放电触发价格 ，适合您有明确目标电价时使用。
   - 自动：设定高低价区间和价差，系统自动计算出最佳触发电价。
   - 智能：仅设置价差，系统自动优化
   > 💡 价格差越大，只有在点价差明显时才会充放电，触发更少；价格差越小，系统会更频繁地充放电。
3. 设置**未满足条件时的策略**：
   - 自用优先：优先使用光伏和电池供家中用电。
   - 静止：暂停充放，光伏发电优先供家用。
4. 点击 **下一步**，预览并点击 **启用**。
<img src={require("./img/view_strategy.png").default} width="240"/>
<img src={require("./img/strategy_price1.png").default} width="240"/>
<img src={require("./img/strategy_price2.png").default} width="240"/>
<img src={require("./img/strategy_price3.png").default} width="240"/>
<img src={require("./img/confirm_strategy.png").default} width="240"/>

---

## 2. AI 模式

AI 模式会根据历史数据，智能预测 **光伏发电量** 和 **家庭用电情况**，并结合 **电价信息**，自动生成收益更优的充放电计划，从而提升整体用电收益。


### 2.1 开启 AI 模式

1. 点击 **AI 模式**模块右上角 <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/>。
2. 根据页面提示，确保家庭已满足以下条件：  
   ✅已配置[电价](./profile.md#31-添加电价)  
   ✅已添加可参与策略的设备  
   ✅已接入用电数据：家庭已添加用电计量设备，如电表或读表器，且已获取用电数据。  
   如未完成，可点击对应区域进入设置，然后点击**下一步**。
3. 若系统检测到光伏信息，添加**地址**以及**光伏**信息；若无，请确认是否有未接入平台的光伏设备，确保预测结果准确性。点击**下一步**。
   > （可选）点击 **⚙ 高级设置**，设置[价差](#修改价差)。
4. 选择**参与策略的设备**，点击**下一步**。
5. 预览系统生成的预测，点击**启用**开启 AI 模式。

<img src={require("./img/smart.png").default} width="240"/>
<img src={require("./img/ai_mode_conditions.png").default} width="240"/>
<img src={require("./img/ai_mode_address.png").default} width="240"/>
<img src={require("./img/ai_mode_device.png").default} width="240"/>
<img src={require("./img/ai_mode_preview.png").default} width="240"/>


### 2.2 查看 AI 模式

开启后，AI 模式模块会显示当前计划状态（静止/充电/放电）及开关控制。
<img src={require("./img/ai_mode_activated.png").default} width="240"/>

点击 AI 模式模块进入详情页面，查看当前策略运行状态、收益以及参与策略的设备。
<img src={require("./img/ai_mode.png").default} width="240"/>

点击顶部收益模块，可进入 **收入详情** 页面，查看 AI 模式收益、基础模式收益、两种模式的收益对比。
<img src={require("./img/revenue_details.png").default} width="240"/>

### 2.3 修改 AI 模式

在 AI 模式页面点击右上角 **…** 图标，进入更多设置。
<img src={require("./img/ai_mode.png").default} width="240"/>
<img src={require("./img/ai_mode_more.png").default} width="240"/>

#### 修改设备

1. 在 AI 模式页面点击 **设备运行详情** 模块右侧<img src={require("./img/edit_icon.png").default} width="24" style={{verticalAlign: "middle"}}/>。  
2. 重新选择参与策略的设备。

<img src={require("./img/ai_mode.png").default} width="240"/>
<img src={require("./img/ai_mode_select_device.png").default} width="240"/>

#### 查看历史详情

选择 **历史详情**，查看历史运行情况。
<img src={require("./img/ai_mode_historical.png").default} width="240"/>

#### 修改地址信息

选择 **地址信息**，更新所在 **地区和家庭地址**。
<img src={require("./img/ai_mode_edit_address.png").default} width="240"/>

#### 修改光伏装机容量

选择 **光伏装机容量**，填写实际安装容量并保存。
<img src={require("./img/ai_mode_edit_pv.png").default} width="240"/>

#### 修改价差

AI 会根据设置的 **价差** 自动判断充电和放电时机，以提升整体收益。价差越小，收益机会越多，但电池循环也会更频繁。

1. 选择 **高级设置**。  
2. 在**设置价差**区域选择 **手动** 或 **自动**。若选择手动价差，可拖动数值条设置目标价差。  
3. 点击 **保存**。

<img src={require("./img/ai_mode_advanced_settings1.png").default} width="240"/>
<img src={require("./img/ai_mode_advanced_settings2.png").default} width="240"/>
