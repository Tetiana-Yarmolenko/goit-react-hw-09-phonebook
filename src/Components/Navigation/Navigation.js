import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import s from './Navigation.module.css';
import { authSelectors } from '../../Redux/Auth';


const Navigation = ({isAuthenticated}) => {
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
const mapStateToProps = (state) => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state)
    
})

export default connect(mapStateToProps)(Navigation);