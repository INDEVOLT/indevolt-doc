---
title: SolarEdge
description: V2-autorisatie toevoegen voor SolarEdge
---

# Hoe voeg ik V2-autorisatie toe?

:::note Let op voordat u begint
- Update de INDEVOLT-app naar minimaal **V1.4.11** of hoger.
- Het gratis SolarEdge API-abonnement is **2.000 credits/maand**, dus gegevens worden ongeveer elke **15 minuten** bijgewerkt, net als op de SolarEdge-website.
- Volgens de [officiële SolarEdge-documentatie](https://api-docs.solaredge.com/) wordt **V1 uitgefaseerd op 1 november 2026**. Als u nog de V1 API gebruikt (apiKey + siteId), voeg deze V2-autorisatie dan toe vóór **1 november 2026**.
:::

## 1. Maak een ontwikkelaarsaccount aan

Ga naar [developer.solaredge.com](https://developer.solaredge.com/) en log in met uw bestaande SolarEdge-gegevens. Als u nog geen SolarEdge-account heeft, meld u zich dan aan. U wordt dan gevraagd een ontwikkelaarsprofiel in te vullen:

| Veld | Wat in te vullen |
|------|------------------|
| Bedrijfsnaam | Uw naam of een projectnaam (alleen Engelse letters en cijfers, geen accenten), bijv. "Maya Smith" of "Solar Dashboard Project" |
| Type branche | "Other / Hobbyist" is prima |
| Verwachtd maandelijks API-gebruik | "Low — personal project" is prima |

:::info
U bent nu **accountbeheerder** van een nieuw ontwikkelaarsaccount met automatisch het **gratis abonnement** geactiveerd (2.000 credits/maand, 10 CPM, 1 app). Uw bestaande SolarEdge-account blijft ongewijzigd.
:::

## 2. Maak een applicatie aan om CLIENT ID en CLIENT SECRET te verkrijgen

| Instelling | Waarde |
|------------|--------|
| API-service | Monitoring API |
| Toegangstype | Site Access |
| Scopes | SITE_DATA en DEVICE_DATA |
| Toegestane redirect-URL('s) | `https://manosdatahubse.indevolt.com` |
| Toegestane return-URL('s) | `https://manosdatahubse.indevolt.com` |

U krijgt nu uw **CLIENT ID** en **CLIENT SECRET**. Kopieer en bewaar deze lokaal.

<img src={require("./img/solaredge_step2_new.png").default} style={{ maxWidth: "700px" }} />

## 3. Voeg V2-autorisatie toe via de INDEVOLT-app

Klik in de INDEVOLT-app in deze volgorde: **Home → Apparaat toevoegen → SolarEdge → Toegang toevoegen** om de autorisatie te starten:

- Voer de **CLIENT ID** en **CLIENT SECRET** van uw applicatie in
- Klik op de knop **Bind** — u wordt doorgestuurd naar de SolarEdge-inlogpagina
- Log in met uw SolarEdge e-mailadres en wachtwoord
- Klik na het inloggen op de knop **Approve** om te autoriseren
- Als u een pagina ziet met `{"result": true, "message":"OK"}`, dan is de autorisatie geslaagd!

<img src={require("./img/solaredge_step3_new.png").default} style={{ maxWidth: "700px" }} />

:::note
Als u na het inloggen geen pagina met de knop **Approve** ziet, ga dan terug naar de INDEVOLT-app en klik opnieuw op **Bind** — dan wordt de pagina met de Approve-knop weergegeven.
:::

Als er een fout op de laatste pagina staat, zoek dan uw foutcode hieronder op:

| Foutcode | Typische oorzaak | Oplossing |
|----------|------------------|-----------|
| **400** | Netwerkfout | Ga terug naar de app en start opnieuw door op **Bind** te klikken. |
| **403** | `DEVICE_DATA`-scope ontbreekt | Verwijder uw huidige SolarEdge-applicatie en maak een nieuwe aan met de **DEVICE_DATA**-scope. Ga daarna terug naar de app en autoriseer opnieuw met de nieuwe Client ID en Client Secret. |
| **429** | Maandelijkse kredietlimiet bereikt | Zorg ervoor dat er geen andere services de API aanroepen, en start de autorisatie opnieuw op de 1e van de volgende maand. |

Ga terug naar de INDEVOLT-app, klik in deze volgorde: **Profiel → Energie-integraties** — u zult zien dat SolarEdge nu verbonden is.

## Opmerkingen

- Als u eerst de autorisatie in INDEVOLT heeft voltooid en later het **CLIENT SECRET** opnieuw heeft gegenereerd in de SolarEdge-portal, wordt de autorisatie in INDEVOLT ongeldig. **Deautoriseer** SolarEdge in INDEVOLT en autoriseer opnieuw met het nieuwste Client Secret.
- Vanwege de kredietlimiet worden gegevens overdag slechts elke **15 minuten** bijgewerkt. Bij het voor het eerst toevoegen van SolarEdge-omvormers duurt het enige tijd voordat het apparaat beschikbaar is.
- Als de autorisatie is geslaagd maar de apparaatgegevens niet worden bijgewerkt, is de meest waarschijnlijke oorzaak dat u de **DEVICE_DATA**-scope niet heeft toegevoegd. Scopes kunnen na aanmaak niet worden gewijzigd — u moet uw SolarEdge-applicatie verwijderen en een nieuwe aanmaken, vervolgens SolarEdge in de app deautoriseren en opnieuw autoriseren met de nieuwe Client ID en Client Secret.
- Zowel de **toegestane redirect-URL('s)** als de **toegestane return-URL('s)** moeten zijn ingesteld op `https://manosdatahubse.indevolt.com`, anders kan de autorisatie niet worden voltooid.
- Eén locatie met meerdere omvormers is geen probleem — we kunnen ze allemaal aansluiten. Meerdere locaties met meerdere omvormers kunnen de limiet van 2.000 credits bereiken, waardoor niet alle apparaten normaal kunnen worden aangesloten. We raden aan om verschillende installaties onder afzonderlijke SolarEdge-monitoringsaccounts te plaatsen: autoriseer één account in INDEVOLT en neem contact op met het platformteam voor het andere account.
