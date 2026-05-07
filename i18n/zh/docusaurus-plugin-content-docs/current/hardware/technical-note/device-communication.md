---
title: 微储与外部设备通信说明
description: 了解微储如何与电表、插座等设备通信，以及数据更新方式
---

# 微储与外部设备通信说明

当您将电表、插座或其他设备接入微储系统后，系统会自动与这些设备通信，用于获取用电或发电数据。

- **本地通信（局域网）**：用于获取实时数据（响应快）
- **云端通信（远程）**：用于 App 显示和历史数据记录

不同品牌设备的通信方式略有不同，但系统会自动适配，无需手动配置。

| 品牌   | 本地通信方式 | 云端通信方式 |
| ---------- | ------------ | ------------ |
| Shelly     | HTTP         | 微储上云     |
| Ecotracker | HTTP         | 微储上云     |
| Stromleser | HTTP         | 微储上云     |
| HomeWizard | HTTP         | 微储上云     |
| IGEN       | UDP 广播     | 独立上云     |
| INDEVOLT   | 私有协议    | 微储上云     |

:::tip
通过“微储上云”表示数据先到微储，再由微储统一上传到云端。
:::

## 1. 本地通信

本地通信用于获取设备的**实时数据**，不同设备的数据刷新速度会有所不同。

:::info
当前设备数据刷新频率调节功能暂未开放，后续将在 App 中提供设置入口。
:::

### 1.1 HTTP 通信设备

通过局域网 HTTP 接口获取数据，稳定性较高。

- **默认通信间隔**：2 秒
- **可调范围**：
  - SolidFlex 2000 / PowerFlex 2000：≥ 1 秒
  - BK1600 / BK1600 Ultra：≥ 2 秒
- **支持设备**

  <table><thead>
    <tr>
      <th>品牌</th>
      <th>类型</th>
      <th>型号</th>
    </tr></thead>
  <tbody>
    <tr>
      <td rowspan="3">Shelly</td>
      <td>单相电表</td>
      <td>Shelly Pro EM</td>
    </tr>
    <tr>
      <td>三相电表</td>
      <td>Shelly 3EM<br />Shelly Pro 3 EM (400)<br />Shelly Pro 3EM 3CT 63</td>
    </tr>
    <tr>
      <td>插座</td>
      <td>Shelly Plug<br />Shelly Plug S Gen3</td>
    </tr>
    <tr>
      <td>Ecotracker</td>
      <td>红外读表器</td>
      <td>EcoTracker IR</td>
    </tr>
    <tr>
      <td>Stromleser</td>
      <td>红外读表器</td>
      <td>stormleser.one</td>
    </tr>
    <tr>
      <td>Homewizard</td>
      <td>P1读表器</td>
      <td>HWE-P1</td>
    </tr>
  </tbody>
  </table>

:::note

以下设备尚未接入微储系统，暂不支持数据通信：

<table><thead>
  <tr>
    <th>品牌</th>
    <th>类型</th>
    <th>型号</th>
  </tr></thead>
<tbody>
  <tr>
    <td rowspan="3">Shelly</td>
    <td>单相电表</td>
    <td>Shelly EM<br />Shelly EM Gen3</td>
  </tr>
  <tr>
    <td>三相电表</td>
    <td>Shelly 3EM-63T Gen3</td>
  </tr>
  <tr>
    <td>插座</td>
    <td>Shelly Wave Plug S<br />Shelly Plus Plug S <br />Shelly Outdoor Plug S Gen3</td>
  </tr>
</tbody>
</table>

:::


### 1.2 IGEN 设备

IGEN 设备通过局域网**广播方式主动发送数据**，无需轮询，实时性更高。

| 类型       | 型号                                                   | 默认间隔 | 最快支持 |
| ---------- | ------------------------------------------------------ | -------- | -------- |
| 单相电表   | MR1-D5-WR<br />MR1-D5-W                                | 150 ms   | ≥150 ms  |
| 三相电表   | MR3-D5-WR<br />MR3-D5-W<br />MR3-D4-WRE<br />MR3-D4-WE | 150 ms   | ≥150 ms  |
| 红外读表器 | NIR-12-EU<br />NIR-32-EU                               | 150 ms   | ≥150 ms  |
| P1读表器   | P1-2W<br />P1-2W-C                                     | 500 ms   | ≥150 ms  |
| 插座       | SP-2W-EU                                               | 500 ms   | ≥150 ms  |

:::note
以下设备已在适配开发中，预计后续版本支持：
- P1-2WR
:::

### 1.3 INDEVOLT 设备

通过自研私有协议与微储通信。

- **默认通信间隔**：2 秒 
- **可调范围**：≥ 1 秒  
- **支持设备**

  | 类型     | 型号 |
  | -------- | ---- |
  | 单相电表 | SMD1 |
  | 三相电表 | SMD3 |
  | 插座     | SP16 |


## 2. 云端通信

云端数据用于远程查看，例如在 App 中查看设备状态或历史数据。

所有设备规则一致：
- **默认通信间隔**：300 秒（5 分钟）
- **开启快刷后**：1 秒刷新
