import React from 'react';
import { useSelector,  useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './UserMenu.module.css';
import { authSelectors, authOperations } from '../../Redux/Auth';

function UserMenu () {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const onLogout = () => dispatch(authOperations.logOut());

  return (
    <div className={s.container}>
    <span  className={s.name}> Welcome, <span  className={s.userName}> {name}</span></span>
    <Button variant="outline-danger"  onClick={() => onLogout()}> Logout</Button>{' '}
    </div>
 )
}

export default UserMenu;
