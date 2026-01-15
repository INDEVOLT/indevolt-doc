---
title: Zuhause
description: Überwachen Sie den Energiefluss Ihres Zuhauses in Echtzeit, einschließlich Erzeugung, Verbrauch und Speicherung.
---

# Zuhause

Die Seite **Zuhause** dient als Hauptoberfläche zur Verwaltung der Energiedaten Ihres aktuellen Zuhauses. Sie bietet eine Übersicht über die Echtzeit-Erzeugung, den Verbrauch und den gesamten Energiefluss.

<img src={require("./img/home_intro.png").default} width="240"/>

| Nr. | Funktion        | Beschreibung |
| --- | --------------- | --- |
| 1   | Zuhause      | Zeigt den aktuellen Namen des Zuhauses an. Tippen Sie darauf, um alle unter Ihrem Konto gespeicherten Zuhause anzuzeigen, zu wechseln oder zu verwalten. |
| 2   | +               | Fügt ein neues Gerät zu Ihrem Zuhause hinzu. |
| 3   | Dashboard       | Passen Sie das Design des Energiefluss-Diagramms an und wählen Sie aus, welche Daten angezeigt werden sollen. |
| 4   | Wetter         | Zeigt das lokale Wetter und die Temperatur in Echtzeit an. |
| 5   | Gehe zur Konfiguration| Wenn kein Tarifplan festgelegt ist, erscheint die Schaltfläche **Gehe zur Konfiguration** – tippen Sie darauf, um Kauf-/Verkaufspreise einzustellen. Ist ein Plan vorhanden, werden die heutigen Tarife angezeigt. |
| 6   | Stromfluss     | Ein dynamisches Diagramm, das visualisiert, woher die Energie Ihres Zuhauses kommt und wohin sie fließt. |
| 7   | Täglich           | Zeigt tägliche Zusammenfassungen der Energieerzeugung, des Verbrauchs und weiterer wichtiger Kennzahlen an. |

---

## 1. My Zuhause

### 1.1 Zuhause wechseln

Tippen Sie oben links auf den Namen des Zuhauses, um die Liste aller mit Ihrem Konto verknüpften Zuhause zu öffnen. Wählen Sie ein Zuhause aus, um zur entsprechenden Energieansicht zu wechseln.

<img src={require("./img/tap_myhome.png").default} width="240"/>
<img src={require("./img/select_home.jpg").default} width="240"/>

### 1.2 Zuhause verwalten

Tippen Sie am unteren Rand der Liste auf **Verwalten**, um zur Verwaltungsseite zu gelangen.

<img src={require("./img/select_home.jpg").default} width="240"/>
<img src={require("./img/manage_home.jpg").default} width="240"/>

**Zuhause hinzufügen**

1. Tippen Sie auf der Verwaltungsseite auf die **+**-Schaltfläche oben rechts.  
2. Folgen Sie den Anweisungen auf dem Bildschirm, um die Informationen für das neue Zuhause einzugeben. Details finden Sie im Abschnitt **[Zuhause hinzufügen](./profile.md#21-zuhause-hinzufügen)**.

**Zuhause bearbeiten**

Wählen Sie das Zuhause aus, das Sie aktualisieren möchten, um dessen Informationsseite zu öffnen. Sie können:  
- den Namen, die Adresse oder andere Einstellungen des Zuhauses [**bearbeiten**](./profile.md#22-zuhause-bearbeiten).  
- das Zuhause [**löschen**](./profile.md#23-zuhause-löschen).

---

## 2. Gerät hinzufügen

Lesen Sie die Anleitung **[Geräte hinzufügen](./add-device.md)**, um zu erfahren, wie Sie ein neues Gerät mit Ihrem Zuhause verbinden.

---

## 3. Dashboard

Tippen Sie auf die Dashboard-Einstellungs-Schaltfläche, um die Einstellungsseite zu öffnen.

<img src={require("./img/select_dashboard.png").default} width="240"/>
<img src={require("./img/dashboard.png").default} width="240"/>

- **Stromfluss**: Tippen Sie auf die Option **Stromfluss**, um ein Design auszuwählen.  
  <img src={require("./img/configure_power_flow.jpg").default} width="240"/>

- **Täglich**: Wählen Sie die Daten aus, die auf der Zuhause-Seite angezeigt werden sollen.  
  <img src={require("./img/configure_daily.jpg").default} width="240"/>

---

## 4. Weather

In diesem Bereich werden das aktuelle Wetter und die Temperatur am Standort Ihres Zuhauses angezeigt.

---

## 5. Gehe zur Konfiguration

Dieser Bereich zeigt unterschiedliche Inhalte abhängig von Ihrer Tarifkonfiguration an:

- Wenn kein Tarifplan eingerichtet ist, erscheint die Schaltfläche **Gehe zur Konfiguration**. Tippen Sie darauf, um Kauf- und Verkaufspreise festzulegen.  
- Wenn ein Plan vorhanden ist, werden die heutigen Preise angezeigt. Tippen Sie darauf, um frühere Preise anzuzeigen.

---

## 6. Stromfluss

Das Energiefluss-Diagramm zeigt in Echtzeit anschaulich, woher die Energie Ihres Zuhauses stammt und wohin sie fließt.

- Aktualisieren: Zum Aktualisieren der Daten nach unten ziehen.  
- Design-Einstellungen: Um das Design zu ändern, gehen Sie zu **[Dashboard](#3-dashboard)**.
- Datenquelle festlegen: Die im Flussdiagramm angezeigten Daten stammen aus den [Datenquelle](./profile.md#5-datenquelle). Sie können diese nach Bedarf anpassen.

<img src={require("./img/power_flow.png").default} width="240"/>

---

## 7. Täglich

Die Tagesansicht fasst die gesamte Energieerzeugung und den Gesamtverbrauch des Tages zusammen.

| Parameter           | Beschreibung |
| ------------------- | --- |
| Eigenverbrauch      | (Direkt aus PV genutzter Strom + PV-Strom zum Laden der Batterie) / gesamte PV-Erzeugung – zeigt, wie viel Solarstrom im Haushalt genutzt wurde. |
| Autarkie            | (Last aus PV + Last aus Batterie) / Gesamtverbrauch – zeigt, wie viel des Strombedarfs aus eigener Energie gedeckt wurde. |
| Erzeugung           | Gesamte PV-Erzeugung des Tages. |
| Verbrauch           | Gesamter Stromverbrauch des Haushalts am Tag. |
| Vom Netz        | Insgesamt heute aus dem Netz bezogener Strom. |
| Ins Netz            | Insgesamt heute ins Netz eingespeister Strom. |
| Ladung             | Insgesamt in die Batterie geladene Energie. |
| Entladung            | Insgesamt aus der Batterie entladene Energie. |

<img src={require("./img/daily.png").default} width="240"/>

Welche Parameter hier angezeigt werden, können Sie über die Einstellungen im **[Dashboard](#3-dashboard)** anpassen.
