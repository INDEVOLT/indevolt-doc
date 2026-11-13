---
title: Schnellstart
description: Installations- und Erstinbetriebnahme-Guide für Indevolt Energiespeicher
---

# Schnellstart

Der Inhalt dieses Dokuments dient als allgemeine Benutzeranleitung. **Unterschiede der Modelle sind im gesamten Dokument als 💡 Hinweise markiert.** Bitte ordnen Sie die Hinweise entsprechend dem von Ihnen erworbenen Modell zu.

:::warning

Lesen Sie vor der Inbetriebnahme zunächst die **[Sicherheitshinweise](./safety.md)**, um Ihre Sicherheit zu gewährleisten.

:::

---

## Packliste

**Powermodul :**

<img src={require("./img-de/power-packing-list.png").default} width="800"/>

**Erweiterungsakku (optional) :**

<img src={require("./img-de/battery-packing-list.png").default} width="800"/>

> 💡 **Hinweis zum Modellunterschied**: Modelle **ohne PV-Anschluss** (AC-/Eco-Modelle) enthalten dieses MC4-Steckverbinder-Abziehwerkzeug.

---

## Installation

### Installationsort auswählen

- Die Module dürfen nicht in der Nähe von direkter Sonneneinstrahlung, Feuer oder explosiven Materialien installiert werden.
- Stellen Sie sicher, dass der Standort vor potenziellen Gefahren wie Überschwemmungen geschützt ist.
- Der Einsatz wird für Höhenlagen unter 2000 m empfohlen.

### Abstand messen

Wählen Sie ausreichend Platz für die Wärmeableitung und die Sicherheitsisolierung.

1. Wählen Sie den geeigneten Installationsbereich entsprechend der zu installierenden Gerätekonfiguration aus.

<img src={require("./img-de/system-size.png").default} width="720"/>

> 💡 **Hinweis zum Modellunterschied**: Andere Serien verwenden andere Erweiterungsakkus und Kapazitätswerte:
>
> | Powermodul | Erweiterungsakku |
> | -------------------------- | ----------------- |
> | SolidFlex 2000/Eco | 1792 Wh |
> | PowerFlex 2000/Eco | 2009 Wh |
> | SolidFlex 3000 Hybrid/AC | 1792 Wh |
> | SolidFlex 3000 Hybrid/AC Pro | 2009,6 Wh |
> | PowerFlex 3000 Hybrid/AC | 2016 Wh |
>
> | Akkumodul | Erweiterungsakku |
> | --- | --- |
> | SFA 1800 | 1792 Wh |
> | SFA 3600 | 3584 Wh |
> | PFA 2000 | 2016 Wh |
> | PFA 4000 | 4032 Wh |

2. Gerätegröße:

<img src={require("./img-de/device-size.png").default} width="600"/>



Hinweis: Die folgenden Komponenten sind nicht in diesem Paket enthalten. Bitte stellen Sie sicher, dass sie vor der Installation und der elektrischen Verbindung bereitstehen.

<img src={require("./img-de/tools.png").default} width="480"/>

### Installation

Die folgenden Schritte beschreiben die Installation eines Powermoduls und zweier Erweiterungsakkus als Beispiel.

1. Montieren Sie vier Stützfüße an der Unterseite des Erweiterungsakkus.
   <img src={require("./img-de/installation-step1.png").default} width="360"/>

2. An der Rückseite des Geräts (Kühlkörperbereich) muss ein Mindestabstand von 30 mm eingehalten werden, um eine ausreichende Belüftung und eine effiziente Wärmeableitung zu gewährleisten.
   <img src={require("./img-de/installation-step2.png").default} width="360"/>

3. Stellen Sie die Höhe der vier Stützfüße an der Unterseite des Geräts so ein, dass das Gerät waagerecht steht. Verwenden Sie zur Kalibrierung eine Wasserwaage.
   <img src={require("./img-de/installation-step3.png").default} width="480"/>

4. Entfernen Sie die untere Schutzkappe des Powermoduls sowie die Schutzkappen an der Ober- und Unterseite des mittleren Akkupacks.

   <img src={require("./img-de/installation-step4.png").default} width="600"/>

   :::warning

   Achten Sie beim Einbau des untersten Akkupacks darauf, dass der Gummistopfen an seinem Platz bleibt, um Wasserschäden zu vermeiden.

   Bitte seien Sie vorsichtig, dass Sie die Schutzkappe der untersten Erweiterungsbatterie nicht entfernen, um Schäden am Gerät zu vermeiden!
   :::

5. Stapeln Sie die Akkupacks übereinander, wobei das Powermodul oben liegt. Verbinden Sie anschließend die entsprechenden Anschlüsse miteinander.
   <img src={require("./img-de/installation-step5.png").default} width="300"/>

6. Befestigen Sie die L-förmige Wandhalterung an beiden Seiten des ersten Akkupacks unter dem Powermodul mit M4-Kreuzschlitzschrauben.
   <img src={require("./img-de/installation-step6.png").default} width="300"/>

7. Nachdem das Powermodul und der Akkumodul installiert sind, fixieren Sie die beiden Module ebenfalls mit M4-Kreuzschlitzschrauben.

   <img src={require("./img-de/installation-step7.png").default} width="480"/>

8. Markieren Sie die Position der Bohrlöcher auf beiden Seiten und verwenden Sie einen Bohrer mit einem φ8-Bohrer und bohren Sie 60 mm tief.

   <img src={require("./img-de/installation-step8.png").default} width="480"/>

9. Verwenden Sie einen Hammer, um die Kunststoffhülse der M5×60-Spaxschraube in das Loch einzuschlagen, und ziehen Sie dann die M5×60-Spaxschraube mit einem Kreuzschlitzschraubendreher am L-förmigen Wandmontagehalter fest.
   <img src={require("./img-de/installation-step9.png").default} width="480"/>

   Das Produkt enthält einen Doppelschutztransformator, der den Sicherheitsanforderungen entspricht, ohne dass eine Messung des Isolationswiderstands der Anlage oder eine Erkennung von Fehlerströmen in der Anlage erforderlich ist.

:::info

Der Netzanschluss muss an eine geerdete Steckdose angeschlossen werden, andernfalls besteht die Gefahr eines elektrischen Schlags. Alternativ sollte das Gehäuse geerdet werden. Der Erdungsanschluss ist unten dargestellt.

<img src={require("./img-de/installation-step10.png").default} width="240"/>

:::

---

## Elektrischer Anschluss

### Verkabelung der Anschlüsse

:::info 💡 Hinweis zum Modellunterschied

Die folgenden PV-Anschlussanweisungen gelten nur für Nicht-Eco- und Nicht-AC-Modelle.

Eco- und AC-Modelle, die keinen PV-Anschluss haben, sind in diesem Abschnitt nicht enthalten.

:::

Die folgenden Schritte beschreiben die Installation eines Systems mit vier Solarpanelen als Beispiel.

<img src={require("./img-de/connect-cables.png").default} width="960"/>

:::info 💡 Hinweis zum Modellunterschied: Einspeiseleistung

Die Standard-Wechselstromausgangsleistung des Wechselrichters ist auf 800 W begrenzt. Wenn Sie diesen Wert erhöhen möchten, muss die Anlage von einem qualifizierten Elektriker überprüft werden, um die Einhaltung der geltenden Sicherheitsanforderungen zu bestätigen. Nach dieser Überprüfung können Sie über die INDEVOLT-Anwendung einen Antrag auf Erhöhung der Leistung auf 3000 W stellen.

Die Handbücher von **SolidFlex 2000/Eco und PowerFlex 2000/Eco** beschreiben denselben Ablauf mit einer Grenze, die stattdessen auf **2400 W** erhöht werden kann.

:::

#### Schritt 1: Netz anschließen

1. Verbinden Sie das Strommodul mit einer Steckdose zu Hause, indem Sie das mitgelieferte Netzkabel mit Sicherheitsstecker verwenden.

<img src={require("./img-de/connect-grid.png").default} width="720"/>

#### Schritt 2: Solarpanelen anschließen

Verfügt über vier unabhängige Maximum Power Point Tracking (MPPT)-Einheiten. Jeder Photovoltaik-Eingang arbeitet als separater MPPT.

- Leerlaufspannung (Voc): < 60 V pro PV-Eingang
- Kurzschlussstrom (Isc): < 20 A pro PV-Eingang

> 💡 **Hinweis zum Modellunterschied**: Die Handbücher von SolidFlex 3000 Hybrid / SolidFlex 3000 Hybrid Pro geben an: „Kurzschlussstrom (Isc): < 22 A pro PV-Eingang“.

- Für einen optimalen Wirkungsgrad empfehlen wir Solarkabel mit einer maximalen Länge von 3 m, um Übertragungsverluste zu reduzieren.

- Der Pluspol (+) und der Minuspol (–) eines Moduls müssen an denselben PV-Eingang angeschlossen werden.

  <img src={require("./img-de/connect-pv.png").default} width="480"/>

:::warning

HINWEIS:
Wenn das Akkupack nicht ordnungsgemäß funktioniert, wird das System gesperrt. Diese Sperre kann nicht automatisch wiederhergestellt werden und erfordert einen professionellen Kundendienst. Die Systemfunktion wird wiederhergestellt, nachdem von einem Fachmann bestätigt wurde, dass die Anforderungen erfüllt sind.

:::

### Elektrizitätssystem

Das Gerät kann in ein- oder dreiphasigen Haushaltssystemen verwendet werden:

<img src={require("./img-de/electricity-system.png").default} width="720"/>

### AC-gekoppelte Verbindung

Wenn Sie bereits einen Mikro-Wechselrichter besitzen, können Sie den Ausgang des Mikro-Wechselrichters über die AC-Kopplung mit dem Backup-Anschluss des Geräts koppeln. In diesem Fall wird die PV-Leistung über den Mikro-Wechselrichter an die Last weitergeleitet. Wenn die Leistung 3000 W überschreitet (kann über die APP angepasst werden), wird das Gerät vom Mikro-Wechselrichter getrennt.

Hinweis: AC-/Eco-Modelle unterstützen lediglich den Anschluss an Solarmodule über Mikro-Wechselrichter und verfügen nicht über einen PV-Anschluss.

> 💡 **Hinweis zum Modellunterschied**: Beim SolidFlex 2000/Eco und PowerFlex 2000/Eco beträgt der Trennschwellenwert dieser AC-gekoppelten Verbindung **2400 W** statt 3000 W (kann über die APP angepasst werden).

<img src={require("./img-de/AC-coupled Connection 1.png").default} width="480"/>

<img src={require("./img-de/AC-coupled Connection 2.png").default} width="480"/>

---

## Einschalten

Suchen Sie die ON/OFF-Taste an der linken Seite des Hauptgeräts und halten Sie sie 2 Sekunden lang gedrückt.

Beim Start leuchtet die blaue Betriebsstatus-LED an der Vorderseite auf und beleuchtet von der Mitte nach oben und unten.

<img src={require("./img-de/power-on.png").default} width="360"/>
<img src={require("./img-de/power-on-led-state.png").default} width="240"/>

---

## INDEVOLT APP

Mit der INDEVOLT-App können Sie:

- den Betriebsstatus und die aktuelle Leistung Ihrer Geräte in Echtzeit überwachen
- den Akkustand sowie den Lade-/Entladezustand prüfen
- Statistiken zur täglichen/wöchentlichen/monatlichen/jährlichen Stromerzeugung und zum Stromverbrauch einsehen
- Energiestrategien und Zeitpläne konfigurieren und Firmware-Upgrades durchführen

📥 Wenn Sie die App zum ersten Mal verwenden, schließen Sie bitte zuerst den [App-Download, die Kontoregistrierung und die Einrichtung des Geräts](https://docs.indevolt.com/docs/app/installation) ab.
