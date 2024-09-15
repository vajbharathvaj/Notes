import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

// the env variable should start with vite in this application
const apiUrl="/choreo-apis/notes/backend-service/v1"
const api=axios.create({
  baseURL: apiUrl,
})


// authorization should start with bearer and a space 
api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem(ACCESS_TOKEN);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  export default api;
