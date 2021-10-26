
import './App.css';
import React, { useEffect, useState } from "react";
import MapContainer from './components/Map/Map.jsx'
const axios = require('axios');


function App() {

  const [data, setData] = useState();
  console.log(data);

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
     <MapContainer/>
    </div>
  );
}

export default App;
