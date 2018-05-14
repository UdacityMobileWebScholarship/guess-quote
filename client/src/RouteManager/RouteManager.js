import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Quiz from "../pages/Quiz";
import HowToPlay from "../pages/HowToPlay";

/*
## import { Redirect } from 'react-router-dom' if you uncomment this

const isAuthenticated = true;

## For making a route be private - only accessible if user is authenticated
const PrivateRoute = ({ component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated ? (
            React.createElement(component, props)
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }}/>
        )
    )}/>
);

## The auth routes - only accessible if user is not authenticated
const AuthRoute = ({ component, ...rest }) => (
    <Route {...rest} render={props => (
        !isAuthenticated ? (
            React.createElement(component, props)
        ) : (
            <Redirect to={{
                pathname: '/',
                state: { from: props.location }
            }}/>
        )
    )}/>
);

## Usage: For private and auth routes
<PrivateRoute exact path="/" component={Home}/>
<AuthRoute path="/login" component={Login}/>
<AuthRoute path="/signup" component={Signup}/>

*/

const RouteManager = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quiz" component={Quiz} />
        <Route exact path="/how-to-play" component={HowToPlay} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default RouteManager;
