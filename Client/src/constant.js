import axios from "axios";

export const baseURL = "http://localhost:4000/api";

export const instanceAxios = axios.create({
  baseUrl: "http://localhost:4000/api",
});
