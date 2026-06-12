---
title: Guide d’accès LoRa
description: Guide utilisateur pour connecter les équipements micro-stockage aux terminaux LoRa
---

# Guide d’accès LoRa

## Qu’est-ce que LoRa ?

LoRa (Long Range) est une technologie de communication sans fil à longue portée et faible consommation, basée sur une modulation à étalement de spectre (LPWAN). Elle consiste à “étendre” le signal sur une bande de fréquence plus large, ce qui permet une excellente résistance aux interférences et une très haute sensibilité de réception.

En termes simples, LoRa permet aux appareils de communiquer sans fil sur de longues distances. Contrairement au Wi-Fi ou au Bluetooth, il ne dépend pas du réseau domestique et ne nécessite pas de configuration complexe. C’est comme si les appareils disposaient d’un canal de communication dédié.

Grâce à LoRa, les équipements peuvent échanger automatiquement des données. Par exemple, un compteur peut transmettre les données de consommation au micro-stockage, qui ajuste ensuite automatiquement son fonctionnement. Tout cela se fait en arrière-plan, de manière transparente.

**Caractéristiques principales**

- Très longue portée : jusqu’à 10 à 20 km en conditions idéales (zones dégagées, rurales), voire plus  
- Très faible consommation : autonomie des équipements pouvant atteindre plusieurs années  
- Grande capacité : une passerelle peut connecter des milliers de terminaux  
- Coût réduit : faible coût des modules et du déploiement réseau  


## Différences entre le LoRa et le Wi-Fi

Le Wi-Fi peut être comparé à un réseau domestique haut débit, utilisé pour Internet ou le streaming. Il est rapide mais consomme davantage d’énergie et dépend du réseau.

LoRa, quant à lui, est conçu pour transmettre de petites quantités de données (consommation, état des appareils). Il est plus lent, mais couvre de plus longues distances, consomme très peu d’énergie et fonctionne indépendamment du réseau domestique.

En résumé :  
👉 Le Wi-Fi sert à se connecter à Internet  
👉 LoRa permet aux appareils de communiquer entre eux de manière autonome  


## Scénarios d’utilisation

- Environnements avec une mauvaise couverture réseau ou Wi-Fi insuffisant : sous-sols, greniers, etc.  
- Environnements à fortes interférences : salles techniques, centrales électriques, etc.  


## Appareils compatibles

Si la version du firmware est inférieure à celle indiquée ci-dessous, veuillez effectuer une mise à jour via l’application Indevolt.

<table><thead>
  <tr>
    <th>Appareil</th>
    <th>Modèle</th>
    <th>Version minimale du firmware</th>
  </tr></thead>
<tbody>
  <tr>
    <td>Micro-stockage</td>
    <td>SolidFlex 2000<br />PowerFlex 2000<br />SolidFlex 2000 Eco<br />PowerFlex 2000 Eco<br />PowerFlex 3000 Hybrid<br />PowerFlex 3000 AC<br />SolidFlex 3000 Hybrid<br />SolidFlex 3000 AC</td>
    <td>CMS : V1406.07.002B <br/>Pfile : V0D.00.11</td>
  </tr>
  <tr>
    <td rowspan="2">Compteur</td>
    <td>MR1-D5-WR</td>
    <td>V1.4.09_R00B.082_M051A_00000037</td>
  </tr>
  <tr>
    <td>MR3-D5-WR</td>
    <td>V1.4.09_R01C.0D2_M0515_00000016</td>
  </tr>
  <tr>
    <td>Lecteur infrarouge</td>
    <td>NIR-3</td>
    <td>V1.4.09_R016.082_M0000_0000001E</td>
  </tr>
</tbody>
</table>


## Étapes d’utilisation


### Connexion d’un terminal LoRa

:::info Préparation
Veuillez vérifier les conditions suivantes :
- Le micro-stockage est ajouté dans l’application INDEVOLT, allumé et en ligne  
- Le terminal LoRa est installé et alimenté  
:::

1. Ouvrez l’application INDEVOLT, puis cliquez sur “+” en haut à droite et sélectionnez l’appareil à ajouter (ex. : compteur).

   <img src={require("./img/click_add_device.png").default} width="200"/>
   <img src={require("./img/select_lora_device.png").default} width="200"/>

2. Scannez le QR code sur le compteur, puis cliquez sur **Connecter à l’appareil**.

   <img src={require("./img/connect_device.png").default} width="200"/>

3. Sélectionnez **Connexion sans fil LoRa**, choisissez le micro-stockage à associer, puis cliquez sur **Lier** et attendez la connexion.

   <img src={require("./img/select_lora.png").default} width="210"/>
   <img src={require("./img/select_bind_device.png").default} width="200"/>

4. Vérifier la connexion

   Accédez à la page de l’appareil, ouvrez le compteur, puis cliquez sur l’icône paramètres <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> en haut à droite. Sélectionnez **Paramètres du réseau** et vérifiez que le mode est bien **Connexion Sans Fil LoRa**.

   <img src={require("./img/tap_device.png").default} width="210"/>
   <img src={require("./img/device_setting.png").default} width="200"/>
   <img src={require("./img/network_setting.png").default} width="200"/>
   <img src={require("./img/network_info_lora.png").default} width="200"/>

   De plus, l’icône en haut à droite de la carte appareil indique le mode de connexion (Wi-Fi ou LoRa).

   <img src={require("./img/lora_icon.png").default} width="210"/>

---

### Changer la méthode de connexion (Wi-Fi / LoRa)

Pour modifier la méthode de connexion :

1. Accédez au compteur depuis la page appareil, puis cliquez sur l’icône paramètres <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> → **Paramètres du réseau** → **Changer la méthode de connexion**

   <img src={require("./img/tap_device.png").default} width="210"/>
   <img src={require("./img/device_setting.png").default} width="200"/>
   <img src={require("./img/network_setting.png").default} width="200"/>
   <img src={require("./img/switch_connection_method.png").default} width="200"/>

2. Cliquez sur **Connecter à l’appareil**, puis choisissez **Connexion Wi-Fi**.

   <img src={require("./img/connect_device.png").default} width="200"/>
   <img src={require("./img/select_wifi.png").default} width="210"/>

3. Sélectionnez le réseau Wi-Fi souhaité, configurez-le et attendez la connexion.

   <img src={require("./img/configure_wifi.png").default} width="200"/>

4. Retournez dans **Paramètres du réseau** pour vérifier que le mode est bien passé en Wi-Fi.

   <img src={require("./img/network_info_wifi.png").default} width="200"/>