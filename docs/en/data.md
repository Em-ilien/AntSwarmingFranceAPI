## Data Import

We are retrieving data from the AntArea association to compile statistics on ant identifications in metropolitan France.

## Dataset Retrieval

To obtain the data, we use the following page on the INPN website:

https://openobs.mnhn.fr/openobs-hub/download?searchParams=%3Fq%3Dlsid%253A185188%2520AND%2520%28dynamicProperties_diffusionGP%253A%2522true%2522%29%26fq%3DdatasetName%253A%2522Fourmis%2520de%2520France%2520m%25C3%25A9tropolitaine%2520%253A%2520donn%25C3%25A9es%2520AntArea%2522&targetUri=/openobs-hub/occurrences/search&totalRecords=15922

The data is licensed under the [Open License v2 (etalab)](https://www.etalab.gouv.fr/wp-content/uploads/2017/04/ETALAB-Licence-Ouverte-v2.0.pdf).

In all endpoints, the following value must be returned in the `dataset.source.fr` property:

“Source: source datasets: Ants of metropolitan France: AntArea data, observers/producers of the data: collaborative - data transmitted by INPN - national platform of SINP – {date of extraction}”.

## Dataset Population

### Finding the Department Code

To find the department code, we rely on the `decimalLatitude` and `decimalLongitude` of the records extracted from INPN.

We use the API https://geo.api.gouv.fr/ to find the municipality associated with the geographical positions and by extension the department.

Example: https://geo.api.gouv.fr/communes?lat=47.988178&lon=0.160791

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

We retrieve the first result from the array and then add the codeDeparment as a new column codeDeparment to our CSV file.
