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

### 4.2 Paramètres de puissance

Sur la page des paramètres de puissance, vous pouvez définir les limites de puissance de l’appareil, notamment : la puissance de sortie AC max, la puissance d’entrée AC max et la limite d'injection au réseau.

1. Accédez à la page des paramètres de l’appareil et cliquez sur **Paramètres De Puissance**.
2. Sélectionnez le paramètre de puissance que vous souhaitez modifier.
3. Faites glisser pour définir la valeur de puissance souhaitée.
4. Cliquez sur **Enregistrer** pour appliquer les paramètres.

<img src={require("./img/device_settings.png").default} width="240"/>
<img src={require("./img/power_settings.png").default} width="240"/>
<img src={require("./img/ac_output_power.png").default} width="240"/>

#### Définir une puissance AC supérieure à 800W

Si vous devez définir la puissance de sortie AC maximale ou la puissance d’entrée AC maximale au-delà de 800W, le système affichera différents messages ou processus de vérification en fonction du pays d’utilisation de l’appareil.

:::info

Selon les normes de sécurité **allemandes**, la puissance de sortie AC des systèmes de batteries enfichables ne doit pas dépasser **800W**. Par conséquent, lorsque les utilisateurs en Allemagne tentent de définir une valeur supérieure à 800W, une **vérification du mode professionnel** est requise afin de garantir la conformité de l’installation aux normes de sécurité.

Les utilisateurs dans d’autres pays verront uniquement un message de sécurité lorsqu’ils définissent une valeur supérieure à 800W, sans nécessité de vérification.

:::


**Étape 1 : Définir le pays d’utilisation**

Dans la page des paramètres de l’appareil, trouvez **Pays D’utilisation** et sélectionnez votre pays dans la liste.
<img src={require("./img/device_settings.png").default} width="240"/>
<img src={require("./img/device_country.png").default} width="240"/>

**Étape 2 : Demander un code d’activation (uniquement pour l’Allemagne)**

Lorsque les utilisateurs en Allemagne définissent pour la première fois une puissance supérieure à 800W, une **vérification en mode professionnel** est requise. L’obtention d’un code d’activation est nécessaire pour finaliser la configuration.

1. Après avoir défini une valeur supérieure à 800W et cliqué sur Enregistrer, l’application affiche la page de vérification en mode professionnel.
2. Cliquez sur **Demander un code d’activation**.
3. Remplissez les informations suivantes puis cliquez sur **Enregistrer** pour soumettre la demande :
   - Informations utilisateur
   - Informations sur l’appareil
   - Informations sur l’installateur
   - Photos de contexte d’installation
4. Après soumission, vous pouvez consulter l’état de la demande dans la section **Clé d’activation**. Si la page ne se met pas à jour à temps, revenez à la page de vérification en mode professionnel et cliquez pour consulter les informations de la demande :
   - En cours de vérification : la demande est en cours d’examen
   - Approuvé : le système affiche le code d’activation
   - Échec de la vérification : vous devez soumettre à nouveau des photos conformément aux indications, par exemple :
     - Image floue
     - Angle de prise de vue ou contenu incomplet
     - Impossible de confirmer la conformité de l’installation
     - L’image ne correspond pas à l’appareil demandé
     - L’image ne répond pas aux exigences d’authenticité
5. Après approbation, copiez le code d’activation et collez-le dans le champ correspondant sur la page **Vérification du mode professionnel**, puis cliquez sur **Soumettre** pour terminer la vérification.
  
     <img src={require("./img/verification1.png").default} width="240"/>
     <img src={require("./img/verification2.png").default} width="240"/>
     <img src={require("./img/verification3.png").default} width="240"/>
     <img src={require("./img/auth_failure.png").default} width="240"/>
     <img src={require("./img/auth_success.png").default} width="240"/>


**Étape 3 : Confirmer et enregistrer les paramètres de puissance**

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="german" label="Allemagne" default>

    Une fois la vérification terminée, lorsque la puissance dépasse la valeur recommandée par la réglementation, l’application affiche un message de sécurité. Cliquez sur **Continuer** pour appliquer les paramètres.
    <img src={require("./img/800w_confirmation.png").default} width="240"/>

  </TabItem>
  <TabItem value="others" label="Autres pays">
    
    Lorsque la puissance dépasse 800W, l’application affiche un message de sécurité réglementaire. Après confirmation du message, cliquez sur **Continuer** pour appliquer les paramètres.
    <img src={require("./img/safety_note.png").default} width="240"/>

  </TabItem>
</Tabs>


### 4.3 Lier appareil parent / sous-appareils

Pour simplifier la consultation et la gestion des données, le système permet d’établir des relations parent-enfant entre les appareils :

- Les **appareils de stockage** peuvent agir en tant qu’appareils parents et ajouter des sous-appareils liés.
  
    <img src={require("./img/select_link_subdevice.png").default} width="240"/>
    <img src={require("./img/link_subdevice1.png").default} width="240"/>

- Les **autres types d’appareils** peuvent servir de sous-appareils liés à un appareil parent.
  
    <img src={require("./img/select_link_parent_device.png").default} width="240"/>
    <img src={require("./img/link_parent_device1.png").default} width="240"/>

Si aucun appareil n’est disponible pour le lien, veuillez cliquer sur **Ajouter un appareil** pour inclure l’appareil dans votre domicile en premier.  
<img src={require("./img/link_new_device.png").default} width="240"/>  

### 4.4 Paramètres réseau

Appuyez sur **Paramètres du réseau** pour consulter le nom du Wi-Fi auquel l’appareil est connecté et son adresse IP attribuée.

<img src={require("./img/settings.png").default} width="240"/>
<img src={require("./img/network_settings.png").default} width="240"/>

### 4.5 Mise à jour du firmware

Appuyez sur **Mise à jour du firmware** pour consulter la version actuelle du firmware de l’appareil et les mises à jour disponibles. Si une nouvelle version est disponible, appuyez sur **Appliquer** pour effectuer la mise à jour en ligne.

<img src={require("./img/settings.png").default} width="240"/>
<img src={require("./img/fw_update.png").default} width="240"/>

## 5. Cluster

Lorsque plusieurs dispositifs de stockage d’énergie sont connectés en parallèle, ils sont gérés et affichés comme un cluster énergétique unifié. Le cluster est coordonné par un appareil principal, qui répartit automatiquement l’énergie et applique de façon synchronisée les modes de fonctionnement, les limites d’injection et autres paramètres.
<img src={require("./img/cluster_device_list.png").default} width="240"/>

Appuyez sur la carte du cluster pour accéder à la page de détails, où vous pouvez consulter la relation principal–secondaire entre les appareils, la stratégie énergétique du cluster ainsi que les données de puissance en temps réel.
<img src={require("./img/cluster_info.png").default} width="240"/>

Appuyez sur l’icône de paramètres ⚙ située en haut à droite de la page de détails pour modifier la configuration du cluster ou dissoudre la connexion parallèle.
<img src={require("./img/cluster_settings.png").default} width="240"/>
