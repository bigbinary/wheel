import axios from "axios";

export const contact = payload => axios.post("api/v1/contacts", payload);
