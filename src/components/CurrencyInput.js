import React, { useState } from 'react';

const CurrencyInput = ({currencySymbols, setResults}) => {

    const [fetchError, setFetchError] = useState(false);

    const currencyOptions = currencySymbols.map((currency, index) => {
        return <option key={index} value={currency}>{currency}</option>
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
        let preferredCurrency = event.target.currencySymbol.value
        fetch(`https://api.exchangeratesapi.io/latest?base=${preferredCurrency}`)
        .then(res => res.json())
        .then(data => setResults(data.rates))
        .catch(() => setFetchError(true));
    }

    return ( 
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='currencySymbol'>My Currency: </label>
                <select name='currencySymbol' defaultValue='' required >
                    <option value='' disabled>Select preferred currency</option>
                    {currencyOptions}
                </select>
                <label htmlFor='currencyAmount'>Amount to convert: </label>
                <input type='number' step='0.01' name='currencyAmount' placeholder='Enter amount...' required />
                <button type='submit'>Convert</button>
            </form>
            {fetchError && alert('Failed to fetch conversion data, please refresh the page and try again.')}
        </>
     );
}
 
export default CurrencyInput;