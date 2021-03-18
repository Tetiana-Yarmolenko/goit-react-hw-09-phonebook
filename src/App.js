import React, { useEffect, Suspense, lazy } from 'react';

import { Switch} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

import Container from './Components/Container/Container';
import AppBar from './Components/AppBar/AppBar';
import Loader from './Components/Loader/Loader'
import { authOperations } from "./Redux/Auth";
import './App.css';

const HomeView = lazy(() => import('./Views/HomeView/HomeView'));
const PhonebookView = lazy(() => import('./Views/PhonebookView/PhonebookView'));
const LoginView = lazy(() => import('./Views/LoginViews/LoginView'));
const RegisterView = lazy(() => import('./Views/RegisterView/RegisterView'));

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(authOperations.getCurrentUser())
  }, [dispatch])

    return (
      <Container>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Switch>
            <PublicRoute
              exact path="/">
            <HomeView />
              </PublicRoute>
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/contacts">
            <LoginView/>
            </PublicRoute>
             <PublicRoute
             path="/register"
              restricted
              redirectTo="/contacts">
              <RegisterView/>
             </PublicRoute>
              <PrivateRoute
              path="/contacts"
              redirectTo="/login">
              <PhonebookView />
            </PrivateRoute>
        </Switch>
      </Suspense>
      </Container>
    )
}

export default App;