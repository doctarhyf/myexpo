import axios from "axios";

const API_ENDPOINT = "https://konext.vercel.app/api"; //https://konext.vercel.app/api/sreq

export async function fecthServiceRequests() {
  return axios.get(`${API_ENDPOINT}/sreq`);
}
