---
title: Home
description: Monitor your home’s energy flow in real time, including generation, consumption, and storage.
---

# Home

The **Home** page serves as the main interface for managing energy data in your current home. It provides an overview of real-time generation, consumption, and overall energy flow.

<img src={require("./img/home_intro.png").default} width="240"/>


| No. | Feature         | Description                                                                                                                                 |
| --- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | My Home         | Shows the current home name. Tap to view, switch between homes, or manage all homes under your account.                                     |
| 2   | +               | Add a new device to your home.                                                                                                              |
| 3   | Dashboard       | Customize the energy-flow chart theme and choose which data you want to display.                                                            |
| 4   | Weather         | Displays real-time local weather and temperature.                                                                                           |
| 5   | Go to configure | If no tariff plan is set, a **Go to Configure** button appears—tap to set buying/selling prices. If a plan exists, it shows today’s tariff. |
| 6   | Power Flow      | A dynamic visual chart showing where your home’s energy comes from and where it goes.                                                       |
| 7   | Daily           | View daily summaries of energy generation and consumption, and other key metrics.                                                           |



## 1. My Home

### 1.1 Switch Home

Tap the home name at the top left to open the list of all homes linked to your account. Choose a home to switch to its energy-data view.

<img src={require("./img/tap_myhome.png").default} width="240"/>
<img src={require("./img/select_home.png").default} width="240"/>

### 1.2 Manage Home

Tap **Manage** at the bottom of the list to enter the management page.

<img src={require("./img/tap_manage_home.png").default} width="240"/>
<img src={require("./img/manage_home.png").default} width="240"/>

**Add a Home**

1. In the home management page, tap the **+** button in the upper-right corner.  
2. Follow the on-screen steps to enter new-home info. For details, see the **[Add Home](./profile.md#21-add-home)** section.

**Edit a Home**

Select the home you want to update to open its info page. You can:  
- [**Edit**](./profile.md#22-edit-home) the home name, address, or other settings.  
- [**Delete**](./profile.md#23-delete-home) the home.  


## 2. Add Device

Go to the **[Add Devices](./add-device.md)** guide to learn how to connect a new device to your home.

## 3. Dashboard

Tap the dashboard settings button to open the settings page.

<img src={require("./img/select_dashboard.png").default} width="240"/>
<img src={require("./img/dashboard.png").default} width="240"/>

- **Power Flow**: Tap the **Power Flow** option to choose a theme.
    <img src={require("./img/configure_power_flow.png").default} width="240"/>

- **Daily**: Select the data you want to show on the Home page.
    <img src={require("./img/configure_daily.png").default} width="240"/>

## 4. Weather

This section shows the real-time weather and temperature at your home’s location.

## 5. Go to configure

This area shows different content depending on your tariff setup:

- If no tariff plan is set, a **Go to configure** button appears. Tap to set purchase/selling prices.  
- If a plan exists, it shows today's prices. Tap to view past prices.

## 6. Power Flow

The power flow chart visually shows where your home’s energy is coming from and where it goes in real time.

- Refresh: Pull down to refresh the data.  
- Theme Settings: To change the theme, go to **[Dashboard](#3-dashboard)**.
- Set Data Source: The data displayed in the flow chart comes from the **[Data Source](./profile.md#5-data-source)**. You can adjust it according to your needs.

<img src={require("./img/power_flow.png").default} width="240"/>

## 7. Daily

The daily data view summarizes the day’s total generation and consumption.

| Parameter             | Description                                                                                                                  |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Self-consumption         | (Electricity used directly from solar + solar power used to charge the battery) / total solar generation - shows how much PV was used inside the home.                                |
| Autarky | (Load from PV + Load from Battery) / Total consumption - shows how much of your home’s electricity came from your own energy. |
| Production       | Total PV generation for the day.                                                                                             |
| Consumption      | Total household electricity use for the day.                                                                                 |
| From Grid         | Total electricity bought from the grid today.                                                                                |
| To Grid        | Total electricity fed into the grid today.                                                                                   |
| Charged           | Total energy charged into the battery.                                                                                       |
| Discharged        | Total energy discharged from the battery.                                                                                    |

<img src={require("./img/daily.png").default} width="240"/>

You can customize which parameters appear here via **[Dashboard](#3-dashboard)** settings.
