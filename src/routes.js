import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { SignIn } from "./containers/Auth/SignIn";
import { Dashboard } from "./containers/Dashboard/Dashboard";

const PrivateRoute = ({ children, ...rest }) => {
  const loggedIn = true;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedIn ? (
          children
        ) : (
          <Redirect to={{ pathname: "/signIn", state: { from: location } }} />
        )
      }
    />
  );
};

export const Routes = () => (
  <Switch>
    <Route exact path={"/signIn"}>
      <SignIn />
    </Route>
    <PrivateRoute exact path={"/dashboard"}>
      <Dashboard />
    </PrivateRoute>
  </Switch>
);
