---
title: Huis
description: Dynamische monitoring van de energiestromen in huis, met realtime inzicht in opwekking, verbruik en opslaggegevens.
---

# Huis

De pagina **Huis** is de startpagina waar u de energiegegevens van uw huishouden kunt bekijken en beheren. Hier krijgt u realtime inzicht in de opwekking, het verbruik, het laden en ontladen van de batterij en de import en export van elektriciteit via het net. Via het energiestroomdiagram kunt u bovendien de energiestromen visueel volgen.

<img src={require("./img/home_intro.png").default} width="240"/>

| Nr. | Functie            | Beschrijving                                                                 |
| --- | ------------------ | ---------------------------------------------------------------------------- |
| 1   | Huis              | Toont de huidige naam van het huishouden. Tik om alle gekoppelde huishoudens te bekijken, te wisselen en te beheren. |
| 2   | +                  | Apparaat toevoegen                                                          |
| 3   | Weer               | Bekijk het actuele weer en de temperatuur op de locatie van het huishouden  |
| 4   | Stroomdiagram     | Visualiseert dynamisch de energiebronnen en -stromen binnen het huishouden  |
| 5   | Dashboard | Pas het thema en de weergegeven energiegegevens van het stroomdiagram aan |
| 6   | Daggegevens        | Bekijk dagelijkse statistieken van opwekking, verbruik en opbrengsten      |

---

## 1. Huis

Als uw account meerdere huishoudens beheert, kunt u hier eenvoudig tussen verschillende huishoudens schakelen.

### 1.1 Huishouden wisselen

Tik op de naam van het huishouden linksboven om alle gekoppelde huishoudens te bekijken. Selecteer een huishouden om de weergave van energiegegevens direct te wijzigen.

<img src={require("./img/tap_myhome.png").default} width="240"/>
<img src={require("./img/select_home.png").default} width="240"/>

### 1.2 Huishoudbeheer

Tik onderaan de huishoudenslijst op **Beheren** om de beheerpagina te openen.

#### Huishouden toevoegen

1. Tik op de knop **+** rechtsboven.
2. Vul de gevraagde informatie in volgens de instructies op het scherm.

Zie voor meer details: [Huishouden toevoegen](./profile.md#21-woning-toevoegen)

#### Huishouden bewerken of verwijderen

Selecteer een huishouden in de beheerpagina om de volgende acties uit te voeren:
- [Bewerken](./profile.md#22-woninggegevens-bewerken): wijzig naam, adres en instellingen
- [Verwijderen](./profile.md#23-woning-verwijderen): verwijder het huishouden

<img src={require("./img/select_home.png").default} width="240"/>
<img src={require("./img/manage_home.png").default} width="240"/>

---

## 2. Apparaat toevoegen

Tik op de knop **+** rechtsboven op de startpagina om een apparaat toe te voegen.

Voor gedetailleerde instructies: [Apparaat toevoegen](./add-device.md)

---

## 3. Weer

De weerkaart toont realtime weerinformatie en de actuele temperatuur op de locatie van uw huishouden. Dit helpt u om energieopwekking en verbruik beter te begrijpen in relatie tot weersomstandigheden.

---

## 4. Stroomdiagram

Het stroomdiagram visualiseert de energiebronnen en -stromen binnen uw huishouden in realtime. De richting van de pijlen geeft de energiestroom weer.

- **Vernieuwen:** trek de pagina omlaag om de gegevens te vernieuwen  
- **Thema wijzigen:** pas het diagram aan via [Dashboard](#5-dashboard)  
- **Gegevensbron instellen:** de weergegeven gegevens zijn afkomstig uit de [gegevensbroninstellingen](./profile.md#5-gegevensbron); u kunt deze indien nodig aanpassen  

<img src={require("./img/power_flow.png").default} width="240"/>

---

## 5. Dashboard

Tik op de knop <img src={require("./img/config_icon.png").default} width="25" style={{verticalAlign: "middle"}}/> om de configuratiepagina te openen en de startpagina aan te passen.

U kunt:

- Een thema voor het energiediagram kiezen  
- Bepalen welke daggegevens worden weergegeven  
- De volgorde van datakaarten aanpassen  

<img src={require("./img/select_dashboard.png").default} width="240"/>
<img src={require("./img/dashboard.png").default} width="240"/>

### 5.1 Stroomdiagramthema

Tik op **Stroomdiagram** om een ander visueel thema te kiezen.

<img src={require("./img/configure_power_flow.png").default} width="240"/>

### 5.2 Daggegevens

U kunt bepalen welke [daggegevens](#6-daggegevens) op de startpagina worden weergegeven.

#### Automatisch

Het systeem toont automatisch relevante datakaarten op basis van geconfigureerde gegevensbronnen.

Als er geen gegevensbron beschikbaar is, wordt de betreffende kaart niet weergegeven.

<img src={require("./img/configure_daily1.png").default} width="240"/>

#### Handmatig

Selecteer handmatig welke gegevens moeten worden weergegeven.

<img src={require("./img/configure_daily2.png").default} width="240"/>

### 5.3 Volgorde van gegevens aanpassen

Houd een datakaart ingedrukt en sleep deze om de volgorde aan te passen. De startpagina toont de gegevens daarna in de nieuwe volgorde, zodat vaak gebruikte informatie bovenaan kan worden geplaatst.

<img src={require("./img/configure_daily1.png").default} width="240"/>
<img src={require("./img/data_order.png").default} width="240"/>

---

## 6. Daggegevens

Het gedeelte **Daggegevens** toont de totale energiegegevens vanaf middernacht tot het huidige moment, zodat u het energieverbruik van uw huishouden kunt volgen.

<img src={require("./img/daily.png").default} width="240"/>

| Gegeven       | Beschrijving |
|---------------|-------------|
| Inkomsten     | Dagelijkse opbrengst op basis van de huidige elektriciteitsprijs. Tik op de prijskaart voor gedetailleerde statistieken. |
| Opwek     | Totale PV-opwekking van vandaag |
| Net           | Totale import en export van elektriciteit vandaag |
| Elektriciteit verbruiken      | Totale energieconsumptie van het huishouden vandaag |
| Tarief | Huidige import- en exporttarieven |
| Batterij      | Totale laad- en ontlaadenergie van de batterij vandaag |
| Zelfverbruik  | (PV-verbruik + PV → batterij) / opwekking: aandeel van zelfgebruikte zonne-energie |
| Zelfvoorzienend | (verbruik uit opwekking + verbruik uit batterij) / totaal verbruik: aandeel van eigen energievoorziening |

U kunt deze sectie aanpassen via [Dashboardconfiguratie](#5-dashboard).