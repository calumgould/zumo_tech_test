import React, { useState, useEffect } from 'react';
import './styles/App.css';

const App = () => {

  const [data, setData] = useState({});
  const [fetchError, setFetchError] = useState(false);

  const fetchData = async () => {
    fetch('https://api.exchangeratesapi.io/latest')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(() => setFetchError(true));
  }

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    console.log('fetch data', data);
  }, [data])

  return (
    <div className="App">
      <header>
        <h1>Currency Converter</h1>
      </header>
      <body>

      </body>
      <footer>

      </footer>
    </div>
  );
}

export default App;
