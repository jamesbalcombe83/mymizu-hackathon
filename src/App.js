
import './App.css';
import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Map2 from './components/Map/Map2.jsx'
//import { Route, Switch } from "react-router-dom";
import Auth0ProviderWithHistory from './components/authentication/Auth0Provider';
//import NavBar from './components/Navbar';
import logo from "./img/mymizu logo long.png";
//import AuthNav from './components/authentication/Auth-nav';
import AuthenticationButton from './components/authentication/Authentication-button'
import Profile from './components/authentication/Profile';
const axios = require('axios');

function App() {

  // this request will retrieve details of a tap
  //to retreive a different tap, replace the number with the relevant tap.
  useEffect( () => {
    try {
      axios.get('/taps/178334', { headers: {Authorization: `Bearer ${process.env.MYMIZU_API_KEY}` } } )
      .then((response) =>  {
        console.log(response.data )
    })

  } catch (error) {
    console.log(error);
  }
  }, [])

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
        <Map2
              isMarkerShown
              googleMapURL={url}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div className="map" style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%`, borderradius: "15px" }} />}
            />
        </div>
      </div>
      }
      </Auth0ProviderWithHistory>
    </div>
    
  );
}

export default App;