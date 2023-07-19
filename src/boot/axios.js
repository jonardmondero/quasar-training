import { boot } from "quasar/wrappers";
import axios from "axios";
import { SessionStorage } from "quasar";

const api = axios.create({ baseURL: "http://localhost:8000/api/" });

// const api = axios.create({ baseURL: 'https://i-student.onrender.com/'}); //for online

api.interceptors.request.use((config) => {
  const token = SessionStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { axios, api };
