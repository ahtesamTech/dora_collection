import axios from "axios";


const useAxios = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {'X-Custom-Header': 'foobar'},
    withCredentials: true
  });

export default useAxios;