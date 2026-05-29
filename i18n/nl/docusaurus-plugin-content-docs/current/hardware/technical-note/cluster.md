---
title: Cluster
description: Leer hoe u meerdere energieopslagsystemen kunt verbinden tot één systeem voor meer capaciteit en hoger uitgangsvermogen
---

# Cluster

## 1. Wat is een cluster?

Een cluster betekent dat meerdere micro-opslagapparaten worden verbonden tot één geïntegreerd systeem, waarbij de apparaten gezamenlijk zorgen voor stroomvoorziening, energieopslag en energiebeheer.

Binnen een cluster moet één apparaat worden ingesteld als hoofdapparaat, verantwoordelijk voor de systeemregeling en coördinatie. De overige apparaten functioneren als subapparaten. De apparaten communiceren automatisch met elkaar en werken samen als één systeem.

Na het vormen van een cluster nemen zowel het totale uitgangsvermogen als de totale opslagcapaciteit toe. Dit is vooral geschikt voor situaties met hoge belastingen, langdurige noodstroomvoorziening of toekomstige uitbreiding.

---

## 2. Waarom een cluster gebruiken?

De capaciteit en het vermogen van één apparaat zijn beperkt. Wanneer het energieverbruik in huis hoger wordt of langere back-uptijd gewenst is, kan een cluster worden gebruikt om de systeemcapaciteit uit te breiden.

**Hoger uitgangsvermogen**

Meerdere apparaten kunnen tegelijkertijd vermogen leveren om grotere belastingen van stroom te voorzien.

> Bijvoorbeeld:
> - 1 SolidFlex 2000-apparaat: maximaal omvormervermogen van ongeveer 2400 W
> - 2 apparaten in een cluster: maximaal omvormervermogen van ongeveer 4800 W
> - Het daadwerkelijk beschikbare vermogen blijft afhankelijk van netbeperkingen, kabelspecificaties en lokale regelgeving.

**Grotere opslagcapaciteit**

Binnen een cluster werken de batterijen van meerdere apparaten samen, waardoor de beschikbare back-uptijd aanzienlijk wordt verlengd.

> Bijvoorbeeld:
> - 1 SolidFlex 2000 met 5 SFA1800-modules: totale batterijcapaciteit van 10,8 kWh
> - 2 systemen in een cluster: totale capaciteit van ongeveer 21,6 kWh

**Flexibele uitbreiding**

Het systeem ondersteunt stapsgewijze uitbreiding. Gebruikers kunnen beginnen met één apparaat en later extra apparaten toevoegen wanneer nodig, zonder direct het volledige systeem te hoeven installeren.

---

## 3. Ondersteunde apparaten

De volgende modellen kunnen worden gebruikt als hoofd- of subapparaat:

<table><thead>
  <tr>
    <th></th>
    <th colspan="2">Gecentraliseerd cluster</th>
    <th colspan="2">Gecoördineerd cluster</th>
  </tr></thead>
<tbody>
  <tr>
    <td>Model</td>
    <td>Hoofd</td>
    <td>Sub</td>
    <td>Hoofd</td>
    <td>Sub</td>
  </tr>
  <tr>
    <td>PowerFlex 2000</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>SolidFlex 2000</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>BK1600</td>
    <td>❌</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>BK1600 Ultra</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
</tbody>
</table>

:::info

- Het gebruik van een cluster tussen SolidFlex 2000 / PowerFlex 2000 en BK1600 / BK1600 Ultra is nog niet volledig gevalideerd. Gemengd gebruik wordt daarom niet aanbevolen. SolidFlex 2000 en PowerFlex 2000 kunnen wel normaal samen in een cluster worden gebruikt.
- Tijdens clustergebruik:
  - Ondersteunt het systeem aansluiting van zonnepanelen via de **PV-interface**
  - Wordt ondersteuning voor micro-omvormers en belastingen via de **Backup-interface** nog verder geoptimaliseerd en is deze momenteel nog niet volledig beschikbaar

:::

---

## 4. Clustermodi

Het systeem ondersteunt twee verschillende clustermodi voor uiteenlopende installatiesituaties.

Communicatie tussen apparaten ondersteunt:
- Wi-Fi
- Ethernet
- RS485

Gebruikers kunnen de meest geschikte communicatiemethode kiezen op basis van de bekabeling en netwerkomgeving ter plaatse.

### 4.1 Gecoördineerd cluster

Elk apparaat wordt afzonderlijk op het elektriciteitsnet aangesloten en verwerkt zelfstandig de AC-ingang en AC-uitgang. De apparaten synchroniseren gegevens via het communicatienetwerk, terwijl het hoofdapparaat de werking en vermogensverdeling coördineert.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="gen1" label="SolidFlex 2000 / PowerFlex 2000" default>
    <img src={require("./img/coordinated_gen2.png").default} width="480" />
  </TabItem>
  <TabItem value="gen2" label="BK1600 / BK1600 Ultra">
    <img src={require("./img/coordinated_gen1.png").default} width="480" />
  </TabItem>
</Tabs>

### 4.2 Gecentraliseerd cluster

De subapparaten worden via voedingskabels in serie verbonden met het hoofdapparaat. Alle AC-ingangen en AC-uitgangen worden uiteindelijk geconcentreerd op het hoofdapparaat, dat de netaansluiting en het volledige energiebeheer verzorgt.

Aansluitmethode:
- Het hoofdapparaat wordt via **GRID IN/OUT** aangesloten op het elektriciteitsnet  
- De **Backup**-interface van het hoofdapparaat wordt verbonden met de **GRID IN/OUT** van het eerste subapparaat  
- Bij meerdere subapparaten worden deze achter elkaar gekoppeld via **Backup → GRID IN/OUT**

<Tabs>
  <TabItem value="gen1" label="SolidFlex 2000 / PowerFlex 2000" default>
    <img src={require("./img/centralized_gen2.png").default} width="480" />
  </TabItem>
  <TabItem value="gen2" label="BK1600 / BK1600 Ultra">
    <img src={require("./img/centralized_gen1.png").default} width="480"/>
  </TabItem>
</Tabs>

---

## 5. Werkingsregels van het cluster

Tijdens clustergebruik coördineert het systeem automatisch de apparaten en verdeelt het vermogen zonder handmatige tussenkomst.

### 5.1 Systeemlimieten

Het systeem ondersteunt maximaal 3 apparaten in een cluster:
- 1 hoofdapparaat
- Maximaal 2 subapparaten

### 5.2 Uitgangsvermogen

Het maximale uitgangsvermogen binnen een cluster is als volgt:
- Normale belastingen: 7200 W (3 × 2400 W)
- Met aangesloten micro-omvormers: 10800 W (3 × 3600 W)

> Opmerking: tijdens clustergebruik kan de vermogensweergave onnauwkeurig zijn wanneer micro-omvormers of belastingen via de bypasspoort zijn aangesloten. Deze functie wordt nog verder geoptimaliseerd.

:::danger
Controleer altijd of het maximale uitgangsvermogen voldoet aan de lokale elektrische normen en veiligheidsvoorschriften.
:::

### 5.3 Vermogensverdeling

Tijdens clustergebruik verdeelt het systeem het vermogen automatisch op basis van het batterijniveau en de belasting:

- Het uitgangsvermogen van apparaten kan verschillen
- Niet alle apparaten leveren altijd tegelijkertijd vermogen
- Apparaten met een hogere SOC krijgen prioriteit bij de belasting

Typisch systeemgedrag bij verschillende belastingen:

| Belastingsvermogen | Systeemgedrag |
| ------------------ | ------------- |
| Minder dan 200 W   | Alleen het apparaat met de hoogste SOC levert vermogen |
| 200 W ～ 500 W     | Twee apparaten met hogere SOC delen de belasting |
| Meer dan 500 W     | Alle subapparaten leveren vermogen, verdeeld op basis van SOC |

---

## 6. Een cluster configureren

Clusterconfiguratie kan worden uitgevoerd via de INDEVOLT App.

Controleer voordat u begint:

- Alle apparaten ondersteunen clustergebruik
- Alle apparaten zijn correct ingeschakeld

### Stap 1: Clusterinstellingen openen

Tik op de apparaatdetailpagina rechtsboven op het pictogram <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> om de instellingen te openen en selecteer vervolgens **Cluster**.

Tik op **Een cluster aanmaken** om een cluster te creëren.

<img src={require("./img/device_info.png").default} width="240"/>
<img src={require("./img/cluster_device_settings.png").default} width="240"/>
<img src={require("./img/create_cluster.png").default} width="240"/>

### Stap 2: Clusterparameters configureren

Op de configuratiepagina moeten basisinstellingen voor het cluster worden ingesteld, waaronder naam, clustermodus en vermogenslimieten.

:::danger
Controleer of de ingestelde parameters voldoen aan lokale netvereisten en wetgeving.
:::

<img src={require("./img/creating_cluster.png").default} width="240"/>
<img src={require("./img/cluster_name.png").default} width="240"/>
<img src={require("./img/cluster_mode.png").default} width="240"/>
<img src={require("./img/cluster_output_limit.png").default} width="240"/>
<img src={require("./img/cluster_feed_in_limit.png").default} width="240"/>

### Stap 3: Hoofd- en subapparaten toevoegen

Houd in de lijst met beschikbare apparaten een apparaatkaart ingedrukt en sleep deze naar het gebied voor hoofd- of subapparaten.

<img src={require("./img/cluster_devices.png").default} width="240"/>

### Stap 4: Configuratie bevestigen en opslaan

Controleer alle instellingen en tik vervolgens op **Opslaan** om de clusterconfiguratie te voltooien.

<img src={require("./img/cluster_created.png").default} width="240"/>

### Stap 5: Cluster bekijken en beheren

Na succesvolle configuratie opent de app automatisch de detailpagina van het cluster. Hier kunt u de status van het volledige cluster bekijken, inclusief de relatie tussen hoofd- en subapparaten, realtime vermogen en energiebeheerstrategieën.

Tik rechtsboven op het pictogram <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> om aanvullende instellingen te openen en het cluster verder te beheren, bijvoorbeeld door parameters te wijzigen of het cluster te ontkoppelen.

<img src={require("./img/cluster_info.png").default} width="240"/>
<img src={require("./img/cluster_settings.png").default} width="240"/>