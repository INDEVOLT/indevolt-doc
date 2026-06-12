---
title: Slim
description: Intelligent energy optimization that maximizes savings and revenue by leveraging electricity price differences.
---

# Slim

De slimme functie optimaliseert automatisch het laden en ontladen van de batterij via **[dynamische prijsmodus](#1-dynamische-prijsmodus)** of **[AI-modus](#2-ai-modus)**. Hierdoor wordt optimaal gebruikgemaakt van prijsverschillen en zonne-energie, wat leidt tot een hogere energie-efficiëntie en meer opbrengst.

## 1. Dynamische prijsmodus

Dynamische prijsmodus stuurt het systeem op basis van vooraf ingestelde prijsdrempels: laden bij lage elektriciteitsprijzen en ontladen bij hoge prijzen. Zo wordt geprofiteerd van prijsschommelingen om de opbrengst te maximaliseren.

- Lagere energiekosten
- Hogere benutting van zonne-energie en batterij
- Meer winst uit prijsfluctuaties

Kort gezegd: laag tarief → laden, hoog tarief → ontladen, volledig automatisch geoptimaliseerd.

:::info Voorwaarden
1. Het huishouden maakt gebruik van dynamische elektriciteitstarieven.  
2. Het huishouden beschikt over een INDEVOLT-energieopslagsysteem.
:::

### 1.1 Hoe het systeem werkt

#### 🔋 Laden (lage-prijsperiodes)

Wanneer de elektriciteitsprijs onder de doelprijs ligt, begint het systeem de batterij op te laden.

| Laadmodus | Beschrijving |
|----------|--------------|
| Laden via zon + net | Zonne-energie laadt de batterij met prioriteit, terwijl netstroom kan worden gebruikt als ondersteuning. Geschikt voor daluren. Het laadvermogen is begrensd op de ingestelde waarde. Zodra de batterij vol is, stopt netladen en wordt zonne-energie automatisch teruggeregeld. |
| Alleen laden via zon | Alleen zonne-energie wordt gebruikt om de batterij op te laden. Wanneer de batterij vol is, wordt eerst de woning van stroom voorzien; overtollige energie wordt binnen de toegestane limieten teruggeleverd aan het net. Bij overschrijding van de netlimiet wordt de PV-vermogen automatisch verminderd. |

#### ⚡ Ontladen (hoge-prijsperiodes)

Wanneer de elektriciteitsprijs boven de doelprijs ligt, gebruikt het systeem bij voorkeur energie uit de batterij. Het daadwerkelijke ontlaadvermogen is afhankelijk van de actuele belasting (meter/stopcontact/standaardbelasting).

| Ontlaadmodus | Beschrijving |
|--------------|--------------|
| Vast uitgangsvermogen | De batterij levert continu het ingestelde vermogen. Indien er een PV-micro-omvormer aanwezig is, krijgt zonne-energie prioriteit. Bij geen belasting of overschrijding van de netlimiet stopt het systeem en probeert het later automatisch opnieuw. |
| Eigen verbruik | De batterij past zich automatisch aan de actuele energiebehoefte van het huishouden aan, met een maximale ontlaadlimiet. Bij geen belasting of overschrijding van de netlimiet stopt de output automatisch. |

#### ⏸️ Stand-by (gelijke prijsperiodes)

Wanneer de prijs geen laad- of ontlaadactie triggert, gaat het systeem in stand-by en wordt de batterij niet actief geladen of ontladen.

| Bedrijfsmodus | Beschrijving |
|--------------|--------------|
| Zonne-energie eerst naar huis | Standaardmodus voor niet-geconfigureerde tijdsperioden:<br/>1. Zonne-energie voedt eerst de woning<br/>2. Overtollige energie wordt opgeslagen in de batterij<br/>3. Wanneer de batterij vol is, wordt overtollige energie binnen limieten teruggeleverd aan het net<br/>4. Bij overschrijding van netlimieten wordt PV-vermogen automatisch verminderd |
| Zonne-energie laadt eerst accu | 1. Zonne-energie laadt eerst de batterij<br/>2. Daarna wordt de woning van stroom voorzien<br/>3. Eventuele overtollige energie wordt teruggeleverd binnen limieten<br/>4. Bij overschrijding van netlimieten wordt PV-vermogen automatisch verminderd |

:::warning
- Alle vermogensinstellingen zijn afhankelijk van de hardwarelimieten van het apparaat.  
- Netlimiet verwijst naar het maximale toegestane terugleververmogen.  
- Automatische PV-terugregeling voorkomt overschrijding van de netlimiet. Het apparaat blijft daarbij een minimaal stand-byverbruik behouden.
:::

### 1.2 Strategie inschakelen

1. Tik op het instellingenpictogram rechtsboven in de module **Dynamische prijsmodus** <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/>.

2. Controleer:  
   ✅ Er is een [**inkoopstroomtarief**](./profile.md#31-een-stroomtarief-toevoegen) ingesteld  
   ✅ Er zijn apparaten toegevoegd die aan de strategie kunnen deelnemen  
   Indien niet voltooid, tik op de betreffende sectie om dit te configureren en ga vervolgens verder.

3. Stel de **doelprijs** in die bepaalt wanneer het systeem moet laden of ontladen, met opties: handmatig / automatisch / intelligent. Klik daarna op **Volgende**.

4. Selecteer de **deelnemende apparaten** en tik op **Volgende**.  
   > (Optioneel) Tik op <img src={require("./img/edit_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> om de [bedrijfsmodus per prijsperiode](#11-hoe-het-systeem-werkt) te configureren.

5. Bekijk het laad- en ontlaadplan en tik op **Activeren**.

<img src={require("./img/smart.png").default} width="240"/>
<img src={require("./img/strategy_requirements.png").default} width="240"/>
<img src={require("./img/price_setting.png").default} width="240"/>
<img src={require("./img/select_strategy_device.png").default} width="240"/>
<img src={require("./img/device_advanced_mode.png").default} width="240"/>
<img src={require("./img/preview_strategy.png").default} width="240"/>

### 1.3 Strategie bekijken

Na activatie toont de module de huidige status van het systeem (laden / ontladen / stand-by) en de schakelstatus.

<img src={require("./img/dynamic_pricing_strategy.png").default} width="240"/>

Tik op de module om het uitvoeringsschema en de toegewezen apparaten te bekijken.

Via het pictogram rechtsboven <img src={require("./img/history_icon.png").default} width="24" style={{verticalAlign: "middle"}}/> kunt u de elektriciteitsmarktprijzen, SOC en strategielogboeken (historische wijzigingen) bekijken.

<img src={require("./img/view_strategy.png").default} width="240"/>
<img src={require("./img/strategy_log.png").default} width="240"/>

### 1.4 Strategie aanpassen

U kunt de strategie op elk moment aanpassen, inclusief deelnemende apparaten en doelprijs.

#### Apparaten wijzigen

1. Tik in de strategiepagina op het bewerkingspictogram naast **Apparaatstatus** <img src={require("./img/edit_icon.png").default} width="24" style={{verticalAlign: "middle"}}/>.
2. Selecteer opnieuw de apparaten die u wilt opnemen uit alle compatibele apparaten in het huishouden.
3. (Optioneel) Pas de [bedrijfsmodus per prijsperiode](#11-hoe-het-systeem-werkt) aan via <img src={require("./img/edit_icon.png").default} width="24" style={{verticalAlign: "middle"}}/> en sla de instellingen op.
4. Tik op **Volgende**, controleer de instellingen en tik op **Inschakelen** om de strategie opnieuw te activeren.

<img src={require("./img/view_strategy.png").default} width="240"/>
<img src={require("./img/set_strategy_device.png").default} width="240"/>
<img src={require("./img/device_advanced_mode.png").default} width="240"/>
<img src={require("./img/confirm_strategy.png").default} width="240"/>

#### Doelprijs aanpassen

1. Tik in de strategiepagina op het bewerkingspictogram naast **Marktprijzen** <img src={require("./img/edit_icon.png").default} width="24" style={{verticalAlign: "middle"}}/>.

2. Stel de **doelprijs** in:

   - **Handmatig**: stel directe laad- en ontlaaddrempels in.  
   - **Automatisch**: systeem bepaalt optimale drempels op basis van hoge/lage prijsintervallen.  
   - **Slim**: alleen de prijsmarge wordt ingesteld, de optimalisatie gebeurt automatisch.

   > 💡 Een grotere prijsmarge leidt tot minder maar sterkere laad-/ontlaadacties; een kleinere marge zorgt voor frequentere acties.

3. Tik op **Volgende**, bekijk de instellingen en activeer de strategie opnieuw.

<img src={require("./img/view_strategy.png").default} width="240"/>
<img src={require("./img/strategy_price1.png").default} width="240"/>
<img src={require("./img/strategy_price2.png").default} width="240"/>
<img src={require("./img/strategy_price3.png").default} width="240"/>
<img src={require("./img/confirm_strategy.png").default} width="240"/>

---

## 2. AI-modus

De AI-modus voorspelt op basis van historische gegevens de **PV-opwekking** en het **energieverbruik van het huishouden**. In combinatie met **elektriciteitsprijzen** genereert het systeem automatisch een optimaal laad- en ontlaadschema om de totale opbrengst te maximaliseren.

### 2.1 AI-modus inschakelen

1. Tik op het pictogram <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> rechtsboven in de module **AI-modus**.

2. Controleer volgens de instructies op het scherm of aan de volgende voorwaarden is voldaan:  

   ✅ Een [elektriciteitstarief](./profile.md#31-een-stroomtarief-toevoegen) is geconfigureerd  
   ✅ Apparaten die aan de strategie kunnen deelnemen zijn toegevoegd  
   ✅ Verbruiksgegevens zijn beschikbaar: er is een energiemeter of meterlezer toegevoegd en het systeem ontvangt verbruiksgegevens  
   
   Indien een van deze voorwaarden niet is vervuld, tik dan op het betreffende onderdeel om de instellingen te voltooien en tik vervolgens op **Volgende**.

3. Als het systeem PV-informatie detecteert, vult u het **adres** en de **PV-informatie** aan. Als er geen PV-informatie wordt gevonden, controleer dan of er nog niet-geïntegreerde PV-apparaten aanwezig zijn, zodat de voorspellingen nauwkeurig blijven. Tik vervolgens op **Volgende**.

   > (Optioneel) Tik op **⚙ Geavanceerde instellingen** om de [prijsmarge](#prijsverschil-wijzigen in te stellen.

4. Selecteer de apparaten die aan de strategie deelnemen en tik op **Volgende**.

5. Bekijk de door het systeem gegenereerde voorspellingen en tik op **Inschakelen** om de AI-modus in te schakelen.

<img src={require("./img/smart.png").default} width="240"/>
<img src={require("./img/ai_mode_conditions.png").default} width="240"/>
<img src={require("./img/ai_mode_address.png").default} width="240"/>
<img src={require("./img/ai_mode_device.png").default} width="240"/>
<img src={require("./img/ai_mode_preview.png").default} width="240"/>

### 2.2 AI-modus bekijken

Na activering toont de module **AI-modus** de huidige status van het plan (**stand-by / laden / ontladen**) en een schakelaar om de functie in of uit te schakelen.

<img src={require("./img/ai_mode_activated.png").default} width="240"/>

Tik op de module **AI-modus** om de detailpagina te openen. Hier kunt u de huidige status van de strategie, de opbrengsten en de deelnemende apparaten bekijken.

<img src={require("./img/ai_mode.png").default} width="240"/>

Tik op het opbrengstgedeelte bovenaan om de pagina **Omzedetails** te openen. Hier kunt u de opbrengst van de AI-modus, de opbrengst van de basismodus en een vergelijking tussen beide bekijken.

<img src={require("./img/revenue_details.png").default} width="240"/>

### 2.3 AI-modus wijzigen

Tik op het pictogram **…** rechtsboven op de pagina van de AI-modus om meer instellingen te openen.

<img src={require("./img/ai_mode.png").default} width="240"/>
<img src={require("./img/ai_mode_more.png").default} width="240"/>

#### Apparaten wijzigen

1. Tik op het pictogram <img src={require("./img/edit_icon.png").default} width="24" style={{verticalAlign: "middle"}}/> rechts van **Apparaatstatus**.
2. Selecteer opnieuw de apparaten die aan de strategie moeten deelnemen.

<img src={require("./img/ai_mode.png").default} width="240"/>
<img src={require("./img/ai_mode_select_device.png").default} width="240"/>

#### Geschiedenisdetails bekijken

Selecteer **Geschiedenisdetails** om eerdere uitvoeringsresultaten te bekijken.

<img src={require("./img/ai_mode_historical.png").default} width="240"/>

#### Adresgegevens wijzigen

Selecteer **Adresinformatie** om de uw locatie en het huisadres bij te werken.

<img src={require("./img/ai_mode_edit_address.png").default} width="240"/>

#### Geïnstalleerd PV-vermogen wijzigen

Selecteer **Geïnstalleerd PV-vermogen**, voer de werkelijke geïnstalleerde capaciteit in en sla de wijzigingen op.

<img src={require("./img/ai_mode_edit_pv.png").default} width="240"/>

#### Prijsverschil wijzigen

De AI gebruikt het ingestelde **prijsverschil** om automatisch te bepalen wanneer de batterij moet laden of ontladen om de totale opbrengst te verhogen. Hoe kleiner de prijsmarge, hoe meer optimalisatiemogelijkheden er ontstaan, maar ook hoe vaker de batterij wordt geladen en ontladen.

1. Selecteer **Geavanceerde instellingen**.
2. Kies in het gedeelte **Prijsverschil instellen** voor **Handmatig** of **Automatisch**. Bij een handmatige instelling kunt u de gewenste prijsmarge aanpassen met de schuifregelaar.
3. Tik op **Opslaan**.

<img src={require("./img/ai_mode_advanced_settings1.png").default} width="240"/>
<img src={require("./img/ai_mode_advanced_settings2.png").default} width="240"/>
