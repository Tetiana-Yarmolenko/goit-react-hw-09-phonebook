import React from 'react';
import { CSSTransition } from "react-transition-group";
import s from './HomeView.module.css';
import titleTransition from "../../Components/Transition/titleHome.module.css";

const HomeView = () =>(
  <div className={s.container}>
     <CSSTransition
          in
          timeout={500}
          classNames={titleTransition}
          appear
          unmountOnExit
        >
        <h1 className={s.title}>
      Приветственная страница нашего сервиса
      <img src='https://img5.goodfon.ru/original/1366x768/7/fe/m-nnnn-bbbbb-vvvvvv-ccccc-xxxx.jpg'
        alt='welcome'
      width='450'/>
      </h1>
      </CSSTransition>
    </div>
)

export default HomeView;