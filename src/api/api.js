import axios from "axios";

  const API = `https://www.omdbapi.com`;

  export const api = axios.create({
    baseURL: API,
    headers: { "Content-Type": "application/json" },
  });