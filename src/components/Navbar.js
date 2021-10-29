import React from 'react';

import AuthNav from './authentication/Auth-nav';
import Profile from './authentication/Profile';

const NavBar = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo" />
          <AuthNav />
          <Profile />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;