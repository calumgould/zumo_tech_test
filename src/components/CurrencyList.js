import React from 'react';

const CurrencyList = ({results}) => {

    const mapResults = Object.entries(results).map(([key, value]) => {
        return <li key={key}>{key}: {value.toFixed(2)}</li>
    })

    return ( 
        <>
            <h2>Results</h2>
            <ul className='currency-list'>
                {mapResults}
            </ul>
        </>
     );
}
 
export default CurrencyList;