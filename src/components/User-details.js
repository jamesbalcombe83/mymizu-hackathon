import React from 'react';
import Tap from './Tap';

const UserDetails = (props) => {

  const { id, business_name, username, email } =  props.userDetails.business_user[0];
  

  console.log(props.userDetails.taps)

    return (
      <div className="user-profile"> 

          {/* greeting */}
          <h1>Good afternoon, {username}</h1>
          <div className="user-details">
            <b>Business id: </b> {id} <br></br>
            <b>Business name: </b> {business_name} <br></br>
            <b> Business email:  </b> {email} 
            {/* className="saved card" Your organisation has saved x bottles here card */}
            {/* className"tap-listings" clickable location marking */}
            {/* zooms map to the right to the location */}
            {/* className="stat-drawer" reveals the stats for the location */}
          </div>
          <Tap taps={props.userDetails.taps}/>
        </div>      
    );
  };
  
  export default UserDetails;

  /*
  <h1> User details </h1>
  <p> User id: {id} </p>
  <p> Business name: {business_name} </p>
  <p> User name: {username} </p>
  <p> User email: {email} </p>
  <p> Tap id: {tap_id} </p>
*/