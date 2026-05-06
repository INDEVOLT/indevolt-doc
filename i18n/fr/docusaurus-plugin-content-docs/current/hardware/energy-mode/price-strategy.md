---
title: Mode de tarification dynamique
description: Charge et décharge automatiques selon le prix de l’électricité pour réduire les coûts énergétiques
---

# Mode de tarification dynamique

Le **Mode de tarification dynamique** est un mode de gestion intelligente de l’énergie. Le système ajuste automatiquement les cycles de charge et de décharge en fonction des seuils de prix que vous avez définis, afin de réduire vos coûts d’électricité tout en maintenant le confort d’utilisation.


## Utilisateurs concernés

Ce mode est recommandé si vous :

- êtes soumis à des **tarifs heures pleines / heures creuses, tarifs dynamiques ou prix en temps réel**  
- souhaitez profiter des prix bas pour stocker l’énergie et consommer aux heures chères  
- ne souhaitez pas programmer manuellement les cycles de charge et décharge  
- préférez une gestion automatique basée sur les prix de l’électricité  


## Fonctionnement du système

En mode de tarification dynamique, le système bascule automatiquement entre trois états selon le prix de l’électricité :

**Charge (prix bas)**

La puissance de charge dépend de la puissance maximale d’entrée de l’onduleur.

- L’énergie photovoltaïque est utilisée en priorité pour charger la batterie  
- Si l’énergie solaire est insuffisante, le réseau complète automatiquement la charge  
- La charge s’arrête lorsque la batterie est pleine  

**Décharge (prix élevé ou forte demande)**

La puissance de décharge dépend de la source de mesure (compteur / prise / charge par défaut).

- L’énergie photovoltaïque alimente en priorité les charges domestiques  
- En cas d’insuffisance solaire, la batterie prend le relais  
- La décharge s’arrête lorsque le SoC atteint le niveau d’énergie de secours  

**Statique (hors période de stratégie)**

En mode repos, la batterie ne charge ni ne décharge activement.

- L’énergie photovoltaïque alimente directement les charges domestiques  
- Si la production solaire dépasse la consommation et que le SoC n’est pas à 100 %, l’excédent recharge automatiquement la batterie  
- Une fois la batterie pleine, la production photovoltaïque est automatiquement limitée  


## Configuration du mode de tarification dynamique

👉 Pour les étapes détaillées de configuration, veuillez consulter le guide du mode intelligent de l’application INDEVOLT : [INDEVOLT App – Modes intelligents](../../app/smart.md)