---
title: Zuhause
description: Überwachen Sie die Energieflüsse Ihres Haushalts in Echtzeit und verfolgen Sie Stromerzeugung, Verbrauch sowie Batteriespeicherung.
---

# Zuhause

Die Seite **Zuhause** ist die Startseite für die Anzeige und Verwaltung Ihrer Energiedaten. Hier können Sie die Stromerzeugung, den Stromverbrauch, das Laden und Entladen der Batterie sowie den Strombezug und die Einspeisung ins Netz in Echtzeit überwachen. Der Stromfluss zeigt dabei anschaulich die aktuellen Energieflüsse in Ihrem Haushalt.

<img src={require("./img/home_intro.png").default} width="240"/>

| Nr. | Funktion                | Beschreibung                                                                                                                |
| --- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 1   | Zuhause                 | Zeigt den aktuellen Haushaltsnamen an. Tippen Sie darauf, um zwischen Ihren Haushalten zu wechseln oder diese zu verwalten. |
| 2   | +                       | Gerät hinzufügen                                                                                                            |
| 3   | Wetter                  | Zeigt die aktuellen Wetterbedingungen und die Temperatur am Standort des Haushalts an.                                      |
| 4   | Stromfluss    | Visualisiert die Energiequellen und Energieflüsse innerhalb des Haushalts in Echtzeit.                                      |
| 5   | Dashboard | Individuelle Anpassung des Stromfluss und der angezeigten Kennzahlen.                                            |
| 6   | Tagesdaten              | Anzeige der aktuellen Tagesstatistiken zu Energieerzeugung, Verbrauch und Erträgen.                                         |

## 1. Zuhause

Wenn Ihr Konto mehrere Haushalte verwaltet, können Sie hier jederzeit zwischen den einzelnen Haushalten wechseln.

### 1.1 Haushalt wechseln

Tippen Sie oben links auf den Haushaltsnamen, um alle in Ihrem Konto angelegten Haushalte anzuzeigen. Wählen Sie den gewünschten Haushalt aus, um dessen Energiedaten anzuzeigen.

<img src={require("./img/tap_myhome.png").default} width="240"/>
<img src={require("./img/select_home.jpg").default} width="240"/>

### 1.2 Haushaltsverwaltung

Tippen Sie unten in der Haushaltsliste auf **Verwalten**, um die Verwaltungsseite zu öffnen.

#### Haushalt hinzufügen

1. Tippen Sie auf der Seite „Haushaltsverwaltung“ oben rechts auf die Schaltfläche **+**.
2. Geben Sie die erforderlichen Haushaltsinformationen gemäß den Anweisungen ein.

Weitere Informationen finden Sie unter: [Haushalt hinzufügen](./profile.md#21-zuhause-hinzufügen)

#### Haushalt bearbeiten oder löschen

Wählen Sie auf der Seite „Haushaltsverwaltung“ den gewünschten Haushalt aus, um dessen Detailseite zu öffnen. Dort können Sie:

* Den Haushaltsnamen, die Adresse und weitere Einstellungen [bearbeiten](./profile.md#22-zuhause-bearbeiten).
* Den Haushalt [löschen](./profile.md#23-zuhause-löschen).

<img src={require("./img/select_home.jpg").default} width="240"/>
<img src={require("./img/manage_home.jpg").default} width="240"/>

## 2. Gerät hinzufügen

Tippen Sie auf der Startseite oben rechts auf die Schaltfläche **+**, um ein neues Gerät hinzuzufügen.

Detaillierte Anweisungen finden Sie unter: [Gerät hinzufügen](./add-device.md).

## 3. Wetter

Die Wetterkarte zeigt die aktuellen Wetterbedingungen und die aktuelle Temperatur am Standort Ihres Haushalts an. So können Sie die Energieerzeugung und den Energieverbrauch besser im Zusammenhang mit den Wetterbedingungen beurteilen.

## 4. Stromfluss

Der Stromfluss stellt die Energiequellen und Energieflüsse Ihres Haushalts in Echtzeit grafisch dar. Die Richtung der animierten Energieflüsse entspricht der tatsächlichen Energierichtung.

* Ansicht aktualisieren: Ziehen Sie die Startseite nach unten, um die Daten zu aktualisieren.
* Design ändern: Das Erscheinungsbild des Stromflusses kann über die [Dashboard](#5-dashboard) angepasst werden.
* Datenquelle festlegen: Die angezeigten Daten basieren auf den Einstellungen unter [Datenquellen](./profile.md#5-datenquelle). Tippen Sie auf die jeweiligen Felder, um die Konfiguration anzupassen.

<img src={require("./img/power_flow.png").default} width="240"/>

## 5. Dashboard

Tippen Sie auf <img src={require("./img/config_icon.png").default} width="25" style={{verticalAlign: "middle"}}/>, um die Konfigurationsseite zu öffnen und die Inhalte der Startseite individuell anzupassen.

Folgende Einstellungen sind möglich:

* Design des Stromflusses auswählen
* Sichtbare Tagesdatenkarten festlegen
* Reihenfolge der Datenkarten anpassen

<img src={require("./img/select_dashboard.png").default} width="240"/>
<img src={require("./img/dashboard.png").default} width="240"/>

### 5.1 Design des Stromflusses

Tippen Sie auf **Stromfluss**, um zwischen verschiedenen Darstellungsvarianten zu wählen.

<img src={require("./img/configure_power_flow.png").default} width="240"/>

### 5.2 Anzeige der Tagesdaten

Sie können auswählen, welche [Tagesdaten](#6-tagesdaten) auf der Startseite angezeigt werden.

#### Automatisch

Das System zeigt automatisch die Datenkarten an, die den aktuell konfigurierten Datenquellen entsprechen.

Für Daten ohne zugewiesene Datenquelle wird keine Karte angezeigt.

<img src={require("./img/configure_daily1.png").default} width="240"/>

#### Manuell

Wählen Sie die gewünschten Datenkarten manuell aus.

<img src={require("./img/configure_daily2.png").default} width="240"/>

### 5.3 Reihenfolge der Daten anpassen

Halten Sie eine Datenkarte gedrückt und ziehen Sie sie an die gewünschte Position, um die Reihenfolge anzupassen. Die Tagesdaten auf der Startseite werden anschließend entsprechend der neuen Reihenfolge angezeigt, sodass häufig genutzte Informationen schneller erreichbar sind.

<img src={require("./img/configure_daily1.png").default} width="240"/>
<img src={require("./img/data_order.png").default} width="240"/>

## 6. Tagesdaten

Der Bereich „Tagesdaten“ zeigt die kumulierten Energiedaten des aktuellen Tages bis zum aktuellen Zeitpunkt an und hilft Ihnen dabei, den Energieverbrauch Ihres Haushalts besser zu verstehen.

<img src={require("./img/daily.png").default} width="240"/>

| Datenpunkt     | Beschreibung                                                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ersparnisse         | Der auf Basis der aktuellen Strompreise berechnete [Tagesertrag](./report.md#13-gewinn). Tippen Sie auf die Strompreiskarte, um detaillierte Ertragsdaten anzuzeigen.     |
| Erzeugung      | Gesamte PV-Stromerzeugung des aktuellen Tages.                                                                                                                            |
| Stromnetz           | Kumulierte Strombezugs- und Einspeisemenge des aktuellen Tages.                                                                                                           |
| Verbrauch      | Gesamter Stromverbrauch des Haushalts am aktuellen Tag.                                                                                                                   |
| Tarif     | Aktuell eingestellter Bezugspreis und Einspeisevergütung.                                                                                                                 |
| Batterie       | Kumulierte Lade- und Entladeenergie der Batterie am aktuellen Tag.                                                                                                        |
| Eigenverbrauch | (Direkt durch PV gedeckter Verbrauch + PV-Ladeenergie für die Batterie) / PV-Erzeugung. Gibt an, welcher Anteil der erzeugten Solarenergie selbst genutzt wird.           |
| Autarkie   | (Verbrauch aus PV-Erzeugung + Verbrauch aus Batterieentladung) / Gesamtverbrauch. Gibt an, welcher Anteil des Stromverbrauchs durch selbst erzeugte Energie gedeckt wird. |

Die hier angezeigten Kennzahlen können über die [Dashboard](#5-dashboard) individuell angepasst werden.
