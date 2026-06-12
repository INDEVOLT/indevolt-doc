---
title: Historique des versions du firmware
description: Historique des versions du firmware des équipements de stockage d’énergie INDEVOLT
---

# Historique des versions du firmware

## SolidFlex 2000 / PowerFlex 2000

### CMS

| Date de publication | Version        | Résumé des mises à jour |
| ------------------- | -------------- | ----------------------- |
| 2026/05/07 | V140C.0B.0036 | 1. Optimisation de la logique de communication LoRa |
| 2026/05/07   | V140B.0B.0035 | 1. Optimisation de la logique de communication |
| 2026/04/10           | V140A.0A.0034  | 1. Ajout de plans horaires personnalisés à la minute<br />2. Ajout du support MQTT tiers (non pris en charge dans l’application)<br />3. Ajout de l’accès cloud Modbus TCP (non pris en charge dans l’application)<br />4. Passage des tarifs dynamiques à un pas de 15 minutes<br />5. Optimisation de la logique de communication Wi-Fi et LoRa<br />6. Suppression de la réinitialisation Wi-Fi par appui long (10 s sur bouton), désormais disponible dans l’application (non pris en charge pour le moment) |
| 2026/03/03            | V1408.09.0031  | 1. Ajout du support des compteurs stromleser (lecteur infrarouge)<br />2. Ajout du support des compteurs HomeWizard (P1)<br />3. Ajout du support du Shelly Plug Gen1<br />4. Ajout du réglage d’offset des compteurs<br />5. Optimisation de la logique de communication |
| 2026/01/15           | V1407.08.002F  | 1. Optimisation de la logique d’appel OpenData |
| 2026/01/15           | V1406.07.002E  | 1. Optimisation de la logique de communication |
| 2025/12/12          | V1406.07.002B  | 1. Support des prises intelligentes Solarman, Shelly Plug S MTR Gen3, Shelly 3EM<br />2. Optimisation de la logique de fonctionnement |
| 2025/10/27          | V1401.05.0022  | 1. Optimisation du fonctionnement en parallèle et d’OpenData |
| 2025/09/24           | V1400.04.001F  | 1. Ajout du support du lecteur de compteur Solarman P1<br />2. Optimisation de la logique de contrôle OpenData<br />3. Optimisation du format de version |
| 2025/07/31           | V1.3.0A_R00D.032_M4801_00000019 | 1. Optimisation de la gestion des ressources 4G/Wi-Fi<br />2. Optimisation des signaux des équipements associés<br />3. Extension des équipements pris en charge : support des compteurs SOLARMAN<br />4. Amélioration de la stabilité système<br />5. Optimisation de la configuration Bluetooth |
| 2025/05/29           | V1.3.07_R00D.002_M4801_00000014 | / |


### Pfile

| Date de publication | Version   | Résumé des mises à jour |
| ------------------- | --------- | ------------------------ |
| 2026/05/25  | V0D.00.19 | 1. Optimisation de certains paramètres |
| 2026/05/06  | V0D.00.18 | 1. Optimisation de certains paramètres |
| 2026/01/14           | V0D.00.14  | 1. Optimisation de l’affichage de l’état de température de la batterie |
| 2026/01/09            | V0D.00.13  | 1. Optimisation de l’affichage de l’état de température de la batterie |
| 2025/12/25          | V0D.00.11  | 1. Ajout du réglage de puissance de charge AC |
| 2025/11/14          | V0D.00.08  | 1. Optimisation du contrôle du bandeau LED principal |
| 2025/10/27          | V0D.00.06  | 1. Ajout des registres liés aux packs batterie 6, à l’énergie AC couplée, au contrôle veille/sommeil, à l’activation du bypass et à l’énergie de sortie réseau/hors réseau<br />2. Modification du point de mesure des codes d’alarme PV4<br />3. Suppression des doublons du contrôle LED |
| 2025/09/24           | V0D.00.03  | 1. Ajout de bits de contrôle<br />2. Optimisation de la logique de calcul |


### EMS

| Date de publication | Version   | Résumé des mises à jour |
| ------------------- | --------- | ------------------------ |
| 2026/05/12 | V1.01.08 | 1. Optimisation de la logique de fonctionnement en parallèle |
| 2026/02/11           | V1.01.03   | 1. Optimisation de la logique de charge forcée<br />2. Optimisation des plages horaires<br />3. Optimisation du chauffage basse température de la batterie<br />4. Optimisation du fonctionnement en parallèle<br />5. Ajout de compatibilité avec le pack batterie PFA4000<br />6. Correction d’un problème empêchant l’entrée en veille profonde dans certains cas |
| 2026/01/21           | V1.00.58   | 1. Optimisation du temps de mise à jour firmware<br />2. Optimisation du réglage de puissance en parallèle<br />3. Détection automatique de retour réseau en cas de charge AC interdite<br />4. Amélioration de la logique de veille des batteries |
| 2025/12/10          | V1.00.57   | 1. Optimisation de la répartition de puissance PV en parallèle<br />2. Optimisation de la priorité PV en mode contrôle temps réel<br />3. Optimisation du processus de mise à jour<br />4. Ajout de la sortie de veille profonde via appui court sur bouton |
| 2025/11/28          | V1.00.55   | 1. Optimisation de la logique de mise à jour |
| 2025/11/04           | V1.00.50   | 1. Optimisation de la veille profonde (consommation : 20 W bypass activé, 8 W désactivé)<br />2. Optimisation de l’animation LED à l’arrêt<br />3. Optimisation de la logique SOC de secours<br />4. Optimisation du comportement de mise à jour<br />5. Optimisation de la logique PV<br />6. Optimisation des paramètres de veille en mode temps réel<br />7. Optimisation de la consommation globale<br />8. Ajout du support du cinquième pack batterie (non disponible dans l’app, fonctionnement matériel OK) |
| 2025/10/14          | V1.00.48   | 1. Mode EPS par défaut au démarrage en mode hors réseau<br />2. Ajout du mode charge critique (non disponible dans l’app)<br />3. Calibration automatique SOC tous les 15 jours si 100 % non atteint<br />4. Puissance réseau basée sur la puissance AC ligne<br />5. Ajout du mode contrôle temps réel (non disponible dans l’app)<br />6. Optimisation de la veille profonde<br />7. Optimisation du fonctionnement en parallèle<br />8. Optimisation de la consommation en veille |
| 2025/08/04            | V1.00.43   | 1. Ajout du fonctionnement en parallèle, paramètres réseau et normes réseau, puissance réseau augmentée à 3600 W<br />2. Ajout du contrôle LED et bypass, amélioration des animations LED<br />3. Augmentation de la puissance de décharge à 0,6P, optimisation de la répartition SOC multi-pack<br />4. Optimisation de la charge AC par défaut à 2400 W et du contrôle micro-onduleur<br />5. Amélioration de la protection basse tension et du contrôle thermique MOS<br />6. Amélioration de la protection surcharge et récupération automatique<br />7. Ajout des rapports d’état arrêt/temps/fréquence |
| 2025/06/17          | V1.00.35   | / |
| 2025/06/04          | V1.00.32   | / |


### BMS MB

| Date de publication | Version  | Résumé des mises à jour                                                                                                         |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 2026/05/12          | V1.00.45 | 1. Optimisation de la logique de protection et de fonctionnement de la batterie                                                 |
| 2026/02/11          | V1.00.42 | 1. Optimisation de l’algorithme SOC                                                                                             |
| 2026/01/21          | V1.00.38 | 1. Optimisation de l’algorithme SOC                                                                                             |
| 2025/11/28          | V1.00.35 | 1. Optimisation de la logique de mise à jour                                                                                    |
| 2025/10/04          | V1.00.33 | 1. Optimisation de l’auto-diagnostic<br />2. Optimisation de la consommation en veille<br />3. Ajout de la logique de précharge |
| 2025/07/31          | V1.00.30 | 1. Optimisation de la détection de charge, stabilité de communication et protection de décharge                                 |
| 2025/06/16          | V1.00.25 | /                                                                                                                               |
| 2025/05/30          | V1.00.22 | /                                                                                                                               |


### BMS SLAVE

| Date de publication | Version  | Résumé des mises à jour                                                                                                         |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 2026/05/12          | V1.10.45 | 1. Optimisation de la logique de protection et de fonctionnement de la batterie                                                 |
| 2026/02/11          | V1.10.42 | 1. Optimisation de l’algorithme SOC                                                                                             |
| 2026/01/21          | V1.10.38 | 1. Optimisation de l’algorithme SOC                                                                                             |
| 2025/11/28          | V1.10.35 | 1. Optimisation de la logique de mise à jour                                                                                    |
| 2025/10/04          | V1.10.33 | 1. Optimisation de l’auto-diagnostic<br />2. Optimisation de la consommation en veille<br />3. Ajout de la logique de précharge |
| 2025/07/31          | V1.10.30 | 1. Optimisation de la détection de charge, stabilité de communication et protection de décharge                                 |
| 2025/06/16          | V1.10.25 | /                                                                                                                               |
| 2025/06/04          | V1.10.22 | /                                                                                                                               |


### DCDC

| Date de publication | Version   | Résumé des mises à jour |
| ------------------- | --------- | ------------------------ |
| 2026/05/29 | V1.01.75 | 1. Optimisation du problème de limitation de puissance lors de la charge de plusieurs packs de batteries pouvant survenir occasionnellement |
| 2026/05/10 | V1.01.73 | 1. Optimisation de la logique de fonctionnement |
| 2026/03/20           | V1.01.64   | 1. Correction d’un problème de perte de communication des packs batterie en veille profonde multi-pack |
| 2026/03/04            | V1.01.62   | 1. Optimisation de la communication des packs batterie |
| 2026/02/11           | V1.01.61   | 1. Optimisation de la communication des packs batterie |
| 2026/01/21           | V1.01.59   | 1. Correction d’un déséquilibre SOC causé par une décharge à faible puissance |
| 2025/11/28          | V1.01.54   | 1. Correction de limitation PV dans certains scénarios<br />2. Optimisation de la logique de mise à jour |
| 2025/11/04           | V1.01.51   | 1. Optimisation de la logique du bypass |
| 2025/10/14          | V1.01.48   | 1. Optimisation de la charge PV<br />2. Optimisation de la logique du film chauffant |
| 2025/08/27           | V1.01.39   | / |
| 2025/07/31           | V1.01.36   | 1. Protection contre courant inverse<br />2. Optimisation de la puissance de décharge<br />3. Correction de surintensité en charge<br />4. Détection intelligente faible luminosité<br />5. Amélioration de la protection surcharge |
| 2025/06/17           | V1.01.28   | / |
| 2025/06/04            | V1.01.23   | / |


### INV

| Date de publication | Version | Résumé des mises à jour |
| ------------------- | ------- | ------------------------ |
| 2026/05/12 | V1.38 | 1. Ajout de la prise en charge des micro-onduleurs hors réseau (max : 1200 W)<br />2. Optimisation du problème de défaillance possible de l’activation du relais de raccordement au réseau dans certains scénarios<br />3. Optimisation d’un problème où une erreur pouvait être signalée après la charge complète du PV |
| 2026/04/10           | V1.36   | 1. Correction d’un problème de non charge/décharge aléatoire en mode connecté au réseau |
| 2026/02/11           | V1.35   | 1. Optimisation de la logique de charge |
| 2026/01/21           | V1.34   | 1. Correction d’une ouverture aléatoire du bypass |
| 2025/12/10          | V1.32   | 1. Optimisation du mode de contrôle temps réel |
| 2025/11/04           | V1.30   | 1. Ajout du support du cinquième pack batterie (non disponible dans l’app) |
| 2025/10/21          | V1.29   | / |
| 2025/10/04           | V1.28   | 1. Optimisation de la protection îlotage<br />2. Optimisation de la décharge hors réseau<br />3. Optimisation du déclassement |
| 2025/09/16          | V1.22   | / |
| 2025/07/08            | V1.21   | 1. Optimisation de la charge<br />2. Ajustement de la protection sous-tension<br />3. Amélioration de la protection surintensité<br />4. Adaptation aux réglementations multi-régions<br />5. Amélioration des performances réseau faible<br />6. Paramètres de réglementation par défaut |
| 2025/06/02            | V1.16   | / |

---

## BK1600

### CMS

| Date de publication | Version        | Résumé des mises à jour |
| ------------------- | -------------- | ------------------------ |
| 2026/03/06            | V1408.0C.104A  | 1. Ajout du support du compteur stromleser (lecteur infrarouge)<br />2. Ajout du support du compteur HomeWizard (P1)<br />3. Ajout du support du Shelly Plug Gen1<br />4. Ajout du réglage d’offset des compteurs |
| 2026/01/19           | V1407.0B.1049  | 1. Optimisation de la logique de communication |
| 2025/12/12          | V1406.0B.1047  | 1. Support des prises intelligentes Solarman, Shelly Plug S MTR Gen3, Shelly 3EM<br />2. Optimisation de la logique de fonctionnement |
| 2025/10/23          | V1401.0B.0042  | 1. Optimisation d’OpenData<br />2. Optimisation de la logique de fonctionnement |
| 2025/07/22          | V130A.09.003A  | / |
| 2025/06/24          | V1.3.09_R006.062_M4848_00000034 | / |
| 2024/11/25          | V1.3_R006.002_M4848_00000021 | / |


### Pfile

| Date de publication | Version   | Résumé des mises à jour |
| ------------------- | --------- | ------------------------ |
| 2025/12/29          | V06.00.09 | Ajout du contrôle du bypass |
| 2025/11/14          | V06.00.08 | Ajout du contrôle du bypass |
| 2025/09/02          | V06.00.06 | / |
| 2024/11/20          | V06.00.05 | 1. Mise à jour des points de mesure batterie<br />2. Optimisation de la stratégie temporelle |


### EMS

| Date de publication | Version   | Résumé des mises à jour |
| ------------------- | --------- | ------------------------ |
| 2026/05/22 | V1.00.19 | 1. Optimisation du calcul de la puissance<br />2. Optimisation de la logique PV lorsque le SOC est à 100 %<br />3. Ajout d’une condition : l’activation de la charge AC ne s’applique que lorsque le SOC est inférieur à 5 %<br />4. Ajout d’un interrupteur de charge complète automatique |
| 2026/02/09            | V1.00.16  | 1. En mode parallèle, autorisation du surplus PV vers une autre unité pour charge<br />2. Optimisation de la logique du mode contrôle temps réel |
| 2025/08/28           | V1.00.14  | 1. Optimisation système : amélioration de la stabilité et de la répartition de puissance en réseau multi-appareils<br />2. Ajout de fonctions intelligentes : protection des charges critiques, maintenance par charge complète programmée, veille profonde (remplace l’arrêt), prolongation de la durée de vie batterie<br />3. Amélioration de l’expérience utilisateur : conditions de réveil plus flexibles, expérience plus intelligente en mode connecté au réseau et hors réseau<br />4. Ajout des journaux d’arrêt système, conservation automatique des paramètres lors des mises à jour<br />5. Mise à jour du protocole de communication interne |
| 2025/06/26           | V1.00.13   | / |
| 2025/06/11           | V1.00.12   | / |
| 2024/11/26          | V1.00.09   | / |


### BMS

| Date de publication | Version | Résumé des mises à jour                       |
| ------------------- | ------- | --------------------------------------------- |
| 2025/06/11          | V1.0.35 | Amélioration de la précision du SOC en veille |
| 2024/10/31          | V1.0.34 | /                                             |


### MPPT

| Date de publication | Version |
| ------------------- | ------- |
| 2025/09/29          | V3.17   |
| 2025/06/11          | V3.16   |
| 2024/08/03          | V3.14   |


### INV

| Date de publication | Version | Résumé des mises à jour                                                                                |
| ------------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| 2026/05/22          | V1.21   | 1. Optimisation de la logique de fonctionnement du relais de raccordement au réseau                    |
| 2025/05/08          | V1.20   | /                                                                                                      |
| 2025/05/06          | V1.19   | /                                                                                                      |
| 2024/08/14          | V1.18   | 1. Optimisation de la boucle DC/DC en charge<br />2. Optimisation du filtrage des données de reporting |

---

## BK1600 Ultra

### CMS

| Date de publication | Version        | Résumé des mises à jour |
| ------------------- | -------------- | ------------------------ |
| 2026/03/06            | V1408.0C.104A  | 1. Ajout du support du compteur stromleser (lecteur infrarouge)<br />2. Ajout du support du compteur HomeWizard (P1)<br />3. Ajout du support du Shelly Plug Gen1<br />4. Ajout du réglage d’offset des compteurs |
| 2026/01/19           | V1407.0B.1049  | 1. Optimisation de la logique de communication |
| 2025/12/12          | V1406.0B.1047  | 1. Support des prises intelligentes Solarman, Shelly Plug S MTR Gen3, Shelly 3EM<br />2. Optimisation de la logique de fonctionnement |
| 2025/10/23          | V1401.0B.0042  | 1. Optimisation d’OpenData<br />2. Optimisation de la logique de fonctionnement |
| 2025/07/22           | V130A.09.003A  | / |
| 2025/06/24           | V1.3.09_R006.062_M4848_00000034 | / |
| 2024/11/25          | V1.3_R006.002_M4848_00000021 | / |


### Pfile

| Date de publication | Version   | Résumé des mises à jour                                                                      |
| ------------------- | --------- | -------------------------------------------------------------------------------------------- |
| 2025/12/29          | V06.00.09 | Ajout du contrôle du bypass                                                                  |
| 2025/11/14          | V06.00.08 | Ajout du contrôle du bypass                                                                  |
| 2025/09/02          | V06.00.06 | /                                                                                            |
| 2024/11/20          | V06.00.05 | 1. Mise à jour des points de mesure batterie<br />2. Optimisation de la stratégie temporelle |


### EMS

| Date de publication | Version   | Résumé des mises à jour |
| ------------------- | --------- | ------------------------ |
| 2026-05-22 | V2.00.09 | 1. Optimisation du calcul de la puissance<br />2. Optimisation de la logique PV lorsque le SOC atteint 100 %<br />3. Activation de la charge AC limitée aux cas où le SOC est inférieur à 5 %<br />4. Ajout d’un interrupteur de charge complète automatique |
| 2025/11/27          | V2.00.04  | 1. Levée de la limitation de puissance du bypass à 10 A |
| 2025/09/29          | V2.00.03  | 1. Optimisation de la logique de scénarios en mode parallèle<br />2. En mode parallèle filaire, support de la mise en veille profonde de l’unité esclave |
| 2025/09/12          | V2.00.02  | 1. Arrondi inférieur du SOC<br />2. Mise à jour du compteur toutes les 3 secondes<br />3. Répartition de puissance de l’esclave selon la limite<br />4. Décharge en cas de puissance nulle<br />5. Ignorer certaines erreurs micro-onduleur<br />6. Ajout des journaux d’arrêt<br />7. Compatibilité des mises à jour paramètres<br />8. Nouveaux états système (ex : recharge)<br />9. Protection surcharge avec redondance<br />10. Puissance ligne incluant bypass<br />11. Charge critique uniquement via bypass<br />12. Veille remplacée par veille profonde<br />13. Optimisation veille profonde<br />14. Ajout de la charge complète programmée<br />15. Mise à niveau Modbus V2.3<br />16. Correction du problème de décharge en parallèle |
| 2025/06/26          | V2.00.01  | / |
| 2025/03/07          | V2.00.00  | / |


### BMS

| Date de publication | Version  |
| ------------------- | -------- |
| 2025/03/07          | V1.00.35 |


### MPPT

| Date de publication | Version |
| ------------------- | ------- |
| 2025/09/29          | V3.17   |
| 2025/03/07          | V3.16   |

### INV

| Date de publication | Version | Résumé des mises à jour                                                          |
| ------------------- | ------- | -------------------------------------------------------------------------------- |
| 2025/05/22          | V2.31   | Optimisation de la logique de fonctionnement du relais de raccordement au réseau |
| 2025/08/28          | V2.21   | /                                                                                |
| 2025/06/26          | V2.17   | /                                                                                |
| 2025/06/20          | V2.15   | /                                                                                |
| 2025/03/07          | V2.07   | /                                                                                |
