import React, { useState } from 'react';

import flagPlaceholder from '../assets/images/flag_placeholder.png';

import '../styles/CurrencyForm.css';

const CurrencyForm = ({currencySymbols, setResults}) => {

    const [fetchError, setFetchError] = useState(false);
    const [flagURL, setFlagURL] = useState('');
    const [selectedCurrency, setSelectedCurrency] = useState('');

    const handleSymbolChange = async (event) => {
        setSelectedCurrency(event.target.value)
        fetch(`https://restcountries.eu/rest/v2/currency/${event.target.value}`)
        .then(res => res.json())
        .then(data => {
            let largestCountry = data.reduce((prev, curr) => prev.population > curr.population ? prev : curr);
            setFlagURL(largestCountry.flag);
            setResults({});
            document.getElementById('currency-amount').value = null
        })
        .catch(() => setFetchError(true));
    }

    const currencyOptions = currencySymbols.map((currency, index) => {
        return <option key={index} value={currency}>{currency}</option>
    });

    const handleAmountChange = async (event) => {
        let amount = event.target.value;
        let orderedResults = {};
        fetch(`https://api.exchangeratesapi.io/latest?base=${selectedCurrency}`)
        .then(res => res.json())
        .then(data => {
            Object.keys(data.rates).sort().forEach(key => {
                orderedResults[key] = data.rates[key] * amount
            })
            setResults(orderedResults);
        })
        .catch(() => setFetchError(true));
    }

    return ( 
        <div className='form-wrapper'>
            <form className='currency-form' id='currency-form'>
                <label htmlFor='currencySymbol'>My Preferred Currency: </label>
                <select name='currencySymbol' defaultValue='' onChange={handleSymbolChange} required >
                    <option value='' disabled>Select currency</option>
                    {currencyOptions}
                </select>
                <label htmlFor='currencyAmount'>Amount to convert: </label>
                <input type='number' step='0.01' name='currencyAmount' id='currency-amount' placeholder='Enter amount...' onChange={handleAmountChange} required />
                <button className='button' type='submit'>Convert</button>
            </form>
            {fetchError && alert('Failed to fetch data, please refresh the page and try again.')}
            <div className='flag-image-wrapper'>
                <img src={flagURL || flagPlaceholder} alt='selected country flag' />
            </div>
        </div>
     );
}
 
export default CurrencyForm;