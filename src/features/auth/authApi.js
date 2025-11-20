import api from "../../common/api/axios";

export const login = (data) => api.post("/auth/login", data);
export const logout = () => api.post("/auth/logout");
export const getUser = () => api.get("/auth/me");
