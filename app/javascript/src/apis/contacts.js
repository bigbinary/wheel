import axios from "axios";

const fetch = () => axios.get("api/v1/contacts");

const create = payload => axios.post("api/v1/contacts", payload);

const destroy = id => axios.delete(`api/v1/contacts/${id}`);

export default {
  fetch,
  create,
  destroy,
};
