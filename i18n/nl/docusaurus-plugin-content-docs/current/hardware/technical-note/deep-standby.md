---
title: Diepe standby en normale standby
description: Introductie van de diepe standbyfunctie, activeringsvoorwaarden en aandachtspunten voor energieopslagsystemen
---

# Diepe standby en normale standby

## 1. Overzicht van standbymodi

Wanneer een energieopslagsysteem tijdelijk geen laad- of voedingsbehoefte heeft, schakelt het systeem over naar de standbymodus om het energieverbruik van het apparaat te verminderen. In de standbymodus blijft het apparaat de batterijstatus bewaken en wordt de normale werking automatisch hervat zodra een laad- of voedingsbehoefte wordt gedetecteerd.

Afhankelijk van het energiebesparingsniveau zijn er twee standbymodi:

- **Normale standby**: Geschikt voor korte perioden zonder laad- of ontlaadbehoefte. Het apparaat behoudt een snelle reactietijd.
- **Diepe standby**: Geschikt voor langere perioden zonder laad- of ontlaadbehoefte. Door bepaalde niet-essentiële functies uit te schakelen, wordt het energieverbruik verder verminderd.

Diepe standby is een verdere energiebesparende toestand op basis van normale standby en betekent niet dat het apparaat is uitgeschakeld.


## 2. Verschillen tussen diepe standby en normale standby

| Vergelijkingspunt | Normale standby | Diepe standby |
| ----------------- | ---------------- | -------------- |
| Toepassingsscenario | Geen laad- of ontlaadbehoefte gedurende korte tijd | Geen laad- of ontlaadbehoefte gedurende lange tijd |
| Energieverbruik | Laag | Lager |
| Systeemstatus | De omvormer blijft in standby | De omvormer schakelt over naar de slaapmodus |
| Herstelsnelheid | Sneller | Relatief langzamer |
| EPS-omschakeltijd | Ca. 100 ms | Ca. 1–2 s |

👉 Zie de gedetailleerde informatie over energieverbruik: [standby energieverbruik](../technical-note/standby-power.md#energieverbruik-in-verschillende-bedrijfsmodi)

> Opmerking: Omdat diepe standby bepaalde bedrijfsfuncties moet herstellen voordat de normale werking wordt hervat, is de omschakeltijd van de EPS (noodstroomvoorziening) na het verlaten van diepe standby iets langer dan bij normale standby.


## 3. Introductie van diepe standby

### 3.1 Wat is diepe standby?

Diepe standby is een energiezuinige bedrijfsstatus. Wanneer het apparaat gedurende langere tijd geen laadbehoefte of uitgangsvermogen detecteert, schakelt het systeem automatisch over naar diepe standby om het eigen energieverbruik van het apparaat te verminderen.

Tijdens diepe standby:

- Blijven de batterijbeschermingsfuncties actief;
- Blijft het apparaat externe ingangen en de energievraag bewaken;
- Wordt de normale werking automatisch hervat zodra een behoefte wordt gedetecteerd.


### 3.2 Waarom schakelt het apparaat over naar diepe standby?

Ook wanneer een energieopslagsysteem niet laadt of energie levert, is een kleine hoeveelheid energie nodig om het systeem actief te houden.

Voorbeelden:

- Er is 's nachts geen PV-opwekking en geen belasting aanwezig;
- Het apparaat wordt gedurende langere tijd niet gebruikt.

Diepe standby vermindert het standby energieverbruik in situaties met weinig gebruik en helpt zo het batterijverbruik te verminderen.


### 3.3 Diepe standby instellen

De diepe standbyfunctie ondersteunt het instellen van een actieve periode:

- De starttijd en eindtijd kunnen worden ingesteld;
- Instellingen die over middernacht heen lopen worden ondersteund;
- De standaardinstelling is de hele dag actief (00:00–23:59).

Instelmethode:

1. Selecteer **Diepe Standby** op de pagina met apparaatinstellingen;
2. Stel de actieve periode voor diepe standby in.

<img src={require("../energy-mode/img/device_setting.png").default} width="240"/>
<img src={require("./img/deep_standby.png").default} width="240"/>
<img src={require("./img/deep_standby_time.png").default} width="240"/>

Na het voltooien van de configuratie schakelt het apparaat automatisch over naar diepe standby wanneer aan de voorwaarden wordt voldaan.


### 3.4 Diepe standby verlaten

Het apparaat verlaat diepe standby automatisch wanneer een van de volgende situaties wordt gedetecteerd:

- Er is een laadbehoefte;
- Er is een voedingsbehoefte;
- Er wordt een externe voedingsbron gedetecteerd (zoals PV-invoer of AC-invoer);
- Er wordt een knop op het apparaat bediend.

Na het verlaten van diepe standby keert het apparaat terug naar de normale bedrijfsmodus.