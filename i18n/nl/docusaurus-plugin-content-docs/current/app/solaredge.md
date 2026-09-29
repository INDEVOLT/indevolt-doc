---
title: SolarEdge
description: Hoe u een SolarEdge API Key en Site ID verkrijgt
---

# Hoe u een SolarEdge API Key en Site ID verkrijgt

Er zijn drie manieren om een SolarEdge API Key en Site ID te verkrijgen:

- **Methode 1**: Log in op uw [SolarEdge Monitoring Platform-account](https://monitoring.solaredge.com/) en verkrijg deze gegevens zelf.
- **Methode 2**: Neem per e-mail contact op met uw installateur en vraag om beheerdersrechten of om de API Key en Site ID rechtstreeks aan u te verstrekken.
- **Methode 3**: Vraag de gegevens aan via de [online klantenservice van SolarEdge](https://www.solaredge.com/us/support).

---

## Methode 1: Zelf verkrijgen

### Stap 1

Log in op uw [SolarEdge Monitoring Platform-account](https://monitoring.solaredge.com/).

### Stap 2

Als uw account over **Admin**-rechten beschikt, ziet u bovenaan het menu de optie **Admin**. Klik hierop om de beheerpagina te openen.

<img src={require("./img/solaredge_step2.png").default} />

<details open>
  <summary>**Probleem:** Ziet u de menuoptie Admin niet? Raadpleeg dan methode 2.</summary>

  **Oplossing:**
  - (Aanbevolen) Vraag uw installateur per e-mail om beheerdersrechten toe te kennen;
  - Vraag uw installateur om de **API Key** voor u op te halen en toe te sturen. Indien nodig kunt u een link naar deze pagina meesturen als referentie.

</details>

### Stap 3

Ga op de pagina **Admin** naar **Site Access** → **Access Control**, zoals weergegeven in de onderstaande afbeelding.

<img src={require("./img/solaredge_step3.png").default} />

### Stap 4

- Scroll naar de sectie **API Access**;
- Vink **“I have read, understood…”** aan;
- Klik op **Save** om de instellingen op te slaan;
- Klik in het pop-upvenster op **Ok**;
- Dubbelklik op de lange sleutel om de volledige **API Key** te kopiëren;
- Kopieer daarnaast ook de **Site ID**.

### Stap 5

Voer vervolgens de **API Key** en **Site ID** in de daarvoor bestemde velden in de INDEVOLT App in.

:::note

1. Door op **New key** te klikken kunnen bestaande API-verbindingen ongeldig worden. In dat geval moet u de nieuwe API Key opnieuw invoeren in de betreffende toepassingen.
2. Om API-limieten te voorkomen, wordt aanbevolen dezelfde API niet gelijktijdig in meerdere applicaties te gebruiken.
3. Nadat de gegevens zijn ingevuld en het apparaat online is, kan het 5 tot 10 minuten duren voordat het serienummer (SN) zichtbaar wordt in de SolarEdge-apparatenlijst.

:::