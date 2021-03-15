import React from 'react';
import { connect } from 'react-redux';
import s from "./AppBar.module.css";

import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuhtNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { authSelectors }  from '../../Redux/Auth';



const AppBar = ({ isAuthenticated }) => {
     return (
    <header className={s.header}>
         <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state)
})

export default connect(mapStateToProps)(AppBar);
