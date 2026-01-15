---
title: Profil
description: Verwalten Sie Ihr Konto und passen Sie Ihre persönlichen Einstellungen an.
---

# Profil

Tippen Sie in der unteren Navigationsleiste auf den Tab **Profil**, um die Seite zu öffnen. Diese Seite dient zur Verwaltung von Kontoinformationen, zur Anpassung von App-Einstellungen sowie zur Konfiguration personalisierter Optionen.

<img src={require("./img/profile_page.jpg").default} width="240"/>

## 1. Konto

Tippen Sie auf **Konto**, um die Kontoeinstellungsseite zu öffnen. Dort können Sie alle kontobezogenen Konfigurationen einsehen und verwalten.

<img src={require("./img/profile_page.jpg").default} width="240"/>
<img src={require("./img/account.png").default} width="240"/>


### 1.1 Profil

Tippen Sie auf **Profil**, um die detaillierte Kontoseite zu öffnen. Hier können Sie Ihr Profilbild aktualisieren, Ihren Benutzernamen ändern sowie die verknüpfte E-Mail-Adresse oder Telefonnummer aktualisieren.

<img src={require("./img/account.png").default} width="240"/>
<img src={require("./img/account_profile.jpg").default} width="240"/>


### 1.2 Passwort ändern

Tippen Sie auf **Passwort ändern** und folgen Sie den Anweisungen, um Ihr aktuelles und neues Passwort einzugeben. Nach dem erfolgreichen **Speichern** werden Sie automatisch zur Anmeldeseite weitergeleitet, wo Sie sich mit dem neuen Passwort erneut anmelden können.

<img src={require("./img/account.png").default} width="240"/>
<img src={require("./img/change_password.jpg").default} width="240"/>


### 1.3 Konto löschen

:::warning
Das Löschen Ihres Kontos entfernt dauerhaft alle zugehörigen Daten und kann nicht rückgängig gemacht werden. Bitte gehen Sie mit Vorsicht vor.
:::

1. **[Löschen](#23-zuhause-löschen) Sie alle Zuhause**, die Ihrem Konto zugeordnet sind.
2. Tippen Sie auf **Mein Konto löschen**, um den Prozess zur Kontolöschung zu starten.
3. Lesen Sie die Hinweise auf dem Bildschirm sowie die **Kontoauflösungserinnerung** sorgfältig durch. Bestätigen Sie, dass Sie die Bedingungen erfüllen und die Konsequenzen verstehen. Wenn keine Einwände bestehen, aktivieren Sie **Ich habe gelesen und stimme zu.Kontoauflösungserinnerung**.
4. Tippen Sie auf **Stornierung bestätigen**, um fortzufahren.
5. Aus Sicherheitsgründen ist eine **Identitätsprüfung** erforderlich: Geben Sie Ihr Passwort ein und bestätigen Sie Ihre verknüpfte Telefonnummer oder E-Mail-Adresse.
6. Geben Sie den erhaltenen Bestätigungscode ein und tippen Sie auf **Fertig**, um die Kontolöschung abzuschließen.

   <img src={require("./img/account.png").default} width="240"/>
   <img src={require("./img/account_cancellation.jpg").default} width="240"/>
   <img src={require("./img/logout_account_verification.png").default} width="240"/>


### 1.4 Abmelden

Tippen Sie auf **Abmelden**, um Ihr aktuelles Konto sicher zu verlassen. Das System kehrt zur Anmeldeseite zurück.

<img src={require("./img/account.png").default} alt="App overview" width="240"/>
<img src={require("./img/exit.jpg").default} alt="App overview" width="240"/>

### 1.5 Privatsphäre

Mit der Funktion **„Passwort Speichern“** können Sie Ihr **Anmeldepasswort** und Ihr **WLAN-Passwort** verschlüsselt und lokal auf diesem Gerät speichern, um wiederholte Eingaben zu vermeiden.

Sie können die Passwortspeicherung (einschließlich Anmelde- und WLAN-Passwort) jederzeit über den Schalter **„Passwort Speichern“** aktivieren oder deaktivieren.

<img src={require("./img/account.png").default} width="240"/>


## 2. Zuhause

Tippen Sie auf den Namen Ihres aktuellen Zuhauses, um die Informationsseite des Zuhauses zu öffnen.

<img src={require("./img/profile_page.jpg").default} width="240"/>
<img src={require("./img/edit_home.jpg").default} width="240"/>


### 2.1 Zuhause hinzufügen

1. Tippen Sie oben rechts auf die **+-Schaltfläche**.
2. Vervollständigen Sie auf der neuen Seite die Zuhause-Informationen:
   - **Name des Hauses:** Legen Sie einen gut erkennbaren Namen fest.
   - **Standort:** Die App erkennt Ihr Land automatisch; Sie können es auch manuell auswählen.
   - **Hausadresse:** Die App füllt automatisch ein ungefähres Gebiet aus; tippen Sie auf das Symbol neben der Adressleiste, um den Standort in der Mapbox-Karte neu festzulegen.
3. Tippen Sie nach Bestätigung aller Informationen auf **Hinzufügen**. Das neue Zuhause erscheint sofort in Ihrer Zuhause-Liste.

   <img src={require("./img/add_home.jpg").default} width="240"/>
   <img src={require("./img/location.jpg").default} width="240"/>
   <img src={require("./img/home_address.jpg").default} width="240"/>


### 2.2 Zuhause bearbeiten

Sie können die folgenden Informationen bearbeiten:
<img src={require("./img/edit_home.jpg").default} width="240"/>

#### 2.2.1 Name des Hauses

Tippen Sie auf das Namensfeld, um es zu ändern.  
<img src={require("./img/edit_home_name.jpg").default} width="240"/>

#### 2.2.2 Hausadresse

Tippen Sie auf das Adressfeld, um den Standort neu auszuwählen oder zu verschieben.  
<img src={require("./img/edit_home_address.jpg").default} width="240"/>

#### 2.2.3 Netz und PV

Konfigurieren Sie die Strombezugs- und Einspeiseoptionen Ihres Zuhauses:
- Ob Sie Strom vom Energieversorger beziehen.
- Ob Ihr Haushalt berechtigt ist, Strom an den Energieversorger zu verkaufen.

  <img src={require("./img/grid_supply1.jpg").default} width="240"/>
  <img src={require("./img/grid_supply2.jpg").default} width="240"/>

#### 2.2.4 Heimmitglieder hinzufügen

1. Tippen Sie auf **Heimmitglieder hinzufügen**.
2. Wählen Sie die Berechtigungen des Mitglieds:

   | Berechtigung   | Beschreibung                                                   |
   | -------------- | ------------------------------------------------------------- |
   | Mitglied       | Kann nur Zuhause- und Gerätedaten anzeigen.                  |
   | Administrator  | Kann Geräte und Mitglieder hinzufügen/entfernen sowie Zuhause-Informationen festlegen. |

3. Tippen Sie auf **Weiter**.
4. Geben Sie das Konto des Benutzers ein (E-Mail oder Telefonnummer).
5. Tippen Sie auf **Suchen**.
6. Tippen Sie in den Suchergebnissen auf das **Hinzufügen-Symbol** neben dem Benutzer.
7. Sobald die Meldung **Erfolgreich hinzugefügt** erscheint, ist der Vorgang abgeschlossen.

   <img src={require("./img/edit_home.jpg").default} width="240"/>
   <img src={require("./img/select_member_permission.jpg").default} width="240"/>
   <img src={require("./img/invite_member.jpg").default} width="240"/>
   <img src={require("./img/member_added.jpg").default} width="240"/>


#### 2.2.5 Berechtigungen von Zuhause-Mitgliedern verwalten

1. Tippen Sie in der Mitgliederliste auf das Mitglied, dessen Berechtigungen Sie ändern möchten.
2. Tippen Sie auf das Feld **Familienberechtigungen**.
3. Wählen Sie eine neue Berechtigungsstufe:

   | Berechtigung   | Beschreibung                                                                 |
   | -------------- | --------------------------------------------------------------------------- |
   | Mitglied       | Kann nur Zuhause- und Gerätedaten anzeigen.                                  |
   | Administrator  | Kann Geräte und Mitglieder hinzufügen/entfernen sowie Zuhause-Informationen festlegen. |
   | Besitzer     | Überträgt die Eigentümerschaft des Zuhauses; Sie verlieren alle Berechtigungen für dieses Zuhause. |

4. Tippen Sie auf **OK**.

   <img src={require("./img/select_member.png").default} width="240"/>
   <img src={require("./img/manage_member_permission.jpg").default} width="240"/>


#### 2.2.6 Zuhause-Mitglied entfernen

Tippen Sie am unteren Rand der Mitgliederinformationsseite auf **Löschen**. Die App fordert zur Bestätigung auf; nach der Bestätigung wird das Mitglied entfernt.

<img src={require("./img/delete_member.jpg").default} width="240"/>


### 2.3 Zuhause löschen

:::warning
Diese Aktion ist nicht rückgängig zu machen und löscht alle Daten dieses Zuhauses. Bitte gehen Sie sorgfältig vor!
:::

Tippen Sie am unteren Rand der Zuhause-Verwaltungsseite auf **Löschen**. Nach der Bestätigung wird das Zuhause entfernt.

<img src={require("./img/delete_home.png").default} width="240"/>


## 3. Tarif

Tippen Sie auf **Tarif**, um die Verwaltungsoberfläche für Strompreise zu öffnen.

<img src={require("./img/profile_page.jpg").default} width="240"/>
<img src={require("./img/tariff.jpg").default} width="240"/>


### 3.1 Tarif hinzufügen

Tippen Sie auf **+ Strompreis hinzufügen**, um einen neuen **Kauf- oder Verkaufspreisplan** zu erstellen.
<img src={require("./img/tariff.jpg").default} width="240"/>
<img src={require("./img/electricity_price.jpg").default} width="240"/>

Der Einrichtungsprozess für Kauf- und Verkaufspreise ist ähnlich. Im Folgenden wird der Kaufpreis als Beispiel verwendet:
<img src={require("./img/configure_price.jpg").default} width="240"/>

1. Legen Sie die **Start- und Endzeit** des Tarifs fest.

   - Die Endzeit ist standardmäßig auf „Jetzt“ gesetzt, d. h. der Preis bleibt gültig.

      <img src={require("./img/price_start_end_time1.jpg").default} width="240"/>

   - Um Strompreise für einen vergangenen Zeitraum festzulegen, deaktivieren Sie den Schalter „Jetzt“ und wählen Sie den Zeitraum manuell aus.

      <img src={require("./img/price_start_end_time2.jpg").default} width="240"/>

2. Wählen Sie den **Bereich** Ihres Zuhauses aus.
3. Wählen Sie Ihren **Stromlieferanten** aus der Liste.
4. Konfigurieren Sie den **Stromtarif**:
   - **Dynamisch**: Erfordert die Festlegung von Steuern und des monatlichen festen Grundpreises.

     <img src={require("./img/dynamic_tariff.jpg").default} width="240"/>

   - **Statisch**: Erfordert die Festlegung des Grundpreises sowie der zeitabhängigen Tarife (TOU) für verschiedene Zeiträume.

     <img src={require("./img/static_tariff1.jpg").default} width="240"/>
     <img src={require("./img/static_tariff2.jpg").default} width="240"/>
     <img src={require("./img/static_tariff3.jpg").default} width="240"/>

5. Tippen Sie auf **Speichern**.

:::info
Die hier vorgenommenen Tarifeinstellungen dienen ausschließlich der Anzeige und Schätzung innerhalb der App. Die tatsächliche Abrechnung richtet sich nach den offiziellen Daten Ihres Stromversorgers.
:::

### 3.2 Historische Tarife anzeigen

Tippen Sie auf das Symbol oben rechts, um frühere Strompreise anzuzeigen.
<img src={require("./img/tariff.jpg").default} width="240"/>
<img src={require("./img/history_price_plan2.jpg").default} width="240"/>


## 4. Cluster

Mit den Cluster-Einstellungen können mehrere Energiespeichergeräte oder Wechselrichter – über kabelgebundene oder drahtlose Verbindungen – zu einem einheitlichen System kombiniert werden, um die Kapazität zu erweitern und die Last auszugleichen.

:::info Voraussetzung
- Im aktuellen Zuhause muss mindestens ein Energiespeichergerät und ein kompatibles Gerät vorhanden sein.
- Alle am Cluster beteiligten Geräte müssen eingeschaltet und mit demselben WLAN-Netzwerk verbunden sein.
:::

Es muss ein Haupt-/Untermodus konfiguriert werden: Ein Gerät wird als Hauptgerät festgelegt, die übrigen fungieren als Untergeräte und werden vom Hauptgerät koordiniert.

Die folgende Tabelle zeigt, welche Modelle Haupt-/Unterrollen unterstützen:

<table><thead>
  <tr>
    <th></th>
    <th colspan="2">Kabelgebunden</th>
    <th colspan="2">Kabellos</th>
  </tr></thead>
<tbody>
  <tr>
    <td>Modell</td>
    <td>Haupt</td>
    <td>Neben</td>
    <td>Haupt</td>
    <td>Neben</td>
  </tr>
  <tr>
    <td>BK1600</td>
    <td>✗</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
  </tr>
  <tr>
    <td>BK1600 Ultra</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
  </tr>
  <tr>
    <td>PowerFlex 2000</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
  </tr>
  <tr>
    <td>SolidFlex 2000</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
  </tr>
  <tr>
    <td>Smart Plug</td>
    <td>✗</td>
    <td>✓</td>
    <td>✗</td>
    <td>✓</td>
  </tr>
</tbody>
</table>

**Schritte:**

1. Tippen Sie auf **Cluster**.
2. Tippen Sie auf **Einen Cluster erstellen**.
3. Wählen Sie den **Cluster-Modus**: drahtlos oder kabelgebunden. Halten Sie Geräte-Karten gedrückt und ziehen Sie sie in die Haupt- oder Unter-Slots.
4. Legen Sie die **AC-Leistungsbegrenzung** gemäß Netzvorschriften und lokalen Richtlinien fest.
5. Tippen Sie auf **Speichern**, um die Cluster-Einrichtung abzuschließen.


## 5. Datenquelle

Über die **Datenquelle** können Sie die Datenquellen für die Energie-Statistiken Ihres Haushalts festlegen, um die Genauigkeit und Zuverlässigkeit der Auswertungen zu verbessern.  
Das System unterstützt vier Arten von Datenquellen: **Solar**, **Batterie**, **Stromnetz**, und **Last**.

1. Klicken Sie auf **Datenquelle**, um die Konfiguration zu öffnen.
2. Wählen Sie die Datenquelle aus, die Sie einrichten möchten.
3. Klicken Sie rechts auf **Benutzerdefiniert** und wählen Sie ein oder mehrere Geräte als statistische Eingabe für diese Datenquelle aus.
4. Nach Abschluss der Auswahl klicken Sie auf **Speichern**, um die Einstellungen zu übernehmen.

   <img src={require("./img/profile_page.jpg").default} width="240"/>
   <img src={require("./img/select_data_source.png").default} width="240"/>
   <img src={require("./img/tap_custom.png").default} width="240"/>
   <img src={require("./img/choose_data_source_device.png").default} width="240"/>
   <img src={require("./img/save_data_source.png").default} width="240"/>

## 6. Darstellung

Tippen Sie auf **Darstellung**, um das Erscheinungsbild und die Formatierung der App anzupassen.
<img src={require("./img/profile_page.jpg").default} width="240"/>


### 6.1 Sprache

Unterstützte Oberflächensprachen: Vereinfachtes Chinesisch, Englisch, Französisch, Deutsch, Italienisch und Niederländisch.
<img src={require("./img/language.png").default} width="240"/>

### 6.2 Dunkler Modus

Aktivieren oder deaktivieren Sie den Dunkelmodus für unterschiedliche Lichtumgebungen.
<img src={require("./img/dark_mode.jpg").default} width="240"/>

### 6.3 Temperatur Einheit

Wählen Sie Ihre bevorzugte Temperatureinheit: Celsius (℃) oder Fahrenheit (℉).
<img src={require("./img/temperature_unit.jpg").default} width="240"/>

### 6.4 Datums- und Uhrzeitformat

Passen Sie die Anzeige von Datumsreihenfolge sowie 12-/24-Stunden-Format an.
<img src={require("./img/date_time_format.jpg").default} width="240"/>

### 6.5 Dezimalanzeigepräferenz

Wählen Sie Ihr bevorzugtes Dezimaltrennzeichen: Punkt oder Komma.
<img src={require("./img/decimal_preference.jpg").default} width="240"/>

Tippen Sie auf **Speichern**, damit alle Änderungen sofort wirksam werden. Sie können die Einstellungen jederzeit erneut anpassen.


## 7. Vorschlagsbrett

Das Vorschlagsbrett ist Ihr direkter Kommunikationskanal zu uns – reichen Sie Produktvorschläge ein oder melden Sie Probleme, die während der Nutzung aufgetreten sind.

Tippen Sie auf **Vorschlagsbrett**, um die Funktion zu öffnen.
<img src={require("./img/profile_page.jpg").default} width="240"/>

Sie können folgende Aktionen durchführen:

- Vorschläge anzeigen: Durchsuchen Sie Funktionsvorschläge und Feedback anderer Nutzer.
   <img src={require("./img/suggestions.jpg").default} width="240"/>

- Problem melden: Tippen Sie auf **Es direkt melden**, beschreiben Sie das Problem und senden Sie es ab.
   <img src={require("./img/report_issue.png").default} width="240"/>

- Vorschläge teilen: Tippen Sie auf **Vorschlag teilen**, um Ihre Ideen für Verbesserungen oder neue Funktionen einzureichen.
   <img src={require("./img/share_suggestion2.png").default} width="240"/>


## 8. Betriebsservices

Für eine einfachere Wartung können Sie über **Betriebsservices** Dienstleister (z. B. Händler oder Installateure) hinzufügen und verwalten. Nach der Autorisierung kann ein Dienstleister grundlegende Geräteinformationen einsehen, um gezielteren Support zu bieten.

<img src={require("./img/profile_page.jpg").default} width="240"/>
<img src={require("./img/operation_service.png").default} width="240"/>

## 9. Direktverbindung zum Gerät

Die Direktverbindung zum Gerät nutzt Bluetooth für die Kommunikation in der Nähe und ermöglicht es Ihnen, unterstützte Geräte auch ohne Verbindung zum Heimnetzwerk zu überwachen und zu verwalten.

:::info
Diese Funktion unterstützt derzeit INDEVOLT-Heimspeichersysteme:
- BK1600  
- BK1600 Ultra  
- SolidFlex 2000  
- PowerFlex 2000  

Weitere Geräte werden künftig unterstützt. Bitte bleiben Sie informiert.
:::

:::tip Voraussetzung
Stellen Sie sicher, dass Bluetooth auf Ihrem Smartphone aktiviert ist und das Zielgerät eingeschaltet sowie bereit zur Kopplung ist.
:::

1. Tippen Sie auf **Direktverbindung zum Gerät**.
2. Scannen Sie den Geräte-QR-Code mit der App zur automatischen Identifikation.
3. Tippen Sie auf **Mit Gerät verbinden** und halten Sie Ihr Smartphone in die Nähe des Geräts. Das System stellt eine Bluetooth-Verbindung her.
4. Nach erfolgreicher Verbindung können Sie Echtzeitdaten anzeigen, Lade-/Entladepläne festlegen und Parameter konfigurieren.
5. Tippen Sie oben links auf den **Zurück-Pfeil (\<)**, um die Verbindung zu beenden.

   <img src={require("./img/profile_page.jpg").default} width="240"/>
   <img src={require("./img/scan_qr_code.jpg").default} width="240"/>
   <img src={require("./img/connect_device.png").default} width="240"/>
   <img src={require("./img/device_connected.png").default} width="240"/>
   <img src={require("./img/disconnect_device.png").default} width="240"/>


## 10. Fernunterstützung

Diese Funktion unterstützt Servicetechniker dabei, potenzielle Geräteprobleme schnell zu lokalisieren und zu beheben.

:::tip Voraussetzung
- Stellen Sie sicher, dass das Gerät eingeschaltet ist und über 4G/5G oder WLAN mit dem Internet verbunden ist.
- Halten Sie die Bluetooth-Verbindung während der Diagnose stabil. Es wird empfohlen, den Bildschirm Ihres Smartphones eingeschaltet zu lassen, um Unterbrechungen zu vermeiden.
:::

1. Tippen Sie auf **Fernunterstützung**.
2. Lesen Sie die Hinweise und tippen Sie auf **Weiter**.
3. Scannen Sie den Geräte-QR-Code oder geben Sie die SN manuell ein, um eine Bluetooth-Verbindung herzustellen.
4. Das System generiert eine **Fern-ID**. Geben Sie diese ID dem Techniker für die Ferngiagnose weiter.

   <img src={require("./img/remote_support.png").default} width="240"/>
   <img src={require("./img/scan_qr_code.jpg").default} width="240"/>
   <img src={require("./img/remote_id.png").default} width="240"/>

:::info
- Der Diagnoseprozess beeinträchtigt den normalen Gerätebetrieb nicht.
- Diese Funktion ist ausschließlich für autorisierte Techniker vorgesehen – geben Sie die ID nicht an unbefugte Personen weiter.
- Beenden Sie nach Abschluss der Diagnose den Modus, um die Fernsitzung zu beenden und die Sicherheit zu gewährleisten.
:::


## 11. Über INDEVOLT

Tippen Sie auf **Über INDEVOLT**, um weitere Informationen zur App zu erhalten, einschließlich der aktuellen Version, Nutzungsbedingungen, Datenschutzerklärung, Liste für die Weitergabe an Dritte, Beschreibung der Systemberechtigung, Systemberechtigungen.

<img src={require("./img/about_indevolt.png").default} width="240"/>
