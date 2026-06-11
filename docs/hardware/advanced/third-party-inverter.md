---
title: Third-Party Inverter Integration
description: Connect third-party inverters to enable photovoltaic (PV) generation monitoring, surplus energy charging, and energy management.
---

# Third-Party Inverter Integration

If you already have a photovoltaic inverter from another brand installed at home, you can integrate its data into the cloud platform through the following methods. This enables you to:

- Monitor PV generation in real time
- Analyze household consumption and surplus energy flow
- Optimize battery charging and discharging strategies

Currently, two integration methods are supported:

1. [Cloud account binding (cloud-to-cloud integration)](#method-1-cloud-to-cloud-integration)
2. [Using a smart plug or smart meter to collect generation data](#method-2-data-collection-via-smart-plug-or-meter)

---

## Method 1: Cloud-to-Cloud Integration

```mermaid
flowchart LR

PV[PV Modules]
INV[Inverter]
THIRD[Third-Party Cloud Platform<br/>GOODWE / GROWATT / SolarEdge etc.]
CLOUD[Cloud Platform]
APP[INDEVOLT App]

PV --> INV
INV --> THIRD
THIRD -->|Account Authorization| CLOUD
CLOUD --> APP
````

### Supported Scenarios

The following brands are currently supported:

* GOODWE
* GROWATT
* FusionSolar
* SolarEdge
* SolaX
* Solplanet

More brands will be supported in future updates.

### How It Works

By linking your account from a third-party energy platform, the App can directly retrieve inverter data associated with that account.

### Configuration Steps

1. Open the INDEVOLT App and go to the **Profile** page.
2. Tap **Energy Integrations**.
3. Select your inverter brand.
4. Log in to the third-party platform and grant authorization as prompted.
5. Once authorized, the system will automatically sync all devices under the account and add them to your home.

👉 Detailed authorization guide: [Connect Energy Brand Guide](https://docs.indevolt.com/docs/category/brand-connection?utm_source=chatgpt.com)

---

## Method 2: Data Collection via Smart Plug or Meter

**Smart Plug**

```mermaid
flowchart LR

PV[PV Modules]
INV[Inverter]
PLUG[Smart Plug]

CLOUD[Cloud Platform]
APP[INDEVOLT App]

PV --> INV
INV -->|AC Output| PLUG
PLUG -.Data Upload.-> CLOUD
CLOUD --> APP
```

**Smart Meter**

```mermaid
flowchart LR

PV[PV Modules]
INV[Inverter]
CT((CT))
METER[Smart Meter]

CLOUD[Cloud Platform]
APP[INDEVOLT App]

PV --> INV
INV -->|AC Output| CT
CT --> METER
METER -.Data Upload.-> CLOUD
CLOUD --> APP
```

### How It Works

A smart plug or smart meter measures the inverter’s AC output power. The collected data is then used as PV generation input for energy statistics and system optimization.

### Configuration Steps

#### Step 1: Install the Measurement Device

Choose one of the following options based on your situation:

<u>Option A: Smart Plug</u>

* Connect the inverter’s AC output to the smart plug.

<u>Option B: Smart Meter + CT</u>

* The meter is installed in the home electrical circuit to measure voltage.
* The CT clamp is attached to the inverter’s AC output cable to measure current direction and magnitude.

#### Step 2: Add the Device

Add the smart plug or smart meter in the INDEVOLT App and ensure the device is online.

#### Step 3: Configure Data Source

1. Open the App.
2. Go to **Profile** > **Data Source**.
3. In the **Solar** data source section, tap **Custom**.
4. Select the plug or meter used for energy statistics.
5. Save the configuration.

<img src={require("./img/profile.png").default} width="240"/>
<img src={require("./img/data_source.png").default} width="240"/>
<img src={require("./img/solar.png").default} width="240"/>
<img src={require("./img/select_solar_device1.png").default} width="240"/>
<img src={require("./img/select_solar_device2.png").default} width="240"/>

Once configured, the system will automatically treat the measured power data as PV generation data. It will then be used for household energy flow analysis, generation statistics, and dashboard visualization.

:::warning
- Ensure the measurement device is installed on the inverter’s AC output circuit.
- Incorrect CT installation direction may cause negative or abnormal power readings.
- This method is an indirect measurement approach, so values may slightly differ from inverter-native readings.
:::