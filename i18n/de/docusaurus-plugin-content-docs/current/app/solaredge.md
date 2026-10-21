---
title: SolarEdge
description: V2-Autorisierung für SolarEdge hinzufügen
---

# Wie füge ich die V2-Autorisierung hinzu?

:::note Hinweis vorab
- Aktualisiere die INDEVOLT-App auf mindestens **V1.4.11** oder neuer.
- Der kostenlose SolarEdge-API-Tarif umfasst **2.000 Credits/Monat**, daher werden die Daten etwa alle **15 Minuten** aktualisiert – genau wie auf der SolarEdge-Website.
- Laut [offizieller SolarEdge-Dokumentation](https://api-docs.solaredge.com/) wird **V1 am 1. November 2026 eingestellt**. Wenn du noch die V1-API (apiKey + siteId) nutzt, füge diese V2-Autorisierung bitte vor dem **1. November 2026** hinzu.
:::

## 1. Entwicklerkonto erstellen

Gehe auf [developer.solaredge.com](https://developer.solaredge.com/) und melde dich mit deinem bestehenden SolarEdge-Konto an. Falls du noch kein SolarEdge-Konto hast, registriere dich. Du wirst dann aufgefordert, ein Entwicklerprofil auszufüllen:

| Feld | Eintrag |
|------|---------|
| Firmenname | Dein Name oder ein Projektname (nur englische Buchstaben und Zahlen, keine Akzente), z. B. "Maya Smith" oder "Solar Dashboard Project" |
| Branche | "Other / Hobbyist" ist in Ordnung |
| Erwartete monatliche API-Nutzung | "Low — personal project" ist in Ordnung |

:::info
Du bist jetzt **Kontoadministrator** eines neuen Entwicklerkontos mit automatisch aktiviertem **Free-Tarif** (2.000 Credits/Monat, 10 CPM, 1 App). Dein bestehendes SolarEdge-Konto bleibt unberührt.
:::

## 2. Anwendung erstellen, um CLIENT ID und CLIENT SECRET zu erhalten

| Einstellung | Wert |
|-------------|------|
| API-Dienst | Monitoring API |
| Zugriffstyp | Site Access |
| Scopes | SITE_DATA und DEVICE_DATA |
| Erlaubte Redirect-URL(s) | `https://manosdatahubse.indevolt.com` |
| Erlaubte Returned-URL(s) | `https://manosdatahubse.indevolt.com` |

Anschließend erhältst du deine **CLIENT ID** und dein **CLIENT SECRET**. Kopiere und speichere diese lokal.

<img src={require("./img/solaredge_step2_new.png").default} style={{ maxWidth: "700px" }} />

## 3. V2-Autorisierung über die INDEVOLT-App hinzufügen

Klicke in der INDEVOLT-App in dieser Reihenfolge: **Startseite → Gerät hinzufügen → SolarEdge → Zugriff hinzufügen**, um die Autorisierung zu starten:

- Gib die **CLIENT ID** und das **CLIENT SECRET** aus deiner Anwendung ein
- Klicke auf die Schaltfläche **Bind** – du wirst zur SolarEdge-Anmeldeseite weitergeleitet
- Melde dich mit deiner SolarEdge-E-Mail und deinem Passwort an
- Klicke nach der Anmeldung auf die Schaltfläche **Approve**, um zu autorisieren
- Wenn du eine Seite mit `{"result": true, "message":"OK"}` siehst, war die Autorisierung erfolgreich!

<img src={require("./img/solaredge_step3_new.png").default} style={{ maxWidth: "700px" }} />

:::note
Wenn du nach der Anmeldung keine Seite mit der Schaltfläche **Approve** siehst, gehe zurück in die INDEVOLT-App und klicke erneut auf **Bind** – dann wird dir die Seite mit der Approve-Schaltfläche angezeigt.
:::

Wenn auf der letzten Seite ein Fehler angezeigt wird, finde unten deinen Fehlercode:

| Fehlercode | Typische Ursache | Lösung |
|------------|------------------|--------|
| **400** | Netzwerkfehler | Gehe zurück in die App und starte die Autorisierung erneut, indem du auf **Bind** klickst. |
| **403** | `DEVICE_DATA`-Scope fehlt | Lösche deine aktuelle SolarEdge-Anwendung und erstelle eine neue, die den **DEVICE_DATA**-Scope enthält. Autorisieren Sie sich dann erneut in der App mit der neuen Client-ID und dem neuen Client-Secret. |
| **429** | Monatliches Kreditlimit erreicht | Stelle sicher, dass keine anderen Dienste die API aufrufen, und starte die Autorisierung am 1. des nächsten Monats erneut. |

Gehe zurück in die INDEVOLT-App und klicke in dieser Reihenfolge: **Profil → Energie-Integrationen** – dort wird SolarEdge nun als verbunden angezeigt.

## Hinweise

- Wenn du die Autorisierung zuerst in INDEVOLT abgeschlossen und später das **CLIENT SECRET** im SolarEdge-Portal neu generiert hast, wird die Autorisierung in INDEVOLT ungültig. **Deautorisieren** Sie SolarEdge in INDEVOLT und autorisieren Sie sich erneut mit dem neuesten Client-Secret.
- Aufgrund des Kreditlimits werden die Daten tagsüber nur alle **15 Minuten** aktualisiert. Beim ersten Hinzufügen von SolarEdge-Wechselrichtern dauert es eine Weile, bis das Gerät verfügbar ist.
- Wenn die Autorisierung erfolgreich war, die Gerätedaten aber nicht aktualisiert werden, liegt das höchstwahrscheinlich daran, dass du den **DEVICE_DATA**-Scope nicht hinzugefügt hast. Scopes können nach der Erstellung nicht geändert werden – du musst deine SolarEdge-Anwendung löschen und eine neue erstellen, dann SolarEdge in der App deautorisieren und mit der neuen Client-ID und dem neuen Client-Secret erneut autorisieren.
- Sowohl die **erlaubte(n) Redirect-URL(s)** als auch die **erlaubte(n) Returned-URL(s)** müssen auf `https://manosdatahubse.indevolt.com` gesetzt sein, da die Autorisierung sonst nicht abgeschlossen werden kann.
- Eine Anlage mit mehreren Wechselrichtern ist kein Problem – wir können alle anbinden. Mehrere Anlagen mit mehreren Wechselrichtern können das Limit von 2.000 Credits überschreiten, sodass nicht alle Geräte normal angebunden werden können. Wir empfehlen, verschiedene Anlagen unter separaten SolarEdge-Überwachungskonten anzulegen: Autorisieren Sie ein Konto in INDEVOLT und wenden Sie sich für das andere an das Plattformteam.
