---
title: API 参考
description: todo
---

# API 参考

| 组件                    | 说明                                   |
| ----------------------- | -------------------------------------- |
| [`Indevolt`](#indevolt) | 读取 INDEVOLT 微储设备数据，控制设备。 |
| [`Sys`](#sys)           | 获取设备基本信息和系统状态。           |
| [`WIFI`](#wifi)         | 获取设备当前的 Wi-Fi 连接状态。        |


---

## `Indevolt`

`Indevolt` 是微储设备数据交互接口，用于读取设备运行数据和配置参数，以及向设备下发控制指令。

* [**`Indevolt.GetData`**](#indevoltgetdata)：读取设备运行数据或配置参数。
* [**`Indevolt.SetData`**](#indevoltsetdata)：修改设备配置参数或执行控制操作。

### `Indevolt.GetData`

读取设备运行数据或配置参数。


import ApiBlock from "@site/src/components/ApiBlock";
import ResponseBlock from "@site/src/components/ResponseBlock";


<ApiBlock method="POST" path="/rpc/Indevolt.GetData">

```bash
curl -g -X POST -H "Content-Type: application/json" "http://192.168.31.213:8080/rpc/Indevolt.GetData?config={\"t\":[1664,1665]}"
```

</ApiBlock>

<ResponseBlock title="200 OK">

```json
{
 "1664":100,
 "1665":251
}
```

</ResponseBlock>


#### 请求参数

| 参数名   | 类型   | 必填 | 说明         |
| -------- | ------ | ---- | ------------ |
| `config` | Object | 是   | 数据读取配置 |

`config` 对象说明

| 参数名 | 类型  | 必填 | 说明                                       |
| ------ | ----- | ---- | ------------------------------------------ |
| `t`    | Array | 是   | 待读取的 [cJSON 点位](#cjson-点位)列表 |


#### 返回参数

JSON 格式的设备数据，其中：
- Key：cJSON 点位
- Value：对应数据点的当前值


#### cJSON 点位

以下 cJSON 点位用于读取设备运行数据或配置参数。不同设备型号支持的 cJSON 点位存在差异，请参考对应设备型号的数据点列表。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="sf2000" label="SolidFlex 2000 / PowerFlex 2000" default>

<table><thead>
  <tr>
    <th>cJson Point</th>
    <th>cJson Value type</th>
    <th>R/W</th>
    <th>Unit</th>
    <th>Point Description</th>
    <th>Enum Definition</th>
    <th>API</th>
    <th>Annotation</th>
  </tr></thead>
<tbody>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>AC Output / Settings</td>
  </tr>
  <tr>
    <td>11009</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>ACchargeSpeed</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Charging Power Limit Range: 100-10800</td>
  </tr>
  <tr>
    <td>11009</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>ACchargeSpeed</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Charging Power Limit Range: 100-10800</td>
  </tr>
  <tr>
    <td>2618</td>
    <td>Num</td>
    <td>R</td>
    <td></td>
    <td>GridChargeEnable</td>
    <td>1000:Disable<br/>1001:Enable</td>
    <td>Indevolt.GetData</td>
    <td>Grid Charging Enable (0 = Disable, 1 = Enable)</td>
  </tr>
  <tr>
    <td>2618</td>
    <td>Enum</td>
    <td>W</td>
    <td></td>
    <td>GridChargeEnable</td>
    <td>0:Disable<br/>1:Enable</td>
    <td>Indevolt.SetData</td>
    <td>Grid Charging Enable (0 = Disable, 1 = Enable)</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>AC Output / Real Time Data</td>
  </tr>
  <tr>
    <td>2278</td>
    <td>Float</td>
    <td>R</td>
    <td>W</td>
    <td>ACOutW</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Total AC Power = INV Power (positive when charging, negative when discharging) + Bypass Power (positive for EPS, negative for microinverter).</td>
  </tr>
  <tr>
    <td>2600</td>
    <td>Num</td>
    <td>R</td>
    <td>V</td>
    <td>Grid voltage</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>AC Input Voltage. Independent of charging/discharging status. Can be used for grid voltage detection. (uplink register)</td>
  </tr>
  <tr>
    <td>2612</td>
    <td>Num</td>
    <td>R</td>
    <td>Hz</td>
    <td>Grid voltage</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>AC Input Frequency. Independent of charging/discharging status. Can be used for grid frequency detection.</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>AC Output / Info</td>
  </tr>
  <tr>
    <td>11032</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>On Grid rated power</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Rated grid-connected output power. This represents the maximum active output power of the inverter.</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>Battery / Info</td>
  </tr>
  <tr>
    <td>1109</td>
    <td>String</td>
    <td>R</td>
    <td></td>
    <td>BMS Master Version</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Master BMS software version. Parse the decimal value directly (e.g. 14501 → V1.45.01).</td>
  </tr>
  <tr>
    <td>1120</td>
    <td>String</td>
    <td>R</td>
    <td></td>
    <td>MPPT Version</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>MPPT software version. Parse the decimal value directly (e.g. 14501 → V1.45.01).</td>
  </tr>
  <tr>
    <td>6010</td>
    <td>Num</td>
    <td>R</td>
    <td></td>
    <td>Maximum number of strings</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Maximum number of battery modules supported by the current system.</td>
  </tr>
  <tr>
    <td>142</td>
    <td>Num</td>
    <td>R</td>
    <td>kWh</td>
    <td>Rated Capacity（Wh）</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Total battery capacity of the system. The value is the combined capacity of all battery modules and depends on both the number and type of battery modules installed.</td>
  </tr>
  <tr>
    <td>114</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Maximum charge power</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Maximum battery charging capability. This value is obtained from the battery and represents the maximum charging power supported by the battery.</td>
  </tr>
  <tr>
    <td>115</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Maximum discharge power</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Maximum system discharge active power. The maximum output active power is dynamically limited by both the inverter rating and the battery capability. For example, if the inverter is rated at 2400 W and four battery modules can each provide 1 kW, the total battery output is 4 kW, but the system output is limited to 2400 W by the inverter rating.</td>
  </tr>
  <tr>
    <td>1136</td>
    <td>String</td>
    <td>R</td>
    <td></td>
    <td>DCDC_slaver1_Version</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave DCDC1 software version. Parse the decimal value directly (e.g. 14501 → V1.45.01).</td>
  </tr>
  <tr>
    <td>1137</td>
    <td>String</td>
    <td>R</td>
    <td></td>
    <td>BMS_slaver1_Version</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave BMS1 software version. Parse the decimal value directly (e.g. 14501 → V1.45.01).</td>
  </tr>
  <tr>
    <td>1138</td>
    <td>String</td>
    <td>R</td>
    <td></td>
    <td>DCDC_slaver2_Version</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave DCDC2 software version. Parse the decimal value directly (e.g. 14501 → V1.45.01).</td>
  </tr>
  <tr>
    <td>1139</td>
    <td>String</td>
    <td>R</td>
    <td></td>
    <td>BMS_slaver2_Version</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave BMS2 software version. Parse the decimal value directly (e.g. 14501 → V1.45.01).</td>
  </tr>
  <tr>
    <td>1140</td>
    <td>String</td>
    <td>R</td>
    <td></td>
    <td>DCDC_slaver3_Version</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Master DCDC3 software version. Parse the decimal value directly (e.g. 14501 → V1.45.01).</td>
  </tr>
  <tr>
    <td>1141</td>
    <td>String</td>
    <td>R</td>
    <td></td>
    <td>BMS_slaver3_Version</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave BMS3 software version. Parse the decimal value directly (e.g. 14501 → V1.45.01).</td>
  </tr>
  <tr>
    <td>1142</td>
    <td>String</td>
    <td>R</td>
    <td></td>
    <td>DCDC_slaver4_Version</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Salve DCDC4 software version. Parse the decimal value directly (e.g. 14501 → V1.45.01).</td>
  </tr>
  <tr>
    <td>1143</td>
    <td>String</td>
    <td>R</td>
    <td></td>
    <td>BMS_slaver4_Version</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave BMS4 software version. Parse the decimal value directly (e.g. 14501 → V1.45.01).</td>
  </tr>
  <tr>
    <td>9008</td>
    <td>String</td>
    <td>R</td>
    <td></td>
    <td>SN</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Master battery module serial number.</td>
  </tr>
  <tr>
    <td>9032</td>
    <td>String</td>
    <td>R</td>
    <td></td>
    <td>SN</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave battery module 1 serial number.</td>
  </tr>
  <tr>
    <td>9051</td>
    <td>String</td>
    <td>R</td>
    <td></td>
    <td>SN</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave battery module 2 serial number.</td>
  </tr>
  <tr>
    <td>9070</td>
    <td>String</td>
    <td>R</td>
    <td></td>
    <td>SN</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave battery module 3 serial number.</td>
  </tr>
  <tr>
    <td>9165</td>
    <td>String</td>
    <td>R</td>
    <td></td>
    <td>SN</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave battery module 4 serial number.</td>
  </tr>
  <tr>
    <td>9218</td>
    <td>String</td>
    <td>R</td>
    <td></td>
    <td>SN</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave battery module 5 serial number.</td>
  </tr>
  <tr>
    <td>1098</td>
    <td>String</td>
    <td>R</td>
    <td></td>
    <td>DCDC_slave5_Version</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave DCDC5 software version. Parse the decimal value directly (e.g. 14501 → V1.45.01).</td>
  </tr>
  <tr>
    <td>1099</td>
    <td>String</td>
    <td>R</td>
    <td></td>
    <td>BMS_slave5_Version</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave BMS5 software version. Parse the decimal value directly (e.g. 14501 → V1.45.01)</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>Battery / Settings</td>
  </tr>
  <tr>
    <td>6105</td>
    <td>Num</td>
    <td>R</td>
    <td>%</td>
    <td>BackUpSoc</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Backup SOC (%) Range:0-100</td>
  </tr>
  <tr>
    <td>6505</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>BackUpSoc</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Backup SOC (%) Range:0-100</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>Battery / Statistics</td>
  </tr>
  <tr>
    <td>6006</td>
    <td>Num</td>
    <td>R</td>
    <td>kWh</td>
    <td>B Charge Energy</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Total Battery Charge Energy</td>
  </tr>
  <tr>
    <td>6007</td>
    <td>Num</td>
    <td>R</td>
    <td>kWh</td>
    <td>B disCharge Energy</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Total Battery Discharge Energy</td>
  </tr>
  <tr>
    <td>11019</td>
    <td>Num</td>
    <td>R</td>
    <td>min</td>
    <td>ChargeLeftTime</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Remaining Charging Time (min)</td>
  </tr>
  <tr>
    <td>11020</td>
    <td>Num</td>
    <td>R</td>
    <td>min</td>
    <td>DischargeLeftTime</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Remaining Discharging Time (min)</td>
  </tr>
  <tr>
    <td>9003</td>
    <td>Num</td>
    <td>R</td>
    <td></td>
    <td>NCyc</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Master Battery Pack Cycle Count</td>
  </tr>
  <tr>
    <td>9019</td>
    <td>Num</td>
    <td>R</td>
    <td></td>
    <td>NCyc</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 1 Cycle Count</td>
  </tr>
  <tr>
    <td>9038</td>
    <td>Num</td>
    <td>R</td>
    <td></td>
    <td>NCyc</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 2 Cycle Count</td>
  </tr>
  <tr>
    <td>9057</td>
    <td>Num</td>
    <td>R</td>
    <td></td>
    <td>NCyc</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 3 Cycle Count</td>
  </tr>
  <tr>
    <td>9152</td>
    <td>Num</td>
    <td>R</td>
    <td></td>
    <td>NCyc</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 4 Cycle Count</td>
  </tr>
  <tr>
    <td>9205</td>
    <td>Num</td>
    <td>R</td>
    <td></td>
    <td>NCyc</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 5 Cycle Count</td>
  </tr>
  <tr>
    <td>6004</td>
    <td>Num</td>
    <td>R</td>
    <td>kWh</td>
    <td>Day_B Charge Energy</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Daily Battery Charge Energy</td>
  </tr>
  <tr>
    <td>6005</td>
    <td>Num</td>
    <td>R</td>
    <td>kWh</td>
    <td>Day_B disCharge Energy</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Daily Battery Discharge Energy</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>Battery / Real Time Data</td>
  </tr>
  <tr>
    <td>9002</td>
    <td>Num</td>
    <td>R</td>
    <td>%</td>
    <td>SoH</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Master Battery Pack SOH</td>
  </tr>
  <tr>
    <td>9004</td>
    <td>Num</td>
    <td>R</td>
    <td>V</td>
    <td>V</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Master Battery Pack Voltage</td>
  </tr>
  <tr>
    <td>9013</td>
    <td>Num</td>
    <td>R</td>
    <td>A</td>
    <td>A</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Master Battery Pack Current</td>
  </tr>
  <tr>
    <td>9018</td>
    <td>Num</td>
    <td>R</td>
    <td>%</td>
    <td>SoH</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 1 SOH</td>
  </tr>
  <tr>
    <td>9020</td>
    <td>Num</td>
    <td>R</td>
    <td>V</td>
    <td>V</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 1 Voltage</td>
  </tr>
  <tr>
    <td>9028</td>
    <td>Float</td>
    <td>R</td>
    <td>℃</td>
    <td>CellTmpMin</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 1 Minimum Cell Temperature</td>
  </tr>
  <tr>
    <td>19173</td>
    <td>Num</td>
    <td>R</td>
    <td>A</td>
    <td>A</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 1 Current (uplink register)</td>
  </tr>
  <tr>
    <td>9037</td>
    <td>Num</td>
    <td>R</td>
    <td>%</td>
    <td>SoH</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 2 SOH</td>
  </tr>
  <tr>
    <td>9039</td>
    <td>Num</td>
    <td>R</td>
    <td>V</td>
    <td>V</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 2 Voltage</td>
  </tr>
  <tr>
    <td>9047</td>
    <td>Float</td>
    <td>R</td>
    <td>℃</td>
    <td>CellTmpMin</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 2 Minimum Cell Temperature</td>
  </tr>
  <tr>
    <td>19174</td>
    <td>Num</td>
    <td>R</td>
    <td>A</td>
    <td>A</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 2 Current (uplink register)</td>
  </tr>
  <tr>
    <td>9056</td>
    <td>Num</td>
    <td>R</td>
    <td>%</td>
    <td>SoH</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 3 SOH</td>
  </tr>
  <tr>
    <td>9058</td>
    <td>Num</td>
    <td>R</td>
    <td>V</td>
    <td>V</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 3 Voltage</td>
  </tr>
  <tr>
    <td>9066</td>
    <td>Float</td>
    <td>R</td>
    <td>℃</td>
    <td>CellTmpMin</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 3 Minimum Cell Temperature</td>
  </tr>
  <tr>
    <td>19175</td>
    <td>Num</td>
    <td>R</td>
    <td>A</td>
    <td>A</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 3 Current</td>
  </tr>
  <tr>
    <td>9151</td>
    <td>Num</td>
    <td>R</td>
    <td>%</td>
    <td>SoH</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 4 SOH</td>
  </tr>
  <tr>
    <td>9153</td>
    <td>Num</td>
    <td>R</td>
    <td>V</td>
    <td>V</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 4 Voltage</td>
  </tr>
  <tr>
    <td>9161</td>
    <td>Float</td>
    <td>R</td>
    <td>℃</td>
    <td>CellTmpMin</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 4 Minimum Cell Temperature</td>
  </tr>
  <tr>
    <td>19176</td>
    <td>Num</td>
    <td>R</td>
    <td>A</td>
    <td>A</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 4 Current (uplink register)</td>
  </tr>
  <tr>
    <td>6000</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>BatteryPower</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Total Battery Pack Charge/Discharge Power. Positive = Discharging; Negative = Charging.</td>
  </tr>
  <tr>
    <td>9081</td>
    <td>Float</td>
    <td>R</td>
    <td></td>
    <td>electric heating temperature</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Master Battery Pack Heater Temperature</td>
  </tr>
  <tr>
    <td>9082</td>
    <td>Num</td>
    <td>R</td>
    <td></td>
    <td>electric heating power</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Master Battery Pack Heater Power</td>
  </tr>
  <tr>
    <td>9097</td>
    <td>Float</td>
    <td>R</td>
    <td>℃</td>
    <td>electric heating temperature</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 1 Heater Temperature</td>
  </tr>
  <tr>
    <td>9098</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>electric heating power</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 1 Heater Power</td>
  </tr>
  <tr>
    <td>9113</td>
    <td>Float</td>
    <td>R</td>
    <td>℃</td>
    <td>electric heating temperature</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 2 Heater Temperature</td>
  </tr>
  <tr>
    <td>9114</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>electric heating power</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 2 Heater Power</td>
  </tr>
  <tr>
    <td>9129</td>
    <td>Float</td>
    <td>R</td>
    <td>℃</td>
    <td>electric heating temperature</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 3 Heater Temperature</td>
  </tr>
  <tr>
    <td>9130</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>electric heating power</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 3 Heater Power</td>
  </tr>
  <tr>
    <td>9145</td>
    <td>Float</td>
    <td>R</td>
    <td>℃</td>
    <td>electric heating temperature</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 4 Heater Temperature</td>
  </tr>
  <tr>
    <td>9146</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>electric heating power</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 4 Heater Power</td>
  </tr>
  <tr>
    <td>9204</td>
    <td>Num</td>
    <td>R</td>
    <td>%</td>
    <td>SoH</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 5 SOH</td>
  </tr>
  <tr>
    <td>9206</td>
    <td>Num</td>
    <td>R</td>
    <td>V</td>
    <td>V</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 5 Voltage</td>
  </tr>
  <tr>
    <td>9214</td>
    <td>Num</td>
    <td>R</td>
    <td>C</td>
    <td>CellTmpMin</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 5 Minimum Cell Temperature</td>
  </tr>
  <tr>
    <td>9267</td>
    <td>Float</td>
    <td>R</td>
    <td>A</td>
    <td>A</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 5 Current (uplink register)</td>
  </tr>
  <tr>
    <td>19177</td>
    <td>Num</td>
    <td>R</td>
    <td>A</td>
    <td>A</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 5 Current (uplink register)</td>
  </tr>
  <tr>
    <td>9280</td>
    <td>Float</td>
    <td>R</td>
    <td>℃</td>
    <td>electric heating temperature</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 5 Heater Temperature</td>
  </tr>
  <tr>
    <td>9281</td>
    <td>Enum</td>
    <td>R</td>
    <td>W</td>
    <td>electric heating power</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 5 Heater Power</td>
  </tr>
  <tr>
    <td>9405</td>
    <td>Num</td>
    <td>R</td>
    <td>%</td>
    <td>Total SOC(Full-system SoC)</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>System SOC</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>Battery / Real Time State</td>
  </tr>
  <tr>
    <td>6001</td>
    <td>Enum</td>
    <td>R</td>
    <td></td>
    <td>BatteryState</td>
    <td>1000:Static<br/>1001:Charging<br/>1002:Discharging</td>
    <td>Indevolt.GetData</td>
    <td>Overall Battery Pack Operating Status</td>
  </tr>
  <tr>
    <td>9079</td>
    <td>Enum</td>
    <td>R</td>
    <td></td>
    <td>DC/DC state</td>
    <td>0:Standby<br/>1:Charging<br/>2:Discharging<br/>3:Protection</td>
    <td>Indevolt.GetData</td>
    <td>Master Battery Pack DC/DC Status</td>
  </tr>
  <tr>
    <td>9080</td>
    <td>Enum</td>
    <td>R</td>
    <td></td>
    <td>electric heating state</td>
    <td>0:Off<br/>1:On</td>
    <td>Indevolt.GetData</td>
    <td>Master Battery Pack Heater Status</td>
  </tr>
  <tr>
    <td>9095</td>
    <td>Enum</td>
    <td>R</td>
    <td></td>
    <td>DC/DC state</td>
    <td>0:Standby<br/>1:Charging<br/>2:Discharging<br/>3:Protection</td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 1 DC/DC Status</td>
  </tr>
  <tr>
    <td>9096</td>
    <td>Enum</td>
    <td>R</td>
    <td></td>
    <td>electric heating state</td>
    <td>0:Off<br/>1:On</td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 1 Heater Status</td>
  </tr>
  <tr>
    <td>9111</td>
    <td>Enum</td>
    <td>R</td>
    <td></td>
    <td>DC/DC state</td>
    <td>0:Standby<br/>1:Charging<br/>2:Discharging<br/>3:Protection</td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 2 DC/DC Status</td>
  </tr>
  <tr>
    <td>9112</td>
    <td>Enum</td>
    <td>R</td>
    <td></td>
    <td>electric heating state</td>
    <td>0:Off<br/>1:On</td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 2 Heater Status</td>
  </tr>
  <tr>
    <td>9127</td>
    <td>Enum</td>
    <td>R</td>
    <td></td>
    <td>DC/DC state</td>
    <td>0:Standby<br/>1:Charging<br/>2:Discharging<br/>3:Protection</td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 3 DC/DC Status</td>
  </tr>
  <tr>
    <td>9128</td>
    <td>Num</td>
    <td>R</td>
    <td></td>
    <td>electric heating state</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 3 Heater Status</td>
  </tr>
  <tr>
    <td>9143</td>
    <td>Enum</td>
    <td>R</td>
    <td></td>
    <td>DC/DC state</td>
    <td>0:Standby<br/>1:Charging<br/>2:Discharging<br/>3:Protection</td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 4 DC/DC Status</td>
  </tr>
  <tr>
    <td>9144</td>
    <td>Enum</td>
    <td>R</td>
    <td></td>
    <td>electric heating state</td>
    <td>0:Off<br/>1:On</td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 4 Heater Status</td>
  </tr>
  <tr>
    <td>9278</td>
    <td>Enum</td>
    <td>R</td>
    <td></td>
    <td>DC/DC state</td>
    <td>0:Standby<br/>1:Charging<br/>2:Discharging</td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 5 DC/DC Status</td>
  </tr>
  <tr>
    <td>9279</td>
    <td>Enum</td>
    <td>R</td>
    <td></td>
    <td>electric heating state</td>
    <td>0:Off<br/>1:On</td>
    <td>Indevolt.GetData</td>
    <td>Slave Battery Pack 5 Heater Status</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>Bypass / Statistics</td>
  </tr>
  <tr>
    <td>9284</td>
    <td>Num</td>
    <td>R</td>
    <td>Wh</td>
    <td>AC OUT discharge energy</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Total Bypass Port Discharge Energy</td>
  </tr>
  <tr>
    <td>9285</td>
    <td>Num</td>
    <td>R</td>
    <td>Wh</td>
    <td>Day - AC OUT discharge energy</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Daily Bypass Discharge Energy</td>
  </tr>
  <tr>
    <td>11034</td>
    <td>Num</td>
    <td>R</td>
    <td>Wh</td>
    <td>Microinverter generation energy</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Total Microinverter Energy Generation</td>
  </tr>
  <tr>
    <td>11035</td>
    <td>Num</td>
    <td>R</td>
    <td>Wh</td>
    <td>Day Microinverter generation energy</td>
    <td>0:Off<br/>1:On</td>
    <td>Indevolt.GetData</td>
    <td>Daily Microinverter Energy Generation</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>Bypass / Settings</td>
  </tr>
  <tr>
    <td>680</td>
    <td>Num</td>
    <td>R</td>
    <td></td>
    <td>Bypass enable</td>
    <td>0:Disable<br/>1:Enable</td>
    <td>Indevolt.GetData</td>
    <td>Off-grid &amp; Bypass Enable</td>
  </tr>
  <tr>
    <td>64100</td>
    <td>Enum</td>
    <td>R</td>
    <td></td>
    <td>key load enable</td>
    <td>0:Disabled<br/>1:Enabled</td>
    <td>Indevolt.GetData</td>
    <td>Critical Load Enable (higher priority than Smart Meter and Smart Socket)</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>Bypass / Real Time Data</td>
  </tr>
  <tr>
    <td>667</td>
    <td>Float</td>
    <td>R</td>
    <td>W</td>
    <td>Bypass  power</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Bypass Power</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>Bypass / Real Time State</td>
  </tr>
  <tr>
    <td>11039</td>
    <td>Num</td>
    <td>R</td>
    <td></td>
    <td>Bypass  mode</td>
    <td>0:Eps<br/>1:M-Inv</td>
    <td>Indevolt.GetData</td>
    <td>Bypass Mode (The EMS automatically detects the current direction to determine the operating mode.)，0: EPS Mode；1: Microinverter Mode</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>Cluster / Settings</td>
  </tr>
  <tr>
    <td>669</td>
    <td>Enum</td>
    <td>R</td>
    <td></td>
    <td>system  Parallel Type</td>
    <td>0:Centralized (One Grid Connection Point)<br/>1:Coordinated (Multiple Grid Connection Points)</td>
    <td>Indevolt.GetData</td>
    <td>Cluster Type</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>Grid / Settings</td>
  </tr>
  <tr>
    <td>11010</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>FeedBack Power</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Maximum Grid Feed-in Power.Range: 0-10800</td>
  </tr>
  <tr>
    <td>11010</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>FeedBack Power</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Maximum Grid Feed-in Power.Range: 0-10800</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>Inverter / Info</td>
  </tr>
  <tr>
    <td>1119</td>
    <td>String</td>
    <td>R</td>
    <td></td>
    <td>Inverter Version</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Inverter software version. Parse the decimal value directly and display it in the format Vx.xx (e.g. 108 → V1.08).</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Rated output power</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Maximum rated output power of the inverter.</td>
  </tr>
  <tr>
    <td>614</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Maximum active power</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Maximum active output power of the system. The maximum output active power is dynamically limited by both the inverter rating and the battery capability. For example, if the inverter is rated at 2400 W and four battery modules can each provide 1 kW, the total battery output is 4 kW, but the system output is limited to 2400 W by the inverter rating. Currently,</td>
  </tr>
  <tr>
    <td>11028</td>
    <td>Num</td>
    <td>R</td>
    <td>V</td>
    <td>Off Grid rated voltage</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Rated off-grid inverter voltage.</td>
  </tr>
  <tr>
    <td>11029</td>
    <td>Num</td>
    <td>R</td>
    <td>Hz</td>
    <td>Off Grid rated frequency</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Rated off-grid inverter frequency.</td>
  </tr>
  <tr>
    <td>11030</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Off Grid rated power</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Rated off-grid output power.</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>Inverter / Real Time Data</td>
  </tr>
  <tr>
    <td>2086</td>
    <td>Num</td>
    <td>R</td>
    <td>A</td>
    <td>AphA</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>INV input current when charging; INV output current when not charging. No direction indication (always positive).</td>
  </tr>
  <tr>
    <td>2083</td>
    <td>Num</td>
    <td>R</td>
    <td>V</td>
    <td>PhVphA</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>INV input voltage when charging; INV output voltage when not charging. Not intended for grid voltage detection.</td>
  </tr>
  <tr>
    <td>2095</td>
    <td>Num</td>
    <td>R</td>
    <td>Hz</td>
    <td>Hz</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>INV input frequency when charging; INV output frequency when not charging. Not intended for grid frequency detection.</td>
  </tr>
  <tr>
    <td>2098</td>
    <td>Float</td>
    <td>R</td>
    <td>VA</td>
    <td>VA</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>0 when INV is charging; otherwise, INV AC apparent output power.</td>
  </tr>
  <tr>
    <td>2097</td>
    <td>Float</td>
    <td>R</td>
    <td>Var</td>
    <td>VAr</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>AC Reactive Power</td>
  </tr>
  <tr>
    <td>2099</td>
    <td>Float</td>
    <td>R</td>
    <td>%</td>
    <td>PF</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>0 when INV is charging; otherwise, INV AC output power factor.</td>
  </tr>
  <tr>
    <td>2275</td>
    <td>Float</td>
    <td>R</td>
    <td>W</td>
    <td>INV input power</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>INV AC input/output power with direction. Positive = AC input (charging); Negative = AC output (discharging). Replaces the definition of register 114.</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>Inverter / Event</td>
  </tr>
  <tr>
    <td>8100</td>
    <td>Enum</td>
    <td>R</td>
    <td></td>
    <td>Evt1</td>
    <td>1:DC Side Overvoltage<br/>2:AC Connection Disconnected<br/>3:DC Connection Disconnected<br/>4:Grid Connection Disconnected<br/>5:Ground Fault<br/>6:AC Output Short Circuit<br/>7:Inverter Overtemperature<br/>8:Inverter Overfrequency<br/>9:Inverter Underfrequency<br/>10:AC Input Overvoltage<br/>11:AC Input Undervoltage<br/>12:Inverter Input Short Circuit<br/>13:Inverter Low Temperature<br/>19:Off-grid Inverter Phase A Overvoltage<br/>20:Off-grid Inverter Phase A Undervoltage<br/>21:Off-grid Inverter Phase A Overcurrent / Overload</td>
    <td>Indevolt.GetData</td>
    <td>INV Fault 1</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>Inverter / Statistics</td>
  </tr>
  <tr>
    <td>11007</td>
    <td>Num</td>
    <td>R</td>
    <td>Wh</td>
    <td>AC_WH_input</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Total INV Input Energy</td>
  </tr>
  <tr>
    <td>2107</td>
    <td>Num</td>
    <td>R</td>
    <td>kWh</td>
    <td>ActInWh</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Total INV Charging Energy (calculated from INV input power)</td>
  </tr>
  <tr>
    <td>11036</td>
    <td>Num</td>
    <td>R</td>
    <td>Wh</td>
    <td>Day  On_Grid output energy</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Daily Grid-connected Discharge Energy (INV output energy)</td>
  </tr>
  <tr>
    <td>11037</td>
    <td>Num</td>
    <td>R</td>
    <td>Wh</td>
    <td>Day  Off_Grid output energy</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Daily Off-grid Discharge Energy (INV output energy)</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>Inverter / Settings</td>
  </tr>
  <tr>
    <td>11011</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>AC max discharge power</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Maximum INV Output Power.Range:0-3600</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>Load / Real Time Data</td>
  </tr>
  <tr>
    <td>5000</td>
    <td>Float</td>
    <td>R</td>
    <td>W</td>
    <td>HomeUseW</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Home Load Power</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>Meter / Real Time State</td>
  </tr>
  <tr>
    <td>7120</td>
    <td>Enum</td>
    <td>R</td>
    <td>W</td>
    <td>MeterState</td>
    <td>1000:Enable<br/>1001:Disable</td>
    <td>Indevolt.GetData</td>
    <td>Meter Status</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>Meter / Real Time Data</td>
  </tr>
  <tr>
    <td>11016</td>
    <td>Float</td>
    <td>R</td>
    <td>W</td>
    <td>MeterPu</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Meter Phase U Power</td>
  </tr>
  <tr>
    <td>15203</td>
    <td>INT</td>
    <td>W</td>
    <td>W</td>
    <td>MeterPu</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Meter Phase U Power</td>
  </tr>
  <tr>
    <td>15204</td>
    <td>INT</td>
    <td>W</td>
    <td></td>
    <td>MeterPu</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Meter Phase U Power</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>PV / Info</td>
  </tr>
  <tr>
    <td>120</td>
    <td>Num</td>
    <td>R</td>
    <td></td>
    <td>Maximum MPPT Channels</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Maximum number of MPPT inputs. ECO/AC versions report 0, while PV-enabled versions report 4.</td>
  </tr>
  <tr>
    <td>11031</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>MPPT rated power</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Rated MPPT power.</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>PV / Statistics</td>
  </tr>
  <tr>
    <td>1502</td>
    <td>Num</td>
    <td>R</td>
    <td>kWh</td>
    <td>WH</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>PV Daily Energy Generation</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>PV / Real Time Data</td>
  </tr>
  <tr>
    <td>1632</td>
    <td>Num</td>
    <td>R</td>
    <td>A</td>
    <td>DCA</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>PV1 Current</td>
  </tr>
  <tr>
    <td>1600</td>
    <td>Num</td>
    <td>R</td>
    <td>V</td>
    <td>DCV</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>PV1 Voltage</td>
  </tr>
  <tr>
    <td>1664</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>DCW</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>PV1 Power</td>
  </tr>
  <tr>
    <td>1633</td>
    <td>Num</td>
    <td>R</td>
    <td>A</td>
    <td>DCA</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>PV2 Current</td>
  </tr>
  <tr>
    <td>1601</td>
    <td>Num</td>
    <td>R</td>
    <td>V</td>
    <td>DCV</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>PV2 Voltage</td>
  </tr>
  <tr>
    <td>1665</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>DCW</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>PV2 Power</td>
  </tr>
  <tr>
    <td>8500</td>
    <td>Num</td>
    <td>R</td>
    <td></td>
    <td>PV total power</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Total PV Charging Power</td>
  </tr>
  <tr>
    <td>1634</td>
    <td>Num</td>
    <td>R</td>
    <td>A</td>
    <td>DCA</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>PV3 Current</td>
  </tr>
  <tr>
    <td>1602</td>
    <td>Num</td>
    <td>R</td>
    <td>V</td>
    <td>DCV</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>PV3 Voltage</td>
  </tr>
  <tr>
    <td>1666</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>DCW</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>PV3 Power</td>
  </tr>
  <tr>
    <td>1635</td>
    <td>Num</td>
    <td>R</td>
    <td>A</td>
    <td>DCA</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>PV4 Current</td>
  </tr>
  <tr>
    <td>1603</td>
    <td>Num</td>
    <td>R</td>
    <td>V</td>
    <td>DCV</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>PV4 Voltage</td>
  </tr>
  <tr>
    <td>1667</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>DCW</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>PV4 Power</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>PV / Real Time State</td>
  </tr>
  <tr>
    <td>7119</td>
    <td>Enum</td>
    <td>R</td>
    <td></td>
    <td>DCSt</td>
    <td>1:Powered Off<br/>2:Sleep<br/>3:Starting<br/>4:Running<br/>5:Power-Limited Operation<br/>6:Shutting Down<br/>7:Fault<br/>8:Standby<br/>9:Test Mode</td>
    <td>Indevolt.GetData</td>
    <td>PV1 Operating Status</td>
  </tr>
  <tr>
    <td>7124</td>
    <td>Enum</td>
    <td>R</td>
    <td></td>
    <td>DCSt</td>
    <td>1:Powered Off<br/>2:Sleep<br/>3:Starting<br/>4:Running<br/>5:Power-Limited Operation<br/>6:Shutting Down<br/>7:Fault<br/>8:Standby<br/>9:Test Mode</td>
    <td>Indevolt.GetData</td>
    <td>PV2 Operating Status</td>
  </tr>
  <tr>
    <td>7126</td>
    <td>Enum</td>
    <td>R</td>
    <td></td>
    <td>DCSt</td>
    <td>1:Powered Off<br/>2:Sleep<br/>3:Starting<br/>4:Running<br/>5:Power-Limited Operation<br/>6:Shutting Down<br/>7:Fault<br/>8:Standby<br/>9:Test Mode</td>
    <td>Indevolt.GetData</td>
    <td>PV3 Operating Status</td>
  </tr>
  <tr>
    <td>7127</td>
    <td>Enum</td>
    <td>R</td>
    <td></td>
    <td>DCSt</td>
    <td>1:Powered Off<br/>2:Sleep<br/>3:Starting<br/>4:Running<br/>5:Power-Limited Operation<br/>6:Shutting Down<br/>7:Fault<br/>8:Standby<br/>9:Test Mode</td>
    <td>Indevolt.GetData</td>
    <td>PV4 Operating Status</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>PV / Event</td>
  </tr>
  <tr>
    <td>8138</td>
    <td>Enum</td>
    <td>R</td>
    <td></td>
    <td>DCEvt</td>
    <td>1:PV Input Overvoltage<br/>3:PV Input Disconnected<br/>12:PV Module Input Short Circuit<br/>13:PV Module Low Temperature<br/>19:PV Input Reverse Polarity<br/>21:PV Input Undervoltage</td>
    <td>Indevolt.GetData</td>
    <td>PV1 Alarm Code</td>
  </tr>
  <tr>
    <td>8102</td>
    <td>Enum</td>
    <td>R</td>
    <td></td>
    <td>DCEvt</td>
    <td>1:PV Input Overvoltage<br/>3:PV Input Disconnected<br/>12:PV Module Input Short Circuit<br/>13:PV Module Low Temperature<br/>19:PV Input Reverse Polarity<br/>21:PV Input Undervoltage</td>
    <td>Indevolt.GetData</td>
    <td>PV2 Alarm Code</td>
  </tr>
  <tr>
    <td>8132</td>
    <td>Enum</td>
    <td>R</td>
    <td></td>
    <td>DCEvt</td>
    <td>1:PV Input Overvoltage<br/>3:PV Input Disconnected<br/>12:PV Module Input Short Circuit<br/>13:PV Module Low Temperature<br/>19:PV Input Reverse Polarity<br/>21:PV Input Undervoltage</td>
    <td>Indevolt.GetData</td>
    <td>PV3 Alarm Code</td>
  </tr>
  <tr>
    <td>8133</td>
    <td>Enum</td>
    <td>R</td>
    <td></td>
    <td>DCEvt</td>
    <td>1:PV Input Overvoltage<br/>3:PV Input Disconnected<br/>12:PV Module Input Short Circuit<br/>13:PV Module Low Temperature<br/>19:PV Input Reverse Polarity<br/>21:PV Input Undervoltage</td>
    <td>Indevolt.GetData</td>
    <td>PV4 Alarm Code</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>Socket / Real Time State</td>
  </tr>
  <tr>
    <td>18000</td>
    <td>Enum</td>
    <td>W</td>
    <td></td>
    <td>SmartSocketState</td>
    <td>0:Disconnected<br/>1:Connected</td>
    <td>Indevolt.SetData</td>
    <td>Smart Socket Status</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>Socket / Real Time Data</td>
  </tr>
  <tr>
    <td>18001</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>SmartSocketP</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Smart Plug Power</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>System / Info</td>
  </tr>
  <tr>
    <td>1118</td>
    <td>String</td>
    <td>R</td>
    <td></td>
    <td>EMS Version</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>EMS software version. Parse the decimal value directly (e.g. 14501 → V1.45.01).</td>
  </tr>
  <tr>
    <td>1127</td>
    <td>Num</td>
    <td>R</td>
    <td></td>
    <td>Modbus Version</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Platform protocol version. Used to identify the platform protocol version supported by the device. Parse the decimal value directly (e.g. 15 → V1.5).</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>System / Real Time State</td>
  </tr>
  <tr>
    <td>11006</td>
    <td>Enum</td>
    <td>R</td>
    <td></td>
    <td>St</td>
    <td>1:Powered Off<br/>2:Sleep<br/>3:Starting<br/>4:MPPT Operating<br/>5:Current Limiting<br/>6:Shutting Down<br/>7:INV Fault<br/>8:Standby<br/>9:Grid Charging<br/>10:Grid Discharging<br/>11:Off-grid Charging<br/>12:Off-grid Discharging<br/>13:Low Battery Charging (charge battery to Backup SOC)<br/>14:Deep Sleep<br/>15:Scheduled Full Charge (force battery charging to 100%)<br/>16:Off-grid Deep Sleep</td>
    <td>Indevolt.GetData</td>
    <td>System Operating Status</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>System / Settings</td>
  </tr>
  <tr>
    <td>11008</td>
    <td>Num</td>
    <td>R</td>
    <td></td>
    <td>Time year-month<br/>Time day-hour<br/>Time min-sec</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Date (Year/Month)，High byte: Year (2000-based), range 0–99; Low byte: Month, range 1–12<br/>Date (Day/Hour)，High byte: Day, range 1–31; Low byte: Hour, range 0–23<br/>Time (Minute/Second)，High byte: Minute, range 0–59; Low byte: Second, range 0–59</td>
  </tr>
  <tr>
    <td>632</td>
    <td>Num</td>
    <td>R</td>
    <td></td>
    <td>Standby timeout</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Standby Timeout，For E2000G2, the timeout before automatically entering Off-grid Deep Sleep. Set to 0 to disable automatic entry into Off-grid Deep Sleep.</td>
  </tr>
  <tr>
    <td>35001</td>
    <td>Num</td>
    <td>R</td>
    <td></td>
    <td>Deep Sleep start Time hour-min</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Deep Sleep Schedule Start Time，Format example: 0x121E = 18:30. High byte = Hour (0–23), Low byte = Minute (0–59).</td>
  </tr>
  <tr>
    <td>35001</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Deep Sleep start Time hour-min</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Deep Sleep Schedule Start Time，Format example: 0x121E = 18:30. High byte = Hour (0–23), Low byte = Minute (0–59).</td>
  </tr>
  <tr>
    <td>35002</td>
    <td>Num</td>
    <td>R</td>
    <td></td>
    <td>Deep Sleep stop Time hour-min</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Deep Sleep Schedule End Time，Format example: 0x121E = 18:30. High byte = Hour (0–23), Low byte = Minute (0–59).</td>
  </tr>
  <tr>
    <td>35002</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Deep Sleep stop Time hour-min</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Deep Sleep Schedule End Time，Format example: 0x121E = 18:30. High byte = Hour (0–23), Low byte = Minute (0–59).</td>
  </tr>
  <tr>
    <td>7171</td>
    <td>Num</td>
    <td>R</td>
    <td></td>
    <td>LED light strip enable</td>
    <td>0:Disable<br/>1:Enable</td>
    <td>Indevolt.GetData</td>
    <td>Front Panel LED Light Strip Control</td>
  </tr>
  <tr>
    <td>35005</td>
    <td>Enum</td>
    <td>W</td>
    <td></td>
    <td>LED light strip enable</td>
    <td>0:LED Light Strip Off<br/>1:LED Light Strip On<br/>2:LED Low-power Mode (50% brightness)</td>
    <td>Indevolt.SetData</td>
    <td>Front Panel LED Light Strip Control</td>
  </tr>
  <tr>
    <td>8646</td>
    <td>Num</td>
    <td>R</td>
    <td>Day</td>
    <td>‌Force Full Charge Interval</td>
    <td>0-60<br/>0:OFF</td>
    <td>Indevolt.GetData</td>
    <td>Forced Full Charge Interval，Configurable range: 0–60 days. 0 = Disable automatic full charge. Default = 0.</td>
  </tr>
  <tr>
    <td>8646</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>‌Force Full Charge Interval</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Forced Full Charge Interval，Configurable range: 0–60 days. 0 = Disable automatic full charge. Default = 0.</td>
  </tr>
  <tr>
    <td>8647</td>
    <td>Num</td>
    <td>R</td>
    <td>Time</td>
    <td>‌Force Full Charge Start Time</td>
    <td>DEC--&gt;HEX<br/>H:hour<br/>L:minute</td>
    <td>Indevolt.GetData</td>
    <td>Forced Full Charge Start Time，Default: 00:00. High byte = Hour (0–23), Low byte = Minute (0–59).</td>
  </tr>
  <tr>
    <td>8647</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>‌Force Full Charge Start Time</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Forced Full Charge Start Time，Default: 00:00. High byte = Hour (0–23), Low byte = Minute (0–59).</td>
  </tr>
  <tr>
    <td>2802</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Forced AC charge power</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>AC Charging Power，Charging power when battery SOC falls below Backup SOC. Configurable range: 100–2400 W.</td>
  </tr>
  <tr>
    <td>2802</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Forced AC charge power</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>AC Charging Power，Charging power when battery SOC falls below Backup SOC. Configurable range: 100–2400 W.</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>System / Mode</td>
  </tr>
  <tr>
    <td>7101</td>
    <td>Enum</td>
    <td>R</td>
    <td></td>
    <td>SystemMode</td>
    <td>1:Self-consumed Prioritized<br/>4:real-time control<br/>5:Charge/Discharge Schedule</td>
    <td>Indevolt.GetData</td>
    <td>System operating mode (read/write)</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Enum</td>
    <td>W</td>
    <td></td>
    <td>SystemMode</td>
    <td>1:Self-Consumption Mode<br/>4:Real-time Control Mode<br/>6:Custom Time Control Mode (corresponding to control parameter registers 7300–7419)</td>
    <td>Indevolt.SetData</td>
    <td>System operating mode (read/write)</td>
  </tr>
  <tr>
    <td>6107</td>
    <td>Enum</td>
    <td>R</td>
    <td></td>
    <td>Realtime Control Order</td>
    <td>0:Standby<br/>1:Charge<br/>2:Discharge</td>
    <td>Indevolt.GetData</td>
    <td>Real-time control command</td>
  </tr>
  <tr>
    <td>6109</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Realtime Control Power</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Real-time control power，Configurable range: 0–3600 W (single unit); 0–10800 W (parallel system)</td>
  </tr>
  <tr>
    <td>6108</td>
    <td>Num</td>
    <td>R</td>
    <td>%</td>
    <td>Realtime Control end SOC</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Real-time control end SoC，Range: 0–100%</td>
  </tr>
  <tr>
    <td>26000</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 1</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 1 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12197</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 1</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 1 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26001</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 2</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 2 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12198</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 2</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 2 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26002</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 3</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 3 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12199</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 3</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 3 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26003</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 4</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 4 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12200</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 4</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 4 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26004</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 5</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 5 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12201</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 5</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 5 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26005</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 6</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 6 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12202</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 6</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 6 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26006</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 7</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 7 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12203</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 7</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 7 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26007</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 8</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 8 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12204</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 8</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 8 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26008</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 9</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 9 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12205</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 9</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 9 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26009</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 10</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 10 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12206</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 10</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 10 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26010</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 11</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 11 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12207</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 11</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 11 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26011</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 12</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 12 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12208</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 12</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 12 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26012</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 13</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 13 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12209</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 13</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 13 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26013</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 14</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 14 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12210</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 14</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 14 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26014</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 15</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 15 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12211</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 15</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 15 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26015</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 16</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 16 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12212</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 16</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 16 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26016</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 17</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 17 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12213</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 17</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 17 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26017</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 18</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 18 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12214</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 18</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 18 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26018</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 19</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 19 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12215</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 19</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 19 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26019</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 20</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 20 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12216</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 20</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 20 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26020</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 21</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 21 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12217</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 21</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 21 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26021</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 22</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 22 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12218</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 22</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 22 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26022</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 23</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 23 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12219</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 23</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 23 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26023</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 24</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 24 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12220</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 24</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 24 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26024</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 25</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 25 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12221</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 25</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 25 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26025</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 26</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 26 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12222</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 26</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 26 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26026</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 27</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 27 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12223</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 27</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 27 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26027</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 28</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 28 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12224</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 28</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 28 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26028</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 29</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 29 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12225</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 29</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 29 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26029</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 30</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 30 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12226</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 30</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 30 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26030</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 31</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 31 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12227</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 31</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 31 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26031</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 32</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 32 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12228</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 32</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 32 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26032</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 33</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 33 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12229</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 33</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 33 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26033</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 34</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 34 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12230</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 34</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 34 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26034</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 35</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 35 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12231</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 35</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 35 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26035</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 36</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 36 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12232</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 36</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 36 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26036</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 37</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 37 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12233</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 37</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 37 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26037</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 38</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 38 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12234</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 38</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 38 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26038</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 39</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 39 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12235</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 39</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 39 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26039</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 40</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 40 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12236</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 40</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 40 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26040</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 41</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 41 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12237</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 41</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 41 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26041</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 42</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 42 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12238</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 42</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 42 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26042</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 43</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 43 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12239</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 43</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 43 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26043</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 44</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 44 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12240</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 44</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 44 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26044</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 45</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 45 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12241</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 45</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 45 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26045</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 46</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 46 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12242</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 46</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 46 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26046</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 47</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 47 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12243</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 47</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 47 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>26047</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Load point 48</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Simulated load for Time Slot 48 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td>12244</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Load point 48</td>
    <td></td>
    <td>Indevolt.SetData</td>
    <td>Simulated load for Time Slot 48 (30-minute interval, 48 time slots in total. For simplicity, only the first and last time slots are listed.)</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>Real-Time Control<br/> and System Parameter Configuration / Setting</td>
  </tr>
  <tr>
    <td>47005</td>
    <td>Enum</td>
    <td>W</td>
    <td></td>
    <td>Mode Setting</td>
    <td>1:Self-consumed prioritized<br/>4:real-time control<br/>5:charge/discharge Schedule</td>
    <td>Indevolt.SetData</td>
    <td></td>
  </tr>
  <tr>
    <td>47015</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>State Setting(Only available in real-time control)</td>
    <td>0:Standby<br/>1:Charging<br/>2:Discharging</td>
    <td>Indevolt.SetData</td>
    <td></td>
  </tr>
  <tr>
    <td>47016</td>
    <td>INT</td>
    <td>W</td>
    <td>W</td>
    <td>Power Setting(Only available in real-time control)</td>
    <td>MAX Charging: 50-2400<br/>MAX Discharging:50-2400</td>
    <td>Indevolt.SetData</td>
    <td></td>
  </tr>
  <tr>
    <td>47017</td>
    <td>UINT</td>
    <td>W</td>
    <td>%</td>
    <td>SOC Settingt(Only available in real-time control)</td>
    <td>5-100</td>
    <td>Indevolt.SetData</td>
    <td></td>
  </tr>
  <tr>
    <td>1147</td>
    <td>INT</td>
    <td>W</td>
    <td>W</td>
    <td>Max AC Output Power Setting</td>
    <td>Single Unit: 50–2400 (50–3600)<br/><br/>Dual Wireless Parallel: 50–4800 (50–7200)<br/><br/>Triple Wireless Parallel: 50–7200 (50–10800)<br/><br/>Wired Parallel: 50–3600</td>
    <td>Indevolt.SetData</td>
    <td>Single Unit: Maximum output of 2400W (3600W when bypass-connected to microinverters). Supports up to 3 units in parallel.</td>
  </tr>
  <tr>
    <td>1146</td>
    <td>INT</td>
    <td>W</td>
    <td>W</td>
    <td>Feed-in Power Limit Setting</td>
    <td>50-2400</td>
    <td>Indevolt.SetData</td>
    <td></td>
  </tr>
  <tr>
    <td>1143</td>
    <td>UINT</td>
    <td>W</td>
    <td></td>
    <td>Grid Charging Setting</td>
    <td>0:Disable<br/>1:Enable</td>
    <td>Indevolt.SetData</td>
    <td></td>
  </tr>
  <tr>
    <td>1138</td>
    <td>INT</td>
    <td>W</td>
    <td>W</td>
    <td>Inverter Input Limit Setting</td>
    <td>Single unit: 50–2400<br/><br/>Two units (wireless parallel): 50–4800<br/><br/>Three units (wireless parallel): 50–7200<br/><br/>Wired parallel: 50–3600</td>
    <td>Indevolt.SetData</td>
    <td>Single unit: max 2400; up to 3 units in parallel.</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Enum</td>
    <td>W</td>
    <td></td>
    <td>Load Setting</td>
    <td>1:Smart Plug<br/>2:Meter<br/>3:Key Load<br/>4:Custom</td>
    <td>Indevolt.SetData</td>
    <td></td>
  </tr>
  <tr>
    <td>7266</td>
    <td>Enum</td>
    <td>W</td>
    <td></td>
    <td>Bypass Setting</td>
    <td>0:Disable<br/>1:Enable</td>
    <td>Indevolt.SetData</td>
    <td></td>
  </tr>
  <tr>
    <td>1142</td>
    <td>INT</td>
    <td>W</td>
    <td>%</td>
    <td>Backup SOC Setting</td>
    <td>5-100</td>
    <td>Indevolt.SetData</td>
    <td></td>
  </tr>
  <tr>
    <td>7265</td>
    <td>Enum</td>
    <td>W</td>
    <td></td>
    <td>Light Setting</td>
    <td>0:Disable<br/>1:Enable</td>
    <td>Indevolt.SetData</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>SN</td>
  </tr>
  <tr>
    <td>0</td>
    <td>String</td>
    <td>R</td>
    <td></td>
    <td>Device SN</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>System Operating Information</td>
  </tr>
  <tr>
    <td>2101</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Total AC Iutput Power</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td></td>
  </tr>
  <tr>
    <td>2108</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Total AC Output Power</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>Cluster Information</td>
  </tr>
  <tr>
    <td>606</td>
    <td>Enum</td>
    <td>R</td>
    <td></td>
    <td>Master-slave identification</td>
    <td>1000:Master<br/>1001:Slave<br/>1002:None</td>
    <td>Indevolt.GetData</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>Electrical Energy Information</td>
  </tr>
  <tr>
    <td>2104</td>
    <td>Num</td>
    <td>R</td>
    <td>KWh</td>
    <td>Total AC Output Energy</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Comprehensive electrical energy, including(DC+AC+Bypass）</td>
  </tr>
  <tr>
    <td>2105</td>
    <td>Num</td>
    <td>R</td>
    <td>KWh</td>
    <td>Total off-grid bypass output energy</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>Total electrical energy of off-grid bypass discharge</td>
  </tr>
  <tr>
    <td>1505</td>
    <td>Num</td>
    <td>R</td>
    <td>Wh</td>
    <td>Cumulative Production</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>Battery Pack Operating Parameters</td>
  </tr>
  <tr>
    <td>6002</td>
    <td>Num</td>
    <td>R</td>
    <td>%</td>
    <td>Battery SOC Total</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td></td>
  </tr>
  <tr>
    <td>9000</td>
    <td>Num</td>
    <td>R</td>
    <td>%</td>
    <td>Batt SOC-MB</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td></td>
  </tr>
  <tr>
    <td>9012</td>
    <td>Num</td>
    <td>R</td>
    <td>℃</td>
    <td>Batt Temp-MB</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td></td>
  </tr>
  <tr>
    <td>9009</td>
    <td>Num</td>
    <td>R</td>
    <td>V</td>
    <td>Batt Cell1 V-MB</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>PG1200Series/PG2000Series/PG3000Series</td>
  </tr>
  <tr>
    <td>9011</td>
    <td>Num</td>
    <td>R</td>
    <td>V</td>
    <td>Batt Cell2 V-MB</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>PG1200Series/PG2000Series/PG3000Series</td>
  </tr>
  <tr>
    <td>9016</td>
    <td>Num</td>
    <td>R</td>
    <td>%</td>
    <td>Batt SOC-Pack1</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td></td>
  </tr>
  <tr>
    <td>9030</td>
    <td>Num</td>
    <td>R</td>
    <td>℃</td>
    <td>Batt Temp-Pack1</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td></td>
  </tr>
  <tr>
    <td>9021</td>
    <td>Num</td>
    <td>R</td>
    <td>V</td>
    <td>Batt Cell1 V--Pack1</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>SFA/PFA//SFA/PFA_G2//SFA/PFA_G3</td>
  </tr>
  <tr>
    <td>9023</td>
    <td>Num</td>
    <td>R</td>
    <td>V</td>
    <td>Batt Cell2 V--Pack1</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>SFA/PFA//SFA/PFA_G2//SFA/PFA_G3</td>
  </tr>
  <tr>
    <td>9035</td>
    <td>Num</td>
    <td>R</td>
    <td>%</td>
    <td>Batt SOC-Pack2</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td></td>
  </tr>
  <tr>
    <td>9049</td>
    <td>Num</td>
    <td>R</td>
    <td>℃</td>
    <td>Batt Temp-Pack2</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td></td>
  </tr>
  <tr>
    <td>9040</td>
    <td>Num</td>
    <td>R</td>
    <td>V</td>
    <td>Batt Cell1 V-Pack2</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>SFA/PFA//SFA/PFA_G2//SFA/PFA_G3</td>
  </tr>
  <tr>
    <td>9042</td>
    <td>Num</td>
    <td>R</td>
    <td>V</td>
    <td>Batt Cell2 V-Pack2</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>SFA/PFA//SFA/PFA_G2//SFA/PFA_G3</td>
  </tr>
  <tr>
    <td>9054</td>
    <td>Num</td>
    <td>R</td>
    <td>%</td>
    <td>Batt SOC-Pack3</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td></td>
  </tr>
  <tr>
    <td>9068</td>
    <td>Num</td>
    <td>R</td>
    <td>℃</td>
    <td>Batt Temp-Pack3</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td></td>
  </tr>
  <tr>
    <td>9059</td>
    <td>Num</td>
    <td>R</td>
    <td>V</td>
    <td>Batt Cell1 V-Pack3</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>SFA/PFA//SFA/PFA_G2//SFA/PFA_G3</td>
  </tr>
  <tr>
    <td>9061</td>
    <td>Num</td>
    <td>R</td>
    <td>V</td>
    <td>Batt Cell2 V-Pack3</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>SFA/PFA//SFA/PFA_G2//SFA/PFA_G3</td>
  </tr>
  <tr>
    <td>9149</td>
    <td>Num</td>
    <td>R</td>
    <td>%</td>
    <td>Batt SOC-Pack4</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td></td>
  </tr>
  <tr>
    <td>9163</td>
    <td>Num</td>
    <td>R</td>
    <td>℃</td>
    <td>Batt Temp-Pack4</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td></td>
  </tr>
  <tr>
    <td>9154</td>
    <td>Num</td>
    <td>R</td>
    <td>V</td>
    <td>Batt Cell1 V-Pack4</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>SFA/PFA//SFA/PFA_G2//SFA/PFA_G3</td>
  </tr>
  <tr>
    <td>9156</td>
    <td>Num</td>
    <td>R</td>
    <td>V</td>
    <td>Batt Cell2 V-Pack4</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>SFA/PFA//SFA/PFA_G2//SFA/PFA_G3</td>
  </tr>
  <tr>
    <td>9202</td>
    <td>Num</td>
    <td>R</td>
    <td>%</td>
    <td>Batt SOC-Pack5</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td></td>
  </tr>
  <tr>
    <td>9216</td>
    <td>Num</td>
    <td>R</td>
    <td>℃</td>
    <td>Batt Temp-Pack5</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td></td>
  </tr>
  <tr>
    <td>9219</td>
    <td>Num</td>
    <td>R</td>
    <td>V</td>
    <td>Batt Cell1 V-Pack5</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>SFA/PFA//SFA/PFA_G2//SFA/PFA_G3</td>
  </tr>
  <tr>
    <td>9222</td>
    <td>Num</td>
    <td>R</td>
    <td>V</td>
    <td>Batt Cell2 V-Pack5</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td>SFA/PFA//SFA/PFA_G2//SFA/PFA_G3</td>
  </tr>
  <tr>
    <td colspan="8" style={{ textAlign: 'center' }}>PV Operating Parameters</td>
  </tr>
  <tr>
    <td>1501</td>
    <td>Num</td>
    <td>R</td>
    <td>W</td>
    <td>Total DC Output Power</td>
    <td></td>
    <td>Indevolt.GetData</td>
    <td></td>
  </tr>
</tbody></table>

 </TabItem>
 <TabItem value="bk1600" label="BK1600 / BK1600 Ultra">

<table><thead>
<tr>
    <th>cJSON 点位</th>
    <th>cJSON 值类型</th>
    <th>单位</th>
    <th>说明</th>
    <th>Enum 定义</th>
    <th>API</th>
    <th>注释</th>
</tr></thead>
<tbody>
<tr>
    <td colspan="7" style={{ textAlign: 'center' }}>SN </td>
</tr>
<tr>
    <td>0</td>
    <td>String</td>
    <td></td>
    <td>Device SN</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td colspan="7" style={{ textAlign: 'center' }}>Firmware Version Information </td>
</tr>
<tr>
    <td>1118</td>
    <td>String</td>
    <td></td>
    <td>BK1600Series EMS</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>1107</td>
    <td>String</td>
    <td></td>	
    <td>BK1600Series BMS</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>1119</td>
    <td>String</td>
    <td></td>
    <td>BK1600Series PCS</td>
    <td>H_HEX-->DEC + L_HEX-->DEC</td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>311</td>
    <td>String</td>
    <td></td>
    <td>BK1600Series MPPT</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td colspan="7" style={{ textAlign: 'center' }}>System Operating Information</td>
</tr>
  <tr>
    <td>142</td>
    <td>Num</td>
    <td>KWh</td>
    <td>Rated capacity</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>2618</td>
    <td>Num</td>
    <td></td>
    <td>Grid Charging</td>
    <td>1000: Disable<br />1001: Enable</td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>2617</td>
    <td>Num</td>
    <td>W</td>
    <td>Feed-in Power Limit</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>4</td>
    <td>Num</td>
    <td>W</td>
    <td>Max AC Output Power</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>2619</td>
    <td>Num</td>
    <td>W</td>
    <td>Max AC Input Power</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>2101</td>
    <td>Num</td>
    <td>W</td>
    <td>Total AC Input Power</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>2107</td>
    <td>Num</td>
    <td>KWh</td>
    <td>Total AC Input Energy</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>2108</td>
    <td>Num</td>
    <td>W</td>
    <td>Total AC Output Power</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>680</td>
    <td>Enum</td>
    <td></td>
    <td>Bypass</td>
    <td>0: Disable<br />1: Enable</td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>7170</td>
    <td>Enum</td>
    <td></td>
    <td>Bypass mode</td>
    <td>0: Eps<br />1: M-Inv</td>
    <td>`Indevolt.GetData`</td>
    <td>Automatically switch according to forward and reverse current.</td>
  </tr>
  <tr>
    <td>7101</td>
    <td>Enum</td>
    <td></td>
    <td>Working mode</td>
    <td>0: Outdoor Portable<br />1: Self-consumed Prioritized<br />4: Real-Time Control<br />5: Charge/Discharge Schedule</td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>1502</td>
    <td>Num</td>
    <td>KWh</td>
    <td>Daily Production</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>1505</td>
    <td>Num</td>
    <td>0.001kwh</td>
    <td>Cumulative Production</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>6105</td>
    <td>Num</td>
    <td>%</td>
    <td>Backup SOC</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>6004</td>
    <td>Num</td>
    <td>KWh</td>
    <td>Battery Daily Charging Energy</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>6005</td>
    <td>Num</td>
    <td>KWh</td>
    <td>Battery Daily Discharging Energy</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>6006</td>
    <td>Num</td>
    <td>KWh</td>
    <td>Battery Total Charging Energy</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>6007</td>
    <td>Num</td>
    <td>KWh</td>
    <td>Battery Total Discharging Energy</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>7120</td>
    <td>Enum</td>
    <td></td>
    <td>Meter Connection Status</td>
    <td>1000：ON<br />1001：OFF</td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>21028</td>
    <td>Num</td>
    <td>W</td>
    <td>Meter Power</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="7" style={{ textAlign: 'center' }}>Bypass power (Not applicable to BK1600)</td>
</tr>
<tr>
    <td>667</td>
    <td>Num</td>
    <td>W</td>
    <td>Bypass power</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td colspan="7" style={{ textAlign: 'center' }}>Battery Pack Operating Parameters</td>
  </tr>
  <tr>
    <td>6001</td>
    <td>Enum</td>
    <td></td>
    <td>Battery Charge/Discharge State</td>
    <td>1000: Static<br />1001: Charging<br />1002: Discharging</td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>6000</td>
    <td>Num</td>
    <td>W</td>
    <td>Battery Power</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>6002</td>
    <td>Num</td>
    <td>%</td>
    <td>Battery SOC Total</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>7620</td>
    <td>Num</td>
    <td>℃</td>
    <td>Batt Temp</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>10112</td>
    <td>Num</td>
    <td>V</td>
    <td>CELL1 Voltage</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>10113</td>
    <td>Num</td>
    <td>V</td>
    <td>CELL2 Voltage</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>10114</td>
    <td>Num</td>
    <td>V</td>
    <td>CELL3 Voltage</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>10115</td>
    <td>Num</td>
    <td>V</td>
    <td>CELL4 Voltage</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>10116</td>
    <td>Num</td>
    <td>V</td>
    <td>CELL5 Voltage</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>10117</td>
    <td>Num</td>
    <td>V</td>
    <td>CELL6 Voltage</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>10118</td>
    <td>Num</td>
    <td>V</td>
    <td>CELL7 Voltage</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>10119</td>
    <td>Num</td>
    <td>V</td>
    <td>CELL8 Voltage</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>10120</td>
    <td>Num</td>
    <td>V</td>
    <td>CELL9 Voltage</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>10121</td>
    <td>Num</td>
    <td>V</td>
    <td>CELL10 Voltage</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>10122</td>
    <td>Num</td>
    <td>V</td>
    <td>CELL11 Voltage</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="7" style={{ textAlign: 'center' }}>PV Operating Parameters</td>
  </tr>
  <tr>
    <td>1501</td>
    <td>Num</td>
    <td>W</td>
    <td>Total DC Output Power</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>1632</td>
    <td>Num</td>
    <td>A</td>
    <td>DC Input Current 1</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>1600</td>
    <td>Num</td>
    <td>V</td>
    <td>DC Input Voltage 1</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>1664</td>
    <td>Num</td>
    <td>W</td>
    <td>DC Input Power 1</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>1633</td>
    <td>Num</td>
    <td>A</td>
    <td>DC Input Current 2</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>1601</td>
    <td>Num</td>
    <td>V</td>
    <td>DC Input Voltage 2</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>1665</td>
    <td>Num</td>
    <td>W</td>
    <td>DC Input Power 2</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
 </tbody>
 </table>




  </TabItem>
</Tabs>


### `Indevolt.SetData`

修改设备配置参数或向设备发送控制指令。

<ApiBlock method="POST" path="/rpc/Indevolt.SetData">

```bash
curl -g -X POST -H "Content-Type: application/json" "http://192.168.31.213:8080/rpc/Indevolt.SetData?config={\"f\":16,\"t\":47005,\"v\":[4]}"
```
</ApiBlock>

<ResponseBlock title="200 OK">

```json
{
  "result": true
}
```
</ResponseBlock>

#### 请求参数

| 参数名 | 类型   | 必填 | 说明         |
| ------ | ------ | ---- | ------------ |
| `config` | Object | 是   | 数据写入配置 |

`config` 对象说明

| 参数名 | 类型   | 必填 | 说明                                   |
| ------ | ------ | ---- | -------------------------------------- |
| `f`    | Number | 是   | 功能码，固定为 `16`                      |
| `t`    | Number | 是   | 待写入的 [cJSON 点位](#cjson-点位-1)   |
| `v`    | Array  | 是   | 写入值，请参考对应点位的 值 说明 |

#### 返回参数

| 参数名   | 类型 | 说明                               |
| -------- | ---- | ---------------------------------- |
| `result` | Boolean | `true`: success; `false`: failure. |

#### 示例

1. 设置实时控制模式

     ```bash
     curl -g -X POST -H "Content-Type: application/json" "http://192.168.31.213:8080/rpc/Indevolt.SetData?config={\"f\":16,\"t\":47005,\"v\":[4]}"
     ```

2. 设置实时控制模式下的放电状态、功率和 SOC

     ```bash
     curl -g -X POST -H "Content-Type: application/json" "http://192.168.31.213:8080/rpc/Indevolt.SetData?config={\"f\":16,\"t\":47015,\"v\":[2,700,5]}"
     ```

#### cJSON 点位

不同设备型号支持的 cJSON 点位 `t` 存在差异,不同点位对应的 `v` 格式和含义也不同，请参考对应设备型号的列表。

<Tabs>
  <TabItem value="sf2000" label="SolidFlex 2000 / PowerFlex 2000" default>
    | cJSON 点位 | cJSON 值类型 | 单位 | 说明    | 值        | API |
    | ----------- | ---------------- | ---- | -------------------- | --------------------------------------|---|
    | 47005       | Enum             |      | Mode Setting| 1: Self-consumed Prioritized<br />4: Real-time control<br />5: Charge/Discharge Schedule |`Indevolt.SetData`|
    | 47015       | UINT             |      | State Setting (Only available in real-time control)| 0: Standby<br />1: Charging<br />2: Discharging     |`Indevolt.SetData`|
    | 47016       | INT              | W    | Power Setting (Only available in real-time control)| MAX Charging: 50–2400<br />MAX Discharging: 50–2400    |`Indevolt.SetData`|
    | 47017       | UINT             | %    | SOC Setting (Only available in real-time control)| 5-100         |`Indevolt.SetData`|
    | 1147        | INT              | W    | Max AC Output Power Setting|  50-2400                                  |`Indevolt.SetData`|
    | 1146        | INT              | W    | Feed-in Power Limit Setting|  50-2400                                  |`Indevolt.SetData`|
    | 1143        | UINT             |      | Grid Charging Setting| 0: Disable<br />1: Enable                       |`Indevolt.SetData`|
    | 1138        | INT              | W    | Inverter Input Limit Setting| 100-2400                                 |`Indevolt.SetData`|
    | 1           | Enum             |      | Load Setting|    1: Smart Plug<br />2: Meter<br />3: Key Load<br />4: Custom     |`Indevolt.SetData`|
    | 7266        | Enum             |      | Bypass Setting| 0: Disable<br />1: Enable                                        |`Indevolt.SetData`|
    | 1142        | INT              | %    | Backup SOC Setting|                                                              |`Indevolt.SetData`|
    | 7265        | Enum             |      | Light Setting| 0: Disable<br />1: Enable                                         |`Indevolt.SetData`|

  </TabItem>
  <TabItem value="bk1600" label="BK1600 / BK1600 Ultra">
    | cJSON 点位 | cJSON 值类型 | 单位 | 说明 | 值                                       | API |
    | ----------- | ---------------- | ---- | ----------------- | ------------------- |---|
    | 47005 | Enum |      | Mode Setting   | 0: Outdoor Portable<br />1: Self-consumed Prioritized<br />4: Real-Time Control<br />5: Charge/Discharge Schedule |`Indevolt.SetData`|
    | 47015 | Enum |      | State Setting (Only available in real-time control) | 0: Standby<br />1: Charging<br />2: Discharging    |`Indevolt.SetData`|
    | 47016 | Num  | W    | Power Setting (Only available in real-time control) | 50-1200    |`Indevolt.SetData`|
    | 47017 | Num  | %    | SOC Setting (Only available in real-time control)  | 5-100       |`Indevolt.SetData`|
    
  </TabItem>
</Tabs>


:::info
实时控制模式下，可一次性写入状态、功率、SOC值以控制设备充放电。
:::

---

## `Sys`

`Sys` 用于获取设备基本信息和系统状态。

### `Sys.GetConfig`

获取设备当前配置信息，包括设备型号、序列号、固件版本等。

<ApiBlock method="GET" path="/rpc/Sys.GetConfig">

```bash
curl "http://192.168.31.213:8080/rpc/Sys.GetConfig"
```
</ApiBlock> 


<ResponseBlock title="200 OK">

```json
{
  "device": {
    "hostname": "",
    "timezone": 480,
    "type": "CMS-SF2000",
    "sn": "",
    "mac": "7C3E82EF997F",
    "fw": "T1.4.06_ROOD. 072_M4801_0000002C",
    "f_ver": "T1406.07.002C",
    "p_ver": "VOD.00.08",
    "time": "2025-12-18 09:44:57",
    "time_stamp": 1766051097,
    "run_time": 2244
  }
}
```
</ResponseBlock>

**返回参数**

| 参数名   | 类型   | 说明     |
| -------- | ------ | -------- |
| `device` | Object | 设备信息 |

`device`说明

| 参数名       | 类型   | 说明                           |
| ------------ | ------ | ------------------------------ |
| `hostname`   | String | Device name                    |
| `timezone`   | Number | Timezone                       |
| `type`       | String | Device model                   |
| `sn`         | String | Device serial number           |
| `mac`        | String | Device MAC address             |
| `fw`         | String | Device firmware version        |
| `f_ver`      | String | CMS version                    |
| `p_ver`      | String | Pfile version                  |
| `time`       | String | Current time                   |
| `time_stamp` | Number | Current timestamp (in seconds) |
| `run_time`   | Number | Device runtime (in seconds)    |

---

## `WIFI`

`WiFi` 用于获取设备当前的 Wi-Fi 连接状态。

**适用设备**

- BK1600 / BK1600 Ultra

### `WiFi.GetStatus`

获取设备当前 Wi-Fi ，包括 IP 地址、Wi-Fi 名称和信号强度。

<ApiBlock method="GET" path="/rpc/WiFi.GetStatus">

```bash
curl "http://192.168.0.7:8080/rpc/WiFi.GetStatus"
```
</ApiBlock> 

<ResponseBlock title="200 OK">

```json
{
  "src": "",
  "params": { 
    "sta_ip": "192.168.0.7",
    "ssid": "IGEN_GUEST_2.4G",
    "rssi": 100
  }
}
```
</ResponseBlock>

**返回参数**

| 参数名   | 类型   | 说明             |
| -------- | ------ | ---------------- |
| `src`    | String | 设备序列号（SN） |
| `params` | Object | Wi-Fi 状态信息   |

`params` 说明

| 参数名   | 类型   | 说明                                                     |
| -------- | ------ | -------------------------------------------------------- |
| `sta_ip` | String | 设备当前 IP 地址                                         |
| `ssid`   | String | 当前连接的 Wi-Fi 名称                                    |
| `rssi`   | Number | Wi-Fi 信号强度百分比，范围 `0~100`，数值越大表示信号越好 |
