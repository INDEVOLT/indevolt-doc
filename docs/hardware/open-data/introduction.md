---
title: Introduction
description: Overview of the INDEVOLT device local and cloud data communication framework
---

# OpenData Overview

OpenData is an open data communication framework designed for INDEVOLT micro energy storage devices. It allows users to connect micro storage systems to custom-developed Apps or energy management systems to view device data, monitor status, and perform remote control.

Without relying on the INDEVOLT Server, users can still access micro storage device functions directly through local interfaces even without an Internet connection, ensuring flexible operation in different application scenarios.

With OpenData, you can:

- 📡 **View real-time device data**: such as state of charge (SOC), power, voltage, temperature, and operating status
- 🎛️ **Remotely control devices**: such as setting charging/discharging modes, adjusting power, and controlling operating strategies
- 🔗 **Integrate with third-party systems**: such as Home Assistant or cloud platforms

## Supported Communication Methods

OpenData supports multiple common industrial and IoT protocols to meet different application scenarios:

- [**HTTP / HTTP Digest / HTTPS**](./http.md)
  - Suitable for API calls from cloud platforms and applications
  - Supports on-demand device data queries

- [**Modbus TCP / RTU**](./modbus.md)
  - Suitable for local systems and energy management systems (HEMS)
  - Reads or writes device data through registers

- [**MQTT**](./mqtt.md)
  - Suitable for real-time data publishing and IoT scenarios
  - Enables efficient data synchronization based on the publish/subscribe model

## Device Connection Methods

Devices can connect to the network through the following methods:

- Wi-Fi
- Ethernet
- RS485 (for Modbus RTU, not supported yet)

After the device is successfully connected to the network, it can exchange data and receive control commands from external systems through OpenData.

## Working Principle

The basic concept is that the device is responsible for generating and uploading data, while external systems are responsible for reading data or sending control commands.

```text
INDEVOLT Device
   ↓
OpenData Communication Layer
   ↓
HTTP / MQTT / Modbus
   ↓
External System (App / Cloud Platform / HEMS)