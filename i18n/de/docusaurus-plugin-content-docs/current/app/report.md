---
title: Bericht
description: Mehrdimensionale Energieanalyse zur Einsicht in Nutzungsverhalten und Einsparungen.
---

# Bericht

Die **Bericht**-Seite bietet eine umfassende Analyse der Energiedaten Ihres Hauses und unterstützt vier Zeitdimensionen: **Tag, Woche, Monat und Jahr**. Sie können über die Registerkarten oben zwischen den Dimensionen wechseln und den Zeitraum anpassen. Die Seite zeigt dynamisch die Daten für den ausgewählten Zeitraum an.

<img src={require("./img/report.jpg").default} width="240"/>

## 1. Datenindikatoren

### 1.1 Tagesdaten

| Parameter                | Beschreibung                                                                                                         |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| **Erzeugung**           | Insgesamt während des ausgewählten Zeitraums erzeugte PV-Energie.                                                  |
| **Verbrauch**            | Gesamtstromverbrauch im Haushalt innerhalb des ausgewählten Zeitraums, einschließlich PV-, Batterie- und Netzenergie. |
| **Vom Netz**             | Gesamter vom öffentlichen Netz bezogener Strom.                                                                    |
| **Ins Netz**             | Gesamter ins öffentliche Netz eingespeister Strom.                                                                 |
| **Entladung**             | Gesamte vom Batteriespeichersystem während des Zeitraums abgegebene Energie.                                       |
| **Ladung**              | Gesamte vom Batteriesystem während des Zeitraums gespeicherte Energie.                                             |
| **Solar**                | Echtzeit-PV-Leistung am ausgewählten Punkt im Diagramm.                                                            |
| **Last**                 | Echtzeit-Gesamtleistung aller Haushaltsgeräte am ausgewählten Punkt.                                              |
| **Vom Netz**             | Echtzeit vom öffentlichen Netz bezogene Leistung am ausgewählten Zeitpunkt.                                       |
| **Ins Netz**             | Echtzeit ins öffentliche Netz eingespeiste Leistung am ausgewählten Zeitpunkt.                                     |
| **Ladung**                | Echtzeit-Batterieladeleistung am ausgewählten Punkt im Diagramm.                                                   |
| **Entladung**             | Echtzeit-Batterieentladeleistung am ausgewählten Punkt im Diagramm.                                                |
| **SOC**                  | Batterieladezustand (%) zum ausgewählten Zeitpunkt.                                                               |
| **Gewinn**            | Geschätzte Einnahmen basierend auf dem geltenden Stromtarif. Siehe Formeln unten.                                  |
| **Umweltauswirkung**     | Zeigt Kennzahlen wie CO₂-Einsparung, äquivalentes Pflanzen von Bäumen und Kohleeinsparung an.                     |

<img src={require("./img/report_daily1.jpg").default} width="240"/>
<img src={require("./img/report_daily2.jpg").default} width="240"/>

### 1.2 Wochen-/Monats-/Jahresdaten

| Parameter                | Beschreibung                                                                                                         |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| **Erzeugung**           | Insgesamt während des ausgewählten Zeitraums erzeugte PV-Energie.                                                  |
| **Verbrauch**            | Gesamtstromverbrauch im Haushalt innerhalb des ausgewählten Zeitraums, einschließlich PV-, Batterie- und Netzenergie. |
| **Vom Netz**             | Gesamter vom öffentlichen Netz bezogener Strom.                                                                    |
| **Ins Netz**             | Gesamter ins öffentliche Netz eingespeister Strom.                                                                 |
| **Entladung**             | Gesamte vom Batteriespeichersystem während des Zeitraums abgegebene Energie.                                       |
| **Ladung**              | Gesamte vom Batteriesystem während des Zeitraums gespeicherte Energie.                                             |
| **Erzeugung**           | PV-Energie, die innerhalb des ausgewählten benutzerdefinierten Bereichs im Diagramm erzeugt wurde.                 |
| **Verbrauch**            | Gesamtstromverbrauch im Haushalt innerhalb des ausgewählten benutzerdefinierten Bereichs.                           |
| **Vom Netz**             | Vom öffentlichen Netz innerhalb des ausgewählten Bereichs bezogener Strom.                                         |
| **Ins Netz**             | Ins Netz innerhalb des ausgewählten Bereichs eingespeister Strom.                                                  |
| **Ladung**              | Batteriestrom, der innerhalb des ausgewählten benutzerdefinierten Bereichs gespeichert wurde.                      |
| **Entladung**             | Vom Haushalt genutzte Batteriestrommenge innerhalb des ausgewählten benutzerdefinierten Bereichs.                   |
| **Gewinn**            | Geschätzte Einnahmen basierend auf dem geltenden Stromtarif. Siehe Formeln unten.                                  |
| **Umweltauswirkung**     | Zeigt Kennzahlen wie CO₂-Einsparung, äquivalentes Pflanzen von Bäumen und Kohleeinsparung an.                     |

<img src={require("./img/report_week1.jpg").default} width="240"/>
<img src={require("./img/report_week2.jpg").default} width="240"/>

:::info
Angezeigte Parameter können je nach den mit dem Haus verbundenen Geräten variieren. Bitte beachten Sie Ihre tatsächliche Benutzeroberfläche.
:::

### 1.3 Gewinn

Der Gewinn setzt sich aus zwei Teilen zusammen: **Eigenverbrauchs­ersparnis** und **Verkaufserlös**, berechnet auf Grundlage des von Ihnen im Zuhause konfigurierten [Stromtarifplans](./profile.md#3-tarif).


1. <u>**Eigenverbrauchs­ersparnis** = Eingesparte Energiemenge × **Stromankaufpreis**</u>  

   Gesparte Energie wird nach einer der folgenden Methoden berechnet, abhängig von den verfügbaren Daten:
   - Wenn sowohl Verbrauchs- als auch Netzimportdaten vorliegen:  
     **Gesparte Energie = Gesamtverbrauch − Netzimport**
   - Wenn die oben genannten Daten nicht verfügbar sind:  
     **Gesparte Energie = Erzeugung + Batterieentladung − Batterieladung**

2. <u>**Verkaufserlös** = Netzexportmenge × **Stromverkaufspreis**</u>  
   Wenn kein Export stattfindet, sind die Exporterlöse null.

3. <u>**Gesamtgewinn** = Eigenverbrauchs­ersparnis + Verkaufserlös</u>

Sie können den Abschnitt Einnahmen antippen, um die Seite **Einnahmenstatistik** zu öffnen, wo Sie:
- Einnahmen nach **Tag, Woche, Monat oder Jahr** einsehen können.  
- Zwischen **Gesamtgewinn** und **Verkaufserlös** wechseln können.  
- Den für die Berechnung verwendeten Tarifplan einsehen und antippen, um ihn zu ändern.  

<img src={require("./img/earnings.jpg").default} width="240"/>

## 2. Funktionen

### 2.1 Erweiterter Modus

Tippen Sie auf das <img src={require("./img/config_icon.png").default} width="25" style={{verticalAlign: "middle"}}/> Symbol oben rechts, um in den **Erweiterten Modus** zu wechseln, der eine anschaulichere Visualisierung der Energieflüsse bietet.

<img src={require("./img/mode_selection.jpg").default} width="240"/>
<img src={require("./img/advanced_mode.jpg").default} width="240"/>

### 2.2 Datenansichten

Jede Zeitdimension bietet eine **Übersicht** sowie detaillierte Ansichten für **Last**, **Solar**, **Batterie** und **Stromnetz**. Tippen Sie auf die entsprechenden Symbole, um zwischen den Datenansichten zu wechseln.

<img src={require("./img/report_overview.jpg").default} width="240"/>

### 2.3 Diagrammanzeige-Steuerung

Oberhalb des Diagrammbereichs können Sie auf jede Indikator-Schaltfläche tippen, um die entsprechende Datenlinie **ein- oder auszublenden**. Dies hilft, sich auf bestimmte Kennzahlen für eine klarere Analyse zu konzentrieren.

<img src={require("./img/chart_control.jpg").default} width="240"/>
