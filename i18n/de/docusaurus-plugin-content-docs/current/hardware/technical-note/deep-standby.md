---
title: Tiefstandby und Normaler Standby
description: Einführung in die Tiefstandby-Funktion, Auslösebedingungen und Hinweise zur Verwendung von Energiespeichergeräten
---

# Tiefstandby und Normaler Standby

## 1. Übersicht der Standby-Modi

Wenn ein Energiespeichergerät vorübergehend keinen Lade- oder Versorgungsbedarf erkennt, wechselt das System in den Standby-Modus, um den Energieverbrauch des Geräts zu reduzieren. Im Standby-Modus überwacht das Gerät weiterhin den Batteriestatus und nimmt den Betrieb automatisch wieder auf, sobald ein Lade- oder Versorgungsbedarf erkannt wird.

Je nach Energiesparstufe werden die Standby-Modi in folgende Zustände unterteilt:

- **Normaler Standby**: Geeignet für kurze Zeiträume ohne Lade- oder Entladebedarf. Das Gerät behält eine schnelle Reaktionsfähigkeit.
- **Tiefstandby**: Geeignet für längere Zeiträume ohne Lade- oder Entladebedarf. Durch das Deaktivieren bestimmter nicht notwendiger Funktionen wird der Energieverbrauch weiter reduziert.

Der Tiefstandby ist ein weiterführender Energiesparmodus auf Basis des Normalen Standby und bedeutet nicht, dass das Gerät ausgeschaltet ist.


## 2. Unterschiede zwischen Tiefstandby und normalem Standby

| Vergleichspunkt | Normaler Standby | Tiefstandby |
| -------------- | ---------------- | ----------- |
| Anwendungsszenario | Kein Lade- oder Entladebedarf für kurze Zeit | Kein Lade- oder Entladebedarf über längere Zeit |
| Energieverbrauch | Niedrig | Noch niedriger |
| Systemstatus | Der Wechselrichter bleibt im Standby-Betrieb | Der Wechselrichter wechselt in den Schlafmodus |
| Wiederherstellungsgeschwindigkeit | Schneller | Relativ langsamer |
| EPS-Umschaltzeit | Ca. 100 ms | Ca. 1–2 s |

👉 Weitere Informationen zum Energieverbrauch: [Standby-Energieverbrauch](../technical-note/standby-power.md#leistungsaufnahme-in-verschiedenen-betriebszuständen)

> Hinweis: Da der Tiefstandby vor der Wiederaufnahme des normalen Betriebs bestimmte Funktionen wieder aktivieren muss, ist die Umschaltzeit des EPS (Notstromversorgung) nach dem Verlassen des Tiefstandbys etwas länger als im normalen Standby.


## 3. Einführung in den Tiefstandby

### 3.1 Was ist Tiefstandby?

Der Tiefstandby ist ein Betriebszustand mit niedrigem Energieverbrauch. Wenn das Gerät über einen längeren Zeitraum keinen Ladebedarf oder Ausgangsbedarf erkennt, wechselt das System automatisch in den Tiefstandby, um den Eigenverbrauch des Geräts zu reduzieren.

Im Tiefstandby:

- Bleiben die Batterieschutzfunktionen weiterhin aktiv;
- Überwacht das Gerät weiterhin externe Eingänge und den Energiebedarf;
- Nimmt das Gerät den normalen Betrieb automatisch wieder auf, sobald ein Bedarf erkannt wird.


### 3.2 Warum wechselt das Gerät in den Tiefstandby?

Auch wenn ein Energiespeichergerät weder lädt noch Energie liefert, benötigt es eine geringe Menge Energie, um den Systembetrieb aufrechtzuerhalten.

Beispiele:

- Nachts gibt es keine PV-Erzeugung und keine Lastnutzung;
- Das Gerät bleibt über einen längeren Zeitraum ungenutzt.

Der Tiefstandby reduziert den Standby-Energieverbrauch in diesen Szenarien mit geringer Nutzung und hilft dadurch, den Batterieverbrauch zu verringern.


### 3.3 Tiefstandby konfigurieren

Die Tiefstandby-Strategie unterstützt die Konfiguration eines Aktivierungszeitraums:

- Start- und Endzeit können eingestellt werden;
- Einstellungen über Mitternacht hinweg werden unterstützt;
- Standardmäßig ist der Tiefstandby ganztägig aktiviert (00:00–23:59).

Einstellvorgang:

1. Öffnen Sie die Geräteeinstellungen und wählen Sie **Tiefstandby**;
2. Legen Sie den Gültigkeitsbeginn für den Tiefstandby fest.

<img src={require("../energy-mode/img/device_setting.png").default} width="240"/>
<img src={require("./img/deep_standby.png").default} width="240"/>
<img src={require("./img/deep_standby_time.png").default} width="240"/>

Nach Abschluss der Konfiguration wechselt das Gerät automatisch in den Tiefstandby, sobald die entsprechenden Bedingungen erfüllt sind.


### 3.4 Tiefstandby verlassen

Das Gerät verlässt den Tiefstandby automatisch, wenn eine der folgenden Bedingungen erkannt wird:

- Ladebedarf wird erkannt;
- Versorgungsbedarf wird erkannt;
- Eine externe Energiequelle wird erkannt (z. B. PV-Eingang oder AC-Eingang);
- Eine Taste am Gerät wird betätigt.

Nach dem Verlassen des Tiefstandbys kehrt das Gerät in den normalen Betriebsmodus zurück.