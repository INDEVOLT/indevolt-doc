---
title: Inscription et connexion
description: Créez votre compte et commencez à utiliser INDEVOLT.
---

# Inscription et connexion au compte

Après avoir installé l'application INDEVOLT, ouvrez-la pour accéder à la page de connexion.

<img src={require("./img/login_page.png").default} alt="Page de connexion" width="240"/>

## Inscription d'un Nouvel Utilisateur

Suivez les étapes ci-dessous pour créer un nouveau compte.

### Étape 1 : Aller à la Page d'Inscription

Sur la page de connexion, appuyez sur le bouton **S'inscrire**.

<img src={require("./img/register.png").default} alt="Bouton S'inscrire" width="240"/>

### Étape 2 : Choisir une Méthode d'Inscription

L'inscription **par email** est disponible pour tous les utilisateurs. L'inscription par téléphone est disponible pour les utilisateurs en Chine continentale.

<img src={require("./img/register_email.png").default} width="240" />

### Étape 3 : Remplir Vos Informations

Entrez les informations requises comme indiqué à l'écran.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="email" label="Inscription par Email" default>

    1. Entrez votre **adresse email** utilisée fréquemment.  
    2. Appuyez sur **Envoyer le code**.  
    3. **Faites glisser** pour compléter la vérification de l'email.  
    4. Entrez le **code de vérification** envoyé à votre email.  
    5. Définissez un **mot de passe** sécurisé (au moins 8 caractères, incluant au moins 3 des éléments suivants: chiffres, lettres majuscules et minuscules, symboles).

       <img src={require("./img/email_register1.png").default} width="240"/>
       <img src={require("./img/email_register2.png").default} width="240"/>
    
  </TabItem>

  <TabItem value="phone" label="Inscription par Téléphone">

    1. Entrez votre **numéro de téléphone**.  
    2. Appuyez sur **Envoyer le code**.  
    3. **Faites glisser** pour compléter la vérification du téléphone.  
    4. Entrez le **code de vérification** SMS reçu.  
    5. Définissez un **mot de passe** sécurisé (au moins 8 caractères, incluant au moins 3 des éléments suivants : chiffres, lettres majuscules et minuscules, symboles).

       <img src={require("./img/phone_register1.png").default} width="240"/>
       <img src={require("./img/phone_register2.png").default} width="240"/>

  </TabItem>
</Tabs>

:::info Ce compte est enregistré

Si un message indique que le compte est enregistré, cela signifie que le compte existe déjà. Veuillez vous connecter avec votre mot de passe dans la section **[Connexion au Compte](#connexion-au-compte)** ou réinitialiser votre mot de passe via **[Mot de Passe Oublié](#mot-de-passe-oublié)**.

:::

:::warning

Pour des raisons de sécurité, les mots de passe simples tels que “123456” ou les caractères répétitifs comme “AAAAA123” ne sont pas autorisés.

:::

### Étape 4 : Finaliser l'Inscription

1. Lisez et acceptez les **Conditions de service** et la **Politique de confidentialité**.  
2. Après avoir confirmé que toutes les informations sont correctes, appuyez sur le bouton **S'inscrire**.

Une fois la vérification terminée, l'application vous dirigera automatiquement vers l'interface principale.

--- 

## Connexion au Compte

Si vous avez déjà un compte, vous pouvez vous connecter en suivant les étapes ci-dessous.

1. Appuyez sur **Plus d'options de connexion** pour choisir entre Connexion par Téléphone, Email ou ID.  
   <img src={require("./img/login_methods.png").default} alt="Méthodes de connexion" width="240"/>

2. Entrez le numéro de téléphone, l'email ou le nom d'utilisateur utilisé lors de l'inscription.  
3. Entrez votre **mot de passe.**  
4. Lisez et acceptez les **Conditions d'utilisation** et la **Politique de confidentialité**.  
5. Appuyez sur le bouton **Se connecter**.  
   <img src={require("./img/login_page.png").default} alt="Page de connexion" width="240"/>

Après une connexion réussie, l'application vous dirigera vers l'interface principale.

---

## Mot de Passe Oublié

1. Sur la page de connexion, appuyez sur le bouton **Mot de passe oublié?**.  
2. Choisissez de réinitialiser via **email ou téléphone**.  
3. Entrez l'email ou le numéro de téléphone lié à votre compte.  
4. Appuyez sur **Envoyer le code**.  
5. **Faites glisser** pour vérifier votre email/numéro de téléphone.  
6. Entrez le **code de vérification** reçu.  
7. Appuyez sur **Suivant**.  
8. Sur la page de réinitialisation du **mot de passe**, entrez votre nouveau mot de passe et confirmez-le, puis appuyez sur **Confirmer**.

   <img src={require("./img/forget_password.png").default} alt="Bouton Mot de passe oublié" width="240"/>
   <img src={require("./img/confirm_account1.png").default} alt="Page de confirmation du compte" width="240"/>
   <img src={require("./img/confirm_account2.png").default} alt="Page de confirmation du compte" width="240"/>
   <img src={require("./img/reset_password.png").default} alt="Page de réinitialisation du mot de passe" width="240"/>

Une fois votre mot de passe réinitialisé avec succès, appuyez sur **Se connecter** pour revenir à la page de connexion et vous connecter à nouveau.

<img src={require("./img/reset_finished.png").default} alt="Réinitialisation du mot de passe terminée" width="240"/>
