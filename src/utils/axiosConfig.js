import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://youtubeclone-backend-api.onrender.com/api",
});
