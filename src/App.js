import React, { useState, useEffect } from 'react';

import CurrencyInput from './components/CurrencyInput';
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

  useEffect(() => {
    console.log('results', results);
  }, [results])

  return (
    <div className="App">
      <h1>Currency Converter</h1>
      {fetchError && alert('Error fetching currencies, please refresh the page and try again')}
      <CurrencyInput currencySymbols={currencySymbols} setResults={setResults} />
      <CurrencyList results={results} />
    </div>
  );
}

export default App;


