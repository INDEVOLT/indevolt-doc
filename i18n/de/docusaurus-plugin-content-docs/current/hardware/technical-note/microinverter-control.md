---
title: Bypass-Steckdose-Mikrowechselrichter-Steuerungshandbuch
description: Erfahren Sie, welche unterschiedlichen Steuerungsstrategien das Indevolt-Mikrospeichersystem anwendet, wenn ein Mikro-Wechselrichter an die Bypass-Steckdose angeschlossen wird – je nach netzgekoppeltem oder netzunabhängigem Betriebszustand.
---

# Bypass-Steckdose-Mikrowechselrichter-Steuerungshandbuch

Wenn ein Mikro-Wechselrichter an die Bypass-Steckdose (Backup) angeschlossen wird, wendet das System je nach Netzstatus unterschiedliche Steuerungsstrategien an:

- **Netzunabhängig (Inselbetrieb)**: Aktive Reduzierung der Mikro-Wechselrichter-Leistung durch Anpassung der Ausgangsfrequenz.
- **Netzgekoppelt**: Synchronisation mit dem Netz, keine Regelung der Mikro-Wechselrichter-Leistung; bei Erkennung von Rückspeisung oder Überlast wird der Bypass zum Schutz getrennt.

## 1. Netzunabhängiger Betrieb mit Mikro-Wechselrichter: Frequenzregelung zur Leistungsreduzierung

### 1.1 Warum Frequenzregelung?

Im netzunabhängigen Betrieb versorgt das System die Lasten eigenständig und verfügt nicht über die Pufferfähigkeit des öffentlichen Netzes. Übersteigt die Mikro-Wechselrichter-Leistung den Lastverbrauch, steigt die Zwischenkreisspannung kontinuierlich an. Überschreitet sie den sicheren Bereich, löst das System eine Schutzabschaltung aus.

### 1.2 Steuerungslogik

Das System reduziert die Mikro-Wechselrichter-Leistung durch Anhebung der Ausgangsfrequenz. Der Mikro-Wechselrichter erkennt den Frequenzanstieg und reduziert automatisch seine Einspeiseleistung proportional, sodass Erzeugung und Lastverbrauch wieder ins Gleichgewicht kommen. Dieser Vorgang läuft vollautomatisch ab und erfordert keinen manuellen Eingriff.

### 1.3 Firmware-Einschränkungen

Der netzunabhängige Betrieb mit Mikro-Wechselrichter setzt EMS **Version 1.01.05 oder höher** voraus, mit einem Leistungsbereich von **30 W bis 1200 W**. Bei einem Ladezustand (SOC) unter 3 % wird die Aufnahme von Mikro-Wechselrichter-Leistung ausgesetzt, der Bypass bleibt jedoch aktiv. Sobald der SOC wieder 3 % oder mehr erreicht, wird der Betrieb automatisch fortgesetzt. Ausführliche Informationen finden Sie im [Bypass-Steckdosen-Handbuch](https://docs.indevolt.com/de/docs/hardware/technical-note/bypass/).

## 2. Netzgekoppelter Betrieb mit Mikro-Wechselrichter: Netzsynchronisation, Bypass-Trennung bei Störung

### 2.1 Normalbetrieb

Im netzgekoppelten Zustand sind Ausgangsfrequenz und -phase des Geräts mit dem Netz synchron, der Mikro-Wechselrichter folgt dem Netz. Das System **regelt die Mikro-Wechselrichter-Leistung nicht aktiv**. Die Mikro-Wechselrichter-Energie wird vorrangig für die Lastversorgung und die Batterieladung genutzt; überschüssige Energie kann – innerhalb der Einspeisegrenzen – ins Netz eingespeist werden.

Zur Energieverteilungslogik in den verschiedenen Betriebsmodi siehe [Bypass-Steckdosen-Handbuch](https://docs.indevolt.com/de/docs/hardware/technical-note/bypass/).

### 2.2 Schutzmechanismus

Bei Erkennung einer der folgenden Anomalien trennt das System die Bypass-Steckdose sofort und stellt sie nach 15 Minuten automatisch wieder her:

| Auslösebedingung              | Schwellwert                                                  |
| :---------------------------- | :----------------------------------------------------------- |
| Rückspeisung überschritten    | Überschreitung der maximalen Netzeinspeiseleistung um 10 % für mehr als 30 Sekunden |
| Mikro-Wechselrichter-Überlast | Eingangsleistung über 2400 W für mehr als 30 Sekunden        |

Nach der Trennung verliert der Mikro-Wechselrichter die Netzanbindung und stellt die Erzeugung ein. Nach der Wiederherstellung prüft das System erneut; besteht die Störung weiterhin, erfolgt erneute Trennung.

## 3. Vergleich der beiden Betriebsmodi

| Vergleichspunkt               | Netzunabhängig mit Mikro-Wechselrichter                 | Netzgekoppelt mit Mikro-Wechselrichter      |
| :---------------------------- | :------------------------------------------------------ | :------------------------------------------ |
| Steuerungsweise               | Aktive Frequenzregelung zur Leistungsreduzierung        | Netzsynchronisation, keine Regelung         |
| Mikro-Wechselrichter-Leistung | Wird durch die Gerätefrequenz gesteuert                 | Folgt dem Netz und speist eigenständig ein  |
| Störungsschutz                | Überspannungsabschaltung / Aussetzung bei niedrigem SOC | Bypass-Trennung bei Rückspeisung / Überlast |
| Leistungsbereich              | 30 W ~ 1200 W                                           | Bis zu 2400 W                               |
| Anwendungsszenario            | Stromausfall, netzferne Gebiete                         | Normalbetrieb mit Netzanschluss             |

## 4. Häufig gestellte Fragen (FAQ)

**F1: Beeinträchtigt die Frequenzregelung im netzunabhängigen Betrieb den normalen Betrieb von Haushaltsgeräten?**

A: Nein. Der Frequenzregelbereich bleibt innerhalb eines sicheren Intervalls, und der Regelungsvorgang erfolgt sanft, sodass herkömmliche Haushaltsgeräte nicht beeinträchtigt werden.

**F2: Warum wird im netzgekoppelten Betrieb nicht ebenfalls die Frequenz zur Leistungsreduzierung genutzt, sondern der Bypass getrennt?**

A: Im netzgekoppelten Betrieb ist die Netzfrequenz fest vorgegeben; das Gerät kann nicht mittels Frequenz in die Mikro-Wechselrichter-Leistung eingreifen. Daher wird die Schutzstrategie einer sofortigen Trennung bei Störung angewandt, die eine schnellere Reaktion ermöglicht.

**F3: Wie lange dauert es, bis der Bypass nach einer Trennung wiederhergestellt ist?**

A: Die automatische Wiederherstellung erfolgt nach 15 Minuten. Besteht die Störung weiterhin, wird erneut getrennt.

## 5. Hinweise

1. Dieses Dokument gilt für die Serien PowerFlex 2000 / SolidFlex 2000.
2. Die Frequenzregelung im netzunabhängigen Betrieb setzt voraus, dass der Mikro-Wechselrichter die Frequenz-Leistungs-Antwort unterstützt. Bitte prüfen Sie vor der Verwendung die Kompatibilität.
3. Bei allen Parametern handelt es sich um typische Werte; maßgeblich sind die jeweilige Firmware-Version und die Einstellungen vor Ort.
