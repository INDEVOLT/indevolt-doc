---
title: MQTT Topic
description: Beschreibung der INDEVOLT MQTT Topic-Struktur und Nachrichtenformate.
---

# MQTT Topic

INDEVOLT MQTT stellt standardmäßig die folgende Topic-Struktur bereit. Entwickler können diese entsprechend den Anforderungen ihrer Bereitstellung anpassen.

| Topic | Beschreibung |
| ---------------------------- | ------------ |
| [`/test/subtopic`](#1-datenübertragung) | Übertragung von Gerätedaten |
| [`/test/subtopic/control`](#2-steuerbefehle) | Steuerbefehle |
| [`/test/subtopic/control_ack`](#3-steuerantwort) | Ausführungsergebnis der Steuerbefehle |

## 1. Datenübertragung

Das Gerät veröffentlicht Betriebsdaten aktiv über das Daten-Topic.

**Topic**

`/test/subtopic`

**Subscribe**

```bash
# Beispiel: Verbindung zu einem lokalen MQTT Broker
# Ersetzen Sie 127.0.0.1 durch die Adresse Ihres MQTT Brokers, wenn Sie einen entfernten Broker verwenden
mosquitto_sub -h 127.0.0.1 -t "/test/subtopic" -v
```

**Datentypen**

Ein einzelnes Topic kann verschiedene Datentypen enthalten. Der Client kann den Nachrichtentyp anhand des Feldes `dataType` unterscheiden.

Der Key in der JSON-Nachricht entspricht dem Datenpunkt des Geräts, und der Value stellt den zugehörigen Datenwert dar. Eine detaillierte Definition der Datenpunkte finden Sie unter [MQTT Data Points](./mqtt-data-points.md).

| dataType       | Beschreibung                    |
| -------------- | ------------------------------- |
| gateway_data   | Gateway-Informationen           |
| battery_data   | Batteriedaten                   |
| inv_data       | Wechselrichterdaten             |
| subdevice_info | Informationen zu Subgeräten     |
| subdevice_data | Subgerätedaten                  |

**Beispielnachricht**

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

## 2. Steuerbefehle

Drittanbietersysteme können über das Steuer-Topic Steueranforderungen an das Gerät senden.

**Topic**

`/test/subtopic/control`

**Publish**

```bash
# Beispiel: Verbindung zu einem lokalen MQTT Broker
# Ersetzen Sie 127.0.0.1 durch die Adresse Ihres MQTT Brokers, wenn Sie einen entfernten Broker verwenden
mosquitto_pub -h 127.0.0.1 -t "/test/subtopic/control" -m '{}'
```

**Nachrichtenformat**

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

**Feldbeschreibung**

| Feld       | Typ    | Beschreibung                                    |
| ---------- | ------ | ----------------------------------------------- |
| `GW_SN`    | String | Seriennummer des Gateways                       |
| `dataType` | String | Nachrichtentyp, fest auf `modbusString` gesetzt |
| `SN1`      | String | Seriennummer des Zielgeräts                     |
| `dataMap`  | Array  | Liste der Modbus-Befehle                        |

**Beschreibung von `dataMap`**

`dataMap` kann einen oder mehrere Modbus-Befehle enthalten. Das Gerät führt die Befehle entsprechend der Reihenfolge im Array aus.

| Feld            | Typ    | Beschreibung                                      |
| --------------- | ------ | ------------------------------------------------- |
| `groupNum`      | String | Anzahl der Befehle                                |
| `groupID`       | String | Aktuelle Befehlsnummer, beginnend bei `0`         |
| `commandString` | String | Modbus-Befehl im Format eines Hexadezimal-Strings |

Der Inhalt von `commandString` muss dem Modbus-Nachrichtenformat entsprechen und Geräteadresse, Funktionscode, Registeradresse, Daten sowie CRC-Prüfsumme enthalten.

Weitere Informationen zu den Registeradressen finden Sie unter:
[Modbus-Registerbeschreibung](./modbus-register-table.md)

---

## 3. Steuerantwort

Nach der Ausführung eines Steuerbefehls sendet das Gerät das Ausführungsergebnis über das Steuerantwort-Topic zurück.

**Topic**

`/test/subtopic/control_ack`

**Subscribe**

```bash
# Beispiel: Verbindung zu einem lokalen MQTT Broker
# Ersetzen Sie 127.0.0.1 durch die Adresse Ihres MQTT Brokers, wenn Sie einen entfernten Broker verwenden
mosquitto_sub -h 127.0.0.1 -t "/test/subtopic/control_ack" -v
```

**Beispielnachricht**

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

**Feldbeschreibung**

| Feld              | Typ    | Beschreibung                    |
| ----------------- | ------ | ------------------------------- |
| `result`          | String | Ausführungsergebnis des Befehls |
| `commandResponse` | String | Von Modbus zurückgegebene Daten |

