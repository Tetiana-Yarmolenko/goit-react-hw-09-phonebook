import React, { Component, Suspense, lazy } from 'react';

import { Switch} from 'react-router-dom';
import { connect } from 'react-redux';
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

class App extends Component  {
   componentDidMount() {
    this.props.onGetCurrentUser();
   }
  
  render() {
    return (
      <Container>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Switch>
            <PublicRoute
              exact path="/"
              component={HomeView} />
            <PublicRoute
             path="/register"
           restricted
            redirectTo="/contacts"
            component={RegisterView} />
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/contacts"
            component={LoginView} />
          <PrivateRoute path="/contacts"
            redirectTo="/login"
            component={PhonebookView} />
        </Switch>
      </Suspense>
      </Container>
    )
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};


export default connect(null, mapDispatchToProps)(App);