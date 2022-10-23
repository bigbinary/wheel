import axios from "axios";

const fetch = () => axios.get("api/v1/abbreviations");
const create = payload => axios.post("api/v1/abbreviations", payload);
const update = (id, payload) =>
  axios.put(`api/v1/abbreviations/${id}`, payload);
const destroy = id => axios.delete(`api/v1/abbreviations/${id}`);
const destroy_all = payload =>
  axios.post("api/v1/abbreviations/bulk_delete", payload);

const abbreviationsApi = {
  fetch,
  create,
  update,
  destroy,
  destroy_all,
};

export default abbreviationsApi;
