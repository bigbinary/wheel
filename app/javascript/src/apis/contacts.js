import http from "./axios";

export const contact = payload => http.post("api/v1/contacts", payload);
