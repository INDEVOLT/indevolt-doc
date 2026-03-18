---
title: 电量校准说明
description: 帮助设备定期校准电量，让电量显示更准确
---

# 电量校准说明


## 1. 什么是电量校准？

在日常使用中，设备显示的电量（SoC）是通过算法估算出来的，长期运行后可能会出现一定误差。

**电量校准**就是让设备定期进行一次“完整充电”，从而修正电量显示，让电量百分比更加准确。

:::info
设备已通过算法持续优化电量估算精度，后续还将进一步引入卡尔曼滤波算法，以提升长期使用下的电量准确性。
:::

## 2. 校准时会发生什么？

当达到你设置的校准周期时，系统会自动执行一次校准：

- 优先使用 **光伏（PV）充电**
- 如果光伏不足，会自动启用 **市电（AC）补充充电**
- 直到电池**充满**，完成校准

👉 简单理解：就是让电池“充到 100% 一次”，重新校正电量参考点。


## 3. 为什么需要电量校准？

如果长时间不校准，可能会出现：

- 电量显示不准
- 提前关机或电量异常下降
- 影响补电逻辑判断（如是否该停止放电）

## 4. 如何设置电量校准？


👉 APP操作步骤：设备页面 → 选择设备 → <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> → 电量设置 → 电量校准

<img src={require("../energy-mode/img/select_device.png").default} width="240"/>
<img src={require("../energy-mode/img/device_info.png").default} width="240"/>
<img src={require("../energy-mode/img/device_setting.png").default} width="240"/>
<img src={require("./img/soc_settings.png").default} width="240"/>


| 设置项 | 说明 | 建议 |
|--------|------|------|
| 校准周期 | 距离上一次满充的时间（5～60 天） | 推荐 14 天（2 周） |
| 校准开始时间 | 满足周期后，允许开始校准的时间点 | 选择白天光伏充足或夜间低电价时段 |
| 充电功率 | 使用当前补电功率（即AC功率，默认 500W） | 根据电路承载能力合理设置 |

<img src={require("./img/calibration_interval.png").default} width="240"/>
<img src={require("./img/calibration_start_time.png").default} width="240"/>
<img src={require("./img/charging_power.png").default} width="240"/>
