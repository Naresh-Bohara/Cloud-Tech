import axios from 'axios';
import {store} from '../redux/store';

const api = axios.create({
  baseURL: 'http://localhost:8080', // Backend API URL
  withCredentials: true, // Enable cookies to be sent with requests
});

// Add CSRF token to every request
api.interceptors.request.use((config) => {
  const csrfToken = store.getState().auth.csrfToken;
  if (csrfToken) {
    config.headers['CSRF-Token'] = csrfToken;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
