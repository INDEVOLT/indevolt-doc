---
title: Firmware Release Notes
description: INDEVOLT Energy Storage Device Firmware Release Notes
---

# Firmware Release Notes

## SolidFlex 2000 / PowerFlex 2000

### CMS

| Release Date | Version | Update Summary |
| ------------ | ------- | -------------- |
| 2026/5/7  | V140B.0B.0035 | 1. Optimized communication logic |
| 2026/4/10 | V140A.0A.0034 | 1. Added minute-level custom scheduling<br />2. Added support for third-party MQTT integration (not yet supported in App)<br />3. Added Modbus TCP cloud access (not yet supported in App)<br />4. Changed dynamic electricity pricing interval to 15 minutes<br />5. Optimized Wi-Fi and LoRa communication logic<br />6. Removed 10s long-press Wi-Fi reset function and moved it to App (not yet supported in App) |
| 2026/3/3 | V1408.09.0031 | 1. Added support for Stromleser energy meter (optical reader)<br />2. Added support for HomeWizard P1 meter<br />3. Added support for Shelly Plug Gen1<br />4. Added meter offset configuration<br />5. Optimized communication logic |
| 2026/1/15 | V1407.08.002F | 1. Optimized OpenData API logic |
| 2026/1/15 | V1406.07.002E | 1. Optimized communication logic |
| 2025/12/12 | V1406.07.002B | 1. Added support for Solarman smart plug, Shelly Plug S MTR Gen3, Shelly 3EM<br />2. Optimized system operation logic |
| 2025/10/27 | V1401.05.0022 | 1. Optimized parallel operation and OpenData |
| 2025/9/24 | V1400.04.001F | 1. Added support for Solarman P1 meter integration<br />2. Optimized OpenData control logic<br />3. Optimized version number format |
| 2025/7/31 | V1.3.0A_R00D.032_M4801_00000019 | 1. Optimized 4G/Wi-Fi resource management<br />2. Improved linked device signal handling<br />3. Extended device compatibility: added support for SOLARMAN meters<br />4. Enhanced system stability<br />5. Optimized Bluetooth provisioning |
| 2025/5/29 | V1.3.07_R00D.002_M4801_00000014 | / |

### Pfile

| Release Date | Version | Update Summary |
| ------------ | ------- | -------------- |
| 2026/5/6  | V0D.00.18 | 1. Optimized some parameters|
| 2026/1/14 | V0D.00.14 | 1. Optimized battery temperature status display |
| 2026/1/9 | V0D.00.13 | 1. Optimized battery temperature status display |
| 2025/12/25 | V0D.00.11 | 1. Added AC charging power setting |
| 2025/11/14 | V0D.00.08 | 1. Optimized main unit LED strip control |
| 2025/10/27 | V0D.00.06 | 1. Added register points for battery pack 6, AC-coupled energy, standby-to-sleep control, bypass enable, and grid/off-grid output energy<br />2. Modified PV4 alarm code reporting point<br />3. Removed duplicate LED control point |
| 2025/9/24 | V0D.00.03 | 1. Added control flags<br />2. Optimized calculation logic |

### EMS

| Release Date | Version | Update Summary |
| ------------ | ------- | -------------- |
| 2026/2/11 | V1.01.03 | 1. Optimized forced charging logic<br />2. Optimized scheduling time slot configuration<br />3. Optimized low-temperature battery heating logic<br />4. Optimized parallel operation logic<br />5. Added support for PFA4000 battery pack<br />6. Fixed issue where deep standby could not be entered under certain conditions |
| 2026/1/21 | V1.00.58 | 1. Optimized firmware upgrade timing<br />2. Optimized parallel power regulation<br />3. Added automatic charging when export is detected while AC charging is disabled<br />4. Added battery standby logic |
| 2025/12/10 | V1.00.57 | 1. Optimized PV power allocation in parallel mode<br />2. Improved PV priority in real-time control mode<br />3. Optimized upgrade logic<br />4. Added exit from deep standby via short press |
| 2025/11/28 | V1.00.55 | 1. Optimized upgrade logic |
| 2025/11/4 | V1.00.50 | 1. Optimized deep standby logic (standby power: 20W with bypass ON, 8W with bypass OFF)<br />2. Optimized LED animation during shutdown<br />3. Optimized backup SOC logic<br />4. Optimized upgrade logic<br />5. Optimized PV logic<br />6. Optimized standby parameters in real-time control mode<br />7. Improved overall power consumption<br />8. Added support for fifth expansion battery pack (hardware supported, App not yet supported) |
| 2025/10/14 | V1.00.48 | 1. Default EPS mode for off-grid port after power-on<br />2. Added critical load mode (not yet in App)<br />3. Added periodic full-charge calibration every 15 days<br />4. Grid power defined as AC line power<br />5. Added real-time control mode (not yet in App)<br />6. Optimized deep standby<br />7. Optimized parallel operation logic<br />8. Optimized standby power |
| 2025/8/4 | V1.00.43 | 1. Added parallel operation, grid settings, and increased grid power limit to 3600W.<br />2. Added LED strip & bypass relay control; optimized LED animation.<br />3. Increased discharge to 0.6P; optimized SOC distribution; default AC charge 2400W; fixed micro-inverter control.<br />4. Lowered standby threshold to 2.8%; optimized recharge logic, MOS thermal control, and inter-pack power strategy.<br />5. Improved overload protection (longer delay to 30s, better margin, no cascade faults).<br />6. EMS upgrade allowed at SOC ≥ 5%; added shutdown logging & optimized storage performance.<br />7. Added shutdown reporting (reason/time/count); improved real-time & time control modes |
| 2025/06/17 | V1.00.35 | / |
| 2025/06/04 | V1.00.32 | / |



### BMS MB

| Release Date | Version | Update Summary |
| ------------ | ------- | -------------- |
| 2026/2/11 | 1.00.42 | 1. Optimized SOC algorithm |
| 2026/1/21 | 1.00.38 | 1. Optimized SOC algorithm |
| 2025/11/28 | 1.00.35 | 1. Optimized upgrade logic |
| 2025/10/4 | 1.00.33 | 1. Optimized self-check logic<br />2. Optimized standby power<br />3. Added pre-charge logic |
| 2025/7/31 | 1.00.30 | 1. Optimized charging detection, improved communication stability, enhanced discharge protection |
| 2025/6/16 | 1.00.25 | / |
| 2025/5/30 | 1.00.22 | / |


### BMS SLAVE

| Release Date | Version | Update Summary |
| ------------ | ------- | -------------- |
| 2026/2/11 | 1.10.42 | 1. Optimized SOC algorithm |
| 2026/1/21 | 1.10.38 | 1. Optimized SOC algorithm |
| 2025/11/28 | 1.10.35 | 1. Optimized upgrade logic |
| 2025/10/4 | 1.10.33 | 1. Optimized self-check logic<br />2. Optimized standby power<br />3. Added pre-charge logic |
| 2025/7/31 | 1.10.30 | 1. Optimized charging detection, improved communication stability, enhanced discharge protection |
| 2025/6/16 | 1.10.25 | / |
| 2025/5/30 | 1.10.22 | / |


### DCDC

| Release Date | Version | Update Summary |
| ------------ | ------- | -------------- |
| 2026/3/20 | V1.01.64 | 1. Fixed occasional communication loss of battery pack during deep standby in multi-pack systems |
| 2026/3/4 | V1.01.62 | 1. Optimized battery pack communication |
| 2026/2/11 | V1.01.61 | 1. Optimized battery pack communication |
| 2026/1/21 | V1.01.59 | 1. Fixed SOC imbalance under low-power discharge |
| 2025/11/28 | V1.01.54 | 1. Fixed PV limitation issues in some conditions<br />Optimized upgrade logic |
| 2025/11/4 | V1.01.51 | 1. Optimized bypass logic |
| 2025/10/14 | V1.01.48 | 1. Optimized PV charging logic<br />2. Optimized heating film control logic |
| 2025/8/27 | V1.01.39 | / |
| 2025/7/31 | V1.01.36 | 1. Added reverse current protection, optimized discharge power, fixed overcurrent charging issues, improved low-light detection, enhanced overload protection |
| 2025/6/17 | V1.01.28 | / |
| 2025/6/4 | V1.01.23 | / |


### INV

| Release Date | Version | Update Summary |
| ------------ | ------- | -------------- |
| 2026/4/10 | V1.36 | 1. Optimized inverter issue where it may not charge/discharge during grid-tied operation |
| 2026/2/11 | V1.35 | 1. Optimized charging logic |
| 2026/1/21 | V1.34 | 1. Fixed issue where bypass may disconnect under certain conditions |
| 2025/12/10 | V1.32 | 1. Optimized real-time control mode |
| 2025/11/4 | V1.30 | 1. Added support for fifth expansion battery pack (not yet supported in App, hardware fully functional) |
| 2025/10/21 | V1.29 | / |
| 2025/10/4 | V1.28 | 1. Optimized islanding protection logic<br />2. Optimized off-grid discharge logic<br />3. Optimized derating logic |
| 2025/09/16 | V1.22 | / |
| 2025/7/8 | V1.21 | Optimized charging; improved undervoltage protection; upgraded overcurrent protection; adapted to multiple regional regulations; enhanced off-grid control; improved weak grid performance; default compliance settings |
| 2025/6/2 | V1.16 | / |

---

## BK1600

### CMS

| Release Date | Version | Update Summary |
| ------------ | ------- | -------------- |
| 2026/3/6 | V1408.0C.104A | 1. Added support for Stromleser meter (optical reader)<br />2. Added support for HomeWizard P1 meter<br />3. Added support for Shelly Plug Gen1<br />4. Added meter offset configuration |
| 2026/1/19 | V1407.0B.1049 | 1. Optimized communication logic |
| 2025/12/12 | V1406.0B.1047 | 1. Added support for Solarman smart plug, Shelly Plug S MTR Gen3, Shelly 3EM<br />2. Optimized system operation |
| 2025/10/23 | V1401.0B.0042 | 1. Optimized OpenData<br />2. Optimized system operation |
| 2025/7/22 | V130A.09.003A | / |
| 2025/6/24 | V1.3.09_R006.062_M4848_00000034 | / |
| 2024/11/25 | V1.3_R006.002_M4848_00000021 | / |

### Pfile

| Release Date | Version | Update Summary |
| ------------ | ------- | -------------- |
| 2025/12/29 | V06.00.09 | Added bypass control switch |
| 2025/11/14 | V06.00.08 | Added bypass control switch |
| 2025/9/2 | V06.00.06 | / |
| 2024/11/20 | V06.00.05 | 1. Updated battery data points<br />2. Optimized scheduling logic |


### EMS

| Release Date | Version | Update Summary |
| ------------ | ------- | -------------- |
| 2026/2/9 | V1.00.16 | 1. Added PV power sharing between units during parallel operation<br />2. Optimized real-time control logic |
| 2025/8/28 | V1.00.14 | 1. System optimization: improved multi-device stability and power allocation<br />2. Feature enhancement: added critical load protection, scheduled full-charge maintenance, deep standby mode (replaces shutdown), extending battery lifespan<br />3. User experience improvement: more flexible wake-up conditions and smarter grid/off-grid operation<br />4. Logging & upgrade: added shutdown records; settings retained during upgrades<br />5. Protocol updated to latest internal communication version |
| 2025/6/26 | 1.00.13 | / |
| 2025/6/11 | 1.00.12 | / |
| 2024/11/26 | 1.00.09 | / |


### BMS

| Release Date | Version | Update Summary |
| ------------ | ------- | -------------- |
| 2025/6/11 | V1.0.35 | Improved SOC accuracy during standby |
| 2024/10/31 | V1.0.34 | / |


### MPPT

| Release Date | Version |
| ------------ | ------- |
| 2025/9/29 | V3.17 |
| 2025/6/11 | V3.16 |
| 2024/8/3 | V3.14 |


### INV

| Release Date | Version | Update Summary |
| ------------ | ------- | -------------- |
| 2025/5/8 | V1.20 | / |
| 2025/5/6 | V1.19 | / |
| 2024/8/14 | V1.18 | 1. Optimized DC/DC charging loop<br />2. Optimized data reporting filter |

---

## BK1600 Ultra

### CMS

| Release Date | Version | Update Summary |
| ------------ | ------- | -------------- |
| 2026/3/6 | V1408.0C.104A | 1. Added support for Stromleser meter (optical reader)<br />2. Added support for HomeWizard P1 meter<br />3. Added support for Shelly Plug Gen1<br />4. Added meter offset configuration |
| 2026/1/19 | V1407.0B.1049 | 1. Optimized communication logic |
| 2025/12/12 | V1406.0B.1047 | 1. Added support for Solarman smart plug, Shelly Plug S MTR Gen3, Shelly 3EM<br />2. Optimized system operation |
| 2025/10/23 | V1401.0B.0042 | 1. Optimized OpenData<br />2. Optimized system operation |
| 2025/7/22 | V130A.09.003A | / |
| 2025/6/24 | V1.3.09_R006.062_M4848_00000034 | / |
| 2024/11/25 | V1.3_R006.002_M4848_00000021 | / |


### Pfile

| Release Date | Version | Update Summary |
| ------------ | ------- | -------------- |
| 2025/12/29 | V06.00.09 | Added bypass control switch |
| 2025/11/14 | V06.00.08 | Added bypass control switch |
| 2025/9/2 | V06.00.06 | / |
| 2024/11/20 | V06.00.05 | 1. Updated battery data points<br />2. Optimized scheduling logic |


### EMS

| Release Date | Version | Update Summary |
| ------------ | ------- | -------------- |
| 2026/2/9 | V2.00.06 | 1. Added PV overflow sharing to another unit during parallel operation<br />2. Optimized real-time control logic |
| 2025/11/27 | V2.00.04 | 1. Increased bypass port current limit to 10A |
| 2025/09/29 | V2.00.03 | 1. Optimized parallel operation scenarios<br />2. Added support for slave unit entering deep standby in wired parallel mode |
| 2025/09/12 | V2.00.02 | 1. SOC rounding adjusted (truncate decimals)<br />2. Meter refresh interval set to 3 seconds<br />3. Slave power allocated by limit values<br />4. Zero power set as discharge<br />5. Micro-inverter fault ignored<br />6. Added shutdown logging<br />7. Parameter upgrade compatibility improved<br />8. Added new status indicators (e.g., recharge)<br />9. Enhanced overload protection redundancy<br />10. Line power includes bypass<br />11. Critical load only responds to bypass<br />12. Standby changed to deep sleep<br />13. Optimized deep standby logic<br />14. Added scheduled full charge<br />15. Upgraded Modbus to V2.3<br />16. Fixed parallel discharge issue |
| 2025/06/26 | V2.00.01 | / |
| 2025/3/7 | V2.00.00 | / |


### BMS

| Release Date | Version |
| ------------ | ------- |
| 2025/3/7 | V1.00.35 |


### MPPT

| Release Date | Version |
| ------------ | ------- |
| 2025/9/29 | V3.17 |
| 2025/3/7 | V3.16 |


### INV

| Release Date | Version |
| ------------ | ------- |
| 2025/08/28 | V2.21 |
| 2025/6/26 | V2.17 |
| 2025/6/20 | V2.15 |
| 2025/3/7 | V2.07 |