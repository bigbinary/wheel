import { setToLocalStorage } from "utils/storage";

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOGIN": {
      setToLocalStorage("authToken", payload.auth_token);
      setToLocalStorage("authEmail", payload.email);
      return {
        isLoggedIn: true,
        authToken: payload.auth_token,
        authEmail: payload.email,
      };
    }
    case "LOGOUT": {
      setToLocalStorage("authToken", null);
      setToLocalStorage("authEmail", null);
      return { isLoggedIn: false, authToken: null, authEmail: null };
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};

export default authReducer;
