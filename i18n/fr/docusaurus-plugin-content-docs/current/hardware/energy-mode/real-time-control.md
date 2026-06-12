---
title: Contrôle en temps réel
description: Définir manuellement les modes de charge, décharge ou veille de l’appareil
---

# Contrôle en temps réel

Le mode **contrôle en temps réel** vous permet de contrôler manuellement et immédiatement l’état de charge, de décharge et la puissance de l’appareil selon vos besoins.  

Une fois les paramètres définis, le système exécute la commande instantanément et s’arrête automatiquement lorsque les conditions définies sont atteintes.


## Utilisateurs concernés

Ce mode est recommandé pour :

- les besoins ponctuels de charge ou de décharge rapide  
- les tests, la mise en service ou la vérification du système  
- les utilisateurs avancés connaissant le fonctionnement du système  
- les scénarios nécessitant une intervention manuelle temporaire  


## Fonctionnement du système

En mode contrôle en temps réel, vous devez définir manuellement les paramètres suivants :

- **État** : veille / charge / décharge  
- **Puissance** : 0–2400 W  
- **Seuil de SoC** : 5 %–100 %  

Une fois la configuration enregistrée, le système agit immédiatement :

- **Charge** : l’appareil se charge à la puissance définie  
- **Décharge** : l’appareil alimente les charges à la puissance définie  
- **Veille** : l’appareil reste inactif (ni charge ni décharge)  

Lorsque le niveau de batterie atteint le **seuil de SoC** défini, le système arrête automatiquement la charge ou la décharge et passe en mode veille.


## Priorité de consommation

- Les charges domestiques sont alimentées en priorité par l’énergie photovoltaïque  
- En cas d’insuffisance solaire, la batterie prend le relais  
- Si l’énergie solaire et la batterie sont insuffisantes, le réseau électrique fournit le complément  


## Configuration du mode contrôle en temps réel

**Étapes de configuration :**

1. Vérifiez que votre appareil est ajouté dans votre foyer via l’application INDEVOLT  
2. Accédez à l’onglet **Appareil**, puis sélectionnez l’équipement concerné  
3. Cliquez sur la section du mode énergétique pour accéder à la sélection du mode  
4. Choisissez **Contrôle en Temps Réel**, puis cliquez sur **Paramètres**  
5. Définissez les paramètres selon vos besoins :  
   - État : veille / charge / décharge  
   - Puissance : 0–2400 W  
   - Seuil SoC : 5 %–100 %  
6. Cliquez sur **Enregistrer** pour appliquer immédiatement les paramètres  

<img src={require("./img/select_device.png").default} width="240"/>
<img src={require("./img/select_energy_mode.png").default} width="240"/>
<img src={require("./img/real_time_control.png").default} width="240"/>
<img src={require("./img/real_time_control_settings.png").default} width="240"/>
<img src={require("./img/real_time_control_status.png").default} width="240"/>
<img src={require("./img/real_time_control_power.png").default} width="240"/>
<img src={require("./img/real_time_control_soc.png").default} width="240"/>

## Paramètres recommandés de l’appareil

Dans la page de l’appareil, cliquez sur l’icône **⚙** en haut à droite.

<img src={require("./img/device_info.png").default} width="240"/>
<img src={require("./img/device_setting.png").default} width="240"/>

Pour un fonctionnement stable, il est recommandé de configurer :

| Paramètre | Configuration recommandée |
| ---------- | -------------------------- |
| Puissance de sortie AC Max (décharge) | Supérieure à la consommation réelle du foyer et conforme à la réglementation locale |
| Puissance d’entrée AC Max (charge) | Supérieure à la puissance de charge souhaitée |
| Limite d’injection | Recommandée à `0` (anti-injection activé) |
| Bypass Socket | Désactivé en l’absence de besoin spécifique |
| Réserve de secours | Recommandée à 20 % |
