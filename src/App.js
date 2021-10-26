import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import Map from './components/Map/Map'
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
     <Map/>
    </div>
  );
}

export default App;
