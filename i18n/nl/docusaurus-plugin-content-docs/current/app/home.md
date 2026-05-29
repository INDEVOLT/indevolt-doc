---
title: Huis
description: Monitor de energiestromen in uw huis dynamisch en volg realtime gegevens over energieopwekking, verbruik en energieopslag.
---

# Huis

De pagina **Huis** is het hoofdscherm voor het beheren van de energiegegevens van uw huidige huis. Hier ziet u realtime gegevens over energieopwekking, verbruik en een compleet overzicht van de energiestromen binnen uw huis.

<img src={require("./img/home_intro.png").default} width="240"/>

| Nr. | Functie | Beschrijving |
| ---- | -------- | ------------ |
| 1 | Huis | Toont de naam van het huidige huis. Tik hier om alle toegevoegde huizen te bekijken, tussen huizen te wisselen of huizen te beheren. |
| 2 | + | Apparaat toevoegen. |
| 3 | Dashboard | Pas het thema en de weergegeven gegevens van de energiestroomgrafiek aan. |
| 4 | Weer | Toont realtime lokale weersinformatie en temperatuur. |
| 5 | Configureren | Wanneer er geen stroomtariefplan beschikbaar is, wordt de knop **Configureren** weergegeven om afname- en teruglevertarieven in te stellen. Wanneer er wel een tariefplan actief is, worden direct de stroomprijzen van vandaag weergegeven. |
| 6 | Stroomdiagram | Visualiseert dynamisch de energiestromen binnen het huis. |
| 7 | Daggegevens | Dagelijks overzicht van energieopwekking en energieverbruik. |

## 1. Huis

### 1.1 Wisselen van huis

Tik linksboven op de huisnaam om de lijst met alle huizen binnen uw account te openen. Selecteer het gewenste huis om snel naar de energiegegevens van dat huis te schakelen.

<img src={require("./img/tap_myhome.png").default} width="240"/>
<img src={require("./img/select_home.png").default} width="240"/>

### 1.2 Huisbeheer

Voor uitgebreid beheer van huizen tikt u onderaan de lijst op de knop **Beheren**.

<img src={require("./img/select_home.png").default} width="240"/>
<img src={require("./img/manage_home.png").default} width="240"/>

**Huis toevoegen**

1. Tik rechtsboven op de knop **+** in de pagina Huisbeheer.
2. Volg de instructies op het scherm om de gegevens van het nieuwe huis in te voeren. Zie het hoofdstuk [Huis toevoegen](./profile.md#21-huis-toevoegen) voor meer informatie.

**Huis bewerken**

Selecteer in de pagina Huisbeheer het huis dat u wilt aanpassen om de informatiepagina te openen:
- [Bewerk](./profile.md#22-huis-bewerken) de huisnaam, het adres en gerelateerde instellingen.
- [Verwijder](./profile.md#23-huis-verwijderen) het huis.

## 2. Apparaat toevoegen

Ga naar de handleiding [Apparaat toevoegen](./add-device.md) om te zien hoe u nieuwe apparaten aan uw huis koppelt.

## 3. Dashboard

Tik op de knop Dashboard om de configuratiepagina te openen.

<img src={require("./img/select_dashboard.png").default} width="240"/>
<img src={require("./img/dashboard.png").default} width="240"/>

- **Stroomdiagram**: tik op het veld **Stroomdiagram** om een thema te kiezen.

    <img src={require("./img/configure_power_flow.png").default} width="240"/>

- **Dag**: selecteer welke [daggegevens](#7-daggegevens) op de huispagina moeten worden weergegeven.

    <img src={require("./img/configure_daily.png").default} width="240"/>

## 4. Weer

Deze widget toont realtime weersinformatie en temperatuur voor de locatie van uw huis.

## 5. Configureren

Dit gedeelte toont dynamische inhoud:
- Wanneer er geen stroomtariefplan beschikbaar is, wordt de knop **Configureren** weergegeven. Tik hierop om [afname- en teruglevertarieven in te stellen](./profile.md#3-stroomtarieven).
- Wanneer er wel een stroomtariefplan beschikbaar is, worden de afname- en teruglevertarieven van vandaag weergegeven. Tik erop om historische tarieven te bekijken.

## 6. Stroomdiagram

Het stroomdiagram visualiseert dynamisch de energiebronnen en energiestromen binnen uw huis. De richting van de energiestroom in de grafiek geeft de werkelijke energierichting weer.

- Weergave vernieuwen: trek de pagina van de energiestroomgrafiek omlaag om de gegevens te vernieuwen.
- Thema wijzigen: wijzig het weergavethema via [Dashboard](#3-dashboard).
- Gegevensbron instellen: de gegevens in de energiestroomgrafiek zijn afkomstig uit de [Instellingen voor gegevensbronnen](./profile.md#5-instellingen-voor-gegevensbronnen), die u naar wens kunt aanpassen.

<img src={require("./img/power_flow.png").default} width="240"/>

## 7. Daggegevens

De daggegevensweergave toont de cumulatieve gegevens van energieopwekking en energieverbruik van de huidige dag:

| Parameter | Beschrijving |
| ---------- | ------------ |
| Zelfverbruik | (Energieverbruik geleverd door zonne-energie + laadenergie van zonne-energie naar de batterij) / totale energieopwekking. Geeft aan welk deel van de zonne-energie direct binnen het huis wordt gebruikt. |
| Zelfvoorzienend | (Verbruik afkomstig van energieopwekking + verbruik afkomstig van batterijontlading) / totaal energieverbruik. Geeft aan welk deel van het verbruik door eigen energie wordt gedekt. |
| Opwek | Totale energieopwekking van het PV-systeem op de huidige dag. |
| Verbruik | Totale hoeveelheid verbruikte energie van de huidige dag. |
| Netinkoop | Totale hoeveelheid energie die vandaag van het elektriciteitsnet is afgenomen. |
| Netverkoop | Totale hoeveelheid energie die vandaag aan het elektriciteitsnet is teruggeleverd. |
| Laad | Totale hoeveelheid geladen energie van het opslagsysteem vandaag. |
| Ontlad | Totale hoeveelheid ontladen energie van het opslagsysteem vandaag. |

<img src={require("./img/daily.png").default} width="240"/>

Via [Dashboard](#3-dashboard) kunt u zelf bepalen welke gegevens hier worden weergegeven.