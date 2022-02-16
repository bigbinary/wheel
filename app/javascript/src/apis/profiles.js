import axios from "axios";

const updatePassword = ({
  currentPassword: current_password,
  password,
  passwordConfirmation: password_confirmation,
}) =>
  axios.patch("my/password", {
    user: { current_password, password, password_confirmation },
  });

const updateProfile = ({
  email,
  firstName: first_name,
  lastName: last_name,
  password: current_password,
}) =>
  axios.put("/my/profile", {
    user: { email, first_name, last_name, current_password },
  });

const updateEmail = ({ email, password: current_password }) =>
  axios.patch("/my/email", { user: { email, current_password } });

const profilesApi = {
  updatePassword,
  updateProfile,
  updateEmail,
};

export default profilesApi;
