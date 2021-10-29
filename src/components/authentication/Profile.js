import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetails from "../User-details";
const axios = require('axios');

const Profile = (props) => {

  //const [userDetails, setUserDetails] = useState();
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
        props.setUserDetails(response.data )
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
      < UserDetails userDetails={props.userDetails} allTaps={props.allTaps} setAllTaps={props.setAllTaps} clickedTap={props.clickedTap} setClickedTap={props.setClickedTap}/>
      </>
    )
  );
};

export default Profile;