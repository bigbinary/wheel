import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

import { AuthProvider } from "contexts/auth-context";
import { UserProvider } from "contexts/user-context";

const index = props => {
  return (
    <Router>
      <AuthProvider>
        <UserProvider>
          <App {...props} />
        </UserProvider>
      </AuthProvider>
    </Router>
  );
};

export default index;
