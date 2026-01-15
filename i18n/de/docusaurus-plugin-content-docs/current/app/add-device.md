---
title: Geräte hinzufügen
description: Fügen Sie Ihre Geräte zur Verwaltung und Datenüberwachung hinzu.
---

# Geräte hinzufügen

Beim ersten Login erstellt die App automatisch ein Standard-Zuhause, um alle zugehörigen Geräte zentral zu verwalten.

INDEVOLT unterstützt derzeit die folgenden Marken:
- INDEVOLT
- SOLARMAN
- Deye
- EverHome
- Shelly

Unterschiedliche Marken oder Modelle von Geräten können verschiedene Methoden zum Hinzufügen und zur Konfiguration haben. Bitte folgen Sie bei der tatsächlichen Bedienung den App-Oberflächenhinweisen und Anleitungen.


## Schritt 1: Auf „Gerät hinzufügen“ tippen

Tippen Sie auf die Schaltfläche **Gerät hinzufügen** oder auf das **+**-Symbol oben rechts > **Gerät hinzufügen**.

<img src={require("./img/add_device.jpg").default} width="240"/>

## Schritt 2: Gerät auswählen

:::tip Bevor Sie beginnen

1. Aktivieren Sie Bluetooth auf Ihrem Smartphone, damit die App eine Verbindung zum Gerät herstellen kann. Wenn Bluetooth deaktiviert ist, erinnert Sie die App daran, es einzuschalten.  
2. Suchen Sie den QR-Code und die Seriennummer (SN) auf Ihrem Gerät.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="scan" label="Methode 1: QR-Code scannen" default>
  
  1. Tippen Sie auf das Scan-Symbol oben rechts in der App.  
  2. Scannen Sie den QR-Code auf Ihrem Gerät oder geben Sie die SN manuell ein.

      <img src={require("./img/discover_devices.png").default} width="240"/>
      <img src={require("./img/scan_qr_code.jpg").default} width="240"/>
      <img src={require("./img/connecting_device.jpg").default} width="240"/>

  </TabItem>

  <TabItem value="bluetooth" label="Methode 2: Bluetooth-Suche">

  :::info
  Die Bluetooth-Suche unterstützt derzeit SOLARMAN-, INDEVOLT- und IZYPOWER-Geräte. Tippen Sie in der App auf **Geräte anzeigen, die Bluetooth-Suche unterstützen**, um weitere Details zu erhalten.
  :::

  1. Stellen Sie sicher, dass Bluetooth aktiviert ist. Ist es deaktiviert, fordert die App Sie auf, es zu aktivieren.  
  2. Die App scannt automatisch nach Bluetooth-Geräten in der Nähe und listet sie auf. Wählen Sie Ihr Gerät anhand des Produktnamens und der SN aus.

      <img src={require("./img/discover_devices.png").default} width="240"/>
      <img src={require("./img/connecting_device.jpg").default} width="240"/>

  </TabItem>

  <TabItem value="manual" label="Methode 3: Manuell hinzufügen">

  1. Wählen Sie die Gerätemarke aus.  
  2. Wählen Sie das entsprechende Modell unter dieser Marke aus.  
  3. Scannen Sie den QR-Code auf Ihrem Gerät oder geben Sie die SN manuell ein.

      <img src={require("./img/discover_devices.png").default} width="240"/>
      <img src={require("./img/select_device.png").default} width="240"/>
      <img src={require("./img/scan_qr_code.jpg").default} width="240"/>
      <img src={require("./img/connecting_device.jpg").default} width="240"/>

  </TabItem>
</Tabs>

## Schritt 3: Netzwerk konfigurieren

1. Stellen Sie sicher, dass Ihr Smartphone mit Ihrem Heim-WLAN verbunden ist und dass das angezeigte Netzwerk dem gewünschten entspricht. Geben Sie das WLAN-**Passwort** ein.  
2. Wenn Ihr Telefon mit dem WLAN verbunden ist, das System es jedoch nicht findet, können Sie SSID und Passwort manuell eingeben.
3. Nachdem Sie alles überprüft haben, tippen Sie auf **Einrichten**.
   <img src={require("./img/select_wifi.png").default} width="240"/>

4. Das Gerät wurde erfolgreich hinzugefügt.
   <img src={require("./img/connect_bluetooth.jpg").default} width="240"/>
   <img src={require("./img/configure_network.jpg").default} width="240"/>
   <img src={require("./img/wifi_connected.jpg").default} width="240"/>

5. *(Optional)* Sie können verknüpfte Geräte nach denselben Schritten hinzufügen. Wenn Sie dies später tun möchten, tippen Sie oben links auf die **\<**-Zurück-Schaltfläche, um den Vorgang zu beenden.
   <img src={require("./img/link_device.png").default} width="240"/>

:::info

1. Bitte verwenden Sie während der Einrichtung ein 2,4-GHz-WLAN. 5-GHz-Netzwerke werden nicht unterstützt.  
2. Nach dem Hinzufügen eines Geräts kann es einige Minuten dauern, bis Daten in der App angezeigt werden.

:::

:::tip

Wenn die Einrichtung fehlschlägt, prüfen Sie bitte Folgendes und versuchen Sie es erneut:

1. Stellen Sie sicher, dass WLAN und Bluetooth auf Ihrem Smartphone aktiviert sind.  
2. Vergewissern Sie sich, dass Ihr Heim-WLAN über eine Internetverbindung verfügt.  
3. Prüfen Sie, ob auf Ihrem Router keine Blacklist/Whitelist aktiviert ist.  
4. Verringern Sie den Abstand zwischen Ihrem Smartphone und dem Gerät.  
5. Versuchen Sie ein anderes WLAN-Netzwerk.  
6. Entfernen Sie Sonderzeichen wie ( , ; ‘ ’ = “ ” ` ) aus dem WLAN-Namen.

:::

## Nächste Schritte

Nachdem Sie Ihr Gerät hinzugefügt haben, können Sie:

- Gerätedaten in den Tabs **[Home](./home.md)** und **[Bericht](./report.md)** anzeigen.  
- Alle Geräte im Tab **[Gerät](./device.md)** verwalten.  
- Intelligente Lade-/Entladepläne im Tab **[Smart](./smart.md)** festlegen.
