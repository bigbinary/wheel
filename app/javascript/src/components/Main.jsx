import React, { useEffect, useState } from "react";

import { PageLoader } from "neetoui";
import PropTypes from "prop-types";
import { either, isEmpty, isNil } from "ramda";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { setAuthHeaders, registerIntercepts } from "apis/axios";
import { initializeLogger } from "common/logger";
import Login from "components/Authentication/Login";
import PasswordReset from "components/Authentication/ResetPassword";
import Signup from "components/Authentication/Signup";
import PrivateRoute from "components/Common/PrivateRoute";
import Dashboard from "components/Dashboard";
import Hero from "components/Home/Hero";
import { useAuthState, useAuthDispatch } from "contexts/auth";
import { useUserDispatch } from "contexts/user";

const Main = props => {
  const [loading, setLoading] = useState(true);
  const { authToken } = useAuthState();
  const userDispatch = useUserDispatch();
  const authDispatch = useAuthDispatch();
  const isLoggedIn = !either(isNil, isEmpty)(authToken);

  useEffect(() => {
    userDispatch({ type: "SET_USER", payload: { user: props.user } });
    initializeLogger();
    registerIntercepts(authDispatch);
    setAuthHeaders(setLoading);
  }, []);

  if (loading) {
    return (
      <div className="h-screen">
        <PageLoader />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <ToastContainer />
      <Switch>
        <Route exact path="/my/password/new" component={PasswordReset} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        {!isLoggedIn && <Route exact path="/" component={Hero} />}
        <PrivateRoute
          path="/"
          redirectRoute="/login"
          condition={isLoggedIn}
          component={Dashboard}
        />
      </Switch>
    </BrowserRouter>
  );
};

Main.propTypes = {
  user: PropTypes.object
};

export default Main;
