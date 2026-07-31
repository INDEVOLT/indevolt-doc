---
title: Einführung
description: Beschreibung des lokalen und Cloud-Datenkommunikationsframeworks für INDEVOLT-Geräte
---

# OpenData Einführung

OpenData ist ein offenes Datenkommunikationsframework, das speziell für INDEVOLT-Mikroenergiespeicher entwickelt wurde. Benutzer können damit Mikroenergiespeicher mit selbst entwickelten Apps oder Energiemanagementsystemen verbinden, um Gerätedaten anzuzeigen, den Status zu überwachen und eine Fernsteuerung durchzuführen.

Ohne Abhängigkeit vom INDEVOLT Server können Benutzer auch ohne Internetverbindung über lokale Schnittstellen direkt auf die Funktionen des Mikroenergiespeichers zugreifen. Dadurch wird eine flexible Nutzung in verschiedenen Anwendungsszenarien gewährleistet.

Mit OpenData können Sie:

- 📡 **Echtzeit-Gerätedaten anzeigen**: z. B. Ladezustand (SOC), Leistung, Spannung, Temperatur und Betriebsstatus
- 🎛️ **Geräte fernsteuern**: z. B. Lade-/Entlademodi einstellen, Leistung anpassen und Betriebsstrategien steuern
- 🔗 **Drittanbietersysteme integrieren**: z. B. Home Assistant oder Cloud-Plattformen

## Unterstützte Kommunikationsmethoden

OpenData unterstützt mehrere gängige Industrie- und IoT-Protokolle für unterschiedliche Anwendungsszenarien:

- [**HTTP / HTTP Digest / HTTPS**](./http.md)
  - Geeignet für API-Aufrufe durch Cloud-Plattformen und Anwendungen
  - Unterstützt bedarfsgesteuerte Geräteabfragen

- [**Modbus TCP / RTU**](./modbus.md)
  - Geeignet für lokale Systeme und Energiemanagementsysteme (HEMS)
  - Liest oder schreibt Gerätedaten über Register

- [**MQTT**](./mqtt.md)
  - Geeignet für Echtzeit-Datenübertragung und IoT-Anwendungen
  - Ermöglicht eine effiziente Datensynchronisierung über das Publish/Subscribe-Modell

## Verbindungsmethoden der Geräte

Die Geräte können über folgende Methoden mit dem Netzwerk verbunden werden:

- Wi-Fi
- Ethernet
- RS485 (für Modbus RTU, derzeit nicht unterstützt)

Nach erfolgreicher Netzwerkverbindung können Geräte über OpenData Daten mit externen Systemen austauschen und Steuerbefehle empfangen.

## Funktionsprinzip

Das Grundprinzip ist: Das Gerät erzeugt und überträgt Daten, während externe Systeme Daten auslesen oder Steuerbefehle senden.

```text
INDEVOLT-Gerät
   ↓
OpenData-Kommunikationsschicht
   ↓
HTTP / MQTT / Modbus
   ↓
Externes System (App / Cloud-Plattform / HEMS)