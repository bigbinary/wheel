import axios from "axios";

const fetch = () => axios.get("api/v1/notes");

const create = payload => axios.post("api/v1/notes", payload);

const destroy = payload => axios.post("api/v1/notes/bulk_delete", payload);

export default {
  fetch,
  create,
  destroy,
};
