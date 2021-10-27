import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const axios = require('axios');

const Profile = () => {

  const [userDetails, setUserDetails] = useState();
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading && !isAuthenticated ) {
    return null;
  } else {
    useEffect (() => { 
      try {
        const get_business_user_url = "/business_user?id=" + String(user.sub);
        console.log(get_business_user_url)
        axios.get(get_business_user_url)
        .then((response) => setUserDetails(response.data));
      } catch (error) {
        console.log(error);
      }
      console.log(userDetails)
    }, []);
  }

  //if (isLoading) {
  //  return <div>Loading ...</div>;
//}

  

  


// <h2>{user.sub}</h2>
// <p>{user.email}</p>
// <p> {userDetails.business_user} </p>
//<p> {userDetails.tap} </p>
// <p> {userDetails.business_user[0].business_name}</p>

  return (
    isAuthenticated && (
      <div>
        <p> {user.email} </p>
        
      </div>
    )
  );
};

export default Profile;