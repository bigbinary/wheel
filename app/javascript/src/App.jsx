import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

import Dashboard from "components/Dashboard";

import PrivateRoute from "components/Common/PrivateRoute";
import PasswordReset from "components/Users/Passwords/New";
import { Login, Signup } from "components/Authentication";

import { useAuthState } from "contexts/auth-context";
import { useUserDispatch } from "contexts/user-context";

const App = props => {
  const { authToken } = useAuthState();
  const userDispatch = useUserDispatch();

  useEffect(() => {
    userDispatch({ type: "SET_USER", payload: { user: props.user } });
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/users/password/new" component={PasswordReset} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute
          path="/"
          redirectRoute="/login"
          condition={!!authToken}
          component={Dashboard}
        />
      </Switch>
    </>
  );
};

App.propTypes = {
  user: PropTypes.object,
};

export default App;
