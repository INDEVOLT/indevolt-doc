---
title: Apparaten
description: Beheer al uw energieapparaten centraal en monitor realtime apparaatstatussen en bedrijfsgegevens.
---

# Apparaten

Op de pagina **Apparaten** worden alle energieapparaten in uw huis weergegeven, inclusief belangrijke informatie zoals het serienummer (SN), de online status en het tijdstip van de laatste gegevensupdate. Tik op de knop **+** rechtsboven om een [apparaat toe te voegen](./add-device.md).

<img src={require("./img/device.png").default} width="240"/>

## 1. Apparaat bewerken

Tik op de knop **Bewerken** onderaan de pagina en selecteer een apparaat, of houd een apparaatkaart ingedrukt om de bewerkingsmodus te openen. De volgende functies zijn beschikbaar:

- **Netwerkinstellingen**: tik op **Netwerkinstellingen** om de instellingen te openen. Het configuratieproces is hetzelfde als bij het [configureren van het netwerk](./add-device.md#stap-3-netwerkconfiguratie) tijdens het toevoegen van een apparaat.
- **Hernoemen**: tik op **Hernoemen** om de apparaatnaam aan te passen.
- **Apparaat verwijderen**: tik op **Apparaat verwijderen**. De app vraagt om bevestiging voordat het apparaat wordt verwijderd. Na verwijdering zijn de apparaatgegevens niet langer zichtbaar. Ga hier zorgvuldig mee om.

<img src={require("./img/device.png").default} width="240"/>
<img src={require("./img/edit_device.png").default} width="240"/>

## 2. Apparaatdetails

Tik op een apparaatkaart om de detailpagina te openen. Hier vindt u algemene informatie zoals signaalsterkte, SN, realtime gegevens en de schakelaar voor snelle verversing (⚡), evenals apparaatspecifieke parameters en functies.

<img src={require("./img/device_info.png").default} width="240"/>

## 3. Statistieken

Tik op het pictogram <img src={require("./img/statistics_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> rechtsboven op de detailpagina om de statistiekpagina te openen. Hier kunt u gegevenscurves bekijken op dag-, week-, maand- en jaarniveau.

<img src={require("./img/statistics.png").default} width="240"/>

## 4. Apparaatinstellingen

Tik op het pictogram <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> rechtsboven op de detailpagina om de instellingenpagina te openen. Hier vindt u onder andere apparaatnaam, gekoppelde apparaten, netwerkinstellingen, firmware-updates en andere apparaatspecifieke functies.

<img src={require("./img/settings.png").default} width="240"/>

### 4.1 Apparaatnaam wijzigen

Tik op **Apparaatnaam** om de naam die in de app wordt weergegeven direct te wijzigen.

<img src={require("./img/change_deivce_name.png").default} width="240"/>

### 4.2 Vermogensinstellingen

Op de pagina Vermogensinstellingen kunt u vermogenslimieten instellen, waaronder: Maximaal AC-uitgangsvermogen, Maximaal AC-ingangsvermogen, Maximaal nettoevoer.

1. Open de pagina Apparaatinstellingen en tik op **Vermogensinstelling**.
2. Selecteer de vermogensparameter die u wilt wijzigen.
3. Sleep de schuifregelaar naar de gewenste waarde.
4. Tik op **Opslaan** om de instelling toe te passen.

<img src={require("./img/settings.png").default} width="240"/>
<img src={require("./img/power_settings.png").default} width="240"/>
<img src={require("./img/ac_output_power.png").default} width="240"/>

#### AC-vermogen boven 800 W instellen

Wanneer u het maximale AC-uitgangsvermogen of AC-ingangsvermogen boven **800 W** wilt instellen, toont het systeem afhankelijk van het geselecteerde land verschillende waarschuwingen of verificatieprocedures.

:::info

Volgens de Duitse veiligheidsnormen mag het AC-uitgangsvermogen van een plug-in batterijsysteem niet hoger zijn dan **800 W**. Daarom moeten gebruikers in Duitsland een verificatie voor de professionele modus uitvoeren voordat zij hogere vermogens kunnen instellen.

Gebruikers in andere landen ontvangen alleen een veiligheidswaarschuwing en hoeven geen verificatie uit te voeren.

:::

**Stap 1: Land van gebruik instellen**

Ga naar de apparaatinstellingen, open **Land Van Gebruik** en selecteer uw land.

<img src={require("./img/settings.png").default} width="240"/>
<img src={require("./img/device_country.png").default} width="240"/>

**Stap 2: Activatiecode aanvragen (alleen voor Duitsland)**

Wanneer Duitse gebruikers voor het eerst een vermogen boven 800 W instellen, is een verificatie voor de professionele modus vereist.

1. Nadat u een waarde boven 800 W heeft ingesteld en op **Opslaan** heeft getikt, verschijnt het scherm voor verificatie van de professionele modus.
2. Tik op **Activeringscode aanvragen**.
3. Vul de volgende informatie in en tik op **Opslaan**:
   - Gebruikersinformatie
   - Apparaatinformatie
   - Installatie-Informatie
   - Installatiescenario Foto's
4. Na verzending kunt u de beoordelingsstatus bekijken onder **Activatiecode**:
   - **In Beoordeling**: aanvraag wordt beoordeeld.
   - **Goedgekeurd**: de activatiecode wordt weergegeven.
   - **Controle Mislukt**: dien nieuwe foto's in volgens de aanwijzingen, bijvoorbeeld wanneer:
     - de foto onduidelijk is;
     - de opnamehoek of inhoud onvolledig is;
     - de naleving van de installatie niet kan worden bevestigd;
     - de foto's niet overeenkomen met het apparaat;
     - de foto's niet voldoen aan de authenticiteitseisen.
5. Na goedkeuring kopieert u de activatiecode en plakt u deze in het invoerveld van de professionele modus. Tik vervolgens op **Indienen** om de verificatie te voltooien.

<img src={require("./img/verification1.png").default} width="240"/>
<img src={require("./img/verification2.png").default} width="240"/>
<img src={require("./img/verification3.png").default} width="240"/>
<img src={require("./img/auth_failure.png").default} width="240"/>
<img src={require("./img/auth_success.png").default} width="240"/>

**Stap 3: Vermogensinstellingen bevestigen en opslaan**

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="germany" label="Duitsland" default>

   Na succesvolle verificatie toont de app een veiligheidswaarschuwing wanneer de ingestelde waarde hoger is dan de aanbevolen limiet. Tik op **Doorgaan** om de instelling toe te passen.

   <img src={require("./img/800w_confirmation.png").default} width="240"/>

  </TabItem>

  <TabItem value="others" label="Andere landen">

   Wanneer een waarde boven 800 W wordt ingesteld, toont de app een veiligheidswaarschuwing. Bevestig de melding en tik op **Doorgaan** om de instelling toe te passen.

   <img src={require("./img/safety_note.png").default} width="240"/>

  </TabItem>
</Tabs>

### 4.3 Apparaten koppelen

Voor centraal beheer en een overzichtelijke gegevensweergave ondersteunt het systeem een ouder-kindrelatie tussen apparaten.

- Energieopslagsystemen kunnen als hoofdapparaat fungeren en subapparaten koppelen.

  <img src={require("./img/settings.png").default} width="240"/>
  <img src={require("./img/link_subdevice1.png").default} width="240"/>
  <img src={require("./img/link_subdevice2.png").default} width="240"/>

- Andere apparaattypen kunnen als subapparaat aan een hoofdapparaat worden gekoppeld.

  <img src={require("./img/select_link_parent_device.png").default} width="240"/>
  <img src={require("./img/link_parent_device1.png").default} width="240"/>
  <img src={require("./img/link_parent_device2.png").default} width="240"/>

Wanneer er nog geen apparaten beschikbaar zijn om te koppelen, voeg dan eerst een apparaat toe via [Apparaat toevoegen](./add-device.md).

### 4.4 Netwerkinstellingen

Tik op **Netwerkinstellingen** om de huidige wifi-netwerknaam en het toegewezen IP-adres van het apparaat te bekijken.

<img src={require("./img/settings2.png").default} width="240"/>
<img src={require("./img/network_settings.png").default} width="240"/>

### 4.5 Firmware-update

Tik op **Firmware-update** om de huidige firmwareversie en beschikbare updates te bekijken. Wanneer een nieuwe versie beschikbaar is, tikt u op **Uitvoeren** om de update online uit te voeren.

<img src={require("./img/settings2.png").default} width="240"/>
<img src={require("./img/fw_update.png").default} width="240"/>

## ## 5. Apparaatcluster

Wanneer meerdere energieopslagsystemen via een clusterverbinding zijn gekoppeld, worden zij beheerd en weergegeven als één energiecluster. Eén hoofdapparaat coördineert de werking, verdeelt automatisch de energie en synchroniseert instellingen zoals bedrijfsmodi en terugleverlimieten.

<img src={require("./img/cluster_device_list.png").default} width="240"/>

Tik op de clusterkaart om de detailpagina van het cluster te openen en informatie te bekijken zoals de hoofd-/subapparaatrelatie, de energiebeheerstrategie en realtime vermogensgegevens.

<img src={require("./img/cluster_info.png").default} width="240"/>

Tik op het instellingenpictogram ⚙ rechtsboven op de detailpagina om de clusterconfiguratie te wijzigen of de clusterkoppeling te verwijderen.

<img src={require("./img/cluster_settings.png").default} width="240"/>