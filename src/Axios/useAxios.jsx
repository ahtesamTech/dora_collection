import axios from "axios";

const useAxios = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

// Add request interceptor to dynamically set Authorization header
useAxios.interceptors.request.use(
  (config) => {
    // console.log(config);
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
});

export default useAxios;
