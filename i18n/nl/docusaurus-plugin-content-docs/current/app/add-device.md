---
title: Apparaat toevoegen
description: Voeg apparaten toe aan uw woning voor centraal beheer en gegevensmonitoring.
---

# Apparaat toevoegen

Bij de eerste keer inloggen maakt de App automatisch een standaardwoning aan met de naam, bedoeld voor het centraal beheren van apparaten.

De INDEVOLT App ondersteunt momenteel de volgende merken:
- INDEVOLT
- SOLARMAN
- Deye
- EverHome
- Homewizard
- Shelly
- Stromleser
- VaySunic

Afhankelijk van het merk of model kunnen de stappen voor het toevoegen en configureren verschillen. Volg daarom altijd de instructies in de app tijdens het proces.

## Stap 1: Apparaat toevoegen

Tik rechtsboven op **+** > **Apparaat toevoegen**.

<img src={require("./img/add_device.png").default} width="240"/>

## Stap 2: Apparaat selecteren

:::tip Voorbereiding

1. Zet Bluetooth op uw telefoon aan om verbinding met het apparaat te maken. Als dit niet is ingeschakeld, geeft de app een melding tijdens het verbindingsproces.
2. Zoek de QR-code en het serienummer (SN) op het apparaat.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="scan" label="Methode 1: Scannen (QR-code)" default>

  1. Tik op het <img src={require("./img/scan_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> pictogram rechtsboven in de app.
  2. Scan de QR-code op het apparaat of voer het SN-nummer handmatig in.

      <img src={require("./img/discover_devices.png").default} width="240"/>
      <img src={require("./img/scan_qr_code.png").default} width="240"/>
      <img src={require("./img/connecting_device.png").default} width="240"/>

  </TabItem>

  <TabItem value="bluetooth" label="Methode 2: Bluetooth zoeken">

  :::info
  De Bluetooth-detectiefunctie is momenteel beschikbaar voor SOLARMAN- en INDEVOLT-apparaten. Tik in de app op **Lijst van ondersteunde Bluetooth-apparaten** voor meer informatie.
  :::

  De app scant automatisch naar beschikbare Bluetooth-apparaten in de buurt. Selecteer uw doelapparaat op basis van productnaam en serienummer om verbinding te maken.

      <img src={require("./img/discover_devices.png").default} width="240"/>
      <img src={require("./img/connecting_device.png").default} width="240"/>

  </TabItem>

  <TabItem value="manual" label="Methode 3: Handmatig toevoegen">

  1. Selecteer het merk van het apparaat.
  2. Kies het specifieke model binnen dat merk.
  3. Scan de QR-code op het apparaat of voer het SN-nummer handmatig in.

      <img src={require("./img/discover_devices.png").default} width="240"/>
      <img src={require("./img/select_device.png").default} width="240"/>
      <img src={require("./img/scan_qr_code.png").default} width="240"/>
      <img src={require("./img/connecting_device.png").default} width="240"/>

  </TabItem>
</Tabs>

## Stap 3: Netwerkconfiguratie

1. Zorg ervoor dat uw telefoon is verbonden met het thuis-WiFi-netwerk dat overeenkomt met het netwerk dat op de pagina wordt weergegeven. Voer het **wachtwoord** van dit netwerk in.
2. Als de telefoon al verbonden is met WiFi maar het systeem het netwerk niet kan vinden, kunt u de SSID en het wachtwoord handmatig invoeren.
3. Controleer de gegevens en tik vervolgens op **Bevestigen**.

   <img src={require("./img/select_wifi.png").default} width="240"/>

4. Apparaat succesvol toegevoegd.

   <img src={require("./img/connect_bluetooth.png").default} width="240"/>
   <img src={require("./img/wifi_connected.png").default} width="240"/>

:::info

1. Gebruik tijdens de netwerkconfiguratie een 2,4 GHz WiFi-netwerk; 5 GHz wordt momenteel niet ondersteund.
2. Na het toevoegen van het apparaat kan het enkele minuten duren voordat gegevens correct in de app worden weergegeven.

:::

:::tip

Als de configuratie mislukt, controleer dan het volgende en probeer opnieuw:
1. Zorg ervoor dat WiFi en Bluetooth op uw telefoon zijn ingeschakeld;
2. Controleer of uw thuisnetwerk correct internettoegang heeft;
3. Controleer of er geen MAC-filtering (blacklist/whitelist) is ingeschakeld op de router;
4. Probeer de afstand tussen telefoon en apparaat te verkleinen;
5. Probeer een ander WiFi-netwerk;
6. Vermijd speciale tekens in de WiFi-naam zoals （，；‘’=“”`）.

:::

## Volgende stap

Na het succesvol toevoegen van het apparaat kunt u:

- In de tabbladen [Thuis](./home.md) en [Statistieken](./report.md) de apparaatgegevens bekijken.
- In het tabblad [Apparaten](./device.md) uw apparaten beheren.
- In het tabblad [Slim](./smart.md) slimme laad- en ontlaadschema’s instellen.