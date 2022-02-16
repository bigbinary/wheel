import axios from "axios";

const login = payload => axios.post("api/v1/login", { user: payload });

const logout = () => axios.delete("api/v1/logout");

const signup = ({
  email,
  firstName: first_name,
  lastName: last_name,
  password,
  passwordConfirmation: password_confirmation,
}) =>
  axios.post("api/v1/users", {
    user: {
      email,
      first_name,
      last_name,
      password,
      password_confirmation,
    },
  });

const authenticationApi = {
  login,
  logout,
  signup,
};

export default authenticationApi;
