---
title: Laad/ontlaad schema
description: Laden en ontladen volgens tijdschema, voor nauwkeurige controle van energieverbruik
---

# Laad/ontlaad schema

De modus **Laad/ontlaad schema** stelt je in staat om per tijdsperiode gedurende de dag exact te bepalen wanneer het systeem moet laden, ontladen of in stand-by moet blijven.

Zodra de instellingen zijn opgeslagen, werkt het systeem strikt volgens jouw schema zonder dagelijkse handmatige aanpassingen.

## Voor wie is deze modus geschikt?

Deze modus is geschikt als je één of meer van de volgende situaties hebt:

- Je hebt een **tijdsafhankelijk tarief / piek-dal tarief**
- Er is een duidelijk verschil tussen dag- en nachtverbruik
- Je dagelijkse routine en energieverbruik zijn relatief stabiel

## Hoe werkt het systeem?

In deze modus kun je de dag verdelen in meerdere tijdsperiodes en per periode een bedrijfsmodus instellen:

- Opladen: het systeem laadt de batterij met het ingestelde vermogen  
- Ontladen: het systeem levert vermogen op basis van de belasting of ingestelde waarde  
- Stand-by: het systeem laadt of ontlaadt niet actief  

**Energieprioriteit**

- Huishoudelijk verbruik wordt **eerst gedekt door zonne-energie**  
- Bij onvoldoende zonne-energie levert de **batterij extra vermogen**  
- Alleen wanneer zowel zonne-energie als batterij onvoldoende zijn, wordt **netstroom gebruikt**  

## Belastingselectie

| Belastingselectie | Ontlaadperiode | Laadperiode |
| ------------------ | -------------- | ------------ |
| Slimme stekker | Het systeem baseert het ontlaadvermogen op het werkelijke verbruik van de aangesloten apparaten.<br/>Er kan een <u>offsetvermogen</u> worden ingesteld voor finetuning: werkelijk ontlaadvermogen = stekkerbelasting + offset | Het systeem laadt volgens het ingestelde schemavermogen |
| Meter (moet worden geïnstalleerd aan de netinvoerkant) | Het systeem regelt richting een netvermogen van 0:<br/>- Positief vermogen → ontladen om verbruik te compenseren<br/>- Negatief vermogen → laden om overschot op te nemen | Het systeem laadt volgens het ingestelde schemavermogen |
| Belangrijke Belasting | Het systeem voedt alleen apparaten die via de bypass-poort zijn aangesloten en levert geen teruglevering aan het net | Het systeem laadt volgens het ingestelde schemavermogen |
| Aangepast (belastingscurve) | Het systeem ontlaadt volgens het ingestelde belastingscurve | Het systeem laadt volgens het ingestelde schemavermogen |

:::info
Wanneer de belasting is ingesteld op een slimme stekker of meter en deze offline gaat, schakelt het systeem automatisch over naar ontladen volgens het verbruiksprofiel.
:::

:::info
Om overbelasting of afwijkingen te voorkomen, gebruikt het systeem automatisch de kleinste veilige waarde:
- Bij ontladen: minimaal van maximale AC-uitgang, profielwaarde en belastingvermogen  
- Bij laden: minimaal van maximale AC-ingang en laadvermogen  
:::

## Hoe stel je een Laad/ontlaad schema in?

**Stappen:**

1. Zorg ervoor dat je het apparaat hebt toegevoegd in de **INDEVOLT App** binnen je woning  
2. Ga naar het tabblad **Apparaat** en open de apparaatkaart  
3. Tik op de energiemodus en ga naar de modusselectie  
4. Kies **Laad/ontlaad schema** en tik op **Instellingen**  
5. Tik op **＋ Plan Toevoegen**:
   - Stel starttijd / eindtijd in  
   - Kies bedrijfsmodus: opladen / ontladen / stand-by  
   - Configureer de bijbehorende instellingen  
6. Tik op **Opslaan** om direct toe te passen  

<img src={require("./img/select_device.png").default} width="240"/>
<img src={require("./img/select_energy_mode.png").default} width="240"/>
<img src={require("./img/charge_discharge_schedule.png").default} width="240"/>
<img src={require("./img/select_add_plan.png").default} width="240"/>

## Aanbevolen apparaatinstellingen

Ga in de apparaatdetails naar het **⚙** instellingenmenu rechtsboven.

<img src={require("./img/device_info.png").default} width="240"/>
<img src={require("./img/device_setting.png").default} width="240"/>

Voor een stabiele werking worden de volgende instellingen aanbevolen:

| Instelling | Aanbevolen configuratie |
| ---------- | ---------------------- |
| Max. AC-uitgangsvermogen (ontladen) | Niet lager dan het werkelijke huishoudelijke verbruik en conform lokale regelgeving |
| Max. AC-ingangsvermogen (opladen) | Niet lager dan het gewenste laadvermogen |
| Maximale nettoevoer | Aanbevolen: `0` (anti-teruglevering inschakelen) |
| Bypass Socket  | Uitgeschakeld tenzij specifiek nodig |
| Noodstroomreserve | Aanbevolen: 20% |