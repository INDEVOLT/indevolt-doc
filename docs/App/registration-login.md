---
title: Registration and Login
description: Create your account and start using INDEVOLT.
---

# Account Registration & Login

After installing the INDEVOLT App, open it to enter the login page.

<img src={require("./img/login_page.png").default} alt="Login page" width="240"/>

## New User Registration

Follow the steps below to create a new account.

### Step 1: Go to the Registration Page

On the login page, tap the **Register** button.

<img src={require("./img/register.png").default} alt="Register button" width="240"/>

### Step 2: Choose a Registration Method

Email registration is available for all users. Phone registration is available for users in Mainland China.

<img src={require("./img/register_email.png").default} width="240" />

### Step 3: Fill in Your Information

Enter the required information as shown on the screen.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="email" label="Email Registration" default>

    1. Enter your commonly-used email address.  
    2. Tap **Send Code**.  
    3. Slide to complete the email verification.  
    4. Enter the verification code sent to your email.  
    5. Set a secure password (at least 8 characters, including at least 3 of the following: numbers, uppercase and lowercase letters, symbols).

       <img src={require("./img/email_register1.png").default} width="240"/>
       <img src={require("./img/email_register2.png").default} width="240"/>
    
  </TabItem>

  <TabItem value="phone" label="Phone Registration">

    1. Enter your phone number.  
    2. Tap **Send Code**.  
    3. Slide to complete the phone verification.  
    4. Enter the SMS verification code you received.  
    5. Set a secure password (at least 8 characters, including at least 3 of the following: numbers, uppercase and lowercase letters, symbols).

       <img src={require("./img/phone_register1.png").default} width="240"/>
       <img src={require("./img/phone_register2.png").default} width="240"/>

  </TabItem>
</Tabs>

:::info This account is registered

If you see a message saying the account is registered, it means the account exists. Please log in using your password in the **[Account Login](#account-login)** section or reset your password through **[Forgot Password](#forgot-password)**.

:::

:::warning

For security reasons, simple passwords such as “123456” or repeating characters like “AAAAA123” are not allowed.

:::

### Step 4: Complete Registration

1. Read and agree to the **Terms of Service** and **Privacy Policy**.  
2. After confirming all information is correct, tap the **Register** button.

Once the verification is complete, the app will automatically take you to the main interface.

--- 

## Account Login

If you already have an account, you can log in using the steps below.

1. Tap **More login options** to switch between Phone, Email, or ID login.  
2. Enter the phone number, email, or username you used when registering.  
3. Enter your password.  
4. Read and agree to the **Terms of Use** and **Privacy Policy**.  
5. Tap the **Log in** button.  

   <img src={require("./img/login_methods.png").default} alt="Login methods" width="240"/>
   <img src={require("./img/login_page.png").default} alt="Login page" width="240"/>

After successful login, the app will take you to the main interface.

---

## Forgot Password

1. On the login page, tap **Forgot your password?**.  
2. Choose to reset via email or phone.  
3. Enter the email or phone number linked to your account.  
4. Tap **Send Code**.  
5. Slide to verify your email/phone number.  
6. Enter the verification code you received.  
7. Tap **Next**.  
8. On the Reset password page, enter your new password and confirm it, then tap **Save**.

   <img src={require("./img/forget_password.png").default} alt="Forget password button" width="240"/>
   <img src={require("./img/confirm_account1.png").default} alt="Confirm account page" width="240"/>
   <img src={require("./img/confirm_account2.png").default} alt="Confirm account page" width="240"/>
   <img src={require("./img/reset_password.png").default} alt="Reset password page" width="240"/>

Once your password is successfully reset, tap **Log in** to return to the login page and log in again.

<img src={require("./img/reset_finished.png").default} alt="Reset password finished" width="240"/>
