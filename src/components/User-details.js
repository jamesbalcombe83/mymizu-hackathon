import React from 'react';
import Tap from './Tap';
import Map from './Map/Map';
import UserStats from './UserStats.jsx';

const UserDetails = (props) => {

  const { id, business_name, username, email } =  props.userDetails.business_user[0];
  props.setAllTaps(props.userDetails.taps)

  return (
    <>
    <div className="user-profile"> 
        <h1>Hello, {username}</h1>
        <div className="user-details">
          <b>Business name: </b> {business_name} <br></br>
          <b> Business email:  </b> {email} 
        </div>
      <UserStats />
      <Tap allTaps={props.allTaps} setAllTaps={props.setAllTaps} clickedTap={props.clickedTap} setClickedTap={props.setClickedTap}/>
    </div>
    <div className="map-container">
        <Map setAllTaps={props.setAllTaps} allTaps={props.allTaps} clickedTap={props.clickedTap} zoom={12} center={{ lat: 35.6622084, lng: 139.7487909 }} />
    </div>
    </>      

  );
};
  
export default UserDetails;
