import React from "react";
import PropTypes from "prop-types";

import userReducer from "reducers/user";

const UserStateContext = React.createContext();
const UserDispatchContext = React.createContext();
const initialState = { user: null };

const UserProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(userReducer, initialState);
  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

const useUserState = () => {
  const context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
};

const useUserDispatch = () => {
  const context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return context;
};

const useUser = () => {
  return [useUserState(), useUserDispatch()];
};

UserProvider.propTypes = {
  children: PropTypes.node,
};

export { UserProvider, useUserState, useUserDispatch, useUser };
