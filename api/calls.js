import axios from "axios";

const API_ENDPOINT = "http://172.20.10.4:3000/api";

export async function fecthServiceRequests() {
  return axios.get(`${API_ENDPOINT}/sreq`);
}
