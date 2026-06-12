---
title: Eigen verbruik
description: Geef prioriteit aan zelf opgewekte zonne-energie en verhoog het eigen verbruik
---

# Eigen verbruik

In de modus **Eigen verbruik** regelt het Indevolt micro-energieopslagsysteem de laad- en ontlaadvermogens **in realtime op basis van het huishoudelijk verbruik**, met als doel zoveel mogelijk zonne-energie direct te gebruiken, netstroomverbruik te verminderen en teruglevering aan het net te vermijden.

Het hele proces verloopt automatisch. Het systeem verdeelt energie op basis van de ingestelde configuratie zonder handmatige tussenkomst.

## Voor wie is deze modus geschikt?

Deze modus wordt aanbevolen als je:

- Zonnepanelen hebt geïnstalleerd en je eigen opwek maximaal wilt benutten  
- Je elektriciteitskosten en netafname wilt verlagen  
- Een relatief stabiel dagelijks verbruik hebt en geen frequente aanpassingen wilt doen  
- Een volledig automatische werking prefereert  

## Hoe werkt het systeem?

In de modus Eigen verbruik verdeelt het systeem energie automatisch op basis van opwek en verbruik.

**Prioriteit bij opwekking**

- Zonne-energie wordt **eerst gebruikt door huishoudelijke apparaten**  
- Overschot wordt gebruikt om de **batterij op te laden**  
- Wanneer de batterij vol is, kan resterende energie worden teruggeleverd aan het net (afhankelijk van terugleverinstellingen)  

**Prioriteit bij verbruik**

- Huishoudelijk verbruik wordt **eerst gedekt door zonne-energie**  
- Bij onvoldoende zonne-energie levert de **batterij extra stroom**  
- Alleen wanneer zowel zonne-energie als batterij onvoldoende zijn, wordt **netstroom gebruikt**  

## Belastingskeuze

Om het systeem het ontlaadvermogen correct te laten bepalen, moet je een geschikte belastingconfiguratie kiezen:

**Slimme Stekker**

- Het systeem baseert het ontlaadvermogen op het actuele verbruik van apparaten die op het slimme stopcontact zijn aangesloten  
- Extra vermogenscompensatie kan worden ingesteld voor fine-tuning  
- Werkelijk regelvermogen = verbruik via stopcontact + extra compensatie  
- Geschikt voor gebruikers die slechts bepaalde apparaten willen voeden of nauwkeurige controle willen  

**Meter**

- De meter moet worden geïnstalleerd aan de **netinvoerzijde**  
- Het systeem streeft naar een netvermogen van 0:
  - Positief vermogen → systeem ontlaadt om verbruik te compenseren  
  - Negatief vermogen → systeem laadt op om overschot op te nemen  
- Geschikt voor gebruikers die volledige woning-nul-teruglevering en maximaal zelfverbruik willen  

**Belangrijke Belasting**

- Het systeem levert alleen stroom aan apparaten die via de bypass-poort zijn aangesloten  
- Er wordt geen teruglevering aan het net uitgevoerd  
- Geschikt voor het garanderen van stroomvoorziening voor essentiële apparaten  

**Aangepast (belastingscurve)**

- De dag kan worden verdeeld in maximaal 48 tijdssegmenten met elk een eigen vermogensinstelling  

:::info
Wanneer de belasting is ingesteld op een slimme stekker of meter en deze offline raakt, schakelt het systeem automatisch over naar het vermogen van de belastingscurve.
:::

:::warning
Een te hoog of onjuist ingestelde belastingscurve kan leiden tot teruglevering aan het net.
:::

## Hoe stel je Eigen verbruik in?

**Stappen:**

1. Zorg ervoor dat je het apparaat hebt toegevoegd in de **INDEVOLT App** binnen je woning  
2. Ga naar het tabblad **Apparaat** en open de apparaatkaart om naar de apparaatdetails te gaan  
3. Tik op de sectie voor energiemodus en ga naar de modusselectiepagina  
4. Kies **Eigen verbruik** en tik op **Instellingen**  
5. Selecteer het [belastingstype](#belastingskeuze) (slimme stekker / meter / belangrijke belasting / aangepast )  
6. Tik op **Opslaan** om de instellingen direct toe te passen  

<img src={require("./img/select_device.png").default} width="240"/>
<img src={require("./img/select_energy_mode.png").default} width="240"/>
<img src={require("./img/self_consume_prioritized.png").default} width="240"/>
<img src={require("./img/load_settings.png").default} width="240"/>


## Aanbevolen apparaatinstellingen

Ga in de apparaatdetails naar **⚙** rechtsboven.

<img src={require("./img/device_info.png").default} width="240"/>
<img src={require("./img/device_setting.png").default} width="240"/>

Voor een stabiele werking worden de volgende instellingen aanbevolen:

| Instelling | Aanbevolen configuratie |
| ---------- | ---------------------- |
| Max. AC-uitgangsvermogen (ontladen) | Niet lager dan het werkelijke huishoudelijke verbruik en volgens lokale regelgeving |
| Max. AC-ingangsvermogen (opladen) | Niet lager dan het gewenste laadvermogen |
| Maximale nettoevoer | Aanbevolen: `0` (anti-teruglevering inschakelen) |
| Bypass Socket | Uitgeschakeld tenzij specifiek nodig |
| Noodstroomreserve | Aanbevolen: 20% |