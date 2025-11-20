import axios from "axios";

const api = axios.create({
  baseURL: "https://your-backend.com/api/v1",
  withCredentials: true, // so cookies travel for refresh token
  timeout: 10000,        // global timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
