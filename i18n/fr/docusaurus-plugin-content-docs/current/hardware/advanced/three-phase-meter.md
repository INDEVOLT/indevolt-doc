---
title: Surveillance multi-points des TC
description: En installant les TC sur les côtés photovoltaïque, réseau, charge ou batterie, il est possible de surveiller la puissance et les données de consommation à différents points du système.
---

# Surveillance multi-points des TC pour compteur triphasé

Dans un système triphasé, chaque ligne L1, L2 et L3 est généralement équipée d’un TC (transformateur de courant) afin de mesurer la puissance et l’énergie totales du système.

Cependant, les trois TC ne doivent pas nécessairement être installés sur les trois phases. Selon les besoins, ils peuvent également être placés sur des points du système tels que le photovoltaïque, le réseau, la charge ou la batterie, permettant ainsi de surveiller simultanément les flux d’énergie à différents points du système.

---

## 1. Compteurs pris en charge

| Marque     | Modèle                                                         |
| ---------- | -------------------------------------------------------------- |
| INDEVOLT   | SMD3                                                           |
| SOLARMAN   | MR3-D5-WR<br />MR3-D4-WE-B<br />MR3-D5-W<br />MR3-D4-WRE-B     |
| Shelly     | Shelly 3EM<br />Shelly Pro 3EM-400<br />Shelly Pro 3EM-3CT63   |

---

## 2. Emplacements d’installation des TC

L’emplacement d’installation des TC détermine les données mesurées.

| Emplacement du TC | Données correspondantes                          | Cas d’utilisation typique        |
| ----------------- | ------------------------------------------------ | -------------------------------- |
| Côté PV           | Puissance de production photovoltaïque          | Suivi de la production solaire   |
| Côté réseau       | Puissance d’importation / exportation (selon le sens du courant) | Suivi des échanges avec le réseau (anti-injection / import-export) |
| Côté charge       | Puissance de consommation                        | Suivi de la consommation des charges        |
| Côté batterie     | Puissance de charge / décharge                  | Suivi de l’état du stockage d’énergie |

Les TC installés à différents emplacements affichent des valeurs différentes en même temps. Ensemble, ces données reflètent le fonctionnement global du système.

---

## 3. Sens d’installation des TC

La flèche présente sur le boîtier du TC indique le sens de référence du courant. Une installation incorrecte n’endommage pas l’appareil, mais inverse la polarité de la puissance.

Par exemple, une consommation sur le réseau peut être affichée comme une injection vers le réseau, et la charge de la batterie peut apparaître comme une décharge.

En cas de valeurs de direction anormales, vérifiez :
- si le TC est installé dans le mauvais sens
- si la configuration du sens du TC dans l’application est correcte

:::note
Si le sens physique du TC ne peut pas être corrigé facilement, il est également possible de l’ajuster dans l’application.
:::

---

## 4. Configuration de l’application

### 4.1 Définir l’emplacement d’installation des TC

1. Accédez à la page des paramètres du compteur et sélectionnez **Configuration du compteur** > **Système monophasé**.
2. Attribuez à chaque TC son emplacement réel (Solaire, Réseau, Charge ou Batterie).
3. Définissez le sens du TC selon l’orientation réelle de la flèche. Utilisez les schémas pour vérifier la cohérence de l’installation.

Après configuration, les données correspondantes de chaque TC peuvent être consultées sur la page du compteur, telles que la puissance, l’énergie, le courant et la tension.

<img src={require("./img/ct_direction.png").default} width="240"/>
<img src={require("./img/ct_location.png").default} width="240"/>
<img src={require("./img/meter_data.png").default} width="240"/>

### 4.2 Définir la source de charge du micro-stockage (optionnel)

Si vous souhaitez que le système de micro-stockage ajuste automatiquement son fonctionnement en fonction de la charge, vous pouvez sélectionner la phase du TC de charge réelle comme référence dans **Paramètres De Charge** > **Compteur**.

<img src={require("./img/load_settings.png").default} width="240"/>
<img src={require("./img/load_meter.png").default} width="240"/>

---

## 5. Vérification de la configuration

Après la configuration, vérifiez le fonctionnement réel du système :
- Lorsque le PV produit, la puissance PV doit être positive.
- Lors d’une consommation réseau, l’import réseau doit être affiché.
- Lors de la charge de la batterie, la puissance de charge doit apparaître.
- Lorsque les charges sont actives, la consommation doit augmenter.

En cas de valeurs anormales ou de sens inversé, vérifiez successivement :
- l’emplacement d’installation des TC
- le sens d’installation des TC
- la cohérence entre la configuration de l’application et l’installation réelle
- le bon serrage et la fermeture complète des TC