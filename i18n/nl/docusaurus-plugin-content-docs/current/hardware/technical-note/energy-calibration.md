---
title: Energiekalibratie
description: Helpt het systeem om de batterij regelmatig te kalibreren, zodat de SoC-indicatie nauwkeuriger wordt
---

# Uitleg over energiekalibratie


## 1. Wat is energiekalibratie?

Tijdens normaal gebruik wordt de weergegeven batterijstatus (SoC) berekend via een algoritme en niet direct gemeten. Na langdurig gebruik kan er daardoor een kleine afwijking ontstaan.

**Energiekalibratie** is een proces waarbij het systeem periodiek een volledige laadcyclus uitvoert, zodat de SoC-waarde opnieuw wordt gekalibreerd en de batterijstatus nauwkeuriger wordt weergegeven.

:::info
Het systeem optimaliseert de SoC-schatting continu via algoritmen. In toekomstige versies zal ook een Kalman-filter worden toegepast om de nauwkeurigheid op lange termijn verder te verbeteren.
:::

## 2. Wat gebeurt er tijdens kalibratie?

Wanneer de ingestelde kalibratiecyclus is bereikt, voert het systeem automatisch een kalibratie uit:

- Eerst wordt **zonne-energie (PV)** gebruikt om te laden  
- Als PV-vermogen onvoldoende is, wordt automatisch **netstroom (AC)** gebruikt als aanvulling  
- Het laden gaat door totdat de batterij volledig (**100%**) is opgeladen  

👉 Eenvoudig gezegd: de batterij wordt één keer volledig opgeladen om het referentiepunt opnieuw te kalibreren.


## 3. Waarom is kalibratie nodig?

Zonder regelmatige kalibratie kan het volgende optreden:

- Onnauwkeurige batterijweergave  
- Te vroeg uitschakelen of plotselinge spanningsdaling  
- Minder nauwkeurige beslissingen in het laad- en ontlaadbeheer  

## 4. Hoe stel je energiekalibratie in?


👉 App-stappen: Apparaatpagina → selecteer apparaat → <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> → SoC-Instellingen → Energiekalibratie

<img src={require("../energy-mode/img/select_device.png").default} width="240"/>
<img src={require("../energy-mode/img/device_info.png").default} width="240"/>
<img src={require("../energy-mode/img/device_setting.png").default} width="240"/>
<img src={require("./img/soc_settings.png").default} width="240"/>


| Instelling | Beschrijving | Aanbevolen waarde |
|------------|--------------|-------------------|
| Kalibratie-Interval | Tijd sinds de laatste volledige lading (5–60 dagen) | Aanbevolen: 14 dagen (2 weken) |
| Starttijd Kalibratie | Tijdstip waarop kalibratie mag starten na het bereiken van de cyclus | Kies bij voorkeur overdag met voldoende zon of tijdens lage netstroomtarieven |
| Laadvermogen | Gebruikt het huidige laadvermogen (AC-vermogen, standaard 500 W) | Instellen op basis van de elektrische capaciteit van de installatie |

<img src={require("./img/calibration_interval.png").default} width="240"/>
<img src={require("./img/calibration_start_time.png").default} width="240"/>
<img src={require("./img/charging_power.png").default} width="240"/>