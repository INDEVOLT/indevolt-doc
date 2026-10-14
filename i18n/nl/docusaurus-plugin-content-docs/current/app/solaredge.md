---
title: SolarEdge
description: Zo voegt u de V2-autorisatie voor SolarEdge toe
---

# Zo voegt u de V2-autorisatie toe

:::note Voordat u begint
- Werk uw INDEVOLT-app bij naar **V1.4.11** of hoger.
- Het gratis SolarEdge API-abonnement omvat **2.000 credits per maand**. Gegevens worden daarom slechts ongeveer elke **15 minuten** bijgewerkt.
- Volgens de [officiële SolarEdge-documentatie](https://api-docs.solaredge.com/) wordt **V1 op 1 november 2026 beëindigd**. Als u nog de V1-API (apiKey + siteId) gebruikt, voegt u deze V2-autorisatie dan vóór **1 november 2026** toe.
:::

## 1. Maak een ontwikkelaarsaccount aan

Ga naar [developer.solaredge.com](https://developer.solaredge.com/) en meld u aan met uw SolarEdge-inloggegevens. Heeft u nog geen SolarEdge-account? Registreer u dan om een nieuw account aan te maken. In beide gevallen wordt u gevraagd een ontwikkelaarsaccountprofiel in te vullen:

| Veld | Wat u invult |
|-------|---------------|
| Company Name | Uw naam of een projectnaam (alleen Engelse letters en cijfers, zonder accenten), bijv. 'Maya Smith' of 'Solar Dashboard Project' |
| Industry type | 'Other / Hobbyist' is prima |
| Expected monthly API usage | 'Low — personal project' is prima |

:::info
U bent nu de **accountbeheerder** van een nieuw ontwikkelaarsaccount met automatisch ingerichte **gratis laag** (2.000 credits/maand, 10 CPM, 1 app). Uw persoonlijke account blijft ongewijzigd.
:::

## 2. Maak een Site Access-applicatie aan

Klik in de console op **Create Application** en voer vervolgens de drie stappen uit:

1. **Naam en service** — Geef de app bijvoorbeeld de naam 'My Home Dashboard'. Beschrijving: 'Personal solar data integration'. Service: **Monitoring API**.
2. **Toegangstype** — Kies **Site Access** (Fleet Access is niet beschikbaar zonder installateurprofiel op uw account).
3. **OAuth-configuratie** — Vul de onderstaande velden in. Uw **Client ID** en **Client Secret** worden vervolgens gegenereerd.

| Instelling | Waarde |
|---------|-------|
| Origin URL | *leeg laten* |
| Redirect URI | `https://manosdatahubse.indevolt.com` |
| Returned URL | `https://manosdatahubse.indevolt.com` |
| Scopes | **SITE_DATA** + **DEVICE_DATA** |

:::caution Bewaar uw secret nu
Kopieer het **Client Secret** onmiddellijk — het wordt **slechts één keer** weergegeven. Sla het op in een `.env`-bestand of een wachtwoordmanager.
:::

## 3. Controleer uw applicatieconfiguratie

**Zorg ervoor dat het applicatietype 'SITE ACCESS' is:**

<img src={require("./img/solaredge_step2.png").default} style={{ maxWidth: "700px" }} />

**Klik op de applicatienaam en open de pagina Settings:**

<img src={require("./img/solaredge_step3.png").default} style={{ maxWidth: "400px" }} />

Controleer of de **Allowed Redirect URL(s)** en **Allowed Returned URL(s) (Optional)** ons domein gebruiken: `https://manosdatahubse.indevolt.com`.

**Klik op Credentials** om uw Client ID en Client Secret te controleren:

<img src={require("./img/solaredge_step4.png").default} style={{ maxWidth: "700px" }} />

:::tip
Kunt u het Client Secret niet vinden? Klik op **Regenerate Secret** om een nieuw Client Secret aan te maken.
:::

## 4. Voeg uw V2-autorisatie toe via de INDEVOLT-app

Ga in de INDEVOLT-app naar **Home → Add device → SolarEdge → Add Access** om de autorisatie te starten.

**1. Voer uw Client ID en Client Secret in:**

<img src={require("./img/solaredge_auth_bind.jpeg").default} style={{ maxWidth: "240px" }} />

**2. Klik op Bind** — u wordt doorgestuurd naar de SolarEdge-aanmeldpagina:

<img src={require("./img/solaredge_auth_login.jpeg").default} style={{ maxWidth: "240px" }} />

**3. Meld u aan** met uw SolarEdge-e-mailadres en wachtwoord.

**4. Klik op Approve** om te autoriseren:

<img src={require("./img/solaredge_auth_approve.jpeg").default} style={{ maxWidth: "240px" }} />

**5. Bevestiging** — u zou een pagina met `{"result": true, "message":"OK"}` moeten zien:

<img src={require("./img/solaredge_auth_success.jpeg").default} style={{ maxWidth: "240px" }} />

:::tip Klaar!
Ga terug in de INDEVOLT-app naar **My Profile → Energy Integrations** — SolarEdge zou als verbonden moeten worden weergegeven.
:::

## Opmerkingen

- Als u eerst de autorisatie op INDEVOLT voltooit en daarna het **CLIENT SECRET** op het SolarEdge-portaal opnieuw genereert, wordt de autorisatie op INDEVOLT ongeldig. Voer **Deauthorize** voor SolarEdge op INDEVOLT uit en autoriseer opnieuw met het nieuwste Client Secret.
- Vanwege de creditlimiet worden gegevens overdag slechts ongeveer elke **15 minuten** bijgewerkt. Bij het eerste toevoegen van SolarEdge-omvormers duurt het even voordat het apparaat beschikbaar is.
