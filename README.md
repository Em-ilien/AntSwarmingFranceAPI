# Ant Swarming Statistics API

## Overview

This project provides a RESTful API to obtain statistics on ant swarming in metropolitan France. The API is designed for forecasting and providing information on known species in various French departments. It exclusively covers metropolitan France.

## Features

- Retrieve statistics on all identifications from the AntArea dataset, consisting of 15,922 identifications.
- Display known taxa by department.
- Determine the swarming dates for specific taxa.

For detailed information on endpoints and their usage, please refer to the [API specification document](/docs/en/api_specification.md).

## Installation

To set up and run this project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone <repository_url>
    ```
2. Navigate to the `src` directory and install the dependencies:
    ```sh
    cd src
    npm install
    ```
3. Start the Express server:
    ```sh
    npm run start
    ```

## Testing

To run the tests using Bruno, please follow the steps in the [tests documentation](/docs/en/test.md).

## Data Extraction

For details on data extraction, please refer to the [data documentation](/docs/en/data.md).

## Prerequisites

- Node.js (specific version TBD)
- npm (specific version TBD)

## Contributing

This project is open for contributions. Please ensure you follow the guidelines outlined in the [CONTRIBUTING](CONTRIBUTING.md) document.

## Credits

- **Author**: Emilien Cosson

Any contributions are welcome as long as they adhere to the contributing guidelines.

## Data Source and License

The data used in this project comes from the AntArea dataset.

- License: Data is licensed under the Etalab Open License v2.0.
- Attribution: 
  - (EN) "Source: data sets: Ants of metropolitan France: AntArea data, data observers/producers: collaborative - data transmitted by the INPN-national SINP platform – {date of extraction}."
  - (FR) « Source : jeux de données sources : Fourmis de France métropolitaine : données AntArea, observateurs/producteurs des données : collaboratif - données transmises par l’INPN-plateforme nationale du SINP – {date de l’extraction} »

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
