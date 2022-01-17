import axios from "axios";

const updatePassword = ({
  currentPassword: current_password,
  password,
  passwordConfirmation: password_confirmation,
}) =>
  axios.put("my/password/update", {
    user: { current_password, password, password_confirmation },
  });

const registrationsApi = {
  updatePassword,
};

export default registrationsApi;
