# API de Statistiques sur l'Essaimage des Fourmis

## Aperçu

Ce projet fournit une API RESTful pour obtenir des statistiques sur l'essaimage des fourmis en France métropolitaine. L'API est conçue pour la prévision et pour fournir des informations sur les espèces connues dans divers départements français. Elle couvre exclusivement la France métropolitaine.

## Fonctionnalités

- Récupérer des statistiques sur toutes les identifications du jeu de données AntArea, comprenant 15 922 identifications.
- Afficher les taxons connus par département.
- Déterminer les dates d'essaimage pour des taxons spécifiques.

Pour des informations détaillées sur les endpoints et leur utilisation, veuillez consulter le [document de spécification de l'API](/docs/fr/api_specification.md).

## Installation

Pour configurer et exécuter ce projet localement, suivez ces étapes :

1. Cloner le dépôt :
    ```sh
    git clone <repository_url>
    ```
2. Naviguer dans le répertoire `src` et installer les dépendances :
    ```sh
    cd src
    npm install
    ```
3. Démarrer le serveur Express :
    ```sh
    npm run start
    ```

## Tests

Pour exécuter les tests en utilisant Bruno, veuillez suivre les étapes dans la [documentation des tests](/docs/fr/test.md).

## Extraction des Données

Pour des détails sur l'extraction des données, veuillez consulter la [documentation des données](/docs/fr/data.md).

## Prérequis

- Node.js (version spécifique à déterminer)
- npm (version spécifique à déterminer)

## Contribution

Ce projet est ouvert aux contributions. Veuillez vous assurer de suivre les lignes directrices décrites dans le document [CONTRIBUTING](CONTRIBUTING.md).

## Crédits

- **Auteur** : Emilien Cosson

Toutes les contributions sont les bienvenues tant qu'elles respectent les lignes directrices de contribution.

## Source des Données et Licence

Les données utilisées dans ce projet proviennent du jeu de données AntArea.

- Licence : Les données sont concédées sous la licence Etalab Open License v2.0.
- Attribution :
  - (EN) "Source: data sets: Ants of metropolitan France: AntArea data, data observers/producers: collaborative - data transmitted by the INPN-national SINP platform – {date of extraction}."
  - (FR) « Source : jeux de données sources : Fourmis de France métropolitaine : données AntArea, observateurs/producteurs des données : collaboratif - données transmises par l’INPN-plateforme nationale du SINP – {date de l’extraction} ».

## Licence

Ce projet est licencié sous la licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
