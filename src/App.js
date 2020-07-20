import React, { useState, useEffect } from 'react';

import CurrencyInput from './components/CurrencyInput';

import './styles/App.css';

const App = () => {

  const [currencySymbols, setCurrencySymbols] = useState([])
  const [fetchError, setFetchError] = useState(false);

  const fetchCurrencySymbols = async () => {
    fetch('https://api.exchangeratesapi.io/latest')
      .then(res => res.json())
      .then(data => setCurrencySymbols(Object.keys(data.rates)))
      .then(() => setCurrencySymbols(currencySymbols => ['EUR', ...currencySymbols].sort()))
      .catch(() => setFetchError(true));
  }

  useEffect(() => {
    fetchCurrencySymbols();
  }, [])

  useEffect(() => {
    if (currencySymbols.length !== 0) {
      console.log('fetch data', currencySymbols);
    }
  }, [currencySymbols])

  return (
    <div className="App">
      <h1>Currency Converter</h1>
      {fetchError && alert('Error fetching currencies, please refresh the page and try again')}
      <CurrencyInput currencySymbols={currencySymbols} />
    </div>
  );
}

export default App;


