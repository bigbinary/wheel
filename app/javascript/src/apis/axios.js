import axios from "axios";
import { Toastr } from "neetoui";

import {
  clearLocalStorageCredentials,
  getFromLocalStorage,
} from "utils/storage";

axios.defaults.baseURL = "/";

const setAuthHeaders = (setLoading = () => null) => {
  axios.defaults.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": document
      .querySelector('[name="csrf-token"]')
      .getAttribute("content"),
  };
  const token = getFromLocalStorage("authToken");
  const email = getFromLocalStorage("authEmail");
  if (token && email) {
    axios.defaults.headers["X-Auth-Email"] = email;
    axios.defaults.headers["X-Auth-Token"] = token;
  }
  setLoading(false);
};

const resetAuthTokens = () => {
  delete axios.defaults.headers["X-Auth-Email"];
  delete axios.defaults.headers["X-Auth-Token"];
};

const handleSuccessResponse = response => {
  if (response) {
    response.success = response.status === 200;
    if (response.data.notice) {
      Toastr.success(response.data.notice);
    }
  }

  return response;
};

const handleErrorResponse = error => {
  if (error.response?.status === 401) {
    Toastr.error(error.response?.data?.error);
    clearLocalStorageCredentials();
    setTimeout(() => (window.location.href = "/login"), 2000);
  } else {
    Toastr.error(error.response?.data?.error || error.message);
  }

  return Promise.reject(error);
};

const registerIntercepts = authDispatch => {
  axios.interceptors.response.use(handleSuccessResponse, error =>
    handleErrorResponse(error, authDispatch)
  );
};

export { setAuthHeaders, resetAuthTokens, registerIntercepts };
