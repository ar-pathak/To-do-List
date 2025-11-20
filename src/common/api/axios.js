import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_API_BASE_URL}/api`,
  withCredentials: true, // so cookies travel for refresh token
  timeout: 10000,        // global timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
