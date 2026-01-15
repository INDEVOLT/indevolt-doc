---
title: Gerät
description: Verwalten Sie Energiegeräte im Haushalt und überwachen Sie den Echtzeitstatus sowie die Daten.
---

# Gerät

Die Seite **Gerät** zeigt alle Energiegeräte in Ihrem Zuhause an und listet wichtige Informationen wie Geräte-SN, Online-Status und den Zeitpunkt der letzten Datenaktualisierung auf. Tippen Sie auf die **+**-Schaltfläche oben rechts, um ein Gerät [hinzuzufügen](./add-device.md).

<img src={require("./img/device.jpg").default} width="240"/>


## 1. Geräte bearbeiten

Tippen Sie auf die Schaltfläche **Bearbeiten** am unteren Rand der Seite, wählen Sie ein Gerät aus oder **halten Sie eine Gerätekarte gedrückt**, um in den Bearbeitungsmodus zu wechseln. Die folgenden Aktionen werden unterstützt:
- WLAN: Tippen Sie auf **WLAN**, um das Netzwerk zu konfigurieren. Der Vorgang ist derselbe wie bei der [Netzwerkkonfiguration](./add-device.md#schritt-3-netzwerk-konfigurieren) beim Hinzufügen eines Geräts.
- Umbenennen: Tippen Sie auf **Umbenennen**, um den Gerätenamen zu ändern.
- Löschen: Tippen Sie auf **Löschen**. Die App zeigt ein Bestätigungsfenster an. Nach der Bestätigung wird das Gerät entfernt. Nach dem Löschen können Sie die zugehörigen Daten nicht mehr anzeigen – bitte gehen Sie vorsichtig vor.

<img src={require("./img/device.jpg").default} width="240"/>
<img src={require("./img/edit_device2.jpg").default} width="240"/>


## 2. Gerätedetails

Tippen Sie auf eine Gerätekarte, um die Detailseite zu öffnen. Diese Seite zeigt allgemeine Informationen wie Signalstärke, SN, Echtzeitdaten, die Schnellaktualisierungsfunktion (⚡) sowie gerätespezifische Parameter und Funktionen – abhängig vom Gerätetyp.

<img src={require("./img/device_info.jpg").default} width="240"/>


## 3. Bericht

Tippen Sie auf das Symbol <img src={require("./img/statistics_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> oben rechts auf der Gerätedetailseite, um zur Bericht-Seite zu gelangen. Dort können Sie Datenkurven für tägliche, wöchentliche, monatliche und jährliche Zeiträume anzeigen.

<img src={require("./img/statistics.jpg").default} width="240"/>


## 4. Geräteeinstellungen

Tippen Sie auf das Symbol <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> oben rechts auf der Gerätedetailseite, um die Einstellungsseite zu öffnen. Dieser Bereich umfasst den Gerätenamen, verknüpfte Geräte, Netzwerkeinstellungen, Firmware-Updates sowie weitere gerätespezifische Funktionen.

<img src={require("./img/settings.jpg").default} width="240"/>

### 4.1 Gerätenamen ändern

Tippen Sie auf das Feld **Gerätename**, um festzulegen, wie der Gerätename in der App angezeigt wird.

<img src={require("./img/change_deivce_name.jpg").default} width="240"/>


### 4.2 Übergeordnetes Gerät / Untergeräte verknüpfen

Zur Vereinfachung der Datenanzeige und -verwaltung ermöglicht das System die Einrichtung von Eltern-Kind-Beziehungen zwischen Geräten:

- **Speichergeräte** können als übergeordnete Geräte fungieren und verknüpfte Untergeräte hinzufügen.

- **Andere Gerätetypen** können als Untergeräte dienen, die mit einem übergeordneten Gerät verknüpft werden.


Wenn keine Geräte zum Verknüpfen verfügbar sind, klicken Sie bitte auf **Gerät hinzufügen**, um das Gerät zunächst zu Ihrem Zuhause hinzuzufügen.  
<img src={require("./img/link_new_device.jpg").default} width="240"/>  


### 4.3 Netzwerk-Einstellungen

Tippen Sie auf **Netzwerk-Einstellungen**, um den Namen des WLANs anzuzeigen, mit dem das Gerät verbunden ist, sowie die zugewiesene IP-Adresse.

<img src={require("./img/select_network_settings.jpg").default} width="240"/>
<img src={require("./img/network_settings.jpg").default} width="240"/>


### 4.4 Firmware-Update

Tippen Sie auf **Firmware-Update**, um die aktuelle Firmware-Version des Geräts und verfügbare Updates anzuzeigen. Wenn eine neue Version verfügbar ist, tippen Sie auf **Anwenden**, um das Online-Upgrade durchzuführen.

<img src={require("./img/fw_update.jpg").default} width="240"/>
