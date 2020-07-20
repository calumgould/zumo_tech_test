# Currency Converter

This is an app to convert a chosen currency and amount into other major currencies, using current conversion rates from the [Exchange Rates API](https://exchangeratesapi.io/).

## Setup

```
Clone the repo locally
```

```
cd zumo_tech_test
npm install
npm start
```

### Technologies

React | JavaScript, WebAPIs

### Features

- User can select a currency to convert from.

- Corresponding flag is displayed next to chosen currency (using the [Rest Counties API](https://restcountries.eu/))

- Real-time conversion updates as the amount of currency is changed.

- Alphabetical sorting of dropdown and conversion results.

- Simple error handling to alert user if the fetch from the API has failed.

