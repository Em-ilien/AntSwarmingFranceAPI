## Import des données

Nous récupérons les données de l'association AntArea pour faire des statistiques sur les identifications de foumies en France métropolitaine.

## Récupération du dataset

Pour récupérer les données, nous utilisons la page suivante sur le site de l'INPN :

https://openobs.mnhn.fr/openobs-hub/download?searchParams=%3Fq%3Dlsid%253A185188%2520AND%2520%28dynamicProperties_diffusionGP%253A%2522true%2522%29%26fq%3DdatasetName%253A%2522Fourmis%2520de%2520France%2520m%25C3%25A9tropolitaine%2520%253A%2520donn%25C3%25A9es%2520AntArea%2522&targetUri=/openobs-hub/occurrences/search&totalRecords=15922

Les données sont concédées sous la licence [Licence Ouverte v2 (etalab)](https://www.etalab.gouv.fr/wp-content/uploads/2017/04/ETALAB-Licence-Ouverte-v2.0.pdf).

Dans tous les endpoints il faut retourner la value suivante dans la propriété `dataset.source.fr` :

« Source : jeux de données sources : Fourmis de France métropolitaine : données AntArea, observateurs/producteurs des données : collaboratif - données transmises par l’INPN-plateforme nationale du SINP – {date de l’extraction} ». 

## Population du dataset

### Retrouver le code du département

Pour retrouver le code de département, nous nous fions à la `decimalLatitude` et à la `decimalLongitude` des records extraites sur l'INPN.

Nous utilisons l'API https://geo.api.gouv.fr/ pour retrouver la commune associée aux positions géographiques et par extension le département.

Exemple: https://geo.api.gouv.fr/communes?lat=47.988178&lon=0.160791

Response:
```json
[
  {
    "nom": "Le Mans",
    "code": "72181",
    "codeDepartement": "72",
    "siren": "217201813",
    "codeEpci": "247200132",
    "codeRegion": "52",
    "codesPostaux": [
      "72000",
      "72100"
    ],
    "population": 145004
  }
]
```

On récupère le premier résultat du tableau puis le `codeDeparment` qu'on vient ajouter en tant que nouvelle colonne `codeDeparment` à notre fichier csv.
