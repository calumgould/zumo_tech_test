import React, { useState, useEffect } from 'react';

const CurrencyList = ({results}) => {

    const currencyResults = () => {
        if(Object.keys(results).length !== 0) {
            console.log('map function', results);
            const mapResults = Object.entries(results).map((key, value) => {
                return <li key={key}>{value}</li>
            })
            console.log('map results', mapResults);
            return mapResults;
        }
    }


    return ( 
        <>
            <h2>Results</h2>
            <ul>
                {currencyResults()}
            </ul>
        </>
     );
}
 
export default CurrencyList;