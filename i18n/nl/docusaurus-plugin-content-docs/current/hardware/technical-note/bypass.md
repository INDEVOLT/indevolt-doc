---
title: Bypasspoort
description: Begrijp het gebruik, de werking en het gedrag van de Indevolt-bypasspoort in verschillende scenario’s
---

# Uitleg over de bypasspoort

De bypasspoort (Backup) is een aansluiting die automatisch van richting kan wisselen. Handmatig omschakelen is niet nodig. De poort kan worden gebruikt voor:

- 🔌 Elektrische apparaten → als uitgang (stroomvoorziening)
- ☀️ PV-micro-omvormer → als ingang (energieopwekking)

---

## 1. Hoe het systeem automatisch herkent wat is aangesloten

Het systeem bepaalt automatisch het type aangesloten apparaat op basis van **de vermogensrichting + de duur**:

| Type | Detectievoorwaarde |
| ---- | ------------------ |
| Belasting | **Uitgaand** vermogen hoger dan 30 W gedurende meer dan 20 seconden |
| Micro-omvormer | **Inkomend** vermogen hoger dan 30 W gedurende meer dan 5 seconden |

> - In off-gridmodus blijft het systeem de vorige detectiestatus behouden wanneer het vermogen van de bypasspoort 0 W is.  
> - Na een herstart schakelt het systeem standaard terug naar de belastingsmodus.

---

## 2. Gedrag in verschillende scenario’s

Het systeemgedrag hangt af van twee factoren:

- Of er netstroom beschikbaar is (on-grid / off-grid)
- Of er een belasting of een micro-omvormer is aangesloten

:::info

De vermogenscapaciteit van de bypasspoort hangt af van het aantal aangesloten batterijpakketten. Eén hoofdunit heeft beperkte capaciteit en bereikt mogelijk niet het hieronder beschreven maximale vermogensbereik. Voeg extra batterijpakketten toe indien meer vermogen nodig is.

Minimaal aanbevolen configuratie:
- 1 × SolidFlex 2000 + 2 × SFA1800  
- 1 × PowerFlex 2000 + 1 × PFA2000  
:::

---

### 2.1 On-gridbedrijf met belasting

De belasting wordt gevoed door het elektriciteitsnet of door de systeemomvormer.

Vermogensbereik:
- Vermogen **niet hoger dan** 3600 W: normale werking
- Vermogen **hoger dan** 3600 W (stroom niet hoger dan 16 A) gedurende meer dan 5 seconden: beveiliging wordt geactiveerd, de bypasspoort wordt losgekoppeld en herstelt automatisch na 15 minuten

Batterijbeveiliging:
- Het systeem stopt met ontladen zodra de SOC 5% bereikt

---

### 2.2 On-gridbedrijf met micro-omvormer

De energie van de micro-omvormer wordt gebruikt voor huishoudelijk verbruik en het opladen van de batterij. Overtollige energie kan, binnen de ingestelde limieten, teruggeleverd worden aan het net.

Vermogensbereik:
- Vermogen **niet hoger dan** 2400 W: normale werking
- Vermogen **hoger dan** 2400 W gedurende meer dan 30 seconden: beveiliging wordt geactiveerd, de bypasspoort wordt losgekoppeld en herstelt automatisch na 15 minuten

Limiet voor teruglevering:
- Wanneer het ingangsvermogen van de bypasspoort de maximale teruglevering met meer dan 10% overschrijdt gedurende meer dan 30 seconden, koppelt het systeem eerst de bypasspoort los. Automatisch herstel volgt na 15 minuten.

---

#### 2.2.1 Gedrag van energiemodi in on-gridmodus

Tijdens on-gridwerking verdeelt het systeem automatisch de energie volgens de gekozen energiemodus. Daarbij geldt altijd de volgende prioriteit: eerst huishoudelijk verbruik of batterijladen, daarna pas teruglevering aan het net. De prioriteit tussen “belasting” en “batterij” verschilt per modus.

De **micro-omvormer** wordt binnen het systeem gebruikt als **aanvullende PV-bron**. Direct aangesloten PV heeft prioriteit als hoofdbron. Het systeem beheert beide automatisch; handmatig omschakelen is niet nodig.

##### Wat gebeurt er met overtollige energie?

Wanneer er meer energie wordt opgewekt dan nodig is (belasting gedekt + batterij volledig opgeladen):

| Overtollige energie boven terugleveringslimiet? | Systeemgedrag |
| --- | --- |
| Nee | Overtollige energie wordt direct aan het net teruggeleverd |
| Ja | Het systeem grijpt automatisch in om overschrijding te voorkomen:<br />- Te hoge productie van de micro-omvormer (micro-omvormervermogen hoger dan terugleveringslimiet): bypasspoort wordt losgekoppeld<br />- Vermogen van de micro-omvormer blijft binnen de limiet maar direct aangesloten PV veroorzaakt overschrijding: direct aangesloten PV-vermogen wordt verlaagd |

> **Zo stel je de terugleveringslimiet in:**  
> INDEVOLT App: apparaatpagina → selecteer apparaat → <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> → Vermogensinstelling → Maximale nettoevoer

---

##### Modus 1: Eigen verbruik

1. Energie van de micro-omvormer voedt eerst de belasting
2. Daarna wordt de batterij opgeladen
3. Wanneer de belasting is gedekt en de batterij volledig is opgeladen, wordt overtollige energie verwerkt volgens de [regels voor overtollige energie](#wat-gebeurt-er-met-overtollige-energie).

---

##### Modus 2: Laad/ontlaad schema

**(1) Laden**

- **A. Alleen PV**
  1. Energie van de micro-omvormer laadt eerst de batterij op
  2. Daarna wordt de belasting gevoed
  3. Wanneer de batterij volledig is opgeladen en de belasting is gedekt, wordt overtollige energie verwerkt volgens de [regels voor overtollige energie](#wat-gebeurt-er-met-overtollige-energie).

- **B. PV + AC**
  1. Direct aangesloten PV wordt eerst gebruikt om de batterij op te laden:
     - Wanneer het PV-vermogen voldoende is voor het ingestelde laadvermogen: de batterij wordt opgeladen via PV en de micro-omvormer voedt eerst de belasting
     - Wanneer het PV-vermogen onvoldoende is: de micro-omvormer ondersteunt eerst het opladen van de batterij, overtollige energie gaat daarna naar de belasting
  2. Nadat de batterij volledig is opgeladen, voedt de micro-omvormer eerst de belasting
  3. Wanneer de batterij volledig is opgeladen en de belasting is gedekt, wordt overtollige energie verwerkt volgens de [regels voor overtollige energie](#wat-gebeurt-er-met-overtollige-energie).

**(2) Ontladen**

1. Energie van de micro-omvormer voedt eerst de belasting
2. Daarna wordt de batterij opgeladen
3. Wanneer de belasting is gedekt en de batterij volledig is opgeladen, wordt overtollige energie verwerkt volgens de [regels voor overtollige energie](#wat-gebeurt-er-met-overtollige-energie).

---

##### Modus 3: Realtime-regeling

**(1) Stand-by / laden**

1. Energie van de micro-omvormer laadt eerst de batterij op
2. Wanneer de batterij volledig is opgeladen:
   - Opwekvermogen niet hoger dan 50 W: huidige status blijft behouden voor het eigen stroomverbruik van het apparaat
   - Opwekvermogen hoger dan 50 W gedurende meer dan 30 seconden: bypasspoort wordt losgekoppeld en het vermogen van direct aangesloten PV wordt verlaagd zodat de systeemoutput weer onder 50 W komt

**(2) Ontladen**

1. Energie van de micro-omvormer voedt eerst de belasting
2. Daarna wordt de batterij opgeladen
3. Wanneer de batterij volledig is opgeladen:
   - Opwekvermogen niet hoger dan <u>ingesteld ontlaadvermogen + tolerantie</u>: normale werking
   - Opwekvermogen hoger dan <u>ingesteld ontlaadvermogen + tolerantie</u>: bypasspoort wordt losgekoppeld

> *Tolerantie = 50 W of 10% van het ingestelde vermogen (de hoogste waarde geldt)*  
>
> *Voorbeelden:*  
> - *Ingesteld ontlaadvermogen 400 W → beveiliging wordt geactiveerd boven 450 W*  
> - *Ingesteld ontlaadvermogen 800 W → beveiliging wordt geactiveerd boven 880 W*  

---

### 2.3 Off-gridbedrijf met belasting

Wanneer het elektriciteitsnet uitvalt, wordt de belasting gevoed door de systeemomvormer.

Vermogensbereik:
- Niet hoger dan 2400 W + 2% (2448 W): stabiele werking
- 2448 W ~ 2640 W: 30 s overbelasting ondersteund
- 2640 W ~ 3000 W: 15 s overbelasting ondersteund
- Hoger dan 3000 W: 100 ms overbelasting ondersteund
- Wanneer de overbelastingslimiet wordt overschreden, wordt de bypasspoort losgekoppeld en herstelt automatisch na 15 minuten

---

### 2.4 Off-gridbedrijf met micro-omvormer

- EMS lager dan 1.01.05  
   ❌ Aansluiting van een micro-omvormer wordt niet ondersteund (de bypasspoort wordt automatisch gesloten ter bescherming van het apparaat)

- EMS 1.01.05 of hoger  
   ✅ Aansluiting van een micro-omvormer wordt ondersteund
  - Vermogensbereik: 30 W ~ 1200 W
  - Wanneer de SOC lager is dan 3%, reageert de systeemomvormer tijdelijk niet meer op de ingang van de micro-omvormer. De bypasspoort blijft echter verbonden. Zodra de SOC weer minimaal 3% bedraagt, hervat het systeem automatisch de reactie op de micro-omvormer.

---

## 3. De bypasspoort in- of uitschakelen

Besturing afhankelijk van de netwerkstatus:

| Netwerkstatus | Bedieningsmethode |
| --- | --- |
| Normaal | App / Bluetooth |
| Geen netwerk | Alleen Bluetooth |

### Methode 1: App-bediening (met netwerk)

INDEVOLT App → Apparaat → <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> → Bypass Socket → Inschakelen → Selecteer type aangesloten apparaat

<img src={require("../energy-mode/img/select_device.png").default} width="240"/>
<img src={require("../energy-mode/img/device_info.png").default} width="240"/>
<img src={require("../energy-mode/img/device_setting.png").default} width="240"/>
<img src={require("./img/bypass.png").default} width="240"/>

---

### Methode 2: Bluetooth-bediening (zonder netwerk)

INDEVOLT App → Profiel / inlogpagina → Directe apparaatverbinding → QR-code scannen → Apparaten verbinden → <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> → Bypass Socket → Inschakelen

<img src={require("./img/profile.png").default} width="240"/>
<img src={require("./img/login.png").default} width="240"/>
<img src={require("./img/scan_qr_code2.png").default} width="240"/>
<img src={require("./img/direct_connect.png").default} width="240"/>
<img src={require("./img/direct_connect_device_page.png").default} width="240"/>
<img src={require("./img/direct_connect_device_settings.png").default} width="240"/>

**Aanvullende uitleg voor off-gridmodus**

Wanneer in off-gridmodus de Slaapinstellingen → de timer voor Standby naar Slaapstand afloopt, schakelt het apparaat over naar de **slaapstand** en wordt de bypasspoort **automatisch uitgeschakeld**.

1. Kort drukken op de aan/uit-knop
2. De juiste bedieningsmethode kiezen afhankelijk van de netwerkstatus