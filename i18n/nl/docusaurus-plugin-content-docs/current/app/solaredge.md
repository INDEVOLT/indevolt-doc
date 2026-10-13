---
title: SolarEdge
description: Hoe u de SolarEdge Client ID en Client Secret verkrijgt
---

# Hoe u de SolarEdge Client ID en Client Secret verkrijgt

Voordat u SolarEdge-apparaten gebruikt, moet u uw INDEVOLT App bijwerken naar de nieuwste versie.

Wanneer u SolarEdge in de INDEVOLT App verbindt, moet u eerst de **Client ID** en **Client Secret** invoeren. Nadat u deze gegevens hebt ingevoerd, wordt u vanuit de INDEVOLT App doorgestuurd naar de SolarEdge-pagina. Meld u aan bij uw SolarEdge-account en voltooi de autorisatie.

> **Opmerking**
>
> Het gratis SolarEdge API-abonnement biedt **2.000 credits per maand**. Daarom worden apparaatgegevens standaard ongeveer elke **15 minuten** bijgewerkt.

## Hoe verkrijgt u de SolarEdge Client ID en Client Secret?

### Stap 1

Ga naar de [SolarEdge Developer Console](https://developer.solaredge.com/) en meld u aan met uw bestaande SolarEdge-account.

### Stap 2

Maak in de Developer Console een applicatie van het type **Site Access**.

<img src={require("./img/solaredge_step2.png").default} />

### Stap 3

Klik op de naam van de aangemaakte applicatie om de pagina **Settings** te openen.

<img src={require("./img/solaredge_step3.png").default} />

Stel op de pagina **Settings** de volgende twee URL's in als INDEVOLT-domein:

- **Allowed Redirect URL(s)**: `https://manosdatahubse.indevolt.com`
- **Allowed Returned URL(s) (Optional)**: `https://manosdatahubse.indevolt.com`

> **Opmerking**
>
> Zorg ervoor dat de bovenstaande URL's correct zijn ingevuld. Anders kan de SolarEdge-autorisatie mislukken.

### Stap 4

Ga naar de pagina **Credentials** om uw **Client ID** en **Client Secret** te bekijken.

<img src={require("./img/solaredge_step4.png").default} />

Als u de **Client Secret** niet kunt vinden, klikt u op **Regenerate Secret** om een nieuwe Client Secret te genereren.

> **Opmerking**
>
> Gebruik na het opnieuw genereren van de Client Secret de nieuwe Client Secret om de autorisatie te voltooien.