---
title: Profil
description: Gérez votre compte et personnalisez vos paramètres personnels.
---

# Profil

Cliquez sur l’onglet **Profil** dans la barre de navigation inférieure pour accéder à cette page. Elle permet de gérer les informations du compte, d’ajuster les paramètres de l’application et de configurer les options de personnalisation.

<img src={require("./img/profile_page.png").default} width="240"/>

## 1. Compte

Touchez **Compte** pour accéder à la page des paramètres du compte, où vous pouvez consulter et gérer toutes les configurations liées au compte.

<img src={require("./img/profile_page.png").default} width="240"/>
<img src={require("./img/account.png").default} width="240"/>

### 1.1 Profil

Touchez **Profil** pour accéder à la page détaillée du compte, où vous pouvez mettre à jour votre photo de profil, changer votre nom d’utilisateur et mettre à jour votre email ou numéro de téléphone associé.

<img src={require("./img/account.png").default} width="240"/>
<img src={require("./img/account_profile.png").default} width="240"/>

### 1.2 Changer le mot de passe

Touchez **Changer le mot de passe**, puis suivez les instructions pour **saisir votre mot de passe actuel et le nouveau**. Après enregistrement réussi, le système redirigera automatiquement vers la page de connexion pour vous reconnecter avec le nouveau mot de passe.

<img src={require("./img/account.png").default} width="240"/>
<img src={require("./img/change_password.png").default} width="240"/>

### 1.3 Supprimer le compte

:::warning
La suppression de votre compte effacera définitivement toutes les données associées et ne peut pas être annulée. Veuillez procéder avec précaution.
:::

1. **[Supprimez](#23-supprimer-une-maison) toutes les maisons** associées à votre compte.  
2. Touchez **Supprimer mon compte** pour commencer le processus d’annulation du compte.  
3. Lisez attentivement les instructions et le **Rappel d'annulation de compte**. Vérifiez que vous remplissez les conditions et comprenez les conséquences. Si tout est correct, cochez **J’ai lu et j’accepte le Rappel d'annulation de compte**.  
4. Touchez **Confirmer l'annulation** pour continuer.  
5. Pour des raisons de sécurité, le système demandera une **vérification d’identité** : saisissez votre mot de passe et vérifiez votre numéro de téléphone ou email associé.  
6. Saisissez le code de confirmation reçu, puis touchez **Terminé** pour finaliser la suppression du compte.

<img src={require("./img/account.png").default} width="240"/>
<img src={require("./img/account_cancellation.png").default} width="240"/>
<img src={require("./img/logout_account_verification.png").default} width="240"/>

### 1.4 Déconnexion

Touchez **Se déconnecter** pour quitter votre compte en toute sécurité. Le système retournera à la page de connexion.

<img src={require("./img/account.png").default} alt="Vue de l’application" width="240"/>
<img src={require("./img/exit.png").default} alt="Vue de l’application" width="240"/>

### 1.5 Enregistrer le mot de passe

La fonctionnalité **Enregistrer le mot de passe** vous permet d’enregistrer le **mot de passe de connexion au compte** et le **mot de passe Wi-Fi** utilisé lors de la configuration réseau des appareils, afin d’éviter de les saisir à plusieurs reprises.

Vous pouvez activer ou désactiver l’enregistrement des mots de passe (y compris le mot de passe de connexion et le mot de passe Wi-Fi) en utilisant l’interrupteur **Enregistrer le mot de passe**.

<img src={require("./img/account.png").default} width="240"/>


## 2. Famille

**Touchez le nom de votre famille** actuelle pour accéder à la page d’informations de la maison.

<img src={require("./img/profile_page.png").default} width="240"/>
<img src={require("./img/edit_home.png").default} width="240"/>

### 2.1 Ajouter une maison

1. Touchez le **bouton +** en haut à droite.  
2. Complétez les informations de la nouvelle maison :  
   - **Nom du foyer** : définissez un nom reconnaissable.  
   - **Localisation** : l’application détecte automatiquement votre pays ; vous pouvez également le sélectionner manuellement.  
   - **Adresse du domicile** : l’application renseigne automatiquement une zone approximative ; vous pouvez toucher l’icône à côté du champ pour repositionner sur la carte Mapbox.  
3. Après validation, touchez **Ajouter**. La nouvelle maison apparaîtra immédiatement dans la liste.

<img src={require("./img/add_home.png").default} width="240"/>
<img src={require("./img/location.png").default} width="240"/>
<img src={require("./img/home_address.png").default} width="240"/>

### 2.2 Modifier une maison

Vous pouvez modifier les informations suivantes :  
<img src={require("./img/edit_home.png").default} width="240"/>

#### 2.2.1 Nom du foyer

Touchez le champ pour le modifier.  
<img src={require("./img/edit_home_name.png").default} width="240"/>

#### 2.2.2 Adresse du domicile

Touchez le champ pour re-sélectionner ou repositionner.  
<img src={require("./img/edit_home_address.png").default} width="240"/>

#### 2.2.3 Réseau et PV

Configurez l’utilisation d’électricité et l’injection réseau :  
- Achat d’électricité auprès du fournisseur.  
- Vente d’électricité autorisée au fournisseur.

<img src={require("./img/grid_supply1.png").default} width="240"/>
<img src={require("./img/grid_supply2.png").default} width="240"/>

#### 2.2.4 Ajouter un membre à la maison

1. Touchez **Ajouter des membres de la famille**.  
2. Sélectionnez les permissions :

| Permission    | Description                                                      |
| ------------- | ---------------------------------------------------------------- |
| Membre        | Voir uniquement les données de la maison et des appareils.       |
| Administrateur| Peut ajouter/supprimer des appareils et membres, configurer la maison. |

3. Touchez **Suivant**.  
4. Entrez le compte de l’utilisateur (email ou téléphone).  
5. Touchez **Rechercher**.  
6. Dans les résultats, touchez l’**icône +** à côté de l’utilisateur.  
7. Après l’apparition du message **Ajouté avec succès**, le processus est terminé.

<img src={require("./img/edit_home.png").default} width="240"/>
<img src={require("./img/select_member_permission.png").default} width="240"/>
<img src={require("./img/invite_member.png").default} width="240"/>
<img src={require("./img/member_added.png").default} width="240"/>

#### 2.2.5 Gérer les permissions des membres

1. Dans la liste, touchez le membre à modifier.  
2. Touchez **Droits familiaux**.  
3. Choisissez un nouveau niveau de permission :

| Permission    | Description                                                             |
| ------------- | ----------------------------------------------------------------------- |
| Membre        | Voir uniquement les données de la maison et des appareils.             |
| Administrateur| Peut ajouter/supprimer appareils et membres, configurer la maison.      |
| Propriétaire  | Transfert de la propriété de la maison ; vous perdrez tous les droits. |

4. Touchez **OK**.  

<img src={require("./img/select_member.png").default} width="240"/>
<img src={require("./img/manage_member_permission.png").default} width="240"/>

#### 2.2.6 Supprimer un membre

En bas de la page du membre, touchez **Supprimer**. L’application demandera confirmation ; après validation, le membre sera retiré.

<img src={require("./img/delete_member.png").default} width="240"/>

### 2.3 Supprimer une maison

:::warning
Cette action est irréversible et effacera toutes les données de la maison. Veuillez procéder avec prudence !
:::

En bas de la page de gestion, touchez **Supprimer**. Après confirmation, la maison sera supprimée.

<img src={require("./img/delete_home.png").default} width="240"/>

## 3. Tarif

Touchez **Tarif** pour accéder à la gestion des prix de l’électricité.

<img src={require("./img/profile_page.png").default} width="240"/>
<img src={require("./img/tariff.png").default} width="240"/>

### 3.1 Ajouter un tarif

Touchez **+ Ajouter le prix de l’électricité** pour créer un nouveau plan de **prix d’achat ou de vente**.  
<img src={require("./img/add_price.png").default} width="240"/>
<img src={require("./img/electricity_price.png").default} width="240"/>

Le processus est similaire pour l’achat et la vente ; l’exemple ci-dessous concerne le prix d’achat :  
<img src={require("./img/configure_price.png").default} width="240"/>

1. Définir l’**heure de début et de fin** du tarif.

   - La fin est par défaut **Maintenant**, ce qui signifie que le prix reste actif.  
   - Pour un tarif historique, désactivez **Maintenant** et sélectionnez manuellement la période.  

2. Sélectionnez la **zone** de votre maison.  
3. Choisissez votre **fournisseur d’électricité**.  
4. Configurez le plan de **tarif électrique** :  
   - **Dynamique** : nécessite de définir les taxes et le prix fixe mensuel.  
      <img src={require("./img/dynamic_tariff.png").default} width="240"/>  

   - **Statique** : définir les tarifs flexible (TOU) pour chaque période.  
     <img src={require("./img/static_tariff1.png").default} width="240"/>
     <img src={require("./img/static_tariff2.png").default} width="240"/>
     <img src={require("./img/static_tariff3.png").default} width="240"/>

5. Touchez **Enregistrer**.

:::info
Ces paramètres servent uniquement à la visualisation et estimation dans l’application. La facturation réelle dépend des données officielles du fournisseur.
:::

### 3.2 Consulter l’historique des tarifs

Touchez l’icône en haut à droite pour voir les prix passés.  
<img src={require("./img/tariff.png").default} width="240"/>
<img src={require("./img/history_price_plan2.png").default} width="240"/>


## 4. Cluster

Les paramètres de cluster permettent de combiner plusieurs dispositifs de stockage d’énergie ou onduleurs - via des connexions filaires ou sans fil - en un système unifié pour augmenter la capacité et équilibrer la charge.

:::info Prérequis
- Au moins un dispositif de stockage d’énergie et un dispositif compatible doivent être présents dans la maison.  
- Tous les dispositifs participant au cluster doivent être allumés et connectés au même réseau Wi-Fi.
:::

Vous devez configurer le mode principal/subordonné : un appareil est désigné comme principal, les autres agissant comme subordonnés, coordonnés par le principal.

Le tableau suivant montre quels modèles supportent les rôles principal/subordonné :

<table><thead>
  <tr>
    <th></th>
    <th colspan="2">Filaire</th>
    <th colspan="2">Sans fil</th>
  </tr></thead>
<tbody>
  <tr>
    <td>Modèle</td>
    <td>Principal</td>
    <td>Subordonné</td>
    <td>Principal</td>
    <td>Subordonné</td>
  </tr>
  <tr>
    <td>BK1600</td>
    <td>✗</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
  </tr>
  <tr>
    <td>BK1600 Ultra</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
  </tr>
  <tr>
    <td>PowerFlex 2000</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
  </tr>
  <tr>
    <td>SolidFlex 2000</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
  </tr>
  <tr>
    <td>Smart Plug</td>
    <td>✗</td>
    <td>✓</td>
    <td>✗</td>
    <td>✓</td>
  </tr>
</tbody>
</table>

**Étapes :**

1. Touchez **Cluster**.  
2. Touchez **Créer un cluster**.  
3. Sélectionnez **Mode Cluster** : sans fil ou filaire. Maintenez les cartes des appareils et glissez-les dans les emplacements principal ou subordonné.  
4. Définissez la **limitation de puissance de sortie AC** selon les règlements et politiques locales.  
5. Touchez **Enregistrer** pour finaliser la configuration.


## 5. Source de données

Grâce aux paramètres de **source de données**, vous pouvez définir les sources utilisées pour les statistiques énergétiques de la famille, afin d’améliorer la précision et la fiabilité des résultats.  
Le système prend en charge quatre types de sources de données : **Solaire**, **Batterie**, **Réseau** et **Charge**.

1. Cliquez sur **Source De Données** pour accéder à la configuration.
2. Sélectionnez le type de source de données que vous souhaitez configurer.
3. Cliquez sur **Personnalisé** à droite, puis cochez un ou plusieurs appareils comme source de données pour les statistiques.
4. Après avoir terminé la sélection, cliquez sur **Enregistrer** pour appliquer les paramètres.

   <img src={require("./img/profile_page.png").default} width="240"/>
   <img src={require("./img/select_data_source.png").default} width="240"/>
   <img src={require("./img/tap_custom.png").default} width="240"/>
   <img src={require("./img/choose_data_source_device.png").default} width="240"/>
   <img src={require("./img/save_data_source.png").default} width="240"/>


## 6. Affichage

Touchez **Affichage** pour personnaliser l’apparence et les préférences de format de l’application.

### 6.1 Langue

Supporte plusieurs langues d’interface : Chinois simplifié, Anglais, Français, Allemand, Italien, Néerlandais.  
<img src={require("./img/language.png").default} width="240"/>

### 6.2 Mode sombre

Activez ou désactivez le mode sombre selon l’environnement lumineux.  
<img src={require("./img/dark_mode.png").default} width="240"/>

### 6.3 Unité de température

Choisissez votre unité préférée : Celsius (℃) ou Fahrenheit (℉).  
<img src={require("./img/temperature_unit.png").default} width="240"/>

### 6.4 Format de date et heure

Personnalisez l’affichage de l’ordre de la date et du format 12/24 heures.  
<img src={require("./img/date_time_format.png").default} width="240"/>

### 6.5 Affichage des décimales

Choisissez votre séparateur décimal préféré : point ou virgule.  
<img src={require("./img/decimal_preference.png").default} width="240"/>

Touchez **Enregistrer**, toutes les modifications seront appliquées immédiatement. Vous pouvez revenir à tout moment pour ajuster vos préférences.

## 7. Comité des suggestions

Le Tableau de suggestions est votre canal direct pour nous communiquer vos idées ou signaler des problèmes rencontrés.

Touchez **Comité des suggestions** pour accéder à la fonctionnalité.  
<img src={require("./img/profile_page.png").default} width="240"/>

Actions possibles :

- Voir les suggestions : Parcourez les idées et retours des autres utilisateurs.  
  <img src={require("./img/suggestions.png").default} width="240"/>

- Signaler un problème : Touchez **Signaler directement i'incident**, décrivez le problème et soumettez-le.  
  <img src={require("./img/report_issue.png").default} width="240"/>

- Partager une suggestion : Touchez **Suggestion de partage** pour proposer des améliorations ou nouvelles fonctionnalités.  
  <img src={require("./img/share_suggestion2.png").default} width="240"/>

## 8. Services d’exploitation

Pour faciliter la maintenance, vous pouvez ajouter et gérer des fournisseurs de services (revendeurs, installateurs) via **Services d’exploitation**. Après autorisation, le fournisseur peut consulter les informations de base sur vos appareils pour offrir un support plus précis.

<img src={require("./img/profile_page.png").default} width="240"/>
<img src={require("./img/operation_service.png").default} width="240"/>

## 9. Connexion Directe À L'Appareil

La **Connexion directe** utilise Bluetooth pour la communication locale, permettant de surveiller et gérer les appareils compatibles sans passer par le réseau domestique.

:::info
Cette fonctionnalité supporte actuellement les systèmes de stockage d’énergie INDEVOLT :  
- BK1600  
- BK1600 Ultra  
- SolidFlex 2000  
- PowerFlex 2000  

D’autres appareils seront pris en charge à l’avenir.
:::

:::tip Prérequis
Assurez-vous que le Bluetooth est activé et que l’appareil cible est sous tension et prêt pour l’appairage.
:::

1. Touchez **Connexion Directe À L'Appareil**.  
2. Scannez le code QR de l’appareil avec l’application pour identification automatique.  
3. Touchez **Connecter à l’appareil** et rapprochez le téléphone de l’appareil. Le système établira la connexion Bluetooth.  
4. Une fois connecté, vous pouvez consulter les données en temps réel, configurer les horaires de charge/décharge et ajuster les paramètres.  
5. Touchez la **flèche retour (\<)** en haut à gauche pour quitter.

<img src={require("./img/profile_page.png").default} width="240"/>
<img src={require("./img/scan_qr_code.png").default} width="240"/>
<img src={require("./img/connect_device.png").default} width="240"/>
<img src={require("./img/device_connected.png").default} width="240"/>
<img src={require("./img/disconnect_device.png").default} width="240"/>

## 10. Assistance à Distance

Cette fonction aide les techniciens après-vente à localiser et résoudre rapidement les problèmes potentiels des appareils.

:::tip Prérequis
- Assurez-vous que l’appareil est sous tension et connecté à Internet via 4G/5G ou Wi-Fi.  
- Maintenez la connexion Bluetooth stable pendant le débogage. Il est recommandé de garder l’écran du téléphone allumé pour éviter la déconnexion.
:::

1. Touchez **Assistance à Distance**.  
2. Lisez les informations et touchez **Suivant**.  
3. Scannez le code QR de l’appareil ou saisissez manuellement le SN pour établir une connexion Bluetooth.  
4. Le système génère un **ID à distance**. Fournissez cet ID au technicien pour le diagnostic.

<img src={require("./img/remote_support.png").default} width="240"/>
<img src={require("./img/scan_qr_code.png").default} width="240"/>
<img src={require("./img/remote_id.png").default} width="240"/>

:::info
- Le processus de débogage n’affecte pas le fonctionnement normal de l’appareil.  
- Cette fonction est réservée aux techniciens autorisés : ne partagez pas l’ID.  
- Après le débogage, quittez le mode pour sécuriser la session.
:::

## 11. À propos de INDEVOLT

Touchez **À propos de INDEVOLT** pour en savoir plus sur l’application : version actuelle, accords de service et confidentialité, liste de partage d’informations à des tiers, description des autorisations et gestion des permissions système.

<img src={require("./img/about_indevolt.png").default} width="240"/>
