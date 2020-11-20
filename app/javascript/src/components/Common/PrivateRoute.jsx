import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { either, isEmpty, isNil } from "ramda";

import Hero from "components/Home/Hero";

const PrivateRoute = ({
  component: Component,
  condition,
  path,
  redirectRoute = null,
  ...props
}) => {
  if (condition) {
    return <Route path={path} component={Component} {...props} />;
  }

  if (either(isNil, isEmpty)(redirectRoute)) {
    return <Hero />;
  } else {
    return (
      <Redirect
        to={{
          pathname: redirectRoute,
          state: {
            from: props.location,
          }
        }}
      />
    );
  }
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  condition: PropTypes.bool,
  path: PropTypes.string,
  redirectRoute: PropTypes.string,
  location: PropTypes.object,
};

export default PrivateRoute;
