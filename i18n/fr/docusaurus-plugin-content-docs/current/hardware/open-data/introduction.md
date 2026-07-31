---
title: Introduction
description: Présentation du framework de communication de données local et cloud des appareils INDEVOLT
---

# Présentation d'OpenData

OpenData est un framework ouvert de communication de données conçu pour les systèmes de stockage d'énergie compacts INDEVOLT. Il permet aux utilisateurs de connecter les systèmes de stockage à des applications personnalisées ou à des systèmes de gestion de l'énergie afin de consulter les données des appareils, surveiller leur état et effectuer des contrôles à distance.

Sans dépendre du serveur INDEVOLT Server, les utilisateurs peuvent toujours accéder directement aux fonctions des systèmes de stockage via des interfaces locales, même sans connexion Internet, garantissant ainsi une utilisation flexible dans différents scénarios d'application.

Avec OpenData, vous pouvez :

- 📡 **Consulter les données en temps réel des appareils** : telles que l'état de charge (SOC), la puissance, la tension, la température et l'état de fonctionnement
- 🎛️ **Contrôler les appareils à distance** : par exemple définir les modes de charge/décharge, ajuster la puissance et contrôler les stratégies de fonctionnement
- 🔗 **Intégrer des systèmes tiers** : tels que Home Assistant ou des plateformes cloud

## Méthodes de communication prises en charge

OpenData prend en charge plusieurs protocoles industriels et IoT courants afin de répondre aux différents scénarios d'utilisation :

- [**HTTP / HTTP Digest / HTTPS**](./http.md)
  - Adapté aux appels API depuis les plateformes cloud et les applications
  - Permet l'interrogation des données des appareils à la demande

- [**Modbus TCP / RTU**](./modbus.md)
  - Adapté aux systèmes locaux et aux systèmes de gestion de l'énergie (HEMS)
  - Permet de lire ou d'écrire les données des appareils via des registres

- [**MQTT**](./mqtt.md)
  - Adapté à la transmission de données en temps réel et aux applications IoT
  - Permet une synchronisation efficace des données basée sur le modèle publication/abonnement

## Méthodes de connexion des appareils

Les appareils peuvent se connecter au réseau via les méthodes suivantes :

- Wi-Fi
- Ethernet
- RS485 (pour Modbus RTU, non pris en charge pour le moment)

Une fois l'appareil connecté au réseau, il peut échanger des données et recevoir des commandes de contrôle depuis des systèmes externes via OpenData.

## Principe de fonctionnement

Le principe est simple : l'appareil génère et transmet les données, tandis que les systèmes externes lisent les données ou envoient des commandes de contrôle.

```text
Appareil INDEVOLT
   ↓
Couche de communication OpenData
   ↓
HTTP / MQTT / Modbus
   ↓
Système externe (App / Plateforme cloud / HEMS)