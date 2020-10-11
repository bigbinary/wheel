import React from "react";

import Main from "./components/Main";

import { AuthProvider } from "contexts/auth";
import { UserProvider } from "contexts/user";

const index = props => {
  return (
    <AuthProvider>
      <UserProvider>
        <Main {...props} />
      </UserProvider>
    </AuthProvider>
  );
};

export default index;
