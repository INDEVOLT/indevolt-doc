---
title: BK1600 Ultra
description: BK1600 Ultra Historique des versions du firmware
---

# BK1600 Ultra

:::info[Périmètre]
Ce firmware est publié par série de produits et non nommé d’après un modèle unique. Les modèles suivants d’une même série partagent le même ensemble de firmwares :

**Indevolt BK1600 Ultra**

Le paquet de firmware contient les firmwares des modules CMS, Pfile, EMS, BMS, MPPT, PCS. Chaque module est mis à jour indépendamment ; consultez la section correspondante selon vos besoins.
:::

### CMS

| Date de publication | Version        | Résumé des mises à jour |
| ------------------- | -------------- | ------------------------ |
| 2026/09/16 | V140E.12.104C | 1. Ajout du réglage d'offset des compteurs<br />2. Ajout d'un interrupteur de commande pour prise intelligente Shelly<br />3. Ajout du support du compteur P1<br />4. Optimisation de l'API HTTP OpenData<br />5. Optimisation de la stabilité de la communication|
| 2026/03/06            | V1408.0C.104A  | 1. Ajout du support du compteur stromleser (lecteur infrarouge)<br />2. Ajout du support du compteur HomeWizard (P1)<br />3. Ajout du support du Shelly Plug Gen1<br />4. Ajout du réglage d’offset des compteurs |
| 2026/01/19           | V1407.0B.1049  | 1. Optimisation de la logique de communication |
| 2025/12/12          | V1406.0B.1047  | 1. Support des prises intelligentes Solarman, Shelly Plug S MTR Gen3, Shelly 3EM<br />2. Optimisation de la logique de fonctionnement |
| 2025/10/23          | V1401.0B.0042  | 1. Optimisation d’OpenData<br />2. Optimisation de la logique de fonctionnement |
| 2025/07/22           | V130A.09.003A  | / |
| 2025/06/24           | V1.3.09_R006.062_M4848_00000034 | / |
| 2024/11/25          | V1.3_R006.002_M4848_00000021 | / |


### Pfile

| Date de publication | Version   | Résumé des mises à jour                                      |
| ------------------- | --------- | ------------------------------------------------------------ |
| 2026/08/12          | V06.00.12 | Ajout du paramètre de calibrage de charge complète           |
| 2025/12/29          | V06.00.09 | Ajout du contrôle du bypass                                  |
| 2025/11/14          | V06.00.08 | Ajout du contrôle du bypass                                  |
| 2025/09/02          | V06.00.06 | /                                                            |
| 2024/11/20          | V06.00.05 | 1. Mise à jour des points de mesure batterie<br />2. Optimisation de la stratégie temporelle |


### EMS

| Date de publication | Version   | Résumé des mises à jour |
| ------------------- | --------- | ------------------------ |
| 2026-09-16 | V2.00.11 | 1. Optimisation de la logique de fonctionnement du bypass avec micro-onduleur<br />2. Optimisation de la logique du mode de fonctionnement |
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

### PCS

| Date de publication | Version | Résumé des mises à jour                                      |
| ------------------- | ------- | ------------------------------------------------------------ |
| 2026/09/16          | V2.34   | Optimisation de la logique de fonctionnement                 |
| 2026/08/10          | V2.33   | Optimisation de la logique de fonctionnement                 |
| 2025/05/22          | V2.31   | Optimisation de la logique de fonctionnement du relais de raccordement au réseau |
| 2025/08/28          | V2.21   | /                                                            |
| 2025/06/26          | V2.17   | /                                                            |
| 2025/06/20          | V2.15   | /                                                            |
| 2025/03/07          | V2.07   | /                                                            |
