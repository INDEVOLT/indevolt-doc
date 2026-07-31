---
title: Topic MQTT
description: Structure des Topics MQTT INDEVOLT et description du format des messages.
---

# Topic MQTT

INDEVOLT MQTT fournit par défaut la structure de Topics suivante. Les développeurs peuvent la personnaliser selon les besoins du déploiement.

| Topic | Description |
| ---------------------------- | ------------ |
| [`/test/subtopic`](#1-remontée-des-données) | Remontée des données de l'appareil |
| [`/test/subtopic/control`](#2-commandes-de-contrôle) | Commandes de contrôle |
| [`/test/subtopic/control_ack`](#3-réponse-de-contrôle) | Résultat d'exécution des commandes |

## 1. Remontée des données

L'appareil publie activement les données de fonctionnement via le Topic de données.

**Topic**

`/test/subtopic`

**Subscribe**

```bash
# Exemple : connexion à un Broker MQTT local
# Remplacez 127.0.0.1 par l'adresse de votre Broker MQTT si vous utilisez un Broker distant
mosquitto_sub -h 127.0.0.1 -t "/test/subtopic" -v
```

**Types de données**

Un même Topic peut contenir plusieurs types de données. Le client peut identifier le type de message à l'aide du champ `dataType`.

La Key dans le message JSON correspond au point de données de l'appareil, et la Value représente la valeur de donnée associée. Pour la définition détaillée des points de données, consultez [MQTT Data Points](./mqtt-data-points.md).

| dataType       | Description                         |
| -------------- | ----------------------------------- |
| gateway_data   | Informations de la passerelle       |
| battery_data   | Données de la batterie              |
| inv_data       | Données de l'onduleur               |
| subdevice_info | Informations sur les sous-appareils |
| subdevice_data | Données des sous-appareils          |

**Exemple de message**

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

## 2. Commandes de contrôle

Les systèmes tiers peuvent envoyer des requêtes de contrôle aux appareils via le Topic de contrôle.

**Topic**

`/test/subtopic/control`

**Publish**

```bash
# Exemple : connexion à un Broker MQTT local
# Remplacez 127.0.0.1 par l'adresse de votre Broker MQTT si vous utilisez un Broker distant
mosquitto_pub -h 127.0.0.1 -t "/test/subtopic/control" -m '{}'
```

**Format du message**

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

**Description des champs**

| Champ      | Type   | Description                             |
| ---------- | ------ | --------------------------------------- |
| `GW_SN`    | String | Numéro de série de la passerelle.       |
| `dataType` | String | Type de message, fixé à `modbusString`. |
| `SN1`      | String | Numéro de série de l'appareil cible.    |
| `dataMap`  | Array  | Liste des commandes Modbus.             |

**Description de `dataMap`**

`dataMap` peut contenir une ou plusieurs commandes Modbus. L'appareil exécute les commandes dans l'ordre des éléments du tableau.

| Champ           | Type   | Description                                       |
| --------------- | ------ | ------------------------------------------------- |
| `groupNum`      | String | Nombre total de commandes.                        |
| `groupID`       | String | Numéro de la commande actuelle, commençant à `0`. |
| `commandString` | String | Commande Modbus au format chaîne hexadécimale.    |

Le contenu de `commandString` doit respecter le format d'une trame Modbus, incluant l'adresse de l'appareil, le code fonction, l'adresse du registre, les données et le contrôle CRC.

Pour connaître les adresses des registres correspondants, consultez : [Description des registres Modbus](./modbus-register-table.md).

---

## 3. Réponse de contrôle

Après l'exécution d'une commande de contrôle, l'appareil renvoie le résultat d'exécution via le Topic de réponse de contrôle.

**Topic**

`/test/subtopic/control_ack`

**Subscribe**

```bash
# Exemple : connexion à un Broker MQTT local
# Remplacez 127.0.0.1 par l'adresse de votre Broker MQTT si vous utilisez un Broker distant
mosquitto_sub -h 127.0.0.1 -t "/test/subtopic/control_ack" -v
```

**Exemple de message**

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

**Description des champs**

| Champ             | Type   | Description                          |
| ----------------- | ------ | ------------------------------------ |
| `result`          | String | Résultat d'exécution de la commande. |
| `commandResponse` | String | Données de réponse Modbus.           |
