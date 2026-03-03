---
title: Dynamic Pricing Mode
description: Automatically charge and discharge based on electricity price levels to help reduce energy costs
---

# Dynamic Pricing Mode

Dynamic pricing mode is an intelligent energy management mode. The system automatically determines when to charge and when to discharge based on the electricity price threshold you set. It aims to minimize electricity costs while maintaining a good user experience.

## Suitable Users

- Regions using **time-of-use pricing / dynamic pricing / real-time electricity pricing**  
- Users who want to save electricity costs by storing energy during low-price periods and using energy during high-price periods  
- Users who prefer not to manually schedule charge and discharge plans daily  
- Users who want the system to make automatic decisions based on price fluctuations  

## How the System Works

In dynamic pricing mode mode, the system automatically switches among the following three states based on current electricity prices:

**Charging (During low-price periods)**

The actual charging power is determined by the inverter’s maximum input power.

- The system prioritizes using solar PV energy to charge the battery  
- When PV energy is insufficient, the system automatically draws supplemental power from the grid  
- Charging stops automatically when the battery is fully charged  

**Discharging (During high-price periods or high power demand)**

The actual discharge power is determined by the current load source (smart meter / smart plug / default load).

- The device prioritizes solar PV power supply  
- When PV energy is insufficient, the battery automatically supplies power  
- Discharging stops automatically when the battery SOC reaches the emergency reserve level  

**Idle State (Outside Strategy Operation Periods)**

In idle state, the battery does not actively charge or discharge:

- Solar generation is first used to supply household loads  
- When PV power exceeds load demand and battery SOC is below 100%, excess energy will be stored in the battery  
- When the battery is fully charged, PV output may be automatically limited  

## How to Configure Dynamic Pricing Mode

👉 For detailed configuration instructions, please refer to [INDEVOLT App Smart Mode Guide](../../app/smart.md)