import { resetAuthTokens, setAuthHeaders } from "apis/axios";
import { setToLocalStorage } from "utils/storage";

const authReducer = (_, { type, payload }) => {
  switch (type) {
    case "LOGIN": {
      setToLocalStorage("authToken", payload.auth_token);
      setToLocalStorage("authEmail", payload.email);
      setAuthHeaders();

      return {
        isLoggedIn: true,
        authToken: payload.auth_token,
        authEmail: payload.email,
      };
    }
    case "LOGOUT": {
      setToLocalStorage("authToken", null);
      setToLocalStorage("authEmail", null);
      resetAuthTokens();

      return { isLoggedIn: false, authToken: null, authEmail: null };
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};

export default authReducer;
