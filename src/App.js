
import './App.css';
import React, { useEffect, useState } from "react";
import MapContainer from './components/Map/Map.jsx'
//import { Route, Switch } from "react-router-dom";
import Auth0ProviderWithHistory from './components/authentication/Auth0Provider';
import NavBar from './components/Navbar';

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
    
    <Auth0ProviderWithHistory>
    
    <div className="App">
     
    <NavBar />
    
      <header className="App-header">
        <p>
            {data}
        </p>
      </header>
    </div>
    <MapContainer/>
    </Auth0ProviderWithHistory>
    
  );
}

export default App;
