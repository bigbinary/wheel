import http from "./axios";

export const signup = payload => http.post("api/v1/users", payload);
