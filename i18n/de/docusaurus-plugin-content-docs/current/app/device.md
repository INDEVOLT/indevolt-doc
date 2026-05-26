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

### 4.2 Leistungseinstellungen

Auf der Seite für Leistungseinstellungen können Sie die Leistungsgrenzen des Geräts festlegen, einschließlich der maximalen AC-Ausgangsleistung, der maximalen AC-Eingangsleistung sowie der Einspeisebegrenzung.

1. Öffnen Sie die Geräteeinstellungen und klicken Sie auf **Leistungseinstellungen**.
2. Wählen Sie den Leistungsparameter aus, den Sie ändern möchten.
3. Verschieben Sie den Regler, um den gewünschten Leistungswert einzustellen.
4. Klicken Sie auf **Speichern**, um die Einstellungen anzuwenden.

<img src={require("./img/device_settings.png").default} width="240"/>
<img src={require("./img/power_settings.png").default} width="240"/>
<img src={require("./img/ac_output_power.png").default} width="240"/>

#### Einstellen einer AC-Leistung über 800W

Wenn die maximale AC-Ausgangsleistung oder maximale AC-Eingangsleistung auf einen Wert über 800W eingestellt werden soll, zeigt das System je nach ausgewähltem Nutzungsland unterschiedliche Hinweise oder Verifizierungsprozesse an.

:::info

Gemäß den **deutschen** Sicherheitsstandards darf die AC-Ausgangsleistung von steckbaren Batteriesystemen **800W** nicht überschreiten. Daher ist für deutsche Nutzer bei Einstellungen über 800W eine **Profimodus-Überprüfung** erforderlich, um sicherzustellen, dass die Installation den Sicherheitsvorschriften entspricht.

Nutzer in anderen Ländern sehen beim Einstellen von über 800W lediglich einen Sicherheitshinweis und müssen keine Verifizierung durchführen.

:::


**Schritt 1: Verwendungsland des Geräts festlegen**

Gehen Sie in den Geräteeinstellungen zu **Verwendungsland** und wählen Sie Ihr Land aus der Liste aus.
<img src={require("./img/device_settings.png").default} width="240"/>
<img src={require("./img/device_country.png").default} width="240"/>

**Schritt 2: Aktivierungscode beantragen (nur für Deutschland)**

Wenn Nutzer in Deutschland erstmals eine Leistung über 800W einstellen, ist eine **Profimodus-Überprüfung** erforderlich. Erst nach Erhalt eines Einladungscodes kann die Einstellung abgeschlossen werden.

1. Nachdem Sie eine Leistung über 800W eingestellt und auf Speichern geklickt haben, öffnet die App die Seite zur Verifizierung im Profimodus.
2. Klicken Sie auf **Aktivierungscode anfordern**.
3. Füllen Sie die folgenden Informationen aus und klicken Sie auf **Speichern**, um den Antrag einzureichen:
   - Benutzerinformationen
   - Geräteinformationen
   - Installateurinformationen
   - Fotos der Installationsumgebung
4. Nach dem Absenden können Sie den Prüfstatus im Bereich **Aktivierungsschlüssel** einsehen. Falls die Seite nicht rechtzeitig aktualisiert wird, kehren Sie zur Seite der Profimodus-Verifizierung zurück und klicken Sie auf „Antragsinformationen anzeigen“:
   - In Prüfung: Der Antrag wird geprüft
   - Genehmigt: Das System zeigt den Einladungscode an
   - Überprüfung Fehlgeschlagen: Fotos müssen gemäß den Hinweisen erneut eingereicht werden, z. B.:
     - Bild ist unscharf
     - Aufnahmewinkel oder Inhalt unvollständig
     - Installationskonformität kann nicht bestätigt werden
     - Bild stimmt nicht mit dem beantragten Gerät überein
     - Bild entspricht nicht den Anforderungen an die Echtheit
5. Nach erfolgreicher Prüfung kopieren Sie den Einladungscode und fügen ihn in das entsprechende Eingabefeld auf der Seite **Profimodus-Überprüfung** ein. Klicken Sie anschließend auf **Einsenden**, um die Verifizierung abzuschließen.
  
     <img src={require("./img/verification1.png").default} width="240"/>
     <img src={require("./img/verification2.png").default} width="240"/>
     <img src={require("./img/verification3.png").default} width="240"/>
     <img src={require("./img/auth_failure.png").default} width="240"/>
     <img src={require("./img/auth_success.png").default} width="240"/>


**Schritt 3: Leistungseinstellungen bestätigen und speichern**

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="german" label="Deutschland" default>

    Nach erfolgreicher Verifizierung zeigt die App bei Leistungswerten über dem empfohlenen Grenzwert einen Sicherheitshinweis an. Klicken Sie auf **Weiter**, um die Einstellungen anzuwenden.
    <img src={require("./img/800w_confirmation.png").default} width="240"/>

  </TabItem>
  <TabItem value="others" label="Andere Länder">
    
    Wenn die Leistung über 800W eingestellt wird, zeigt die App einen gesetzlichen Sicherheitshinweis an. Bestätigen Sie den Hinweis und klicken Sie auf **Weiter**, um die Einstellungen anzuwenden.
    <img src={require("./img/safety_note.png").default} width="240"/>

  </TabItem>
</Tabs>

### 4.3 Übergeordnetes Gerät / Untergeräte verknüpfen

Zur Vereinfachung der Datenanzeige und -verwaltung ermöglicht das System die Einrichtung von Eltern-Kind-Beziehungen zwischen Geräten:

- **Speichergeräte** können als übergeordnete Geräte fungieren und verknüpfte Untergeräte hinzufügen.

- **Andere Gerätetypen** können als Untergeräte dienen, die mit einem übergeordneten Gerät verknüpft werden.


Wenn keine Geräte zum Verknüpfen verfügbar sind, klicken Sie bitte auf **Gerät hinzufügen**, um das Gerät zunächst zu Ihrem Zuhause hinzuzufügen.  
<img src={require("./img/link_new_device.jpg").default} width="240"/>  


### 4.4 Netzwerk-Einstellungen

Tippen Sie auf **Netzwerk-Einstellungen**, um den Namen des WLANs anzuzeigen, mit dem das Gerät verbunden ist, sowie die zugewiesene IP-Adresse.

<img src={require("./img/select_network_settings.jpg").default} width="240"/>
<img src={require("./img/network_settings.jpg").default} width="240"/>


### 4.5 Firmware-Update

Tippen Sie auf **Firmware-Update**, um die aktuelle Firmware-Version des Geräts und verfügbare Updates anzuzeigen. Wenn eine neue Version verfügbar ist, tippen Sie auf **Anwenden**, um das Online-Upgrade durchzuführen.

<img src={require("./img/fw_update.jpg").default} width="240"/>

## 5. Cluster

Wenn mehrere Energiespeichergeräte parallel verbunden sind, werden sie als ein einheitlicher Energiecluster verwaltet und angezeigt. Der Cluster wird von einem Hauptgerät koordiniert, das die Energie automatisch verteilt und Betriebsmodi, Einspeisebegrenzungen und weitere Einstellungen synchron anwendet.
<img src={require("./img/cluster_device_list.png").default} width="240"/>

Tippen Sie auf die Cluster-Karte, um die Detailseite des Clusters zu öffnen. Dort können Sie die Haupt–Neben-Gerätebeziehung, die Energiestrategie des Clusters sowie die Echtzeit-Leistungsdaten einsehen.
<img src={require("./img/cluster_info.png").default} width="240"/>

Tippen Sie auf das Einstellungssymbol ⚙ oben rechts auf der Detailseite, um die Clusterkonfiguration zu ändern oder den Cluster aufzulösen.
<img src={require("./img/cluster_settings.png").default} width="240"/>
