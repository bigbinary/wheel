import React from "react";

import { Toastr } from "neetoui";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  condition,
  path,
  redirectRoute,
  ...props
}) => {
  if (!condition) {
    Toastr.error("Session has expired. Please login once again.");
    return (
      <Redirect
        to={{
          pathname: redirectRoute,
          from: props.location,
        }}
      />
    );
  }

  return <Route component={Component} path={path} {...props} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  condition: PropTypes.bool,
  location: PropTypes.object,
  path: PropTypes.string,
  redirectRoute: PropTypes.string,
};

export default PrivateRoute;
