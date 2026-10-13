---
title: SolarEdge
description: Comment obtenir la Client ID et le Client Secret SolarEdge
---

# Comment obtenir la Client ID et le Client Secret SolarEdge

Avant d’utiliser les appareils SolarEdge, veuillez mettre à jour votre application INDEVOLT vers la dernière version.

Pour connecter SolarEdge dans l’application INDEVOLT, vous devez d’abord saisir la **Client ID** et le **Client Secret**. Une fois ces informations saisies, l’application INDEVOLT vous redirigera vers la page SolarEdge. Connectez-vous à votre compte SolarEdge et terminez l’autorisation.

> **Remarque**
>
> Le forfait API gratuit de SolarEdge comprend **2 000 crédits par mois**. Les données des appareils sont donc mises à jour par défaut environ toutes les **15 minutes**.

## Comment obtenir la Client ID et le Client Secret SolarEdge ?

### Étape 1

Accédez à la [SolarEdge Developer Console](https://developer.solaredge.com/) et connectez-vous avec votre compte SolarEdge existant.

### Étape 2

Dans la Developer Console, créez une application de type **Site Access**.

<img src={require("./img/solaredge_step2.png").default} />

### Étape 3

Cliquez sur le nom de l’application créée pour ouvrir la page **Settings**.

<img src={require("./img/solaredge_step3.png").default} />

Sur la page **Settings**, définissez les deux URL suivantes comme domaine INDEVOLT :

- **Allowed Redirect URL(s)** : `https://manosdatahubse.indevolt.com`
- **Allowed Returned URL(s) (Optional)** : `https://manosdatahubse.indevolt.com`

> **Remarque**
>
> Veuillez vous assurer que les URL ci-dessus sont correctement renseignées. Dans le cas contraire, l’autorisation SolarEdge peut échouer.

### Étape 4

Accédez à la page **Credentials** pour afficher votre **Client ID** et votre **Client Secret**.

<img src={require("./img/solaredge_step4.png").default} />

Si vous ne trouvez pas le **Client Secret**, cliquez sur **Regenerate Secret** pour en générer un nouveau.

> **Remarque**
>
> Après avoir régénéré le Client Secret, utilisez le nouveau Client Secret pour terminer l’autorisation.