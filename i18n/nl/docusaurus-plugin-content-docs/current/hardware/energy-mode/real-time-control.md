---
title: Realtime-Regeling
description: Handmatig laden, ontladen of stand-by instellen
---

# Realtime-Regeling

De modus **Realtime-Regeling** stelt je in staat om op elk moment **handmatig de laad-, ontlaad- of stand-bystatus van het systeem te regelen**.  
Zodra je de instellingen opslaat, voert het systeem je opdracht direct uit en stopt automatisch wanneer de ingestelde voorwaarden zijn bereikt.

## Voor wie is deze modus geschikt?

- Tijdelijk snel laden of ontladen nodig  
- Testen, debuggen of systeemgedrag verifiëren  
- Gevorderde gebruikers die het systeemgedrag goed begrijpen  
- Situaties waarin korte handmatige interventie vereist is  

## Hoe werkt het systeem?

In de modus Realtime-Regeling stel je handmatig de volgende parameters in:

- **Status**: Stand-by / Laden / Ontladen  
- **Vermogen**: 0–2400 W  
- **Doel-SoC**: 5%–100%  

Na opslaan wordt de instelling direct uitgevoerd:

- **Opladen**: het systeem laadt met het ingestelde vermogen  
- **Ontladen**: het systeem levert vermogen aan de belasting  
- **Stand-by**: het systeem blijft inactief zonder te laden of te ontladen  

Wanneer de batterij het ingestelde **Doel-SoC** bereikt, stopt het systeem automatisch met laden of ontladen en schakelt het naar stand-by.

**Energieprioriteit**

- Huishoudelijk verbruik wordt **eerst gedekt door zonne-energie**  
- Bij onvoldoende zonne-energie levert de **batterij extra stroom**  
- Alleen wanneer zowel zonne-energie als batterij onvoldoende zijn, wordt **netstroom gebruikt**

## Hoe stel je Realtime-Regeling in?

**Stappen:**

1. Zorg ervoor dat je het apparaat hebt toegevoegd in de **INDEVOLT App**  
2. Ga naar het tabblad **Apparaat** en open de apparaatkaart om de detailpagina te openen  
3. Tik op de energiemodus en ga naar de modusselectie  
4. Kies **Realtime-Regeling** en tik op **Instellingen**  
5. Configureer volgens je behoefte:  
   - Status: stand-by / laden / ontladen  
   - Vermogen: 0–2400 W  
   - Doel-SoC: 5%–100%  
6. Tik op **Opslaan** om de instellingen direct toe te passen  

<img src={require("./img/select_device.png").default} width="240"/>
<img src={require("./img/select_energy_mode.png").default} width="240"/>
<img src={require("./img/real_time_control.png").default} width="240"/>
<img src={require("./img/real_time_control_settings.png").default} width="240"/>
<img src={require("./img/real_time_control_status.png").default} width="240"/>
<img src={require("./img/real_time_control_power.png").default} width="240"/>
<img src={require("./img/real_time_control_soc.png").default} width="240"/>

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
| Bypass Socket| Uitgeschakeld tenzij specifiek nodig |
| Noodstroomreserve | Aanbevolen: 20% |