import React from 'react';

import '../styles/CurrencyList.css';

const CurrencyList = ({results}) => {

    const mapResults = Object.entries(results).map(([key, value]) => {
        return <li key={key}><b>{key}:</b> {value.toFixed(2)}</li>
    });

    return ( 
        <div className='list-wrapper'>
            <h2>Results</h2>
            <ul className='currency-list'>
                {mapResults}
            </ul>
        </div>
     );
}
 
export default CurrencyList;