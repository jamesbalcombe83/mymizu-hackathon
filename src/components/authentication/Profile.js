import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const axios = require('axios');

const Profile = () => {

  const [userDetails, setUserDetails] = useState();
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

 
  try {
    let get_business_user_url = "/business_user/:" + String(user.sub);
    axios.get(get_business_user_url)
    .then((response) => setUserDetails(response.data));
  } catch (error) {
    console.log(error);
  }


// <h2>{user.sub}</h2>
// <p>{user.email}</p>

  return (
    isAuthenticated && (
      <div>
        <p> {userDetails.business_user} </p>
        <p> {userDetails.tap} </p>
      </div>
    )
  );
};

export default Profile;