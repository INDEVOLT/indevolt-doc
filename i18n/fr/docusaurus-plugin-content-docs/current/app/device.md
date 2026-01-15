---
title: Appareil
description: Gérer les appareils énergétiques domestiques et surveiller le statut et les données en temps réel.
---

# Appareil

La page **Appareil** affiche tous les appareils énergétiques de votre domicile, en listant des informations clés telles que le SN de l'appareil, le statut en ligne et l'heure de la dernière mise à jour des données. Appuyez sur le bouton **+** en haut à droite pour [ajouter un appareil](./add-device.md).

<img src={require("./img/device.png").default} width="240"/>

## 1. Modifier les appareils

Appuyez sur le bouton **Modifier** en bas de la page, sélectionnez un appareil, ou **appuyez longuement** sur une carte d’appareil pour entrer en mode édition. Les actions suivantes sont disponibles :
- WLAN : Appuyez sur **WLAN** pour configurer le réseau. Le processus est identique à [la configuration réseau](./add-device.md#étape-3--configurez-le-réseau) lors de l'ajout d'un appareil.
- Renommer : Appuyez sur **Renommer** pour changer le nom de l'appareil.
- Supprimer : Appuyez sur **Supprimer**. L'application affichera une fenêtre de confirmation. Après confirmation, l'appareil sera retiré. Une fois supprimé, vous ne pourrez plus consulter ses données – procédez avec prudence.

<img src={require("./img/device.png").default} width="240"/>
<img src={require("./img/edit_device2.png").default} width="240"/>

## 2. Détails de l’appareil

Appuyez sur une carte d’appareil pour accéder à sa page de détails. Cette page affiche des informations générales telles que la puissance du signal, le SN, les données en temps réel, la fonction de rafraîchissement rapide (⚡), ainsi que les paramètres et fonctionnalités spécifiques selon le type d'appareil.

<img src={require("./img/device_info.png").default} width="240"/>

## 3. Statistiques

Appuyez sur l’icône <img src={require("./img/statistics_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> en haut à droite de la page de détails pour accéder à la page Statistiques, où vous pouvez consulter les courbes de données selon les dimensions journalière, hebdomadaire, mensuelle et annuelle.

<img src={require("./img/statistics.png").default} width="240"/>

## 4. Paramètres de l’appareil

Appuyez sur l’icône <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> en haut à droite de la page de détails pour accéder à la page Paramètres. Cette section comprend le nom de l’appareil, les appareils liés, les paramètres réseau, la mise à jour du firmware et d'autres fonctions spécifiques à l’appareil.

<img src={require("./img/settings.png").default} width="240"/>

### 4.1 Changer le nom de l’appareil

Appuyez sur le champ **Nom de l’appareil** pour modifier l’affichage du nom dans l’application.

<img src={require("./img/change_deivce_name.png").default} width="240"/>

### 4.2 Lier appareil parent / sous-appareils

Pour simplifier la consultation et la gestion des données, le système permet d’établir des relations parent-enfant entre les appareils :

- Les **appareils de stockage** peuvent agir en tant qu’appareils parents et ajouter des sous-appareils liés.
  
    <img src={require("./img/select_link_subdevice.png").default} width="240"/>
    <img src={require("./img/link_subdevice1.png").default} width="240"/>

- Les **autres types d’appareils** peuvent servir de sous-appareils liés à un appareil parent.
  
    <img src={require("./img/select_link_parent_device.png").default} width="240"/>
    <img src={require("./img/link_parent_device1.png").default} width="240"/>

Si aucun appareil n’est disponible pour le lien, veuillez cliquer sur **Ajouter un appareil** pour inclure l’appareil dans votre domicile en premier.  
<img src={require("./img/link_new_device.png").default} width="240"/>  

### 4.3 Paramètres réseau

Appuyez sur **Paramètres du réseau** pour consulter le nom du Wi-Fi auquel l’appareil est connecté et son adresse IP attribuée.

<img src={require("./img/settings.png").default} width="240"/>
<img src={require("./img/network_settings.png").default} width="240"/>

### 4.4 Mise à jour du firmware

Appuyez sur **Mise à jour du firmware** pour consulter la version actuelle du firmware de l’appareil et les mises à jour disponibles. Si une nouvelle version est disponible, appuyez sur **Appliquer** pour effectuer la mise à jour en ligne.

<img src={require("./img/settings.png").default} width="240"/>
<img src={require("./img/fw_update.png").default} width="240"/>
