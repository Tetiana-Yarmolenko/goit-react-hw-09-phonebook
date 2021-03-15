import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../Redux/Auth';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import s from './LoginView.module.css';

function LoginView() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleChangeEmail = ({ target }) => {
    setEmail(target.value);
  }

  const handleChangePassword = ({ target }) => {
    setPassword(target.value);
  }
 
  // const handleChange = ({ target }) => {
  //   const { name, value } = target;

  //   switch(name){
  //     case 'email':
  //       setEmail(value);
  //       break;
      
  //     case 'password':
  //       setPassword(value);
  //       break;
      
  //     default:
  //       return;
  //   }

  //   setPassword(target.value);
  // }


  const handleFormSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));;
    setEmail('');
    setPassword('');
  }

    return (
      <div className={s.container}>
        <h2  className={s.title}>Страница логина</h2>
        <form
          className={s.form}
          autoComplete="off"
          onSubmit={handleFormSubmit}
        >
          <label className={s.formLabel}>
            Почта
            <input
              className={s.input}
              type="email"
              name="email"
              value={email}
              onChange={handleChangeEmail}
            />
          </label>

          <label className={s.formLabel}>
            Пароль
            <input
              className={s.input}
              type="password"
              name="password"
              value={password}
              onChange={handleChangePassword}
            />
          </label>
          <Button className={s.formButton } as="input" type="submit" value="Войти" />{' '}
           {/* <Button type="submit" variant="primary">Войти</Button> */}
        </form>
      </div>
    );
  }

export default LoginView;

