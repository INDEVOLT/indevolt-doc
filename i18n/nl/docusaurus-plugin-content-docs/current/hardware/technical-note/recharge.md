---
title: Bijlaadlogica
description: Begrijp de automatische bijlaadstrategie van het systeem bij verschillende batterijniveaus en laadbronnen
---

# Uitleg over bijlaadlogica

## 1. Overzicht

Het systeem voert automatisch verschillende bijlaadstrategieën uit op basis van de **resterende batterijcapaciteit** (SoC), de **noodstroomreserve** en de gekozen **laadbron**. De belangrijkste doelen zijn:

- Een minimale noodreserve behouden om overontlading van de batterij te voorkomen
- Zoveel mogelijk gebruikmaken van zonne-energie voor het bijladen
- Indien nodig AC-bijlading gebruiken om het herstelvermogen van het systeem te verbeteren
- Voorkomen dat de batterij voortdurend schakelt rond kritieke capaciteitsniveaus

Afhankelijk van de geselecteerde **laadbron** gebruikt het systeem automatisch een van de volgende modi, zonder handmatige tussenkomst:

- **Laden via zon + net**: gebruikt eerst zonne-energie; wanneer PV-vermogen onvoldoende is, wordt automatisch netstroom gebruikt
- **Alleen laden via zon**: gebruikt uitsluitend zonne-energie om de batterij op te laden

:::info Voorbereiding: noodstroomreserve instellen

👉 **Stappen in de app**:  
Apparaatpagina → selecteer het betreffende opslagsysteem → tik op het pictogram <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> → SoC-Instellingen → Noodstroomreserve (5%–100%)

<img src={require("../energy-mode/img/select_device.png").default} width="240"/>
<img src={require("../energy-mode/img/device_info.png").default} width="240"/>
<img src={require("../energy-mode/img/device_setting.png").default} width="240"/>
<img src={require("./img/soc_settings.png").default} width="240"/>
<img src={require("./img/backup_reserve.png").default} width="240"/>

:::

## 2. Laden via zon + net

Wanneer de laadbron is ingesteld op **Laden via zon + net**, ondersteunt het systeem zowel AC- als PV-bijlading.

👉 **Stappen in de app**:  
Apparaatpagina → selecteer het betreffende opslagsysteem → tik op het pictogram <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> → SoC-Instellingen

1. Stel **Laadbron** in op **Laden via zon + net**
2. Stel **Laadvermogen** in: het laadvermogen voor AC-bijlading (standaard 500 W)
   - SolidFlex/PowerFlex 2000: 100 W–2400 W
   - BK1600/BK1600 Ultra: 100 W–1200 W

<img src={require("./img/charging_source_ac.png").default} width="240"/>
<img src={require("./img/charging_power.png").default} width="240"/>

**Werkingslogica**

| Batterijniveau (SoC) | Systeemstatus | Gedrag van het systeem |
| --- | --- | --- |
| Boven de noodstroomreserve | Normale werking | De batterij kan normaal laden en ontladen |
| Gelijk aan de noodstroomreserve | Beschermingsmodus | De batterijontlading stopt; PV kan nog steeds belastingen voeden |
| Onder de noodstroomreserve -2% | Bijladen gestart | Gelijktijdig PV- en AC-laden om de batterij snel te herstellen |
| Hersteld tot de noodstroomreserve | AC-laden gestopt | Netladen stopt; alleen PV-laden blijft actief |
| Boven de noodstroomreserve +2% | Normale werking hervat | De batterijontlading wordt hervat |


## 3. Alleen laden via zon

Wanneer de laadbron is ingesteld op **Alleen laden via zon**, gebruikt het systeem bij voorkeur zonne-energie om de batterij op te laden.

:::info
Onder normale omstandigheden gebruikt het systeem geen AC om de batterij op te laden. Bij een extreem laag batterijniveau wordt echter automatisch een beschermende AC-bijlaadfunctie geactiveerd.
:::

👉 **Stappen in de app**:  
Apparaatpagina → selecteer het betreffende opslagsysteem → tik op het pictogram <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> → SoC-Instellingen

- Stel **Laadbron** in op **Alleen laden via zon**

  <img src={require("./img/charging_source_pv.png").default} width="240"/>

**Werkingslogica**

| Batterijniveau (SoC) | Systeemstatus | Gedrag van het systeem |
| --- | --- | --- |
| Boven de noodstroomreserve | Normale werking | De batterij kan normaal laden en ontladen |
| Gelijk aan de noodstroomreserve | Beschermingsmodus | De batterijontlading stopt; PV kan nog steeds belastingen voeden |
| Onder de noodstroomreserve -2% | PV-bijlading | Alleen laden via PV |
| Ongeveer 3% van de totale SoC | Bescherming bij extreem laag batterijniveau | PV- en AC-laden worden automatisch geactiveerd om volledige ontlading te voorkomen |
| Boven 5% van de totale SoC | Bescherming beëindigd | AC-laden stopt; het systeem schakelt terug naar alleen PV-laden |
| Boven de noodstroomreserve +2% | Normale werking hervat | De batterijontlading wordt hervat |

## 4. Verschillen tussen de twee bijlaadmodi

| Scenario | Bij bereiken van noodreserve | Lager dan noodreserve − 2% | Bescherming bij laag batterijniveau | Voorwaarde voor hervatten ontladen |
| --- | --- | --- | --- | --- |
| Laden via zon + net | Ontlading stopt, PV kan belastingen blijven voeden | PV + AC-bijlading | - | Laden tot 2% boven de noodreserve |
| Alleen laden via zon | Ontlading stopt, PV kan belastingen blijven voeden | Alleen PV-bijlading | Bij 3% totale SoC wordt PV + AC-bijlading geactiveerd; AC-laden stopt bij 5% | Laden tot 2% boven de noodreserve |