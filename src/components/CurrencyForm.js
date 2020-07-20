import React, { useState, useEffect } from 'react';

import '../styles/CurrencyForm.css';

const CurrencyForm = ({currencySymbols, setResults}) => {

    const [fetchError, setFetchError] = useState(false);
    const [flagURL, setFlagURL] = useState('');

    useEffect(() => {
        
    }, [])

    const findFlag = async (event) => {
        fetch(`https://restcountries.eu/rest/v2/currency/${event.target.value}`)
        .then(res => res.json())
        .then(data => {
            let largestCountry = data.reduce((prev, curr) => prev.population > curr.population ? prev : curr);
            setFlagURL(largestCountry.flag);
        })
        .catch(() => setFetchError(true));
    }

    const currencyOptions = currencySymbols.map((currency, index) => {
        return <option key={index} value={currency}>{currency}</option>
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        let orderedResults = {}
        let preferredCurrency = event.target.currencySymbol.value
        fetch(`https://api.exchangeratesapi.io/latest?base=${preferredCurrency}`)
        .then(res => res.json())
        .then(data => {
            Object.keys(data.rates).sort().forEach(key => {
                orderedResults[key] = data.rates[key]
            })
            setResults(orderedResults);
        })
        .catch(() => setFetchError(true));
    }

    return ( 
        <div className='form-wrapper'>
            <form className='currency-form' onSubmit={handleSubmit}>
                <label htmlFor='currencySymbol'>My Preferred Currency: </label>
                <select name='currencySymbol' defaultValue='' onChange={findFlag} required >
                    <option value='' disabled>Select currency</option>
                    {currencyOptions}
                </select>
                <label htmlFor='currencyAmount'>Amount to convert: </label>
                <input type='number' step='0.01' name='currencyAmount' placeholder='Enter amount...' required />
                <button className='button' type='submit'>Convert</button>
            </form>
            {fetchError && alert('Failed to fetch data, please refresh the page and try again.')}
            <img src={flagURL} alt='selected country flag' />
        </div>
     );
}
 
export default CurrencyForm;