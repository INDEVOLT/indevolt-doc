---
title: Déclassement thermique PV / batterie
description: Comprendre le mécanisme de déclassement de puissance en cas de températures élevées ou basses
---

# Déclassement thermique PV / batterie

L’appareil peut fonctionner à pleine puissance dans une plage de température appropriée. Lorsque la température est trop élevée ou trop basse, le système réduit automatiquement la puissance : ce fonctionnement est appelé **déclassement de puissance (derating)**.

Le déclassement de puissance est un mécanisme de protection normal. Il permet de maintenir l’appareil dans un état plus sûr : d’une part en évitant les pannes dues à des températures extrêmes, et d’autre part en contribuant à prolonger sa durée de vie. Une fois la température revenue dans une plage sûre, le système rétablit automatiquement la puissance nominale, sans intervention manuelle.

---

## Déclassement thermique PV

En conditions normales, le système maximise la production d’énergie. Cependant, lorsque la température augmente, un fonctionnement prolongé à pleine puissance peut générer une contrainte supplémentaire. Lorsque la température du module de conversion photovoltaïque (MPPT) devient trop élevée, le système réduit automatiquement la puissance PV pour protéger l’équipement.

:::info
La série ECO ne dispose pas d’entrée DC photovoltaïque et ne peut pas être directement connectée à des panneaux solaires. Cette section ne s’applique donc pas.
:::

**Pourquoi y a-t-il un déclassement ?**

Le module de conversion photovoltaïque génère de la chaleur lors de la conversion de puissance (DC-DC). Plus la puissance est élevée, plus l’échauffement est important. De plus, les conditions environnementales peuvent aggraver la température, par exemple :

- Température ambiante élevée en été, notamment à midi  
- Mauvaise ventilation du lieu d’installation  

Si la température continue d’augmenter et que l’appareil fonctionne à pleine puissance, cela peut entraîner une surchauffe, une baisse de rendement, voire des dommages. Le système réduit donc la puissance de sortie afin de garantir un fonctionnement plus sûr.

**Quelles sont les conséquences ?**

Le déclassement PV se manifeste par :

- Une production solaire inférieure au pic théorique  
- Une courbe de production « écrêtée » autour de midi  

Ces phénomènes sont normaux et correspondent à un mécanisme de protection.

**Détails du déclassement**

Lorsque la température du module de conversion photovoltaïque (MPPT) augmente, le système réduit progressivement la puissance PV maximale par paliers. Une fois la température redescendue, la puissance nominale est automatiquement rétablie :

- Lorsque la température dépasse **93 °C**, la puissance maximale est réduite à **80 %** de la puissance nominale
  - Exemple : puissance totale réduite à `2400 W × 80 % = 1920 W` ; puissance PV par entrée réduite à `600 W × 80 % = 480 W`
  - La puissance nominale est rétablie lorsque la température redescend en dessous de **75 °C**
- Lorsque la température dépasse **96 °C**, la puissance maximale est réduite à **60 %** de la puissance nominale
  - Exemple : puissance totale réduite à `2400 W × 60 % = 1440 W` ; puissance PV par entrée réduite à `600 W × 60 % = 360 W`
  - La puissance nominale est rétablie lorsque la température redescend en dessous de **80 °C**

:::note
Actuellement, l’application ne permet pas d’afficher la température du module MPPT.
:::

---

## Déclassement batterie

Comparée au module photovoltaïque, la batterie est plus sensible à la température. Son mécanisme de protection est donc plus strict. Des températures élevées comme basses peuvent déclencher un déclassement.

**Pourquoi y a-t-il un déclassement ?**

La batterie repose sur des réactions chimiques sensibles à la température :

- Température élevée : accélération du vieillissement, voire risques de sécurité  
- Température basse : ralentissement des réactions chimiques, risque de dommage lors de la charge  

Le système limite donc la charge et la décharge afin de maintenir la batterie dans une plage de fonctionnement sûre.

**Quelles sont les conséquences ?**

- Réduction de la vitesse de charge, voire impossibilité de charger  
- Diminution de la puissance de décharge  
- Impossibilité d’atteindre la puissance nominale  

**Détails du déclassement**

La puissance maximale de charge et de décharge varie dynamiquement en fonction de la température :

- **À haute température** : réduction de la puissance de charge et limitation de la décharge ; en cas de poursuite de la hausse de température, arrêt de la charge et de la décharge pour éviter tout risque de surchauffe.  
- **À basse température** : limitation principalement de la charge (risque d’endommagement à froid) et réduction de la décharge. En hiver, il est fréquent d’avoir une décharge normale mais une charge impossible.

Les valeurs du tableau correspondent à un seul appareil / pack batterie.  
La puissance maximale du système = puissance par unité × nombre d’unités, sans dépasser la limite système.

<table><thead>
  <tr>
    <th></th>
    <th colspan="2">SolidFlex 2000 / SolidFlex 2000 Eco / SFA1800</th>
    <th colspan="2">PowerFlex 2000 / PowerFlex 2000 Eco / PFA2000</th>
  </tr></thead>
<tbody>
  <tr>
    <td>Température (°C)</td>
    <td>Puissance de charge max (W)</td>
    <td>Puissance de décharge max (W)</td>
    <td>Puissance de charge max (W)</td>
    <td>Puissance de décharge max (W)</td>
  </tr>
  <tr>
    <td>≤ -20</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>-20 &lt; T ≤ -10</td>
    <td>0</td>
    <td>304</td>
    <td>0</td>
    <td>341</td>
  </tr>
  <tr>
    <td>-10 &lt; T ≤ 0</td>
    <td>0</td>
    <td>380</td>
    <td>0</td>
    <td>426</td>
  </tr>
  <tr>
    <td>0 &lt; T ≤ 4</td>
    <td>179</td>
    <td>761</td>
    <td>200</td>
    <td>853</td>
  </tr>
  <tr>
    <td>4 &lt; T ≤ 10</td>
    <td>537</td>
    <td>761</td>
    <td>602</td>
    <td>853</td>
  </tr>
  <tr>
    <td>10 &lt; T ≤ 52</td>
    <td>896</td>
    <td>1075</td>
    <td>1004</td>
    <td>1205</td>
  </tr>
  <tr>
    <td>52 &lt; T ≤ 53 (retour sous 51 °C)</td>
    <td>448</td>
    <td>380</td>
    <td>502</td>
    <td>426</td>
  </tr>
  <tr>
    <td>&gt; 53</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
</tbody></table>

**Comment consulter la température de la batterie**

Étapes dans l’application :  Page appareil → sélectionner l’appareil → cliquer sur <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> → **Température** → consulter la température de la batterie principale et des packs batterie

<img src={require("../energy-mode/img/select_device.png").default} width="240"/>
<img src={require("../energy-mode/img/device_info.png").default} width="240"/>
<img src={require("./img/device_setting2.png").default} width="240"/>
<img src={require("./img/temperature.png").default} width="240"/>