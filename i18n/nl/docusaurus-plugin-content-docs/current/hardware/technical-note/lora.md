---
title: LoRa-verbinding
description: Gebruikershandleiding voor het koppelen van micro-energieopslagapparaten aan LoRa-terminaalapparaten
---

# Uitleg over LoRa-verbinding

## Wat is LoRa?

LoRa (Long Range, langeafstand) communicatie is een laagvermogen, breedband draadloze communicatietechnologie (LPWAN) die gebaseerd is op spread-spectrumtechniek. De kern is de spread-spectrum modulatie. Hierbij wordt het signaal “verspreid” over een breder frequentiebereik, waardoor het een hoge storingsbestendigheid en een hoge ontvangstgevoeligheid krijgt.

Eenvoudig gezegd is LoRa een technologie waarmee apparaten over grote afstanden draadloos met elkaar kunnen communiceren. In tegenstelling tot Wi-Fi of Bluetooth is het niet afhankelijk van een thuisnetwerk en vereist het geen complexe configuratie. Het werkt als een speciaal draadloos kanaal tussen apparaten dat informatie overdraagt.

Met LoRa kunnen apparaten automatisch informatie uitwisselen. Zo kan een elektriciteitsmeter bijvoorbeeld verbruiksgegevens naar het energieopslagsysteem sturen, waarna het systeem automatisch de laad- en ontlaadstatus aanpast. Het hele proces gebeurt volledig automatisch op de achtergrond, zonder dat je er iets van merkt.

**Belangrijkste kenmerken**

- Ultra lange afstand: in ideale omstandigheden (zoals buitengebieden of open terrein) kan de communicatieafstand 10–20 km of meer bereiken  
- Zeer laag energieverbruik: apparaten zoals sensoren kunnen meerdere jaren tot zelfs tien jaar op batterij werken  
- Hoge capaciteit: één gateway kan duizenden eindapparaten verbinden  
- Lage kosten: relatief lage kosten voor modules en netwerkimplementatie  


## Verschil tussen LoRa en Wi-Fi

Je kunt Wi-Fi zien als een snel thuisnetwerk dat wordt gebruikt om te internetten en video’s te kijken. Het is snel, maar verbruikt veel energie en wanneer de verbinding wegvalt, werken veel apparaten niet meer goed.

LoRa daarentegen is speciaal ontworpen voor het verzenden van kleine hoeveelheden data, zoals energieverbruik of apparaatstatus. Het is langzamer, maar kan veel verder reiken en verbruikt zeer weinig energie. Bovendien is het niet afhankelijk van het thuisnetwerk, dus communicatie blijft werken zelfs als het internet uitvalt.

Eenvoudig gezegd: Wi-Fi zorgt voor internettoegang, terwijl LoRa ervoor zorgt dat apparaten onderling communiceren, waardoor het systeem slimmer en betrouwbaarder wordt.

## Toepassingsscenario’s

- Locaties met zwakke of onstabiele Wi-Fi-dekking, zoals kelders of zolders  
- Omgevingen met sterke interferentie, zoals technische ruimtes of energiecentrales  

## Ondersteunde apparaten

Als de firmwareversie van het apparaat lager is dan de minimale vereiste in de tabel, werk het apparaat dan bij via de INDEVOLT App in de apparaatinstellingen.

<table><thead>
  <tr>
    <th>Apparaat</th>
    <th>Model</th>
    <th>Minimale firmwareversie</th>
  </tr></thead>
<tbody>
  <tr>
    <td>Micro-energieopslag</td>
    <td>SolidFlex 2000<br />PowerFlex 2000<br />SolidFlex 2000 Eco<br />PowerFlex 2000 Eco<br />PowerFlex 3000 Hybrid<br />PowerFlex 3000 AC<br />SolidFlex 3000 Hybrid<br />SolidFlex 3000 AC</td>
    <td>CMS: V1406.07.002B <br/>Pfile: V0D.00.11</td>
  </tr>
  <tr>
    <td rowspan="2">Energieteller</td>
    <td>MR1-D5-WR</td>
    <td>V1.4.09_R00B.082_M051A_00000037</td>
  </tr>
  <tr>
    <td>MR3-D5-WR</td>
    <td>V1.4.09_R01C.0D2_M0515_00000016</td>
  </tr>
  <tr>
    <td>Nabij-infrarood meterlezer</td>
    <td>NIR-3</td>
    <td>V1.4.09_R016.082_M0000_0000001E</td>
  </tr>
</tbody>
</table>

## Bedieningsstappen

### LoRa-terminaalapparaat verbinden

:::info Voorbereiding
Controleer eerst of aan de volgende voorwaarden is voldaan:
- Het micro-energieopslagsysteem is toegevoegd in de INDEVOLT App en is ingeschakeld en online  
- Het LoRa-ondersteunde eindapparaat is geïnstalleerd en van stroom voorzien  
:::

1. Open de INDEVOLT App, tik op “**+**” rechtsboven in de apparaatpagina en selecteer het apparaat dat je wilt toevoegen (bijvoorbeeld een energieteller).

   <img src={require("./img/click_add_device.png").default} width="200"/>
   <img src={require("./img/select_lora_device.png").default} width="200"/>

2. Scan de QR-code op de meter en tik na succesvolle herkenning op **Apparaten verbinden**.
   <img src={require("./img/connect_device.png").default} width="200"/>

3. Selecteer **LoRa-Draadloze Verbinding** als verbindingsmethode, kies het te koppelen energieopslagsysteem en tik op **Koppelen** om te wachten op voltooiing.

   <img src={require("./img/select_lora.png").default} width="210"/>
   <img src={require("./img/select_bind_device.png").default} width="200"/>
   <img src={require("./img/connected_device.png").default} width="200"/>

4. Controleer of de verbinding succesvol is

   Ga naar de apparaatpagina, tik op de elektriciteitsmeter, ga naar de detailpagina en open de instellingen via <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/>, selecteer **Netwerkinstellingen** en controleer of de huidige verbindingsmethode **LoRa-Draadloze Verbinding** is.

   <img src={require("./img/tap_device.png").default} width="210"/>
   <img src={require("./img/device_setting.png").default} width="200"/>
   <img src={require("./img/network_setting.png").default} width="200"/>
   <img src={require("./img/network_info_lora.png").default} width="200"/>

   Daarnaast wordt de verbindingsmethode (Wi-Fi of LoRa) ook weergegeven in de rechterbovenhoek van de apparaatkaart in de apparatenlijst.
   <img src={require("./img/lora_icon.png").default} width="210"/>


### Verbindingsmethode wijzigen (Wi-Fi / LoRa)

Volg deze stappen om de verbindingsmethode te wijzigen:

1. Ga naar de apparaatpagina, open de meter, tik op instellingen <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> en ga naar **Netwerkinstellingen**, tik vervolgens op **Verbindingsmethode Wijzigen**.
    <img src={require("./img/tap_device.png").default} width="210"/>
    <img src={require("./img/device_setting.png").default} width="200"/>
    <img src={require("./img/network_setting.png").default} width="200"/>
    <img src={require("./img/switch_connection_method.png").default} width="200"/>

2. Tik op **Apparaten verbinden** en kies **Wi-Fi-verbinding**.
   <img src={require("./img/connect_device.png").default} width="200"/>
   <img src={require("./img/select_wifi.png").default} width="210"/>

3. Selecteer het Wi-Fi-netwerk, voltooi de configuratie en wacht op verbinding.
   <img src={require("./img/configure_wifi.png").default} width="200"/>

4. Ga terug naar de apparaatdetails en controleer in **Netwerkinstellingen** of de verbindingsmethode is gewijzigd naar Wi-Fi.
   <img src={require("./img/network_info_wifi.png").default} width="200"/>