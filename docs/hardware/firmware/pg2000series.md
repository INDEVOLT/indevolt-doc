---
title: PG2000Series
description: PG2000Series Firmware Release Notes
---

# PG2000Series

### CMS

| Release Date | Version | Update Summary |
| ------------ | ------- | -------------- |
| 2026/10/19 | V1500.0B.0041 | 1. Fixed an issue where data could occasionally not be received after LoRa meter pairing<br />2. Optimized P1 meter communication anomalies<br />3. Optimized part of the communication logic |
| 2026/08/31 | V140E.0B.003E | 1. Optimized local access logic for third‑party inverters<br />2.Optimized parallel‑operation logic |
| 2026/06/30 | V140C.0B.0038 | 1. Optimized operation logic |
| 2026/05/07  | V140C.0B.0036 | 1. Optimized LoRa communication logic |
| 2026/05/07  | V140B.0B.0035 | 1. Optimized communication logic |
| 2026/04/10 | V140A.0A.0034 | 1. Added minute-level custom scheduling<br />2. Added support for third-party MQTT integration (not yet supported in App)<br />3. Added Modbus TCP cloud access (not yet supported in App)<br />4. Changed dynamic electricity pricing interval to 15 minutes<br />5. Optimized Wi-Fi and LoRa communication logic<br />6. Removed 10s long-press Wi-Fi reset function and moved it to App (not yet supported in App) |
| 2026/03/03 | V1408.09.0031 | 1. Added support for Stromleser energy meter (optical reader)<br />2. Added support for HomeWizard P1 meter<br />3. Added support for Shelly Plug Gen1<br />4. Added meter offset configuration<br />5. Optimized communication logic |
| 2026/01/15 | V1407.08.002F | 1. Optimized OpenData API logic |
| 2026/01/15 | V1406.07.002E | 1. Optimized communication logic |
| 2025/12/12 | V1406.07.002B | 1. Added support for Solarman smart plug, Shelly Plug S MTR Gen3, Shelly 3EM<br />2. Optimized system operation logic |
| 2025/10/27 | V1401.05.0022 | 1. Optimized parallel operation and OpenData |
| 2025/09/24 | V1400.04.001F | 1. Added support for Solarman P1 meter integration<br />2. Optimized OpenData control logic<br />3. Optimized version number format |
| 2025/07/31 | V1.3.0A_R00D.032_M4801_00000019 | 1. Optimized 4G/Wi-Fi resource management<br />2. Improved linked device signal handling<br />3. Extended device compatibility: added support for SOLARMAN meters<br />4. Enhanced system stability<br />5. Optimized Bluetooth provisioning |
| 2025/05/29 | V1.3.07_R00D.002_M4801_00000014 | / |

### Pfile

| Release Date | Version   | Update Summary |
| ------------ | --------- | -------------- |
| 2026/10/20 | V0D.00.25 | 1. Added some parameters |
| 2026/10/19 | V0D.00.24 | 1. Optimized some parameters |
| 2026/09/20   | V0D.00.23 |  1. Optimized some parameters        |
| 2026/08/31   | V0D.00.22 |  1. Optimized some parameters        |
| 2026/06/30   | V0D.00.20 |  1. Optimized some parameters        |
| 2026/05/25   | V0D.00.19 | 1. Optimized some parameters |
| 2026/05/06   | V0D.00.18 | 1. Optimized some parameters |
| 2026/01/14   | V0D.00.14 | 1. Optimized battery temperature status display |
| 2026/01/09   | V0D.00.13 | 1. Optimized battery temperature status display |
| 2025/12/25   | V0D.00.11 | 1. Added AC charging power setting |
| 2025/11/14   | V0D.00.08 | 1. Optimized main unit LED strip control |
| 2025/10/27   | V0D.00.06 | 1. Added register points for battery pack 6, AC-coupled energy, standby-to-sleep control, bypass enable, and grid/off-grid output energy<br />2. Modified PV4 alarm code reporting point<br />3. Removed duplicate LED control point |
| 2025/09/24   | V0D.00.03 | 1. Added control flags<br />2. Optimized calculation logic |

### EMS

| Release Date | Version | Update Summary |
| ------------ | ------- | -------------- |
| 2026/10/12 | V1.01.15 | 1. Optimized scenarios with directly connected PV in parallel operation<br />2. Fixed an issue where charging did not resume after weak light recovery from deep standby |
| 2026/08/13 | V1.01.12 | 1. Optimized the operating logic for cluster system scenarios<br />2.Optimized some known issues |
| 2026/05/12 | V1.01.08 | 1. Optimized the operating logic for cluster system scenarios |
| 2026/02/11 | V1.01.03 | 1. Optimized forced charging logic<br />2. Optimized scheduling time slot configuration<br />3. Optimized low-temperature battery heating logic<br />4. Optimized parallel operation logic<br />5. Added support for PFA4000 battery pack<br />6. Fixed issue where deep standby could not be entered under certain conditions |
| 2026/01/21 | V1.00.58 | 1. Optimized firmware upgrade timing<br />2. Optimized parallel power regulation<br />3. Added automatic charging when export is detected while AC charging is disabled<br />4. Added battery standby logic |
| 2025/12/10 | V1.00.57 | 1. Optimized PV power allocation in parallel mode<br />2. Improved PV priority in real-time control mode<br />3. Optimized upgrade logic<br />4. Added exit from deep standby via short press |
| 2025/11/28 | V1.00.55 | 1. Optimized upgrade logic |
| 2025/11/04 | V1.00.50 | 1. Optimized deep standby logic (standby power: 20W with bypass ON, 8W with bypass OFF)<br />2. Optimized LED animation during shutdown<br />3. Optimized backup SOC logic<br />4. Optimized upgrade logic<br />5. Optimized PV logic<br />6. Optimized standby parameters in real-time control mode<br />7. Improved overall power consumption<br />8. Added support for fifth expansion battery pack (hardware supported, App not yet supported) |
| 2025/10/14 | V1.00.48 | 1. Default EPS mode for off-grid port after power-on<br />2. Added critical load mode (not yet in App)<br />3. Added periodic full-charge calibration every 15 days<br />4. Grid power defined as AC line power<br />5. Added real-time control mode (not yet in App)<br />6. Optimized deep standby<br />7. Optimized parallel operation logic<br />8. Optimized standby power |
| 2025/08/04 | V1.00.43 | 1. Added parallel operation, grid settings, and increased grid power limit to 3600W.<br />2. Added LED strip & bypass relay control; optimized LED animation.<br />3. Increased discharge to 0.6P; optimized SOC distribution; default AC charge 2400W; fixed micro-inverter control.<br />4. Lowered standby threshold to 2.8%; optimized recharge logic, MOS thermal control, and inter-pack power strategy.<br />5. Improved overload protection (longer delay to 30s, better margin, no cascade faults).<br />6. EMS upgrade allowed at SOC ≥ 5%; added shutdown logging & optimized storage performance.<br />7. Added shutdown reporting (reason/time/count); improved real-time & time control modes |
| 2025/06/17 | V1.00.35 | / |
| 2025/06/04 | V1.00.32 | / |



### BMS MB

| Release Date | Version | Update Summary |
| ------------ | ------- | -------------- |
| 2026/07/22   | V1.00.49 | 1. Optimized operating logic     |
| 2026/05/12   | V1.00.45 | 1. Optimized battery protection and operating logic     |
| 2026/02/11   | V1.00.42 | 1. Optimized SOC algorithm |
| 2026/01/21   | V1.00.38 | 1. Optimized SOC algorithm |
| 2025/11/28   | V1.00.35 | 1. Optimized upgrade logic |
| 2025/10/04   | V1.00.33 | 1. Optimized self-check logic<br />2. Optimized standby power<br />3. Added pre-charge logic |
| 2025/07/31   | V1.00.30 | 1. Optimized charging detection, improved communication stability, enhanced discharge protection |
| 2025/06/16   | V1.00.25 | / |
| 2025/05/30   | V1.00.22 | / |


### INV

| Release Date | Version | Update Summary |
| ------------ | ------- | -------------- |
| 2026/09/30 | V1.43 | 1. Fixed an issue where the bypass port could disconnect under certain conditions<br />2. Optimized inverter operating logic |
| 2026/07/22 | V1.41 | 1. Optimized operating logic under weak PV light (not applicable to ECO models) |
| 2026/05/12  | V1.38  | 1. Added support for off-grid microinverters (max: 1200)<br />2. Optimized the issue where the grid relay could occasionally fail to close under certain operating conditions.<br />3. Optimized the issue where an abnormal alarm could occasionally occur after PV charging reached full capacity. |
| 2026/04/10 | V1.36 | 1. Optimized inverter issue where it may not charge/discharge during grid-tied operation |
| 2026/02/11 | V1.35 | 1. Optimized charging logic |
| 2026/01/21 | V1.34 | 1. Fixed issue where bypass may disconnect under certain conditions |
| 2025/12/10 | V1.32 | 1. Optimized real-time control mode |
| 2025/11/04 | V1.30 | 1. Added support for fifth expansion battery pack (not yet supported in App, hardware fully functional) |
| 2025/10/21 | V1.29 | / |
| 2025/10/04 | V1.28 | 1. Optimized islanding protection logic<br />2. Optimized off-grid discharge logic<br />3. Optimized derating logic |
| 2025/09/16 | V1.22 | / |
| 2025/07/08 | V1.21 | Optimized charging; improved undervoltage protection; upgraded overcurrent protection; adapted to multiple regional regulations; enhanced off-grid control; improved weak grid performance; default compliance settings |
| 2025/06/02 | V1.16 | / |
