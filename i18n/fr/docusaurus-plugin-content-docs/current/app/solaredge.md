---
title: SolarEdge
description: Comment ajouter l'autorisation V2 pour SolarEdge
---

# Comment ajouter l'autorisation V2

:::note Avant de commencer
- Mettez à jour votre application INDEVOLT vers **V1.4.11** ou une version ultérieure.
- Le forfait API gratuit de SolarEdge comprend **2 000 crédits par mois**. Les données ne sont donc mises à jour qu'environ toutes les **15 minutes**.
- Selon la [documentation officielle de SolarEdge](https://api-docs.solaredge.com/), **la V1 sera retirée le 1er novembre 2026**. Si vous utilisez encore l'API V1 (apiKey + siteId), veuillez ajouter cette autorisation V2 avant le **1er novembre 2026**.
:::

## 1. Créer un compte développeur

Accédez à [developer.solaredge.com](https://developer.solaredge.com/) et connectez-vous avec vos identifiants SolarEdge. Si vous n'avez pas encore de compte SolarEdge, inscrivez-vous pour en créer un. Dans les deux cas, vous serez invité à remplir un profil de compte développeur :

| Champ | À saisir |
|-------|---------------|
| Company Name | Votre nom ou un nom de projet (lettres et chiffres anglais uniquement, sans accents), p. ex. « Maya Smith » ou « Solar Dashboard Project » |
| Industry type | « Other / Hobbyist » convient |
| Expected monthly API usage | « Low — personal project » convient |

:::info
Vous êtes désormais l'**administrateur du compte** d'un nouveau compte développeur avec le **plan gratuit** préconfiguré (2 000 crédits/mois, 10 CPM, 1 application). Votre compte personnel reste inchangé.
:::

## 2. Créer une application Site Access

Dans la console, cliquez sur **Create Application**, puis suivez les trois étapes :

1. **Nom et service** — Nommez-la par exemple « My Home Dashboard ». Description : « Personal solar data integration ». Service : **Monitoring API**.
2. **Type d'accès** — Choisissez **Site Access** (Fleet Access ne sera pas disponible sans profil d'installateur sur votre compte).
3. **Config OAuth** — Remplissez les champs ci-dessous, puis votre **Client ID** et votre **Client Secret** seront générés.

| Paramètre | Valeur |
|---------|-------|
| Origin URL | *laisser vide* |
| Redirect URI | `https://manosdatahubse.indevolt.com` |
| Returned URL | `https://manosdatahubse.indevolt.com` |
| Scopes | **SITE_DATA** + **DEVICE_DATA** |

:::caution Enregistrez votre secret maintenant
Copiez immédiatement le **Client Secret** — il n'est affiché **qu'une seule fois**. Consignez-le dans un fichier `.env` ou dans un gestionnaire de secrets.
:::

## 3. Vérifier la configuration de votre application

**Assurez-vous que le type d'application est « SITE ACCESS » :**

<img src={require("./img/solaredge_step2.png").default} style={{ maxWidth: "700px" }} />

**Cliquez sur le nom de l'application et ouvrez la page Settings :**

<img src={require("./img/solaredge_step3.png").default} style={{ maxWidth: "400px" }} />

Vérifiez que les **Allowed Redirect URL(s)** et les **Allowed Returned URL(s) (Optional)** utilisent notre domaine : `https://manosdatahubse.indevolt.com`.

**Cliquez sur Credentials** pour vérifier votre Client ID et votre Client Secret :

<img src={require("./img/solaredge_step4.png").default} style={{ maxWidth: "700px" }} />

:::tip
Vous ne trouvez pas le Client Secret ? Cliquez sur **Regenerate Secret** pour en créer un nouveau.
:::

## 4. Ajouter votre autorisation V2 depuis l'application INDEVOLT

Dans l'application INDEVOLT, accédez à **Home → Add device → SolarEdge → Add Access** pour commencer l'autorisation.

**1. Saisissez votre Client ID et votre Client Secret :**

<img src={require("./img/solaredge_auth_bind.jpeg").default} style={{ maxWidth: "240px" }} />

**2. Cliquez sur Bind** — vous serez redirigé vers la page de connexion SolarEdge :

<img src={require("./img/solaredge_auth_login.jpeg").default} style={{ maxWidth: "240px" }} />

**3. Connectez-vous** avec votre adresse e-mail et votre mot de passe SolarEdge.

**4. Cliquez sur Approve** pour autoriser :

<img src={require("./img/solaredge_auth_approve.jpeg").default} style={{ maxWidth: "240px" }} />

:::tip
Si vous ne voyez pas la page avec le bouton **Approve**, revenez à l'application INDEVOLT et cliquez à nouveau sur **Bind** — vous serez alors redirigé vers cette page.
:::

**5. Confirmation** — vous devriez voir une page contenant `{"result": true, "message":"OK"}` :

<img src={require("./img/solaredge_auth_success.jpeg").default} style={{ maxWidth: "240px" }} />

:::tip Terminé !
Revenez dans l'application INDEVOLT et vérifiez **My Profile → Energy Integrations** — SolarEdge doit s'afficher comme connecté.
:::

## Remarques

- Si vous terminez l'autorisation sur INDEVOLT puis régénérez le **CLIENT SECRET** sur le portail SolarEdge, l'autorisation sur INDEVOLT devient invalide. **Deauthorize** SolarEdge sur INDEVOLT, puis autorisez de nouveau avec le Client Secret le plus récent.
- En raison de la limite de crédits, les données ne sont mises à jour qu'environ toutes les **15 minutes** en journée. Lors de l'ajout initial d'onduleurs SolarEdge, un certain temps est nécessaire avant que l'appareil ne soit disponible.
