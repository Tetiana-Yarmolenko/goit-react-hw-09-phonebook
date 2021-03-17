import React from 'react';
import { useSelector } from 'react-redux';
import s from "./AppBar.module.css";

import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuhtNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { authSelectors }  from '../../Redux/Auth';

const AppBar = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
     return (
    <header className={s.header}>
         <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

export default AppBar;
