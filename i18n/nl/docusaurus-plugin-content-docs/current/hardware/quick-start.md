---
title: Snelstartgids
description: Installatie- en eerste gebruiksgids voor Indevolt energieopslag
---

# Snelstartgids

De inhoud van dit document dient als algemene gebruikershandleiding. **De modelverschillen worden in het hele document gemarkeerd met 💡 opmerkingen.** Raadpleeg de opmerkingen die horen bij het model dat u heeft aangeschaft.

:::warning

Lees vóór gebruik eerst de **[Veiligheidsinstructies](./safety.md)** om uw veiligheid te waarborgen.

:::

---

## Packing List

**Power Module :**

<img src={require("./img-nl/power-packing-list.png").default} width="800"/>

**Batterijmodule (optioneel) :**

<img src={require("./img-nl/battery-packing-list.png").default} width="800"/>

> 💡 **Opmerking over modelverschillen**: modellen **zonder PV-poort** (AC-/Eco-modellen) bevatten geen MC4-stekkerdemontagegereedschap.

---

## Installatie

### Kies installatieplaats

- Installeer de modules niet in de buurt van direct zonlicht, vuur of explosieve materialen.
- Zorg ervoor dat de plaats beschermd is tegen potentiële gevaren zoals overstroming.
- Aangeraden voor gebruik op een hoogte onder 2000 m.

### Meet de afstand

Reserveer voldoende ruimte voor koeling en veiligheidsisolatie.

1. Kies de geschikte installatieruimte afhankelijk van de apparaatconfiguratie die moet worden geïnstalleerd.

<img src={require("./img-nl/system-size.png").default} width="720"/>

> 💡 **Opmerking over modelverschillen**: andere series gebruiken andere uitbreidingsbatterijen en capaciteitswaarden:
>
> | Stroommodule | Uitbreidingsbatterij |
> | ---------------------------- | ----------------- |
> | SolidFlex 2000/Eco | 1792 Wh |
> | PowerFlex 2000/Eco | 2009 Wh |
> | SolidFlex 3000 Hybrid/AC | 1792 Wh |
> | SolidFlex 3000 Hybrid/AC Pro | 2009.6 Wh |
> | PowerFlex 3000 Hybrid/AC | 2016 Wh |
>
> | Batterijmodule | Uitbreidingsbatterij |
> | --- | --- |
> | SFA 1800 | 1792 Wh |
> | SFA 3600 | 3584 Wh |
> | PFA 2000 | 2016 Wh |
> | PFA 4000 | 4032 Wh |

2. Informatie over apparaatgrootte:

<img src={require("./img-nl/device-size.png").default} width="600"/>



Opmerking: De volgende onderdelen zijn niet inbegrepen in dit pakket. Zorg ervoor dat deze beschikbaar zijn vóór installatie en elektrische aansluiting.

<img src={require("./img-nl/tools.png").default} width="480"/>

### Installatie

De volgende stappen beschrijven de installatie van een stroommodule en twee uitbreidingsbatterijen als voorbeeld.

1. Bevestig 4 ondersteuningsvoeten aan de onderkant van de uitbreidingsbatterij.
   <img src={require("./img-nl/installation-step1.png").default} width="360"/>

2. Aan de achterzijde van het apparaat (koellichaam) moet een minimale vrije ruimte van 30 mm worden aangehouden om voldoende ventilatie en een efficiënte warmteafvoer te garanderen.
   <img src={require("./img-nl/installation-step2.png").default} width="360"/>

3. Stel de hoogte van de vier steunvoeten aan de onderkant van het apparaat af zodat het waterpas staat. Kalibreer dit met een waterpas.
   <img src={require("./img-nl/installation-step3.png").default} width="480"/>

4. Verwijder de beschermkap aan de onderkant van de stroommodule, evenals de beschermkappen aan de boven- en onderkant van de middelste batterijmodule.

   <img src={require("./img-nl/installation-step4.png").default} width="600"/>

   :::warning

   Zorg er bij het installeren van de onderste batterijmodule voor dat de rubberen plug op zijn plaats blijft om waterschade te voorkomen.

   Wees voorzichtig dat u de beschermkap van de onderste uitbreidingsbatterij niet verwijdert om schade aan het apparaat te voorkomen!
   :::

5. Stapel de uitbreidingsbatterijen één voor één met de stroommodule bovenop, en verbind de twee bijbehorende connectors.
   <img src={require("./img-nl/installation-step5.png").default} width="300"/>

6. Bevestig de L-vormige wandbeugel aan beide zijden van de eerste uitbreidingsbatterij onder de stroommodule met M4 kruiskopschroeven.
   <img src={require("./img-nl/installation-step6.png").default} width="300"/>

7. Nadat de stroommodule en batterijmodule zijn geïnstalleerd, worden de 2 modules vastgezet met M4 kruiskopschroeven.

   <img src={require("./img-nl/installation-step7.png").default} width="480"/>

8. Markeer de positie van de boorgaten aan beide zijden en gebruik een boor met een diameter van 8 mm en een diepte van 60 mm.

   <img src={require("./img-nl/installation-step8.png").default} width="480"/>

9. Gebruik een hamer om de kunststof plug voor de M5×60 zelftappende schroef in het gat te slaan, en draai vervolgens met een kruiskopschroevendraaier de M5×60 zelftappende schroef vast aan de L-vormige wandbeugel.
   <img src={require("./img-nl/installation-step9.png").default} width="480"/>

   Dit product bevat een dubbele isolatietransformator die voldoet aan de veiligheidsvereisten zonder dat meting van de isolatieweerstand van de aarding van de array of detectie van foutstromen in de array nodig is.

:::info

De netaansluiting moet worden aangesloten op een geaard stopcontact, anders bestaat het risico op een elektrische schok. Als alternatief moet de behuizing geaard worden. Het aardingspunt wordt hieronder weergegeven.

<img src={require("./img-nl/installation-step10.png").default} width="240"/>

:::

---

## Elektrische aansluiting

### Kabelverbindingen

:::info 💡 Opmerking over modelverschillen

De volgende instructies voor PV-aansluiting gelden alleen voor niet-Eco- en niet-AC-modellen.

Eco- en AC-modellen, die geen PV-poort hebben, zijn niet van toepassing op dit gedeelte.

:::

De volgende stappen beschrijven de installatie van een systeem met vier zonnepanelen als voorbeeld.

<img src={require("./img-nl/connect-cables.png").default} width="960"/>

:::info 💡 Opmerking over modelverschillen: terugleververmogen

Het standaard wisselstroomvermogen van de omvormer is beperkt tot 800 W. Als u deze waarde wilt verhogen, moet de installatie worden geïnspecteerd door een gekwalificeerde elektricien om te controleren of deze voldoet aan de huidige veiligheidseisen. Na deze inspectie kunt u via de INDEVOLT-applicatie een aanvraag indienen om het vermogen te verhogen tot 3000 W.

De handleidingen van de **SolidFlex 2000/Eco en PowerFlex 2000/Eco** beschrijven dezelfde procedure met een limiet die in plaats daarvan verhoogd kan worden tot **2400 W**.

:::

#### Stap 1: Sluit het net aan

1. Sluit de stroommodule aan op een stopcontact in huis met behulp van het meegeleverde netsnoer met veiligheidsschakelaar.

<img src={require("./img-nl/connect-grid.png").default} width="720"/>

#### Stap 2: Sluit de zonnepanelen aan

Beschikt over vier onafhankelijke Maximum Power Point Tracking (MPPT)-units. Elke fotovoltaïsche ingang werkt als een afzonderlijke MPPT.

- Open-circuitspanning (Voc): < 60 V per PV-ingang
- Kortsluitstroom (Isc): < 20 A per PV-ingang

> 💡 **Opmerking over modelverschillen**: de handleidingen van de SolidFlex 3000 Hybrid / SolidFlex 3000 Hybrid Pro geven aan: “Kortsluitstroom (Isc): < 22 A per PV-ingang”.

- Voor een optimale efficiëntie raden we zonnepanelenkabels met een maximale lengte van 3 m aan om transmissieverliezen te beperken.

- De positieve (+) en negatieve (–) aansluitingen van een module moeten op dezelfde PV-ingang worden aangesloten.

  <img src={require("./img-nl/connect-pv.png").default} width="480"/>

:::warning

OPMERKING:
Wanneer de batterijmodule defect raakt, zal het systeem vergrendelen. Deze vergrendeling kan niet automatisch worden opgeheven en vereist professionele nazorg. De systeemfunctie wordt hervat nadat de professionele nazorg heeft bevestigd dat aan de eisen is voldaan.

:::

### Elektriciteitssysteem

Het apparaat kan worden gebruikt in eenfasige of driefasige huishoudsystemen:

<img src={require("./img-nl/electricity-system.png").default} width="720"/>

### AC-gekoppelde aansluiting

Als je al een micro-omvormer hebt, kun je ook de uitgang van de micro-omvormer via AC-koppeling aansluiten op de Backup Terminal van het apparaat. Op dat moment wordt de PV-invoer via de micro-omvormer aan de belasting geleverd. Als het vermogen hoger is dan 3000 W (aanpasbaar via de APP), zal het apparaat de verbinding met de micro-omvormer verbreken.

Opmerking: AC-/Eco-modellen ondersteunen alleen de aansluiting op zonnepanelen via micro-omvormers en hebben geen PV-poort.

> 💡 **Opmerking over modelverschillen**: voor de SolidFlex 2000/Eco en PowerFlex 2000/Eco is de ontkoppeldrempel van deze AC-gekoppelde aansluiting **2400 W** in plaats van 3000 W (aanpasbaar via de APP).

<img src={require("./img-nl/AC-coupled Connection 1.png").default} width="480"/>

<img src={require("./img-nl/AC-coupled Connection 2.png").default} width="480"/>

---

## Inschakelen

Zoek de aan/uit-knop aan de linkerkant van het hoofdtoestel en houd deze 2 seconden ingedrukt.

Bij het opstarten licht de blauwe LED-indicator op het voorpaneel op van het midden naar boven en beneden.

<img src={require("./img-nl/power-on.png").default} width="360"/>
<img src={require("./img-nl/power-on-led-state.png").default} width="240"/>

---

## INDEVOLT APP

Met de INDEVOLT-app kunt u:

- de bedrijfsstatus en het huidige vermogen van uw apparaten in realtime bewaken
- het batterijniveau en de laad-/ontlaadstatus controleren
- dagelijkse/wekelijkse/maandelijkse/jaarlijkse statistieken van energieopwekking en -verbruik bekijken
- energiestrategieën en planningen configureren en firmware-updates uitvoeren

📥 Voor eerste gebruik dient u eerst het [downloaden van de app, het registreren van een account en het instellen van het apparaat](https://docs.indevolt.com/docs/app/installation) te voltooien.
