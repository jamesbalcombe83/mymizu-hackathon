
import './App.css';
import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Map2 from './components/Map/Map2.jsx'
//import { Route, Switch } from "react-router-dom";
import Auth0ProviderWithHistory from './components/authentication/Auth0Provider';
//import NavBar from './components/Navbar';
import logo from "./img/mymizu logo long.png";
//import AuthNav from './components/authentication/Auth-nav';
import AuthenticationButton from './components/authentication/Authentication-button'
import Profile from './components/authentication/Profile';



const apiKey = process.env.REACT_APP_API_KEY;
const url = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`;

//const axios = require('axios');

function App() {

  //const [data, setData] = useState();
  //console.log(data);

  const { isAuthenticated } = useAuth0();

  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated);

// const loggedIn = true;

  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="mymizu logo" />
      </header>
      <Auth0ProviderWithHistory>
      {!isLoggedIn ? 
      <div className="login-block">
        <AuthenticationButton  setIsLoggedIn= {setIsLoggedIn}/>
        {/* add auth login window here */}
      </div>
      :
      <div className="logged-in">
        <AuthenticationButton  setIsLoggedIn= {setIsLoggedIn}/>
        < Profile />
        <div className="map-container">
        <Map2></Map2>
        </div>
      </div>
      }
      </Auth0ProviderWithHistory>
    </div>
    
  );
}

export default App;