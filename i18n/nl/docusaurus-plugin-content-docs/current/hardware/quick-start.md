---
title: Snel aan de slag
description: Installatie- en eerste gebruiksgids voor Indevolt energieopslagapparaten
---

# Snel aan de slag

Dit document is van toepassing op de SolidFlex 2000 / PowerFlex 2000 energieopslagsystemen en beschrijft het volledige proces van uitpakken tot eerste gebruik. De inhoud omvat controles vóór installatie, apparaatinstallatie, eerste opstart en het toevoegen van het apparaat in de app.

:::warning

Lees vóór gebruik eerst **[Veiligheidsinstructies](./safety.md)** om veiligheid te waarborgen.

:::


## Benodigde gereedschappen

Bereid vóór installatie de volgende gereedschappen voor:
   
<img src={require("./img/tools.png").default} width="480"/>

---

## Uitpakken en controle van accessoires

1. Zorg ervoor dat de verpakking onbeschadigd is.  
2. Open de doos en haal het apparaat en de accessoires één voor één eruit.  
3. Controleer aan de hand van de lijst of er geen onderdelen ontbreken of beschadigd zijn.  
   <img src={require("./img/power-packing-list.png").default} width="960"/>
   
   > Als u ook batterijmodules heeft aangeschaft, controleer dan de volgende lijst  
   <img src={require("./img/battery-packing-list.png").default} width="960"/>


---

## Installatie-instructies

:::info
- Installeer de modules niet op plaatsen met direct zonlicht, nabij open vuur of brandbare/explosieve materialen.
- Zorg ervoor dat de installatieplaats beschermd is tegen potentiële gevaren zoals overstromingen.
- Aanbevolen gebruik op een hoogte lager dan 2000 meter.
- Zorg voor goede ventilatie op de installatieplaats voor warmteafvoer.  
:::

**Stap 1: Afstand meten**

Bepaal op basis van de configuratie de benodigde installatieruimte en zorg voor voldoende ruimte voor warmteafvoer en elektrische isolatie.

<img src={require("./img/system-size.png").default} width="480"/>
<img src={require("./img/device-size.png").default} width="480"/>

**Stap 2: Apparaat bevestigen**

Onderstaand voorbeeld gebruikt **1 voedingsmodule + 2 batterijmodules**:

1. Monteer 4 steunvoeten onder de onderste uitbreidingsbatterijmodule.  
   <img src={require("./img/installation-step1.png").default} width="360"/>
2. Plaats de batterijmodule op de grond en houd 20–30 mm afstand tot de muur.  
   <img src={require("./img/installation-step2.png").default} width="360"/>
3. Stel de hoogte van de vier steunvoeten af zodat het apparaat waterpas staat en gebruik een waterpas voor controle.  
   <img src={require("./img/installation-step3.png").default} width="480"/>
4. Verwijder de beschermkappen op de volgende plaatsen:
   - Onderzijde van de voedingsmodule  
   - Boven- en onderzijde van de middelste batterijmodule  

   :::warning
   Verwijder niet de beschermkap van de onderste batterijmodule om schade te voorkomen.
   :::

   <img src={require("./img/installation-step4.png").default} width="600"/>

5. Lijn de batterijmodules uit met de aansluitingen, stapel ze één voor één en plaats de voedingsmodule bovenop.  
   <img src={require("./img/installation-step5.png").default} width="240"/>
6. Bevestig met M4 kruiskopschroeven de L-vormige muurbeugels aan beide zijden van de eerste batterijmodule onder de voedingsmodule.  
   <img src={require("./img/installation-step6.png").default} width="240"/>
7. Zet na het stapelen de modules vast met M4 kruiskopschroeven.  
   <img src={require("./img/installation-step7.png").default} width="480"/>
8. Markeer de boorposities op de muur en boor gaten met Ø8 mm diameter en ca. 60 mm diep.  
   <img src={require("./img/installation-step8.png").default} width="480"/>
9. Sla de kunststof pluggen voor M5×60 schroeven in de gaten en draai de schroeven vast om de muurbeugels stevig te bevestigen.  
    <img src={require("./img/installation-step9.png").default} width="480"/>


:::info

Dit product heeft een ingebouwde dubbele isolatietransformator en voldoet aan de veiligheidsnormen. Het meten van de aardingsweerstand of foutstroom van het PV-systeem is niet nodig.

De hoofdunit moet worden aangesloten op een geaard stopcontact om risico op elektrische schokken te voorkomen. Indien dit niet mogelijk is, moet de behuizing van het apparaat worden geaard, zoals weergegeven in de afbeelding hieronder.

<img src={require("./img/installation-step10.png").default} width="240"/>

:::

---

## Elektrische aansluiting
   
:::info
- De installatie van de AC-netaansluiting moet voldoen aan lokale regelgeving. Indien nodig, schakel een professionele elektricien in.
:::

Onderstaande stappen zijn gebaseerd op een standaardconfiguratie met vier zonnepanelen.
<img src={require("./img/connect-cables.png").default} width="960"/>

**Stap 1: Aansluiten op het net**

1. Gebruik de meegeleverde voedingskabel (5 meter) met veiligheidsstekker.  
2. Sluit één uiteinde aan op de GRID IN/OUT-poort van de hoofdunit.  
3. Steek de andere kant in een stopcontact.  

<img src={require("./img/connect-grid.png").default} width="720"/>

**Stap 2: Aansluiten van zonnepanelen**

:::info
De ECO-modellen hebben geen PV-poorten en deze stap is niet van toepassing.
:::

Gebruik PV-verlengkabels om de positieve en negatieve uitgangen van elke zonnepaneelgroep aan te sluiten op de PV-ingangen (PV1, PV2, enz.).

<img src={require("./img/connect-pv.png").default} width="480"/>

:::warning
Sluit nooit twee of meer panelen in serie aan, omdat dit de ingangsspanning boven 60V kan brengen en schade kan veroorzaken.
:::

:::info
Bij een storing zal het systeem binnen 15 minuten automatisch proberen te herstellen. Indien dit mislukt, moet een professionele servicetechnicus worden ingeschakeld.
:::

---

## Inschakelen

Houd de ON/OFF-knop aan de linkerkant van de hoofdunit 2 seconden ingedrukt. Bij het opstarten gaat de blauwe LED aan de voorkant branden en beweegt het licht van het midden naar boven en beneden.

<img src={require("./img/power-on.png").default} width="360"/>
<img src={require("./img/power-on-led-state.png").default} width="240"/>

---

## Gebruik van de App

Met de INDEVOLT App kunt u:

- De realtime status en het actuele vermogen bekijken  
- Batterijniveau en laad-/ontlaadstatus controleren  
- Dagelijkse/wekelijkse/maandelijkse/jaarlijkse energiegegevens bekijken  
- Energie-instellingen configureren en firmware-updates uitvoeren  

📥 Bij eerste gebruik van de app, voltooi eerst de [installatie, accountregistratie en apparaat toevoegen](../app/installation.md).