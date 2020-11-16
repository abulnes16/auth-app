/* App router component 
  Component that holds the routes of the app
*/
import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Register from "../views/register/Register";
import Login from '../views/login/Login';
import Profile from '../views/profile/Profile';

const AppRouter = () => (
  <Switch>
    <Route path="/login" component={Login}/>
    <Route path="/profile" component={Profile}/>
    <Route path="/profile/:id"></Route>
    <Route path="/" component={Register} />
  </Switch>
);

export default AppRouter;
