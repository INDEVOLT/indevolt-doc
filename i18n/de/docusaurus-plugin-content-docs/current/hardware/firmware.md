---
title: Firmware-Versionsverlauf
description: Versionsverlauf der INDEVOLT-Energiespeicher-Firmware
---

# Firmware-Versionsverlauf

## SolidFlex 2000 / PowerFlex 2000

### CMS

| Veröffentlichungsdatum | Versionsnummer | Änderungsübersicht |
| ---------------------- | -------------- | ------------------- |
| 2026/06/30 | V140C.0B.0038 | 1. Optimierung der Betriebslogik |
| 2026/05/07 | V140C.0B.0036 | 1. Optimierung der Lora-Kommunikationslogik |
| 2026/05/07 | V140B.0B.0035 | 1. Optimierung der Kommunikationslogik |
| 2026/04/10 | V140A.0A.0034 | 1. Hinzufügen von minutengenauen Zeitplänen<br />2. Unterstützung von Drittanbieter-MQTT (App derzeit nicht unterstützt)<br />3. Hinzufügen von Modbus-TCP-Cloud-Integration (App derzeit nicht unterstützt)<br />4. Änderung des dynamischen Strompreistakts auf 15-Minuten-Intervalle<br />5. Optimierung der WLAN- und Lora-Kommunikation<br />6. Entfernung der 10-Sekunden-Taste zum WLAN-Reset; Funktion wird in die App verlagert (App derzeit nicht unterstützt) |
| 2026/03/03 | V1408.09.0031 | 1. Unterstützung von Stromzähler mit Infrarot-Auslesung (Stromleser)<br />2. Unterstützung von HomeWizard P1-Zählern<br />3. Unterstützung von Shelly Plug Gen1<br />4. Hinzufügen von Zähler-Offset-Einstellungen<br />5. Optimierung der Kommunikationslogik |
| 2026/01/15 | V1407.08.002F | 1. Optimierung der OpenData-Aufruflogik |
| 2026/01/15 | V1406.07.002E | 1. Optimierung der Kommunikationslogik |
| 2025/12/12 | V1406.07.002B | 1. Unterstützung von Solarman Smart Plug, Shelly Plug S MTR Gen3 und Shelly 3EM<br />2. Optimierung der Betriebslogik |
| 2025/10/27 | V1401.05.0022 | 1. Optimierung von Parallelbetrieb und OpenData |
| 2025/09/24 | V1400.04.001F | 1. Unterstützung von Solarman P1-Zählerintegration<br />2. Optimierung der OpenData-Steuerlogik<br />3. Optimierung der Versionsnummernstruktur |
| 2025/07/31 | V1.3.0A_R00D.032_M4801_00000019 | 1. Optimierung des 4G-/WLAN-Ressourcenmanagements<br />2. Verbesserung der verbundenen Gerätesignale<br />3. Erweiterte Geräteintegration: Unterstützung von SOLARMAN-Zählern<br />4. Erhöhte Systemstabilität<br />5. Optimierung der Bluetooth-Konfiguration |
| 2025/05/29 | V1.3.07_R00D.002_M4801_00000014 | / |


### Pfile

| Veröffentlichungsdatum | Versionsnummer | Änderungsübersicht |
| ---------------------- | -------------- | ------------------- |
| 2026/06/30  | V0D.00.20 | 1. Optimierung einzelner Parameter |
| 2026/05/25 | V0D.00.19 | 1. Optimierung einzelner Parameter |
| 2026/05/06 | V0D.00.18 | 1. Optimierung einzelner Parameter |
| 2026/01/14 | V0D.00.14 | 1. Verbesserung der Batterietemperaturanzeige |
| 2026/01/09 | V0D.00.13 | 1. Verbesserung der Batterietemperaturanzeige |
| 2025/12/25 | V0D.00.11 | 1. Hinzufügen der AC-Nachladeleistungs-Einstellung |
| 2025/11/14 | V0D.00.08 | 1. Optimierung der Steuerung der LED-Leiste |
| 2025/10/27 | V0D.00.06 | 1. Hinzufügen von Registern für Batteriepaket 6, AC-Kopplungsenergie, Standby-zu-Schlaf-Steuerung, Bypass-Aktivierung sowie netzgebundene und netzunabhängige Ausgangsenergie<br />2. Anpassung des PV4-Alarmcodes<br />3. Entfernung redundanter LED-Steuerpunkte |
| 2025/09/24 | V0D.00.03 | 1. Hinzufügen neuer Steuerbits<br />2. Optimierung der Berechnungslogik |


### EMS

| Veröffentlichungsdatum | Versionsnummer | Änderungsübersicht |
| ---------------------- | -------------- | ------------------- |
| 2026/05/12 | V1.01.08 | 1. Optimierung der Betriebslogik im Parallelbetrieb |
| 2026/02/11 | V1.01.03 | 1. Optimierung der Zwangsnachlade-Logik<br />2. Verbesserung der Zeitplan-Konfiguration<br />3. Optimierung der Batteriekaltstart-Heizlogik<br />4. Optimierung des Parallelbetriebs<br />5. Unterstützung von PFA4000-Batteriemodulen hinzugefügt<br />6. Behebung eines Fehlers, bei dem kein Übergang in den Tiefstandby möglich war |
| 2026/01/21 | V1.00.58 | 1. Optimierung der Firmware-Update-Zeit<br />2. Optimierung der Leistungsregelung im Parallelbetrieb<br />3. Automatischer Wechsel in den Lademodus bei Netzeinspeisung während AC-Ladeverbot<br />4. Verbesserte Standby-Logik der Batteriemodule |
| 2025/12/10 | V1.00.57 | 1. Optimierung der PV-Leistungsverteilung im Parallelbetrieb<br />2. Verbesserung der PV-Priorität im Echtzeitmodus<br />3. Optimierung der Update-Logik<br />4. Beenden des Tiefstandby per kurzem Tastendruck hinzugefügt |
| 2025/11/28 | V1.00.55 | 1. Optimierung der Update-Logik |
| 2025/11/04 | V1.00.50 | 1. Optimierung des Tiefstandby-Modus (20 W bei offenem Bypass, 8 W bei geschlossenem Bypass)<br />2. Verbesserung der LED-Animation beim Ausschalten<br />3. Optimierung der Notstrom-SOC-Logik<br />4. Verbesserung der Update-Logik<br />5. Optimierung der PV-Logik<br />6. Verbesserung der Standby-Parameter im Echtzeitmodus<br />7. Reduzierung des Gesamtenergieverbrauchs<br />8. Unterstützung für fünftes Erweiterungsbatteriemodul (App derzeit nicht unterstützt, Hardware funktioniert) |
| 2025/10/14 | V1.00.48 | 1. EPS-Modus als Standard beim Einschalten des Off-Grid-Ports<br />2. Einführung eines kritischen Lastmodus (App nicht verfügbar)<br />3. Automatische Volllade-Kalibrierung alle 15 Tage<br />4. Umstellung der Netzleistung auf AC-Leitungsmessung<br />5. Einführung eines Echtzeitsteuerungsmodus (App nicht verfügbar)<br />6. Optimierung des Tiefstandby-Modus<br />7. Verbesserung des Parallelbetriebs<br />8. Reduzierung des Standby-Verbrauchs |
| 2025/08/04 | V1.00.43 | 1. Einführung von Parallelbetrieb, Netzparameter- und Grid-Regel-Einstellungen; Erhöhung der Einspeiseleistung auf 3600 W<br />2. LED-Steuerung und Bypass-Relais-Optimierung<br />3. Erhöhung der Entladeleistung auf 0,6P; Optimierung der SOC-Verteilung mehrerer Batteriemodule; AC-Ladeleistung standardmäßig 2400 W<br />4. Verbesserung des Niedriglade-SOC (2,8 %), Heiz- und MOS-Temperatursteuerung<br />5. Verbesserung des Überlastschutzes und Fehlerverhaltens<br />6. Firmware-Update ab SOC ≥ 5 % erlaubt; Optimierung der Abschalt- und Protokollfunktionen<br />7. Verbesserung von Echtzeit- und Zeitsteuerungsmodus |
| 2025/06/17 | V1.00.35 | / |
| 2025/06/04 | V1.00.32 | / |


### BMS MB

| Veröffentlichungsdatum | Versionsnummer | Änderungsübersicht |
| ---------------------- | -------------- | ------------------- |
| 2026/05/12 | V1.00.45 | 1. Optimierung des Batterie-Schutz- und Betriebsverhaltens |
| 2026/02/11 | V1.00.42 | 1. Optimierung des SOC-Algorithmus |
| 2026/01/21 | V1.00.38 | 1. Optimierung des SOC-Algorithmus |
| 2025/11/28 | V1.00.35 | 1. Optimierung der Update-Logik |
| 2025/10/04 | V1.00.33 | 1. Optimierung der Selbsttestlogik<br />2. Verbesserung des Standby-Verbrauchs<br />3. Hinzufügen der Vorladefunktion |
| 2025/07/31 | V1.00.30 | 1. Optimierung der Ladeerkennung, Stabilität der Update-Kommunikation und Verbesserung des Entladeschutzes |
| 2025/06/16 | V1.00.25 | / |
| 2025/05/30 | V1.00.22 | / |

### BMS SLAVE

| Veröffentlichungsdatum | Versionsnummer | Änderungsübersicht |
| ---------------------- | -------------- | ------------------- |
| 2026/05/12 | V1.10.45 | 1. Optimierung des Batterie-Schutz- und Betriebsverhaltens |
| 2026/02/11 | V1.10.42 | 1. Optimierung des SOC-Algorithmus |
| 2026/01/21 | V1.10.38 | 1. Optimierung des SOC-Algorithmus |
| 2025/11/28 | V1.10.35 | 1. Optimierung der Update-Logik |
| 2025/10/04 | V1.10.33 | 1. Optimierung der Selbsttestlogik<br />2. Verbesserung des Standby-Verbrauchs<br />3. Hinzufügen der Vorladefunktion |
| 2025/07/31 | V1.10.30 | 1. Optimierung der Ladeerkennung, Stabilität der Update-Kommunikation und Verbesserung des Entladeschutzes |
| 2025/06/16 | V1.10.25 | / |
| 2025/06/04 | V1.10.23 | / |


### DCDC

| Veröffentlichungsdatum | Versionsnummer | Änderungsübersicht |
| ---------------------- | -------------- | ------------------- |
| 2026/05/29 | V1.01.75 | 1. Optimierung des Problems der Leistungsbegrenzung beim Laden mehrerer Batteriemodule |
| 2026/05/10 | V1.01.73 | 1. Optimierung der Betriebslogik |
| 2026/03/20 | V1.01.64 | 1. Behebung eines Kommunikationsverlusts bei Batteriemodulen im Tiefstandby |
| 2026/03/04 | V1.01.62 | 1. Optimierung der Kommunikation mit Batteriemodulen |
| 2026/02/11 | V1.01.61 | 1. Optimierung der Kommunikation mit Batteriemodulen |
| 2026/01/21 | V1.01.59 | 1. Behebung von SOC-Ungleichgewicht bei geringer Entladeleistung |
| 2025/11/28 | V1.01.54 | 1. Behebung von PV-Leistungsbegrenzung in bestimmten Szenarien<br />2. Optimierung der Update-Logik |
| 2025/11/04 | V1.01.51 | 1. Optimierung der Bypass-Logik |
| 2025/10/14 | V1.01.48 | 1. Optimierung der PV-Lade- und Heizfolienlogik |
| 2025/08/27 | V1.01.39 | / |
| 2025/07/31 | V1.01.36 | 1. Einführung von Rückstromschutz, Optimierung der Entladeleistung, Lösung von Überstromproblemen beim Laden, intelligente Schwachlicht-Erkennung, verbesserter Überlastschutz |
| 2025/06/17 | V1.01.28 | / |
| 2025/06/04 | V1.01.23 | / |


### INV

| Veröffentlichungsdatum | Versionsnummer | Änderungsübersicht |
| ---------------------- | -------------- | ------------------- |
| 2026/05/12 | V1.38 | 1. Unterstützung für netzunabhängige Mikro-Wechselrichter (max. 1200 W)<br />2. Behebung eines Problems mit fehlerhafter Netzanbindung in bestimmten Szenarien<br />3. Optimierung eines Fehlalarms nach vollständiger PV-Ladung |
| 2026/04/10 | V1.36 | 1. Behebung eines Problems, bei dem der Wechselrichter im Netzbetrieb nicht lädt/entlädt |
| 2026/02/11 | V1.35 | 1. Optimierung der Ladelogik |
| 2026/01/21 | V1.34 | 1. Behebung eines Problems mit Bypass-Trennung in bestimmten Szenarien |
| 2025/12/10 | V1.32 | 1. Optimierung des Echtzeitsteuerungsmodus |
| 2025/11/04 | V1.30 | 1. Unterstützung eines fünften Erweiterungsbatteriemoduls (App derzeit nicht unterstützt) |
| 2025/10/21 | V1.29 | / |
| 2025/10/04 | V1.28 | 1. Optimierung des Inselnetzschutzes, der Off-Grid-Entladung und der Leistungsreduzierung |
| 2025/09/16 | V1.22 | / |
| 2025/07/08 | V1.21 | Optimierung von Ladeverhalten, Unterspannungsschutz, Überstromschutz, Anpassung an regionale Vorschriften, verbesserte Off-Grid-Leistung, optimierte Schwachnetz-Fähigkeit, Standardisierung der Regler |
| 2025/06/02 | V1.16 | / |

---

## BK1600

### CMS

| Veröffentlichungsdatum | Versionsnummer | Änderungsübersicht |
| ---------------------- | -------------- | ------------------- |
| 2026/03/06 | V1408.0C.104A | 1. Unterstützung für Stromleser-Zähler (Infrarot-Zählerausleser)<br />2. Unterstützung für HomeWizard P1-Zähler<br />3. Unterstützung für Shelly Plug Gen1<br />4. Hinzufügen von Zähler-Offset-Einstellungen |
| 2026/01/19 | V1407.0B.1049 | 1. Optimierung der Kommunikationslogik |
| 2025/12/12 | V1406.0B.1047 | 1. Unterstützung von Solarman Smart Plug, Shelly Plug S MTR Gen3 und Shelly 3EM<br />2. Optimierung der Betriebslogik |
| 2025/10/23 | V1401.0B.0042 | 1. Optimierung von OpenData<br />2. Optimierung der Betriebslogik |
| 2025/07/22 | V130A.09.003A | / |
| 2025/06/24 | V1.3.09_R006.062_M4848_00000034 | / |
| 2024/11/25 | V1.3_R006.002_M4848_00000021 | / |

### Pfile

| Veröffentlichungsdatum | Versionsnummer | Änderungsübersicht |
| ---------------------- | -------------- | ------------------- |
| 2025/12/29 | V06.00.09 | Hinzufügen eines Bypass-Steuerschalters |
| 2025/11/14 | V06.00.08 | Hinzufügen eines Bypass-Steuerschalters |
| 2025/09/02 | V06.00.06 | / |
| 2024/11/20 | V06.00.05 | 1. Aktualisierung der Batterie-Datenpunkte<br />2. Optimierung der Zeitsteuerung |

### EMS

| Veröffentlichungsdatum | Versionsnummer | Änderungsübersicht |
| ---------------------- | -------------- | ------------------- |
| 2026/05/22 | V1.00.19 | 1. Optimierung der Leistungsberechnung<br />2. Optimierung der PV-Logik bei 100 % SOC<br />3. AC-Ladefreigabe nur unter SOC 5 %<br />4. Hinzufügen eines automatischen Volllade-Schalters |
| 2026/02/09 | V1.00.16 | 1. PV-Überschussweiterleitung an andere Geräte im Parallelbetrieb<br />2. Optimierung der Logik im Echtzeit-Steuerungsmodus |
| 2025/08/28 | V1.00.14 | 1. Systemoptimierung: Verbesserung der Stabilität und Leistungsaufteilung im Multi-Geräte-Verbund<br />2. Funktionsverbesserung: Hinzufügen von kritischem Lastschutz, planmäßiger Vollladung zur Wartung sowie Tiefstandby (ersetzt Abschaltung), zur Verlängerung der Batterielebensdauer<br />3. Benutzererlebnis: flexiblere Aufweckbedingungen und intelligenteres Verhalten im Netz-/Inselbetrieb<br />4. Protokollierung & Upgrade: Hinzufügen von Abschaltprotokollen; Einstellungen bleiben nach Updates erhalten<br />5. Protokoll-Update: interne Kommunikationsprotokolle aktualisiert |
| 2025/06/26 | V1.00.13 | / |
| 2025/06/11 | V1.00.12 | / |
| 2024/11/26 | V1.00.09 | / |

### BMS

| Veröffentlichungsdatum | Versionsnummer | Änderungsübersicht |
| ---------------------- | -------------- | ------------------- |
| 2025/06/11 | V1.0.35 | Verbesserung der SOC-Genauigkeit im Standby-Modus |
| 2024/10/31 | V1.0.34 | / |

### MPPT

| Veröffentlichungsdatum | Versionsnummer |
| ---------------------- | -------------- |
| 2025/09/29 | V3.17 |
| 2025/06/11 | V3.16 |
| 2024/08/03 | V3.14 |

### INV

| Veröffentlichungsdatum | Versionsnummer | Änderungsübersicht |
| ---------------------- | -------------- | ------------------- |
| 2026/07/22 | V1.22 | 1. Optimierung der Nulldurchgangsschaltung des Relais<br/>2. Optimierung des Relaisbetriebs beim Umschalten zwischen Laden und Entladen, ohne das Relais auszuschalten<br/>3. Begrenzung der Mindestfrequenz der DCDC-Hiccup-Funktion auf 100K |
| 2026/05/22 | V1.21 | 1. Optimierung der Betriebslogik des Netzrelais |
| 2025/05/08 | V1.20 | / |
| 2025/05/06 | V1.19 | / |
| 2024/08/14 | V1.18 | 1. Optimierung des DC/DC-Regelkreises beim Laden<br />2. Verbesserung der Filterung von Daten-Uploads |

---

## BK1600 Ultra

### CMS

| Veröffentlichungsdatum | Versionsnummer | Änderungsübersicht |
| ---------------------- | -------------- | ------------------- |
| 2026/03/06 | V1408.0C.104A | 1. Unterstützung für Stromleser-Zähler (Infrarot-Zählerausleser)<br />2. Unterstützung für HomeWizard P1-Zähler<br />3. Unterstützung für Shelly Plug Gen1<br />4. Hinzufügen von Zähler-Offset-Einstellungen |
| 2026/01/19 | V1407.0B.1049 | 1. Optimierung der Kommunikationslogik |
| 2025/12/12 | V1406.0B.1047 | 1. Unterstützung von Solarman Smart Plug, Shelly Plug S MTR Gen3 und Shelly 3EM<br />2. Optimierung der Betriebslogik |
| 2025/10/23 | V1401.0B.0042 | 1. Optimierung von OpenData<br />2. Optimierung der Betriebslogik |
| 2025/07/22 | V130A.09.003A | / |
| 2025/06/24 | V1.3.09_R006.062_M4848_00000034 | / |
| 2024/11/25 | V1.3_R006.002_M4848_00000021 | / |

### Pfile

| Veröffentlichungsdatum | Versionsnummer | Änderungsübersicht |
| ---------------------- | -------------- | ------------------- |
| 2025/12/29 | V06.00.09 | Hinzufügen eines Bypass-Steuerschalters |
| 2025/11/14 | V06.00.08 | Hinzufügen eines Bypass-Steuerschalters |
| 2025/09/02 | V06.00.06 | / |
| 2024/11/20 | V06.00.05 | 1. Aktualisierung der Batterie-Datenpunkte<br />2. Optimierung der Zeitsteuerung |

### EMS

| Veröffentlichungsdatum | Versionsnummer | Änderungsübersicht |
| ---------------------- | -------------- | ------------------- |
| 2026/05/22 | V2.00.09 | 1. Optimierung der Leistungsberechnung<br />2. Optimierung der PV-Logik bei 100 % SOC<br />3. AC-Ladefreigabe nur unter SOC 5 %<br />4. Hinzufügen eines automatischen Volllade-Schalters |
| 2025/11/27 | V2.00.04 | 1. Freigabe der Bypass-Leistung auf 10 A |
| 2025/09/29 | V2.00.03 | 1. Optimierung der Parallelbetrieb-Logik<br />2. Unterstützung von Tiefstandby für Slave-Geräte im kabelgebundenen Parallelbetrieb |
| 2025/09/12 | V2.00.02 | 1. SOC-Berechnung auf Abrunden umgestellt<br />2. Zähler-Refresh alle 3 Sekunden<br />3. Leistungsaufteilung für Slave-Geräte nach Limit<br />4. Null-Leistung ermöglicht Entladung<br />5. Keine Fehlerprüfung für Mikro-Wechselrichter<br />6. Neue Abschaltprotokolle<br />7. Upgrade-Kompatibilität verbessert<br />8. Erweiterte Statusanzeigen (z. B. Recharging)<br />9. Verbesserter Überlastschutz mit Redundanz<br />10. Leitungsleistung inkl. Bypass<br />11. Kritische Last nur über Bypass<br />12. Standby → Tiefschlaf geändert<br />13. Optimierung Tiefstandby-Logik<br />14. Zeitgesteuertes Vollladen hinzugefügt<br />15. Modbus auf V2.3 aktualisiert<br />16. Fehler im Parallelbetrieb beim Entladen behoben |
| 2025/06/26 | V2.00.01 | / |
| 2025/03/07 | V2.00.00 | / |

### BMS

| Veröffentlichungsdatum | Versionsnummer |
| ---------------------- | -------------- |
| 2025/03/07 | V1.00.35 |

### MPPT

| Veröffentlichungsdatum | Versionsnummer |
| ---------------------- | -------------- |
| 2025/09/29 | V3.17 |
| 2025/03/07 | V3.16 |

### INV

| Veröffentlichungsdatum | Versionsnummer | Änderungsübersicht |
| ---------------------- | -------------- | ------------------- |
| 2025/05/22 | V2.31 | 1. Optimierung der Betriebslogik des Netzrelais |
| 2025/08/28 | V2.21 | / |
| 2025/06/26 | V2.17 | / |
| 2025/06/20 | V2.15 | / |
| 2025/03/07 | V2.07 | / |