Nous récupérons les données de l'association AntArea pour faire des statistiques sur les identifications de foumies en France métropolitaine.

Pour récupérer les données, nous utilisons la page suivante sur le site de l'INPN :

https://openobs.mnhn.fr/openobs-hub/download?searchParams=%3Fq%3Dlsid%253A185188%2520AND%2520%28dynamicProperties_diffusionGP%253A%2522true%2522%29%26fq%3DdatasetName%253A%2522Fourmis%2520de%2520France%2520m%25C3%25A9tropolitaine%2520%253A%2520donn%25C3%25A9es%2520AntArea%2522&targetUri=/openobs-hub/occurrences/search&totalRecords=15922

Les données sont concédées sous la licence [Licence Ouverte v2 (etalab)](https://www.etalab.gouv.fr/wp-content/uploads/2017/04/ETALAB-Licence-Ouverte-v2.0.pdf).

Dans tous les endpoints il faut retourner la value suivante dans la propriété `dataset.source.fr` :

« Source : jeux de données sources : Fourmis de France métropolitaine : données AntArea, observateurs/producteurs des données : collaboratif - données transmises par l’INPN-plateforme nationale du SINP – {date de l’extraction} ». 