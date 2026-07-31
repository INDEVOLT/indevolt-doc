---
title: HTTP/HTTPS-Übersicht
description: Zugriff auf lokale Gerätedaten und Steuerung von INDEVOLT-Mikro-Energiespeichersystemen über standardmäßige HTTP-Schnittstellen.
---

# HTTP/HTTPS-Übersicht

INDEVOLT-Energiespeichersysteme stellen eine auf HTTP/HTTPS basierende REST-API bereit, die zur Geräteüberwachung, zum Auslesen von Parametern und zur Steuerung innerhalb des lokalen Netzwerks verwendet werden kann. Alle Schnittstellen verwenden JSON als Datenaustauschformat.

---

## 1. Vorbereitung {#preparations}

### Schritt 1: Tools installieren {#install-tools}

> - **[Postman](https://www.getpostman.com/), cURL oder andere HTTP-Debugging-Tools**: Zum Aufrufen der HTTP-API, um Gerätedaten abzurufen oder Gerätekonfigurationen zu ändern.

### Schritt 2: API aktivieren {#enable-api}

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Die API-Funktion des Geräts ist standardmäßig deaktiviert und muss vor der Verwendung aktiviert werden. OpenData unterstützt folgende Methoden:
>
> - [HTTP](#http)
> - [HTTP Digest](#http-digest)
> - [HTTPS](#https) (derzeit nicht unterstützt, wird später verfügbar sein)
>
> Sie können die lokale API in der INDEVOLT App konfigurieren:
>
> - **Gerät ist mit dem Netzwerk verbunden**: Die **Cloud-Konfiguration** wird empfohlen und ist einfacher zu bedienen.
> - **Gerät ist noch nicht mit dem Netzwerk verbunden**: Die Konfiguration kann über die **lokale Bluetooth-Verbindung** direkt mit dem Gerät durchgeführt werden.
>
> <Tabs>
>   <TabItem value="cloud" label="Cloud" default>
>     <img src={require("./img/device_info.png").default} width="200"/>
>     <img src={require("./img/select_local_api.png").default} width="200"/>
>     <img src={require("./img/connect_device.png").default} width="200"/>
>     <img src={require("./img/select_http.png").default} width="200"/>
>     <img src={require("./img/http.png").default} width="200"/>
>   </TabItem>
>   <TabItem value="local" label="Lokales Bluetooth">
>     <img src={require("./img/profile_page.png").default} width="200"/>
>     <img src={require("./img/scan_qr_code.png").default} width="200"/>
>     <img src={require("./img/connect_device.png").default} width="200"/>
>     <img src={require("./img/device_connected.png").default} width="200"/>
>     <img src={require("./img/select_local_api2.png").default} width="200"/>
>     <img src={require("./img/select_http.png").default} width="200"/>
>     <img src={require("./img/http.png").default} width="200"/>
>   </TabItem>
> </Tabs>

### Schritt 3: Firmware-Version prüfen {#check-firmware}

> Wenn die Geräteversion niedriger als die in der Tabelle angegebene Version ist, aktualisieren Sie bitte die Gerätefirmware.
>
> | Modell | Mindest unterstützte Version |
> | --------------------------- | ----------------------------------------- |
> | BK1600 / BK1600 Ultra | V1.3.0A_R006.072_M4848_00000039 |
> | SolidFlex 2000 / PowerFlex 2000 | CMS: V1406.07.002E |
> | PowerFlex 3000 AC<br />PowerFlex 3000 Hybrid<br />SolidFlex 3000 AC<br />SolidFlex 3000 AC Pro<br />SolidFlex 3000 Hybrid Pro | CMS: V1409.08.3034 |
> | SolidFlex 1200 | CMS: V1407.07.202E |
>
> Die Firmware-Version des Geräts kann in der INDEVOLT App angezeigt werden.
>
> <Tabs>
>   <TabItem value="cloud" label="Cloud" default>
>     <img src={require("./img/device_info.png").default} width="200"/>
>     <img src={require("./img/select_firmware.png").default} width="200"/>
>     <img src={require("./img/view_firmware_version.png").default} width="200"/>
>   </TabItem>
>   <TabItem value="local" label="Lokales Bluetooth">
>     <img src={require("./img/profile_page.png").default} width="200"/>
>     <img src={require("./img/scan_qr_code.png").default} width="200"/>
>     <img src={require("./img/connect_device.png").default} width="200"/>
>     <img src={require("./img/device_connected.png").default} width="200"/>
>     <img src={require("./img/select_firmware2.png").default} width="200"/>
>     <img src={require("./img/view_firmware_version2.png").default} width="200"/>
>   </TabItem>
> </Tabs>

### Schritt 4: IP-Adresse des Geräts ermitteln {#obtain-ip}

> Eine der folgenden drei Methoden kann verwendet werden:
>
> - 🧩Methode 1: IP-Adresse über die Router-Verwaltungsoberfläche abrufen.
> - 🧩Methode 2: IP-Adresse in den Geräteeinstellungen der App anzeigen.
>   <img src={require("./img/select_network.png").default} width="200"/>
>   <img src={require("./img/view_ip.png").default} width="200"/>
> - 🧩Methode 3: IP-Adresse über UDP-Broadcast abrufen.
>
>       (1) Stellen Sie sicher, dass das WLAN des Geräts und der Computer mit demselben lokalen Netzwerk verbunden sind.  
>       (2) Öffnen Sie ein Netzwerk-Debugging-Tool (z. B. [NetAssist](https://www.cmsoft.cn/resource/102.html)).  
>       (3) Wählen Sie das Protokoll **UDP**.  
>       (4) Wählen Sie Local Host Addr.  
>       (5) Setzen Sie den Local Host Port auf **10000**.  
>       (6) Klicken Sie auf **Open**.  
>         <img src={require("./img/udp-settings.png").default} width="120"/>
>       (7) Stellen Sie unter Remote die Broadcast-Adresse und den Port ein: **255.255.255.255:8099**.  
>         <img src={require("./img/set-udp-remote.png").default} width="480"/>
>       (8) Geben Sie im Nachrichtenfeld den AT-Befehl **AT+IGDEVICEIP** ein.  
>       (9) Klicken Sie auf **Send**.  
>         <img src={require("./img/send-at-command.png").default} width="360"/>
>       (10) INDEVOLT-Geräte im gleichen lokalen Netzwerk antworten mit ihrer IP-Adresse und SN-Nummer.  
>       <img src={require("./img/udp-message.png").default} width="360"/>

---

## 2. HTTP-Verwendung {#http}

### 2.1 Anfrageformat {#request-structure}

**HTTP-Methode**

| Methode | Beschreibung |
| ---- | ------------------------ |
| GET | Fordert den Server auf, eine bestimmte Ressource zurückzugeben. |
| POST | Fordert den Server auf, eine bestimmte Aktion auszuführen. |

**Anfrageadresse**

```
http://{IP_ADDRESS}:8080/rpc/{API}
```

Dabei gilt:

- `{IP_ADDRESS}`: IP-Adresse des Geräts.
- `{API}`: API-Name, z. B. `Indevolt.GetData`. Eine vollständige API-Beschreibung finden Sie unter [API-Referenz](./http-api.md).

**Beispielanfrage**

- Gerätedaten abrufen:

  ```
  POST [http://192.168.31.213:8080/rpc/Indevolt.GetData?config={"t":[1664,1665]}](http://192.168.31.213:8080/rpc/Indevolt.GetData?config={%22t%22:[1664,1665]})
  ```

**cURL-Beispiel**

- Batterie-SOC abrufen:

  ```
  curl -g -X POST -H "Content-Type: application/json" "[http://192.168.1.75:8080/rpc/Indevolt.GetData?config={\"t\":[6002]}](http://192.168.1.75:8080/rpc/Indevolt.GetData?config={\%22t\%22:[6002]})"
  ```

### 2.2 Begrenzung der Anfragefrequenz {#rate-limit}

Um einen stabilen Betrieb des Geräts sicherzustellen, sollte die API-Aufruffrequenz begrenzt werden.

| Typ | Begrenzung |
| ------------ | ------ |
| Empfohlenes Anfrageintervall | ≥ 5 Sekunden |
| Minimal unterstütztes Intervall | 1 Sekunde |
| Antwortzeit | 1 Sekunde |

### 2.3 Fehlercodes {#errors}

| Statuscode | Beschreibung | Erklärung |
| --- | -------------------------- | --------------------------- |
| 400 | Bad Request | Das Serverformat der Anfrage ist ungültig. Der Client muss die Anfrage korrigieren und erneut senden. |
| 401 | Unauthorized | Eine Authentifizierung ist erforderlich. Der Client muss gültige Zugangsdaten bereitstellen. |
| 403 | Forbidden | Der Server versteht die Anfrage, verweigert jedoch die Ausführung, meist aufgrund fehlender Berechtigungen. |
| 404 | Not Found | Die angeforderte Ressource wurde nicht gefunden oder wurde gelöscht. |
| 405 | Method Not Allowed | Die verwendete Methode ist für diese Ressource nicht zulässig. |
| 408 | Request Timeout | Zeitüberschreitung beim Warten auf die Anfrage. Der Client kann später erneut versuchen. |
| 409 | Conflict | Die Anfrage steht im Konflikt mit dem aktuellen Zustand der Ressource. |
| 410 | Gone | Die Ressource wurde dauerhaft entfernt. |
| 500 | Internal Server Error | Ein unbekannter Serverfehler ist aufgetreten. |
| 501 | Not Implemented | Die angeforderte Methode wird vom Server nicht unterstützt. |
| 502 | Bad Gateway | Der Server als Gateway oder Proxy hat eine ungültige Antwort vom Upstream-Server erhalten. |
| 503 | Service Unavailable | Der Server ist derzeit nicht verfügbar, z. B. wegen Überlastung oder Wartung. |
| 504 | Gateway Timeout | Der Gateway- oder Proxy-Server hat keine rechtzeitige Antwort erhalten. |
| 505 | HTTP Version Not Supported | Die verwendete HTTP-Version wird nicht unterstützt. |

---

## 3. HTTP Digest Authentication {#http-digest}

Das Gerät unterstützt **HTTP Digest Authentication** zur Authentifizierung von Anfragen. Dadurch wird verhindert, dass Passwörter im Klartext übertragen werden, und die Sicherheit der Kommunikation wird verbessert.

Im Modus **HTTP + Digest**:

- Bei der ersten Verwendung oder nach einem Zurücksetzen auf die Werkseinstellungen muss das Standardpasswort zunächst über die Schnittstelle `User.SetConfig` geändert werden.
- Nach erfolgreicher Änderung des Passworts können andere Schnittstellen verwendet werden. Alle nachfolgenden Anfragen werden mit dem neuen Passwort authentifiziert.

**Tools**

- ASCII → Hexadezimal-Konverter  
- Hexadezimal → Base64-Konverter  
- AES-GCM-Verschlüsselungstool  

**Beispiel: Passwort ändern**

1. Konvertieren Sie das neue Passwort, das ursprüngliche Passwort und die Zufallszahl in das Hexadezimalformat.

   | | ASCII-Zeichenfolge | Hexadezimal |
   | -------- | ------------ | ---------------------------------------------------------------------- |
   | Neues Passwort | qwertyui | 71 77 65 72 74 79 75 69 |
   | Ursprüngliches Passwort | qazwsxed | 71 61 7a 77 73 78 65 64 00 00 00 00 00 00 00 00 <br />(auf 16 Byte auffüllen) |
   | Zufallszahl | 123456 | 31 32 33 34 35 36 00 00 00 00 00 00 <br />(auf 12 Byte auffüllen) |

2. Verschlüsseln Sie die Daten mit einem AES-GCM-Tool. Geben Sie dazu die entsprechenden Parameter im Tool ein.

   <img src={require("./img/aes-gcm-info.png").default} width="480"/>

3. Konvertieren Sie den Ciphertext und den Tag in das Base64-Format.

   | | Hexadezimal | Base64 |
   | ---- | ----------------------------------------------- | ------------------------ |
   | Ciphertext | 4e b2 90 67 54 02 d4 c4 | TrKQZ1QC1MQ= |
   | Tag | cf 0b d0 4e 37 a0 e6 bb cb 74 1b cb ce ab 72 9a | zwvQTjeg5rvLdBvLzqtymg== |

4. Konfigurieren Sie die Parameter für **HTTP Digest Authentication** und senden Sie die Anfrage `User.SetConfig`.

   <span className="http-method-badge">POST</span> **`http://{IP_ADDRESS}:8080/rpc/User.SetConfig?config={"Password":"{PASSWORD}"}`**

   Dabei gilt:

   - `{IP_ADDRESS}`: IP-Adresse des Geräts.
   - `{PASSWORD}`: Nach AES128-GCM-Verschlüsselung in das Base64-Format konvertierter Ciphertext.

   <img src={require("./img/digest-auth.png").default} width="720"/>

| Parameter | Typ | Beschreibung | Erforderlich |
| ------------ | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| Username | String | Standardwert: `opend` | Ja |
| Password | String | Standardmäßiger Geräteschlüssel.<br /><br />- Mit dem **Standardpasswort** kann nur die Schnittstelle **`User.SetConfig`** zum Ändern des Passworts aufgerufen werden.<br />- Nach der Passwortänderung können andere Schnittstellen mit dem **neuen Passwort** verwendet werden. | Ja |
| Realm | String | - Beim Aufruf von **`User.SetConfig`** zum Ändern des Passworts muss der **AES128-GCM Tag** angegeben werden.<br />- Bei anderen Schnittstellen kann ein zufälliger Wert verwendet werden. | Ja |
| Nonce | Standardtyp von Digest | Kann einen zufälligen Wert verwenden. | Ja |
| Algorithm | Standardtyp von Digest | MD5 | Ja |
| qop | Standardtyp von Digest | auth | Ja |
| Nonce Count | Standardtyp von Digest | Kann einen zufälligen Wert verwenden. | Ja |
| Client Nonce | Standardtyp von Digest | Kann einen zufälligen Wert verwenden. | Ja |

---

## 4. HTTPS (derzeit nicht unterstützt) {#https}

HTTPS verschlüsselt die Kommunikationsdaten mithilfe von TLS und überprüft die Identität des Servers über digitale Zertifikate. Dadurch können Daten wirksam vor Abhören oder Manipulation geschützt werden.

HTTP und HTTPS verwenden dieselben API-Schnittstellen. Anfragemethoden, Anfrageparameter und Antwortformate sind vollständig identisch. Es muss lediglich das Protokoll in der Anfrageadresse von `http://` auf `https://` geändert werden.

---

## 5. FAQ {#faq}

<details>
  <summary>**Q: Der HTTP-Zugriff gibt 401 Unauthorized zurück.**</summary>

  - Überprüfen Sie, ob der Benutzername und das Passwort für die Digest-Authentifizierung korrekt sind.
  - Geräte bei der ersten Verwendung oder nach einem Zurücksetzen auf die Werkseinstellungen unterstützen zunächst nur den Zugriff auf die angegebene Schnittstelle `User.SetConfig`. Weitere Informationen finden Sie unter [Digest-Authentifizierung](#http-digest). Nach erfolgreicher Passwortänderung können andere Schnittstellen mit dem neuen Passwort verwendet werden.
</details>

<details>
  <summary>**Q: Das Gerät gibt nach dem Senden eines Broadcast-Befehls keine IP-Adresse zurück.**</summary>

  Die OpenData API wurde noch nicht aktiviert, daher ist diese Funktion nicht verfügbar. Weitere Informationen finden Sie unter [API aktivieren](#enable-api).
</details>
