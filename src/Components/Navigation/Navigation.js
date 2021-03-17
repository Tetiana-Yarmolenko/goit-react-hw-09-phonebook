import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import s from './Navigation.module.css';
import { authSelectors } from '../../Redux/Auth';


const Navigation = () => {
    const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
   
    return (
        <nav>
            <NavLink  to="/"  exact
                className={s.link}
                activeClassName={s.activeLink}>
                Home
        </NavLink>
            {isAuthenticated && (
                 <NavLink  to="/contacts" exact
                className={s.link}
                activeClassName={s.activeLink}>
                Phonebook
        </NavLink>
           )}
        </nav>
    )
}

export default Navigation;