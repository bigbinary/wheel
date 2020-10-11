import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { ToastContainer } from "react-toastify";

import Dashboard from "components/Dashboard";

import PrivateRoute from "components/Common/PrivateRoute";
import PasswordReset from "components/Authentication/ResetPassword";
import Login from "components/Authentication/Login";
import Signup from "components/Authentication/Signup";

import { AuthProvider, useAuthState } from "contexts/auth";
import { UserProvider, useUserDispatch } from "contexts/user";

const App = props => {
  const { authToken } = useAuthState();
  const userDispatch = useUserDispatch();

  useEffect(() => {
    userDispatch({ type: "SET_USER", payload: { user: props.user } });
  }, []);
  return (
    <AuthProvider>
      <UserProvider>
        <BrowserRouter>
          <ToastContainer />
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
        </BrowserRouter>
      </UserProvider>
    </AuthProvider>
  );
};

App.propTypes = {
  user: PropTypes.object,
};

export default App;
