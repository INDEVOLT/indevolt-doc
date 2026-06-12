---
title: Remplacement d’accessoire
description: Remplacez le module WiFi + LAN et migrez les paramètres ainsi que les données historiques de l’appareil.
---

# Remplacement d’accessoire

Ce guide s’applique aux modèles suivants :

- PowerFlex 2000
- PowerFlex 2000 Eco
- PowerFlex 3000 AC
- PowerFlex 3000 Hybrid
- SolidFlex 2000
- SolidFlex 2000 Eco
- SolidFlex 3000 AC

## Préparation

Assurez-vous que l’emballage est intact. Ouvrez la boîte, retirez tous les accessoires et vérifiez que leur quantité et leur modèle correspondent à la liste de colisage.

<img src={require("./img/packing_list.png").default} width="960"/>

---

## Étape 1. Retirer l’ancien module

:::warning
Avant de remplacer le module, assurez-vous que l’appareil est hors tension.
:::

**1. Retirer les vis de fixation**

Utilisez le tournevis fourni pour retirer les 6 vis qui maintiennent le module en place.

> Remarque : Conservez soigneusement les vis, car elles seront réutilisées lors de l’installation du nouveau module.

<img src={require("./img/remove_screws.png").default} width="360"/>

**2. Retirer l’ancien module**

Tirez délicatement le module dans le sens du logement afin de le retirer.

<img src={require("./img/remove_module.png").default} width="360"/>

**3. Déconnecter le câble de communication**

Appuyez sur le clip du connecteur, puis débranchez délicatement le câble de communication.

<img src={require("./img/unplug_cable.png").default} width="360"/>

:::tip
Après avoir retiré le module, vérifiez que les trous de fixation du nouvel accessoire correspondent bien à ceux du logement de l’appareil.

<img src={require("./img/model_confirmation.png").default} width="360"/>
:::

---

## Étape 2. Installer le nouveau module

**1. Connecter le câble de communication**

Branchez le câble de communication sur le connecteur correspondant de la nouvelle carte électronique et assurez-vous qu’il est correctement fixé.

<img src={require("./img/connect_cable.png").default} width="360"/>

**2. Installer le nouveau module**

Alignez le nouveau module avec le logement, puis poussez-le délicatement jusqu’à ce qu’il soit complètement inséré.

<img src={require("./img/install_module.png").default} width="360"/>

**3. Fixer le module**

Réinstallez les 6 vis retirées précédemment et serrez-les à l’aide du tournevis.

<img src={require("./img/fasten_screws.png").default} width="360"/>

**4. Vérifier l’installation**

Assurez-vous que :

- Le module est entièrement inséré.
- Toutes les vis sont correctement serrées.
- Le capot est solidement fixé et ne présente aucun jeu.

<img src={require("./img/check_installation.png").default} width="360"/>

**5. Coller la nouvelle étiquette de numéro de série**

Utilisez la nouvelle étiquette SN fournie dans l’emballage pour recouvrir l’étiquette de numéro de série d’origine de l’appareil. L’application identifiera désormais l’appareil à l’aide du nouveau numéro de série.

Assurez-vous que les deux emplacements suivants sont correctement recouverts :

- L’étiquette de numéro de série située dans l’angle supérieur droit de l’appareil

  <img src={require("./img/cover_sn1.png").default} width="720"/>

- L’étiquette signalétique située sur le côté de l’appareil

  <img src={require("./img/cover_sn2.png").default} width="600"/>

---

## Étape 3. Mise à jour dans l’application

:::tip
Avant de commencer, assurez-vous que :

- Le Bluetooth est activé sur votre téléphone.
- L’appareil est sous tension.
- Votre téléphone reste à proximité de l’appareil pendant toute l’opération.
:::

### 1. Mettre à jour les informations de l’appareil

1. Sur la page des paramètres de l’appareil, appuyez sur **Remplacement D’accessoire**.

2. Scannez le code QR présent sur le nouveau module.

3. Appuyez sur **Suivant**, vérifiez les informations affichées dans **Confirmation du Remplacement**, puis appuyez sur **OK** pour continuer.

4. Attendez la fin du processus de remplacement.

   > Pendant cette étape, le système met automatiquement à jour les informations du nouveau module et migre les paramètres de l’appareil, notamment les paramètres de cluster, les paramètres de source de charge ainsi que les appareils associés.

5. Une fois la mise à jour terminée, appuyez sur **Suivant** pour continuer.

<img src={require("./img/accessory_replacement.png").default} width="240"/>
<img src={require("./img/scan_qr_code.png").default} width="240"/>
<img src={require("./img/accessory_info.png").default} width="240"/>
<img src={require("./img/confirm_replacement.png").default} width="240"/>
<img src={require("./img/connect_accessory.png").default} width="240"/>
<img src={require("./img/connect_accessory_success.png").default} width="240"/>

### 2. Migrer les données historiques

Appuyez sur **Démarrer la Migration** pour lancer la migration des données historiques.

Si vous ne souhaitez pas effectuer la migration immédiatement, appuyez sur **Passer**. Vous pourrez également lancer la migration ultérieurement depuis [l’historique des remplacements](#4-consulter-lhistorique-des-remplacements).

<img src={require("./img/data_sync.png").default} width="240"/>
<img src={require("./img/skip_data_sync.png").default} width="240"/>

### 3. Reconnecter l’appareil au réseau

1. Saisissez le nom du réseau Wi-Fi (SSID) et son mot de passe, puis appuyez sur **Configurer**.
2. Attendez que la connexion réseau soit établie avec succès.

<img src={require("./img/wifi_settings.png").default} width="240"/>
<img src={require("./img/wifi_connected.png").default} width="240"/>

---

## 4. Consulter l’historique des remplacements

Pour consulter l’historique des remplacements, accédez à **Paramètres > Remplacement D’accessoire**

Dans **Historique des Remplacements**, vous pouvez :

- Consulter l’historique des remplacements, y compris la date du remplacement, l’état de la migration des paramètres et l’état de la migration des données historiques.
- Appuyer sur **Démarrer la Migration** dans l’enregistrement correspondant pour accéder à la page de migration de l’appareil. Si la migration des données historiques n’a pas encore été lancée, vous pouvez la démarrer depuis cette page.

<img src={require("./img/accessory_replacement.png").default} width="240"/>
<img src={require("./img/replacement_history.png").default} width="240"/>
<img src={require("./img/device_migration.png").default} width="240"/>

:::info
Une fois lancée, la migration des données historiques s’effectue automatiquement via le cloud. Il n’est pas nécessaire de rester sur la page de migration pendant le processus.

Vous pouvez consulter à tout moment l’avancement et l’état de la migration dans **Historique des Remplacements**.
:::