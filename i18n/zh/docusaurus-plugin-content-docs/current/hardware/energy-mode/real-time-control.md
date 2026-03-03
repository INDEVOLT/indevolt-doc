---
title: 实时控制
description: 手动指定设备充电、放电或待机
---

# 实时控制

**实时控制**模式允许你在需要时，**直接手动控制设备的充放电状态和功率**。  
设置后，系统会**立即执行你的指令**，并在达到设定条件后自动停止。

## 适合哪些用户

- 临时需要快速充电或放电  
- 需要测试、调试或验证系统行为  
- 对设备运行逻辑较为熟悉的进阶用户  
- 需要短时间人工干预系统运行的场景  


## 系统如何工作

在实时控制模式下，你需要手动设置以下参数：

- **状态**：静止 / 充电 / 放电  
- **功率**：0–2400 W  
- **截止 SoC**：5%–100%  

设置完成并保存后，系统将立即执行：

- **充电状态**：设备按设定功率充电  
- **放电状态**：设备按设定功率向负载供电  
- **静止状态**：设备保持静止，不充也不放  

当电池电量达到你设置的**截止 SoC** 后，系统会自动停止充电或放电，并进入静止状态。


**用电优先级**

- 家庭用电 **优先使用光伏电能**
- 光伏不足时，由 **电池放电补充**
- 光伏和电池都不足时，才从 **电网取电**

## 如何设置实时控制

**操作步骤：**

1. 确认您已在 **INDEVOLT App** 添加设备至您的家庭
2. 点击底部 **设备** 标签，选择对应设备卡片进入设备详情页
3. 点击用能模式区域，该区域根据您所选的模式动态显示，进入模式选择页面
4. 选择 **实时控制**，点击 **去设置**
5. 根据实际需求设置：  
   - 状态：静止 / 充电 / 放电  
   - 功率：0–2400 W  
   - 截止 SoC：5%–100%  
6. 点击 **保存**，设置立即生效

<img src={require("./img/select_device.png").default} width="240"/>
<img src={require("./img/select_energy_mode.png").default} width="240"/>
<img src={require("./img/real_time_control.png").default} width="240"/>
<img src={require("./img/real_time_control_settings.png").default} width="240"/>
<img src={require("./img/real_time_control_status.png").default} width="240"/>
<img src={require("./img/real_time_control_power.png").default} width="240"/>
<img src={require("./img/real_time_control_soc.png").default} width="240"/>


## 推荐设备参数设置

在设备详情页，点击右上角 **⚙ 设置** 图标进入设置页面。

<img src={require("./img/device_info.png").default} width="240"/>
<img src={require("./img/device_setting.png").default} width="240"/>


为了获得更稳定的使用体验，建议如下设置：

| 设置项             | 建议配置                               |
| ------------------ | -------------------------------------- |
| 最大交流输出功率（放电）   | 不低于家庭实际负载功率，并符合当地法规 |
| 逆变器最大输入功率（充电） | 不低于期望的充电功率                   |
| 最大馈网功率       | 建议设置为 `0`（开启防逆流）           |
| 旁路开关           | 无特殊需求时保持关闭                   |
| 应急电量           | 建议设置为 20%                         |
