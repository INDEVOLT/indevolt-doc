---
title: Home Assistant-Integration
description: Integrieren Sie Ihr INDEVOLT-Energiespeichersystem in Home Assistant für lokale Überwachung und Automatisierung.
toc_max_heading_level: 2
---

# Home Assistant-Integration

## Voraussetzungen {#prerequisite}

### 1️⃣ Home Assistant-Umgebung

Home Assistant wurde gemäß der [offiziellen Installationsanleitung](https://www.home-assistant.io/installation/) erfolgreich installiert.


### 2️⃣ Gleiches lokales Netzwerk

Das Gerät und der Home Assistant-Server müssen sich im selben lokalen Netzwerk (LAN) befinden.


### 3️⃣ Geräte-IP-Adresse ermitteln

Stellen Sie sicher, dass das INDEVOLT-Gerät eingeschaltet ist und eine IP-Adresse erhalten hat. Die IP-Adresse kann auf eine der folgenden Arten ermittelt werden:

**🧩 Methode 1 – Über den Router**

Melden Sie sich an der Verwaltungsoberfläche Ihres Routers an und suchen Sie die IP-Adresse des Geräts in der Liste der verbundenen Geräte.


**🧩 Methode 2 – In der INDEVOLT App**

Öffnen Sie die Geräteeinstellungen in der App:

<img src={require("./img/select_network.png").default} width="240"/>
<img src={require("./img/view_ip.png").default} width="240"/>


**🧩 Methode 3 – Über UDP-Broadcast (für fortgeschrittene Benutzer)**

1. Stellen Sie sicher, dass sich der Computer und das WLAN-Netzwerk, mit dem das Gerät verbunden ist, im selben lokalen Netzwerk befinden.  
2. Öffnen Sie ein Netzwerk-Debugging-Tool.  
3. Wählen Sie das Protokoll **UDP** aus.  
4. Wählen Sie **Local Host Addr**.  
5. Setzen Sie **Local Host Port** auf **10000**.  
6. Klicken Sie auf **Open**.
   <img src={require("./img/udp-settings.png").default} width="120"/>

7. Konfigurieren Sie unter **Remote** die Broadcast-Adresse und den Port: **255.255.255.255:8099**
   <img src={require("./img/set-udp-remote.png").default} width="480"/>

8. Geben Sie im Nachrichtenfeld den AT-Befehl **AT+IGDEVICEIP** ein.  
9. Klicken Sie auf **Send**.
   <img src={require("./img/send-at-command.png").default} width="360"/>

10. Alle INDEVOLT-Geräte im selben Netzwerk antworten mit ihrer IP-Adresse und Seriennummer (SN).
    <img src={require("./img/udp-message.png").default} width="360"/>


### 4️⃣ Lokale API aktivieren

Stellen Sie sicher, dass die lokale API auf dem INDEVOLT-Gerät aktiviert ist.

OpenData bietet drei Betriebsmodi an, die aktuelle Integration unterstützt jedoch ausschließlich den Modus **HTTP**:

- HTTP
- HTTP Digest
- HTTPS (derzeit noch nicht unterstützt)

Die lokale API kann in der INDEVOLT App konfiguriert werden:

<img src={require("./img/profile_page.png").default} width="200"/>
<img src={require("./img/scan_qr_code.png").default} width="200"/>
<img src={require("./img/connect_device.png").default} width="200"/>
<img src={require("./img/device_connected.png").default} width="200"/>
<img src={require("./img/select_local_api2.png").default} width="200"/>
<img src={require("./img/select_http.png").default} width="200"/>
<img src={require("./img/http.png").default} width="200"/>


### 5️⃣ Anforderungen an die Firmware-Version

Stellen Sie sicher, dass die Firmware-Version Ihres Geräts mindestens den in der folgenden Tabelle angegebenen Versionen entspricht.

| Modell | Mindestversion der Firmware |
| ------- | --------------------------- |
| BK1600 / BK1600 Ultra | V1.3.0A_R006.072_M4848_00000039 |
| SolidFlex 2000 / PowerFlex 2000 | CMS: V1406.07.002E |


## Schritt 1: Integration herunterladen {#step1}

1. Öffnen Sie das [GitHub-Repository](https://github.com/INDEVOLT/homeassistant-indevolt).
2. Klicken Sie auf **Code** > **Download ZIP**.

   <img src={require("./img/download-zip.png").default} width="240"/>

3. Entpacken Sie die ZIP-Datei auf Ihrem Computer.

## Schritt 2: Konfigurationsverzeichnis ermitteln {#step2}

- Home Assistant OS: Das Konfigurationsverzeichnis befindet sich unter `/config`.
- Home Assistant Container: Das Konfigurationsverzeichnis kann über die Datei `configuration.yaml` ermittelt werden.

:::tip

Das Verzeichnis sollte die Datei `configuration.yaml` enthalten.

```
configuration directory/
└── configuration.yaml
```

:::

## Schritt 3: Custom-Ordner erstellen {#step3}

1. Öffnen Sie das `configuration directory`.
2. Erstellen Sie den Ordner `custom_components`, falls dieser noch nicht vorhanden ist.

```
configuration directory/
├── custom_components/
└── configuration.yaml
```

:::info

Alle benutzerdefinierten Integrationen müssen im Verzeichnis `custom_components` gespeichert werden, da Home Assistant sie andernfalls nicht erkennt.

:::

## Schritt 4: Dateien hinzufügen {#step4}

Kopieren Sie den entpackten Ordner `indevolt` vollständig in das Verzeichnis `custom_components`.

```
configuration directory/
└── custom_components/
    ├── indevolt/
       ├── __init__.py
       ├── manifest.json
       ├── ...
```

## Schritt 5: Home Assistant neu starten {#step5}

1. Wählen Sie in der Weboberfläche **Settings** > **System**.

   <img src={require("./img/select-ha-settings.png").default} width="720"/>

2. Klicken Sie oben rechts auf das Neustart-Symbol.

   <img src={require("./img/click-restart-icon.png").default} width="480"/>

3. Klicken Sie auf **Restart Home Assistant**.

   <img src={require("./img/restart-ha.png").default} width="360"/>

4. Klicken Sie auf **RESTART**.

   <img src={require("./img/click-restart.png").default} width="360"/>

## Schritt 6: Integration hinzufügen {#step6}

1. Öffnen Sie nach dem Neustart die Weboberfläche und wählen Sie **Settings** > **Devices & services**.

   <img src={require("./img/select-device-service.png").default} width="720"/>

2. Klicken Sie unten rechts auf **+ ADD INTEGRATION**.

   <img src={require("./img/add-integration.png").default} width="180"/>

3. Suchen Sie nach der Integration **indevolt**.

   <img src={require("./img/search-integration.png").default} width="360"/>

4. Konfigurieren Sie die folgenden Parameter:

   - **host**: Die IP-Adresse des Geräts. Diese kann über den Router oder die App ermittelt werden.
   - **scan_interval**: Aktualisierungsintervall für die Daten. Empfohlen werden 5 bis 30 Sekunden. Der Standardwert beträgt 30 Sekunden.

   <img src={require("./img/set-integration.png").default} width="300"/>

5. Klicken Sie auf **Submit**, um die Installation abzuschließen.

6. Nach der Installation werden Informationen zum Leistungsmodul und zu den Akkupacks angezeigt. Klicken Sie auf **Skip and Finish**, um die Einrichtung abzuschließen.

   - Jedes Leistungsmodul unterstützt die Verbindung von maximal fünf Akkupacks.
   - Wenn kein Akkupack angeschlossen ist, wird das entsprechende Feld als None angezeigt.
   - Sind Akkupacks angeschlossen, werden deren Seriennummern (SN) zur Identifizierung angezeigt.

   <img src={require("./img/finish.png").default} width="360"/>

## Integration anzeigen {#view-integration}

Wählen Sie die INDEVOLT-Integration aus. Nach erfolgreicher Installation werden die Geräte- und Entitätsinformationen angezeigt.

<img src={require("./img/view-integration.png").default} width="360"/>
<img src={require("./img/view-device.png").default} width="720"/>


## Integration aktualisieren

1. Laden Sie die neueste Version des Integrationspakets herunter.
2. Überschreiben Sie die Dateien im Verzeichnis `custom_components/indevolt`.
3. Klicken Sie auf das Drei-Punkte-Menü rechts neben dem zuvor hinzugefügten Gerät und wählen Sie **Delete**, um das Gerät zu entfernen.

   <img src={require("./img/delete-device.png").default} width="720"/>

4. Starten Sie Home Assistant neu.
5. Klicken Sie auf **Add Entry** und fügen Sie das Gerät erneut hinzu, indem Sie denselben Einrichtungsprozess durchlaufen.

## Automatisierung erstellen

1. Öffnen Sie **Settings** > **Automations & Scenes**.

   <img src={require("./img/automation.png").default} width="720"/>

2. Klicken Sie unten rechts auf **+ Create Automation**.

   <img src={require("./img/create-automation1.png").default} width="720"/>

3. Wählen Sie **Create New Automation**.

   <img src={require("./img/create-automation2.png").default} width="360"/>

4. Klicken Sie auf **+ Add Trigger** und konfigurieren Sie die gewünschten Auslöser.

   <img src={require("./img/new-automation.png").default} width="540"/>

5. Klicken Sie auf **+ Add Action**, um die auszuführende Aktion zu konfigurieren.

6. Suchen Sie nach „mode“ und wählen Sie beispielsweise **Set SolidFlex2000/PowerFlex2000 Work Mode**.

   <img src={require("./img/search-mode.png").default} width="360"/>

7. Klicken Sie im Bereich **Target** auf **+ Choose Device** und wählen Sie Ihr Gerät aus der Liste aus.

   <img src={require("./img/choose-target1.png").default} width="720"/>
   <img src={require("./img/choose-target2.png").default} width="360"/>

8. Wählen Sie im Bereich **Work Mode** die Option **Real-Time Control** und konfigurieren Sie anschließend nach Bedarf **Status**, **Power** und **Target SOC**.

   <img src={require("./img/set-mode1.png").default} width="360"/>
   <img src={require("./img/set-mode2.png").default} width="360"/>

9. Klicken Sie auf **Save**, um die Automatisierung zu speichern.

## FAQ

| Problem | Lösung |
| ------- | ------- |
| Integration erscheint nicht in der Suchliste | Überprüfen Sie den Ordnerpfad: `custom_components/indevolt` |
| Verbindung zum Gerät nicht möglich | 1. Prüfen Sie, ob die IP-Adresse korrekt ist.<br />2. Überprüfen Sie den Netzwerkstatus des Geräts. |
| Keine Daten bei Entitäten | 1. Prüfen Sie die Stromversorgung des Geräts.<br />2. Überprüfen Sie den Netzwerkstatus des Geräts.<br />3. Kontrollieren Sie die Fehlermeldungen im Protokoll. |