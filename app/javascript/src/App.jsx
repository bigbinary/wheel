import React from "react";

import Main from "./components/Main";

require("moment");

import { AuthProvider } from "contexts/auth";
import { UserProvider } from "contexts/user";

const App = props => {
  return (
    <AuthProvider>
      <UserProvider>
        <Main {...props} />
      </UserProvider>
    </AuthProvider>
  );
};

export default App;
