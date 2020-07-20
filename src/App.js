import React, { useState, useEffect } from 'react';

import CurrencyForm from './components/CurrencyForm';
import CurrencyList from './components/CurrencyList';

import './styles/App.css';

const App = () => {

  const [results, setResults] = useState([])
  const [currencySymbols, setCurrencySymbols] = useState([])
  const [fetchError, setFetchError] = useState(false);

  const fetchCurrencySymbols = async () => {
    fetch('https://api.exchangeratesapi.io/latest')
      .then(res => res.json())
      .then(data => setCurrencySymbols(Object.keys(data.rates)))
      .then(() => setCurrencySymbols(currencySymbols => [...currencySymbols, 'EUR'].sort()))
      .catch(() => setFetchError(true));
  }

  useEffect(() => {
    fetchCurrencySymbols();
  }, [])

  return (
    <div className="App">
      <h1>Currency Converter</h1>
      {fetchError && alert('Error fetching currencies, please refresh the page and try again')}
      <div className='currency-wrapper'>
        <CurrencyForm currencySymbols={currencySymbols} setResults={setResults} />
        <CurrencyList results={results} />
      </div>
    </div>
  );
}

export default App;


