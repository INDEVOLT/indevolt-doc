---
title: SolarEdge
description: So erhalten Sie den SolarEdge API-Schlüssel und die Site-ID
---

# So erhalten Sie den SolarEdge API-Schlüssel und die Site-ID

Es gibt drei Möglichkeiten, den SolarEdge API-Schlüssel und die Site-ID zu erhalten:

- **Option 1**: Melden Sie sich bei Ihrem [SolarEdge-Monitoring-Konto](https://monitoring.solaredge.com/) an und rufen Sie die Daten selbst ab.
- **Option 2**: Kontaktieren Sie Ihren Installateur per E-Mail und bitten Sie um Administratorzugang oder um die Bereitstellung von API-Schlüssel und Site-ID.
- **Option 3**: Fordern Sie die Informationen über den [SolarEdge-Chat-Support](https://www.solaredge.com/us/support) an.

---

## Option 1: Selbst abrufen

### Schritt 1

Melden Sie sich bei Ihrem [SolarEdge-Monitoring-Konto](https://monitoring.solaredge.com/) an.

### Schritt 2

Wenn Ihr Konto über **Admin** verfügt, erscheint im oberen Menü ein **Admin**-Link. Klicken Sie darauf, um den Admin-Bereich zu öffnen.

<img src={require("./img/solaredge_step2.png").default} />

<details open>
  <summary>**Problem**: Der Menüpunkt „Admin“ wird nicht angezeigt? Wechseln Sie zu Option 2.</summary>

  **Lösung**:
  - (Empfohlen) Beantragen Sie den Administratorzugang per E-Mail bei Ihrem Installateur;
  - Bitten Sie Ihren Installateur, Ihren **API-Schlüssel** abzurufen und Ihnen zuzusenden.

</details>

### Schritt 3

Klicken Sie im **Admin**-Bereich auf **Site Access** und anschließend auf **Access Control**. Siehe Screenshot unten.

<img src={require("./img/solaredge_step3.png").default} />

### Schritt 4

- Scrollen Sie zum Bereich „API Access“;
- Aktivieren Sie das Kontrollkästchen „I have read, understood…“;
- Klicken Sie auf **Save**;
- Bestätigen Sie mit **Ok**;
- Doppelklicken Sie auf den Schlüsselcode, um den vollständigen **API-Schlüssel** zu kopieren;
- Kopieren Sie die **Site-ID**.

### Schritt 5

Fügen Sie den **API-Schlüssel** und die **Site-ID** in die entsprechenden Felder der INDEVOLT App ein.

:::note
1. Das Klicken auf „New key“ kann eine bestehende API-Verbindung unterbrechen.
2. Verwenden Sie denselben API-Schlüssel nicht in mehreren Anwendungen, um Ratenbegrenzungen zu vermeiden.
3. Nach dem Eintragen der Daten kann es 5–10 Minuten dauern, bis die Gerätenummer in der SolarEdge-Liste angezeigt wird.
:::
