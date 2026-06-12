---
title: SOC-balancering batterijen
description: Begrijp hoe het systeem automatisch corrigeert en beschermt wanneer de batterijladingsniveaus niet gelijk zijn
---

# Uitleg over SOC-balancering van batterijen

## 1. Wat is SOC-balancering

SOC (State of Charge) geeft het laadniveau van een batterij in procenten weer. Wanneer meerdere batterijpacks op het micro-energiesysteem worden aangesloten, kunnen er ondanks identieke modellen verschillen ontstaan in laadniveau door gebruiksduur, temperatuur of belasting. In dat geval voert het systeem automatisch **SOC-balancering** uit om de laadniveaus van de batterijpakketten zo dicht mogelijk bij elkaar te brengen.

Eenvoudig gezegd: batterijen met een hoger laadniveau leveren relatief meer vermogen, terwijl batterijen met een lager laadniveau minder bijdragen, zodat de verschillen geleidelijk worden verkleind.

---

## 2. Waarom SOC-balancering nodig is

- Verlenging van de levensduur van de batterij: voorkomt ongelijk aantal laadcycli
- Verbetering van de efficiëntie: stabielere systeemwerking bij gelijke SOC-waarden
- Veiligheid: vermindert risico op oververhitting en schade

---

## 3. Waarom er onbalans ontstaat

Zelfs batterijen van hetzelfde type zijn nooit volledig identiek.

Veelvoorkomende oorzaken zijn:
- Kleine verschillen in capaciteit of interne weerstand bij productie
- Verschillende belasting tijdens gebruik, wat leidt tot ongelijke laad- en ontlaadsnelheden
- Combinatie van nieuwe en oudere batterijen met verschillende verouderingsniveaus
- Het eigen [standbyverbruik](./standby-power.md) van het apparaat, waarbij verschillende batterijen ongelijk worden belast
- Lagere nauwkeurigheid van SOC-berekening bij lage vermogens of kleine stromen, wat zich op lange termijn opstapelt
- Invloed van systeemlogica, waarbij sommige batterijen vaker worden ingezet voor ontlading of bijladen

Na verloop van tijd kunnen deze factoren zich opstapelen en leiden tot merkbare SOC-verschillen.

---

## 4. Problemen met traditionele batterijconfiguraties

In traditionele energieopslagsystemen worden batterijpakketten vaak in serie, parallel of een combinatie daarvan gekoppeld. In dergelijke configuraties zijn de batterijen direct met elkaar verbonden, waardoor hoge eisen worden gesteld aan uniformiteit.

**Serieschakeling**

In een serieschakeling wordt de totale capaciteit beperkt door de “zwakste batterij”. Als één batterij eerder vol of leeg raakt, moet het hele systeem worden gestopt om schade te voorkomen.

**Parallelschakeling**

Bij parallelschakeling kan een spanningsverschil tussen batterijen leiden tot interne circulatiestromen. Dit veroorzaakt extra warmte en energieverlies en versnelt veroudering van de batterijen.

---

## 5. Hoe een DC-DC-architectuur deze problemen oplost

Het micro-energiesysteem gebruikt een DC-DC-architectuur, waarbij elk batterijpack via een afzonderlijke DC-DC-converter op het systeem is aangesloten. Dit kan worden gezien als een “intelligente regelaar” per batterij, waardoor batterijen elkaar niet direct beïnvloeden.

Vergeleken met traditionele configuraties:

| Traditionele aansluiting | DC-DC-architectuur |
| ------------------------ | ------------------ |
| Batterijen direct verbonden | Batterijen onafhankelijk aangesloten |
| Hoge eisen aan uniformiteit | Minder afhankelijk van gelijkheid |
| Batterijen beïnvloeden elkaar | Batterijen zijn geïsoleerd |
| Moeilijke vermogensverdeling | Individuele vermogensregeling |
| Moeilijk om nieuwe/oude batterijen te combineren | Beter compatibel met verschillende toestanden |

Hierdoor kunnen SOC-verschillen bestaan, terwijl het systeem deze tijdens gebruik geleidelijk corrigeert.

---

## 6. Hoe SOC-balancering wordt uitgevoerd

Het systeem gebruikt interne DC-DC-modules en een EMS (Energy Management System) om automatisch te regelen:

- Vermogensverdeling op basis van SOC-verschillen per batterij
- Batterijen met hogere SOC: leveren meer vermogen / laden minder
- Batterijen met lagere SOC: leveren minder vermogen / laden meer

Tijdens deze dynamische regeling kunnen SOC-verschillen tijdelijk blijven bestaan, meestal binnen **3% tot 15%**.

**Voorbeeld:**
- Batterijpack 1: SOC 80%
- Batterijpack 2: SOC 40%
- Belasting: 900 W

Het EMS verdeelt het vermogen als volgt:
- Batterijpack 1 (hoge SOC): ~600 W ontlading
- Batterijpack 2 (lage SOC): ~300 W ontlading

Na verloop van tijd worden de verschillen kleiner totdat er een evenwicht ontstaat.

---

## 7. Balancering bij lage SOC

Wanneer de totale energie laag is, heeft het systeem prioriteit voor veiligheid en basisvoorziening.

<details className="custom-details">
  <summary className="custom-details__summary">Hoe noodreserve instellen/bekijken</summary>

  App-stappen: apparaatpagina → selecteer het micro-energiesysteem → klik op het <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> pictogram → ga naar SoC-Instellingen → stel Noodstroomreserve in (5%–100%)

    <img src={require("../energy-mode/img/select_device.png").default} width="240"/>
  <img src={require("../energy-mode/img/device_info.png").default} width="240"/>
  <img src={require("../energy-mode/img/device_setting.png").default} width="240"/>
  <img src={require("./img/soc_settings.png").default} width="240"/>
  <img src={require("./img/backup_reserve.png").default} width="240"/>

</details>

### 7.1 Ontladen

- Wanneer een batterijpack de ingestelde noodreserve bereikt, stopt deze met ontladen en gaat in stand-by
- Andere batterijen boven de drempel blijven leveren

### 7.2 Laden

**◽ Met PV (PV / PV + AC)**  
Alle batterijpakketten worden gelijktijdig geladen

**◽ Alleen netladen (AC)**

| EMS-versie | Gedrag |
|------------|--------|
| Lager dan 1.01.05 | Wanneer de totale SOC onder de noodreserve ligt, worden **alle batterijpakketten gelijktijdig geladen**;<br />het laden stopt zodra de totale SOC de noodreserve bereikt |
| 1.01.05 of hoger | Wanneer de totale SOC onder de noodreserve ligt, worden **eerst de batterijpakketten onder de noodreserve geladen**;<br />het laden stopt zodra de totale SOC de noodreserve bereikt |

📌 Zie voor details: [Uitleg over bijlaadlogica](./recharge.md)

### 7.3 Stand-by

**◽ Stroomverbruik van de hoofdunit**

Of de hoofdunit is uitgerust met een AC-hulpmodule bepaalt de energiebron in stand-by. Deze informatie wordt later in de app weergegeven.

- Zonder hulpmodule: voeding via de eigen batterij (snellere SOC-daling)
- Met hulpmodule: voeding via hulpmodule of netstroom (minder batterijverbruik)

**◽ Batterijpack-verbruik**

Ongeveer 2 W, altijd gevoed door de eigen batterij

📌 Zie voor details: [Uitleg over standbyverbruik](./standby-power.md)