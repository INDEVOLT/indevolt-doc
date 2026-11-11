---
title: SFA/PFA
description: SFA/PFA Firmware Release Notes
---

# SFA/PFA

:::info[Scope]
This firmware is released by product series, not named after a single model. The following models in the same series share the same firmware set:

**SFA1800, PFA2000**

The firmware package contains the firmware of the BMS SLAVE, DCDC modules. Each module is updated independently, so refer to the relevant section as needed.
:::

### BMS SLAVE

| Release Date | Version | Update Summary |
| ------------ | ------- | -------------- |
| 2026/7/22 | V1.10.49 | 1. Optimized operating logic |
| 2026/05/12 | V1.10.45 | 1. Optimized battery protection and operating logic |
| 2026/02/11 | V1.10.42 | 1. Optimized SOC algorithm |
| 2026/01/21 | V1.10.38 | 1. Optimized SOC algorithm |
| 2025/11/28 | V1.10.35 | 1. Optimized upgrade logic |
| 2025/10/04 | V1.10.33 | 1. Optimized self-check logic<br />2. Optimized standby power consumption<br />3. Added pre-charge logic |
| 2025/07/31 | V1.10.30 | 1. Optimized charging detection, improved upgrade communication stability, enhanced discharge protection |
| 2025/06/16 | V1.10.25 | / |
| 2025/05/30 | V1.10.22 | / |

### DCDC

| Release Date | Version | Update Summary |
| ------------ | ------- | -------------- |
| 2026/07/22 | V1.01.77 | 1. Optimized operating logic |
| 2026/05/29 | V1.01.75 | 1. Optimized the issue where charging power could occasionally be limited when multiple battery packs were charged |
| 2026/05/10 | V1.01.73 | 1. Optimized operating logic |
| 2026/03/20 | V1.01.64 | 1. Fixed occasional communication loss of battery packs during deep standby in multi-pack systems |
| 2026/03/04 | V1.01.62 | 1. Optimized battery pack communication |
| 2026/02/11 | V1.01.61 | 1. Optimized battery pack communication |
| 2026/01/21 | V1.01.59 | 1. Fixed SOC imbalance caused by low-power discharge |
| 2025/11/28 | V1.01.54 | 1. Fixed PV limitation issues in some conditions<br />2. Optimized upgrade logic |
| 2025/11/04 | V1.01.51 | 1. Optimized bypass port logic |
| 2025/10/14 | V1.01.48 | 1. Optimized PV charging logic<br />2. Optimized heating film operating logic |
| 2025/08/27 | V1.01.39 | / |
| 2025/07/31 | V1.01.36 | 1. Added reverse current protection, optimized discharge power, fixed charging overcurrent issues, added intelligent low-light detection, enhanced overload protection |
| 2025/06/17 | V1.01.28 | / |
| 2025/06/04 | V1.01.23 | / |
