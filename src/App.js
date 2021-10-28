import './App.css';
import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Map from './components/Map/Map.jsx'
//import { Route, Switch } from "react-router-dom";
import Auth0ProviderWithHistory from './components/authentication/Auth0Provider';
//import NavBar from './components/Navbar';
import logo from "./img/mymizu logo long.png";
//import AuthNav from './components/authentication/Auth-nav';
import AuthenticationButton from './components/authentication/Authentication-button'
import Profile from './components/authentication/Profile';
const axios = require('axios');

function App() {

  // for authorization
  const { user, isAuthenticated, isLoading } = useAuth0();


  // states for user details
  const [userDetails, setUserDetails] = useState();

  const [allTaps, setAllTaps] = useState([]);
  const [clickedTap, setClickedTap] = useState(null);
  //const [clickedTapSt, setClickedTap] = useState();

  //const [tapDetails, setTapDetails] = useState([]);
  


  // App render
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated);

  
  console.log(allTaps)
  


// const loggedIn = true;

  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="mymizu logo" />
      </header>
      <Auth0ProviderWithHistory>
          <div className="login-block">
            <AuthenticationButton  setIsLoggedIn= {setIsLoggedIn}/>
          </div>
      {!isLoggedIn ? 
      <div className="login-block" />
      :
      <div className="logged-in">
        < Profile setUserDetails={setUserDetails} userDetails={userDetails} allTaps={allTaps} setAllTaps={setAllTaps} clickedTap={clickedTap} setClickedTap={setClickedTap}/>
       
      </div>

      }
      </Auth0ProviderWithHistory>
    </div>
    
  );
}

export default App;