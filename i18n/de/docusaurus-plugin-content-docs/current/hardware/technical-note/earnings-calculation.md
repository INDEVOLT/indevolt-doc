---
title: Hinweise zur Berechnung der Erträge
description: Erfahren Sie, wie das Indevolt-Mikrospeichersystem die Erträge aus Photovoltaik, Energiespeicherung und den Gesamtertrag des Haushalts berechnet.
---

# Hinweise zur Berechnung der Erträge

In der Indevolt App werden Ihnen möglicherweise Daten wie „Heutiger Ertrag“, „PV-Ertrag“ oder „Speicherertrag“ angezeigt. Aber wie werden diese Zahlen eigentlich berechnet?

Vereinfacht ausgedrückt: Das System vergleicht, wie viel Sie ohne Photovoltaik und Speicher ausgeben müssten, mit dem, was Sie jetzt tatsächlich ausgeben. Die Differenz ist Ihr erzielter Ertrag.

## 1. Woher kommen die Erträge?

Nach der Installation eines Photovoltaik- und Speichersystems setzen sich Ihre Erträge hauptsächlich aus drei Quellen zusammen:

- 💰 **Weniger Strombezug**: Der direkt im Haushalt genutzte Solarstrom oder die Entladung der Batterie bei Bedarf reduzieren den Strombezug aus dem Netz.
- 💵 **Stromeinspeisung**: Nicht sofort verbrauchter Strom wird ins Netz eingespeist und bringt Einspeisevergütung.
- 🧠 **Intelligentere Energienutzung**: Der Speicher bewahrt den Strom für Zeiten mit höherem Bedarf oder höheren Strompreisen auf – quasi „günstig speichern, teuer nutzen“.

## 2. Wie berechnet das System die Erträge?

Das System stellt sich drei Szenarien für den Haushaltsstromverbrauch vor und vergleicht sie miteinander, um den Anteil von Photovoltaik und Speicher am jeweiligen Ertrag zu ermitteln.

### Vergleichsszenarien

| Vergleichsszenario                             | Annahme                               | Bedeutung der Kosten                                         |
| :--------------------------------------------- | :------------------------------------ | :----------------------------------------------------------- |
| ① Ohne PV und Speicher                         | Keine Photovoltaik, kein Speicher     | Der gesamte Haushaltsstrom muss aus dem Netz bezogen werden – das wären die Kosten. |
| ② Nur PV                                       | Nur Photovoltaik, kein Speicher       | Solarstrom deckt den Haushaltsbedarf, aber ohne Batterieunterstützung – das sind die dann anfallenden Kosten. |
| ③ Mit PV und Speicher (tatsächliche Situation) | Photovoltaik + Speicher (Ist-Zustand) | Die tatsächlichen Kosten ergeben sich aus dem aktuellen Strombezug und der Stromeinspeisung. |

**Ertragsformeln:**

- **PV-Ertrag** = Stromkosten bei ① − Stromkosten bei ② (Ersparnis durch die PV-Anlage)
- **Speicherertrag** = Stromkosten bei ② − Stromkosten bei ③ (zusätzliche Ersparnis durch die Batterie)
- **Gesamtertrag des Haushalts** = PV-Ertrag + Speicherertrag

## 3. Zwei Betrachtungsweisen des Gesamtertrags

Der Gesamtertrag kann auf zwei Arten dargestellt werden – das Ergebnis ist identisch, je nachdem, welche Darstellung Sie bevorzugen.

|              | PV-Ertrag + Speicherertrag                                   | Ersparnis beim Strombezug + Einspeisevergütung               |
| :----------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| Geeignet für | Aufschlüsselung der Beiträge von PV und Batterie; Darstellung auf den Detailseiten für PV und Speicher; Bewertung der Investitionsrendite und Vergleich von Energiestrategien | Übersicht über reduzierte Stromkosten und Einnahmen aus der Einspeisung; Abgleich mit der Stromrechnung |

Die Formel „Ersparnis beim Strombezug + Einspeisevergütung“ kann auch geschrieben werden als:

**Gesamtertrag = Kosten ohne Photovoltaik und Speicher − tatsächliche aktuelle Kosten**

Dabei gilt: **Tatsächliche aktuelle Stromkosten = Bezugsmenge × Bezugspreis − Einspeisemenge × Einspeisevergütung**.

Für Haushalte, die kaum Strom ins Netz einspeisen, ist die Einspeisevergütung 0, und der Gesamtertrag entspricht in etwa der Ersparnis beim Strombezug.

> **Hinweis**
> Die Einspeisevergütung ist nur ein Teil des Ertrags. Der Solarstrom, der direkt im Haushalt verbraucht wird, und die durch Batterieentladung vermiedenen Netzbezüge – all diese „weniger gekauften“ Kilowattstunden sparen ebenfalls Geld und sind Teil des Ertrags.

## 4. Berechnungsbeispiel

Am Beispiel des 20. August 2026 zeigen wir Ihnen anhand von echten Daten aus der App, wie die Ertragsberechnung abläuft.

### Ertragsergebnisse anzeigen

Auf der Seite „Ertragsrechner“ in der App sehen Sie den Tagesertrag:

<img src={require("./img/profit_calculator.png").default} width="240"/>

- PV-Ertrag: 0,39 €
- Speicherertrag: 0,12 €
- Gesamtertrag: 0,51 €

Berechnungszusammenhang: **0,39 + 0,12 = 0,51**, der Gesamtertrag ist also die Summe aus PV-Ertrag und Speicherertrag.

### Berechnungsablauf

Das System ermittelt die Erträge durch den Vergleich der drei Szenarien:

| Position       | Berechnungsweise                                       | Ergebnis                 |
| :------------- | :----------------------------------------------------- | :----------------------- |
| PV-Ertrag      | Stromkosten ohne PV − Stromkosten mit nur PV           | 0,39 €                   |
| Speicherertrag | Stromkosten mit nur PV − Stromkosten mit PV + Speicher | 0,12 €                   |
| Gesamtertrag   | PV-Ertrag + Speicherertrag                             | 0,39 + 0,12 = **0,51 €** |

> Die genauen Stromkosten der drei Szenarien werden im System hinter den Kulissen simuliert und in der App nicht direkt angezeigt.

### Alternative Betrachtungsweise

Der Gesamtertrag entspricht auch der Ersparnis beim Strombezug zuzüglich der Einspeisevergütung. Dazu werden die Daten für Bezugsmenge, Einspeisemenge und die jeweiligen Strompreise benötigt.

Auf dem Reiter „Netz“ der Statistikseite sehen Sie die Bezugs- und Einspeisemengen des Tages:

<img src={require("./img/grid.png").default} width="240"/>

- Bezugsmenge: 3,49 kWh
- Einspeisemenge: 615,07 kWh

Auf der Seite „Historische Strompreise“ sehen Sie die Bezugs- und Einspeisepreise des Tages:

<img src={require("./img/historical_tariffs.png").default} width="240"/>

- Bezugspreis: 0,2295 GBP/kWh
- Einspeisevergütung: 15,83 ct/kWh

Tatsächliche aktuelle Stromkosten = Bezugsmenge × Bezugspreis − Einspeisemenge × Einspeisevergütung.

Gesamtertrag = Stromkosten ohne PV und Speicher − tatsächliche aktuelle Stromkosten = Ersparnis beim Strombezug + Einspeisevergütung. Beide Berechnungswege führen zum gleichen Ergebnis.

> **Hinweis**: Bei den in der App angezeigten Erträgen handelt es sich um Schätzwerte, die von der endgültigen Rechnung des Energieversorgers abweichen können. Weitere Informationen hierzu finden Sie in den FAQ weiter unten.

## 5. Berechnung bei zeitvariablen Strompreisen

Wenn in Ihrer Region zu unterschiedlichen Tageszeiten unterschiedliche Strompreise gelten (zeitvariable Tarife), berechnet das System die Kosten für jedes Zeitintervall separat und summiert sie anschließend:

**Tatsächliche Kosten eines Zeitintervalls = Bezugsmenge in diesem Intervall × Bezugspreis in diesem Intervall − Einspeisemenge in diesem Intervall × Einspeisevergütung in diesem Intervall**

## 6. Wann kann die Ertragsberechnung ungenau sein?

In folgenden Fällen kann das System die Erträge nicht genau berechnen:

- Vorhandene PV-Erzeugung wird nicht vom System erfasst.
- Es liegen keine eigenständigen, präzisen Daten zur Batterieleistung oder -kapazität vor.
- Bezugspreis oder Einspeisevergütung sind nicht vollständig konfiguriert.
- Daten von wichtigen Geräten fehlen oder die Messrichtung ist falsch konfiguriert.

## 7. FAQ

### Warum wird nicht einfach „erzeugte Menge × Strompreis“ gerechnet?

Der von der Photovoltaikanlage erzeugte Strom kann direkt verbraucht, in der Batterie gespeichert oder ins Netz eingespeist werden – jede dieser Nutzungsarten hat einen anderen Wert. Daher lässt sich der Ertrag nicht mit einer einfachen Multiplikation berechnen.

### Warum kann ich den Speicherertrag nicht selbst nachvollziehen?

Der Speicherertrag ergibt sich aus dem Vergleich mit dem Szenario „nur Photovoltaik, kein Speicher“. Dieses Szenario existiert in der Realität nicht separat und muss vom System auf Basis der Gerätedaten simuliert werden.

### Warum ist die Einspeisevergütung nicht gleich dem Gesamtertrag?

Die Einspeisevergütung ist nur ein Teil des Ertrags. Zusätzlich sparen Sie Geld durch den direkt verbrauchten Solarstrom und die durch Batterieentladung vermiedenen Netzbezüge – auch das ist Ertrag.

### Warum weichen die Erträge in der App von der Stromrechnung ab?

Die App zeigt den Energieertrag auf Basis der Gerätedaten und der konfigurierten Strompreise an. Die Stromrechnung des Versorgers kann jedoch zusätzliche Posten wie Grundgebühren, Steuern, gestaffelte Tarife, Subventionen oder andere Abrechnungsbestandteile enthalten. Daher können die Werte voneinander abweichen.

### Warum ändert sich der Tagesertrag später?

Häufige Ursachen sind nachträglich hochgeladene Gerätedaten, aktualisierte Strompreise oder eine nachgelagerte Neuberechnung durch das System. Bitte ziehen Sie für die endgültige Betrachtung stets die neu berechneten Werte heran, sobald alle Daten vollständig vorliegen.

### Warum ist der Ertrag manchmal negativ?

In der Regel liegt dies an einem „teuer laden, günstig entladen“-Szenario – wenn also zu einem hohen Strompreis aus dem Netz geladen und zu einem niedrigeren Preis wieder entladen wird.