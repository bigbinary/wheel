const authReducer = (state, { type, payload }) => {
  switch (type) {
  case "LOGIN": {
    localStorage.setItem("authToken", JSON.stringify(payload.auth_token));
    localStorage.setItem("authEmail", JSON.stringify(payload.email));
    return {
      isLoggedIn: true,
      authToken: payload.auth_token,
      authEmail: payload.email
    };
  }
  case "LOGOUT": {
    localStorage.setItem("authToken", JSON.stringify(null));
    localStorage.setItem("authEmail", JSON.stringify(null));
    return { isLoggedIn: false, authToken: null, authEmail: null };
  }
  default: {
    throw new Error(`Unhandled action type: ${type}`);
  }
  }
};

export default authReducer;
