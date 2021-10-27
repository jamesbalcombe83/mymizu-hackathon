import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetails from "../User-details";
const axios = require('axios');

const Profile = () => {

  const [userDetails, setUserDetails] = useState();
  const [isRendered, setIsRendered] = useState(false);

  const { user, isAuthenticated, isLoading } = useAuth0();


  if (isLoading) {
      return <div>Loading ...</div>;
    }

  if ( isAuthenticated && !isRendered ){
    try {
      const get_business_user_url = "/business_user?id=" + String(user.sub);
      axios.get(get_business_user_url)
      .then((response) =>  {
        setUserDetails(response.data )
      })
      .then( () => {
        setIsRendered(true)
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    isAuthenticated && isRendered && (
      <>
      < UserDetails userDetails={userDetails}/>
      </>
    )
  );
};

export default Profile;