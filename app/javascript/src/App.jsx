import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

import Home from "components/Home";
import Navbar from "components/Common/Navbar";
import Contact from "components/Contact";
import Profile from "components/Users/Profile";
import Features from "components/Features";
import PrivateRoute from "components/Common/PrivateRoute";
import PasswordEdit from "components/Users/Passwords/Edit";
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
      <Navbar />
      <Switch>
        <Route exact path="/users/password/new" component={PasswordReset} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/features" component={Features} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute
          exact
          path="/my/password/edit"
          redirectRoute="/login"
          condition={!!authToken}
          component={PasswordEdit}
        />
        <PrivateRoute
          exact
          path="/my/profile"
          redirectRoute="/login"
          condition={!!authToken}
          component={Profile}
        />
        <PrivateRoute
          exact
          path="/"
          redirectRoute="/login"
          condition={!!authToken}
          component={Home}
        />
      </Switch>
    </>
  );
};

App.propTypes = {
  user: PropTypes.object,
};

export default App;
