import React from 'react';

const CurrencyInput = ({currencySymbols}) => {

    const currencyOptions = currencySymbols.map((currency, index) => {
        return <option key={index} value={currency}>{currency}</option>
    })

    return ( 
        <>
            <form>
                <label for='currencySymbols'>My Currency: </label>
                <select name='currencySymbols' defaultValue='' required >
                    <option value='' disabled>Select preferred currency</option>
                    {currencyOptions}
                </select>
                <label for='currencyAmount'>Amount to convert: </label>
                <input type='number' step='0.01' name='currencyAmount' placeholder='Enter amount...' required />
            </form>
        </>
     );
}
 
export default CurrencyInput;