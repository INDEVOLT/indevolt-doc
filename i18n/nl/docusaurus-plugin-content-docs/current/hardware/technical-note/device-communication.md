---
title: Communicatie met externe apparaten
description: Begrijp hoe de micro-energieopslag communiceert met meters, stopcontacten en andere apparaten, en hoe data wordt bijgewerkt
---

# Uitleg over communicatie met externe apparaten

Wanneer u een elektriciteitsmeter, stopcontact of ander apparaat aansluit op het micro-energiesysteem, communiceert het systeem automatisch met deze apparaten om verbruiks- of opwekkingsgegevens te verzamelen.

- **Lokale communicatie (LAN)**: gebruikt voor real-time gegevens (snelle respons)
- **Cloudcommunicatie**: gebruikt voor weergave in de app en historische gegevensopslag

De communicatiemethode verschilt per merk, maar het systeem past zich automatisch aan, zonder handmatige configuratie.

| Merk       | Lokale communicatie | Cloudcommunicatie |
| ---------- | ------------------ | ----------------- |
| Shelly     | HTTP               | Micro-energieopslag cloud |
| Ecotracker | HTTP               | Micro-energieopslag cloud |
| Stromleser | HTTP               | Micro-energieopslag cloud |
| HomeWizard | HTTP               | Micro-energieopslag cloud |
| SOLARMAN   | UDP-broadcast      | Onafhankelijke cloud |
| INDEVOLT   | Eigen protocol     | Micro-energieopslag cloud |

:::tip
Met “micro-energieopslag naar de cloud” wordt bedoeld dat de gegevens eerst naar het micro-energiesysteem worden gestuurd, waar ze worden samengevoegd en vervolgens naar de cloud worden geüpload.
:::


## 1. Lokale communicatie

Lokale communicatie wordt gebruikt om **real-time gegevens** van apparaten op te halen. De actualisatiefrequentie verschilt per apparaat.

:::info
De functie om de dataverversingssnelheid aan te passen is momenteel nog niet beschikbaar en zal in een toekomstige app-update worden toegevoegd.
:::

### 1.1 HTTP-communicatieapparaten

Deze apparaten gebruiken een lokaal HTTP-protocol via het LAN en bieden een stabiele verbinding.

- **Standaard communicatie-interval**: 2 seconden  
- **Instelbaar bereik**:
  - SolidFlex 2000 / PowerFlex 2000: ≥ 1 seconde  
  - BK1600 / BK1600 Ultra: ≥ 2 seconden  

- **Ondersteunde apparaten**

  <table>
  <thead>
    <tr>
      <th>Merk</th>
      <th>Type</th>
      <th>Model</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">Shelly</td>
      <td>Enkelfase meter</td>
      <td>Shelly Pro EM</td>
    </tr>
    <tr>
      <td>Driefase meter</td>
      <td>Shelly 3EM<br />Shelly Pro 3 EM (400)<br />Shelly Pro 3EM 3CT 63</td>
    </tr>
    <tr>
      <td>Stopcontact</td>
      <td>Shelly Plug<br />Shelly Plug S Gen3</td>
    </tr>
    <tr>
      <td>Ecotracker</td>
      <td>Infrarood meterlezer</td>
      <td>EcoTracker IR</td>
    </tr>
    <tr>
      <td>Stromleser</td>
      <td>Infrarood meterlezer</td>
      <td>stormleser.one</td>
    </tr>
    <tr>
      <td>HomeWizard</td>
      <td>P1-meterlezer</td>
      <td>HWE-P1</td>
    </tr>
  </tbody>
  </table>

:::note

De volgende apparaten zijn nog niet geïntegreerd in het micro-energiesysteem en ondersteunen momenteel geen datacommunicatie:

<table>
<thead>
  <tr>
    <th>Merk</th>
    <th>Type</th>
    <th>Model</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="3">Shelly</td>
    <td>Enkelfase meter</td>
    <td>Shelly EM<br />Shelly EM Gen3</td>
  </tr>
  <tr>
    <td>Driefase meter</td>
    <td>Shelly 3EM-63T Gen3</td>
  </tr>
  <tr>
    <td>Stopcontact</td>
    <td>Shelly Wave Plug S<br />Shelly Plus Plug S<br />Shelly Outdoor Plug S Gen3</td>
  </tr>
</tbody>
</table>

:::


### 1.2 SOLARMAN-apparaten

SOLARMAN-apparaten verzenden gegevens actief via een lokale broadcast, zonder polling, waardoor de realtime prestaties hoger zijn.

| Type       | Model                                                   | Standaard interval | Snelste ondersteuning |
| ---------- | ------------------------------------------------------ | ------------------ | ---------------------- |
| Enkelfase meter | MR1-D5-WR<br />MR1-D5-W                               | 150 ms            | ≥150 ms               |
| Driefase meter | MR3-D5-WR<br />MR3-D5-W<br />MR3-D4-WRE<br />MR3-D4-WE | 150 ms            | ≥150 ms               |
| Infrarood meterlezer | NIR-12-EU<br />NIR-32-EU                        | 150 ms            | ≥150 ms               |
| P1-meterlezer | P1-2W<br />P1-2W-C                                     | 500 ms            | ≥150 ms               |
| Stopcontact | SP-2W-EU                                               | 500 ms            | ≥150 ms               |

:::note
De volgende apparaten worden momenteel nog ontwikkeld en zullen in een toekomstige versie worden ondersteund:
- P1-2WR
:::


### 1.3 INDEVOLT-apparaten

Communicatie met het micro-energiesysteem via een eigen protocol.

- **Standaard communicatie-interval**: 2 seconden  
- **Instelbaar bereik**: ≥ 1 seconde  

- **Ondersteunde apparaten**

  | Type       | Model |
  | ---------- | ----- |
  | Enkelfase meter | SMD1 |
  | Driefase meter | SMD3 |
  | Stopcontact | SP16 |


## 2. Cloudcommunicatie

Cloudgegevens worden gebruikt voor weergave op afstand, bijvoorbeeld in de app voor apparaatstatus of historische data.

Alle apparaten volgen dezelfde regels:

- **Standaard update-interval**: 300 seconden (5 minuten)  
- **Snelle modus ingeschakeld**: 1 seconde updatefrequentie