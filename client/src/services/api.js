import axios from "axios";

const api = axios.create({
  baseURL: "https://leetcode-analyzer-byadil.onrender.com/api",
});

export default api;
