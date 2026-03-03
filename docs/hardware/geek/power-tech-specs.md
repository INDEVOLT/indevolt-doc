---
title: Power Module Technical Specifications
description: Explore the detailed technical specifications and core performance overview of the Indevolt micro energy storage power module.
---

# Power Module Technical Specifications

<table>
<thead>
  <tr>
    <th colspan="2">Model</th>
    <th>SolidFlex 2000</th>
    <th>SolidFlex 2000Eco</th>
    <th>PowerFlex 2000</th>
    <th>PowerFlex 2000Eco</th>
  </tr>
</thead>
<tbody>

<tr>
<td colspan="6" style={{ textAlign: 'center' }}><strong>System Input Characteristics – AC Output</strong></td>
</tr>

<tr>
<td rowspan="9">AC Output – Grid</td>
<td>Output Type</td>
<td colspan="4">230V AC Single Phase, L/N/PE</td>
</tr>
<tr>
<td>Rated Output Voltage</td>
<td colspan="4">230V ±5%</td>
</tr>
<tr>
<td>Output Voltage Range</td>
<td colspan="4">184–253V a.c.</td>
</tr>
<tr>
<td>Rated Output Current</td>
<td colspan="4">3.5A ±10%</td>
</tr>
<tr>
<td>Maximum Output Current</td>
<td colspan="4">16A ±5%</td>
</tr>
<tr>
<td>Rated Output Frequency</td>
<td colspan="4">50Hz ±0.5Hz</td>
</tr>
<tr>
<td>Rated Output Power</td>
<td colspan="4">
Germany & Austria default: 800W ±5%;<br />
France, Belgium, Netherlands default: 2400W ±5%
</td>
</tr>
<tr>
<td>Maximum Output Power</td>
<td colspan="4">3600W ±5%</td>
</tr>
<tr>
<td>Power Factor (PF)</td>
<td colspan="4">PF >0.99 at rated power, continuously adjustable from 0.8 lagging to 0.8 leading</td>
</tr>

<tr>
<td rowspan="9">AC Output – Off-Grid</td>
<td>Output Type</td>
<td colspan="4">230V AC Single Phase, L/N/PE</td>
</tr>
<tr>
<td>Rated Output Voltage</td>
<td colspan="4">230V ±5%</td>
</tr>
<tr>
<td>Rated Output Current</td>
<td colspan="4">10.5A ±10%</td>
</tr>
<tr>
<td>Overcurrent Protection</td>
<td colspan="4">15A, 100ms</td>
</tr>
<tr>
<td>Rated Output Frequency</td>
<td colspan="4">50Hz ±0.5Hz</td>
</tr>
<tr>
<td>Power Factor (PF)</td>
<td colspan="4">0.8–1.0, compatible with resistive and inductive loads</td>
</tr>

<tr>
<td>Maximum Continuous Active Output Power</td>
<td colspan="2">
Single unit: 1000W;<br />
1+1 configuration: 2000W;<br />
1+2 or above: 2400W (±5%)
</td>
<td colspan="2">
Single unit: 1200W;<br />
1+1 or above: 2400W (±5%)
</td>
</tr>

<tr>
  <td>Overload Output Strategy</td>
  <td colspan="4">
    2448W–2640W: Supports 30s overload output, then automatically derates to 2400W steady-state output or triggers overcurrent protection (depending on whether Boost Mode is enabled);<br />
    2640W–3000W: Supports 15s overload output, then automatically derates to 2400W steady-state output or triggers overcurrent protection (depending on whether Boost Mode is enabled);<br />
    Above 3000W: Automatically derates or triggers overcurrent protection after 100ms (depending on whether Boost Mode is enabled);<br /><br />
    Boost Mode: Through pre-charge capacitors and dynamic voltage compensation, supports continuous operation of a 3000W resistive load (ambient ≤35°C).
  </td>
</tr>

<tr>
<td>EPS Output</td>
<td colspan="4">Switching time < 10ms, maximum output power 2400W</td>
</tr>

<tr>
<td colspan="6" style={{ textAlign: 'center' }}><strong>System Input Characteristics – AC Input</strong></td>
</tr>

<tr>
<td rowspan="6">AC Input</td>
<td>Rated Input Voltage</td>
<td colspan="4">220V / 230V / 240V</td>
</tr>
<tr>
<td>Input Voltage Range</td>
<td colspan="4">184–253V</td>
</tr>
<tr>
<td>Rated Input Frequency</td>
<td colspan="4">50Hz ±0.5Hz</td>
</tr>
<tr>
<td>Rated Input Current</td>
<td colspan="4">10.5A ±10%</td>
</tr>
<tr>
<td>Maximum Input Current</td>
<td colspan="4">16A ±5% (EPS load condition)</td>
</tr>

<tr>
<td>Maximum Continuous Input Power</td>
<td colspan="2">
Single unit: 900W;<br />
1+1: 1800W;<br />
1+2 or above: 2400W;<br />
Up to 3600W under EPS load condition (±5%)
</td>
<td colspan="2">
Single unit: 1000W;<br />
1+1: 2000W;<br />
1+2 or above: 2400W;<br />
Up to 3600W under EPS load condition (±5%)
</td>
</tr>

<tr>
  <td rowspan="4">AC Coupled Input/Output (via Off-Grid Outlet)</td>
  <td>Rated Input Voltage</td>
  <td colspan="4">230V ±5%</td>
</tr>
<tr>
  <td>Rated Input Current</td>
  <td colspan="4">10.5A ±10%</td>
</tr>
<tr>
  <td>Rated Input Frequency</td>
  <td colspan="4">50Hz ±0.5Hz</td>
</tr>
<tr>
  <td>Rated Input Power</td>
  <td colspan="4">2400W ±5%</td>
</tr>
<tr>
  <td colspan="6" style={{ textAlign: 'center' }}><strong>System Input Characteristics – PV Input</strong></td>
</tr>
<tr>
  <td rowspan="3">Port Description</td>
  <td>Input Type</td>
  <td>DC</td>
  <td>/</td>
  <td>DC</td>
  <td>/</td>
</tr>
<tr>
<td>Connector Type</td>
<td>MC4</td>
<td>/</td>
<td>MC4</td>
<td>/</td>
</tr>
<tr>
<td>Number of Inputs</td>
<td>4</td>
<td>/</td>
<td>4</td>
<td>/</td>
</tr>

<tr>
<td rowspan="5">Input PV Voltage </td>
<td>Per-Channel Voltage Range</td>
<td>10–60VDC</td>
<td>/</td>
<td>10–60VDC</td>
<td>/</td>
</tr>
<tr>
<td>MPPT Voltage Range</td>
<td>15–55VDC</td>
<td>/</td>
<td>15–55VDC</td>
<td>/</td>
</tr>
<tr>
  <td>Startup Voltage</td>
  <td>11V ±1V</td>
  <td>/</td>
  <td>11V ±1V</td>
  <td>/</td>
</tr>
<tr>
  <td>MPPT Full Power Voltage Range</td>
  <td>37–55V DC</td>
  <td>/</td>
  <td>37–55V DC</td>
  <td>/</td>
</tr>
<tr>
  <td>Number of MPPTs</td>
  <td>4</td>
  <td>/</td>
  <td>4</td>
  <td>/</td>
</tr>
<tr>
  <td rowspan="3">PV Input Current</td>
  <td>Maximum Current per Channel</td>
  <td>16A ±5%</td>
  <td>/</td>
  <td>16A ±5%</td>
  <td>/</td>
</tr>
<tr>
  <td>Rated Current per Channel</td>
  <td>15A ±5%</td>
  <td>/</td>
  <td>15A ±5%</td>
  <td>/</td>
</tr>
<tr>
  <td>MPPT Short-Circuit Current</td>
  <td>20A</td>
  <td>/</td>
  <td>20A</td>
  <td>/</td>
</tr>
<tr>
  <td rowspan="2">PV Input Power</td>
  <td>Maximum Input Power</td>
  <td>600W per channel, 2400W total</td>
  <td>/</td>
  <td>600W per channel, 2400W total</td>
  <td>/</td>
</tr>
<tr>
  <td>MPPT Efficiency</td>
  <td>Static MPPT efficiency: &gt;99%</td>
  <td>/</td>
  <td>Static MPPT efficiency: &gt;99%</td>
  <td>/</td>
</tr>
<tr>
  <td colspan="6" style={{ textAlign: 'center' }}><strong>Internal Battery Pack Parameters</strong></td>
</tr>
<tr>
  <td rowspan="8">Battery Parameters</td>
  <td>Battery Type</td>
  <td colspan="2">Semi-solid Lithium Iron Phosphate (LiFePO₄)</td>
  <td colspan="2">Lithium Iron Phosphate (LiFePO₄)</td>
</tr>
<tr>
  <td>Voltage Range</td>
  <td colspan="2">Voltage range: 5.0–7.3V; Nominal voltage: 6.4V</td>
  <td colspan="2">Voltage range: 5.0–7.3V; Nominal voltage: 6.4V</td>
</tr>
<tr>
  <td>Nominal Capacity (Ah)</td>
  <td colspan="2">280Ah</td>
  <td colspan="2">314Ah</td>
</tr>
<tr>
  <td>Nominal Energy (Wh)</td>
  <td colspan="2">1792Wh</td>
  <td colspan="2">2009.6Wh</td>
</tr>
<tr>
  <td>Cycle Life (100% DoD)</td>
  <td colspan="2">25°C, ≥8000 cycles (70% capacity retention)</td>
  <td colspan="2">25°C, ≥8000 cycles (70% capacity retention)</td>
</tr>
<tr>
  <td>Weight (kg)</td>
  <td colspan="2">11kg</td>
  <td colspan="2">11.5kg</td>
</tr>
<tr>
  <td>Operating Temperature</td>
  <td colspan="2">Charging: 0–60°C;<br/>Discharging: -30–60°C</td>
  <td colspan="2">Charging: 0–60°C;<br/>Discharging: -30–60°C</td>
</tr>
<tr>
  <td>Cell Dimensions</td>
  <td colspan="2">174.2 × 71.7 × 207.1mm</td>
  <td colspan="2">174 × 71.75 × 206.8mm</td>
</tr>

<tr>
  <td colspan="6" style={{ textAlign: 'center' }}><strong>Battery Pack Expansion Interface</strong></td>
</tr>
<tr>
  <td>Port Description</td>
  <td>Input Type</td>
  <td colspan="4">4-pin: two power pins and two signal pins</td>
</tr>
<tr>
  <td>Number of Expandable Battery Packs</td>
  <td>Expansion Quantity</td>
  <td colspan="4">1–5 units</td>
</tr>
<tr>
  <td rowspan="3">Input Voltage</td>
  <td>Rated Voltage</td>
  <td colspan="4">400V ±3V</td>
</tr>
<tr>
  <td>Rated Current</td>
  <td colspan="4">10A ±10%</td>
</tr>
<tr>
  <td>Rated Power</td>
  <td colspan="4">4000W ±5%</td>
</tr>

<tr>
  <td colspan="6" style={{ textAlign: 'center' }}><strong>Front Panel Features: Power Button / Indicators</strong></td>
</tr>
<tr>
  <td rowspan="3">Power Button</td>
  <td>Button Type</td>
  <td colspan="4">Self-resetting push button</td>
</tr>
<tr>
  <td>Button Logic</td>
  <td colspan="4">
    <strong>Power-On State:</strong><br/>
    Press and hold for 2s → LED strip performs shutdown animation;<br/>
    Continue holding for 10s → reset animation is displayed and system resets;<br/>
    If released before 10s → device performs normal shutdown.<br/><br/>
    <strong>Power-Off State:</strong><br/>
    Press and hold for 2s → LED strip performs startup animation;<br/>
    Continuing to hold has no additional effect.
  </td>
</tr>
<tr>
  <td>Indicator Color</td>
  <td colspan="4">
    Power status indicator (button light):<br/>
    Red light on = fault (BMS fault);<br/>
    Green light on = normal operation.
  </td>
</tr>

<tr>
  <td rowspan="11">LED Strip Display</td>
  <td rowspan="3">LED Display</td>
  <td colspan="4">Four colors: red, yellow, blue, and green</td>
</tr>
<tr>
  <td colspan="4">Each LED can be individually controlled for SOC and dynamic display</td>
</tr>
<tr>
  <td colspan="4">Supports brightness adjustment</td>
</tr>
<tr>
  <td rowspan="8">Display Logic</td>
  <td colspan="4"><strong>Standby:</strong> Displays current SOC from bottom to top proportionally; LED strip is blue</td>
</tr>
<tr>
  <td colspan="4"><strong>Discharging:</strong> Animation from SOC level down to bottom (SOC position fixed in middle); total animation time 5s (minimum 2s), continuous loop; LED strip is blue</td>
</tr>
<tr>
  <td colspan="4"><strong>Charging:</strong> Animation from SOC level up to top; total animation time 5s (minimum 2s), continuous loop; LED strip is green</td>
</tr>
<tr>
  <td colspan="4"><strong>Startup:</strong> Animation from center to both sides; total duration 2.5s; runs once; LED strip is blue</td>
</tr>
<tr>
  <td colspan="4"><strong>Shutdown:</strong> Animation from both sides to center; total duration 2.5s; runs once; LED strip is blue</td>
</tr>
<tr>
  <td colspan="4"><strong>Cloud Disconnected:</strong> Yellow LED strip shows current SOC from bottom to top proportionally (displayed only in standby state)</td>
</tr>
<tr>
  <td colspan="4"><strong>Reset:</strong> Blue LED strip flashes 3 times continuously with 500ms interval</td>
</tr>
<tr>
  <td colspan="4"><strong>Fault:</strong> Displays current SOC from bottom to top; highest priority; LED strip is red</td>
</tr>
<tr>
<td colspan="6" style={{ textAlign: 'center' }}><strong>Communication</strong></td>
</tr>

<tr>
    <td rowspan="4">External Communication</td>
    <td>Bluetooth</td>
    <td colspan="4">Operating frequency: 2.400GHz-2.4835GHz;<br />Wireless standard: BLE 5.3;<br />Transmit power: Max 10dBm</td>
</tr>
<tr>
    <td>WiFi</td>
    <td colspan="4">Operating frequency: 2.400GHz-2.4835GHz;<br />Wireless standard: 802.11 b/g/n/ax;<br />Transmit power: Max 17dBm</td>
</tr>
<tr>
    <td>LoRa</td>
    <td colspan="4">Operating frequency: 868MHz;<br />Transmit power: +22dBm</td>
</tr>
<tr>
    <td>4G (Optional)</td>
    <td colspan="4">Operating frequency: LTE-FDD: CN: B1/3/5/8<br />EU: B1/3/5/7/8/20/28<br />LA: B2/3/4/5/7/8/28/66<br />LTE-TDD: CN: B34/38/39/40/41<br />GSM: CN: B3/8<br />EU: B2/3/5/8<br />LA: B2/3/5/8</td>
</tr>

<tr>
<td colspan="6" style={{ textAlign: 'center' }}><strong>Mechanical Design</strong></td>
</tr>

<tr>
    <td>Weight</td>
    <td>Weight</td>
    <td colspan="2">21.5kg ± 1kg</td>
    <td colspan="2">22kg ± 1kg</td>
</tr>
<tr>
    <td>Installation</td>
    <td>Installation Method</td>
    <td colspan="4">Stacked locking on top and bottom, wall-anchored locking, and base support feet for leveling adjustment</td>
</tr>
<tr>
    <td>Dimensions</td>
    <td>Product Size</td>
    <td colspan="4">425 × 195 × 260 mm</td>
</tr>

<tr>
<td colspan="6" style={{ textAlign: 'center' }}><strong>Environmental Requirements</strong></td>
</tr>

<tr>
    <td>Storage Environment Temperature</td>
    <td>Storage Temperature</td>
    <td colspan="4">Storage for 1 month: -20 to 60℃;<br />Storage for 6 months: 0 to 40℃</td>
</tr>
<tr>
    <td>Operating Environment Temperature</td>
    <td>Operating Temperature</td>
    <td colspan="4">Charging: -20 to 55℃;<br />Discharging: -20 to 55℃;<br />When the cell temperature is below 1℃, the electric heater will start and heat to 5℃ before stopping. Rated power is 55W. At an ambient temperature of -20℃, under rated heating power, the heating rate is 5℃ per 50 minutes.</td>
</tr>
<tr>
    <td>Operating Environment Humidity</td>
    <td>Operating Humidity</td>
    <td colspan="4">5%–90% RH</td>
</tr>
<tr>
    <td>Cooling Overview</td>
    <td>Cooling Condition</td>
    <td colspan="4">Natural cooling</td>
</tr>
<tr>
    <td>Altitude</td>
    <td>Operating Altitude</td>
    <td colspan="4">Default below 2000m; derating is required above 2000m. The derating strategy is the same as high-temperature derating.</td>
</tr>
<tr>
    <td>Protection</td>
    <td>Protection Level</td>
    <td colspan="4">IP65 (excluding off-grid output port; off-grid output port is IP54)</td>
</tr>
<tr>
    <td>Operating Noise</td>
    <td>Noise Test</td>
    <td colspan="4">Below 25dB (full-load condition, semi-anechoic chamber, background noise ≤18dB, measurement distance 1.0m)</td>
</tr>
<tr>
    <td colspan="6" style={{ textAlign: 'center' }}><b>Reliability Requirements</b></td>
</tr>
<tr>
    <td>Environmental and Vibration Testing</td>
    <td>Environmental and Vibration Testing</td>
    <td colspan="4">Includes low-temperature storage, high-temperature storage, thermal shock test, low-temperature operation, high-temperature operation, high and low temperature cyclic operation, low air pressure, high temperature and high humidity, high temperature and high humidity (operating), alternating humidity and heat, high-temperature cycle life, neutral salt spray, tipping test, and vibration test. See the reliability test plan for details.</td>
</tr>
<tr>
    <td rowspan="5">Certification Standards</td>
    <td>Safety Certification</td>
    <td colspan="4">IEC 62619<br />IEC/EN 62109-1/-2<br />EN 61000-6-1/-2-3-4<br />EN IEC 60730</td>
</tr>
<tr>
    <td>Wireless Module Certification</td>
    <td colspan="4">Wireless EMC EN 301 489-1/-17/-52<br />RF EN 301511, EN 301908-1/-13, EN62311</td>
</tr>
<tr>
    <td>Battery Transportation Certification</td>
    <td colspan="4">UN38.3 + MSDS + Air/Sea Transport Identification Certificate</td>
</tr>
<tr>
    <td>RoHS Certification</td>
    <td colspan="4">RoHS 2.0, IEC 62321</td>
</tr>
<tr>
    <td>Grid Connection Certification</td>
    <td colspan="4">EN50549-10 (France, Netherlands), TOR Erzeuger:2022 (Austria), C10/C11 (Belgium), VDE-AR-N 4105 (Germany)</td>
</tr>
<tr>
    <td colspan="6" style={{ textAlign: 'center' }}><b>Terminal Requirements</b></td>
</tr>
<tr>
    <td rowspan="3">ACGrid</td>
    <td>Rated Parameters</td>
    <td colspan="4">AC230V, maximum current 16A, overvoltage category III</td>
</tr>
<tr>
    <td>Protection Level</td>
    <td colspan="4">IP65</td>
</tr>
<tr>
    <td>Other Requirements</td>
    <td colspan="4">Plug must meet probe test requirements of IEC 62109</td>
</tr>
<tr>
    <td rowspan="3">ACOUT</td>
    <td>Rated Parameters</td>
    <td colspan="4">AC250V, maximum current 16A, overvoltage category II</td>
</tr>
<tr>
    <td>Protection Level</td>
    <td colspan="4">None</td>
</tr>
<tr>
    <td>Other Requirements</td>
    <td colspan="4">Use one CCE7/4 European socket, supporting IP54 protection</td>
</tr>
<tr>
    <td rowspan="3">PV Input Terminal</td>
    <td>Rated Parameters</td>
    <td colspan="4">Rated voltage 60V, rated current 16A, overvoltage category II</td>
</tr>
<tr>
    <td>Protection Level</td>
    <td colspan="4">IP65</td>
</tr>
<tr>
    <td>Other Requirements</td>
    <td colspan="4">Use MC4 terminals</td>
</tr>
<tr>
    <td rowspan="3">Battery Pack Expansion Terminal</td>
    <td>Rated Parameters</td>
    <td colspan="4">Two power lines: rated voltage 500V, rated current 10A. Two signal lines: rated voltage 5V, rated current 10mA.</td>
</tr>
<tr>
    <td>Protection Level</td>
    <td colspan="4">IP65</td>
</tr>
<tr>
    <td>Other Requirements</td>
    <td colspan="4">Designed for stacking convenience and must meet probe test requirements of IEC 62109</td>
</tr>
<tr>
    <td colspan="6" style={{ textAlign: 'center' }}><b>Accessory Requirements</b></td>
</tr>
<tr>
    <td colspan="2">Accessory Requirements</td>
    <td colspan="4">3×2.5mm² Grid AC connection cable ×1 (5m)</td>
</tr>
</tbody>
</table>