---
title: Ajouter des appareils
description: Ajoutez vos appareils pour la gestion et la surveillance des données.
---

# Ajouter des appareils

Lorsque vous vous connectez pour la première fois, l'application créera automatiquement une maison par défaut, utilisée pour gérer tous vos appareils.

INDEVOLT prend actuellement en charge les marques suivantes :
- INDEVOLT
- SOLARMAN
- Deye
- EverHome
- Shelly

Les méthodes d’ajout et de configuration peuvent varier selon la marque ou le modèle de l’appareil. Lors de l’utilisation réelle, veuillez suivre les instructions et les indications affichées dans l’App.


## Étape 1 : Appuyez sur « Ajouter un appareil »

Appuyez sur le bouton **Ajouter un appareil**, ou sur l’icône **+** > **Ajouter un appareil**  en haut à droite.

<img src={require("./img/add_device.png").default} width="240"/>

## Étape 2 : Sélectionnez votre appareil

:::tip Avant de commencer

1. Activez le Bluetooth de votre téléphone afin que l'application puisse se connecter à l'appareil. Si le Bluetooth est désactivé, l'application vous invitera à l'activer.  
2. Trouvez le code QR et le numéro de série (SN) sur votre appareil.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="scan" label="Méthode 1 : Scanner le code QR" default>
  
  1. Appuyez sur **l'icône de scan** en haut à droite de l'application.  
  2. Scannez le code QR sur votre appareil ou saisissez le SN manuellement.

      <img src={require("./img/discover_devices.png").default} width="240"/>
      <img src={require("./img/scan_qr_code.png").default} width="240"/>
      <img src={require("./img/connecting_device.png").default} width="240"/>

  </TabItem>

  <TabItem value="bluetooth" label="Méthode 2 : Découverte Bluetooth">

  :::info
  La découverte Bluetooth prend actuellement en charge les appareils SOLARMAN, INDEVOLT et IZYPOWER. Appuyez sur **Voir les appareils prenant en charge la découverte Bluetooth** dans l'application pour plus de détails.
  :::

  1. Assurez-vous que le Bluetooth est activé. S'il est désactivé, l'application vous demandera de l'activer.  
  2. L'application scannera automatiquement et affichera les appareils Bluetooth à proximité. **Sélectionnez votre appareil** en fonction du nom du produit et du SN.

      <img src={require("./img/discover_devices.png").default} width="240"/>
      <img src={require("./img/connecting_device.png").default} width="240"/>

  </TabItem>

  <TabItem value="manual" label="Méthode 3 : Ajouter manuellement">

  1. Sélectionnez la **marque** de l'appareil.  
  2. Sélectionnez le **modèle** spécifique sous cette marque.  
  3. Scannez le **code QR** sur votre appareil ou saisissez le SN manuellement.

      <img src={require("./img/discover_devices.png").default} width="240"/>
      <img src={require("./img/select_device.png").default} width="240"/>
      <img src={require("./img/scan_qr_code.png").default} width="240"/>
      <img src={require("./img/connecting_device.png").default} width="240"/>

  </TabItem>
</Tabs>

## Étape 3 : Configurez le réseau

1. Assurez-vous que votre téléphone est connecté au Wi-Fi de votre maison et que **le réseau** affiché correspond à celui que vous souhaitez utiliser. Saisissez le **mot de passe** Wi-Fi.  
2. Si votre téléphone est connecté au Wi-Fi mais que le système ne le trouve pas, vous pouvez saisir manuellement le SSID et le mot de passe.
3. Après avoir confirmé que tout est correct, appuyez sur **Configurer**.
   <img src={require("./img/select_wifi.png").default} width="240"/>

4. L'appareil est ajouté avec succès.
   <img src={require("./img/wifi_connected.png").default} width="240"/>

5. *(Optionnel)* Vous pouvez ajouter des appareils liés en suivant les mêmes étapes. Si vous souhaitez le faire plus tard, appuyez sur le bouton **\<** en haut à gauche pour quitter.
   <img src={require("./img/link_device.png").default} width="240"/>

:::info

1. Veuillez utiliser un réseau Wi-Fi 2,4G lors de la configuration. Les réseaux 5G ne sont pas pris en charge.  
2. Après l'ajout d'un appareil, il peut s'écouler quelques minutes avant que les données n'apparaissent dans l'application.

:::

:::tip

Si la configuration échoue, veuillez vérifier ce qui suit et réessayer :

1. Assurez-vous que le Wi-Fi et le Bluetooth sont activés sur votre téléphone.  
2. Vérifiez que votre Wi-Fi domestique dispose d'un accès Internet.  
3. Assurez-vous que votre routeur n'a pas activé de liste noire/liste blanche.  
4. Essayez de réduire la distance entre votre téléphone et l'appareil.  
5. Essayez un autre réseau Wi-Fi.  
6. Supprimez les caractères spéciaux tels que ( , ; ‘ ’ = “ ” ` ) du nom du Wi-Fi.

:::

## Étapes suivantes

Après avoir ajouté votre appareil, vous pouvez :

- Consulter les données de l'appareil dans les onglets **[Accueil](./home.md)** et **[Rapport](./report.md)**.  
- Gérer tous les appareils dans l'onglet **[Appareil](./device.md)**.  
- Définir des plans de charge/décharge intelligents dans l'onglet **[Intelligent](./smart.md)**.
