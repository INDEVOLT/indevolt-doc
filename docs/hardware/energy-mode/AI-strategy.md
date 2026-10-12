---
title: AI Strategy
description: Learn how the Indevolt AI strategy dynamically schedules battery charging and discharging based on electricity prices, weather conditions, household energy consumption, and battery status, including its role in reducing electricity costs, enabling automatic operation, explaining system operation, and supporting battery lifetime management.
---

# AI Strategy

## Smart Energy Management Strategy for Home Energy Storage

## 1. Why an AI Strategy Is Needed

Many households install PV and energy storage systems to reduce electricity costs and make better use of solar energy. To achieve this goal, in addition to device performance, the daily charging and discharging schedule is also important.

If charging and discharging times do not match changes in electricity prices, weather conditions, and household energy consumption, the battery may not charge or discharge at the appropriate times. Four common issues are described below.

### Issue 1: Discharge Timing Does Not Match Demand, Resulting in Grid Purchases During High-Price Periods

The periods before leaving home in the morning and after returning home in the evening are often when household electricity consumption is highest. Appliances such as rice cookers, air conditioners, and water heaters may operate at the same time, creating high household loads. These periods may also coincide with higher electricity prices.

A fixed strategy discharges the battery according to preset time periods and cannot accurately identify household load peaks and electricity price peaks. As a result, the battery may run out of energy before the peak period ends, requiring electricity to be purchased from the grid at a high price.

### Issue 2: Improper Charging Scheduling Prevents Effective Use of Excess PV Energy

On a sunny weekend, PV generation may be significantly higher than immediate household electricity demand. If the battery has already been fully charged according to a fixed schedule during the early morning, excess PV energy at midday cannot be stored and may instead be exported to the grid at a lower price.

During high-price periods in the evening, the battery may then not have enough energy available. This situation may occur repeatedly for households with larger PV systems and frequent sunny weather.

### Issue 3: Fixed Rules Cannot Adapt to Continuous Changes

Time-of-use electricity prices may differ between weekdays, weekends, and peak periods. Weather and household routines also continue to change, affecting PV generation and household loads.

A fixed strategy configured once and used over a long period can easily become misaligned with actual conditions. Frequent manual adjustments are time-consuming and may still fail to deliver consistently good results.

### Issue 4: Focusing Only on Short-Term Electricity Costs While Overlooking Battery Lifetime

The energy storage battery is an important system asset. Long-term deep charging and discharging, or frequent large changes in charging and discharging power, may accelerate battery aging.

If short-term electricity cost savings are pursued while battery lifetime management is overlooked, excessive battery usage may increase future replacement costs and reduce overall economic efficiency.

The common issue behind these problems is that fixed strategies operate according to preset schedules and cannot proactively adjust based on changes in the next day's electricity prices, weather, and household energy consumption. Therefore, the charging and discharging schedule of an energy storage system needs to be dynamically adjusted according to actual conditions each day.

## 2. What Is an AI Strategy?

An AI strategy enables the energy storage system to automatically determine when to charge and when to discharge each day based on electricity prices, weather conditions, and household energy consumption.

The system looks ahead at electricity prices, PV generation, and household energy consumption over a future period, and then schedules charging and discharging for different times of the day.

The system focuses on the following four types of information each day and uses them to generate the daily charging and discharging plan:

| Reference Information | Purpose |
| --- | --- |
| Electricity Price | Identifies periods with lower and higher electricity prices. |
| PV Generation | Determines PV generation and periods when excess PV energy may be available. |
| Household Load | Identifies periods of higher household energy consumption and differences between weekdays and weekends. |
| Battery Status | Determines the current battery energy level, available charging/discharging capacity, and energy that needs to be reserved. |

The system combines electricity prices, weather conditions, and household energy consumption to schedule charging and discharging at more appropriate times. If actual conditions change, the schedule is adjusted accordingly.

For example:

A typical energy storage application is used to compare the operating performance of a traditional fixed strategy and an AI dynamic optimization strategy under the same dynamic electricity prices, PV generation, and household load conditions.

As shown in the figure, the traditional strategy charges and discharges according to preset times (fixed-time operation), while the AI strategy dynamically selects charging and discharging times based on electricity prices, PV generation, and load (dynamic optimization). Actual operating data shows that the AI strategy delivered 18.3% higher benefits than the traditional strategy, with an additional benefit of CNY 6,048.83 in this individual case.

**Figure 1: Comparison of Traditional and AI Strategy Scheduling Under Dynamic Pricing**

![Figure 1: Comparison of Traditional and AI Strategy Scheduling Under Dynamic Pricing](./img/image-1.png)

## 3. Main Benefits of the Indevolt AI Strategy

The Indevolt AI strategy addresses several key issues encountered by home energy storage users. By dynamically scheduling charging and discharging, it enables the energy storage system to better adapt to daily changes in electricity prices, weather conditions, and household energy consumption.

### 1. Reduce Electricity Costs: Schedule Charging and Discharging Appropriately

The benefits of home energy storage depend not only on battery capacity, but also on when the battery charges and discharges.

By adjusting charging and discharging times, the system can reduce unnecessary grid electricity purchases during high-price periods and make better use of low-price electricity and PV energy. Actual results vary depending on local electricity prices, PV configuration, device conditions, and household energy consumption patterns.

This is mainly reflected in three aspects:

- **Higher battery utilization:** Based on electricity prices and household energy consumption, the system charges the battery during appropriate periods and schedules the stored energy for periods when it is more needed, reducing long periods of battery inactivity.
- **Higher PV self-consumption:** When higher PV generation is expected around midday, the system reserves battery capacity in advance to store subsequent excess PV energy and improve local utilization of PV energy.
- **More precise discharging and fewer grid purchases:** By considering electricity prices and household loads at different times, the system prioritizes using the available battery energy during periods when it is most needed, reducing grid electricity purchases during high-price periods.

Based on actual operating data from 851 users, the Indevolt AI strategy demonstrated significant cost-reduction benefits:

**Figure 2: Distribution of Benefit Increase Among AI Strategy Users (Data from Actual Operating Statistics of 851 Users)**

![Figure 2: Distribution of Benefit Increase Among AI Strategy Users (Data from Actual Operating Statistics of 851 Users)](./img/image-2.png)

The data shows that the Indevolt AI strategy can provide tangible electricity cost savings for the vast majority of users. The median increase in benefits is in the 10%–30% range, and nearly one quarter of users (24.68%) achieved benefit increases of more than 80%. Overall, most users can achieve varying degrees of electricity cost savings. Actual savings vary depending on local electricity prices, PV configuration, household energy consumption patterns, and device conditions.

### 2. Automatic Operation: Reduce Daily Manual Configuration

Electricity prices, weather conditions, and household energy consumption patterns may change every day. If users manually adjust charging and discharging times, this requires frequent operation and may still fail to keep up with actual conditions.

After the AI strategy is enabled, the system automatically performs these adjustments, so users do not need to reconfigure the system every day:

- **Automatically generate a plan:** Generates a charging and discharging plan based on electricity prices, weather conditions, and household energy consumption patterns.
- **Automatically adjust the plan:** Adjusts subsequent scheduling based on changes in weather, PV generation, or household energy consumption.
- **Continuous operation:** After the user completes the strategy configuration, no frequent daily intervention is required, allowing the energy storage system to operate automatically according to the plan.

### 3. Transparent Operation: Understand the Reason Behind Each Action

An energy storage system may charge, discharge, or remain idle multiple times throughout the day. In addition to knowing how the system operates, users may also want to know why it operates in a particular way.

If users want to know why the system is charging, discharging, or remaining idle at a specific time, they can view the corresponding reason, for example:

- **Why is the system charging now?** The current electricity price is low, making it suitable to replenish the battery.
- **Why is the system discharging now?** Household energy demand is high, or the current electricity price is relatively high.
- **Why is the system neither charging nor discharging?** The current electricity price, PV generation, or household load conditions are temporarily not suitable for charging or discharging.

Clear and accessible operating reasons make it easier for users to understand the system's scheduling decisions and review actual system operation.

### 4. Consider Battery Lifetime: Reduce Long-Term Operating Costs

In addition to daily electricity costs, charging and discharging schedules also affect long-term battery usage.

When generating a charging and discharging plan, the system considers the current battery status and available energy to avoid unnecessary charging and discharging actions and balance electricity costs with long-term battery usage.

More appropriate charging and discharging schedules can reduce unnecessary deep cycling and frequent fluctuations, helping reduce additional wear during long-term battery operation.

The strategy considers not only how much can be saved today, but also how the battery should be used over the long term.

## 4. Frequently Asked Questions

### Q1: Why does the AI strategy sometimes purchase electricity from the grid even when the battery still has energy?

This does not necessarily indicate that the strategy is abnormal. The AI strategy considers the overall cost across the entire day and even a longer period, rather than only whether electricity should be purchased at the current moment. The system may reserve energy for a later period with a higher electricity price or wait for an opportunity to recharge at a lower cost.

### Q2: Why does the AI mode not charge the battery to 100%, and why might it export electricity to the grid even when the battery is not full?

The target battery energy level is dynamically adjusted and does not always mean charging the battery to full. The system considers factors such as future energy demand, PV forecasts, import and export electricity prices, charging and discharging losses, and power limits. If the expected revenue from exporting electricity is higher than the expected benefit of storing it, exporting energy while the battery is not full may also be an appropriate strategy.

### Q3: Is it normal for the charging/discharging power to be low or for the plan to look unreasonable on the first day after enabling AI mode?

This is normal. When the strategy is first enabled, the system has limited knowledge of the household's energy consumption patterns. When historical data is insufficient, it operates more conservatively by reducing power and minimizing actions. As valid load, PV, and electricity price data accumulates, the strategy gradually adjusts and optimizes its operation.

### Q4: Why is the AI PV forecast still 0 even though a PV inverter is connected and real-time generation can be viewed?

When forecasting PV generation, the system considers both the real-time generation power reported by the device and the PV installed capacity configured in the strategy settings. If this parameter is set to 0, the forecast may also be displayed as 0.

### Q5: Why does AI not charge during every low-price period? Do I need to manually set the buy/sell price difference?

No. A low electricity price does not necessarily mean that charging is beneficial because energy is lost during charging and discharging. Charging and discharging only make economic sense when the price difference is sufficient to cover these losses. The system automatically evaluates this condition.

### Q6: The battery did not discharge completely overnight. Does this mean the AI strategy is not working properly?

Not necessarily. The maximum discharge power limits the amount of power that can be supplied within a given period. For example, if the maximum discharge power is 800 W, the battery will not exceed this limit even if household load is higher. If the nighttime period is not long enough or the household does not consume enough electricity, it is possible for the battery to retain a relatively high energy level in the morning.

### Q7: I want the battery to charge and discharge at fixed times and fixed power levels every day and reach a specified energy level. Should I use AI mode?

If you want the system to strictly charge and discharge at fixed times and power levels and reach a specified energy level, a customized or automatic charging/discharging schedule is generally more suitable.

AI mode dynamically schedules operation based on forecast information. Therefore, it does not guarantee that the system will operate at the same time every day or that the battery will always be charged to 100%.

### Q8: Why does the AI strategy display “No clear price spread advantage” and keep the battery idle?

When the expected price difference is insufficient to cover charging and discharging losses, or when there is temporarily no more suitable opportunity to charge or discharge, keeping the battery idle can avoid unnecessary operation. Idle status does not mean that the system is offline.

### Q9: How long does it take to see results?

The system needs some time to learn household energy consumption patterns, typically 1 to 2 weeks. As more data accumulates, forecasts gradually become more accurate. In general, results become more stable after 2 to 4 weeks of operation.

### Q10: What happens on cloudy days or when PV generation is unavailable?

The system adjusts the schedule based on weather forecasts. If low PV generation is expected for the following day, the system can charge the battery in advance during lower-price periods to meet subsequent energy demand.

### Q11: What happens if guests suddenly arrive and household electricity consumption increases?

The system continuously monitors changes in household energy consumption. When electricity consumption suddenly increases, it adjusts the charging and discharging plan and prioritizes normal household power supply while minimizing grid electricity purchases during high-price periods.

### Q12: Why does AI not necessarily charge at full power during low-price periods?

A low-price period does not mean that the battery needs to charge continuously at full power, that is, at the maximum charging power currently allowed by the device. The AI strategy dynamically schedules charging times and charging amounts based on actual household energy consumption and subsequent energy demand. The system also considers long-term battery usage and schedules charging appropriately to avoid prolonged, concentrated, high-intensity charging, balancing energy demand with battery lifetime.

Therefore, even during low-price periods, the AI strategy may reduce charging power or temporarily stop charging based on actual conditions. This is a normal result of the strategy's overall assessment.

## 5. Summary

The main purpose of installing PV and energy storage at home is to reduce electricity costs and make better use of solar energy. However, if charging and discharging are not scheduled appropriately, overall benefits may be affected—if the battery does not charge when needed or discharge when needed, the resulting savings over a full year may be limited.

The Indevolt AI strategy is designed to address this issue: it considers electricity prices, weather conditions, and household energy consumption each day to automatically generate and adjust charging and discharging plans, reducing the need for manual configuration.

Key features include:

| Main Benefit | What Users Can Expect |
| --- | --- |
| Reduce Electricity Costs | Under suitable conditions, reduce unnecessary grid electricity purchases. |
| Automatic Operation | Automatically generate a plan and adjust it as conditions change. |
| Transparent Operation | Provide reasons for scheduled actions during different periods. |
| Battery Lifetime Management | Reduce unnecessary battery wear while saving electricity costs. |

The AI strategy does not operate based on a single fixed rule. Instead, it considers electricity prices, weather conditions, household energy consumption, and battery status together to make more appropriate scheduling decisions that balance electricity cost savings with long-term battery usage.

This document is based on the current functionality of the Indevolt AI strategy. Actual benefits vary depending on local electricity prices, PV installed capacity, household energy consumption patterns, and device configuration.
