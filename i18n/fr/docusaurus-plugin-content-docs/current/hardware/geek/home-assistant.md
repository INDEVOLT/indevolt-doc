---
title: Intégration Home Assistant
description: Intégrer le système de stockage INDEVOLT à Home Assistant pour un contrôle et un suivi local.
toc_max_heading_level: 2
---

# Intégration Home Assistant

## Prérequis

### 1️⃣ Environnement Home Assistant

Home Assistant doit être installé conformément au [guide officiel](https://www.home-assistant.io/installation/).


### 2️⃣ Réseau local identique

Le système et le serveur Home Assistant doivent être connectés au même réseau local.


### 3️⃣ Adresse IP de l’appareil

Assurez-vous que l’appareil Indevolt est allumé et a obtenu une adresse IP. Vous pouvez la récupérer de plusieurs façons :

**🧩 Méthode 1 – via le routeur**

Connectez-vous à l’interface du routeur et consultez la liste des appareils connectés.


**🧩 Méthode 2 – via l’application INDEVOLT**

Dans les paramètres de l’appareil :

<img src={require("./img/select-network.png").default} width="240"/>
<img src={require("./img/view_ip.png").default} width="240"/>


**🧩 Méthode 3 – via diffusion UDP (avancé)**

1. Assurez-vous que le PC et l’appareil sont sur le même réseau local.  
2. Ouvrez un outil de diagnostic réseau.  
3. Sélectionnez le protocole **UDP**.  
4. Définissez Local Host Addr.  
5. Définissez le port local sur **10000**.  
6. Cliquez sur **Open**.  

   <img src={require("./img/udp-settings.png").default} width="120"/>

7. Configurez l’adresse de diffusion : **255.255.255.255:8099**  

   <img src={require("./img/set-udp-remote.png").default} width="480"/>

8. Saisissez la commande AT : **AT+IGDEVICEIP**  
9. Cliquez sur **Send**.  

   <img src={require("./img/send-at-command.png").default} width="360"/>

10. L’appareil renverra son adresse IP et son numéro de série (SN).

    <img src={require("./img/udp-message.png").default} width="360"/>


### 4️⃣ Activer l’API locale

L’appareil Indevolt doit avoir l’API locale activée.

OpenData propose trois modes, mais seule la méthode HTTP est supportée :

- HTTP
- HTTP Digest
- HTTPS (non pris en charge pour le moment)

Configuration dans l’application INDEVOLT :

<img src={require("./img/profile_page.png").default} width="200"/>
<img src={require("./img/scan_qr_code.png").default} width="200"/>
<img src={require("./img/connect_device.png").default} width="200"/>
<img src={require("./img/device_connected.png").default} width="200"/>
<img src={require("./img/select_local_api.png").default} width="200"/>
<img src={require("./img/local_api2.png").default} width="200"/>


### 5️⃣ Version minimale du firmware

Assurez-vous que le firmware est supérieur ou égal aux versions ci-dessous :

| Modèle                          | Version minimale                |
| ------------------------------- | ------------------------------- |
| BK1600 / BK1600 Ultra           | V1.3.0A_R006.072_M4848_00000039 |
| SolidFlex 2000 / PowerFlex 2000 | CMS : V1406.07.002E             |


## Étape 1 – Télécharger l’intégration Indevolt {#step1}

1. Accédez au [dépôt GitHub](https://github.com/INDEVOLT/homeassistant-indevolt).  
2. Cliquez sur **Code > Download ZIP**.  
   <img src={require("./img/download-zip.png").default} width="240"/>

3. Décompressez le fichier ZIP.


## Étape 2 – Localiser le dossier de configuration {#step2}

- Home Assistant OS : `/config`
- Home Assistant Container : dossier contenant `configuration.yaml`

:::tip

Le répertoire doit contenir le fichier `configuration.yaml`.

```
configuration directory/
└── configuration.yaml
```
:::

## Étape 3 – Créer le dossier custom_components {#step3}

1. Accédez au config directory.
2. Créez le dossier `custom_components` (s’il n’existe pas déjà).

```
config directory/
├── custom_components/
└── configuration.yaml
```


:::info
Toutes les intégrations personnalisées doivent être placées dans `custom_components`, sinon Home Assistant ne pourra pas les détecter.
:::


## Étape 4 – Ajouter les fichiers {#step4}

Copiez l’intégralité du dossier `indevolt` décompressé dans le répertoire `custom_components`.

```
config directory/
└── custom_components/
    ├── indevolt/
       ├── __init__.py
       ├── manifest.json
       ├── ...
```

## Étape 5 – Redémarrer Home Assistant {#step5}

1. Dans l’interface Web, allez dans **Settings** > **System**.
   <img src={require("./img/select-ha-settings.png").default} width="720"/>

2. Cliquez sur l’icône de redémarrage en haut à droite.
   <img src={require("./img/click-restart-icon.png").default} width="480"/>

3. Cliquez sur **Restart Home Assistant**.
   <img src={require("./img/restart-ha.png").default} width="360"/>

4. Cliquez sur **RESTART**.
   <img src={require("./img/click-restart.png").default} width="360"/>


## Étape 6 – Ajouter l’intégration {#step6}

1. Après le redémarrage, accédez à l’interface Web et allez dans **Settings** > **Devices & Services**.
   <img src={require("./img/select-device-service.png").default} width="720"/>

2. Cliquez sur **+ ADD INTEGRATION** en bas à droite.
   <img src={require("./img/add-integration.png").default} width="180"/>

3. Recherchez l’intégration **indevolt**.
   <img src={require("./img/search-integration.png").default} width="360"/>

4. Configurez les paramètres :
   - `host` : adresse IP de l’appareil, disponible via le routeur ou l’application.
   - `scan_interval` : fréquence de mise à jour des données. Il est recommandé de le définir entre 5 et 30 secondes. La valeur par défaut est de 30 secondes.

   <img src={require("./img/set-integration.png").default} width="300"/>

5. Cliquez sur **Submit** pour terminer l’installation.

6. Une fois l’installation terminée, les modules d’alimentation et les packs batterie seront affichés. Cliquez sur **Skip and Finish** pour finaliser la configuration.

   - Chaque module d’alimentation peut prendre en charge jusqu’à 5 packs batterie.
   - Si aucun pack n’est connecté, le champ affichera `None`.
   - Une fois connectés, le numéro de série (SN) de chaque pack sera affiché pour identification.

   <img src={require("./img/finish.png").default} width="360"/>


## Afficher l’intégration

L’intégration apparaît dans la liste après installation réussie.

   <img src={require("./img/view-integration.png").default} width="360"/>
   <img src={require("./img/view-device.png").default} width="720"/>


## Mise à jour

1. Télécharger la nouvelle version  
2. Remplacer le dossier `indevolt`  
3. Supprimer l’intégration dans Home Assistant  
4. Redémarrer  
5. Réajouter l’intégration  

## Mise à jour de l’intégration

1. Téléchargez la dernière version du package de l’intégration.
2. Remplacez les fichiers dans le répertoire `custom_components`/`indevolt`.
3. Cliquez sur le menu à trois points à droite de l’appareil déjà ajouté, puis sélectionnez **Delete** pour supprimer l’appareil.
   <img src={require("./img/delete-device.png").default} width="720"/>
4. Redémarrez Home Assistant.
5. Cliquez sur **Add Entry**, puis ajoutez à nouveau l’appareil en suivant le même processus d’ajout.


## Créer une automatisation : contrôle en temps réel

1. Accédez à **Settings** > **Automations & Scenes**.

   <img src={require("./img/automation.png").default} width="720"/>

2. Cliquez sur **+ Create Automation** en bas à droite.

   <img src={require("./img/create-automation1.png").default} width="720"/>

3. Sélectionnez **Create New Automation**.

   <img src={require("./img/create-automation2.png").default} width="360"/>

4. Cliquez sur **+ Add Trigger** et configurez les conditions de déclenchement selon vos besoins.

   <img src={require("./img/new-automation.png").default} width="540"/>

5. Cliquez sur **+ Add Action** pour définir l’action de l’appareil.

6. Recherchez “mode”, puis sélectionnez Set SolidFlex2000/PowerFlex2000 Work Mode (exemple).

   <img src={require("./img/search-mode.png").default} width="360"/>

7. Dans la section **Target**, cliquez sur **+ Choose Device**, puis sélectionnez votre appareil dans la liste.

   <img src={require("./img/choose-target1.png").default} width="720"/>
   <img src={require("./img/choose-target2.png").default} width="360"/>

8. Dans la section **Work Mode**, sélectionnez **Real-Time Control**, puis configurez **Status**, **Power** et **Target SOC** selon vos besoins.

   <img src={require("./img/set-mode1.png").default} width="360"/>
   <img src={require("./img/set-mode2.png").default} width="360"/>

9. Cliquez sur **Save** pour terminer la configuration de l’automatisation.

## FAQ

| Problème     | Solution          |
| --------------------- | ----------------------- |
| L’intégration n’apparaît pas dans la liste de recherche | Vérifiez le chemin : `custom_components/indevolt`         |
| Impossible de se connecter à l’appareil                 | 1. Vérifiez l’adresse IP.<br/>2. Vérifiez l’état du réseau de l’appareil.                                           |
| Aucune donnée affichée                                  | 1. Vérifiez l’alimentation de l’appareil.<br/>2. Vérifiez l’état du réseau.<br/>3. Consultez les journaux d’erreur. |
