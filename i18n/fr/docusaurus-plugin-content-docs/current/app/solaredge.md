---
title: SolarEdge
description: Comment ajouter l'autorisation V2 pour SolarEdge
---

# Comment ajouter l'autorisation V2 ?

:::note Avant de commencer
- Mettez à jour l'application INDEVOLT vers la version **V1.4.11** ou ultérieure.
- Le forfait API gratuit SolarEdge est de **2 000 crédits/mois**, donc les données sont mises à jour environ toutes les **15 minutes**, comme sur le site SolarEdge.
- Selon la [documentation officielle SolarEdge](https://api-docs.solaredge.com/), **V1 sera déprécié le 1er novembre 2026**. Si vous utilisez encore l'API V1 (apiKey + siteId), veuillez ajouter cette autorisation V2 avant le **1er novembre 2026**.
:::

## 1. Créer un compte développeur

Rendez-vous sur [developer.solaredge.com](https://developer.solaredge.com/) et connectez-vous avec vos identifiants SolarEdge existants. Si vous n'avez pas encore de compte SolarEdge, inscrivez-vous. Vous devrez ensuite remplir un profil de développeur :

| Champ | Quoi saisir |
|-------|-------------|
| Nom de l'entreprise | Votre nom ou un nom de projet (lettres anglaises et chiffres uniquement, sans accents), ex. "Maya Smith" ou "Solar Dashboard Project" |
| Secteur d'activité | "Other / Hobbyist" convient |
| Usage mensuel API prévu | "Low — personal project" convient |

:::info
Vous êtes maintenant **administrateur du compte** d'un nouveau compte développeur avec le **forfait gratuit** provisionné automatiquement (2 000 crédits/mois, 10 CPM, 1 application). Votre compte SolarEdge existant reste inchangé.
:::

## 2. Créer une application pour obtenir CLIENT ID et CLIENT SECRET

| Paramètre | Valeur |
|-----------|--------|
| Service API | Monitoring API |
| Type d'accès | Site Access |
| Scopes | SITE_DATA et DEVICE_DATA |
| URL(s) de redirection autorisée(s) | `https://manosdatahubse.indevolt.com` |
| URL(s) de retour autorisée(s) | `https://manosdatahubse.indevolt.com` |

Vous obtiendrez ensuite votre **CLIENT ID** et votre **CLIENT SECRET**. Copiez-les et conserve-les localement.

<img src={require("./img/solaredge_step2_new.png").default} style={{ maxWidth: "700px" }} />

## 3. Ajouter l'autorisation V2 depuis l'application INDEVOLT

Dans l'application INDEVOLT, cliquez dans l'ordre : **Accueil → Ajouter un appareil → SolarEdge → Ajouter un accès** pour démarrer l'autorisation :

- Saisissez le **CLIENT ID** et le **CLIENT SECRET** de votre application
- Cliquez sur le bouton **Bind** — vous serez redirigé vers la page de connexion SolarEdge
- Connectez-vous avec votre e-mail et mot de passe SolarEdge
- Après la connexion, cliquez sur le bouton **Approve** pour autoriser
- Si vous voyez une page contenant `{"result": true, "message":"OK"}`, l'autorisation est réussie !

<img src={require("./img/solaredge_step3_new.png").default} style={{ maxWidth: "700px" }} />

:::note
Si vous ne voyez pas la page avec le bouton **Approve** après la connexion, retournez dans l'application INDEVOLT et cliquez à nouveau sur **Bind** — la page avec le bouton Approve s'affichera alors.
:::

Si une erreur s'affiche sur la dernière page, trouvez votre code d'erreur ci-dessous :

| Code d'erreur | Cause typique | Solution |
|---------------|---------------|----------|
| **400** | Erreur réseau | Retournez dans l'application et recommencez en cliquant sur **Bind**. |
| **403** | Le scope `DEVICE_DATA` est manquant | Supprimez votre application SolarEdge actuelle et créez-en une nouvelle incluant le scope **DEVICE_DATA**. Retournez ensuite dans l'application et autorisez à nouveau avec le nouveau Client ID et Client Secret. |
| **429** | Limite de crédits mensuelle atteinte | Assurez-vous qu'aucun autre service n'appelle l'API, puis recommencez l'autorisation le 1er du mois prochain. |

Retournez dans l'application INDEVOLT, cliquez dans l'ordre : **Profil → Intégrations énergétiques** — vous verrez que SolarEdge est désormais connecté.

## Remarques

- Si vous avez terminé l'autorisation dans INDEVOLT puis avez régénéré le **CLIENT SECRET** sur le portail SolarEdge, l'autorisation dans INDEVOLT devient invalide. **Déauthorisez** SolarEdge dans INDEVOLT, puis autorisez à nouveau avec le dernier Client Secret.
- En raison de la limite de crédits, les données ne se mettent à jour que toutes les **15 minutes** en journée. Lors du premier ajout d'onduleurs SolarEdge, un certain temps est nécessaire avant que l'appareil ne soit disponible.
- Si l'autorisation a réussi mais que les données de l'appareil ne se mettent pas à jour, la cause la plus probable est que vous n'avez pas ajouté le scope **DEVICE_DATA**. Les scopes ne peuvent pas être modifiés après création — vous devez supprimer votre application SolarEdge et en créer une nouvelle, puis déautoriser SolarEdge dans l'application et autoriser à nouveau avec le nouveau Client ID et Client Secret.
- Les **URL(s) de redirection autorisée(s)** et les **URL(s) de retour autorisée(s)** doivent toutes deux être définies sur `https://manosdatahubse.indevolt.com`, sinon l'autorisation ne peut pas être finalisée.
- Un site avec plusieurs onduleurs ne pose aucun problème — nous pouvons tous les connecter. Plusieurs sites avec plusieurs onduleurs peuvent atteindre la limite de 2 000 crédits et tous les appareils ne pourront pas être connectés normalement. Nous recommandons de placer les différentes installations sous des comptes de monitoring SolarEdge séparés : autorisez un compte dans INDEVOLT, et contactez l'équipe plateforme pour l'autre.
