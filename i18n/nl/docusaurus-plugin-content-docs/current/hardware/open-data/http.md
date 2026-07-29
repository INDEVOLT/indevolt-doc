---
title: HTTP/HTTPS-overzicht
description: Toegang tot lokale apparaatgegevens en bediening van INDEVOLT-micro-energieopslagsystemen via standaard HTTP-interfaces.
---

# HTTP/HTTPS-overzicht

INDEVOLT-energieopslagsystemen bieden REST API's op basis van HTTP/HTTPS, waarmee apparaten binnen het lokale netwerk kunnen worden gemonitord, parameters kunnen worden uitgelezen en apparaten kunnen worden aangestuurd. Alle interfaces gebruiken JSON als gegevensuitwisselingsformaat.

---

## 1. Voorbereiding {#preparations}

### Stap 1. Tools installeren {#install-tools}

> - **[Postman](https://www.getpostman.com/) / cURL**: voor het aanroepen van HTTP API’s om apparaatgegevens op te halen of configuraties aan te passen.

### Stap 2. API inschakelen {#enable-api}

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Standaard is de API-functie uitgeschakeld. Deze moet eerst worden ingeschakeld om te kunnen gebruiken. OpenData ondersteunt de volgende drie methoden:
> - [HTTP](#http)
> - [HTTP Digest](#http-digest)
> - [HTTPS](#https) (momenteel niet ondersteund, binnenkort beschikbaar)
>
> Je kunt de lokale API instellen in de INDEVOLT App:
> - **Apparaat is online**: aanbevolen via **cloudconfiguratie**, eenvoudiger in gebruik  
> - **Apparaat is niet online**: via **lokale Bluetooth-configuratie**
>
> <Tabs>
>   <TabItem value="cloud" label="Cloud" default>
>     <img src={require("./img/device_info.png").default} width="200"/>
>     <img src={require("./img/select_local_api.png").default} width="200"/>
>     <img src={require("./img/connect_device.png").default} width="200"/>
>     <img src={require("./img/select_http.png").default} width="200"/>
>     <img src={require("./img/http.png").default} width="200"/>
>   </TabItem>
>   <TabItem value="local" label="Lokaal Bluetooth">
>     <img src={require("./img/profile_page.png").default} width="200"/>
>     <img src={require("./img/scan_qr_code.png").default} width="200"/>
>     <img src={require("./img/connect_device.png").default} width="200"/>
>     <img src={require("./img/device_connected.png").default} width="200"/>
>     <img src={require("./img/select_local_api2.png").default} width="200"/>
>     <img src={require("./img/select_http.png").default} width="200"/>
>     <img src={require("./img/http.png").default} width="200"/>
>   </TabItem>
> </Tabs>

### Stap 3. Firmwareversie controleren {#check-firmware}

> Als de firmwareversie lager is dan de tabelwaarden, moet je de firmware updaten.
>
> | Model | Vereiste firmwareversie |
> |------|--------------------------|
> | BK1600 / BK1600 Ultra          | V1.3.0A_R006.072_M4848_00000039           |
> | SolidFlex 2000 / PowerFlex 2000 | CMS：V1406.07.002E |
> | PowerFlex 3000 AC<br />PowerFlex 3000 Hybrid<br />SolidFlex 3000 AC<br />SolidFlex 3000 AC Pro<br />SolidFlex 3000 Hybrid Pro  | CMS: V1409.08.3034  |
> | SolidFlex 1200 | CMS: V1407.07.202E |
>
> Controleer de firmware in de INDEVOLT App.
>
> <Tabs>
>   <TabItem value="cloud" label="Cloud" default>
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


## 2. HTTP-gebruik {#http}

### 2.1 Verzoekstructuur {#request-structure}

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


### 2.2 Verzoekfrequentielimieten {#rate-limit}

Om de stabiliteit van het systeem te waarborgen, gelden de volgende limieten voor alle HTTP API’s:

| Type | Limiet |
| ------------ | ------ |
| Aanbevolen aanvraaginterval | ≥ 5 seconden |
| Minimaal ondersteund interval | 1 seconde |
| Responstijd | 1 seconde |


### 2.3 Foutcodes {#errors}

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

## 3. HTTP Digest {#http-digest}

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

## 4. HTTPS (momenteel niet ondersteund){#https}

HTTPS maakt gebruik van TLS om communicatiegegevens te versleutelen en verifieert de identiteit van de server via digitale certificaten. Hierdoor wordt het risico op afluisteren of manipulatie van gegevens effectief verminderd.

HTTP en HTTPS gebruiken dezelfde API-interfaces. De aanvraagmethode, aanvraagparameters en het responsformaat zijn volledig identiek. Alleen het protocol in het aanvraagadres hoeft te worden gewijzigd van `http://` naar `https://`.

---

## 5. FAQ {#faq}

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
