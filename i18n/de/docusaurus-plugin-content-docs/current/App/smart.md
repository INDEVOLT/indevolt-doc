---
title: Smart
description: Optimieren Sie die Energienutzung basierend auf Preisänderungen, um Kosten zu senken und Einnahmen zu steigern.
---

# Smart

Der Smart-Modus analysiert die sich in Echtzeit ändernden Strompreise und steuert automatisch das Laden und Entladen Ihres Energiespeichers, um:

- die Stromkosten zu senken  
- die Nutzung von Photovoltaik und Batterie zu maximieren  
- höhere Erträge aus Strompreisschwankungen zu erzielen  

Kurz gesagt: **Bei niedrigen Preisen laden, bei hohen Preisen entladen – vollautomatisch optimiert.**

:::info Anwendungsbedingungen
1. Der Haushalt nutzt dynamische oder zeitabhängige Stromtarife (keine Festpreise).
2. Der Haushalt ist mit einem INDEVOLT-Energiespeichersystem ausgestattet.
:::

## 1. Beschreibung der Gerätezustände

**Laden (bei niedrigem Strompreis)**

Die tatsächliche Ladeleistung wird durch die maximale Eingangsleistung des Wechselrichters bestimmt.

- Das System nutzt vorrangig PV-Strom zum Laden der Batterie;  
- bei unzureichender PV-Leistung wird automatisch Strom aus dem Netz bezogen;  
- sobald die Batterie vollständig geladen ist, wird der Ladevorgang automatisch beendet.

**Entladen (bei hohem Strompreis oder hohem Strombedarf)**

Die tatsächliche Entladeleistung hängt von der aktuellen Lastquelle ab (Stromzähler / Steckdose / Standardlast).

- Die Versorgung erfolgt vorrangig über die Photovoltaik;  
- bei unzureichender PV-Leistung ergänzt die Batterie automatisch die Stromversorgung;  
- erreicht der Batterieladestand den eingestellten Notfallwert, wird das Entladen automatisch gestoppt.

**Stillstand (außerhalb der Lade-/Entladezeiträume der Strategie)**

Im Stillstand lädt oder entlädt die Batterie nicht aktiv:

- PV-Strom wird vorrangig für den Haushaltsverbrauch genutzt;  
- ist die PV-Leistung höher als die Last und der Batterieladestand (SOC) noch nicht bei 100 %, wird überschüssige Energie automatisch in die Batterie zurückgespeist;  
- ist die Batterie vollständig geladen, wird die PV-Leistung automatisch begrenzt.


## 2. Smart-Modus aktivieren

1. Tippen Sie auf **Mehr**, um die Funktionsübersichtsseite zu öffnen.
2. Lesen Sie die Servicevereinbarung und die zugehörigen Informationen. Nach Bestätigung, dass alles korrekt ist, aktivieren Sie **Ich habe die Servicevereinbarung gelesen**. Tippen Sie auf **Weiter**, um die Aktivierung abzuschließen.

   <img src={require("./img/smart.png").default} width="240"/>
   <img src={require("./img/activate_smart.png").default} width="240"/>


## 3. Preisgesteuert

Die preisstrategie ist das Kernstück des Smart-Modus. Durch Festlegen von Preisschwellen lädt das System intelligent bei niedrigen Preisen und entlädt bei hohen Preisen – so werden die Vorteile von Strompreisschwankungen maximal genutzt.

### 3.1 Neue Strategie erstellen

Bevor Sie eine Strategie erstellen, stellen Sie sicher, dass Sie Ihren [Stromtarif](./profile.md#3-tarif) eingerichtet haben:

1. Tippen Sie auf das <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> Symbol im Abschnitt Preisbasierte Strategie, um die Einstellungsseite zu öffnen.
2. Folgen Sie den Hinweisen und stellen Sie sicher, dass Sie bereits einen [Stromtarif konfiguriert](./profile.md#31-tarif-hinzufügen) und geeignete Geräte für die Strategie im Haushalt hinzugefügt haben. Falls nicht, tippen Sie auf die entsprechenden Bereiche und schließen Sie die Einrichtung ab. Tippen Sie danach auf **Weiter**, um fortzufahren.
3. Legen Sie den **[Zielpreis einstellen](#zielpreis-anpassen)** (manuell/automatisch) fest, der das Lade- und Entladeverhalten auslöst, sowie die **Strategie, wenn die Bedingung nicht erfüllt ist** (Eigenverbrauch Priorisiert / Leerlauf). Tippen Sie auf **Weiter**.  
4. Wählen Sie die **Geräte, die an der Strategie teilnehmen**, und tippen Sie auf **Weiter**.
5. Prüfen Sie den vom System erzeugten Lade-/Entladeplan. Tippen Sie auf **Aktivieren**, um die Strategie zu aktivieren.

   <img src={require("./img/set_strategy.png").default} width="240"/>
   <img src={require("./img/strategy_requirements.png").default} width="240"/>
   <img src={require("./img/price_setting.png").default} width="240"/>
   <img src={require("./img/select_strategy_device.png").default} width="240"/>
   <img src={require("./img/preview_strategy.png").default} width="240"/>



### 3.2 Strategie anzeigen

Nach der Erstellung einer Strategie zeigt der Abschnitt Preisbasierte Strategie den aktuellen Status (Leerlauf / Eigenverbrauch Priorisiert / Laden / Entladen) und den Schalter an.

<img src={require("./img/price_strategy.png").default} width="240"/>

Tippen Sie auf den Abschnitt **Preisgesteuert**, um den Zeitplan und die Geräte anzuzeigen, die derzeit die Strategie verwenden.

<img src={require("./img/view_strategy.png").default} width="240"/>

Über das **Protokollsymbol** oben rechts auf der Preisstrategie-Seite können Sie das Strategielog öffnen und alle historischen Änderungen sowie Statuswechsel (Aktiviert/Deaktiviert) nachverfolgen.

<img src={require("./img/strategy_log.png").default} width="240"/>

### 3.3 Strategie bearbeiten

Auf der Preisstrategie-Seite können bestehende Strategien jederzeit angepasst werden, einschließlich der **Gerätezuordnung** und des **Zielpreises**.

#### Strategiegeräte bearbeiten

1. Tippen Sie auf der Strategie-Detailseite auf die **Gerätestatus** neben dem Modul **Gerätestatus**.
2. Wählen Sie das Zielgerät erneut aus der Liste aller Smart-kompatiblen Geräte im Haushalt aus.
3. Tippen Sie auf **Weiter**, prüfen Sie den neuen Lade-/Entladeplan und bestätigen Sie durch Tippen auf **Aktivieren**.

<img src={require("./img/view_strategy.png").default} width="240"/>
<img src={require("./img/set_strategy_device.png").default} width="240"/>
<img src={require("./img/confirm_strategy.png").default} width="240"/>

#### Zielpreis anpassen

1. Tippen Sie auf die Bearbeiten-Schaltfläche neben dem Modul **Strommarktpreise**, um den Zielpreis neu zu konfigurieren.
2. Legen Sie den **Zielpreis einstellen** nach Bedarf fest. Es stehen zwei Optionen zur Verfügung:  
   - Manuell: Geben Sie direkt die gewünschten Preise für Laden (niedrig) und Entladen (hoch) ein – geeignet, wenn Sie konkrete Zielpreise haben. 
   - Automatisch: Legen Sie eine Zielpreisdifferenz fest und wählen Sie Hoch- und Niedrigpreiszeiträume. Das System berechnet automatisch die optimalen Auslösepreise.  
3. Legen Sie die **Strategie bei nicht erfüllten Bedingungen** fest (wenn der aktuelle Strompreis die Lade-/Entladebedingungen nicht erfüllt):  
   - Eigenverbrauch Priorisiert: PV und Batterie werden vorrangig für den Haushaltsverbrauch genutzt.  
   - Leerlauf: Laden und Entladen werden pausiert, PV-Strom wird vorrangig im Haushalt genutzt.  
4. Tippen Sie auf **Weiter**, prüfen Sie die Vorschau des aktualisierten Lade-/Entladeplans und tippen Sie anschließend auf **Aktivieren**, um zu bestätigen.

<img src={require("./img/view_strategy.png").default} width="240"/>
<img src={require("./img/strategy_price1.png").default} width="240"/>
<img src={require("./img/strategy_price2.png").default} width="240"/>
<img src={require("./img/confirm_strategy.png").default} width="240"/>
