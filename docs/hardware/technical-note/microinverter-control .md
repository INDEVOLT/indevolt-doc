---
title: Bypass Socket Microinverter Control Guide
description: Learn about the different control strategies adopted by the Indevolt micro-storage system when a microinverter is connected to the bypass socket, depending on grid-connected or off-grid status.
---

# Bypass Socket Microinverter Control Guide

When a microinverter is connected to the bypass socket (Backup), the system adopts different control strategies based on grid-connected or off-grid status:

- **Off-grid**: Actively reduces microinverter power generation by adjusting the output frequency.
- **Grid-connected**: Synchronizes with the grid and does not regulate microinverter power; disconnects the bypass for protection upon detecting backflow or overload.

## 1. Off-grid with Microinverter: Frequency Control for Power Reduction

### 1.1 Why Use Frequency Control?

During off-grid operation, the system autonomously maintains power supply without the grid's buffering capacity for power imbalances. If the microinverter's power generation exceeds the load consumption, the DC bus voltage will continuously rise. If this exceeds safe limits, the system will trigger a protective shutdown.

### 1.2 Control Logic

The system reduces microinverter output by increasing the output frequency. When the microinverter detects the frequency increase, it automatically reduces its power generation proportionally, rebalancing generation and load consumption. This process is fully automatic and requires no manual intervention.

### 1.3 Firmware Limitations

Off-grid microinverter connection requires EMS **version 1.01.05 or higher**, with a power range of **30 W ~ 1200 W**. When SOC drops below 3%, the system temporarily stops responding to microinverter input, but the bypass socket remains connected. Once SOC returns to 3% or higher, normal operation resumes automatically. For details, refer to the [Bypass Socket Guide](https://docs.indevolt.com/docs/hardware/technical-note/bypass/).

## 2. Grid-connected with Microinverter: Grid Synchronization, Bypass Disconnection on Fault

### 2.1 Normal Operation

In grid-connected mode, the device output synchronizes with the grid in frequency and phase, and the microinverter follows the grid. The system **does not actively regulate** microinverter power. Microinverter generation is prioritized for loads and battery charging, with any surplus energy fed into the grid (within feed-in limits).

For energy distribution logic in different usage modes, refer to the [Bypass Socket Guide](https://docs.indevolt.com/docs/hardware/technical-note/bypass/).

### 2.2 Protection Mechanism

If any of the following anomalies are detected, the system immediately disconnects the bypass socket and automatically restores after 15 minutes:

| Trigger Condition      | Threshold                                                    |
| :--------------------- | :----------------------------------------------------------- |
| Backflow Exceedance    | Exceeds maximum feed-in power by 10% for more than 30 seconds |
| Microinverter Overload | Input power exceeds 2400 W for more than 30 seconds          |

Upon disconnection, the microinverter loses grid connection and stops generating power. After the 15-minute interval, the system re-evaluates; if the anomaly persists, it disconnects again.

## 3. Comparison of Operating Modes

| Comparison Item     | Off-grid with Microinverter                  | Grid-connected with Microinverter         |
| :------------------ | :------------------------------------------- | :---------------------------------------- |
| Control Method      | Active frequency control for power reduction | Grid synchronization, no regulation       |
| Microinverter Power | Controlled by device frequency               | Follows grid, outputs autonomously        |
| Fault Protection    | Overvoltage shutdown / Suspension on low SOC | Bypass disconnection on backflow/overload |
| Power Range         | 30 W ~ 1200 W                                | Up to 2400 W                              |
| Applicable Scenario | Power outages, areas without utility grid    | Normal operation with utility grid        |

## 4. Frequently Asked Questions (FAQ)

**Q1: Will off-grid frequency regulation affect the normal operation of household appliances?**

A: No. The frequency adjustment range is kept within a safe interval, and the process is gradual, so typical household appliances are unaffected.

**Q2: Why not use frequency control to reduce power during grid-connected operation, instead of disconnecting the bypass?**

A: When grid-connected, the grid frequency is fixed, and the device cannot intervene in microinverter output via frequency. Therefore, the protection strategy relies on immediate disconnection upon fault detection for faster response.

**Q3: How long does it take for the bypass to recover after disconnection?**

A: It automatically recovers after 15 minutes. If the anomaly still exists, it will disconnect again.

## 5. Notes

1. This document applies to the PowerFlex 2000 / SolidFlex 2000 series.
2. Off-grid frequency regulation requires the microinverter to support frequency-power response. Please verify compatibility before use.
3. All parameters are typical values; actual values depend on the firmware version and on-site settings.

