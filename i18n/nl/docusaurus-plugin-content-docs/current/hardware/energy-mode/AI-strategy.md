---
title: AI-strategie
description: Ontdek hoe de Indevolt AI-strategie het laden en ontladen van de batterij dynamisch plant op basis van elektriciteitsprijzen, weersomstandigheden, huishoudelijk verbruik en de batterijstatus, en hoe deze bijdraagt aan lagere elektriciteitskosten, automatische werking, inzicht in de werking en beheer van de levensduur van de batterij.
---

# AI-strategie

## Slimme energiebeheerstrategie voor energieopslag thuis

## 1. Waarom is een AI-strategie nodig?

Veel huishoudens installeren zonnepanelen en energieopslag om de kosten voor netstroom te verlagen en zonne-energie zo goed mogelijk te benutten. Om dit doel te bereiken zijn naast de prestaties van het apparaat ook de dagelijkse laad- en ontlaadplanning van groot belang.

Als de laad- en ontlaadtijden niet aansluiten op veranderingen in elektriciteitsprijzen, het weer en het huishoudelijk verbruik, kan de batterij op ongeschikte momenten worden geladen of ontladen. De belangrijkste problemen zijn de volgende vier.

### Probleem 1: Het ontlaadmoment sluit niet aan op de vraag, waardoor tijdens perioden met hoge prijzen netstroom nodig blijft

Voor het vertrek in de ochtend en na thuiskomst in de avond is het elektriciteitsverbruik in een huishouden vaak het hoogst. Apparaten zoals rijstkokers, airconditioners en boilers kunnen tegelijkertijd worden gebruikt, waardoor de huishoudelijke belasting hoog is. Deze perioden vallen vaak ook samen met hogere elektriciteitsprijzen.

Een vaste strategie ontlaadt de batterij volgens vooraf ingestelde tijdsperioden en kan pieken in de huishoudelijke belasting en pieken in de elektriciteitsprijs niet nauwkeurig herkennen. Daardoor kan de batterij al leeg zijn voordat de piekperiode voorbij is, waardoor daarna nog steeds tegen een hoge prijs stroom van het net moet worden afgenomen.

### Probleem 2: Een onjuiste laadplanning voorkomt effectief gebruik van overtollige PV-energie

Bij zonnig weer in het weekend kan de PV-productie aanzienlijk hoger zijn dan het directe elektriciteitsverbruik van het huishouden. Als de batterij in de vroege ochtend volgens een vast schema al volledig is opgeladen, kan overtollige PV-energie rond het middaguur niet worden opgeslagen en wordt deze mogelijk tegen een lagere prijs aan het net teruggeleverd.

Tijdens perioden met hoge elektriciteitsprijzen in de avond is er dan mogelijk niet meer voldoende energie in de batterij beschikbaar. Voor huishoudens met een grotere PV-installatie en veel zonnige dagen kan deze situatie zich herhaaldelijk voordoen.

### Probleem 3: Vaste regels kunnen zich niet aanpassen aan voortdurende veranderingen

Tijdafhankelijke elektriciteitstarieven kunnen verschillen op werkdagen, in het weekend en tijdens piekuren. Ook het weer en de leefgewoonten van het huishouden veranderen voortdurend, waardoor de PV-productie en de huishoudelijke belasting veranderen.

Een vaste strategie die één keer wordt ingesteld en lange tijd wordt gebruikt, kan daardoor gemakkelijk niet meer aansluiten op de werkelijke omstandigheden. Frequente handmatige aanpassingen kosten niet alleen tijd, maar leveren ook niet noodzakelijk voortdurend betere resultaten op.

### Probleem 4: Alleen de elektriciteitskosten op korte termijn worden bekeken, terwijl de levensduur van de batterij wordt genegeerd

De energieopslagbatterij is een belangrijk onderdeel van het systeem. Langdurig diep laden en ontladen of frequente grote veranderingen in het laad- en ontlaadvermogen kunnen de veroudering van de batterij versnellen.

Als langdurig alleen wordt gestreefd naar besparing op de elektriciteitskosten op korte termijn en geen rekening wordt gehouden met de levensduur van de batterij, kan overmatig gebruik van de batterij de toekomstige vervangingskosten verhogen en de algehele economische efficiëntie verminderen.

De gemeenschappelijke oorzaak van deze problemen is dat vaste strategieën volgens vooraf ingestelde tijden werken en niet vooraf kunnen worden aangepast aan veranderingen in de elektriciteitsprijzen, het weer en het huishoudelijk verbruik van de volgende dag. Daarom moet de laad- en ontlaadplanning van het energieopslagsysteem dagelijks dynamisch worden aangepast aan de werkelijke omstandigheden.

## 2. Wat is een AI-strategie?

Een AI-strategie zorgt ervoor dat het energieopslagsysteem elke dag automatisch bepaalt wanneer de batterij moet worden geladen en wanneer deze moet worden ontladen op basis van elektriciteitsprijzen, weersomstandigheden en huishoudelijk verbruik.

Het systeem kijkt vooruit naar de elektriciteitsprijzen, PV-productie en het huishoudelijk verbruik voor een komende periode en maakt vervolgens een laad- en ontlaadplan voor verschillende momenten van de dag.

Het systeem houdt elke dag vooral rekening met de volgende vier soorten informatie en gebruikt deze om het laad- en ontlaadplan voor die dag op te stellen:

| Referentie-informatie | Functie |
| --- | --- |
| Elektriciteitsprijs | Identificeert perioden met lagere en hogere elektriciteitsprijzen. |
| PV-productie | Bepaalt de PV-productie en de perioden waarin mogelijk overtollige PV-energie beschikbaar is. |
| Huishoudelijke belasting | Geeft inzicht in perioden met een hoger huishoudelijk verbruik en in verschillen tussen werkdagen en weekenden. |
| Batterijstatus | Bepaalt het huidige energieniveau van de batterij, de beschikbare laad- en ontlaadruimte en de hoeveelheid energie die moet worden gereserveerd. |

Het systeem combineert de elektriciteitsprijzen, weersomstandigheden en het huishoudelijk verbruik om geschiktere laad- en ontlaadtijden te plannen. Als de werkelijke omstandigheden veranderen, wordt het plan dienovereenkomstig aangepast.

Neem een typisch scenario als voorbeeld:

In een typische toepassing van energieopslag worden de prestaties van een traditionele vaste strategie en een dynamische AI-optimalisatiestrategie vergeleken onder dezelfde omstandigheden voor dynamische elektriciteitsprijzen, PV-productie en huishoudelijke belasting.

Zoals in de afbeelding wordt weergegeven, laadt en ontlaadt de traditionele strategie op vooraf ingestelde tijden (werking volgens vaste tijden), terwijl de AI-strategie de laad- en ontlaadtijden dynamisch kiest op basis van elektriciteitsprijzen, PV-productie en belasting (dynamische optimalisatie). Uit de werkelijke bedrijfsgegevens blijkt dat de AI-strategie het rendement met 18,3% heeft verhoogd ten opzichte van de traditionele strategie, met een extra opbrengst van CNY 6.048,83 in dit afzonderlijke geval.

**Afbeelding 1: Vergelijking van de planning van de traditionele strategie en de AI-strategie bij dynamische prijzen**

![Afbeelding 1: Vergelijking van de planning van de traditionele strategie en de AI-strategie bij dynamische prijzen](./img/image-1.png)

## 3. Belangrijkste functies van de Indevolt AI-strategie

De Indevolt AI-strategie richt zich op verschillende belangrijke problemen die gebruikers van energieopslag voor thuis ervaren. Door het laden en ontladen dynamisch te plannen, kan het energieopslagsysteem zich beter aanpassen aan dagelijkse veranderingen in elektriciteitsprijzen, weersomstandigheden en huishoudelijk verbruik.

### 1. Lagere elektriciteitskosten: laad- en ontlaadtijden passend plannen

De voordelen van energieopslag voor thuis zijn niet alleen afhankelijk van de batterijcapaciteit, maar ook van de momenten waarop de batterij wordt geladen en ontladen.

Door de laad- en ontlaadtijden aan te passen, kan het systeem onnodige afname van netstroom tijdens perioden met hoge prijzen verminderen en goedkope elektriciteit en PV-energie zo goed mogelijk benutten. De werkelijke resultaten kunnen verschillen afhankelijk van lokale elektriciteitsprijzen, de PV-configuratie, de apparaatcondities en de verbruikspatronen van het huishouden.

Dit komt voornamelijk tot uiting in drie aspecten:

- **Hoger batterijgebruik:** Op basis van elektriciteitsprijzen en huishoudelijk verbruik wordt de batterij op geschikte momenten geladen en wordt de opgeslagen energie gepland voor perioden waarin deze meer nodig is, waardoor langdurige inactiviteit van de batterij wordt verminderd.
- **Hoger PV-eigenverbruik:** Wanneer rond het middaguur een hogere PV-productie wordt verwacht, wordt vooraf batterijcapaciteit vrijgehouden om daaropvolgende overtollige PV-energie zo veel mogelijk op te slaan en het lokale gebruik van PV-energie te verhogen.
- **Nauwkeuriger ontladen en minder netafname:** Door rekening te houden met de elektriciteitsprijzen en huishoudelijke belasting op verschillende momenten, wordt de beschikbare batterij-energie bij voorkeur gebruikt tijdens perioden waarin deze het meest nodig is, waardoor de afname van netstroom tijdens perioden met hoge prijzen wordt verminderd.

Op basis van werkelijke bedrijfsgegevens van 851 gebruikers liet de Indevolt AI-strategie duidelijke voordelen zien bij het verlagen van de kosten:

**Afbeelding 2: Verdeling van de rendementsverbetering bij gebruikers van de AI-strategie (gegevens uit de werkelijke bedrijfsstatistieken van 851 gebruikers)**

![Afbeelding 2: Verdeling van de rendementsverbetering bij gebruikers van de AI-strategie (gegevens uit de werkelijke bedrijfsstatistieken van 851 gebruikers)](./img/image-2.png)

De gegevens laten zien dat de Indevolt AI-strategie voor de overgrote meerderheid van de gebruikers concrete besparingen op de elektriciteitskosten kan opleveren. De mediane rendementsverbetering ligt in de range van 10% tot 30%, en bij bijna een kwart van de gebruikers (24,68%) bedroeg de rendementsverbetering meer dan 80%. Over het geheel genomen kunnen de meeste gebruikers in verschillende mate besparen op hun elektriciteitskosten. De werkelijke besparing hangt af van lokale elektriciteitsprijzen, de PV-configuratie, de verbruikspatronen van het huishouden en de apparaatcondities.

### 2. Automatische werking: minder dagelijkse instellingen

Elektriciteitsprijzen, weersomstandigheden en verbruikspatronen van het huishouden kunnen elke dag veranderen. Als gebruikers de laad- en ontlaadtijden handmatig aanpassen, zijn vaak instellingen nodig en worden veranderingen in de werkelijke omstandigheden mogelijk niet tijdig gevolgd.

Na het inschakelen van de AI-strategie voert het systeem deze aanpassingen automatisch uit. Gebruikers hoeven het systeem daarom niet elke dag opnieuw in te stellen:

- **Plan automatisch opstellen:** Stelt op basis van elektriciteitsprijzen, weersomstandigheden en de verbruikspatronen van het huishouden een laad- en ontlaadplan op.
- **Plan automatisch aanpassen:** Past de daaropvolgende planning aan wanneer het weer, de PV-productie of het huishoudelijk verbruik verandert.
- **Continue werking:** Nadat de gebruiker de strategie heeft ingesteld, is dagelijkse handmatige tussenkomst niet nodig en werkt het energieopslagsysteem automatisch volgens het plan.

### 3. Transparante werking: voor elke stap is een reden beschikbaar

Een energieopslagsysteem kan gedurende de dag meerdere keren laden, ontladen of in stand-by blijven. Voor gebruikers is niet alleen belangrijk hoe het systeem werkt, maar ook waarom het op een bepaalde manier werkt.

Als gebruikers willen weten waarom het systeem op een bepaald moment laadt, ontlaadt of in stand-by blijft, kunnen zij de bijbehorende reden bekijken, bijvoorbeeld:

- **Waarom wordt er nu geladen?** De huidige elektriciteitsprijs is laag, waardoor het geschikt is om energie in de batterij op te slaan.
- **Waarom wordt er nu ontladen?** De huidige energievraag is hoog of de elektriciteitsprijs is relatief hoog.
- **Waarom wordt er tijdelijk niet geladen of ontladen?** De huidige omstandigheden voor elektriciteitsprijs, PV-productie of huishoudelijke belasting zijn tijdelijk niet geschikt voor laden of ontladen.

Duidelijke en eenvoudig te raadplegen bedrijfsredenen maken het voor gebruikers gemakkelijker om de planning van het systeem te begrijpen en de werkelijke werking te controleren.

### 4. Rekening houden met de levensduur van de batterij: lagere kosten op lange termijn

Naast de dagelijkse elektriciteitskosten heeft ook de planning van het laden en ontladen invloed op het langdurige gebruik van de batterij.

Bij het opstellen van het laad- en ontlaadplan houdt het systeem rekening met de huidige batterijstatus en de beschikbare energie. Zo worden onnodige laad- en ontlaadacties vermeden en wordt een balans gezocht tussen elektriciteitskosten en langdurig batterijgebruik.

Een beter afgestemde laad- en ontlaadplanning kan onnodig diep laden en ontladen en frequente vermogensschommelingen verminderen, waardoor extra slijtage tijdens langdurig batterijgebruik wordt beperkt.

De strategie kijkt niet alleen naar hoeveel er vandaag kan worden bespaard, maar ook naar hoe de batterij op lange termijn moet worden gebruikt.

## 4. Veelgestelde vragen

### Q1: Waarom neemt de AI-strategie soms stroom van het net af terwijl de batterij nog energie bevat?

Dit betekent niet noodzakelijk dat de strategie niet goed werkt. De AI-strategie kijkt naar de totale kosten over de hele dag en zelfs over een langere periode, in plaats van alleen naar de vraag of op het huidige moment stroom moet worden afgenomen. Het systeem kan energie reserveren voor een later moment met een hogere elektriciteitsprijs of wachten op een gunstiger moment om energie bij te laden.

### Q2: Waarom laadt de AI-modus de batterij niet tot 100% en waarom kan er stroom aan het net worden teruggeleverd terwijl de batterij nog niet volledig is opgeladen?

Het beoogde energieniveau van de batterij wordt dynamisch aangepast en betekent niet dat de batterij altijd volledig wordt opgeladen. Het systeem houdt onder andere rekening met de toekomstige energievraag, de PV-prognose, de prijzen voor afname en teruglevering, laad- en ontlaadverliezen en vermogenslimieten. Als de verwachte opbrengst van teruglevering hoger is dan het verwachte voordeel van verdere opslag, kan teruglevering terwijl de batterij nog niet volledig is opgeladen ook een passende keuze zijn.

### Q3: Is het normaal dat het laad-/ontlaadvermogen direct na het inschakelen van de AI-modus laag is of dat het plan op de eerste dag niet logisch lijkt?

Dit is normaal. Wanneer de strategie voor het eerst wordt ingeschakeld, beschikt het systeem over beperkte informatie over de verbruikspatronen van het huishouden. Wanneer er nog onvoldoende historische gegevens zijn, werkt het systeem voorzichtiger, verlaagt het vermogen en voert het minder acties uit. Naarmate er meer bruikbare gegevens over belasting, PV-productie en elektriciteitsprijzen beschikbaar komen, wordt de strategie geleidelijk aangepast en geoptimaliseerd.

### Q4: Waarom blijft de AI-PV-prognose 0, terwijl er een PV-omvormer is aangesloten en de actuele productie kan worden bekeken?

Bij het voorspellen van de PV-productie houdt het systeem enerzijds rekening met het actuele PV-vermogen dat door het apparaat wordt gemeld en anderzijds met het geïnstalleerde PV-vermogen dat in de strategie-instellingen is geconfigureerd. Als deze parameter op 0 is ingesteld, kan de prognose ook als 0 worden weergegeven.

### Q5: Waarom laadt de AI-strategie niet tijdens elke periode met een lage elektriciteitsprijs? Moet ik het prijsverschil tussen afname en teruglevering handmatig instellen?

Nee. Een lage elektriciteitsprijs betekent niet automatisch dat laden rendabel is, omdat tijdens het laden en ontladen energie verloren gaat. Laden en ontladen is pas zinvol wanneer het prijsverschil groot genoeg is om deze verliezen te compenseren. Het systeem beoordeelt dit automatisch.

### Q6: De batterij is 's nachts niet volledig ontladen. Betekent dit dat de AI-strategie niet goed werkt?

Niet noodzakelijk. Het maximale ontlaadvermogen beperkt het vermogen dat binnen een bepaalde periode kan worden geleverd. Als het maximale ontlaadvermogen bijvoorbeeld 800 W bedraagt, overschrijdt de batterij deze limiet niet, zelfs niet als de huishoudelijke belasting hoger is. Als de nachtperiode niet lang genoeg is of het huishouden niet voldoende elektriciteit verbruikt, kan het voorkomen dat de batterij 's ochtends nog een relatief hoog energieniveau heeft.

### Q7: Ik wil dat de batterij elke dag op vaste tijden en met een vast vermogen wordt geladen en ontladen en een bepaald energieniveau bereikt. Moet ik de AI-modus gebruiken?

Als je wilt dat het systeem strikt op vaste tijden en met een vast vermogen wordt geladen en ontladen en een bepaald energieniveau bereikt, is een aangepast of automatisch laad-/ontlaadplan doorgaans geschikter.

De AI-modus plant de werking dynamisch op basis van prognosegegevens. Daarom wordt niet gegarandeerd dat het systeem elke dag op hetzelfde tijdstip actief is of dat de batterij altijd tot 100% wordt opgeladen.

### Q8: Waarom blijft de batterij in stand-by wanneer de AI-strategie “Geen duidelijk voordeel door het prijsverschil tussen afname en teruglevering” weergeeft?

Wanneer het verwachte prijsverschil onvoldoende is om de laad- en ontlaadverliezen te compenseren, of wanneer er tijdelijk geen geschikter moment is om te laden of ontladen, kan stand-by onnodige acties voorkomen. Stand-by betekent niet dat het systeem offline is.

### Q9: Hoe lang duurt het voordat ik resultaten zie?

Het systeem heeft enige tijd nodig om de verbruikspatronen van het huishouden te leren kennen, doorgaans 1 tot 2 weken. Naarmate meer gegevens worden verzameld, worden de prognoses geleidelijk nauwkeuriger. Over het algemeen worden de resultaten na 2 tot 4 weken gebruik stabieler.

### Q10: Wat gebeurt er op bewolkte dagen of wanneer er geen PV-productie beschikbaar is?

Het systeem past het plan aan op basis van weersvoorspellingen. Als voor de volgende dag een lage PV-productie wordt verwacht, kan het systeem de batterij vooraf opladen tijdens perioden met lagere elektriciteitsprijzen om aan de daaropvolgende energievraag te voldoen.

### Q11: Wat gebeurt er als er plotseling gasten komen en het elektriciteitsverbruik van het huishouden toeneemt?

Het systeem houdt veranderingen in het huishoudelijk verbruik voortdurend in de gaten. Wanneer het elektriciteitsverbruik plotseling toeneemt, past het het laad- en ontlaadplan opnieuw aan, geeft het prioriteit aan de normale stroomvoorziening van het huishouden en probeert het de afname van netstroom tijdens perioden met hoge prijzen te beperken.

### Q12: Waarom laadt de AI-strategie tijdens perioden met lage elektriciteitsprijzen niet altijd met volledig vermogen?

Een periode met een lage elektriciteitsprijs betekent niet dat de batterij continu met volledig vermogen moet worden geladen, dat wil zeggen met het maximale laadvermogen dat het apparaat op dat moment toestaat. De AI-strategie plant de laadtijden en laadhoeveelheden dynamisch op basis van het werkelijke huishoudelijke verbruik en de toekomstige energievraag. Tegelijkertijd houdt het systeem rekening met het langdurige gebruik van de batterij en plant het het laden op geschikte momenten om langdurig, geconcentreerd laden met hoog vermogen te vermijden en een balans te bewaren tussen de energievraag en de levensduur van de batterij.

Daarom kan de AI-strategie ook tijdens perioden met lage elektriciteitsprijzen het laadvermogen verlagen of het laden tijdelijk stoppen, afhankelijk van de werkelijke omstandigheden. Dit is een normale uitkomst van de integrale beoordeling door de strategie.

## 5. Samenvatting

Het belangrijkste doel van het installeren van zonnepanelen en energieopslag thuis is om elektriciteitskosten te verlagen en zonne-energie zo goed mogelijk te benutten. Als de laad- en ontlaadtijden echter niet goed worden gepland, kunnen de totale voordelen worden beïnvloed: als de batterij niet op het juiste moment wordt geladen of ontladen, kunnen de besparingen over een heel jaar beperkt blijven.

De Indevolt AI-strategie is ontwikkeld om dit probleem op te lossen: de strategie houdt elke dag rekening met elektriciteitsprijzen, weersomstandigheden en huishoudelijk verbruik om automatisch laad- en ontlaadplannen te genereren en aan te passen, waardoor minder handmatige instellingen nodig zijn.

De belangrijkste functies zijn:

| Belangrijkste functie | Wat gebruikers kunnen verwachten |
| --- | --- |
| Lagere elektriciteitskosten | Onder geschikte omstandigheden onnodige afname van netstroom verminderen. |
| Automatische werking | Automatisch een plan opstellen en dit aanpassen wanneer de omstandigheden veranderen. |
| Transparante werking | Redenen voor geplande acties in verschillende perioden weergeven. |
| Beheer van de levensduur van de batterij | Onnodige slijtage van de batterij verminderen en tegelijkertijd elektriciteitskosten besparen. |

De AI-strategie werkt niet op basis van één vaste regel. In plaats daarvan houdt de strategie gezamenlijk rekening met elektriciteitsprijzen, weersomstandigheden, huishoudelijk verbruik en de batterijstatus om tot een geschiktere planning te komen die besparingen op elektriciteitskosten en langdurig batterijgebruik met elkaar in balans brengt.

Dit document is gebaseerd op de huidige functionaliteit van de Indevolt AI-strategie. De werkelijke voordelen zijn afhankelijk van onder andere lokale elektriciteitsprijzen, het geïnstalleerde PV-vermogen, de verbruikspatronen van het huishouden en de apparaatconfiguratie.
