---
title: Overzicht van apparaat en aansluitingen
description: Guide
---

# Overzicht van apparaat en aansluitingen

## Uiterlijk

<img src={require("./img/appearance.png").default} width="480"/>

| Nr. | Functie                                                                                   |
| --- | ----------------------------------------------------------------------------------------- |
| 1   | LED voor bedrijfsstatus                                                                   |
| 2   | Aan/uit-knop                                                                              |
| 3   | Draadloze modules                                                                         |
| 4   | MC4-aansluiting voor PV-ingang 1                                                          |
| 5   | MC4-aansluiting voor PV-ingang 2                                                          |
| 6   | MC4-aansluiting voor PV-ingang 3                                                          |
| 7   | MC4-aansluiting voor PV-ingang 4                                                          |
| 8   | Netgekoppelde terminal                                                                    |
| 9   | Backup-terminal                                                                           |
| 10  | Bevestigingsgat voor beschermingsgeleider (beschermingsgeleider moet minimaal 4 mm² zijn) |
| 11  | Beugelbevestiging                                                                         |

:::info
Het ECO-model beschikt niet over poorten 4–7.
:::

---

## Knop

| Actie                    | Functie                         |
| ------------------------ | ------------------------------- |
| 2 seconden ingedrukt (uit) | Apparaat inschakelen            |
| 2 seconden ingedrukt (aan) | Apparaat uitschakelen           |
| 10 seconden ingedrukt (aan) | Bluetooth en Wi-Fi resetten     |

---

## LED-indicatoren

| LED | Beschrijving                              | Status            |
| :--------------------------------------------------------------------: | ------------------------- | ------------ |
| <img src={require("./img/led-starting.png").default} style={{ height: 150 }}/> | Blauwe LED licht op van midden naar boven en beneden | Opstarten        |
| <img src={require("./img/led-charging.png").default} style={{ height: 150 }}/> | Groene LED loopt omhoog vanaf huidig niveau          | Opladen          |
| <img src={require("./img/led-discharging.png").default} style={{ height: 150 }}/> | Blauwe LED loopt omlaag vanaf huidig niveau          | Ontladen         |
| <img src={require("./img/led-iot-failure.png").default} style={{ height: 150 }}/> | Gele LED                                             | IoT-verbindingsfout |
| <img src={require("./img/led-fault.png").default} style={{ height: 150 }}/> | Rode LED                                             | Storing          |
| <img src={require("./img/led-shutdown.png").default} style={{ height: 150 }}/> | Blauwe LED beweegt van buiten naar midden            | Uitschakelen     |
| <img src={require("./img/led-reset.png").default} style={{ height: 150 }}/> | Blauwe LED knippert drie keer                        | Reset geslaagd   |