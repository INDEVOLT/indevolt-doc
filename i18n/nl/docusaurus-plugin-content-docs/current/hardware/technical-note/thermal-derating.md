---
title: PV- en batterijvermogensbegrenzing
description: Begrijp hoe het systeem het vermogen beperkt bij hoge of lage temperaturen
---

# Uitleg over PV- en batterijvermogensbegrenzing

Binnen het aanbevolen temperatuurbereik kan het apparaat op vol vermogen werken. Wanneer de temperatuur te hoog of te laag wordt, verlaagt het systeem automatisch het vermogen. Dit wordt vermogensbegrenzing (derating) genoemd.

Vermogensbegrenzing is een normaal beschermingsmechanisme waarmee het apparaat in een veiligere toestand kan blijven werken. Enerzijds helpt dit schade door oververhitting of onderkoeling te voorkomen, anderzijds draagt het bij aan een langere levensduur van het apparaat. Zodra de temperatuur weer binnen het veilige bereik valt, herstelt het systeem automatisch het nominale vermogen zonder handmatige tussenkomst.

---

## PV-vermogensbegrenzing

Onder normale omstandigheden probeert het systeem de zonne-energieopbrengst zo hoog mogelijk te houden. Bij hoge temperaturen kan langdurig gebruik op vol vermogen echter extra belasting veroorzaken. Wanneer de temperatuur van de interne PV-conversiemodule (MPPT) te hoog wordt, verlaagt het systeem automatisch het PV-vermogen om het apparaat te beschermen.

:::info
De ECO-serie beschikt niet over een PV DC-ingang en ondersteunt daarom geen directe aansluiting van zonnepanelen. Dit onderdeel is daarom niet van toepassing op deze modellen.
:::

**Waarom wordt het vermogen beperkt?**

Tijdens de vermogensomzetting (DC-DC) genereert de PV-conversiemodule continu warmte. Hoe hoger het vermogen, hoe groter de warmteontwikkeling. Daarnaast kunnen externe omstandigheden de temperatuur verder verhogen, bijvoorbeeld:

- Hoge omgevingstemperaturen rond het middaguur in de zomer  
- Slechte ventilatie op de installatielocatie  

Wanneer de temperatuur blijft stijgen en het systeem toch op vol vermogen blijft werken, kan dit leiden tot oververhitting, verminderde efficiëntie of zelfs schade aan componenten. Daarom verlaagt het systeem automatisch het uitgangsvermogen om een veiligere werking te garanderen.

**Hoe merk je dit in de praktijk?**

Bij PV-vermogensbegrenzing kun je de volgende verschijnselen zien:

- Het PV-vermogen bereikt niet de theoretische piekwaarde  
- De opwekcurve rond de middag lijkt “afgevlakt” of lager dan verwacht  

Dit zijn normale beschermingsreacties van het systeem.

**Uitleg van de vermogensbegrenzing**

Wanneer de temperatuur van de interne PV-conversiemodule (MPPT) stijgt, beperkt het systeem stapsgewijs het maximale PV-vermogen. Zodra de temperatuur daalt, wordt het nominale vermogen automatisch hersteld:

- Bij temperaturen boven **93°C** wordt het maximale vermogen beperkt tot **80%** van het nominale vermogen
  - Bijvoorbeeld: totaal vermogen wordt `2400W × 80% = 1920W`; per PV-ingang `600W × 80% = 480W`
  - Het nominale vermogen wordt hersteld zodra de temperatuur onder **75°C** komt

- Bij temperaturen boven **96°C** wordt het maximale vermogen beperkt tot **60%** van het nominale vermogen
  - Bijvoorbeeld: totaal vermogen wordt `2400W × 60% = 1440W`; per PV-ingang `600W × 60% = 360W`
  - Het nominale vermogen wordt hersteld zodra de temperatuur onder **80°C** komt

:::note
De huidige App ondersteunt nog geen weergave van de temperatuur van de PV-conversiemodule (MPPT).
:::

---

## Batterijvermogensbegrenzing

Vergeleken met de PV-conversiemodule is de batterij gevoeliger voor temperatuurveranderingen. Daarom zijn de beschermingsmechanismen voor de batterij strenger. Zowel hoge als lage temperaturen kunnen vermogensbegrenzing activeren.

**Waarom wordt het vermogen beperkt?**

In een batterij vinden chemische reacties plaats die zeer gevoelig zijn voor temperatuurveranderingen:

- Bij hoge temperaturen: versnelde veroudering en mogelijk veiligheidsrisico’s  
- Bij lage temperaturen: tragere chemische reacties, waardoor laden schade kan veroorzaken  

Daarom beperkt het systeem de laad- en ontlaadcapaciteit om ervoor te zorgen dat de batterij altijd binnen een veilig werkbereik blijft.

**Hoe merk je dit in de praktijk?**

- Langzamer laden of helemaal niet kunnen laden  
- Lager ontlaadvermogen  
- Het nominale laad- of ontlaadvermogen wordt niet bereikt  

**Uitleg van de vermogensbegrenzing**

Het maximale laad- en ontlaadvermogen van de batterij wordt dynamisch aangepast op basis van de temperatuur:

- **Bij hoge temperaturen**: het systeem verlaagt het laadvermogen en beperkt ook het ontlaadvermogen. Als de temperatuur verder stijgt, stopt het systeem uiteindelijk volledig met laden en ontladen om oververhitting te voorkomen.
- **Bij lage temperaturen**: het systeem beperkt vooral het laadvermogen, omdat laden bij lage temperaturen onomkeerbare schade aan lithiumbatterijen kan veroorzaken. Ook het ontlaadvermogen neemt af. Daarom komt het in de winter vaker voor dat ontladen nog wel mogelijk is, maar laden niet.

De waarden in de onderstaande tabel gelden per afzonderlijke hoofdunit of batterijpakket.  
Het maximale totale systeemvermogen = het vermogen van één hoofdunit/batterijpakket × het aantal units, maar zal nooit hoger zijn dan het maximaal toegestane laad- of ontlaadvermogen van het systeem.

<table><thead>
  <tr>
    <th></th>
    <th colspan="2">SolidFlex 2000 / SolidFlex 2000 Eco / SFA1800</th>
    <th colspan="2">PowerFlex 2000 / PowerFlex 2000 Eco / PFA2000</th>
  </tr></thead>
<tbody>
  <tr>
    <td>Temperatuur (℃)</td>
    <td>Max. laadvermogen (W)</td>
    <td>Max. ontlaadvermogen (W)</td>
    <td>Max. laadvermogen (W)</td>
    <td>Max. ontlaadvermogen (W)</td>
  </tr>
  <tr>
    <td>≤ -20</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>-20 < T ≤ -10</td>
    <td>0</td>
    <td>304</td>
    <td>0</td>
    <td>341</td>
  </tr>
  <tr>
    <td>-10 < T ≤ 0</td>
    <td>0</td>
    <td>380</td>
    <td>0</td>
    <td>426</td>
  </tr>
  <tr>
    <td>0 < T ≤ 4</td>
    <td>179</td>
    <td>761</td>
    <td>200</td>
    <td>853</td>
  </tr>
  <tr>
    <td>4 < T ≤ 10</td>
    <td>537</td>
    <td>761</td>
    <td>602</td>
    <td>853</td>
  </tr>
  <tr>
    <td>10 < T ≤ 52</td>
    <td>896</td>
    <td>1075</td>
    <td>1004</td>
    <td>1205</td>
  </tr>
  <tr>
    <td>52 < T ≤ 53 (nominaal vermogen herstelt onder 51℃)</td>
    <td>448</td>
    <td>380</td>
    <td>502</td>
    <td>426</td>
  </tr>
  <tr>
    <td>&gt; 53</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
</tbody></table>

<img src={require("./img/bat_charging_power.png").default} width="960"/>
<img src={require("./img/bat_discharging_power.png").default} width="960"/>

**Hoe controleer je de batterijtemperatuur**

Stappen in de INDEVOLT App:  
Ga naar de apparaatpagina → selecteer het betreffende micro-opslagsysteem → klik op het pictogram <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> → kies **Temperatuur** → bekijk de temperatuur van de hoofdbatterij en de batterijpakketten.

<img src={require("../energy-mode/img/select_device.png").default} width="240"/>
<img src={require("../energy-mode/img/device_info.png").default} width="240"/>
<img src={require("./img/device_setting2.png").default} width="240"/>
<img src={require("./img/temperature.png").default} width="240"/>