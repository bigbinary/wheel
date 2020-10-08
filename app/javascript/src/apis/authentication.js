import http from "./axios";

export const login = payload => http.post("api/v1/login", payload);

export const logout = () => http.delete("api/v1/logout");
