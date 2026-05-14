---
title: Home Assistant-integratie
description: Integreer het INDEVOLT-energieopslagsysteem met Home Assistant voor lokale monitoring en automatiseringsbesturing.
toc_max_heading_level: 2
---

# Home Assistant-integratie

## Vereisten {#prerequisite}

### 1️⃣ Home Assistant-omgeving

Home Assistant is geïnstalleerd volgens de [officiële installatiehandleiding](https://www.home-assistant.io/installation/).


### 2️⃣ Hetzelfde lokale netwerk

Het apparaat en de Home Assistant-server moeten zich in hetzelfde lokale netwerk bevinden.


### 3️⃣ Het IP-adres van het apparaat ophalen

Controleer of het Indevolt-apparaat is ingeschakeld en succesvol een IP-adres heeft verkregen. Het IP-adres kan op een van de volgende manieren worden opgehaald:

**🧩 Methode 1 – Via de router**

Log in op het beheerpaneel van de router en zoek het IP-adres van het apparaat in de lijst met verbonden apparaten.


**🧩 Methode 2 – Via de INDEVOLT App**

Bekijk het IP-adres via de apparaatinstellingen in de app:

<img src={require("./img/select-network.png").default} width="240"/>
<img src={require("./img/view_ip.png").default} width="240"/>


**🧩 Methode 3 – Via UDP-broadcast (geavanceerde methode)**

1. Zorg ervoor dat het WiFi-netwerk waarmee het apparaat is verbonden zich in hetzelfde lokale netwerk bevindt als de computer.  
2. Open een netwerkdebugtool.  
3. Selecteer het protocol **UDP**.  
4. Selecteer **Local Host Addr**.  
5. Stel **Local Host Port** in op **10000**.  
6. Klik op **Open**.  

   <img src={require("./img/udp-settings.png").default} width="120"/>

7. Configureer in **Remote** het broadcastadres en de poort: **255.255.255.255:8099**  

   <img src={require("./img/set-udp-remote.png").default} width="480"/>

8. Voer in het berichtveld het AT-commando in: **AT+IGDEVICEIP**  
9. Klik op **Send**.  

   <img src={require("./img/send-at-command.png").default} width="360"/>

10. INDEVOLT-apparaten binnen hetzelfde netwerk sturen vervolgens hun IP-adres en serienummer (SN) terug.

    <img src={require("./img/udp-message.png").default} width="360"/>


### 4️⃣ Lokale API inschakelen

Controleer of de lokale API op het Indevolt-apparaat is ingeschakeld.

OpenData biedt drie modi, maar deze integratie ondersteunt momenteel alleen de modus **HTTP**:

- HTTP
- HTTP Digest
- HTTPS (momenteel nog niet ondersteund)

De lokale API kan worden geconfigureerd via de INDEVOLT App:

<img src={require("./img/profile_page.png").default} width="200"/>
<img src={require("./img/scan_qr_code.png").default} width="200"/>
<img src={require("./img/connect_device.png").default} width="200"/>
<img src={require("./img/device_connected.png").default} width="200"/>
<img src={require("./img/select_local_api.png").default} width="200"/>
<img src={require("./img/local_api.png").default} width="200"/>


### 5️⃣ Vereiste firmwareversie

Controleer of de firmwareversie van het apparaat voldoet aan of hoger is dan de onderstaande minimale vereiste versie.

| Model | Minimale firmwareversie |
| ---- | ---------------- |
| BK1600/BK1600 Ultra | V1.3.0A_R006.072_M4848_00000039 |
| SolidFlex 2000/PowerFlex 2000 | CMS：V1406.07.002E |



## Stap 1: Download de Indevolt-integratiebestanden {#step1}

1. Ga naar de [GitHub-repository](https://github.com/INDEVOLT/homeassistant-indevolt).
2. Klik op **Code** > **Download ZIP**。  
    <img src={require("./img/download-zip.png").default} width="240"/>

3. Pak het ZIP-bestand lokaal uit.

## Stap 2: Bepaal het configuratiemap-pad {#step2}

- Home Assistant OS: de configuratiemap bevindt zich in `/config`.
- Home Assistant Container: de configuratiemap kan worden gevonden via het bestand `configuration.yaml`.

:::tip

De map moet het bestand `configuration.yaml` bevatten.

```text
configuration directory/
└── configuration.yaml
```
:::


## Stap 3: Maak een map voor aangepaste integraties aan {#step3}

1. Open de `config directory`.
2. Maak de map `custom_components` aan (indien deze nog niet bestaat).

```text
config directory/
├── custom_components/
└── configuration.yaml
```

:::info
Alle aangepaste integraties moeten in `custom_components` worden geplaatst, anders kan Home Assistant ze niet herkennen.
:::

## Stap 4: Voeg de integratiebestanden toe {#step4}

Kopieer de uitgepakte map `indevolt` volledig naar de map `custom_components`.

```text
config directory/
└── custom_components/
    ├── indevolt/
       ├── __init__.py
       ├── manifest.json
       ├── ...
```

## Stap 5: Herstart Home Assistant {#step5}

1. Selecteer in de webinterface **Settings** > **System**。
   <img src={require("./img/select-ha-settings.png").default} width="720"/>

2. Klik rechtsboven op het herstartpictogram。
    <img src={require("./img/click-restart-icon.png").default} width="480"/>

3. Klik op **Restart Home Assistant**。
    <img src={require("./img/restart-ha.png").default} width="360"/>
   
4. Klik op **RESTART**。
    <img src={require("./img/click-restart.png").default} width="360"/>
   

## Stap 6: Voeg de integratie toe aan Home Assistant {#step6}

1. Ga na het herstarten naar de webinterface en selecteer **Settings** > **Devices & services**。
   <img src={require("./img/select-device-service.png").default} width="720"/>

2. Klik rechtsonder op **+ADD INTEGRATION**。
   <img src={require("./img/add-integration.png").default} width="180"/>

3. Zoek naar de integratie **indevolt**。
   <img src={require("./img/search-integration.png").default} width="360"/>

4. Configureer de parameters:
   - **host**: het IP-adres van het apparaat. Dit kan worden opgehaald via de router of de app.
   - **scan_interval**: wordt gebruikt om de frequentie van gegevensupdates te regelen. De aanbevolen instelling is 5 tot 30 seconden. De standaardwaarde is 30 seconden.

    <img src={require("./img/set-integration.png").default} width="300"/>

5. Klik op **Submit** om de installatie te voltooien。  

6. Na installatie worden de vermogensmodules en batterijpacks weergegeven. Klik op **Skip and Finish** om de configuratie af te ronden。  

   - Elke vermogensmodule ondersteunt maximaal 5 batterijpacks.  
   - Wanneer geen batterijpack is aangesloten, wordt het betreffende veld weergegeven als `None`.  
   - Zodra batterijpacks zijn aangesloten, wordt van elk pack het serienummer (SN) weergegeven voor identificatie.  

   <img src={require("./img/finish.png").default} width="360"/>

## De integratie bekijken {#view-integration}

Selecteer de INDEVOLT-integratie. Na een succesvolle installatie worden de apparaat- en entiteitsgegevens weergegeven。
  <img src={require("./img/view-integration.png").default} width="360"/>
  <img src={require("./img/view-device.png").default} width="720"/>


## Integratie bijwerken

1. Download de nieuwste versie van het integratiepakket。  
2. Overschrijf de bestanden in de map `custom_components`/`indevolt`。  
3. Klik op het menu met drie punten naast het eerder toegevoegde apparaat en selecteer **Delete** om het apparaat te verwijderen。  

   <img src={require("./img/delete-device.png").default} width="720"/>

4. Herstart Home Assistant。  
5. Klik op **Add Entry** en voeg het apparaat opnieuw toe volgens dezelfde stappen als eerder。


## Automatisering maken: Real-time Control instellen

1. Ga naar **Settings** > **Automations & Scenes**。  

   <img src={require("./img/automation.png").default} width="720"/>

2. Klik rechtsonder op **+ Create Automation**。  

   <img src={require("./img/create-automation1.png").default} width="720"/>

3. Selecteer **Create New Automation**。  

   <img src={require("./img/create-automation2.png").default} width="360"/>

4. Klik op **+ Add Trigger** en configureer de triggercondities volgens uw behoeften。  

   <img src={require("./img/new-automation.png").default} width="540"/>

5. Klik op **+ Add Action** om de apparaatactie te configureren。  

6. Zoek naar “mode” en selecteer **Set SolidFlex2000/PowerFlex2000 Work Mode** (voorbeeld)。  

   <img src={require("./img/search-mode.png").default} width="360"/>

7. Klik in het gedeelte **Target** op **+ Choose Device** en selecteer uw apparaat uit de lijst。  

   <img src={require("./img/choose-target1.png").default} width="720"/>
   <img src={require("./img/choose-target2.png").default} width="360"/>

8. Selecteer in het gedeelte **Work Mode** de optie **Real-Time Control** en configureer vervolgens naar wens **Status**, **Power** en **Target SOC**。  

   <img src={require("./img/set-mode1.png").default} width="360"/>
   <img src={require("./img/set-mode2.png").default} width="360"/>

9. Klik op **Save** om de automatisering op te slaan。


## FAQ

| Probleem | Oplossing |
| -------------------- | -------------------------------------------------------------------------- |
| Integratie verschijnt niet in de zoeklijst | Controleer het mappad: `custom_components`/`indevolt` |
| Geen verbinding met apparaat | 1. Controleer of het IP-adres correct is.<br />2. Controleer de netwerkstatus van het apparaat. |
| Geen gegevens bij entiteiten | 1. Controleer de voeding van het apparaat.<br />2. Controleer de netwerkstatus van het apparaat.<br />3. Controleer de foutmeldingen in de logbestanden. |