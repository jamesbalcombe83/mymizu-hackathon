import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
//import { Route, Switch } from "react-router-dom";
import Auth0ProviderWithHistory from './components/authentication/Auth0Provider';
import NavBar from './components/Navbar';

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
    
    <Auth0ProviderWithHistory>
    
    <div className="App">
    <NavBar />
    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            {data}
        </p>
      </header>
    </div>
    </Auth0ProviderWithHistory>
  );
}

export default App;
