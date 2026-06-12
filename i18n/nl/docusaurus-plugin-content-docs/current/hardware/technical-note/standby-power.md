---
title: Standbyverbruik
description: Begrijp het eigen energieverbruik van het systeem in verschillende bedrijfsmodi en de invloed ervan op het werkelijke energieverbruik
---

# Uitleg over standbyverbruik

Tijdens dagelijks gebruik kan het voorkomen dat de batterijcapaciteit langzaam afneemt, ook wanneer het systeem niet aan het laden of ontladen is. In de meeste gevallen is dit normaal gedrag van het systeem.

**Waarom verbruikt het systeem energie terwijl het “niets doet”?**

Een energieopslagsysteem werkt niet alleen tijdens laden of ontladen. Zelfs wanneer er geen vermogen aan externe apparaten wordt geleverd, moeten interne functies actief blijven. Zo moet het besturingssysteem in standby blijven, moet het batterijbeheersysteem (BMS) continu de batterijstatus controleren en moeten communicatiemodules online blijven.

Zolang het systeem is ingeschakeld, verbruiken deze modules een kleine hoeveelheid energie. Dit is het normale energieverbruik dat nodig is om het systeem actief te houden. Daarom is een klein standbyverbruik normaal.

## Belangrijkste factoren die het standbyverbruik beïnvloeden

Het standbyverbruik van het systeem is geen vaste waarde. Het varieert afhankelijk van de configuratie en de bedrijfsomstandigheden. De belangrijkste factoren zijn:

### 1. Netgekoppeld of off-grid

**Netgekoppelde modus**

Wanneer het systeem met het elektriciteitsnet is verbonden, kunnen bepaalde functies gebruikmaken van netstroom. Hierdoor is het energieverbruik meestal lager.

**Off-grid modus**

Wanneer het systeem off-grid werkt, moet het zelfstandig de stroomvoorziening in stand houden. Daardoor blijven meer modules actief en is het standbyverbruik doorgaans hoger.

Eenvoudig samengevat:

- Netgekoppeld: het systeem kan gebruikmaken van het net, dus lager verbruik
- Off-grid: het systeem moet zelfstandig blijven functioneren, dus hoger verbruik

### 2. Of de bypass is ingeschakeld

Wanneer de bypass is ingeschakeld en het net beschikbaar is, kunnen belastingen rechtstreeks door het net en de hoofdbatterij worden gevoed. In deze situatie hoeft het systeem vooral de besturing, detectie en bypass-circuits actief te houden. Het verbruik is daardoor meestal lager dan wanneer de inverter actief standby blijft, maar hoger dan bij diepe standby.

Wanneer de bypass is uitgeschakeld en het systeem off-grid werkt, schakelt het systeem automatisch over naar diepe standby om het energieverbruik te verminderen.

Eenvoudig samengevat:

- Bypass ingeschakeld: het net voedt de belasting direct terwijl het systeem “stand-by” blijft
- Bypass uitgeschakeld: het systeem moet de inverter actief of gereed houden

### 3. Of diepe standby is ingeschakeld

Wanneer diepe standby is ingeschakeld, werkt het systeem in een energiebesparende modus. Wanneer er geen laad- of ontlaadbehoefte is, gaan sommige modules met hoog verbruik (zoals de inverter) in slaapstand. Alleen basisbewaking en communicatie blijven actief.

Eenvoudig samengevat:

- Diepe standby ingeschakeld: energiebesparende modus
- Diepe standby uitgeschakeld: systeem blijft continu gereed, met hoger verbruik

### 4. Of er een AC-hulpvoeding aanwezig is

De AC-hulpvoeding levert stroom aan de interne besturingssystemen van het apparaat. Nieuwere versies van de PowerFlex / SolidFlex 2000 zijn uitgerust met een **AC-hulpvoeding**.

Wanneer het systeem op het net is aangesloten en een AC-hulpvoeding heeft, kunnen sommige interne modules direct door het net worden gevoed, waardoor het batterijverbruik afneemt.

Eenvoudig samengevat:

- Met AC-hulpvoeding: een deel van het standbyverbruik komt van het net
- Zonder AC-hulpvoeding: dit verbruik komt uit de batterij

---

## Energieverbruik in verschillende bedrijfsmodi

Afhankelijk van de netstatus en de bedrijfsmodus heeft het systeem verschillende verbruikswaarden.

:::note
- De onderstaande informatie geldt alleen voor de PowerFlex / SolidFlex 2000-serie en niet voor de 1200- of 3000-serie.
- De vermelde waarden zijn typische waarden. Werkelijke waarden kunnen variëren afhankelijk van omgevingstemperatuur, communicatiestatus, aantal batterijpakketten enzovoort.
- Totaal verbruik = verbruik hoofdeenheid (inclusief interne batterij en besturingssysteem) + aantal batterijpakketten × verbruik per batterijpakket.
:::

### Netgekoppelde modus

**🔌 Bypass ingeschakeld**

In deze situatie worden belastingen meestal gevoed door het net en de hoofdbatterij. **Het energieverbruik is hetzelfde ongeacht of diepe standby is ingeschakeld of niet.**

| Model | Verbruik hoofdeenheid (W) | Verbruik batterijpakket (W) |
| --- | --- | --- |
| PowerFlex 2000 | 20 | 0 |
| SolidFlex 2000 | 20 | 0 |
| PowerFlex 2000 (met AC-hulpvoeding) | 20 | 0 |
| SolidFlex 2000 (met AC-hulpvoeding) | 20 | 0 |

**🔌 Bypass uitgeschakeld**

<table><thead>
  <tr>
    <th></th>
    <th colspan="2">Diepe standby ingeschakeld</th>
    <th colspan="2">Diepe standby uitgeschakeld</th>
  </tr></thead>
<tbody>
  <tr>
    <td>Model</td>
    <td>Verbruik hoofdeenheid (W)</td>
    <td>Verbruik batterijpakket (W)</td>
    <td>Verbruik hoofdeenheid (W)</td>
    <td>Verbruik batterijpakket (W)</td>
  </tr>
  <tr>
    <td>PowerFlex 2000</td>
    <td>7</td>
    <td>2</td>
    <td>20</td>
    <td>0</td>
  </tr>
  <tr>
    <td>SolidFlex 2000</td>
    <td>7</td>
    <td>2</td>
    <td>20</td>
    <td>0</td>
  </tr>
  <tr>
    <td>PowerFlex 2000 (met AC-hulpvoeding)</td>
    <td>7 (gevoed via AC-hulpvoeding)</td>
    <td>2</td>
    <td>20</td>
    <td>0</td>
  </tr>
  <tr>
    <td>SolidFlex 2000 (met AC-hulpvoeding)</td>
    <td>7 (gevoed via AC-hulpvoeding)</td>
    <td>2</td>
    <td>20</td>
    <td>0</td>
  </tr>
</tbody>
</table>

### Off-grid modus

In off-grid modus kan het systeem niet op het net vertrouwen en moet het zelfstandig de stroomvoorziening in stand houden. Daardoor is het standbyverbruik doorgaans hoger.

**🔌 Bypass ingeschakeld**

Het systeem moet de inverter actief houden zodat het op elk moment vermogen aan de belasting kan leveren. **Het energieverbruik is hetzelfde ongeacht of diepe standby is ingeschakeld of niet.**

:::note
Wanneer de bypass is ingeschakeld en de ingestelde afteltijd van de off-grid slaapinstelling is verstreken, wordt het energieverbruik gelijk aan dat van bypass uitgeschakeld.
:::

| Model | Verbruik hoofdeenheid (W) | Verbruik batterijpakket (W) |
| --- | --- | --- |
| PowerFlex 2000 | 29 | 5 |
| SolidFlex 2000 | 29 | 5 |
| PowerFlex 2000 (met AC-hulpvoeding) | 29 | 5 |
| SolidFlex 2000 (met AC-hulpvoeding) | 29 | 5 |

**🔌 Bypass uitgeschakeld**

Wanneer het systeem off-grid werkt en de bypass is uitgeschakeld, schakelt het automatisch over naar diepe standby.

| Model | Verbruik hoofdeenheid (W) | Verbruik batterijpakket (W) |
| --- | --- | --- |
| PowerFlex 2000 | 7 | 2 |
| SolidFlex 2000 | 7 | 2 |
| PowerFlex 2000 (met AC-hulpvoeding) | 7 | 2 |
| SolidFlex 2000 (met AC-hulpvoeding) | 7 | 2 |