import axios from "axios";

const updatePassword = payload => axios.put("my/password/update", payload);

const registrationsApi = {
  updatePassword,
};

export default registrationsApi;
