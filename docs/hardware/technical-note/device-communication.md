---
title: Communication with External Devices
description: Learn how micro-storage communicates with meters, plugs, and other devices, and how data updates work
---

# Communication with External Devices

When you connect a smart meter, smart plug, or other device to the micro-storage system, the system will automatically communicate with it to collect power consumption or generation data.

- **Local communication (LAN)**: used for real-time data acquisition (fast response)
- **Cloud communication (remote)**: used for App display and historical data logging

Communication methods vary slightly across different brands, but the system automatically adapts—no manual configuration is required.

| Brand | Local Communication | Cloud Communication |
| ------------ | ------------------- | ------------------- |
| Shelly       | HTTP                | Routed via Micro-Storage |
| Ecotracker   | HTTP                | Routed via Micro-Storage |
| Stromleser   | HTTP                | Routed via Micro-Storage |
| HomeWizard   | HTTP                | Routed via Micro-Storage |
| IGEN         | UDP broadcast       | Direct-to-Cloud     |
| INDEVOLT     | Private protocol    | Routed via Micro-Storage |

:::tip
“Routed via Micro-Storage” means data is first sent to the micro-storage system and then uploaded to the cloud in a unified way.
:::

## 1. Local Communication

Local communication is used to obtain **real-time device data**. Update frequency may vary depending on the device.

:::info
The device data refresh rate adjustment feature is not yet available. It will be added in a future App update.
:::

### 1.1 HTTP Communication Devices

Data is obtained via local LAN HTTP interfaces, offering stable performance.

- **Default update interval**: 2 seconds  
- **Adjustable range**:
  - SolidFlex 2000 / PowerFlex 2000: ≥ 1 second
  - BK1600 / BK1600 Ultra: ≥ 2 seconds

- **Supported devices**

  <table><thead>
    <tr>
      <th>Brand</th>
      <th>Type</th>
      <th>Model</th>
    </tr></thead>
  <tbody>
    <tr>
      <td rowspan="3">Shelly</td>
      <td>Single-phase meter</td>
      <td>Shelly Pro EM</td>
    </tr>
    <tr>
      <td>Three-phase meter</td>
      <td>Shelly 3EM<br />Shelly Pro 3 EM (400)<br />Shelly Pro 3EM 3CT 63</td>
    </tr>
    <tr>
      <td>Smart plug</td>
      <td>Shelly Plug<br />Shelly Plug S Gen3</td>
    </tr>
    <tr>
      <td>Ecotracker</td>
      <td>Infrared meter reader</td>
      <td>EcoTracker IR</td>
    </tr>
    <tr>
      <td>Stromleser</td>
      <td>Infrared meter reader</td>
      <td>stormleser.one</td>
    </tr>
    <tr>
      <td>Homewizard</td>
      <td>P1 meter reader</td>
      <td>HWE-P1</td>
    </tr>
  </tbody>
  </table>

:::note

The following devices are not yet integrated into the micro-storage system and do not support data communication:

<table><thead>
  <tr>
    <th>Brand</th>
    <th>Type</th>
    <th>Model</th>
  </tr></thead>
<tbody>
  <tr>
    <td rowspan="3">Shelly</td>
    <td>Single-phase meter</td>
    <td>Shelly EM<br />Shelly EM Gen3</td>
  </tr>
  <tr>
    <td>Three-phase meter</td>
    <td>Shelly 3EM-63T Gen3</td>
  </tr>
  <tr>
    <td>Smart plug</td>
    <td>Shelly Wave Plug S<br />Shelly Plus Plug S<br />Shelly Outdoor Plug S Gen3</td>
  </tr>
</tbody>
</table>

:::

### 1.2 IGEN Devices

IGEN devices actively send data via **local network broadcast**, without polling, enabling higher real-time performance.

| Type           | Model                                                   | Default Interval | Minimum Interval |
| -------------- | ------------------------------------------------------ | ---------------- | ----------------- |
| Single-phase meter | MR1-D5-WR<br />MR1-D5-W | 150 ms | ≥150 ms |
| Three-phase meter  | MR3-D5-WR<br />MR3-D5-W<br />MR3-D4-WRE<br />MR3-D4-WE | 150 ms | ≥150 ms |
| Infrared reader    | NIR-12-EU<br />NIR-32-EU | 150 ms | ≥150 ms |
| P1 meter reader    | P1-2W<br />P1-2W-C | 500 ms | ≥150 ms |
| Smart plug         | SP-2W-EU | 500 ms | ≥150 ms |

:::note
The following device is under integration and will be supported in a future release:
- P1-2WR
:::

### 1.3 INDEVOLT Devices

Communication is based on a proprietary private protocol developed by micro-storage.

- **Default update interval**: 2 seconds  
- **Adjustable range**: ≥ 1 second  

- **Supported devices**

  | Type           | Model |
  | -------------- | ----- |
  | Single-phase meter | SMD1 |
  | Three-phase meter  | SMD3 |
  | Smart plug         | SP16 |

## 2. Cloud Communication

Cloud data is used for remote access, such as viewing device status or historical records in the App.

All devices follow the same rules:

- **Default update interval**: 300 seconds (5 minutes)
- **Fast refresh mode enabled**: 1 second refresh