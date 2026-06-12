---
title: Consommation en veille
description: Comprendre la consommation propre de l’appareil selon les différents modes de fonctionnement et son impact sur la consommation réelle
---

# Consommation en veille

Dans l’utilisation quotidienne, il peut arriver que vous observiez une situation où l’appareil ne charge ni ne décharge, mais que le niveau de batterie diminue lentement. Dans la plupart des cas, il s’agit d’un comportement normal du système.

**Pourquoi l’appareil consomme-t-il de l’énergie alors qu’il est en veille ?**

Un système de stockage d’énergie ne fonctionne pas uniquement pendant les phases de charge ou de décharge. Même sans alimentation active vers l’extérieur, plusieurs modules internes restent actifs : le système de contrôle doit rester en veille permanente, le système de gestion de batterie (BMS) surveille en continu l’état des cellules, et les modules de communication restent connectés.

Dès que l’appareil est sous tension, ces modules consomment une faible quantité d’énergie. Cette consommation peut être considérée comme un “coût de maintien en fonctionnement”. Il est donc normal d’observer une consommation en mode veille.

---

## Facteurs de consommation en veille

La consommation en veille n’est pas une valeur fixe. Elle varie selon la configuration et les conditions de fonctionnement.

### 1. Connexion au réseau

**mode connecté au réseau (on-grid)**  
Lorsque l’appareil est connecté au réseau électrique, certaines fonctions peuvent être supportées par le réseau, ce qui réduit généralement la consommation.

**Mode hors réseau (off-grid)**  
Lorsque l’appareil fonctionne hors réseau, il doit assurer lui-même son alimentation, ce qui nécessite davantage de modules actifs et augmente la consommation en veille.

En résumé :

- Connecté au réseau : consommation plus faible grâce au support du réseau
- Hors réseau : consommation plus élevée car l’appareil doit s’auto-alimenter

### 2. Activation du bypass

Lorsque le bypass est activé et que le réseau est disponible, la charge peut être alimentée directement par le réseau et/ou l’onduleur principal. Dans ce cas, le système ne maintient que les fonctions de contrôle et de surveillance, ce qui entraîne une consommation généralement plus faible qu’en mode hors réseau actif, mais supérieure au mode veille profonde.

Lorsque le bypass est désactivé en mode hors réseau, l’appareil peut entrer en veille profonde afin de réduire la consommation.

En résumé :

- Bypass activé : alimentation directe par le réseau, système en “mode supervision”
- Bypass désactivé : le système peut maintenir les circuits d’onduleur actifs


### 3. Activation de la veille profonde

Lorsque la veille profonde est activée, le système passe en mode basse consommation. Sans besoin de charge ou de décharge, certains modules à forte consommation (comme l’onduleur) passent en sommeil, ne laissant actifs que les fonctions de base (surveillance et communication), ce qui réduit fortement la consommation.

En résumé :

- Veille profonde activée : mode économie d’énergie
- Veille profonde désactivée : système prêt à répondre immédiatement, consommation plus élevée


### 4. Présence d’une alimentation auxiliaire AC

L’alimentation auxiliaire AC fournit l’énergie aux circuits internes de contrôle. Les versions récentes des modèles PowerFlex / SolidFlex 2000 sont équipées d’une **alimentation auxiliaire AC**.

Lorsqu’elle est disponible et que l’appareil est connecté au réseau, une partie de la consommation interne est fournie par le réseau, réduisant ainsi la décharge de la batterie.

En résumé :

- Avec alimentation AC : une partie de la consommation provient du réseau
- Sans alimentation AC : la consommation est prise sur la batterie


## Consommation par état

Selon la connexion au réseau et le mode de fonctionnement, l’appareil présente différents états.

:::note
- Les informations suivantes s’appliquent uniquement aux séries PowerFlex / SolidFlex 2000, et non aux séries 1200 et 3000.
- Les valeurs sont typiques et peuvent varier selon la température, l’état de communication et le nombre de batteries.
- Consommation totale = consommation du boîtier principal + nombre de packs batterie × consommation d’un pack.
:::


### mode connecté au réseau

**🔌 Bypass activé**

Dans ce cas, la charge est généralement alimentée par le réseau et/ou la batterie principale. **La consommation est identique, que la veille profonde soit activée ou non.**

| Modèle | Consommation unité principale (W) | Consommation pack batterie (W) |
| ------ | ---------------------------------- | ------------------------------ |
| PowerFlex 2000 | 20 | 0 |
| SolidFlex 2000 | 20 | 0 |
| PowerFlex 2000 (avec alimentation AC) | 20 | 0 |
| SolidFlex 2000 (avec alimentation AC) | 20 | 0 |


**🔌 Bypass désactivé**

<table>
<thead>
<tr>
<th></th>
<th colspan="2">Veille profonde activée</th>
<th colspan="2">Veille profonde désactivée</th>
</tr>
</thead>
<tbody>
<tr>
<td>Modèle</td>
<td>Consommation unité principale (W)</td>
<td>Consommation pack batterie (W)</td>
<td>Consommation unité principale (W)</td>
<td>Consommation pack batterie (W)</td>
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
<td>PowerFlex 2000 (avec alimentation AC)</td>
<td>7 (supporté par AC)</td>
<td>2</td>
<td>20</td>
<td>0</td>
</tr>
<tr>
<td>SolidFlex 2000 (avec alimentation AC)</td>
<td>7 (supporté par AC)</td>
<td>2</td>
<td>20</td>
<td>0</td>
</tr>
</tbody>
</table>


### Mode hors réseau

En mode hors réseau, le système ne peut pas s’appuyer sur le réseau électrique et doit assurer lui-même son alimentation, ce qui entraîne une consommation en veille généralement plus élevée.


**🔌 Bypass activé**

Le système doit maintenir la capacité de l’onduleur pour alimenter la charge à tout moment. **La consommation est identique, que la veille profonde soit activée ou non.**

:::note
Si le compte à rebours avant arrêt en veille en mode hors réseau arrive à échéance alors que le bypass est activé, la consommation devient équivalente à celle du bypass désactivé.
:::

| Modèle | Consommation unité principale (W) | Consommation pack batterie (W) |
| ------ | ---------------------------------- | ------------------------------ |
| PowerFlex 2000 | 29 | 5 |
| SolidFlex 2000 | 29 | 5 |
| PowerFlex 2000 (avec alimentation AC) | 29 | 5 |
| SolidFlex 2000 (avec alimentation AC) | 29 | 5 |


**🔌 Bypass désactivé**

En mode hors réseau avec bypass désactivé, l’appareil passe automatiquement en veille profonde.

| Modèle | Consommation unité principale (W) | Consommation pack batterie (W) |
| ------ | ---------------------------------- | ------------------------------ |
| PowerFlex 2000 | 7 | 2 |
| SolidFlex 2000 | 7 | 2 |
| PowerFlex 2000 (avec alimentation AC) | 7 | 2 |
| SolidFlex 2000 (avec alimentation AC) | 7 | 2 |