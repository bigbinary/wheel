import React, { useEffect, useState } from "react";

import { PageLoader } from "neetoui";
import PropTypes from "prop-types";
import * as R from "ramda";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { setAuthHeaders, registerIntercepts } from "apis/axios";
import { initializeLogger } from "common/logger";
import PrivateRoute from "components/Common/PrivateRoute";
import Hero from "components/Hero";
import {
  AUTH_ROUTES,
  PRIVATE_ROUTES,
  DASHBOARD_PATH,
  LOGIN_PATH,
} from "components/routeConstants";
import { useAuthState, useAuthDispatch } from "contexts/auth";
import { useUserDispatch, useUserState } from "contexts/user";

const Main = props => {
  const [loading, setLoading] = useState(true);
  const { authToken } = useAuthState();
  const { user: userContextState } = useUserState();
  const userDispatch = useUserDispatch();
  const authDispatch = useAuthDispatch();
  const currentUser = userContextState || props?.user;
  const isLoggedIn = !R.apply(
    R.or,
    R.map(R.either(R.isNil, R.isEmpty), [authToken, currentUser])
  );

  useEffect(() => {
    userDispatch({ type: "SET_USER", payload: { user: props?.user } });
    initializeLogger();
    registerIntercepts(authDispatch);
    setAuthHeaders(setLoading);
  }, [authDispatch, props?.user, userDispatch]);

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
        {AUTH_ROUTES.map(route => (
          <Route
            exact
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
        {!isLoggedIn && <Route exact path={DASHBOARD_PATH} component={Hero} />}
        {PRIVATE_ROUTES.map(route => (
          <PrivateRoute
            key={route.path}
            path={route.path}
            redirectRoute={LOGIN_PATH}
            condition={isLoggedIn}
            component={route.component}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

Main.propTypes = {
  user: PropTypes.object,
};

export default Main;
