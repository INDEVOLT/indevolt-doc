---
title: FAQ en probleemoplossing
description: Veelgestelde vragen en gebruiksinstructies voor INDEVOLT energieopslagapparatuur
---

# FAQ en probleemoplossing

## 1. Toepassingsbereik en basiscompatibiliteit

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. Vraag: Met welke specificaties zonnepanelen is het apparaat compatibel?
  </summary>

  Antwoord: Het wordt aanbevolen om zonnepanelen te gebruiken met een open-klemspanning (Voc) van 10–60V en een kortsluitstroom (Isc) van maximaal 20A.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  2. Vraag: Kan het apparaat worden gebruikt bij temperaturen onder 0°C? Wat is het ideale werktemperatuurbereik van de batterij?
  </summary>

  Antwoord: Het apparaat kan onder 0°C normaal laden en ontladen, en ook de PV-opwekking functioneert normaal. Door verminderde zoninstraling in de winter kan de opbrengst lager zijn. In dat geval wordt de opgewekte energie meestal volledig lokaal gebruikt zonder verspilling. Het ideale temperatuurbereik van de batterij is:
    - Laden: -20~55°C
    - Ontladen: -20~55°C
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  3. Vraag: Met welke merken is het apparaat compatibel?
  </summary>

  Antwoord: Momenteel worden onder andere Shelly, Solarman en Indevolt ondersteund.
</details>

## 2. Installatie, bekabeling en gebruik

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. Vraag: Is een extra micro-omvormer nodig?
  </summary>

  Antwoord: Afhankelijk van het model is de situatie als volgt:
  - Niet-ECO-modellen: hebben een ingebouwde micro-omvormer en vereisen geen extra configuratie, inclusief 4 MPPT’s (Maximum Power Point Tracking). Indien nodig kan een extra micro-omvormer worden aangesloten om het PV-vermogen te verhogen.
  - ECO-modellen: ondersteunen geen MPPT.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  2. Vraag: Waar moet ik op letten bij het plaatsen of toevoegen van een uitbreidingsbatterij?
  </summary>

  Antwoord: Dit moet altijd gebeuren terwijl het apparaat volledig spanningsloos is. Het is strikt verboden om onder spanning aan te sluiten of los te koppelen, omdat dit schade of veiligheidsrisico’s kan veroorzaken. De juiste stappen zijn:
      1. Koppel de PV-ingang en de AC-stekker los;
      2. Houd de aan/uit-knop 2 seconden ingedrukt om het apparaat uit te schakelen;
      3. Plaats de uitbreidingsbatterij nadat het apparaat is uitgeschakeld;
      4. Sluit de zonnepanelen opnieuw aan en schakel het systeem in.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  3. Vraag: Kan het apparaat tijdens een stroomstoring worden gebruikt?
  </summary>

  Antwoord: Tijdens een stroomstoring in huis kan het apparaat normaal blijven werken. Het kan worden opgeladen via zonne-energie. Het maximale uitgangsvermogen van de off-grid uitgang verschilt per productmodel.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  4. Vraag: Kan de netaansluiting worden gebruikt tijdens een stroomstoring?
  </summary>

  Antwoord: Volgens de geldende netaansluitingsnormen moet het apparaat beschikken over anti-islanding-functionaliteit (om te voorkomen dat het tijdens een netstoring stroom teruglevert aan het elektriciteitsnet, wat gevaar kan opleveren voor onderhoudspersoneel). Daarom kan er bij een stroomstoring geen energie via de netpoort worden teruggeleverd. Alleen de off-grid uitgang kan belastingen van stroom voorzien.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  5. Vraag: Hoe moet de bypassmodus worden begrepen?
  </summary>

  Antwoord: De bypassmodus is een bedrijfsmodus die is ontworpen om bepaalde externe apparaten te ondersteunen. Wanneer de bypassmodus is ingeschakeld, kunnen micro-omvormers, kritieke belastingen en andere apparaten worden aangesloten. Gebruikers kunnen deze functie in- of uitschakelen op basis van de aangesloten apparatuur via het apparaat of de app. Na activering toont de app de aangesloten apparaten en de energiestroomstatus voor realtime monitoring.

  👉 Gedetailleerde uitleg: [Gebruik van de bypasspoort](./technical-note/bypass.md)
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  6. Vraag: Hoe kan ik apparaatgegevens bekijken en instellingen aanpassen bij netwerkuitval?
  </summary>

  Antwoord: Bij een netwerkstoring blijft de basisfunctionaliteit van het apparaat werken. U kunt gegevens lokaal via Bluetooth bekijken:
    - Optie 1: Selecteer “Directe apparaatverbinding” op het inlogscherm en verbind via Bluetooth met het apparaat;
    - Optie 2: Ga in de app naar “Profiel” en kies de functie “Directe apparaatverbinding”.
</details>

## 3. Laad-/ontlaad- en energiebeheerstrategieën

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. Vraag: Is het een probleem als meerdere batterijen een verschillende SOC hebben?
  </summary>

  Antwoord: Nee, dit is normaal.

  Elke batterijpack is uitgerust met een onafhankelijke DC-DC-optimizer, waardoor het systeem automatisch verschillen in laadniveau tussen batterijen kan balanceren. Zelfs batterijpacks met verschillende capaciteiten of SOC-niveaus kunnen samen worden gebruikt. Het systeem voert automatisch SOC-balancering uit zonder handmatige tussenkomst.

  👉 Gedetailleerde uitleg: [Uitleg SOC-balancering](./technical-note/soc-balancing.md)
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  2. Vraag: Hoe stel ik in dat het apparaat geen stroom teruglevert aan het huisnet?
  </summary>

  Antwoord: Ga in de app naar “Vermogensinstelling” van het apparaat en stel het maximale terugleververmogen in op 0.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  3. Vraag: Kan ontladen worden geregeld op basis van “tijd + batterijpercentage”?
  </summary>

  Antwoord: Ja. U kunt dit instellen via Home Assistant. In de realtime-bedieningsmodus kunt u tijdregels en SOC-drempelregels toevoegen om gecombineerde aansturing te realiseren.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  4. Vraag: Hoe stel ik in dat het apparaat via zonnepanelen de batterij oplaadt?
  </summary>

  Antwoord: Stel in de app een aangepast tijdschema in en kies als laadmodus “alleen laden via zon”.

  > **Let op**: Om de batterijgezondheid te behouden, zal het systeem automatisch laden via het net wanneer de batterij zeer laag is (SOC ≤ 3%) en het PV-vermogen onvoldoende is. Dit beschermt de batterij.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  5. Vraag: Vanaf welk PV-vermogen begint het apparaat met laden?
  </summary>

  Antwoord: Het systeem begint met laden zodra het PV-vermogen hoger is dan 50 W. Het eigen verbruik van het apparaat is ongeveer 35 W, en door conversieverliezen blijft bij een lager PV-vermogen onvoldoende energie over om de batterij effectief op te laden.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  6. Vraag: Waarom wordt er geen “laden” weergegeven bij laag PV-vermogen?
  </summary>

  Antwoord: Bij laag PV-vermogen wordt een deel van de energie eerst gebruikt voor systeemwerking en conversie. Hierdoor kan het werkelijke laadvermogen naar de batterij zeer klein zijn.

  Als het laadvermogen onder de weergavedrempel van de app valt, wordt “stand-by” weergegeven, terwijl de batterij in werkelijkheid nog steeds langzaam kan opladen. Dit is normaal.

  Weergavedrempels:

  - Laden ≥ 30 W: “laden”
  - Ontladen ≥ 60 W: “ontladen”
  - Onder deze waarden: “stand-by”
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  7. Vraag: Moet de batterij volledig worden opgeladen vóór eerste gebruik?
  </summary>

  Antwoord: Ja, het wordt aanbevolen om de batterij vóór het eerste gebruik één keer volledig op te laden. Dit kalibreert de SOC-waarde en zorgt ervoor dat de weergave in de app overeenkomt met de werkelijke batterijstatus.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  8. Vraag: Stoppen zonnepanelen met werken wanneer de batterij vol is? Is dat veilig?
  </summary>

  Antwoord: Het apparaat heeft ingebouwde overlaadbeveiliging. Wanneer de SOC 100% bereikt, stopt het automatisch met laden. Dit is normaal en veilig.

  Na volledige lading hangt het gedrag van de zonnepanelen af van de systeemstatus en app-instellingen:

  - Als er nog verbruik is, leveren de zonnepanelen stroom aan de belasting;
  - Als teruglevering is ingeschakeld, wordt overtollige energie volgens de ingestelde “maximale nettoevoer” aan het net geleverd;
  - Als er geen vraag is, wordt PV-productie automatisch verminderd of gestopt.

  Dit proces wordt volledig automatisch geregeld en veroorzaakt geen schade aan het systeem, de batterij of de zonnepanelen.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  9. Vraag: Waarom heeft de Backup-poort geen stroom wanneer het net is losgekoppeld?
  </summary>

  Antwoord: Mogelijke oorzaken:

  - Wanneer de EMS-firmware lager is dan 1.01.08, kan de Backup-poort in micro-omvormermodus worden geblokkeerd voor off-grid ontlading ter bescherming van het systeem;
  - Wanneer de batterij-SOC lager is dan 5%, kan de poort ook worden uitgeschakeld.

  Controleer het volgende:
  - Update de EMS-firmware in de app naar versie 1.01.08 of hoger;
  - Controleer of het batterijniveau te laag is.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  10. Vraag: Wat is het stroomverbruik van de SolidFlex 2000?
  </summary>

  Antwoord: Het stroomverbruik van de SolidFlex 2000 verschilt per situatie:

  - Tijdens werking (laden, ontladen of voeding van belasting): ongeveer 30 W;
  - Diepe stand-bymodus (geen laden/ontladen, laag verbruik): afhankelijk van systeeminstellingen. Zie [stand-byverbruik](./technical-note/standby-power.md) voor details.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  11. Vraag: Wordt de belasting altijd gevoed door de batterij, of kan deze direct zonne-energie gebruiken?
  </summary>

  Antwoord: Niet altijd.

  - Wanneer het PV-vermogen voldoende is, wordt de belasting direct door zonne-energie gevoed en wordt het overschot gebruikt om de batterij op te laden;
  - Wanneer het PV-vermogen onvoldoende is, levert de batterij extra vermogen;
  - Apparaten geproduceerd na december 2025 bevatten een AC-hulpvoedingsmodule, waardoor in diepe standby-modus stroom uit het net kan worden gebruikt.
</details>


## 4. Uitbreiding, batterijen en parallelbedrijf

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. Vraag: Wat is de cluster-modus en hoe gebruik ik deze?
  </summary>

  Antwoord: Een cluster is een systeem waarbij meerdere micro-energieopslageenheden worden gekoppeld tot één geïntegreerd systeem dat gezamenlijk energievoorziening, opslag en energiebeheer uitvoert.

  Gebruiksmethode: Nadat alle apparaten succesvol zijn toegevoegd en gekoppeld in de app, gaat u naar de instellingenpagina van het apparaat. Selecteer “Cluster” en voeg de te koppelen apparaten toe volgens de instructies. Na voltooiing wordt de cluster-modus geactiveerd. In dit scherm kunnen ook vermogensverdeling en SOC-drempels worden ingesteld.

  👉 Gedetailleerde uitleg: [Uitleg cluster](./technical-note/cluster.md)
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  2. Vraag: Kunnen PowerFlex-systemen en SolidFlex-systemen samen in cluster-modus werken?
  </summary>

  Antwoord: Ja, PowerFlex- en SolidFlex-systemen worden ondersteund in gezamenlijke cluster-modus.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  3. Vraag: Als ik twee batterijgroepen in parallel heb, is het uitgangsvermogen 2×2400W of slechts 2400W in totaal?
  </summary>

  Antwoord: U kunt in de app onder “Vermogensinstellingen” van de parallelgroep het maximale AC-uitgangsvermogen van het huidige systeem bekijken.

  Afhankelijk van de parallelconfiguratie verschilt de uitgangscapaciteit:

  - Gecoördineerde cluster: elke eenheid is afzonderlijk op het net aangesloten en verwerkt eigen AC-in- en uitgang. Elke batterijgroep kan tot 2400W leveren.
  - Gecentraliseerde cluster: alle AC-in- en uitgangen worden samengevoegd in de hoofdunit, die de netaansluiting en vermogensregeling beheert. In deze modus kan het totale uitgangsvermogen van de hoofdunit oplopen tot 2 × 2400W.

  Het werkelijke instelbare vermogen moet altijd voldoen aan lokale net- en veiligheidsnormen.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  4. Vraag: Hoe wordt het vermogen verdeeld bij meerdere parallel geschakelde apparaten?
  </summary>

  Antwoord: Het systeem gebruikt een gedistribueerde vermogensverdeling op basis van SOC en belasting. De regels zijn als volgt:

  - Ontlaadvermogen < 200W: alleen de eenheid met de hoogste SOC levert vermogen;
  - 200W ≤ ontlaadvermogen < 500W: de twee eenheden met de hoogste SOC delen het vermogen;
  - Ontlaadvermogen > 500W: alle slave-eenheden nemen deel en verdelen het vermogen op basis van hun SOC-aandeel.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  5. Vraag: De batterij toont een maximaal vermogen van 2400W, maar de standaardinstelling is 800W. Kan dit worden verhoogd naar 2400W?
  </summary>

  Antwoord: Het ontlaadvermogen wordt bepaald door het aantal batterijpacks. Om het vermogen te verhogen naar 2400W, moeten extra batterijpacks worden toegevoegd. Alleen via software-instellingen kan het vermogen niet worden verhoogd.

  Na uitbreiding van het aantal batterijpacks neemt de ontlaadcapaciteit automatisch toe. Zorg er altijd voor dat de belasting compatibel is om overbelasting en schade te voorkomen.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  6. Vraag: Hoeveel SolidFlex 2000-systemen en SFA1800-batterijmodules worden maximaal ondersteund? Wat is het maximale totale vermogen?
  </summary>

  Antwoord:
  - Maximale uitbreiding per unit: elke SolidFlex 2000 ondersteunt maximaal 5 SFA1800-batterijmodules, met een maximale energiecapaciteit van 10,8 kWh per unit;
  - Maximaal totaal ontlaadvermogen: de nominale ontlaadcapaciteit van één SolidFlex 2000 is 2400W. Het systeem ondersteunt tot 3 SolidFlex 2000-units in draadloze cluster, met een totaal maximaal ontlaadvermogen van 7200W (3 × 2400W).
</details>

## 5. Systeemintegratie

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. Vraag: Kan het systeem worden geïntegreerd met energieopslagsystemen van andere merken?
  </summary>

  Antwoord: Ja. Via Home Assistant kan het systeem worden gekoppeld aan andere systemen voor geïntegreerde aansturing. Zorg ervoor dat beide systemen in Home Assistant zijn toegevoegd en dat apparaatautorisatie en commandokoppeling correct zijn geconfigureerd.
</details>

## 6. Garantie

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. Vraag: Wat is de garantieperiode van het product en welke onderdelen vallen hieronder?
  </summary>

  Antwoord: Het product wordt geleverd met **10 jaar beperkte garantie**. De garantie dekt de batterij, de AC-omvormer en het volledige systeem (uitgezonderd slijtageonderdelen; exacte voorwaarden zijn afhankelijk van het garantiecontract).
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  2. Vraag: Is de levensduur van 8000 cycli contractueel gegarandeerd of slechts een theoretische waarde?
  </summary>

  Antwoord: De levensduur van 8000 cycli is gebaseerd op daadwerkelijke testresultaten (het systeem gebruikt twee grote cellen om de cyclische stabiliteit te verbeteren) en maakt deel uit van de contractuele garantie.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  3. Vraag: Welke resterende batterijcapaciteit (SOH) wordt gegarandeerd aan het einde van de garantieperiode?
  </summary>

  Antwoord: Niet minder dan 70% (SOH).
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  4. Vraag: Wat is de maximaal toegestane ontladingsdiepte (DOD) van de batterij?
  </summary>

  Antwoord: Onder garantievoorwaarden is de maximale ontladingsdiepte 100%. In dagelijks gebruik wordt echter aanbevolen dit af te stemmen op de werkelijke behoefte om frequent volledig ontladen te vermijden.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  5. Vraag: Beperkt het systeem automatisch de laad- en ontlaadsnelheid (C-rate) om de levensduur van de batterij te verlengen?
  </summary>

  Antwoord: Ja. Het systeem ondersteunt handmatige instelling van het laad- en ontlaadvermogen en beperkt daarnaast automatisch de C-rate op basis van batterijstatus (zoals SOC en temperatuur) om schade door hoge belastingen te voorkomen en de levensduur van de batterij te verlengen.
</details>