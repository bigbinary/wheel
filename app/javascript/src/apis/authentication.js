import axios from "axios";

export const login = payload => axios.post("api/v1/login", payload);

export const logout = () => axios.delete("api/v1/logout");
