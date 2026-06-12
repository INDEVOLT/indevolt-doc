---
title: Apparaten koppelen
description: Koppel INDEVOLT micro-opslag aan huishoudelijke apparaten voor slimmer en veiliger energiebeheer
---

# Apparaten koppelen

Door het micro-opslagsysteem te koppelen aan andere apparaten in huis, zoals slimme stekkers, slimme meters of meterlezers, kan het systeem veilig energiegegevens delen binnen het lokale netwerk. Hierdoor kan het nauwkeuriger het energieverbruik bepalen en automatisch het laad- en ontlaadvermogen aanpassen.

## Waarom andere apparaten koppelen?

Wanneer de micro-opslag niet aan andere apparaten is gekoppeld, kan het systeem veranderingen in de belasting niet detecteren en werkt het alleen volgens vaste regels:

- Het systeem weet niet hoeveel stroom het huishouden op dat moment verbruikt en kan het vermogen niet automatisch aanpassen aan realtime verbruik  
- Laden en ontladen gebeurt alleen volgens vaste vermogens- of tijdschema’s  

In de praktijk kan dit leiden tot:

- **Te veel ontladen** → energie wordt teruggeleverd aan het elektriciteitsnet  
- **Te weinig ontladen** → het huishouden blijft stroom van het net afnemen terwijl de batterij niet optimaal wordt benut  

:::tip
Het belangrijkste doel van apparaatkoppeling is om de micro-opslag van **realtime verbruiksfeedback** te voorzien, zodat het systeem veranderingen in de belasting kan detecteren en het laad- en ontlaadgedrag dynamisch kan aanpassen.
:::

## Welke apparaten kunnen worden gekoppeld?

Afhankelijk van jouw gebruiksscenario ondersteunt het micro-opslagsysteem de volgende apparaattypen:

### Slimme stekker

Geschikt voor situaties waarin je het energieverbruik van **één specifieke groep of enkele apparaten** nauwkeurig wilt regelen.

**Wat kan het doen?**

- Realtime energieverbruik van aangesloten apparaten uitlezen  
- De micro-opslag ontlaadt op basis van deze belasting en past het vermogen nauwkeurig aan  
- Alleen de apparaten op deze stekker worden gevoed, zonder invloed op andere groepen in huis  

### Slimme meter

Geschikt voor gebruikers die **het volledige huishoudelijke energieverbruik** willen beheren.

**Wat kan het doen?**

- Het totale huishoudelijke stroomverbruik realtime uitlezen  
- Detecteren of het huishouden stroom van het net afneemt of teruglevert  
- Het systeem past automatisch het vermogen aan op basis van metergegevens om **nul-teruglevering** of maximaal eigen verbruik te realiseren  

### Meterlezer

Een alternatief wanneer de elektriciteitsmeter zelf geen netwerkverbinding ondersteunt.

**Werking:**

- De micro-opslag maakt geen directe verbinding met de meter  
- De meterlezer leest de metergegevens uit  
- Het systeem past het vermogen indirect aan op basis van deze verbruiksgegevens  

## Hoe koppel je apparaten?

:::info Voorbereiding
Controleer vóór het koppelen of aan de volgende voorwaarden is voldaan:

- Zowel de micro-opslag als de apparaten die je wilt koppelen (zoals slimme stekkers, meters of meterlezers) zijn toegevoegd aan hetzelfde huishouden  
- Alle apparaten zijn ingeschakeld en correct verbonden met het netwerk  

👉 Heb je nog geen apparaten toegevoegd? Raadpleeg dan eerst: [Apparaat toevoegen](../../app/add-device.md)
:::

1. Open in de INDEVOLT App het tabblad **Apparaat** en tik op de micro-opslag om naar de **apparaatdetails** te gaan  
2. Tik onderaan de pagina op **+ Subapparaat Toevoegen**  
3. Kies in de lijst **Beschikbare Apparaten** het apparaat dat je wilt koppelen  
4. Tik op **Koppelen** en wacht tot de configuratie is voltooid  

<img src={require("../energy-mode/img/select_device.png").default} width="240"/>
<img src={require("../energy-mode/img/device_info.png").default} width="240"/>
<img src={require("./img/link_device.png").default} width="240"/>

Na een succesvolle koppeling verschijnen de gekoppelde apparaten onderaan de apparaatdetailpagina.  
Tik op een subapparaat om realtime vermogen, bedrijfsstatus en historische gegevens te bekijken.

<img src={require("./img/device_linked.png").default} width="240"/>