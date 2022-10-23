import axios from "axios";

const BASE_URL =
  "https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC";

const API = axios.create({
  baseURL: BASE_URL,
});

export default API;
