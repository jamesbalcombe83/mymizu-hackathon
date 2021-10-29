import React from 'react';

import LoginButton from './Login-button';
import LogoutButton from './Logout-button';

import { useAuth0 } from '@auth0/auth0-react';

const AuthenticationButton = (props) => {
  const { isAuthenticated } = useAuth0();
  
  if(isAuthenticated){
    props.setIsLoggedIn(true)
  }

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;