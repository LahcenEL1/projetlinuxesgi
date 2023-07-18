import React from 'react';
import AuthenticationService from '../services/authentication-service';
import {Routes as ReactRoutes, Route} from "react-router";
import Login from '../pages/login/Login';

const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route {...rest} render={(props:any) => {
    const isAuthenticated = AuthenticationService.isAuthenticated;
    if (!isAuthenticated) {    
      return         <Route
      path="/login"
      element={<Login/>}
  />
    }

    return <Component {...props} />
  }} />
);

export default PrivateRoute;