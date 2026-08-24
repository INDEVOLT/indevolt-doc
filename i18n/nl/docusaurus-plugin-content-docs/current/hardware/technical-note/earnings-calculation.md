---
title: Uitleg over de berekeningsmethode van opbrengsten
description: Ontdek hoe het Indevolt-micro-opslagsysteem de PV-opbrengst, opslagopbrengst en de totale huishoudelijke opbrengst berekent.
---

# Uitleg over de berekeningsmethode van opbrengsten

In de Indevolt App ziet u mogelijk gegevens zoals 'Opbrengst van vandaag', 'PV-opbrengst' of 'Opslagopbrengst'. Hoe worden deze cijfers berekend?

Simpel gezegd: het systeem vergelijkt 'hoeveel u zou uitgeven zonder PV en opslag' met 'hoeveel u nu daadwerkelijk uitgeeft'. Het verschil is uw opbrengst.

## 1. Waar komen de opbrengsten vandaan?

Na de installatie van een PV- en opslagsysteem komen uw opbrengsten voornamelijk uit drie bronnen:

- 💰 **Minder netafname**: zonnestroom wordt direct in huis gebruikt, of de batterij ontlaadt wanneer nodig, waardoor de afname van het net wordt verminderd.
- 💵 **Teruglevering**: overtollige stroom die niet direct wordt verbruikt, wordt aan het net geleverd, wat terugleveringsopbrengsten oplevert.
- 🧠 **Slimmer gebruik**: de opslag houdt stroom vast voor momenten waarop deze meer nodig is of wanneer de stroomprijzen hoger zijn – als het ware 'laag opslaan, hoog verbruiken'.

## 2. Hoe berekent het systeem de opbrengsten?

Het systeem simuleert drie huishoudelijke stroomsituaties en vergelijkt ze om te schatten hoeveel opbrengst respectievelijk door PV en opslag wordt gegenereerd.

### Vergelijkingsscenario's

| Scenario                       | Aanname                           | Betekenis van de kosten                                      |
| :----------------------------- | :-------------------------------- | :----------------------------------------------------------- |
| ① Zonder PV en opslag          | Geen PV, geen opslag              | Alle huishoudelijke stroom wordt van het net afgenomen – de kosten die u zou betalen. |
| ② Alleen PV                    | Alleen PV, geen opslag            | Zonnestroom wordt in huis gebruikt, maar zonder batterijondersteuning – de kosten die dan zouden ontstaan. |
| ③ Met PV en opslag (werkelijk) | PV + opslag (werkelijke situatie) | Werkelijke huidige kosten berekend op basis van werkelijke netafname en teruglevering. |

**Opbrengstformules:**

- **PV-opbrengst** = Elektriciteitskosten in ① − Elektriciteitskosten in ② (besparing door PV-installatie)
- **Opslagopbrengst** = Elektriciteitskosten in ② − Elektriciteitskosten in ③ (extra besparing door de batterij)
- **Totale huishoudelijke opbrengst** = PV-opbrengst + Opslagopbrengst

## 3. Twee manieren om de totale huishoudelijke opbrengst te begrijpen

De totale opbrengst kan op twee gangbare manieren worden uitgedrukt – het resultaat is hetzelfde, kies wat u het beste bevalt.

|               | PV-opbrengst + Opslagopbrengst                               | Besparing op elektriciteitsrekening + Terugleveringsopbrengst |
| :------------ | :----------------------------------------------------------- | :----------------------------------------------------------- |
| Geschikt voor | Inzicht in de bijdrage van PV en batterij; weergegeven op detailpagina's van PV en opslag; evaluatie van rendement en vergelijking van energiestrategieën | Inzicht in hoeveel u bespaarde op de rekening en verdiende met teruglevering; afstemming met uw factuur |

'Besparing op elektriciteitsrekening + Terugleveringsopbrengst' kan ook worden geschreven als:

**Totale huishoudelijke opbrengst = Kosten zonder PV en opslag − Werkelijke huidige kosten**

Waarbij: **Werkelijke huidige elektriciteitskosten = Netafname × Afnameprijs − Teruglevering × Teruglevertarief**.

Voor huishoudens die nauwelijks terugleveren, is de terugleveringsopbrengst 0 en is de totale opbrengst ≈ besparing op de rekening.

> **Informatie**
> Terugleveringsopbrengst is slechts een deel van de opbrengst. De stroom die direct wordt verbruikt en de netafname die wordt vermeden door batterijontlading – deze 'minder afgenomen' kilowattuur besparen ook geld en maken deel uit van de opbrengst.

## 4. Rekenvoorbeeld

Aan de hand van 20 augustus 2026 als voorbeeld demonstreren we het berekeningsproces van de opbrengsten met echte gegevens uit de App.

### Opbrengstresultaten bekijken

Op de pagina 'Opbrengstcalculator' in de App ziet u de dagopbrengst:

<img src={require("./img/profit_calculator.png").default} width="240"/>

- PV-opbrengst: €0,39
- Opslagopbrengst: €0,12
- Totale opbrengst: €0,51

Berekeningsverband: **0,39 + 0,12 = 0,51**, dus totale opbrengst = PV-opbrengst + opslagopbrengst.

### Berekening van de opbrengsten

Het systeem berekent de PV-opbrengst en opslagopbrengst door de elektriciteitskosten van de drie scenario's te vergelijken:

| Onderdeel        | Berekeningswijze                              | Resultaat               |
| :--------------- | :-------------------------------------------- | :---------------------- |
| PV-opbrengst     | Kosten zonder PV − Kosten met alleen PV       | €0,39                   |
| Opslagopbrengst  | Kosten met alleen PV − Kosten met PV + opslag | €0,12                   |
| Totale opbrengst | PV-opbrengst + Opslagopbrengst                | 0,39 + 0,12 = **€0,51** |

> De specifieke elektriciteitskosten van de drie scenario's worden gesimuleerd door de systeembackend en worden niet direct in de App weergegeven.

### Alternatieve benadering

De totale opbrengst is ook gelijk aan de besparing op de elektriciteitsrekening plus de terugleveringsopbrengst. Hiervoor zijn gegevens nodig over netafname, teruglevering en de bijbehorende prijzen.

Op het tabblad 'Net' van de statistiekenpagina ziet u de dagelijkse afname en teruglevering:

<img src={require("./img/grid.png").default} width="240"/>

- Netafname: 3,49 kWh
- Teruglevering: 615,07 kWh

Op de pagina 'Historische stroomprijzen' ziet u de dagelijkse afnameprijs en het teruglevertarief:

<img src={require("./img/historical_tariffs.png").default} width="240"/>

- Afnameprijs: 0,2295 GBP/kWh
- Teruglevertarief: 15,83 ct/kWh

Werkelijke huidige elektriciteitskosten = Netafname × Afnameprijs − Teruglevering × Teruglevertarief.

Totale opbrengst = Kosten zonder PV en opslag − Werkelijke huidige kosten = Besparing + Terugleveringsopbrengst. Beide methoden leveren hetzelfde resultaat op.

> **Opmerking**: De opbrengsten in de App zijn schattingen en kunnen afwijken van de uiteindelijke factuur van uw energieleverancier. Zie de FAQ hieronder voor meer informatie.

## 5. Hoe worden dag-/nacht- of piek-/daltarieven berekend?

Als in uw regio verschillende stroomprijzen gelden op verschillende tijdstippen van de dag (bijvoorbeeld dag-/nacht- of piek-/daltarieven), berekent het systeem elk tijdsinterval afzonderlijk en telt deze vervolgens op:

**Werkelijke kosten voor een interval = Netafname in dat interval × Afnameprijs in dat interval − Teruglevering in dat interval × Teruglevertarief in dat interval**

## 6. Wanneer kan de opbrengstberekening onnauwkeurig zijn?

De volgende situaties kunnen ervoor zorgen dat het systeem de opbrengsten niet nauwkeurig kan berekenen:

- Bestaande PV-productie wordt niet vastgelegd door het huishoudelijke energiesysteem.
- Er zijn geen onafhankelijke, nauwkeurige gegevens over het batterijvermogen of de batterijcapaciteit.
- De afnameprijs of het teruglevertarief is niet volledig geconfigureerd.
- Gegevens van belangrijke apparatuur ontbreken of de meetrichting is verkeerd geconfigureerd.

## 7. FAQ

### Waarom wordt er niet simpelweg 'productie × prijs' gerekend?

De door PV geproduceerde stroom kan worden verbruikt, gebruikt om de batterij te laden of teruggeleverd aan het net – elk gebruik heeft een andere waarde, dus een eenvoudige vermenigvuldiging is niet voldoende.

### Waarom kan ik de opslagopbrengst niet zelf berekenen?

De opslagopbrengst wordt afgeleid uit de vergelijking met het scenario 'alleen PV, zonder opslag'. Dit scenario komt in de praktijk niet afzonderlijk voor en moet door het systeem worden gesimuleerd op basis van de apparaatgegevens.

### Waarom is de terugleveringsopbrengst niet gelijk aan de totale opbrengst?

Terugleveringsopbrengst is slechts een deel van de totale opbrengst. U bespaart ook op uw elektriciteitsrekening door direct verbruik en door vermeden netafname dankzij batterijontlading – deze besparingen maken ook deel uit van de opbrengst.

### Waarom wijken de opbrengsten in de App af van mijn elektriciteitsfactuur?

De App toont de energie-opbrengst berekend op basis van apparaatgegevens en geconfigureerde prijzen. De factuur van de leverancier kan daarnaast nog basiskosten, belastingen, trafieven, subsidies of andere posten bevatten, waardoor er verschillen kunnen ontstaan.

### Waarom zijn de opbrengsten van vandaag later veranderd?

Veelvoorkomende oorzaken zijn laat geüploade apparaatgegevens, bijgewerkte stroomprijzen of een herberekening door het systeem. Raadpleeg de herberekende resultaten nadat alle gegevens volledig zijn.

### Waarom zijn de opbrengsten soms negatief?

Dit wordt meestal veroorzaakt door een 'laden tegen hoge prijs, ontladen tegen lage prijs'-situatie – dus stroom van het net afnemen tegen een hoge prijs om de batterij te laden en vervolgens ontladen wanneer de prijzen laag zijn.