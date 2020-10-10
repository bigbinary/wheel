import React from "react";

import App from "./App";

import { AuthProvider } from "contexts/auth-context";
import { UserProvider } from "contexts/user-context";

const index = props => {
  return (
    <AuthProvider>
      <UserProvider>
        <App {...props} />
      </UserProvider>
    </AuthProvider>
  );
};

export default index;
