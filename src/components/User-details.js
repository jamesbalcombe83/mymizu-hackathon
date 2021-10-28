import React from 'react';
import Tap from './Tap';

const UserDetails = (props) => {

  const { id, business_name, username, email } =  props.userDetails.business_user[0];
  

  console.log(props.userDetails.taps)

    return (
      <div className="user-profile"> 

          <h1>Hello, {username}</h1>
          <div className="user-details">
            <b>Business id: </b> {id} <br></br>
            <b>Business name: </b> {business_name} <br></br>
            <b> Business email:  </b> {email} 

          </div>
          <Tap taps={props.userDetails.taps}/>
        </div>      
    );
  };
  
  export default UserDetails;
