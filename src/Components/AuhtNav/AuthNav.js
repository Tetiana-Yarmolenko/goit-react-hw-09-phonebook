import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css'

const AuthNav = () => {
    return (
        <div>
            <NavLink exact to='/register'
                className={s.link}
                activeClassName={s.activeLink}>
                Регистрация
        </NavLink>
            <NavLink exact to='/login'
                className={s.link}
                activeClassName={s.activeLink}>
                Логин
        </NavLink>
        </div>
    )
}

export default AuthNav;