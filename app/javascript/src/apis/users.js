import axios from "axios";

export const signup = payload => axios.post("api/v1/users", payload);
