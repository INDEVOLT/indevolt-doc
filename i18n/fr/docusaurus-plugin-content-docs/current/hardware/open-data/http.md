---
title: HTTP / HTTPS Introduction
description: Accéder aux données locales et contrôler le système de stockage INDEVOLT via une interface HTTP standard.
---

# HTTP / HTTPS Introduction

Les systèmes de stockage d'énergie compacts INDEVOLT fournissent une API REST basée sur HTTP/HTTPS, qui peut être utilisée pour la surveillance des appareils, la lecture des paramètres et le contrôle dans un réseau local. Toutes les interfaces utilisent JSON comme format d'échange de données.

---

## 1. Préparation {#preparations}

### Étape 1 – Installer les outils {#install-tools}

> - **[Postman](https://www.getpostman.com/) / cURL** : pour appeler les API HTTP afin de récupérer des données ou modifier la configuration  

### Étape 2 – Activer l’API {#enable-api}

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Par défaut, l’API est désactivée. Elle doit être activée avant utilisation. OpenData propose trois modes :
> - [HTTP](#http)  
> - [HTTP Digest](#http-digest)  
> - [HTTPS](#https) (non pris en charge pour le moment)  
>
> Configuration via l’application INDEVOLT :
> - **Appareil connecté au réseau** : configuration via le cloud  
> - **Appareil non connecté** : configuration via Bluetooth local  
> 
> <Tabs>
>   <TabItem value="cloud" label="Cloud" default>
>     <img src={require("./img/device_info.png").default} width="200"/>
>     <img src={require("./img/select_local_api.png").default} width="200"/>
>     <img src={require("./img/connect_device.png").default} width="200"/>
>     <img src={require("./img/select_http.png").default} width="200"/>
>     <img src={require("./img/http.png").default} width="200"/>
>   </TabItem>
>   <TabItem value="local" label="Bluetooth">
>     <img src={require("./img/profile_page.png").default} width="200"/>
>     <img src={require("./img/scan_qr_code.png").default} width="200"/>
>     <img src={require("./img/connect_device.png").default} width="200"/>
>     <img src={require("./img/device_connected.png").default} width="200"/>
>     <img src={require("./img/select_local_api2.png").default} width="200"/>
>     <img src={require("./img/select_http.png").default} width="200"/>
>     <img src={require("./img/http.png").default} width="200"/>
>   </TabItem>
> </Tabs>

### Étape 3 – Vérifier la version du firmware {#check-firmware}

> Si la version est inférieure à celles ci-dessous, veuillez mettre à jour le firmware.
> 
> | Modèle | Version minimale |
> | ------ | ---------------- |
> | BK1600 / BK1600 Ultra          | V1.3.0A_R006.072_M4848_00000039           |
> | SolidFlex 2000 / PowerFlex 2000 | CMS：V1406.07.002E |
> | PowerFlex 3000 AC<br />PowerFlex 3000 Hybrid<br />SolidFlex 3000 AC<br />SolidFlex 3000 AC Pro<br />SolidFlex 3000 Hybrid Pro  | CMS: V1409.08.3034  |
> | SolidFlex 1200 | CMS: V1407.07.202E |
>
> <Tabs>
>   <TabItem value="cloud" label="Cloud" default>
>     <img src={require("./img/device_info.png").default} width="200"/>
>     <img src={require("./img/select_firmware.png").default} width="200"/>
>     <img src={require("./img/view_firmware_version2.png").default} width="200"/>
>   </TabItem>
>   <TabItem value="local" label="Local Bluetooth">
>     <img src={require("./img/profile_page.png").default} width="200"/>
>     <img src={require("./img/scan_qr_code.png").default} width="200"/>
>     <img src={require("./img/connect_device.png").default} width="200"/>
>     <img src={require("./img/device_connected.png").default} width="200"/>
>     <img src={require("./img/select_firmware2.png").default} width="200"/>
>     <img src={require("./img/view_firmware_version.png").default} width="200"/>
>   </TabItem>
> </Tabs>

---

### Étape 4 – Obtenir l’adresse IP {#obtain-ip}

> Choisissez l’une des trois méthodes suivantes :
>
> * 🧩Méthode 1 : consulter l’interface d’administration du routeur ;
> * 🧩Méthode 2 : consulter les paramètres de l’appareil dans l’application ;
>   <img src={require("./img/select-network.png").default} width="240"/>
>   <img src={require("./img/view_ip.png").default} width="240"/>
> * 🧩Méthode 3 : obtenir l’adresse IP via une diffusion UDP
>
>   
>   (1) Assurez-vous que l’appareil et l’ordinateur sont connectés au même réseau local Wi-Fi.  
>   (2) Ouvrez un outil de débogage réseau.  
>   (3) Sélectionnez le protocole **UDP**.  
>   (4) Choisissez **Local Host Addr**.  
>   (5) Définissez **Local Host Port** sur **10000**.  
>   (6) Cliquez sur **Open**.  
>     <img src={require("./img/udp-settings.png").default} width="120"/>
>   (7) Configurez dans **Remote** l’adresse de diffusion et le port : **255.255.255.255:8099**.  
>     <img src={require("./img/set-udp-remote.png").default} width="480"/>
>   (8) Saisissez la commande AT dans le champ de message : **AT+IGDEVICEIP**.  
>   (9) Cliquez sur **Send**.  
>     <img src={require("./img/send-at-command.png").default} width="360"/>
>   (10) Les appareils INDEVOLT présents sur le même réseau local renverront leur adresse IP ainsi que leur numéro de série (SN).  
>       <img src={require("./img/udp-message.png").default} width="360"/>


---

## 2. Utilisation HTTP {#http}

### 2.1 Structure de requête {#request-structure}

**Méthodes**

| Méthode | Description             |
| ------- | ----------------------- |
| GET     | Récupérer une ressource |
| POST    | Exécuter une action     |

**URL**

```
http://{IP_ADDRESS}:8080/rpc/{API}
```

- `{IP_ADDRESS}` : adresse IP de l’appareil  
- `{API}` : API appelée  

**Exemple**

- Récupérer les données de l’appareil :

  ```
  POST http://192.168.31.213:8080/rpc/Indevolt.GetData?config={"t":[1664,1665]}
  ```

**Exemple cURL**

- Récupérer le SOC de la batterie :

  ```
  curl -g -X POST -H "Content-Type: application/json" "http://192.168.1.75:8080/rpc/Indevolt.GetData?config={\"t\":[6002]}"
  ```

### 2.2 Fréquence des requêtes {#rate-limit}

Afin de garantir la stabilité du système, toutes les API HTTP sont soumises aux limitations suivantes :

| Type                              | Limite       |
| --------------------------------- | ------------ |
| Intervalle de requête recommandé  | ≥ 5 secondes |
| Intervalle minimal pris en charge | 1 seconde    |


### 2.3 Codes d’erreur {#errors}

| Code d’état | Description                  | Explication                                                                 |
| ----------- | --------------------------- | --------------------------------------------------------------------------- |
| 400         | Bad Request                 | Le serveur ne comprend pas le format de la requête ; le client doit la corriger puis réessayer. |
| 401         | Unauthorized                | La requête nécessite une authentification ; le client doit fournir des identifiants valides. |
| 403         | Forbidden                   | Le serveur comprend la requête mais refuse de l’exécuter, généralement faute de permissions. |
| 404         | Not Found                   | La ressource demandée est introuvable ; elle peut ne pas exister ou avoir été supprimée. |
| 405         | Method Not Allowed          | La méthode utilisée n’est pas autorisée pour cette ressource (ex. écriture sur une ressource en lecture seule). |
| 408         | Request Timeout             | Le délai d’attente de la requête est dépassé ; le client peut réessayer ultérieurement. |
| 409         | Conflict                    | Conflit avec l’état actuel de la ressource (ex. modification simultanée par plusieurs utilisateurs). |
| 410         | Gone                        | La ressource demandée a été supprimée définitivement et n’est plus disponible. |
| 500         | Internal Server Error       | Le serveur a rencontré une erreur interne et ne peut pas traiter la requête. |
| 501         | Not Implemented             | La méthode demandée n’est pas prise en charge par le serveur. |
| 502         | Bad Gateway                 | Le serveur (passerelle/proxy) a reçu une réponse invalide du serveur en amont. |
| 503         | Service Unavailable         | Le serveur est temporairement indisponible (surcharge ou maintenance). |
| 504         | Gateway Timeout             | Le serveur (passerelle/proxy) n’a pas reçu de réponse à temps du serveur en amont. |
| 505         | HTTP Version Not Supported  | La version HTTP utilisée n’est pas prise en charge par le serveur. |

---

## 3. HTTP Digest {#http-digest}

L’authentification Digest permet de vérifier l’identité sans transmettre le mot de passe en clair.

En mode HTTP + Digest :
- Lors de la première utilisation ou après une restauration des paramètres d’usine, il est nécessaire d’utiliser l’interface `User.SetConfig` pour modifier le mot de passe par défaut.
- Une fois le mot de passe modifié avec succès, les autres interfaces peuvent être utilisées.

**Outils**

- Convertisseur ASCII → hexadécimal  
- Convertisseur hexadécimal → Base64  
- Outil de chiffrement AES-GCM  

**Exemple de modification de mot de passe**

1. Convertir le nouveau mot de passe, l’ancien mot de passe et le nombre aléatoire en hexadécimal.

   |              | Chaîne ASCII | Hexadécimal                                                             |
   | ------------ | ------------ | ------------------------------------------------------------------------ |
   | Nouveau mot de passe | qwertyui     | 71 77 65 72 74 79 75 69                                                |
   | Ancien mot de passe  | qazwsxed     | 71 61 7a 77 73 78 65 64 00 00 00 00 00 00 00 00 <br />(complété à 16 octets) |
   | Nombre aléatoire     | 123456       | 31 32 33 34 35 36 00 00 00 00 00 00 <br />(complété à 12 octets) |

2. Utiliser un outil AES-GCM pour le chiffrement et saisir les informations correspondantes pour effectuer le chiffrement.
   <img src={require("./img/aes-gcm-info.png").default} width="480"/>

3. Convertir le texte chiffré et le tag en Base64.

   |      | Hexadécimal                                     | Base64                   |
   | ---- | ----------------------------------------------- | ------------------------ |
   | Chiffrement | 4e b2 90 67 54 02 d4 c4                         | TrKQZ1QC1MQ=             |
   | Tag  | cf 0b d0 4e 37 a0 e6 bb cb 74 1b cb ce ab 72 9a | zwvQTjeg5rvLdBvLzqtymg== |

4. Compléter les champs de Digest Authentication et envoyer la requête `User.SetConfig`.

   <span className="http-method-badge">POST</span> **`http://{IP_ADDRESS}:8080/rpc/User.SetConfig?config={"Password":"{PASSWORD}"}`**

   Où :
   - `{IP_ADDRESS}` : adresse IP de l’appareil.
   - `{PASSWORD}` : texte chiffré encodé en Base64 via AES128-GCM.

   <img src={require("./img/digest-auth.png").default} width="720"/>

| Nom du paramètre | Type            | Description                                                                                                                                             | Obligatoire |
| ---------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Username         | String          | Valeur par défaut `opend`                                                                                                                                | Obligatoire  |
| Password         | String          | Clé par défaut de l’appareil.<br /><br />- Avec le **mot de passe par défaut**, seule l’API **`User.SetConfig`** peut être appelée pour modifier le mot de passe.<br />- Après modification, le **nouveau mot de passe** permet d’appeler les autres API. | Obligatoire  |
| Realm            | String          | - Lors de l’appel à **`User.SetConfig`**, le **tag AES128-GCM** est requis.<br />- Pour les autres API, une valeur aléatoire peut être utilisée. | Obligatoire  |
| Nonce            | Type par défaut Digest | Valeur aléatoire possible                                                                                                                               | Obligatoire  |
| Algorithm        | Type par défaut Digest | MD5                                                                                                                                                     | Obligatoire  |
| qop              | Type par défaut Digest | auth                                                                                                                                                    | Obligatoire  |
| Nonce Count      | Type par défaut Digest | Valeur aléatoire possible                                                                                                                               | Obligatoire  |
| Client Nonce     | Type par défaut Digest | Valeur aléatoire possible                                                                                                                               | Obligatoire  |

---

## 4. HTTPS (non pris en charge pour le moment) {#https}

HTTPS chiffre les données de communication à l'aide de TLS et vérifie l'identité du serveur via des certificats numériques, ce qui permet de protéger efficacement les données contre l'interception ou la modification.

HTTP et HTTPS utilisent les mêmes interfaces API. Les méthodes de requête, les paramètres de requête et les formats de réponse sont exactement identiques. Il suffit de remplacer le protocole dans l'adresse de requête de `http://` par `https://`.

---

## 5. FAQ {#faq}

<details>
  <summary>**Q: La requête HTTP retourne 401 Unauthorized.**</summary>

* Vérifiez que le nom d’utilisateur et le mot de passe Digest sont corrects.
* Lors de la première utilisation / après réinitialisation d’usine, l’appareil ne permet d’accéder qu’à l’interface `User.SetConfig`. Voir [Authentification Digest](#http-digest). Après modification du mot de passe, utilisez le nouveau mot de passe pour accéder aux autres interfaces.

</details>

<details>
  <summary>**Q: L’appareil ne renvoie pas l’adresse IP après l’envoi de la commande de broadcast.**</summary>

L’API OpenData n’est pas activée, ce qui rend cette fonctionnalité indisponible. Voir [Activer l’API](#enable-api).

</details>
