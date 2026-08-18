---
title: Guide de contrôle du micro-onduleur sur la prise de dérivation
description: Découvrez les différentes stratégies de contrôle appliquées par le système de micro-stockage Indevolt lorsqu'un micro-onduleur est connecté à la prise de dérivation, selon l'état connecté au réseau ou hors réseau.
---

# Guide de contrôle du micro-onduleur sur la prise de dérivation

Lorsqu'un micro-onduleur est connecté à la prise de dérivation (Backup), le système applique différentes stratégies de contrôle selon l'état du réseau :

- **Hors réseau** : Réduction active de la puissance du micro-onduleur par ajustement de la fréquence de sortie.
- **Connecté au réseau** : Synchronisation avec le réseau, sans régulation de la puissance du micro-onduleur ; déconnexion de la prise de dérivation pour protection en cas de détection de retour d'énergie ou de surcharge.

## 1. Fonctionnement hors réseau avec micro-onduleur : Régulation de fréquence pour réduire la puissance

### 1.1 Pourquoi une régulation de fréquence ?

En mode hors réseau, le système assure l'alimentation de manière autonome et ne dispose pas de la capacité de tampon du réseau public. Si la puissance du micro-onduleur dépasse la consommation des charges, la tension du bus continu augmente continuellement. Au-delà de la plage de sécurité, le système déclenche un arrêt de protection.

### 1.2 Logique de contrôle

Le système réduit la puissance du micro-onduleur en augmentant la fréquence de sortie. Le micro-onduleur détecte cette augmentation de fréquence et réduit automatiquement sa puissance de façon proportionnelle, rétablissant ainsi l'équilibre entre production et consommation. Ce processus est entièrement automatique et ne nécessite aucune intervention manuelle.

### 1.3 Limitations du firmware

Le fonctionnement hors réseau avec micro-onduleur nécessite l'EMS **version 1.01.05 ou supérieure**, avec une plage de puissance de **30 W à 1200 W**. Lorsque l'état de charge (SOC) est inférieur à 3 %, la prise en charge de la puissance du micro-onduleur est suspendue, mais la prise de dérivation reste active. Dès que le SOC atteint à nouveau 3 % ou plus, le fonctionnement reprend automatiquement. Pour plus de détails, consultez le [Guide d'utilisation de la prise de dérivation](https://docs.indevolt.com/fr/docs/hardware/technical-note/bypass/).

## 2. Fonctionnement connecté au réseau avec micro-onduleur : Synchronisation réseau, déconnexion de la prise de dérivation en cas d'anomalie

### 2.1 Fonctionnement normal

En mode connecté au réseau, la fréquence et la phase de sortie de l'appareil sont synchronisées avec le réseau, et le micro-onduleur suit le réseau. Le système **ne régule pas activement** la puissance du micro-onduleur. L'énergie produite par le micro-onduleur est prioritairement utilisée pour l'alimentation des charges et la charge de la batterie ; l'excédent peut être injecté dans le réseau (dans la limite des capacités d'injection).

Pour la logique de répartition de l'énergie selon les différents modes de fonctionnement, consultez le [Guide d'utilisation de la prise de dérivation](https://docs.indevolt.com/fr/docs/hardware/technical-note/bypass/).

### 2.2 Mécanisme de protection

Lors de la détection de l'une des anomalies suivantes, le système déconnecte immédiatement la prise de dérivation et la rétablit automatiquement après 15 minutes :

| Condition de déclenchement  | Seuil                                                        |
| :-------------------------- | :----------------------------------------------------------- |
| Retour d'énergie excessif   | Dépassement de la puissance d'injection maximale de 10 % pendant plus de 30 secondes |
| Surcharge du micro-onduleur | Puissance d'entrée supérieure à 2400 W pendant plus de 30 secondes |

Après la déconnexion, le micro-onduleur perd la connexion au réseau et cesse de produire. Après le rétablissement, le système vérifie à nouveau ; si l'anomalie persiste, il déconnecte à nouveau.

## 3. Comparaison des deux modes de fonctionnement

| Élément de comparaison          | Hors réseau avec micro-onduleur                            | Connecté au réseau avec micro-onduleur                       |
| :------------------------------ | :--------------------------------------------------------- | :----------------------------------------------------------- |
| Mode de contrôle                | Régulation active de fréquence pour réduction de puissance | Synchronisation réseau, sans régulation                      |
| Puissance du micro-onduleur     | Contrôlée par la fréquence de l'appareil                   | Suit le réseau et injecte de manière autonome                |
| Protection contre les anomalies | Arrêt sur surtension / Suspension en cas de SOC bas        | Déconnexion du Bypass en cas de retour d'énergie / surcharge |
| Plage de puissance              | 30 W ~ 1200 W                                              | Jusqu'à 2400 W                                               |
| Scénario d'application          | Coupures de courant, zones sans réseau                     | Fonctionnement normal avec raccordement au réseau            |

## 4. Questions fréquentes (FAQ)

**Q1 : La régulation de fréquence en mode hors réseau affecte-t-elle le fonctionnement normal des appareils électroménagers ?**

R : Non. La plage de régulation de fréquence reste dans un intervalle de sécurité, et le processus d'ajustement est progressif, de sorte que les appareils électroménagers courants ne sont pas affectés.

**Q2 : Pourquoi, en mode connecté au réseau, n'utilise-t-on pas également la fréquence pour réduire la puissance, mais plutôt la déconnexion de la prise de dérivation ?**

R : En mode connecté au réseau, la fréquence du réseau est fixe ; l'appareil ne peut pas intervenir sur la puissance du micro-onduleur par le biais de la fréquence. La stratégie de protection repose donc sur une déconnexion immédiate en cas d'anomalie, offrant une réponse plus rapide.

**Q3 : Combien de temps faut-il pour que la prise de dérivation soit rétablie après une déconnexion ?**

R : Le rétablissement automatique se fait après 15 minutes. Si l'anomalie persiste, il sera déconnecté à nouveau.

## 5. Remarques

1. Ce document s'applique aux séries PowerFlex 2000 / SolidFlex 2000.
2. La régulation de fréquence en mode hors réseau nécessite que le micro-onduleur prenne en charge la réponse fréquence-puissance. Veuillez vérifier la compatibilité avant utilisation.
3. Tous les paramètres sont des valeurs typiques ; les valeurs réelles dépendent de la version du firmware et des réglages sur site.