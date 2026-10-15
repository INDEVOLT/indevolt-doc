---
title: SolarEdge
description: How to add V2 authorization for SolarEdge
---

# How to add V2 authorization?

:::note Before you start
- Update your INDEVOLT APP to **V1.4.11** or later.
- The free SolarEdge API plan is **2,000 credits/month**, so data updates about every **15 minutes**.
- According to [SolarEdge's official document](https://api-docs.solaredge.com/), **V1 will be deprecated on November 1, 2026**. If you are still using the V1 API (apiKey + siteId), please add this V2 authorization before **November 1, 2026**.
:::

## 1. Create a developer account

Go to [developer.solaredge.com](https://developer.solaredge.com/) and sign in with your homeowner SolarEdge credentials. If you don't have a SolarEdge account yet, sign up to create one. Either way, you'll be prompted to fill in a developer-account profile:

| Field | What to enter |
|-------|---------------|
| Company Name | Your name or a project name (English letters and numbers only, no accents), e.g. "Maya Smith" or "Solar Dashboard Project" |
| Industry type | "Other / Hobbyist" is fine |
| Expected monthly API usage | "Low — personal project" is fine |

:::info
You're now the **Account Admin** of a fresh developer account with the **Free tier** auto-provisioned (2,000 credits/month, 10 CPM, 1 app). Your homeowner account stays untouched.
:::

## 2. Create a Site Access application

In the console, click **Create Application**, then complete the three steps:

1. **Name & service** — Name it something like "My Home Dashboard." Description: "Personal solar data integration." Service: **Monitoring API**.
2. **Access type** — Choose **Site Access** (Fleet Access won't be available without an installer profile on your account).
3. **OAuth config** — Fill in the fields below, then your **Client ID** and **Client Secret** will be generated.

| Setting | Value |
|---------|-------|
| Origin URL | *leave blank* |
| Redirect URI | `https://manosdatahubse.indevolt.com` |
| Returned URL | `https://manosdatahubse.indevolt.com` |
| Scopes | **SITE_DATA** + **DEVICE_DATA** |

:::caution Save your secret now
Copy the **Client Secret** right away — it's shown **only once**. Drop it into a `.env` file or a secrets manager.
:::

## 3. Double check your application configurations

**Make sure the application type is "SITE ACCESS":**

<img src={require("./img/solaredge_step2.png").default} style={{ maxWidth: "700px" }} />

**Click the application name and open the Settings page:**

<img src={require("./img/solaredge_step3.png").default} style={{ maxWidth: "400px" }} />

Verify that the **Allowed Redirect URL(s)** and **Allowed Returned URL(s) (Optional)** use our domain: `https://manosdatahubse.indevolt.com`.

**Click Credentials** to check your Client ID and Client Secret:

<img src={require("./img/solaredge_step4.png").default} style={{ maxWidth: "700px" }} />

:::tip
Can't find the Client Secret? Click **Regenerate Secret** to create a new one.
:::

## 4. Add your v2 authorization from INDEVOLT app

In the INDEVOLT APP, go to **Home → Add device → SolarEdge → Add Access** to start authorizing.

**1. Enter your Client ID and Client Secret:**

<img src={require("./img/solaredge_auth_bind.jpeg").default} style={{ maxWidth: "240px" }} />

**2. Click Bind** — you'll be redirected to the SolarEdge sign-in page:

<img src={require("./img/solaredge_auth_login.jpeg").default} style={{ maxWidth: "240px" }} />

**3. Sign in** with your SolarEdge email and password.

**4. Click Approve** to authorize:

<img src={require("./img/solaredge_auth_approve.jpeg").default} style={{ maxWidth: "240px" }} />

:::tip
If you can't see the page with the **Approve** button, please go back to the INDEVOLT app to click **Bind** again — then you will be redirected to this page.
:::

**5. Confirmation** — you should see a page containing `{"result": true, "message":"OK"}`:

<img src={require("./img/solaredge_auth_success.jpeg").default} style={{ maxWidth: "240px" }} />

:::tip Done!
Go back to **My Profile → Energy Integrations** in the INDEVOLT APP — SolarEdge will show as connected.
:::

## Notes

- If you finish the authorization on INDEVOLT first and later regenerate the **CLIENT SECRET** on the SolarEdge portal, the authorization on INDEVOLT becomes invalid. **Deauthorize** SolarEdge on INDEVOLT, then authorize again with the latest Client Secret.
- Due to the credit limit, data updates only every **15 minutes** during daylight. When first adding SolarEdge inverters, it takes a while before the device becomes available.
