---
title: Explication de la méthode de calcul des revenus
description: Découvrez comment le système de micro-stockage Indevolt calcule les revenus photovoltaïques, les revenus du stockage et le revenu total du foyer.
---

# Explication de la méthode de calcul des revenus

Dans l'application Indevolt, vous pouvez voir des données telles que « Revenu du jour », « Revenu photovoltaïque » ou « Revenu du stockage ». Comment ces chiffres sont-ils calculés ?

En termes simples : le système compare « combien vous dépenseriez sans photovoltaïque ni stockage » avec « combien vous dépensez réellement aujourd'hui ». La différence correspond à vos revenus.

## 1. D'où viennent les revenus ?

Après l'installation d'un système photovoltaïque et de stockage, vos revenus proviennent principalement de trois sources :

- 💰 **Moins d'achats au réseau** : l'électricité solaire est utilisée directement dans le foyer, ou la batterie se décharge en cas de besoin, réduisant ainsi les achats d'électricité auprès du réseau.
- 💵 **Revente d'électricité** : l'excédent d'électricité non utilisé immédiatement est injecté dans le réseau, générant des revenus de vente.
- 🧠 **Une utilisation plus intelligente** : le stockage conserve l'électricité pour des moments où elle est plus nécessaire ou lorsque les prix de l'électricité sont plus élevés – en quelque sorte « stocker à bas prix, utiliser à prix élevé ».

## 2. Comment le système calcule-t-il les revenus ?

Le système simule trois scénarios de consommation électrique du foyer et les compare pour estimer la part des revenus générés par le photovoltaïque et par le stockage.

### Scénarios de comparaison

| Scénario                     | Hypothèse                                    | Signification des coûts                                      |
| :--------------------------- | :------------------------------------------- | :----------------------------------------------------------- |
| ① Sans PV ni stockage        | Pas de photovoltaïque, pas de stockage       | Toute l'électricité du foyer est achetée au réseau – le coût que vous paieriez. |
| ② PV uniquement              | Photovoltaïque seul, sans stockage           | L'électricité solaire est utilisée dans le foyer, mais sans l'aide de la batterie – les coûts qui en résultent. |
| ③ Avec PV et stockage (réel) | Photovoltaïque + stockage (situation réelle) | Coût réel actuel calculé à partir des achats et des ventes d'électricité réels. |

**Formules de revenus :**

- **Revenu photovoltaïque** = Coût de l'électricité en ① − Coût de l'électricité en ② (économies réalisées grâce au PV)
- **Revenu du stockage** = Coût de l'électricité en ② − Coût de l'électricité en ③ (économies supplémentaires apportées par la batterie)
- **Revenu total du foyer** = Revenu photovoltaïque + Revenu du stockage

## 3. Deux façons de comprendre le revenu total du foyer

Le revenu total peut être exprimé de deux manières courantes – le résultat est le même, choisissez celle que vous préférez.

|          | Revenu photovoltaïque + Revenu du stockage                   | Économies sur la facture d'électricité + Revenus de vente    |
| :------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| Adapté à | Voir la contribution de chaque élément (PV et batterie) ; affiché sur les pages de détail du PV et du stockage ; évaluer le retour sur investissement et comparer les stratégies énergétiques | Voir combien vous avez économisé sur la facture et gagné grâce à la revente ; vérifier par rapport à votre facture |

« Économies sur la facture d'électricité + Revenus de vente » peut également s'écrire :

**Revenu total du foyer = Coût sans PV ni stockage − Coût réel actuel**

Où : **Coût réel actuel de l'électricité = Achats au réseau × Prix d'achat − Ventes au réseau × Tarif de revente**.

Pour les foyers qui revendent peu d'électricité, les revenus de vente sont nuls et le revenu total ≈ économies sur la facture.

> **Information**
> Les revenus de vente ne sont qu'une partie des revenus. L'électricité solaire autoconsommée et les achats évités grâce à la décharge de la batterie – ces « kilowattheures non achetés » représentent également des économies, qui font partie des revenus.

## 4. Exemple de calcul

Prenons l'exemple du 20 août 2026 et illustrons le processus de calcul des revenus avec des données réelles de l'application.

### Visualisation des résultats

Sur la page « Calculateur de revenus » de l'application, vous pouvez voir les revenus du jour :

<img src={require("./img/profit_calculator.png").default} width="240"/>

- Revenu photovoltaïque : 0,39 €
- Revenu du stockage : 0,12 €
- Revenu total : 0,51 €

Relation de calcul : **0,39 + 0,12 = 0,51**, c'est-à-dire que le revenu total = revenu photovoltaïque + revenu du stockage.

### Processus de calcul des revenus

Le système calcule les revenus photovoltaïque et de stockage en comparant les coûts de l'électricité pour les trois scénarios :

| Poste                 | Méthode de calcul                                 | Résultat                 |
| :-------------------- | :------------------------------------------------ | :----------------------- |
| Revenu photovoltaïque | Coût sans PV − Coût avec PV uniquement            | 0,39 €                   |
| Revenu du stockage    | Coût avec PV uniquement − Coût avec PV + stockage | 0,12 €                   |
| Revenu total          | Revenu photovoltaïque + Revenu du stockage        | 0,39 + 0,12 = **0,51 €** |

> Les coûts spécifiques des trois scénarios sont simulés par le backend du système et ne sont pas directement affichés dans l'application.

### Autre façon de comprendre

Le revenu total est également égal aux économies sur la facture plus les revenus de vente, ce qui nécessite les données d'achat, de vente et les prix de l'électricité.

Dans l'onglet « Réseau » de la page des statistiques, vous pouvez voir les quantités achetées et vendues du jour :

<img src={require("./img/grid.png").default} width="240"/>

- Achats : 3,49 kWh
- Ventes : 615,07 kWh

Sur la page « Historique des prix de l'électricité », vous pouvez voir le prix d'achat et le tarif de revente du jour :

<img src={require("./img/historical_tariffs.png").default} width="240"/>

- Prix d'achat : 0,2295 GBP/kWh
- Tarif de revente : 15,83 ct/kWh

Coût réel actuel = Achats × Prix d'achat − Ventes × Tarif de revente.

Revenu total = Coût sans PV ni stockage − Coût réel actuel = Économies + Revenus de vente. Les deux méthodes aboutissent au même résultat.

> **Remarque** : Les revenus affichés dans l'application sont des estimations et peuvent différer de la facture finale de votre fournisseur d'électricité. Voir la FAQ ci-dessous pour plus d'informations.

## 5. Comment sont calculés les tarifs horaires (tarifs différenciés) ?

Si différents prix de l'électricité s'appliquent selon les heures de la journée (tarifs horaires) dans votre région, le système calcule chaque intervalle de temps séparément puis les additionne :

**Coût réel pour un intervalle = Achats dans cet intervalle × Prix d'achat dans cet intervalle − Ventes dans cet intervalle × Tarif de revente dans cet intervalle**

## 6. Dans quels cas le calcul des revenus peut-il être inexact ?

Les situations suivantes peuvent empêcher le système de calculer les revenus avec précision :

- Une production photovoltaïque existante n'est pas enregistrée par le système énergétique du foyer.
- Aucune donnée indépendante et précise sur la puissance ou la capacité de la batterie n'est disponible.
- Le prix d'achat ou le tarif de revente n'est pas complètement configuré.
- Des données d'équipements clés sont manquantes ou le sens de mesure est mal configuré.

## 7. FAQ

### Pourquoi ne calcule-t-on pas simplement « production × prix » ?

L'électricité produite par le photovoltaïque peut être autoconsommée, utilisée pour charger la batterie ou vendue au réseau – chaque usage a une valeur différente, une simple multiplication ne suffit donc pas.

### Pourquoi ne puis-je pas calculer moi-même le revenu du stockage ?

Le revenu du stockage est dérivé de la comparaison avec le scénario « PV uniquement, sans stockage ». Ce scénario n'existe pas en réalité et doit être simulé par le système sur la base des données des équipements.

### Pourquoi les revenus de vente ne sont-ils pas égaux au revenu total ?

Les revenus de vente ne sont qu'une partie du revenu total. Vous économisez également sur votre facture grâce à l'autoconsommation et aux achats évités par la décharge de la batterie – ces économies font aussi partie du revenu.

### Pourquoi les revenus dans l'application diffèrent-ils de ma facture d'électricité ?

L'application affiche les revenus énergétiques calculés à partir des données des équipements et des prix configurés. La facture du fournisseur peut inclure des frais de base, des taxes, des tarifs progressifs, des subventions ou d'autres postes de facturation, ce qui peut expliquer des écarts.

### Pourquoi les revenus du jour ont-ils changé ultérieurement ?

Les raisons courantes sont un téléchargement tardif des données des équipements, une mise à jour des prix de l'électricité ou un recalcul par le système. Veuillez vous référer aux résultats recalculés une fois toutes les données complètes.

### Pourquoi les revenus sont-ils parfois négatifs ?

Cela est généralement dû à une situation de « charge à prix élevé, décharge à prix bas » – c'est-à-dire acheter de l'électricité au réseau à un prix élevé pour charger la batterie, puis la décharger lorsque les prix sont bas.