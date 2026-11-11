---
title: PG2000Series
description: PG2000Series Firmwareversiegeschiedenis
---

# PG2000Series

:::info[Toepassingsbereik]
Deze firmware wordt per productserie uitgebracht en is niet benoemd naar een enkel model. De volgende modellen binnen dezelfde serie delen dezelfde firmware:

**SolidFlex 2000, SolidFlex 2000Eco, PowerFlex 2000, PowerFlex 2000Eco**

Het firmwarepakket bevat de firmware van de modules CMS, Pfile, EMS, BMS MB, INV, DCDC. Elk module wordt afzonderlijk bijgewerkt; raadpleeg indien nodig het betreffende gedeelte.
:::

### CMS


| Publicatiedatum | Versienummer | Samenvatting van updates                                                                                                                                       |
| --------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2026/10/19 | V1500.0B.0041 | 1. Probleem opgelost waarbij na koppeling van de LoRa-meter soms geen gegevens werden ontvangen<br />2. Communicatieproblemen van de P1-meter geoptimaliseerd<br />3. Een deel van de communicatielogica geoptimaliseerd |
| 2026/08/31 | V140E.0B.003E | 1. Lokale toegangslogica voor externe omvormers geoptimaliseerd<br />2. Parallelle bedrijfslogica geoptimaliseerd |
| 2026/06/30 | V140C.0B.0038 | 1. Optimalisatie van de bedrijfslogica |
| 2026/05/07 | V140C.0B.0036 | 1. Optimalisatie van de LoRa-communicatielogica |
| 2026/05/07 | V140B.0B.0035 | 1. Communicatielogica geoptimaliseerd |
| 2026/04/10 | V140A.0A.0034 | 1. Minuutniveau aangepast tijdschema toegevoegd<br />2. Ondersteuning toegevoegd voor MQTT van derden (nog niet ondersteund in de APP)<br />3. Modbus TCP cloudtoegang toegevoegd (nog niet ondersteund in de APP)<br />4. Tijdsinterval voor dynamische elektriciteitsprijzen aangepast naar 15 minuten<br />5. Wifi- en LoRa-communicatielogica geoptimaliseerd<br />6. Resetfunctie via 10 seconden ingedrukt houden verwijderd en verplaatst naar de APP (nog niet ondersteund in de APP) |
| 2026/03/03        | V1408.09.0031 | 1. Ondersteuning toegevoegd voor stromleser meter (infrarood uitlezer)<br />2. Ondersteuning toegevoegd voor homewizard meter (P1)<br />3. Ondersteuning toegevoegd voor shelly plug gen1<br />4. Instelling voor meter-offset toegevoegd<br />5. Communicatielogica geoptimaliseerd |
| 2026/01/15       | V1407.08.002F | 1. OpenData-aanroeplogica geoptimaliseerd                                                                                                                     |
| 2026/01/15       | V1406.07.002E | 1. Communicatielogica geoptimaliseerd                                                                                                                         |
| 2025/12/12      | V1406.07.002B | 1. Ondersteuning voor solarman smart plug, shelly Plug S MTR Gen3, shelly 3EM <br />2. Bedrijfslogica geoptimaliseerd                                        |
| 2025/10/27 | V1401.05.0022 | 1. Parallelle werking en OpenData geoptimaliseerd |
| 2025/09/24 | V1400.04.001F | 1. Ondersteuning toegevoegd voor solarman P1-meteruitlezer<br />2. OpenData-besturingslogica geoptimaliseerd<br />3. Lengte van versienummers geoptimaliseerd |
| 2025/07/31 | V1.3.0A_R00D.032_M4801_00000019 | 1. Resourcebeheer voor 4G/Wi-Fi geoptimaliseerd<br />2. Signaal van gekoppelde apparaten geoptimaliseerd<br />3. Ondersteuning toegevoegd voor aansluiting van SOLARMAN-meters<br />4. Systeemstabiliteit verbeterd<br />5. Bluetooth-configuratie geoptimaliseerd |
| 2025/05/29 | V1.3.07_R00D.002_M4801_00000014 | / |


### Pfile

| Publicatiedatum | Versienummer | Samenvatting van updates |
| ---------------- | ------------ | ------------------------ |
| 2026/10/20 | V0D.00.25 | 1. Enkele parameters toegevoegd |
| 2026/10/19 | V0D.00.24 | 1. Enkele parameters geoptimaliseerd |
| 2026/09/20  | V0D.00.23 | 1. Sommige parameters geoptimaliseerd |
| 2026/08/31  | V0D.00.22 | 1. Sommige parameters geoptimaliseerd | 
| 2026/06/30  | V0D.00.20 | 1. Sommige parameters geoptimaliseerd |
| 2026/05/25  | V0D.00.19 | 1. Sommige parameters geoptimaliseerd |
| 2026/05/06 | V0D.00.18 | 1. Sommige parameters geoptimaliseerd |
| 2026/01/14 | V0D.00.14 | 1. Weergave van batterijtemperatuurstatus geoptimaliseerd |
| 2026/01/09 | V0D.00.13 | 1. Weergave van batterijtemperatuurstatus geoptimaliseerd |
| 2025/12/25 | V0D.00.11 | 1. Instelling voor AC-laadvermogen toegevoegd |
| 2025/11/14 | V0D.00.08 | 1. Besturing van de LED-lichtstrip van de hoofdunit geoptimaliseerd |
| 2025/10/27 | V0D.00.06 | 1. Nieuwe registerpunten toegevoegd voor batterijpakket 6, AC-gekoppelde energie, standby-naar-slaapmodus, bypass-activering en energie-uitvoer in netgekoppelde/off-grid modus<br />2. Uploadmeetpunt voor PV4-alarmcode aangepast<br />3. Dubbele registerpunten voor LED-verlichting verwijderd |
| 2025/09/24 | V0D.00.03 | 1. Nieuwe besturingsbits toegevoegd<br />2. Berekeningslogica geoptimaliseerd |

### EMS


| Publicatiedatum | Versienummer | Samenvatting van updates                                                                                                                                                                      |
| --------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2026/10/12 | V1.01.15 | 1. Scenario's met directe PV bij parallelle werking geoptimaliseerd<br />2. Probleem opgelost waarbij na zwakke PV-opbrengst in diepe standby niet werd opgeladen |
| 2026/08/13 | V1.01.12 | 1. Optimalisatie van de werking van clustersystemen<br />2. Enkele bekende problemen geoptimaliseerd |
| 2026/05/12 | V1.01.08 | 1. Optimalisatie van de werking van clustersystemen |
| 2026/02/11       | V1.01.03     | 1. Logica voor geforceerd opladen geoptimaliseerd<br />2. Tijdschema-instellingen geoptimaliseerd<br />3. Logica voor batterijverwarming bij lage temperatuur geoptimaliseerd<br />4. Parallelle logica geoptimaliseerd<br />5. Compatibiliteit met PFA4000 batterijpakket toegevoegd<br />6. Probleem opgelost waarbij in sommige situaties geen diepe standby kon worden bereikt |
| 2026/01/21       | V1.00.58     | 1. Firmware-upgradetijd geoptimaliseerd <br />2. Vermogensregeling bij parallel gebruik geoptimaliseerd <br />3. Automatische omschakeling naar laden toegevoegd wanneer netinvoeding wordt gedetecteerd terwijl AC-laden verboden is <br />4. Standby-logica voor batterijpakket toegevoegd |
| 2025/12/10      | V1.00.57     | 1. PV-vermogensverdeling bij parallel gebruik geoptimaliseerd <br />2. PV-prioriteit in realtime modus geoptimaliseerd <br />3. Upgradelogica geoptimaliseerd <br />4. Toegevoegd: korte druk op schakelaar om diepe standby te verlaten |
| 2025/11/28      | V1.00.55     | 1. Upgradelogica geoptimaliseerd                                                                                                                                                               |
| 2025/11/04 | V1.00.50 | 1. Logica voor diepe standby geoptimaliseerd (bij bypass ingeschakeld: standby-verbruik 20 W, bij uitgeschakeld: 8 W)<br />2. Animatielogica van LED-strip bij uitschakelen geoptimaliseerd<br />3. Logica voor back-up SOC geoptimaliseerd (bij ingeschakelde AC-laadfunctie: herladen start bij SOC -2%; bij uitgeschakelde AC-laadfunctie: geforceerd herladen start bij 3% in standby, stopt bij 5% ter bescherming van de batterij)<br />4. Update-logica geoptimaliseerd<br />5. PV-logica geoptimaliseerd<br />6. Standby-parameters in realtime besturingsmodus geoptimaliseerd<br />7. Totaal energieverbruik geoptimaliseerd<br />8. Ondersteuning toegevoegd voor vijfde uitbreidingsbatterij (nog niet ondersteund in de APP, maar hardware werkt normaal) |
| 2025/10/14 | V1.00.48 | 1. Werking van off-grid uitgang aangepast: standaard EPS-modus bij elke opstart<br />2. Kritieke belastingmodus toegevoegd (nog niet beschikbaar in APP)<br />3. Logica voor periodieke volledige laadkalibratie toegevoegd: standaard elke 15 dagen; indien in 15 dagen geen SOC = 100% wordt gedetecteerd, wordt automatisch één volledige laadcyclus uitgevoerd (nog niet beschikbaar in APP)<br />4. Netgekoppeld vermogen gewijzigd naar AC-lijnvermogen<br />5. Realtime besturingsmodus toegevoegd (nog niet beschikbaar in APP)<br />6. Deep standby-functie geoptimaliseerd<br />7. Parallelle werking (multi-device) logica geoptimaliseerd<br />8. Standby-verbruik geoptimaliseerd |
| 2025/08/04 | V1.00.43 | 1. Parallelle werking toegevoegd, netparameters en netregelinstellingen toegevoegd, netgekoppeld vermogenslimiet verhoogd tot 3600 W<br />2. LED-strip en bypass-relais besturing toegevoegd, LED-animaties geoptimaliseerd<br />3. Ontlaadvermogen verhoogd tot 0,6 P, SOC-vermogensverdeling tussen meerdere packs geoptimaliseerd, AC-laadstandaard ingesteld op 2400 W, micro-omvormer vermogensregeling gerepareerd<br />4. Standby-drempel bij lage batterij verlaagd naar 2,8%, herlaadlogica en MOS-temperatuurregeling geoptimaliseerd, energiedistributie tussen batterijpacks aangepast<br />5. Overbelastingsbescherming micro-omvormer verbeterd, overbelastingsvertraging verlengd tot 30 s, geen kettingreactie bij zelfherstel van omvormerfouten<br />6. EMS-upgrade toegestaan bij SOC ≥ 5%, opslag en rapportage van uitschakelinformatie toegevoegd, optimalisatie van opslaglogica om animatievertraging te verminderen<br />7. Rapportage van uitschakelreden/tijd/aantal toegevoegd, functies voor realtime en tijdgestuurde modus verbeterd |
| 2025/06/17 | V1.00.35 | / |
| 2025/06/04 | V1.00.32 | / |


### BMS MB

| Publicatiedatum | Versienummer | Samenvatting van updates |
| --------------- | ------------ | ------------------------ |
| 2026/07/22 | V1.00.49 | 1. Optimalisatie van de bedrijfslogica |
| 2026/05/12 | V1.00.45 | 1. Optimalisatie van batterijbescherming en bedrijfslogica |
| 2026/02/11 | V1.00.42 | 1. SOC-algoritme geoptimaliseerd |
| 2026/01/21 | V1.00.38 | 1. SOC-algoritme geoptimaliseerd |
| 2025/11/28 | V1.00.35 | 1. Upgrade-logica geoptimaliseerd |
| 2025/10/04 | V1.00.33 | 1. Zelftestlogica geoptimaliseerd<br />2. Standby-verbruik geoptimaliseerd<br />3. Pre-charge logica toegevoegd |
| 2025/07/31 | V1.00.30 | 1. Laaddetectie geoptimaliseerd<br />2. Stabiliteit van upgrade-communicatie verbeterd<br />3. Ontlaadbeveiliging versterkt |
| 2025/06/16 | V1.00.25 | / |
| 2025/05/30 | V1.00.22 | / |


### INV

| Publicatiedatum | Versienummer | Samenvatting van updates |
| --------------- | ------------ | ------------------------ |
| 2026/09/30 | V1.43 | 1. Probleem opgelost waarbij de bypass in bepaalde omstandigheden soms werd losgekoppeld<br />2. Bedrijfslogica van de omvormer geoptimaliseerd |
| 2026/07/22 | V1.41 | 1. Bedrijfslogica bij zwakke PV-opbrengst geoptimaliseerd (niet van toepassing op ECO-modellen) |
| 2026/05/12 | V1.38 | 1. Ondersteuning toegevoegd voor off-grid micro-omvormers (max: 1200 W)<br />2. Probleem opgelost waarbij het netrelais onder bepaalde omstandigheden niet kon inschakelen<br />3. Probleem opgelost waarbij er soms een foutmelding werd weergegeven nadat de PV volledig was opgeladen |
| 2026/04/10 | V1.36 | 1. Probleem opgelost waarbij de omvormer in netgekoppelde modus soms niet laadt of ontlaadt |
| 2026/02/11 | V1.35 | 1. Laadlogica geoptimaliseerd |
| 2026/01/21 | V1.34 | 1. Probleem opgelost waarbij de bypass in bepaalde omstandigheden werd losgekoppeld |
| 2025/12/10 | V1.32 | 1. Realtime besturingsmodus geoptimaliseerd |
| 2025/11/04 | V1.30 | 1. Ondersteuning toegevoegd voor vijfde uitbreidingsbatterij (nog niet ondersteund in de APP, maar hardware werkt normaal) |
| 2025/10/21 | V1.29 | / |
| 2025/10/04 | V1.28 | 1. Eilandbeveiligingslogica geoptimaliseerd<br />2. Ontlaadlogica van off-grid uitgang geoptimaliseerd<br />3. Derating-logica geoptimaliseerd |
| 2025/09/16 | V1.22 | / |
| 2025/07/08 | V1.21 | 1. Laden geoptimaliseerd<br />2. Onderspanningsbeveiliging aangepast<br />3. Overstroombeveiliging geüpgraded<br />4. Aangepast aan meerdere regionale regelgeving<br />5. Off-grid controle verbeterd<br />6. Prestaties bij zwak net geoptimaliseerd<br />7. Standaard regionale instellingen toegevoegd |
| 2025/06/02 | V1.16 | / |

### DCDC

| Publicatiedatum | Versienummer | Samenvatting van updates |
| --------------- | ------------ | ------------------------ |
| 2026/07/22 | V1.01.77 | 1. Optimalisatie van de bedrijfslogica |
| 2026/05/29 | V1.01.75 | 1. Optimalisatie van een probleem waarbij het laadvermogen bij meerdere batterijpacks soms wordt begrensd |
| 2026/05/10 | V1.01.73 | 1. Optimalisatie van de bedrijfslogica |
| 2026/03/20 | V1.01.64 | 1. Probleem opgelost waarbij batterijpacks in diepe standby soms communicatie verliezen |
| 2026/03/04 | V1.01.62 | 1. Communicatie met batterijpacks geoptimaliseerd |
| 2026/02/11 | V1.01.61 | 1. Communicatie met batterijpacks geoptimaliseerd |
| 2026/01/21 | V1.01.59 | 1. Probleem opgelost met SOC-ongelijkheid bij lage ontlaadvermogens |
| 2025/11/28 | V1.01.54 | 1. Probleem opgelost bij PV-beperking in bepaalde omstandigheden<br />2. Upgrade-logica geoptimaliseerd |
| 2025/11/04 | V1.01.51 | 1. Logica van bypass-poort geoptimaliseerd |
| 2025/10/14 | V1.01.48 | 1. PV-laadlogica geoptimaliseerd<br />2. Werking van verwarmingsfolie geoptimaliseerd |
| 2025/08/27 | V1.01.39 | / |
| 2025/07/31 | V1.01.36 | 1. Terugstroombeveiliging toegevoegd<br />2. Ontlaadvermogen geoptimaliseerd<br />3. Probleem met overlaadstroom opgelost<br />4. Intelligente detectie bij zwak licht toegevoegd<br />5. Overbelastingsbeveiliging versterkt |
| 2025/06/17 | V1.01.28 | / |
| 2025/06/04 | V1.01.23 | / |
