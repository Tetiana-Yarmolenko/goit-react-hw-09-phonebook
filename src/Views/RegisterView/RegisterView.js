import React, { useState } from 'react';
import { useDispatch  } from 'react-redux';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import s from './RegisterView.module.css';
import { authOperations } from '../../Redux/Auth';


function RegisterView() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
   const dispatch = useDispatch();

    const handleChangeName = ({ target }) => {
    setName(target.value);
  }

    const handleChangeEmail = ({ target }) => {
    setEmail(target.value);
  }

  const handleChangePassword = ({ target }) => {
    setPassword(target.value);
  }

   
  const handleFormSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.register({ name, email, password }))

    setName('');
    setEmail('');
    setPassword('');
  };

        
    return (
      <div className={s.container}>
        <h2 className={s.title}>Страница регистрации</h2>
        <form className={s.form} onSubmit={handleFormSubmit}>
          <label className={s.formLabel}>
             Имя
            <input
              type="text"
              name="name"
              onChange={handleChangeName}
              value={name}
              className={s.input}
            />
          </label>
          <label className={s.formLabel}>
            Почта
            <input
              type="email"
              name="email"
              onChange={handleChangeEmail}
              value={email}
              className={s.input}
            />
          </label>
          <label className={s.formLabel}>
            Пароль
            <input
              type="password"
              name="password"
              onChange={handleChangePassword}
              value={password}
              className={s.input}
            />
          </label>
          <Button type="submit" variant="primary">Зарегистрироваться</Button>
        </form>
      </div>
    );
  }

export default RegisterView;