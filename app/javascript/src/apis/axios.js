import axios from "axios";

const http = axios.create({
  baseURL: "/",
  headers: {
    Accept: "applicaion/json",
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
  },
});

// Add a request interceptor
http.interceptors.request.use(
  config => {
    const token = JSON.parse(localStorage.getItem("authToken"));
    const email = JSON.parse(localStorage.getItem("authEmail"));
    if (token && email) {
      config.headers["X-Auth-Email"] = email;
      config.headers["X-Auth-Token"] = token;
    }
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
http.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.status === 200) {
      response.success = true;
    }
    return response;
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default http;
