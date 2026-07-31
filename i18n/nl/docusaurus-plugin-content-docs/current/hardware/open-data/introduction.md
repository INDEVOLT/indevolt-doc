---
title: Introductie
description: Beschrijving van het lokale en cloud-datacommunicatiekader voor INDEVOLT-apparaten
---

# Introductie van OpenData

OpenData is een open datacommunicatiekader dat is ontworpen voor INDEVOLT micro-energieopslagsystemen. Gebruikers kunnen hiermee micro-opslagsystemen verbinden met zelf ontwikkelde apps of energiebeheersystemen om apparaatgegevens te bekijken, de status te bewaken en apparaten op afstand te bedienen.

Zonder afhankelijk te zijn van de INDEVOLT Server kunnen gebruikers de functies van het micro-opslagsysteem rechtstreeks via lokale interfaces gebruiken, zelfs zonder internetverbinding. Hierdoor blijft het systeem flexibel inzetbaar in verschillende toepassingsscenario's.

Met OpenData kunt u:

- 📡 **Realtime apparaatgegevens bekijken**: zoals laadstatus (SOC), vermogen, spanning, temperatuur en bedrijfsstatus
- 🎛️ **Apparaten op afstand bedienen**: zoals laad-/ontlaadmodi instellen, vermogen aanpassen en bedrijfsstrategieën beheren
- 🔗 **Integreren met systemen van derden**: zoals Home Assistant of cloudplatforms

## Ondersteunde communicatiemethoden

OpenData ondersteunt meerdere gangbare industriële en IoT-protocollen voor verschillende toepassingsscenario's:

- [**HTTP / HTTP Digest / HTTPS**](./http.md)
  - Geschikt voor API-aanroepen vanuit cloudplatforms en applicaties
  - Ondersteunt het opvragen van apparaatgegevens op aanvraag

- [**Modbus TCP / RTU**](./modbus.md)
  - Geschikt voor lokale systemen en energiebeheersystemen (HEMS)
  - Leest of schrijft apparaatgegevens via registers

- [**MQTT**](./mqtt.md)
  - Geschikt voor realtime gegevenspublicatie en IoT-toepassingen
  - Maakt efficiënte gegevenssynchronisatie mogelijk op basis van het publish/subscribe-model

## Verbindingsmethoden van apparaten

Apparaten kunnen via de volgende methoden met het netwerk worden verbonden:

- Wi-Fi
- Ethernet
- RS485 (voor Modbus RTU, momenteel niet ondersteund)

Nadat het apparaat succesvol met het netwerk is verbonden, kan het via OpenData gegevens uitwisselen met externe systemen en besturingsopdrachten ontvangen.

## Werkingsprincipe

Het basisprincipe is eenvoudig: het apparaat genereert en verzendt gegevens, terwijl externe systemen gegevens uitlezen of besturingsopdrachten verzenden.

```text
INDEVOLT-apparaat
   ↓
OpenData-communicatielaag
   ↓
HTTP / MQTT / Modbus
   ↓
Extern systeem (App / Cloudplatform / HEMS)