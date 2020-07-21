# Process

- Read the brief and looked at the [Exchange Rates API](https://exchangeratesapi.io/) usage guide

- Created a quick colour scheme and font pairing
    - Primary ![#faedf4](https://via.placeholder.com/15/faedf4/000000?text=+) `#f03c15`
    - Secondary ![#d0609b](https://via.placeholder.com/15/d0609b/000000?text=+) `#d0609b`
    - Accent ![#e56a82](https://via.placeholder.com/15/e56a82/000000?text=+) `#e56a82`
    - Background ![#212121](https://via.placeholder.com/15/212121/000000?text=+) `#212121`
    - Avocado Sans (Thin, Regular and Bold)

- Created React application and added the initial file structure

- Fetched data from the API and viewed it in the console to see what format I was working with

- Used the API to create an array of available currency symbols to populate the dropdown with

- Made the API fetch request dynamic based on what currency was selected from the dropdown

- Did basic styling once the list was being populated with the basic conversion rates

- Ordered dropdown and results list alphabetically to make them easier to navigate

- Added corresponding flag next to chosen currency (using the [Rest Counties API](https://restcountries.eu/))

- Realised I had forgotten to multiply the conversion rate by the amount entered so I did a quick fix for that

- Refactored the form from an `onSubmit` to an `onChange` for the `select`and `input` fields so the conversion results would update in real-time as the amount is changed

- Reset the results and amount when the currency symbol was changed to avoid the previous results being displayed until the conversion amount was changed again

- Finally added placeholder message to give insturctions on how to get the results

## Future Improvements

- Implement local storage to retain the user's preferred currency

- Filter results in only selected currencies, maybe based on a user's 'favourites' list

- Add tests to see how the app handles more unusual inputs

- More indepth error handling than just a basic `alert`

- Add some basic info for the selected currency in addition to the flag, e.g. other countries that use the currency, symbol, etc. (All of that is available in the [Rest Counties API](https://restcountries.eu/) used earlier)

- Extra styling to make flag images a consistent size to avoid other page elements shifting around

### Bugs

- Had an issue with the [Rest Counties API](https://restcountries.eu/)) where I was searching for the corresponding country based on the currency symbol since that is the only data I had access to, which sometimes caused the API to return objects for multiple countries that used that currency. To solve this I filtered the result to only give me the country with the largest population then used the flag image of that country to represent that currency. This worked for the most part, however for 'EUR' the country with the largest population was Germany so the German flag is displayed, when it would be probably be more appropiate to display the EU flag instead.






