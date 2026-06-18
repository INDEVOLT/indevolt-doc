---
title: OpenData API
description: Toegang tot lokale apparaatgegevens via een standaard HTTP-interface en bediening van het INDEVOLT micro-energieopslagsysteem.
---

# OpenData API

## 1️⃣ Introductie {#introduction}

OpenData is een lichtgewicht communicatieframework dat is ontworpen voor WiFi-gebaseerde INDEVOLT IoT-apparaten. Het apparaat verbindt via WiFi met het lokale netwerk en ondersteunt zowel actieve dataversturing als externe query-respons.

**Kernfunctionaliteiten**

- Apparaatgegevens ophalen: realtime uitlezen van apparaatdata.
- Apparaatbediening: dynamisch aanpassen van apparaatparameters en configuratie.

**Toepassingsscenario’s**

- Ontvangen van externe HTTP-verzoeken

  <img src={require("./img/opendata-use-case.png").default} width="240"/>

---

## 2️⃣ Voorbereiding {#preparations}

### Stap 1. Tools installeren {#install-tools}

> - **[Postman](https://www.getpostman.com/) / cURL**: voor het aanroepen van HTTP API’s om apparaatgegevens op te halen of configuraties aan te passen.
> - Een netwerkdebugtool (zoals [NetAssist](https://www.cmsoft.cn/resource/102.html)): voor het ontvangen van UDP-broadcasts.

### Stap 2. API inschakelen {#enable-api}

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Standaard is de API-functie uitgeschakeld. Deze moet eerst worden ingeschakeld om te kunnen gebruiken. OpenData ondersteunt de volgende drie methoden:
> - [HTTP](#http)
> - [HTTP Digest](#http-digest)
> - HTTPS (momenteel niet ondersteund, binnenkort beschikbaar)
>
> Je kunt de lokale API instellen in de INDEVOLT App:
> - **Apparaat is online**: aanbevolen via **cloudconfiguratie**, eenvoudiger in gebruik  
> - **Apparaat is niet online**: via **lokale Bluetooth-configuratie**
>
> <Tabs>
>   <TabItem value="cloud" label="Cloud" default>
>     <img src={require("./img/select_device.png").default} width="200"/>
>     <img src={require("./img/device_info.png").default} width="200"/>
>     <img src={require("./img/select_local_api.png").default} width="200"/>
>     <img src={require("./img/local_api.png").default} width="200"/>
>   </TabItem>
>   <TabItem value="local" label="Lokaal Bluetooth">
>     <img src={require("./img/profile_page.png").default} width="200"/>
>     <img src={require("./img/scan_qr_code.png").default} width="200"/>
>     <img src={require("./img/connect_device.png").default} width="200"/>
>     <img src={require("./img/device_connected.png").default} width="200"/>
>     <img src={require("./img/select_local_api2.png").default} width="200"/>
>     <img src={require("./img/local_api2.png").default} width="200"/>
>   </TabItem>
> </Tabs>

### Stap 3. Firmwareversie controleren {#check-firmware}

> Als de firmwareversie lager is dan de tabelwaarden, moet je de firmware updaten.
>
> | Model | Vereiste firmwareversie |
> |------|--------------------------|
> | BK1600 / BK1600 Ultra | V1.3.0A_R006.072_M4848_00000039 |
> | SolidFlex 2000 / PowerFlex 2000 | CMS: V1406.07.002E |
>
> Controleer de firmware in de INDEVOLT App.
>
> <Tabs>
>   <TabItem value="cloud" label="Cloud" default>
>     <img src={require("./img/select_device.png").default} width="200"/>
>     <img src={require("./img/device_info.png").default} width="200"/>
>     <img src={require("./img/select_firmware2.png").default} width="200"/>
>     <img src={require("./img/view_firmware_version2.png").default} width="200"/>
>   </TabItem>
>   <TabItem value="local" label="Lokaal Bluetooth">
>     <img src={require("./img/profile_page.png").default} width="200"/>
>     <img src={require("./img/scan_qr_code.png").default} width="200"/>
>     <img src={require("./img/connect_device.png").default} width="200"/>
>     <img src={require("./img/device_connected.png").default} width="200"/>
>     <img src={require("./img/select_firmware.png").default} width="200"/>
>     <img src={require("./img/view_firmware_version.png").default} width="200"/>
>   </TabItem>
> </Tabs>

### Stap 4. IP-adres ophalen {#obtain-ip}

> Kies één van de volgende methoden:
> - 🧩 Methode 1: via routerbeheer;
> - 🧩 Methode 2: via de App;
>   <img src={require("./img/select_network.png").default} width="200"/>
>   <img src={require("./img/view_ip.png").default} width="200"/>
> - 🧩 Methode 3: via UDP-broadcast
>
>   (1) Zorg dat apparaat en pc in hetzelfde LAN zitten.  
>   (2) Open een netwerkdebugtool.  
>   (3) Selecteer **UDP** protocol.  
>   (4) Kies Local Host Addr.  
>   (5) Stel Local Host Port in op **10000**.  
>   (6) Klik op **Open**.  
>   <img src={require("./img/udp-settings.png").default} width="120"/>
>   (7) Stel remote in op: **255.255.255.255:8099**.  
>   <img src={require("./img/set-udp-remote.png").default} width="480"/>
>   (8) Vul commando in: **AT+IGDEVICEIP**.  
>   (9) Klik **Send**.  
>   <img src={require("./img/send-at-command.png").default} width="360"/>
>   (10) Het apparaat antwoordt met IP en SN.
>   <img src={require("./img/udp-message.png").default} width="360"/>

---


## 3️⃣ HTTP-gebruik {#http}

### 3.1 Verzoekstructuur {#request-structure}

**HTTP-methoden**

| Methode | Beschrijving |
|--------|-------------|
| GET    | Haalt een specifieke resource op van de server. |
| POST   | Voert een specifieke actie uit op de server. |

**Verzoek-URL**

```
http://{IP_ADDRESS}:8080/rpc/{API}
```

Waarbij:
- `{IP_ADDRESS}`: het IP-adres van het apparaat.
- `{API}`: de aan te roepen HTTP API.

**Voorbeeldverzoek**

- Apparaatgegevens ophalen:
  ```
  POST [http://192.168.31.213:8080/rpc/Indevolt.GetData?config={"t":[1664,1665]}](http://192.168.31.213:8080/rpc/Indevolt.GetData?config={%22t%22:[1664,1665]})
  ```

**cURL-voorbeeld**

- Batterij-SOC ophalen:
  ```
  curl -g -X POST -H "Content-Type: application/json" "[http://192.168.1.75:8080/rpc/Indevolt.GetData?config={\"t\":[6002]}](http://192.168.1.75:8080/rpc/Indevolt.GetData?config={\%22t\%22:[6002]})"
  ````

---

### 3.2 Verzoekfrequentielimieten {#rate-limit}

Om de stabiliteit van het systeem te waarborgen, gelden de volgende limieten voor alle HTTP API’s:

| Type | Limiet |
|------|--------|
| Aanbevolen interval | ≥ 5 seconden |
| Minimale ondersteunde interval | 1 seconde |

---

### 3.3 Foutcodes {#errors}

| Statuscode | Beschrijving | Uitleg |
|-----------|-------------|--------|
| 400 | Bad Request | De server kan het verzoek niet begrijpen; de client moet het verzoek aanpassen en opnieuw proberen. |
| 401 | Unauthorized | Authenticatie vereist; de client moet geldige inloggegevens verstrekken. |
| 403 | Forbidden | Het verzoek is begrepen maar geweigerd, meestal door onvoldoende rechten. |
| 404 | Not Found | De server kan de gevraagde resource niet vinden; mogelijk bestaat deze niet meer. |
| 405 | Method Not Allowed | De gebruikte methode is niet toegestaan voor deze resource. |
| 408 | Request Timeout | De server heeft te lang op het verzoek gewacht; probeer later opnieuw. |
| 409 | Conflict | Het verzoek conflicteert met de huidige status van de resource. |
| 410 | Gone | De resource is permanent verwijderd en niet meer beschikbaar. |
| 500 | Internal Server Error | Onbekende serverfout; het verzoek kan niet worden voltooid. |
| 501 | Not Implemented | De server ondersteunt deze methode niet. |
| 502 | Bad Gateway | Ongeldige respons ontvangen van een upstream server. |
| 503 | Service Unavailable | Server is tijdelijk niet beschikbaar door overbelasting of onderhoud. |
| 504 | Gateway Timeout | Geen tijdige respons van upstream server ontvangen. |
| 505 | HTTP Version Not Supported | De gebruikte HTTP-versie wordt niet ondersteund. |

---

## 4️⃣ HTTP Digest {#http-digest}

Digest-authenticatie wordt gebruikt om gebruikers te verifiëren zonder wachtwoorden in platte tekst te verzenden.

In HTTP+Digest-modus:
- Bij eerste gebruik of na fabrieksreset moet eerst de `User.SetConfig`-interface worden gebruikt om het standaardwachtwoord te wijzigen.
- Na succesvolle wijziging kunnen andere interfaces worden gebruikt.

**Tools**

- ASCII → hex-converter  
- Hex → Base64-converter  
- AES-GCM-encryptietool  

**Voorbeeld: wachtwoord wijzigen**

1. Converteer het nieuwe wachtwoord, oude wachtwoord en randomwaarde naar hex.

   | | ASCII-string | Hex |
   |--|-------------|-----|
   | Nieuw wachtwoord | qwertyui | 71 77 65 72 74 79 75 69 |
   | Oud wachtwoord | qazwsxed | 71 61 7a 77 73 78 65 64 00 00 00 00 00 00 00 00 (aangevuld tot 16 bytes) |
   | Randomwaarde | 123456 | 31 32 33 34 35 36 00 00 00 00 00 00 (aangevuld tot 12 bytes) |

2. Gebruik een AES-GCM tool om te versleutelen (voer bovenstaande waarden in).
    <img src={require("./img/aes-gcm-info.png").default} width="480"/>

3. Converteer ciphertext en tag naar Base64.

   | | Hex | Base64 |
   |--|-----|--------|
   | Ciphertext | 4e b2 90 67 54 02 d4 c4 | TrKQZ1QC1MQ= |
   | Tag | cf 0b d0 4e 37 a0 e6 bb cb 74 1b cb ce ab 72 9a | zwvQTjeg5rvLdBvLzqtymg== |

4. Voltooi Digest-authenticatie en verstuur het `User.SetConfig`-verzoek.

   <span className="http-method-badge">POST</span> **`http://{IP_ADDRESS}:8080/rpc/User.SetConfig?config={"Password":"{PASSWORD}"}`**

   Waarbij:
   - `{IP_ADDRESS}`: het IP-adres van het apparaat.
   - `{PASSWORD}`: het met AES-128-GCM versleutelde en naar Base64 geconverteerde wachtwoord.

   <img src={require("./img/digest-auth.png").default} width="720"/>

| Parameter | Type | Beschrijving | Verplicht |
|----------|------|-------------|----------|
| Username | String | Standaardwaarde `opend` | Ja |
| Password | String | Standaard apparaatsleutel.<br /><br />- Met het **standaard wachtwoord** kan alleen de **`User.SetConfig`**-interface worden aangeroepen om het wachtwoord te wijzigen.<br />- Na het wijzigen van het wachtwoord kunnen met het **nieuwe wachtwoord** andere interfaces worden aangeroepen. | Verplicht |
| Realm    | String | - Bij het aanroepen van **`User.SetConfig`** om het wachtwoord te wijzigen, moet een **AES128-GCM Tag** worden opgegeven.<br />- Bij het aanroepen van **andere interfaces** kan een willekeurige waarde worden gebruikt. | Verplicht |
| Nonce | Digest standaard | Willekeurige waarde toegestaan | Ja |
| Algorithm | Digest standaard | MD5 | Ja |
| qop | Digest standaard | auth | Ja |
| Nonce Count | Digest standaard | Willekeurige waarde toegestaan | Ja |
| Client Nonce | Digest standaard | Willekeurige waarde toegestaan | Ja |

---

## 5️⃣ API {#api}

| Component | Beschrijving |
|----------|-------------|
| [`Indevolt`](#indevolt) | Leest apparaatgegevens en bestuurt het INDEVOLT-apparaat. |
| [`Sys`](#sys) | Haalt CMS (Communication Management System)-informatie van het apparaat op. |

---

## 6️⃣ `Indevolt` {#indevolt}

`Indevolt` biedt API's voor gegevensuitwisseling met micro-energieopslagsystemen. Hiermee kunt u bedrijfsgegevens en configuratieparameters van het apparaat ophalen en besturingsopdrachten naar het apparaat verzenden.

* [**`Indevolt.GetData`**](#retrieve-data): Haalt bedrijfsgegevens of configuratieparameters van het apparaat op.
* [**`Indevolt.SetData`**](#control-device): Wijzigt configuratieparameters van het apparaat of voert besturingsacties uit.

**Ondersteunde apparaten**

* BK1600 / BK1600 Ultra
* SolidFlex 2000 / PowerFlex 2000

### 6.1 `Indevolt.GetData` {#retrieve-data}

Haalt bedrijfsgegevens of configuratieparameters van het apparaat op.

import ApiBlock from "@site/src/components/ApiBlock";
import ResponseBlock from "@site/src/components/ResponseBlock";

<ApiBlock method="POST" path="/rpc/Indevolt.GetData">

```bash
curl -g -X POST -H "Content-Type: application/json" "http://192.168.31.213:8080/rpc/Indevolt.GetData?config={\"t\":[1664,1665]}"
```

</ApiBlock>

<ResponseBlock title="200 OK">

```json
{
  "1664": 100,
  "1665": 251
}
```

</ResponseBlock>

#### Queryparameters

| Parameter | Type | Verplicht | Beschrijving |
|-----------|------|-----------|--------------|
| `config` | Object | Ja | Configuratie voor het ophalen van gegevens. |

`config`-object

| Parameter | Type | Verplicht | Beschrijving |
|-----------|------|-----------|--------------|
| `t` | Array | Ja | Lijst met te lezen [cJSON-punten](#cjson-punten). |

#### Antwoord

Geeft apparaatgegevens terug in JSON-formaat, waarbij:

* **Key**: cJSON-punt
* **Value**: Huidige waarde van het bijbehorende gegevenspunt

#### cJSON-punten

De onderstaande cJSON-punten worden gebruikt om bedrijfsgegevens of configuratieparameters van het apparaat op te halen. Welke cJSON-punten worden ondersteund, verschilt per apparaatmodel. Raadpleeg de lijst met gegevenspunten van het betreffende apparaat voor meer informatie.



<Tabs>
  <TabItem value="sf2000" label="SolidFlex 2000 / PowerFlex 2000" default>

<table><thead>
    <tr>
      <th>cJSON-punt</th>
      <th>cJSON-waardetype</th>
      <th>Eenheid</th>
      <th>Beschrijving</th>
      <th>Enum-definitie</th>
      <th>API</th>
      <th>Opmerking</th>
    </tr></thead>
  <tbody>
    <tr>
      <td colspan="7" style={{ textAlign: 'center' }}>SN </td>
    </tr>
    <tr>
      <td>0</td>
      <td>String</td>
      <td></td>
      <td>Serienummer van apparaat</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="7" style={{ textAlign: 'center' }}>Firmwareversie-informatie</td>
    </tr>
    <tr>
      <td>1118</td>
      <td>String</td>
      <td></td>
      <td>PG2000Series EMS</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1109</td>
      <td>String</td>
      <td></td>
      <td>PG2000Series BMS-MB</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1119</td>
      <td>String</td>
      <td></td>
      <td>PG2000Series PCS</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1120</td>
      <td>String</td>
      <td></td>
      <td>PG2000Series DCDC</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1136</td>
      <td>String</td>
      <td></td>
      <td>SFA/PFA DCDC1</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1137</td>
      <td>String</td>
      <td></td>
      <td>SFA/PFA BMS1</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1138</td>
      <td>String</td>
      <td></td>
      <td>SFA/PFA DCDC2</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1139</td>
      <td>String</td>
      <td></td>
      <td>SFA/PFA BMS2</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1140</td>
      <td>String</td>
      <td></td>
      <td>SFA/PFA DCDC3</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1141</td>
      <td>String</td>
      <td></td>
      <td>SFA/PFA BMS3</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1142</td>
      <td>String</td>
      <td></td>
      <td>SFA/PFA DCDC4</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1143</td>
      <td>String</td>
      <td></td>
      <td>SFA/PFA BMS4</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
      <tr>
      <td>1098</td>
      <td>String</td>
      <td></td>
      <td>SFA/PFA DCDC5</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1099</td>
      <td>String</td>
      <td></td>
      <td>SFA/PFA BMS5</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="7" style={{ textAlign: 'center' }}>Systeeminformatie</td>
    </tr>
    <tr>
      <td>7101</td>
      <td>Enum</td>
      <td></td>
      <td>Bedrijfsmodus</td>
      <td>1: Prioriteit voor eigen verbruik<br />4: Realtimebesturing<br />5: Laad-/ontlaadschema</td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>142</td>
      <td>Num</td>
      <td>kWh</td>
      <td>Nominale capaciteit</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>2618</td>
      <td>Num</td>
      <td></td>
      <td>Netladen</td>
      <td>1000: Uitgeschakeld<br />1001: Ingeschakeld</td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>11009</td>
      <td>Num</td>
      <td>W</td>
      <td>Omvormer-ingangslimiet</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>2101</td>
      <td>Num</td>
      <td>W</td>
      <td>Totaal AC-ingangsvermogen</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>2108</td>
      <td>Num</td>
      <td>W</td>
      <td>Totaal AC-uitgangsvermogen</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>11010</td>
      <td>Num</td>
      <td>W</td>
      <td>Terugleverlimiet</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>11011</td>
      <td>Num</td>
      <td>W</td>
      <td>Maximaal AC-uitgangsvermogen</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>680</td>
      <td>Num</td>
      <td></td>
      <td>Bypass</td>
      <td>0: Uitgeschakeld<br />1: Ingeschakeld</td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>11039</td>
      <td>Num</td>
      <td></td>
      <td>Bypassmodus</td>
      <td>0: EPS<br />1: M-Inv</td>
      <td>`Indevolt.GetData`</td>
      <td>Automatisch schakelen op basis van voorwaartse en omgekeerde stroomrichting</td>
    </tr>
    <tr>
      <td>6105</td>
      <td>Num</td>
      <td>%</td>
      <td>Reserve-SOC</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>7171</td>
      <td>Num</td>
      <td></td>
      <td>Verlichting</td>
      <td>0: Uitgeschakeld<br />1: Ingeschakeld</td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>8646</td>
      <td>Num</td>
      <td>Dagen</td>
      <td>Batterijkalibratie: Cyclus</td>
      <td>0-60 <br />0: UIT</td>
      <td>`Indevolt.GetData`</td>
      <td>Bedrijfstijd zonder volledige lading</td>
    </tr>
    <tr>
      <td>8647</td>
      <td>Num</td>
      <td>Tijd</td>
      <td>Batterijkalibratie: Starttijd</td>
      <td>DEC-->HEX<br />H: uur<br />L: minuut</td>
      <td>`Indevolt.GetData`</td>
      <td>Bijv.: 256-->0100<br /><br />01(HEX-H)-->01u<br />00(HEX-L)-->00min</td>
    </tr>
    <tr>
      <td>2802</td>
      <td>Num</td>
      <td>W</td>
      <td>Batterijkalibratie: laadvermogen (AC)</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>

   <tr>
     <td colspan="7" style={{ textAlign: 'center' }}>Clusterinformatie</td>
   </tr>
   <tr>
     <td>606</td>
     <td>Enum</td>
     <td></td>
     <td>Master/slave-identificatie</td>
     <td>1000: Master<br />1001: Slave<br />1002: Geen</td>
     <td>`Indevolt.GetData`</td>
     <td></td>
   </tr>
   <tr>
     <td colspan="7" style={{ textAlign: 'center' }}>Bypassvermogen</td>
   </tr>
   <tr>
     <td>667</td>
     <td>Float</td>
     <td>W</td>
     <td>Bypassvermogen</td>
     <td></td>
     <td>`Indevolt.GetData`</td>
     <td>Realtimevermogen dat via het bypasspad stroomt.<br/>- Netgekoppeld: vermogen kan afkomstig zijn van de micro-omvormer of direct aan belastingen worden geleverd<br/>- Off-grid: vermogen wordt >direct aan belastingen geleverd</td>
   </tr>
   <tr>
     <td colspan="7" style={{ textAlign: 'center' }}>Elektrische energie-informatie</td>
   </tr>
   <tr>
     <td>2107</td>
     <td>Num</td>
     <td>kWh</td>
     <td>Totale AC-ingangsenergie</td>
     <td></td>
     <td>`Indevolt.GetData`</td>
     <td>Totale energie die van het elektriciteitsnet wordt afgenomen. Deze energie kan worden gebruikt om de batterij op te laden of belastingen rechtstreeks via bypass van stroom te voorzien.</td>
   </tr>
   <tr>
     <td>2104</td>
     <td>Num</td>
     <td>kWh</td>
     <td>Totale AC-uitgangsenergie</td>
     <td></td>
     <td>`Indevolt.GetData`</td>
     <td>Totale elektrische energie, inclusief (DC + AC + bypass)</td>
   </tr>
   <tr>
     <td>11035</td>
     <td>Num</td>
     <td>Wh</td>
     <td>Dagelijkse bypass M-Inv-ingangsenergie</td>
     <td></td>
     <td>`Indevolt.GetData`</td>
     <td>Dagelijkse energie afkomstig van de micro-omvormer. Alleen beschikbaar in netgekoppelde modus wanneer het systeem met een micro-omvormer is verbonden.</td>
   </tr>
   <tr>
     <td>11034</td>
     <td>Num</td>
     <td>Wh</td>
     <td>Totale bypass M-Inv-ingangsenergie</td>
     <td></td>
     <td>`Indevolt.GetData`</td>
     <td>Totale energie afkomstig van de micro-omvormer. Alleen beschikbaar in netgekoppelde modus wanneer het systeem met een micro-omvormer is verbonden.</td>
   </tr>
   <tr>
     <td>11037</td>
     <td>Num</td>
     <td>kWh</td>
     <td>Dagelijkse off-grid bypass-uitgangsenergie</td>
     <td></td>
     <td>`Indevolt.GetData`</td>
     <td>Dagelijkse elektrische energie van off-grid bypass-ontlading</td>
   </tr>
   <tr>
     <td>2105</td>
     <td>Num</td>
     <td>kWh</td>
     <td>Totale off-grid bypass-uitgangsenergie</td>
     <td></td>
     <td>`Indevolt.GetData`</td>
     <td>Totale elektrische energie van off-grid bypass-ontlading</td>
   </tr>
   <tr>
     <td>9285</td>
     <td>Num</td>
     <td>Wh</td>
     <td>Dagelijkse bypass-uitgangsenergie</td>
     <td></td>
     <td>`Indevolt.GetData`</td>
     <td>Dagelijkse elektrische energie van bypass-ontlading (netgekoppeld + off-grid)</td>
   </tr>
   <tr>
       <td>9284</td>
       <td>Num</td>
       <td>Wh</td>
       <td>Totale bypass-uitgangsenergie</td>
       <td></td>
     <td>`Indevolt.GetData`</td>
     <td>Totale elektrische energie van bypass-ontlading (netgekoppeld + off-grid)</td>
   </tr>
   <tr>
     <td>1502</td>
     <td>Num</td>
     <td>kWh</td>
     <td>Dagelijkse PV-opwekking</td>
     <td></td>
     <td>`Indevolt.GetData`</td>
     <td></td>
   </tr>
   <tr>
     <td>1505</td>
     <td>Num</td>
     <td>Wh</td>
     <td>Cumulatieve productie</td>
     <td></td>
     <td>`Indevolt.GetData`</td>
     <td></td>
   </tr>
   <tr>
     <td>6004</td>
     <td>Num</td>
     <td>kWh</td>
     <td>Dagelijkse laadenergie van batterij</td>
     <td></td>
     <td>`Indevolt.GetData`</td>
     <td></td>
   </tr>
   <tr>
     <td>6005</td>
     <td>Num</td>
     <td>kWh</td>
     <td>Dagelijkse ontlaadenergie van batterij</td>
     <td></td>
     <td>`Indevolt.GetData`</td>
     <td></td>
   </tr>
   <tr>
     <td>6006</td>
     <td>Num</td>
     <td>kWh</td>
     <td>Totale laadenergie van batterij</td>
     <td></td>
     <td>`Indevolt.GetData`</td>
     <td></td>
   </tr>
   <tr>
     <td>6007</td>
     <td>Num</td>
     <td>kWh</td>
     <td>Totale ontlaadenergie van batterij</td>
     <td></td>
     <td>`Indevolt.GetData`</td>
     <td></td>
   </tr>
   <tr>
     <td colspan="7" style={{ textAlign: 'center' }}>Status elektriciteitsmeter</td>
   </tr>
   <tr>
     <td>7120</td>
     <td>Enum</td>
     <td></td>
     <td>Verbindingsstatus van meter</td>
     <td>1000: Ingeschakeld<br />1001: Uitgeschakeld</td>
     <td>`Indevolt.GetData`</td>
     <td></td>
   </tr>
   <tr>
     <td>11016</td>
     <td>Float</td>
     <td>W</td>
     <td>Metervermogen</td>
     <td></td>
     <td>`Indevolt.GetData`</td>
     <td></td>
   </tr>
   <tr>
     <td colspan="7" style={{ textAlign: 'center' }}>Netinformatie</td>
   </tr>
   <tr>
     <td>2600</td>
     <td>Num</td>
     <td>V</td>
     <td>Netspanning</td>
     <td></td>
     <td>`Indevolt.GetData`</td>
     <td></td>
   </tr>
   <tr>
     <td>2612</td>
     <td>Num</td>
     <td>Hz</td>
     <td>Netfrequentie</td>
     <td></td>
     <td>`Indevolt.GetData`</td>
     <td></td>
   </tr>
   <tr>
     <td colspan="7" style={{ textAlign: 'center' }}>Bedrijfsparameters van batterijpakket</td>
   </tr>
   <tr>
     <td>6001</td>
     <td>Enum</td>
     <td></td>
     <td>Laad-/ontlaadstatus van batterij</td>
     <td>1000: Stand-by<br />1001: Laden<br />1002: Ontladen</td>
     <td>`Indevolt.GetData`</td>
     <td></td>
   </tr>
   <tr>
     <td>6000</td>
     <td>Num</td>
     <td>W</td>
     <td>Batterijvermogen</td>
     <td></td>
     <td>`Indevolt.GetData`</td>
     <td></td>
   </tr>
   <tr>
     <td>6002</td>
     <td>Num</td>
     <td>%</td>
     <td>Totale batterij-SOC</td>
     <td></td>
     <td>`Indevolt.GetData`</td>
     <td></td>
   </tr>

  <tr>
    <td>9008</td>
    <td>String</td>
    <td> </td>
    <td>Batterij SN-MB</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9000</td>
    <td>Num</td>
    <td>%</td>
    <td>Batterij SOC-MB</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9004</td>
    <td>Num</td>
    <td>V</td>
    <td>Batterijspanning-MB</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9013</td>
    <td>Num</td>
    <td>A</td>
    <td>Batterijstroom-MB</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9012</td>
    <td>Num</td>
    <td>℃</td>
    <td>Batterijtemperatuur-MB</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9009</td>
    <td>Num</td>
    <td>V</td>
    <td>Celspanning 1-MB</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9011</td>
    <td>Num</td>
    <td>V</td>
    <td>Celspanning 2-MB</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9032</td>
    <td>String</td>
    <td> </td>
    <td>Batterij SN-Pack1</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9016</td>
    <td>Num</td>
    <td>%</td>
    <td>Batterij SOC-Pack1</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9020</td>
    <td>Num</td>
    <td>V</td>
    <td>Batterijspanning-Pack1</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>19173</td>
    <td>Num</td>
    <td>A</td>
    <td>Batterijstroom-Pack1</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9030</td>
    <td>Num</td>
    <td>℃</td>
    <td>Batterijtemperatuur-Pack1</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9021</td>
    <td>Num</td>
    <td>V</td>
    <td>Celspanning-Pack1</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9023</td>
    <td>Num</td>
    <td>V</td>
    <td>Celspanning-Pack1</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9051</td>
    <td>String</td>
    <td> </td>
    <td>Batterij SN-Pack2</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9035</td>
    <td>Num</td>
    <td>%</td>
    <td>Batterij SOC-Pack2</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9039</td>
    <td>Num</td>
    <td>V</td>
    <td>Batterijspanning-Pack2</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>19174</td>
    <td>Num</td>
    <td>A</td>
    <td>Batterijstroom-Pack2</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9049</td>
    <td>Num</td>
    <td>℃</td>
    <td>Batterijtemperatuur-Pack2</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9040</td>
    <td>Num</td>
    <td>V</td>
    <td>Celspanning 1-Pack2</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9042</td>
    <td>Num</td>
    <td>V</td>
    <td>Celspanning 2-Pack2</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9070</td>
    <td>String</td>
    <td> </td>
    <td>Batterij SN-Pack3</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9054</td>
    <td>Num</td>
    <td>%</td>
    <td>Batterij SOC-Pack3</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9058</td>
    <td>Num</td>
    <td>V</td>
    <td>Batterijspanning-Pack3</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>19175</td>
    <td>Num</td>
    <td>A</td>
    <td>Batterijstroom-Pack3</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9068</td>
    <td>Num</td>
    <td>℃</td>
    <td>Batterijtemperatuur-Pack3</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9059</td>
    <td>Num</td>
    <td>V</td>
    <td>Celspanning 1-Pack3</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9061</td>
    <td>Num</td>
    <td>V</td>
    <td>Celspanning 2-Pack3</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9165</td>
    <td>Num</td>
    <td> </td>
    <td>Batterij SN-Pack4</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9149</td>
    <td>Num</td>
    <td>%</td>
    <td>Batterij SOC-Pack4</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9153</td>
    <td>Num</td>
    <td>V</td>
    <td>Batterijspanning-Pack4</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>19176</td>
    <td>Num</td>
    <td>A</td>
    <td>Batterijstroom-Pack4</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9163</td>
    <td>Num</td>
    <td>℃</td>
    <td>Batterijtemperatuur-Pack4</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9154</td>
    <td>Num</td>
    <td>V</td>
    <td>Celspanning 1-Pack4</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9156</td>
    <td>Num</td>
    <td>V</td>
    <td>Celspanning 2-Pack4</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9218</td>
    <td>String</td>
    <td> </td>
    <td>Batterij SN-Pack5</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9202</td>
    <td>Num</td>
    <td>%</td>
    <td>Batterij SOC-Pack5</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9206</td>
    <td>Num</td>
    <td>V</td>
    <td>Batterijspanning-Pack5</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>19177</td>
    <td>Num</td>
    <td>A</td>
    <td>Batterijstroom-Pack5</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9216</td>
    <td>Num</td>
    <td>℃</td>
    <td>Batterijtemperatuur-Pack5</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9219</td>
    <td>Num</td>
    <td>V</td>
    <td>Celspanning 1-Pack5</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9222</td>
    <td>Num</td>
    <td>V</td>
    <td>Celspanning 2-Pack5</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="7" style={{ textAlign: 'center' }}>PV-bedrijfsparameters</td>
  </tr>
  <tr>
    <td>1501</td>
    <td>Num</td>
    <td>W</td>
    <td>Totaal DC-uitgangsvermogen</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>1632</td>
    <td>Num</td>
    <td>A</td>
    <td>DC-ingangsstroom 1</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>1600</td>
    <td>Num</td>
    <td>V</td>
    <td>DC-ingangsspanning 1</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>1664</td>
    <td>Num</td>
    <td>W</td>
    <td>DC-ingangsvermogen 1</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>1633</td>
    <td>Num</td>
    <td>A</td>
    <td>DC-ingangsstroom 2</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>1601</td>
    <td>Num</td>
    <td>V</td>
    <td>DC-ingangsspanning 2</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>1665</td>
    <td>Num</td>
    <td>W</td>
    <td>DC-ingangsvermogen 2</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>1634</td>
    <td>Num</td>
    <td>A</td>
    <td>DC-ingangsstroom 3</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>1602</td>
    <td>Num</td>
    <td>V</td>
    <td>DC-ingangsspanning 3</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>1666</td>
    <td>Num</td>
    <td>W</td>
    <td>DC-ingangsvermogen 3</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>1635</td>
    <td>Num</td>
    <td>A</td>
    <td>DC-ingangsstroom 4</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>1603</td>
    <td>Num</td>
    <td>V</td>
    <td>DC-ingangsspanning 4</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>1667</td>
    <td>Num</td>
    <td>W</td>
    <td>DC-ingangsvermogen 4</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  
  </tbody>
</table>




 </TabItem>
 <TabItem value="bk1600" label="BK1600 / BK1600 Ultra">

<table>
<thead>
<tr>
    <th>cJSON-punt</th>
    <th>cJSON-waardetype</th>
    <th>Eenheid</th>
    <th>Beschrijving</th>
    <th>Enum-definitie</th>
    <th>API</th>
    <th>Opmerking</th>
</tr>
</thead>
<tbody>

<tr>
    <td colspan="7" style={{ textAlign: 'center' }}>SN</td>
</tr>
<tr>
    <td>0</td>
    <td>String</td>
    <td></td>
    <td>Apparaat-SN</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>

<tr>
    <td colspan="7" style={{ textAlign: 'center' }}>Firmwareversie-informatie</td>
</tr>
<tr>
    <td>1118</td>
    <td>String</td>
    <td></td>
    <td>BK1600Series EMS</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>1107</td>
    <td>String</td>
    <td></td>
    <td>BK1600Series BMS</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>1119</td>
    <td>String</td>
    <td></td>
    <td>BK1600Series PCS</td>
    <td>H_HEX → DEC + L_HEX → DEC</td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>311</td>
    <td>String</td>
    <td></td>
    <td>BK1600Series MPPT</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>

<tr>
    <td colspan="7" style={{ textAlign: 'center' }}>Systeembedrijfsinformatie</td>
</tr>
<tr>
    <td>142</td>
    <td>Num</td>
    <td>kWh</td>
    <td>Nominale capaciteit</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>2618</td>
    <td>Num</td>
    <td></td>
    <td>Netladen</td>
    <td>1000: Uitgeschakeld<br />1001: Ingeschakeld</td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>2617</td>
    <td>Num</td>
    <td>W</td>
    <td>Vermogenslimiet voor teruglevering</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>4</td>
    <td>Num</td>
    <td>W</td>
    <td>Maximaal AC-uitgangsvermogen</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>2619</td>
    <td>Num</td>
    <td>W</td>
    <td>Maximaal AC-ingangsvermogen</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>2101</td>
    <td>Num</td>
    <td>W</td>
    <td>Totaal AC-ingangsvermogen</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>2107</td>
    <td>Num</td>
    <td>kWh</td>
    <td>Totale AC-ingangsenergie</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>2108</td>
    <td>Num</td>
    <td>W</td>
    <td>Totaal AC-uitgangsvermogen</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>680</td>
    <td>Enum</td>
    <td></td>
    <td>Bypass</td>
    <td>0: Uitgeschakeld<br />1: Ingeschakeld</td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>7170</td>
    <td>Enum</td>
    <td></td>
    <td>Bypassmodus</td>
    <td>0: EPS<br />1: M-Inv</td>
    <td>`Indevolt.GetData`</td>
    <td>Schakelt automatisch op basis van de voorwaartse en omgekeerde stroomrichting.</td>
</tr>
<tr>
    <td>7101</td>
    <td>Enum</td>
    <td></td>
    <td>Bedrijfsmodus</td>
    <td>
        0: Draagbare buitentoepassing<br />
        1: Eigen verbruik met prioriteit<br />
        4: Real-time regeling<br />
        5: Laad-/ontlaadschema
    </td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>1502</td>
    <td>Num</td>
    <td>kWh</td>
    <td>Dagelijkse productie</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>1505</td>
    <td>Num</td>
    <td>0.001kWh</td>
    <td>Cumulatieve productie</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>6105</td>
    <td>Num</td>
    <td>%</td>
    <td>Back-up-SOC</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>6004</td>
    <td>Num</td>
    <td>kWh</td>
    <td>Dagelijkse laadenergie van de batterij</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>6005</td>
    <td>Num</td>
    <td>kWh</td>
    <td>Dagelijkse ontlaadenergie van de batterij</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>6006</td>
    <td>Num</td>
    <td>kWh</td>
    <td>Totale laadenergie van de batterij</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>6007</td>
    <td>Num</td>
    <td>kWh</td>
    <td>Totale ontlaadenergie van de batterij</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>7120</td>
    <td>Enum</td>
    <td></td>
    <td>Status van de meterverbinding</td>
    <td>1000: AAN<br />1001: UIT</td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>21028</td>
    <td>Num</td>
    <td>W</td>
    <td>Metervermogen</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>

<tr>
    <td colspan="7" style={{ textAlign: 'center' }}>Bypassvermogen (niet van toepassing op BK1600)</td>
</tr>
<tr>
    <td>667</td>
    <td>Num</td>
    <td>W</td>
    <td>Bypassvermogen</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>

<tr>
    <td colspan="7" style={{ textAlign: 'center' }}>Bedrijfsparameters van het batterijpakket</td>
</tr>
<tr>
    <td>6001</td>
    <td>Enum</td>
    <td></td>
    <td>Laad-/ontlaadstatus van de batterij</td>
    <td>
        1000: Statisch<br />
        1001: Laden<br />
        1002: Ontladen
    </td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>6000</td>
    <td>Num</td>
    <td>W</td>
    <td>Batterijvermogen</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>6002</td>
    <td>Num</td>
    <td>%</td>
    <td>Totale batterij-SOC</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>7620</td>
    <td>Num</td>
    <td>℃</td>
    <td>Batterijtemperatuur</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>10112</td>
    <td>Num</td>
    <td>V</td>
    <td>Celspanning 1</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr><td>10113</td><td>Num</td><td>V</td><td>Celspanning 2</td><td></td><td>`Indevolt.GetData`</td><td></td></tr>
<tr><td>10114</td><td>Num</td><td>V</td><td>Celspanning 3</td><td></td><td>`Indevolt.GetData`</td><td></td></tr>
<tr><td>10115</td><td>Num</td><td>V</td><td>Celspanning 4</td><td></td><td>`Indevolt.GetData`</td><td></td></tr>
<tr><td>10116</td><td>Num</td><td>V</td><td>Celspanning 5</td><td></td><td>`Indevolt.GetData`</td><td></td></tr>
<tr><td>10117</td><td>Num</td><td>V</td><td>Celspanning 6</td><td></td><td>`Indevolt.GetData`</td><td></td></tr>
<tr><td>10118</td><td>Num</td><td>V</td><td>Celspanning 7</td><td></td><td>`Indevolt.GetData`</td><td></td></tr>
<tr><td>10119</td><td>Num</td><td>V</td><td>Celspanning 8</td><td></td><td>`Indevolt.GetData`</td><td></td></tr>
<tr><td>10120</td><td>Num</td><td>V</td><td>Celspanning 9</td><td></td><td>`Indevolt.GetData`</td><td></td></tr>
<tr><td>10121</td><td>Num</td><td>V</td><td>Celspanning 10</td><td></td><td>`Indevolt.GetData`</td><td></td></tr>
<tr><td>10122</td><td>Num</td><td>V</td><td>Celspanning 11</td><td></td><td>`Indevolt.GetData`</td><td></td></tr>

<tr>
    <td colspan="7" style={{ textAlign: 'center' }}>PV-bedrijfsparameters</td>
</tr>
<tr>
    <td>1501</td>
    <td>Num</td>
    <td>W</td>
    <td>Totaal DC-uitgangsvermogen</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>1632</td>
    <td>Num</td>
    <td>A</td>
    <td>DC-ingangsstroom 1</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>1600</td>
    <td>Num</td>
    <td>V</td>
    <td>DC-ingangsspanning 1</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>1664</td>
    <td>Num</td>
    <td>W</td>
    <td>DC-ingangsvermogen 1</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>1633</td>
    <td>Num</td>
    <td>A</td>
    <td>DC-ingangsstroom 2</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>1601</td>
    <td>Num</td>
    <td>V</td>
    <td>DC-ingangsspanning 2</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>1665</td>
    <td>Num</td>
    <td>W</td>
    <td>DC-ingangsvermogen 2</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>

</tbody>
</table>

  </TabItem>
</Tabs>

### 6.2 `Indevolt.SetData` {#control-device}

Wijzigt configuratieparameters van het apparaat of verzendt besturingsopdrachten naar het apparaat.

<ApiBlock method="POST" path="/rpc/Indevolt.SetData">

```bash
curl -g -X POST -H "Content-Type: application/json" "http://192.168.31.213:8080/rpc/Indevolt.SetData?config={\"f\":16,\"t\":47005,\"v\":[4]}"
```

</ApiBlock>

<ResponseBlock title="200 OK">

```json
{
  "result": true
}
```

</ResponseBlock>

#### Queryparameters

| Parameter | Type | Vereist | Beschrijving |
| ---------- | ----- | -------- | ------------ |
| `config` | Object | Ja | Configuratie voor het schrijven van gegevens. |

`config`-object

| Parameter | Type | Vereist | Beschrijving |
| ---------- | ----- | -------- | ------------ |
| `f` | Number | Ja | Functiecode. De waarde is vast ingesteld op `16`. |
| `t` | Number | Ja | Het te schrijven [cJSON-punt](#cjson-punten-1). |
| `v` | Array | Ja | De te schrijven waarden. Raadpleeg de definitie van `Value` voor het betreffende gegevenspunt. |

#### Response

| Parameter | Type | Beschrijving |
| ---------- | ----- | ------------ |
| `result` | Boolean | `true`: geslaagd; `false`: mislukt. |

#### Voorbeelden

1. De modus **Real-time regeling** instellen

   ```bash
   curl -g -X POST -H "Content-Type: application/json" "http://192.168.31.213:8080/rpc/Indevolt.SetData?config={\"f\":16,\"t\":47005,\"v\":[4]}"
   ```

2. In de modus **Real-time regeling** de ontlaadstatus, het vermogen en de SOC instellen

   ```bash
   curl -g -X POST -H "Content-Type: application/json" "http://192.168.31.213:8080/rpc/Indevolt.SetData?config={\"f\":16,\"t\":47015,\"v\":[2,700,5]}"
   ```

#### cJSON-punten

De ondersteunde cJSON-punten (`t`) verschillen per apparaatmodel. De betekenis en het formaat van de bijbehorende `v`-waarden verschillen eveneens per gegevenspunt. Raadpleeg de lijst met gegevenspunten van het betreffende apparaatmodel voor meer informatie.

<Tabs>
  <TabItem value="sf2000" label="SolidFlex 2000 / PowerFlex 2000" default>

      | cJSON-punt | cJSON-waardetype	 | Eenheid | Beschrijving                                            | Waarde                                                                             | API                |
      | ---------- | ----------- | ------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------ |
      | 47005      | Enum        |         | Modusinstelling                                         | 1: Zelfverbruik geprioriteerd<br />4: Realtime controle<br />5: Laad/ontlaadschema | `Indevolt.SetData` |
      | 47015      | UINT        |         | Statusinstelling (alleen beschikbaar in realtime modus) | 0: Stand-by<br />1: Laden<br />2: Ontladen                                         | `Indevolt.SetData` |
      | 47016      | INT         | W       | Vermogensinstelling (alleen realtime modus)             | Max laden: 50–2400<br />Max ontladen: 50–2400                                      | `Indevolt.SetData` |
      | 47017      | UINT        | %       | SOC-instelling (alleen realtime modus)                  | 5–100                                                                              | `Indevolt.SetData` |
      | 1147       | INT         | W       | Max AC-uitgangsvermogen                                 | 50–2400                                                                            | `Indevolt.SetData` |
      | 1146       | INT         | W       | Terugleverlimiet                                        | 50–2400                                                                            | `Indevolt.SetData` |
      | 1143       | UINT        |         | Netladen                                                | 0: Uitgeschakeld<br />1: Ingeschakeld                                              | `Indevolt.SetData` |
      | 1138       | INT         | W       | Ingangslimiet omvormer                                  | 100–2400                                                                           | `Indevolt.SetData` |
      | 1          | Enum        |         | Lastinstelling                                          | 1: Smart plug<br />2: Meter<br />3: Kritische last<br />4: Aangepast               | `Indevolt.SetData` |
      | 7266       | Enum        |         | Bypass-instelling                                       | 0: Uitgeschakeld<br />1: Ingeschakeld                                              | `Indevolt.SetData` |
      | 1142       | INT         | %       | Back-up SOC-instelling                                  |                                                                                    | `Indevolt.SetData` |
      | 7265       | Enum        |         | Lichtinstelling                                         | 0: Uit<br />1: Aan                                                                 | `Indevolt.SetData` |

  </TabItem>
  <TabItem value="bk1600" label="BK1600 / BK1600 Ultra">

      | cJSON-punt | cJSON-waardetype | Eenheid | Beschrijving | Waarde | API |
      | ----------- | ---------------- | -------- | --------------------------------- | ------- | --- |
      | 47005 | Enum | | Modusinstelling | 0: Draagbare buitentoepassing<br />1: Eigen verbruik met prioriteit<br />4: Real-time regeling<br />5: Laad-/ontlaadschema | `Indevolt.SetData` |
      | 47015 | Enum | | Statusinstelling (alleen beschikbaar in de modus Real-time regeling) | 0: Stand-by<br />1: Laden<br />2: Ontladen | `Indevolt.SetData` |
      | 47016 | Num | W | Vermogensinstelling (alleen beschikbaar in de modus Real-time regeling) | 50-1200 | `Indevolt.SetData` |
      | 47017 | Num | % | SOC-instelling (alleen beschikbaar in de modus Real-time regeling) | 5-100 | `Indevolt.SetData` |

  </TabItem>
</Tabs>

:::info
In de realtime besturingsmodus kunnen status, vermogen en SOC in één keer worden geschreven om het laden en ontladen van het apparaat te regelen.
:::


---

## 7️⃣ `Sys` {#sys}

`Sys` wordt gebruikt om basisapparaatinformatie en de systeemstatus op te halen.

**Ondersteunde apparaten**

- BK1600 / BK1600 Ultra
- SolidFlex 2000 / PowerFlex 2000

### `Sys.GetConfig`

Haalt de huidige apparaatconfiguratie op, waaronder het apparaatmodel, serienummer, firmwareversie en andere informatie.

<ApiBlock method="GET" path="/rpc/Sys.GetConfig">

```bash
curl "http://192.168.31.213:8080/rpc/Sys.GetConfig"
```

</ApiBlock>

<ResponseBlock title="200 OK">

```json
{
  "device": {
    "hostname": "",
    "timezone": 480,
    "type": "CMS-SF2000",
    "sn": "",
    "mac": "7C3E82EF997F",
    "fw": "T1.4.06_ROOD. 072_M4801_0000002C",
    "f_ver": "T1406.07.002C",
    "p_ver": "VOD.00.08",
    "time": "2025-12-18 09:44:57",
    "time_stamp": 1766051097,
    "run_time": 2244
  }
}
```

</ResponseBlock>

**Response**

| Parameter | Type | Beschrijving |
| ---------- | ---- | ------------ |
| `device` | Object | Apparaatinformatie |

`device`-object

| Parameter | Type | Beschrijving |
| ---------- | ---- | ------------ |
| `hostname` | String | Apparaatnaam |
| `timezone` | Number | Tijdzone |
| `type` | String | Apparaatmodel |
| `sn` | String | Serienummer van het apparaat |
| `mac` | String | MAC-adres van het apparaat |
| `fw` | String | Firmwareversie van het apparaat |
| `f_ver` | String | CMS-versie |
| `p_ver` | String | P-bestandsversie |
| `time` | String | Huidige systeemtijd |
| `time_stamp` | Number | Huidige tijdstempel (seconden) |
| `run_time` | Number | Bedrijfstijd van het apparaat (seconden) |

---

## 8️⃣ `WiFi` {#wifi}

`WiFi` wordt gebruikt om de huidige Wi-Fi-verbindingsstatus van het apparaat op te halen.

**Ondersteunde apparaten**

- BK1600 / BK1600 Ultra

### `WiFi.GetStatus`

Haalt de huidige Wi-Fi-verbindingsinformatie van het apparaat op, waaronder het IP-adres, de SSID en de signaalsterkte.

<ApiBlock method="GET" path="/rpc/WiFi.GetStatus">

```bash
curl "http://192.168.0.7:8080/rpc/WiFi.GetStatus"
```

</ApiBlock>

<ResponseBlock title="200 OK">

```json
{
  "src": "",
  "params": {
    "sta_ip": "192.168.0.7",
    "ssid": "IGEN_GUEST_2.4G",
    "rssi": 100
  }
}
```

</ResponseBlock>

**Response**

| Parameter | Type | Beschrijving |
| ---------- | ---- | ------------ |
| `src` | String | Serienummer van het apparaat (SN) |
| `params` | Object | Wi-Fi-statusinformatie |

`params`-object

| Parameter | Type | Beschrijving |
| ---------- | ---- | ------------ |
| `sta_ip` | String | IP-adres van het apparaat |
| `ssid` | String | SSID van het verbonden Wi-Fi-netwerk |
| `rssi` | Number | Wi-Fi-signaalsterkte (0–100). Een hogere waarde duidt op een beter signaal. |

---

## 9️⃣ FAQ {#faq}

<details>
  <summary>**HTTP geeft 401 Unauthorized terug.**</summary>

* Controleer of de Digest-authenticatie gebruikersnaam en wachtwoord correct zijn.
* Bij eerste gebruik of na fabrieksreset ondersteunt het apparaat alleen de interface `User.SetConfig`. Zie [Digest-authenticatie](#http-digest). Na het wijzigen van het wachtwoord kun je met het nieuwe wachtwoord alle interfaces gebruiken.

</details>

<details>
  <summary>**Na het verzenden van een broadcast-opdracht wordt geen IP-adres ontvangen.**</summary>

De OpenData API is niet ingeschakeld, waardoor deze functie niet beschikbaar is. Zie [API inschakelen](#enable-api).

</details>
```
