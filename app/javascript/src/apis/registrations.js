import axios from "axios";

const updatePassword = ({
  currentPassword: current_password,
  password,
  passwordConfirmation: password_confirmation,
}) =>
  axios.put("my/password/update", {
    user: { current_password, password, password_confirmation },
  });

const updateProfile = ({
  email,
  firstName: first_name,
  lastName: last_name,
  password: current_password,
}) =>
  axios.put("/my/profile/update", {
    user: { email, first_name, last_name, current_password },
  });

const registrationsApi = {
  updatePassword,
  updateProfile,
};

export default registrationsApi;
