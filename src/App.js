
import './App.css';
import React, { useEffect, useState } from "react";
import Map2 from './components/Map/Map2.jsx'
//import { Route, Switch } from "react-router-dom";
import Auth0ProviderWithHistory from './components/authentication/Auth0Provider';
import NavBar from './components/Navbar';
import logo from "./img/mymizu logo long.png";


const apiKey = process.env.REACT_APP_API_KEY;
const url = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`;

const axios = require('axios');

function App() {

  const [data, setData] = useState();
  console.log(data);

  

const loggedIn = true;

  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="mymizu logo" />
      </header>
      <Auth0ProviderWithHistory>
      {!loggedIn ? 
      <div className="login-block">
        <h1>Log In</h1>
        <NavBar />
        {/* add auth login window here */}
      </div>
      :
      <div className="logged-in">
        <div className="user-profile">
          {/* greeting */}
          <h1>Good afternoon, username</h1>
          <div className="user-details">
            Business name<br></br>
            other stuff
            {/* className="saved card" Your organisation has saved x bottles here card */}
            {/* className"tap-listings" clickable location marking */}
            {/* zooms map to the right to the location */}
            {/* className="stat-drawer" reveals the stats for the location */}
          </div>
          <div className="taps">
            Your taps
            <ul>
              <li>Tap 1</li>
              <li>Tap 2</li>
              <li>Tap 3</li>
              <li>Tap 4</li>
            </ul>
          </div>
        </div>
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
