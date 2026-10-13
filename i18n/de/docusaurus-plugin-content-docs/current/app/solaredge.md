---
title: SolarEdge
description: So erhalten Sie die SolarEdge Client ID und das Client Secret
---

# So erhalten Sie die SolarEdge Client ID und das Client Secret

Bevor Sie SolarEdge-Geräte verwenden, aktualisieren Sie bitte Ihre INDEVOLT App auf die neueste Version.

Wenn Sie SolarEdge in der INDEVOLT App verbinden, müssen Sie zunächst die **Client ID** und das **Client Secret** eingeben. Nach der Eingabe werden Sie von der INDEVOLT App zur SolarEdge-Seite weitergeleitet. Melden Sie sich dort mit Ihrem SolarEdge-Konto an und schließen Sie die Autorisierung ab.

> **Hinweis**
>
> Der kostenlose SolarEdge-API-Tarif umfasst **2.000 Credits pro Monat**. Daher werden die Gerätedaten standardmäßig etwa alle **15 Minuten** aktualisiert.

## Wie erhalten Sie die SolarEdge Client ID und das Client Secret?

### Schritt 1

Rufen Sie die [SolarEdge Developer Console](https://developer.solaredge.com/) auf und melden Sie sich mit Ihrem bestehenden SolarEdge-Konto an.

### Schritt 2

Erstellen Sie in der Developer Console eine Anwendung vom Typ **Site Access**.

<img src={require("./img/solaredge_step2.png").default} />

### Schritt 3

Klicken Sie auf den Namen der erstellten Anwendung, um die **Settings**-Seite zu öffnen.

<img src={require("./img/solaredge_step3.png").default} />

Legen Sie auf der **Settings**-Seite die folgenden beiden URLs als INDEVOLT-Domain fest:

- **Allowed Redirect URL(s)**: `https://manosdatahubse.indevolt.com`
- **Allowed Returned URL(s) (Optional)**: `https://manosdatahubse.indevolt.com`

> **Hinweis**
>
> Stellen Sie sicher, dass die oben genannten URLs korrekt eingegeben wurden. Andernfalls kann die SolarEdge-Autorisierung möglicherweise nicht abgeschlossen werden.

### Schritt 4

Öffnen Sie die **Credentials**-Seite, um Ihre **Client ID** und Ihr **Client Secret** anzuzeigen.

<img src={require("./img/solaredge_step4.png").default} />

Wenn Sie das **Client Secret** nicht finden können, klicken Sie auf **Regenerate Secret**, um ein neues Client Secret zu generieren.

> **Hinweis**
>
> Verwenden Sie nach der Neugenerierung des Client Secrets das neue Client Secret, um die Autorisierung abzuschließen.