import axios from "axios";


const useAxios = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}` // Include JWT token
    },
    withCredentials: true
  });


  // const fetchData = async () => {
  //   try {
  //     const response = await useAxios.get('/protected-route');
  //     const data = response.data;
  //     // Handle response data
  //   } catch (error) {
  //     console.error('Request failed:', error);
  //     // Handle request failure
  //   }
  // };

export default useAxios;



