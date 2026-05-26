---
title: Smart
description: Intelligente Steuerung des Energieverbrauchs zur optimalen Nutzung von Strompreisunterschieden für Einsparungen und zusätzliche Erträge.
---

# Smart

Die Smart-Funktion optimiert automatisch die Lade- und Entladestrategie der Batterie – entweder über den **Dynamischen Tarifmodus** oder den **KI-Modus**. Dadurch werden Strompreise und Photovoltaik-Erzeugung intelligent genutzt, um die Energieeffizienz zu erhöhen und den wirtschaftlichen Ertrag zu maximieren.


## 1. Dynamischer Tarifmodus

Der Dynamische Tarifmodus steuert das Gerät intelligent anhand vordefinierter Preisschwellen: Laden bei niedrigen Preisen, Entladen bei hohen Preisen – für maximale Nutzung von Preisschwankungen.

- Reduzierung der Stromkosten  
- Höhere Nutzung von PV-Anlage und Batterie  
- Mehr Ertrag durch Preisunterschiede  

Einfach gesagt: Bei niedrigem Preis laden, bei hohem Preis entladen – vollautomatisch optimiert.

:::info Voraussetzungen
1. Im Haushalt wird ein dynamischer Stromtarif genutzt.  
2. Ein INDEVOLT-Energiespeicher ist installiert.  
:::

### 1.1 Gerätebetrieb

#### 🔋 Laden (bei niedrigem Strompreis)

Die tatsächliche Ladeleistung wird durch die maximale Eingangsleistung des Wechselrichters bestimmt.

- Das System nutzt vorrangig PV-Energie zum Laden der Batterie;  
- Reicht die PV-Leistung nicht aus, wird automatisch Strom aus dem Netz bezogen;  
- Ist die Batterie vollständig geladen, endet der Ladevorgang automatisch.  

| Modus | Beschreibung |
|------|------|
| PV + AC | PV lädt die Batterie vorrangig, zusätzlich wird Netzstrom zur Unterstützung genutzt – ideal für Niedrigtarifzeiten. Die Ladeleistung ist durch den eingestellten Wert begrenzt. Nach vollständigem Laden wird kein Netzstrom mehr bezogen, und die PV-Leistung wird automatisch reduziert. |
| Nur PV | Die Batterie wird ausschließlich durch PV geladen. Nach vollständigem Laden wird die Energie vorrangig im Haushalt genutzt, überschüssige Energie wird im zulässigen Rahmen eingespeist; bei Überschreitung der Einspeisegrenze wird die PV-Leistung reduziert. |


#### ⚡ Entladen (bei hohem Strompreis oder hohem Verbrauch)

Die tatsächliche Entladeleistung hängt von der aktuellen Lastquelle ab (Zähler/Steckdose/Standardlast).

- PV wird vorrangig zur Versorgung genutzt;  
- Reicht die PV-Leistung nicht aus, unterstützt die Batterie automatisch;  
- Wird der Notfall-SOC erreicht, stoppt die Entladung automatisch.  

| Modus | Beschreibung |
|------|------|
| Feste AC-Leistung | Die Batterie entlädt konstant mit der eingestellten Leistung. Bei vorhandener PV wird diese bevorzugt genutzt. Ohne Last oder bei Überschreitung der Einspeisegrenze stoppt die Ausgabe und wird automatisch wieder aufgenommen. |
| Bedarfsentladung | Die Batterie passt die Entladeleistung automatisch an den aktuellen Haushaltsverbrauch an, begrenzt durch den eingestellten Maximalwert. Ohne Last oder bei Überschreitung der Einspeisegrenze wird die Ausgabe gestoppt. |


#### ⏸️ Standardzeit (außerhalb der Strategiezeiten)

In der Standardzeit entlädt die Batterie nicht aktiv. Überschüssige PV-Energie wird automatisch zum Laden genutzt.

- PV versorgt vorrangig die Haushaltsgeräte;  
- Bei überschüssiger PV-Leistung und SOC < 100 % wird die Energie in die Batterie geladen;  
- Ist die Batterie voll, wird die PV-Leistung begrenzt.  

| Modus | Beschreibung |
|------|------|
| Eigenverbrauch | PV versorgt zuerst die Lasten, überschüssige Energie lädt die Batterie. Nach vollständigem Laden wird überschüssige Energie im zulässigen Rahmen eingespeist. Bei Überschreitung der Einspeisegrenze wird die PV-Leistung reduziert. Dieser Modus ist Standard für nicht konfigurierte Zeiträume. |
| PV-Ladevorrang | PV lädt zuerst die Batterie, danach werden Haushaltslasten versorgt. Überschüssige Energie wird begrenzt eingespeist und die PV-Leistung ggf. reduziert. |


:::info
- Alle Leistungswerte sind durch die Hardware begrenzt.  
- „Einspeisegrenze“ bezeichnet die maximal erlaubte Rückspeiseleistung ins Netz.  
- In einigen Fällen wird die PV-Leistung automatisch reduziert, um diese Grenze einzuhalten; ein minimaler Standby-Verbrauch bleibt bestehen.  
:::


### 1.2 Strategie aktivieren

1. Klicken Sie im Modul **Dynamischer Tarifmodus** oben rechts auf <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/>.  
2. Stellen Sie sicher, dass folgende Konfigurationen abgeschlossen sind:  

   ✅ [**Dynamischer Strompreis**](./profile.md#31-stromtarif-hinzufügen) eingerichtet  
   ✅ Geräte für die Strategie hinzugefügt  

   Falls nicht, konfigurieren Sie diese und klicken Sie auf **Weiter**.  

3. Legen Sie den **[Zielpreis](#zielpreis-anpassen)** fest:  
   - Manuell / Automatisch / Intelligent  
   - Strategie bei Nichterfüllung wählen (Eigenverbrauch / Leerlauf)  

   Danach auf **Weiter** klicken.  

4. Geräte auswählen und **Weiter** klicken.  
   > (Optional) Über **⚙ Erweiterte Einstellungen** den [Betriebsmodus](#11-gerätebetrieb) konfigurieren  

5. Lade-/Entladeplan prüfen und mit **Aktivieren** bestätigen.  

<img src={require("./img/smart.png").default} width="240"/>
<img src={require("./img/strategy_requirements.png").default} width="240"/>
<img src={require("./img/price_setting.png").default} width="240"/>
<img src={require("./img/select_strategy_device.png").default} width="240"/>
<img src={require("./img/preview_strategy.png").default} width="240"/>


### 1.3 Strategie anzeigen

Nach Erstellung zeigt das Modul den aktuellen Status (Leerlauf/Laden/Entladen) und den Schalter.

<img src={require("./img/dynamic_pricing_strategy.png").default} width="240"/>

Durch Klicken auf das Modul können Plan und Geräte eingesehen werden.

<img src={require("./img/view_strategy.png").default} width="240"/>

Über das Symbol <img src={require("./img/history_icon.png").default} width="24" style={{verticalAlign: "middle"}}/> lassen sich Strompreise, SOC und Strategielogs einsehen.

<img src={require("./img/strategy_log.png").default} width="240"/>


### 1.4 Strategie bearbeiten

Auf der Seite zur dynamischen Strompreisoptimierung können Sie die Strategie jederzeit anpassen, einschließlich der Auswahl der Geräte und der Anpassung des Zielpreises.

#### Geräte ändern

1. Öffnen Sie die Strategiedetailseite und klicken Sie rechts im Modul **Gerätestatus** auf <img src={require("./img/edit_icon.png").default} width="24" style={{verticalAlign: "middle"}}/>.  
2. Es werden alle im Haushalt verfügbaren Geräte angezeigt, die intelligente Steuerung unterstützen. Wählen Sie die Zielgeräte erneut aus.  
3. (Optional) Klicken Sie auf **Erweiterte Einstellungen**, um die Betriebsweise für verschiedene Strompreiszeiträume anzupassen.  
4. Klicken Sie auf **Weiter**, prüfen Sie die Vorschau und klicken Sie anschließend auf **Aktivieren**.  

<img src={require("./img/view_strategy.png").default} width="240"/>
<img src={require("./img/set_strategy_device.png").default} width="240"/>
<img src={require("./img/device_advanced_mode.png").default} width="240"/>
<img src={require("./img/confirm_strategy.png").default} width="240"/>

#### Zielpreis anpassen

1. Öffnen Sie die Strategiedetailseite und klicken Sie rechts im Modul **Marktpreise** auf <img src={require("./img/edit_icon.png").default} width="24" style={{verticalAlign: "middle"}}/>.  
2. Legen Sie den **Zielpreis** fest:  
   - Manuell: Direktes Festlegen der Lade-/Entladepreise, geeignet bei klar definierten Zielpreisen.  
   - Automatisch: Festlegen von Preisbereich und Preisdifferenz; das System berechnet automatisch die optimalen Auslösepreise.  
   - Intelligent: Nur die Preisdifferenz festlegen; das System optimiert automatisch.  
   > 💡 Je größer die Preisdifferenz, desto seltener wird geladen/entladen; je kleiner die Differenz, desto häufiger erfolgt dies.  
3. Legen Sie die **Ausweichstrategie** fest:  
   - Eigenverbrauch priorisieren: PV und Batterie werden bevorzugt für den Haushaltsverbrauch genutzt.  
   - Ruhemodus: Laden/Entladen pausieren, PV versorgt vorrangig den Haushalt.  
4. Klicken Sie auf **Weiter**, prüfen Sie die Vorschau und klicken Sie anschließend auf **Aktivieren**.

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