---
title: Bedienungsanleitung Spitzenlastbegrenzung
description: Erfahren Sie, wie die Batterie Energie reserviert und den Netzbezug bei Lastspitzen senkt, inklusive Kapazitätsgebühr‑Beispiel für Flandern (Belgien).
---
<span id="indevolt-peak-shaving"></span>

# Bedienungsanleitung Spitzenlastbegrenzung
Erfahren Sie, wie die Batterie Energie reserviert und den Netzbezug bei Lastspitzen senkt.

---
## 1. Was die Spitzenlastbegrenzung für Sie leistet
Wenn mehrere Geräte gleichzeitig laufen, kann die aus dem Netz bezogene Leistung plötzlich ansteigen. Bei aktivierter Spitzenlastbegrenzung liefert die Batterie bei Erreichen der Auslösebedingungen zusätzliche Leistung. Der Netzbezug soll möglichst nahe am eingestellten Zielwert gehalten werden.

### Warum Sie die Spitzenlastgebühren beachten sollten
In einigen Regionen oder Tarifmodellen fallen neben den Verbrauchskosten auch Spitzenlastgebühren an. Der Energieverbrauch (kWh) gibt an, wie viel Energie über einen Zeitraum verbraucht wurde. Die Spitzenlast beschreibt das Leistungsniveau innerhalb einer Messperiode, Einheit kW.

Bei manchen Tarifen wird die Spitzenlastgebühr anhand des höchsten 15‑Minuten‑Mittelwerts pro Monat berechnet. Selbst ein einmaliger Lastpeak kann die monatlichen Kosten beeinflussen. Wenn ein Teil der Spitzenlast von der Batterie abgedeckt wird, kann die abrechnungsrelevante Spitzenlast sinken. Die genaue Mess‑, Tarif‑ und Berechnungsregel ergibt sich aus Ihrem Stromvertrag.

Im zweiten Teil dieser Anleitung wird am Beispiel Flandern (Belgien) erläutert, wie Sie mit Batterie‑Spitzenkappung die Kapazitätsgebühr senken. Es gibt Berechnungsbeispiele mit Tarifen von Antwerpen aus dem Jahr 2026.

### Grundregeln
Die Spitzenlastbegrenzung hat eine höhere Priorität als Betriebsmodi wie der Eigenverbrauch. Auch bei SOC‑Werten oberhalb der Spitzenlast‑SOC unterbricht das System den aktuellen Modus und führt zuerst die Spitzenlastkappung durch, sobald die Auslösebedingungen erfüllt sind.
Sinkt der Ladezustand unter die Spitzenlast‑SOC, stellen alle anderen Entladestrategien ihre Arbeit ein. Nur die Spitzenlastbegrenzung entlädt weiter bis zur Notstrom‑SOC.

SOC ist der prozentuale Restenergiegehalt der Batterie. Ein SOC von 30 % bedeutet, dass noch ca. 30 % der Batterieenergie vorhanden sind. Die Spitzenlast‑SOC ist die Schwelle für reservierte Energie, **keine** Obergrenze für die Verbrauchsleistung.

---
## 2. Einfluss der reservierten Energie auf den Eigenverbrauch
Die Spitzenlast‑SOC ist die Reservierungsschwelle – **nicht** die Startschwelle der Spitzenlastbegrenzung. Die Spitzenlastregelung kann auch oberhalb dieses Wertes starten. Die Notstrom‑SOC ist die untere Grenze für alle Entladevorgänge.

| Einstellung | Funktion |
|---|---|
| Spitzenlast‑SOC | Bei Erreichen dieses Wertes beenden andere Modi die Batterieentladung. Die Energie wird für die Spitzenlastbegrenzung reserviert. In der App angezeigt als *Reserve für Spitzenlasten*, Standardwert 5 %. |
| Notstrom‑SOC | Sobald der Batteriezustand diesen Wert erreicht oder unterschreitet, stoppt die Spitzenlastbegrenzung die Entladung – auch bei hoher Verbrauchsleistung. |

### Beispiel‑Einstellung: Spitzenlast‑SOC =30 %, Notstrom‑SOC =10 %
| Batteriezustand | Entladung Eigenverbrauch | Entladung Spitzenlastbegrenzung |
|---|---|---|
| 50 %, keine Reservierung | Ohne Spitzenanforderung läuft der ursprüngliche Modus | Bei Auslösung wird der Modus unterbrochen, Spitzenkappung hat Vorrang |
| Gefallen auf ≤30 % und >10 % | Gestoppt; Energie für Spitzenlasten reserviert | Wird ausgeführt bei gültigen Auslösebedingungen |
| ≤10 % | Gestoppt | Gestoppt; keine Entladung auch bei Überlast |
| Nach Reservierung auf 32 % aufgeladen | Ursprünglicher Modus wieder aktiv | Wird ausgeführt bei gültigen Auslösebedingungen |

#### Beispiel 1: Batterie 25 % – warum kein Eigenverbrauchs‑Entladen
Abends beträgt die Gesamtlast aller Geräte 2 kW, keine Solarerzeugung, Batterie‑SOC 25 %.
Die Batterie befindet sich im reservierten Bereich. Der Eigenverbrauch‑Modus entlädt nicht mehr, der fehlende Strom wird aus dem Netz bezogen. Die reservierte Energie bleibt für mögliche zukünftige Lastspitzen erhalten.

#### Beispiel 2: weiterhin 25 % – warum jetzt Entladen
Anschließend steigt der Verbrauch, der Netzbezug erreicht 4,5 kW. Die eingestellte Begrenzung beträgt 3,6 kW. Wenn der Netzbezug ≥3,6 kW für 5 Sekunden andauert, startet die Spitzenlastbegrenzung, die Batterie liefert Zusatzleistung. Ziel‑Netzbezug ist 3,4 kW, die Batterie liefert ca. 1,1 kW. Verluste werden vernachlässigt, vorausgesetzt die Batterie hat ausreichende Entladeleistung.

#### Beispiel 3: auf 31 % aufgeladen – Modus noch nicht wiederhergestellt
Nach Eintritt in den Reservierungszustand wird der alte Modus nicht sofort bei Überschreiten von 30 % wieder aktiv. Die Aufladung muss bis **32 % (30 % + 2 Prozentpunkte)** erfolgen. Dadurch wird häufiges Hin‑ und Herschalten bei kleinen Schwankungen an der Schwelle vermieden.

> **Keine zusätzliche Reservierung gewünscht:** Setzen Sie Spitzenlast‑SOC gleich der Notstrom‑SOC. Es entsteht kein zusätzlicher Reservierungsbereich. Oberhalb der Notstrom‑SOC reagiert das System trotzdem auf Spitzenanforderungen und führt die Spitzenkappung mit Vorrang aus. Der Wert kann nicht unter die Notstrom‑Reserve eingestellt werden. In der App ist die Notstrom‑Reserve der Minimalwert – setzen Sie beide Werte identisch.

---
## 3. Start‑ und Endbedingungen der Spitzenlastbegrenzung
Beispiel‑Begrenzungsleistung: 3600 W (3,6 kW). Das ist der Standardwert und kann angepasst werden. Das System beobachtet die **aus dem Netz bezogene Leistung**, nicht die Summe aller Geräteleistungen im Haushalt.

| Phase | Verhalten |
|---|---|
| Start | Netzbezug ≥3600 W für mindestens 5 Sekunden, Batterie‑SOC > Notstrom‑SOC → Batterie beginnt mit Spitzenlastbegrenzung |
| Regelziel | Die Batterie liefert Zusatzleistung, um den Netzbezug auf 3400 W zu senken (eingestellter Wert minus 200 W) |
| Weiterlaufende Regelung | Sinkt der Netzbezug nach dem Start unter 3600 W, stoppt die Regelung nicht sofort. Bei Werten zwischen 3100‑3600 W bleibt die Regelung aktiv. |
| Beenden | Regelung endet, wenn Netzbezug &lt;3100 W für 30 Sekunden **oder** Netzbezug &lt;400 W. Bei &lt;400 W entfällt die 30‑Sekunden‑Wartezeit. |

### Unterschiedliche Schwellen für Start und Ende
Wenn die Regelung sofort bei Überschreiten von 3600 W startet und sofort bei Unterschreiten stoppt, verursachen kleine Leistungsschwankungen ständiges Umschalten. Unterschiedliche Schwellen sorgen für stabilen Betrieb.

### Verhalten nach Ende der Spitzenbegrenzung
Bei Aktivierung der Spitzenlastbegrenzung werden Modi wie Eigenverbrauch, Echtzeit‑Steuerung oder Zeitsteuerung unterbrochen; die Spitzenkappung hat Vorrang. Nach Beenden der Begrenzung wird der vorherige Modus wiederhergestellt.
Befindet sich die Batterie noch im Reservierungsbereich, bleiben andere Entlade‑Modi deaktiviert. Die Wiederherstellung erfolgt erst nach Aufladen bis *Spitzenlast‑SOC + 2 Prozentpunkte*.

### Keine Garantie gegen Überschreitungen
Die Spitzenlastbegrenzung **garantiert nicht**, dass der Netzbezug niemals den eingestellten Wert überschreitet. Für den Start gelten Zeitbedingungen; das Ergebnis hängt zudem von Batteriezustand, maximaler Entladeleistung und Gerätezustand ab. Erreicht die Batterie die Notstrom‑SOC, stoppt die Spitzenlastregelung. Bei anhaltend hohem Verbrauch kann der Netzbezug die Grenzwerte überschreiten.

Die Auslöse‑ und Ausschaltzeiten des Gerätes sind betriebliche Steuerregeln. Die Messintervalle des Netzbetreibers sind die Abrechnungsregeln. Diese dürfen nicht verwechselt werden: die 5‑Sekunden‑Auslösung des Gerätes ist **nicht** die abrechnungsrelevante Messperiode.

---
## 4. Vor der Einstellung: Smart‑Meter prüfen
Stellen Sie sicher, dass das Gerät mit einem kompatiblen Smart‑Meter verbunden ist und den Netzbezug auslesen kann.
App‑Hinweis: Wurde kein Smart‑Meter ausgewählt, ist die Spitzenlastbegrenzung pausiert. Wählen Sie den Zähler unter **Lasteinstellungen** aus – dann wird die Funktion automatisch aktiviert.

Bedienpfad: Gerät → ausgewähltes Mikrospeicher‑Gerät → Zahnrad‑Symbol oben rechts → **Lasteinstellungen** → Smart‑Meter auswählen. Kehren Sie anschließend zur Spitzenlast‑Seite zurück und prüfen Sie, ob die Pausemeldung verschwunden ist. Die Zähler‑Auswahlseite ist nicht auf den Screenshots abgebildet; die tatsächlichen Optionen hängen von Ihrer App‑Version ab.

### Schritt 1: Zur Geräteseite wechseln
Tippen Sie unten in der App auf **Gerät**, tippen Sie auf die Karte Ihres Mikrospeichers, z. B. „Home‑Energy‑Hub“.

### Schritt 2: Geräte‑Einstellungen öffnen
Tippen Sie auf das Zahnrad‑Symbol oben rechts auf der Gerätedetailseite.

Links: Geräteliste. Rechts: Gerätedetailseite, Zahnrad‑Symbol oben rechts. Gerätenamen und angezeigte Werte sind nur Beispiele der Benutzeroberfläche.

<img src={require("./assets/de_01.png").default} width="240"/>
<img src={require("./assets/de_02.png").default} width="240"/>

---
## 5. Spitzenlastbegrenzung finden und aktivieren
### Schritt 3: Leistungseinstellungen öffnen
Tippen Sie auf der Geräte‑Einstellungsseite auf **Leistungseinstellungen**. Falls noch kein Smart‑Meter ausgewählt wurde, erledigen Sie dies zuerst unter *Lasteinstellungen* auf derselben Seite.

### Schritt 4: Spitzenlastbegrenzung öffnen
Tippen Sie innerhalb der *Leistungseinstellungen* auf **Spitzenlastbegrenzung**. Der Seitenname lautet „Spitzenlastbegrenzung“. Aktivieren Sie den Schalter für die Spitzenlastbegrenzung.

Links: Einstellungsseite mit *Leistungseinstellungen* und *Lasteinstellungen*. Rechts: Leistungseinstellungen‑Seite, tippen Sie auf *Spitzenlastbegrenzung* zum Öffnen.

<img src={require("./assets/de_03.png").default} width="240"/>
<img src={require("./assets/de_04.png").default} width="240"/>

---
## 6. Begrenzungs‑Leistung einstellen
### Schritt 5: Gewünschten Netzbezugs‑Grenzwert festlegen
Auf der Seite *Spitzenlastbegrenzung* tippen Sie auf **Netzbezugslimit**. Passen Sie den Wert im Pop‑up‑Fenster an und speichern Sie die Einstellung. Einstellbereich: 1000‑30000 W, Standardwert 3600 W. Das ist der Parameterbereich; die praktische Wirkung wird durch die maximale Entladeleistung des Gerätes begrenzt.

Beispiel‑Einstellung 3600 W: Auslösung bei ≥3600 W über 5 Sekunden, Regel‑Zielnetzbezug ca. 3400 W.
Passen Sie den Wert an Ihre historischen Lastspitzen, Lastprofil und Batterieleistung an. Übernehmen Sie den Standardwert nicht blind für jeden Haushalt.

Links: Hauptseite Spitzenlastbegrenzung. Rechts: Pop‑up‑Fenster Leistungseinstellung, anpassen und unten speichern. Der gelbe Warnhinweis oben bedeutet: es ist noch kein Smart‑Meter ausgewählt. Ein aktivierter Schalter bedeutet **nicht**, dass die Funktion bereits wirksam ist.

<img src={require("./assets/de_05.png").default} width="240"/>
<img src={require("./assets/de_06.png").default} width="240"/>

---
## 7. Zeitplan und Spitzenlast‑Reserve einstellen
### Schritt 6: Zeitplan festlegen
Klappen Sie *Erweiterte Einstellungen* auf, tippen Sie auf **Zeitplan**. Legen Sie Start‑ und Endzeit fest und bestätigen mit dem Häkchen oben rechts. 00:00‑24:00 bedeutet Betrieb rund um die Uhr.
Für das flämische Kapazitätstarief kann zu jeder Tages‑ und Nachtzeit ein monatlicher Lastpeak entstehen. Ein 24‑Stunden‑Betrieb vermeidet verpasste Spitzen, setzt aber voraus, dass genügend Batterieenergie zur Verfügung steht.

### Schritt 7: Reserve für Spitzenlasten einstellen
Tippen Sie auf **Reserve für Spitzenlasten**, bewegen Sie den Schieberegler und speichern Sie. Dieser Wert entspricht der Spitzenlast‑SOC. Der Minimalwert ist die Notstrom‑Reserve, Maximalwert 100 %.
Beispiel: Spitzenreserve 30 %, Notstrom‑Reserve 10 %: Der Energiebereich zwischen diesen Werten ist für die Spitzenlastbegrenzung reserviert.
Wenn Sie keine zusätzliche Reservierung wollen: setzen Sie diesen Wert gleich der Notstrom‑Reserve.

Links: Pop‑up‑Fenster Zeitplan. Rechts: Pop‑up‑Fenster Reserve für Spitzenlasten. Nach dem Speichern kehren Sie zur Hauptseite zurück und prüfen: Schalter‑Status, Begrenzungsleistung, Zeitplan, Spitzenreserve und ob die Smart‑Meter‑Warnung weg ist.

<img src={require("./assets/de_07.png").default} width="240"/>
<img src={require("./assets/de_08.png").default} width="240"/>

> **Prüfverfahren:**
> Oberhalb Spitzenlast‑SOC: Bei Auslösebedingung wird der aktive Modus für die Spitzenkappung unterbrochen
> Innerhalb Reservierungsbereich: Ohne Spitzenanforderung entladen andere Modi nicht; Spitzenlastbegrenzung arbeitet bis Notstrom‑SOC
> Der alte Betriebsmodus wird erst wiederhergestellt, wenn bis auf *Spitzenlast‑SOC + 2 Prozentpunkte* aufgeladen wurde.

---
## 8. So senken belgische Haushalte ihre Kosten durch Spitzenkappung
### Gilt für Haushalte in Flandern mit digitalem Smart‑Meter
Die Tarifregeln unterscheiden sich zwischen den belgischen Regionen. Dieses Beispiel bezieht sich auf das **Kapazitätstarief** Flanderns. Es ist Teil der Netzkosten, keine Strafe bei Überschreiten einer festen Leistungsschwelle und entspricht nicht der gesamten Stromrechnung.

Der digitale Zähler erfasst alle 15 Minuten den Verbrauch und berechnet das mittlere Netzbezugsvermögen. Pro Monat wird der höchste Wert als monatlicher Peak übernommen. Der gemittelte Monatspeak ergibt sich aus den Werten der letzten 12 Monate. Der endgültige abrechnungsrelevante Peak wird über die Abrechnungsperiode gewichtet berechnet.
Es gilt eine Mindestabrechnungsschwelle von 2,5 kW. Eine Senkung darunter führt zu keiner weiteren Reduzierung dieser Tarifkomponente.

### Beispielhaushalt und Einstellungen
Haushalt in Antwerpen, abends keine Solarerzeugung, mehrere Geräte laufen gleichzeitig. Ohne Spitzenbegrenzung beträgt der mittlere Netzbezug innerhalb eines 15‑Minuten‑Intervalls 6,0 kW. Die Batterie verfügt über ausreichende Leistung und Energie.
Einstellungen des Haushalts: Begrenzungsleistung 3600 W, Zeitplan 00:00‑24:00, Reserve für Spitzenlasten 30 %, Notstrom‑Reserve 10 %. Dies sind Beispiel‑Werte, keine allgemeine Empfehlung.

Während der Begrenzung liegt das Ziel‑Netzbezugsvermögen bei ca. 3,4 kW. Bei einer Haushaltslast von 6,0 kW muss die Batterie ca. 2,6 kW liefern. Für 15 Minuten kontinuierliche Lieferung benötigt man ca. 0,65 kWh (ohne Verluste). Die Batterie muss sowohl genügend Entladeleistung als auch genügend Energie bereitstellen.

Bei einer Nennkapazität von 5 kWh entspricht der Bereich 30 %‑10 % ca. 1 kWh nomineller Reserveenergie. Die tatsächlich nutzbare Energie hängt von Verlusten, Temperatur und Batteriezustand ab. Bei mehreren Lastspitzen an einem Tag kann die Reserveenergie aufgebraucht werden.

### Warum im Beispiel mit 3,6 kW gerechnet wird
Der Regelzielwert von 3,4 kW ist nicht identisch mit der 15‑Minuten‑Messung des Netzbetreiber‑Zählers. Unter Berücksichtigung der 5‑Sekunden‑Auslösung und Leistungsschwankungen wird im Beispiel davon ausgegangen, dass der tatsächlich gemessene Monatspeak bei 3,6 kW liegt – statt 3,4 kW direkt als Abrechnungswert zu verwenden. Es wird angenommen, dass im Rest des Monats keine höheren Peaks auftreten.

Wenn im Monat bereits ein Peak von 6,0 kW aufgezeichnet wurde, löscht das Einschalten der Funktion diesen alten Wert nicht. Die Funktion verhindert nur neue höhere Peaks und senkt die Peak‑Werte zukünftiger Monate. Wenn die Batterie während einer Spitze leer läuft, kann erneut ein hoher Monatspeak entstehen.

---
## 9. Kostenersparnis‑Berechnung für das belgische Beispiel
### Verwendet werden die offiziellen Tarife von Fluvius Antwerpen 2026 für Niederspannung mit Peak‑Messung.
Das Kapazitätstarief für den gemittelten Monatspeak beträgt **49,4036563 EUR/kW/Jahr (ohne MwSt.)**. Im Beispiel wird mit 49,40 EUR/kW/Jahr gerechnet. Dieses Tarif gilt nur für diese Region und dieses Jahr; für andere Regionen nutzen Sie Ihre Rechnung oder offizielle Tarifdokumente.

Annahme: Die historischen Monatspeaks und die gesamte Abrechnungsperiode haben sich auf den jeweiligen Werten stabilisiert. Die abrechnungsrelevanten Peaks betragen 6,0 kW bzw. 3,6 kW. Der erste Monat nach Aktivierung liefert noch kein vollständiges Jahresergebnis.

| Vergleich | Ohne Spitzenlastbegrenzung | Mit Spitzenlastbegrenzung |
|---|---|---|
| Stabiler abrechnungsrelevanter Peak | 6,0 kW | 3,6 kW |
| Jährliche Kapazitätsgebühr (ohne MwSt.) | 6,0 × 49,40 = 296,40 EUR | 3,6 × 49,40 = 177,84 EUR |
| Differenz Kapazitätsgebühr (ohne MwSt.) | — | ca. **118,56 EUR pro Jahr** |

Unter diesen stabilen Bedingungen beträgt der jährliche Unterschied bei der Kapazitätsgebühr rund 119 EUR. Das ist keine direkt ausgezahlte Ersparnis und nicht die gesamte Stromrechnung. Der tatsächliche Nettovorteil hängt von Lade‑Entlade‑Verlusten der Batterie, der Quelle der geladenen Energie, Strompreisen und Alterungskosten der Batterie ab.

### Prüfung der Wirksamkeit Ihrer Einstellungen
Sehen Sie unter *Mijn Fluvius* die 15‑Minuten‑Bezugswerte und die Monatspeaks ein, um zu prüfen, ob der monatliche Höchstwert sinkt. Die Momentan‑Leistungswerte in der App dienen nur zur Beobachtung des Regelablaufs. Die Rechnung basiert ausschließlich auf den Zählerdaten des Netzbetreibers.

Beispiel: Wenn die Peaks der letzten 11 Monate bei 6,0 kW lagen und nur der neueste Monat 3,6 kW erreicht, beträgt der 12‑Monats‑Durchschnitt 5,8 kW und nicht 3,6 kW. Der Rechnungseffekt stellt sich schrittweise ein, wenn Monate mit niedrigem Peak die alten Hoch‑Peak‑Monate ersetzen. Die endgültigen Beträge werden von Ihrem Stromlieferanten festgelegt.

### Quellen und Prüfdatum
Prüfdatum: 22.10.2026. Tarifregeln richten sich nach den aktuellen offiziellen Bekanntmachungen und Ihrem Vertrag.
- Fluvius Kapazitätstarief und Rechnung: https://www.fluvius.be/nl/factuur-en-tarieven/capaciteitstarief/gezinnen-en-kleine-ondernemingen/op-mijn-factuur
- Fluvius FAQ Kapazitätstarief: https://www.fluvius.be/nl/veelgestelde-vragen/capaciteitstarief-gezinnen-kleine-ondernemingen
- Vlaamse Nutsregulator Tarife 2026 Antwerpen: https://assets.vlaamsenutsregulator.be/2025-11/FA%20-%202026%20-%20ELEK.pdf
