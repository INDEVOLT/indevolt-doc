---
title: BK1600 Ultra
description: BK1600 Ultra Firmware Release Notes
---

# BK1600 Ultra

:::info[Scope]
This firmware is released by product series, not named after a single model. The following models in the same series share the same firmware set:

**Indevolt BK1600 Ultra**

The firmware package contains the firmware of the CMS, Pfile, EMS, BMS, MPPT, PCS modules. Each module is updated independently, so refer to the relevant section as needed.
:::

### CMS

| Release Date | Version | Update Summary |
| ------------ | ------- | -------------- |
| 2026/09/16 | V140E.12.104C | 1. Added meter offset configuration<br />2. Added Shelly smart plug control switch<br />3. Added support for P1 meter<br />4. Optimized OpenData HTTP API<br />5. Optimized communication stability|
| 2026/03/06  | V1408.0C.104A | 1. Added support for Stromleser meter (optical reader)<br />2. Added support for HomeWizard P1 meter<br />3. Added support for Shelly Plug Gen1<br />4. Added meter offset configuration |
| 2026/01/19 | V1407.0B.1049 | 1. Optimized communication logic |
| 2025/12/12 | V1406.0B.1047 | 1. Added support for Solarman smart plug, Shelly Plug S MTR Gen3, Shelly 3EM<br />2. Optimized system operation |
| 2025/10/23 | V1401.0B.0042 | 1. Optimized OpenData<br />2. Optimized system operation |
| 2025/07/22 | V130A.09.003A | / |
| 2025/06/24 | V1.3.09_R006.062_M4848_00000034 | / |
| 2024/11/25 | V1.3_R006.002_M4848_00000021 | / |


### Pfile

| Release Date | Version | Update Summary |
| ------------ | ------- | -------------- |
| 2026/08/12 | V06.00.12 | Added full-charge calibration setting |
| 2025/12/29 | V06.00.09 | Added bypass control switch |
| 2025/11/14 | V06.00.08 | Added bypass control switch |
| 2025/09/02 | V06.00.06 | / |
| 2024/11/20 | V06.00.05 | 1. Updated battery data points<br />2. Optimized scheduling logic |


### EMS

| Release Date | Version | Update Summary |
| ------------ | ------- | -------------- |
| 2026/09/16 | V2.00.11 |  1. Optimized the operating logic for bypass socket with microinverter<br />2. Optimized the operating mode logic |
| 2026/05/22 | V2.00.09 |  1. Optimized power calculation<br />2. Optimized PV operating logic when SOC reaches 100%<br />3. Added an AC charging enable option that is effective only when SOC is below 5%<br />4. Added an Auto Full Charge switch |
| 2025/11/27 | V2.00.04 | 1. Increased bypass port current limit to 10A |
| 2025/09/29 | V2.00.03 | 1. Optimized parallel operation scenarios<br />2. Added support for slave unit entering deep standby in wired parallel mode |
| 2025/09/12 | V2.00.02 | 1. SOC rounding adjusted (truncate decimals)<br />2. Meter refresh interval set to 3 seconds<br />3. Slave power allocated by limit values<br />4. Zero power set as discharge<br />5. Micro-inverter fault ignored<br />6. Added shutdown logging<br />7. Parameter upgrade compatibility improved<br />8. Added new status indicators (e.g., recharge)<br />9. Enhanced overload protection redundancy<br />10. Line power includes bypass<br />11. Critical load only responds to bypass<br />12. Standby changed to deep sleep<br />13. Optimized deep standby logic<br />14. Added scheduled full charge<br />15. Upgraded Modbus to V2.3<br />16. Fixed parallel discharge issue |
| 2025/06/26 | V2.00.01 | / |
| 2025/03/07 | V2.00.00 | / |


### BMS

| Release Date | Version  |
| ------------ | -------- |
| 2025/03/07   | V1.00.35 |


### MPPT

| Release Date | Version |
| ------------ | ------- |
| 2025/09/29   | V3.17   |
| 2025/03/07   | V3.16   |


### PCS

| Release Date | Version | Update Summary                                   |
| ------------ | ------- | ------------------------------------------------ |
| 2026/09/16   | V2.34   | 1.Optimized operating logic                      |
| 2026/08/10   | V2.33   | 1.Optimized operating logic                      |
| 2025/05/22   | V2.31   | 1. Optimized the grid-tied relay operating logic |
| 2025/08/28   | V2.21   |                                                  |
| 2025/06/26   | V2.17   |                                                  |
| 2025/06/20   | V2.15   |                                                  |
| 2025/03/07   | V2.07   |                                                  |
