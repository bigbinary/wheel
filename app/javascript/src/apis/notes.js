import axios from "axios";

const fetch = () => axios.get("api/v1/notes");

const create = payload => axios.post("api/v1/notes", payload);

const destroy = payload => axios.post("api/v1/notes/bulk_delete", payload);

const notesApi = {
  fetch,
  create,
  destroy,
};

export default notesApi;
