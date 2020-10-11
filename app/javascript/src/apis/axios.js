import axios from "axios";
import { Toastr } from "common";

axios.defaults.baseURL = "/";
axios.defaults.headers = {
  Accept: "applicaion/json",
  "Content-Type": "application/json",
  "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
};

const handleRequest = config => {
  const token = JSON.parse(localStorage.getItem("authToken"));
  const email = JSON.parse(localStorage.getItem("authEmail"));
  if (token && email) {
    config.headers["X-Auth-Email"] = email;
    config.headers["X-Auth-Token"] = token;
  }
  return config;
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

const handleErrorResponse = (error, authDispatch) => {
  if (error.response?.status === 401) {
    authDispatch({ type: "LOGOUT" });
    Toastr.error(error.response?.data?.error);
  } else {
    Toastr.error(error.response?.data?.message || error.message);
  }
  return Promise.reject(error);
};

export const registerIntercepts = authDispatch => {
  axios.interceptors.request.use(handleRequest);
  axios.interceptors.response.use(handleSuccessResponse, error =>
    handleErrorResponse(error, authDispatch)
  );
};
