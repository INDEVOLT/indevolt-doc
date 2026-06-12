---
title: Smart
description: Intelligente Steuerung des Energieverbrauchs zur optimalen Nutzung von Strompreisunterschieden für Einsparungen und zusätzliche Erträge.
---

# Smart

Die Smart-Funktion optimiert automatisch die Lade- und Entladestrategie der Batterie – entweder über den **Dynamischen Tarifmodus** oder den **KI-Modus**. Dadurch werden Strompreise und Photovoltaik-Erzeugung intelligent genutzt, um die Energieeffizienz zu erhöhen und den wirtschaftlichen Ertrag zu maximieren.


## 1. Dynamischer Tarifmodus

Der Dynamische Tarifmodus steuert das Gerät intelligent anhand vordefinierter Preisschwellen: Laden bei niedrigen Preisen, Entladen bei hohen Preisen – für maximale Nutzung von Preisschwankungen.

- Reduzierung der Stromkosten  
- Höherer Eigenverbrauch von PV-Energie und Batteriestrom  
- Zusätzliche Einsparungen durch Strompreisunterschiede

Einfach gesagt: Bei niedrigem Preis laden, bei hohem Preis entladen – vollautomatisch optimiert.

:::info Voraussetzungen
1. Im Haushalt wird ein dynamischer Stromtarif genutzt.  
2. Ein INDEVOLT-Energiespeicher ist installiert.  
:::

### 1.1 Funktionsweise der Geräte

#### 🔋 Laden (Niedrigpreiszeiten)

Wenn der Strompreis unter dem Zielpreis liegt, beginnt das System mit dem Laden der Batterie.

| Lademodus | Beschreibung |
|------|------|
| Laden über Solar + Netz | Die Batterie wird vorrangig über PV geladen, während Netzstrom zur Unterstützung genutzt werden kann. Geeignet für Zeiten mit niedrigen Strompreisen. Die Ladeleistung ist auf den eingestellten Maximalwert begrenzt. Sobald die Batterie voll ist, wird kein Netzstrom mehr verwendet und die PV-Leistung automatisch reduziert. |
| Nur Solar laden | Die Batterie wird ausschließlich über PV geladen. Nach vollständiger Ladung wird der Verbrauch zuerst durch PV gedeckt, überschüssige Energie wird innerhalb der zulässigen Grenzen ins Netz eingespeist. Bei Überschreitung der Netzeinspeisegrenze wird die PV-Leistung automatisch reduziert. |

#### ⚡ Entladen (Hochpreiszeiten)

Wenn der Strompreis über dem Zielpreis liegt, nutzt das System vorrangig die in der Batterie gespeicherte Energie. Die tatsächliche Entladeleistung hängt von der aktuellen Lastquelle (Zähler / Steckdose / Standardlast) ab.

| Entlademodus | Beschreibung |
|------|------|
| Feste Ausgangsleistung | Die Batterie entlädt kontinuierlich mit der eingestellten Leistung. Falls PV-Mikrowechselrichter vorhanden sind, wird PV-Leistung bevorzugt genutzt. Bei fehlender Last oder Überschreitung der Netzeinspeisegrenze wird die Ausgabe gestoppt und regelmäßig automatisch neu geprüft und fortgesetzt. |
| Eigenverbrauch | Die Batterie passt die Entladeleistung automatisch an den aktuellen Haushaltsverbrauch an, begrenzt durch den eingestellten Maximalwert. Bei fehlender Last oder Netzlimitüberschreitung wird die Ausgabe automatisch gestoppt. |

#### ⏸️ Standby (Gleichpreiszeiten)

Wenn der Strompreis weder die Lade- noch die Entladebedingungen erfüllt, wechselt das System in den Standby-Modus. Die Batterie wird weder aktiv geladen noch entladen.

| Betriebsmodus | Beschreibung |
|------|------|
| Solar versorgt zuerst Haus | Dieser Modus wird standardmäßig für nicht konfigurierte Zeiträume verwendet.<br />1. PV versorgt zuerst die Haushaltslasten.<br />2. Überschüssige Energie wird in der Batterie gespeichert.<br />3. Nach vollständiger Ladung wird überschüssige Energie innerhalb der zulässigen Grenzen ins Netz eingespeist.<br />4. Bei Überschreitung der Einspeisegrenze reduziert das System automatisch die PV-Leistung. |
| Solar lädt zuerst Batterie | 1. PV lädt vorrangig die Batterie.<br />2. Nach vollständiger Ladung wird der Haushalt versorgt.<br />3. Überschüssige Energie wird innerhalb der zulässigen Grenzen ins Netz eingespeist.<br />4. Bei Überschreitung der Einspeisegrenze reduziert das System automatisch die PV-Leistung. |

:::warning
- Alle Leistungswerte sind durch die Hardware begrenzt.  
- „Einspeisegrenze“ bezeichnet die maximal erlaubte Rückspeiseleistung ins Netz.  
- In einigen Fällen wird die PV-Leistung automatisch reduziert, um diese Grenze einzuhalten; ein minimaler Standby-Verbrauch bleibt bestehen.  
:::


### 1.2 Strategie aktivieren

1. Tippen Sie oben rechts im Modul **Dynamischer Tarifmodus** auf <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/>.

2. Bestätigen Sie:  
   ✅ Der [**Strombezugspreis**](./profile.md#31-stromtarif-hinzufügen) wurde eingerichtet  
   ✅ Geräte, die an der Strategie teilnehmen können, wurden hinzugefügt  
   Falls dies noch nicht abgeschlossen ist, tippen Sie auf den entsprechenden Bereich, um die Einstellungen vorzunehmen, und klicken Sie anschließend auf **Weiter**.

3. Legen Sie den **[Zielpreis](#zielpreis-anpassen)** fest, der das Lade- und Entladeverhalten der Geräte steuert. Unterstützt werden drei Modi: manuell / automatisch / intelligent. Klicken Sie nach der Einrichtung auf **Weiter**.

4. Wählen Sie die **teilnehmenden Geräte** aus und klicken Sie auf **Weiter**.  
   > (Optional) Tippen Sie auf <img src={require("./img/edit_icon.png").default} width="30" style={{verticalAlign: "middle"}}/>, um die [Gerätebetriebsdetails](#11-funktionsweise-der-geräte).

5. Prüfen Sie den Lade- und Entladeplan in der Vorschau und klicken Sie auf **Aktivieren**, wenn alle Angaben korrekt sind.

<img src={require("./img/smart.png").default} width="240"/>
<img src={require("./img/strategy_requirements.png").default} width="240"/>
<img src={require("./img/price_setting.png").default} width="240"/>
<img src={require("./img/select_strategy_device.png").default} width="240"/>
<img src={require("./img/device_advanced_mode.png").default} width="240"/>
<img src={require("./img/preview_strategy.png").default} width="240"/>


### 1.3 Strategie anzeigen

Nach Erstellung zeigt das Modul den aktuellen Status (Laden/Entladen/Standby) und den Schalter.

<img src={require("./img/dynamic_pricing_strategy.png").default} width="240"/>

Tippen Sie auf das Modul, um den Zeitplan und die zugehörigen Geräte anzuzeigen.

Über das Symbol <img src={require("./img/history_icon.png").default} width="24" style={{verticalAlign: "middle"}}/> lassen sich Strompreise, SOC und Strategielogs einsehen.

<img src={require("./img/view_strategy.png").default} width="240"/>
<img src={require("./img/strategy_log.png").default} width="240"/>


### 1.4 Strategie bearbeiten

Auf der Seite zur dynamischen Strompreisoptimierung können Sie die Strategie jederzeit anpassen, einschließlich der Auswahl der Geräte und der Anpassung des Zielpreises.

#### Geräte ändern

1. Klicken Sie auf der Seite Strategiedetails rechts im Bereich **Gerätestatus** auf <img src={require("./img/edit_icon.png").default} width="24" style={{verticalAlign: "middle"}}/>.
2. Auf der Seite werden alle intelligent steuerbaren Geräte Ihres Haushalts angezeigt. Wählen Sie das gewünschte Zielgerät erneut aus.
3. (Optional) Klicken Sie auf <img src={require("./img/edit_icon.png").default} width="24" style={{verticalAlign: "middle"}}/>, um die [Betriebsmodi](#11-funktionsweise-der-geräte) für die verschiedenen Strompreistarifzeiträume anzupassen, und speichern Sie die Einstellungen.
4. Klicken Sie auf **Weiter**, prüfen Sie die Vorschau und **aktivieren** Sie die Strategie.

<img src={require("./img/view_strategy.png").default} width="240"/>
<img src={require("./img/set_strategy_device.png").default} width="240"/>
<img src={require("./img/device_advanced_mode.png").default} width="240"/>
<img src={require("./img/confirm_strategy.png").default} width="240"/>

#### Zielpreis anpassen

1. Klicken Sie auf der Seite Strategiedetails rechts im Bereich **Marktpreise** auf <img src={require("./img/edit_icon.png").default} width="24" style={{verticalAlign: "middle"}}/>.

2. Legen Sie den **Zielpreis** fest:

   - **Manuell**: Definieren Sie direkt einen Preis, unter dem der Akku geladen wird, und einen Preis, über dem der Akku entladen wird. Geeignet, wenn Sie konkrete Zielstrompreise vorgeben möchten.
   - **Automatisch**: Legen Sie einen Hochpreisbereich, einen Niedrigpreisbereich sowie die Preisdifferenz fest. Das System berechnet automatisch die optimalen Auslösepreise.
   - **Intelligent**: Legen Sie lediglich die Preisdifferenz fest. Das System optimiert die Auslösepreise automatisch.

   :::tip
   Je größer die Preisdifferenz, desto seltener werden Lade- und Entladevorgänge ausgelöst, da nur deutliche Preisunterschiede berücksichtigt werden. Je kleiner die Preisdifferenz, desto häufiger reagiert das System mit Lade- und Entladevorgängen.
   :::

3. Klicken Sie auf **Weiter**, prüfen Sie die Vorschau und **aktivieren** Sie die Strategie.

<img src={require("./img/view_strategy.png").default} width="240"/>
<img src={require("./img/strategy_price1.png").default} width="240"/>
<img src={require("./img/strategy_price2.png").default} width="240"/>
<img src={require("./img/strategy_price3.png").default} width="240"/>
<img src={require("./img/confirm_strategy.png").default} width="240"/>

---

## 2. KI-Modus

Der KI-Modus nutzt historische Daten, um die **Photovoltaik-Erzeugung** und den **Stromverbrauch des Haushalts** intelligent vorherzusagen. In Kombination mit den **Strompreisinformationen** erstellt er automatisch einen optimierten Lade- und Entladeplan, um die Gesamterträge zu maximieren.



### 2.1 KI-Modus aktivieren

1. Tippen Sie auf das Symbol <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> oben rechts im Modul **KI-Modus**.  
2. Folgen Sie den Anweisungen auf dem Bildschirm und stellen Sie sicher, dass die folgenden Bedingungen erfüllt sind:  
   ✅ Der [Stromtarif](./profile.md#31-stromtarif-hinzufügen) ist konfiguriert  
   ✅ Geräte, die an der Strategie teilnehmen können, wurden hinzugefügt  
   ✅ Stromverbrauchsdaten sind verfügbar: Es wurde ein Stromzähler oder ein Lesegerät hinzugefügt und Verbrauchsdaten wurden erfasst  
   Falls dies nicht der Fall ist, tippen Sie auf den entsprechenden Bereich, um die Einstellungen vorzunehmen, und klicken Sie anschließend auf **Weiter**.  

3. Wenn das System Photovoltaik-Informationen erkennt, fügen Sie die **Adresse** sowie die **Photovoltaikdaten** hinzu. Falls nicht, prüfen Sie, ob PV-Geräte nicht mit der Plattform verbunden sind, um die Genauigkeit der Vorhersagen sicherzustellen. Tippen Sie auf **Weiter**.  
   > (Optional) Tippen Sie auf **⚙ Erweiterte Einstellungen**, um die [Preisdifferenz](#preisdifferenz-anpassen) festzulegen.  

4. Wählen Sie die **an der Strategie teilnehmenden Geräte** aus und tippen Sie auf **Weiter**.  
5. Sehen Sie sich die vom System generierte Vorschau an und tippen Sie auf **Aktivieren**, um den KI-Modus zu starten.  

<img src={require("./img/smart.png").default} width="240"/>
<img src={require("./img/ai_mode_conditions.png").default} width="240"/>
<img src={require("./img/ai_mode_address.png").default} width="240"/>
<img src={require("./img/ai_mode_device.png").default} width="240"/>
<img src={require("./img/ai_mode_preview.png").default} width="240"/>



### 2.2 KI-Modus anzeigen

Nach der Aktivierung zeigt das Modul KI-Modus den aktuellen Status des Plans (Leerlauf / Laden / Entladen) sowie die Steuerungsschaltfläche an.  
<img src={require("./img/ai_mode_activated.png").default} width="240"/>

Tippen Sie auf das Modul KI-Modus, um die Detailseite zu öffnen und den aktuellen Strategiestatus, die Erträge sowie die teilnehmenden Geräte anzuzeigen.  
<img src={require("./img/ai_mode.png").default} width="240"/>

Tippen Sie auf den Ertragsbereich oben, um die Seite **Einkommensdetails** zu öffnen. Dort können Sie die Erträge des KI-Modus, des Standardmodus sowie einen Vergleich beider Modi einsehen.  
<img src={require("./img/revenue_details.png").default} width="240"/>


### 2.3 KI-Modus anpassen

Tippen Sie auf der Seite des KI-Modus oben rechts auf das Symbol **…**, um weitere Einstellungen zu öffnen.  
<img src={require("./img/ai_mode.png").default} width="240"/>
<img src={require("./img/ai_mode_more.png").default} width="240"/>


#### Geräte anpassen

1. Tippen Sie auf der Seite des KI-Modus auf das Symbol <img src={require("./img/edit_icon.png").default} width="24" style={{verticalAlign: "middle"}}/> rechts neben dem Modul **Gerätestatus**.  
2. Wählen Sie die an der Strategie teilnehmenden Geräte erneut aus.  

<img src={require("./img/ai_mode.png").default} width="240"/>
<img src={require("./img/ai_mode_select_device.png").default} width="240"/>


#### Verlauf anzeigen

Wählen Sie **Historisch**, um die bisherigen Betriebsdaten einzusehen.  
<img src={require("./img/ai_mode_historical.png").default} width="240"/>


#### Adressinformationen anpassen

Wählen Sie **Adressinformationen**, um die **Region und die Adresse des Haushalts** zu aktualisieren.  
<img src={require("./img/ai_mode_edit_address.png").default} width="240"/>


#### Installierte PV-Leistung anpassen

Wählen Sie **Installierte PV-Leistung**, geben Sie die tatsächlich installierte Leistung ein und speichern Sie diese.  
<img src={require("./img/ai_mode_edit_pv.png").default} width="240"/>


#### Preisdifferenz anpassen

Die KI bestimmt automatisch die Zeitpunkte für Laden und Entladen basierend auf der eingestellten **Preisdifferenz**, um die Gesamterträge zu optimieren. Je kleiner die Differenz, desto mehr Gewinnmöglichkeiten ergeben sich, allerdings wird die Batterie auch häufiger geladen und entladen.

1. Wählen Sie **Erweiterte Einstellungen**.  
2. Wählen Sie im Bereich **Preisdifferenz einstellen** entweder **Manuell** oder **Automatisch**. Bei manueller Einstellung können Sie den Zielwert über den Schieberegler festlegen.  
3. Tippen Sie auf **Speichern**.  

<img src={require("./img/ai_mode_advanced_settings1.png").default} width="240"/>
<img src={require("./img/ai_mode_advanced_settings2.png").default} width="240"/>