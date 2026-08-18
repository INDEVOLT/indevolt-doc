---
title: Gids voor micro-omvormerregeling op de bypasspoort
description: Leer welke verschillende regiestrategieën het Indevolt-micro-opslagsysteem toepast wanneer een micro-omvormer op de bypasspoort is aangesloten, afhankelijk van de netgekoppelde of netontkoppelde toestand.
---

# Gids voor micro-omvormerregeling op de bypasspoort

Wanneer een micro-omvormer op de bypasspoort (Backup) wordt aangesloten, past het systeem verschillende regiestrategieën toe op basis van de netstatus:

- **Netontkoppeld (eilandbedrijf)**: Actieve vermindering van het micro-omvormervermogen door aanpassing van de uitgangsfrequentie.
- **Netgekoppeld**: Synchronisatie met het net, geen regeling van het micro-omvormervermogen; bij detectie van teruglevering of overbelasting wordt de bypass ter bescherming losgekoppeld.

## 1. Netontkoppeld bedrijf met micro-omvormer: Frequentie regeling voor vermogensreductie

### 1.1 Waarom frequentie regeling?

In netontkoppeld bedrijf voorziet het systeem zelfstandig in de stroomvoorziening en beschikt het niet over het bufferend vermogen van het openbare net. Als het micro-omvormervermogen het verbruik van de belastingen overschrijdt, stijgt de gelijkspanning van de tussenkring continu. Wanneer de veilige grens wordt overschreden, activeert het systeem een beveiligingsuitschakeling.

### 1.2 Regielogica

Het systeem vermindert het micro-omvormervermogen door de uitgangsfrequentie te verhogen. De micro-omvormer detecteert de frequentieverhoging en vermindert automatisch zijn terugleververmogen proportioneel, waardoor productie en belastingverbruik weer in evenwicht komen. Dit proces verloopt volledig automatisch en vereist geen handmatige tussenkomst.

### 1.3 Firmware-beperkingen

Het netontkoppeld bedrijf met micro-omvormer vereist EMS **versie 1.01.05 of hoger**, met een vermogensbereik van **30 W tot 1200 W**. Wanneer de ladingstoestand (SOC) lager is dan 3 %, stopt de systeemomvormer tijdelijk met reageren op de ingang van de micro-omvormer, maar de bypasspoort blijft verbonden. Zodra de SOC weer 3 % of hoger is, hervat het systeem automatisch de normale werking. Raadpleeg voor uitgebreide informatie de [Handleiding voor de bypasspoort](https://docs.indevolt.com/nl/docs/hardware/technical-note/bypass/).

## 2. Netgekoppeld bedrijf met micro-omvormer: Net synchronisatie, bypass-ontkoppeling bij storing

### 2.1 Normaal bedrijf

In netgekoppelde toestand zijn de uitgangsfrequentie en -fase van het apparaat gesynchroniseerd met het net, en volgt de micro-omvormer het net. Het systeem **regelt het micro-omvormervermogen niet actief**. De micro-omvormerenergie wordt bij voorkeur gebruikt voor de belastingvoeding en het opladen van de batterij; overtollige energie kan – binnen de teruglevergrenzen – aan het net worden geleverd.

Voor de energiedistributielogica in de verschillende bedrijfsmodi, zie [Handleiding voor de bypasspoort](https://docs.indevolt.com/nl/docs/hardware/technical-note/bypass/).

### 2.2 Beschermingsmechanisme

Wanneer een van de volgende afwijkingen wordt gedetecteerd, ontkoppelt het systeem onmiddellijk de bypasspoort en herstelt deze automatisch na 15 minuten:

| Triggerconditie              | Drempelwaarde                                                |
| :--------------------------- | :----------------------------------------------------------- |
| Teruglevering overschreden   | Overschrijding van het maximale terugleververmogen met 10 % gedurende meer dan 30 seconden |
| Micro-omvormer overbelasting | Ingangsvermogen hoger dan 2400 W gedurende meer dan 30 seconden |

Na ontkoppeling verliest de micro-omvormer de netverbinding en stopt met produceren. Na het herstel controleert het systeem opnieuw; als de storing nog steeds aanwezig is, wordt opnieuw ontkoppeld.

## 3. Vergelijking van de twee bedrijfsmodi

| Vergelijkingspunt      | Netontkoppeld met micro-omvormer                    | Netgekoppeld met micro-omvormer                       |
| :--------------------- | :-------------------------------------------------- | :---------------------------------------------------- |
| Regelmethode           | Actieve frequentie regeling voor vermogensreductie  | Net synchronisatie, geen regeling                     |
| Micro-omvormervermogen | Geregeld door de apparaatfrequentie                 | Volgt het net en levert autonoom terug                |
| Storingsbeveiliging    | Overspanningsuitschakeling / Pauzering bij lage SOC | Bypass-ontkoppeling bij teruglevering / overbelasting |
| Vermogensbereik        | 30 W ~ 1200 W                                       | Tot 2400 W                                            |
| Toepassingsscenario    | Stroomuitval, gebieden zonder elektriciteitsnet     | Normaal bedrijf met netaansluiting                    |

## 4. Veelgestelde vragen (FAQ)

**V1: Heeft de frequentie regeling in netontkoppeld bedrijf invloed op de normale werking van huishoudelijke apparaten?**

A: Nee. Het frequentie regelbereik blijft binnen een veilig interval en het regelsproces verloopt geleidelijk, zodat gangbare huishoudelijke apparaten niet worden beïnvloed.

**V2: Waarom wordt in netgekoppeld bedrijf niet ook de frequentie gebruikt voor vermogensreductie, maar wordt de bypass ontkoppeld?**

A: In netgekoppeld bedrijf is de netfrequentie vast; het apparaat kan niet via frequentie ingrijpen in het micro-omvormervermogen. Daarom wordt gekozen voor een beveiligingsstrategie van onmiddellijke ontkoppeling bij storing, wat een snellere reactie mogelijk maakt.

**V3: Hoe lang duurt het voordat de bypass na ontkoppeling is hersteld?**

A: Het automatische herstel vindt plaats na 15 minuten. Als de storing nog steeds aanwezig is, wordt opnieuw ontkoppeld.

## 5. Opmerkingen

1. Dit document is van toepassing op de series PowerFlex 2000 / SolidFlex 2000.
2. De frequentie regeling in netontkoppeld bedrijf vereist dat de micro-omvormer de frequentie-vermogensrespons ondersteunt. Controleer voor gebruik de compatibiliteit.
3. Alle parameters zijn typische waarden; de werkelijke waarden zijn afhankelijk van de firmwareversie en de instellingen ter plaatse.