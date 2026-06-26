---
title: CT-monitoring op meerdere punten
description: Door drie CT’s te installeren op de PV-, net-, verbruiks- en batterijzijde van het systeem kunnen vermogen- en energiegegevens op verschillende punten worden bewaakt en gemeten.
---

# CT-monitoring op meerdere punten in een driefasige energiemeter

In een driefasig systeem wordt elke fase (L1, L2 en L3) doorgaans uitgerust met een CT (stroomtransformator) om het totale vermogen en de energiewaarden van het systeem te meten.

De drie CT’s hoeven echter niet per se op de drie fasen te worden geïnstalleerd. Afhankelijk van de toepassing kunnen ze ook worden geplaatst in verschillende circuits, zoals PV, net, verbruik of batterij, zodat tegelijkertijd gegevens van verschillende systeempunten kunnen worden gemeten.

---

## 1. Ondersteunde meters

| Merk      | Model                                                         |
| --------- | ------------------------------------------------------------- |
| INDEVOLT  | SMD3                                                          |
| SOLARMAN  | MR3-D5-WR<br />MR3-D4-WE-B<br />MR3-D5-W<br />MR3-D4-WRE-B    |
| Shelly    | Shelly 3EM<br />Shelly Pro 3EM-400<br />Shelly Pro 3EM-3CT63 |

---

## 2. CT-installatieposities

De meetgegevens verschillen afhankelijk van de installatiepositie van de CT.

| CT-positie | Overeenkomende gegevens                          | Typische toepassing |
|------------|--------------------------------------------------|---------------------|
| PV-zijde   | PV-opwekkingsvermogen                            | Zonneproductie monitoren |
| Netzijde   | Import- / exportvermogen (afhankelijk van stroomrichting) | Netinteractie monitoring (terugleverbeveiliging / import-export) |
| Verbruikszijde | Verbruiksvermogen                           | Energieverbruik monitoren |
| Batterijzijde | Laad- / ontlaadvermogen                      | Energieopslag monitoren |

CT’s op verschillende posities geven tegelijkertijd verschillende waarden weer. Samen geven deze gegevens een compleet beeld van de systeemwerking.

---

## 3. Installatierichting van de CT

De pijl op de CT-behuizing geeft de referentierichting van de stroom aan. Een verkeerde installatie veroorzaakt geen schade aan het apparaat, maar keert wel de polariteit van het vermogen om.

Bijvoorbeeld: stroomafname van het net kan worden weergegeven als teruglevering, en het laden van de batterij kan als ontladen worden weergegeven.

Bij afwijkende richtingswaarden controleer:
- of de CT omgekeerd is geïnstalleerd
- of de CT-richting correct is ingesteld in de app

:::note
Als de fysieke installatierichting niet eenvoudig kan worden aangepast, kan de richting ook in de app worden gecorrigeerd.
:::

---

## 4. App-configuratie

### 4.1 CT-installatiepositie instellen

1. Ga naar de meterinstellingen en kies **Meterconfiguratie** > **Enfase systeem**.
2. Wijs elke van de drie CT’s toe aan de werkelijke installatiepositie (PV, Net, Last of Batterij).
3. Stel de CT-richting in volgens de werkelijke pijlrichting. Gebruik de afbeeldingen om te controleren of de richting overeenkomt met de installatie.

Na configuratie kunnen de gegevens van elke CT afzonderlijk worden bekeken op de meterpagina, zoals vermogen, energie, stroom en spanning.

<img src={require("./img/ct_direction.png").default} width="240"/>
<img src={require("./img/ct_location.png").default} width="240"/>
<img src={require("./img/meter_data.png").default} width="240"/>

### 4.2 Bron voor micro-opslagbelasting instellen (optioneel)

Als u wilt dat het micro-opslagsysteem automatisch de bedrijfsstatus aanpast op basis van de belasting, kunt u de werkelijke belasting-CT-fase selecteren als referentie in **Belasting Instellingen** > **Meter**.

<img src={require("./img/load_settings.png").default} width="240"/>
<img src={require("./img/load_meter.png").default} width="240"/>

---

## 5. Controle van de configuratie

Na de configuratie kunt u de werking van het systeem als volgt controleren:
- Wanneer PV stroom opwekt, moet het PV-vermogen positief zijn
- Bij netverbruik moet import van het net worden weergegeven
- Tijdens het laden van de batterij moet laadvermogen zichtbaar zijn
- Wanneer belastingen actief zijn, moet het verbruiksvermogen toenemen

Controleer bij afwijkende of omgekeerde waarden:
- of de CT’s correct zijn geïnstalleerd
- of de installatierichting correct is
- of de app-configuratie overeenkomt met de fysieke installatie
- of de CT’s correct zijn vastgeklemd en volledig gesloten