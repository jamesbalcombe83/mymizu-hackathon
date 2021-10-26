import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
const axios = require('axios');


function App() {

  const [data, setData] = useState();

    useEffect (() => {
      try {
        axios.get('/api')
        .then((response) => setData(response.data));
      } catch (error) {
        console.log(error);
      }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            {data}
        </p>
      </header>
    </div>
  );
}

export default App;
