---
title: MQTT Topic
description: Beschrijving van de INDEVOLT MQTT Topic-structuur en het berichtformaat.
---

# MQTT Topic

INDEVOLT MQTT biedt standaard de volgende Topic-structuur. Ontwikkelaars kunnen deze structuur aanpassen volgens de vereisten van de daadwerkelijke implementatie.

| Topic | Beschrijving |
| ---------------------------- | ------------ |
| [`/test/subtopic`](#1-gegevensrapportage) | Rapportage van apparaatgegevens |
| [`/test/subtopic/control`](#2-besturingsopdrachten) | Besturingsopdrachten |
| [`/test/subtopic/control_ack`](#3-besturingsantwoord) | Resultaat van de uitvoering van besturingsopdrachten |

## 1. Gegevensrapportage

Het apparaat publiceert actief bedrijfsgegevens via het data Topic.

**Topic**

`/test/subtopic`

**Subscribe**

```bash
# Example: connect to a local MQTT Broker
# Replace 127.0.0.1 with your MQTT Broker address if using a remote Broker
mosquitto_sub -h 127.0.0.1 -t "/test/subtopic" -v
```

**Gegevenstypen**

Een enkel Topic kan meerdere gegevenstypen bevatten. De client kan het berichttype onderscheiden via het veld `dataType`.

De Key in het JSON-bericht komt overeen met het gegevenspunt van het apparaat, en de Value vertegenwoordigt de bijbehorende gegevenswaarde. Raadpleeg [MQTT Data Points](./mqtt-data-points.md) voor de gedetailleerde definitie van de gegevenspunten.

| dataType       | Beschrijving                    |
| -------------- | ------------------------------- |
| gateway_data   | Gateway-informatie               |
| battery_data   | Batterijgegevens                |
| inv_data       | Omvormergegevens                |
| subdevice_info | Informatie over subapparaten    |
| subdevice_data | Gegevens van subapparaten       |

**Voorbeeldbericht**

```json
{
  "GW_SN": "xxxxxxxx",
  "dataType": "gateway_data",
  "firmwareVersion": "V140C.0B.0036",
  "rssiWifi": "-41",
  "ssidWifi": "QXTS",
  "bssidWifi": "",
  "iP": "190.160.3.167"
}
```

---

## 2. Besturingsopdrachten

Systemen van derden kunnen via het besturings-Topic besturingsverzoeken naar het apparaat verzenden.

**Topic**

`/test/subtopic/control`

**Publish**

```bash
# Example: connect to a local MQTT Broker
# Replace 127.0.0.1 with your MQTT Broker address if using a remote Broker
mosquitto_pub -h 127.0.0.1 -t "/test/subtopic/control" -m '{}'
```

**Berichtformaat**

```json
{
    "GW_SN": "xxxxxxxx",    
    "dataType": "modbusString",    
    "SN1": "xxxxxxxx",    
    "dataMap": [
        {
            "groupNum": "2"    
        },
        {
            "groupID": "0",    
            "commandString": "010300000001840A"    
        },
        {
            "groupID": "1",
            "commandString": "0110000001020000303A"    
        }
    ]
}
```

**Beschrijving van velden**

| Veld       | Type   | Beschrijving                                   |
| ---------- | ------ | ---------------------------------------------- |
| `GW_SN`    | String | Serienummer van de gateway.                    |
| `dataType` | String | Berichttype, vast ingesteld op `modbusString`. |
| `SN1`      | String | Serienummer van het doelapparaat.              |
| `dataMap`  | Array  | Lijst met Modbus-opdrachten.                   |

**Beschrijving van `dataMap`**

`dataMap` kan één of meerdere Modbus-opdrachten bevatten. Het apparaat voert de opdrachten opeenvolgend uit volgens de volgorde in de array.

| Veld            | Type   | Beschrijving                                       |
| --------------- | ------ | -------------------------------------------------- |
| `groupNum`      | String | Totaal aantal opdrachten.                          |
| `groupID`       | String | Nummer van de huidige opdracht, beginnend bij `0`. |
| `commandString` | String | Modbus-opdracht in hexadecimaal tekenreeksformaat. |

De inhoud van `commandString` moet voldoen aan het Modbus-telegramformaat, inclusief apparaatadres, functiecode, registeradres, gegevens en CRC-controle.

Raadpleeg voor de specifieke registeradressen: [Modbus-registerbeschrijving](./modbus-register-table.md).

---

## 3. Besturingsantwoord

Nadat het apparaat een besturingsopdracht heeft uitgevoerd, wordt het uitvoeringsresultaat teruggestuurd via het besturingsantwoord-Topic.

**Topic**

`/test/subtopic/control_ack`

**Subscribe**

```bash
# Example: connect to a local MQTT Broker
# Replace 127.0.0.1 with your MQTT Broker address if using a remote Broker
mosquitto_sub -h 127.0.0.1 -t "/test/subtopic/control_ack" -v
```

**Voorbeeldbericht**

```json
{
    "GW_SN": "xxxxxxxx",
    "dataType": "modbusString",
    "SN1": "xxxxxxxx",
    "dataMap": [
        {
            "groupNum": "2"
        },
        {
            "groupID": "0",
            "result": "success",
            "commandResponse": "018302C0F1"
        },
        {
            "groupID": "1",
            "result": "success",
            "commandResponse": "0190030C01"
        }
    ]
}
```

**Beschrijving van velden**

| Veld              | Type   | Beschrijving                                 |
| ----------------- | ------ | -------------------------------------------- |
| `result`          | String | Resultaat van de uitvoering van de opdracht. |
| `commandResponse` | String | Geretourneerde Modbus-gegevens.              |
