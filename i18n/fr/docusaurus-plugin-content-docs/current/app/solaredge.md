---
title: SolarEdge
description: Comment obtenir la clé API et l’ID du site SolarEdge
---

# Comment obtenir la clé API et l’ID du site SolarEdge

Il existe trois méthodes pour obtenir la clé API et l’ID du site SolarEdge :

- **Option 1** : Connectez-vous à votre [compte de supervision SolarEdge](https://monitoring.solaredge.com/) pour les obtenir vous-même.
- **Option 2** : Contactez votre installateur par e-mail pour demander un accès administrateur ou obtenir la clé API et l’ID du site.
- **Option 3** : Demandez ces informations via le [support en ligne SolarEdge](https://www.solaredge.com/us/support).

---

## Option 1 : Les obtenir vous-même

### Étape 1

Connectez-vous à votre [compte SolarEdge](https://monitoring.solaredge.com/).

### Étape 2

Si votre compte dispose des droits **Admin**, un lien **Admin** apparaît dans le menu supérieur. Cliquez dessus pour accéder à l’espace d’administration.

<img src={require("./img/solaredge_step2.png").default} />

<details open>
  <summary>**Problème** : Le menu « Admin » n’apparaît pas ? Passez à l’option 2.</summary>

  **Solution** :
  - (Recommandé) Demandez l’accès administrateur à votre installateur par e-mail ;
  - Demandez-lui de récupérer et de vous envoyer votre **clé API**.

</details>

### Étape 3

Dans l’espace **Admin**, cliquez sur **Site Access**, puis sur **Access Control**. Reportez-vous à la capture ci-dessous.

<img src={require("./img/solaredge_step3.png").default} />

### Étape 4

- Faites défiler jusqu’à la section « API Access » ;
- Cochez « I have read, understood… » ;
- Cliquez sur **Save** ;
- Confirmez avec **Ok** ;
- Double-cliquez sur la clé pour copier la **clé API complète** ;
- Copiez également l’**ID du site**.

### Étape 5

Collez ensuite la **clé API** et l’**ID du site** dans les champs correspondants de l’application INDEVOLT.

:::note
1. Cliquer sur « New key » peut interrompre une connexion API existante.
2. Évitez d’utiliser la même clé API dans plusieurs applications afin de ne pas dépasser les limites d’utilisation.
3. Après la saisie, il peut être nécessaire d’attendre 5 à 10 minutes avant que le numéro de série de l’appareil apparaisse.
:::
