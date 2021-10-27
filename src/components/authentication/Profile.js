import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const axios = require('axios');

const Profile = () => {

  const [userDetails, setUserDetails] = useState();
  const [rendered, setRendered] = useState(false);

  const { user, isAuthenticated, isLoading } = useAuth0();

 
  /*
  useEffect (() => {  
        try {
          const get_business_user_url = "/business_user?id=" + String(user.sub);
          console.log(get_business_user_url)
          axios.get(get_business_user_url)
          .then((response) =>  {
            setUserDetails(response.data)
            console.log(userDetails)
          });
        } catch (error) {
          console.log(error);
        }
  }, []);

  */


 
  if (isLoading) {
      return <div>Loading ...</div>;
    }

  if ( isAuthenticated && !rendered ){
    try {
      const get_business_user_url = "/business_user?id=" + String(user.sub);
      console.log(get_business_user_url)
      axios.get(get_business_user_url)
      .then((response) =>  {
        setUserDetails(response.data )
        setRendered(true)
      })
      .then( () => console.log(userDetails));
    } catch (error) {
      console.log(error);
    }
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
    isAuthenticated
    ? <p> {user.email} </p>
    : <p> Not authenticated </p>
  );
};

export default Profile;