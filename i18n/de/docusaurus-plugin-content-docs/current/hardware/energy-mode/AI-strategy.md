---
title: AI-Strategie
description: Erfahren Sie, wie die Indevolt AI-Strategie Lade- und Entladevorgänge auf Basis von Strompreisen, Wetterbedingungen, Haushaltsverbrauch und Batteriestatus dynamisch plant und wie sie zur Senkung der Stromkosten, zum automatischen Betrieb, zur transparenten Anzeige von Betriebsgründen und zur Verlängerung der Batterielebensdauer beiträgt.
---

# AI-Strategie

## Intelligente Energiemanagementstrategie für Heimspeicher

## 1. Warum eine AI-Strategie benötigt wird

Viele Haushalte installieren Photovoltaik- und Energiespeichersysteme, um Stromkosten zu senken und Solarenergie möglichst effizient zu nutzen. Um dieses Ziel zu erreichen, ist neben der Geräteleistung auch die tägliche Planung der Lade- und Entladevorgänge entscheidend.

Wenn die Lade- und Entladezeiten nicht auf Änderungen der Strompreise, Wetterbedingungen und des Haushaltsverbrauchs abgestimmt sind, kann es vorkommen, dass die Batterie nicht zum passenden Zeitpunkt geladen oder entladen wird. Häufig treten dabei die folgenden vier Probleme auf.

### Problem 1: Unpassender Entladezeitpunkt – Strombezug während teurer Zeiten

Vor dem Verlassen des Hauses am Morgen und nach der Rückkehr am Abend ist der Stromverbrauch im Haushalt häufig besonders hoch. Geräte wie Reiskocher, Klimaanlagen und Warmwasserbereiter können gleichzeitig betrieben werden, wodurch eine hohe Haushaltslast entsteht. Diese Zeiträume fallen häufig auch mit höheren Strompreisen zusammen.

Eine feste Strategie entlädt die Batterie nach voreingestellten Zeiträumen und kann Lastspitzen im Haushalt und Preisspitzen nicht präzise erkennen. Dadurch kann die Batterie bereits entladen sein, bevor die Spitzenlast endet, sodass anschließend weiterhin Strom zu einem hohen Preis aus dem Netz bezogen werden muss.

### Problem 2: Ungeeignete Ladeplanung – überschüssige PV-Energie wird nicht effektiv genutzt

An einem sonnigen Wochenende kann die PV-Erzeugung deutlich höher sein als der aktuelle Strombedarf des Haushalts. Wenn die Batterie bereits in den frühen Morgenstunden nach einem festen Ladeplan vollständig geladen wurde, kann überschüssige PV-Energie zur Mittagszeit nicht gespeichert werden und wird möglicherweise zu einem niedrigeren Preis ins Netz eingespeist.

Während der teuren Abendstunden steht dann möglicherweise nicht mehr genügend Energie in der Batterie zur Verfügung. Bei Haushalten mit einer größeren PV-Anlage und vielen sonnigen Tagen kann diese Situation wiederholt auftreten.

### Problem 3: Feste Regeln können sich nicht an laufende Veränderungen anpassen

Zeitabhängige Strompreise können sich an Werktagen, Wochenenden und in Spitzenzeiten unterscheiden. Auch Wetterbedingungen und die Gewohnheiten im Haushalt ändern sich fortlaufend und beeinflussen dadurch die PV-Erzeugung und die Haushaltslast.

Eine einmal eingerichtete und langfristig unveränderte feste Strategie kann dadurch leicht von den tatsächlichen Bedingungen abweichen. Häufige manuelle Anpassungen sind nicht nur zeitaufwendig, sondern führen auch nicht zwangsläufig dauerhaft zu besseren Ergebnissen.

### Problem 4: Nur kurzfristige Stromkosten werden berücksichtigt, die Batterielebensdauer wird vernachlässigt

Die Energiespeicherbatterie ist ein wichtiger Bestandteil des Systems. Langfristige Tiefenzyklen oder häufige starke Änderungen der Lade- und Entladeleistung können die Alterung der Batterie beschleunigen.

Wenn langfristig ausschließlich kurzfristige Einsparungen bei den Stromkosten angestrebt werden und das Batteriemanagement vernachlässigt wird, kann eine übermäßige Nutzung der Batterie die späteren Austauschkosten erhöhen und die Gesamtwirtschaftlichkeit beeinträchtigen.

Allen diesen Problemen liegt gemeinsam zugrunde, dass feste Strategien nach voreingestellten Zeitplänen arbeiten und Änderungen der Strompreise, Wetterbedingungen und des Haushaltsverbrauchs am Folgetag nicht im Voraus berücksichtigen können. Daher muss der Lade- und Entladeplan des Energiespeichersystems täglich auf Basis der tatsächlichen Bedingungen dynamisch angepasst werden.

## 2. Was ist eine AI-Strategie?

Eine AI-Strategie ermöglicht es dem Energiespeichersystem, jeden Tag auf Basis der Strompreise, Wetterbedingungen und des Haushaltsverbrauchs automatisch festzulegen, wann die Batterie geladen und wann sie entladen wird.

Das System berücksichtigt im Voraus die Strompreise, die PV-Erzeugung und den Haushaltsverbrauch für einen zukünftigen Zeitraum und erstellt daraus einen Lade- und Entladeplan für die verschiedenen Tageszeiten.

Das System berücksichtigt täglich insbesondere die folgenden vier Informationsarten und erstellt daraus den Lade- und Entladeplan:

| Referenzinformation | Zweck |
| --- | --- |
| Strompreis | Ermittelt Zeiträume mit niedrigeren und höheren Strompreisen. |
| PV-Erzeugung | Ermittelt die PV-Erzeugung und Zeiträume, in denen überschüssige PV-Energie verfügbar sein kann. |
| Haushaltslast | Ermittelt Zeiträume mit höherem Stromverbrauch sowie Unterschiede zwischen Werktagen und Wochenenden. |
| Batteriestatus | Ermittelt den aktuellen Ladezustand der Batterie, den verfügbaren Lade- und Entladespielraum sowie die zu reservierende Energiemenge. |

Das System kombiniert Strompreise, Wetterbedingungen und den Haushaltsverbrauch, um geeignete Lade- und Entladezeiten festzulegen. Wenn sich die tatsächlichen Bedingungen ändern, wird der Plan entsprechend angepasst.

Ein typisches Beispiel:

Anhand eines typischen Energiespeicherszenarios werden die Betriebsergebnisse einer herkömmlichen festen Strategie und einer dynamischen AI-Optimierungsstrategie unter denselben Bedingungen hinsichtlich dynamischer Strompreise, PV-Erzeugung und Haushaltslast verglichen.

Wie in der Abbildung dargestellt, lädt und entlädt die herkömmliche Strategie zu voreingestellten Zeiten (fester Zeitplan), während die AI-Strategie die Lade- und Entladezeiten auf Basis von Strompreis, PV-Erzeugung und Last dynamisch auswählt (dynamische Optimierung). Die tatsächlichen Betriebsdaten zeigen: Im Vergleich zur herkömmlichen Strategie erzielte die AI-Strategie einen um 18,3 % höheren Ertrag. In diesem Einzelfall wurde ein zusätzlicher Ertrag von 6.048,83 CNY erzielt.

**Abbildung 1: Vergleich der Lade- und Entladeplanung der herkömmlichen Strategie und der AI-Strategie bei dynamischen Strompreisen**

![Abbildung 1: Vergleich der Lade- und Entladeplanung der herkömmlichen Strategie und der AI-Strategie bei dynamischen Strompreisen](./img/image-1.png)

## 3. Die wichtigsten Funktionen der Indevolt AI-Strategie

Die Indevolt AI-Strategie adressiert mehrere zentrale Probleme bei der Nutzung von Heimspeichern. Durch die dynamische Planung von Lade- und Entladevorgängen kann sich das Energiespeichersystem besser an die täglichen Änderungen von Strompreisen, Wetterbedingungen und Haushaltsverbrauch anpassen.

### 1. Stromkosten senken: Lade- und Entladezeiten sinnvoll planen

Die Vorteile eines Heimspeichers hängen nicht nur von der Batteriekapazität ab, sondern auch davon, wann die Batterie geladen und entladen wird.

Durch die Anpassung der Lade- und Entladezeiten kann das System unnötigen Strombezug aus dem Netz während teurer Zeiträume reduzieren und günstigen Strom sowie PV-Energie möglichst gut nutzen. Die tatsächlichen Ergebnisse können je nach lokalen Strompreisen, PV-Konfiguration, Gerätebedingungen und Verbrauchsgewohnheiten des Haushalts unterschiedlich ausfallen.

Dies zeigt sich hauptsächlich in drei Bereichen:

- **Höhere Batterienutzung:** Auf Basis der Strompreise und des Haushaltsverbrauchs wird die Batterie zu geeigneten Zeiten geladen und die gespeicherte Energie für Zeiträume eingeplant, in denen sie stärker benötigt wird. Dadurch wird eine längere ungenutzte Batteriekapazität reduziert.
- **Höherer PV-Eigenverbrauch:** Wenn zur Mittagszeit eine höhere PV-Erzeugung erwartet wird, wird frühzeitig Batteriekapazität freigehalten, um anschließend erzeugte überschüssige PV-Energie möglichst zu speichern und den lokalen Verbrauch von PV-Energie zu erhöhen.
- **Präziseres Entladen und weniger Strombezug:** Unter Berücksichtigung der Strompreise und der Haushaltslast zu unterschiedlichen Zeiten wird die verfügbare Batteriekapazität bevorzugt in den Zeiträumen eingesetzt, in denen sie am meisten benötigt wird. Dadurch wird der Strombezug aus dem Netz während teurer Zeiträume reduziert.

Auf Grundlage der tatsächlichen Betriebsdaten von 851 Nutzern zeigte die Indevolt AI-Strategie deutliche Vorteile bei der Kostensenkung:

**Abbildung 2: Verteilung der Ertragssteigerung bei Nutzern der AI-Strategie (Daten aus den tatsächlichen Betriebsstatistiken von 851 Nutzern)**

![Abbildung 2: Verteilung der Ertragssteigerung bei Nutzern der AI-Strategie (Daten aus den tatsächlichen Betriebsstatistiken von 851 Nutzern)](./img/image-2.png)

Die Daten zeigen, dass die Indevolt AI-Strategie bei der überwiegenden Mehrheit der Nutzer zu konkreten Einsparungen bei den Stromkosten führen kann. Die mediane Ertragssteigerung liegt im Bereich von 10 % bis 30 %. Bei fast einem Viertel der Nutzer (24,68 %) lag die Ertragssteigerung über 80 %. Insgesamt können die meisten Nutzer unterschiedlich hohe Einsparungen bei den Stromkosten erzielen. Die tatsächliche Höhe der Einsparungen hängt von den lokalen Strompreisen, der PV-Konfiguration, den Verbrauchsgewohnheiten des Haushalts und den Gerätebedingungen ab.

### 2. Automatischer Betrieb: Weniger tägliche Einstellungen

Strompreise, Wetterbedingungen und Verbrauchsgewohnheiten im Haushalt können sich täglich ändern. Wenn Nutzer die Lade- und Entladezeiten manuell anpassen, ist dies nicht nur mit häufigen Einstellungen verbunden, sondern kann auch dazu führen, dass Änderungen der tatsächlichen Bedingungen nicht rechtzeitig berücksichtigt werden.

Nach Aktivierung der AI-Strategie führt das System diese Anpassungen automatisch durch. Eine tägliche Neukonfiguration ist daher nicht erforderlich:

- **Plan automatisch erstellen:** Erstellt auf Basis von Strompreisen, Wetterbedingungen und den Verbrauchsgewohnheiten des Haushalts einen Lade- und Entladeplan.
- **Plan automatisch anpassen:** Passt die nachfolgenden Vorgänge an neue Bedingungen an, wenn sich Wetter, PV-Erzeugung oder Haushaltsverbrauch ändern.
- **Kontinuierlicher Betrieb:** Nach Abschluss der Strategieeinstellungen ist kein häufiges tägliches Eingreifen erforderlich. Das Energiespeichersystem arbeitet automatisch nach dem erstellten Plan.

### 3. Transparenter Betrieb: Gründe für jeden Vorgang nachvollziehbar

Ein Energiespeichersystem kann im Laufe eines Tages mehrmals laden, entladen oder im Standby-Modus bleiben. Für Nutzer ist neben der Frage „Wie arbeitet das System?“ auch die Frage „Warum arbeitet das System so?“ relevant.

Wenn Nutzer wissen möchten, warum das System zu einem bestimmten Zeitpunkt lädt, entlädt oder im Standby-Modus bleibt, können sie den entsprechenden Grund direkt anzeigen, zum Beispiel:

- **Warum wird die Batterie jetzt geladen?** Der aktuelle Strompreis ist niedrig und eignet sich zum Nachladen der Batterie.
- **Warum wird die Batterie jetzt entladen?** Der aktuelle Strombedarf ist hoch oder der Strompreis ist relativ hoch.
- **Warum wird die Batterie vorübergehend weder geladen noch entladen?** Die aktuellen Bedingungen hinsichtlich Strompreis, PV-Erzeugung oder Haushaltslast sind vorübergehend nicht für einen Lade- oder Entladevorgang geeignet.

Durch klar und nachvollziehbar angezeigte Betriebsgründe können Nutzer die Entscheidungen des Systems leichter verstehen und den tatsächlichen Betrieb überprüfen.

### 4. Batterielebensdauer berücksichtigen: Langfristige Betriebskosten reduzieren

Neben den täglichen Stromkosten beeinflusst auch die Planung von Lade- und Entladevorgängen die langfristige Nutzung der Batterie.

Bei der Erstellung des Lade- und Entladeplans berücksichtigt das System den aktuellen Batteriestatus und die verfügbare Energiemenge, vermeidet unnötige Lade- und Entladevorgänge und stellt ein Gleichgewicht zwischen Stromkosten und langfristiger Batterienutzung her.

Eine sinnvollere Planung der Lade- und Entladevorgänge kann unnötige Tiefenzyklen und häufige Leistungsschwankungen reduzieren und dadurch zusätzlichen Verschleiß während des langfristigen Batteriebetriebs verringern.

Die Strategie berücksichtigt nicht nur, wie viel heute eingespart werden kann, sondern auch, wie die Batterie langfristig genutzt werden sollte.

## 4. Häufig gestellte Fragen

### Q1: Warum bezieht die AI-Strategie vorübergehend Strom aus dem Netz, obwohl die Batterie noch geladen ist?

Dies bedeutet nicht unbedingt, dass die Strategie nicht ordnungsgemäß funktioniert. Die AI-Strategie berücksichtigt die Gesamtkosten über den gesamten Tag und sogar über einen längeren Zeitraum und nicht nur die Frage, ob zum aktuellen Zeitpunkt Strom bezogen werden soll. Das System kann Energie für einen späteren Zeitraum mit höheren Strompreisen reservieren oder auf eine günstigere Gelegenheit zum Nachladen warten.

### Q2: Warum lädt der AI-Modus die Batterie nicht auf 100 %, und warum kann Strom ins Netz eingespeist werden, obwohl die Batterie noch nicht vollständig geladen ist?

Der Ziel-Ladezustand der Batterie wird dynamisch angepasst und bedeutet nicht, dass die Batterie immer vollständig geladen wird. Das System berücksichtigt unter anderem den zukünftigen Energiebedarf, die PV-Prognose, Strombezugs- und Einspeisepreise, Lade- und Entladeverluste sowie Leistungsgrenzen. Wenn der erwartete Ertrag aus der Einspeisung höher ist als der erwartete Nutzen einer weiteren Speicherung, kann auch bei einer nicht vollständig geladenen Batterie eine Einspeisung sinnvoll sein.

### Q3: Ist es normal, dass die Lade-/Entladeleistung direkt nach Aktivierung des AI-Modus sehr niedrig ist oder der Plan am ersten Tag nicht sinnvoll erscheint?

Dies ist normal. Nach der erstmaligen Aktivierung verfügt das System nur über begrenzte Informationen über die Verbrauchsgewohnheiten des Haushalts. Wenn noch nicht genügend historische Daten vorhanden sind, arbeitet das System vorsichtiger, reduziert die Leistung und führt weniger Lade- und Entladevorgänge durch. Mit zunehmender Menge an gültigen Daten zu Last, PV-Erzeugung und Strompreisen wird die Strategie schrittweise angepasst und optimiert.

### Q4: Warum beträgt die AI-PV-Prognose weiterhin 0, obwohl ein PV-Wechselrichter angeschlossen ist und die aktuelle PV-Erzeugung angezeigt werden kann?

Bei der Prognose der PV-Erzeugung berücksichtigt das System zum einen die vom Gerät gemeldete aktuelle PV-Leistung und zum anderen die in den Strategieeinstellungen konfigurierte installierte PV-Leistung. Wenn dieser Parameter auf 0 gesetzt ist, kann die Prognose ebenfalls mit 0 angezeigt werden.

### Q5: Warum lädt die AI-Strategie nicht in jedem Zeitraum mit niedrigem Strompreis? Muss ich die Preisdifferenz zwischen Strombezug und Einspeisung manuell einstellen?

Nein. Ein niedriger Strompreis bedeutet nicht automatisch, dass sich das Laden wirtschaftlich lohnt, da beim Laden und Entladen Energieverluste entstehen. Lade- und Entladevorgänge sind erst sinnvoll, wenn die Preisdifferenz ausreicht, um diese Verluste abzudecken. Das System führt diese Bewertung automatisch durch.

### Q6: Die Batterie wurde über Nacht nicht vollständig entladen. Bedeutet das, dass die AI-Strategie nicht ordnungsgemäß funktioniert?

Nicht unbedingt. Die maximale Entladeleistung begrenzt die Leistung, die innerhalb eines bestimmten Zeitraums bereitgestellt werden kann. Wenn die maximale Entladeleistung beispielsweise 800 W beträgt, überschreitet die Batterie diesen Grenzwert auch dann nicht, wenn die Haushaltslast höher ist. Wenn der Zeitraum während der Nacht nicht lang genug ist oder der Haushalt nicht genügend Strom verbraucht, kann es vorkommen, dass am Morgen noch ein relativ hoher Ladezustand vorhanden ist.

### Q7: Ich möchte, dass die Batterie jeden Tag zu festen Zeiten und mit fester Leistung geladen und entladen wird und einen bestimmten Ladezustand erreicht. Sollte ich den AI-Modus verwenden?

Wenn das System strikt zu festen Zeiten und mit fester Leistung laden und entladen und einen bestimmten Ladezustand erreichen soll, ist ein benutzerdefinierter oder automatischer Lade-/Entladeplan in der Regel besser geeignet.

Der AI-Modus plant den Betrieb dynamisch auf Grundlage von Prognosedaten. Daher wird nicht garantiert, dass das System jeden Tag zur gleichen Zeit arbeitet oder dass die Batterie immer auf 100 % geladen wird.

### Q8: Warum bleibt die Batterie im Standby-Modus, wenn die AI-Strategie „Kein eindeutiger Vorteil durch die Preisdifferenz zwischen Strombezug und Einspeisung“ anzeigt?

Wenn die erwartete Preisdifferenz nicht ausreicht, um die Lade- und Entladeverluste abzudecken, oder vorübergehend keine geeignetere Gelegenheit zum Laden oder Entladen besteht, kann der Standby-Modus unnötige Vorgänge vermeiden. Der Standby-Modus bedeutet nicht, dass das System offline ist.

### Q9: Wie lange dauert es, bis Ergebnisse sichtbar werden?

Das System benötigt etwas Zeit, um die Verbrauchsgewohnheiten des Haushalts kennenzulernen, normalerweise 1 bis 2 Wochen. Mit zunehmender Datenmenge werden die Prognosen schrittweise genauer. Im Allgemeinen werden die Ergebnisse nach 2 bis 4 Wochen Nutzung stabiler.

### Q10: Was passiert an bewölkten Tagen oder wenn keine PV-Energie erzeugt wird?

Das System passt den Plan auf Grundlage der Wetterprognose an. Wenn für den folgenden Tag eine geringe PV-Erzeugung erwartet wird, kann das System die Batterie während günstiger Strompreiszeiträume im Voraus laden, um den späteren Energiebedarf zu decken.

### Q11: Was passiert, wenn plötzlich Gäste kommen und der Stromverbrauch im Haushalt steigt?

Das System überwacht kontinuierlich Änderungen des Haushaltsverbrauchs. Wenn der Stromverbrauch plötzlich steigt, passt es den Lade- und Entladeplan erneut an, priorisiert die normale Stromversorgung des Haushalts und versucht gleichzeitig, den Strombezug aus dem Netz während teurer Zeiträume zu reduzieren.

### Q12: Warum lädt die AI-Strategie während günstiger Strompreiszeiträume nicht unbedingt mit voller Leistung?

Ein günstiger Strompreis bedeutet nicht, dass die Batterie während des gesamten Zeitraums mit voller Leistung, also mit der aktuell vom Gerät zulässigen maximalen Ladeleistung, geladen werden muss. Die AI-Strategie plant Ladezeiten und Lademengen dynamisch auf Basis des tatsächlichen Haushaltsverbrauchs und des späteren Energiebedarfs. Gleichzeitig berücksichtigt das System die langfristige Batterienutzung und plant das Laden zu geeigneten Zeitpunkten, um lang andauerndes, konzentriertes Laden mit hoher Leistung zu vermeiden und ein Gleichgewicht zwischen Energiebedarf und Batterielebensdauer herzustellen.

Daher kann die AI-Strategie auch während eines günstigen Strompreiszeitraums die Ladeleistung reduzieren oder das Laden vorübergehend aussetzen. Dies ist eine normale Folge der ganzheitlichen Bewertung durch die Strategie.

## 5. Zusammenfassung

Der Hauptzweck der Installation einer PV-Anlage und eines Energiespeichers im Haushalt besteht darin, Stromkosten zu senken und Solarenergie möglichst gut zu nutzen. Wenn die Lade- und Entladezeiten jedoch nicht sinnvoll geplant sind, können die Gesamterträge beeinträchtigt werden – wenn die Batterie nicht zum richtigen Zeitpunkt geladen oder entladen wird, können die Einsparungen über ein ganzes Jahr hinweg begrenzt sein.

Die Indevolt AI-Strategie wurde entwickelt, um dieses Problem zu lösen: Sie berücksichtigt täglich Strompreise, Wetterbedingungen und Haushaltsverbrauch, erstellt und passt den Lade- und Entladeplan automatisch an und reduziert dadurch den Bedarf an manuellen Einstellungen.

Zu den wichtigsten Funktionen gehören:

| Hauptfunktion | Wahrnehmbare Änderung für den Nutzer |
| --- | --- |
| Stromkosten senken | Unter geeigneten Bedingungen unnötigen Strombezug aus dem Netz reduzieren. |
| Automatischer Betrieb | Pläne automatisch erstellen und bei Änderungen der Bedingungen anpassen. |
| Transparenter Betrieb | Gründe für die geplanten Vorgänge in den jeweiligen Zeiträumen anzeigen. |
| Batterielebensdauer-Management | Unnötigen Batterieverschleiß reduzieren und gleichzeitig Stromkosten sparen. |

Die AI-Strategie arbeitet nicht nach einer einzigen festen Regel. Stattdessen berücksichtigt sie Strompreise, Wetterbedingungen, Haushaltsverbrauch und Batteriestatus gemeinsam, um eine geeignetere Planung zu ermöglichen, die Einsparungen bei den Stromkosten und die langfristige Nutzung der Batterie miteinander in Einklang bringt.

Dieses Dokument basiert auf den aktuellen Funktionen der Indevolt AI-Strategie. Die tatsächlichen Vorteile hängen unter anderem von den lokalen Strompreisen, der installierten PV-Leistung, den Verbrauchsgewohnheiten des Haushalts und der Gerätekonfiguration ab.
