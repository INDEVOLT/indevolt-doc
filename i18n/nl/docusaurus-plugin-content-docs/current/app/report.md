---
title: Statistiek
description: Analyseer energiegegevens vanuit meerdere invalshoeken en krijg diepgaand inzicht in energieverbruik en besparingsmogelijkheden binnen uw huis.
---

# Statistiek

De pagina **Statistiek** biedt een uitgebreid overzicht van de energiegegevens van uw huis. U kunt energiegegevens bekijken op vier tijdsniveaus: **dag, week, maand en jaar**. Via de tabbladen bovenaan schakelt u tussen de verschillende tijdsniveaus en past u de gewenste periode aan. De pagina toont vervolgens automatisch de samengevoegde gegevens van de geselecteerde periode.

<img src={require("./img/report.png").default} width="240"/>

## 1. Uitleg van gegevensindicatoren

### 1.1 Daggegevens

| Parameter | Beschrijving |
| ---------- | ------------ |
| **Opwek** | Totale hoeveelheid energie die het PV-systeem in de geselecteerde periode heeft opgewekt. |
| **Verbruik** | Totale hoeveelheid energie die het huis in de geselecteerde periode heeft verbruikt, inclusief energie van zonnepanelen, batterij en elektriciteitsnet. |
| **Netinkoop** | Totale hoeveelheid energie die van het openbare elektriciteitsnet is afgenomen. |
| **Netverkoop** | Totale hoeveelheid energie die aan het openbare elektriciteitsnet is teruggeleverd. |
| **Ontladen** | Totale hoeveelheid energie die het opslagsysteem in de geselecteerde periode heeft geleverd. |
| **Laad** | Totale hoeveelheid energie die het opslagsysteem in de geselecteerde periode heeft opgeslagen. |
| **PV** | Realtime PV-opwekkingsvermogen op het geselecteerde tijdstip in de grafiek. |
| **Verbruik** | Totaal realtime energieverbruik van alle apparaten in huis op het geselecteerde tijdstip in de grafiek. |
| **Netinkoop** | Realtime vermogen dat op het geselecteerde tijdstip van het elektriciteitsnet wordt afgenomen. |
| **Netverkoop** | Realtime vermogen dat op het geselecteerde tijdstip aan het elektriciteitsnet wordt teruggeleverd. |
| **Laad** | Realtime laadvermogen van de batterij op het geselecteerde tijdstip in de grafiek. |
| **Ontladen** | Realtime ontlaadvermogen van de batterij op het geselecteerde tijdstip in de grafiek. |
| **SOC** | Batterijpercentage (State of Charge) op het geselecteerde tijdstip in de grafiek. |
| **Winst** | Geschatte opbrengst berekend op basis van het ingestelde stroomtarief. Zie onderstaande formule voor details. |
| **Milieu bijdrage** | Toont milieugegevens zoals CO₂-reductie, equivalent aantal geplante bomen en bespaarde steenkool. |

<img src={require("./img/report.png").default} width="240"/>
<img src={require("./img/report_daily2.png").default} width="240"/>

### 1.2 Week-/maand-/jaargegevens

| Parameter | Beschrijving |
| ---------- | ------------ |
| **Opwek** | Totale hoeveelheid energie die het PV-systeem in de geselecteerde periode heeft opgewekt. |
| **Verbruik** | Totale hoeveelheid energie die het huis in de geselecteerde periode heeft verbruikt, inclusief energie van zonnepanelen, batterij en elektriciteitsnet. |
| **Netinkoop** | Totale hoeveelheid energie die van het openbare elektriciteitsnet is afgenomen. |
| **Netverkoop** | Totale hoeveelheid energie die aan het openbare elektriciteitsnet is teruggeleverd. |
| **Ontladen** | Totale hoeveelheid energie die het opslagsysteem in de geselecteerde periode heeft geleverd. |
| **Laad** | Totale hoeveelheid energie die het opslagsysteem in de geselecteerde periode heeft opgeslagen. |
| **Opwek** | Hoeveelheid energie die het PV-systeem tijdens de geselecteerde periode heeft opgewekt. |
| **Verbruik** | Totale hoeveelheid energie die het huis tijdens de geselecteerde periode heeft verbruikt. |
| **Netinkoop** | Hoeveelheid energie die het huis tijdens de geselecteerde periode van het openbare elektriciteitsnet heeft afgenomen. |
| **Netverkoop** | Hoeveelheid energie die het huis tijdens de geselecteerde periode aan het openbare elektriciteitsnet heeft teruggeleverd. |
| **Laad** | Hoeveelheid energie die de batterij tijdens de geselecteerde periode heeft opgeslagen. |
| **Ontladen** | Hoeveelheid energie die de batterij tijdens de geselecteerde periode voor huishoudelijk gebruik heeft geleverd. |
| **Winst** | Geschatte opbrengst berekend op basis van het ingestelde stroomtarief. Zie onderstaande formule voor details. |
| **Milieu bijdrage** | Toont milieugegevens zoals CO₂-reductie, equivalent aantal geplante bomen en bespaarde steenkool. |

<img src={require("./img/report_week1.png").default} width="240"/>
<img src={require("./img/report_week2.png").default} width="240"/>

:::info
Afhankelijk van de apparaten die aan uw huis zijn gekoppeld, kunnen de weergegeven parameters verschillen. De daadwerkelijke interface van uw app is leidend.
:::

### 1.3 Winst

De winst bestaat uit twee onderdelen: besparing door eigen verbruik en inkomsten uit teruglevering. De berekening is gebaseerd op het ingestelde [stroomtarief](./profile.md#3-tarief).

1. <u>**Besparing eigen verbruik** = Bespaarde energie × afnametarief</u>

   De bespaarde energie wordt als volgt berekend, afhankelijk van de beschikbare gegevens:

   * Wanneer verbruik en netafname beschikbaar zijn:
     Bespaarde energie = totaal verbruik - netafname
   * Wanneer deze gegevens niet beschikbaar zijn:
     Bespaarde energie = opwekking + batterijontlading - batterijlading

2. <u>**Verkoopwinst** = teruggeleverde energie × teruglevertarief</u>

   Wanneer er geen teruglevering plaatsvindt, zijn de inkomsten uit teruglevering gelijk aan 0.

3. <u>**Totale opbrengst** = besparing eigen verbruik + verkoopwinst</u>

Tik op het gedeelte met opbrengstgegevens om de pagina met opbrengststatistieken te openen. Hier kunt u:

* opbrengstgegevens bekijken op **dag-, week-, maand- en jaarniveau**;
* schakelen tussen **totale opbrengst** en **verkoopwinst**;
* het gebruikte stroomtarief bekijken en direct naar de instellingenpagina voor stroomtarieven gaan.

<img src={require("./img/earnings.png").default} width="240"/>

---

## 2. Functies

### 2.1 Geavanceerde modus

Tik rechtsboven op de knop <img src={require("./img/config_icon.png").default} width="25" style={{verticalAlign: "middle"}}/> om over te schakelen naar de **Geavanceerde modus** en een duidelijker overzicht van de energiestromen te bekijken.

<img src={require("./img/mode_selection.png").default} width="240"/>
<img src={require("./img/advanced_mode.png").default} width="240"/>

### 2.2 Gegevensweergave

Elke tijdsweergave biedt zowel een **overzicht** als gedetailleerde gegevens voor **last**, **PV**, **batterij** en **net**. Tik op de overeenkomstige pictogrammen om tussen verschillende gegevensweergaven te schakelen.

<img src={require("./img/report_overview.png").default} width="240"/>

### 2.3 Grafiekweergave beheren

Boven de grafiek kunt u op de knoppen van de verschillende gegevensindicatoren tikken om datalijnen in de grafiek **weer te geven of te verbergen**, zodat u gerichter analyses kunt uitvoeren.

<img src={require("./img/chart_control.png").default} width="240"/>
