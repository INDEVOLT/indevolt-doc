---
title: SolarEdge
description: So fügen Sie die V2-Autorisierung für SolarEdge hinzu
---

# So fügen Sie die V2-Autorisierung hinzu

:::note Vorbereitung
- Aktualisieren Sie Ihre INDEVOLT-App auf **V1.4.11** oder höher.
- Der kostenlose SolarEdge-API-Plan umfasst **2.000 Credits pro Monat**. Die Daten werden daher nur etwa alle **15 Minuten** aktualisiert.
- Laut der [offiziellen SolarEdge-Dokumentation](https://api-docs.solaredge.com/) wird **V1 am 1. November 2026 eingestellt**. Wenn Sie noch die V1-API (apiKey + siteId) verwenden, fügen Sie diese V2-Autorisierung bitte vor dem **1. November 2026** hinzu.
:::

## 1. Erstellen Sie ein Entwicklerkonto

Rufen Sie [developer.solaredge.com](https://developer.solaredge.com/) auf und melden Sie sich mit Ihren SolarEdge-Zugangsdaten an. Wenn Sie noch kein SolarEdge-Konto haben, registrieren Sie sich, um ein neues zu erstellen. In beiden Fällen werden Sie aufgefordert, ein Entwicklerkontoprofil auszufüllen:

| Feld | Was Sie eingeben |
|-------|---------------|
| Firmenname | Ihren Namen oder einen Projektnamen (nur englische Buchstaben und Zahlen, keine Akzente), z. B. „Maya Smith“ oder „Solar Dashboard Project“ |
| Branche | „Other / Hobbyist“ ist in Ordnung |
| Erwartete monatliche API-Nutzung | „Low — personal project“ ist in Ordnung |

:::info
Sie sind jetzt der **Kontoadministrator** eines neuen Entwicklerkontos mit automatisch bereitgestelltem **Free-Tier** (2.000 Credits/Monat, 10 CPM, 1 App). Ihr Heimkonto bleibt unverändert.
:::

## 2. Erstellen Sie eine Site-Access-Anwendung

Klicken Sie in der Konsole auf **Create Application** und führen Sie dann die drei Schritte aus:

1. **Name und Dienst** — Benennen Sie sie z. B. „My Home Dashboard“. Beschreibung: „Personal solar data integration“. Dienst: **Monitoring API**.
2. **Zugriffstyp** — Wählen Sie **Site Access** (Fleet Access ist ohne Installateurprofil auf Ihrem Konto nicht verfügbar).
3. **OAuth-Konfiguration** — Füllen Sie die folgenden Felder aus. Ihre **Client ID** und Ihr **Client Secret** werden anschließend generiert.

| Einstellung | Wert |
|---------|-------|
| Origin-URL | *leer lassen* |
| Redirect-URI | `https://manosdatahubse.indevolt.com` |
| Returned-URL | `https://manosdatahubse.indevolt.com` |
| Scopes | **SITE_DATA** + **DEVICE_DATA** |

:::caution Speichern Sie Ihr Secret jetzt
Kopieren Sie das **Client Secret** sofort — es wird **nur einmal** angezeigt. Legen Sie es in einer `.env`-Datei oder einem Passwortmanager ab.
:::

## 3. Überprüfen Sie Ihre Anwendungskonfiguration

**Stellen Sie sicher, dass der Anwendungstyp „SITE ACCESS“ ist:**

<img src={require("./img/solaredge_step2.png").default} style={{ maxWidth: "700px" }} />

**Klicken Sie auf den Anwendungsnamen und öffnen Sie die Seite „Settings“:**

<img src={require("./img/solaredge_step3.png").default} style={{ maxWidth: "400px" }} />

Vergewissern Sie sich, dass die **Allowed Redirect URL(s)** und **Allowed Returned URL(s) (Optional)** unsere Domain verwenden: `https://manosdatahubse.indevolt.com`.

**Klicken Sie auf „Credentials“**, um Ihre Client ID und Ihr Client Secret zu prüfen:

<img src={require("./img/solaredge_step4.png").default} style={{ maxWidth: "700px" }} />

:::tip
Sie finden das Client Secret nicht? Klicken Sie auf **Regenerate Secret**, um ein neues zu erstellen.
:::

## 4. Fügen Sie Ihre V2-Autorisierung aus der INDEVOLT-App hinzu

Gehen Sie in der INDEVOLT-App zu **Home → Add device → SolarEdge → Add Access**, um die Autorisierung zu starten.

**1. Geben Sie Ihre Client ID und Ihr Client Secret ein:**

<img src={require("./img/solaredge_auth_bind.jpeg").default} style={{ maxWidth: "240px" }} />

**2. Klicken Sie auf „Bind“** — Sie werden zur SolarEdge-Anmeldeseite weitergeleitet:

<img src={require("./img/solaredge_auth_login.jpeg").default} style={{ maxWidth: "240px" }} />

**3. Melden Sie sich** mit Ihrer SolarEdge-E-Mail-Adresse und Ihrem Passwort an.

**4. Klicken Sie auf „Approve“**, um zu autorisieren:

<img src={require("./img/solaredge_auth_approve.jpeg").default} style={{ maxWidth: "240px" }} />

:::tip
Wenn Sie die Seite mit der Schaltfläche **Approve** nicht sehen, gehen Sie bitte zurück zur INDEVOLT-App und klicken Sie erneut auf **Bind** — dann werden Sie zu dieser Seite weitergeleitet.
:::

**5. Bestätigung** — Sie sollten eine Seite mit `{"result": true, "message":"OK"}` sehen:

<img src={require("./img/solaredge_auth_success.jpeg").default} style={{ maxWidth: "240px" }} />

:::tip Fertig!
Gehen Sie in der INDEVOLT-App zurück zu **My Profile → Energy Integrations** — SolarEdge sollte als verbunden angezeigt werden.
:::

## Hinweise

- Wenn Sie die Autorisierung zuerst auf INDEVOLT abgeschlossen und das **CLIENT SECRET** später im SolarEdge-Portal neu generiert haben, wird die Autorisierung auf INDEVOLT ungültig. Führen Sie auf INDEVOLT **Deauthorize** für SolarEdge aus und autorisieren Sie erneut mit dem neuesten Client Secret.
- Aufgrund des Credit-Limits werden die Daten tagsüber nur etwa alle **15 Minuten** aktualisiert. Beim ersten Hinzufügen von SolarEdge-Wechselrichtern dauert es eine Weile, bis das Gerät verfügbar ist.
