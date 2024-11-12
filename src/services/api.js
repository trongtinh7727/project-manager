import axios from 'axios';
import {API_URL} from '../utils/constants'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add authentication token if needed
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// api.interceptors.response.use(function (response) {
//   if (response && response.data) return response.data;
//   return response;
// }, function (error) {
//   if (error?.response?.data) return error?.response?.data;
//   return Promise.reject(error);
// });


export default api;
