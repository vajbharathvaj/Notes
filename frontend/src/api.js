import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

// the env variable should start with vite in this application
const apiUrl="https://7859b438-d317-41b8-b167-8bb87f4e118a-dev.e1-us-cdp-2.choreoapis.dev/notes/backend-service/v1"
const api=axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
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
