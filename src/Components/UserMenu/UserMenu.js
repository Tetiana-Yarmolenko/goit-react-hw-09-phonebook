import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './UserMenu.module.css';
import { authSelectors, authOperations } from '../../Redux/Auth';

const UserMenu = ({ name, onLogout }) => (
  <div className={s.container}>
    <span  className={s.name}> Welcome, <span  className={s.userName}> {name}</span></span>
    <Button variant="outline-danger"  onClick={onLogout}> Logout</Button>{' '}
    </div>
)

  
const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
})


const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

// export default UserMenu;