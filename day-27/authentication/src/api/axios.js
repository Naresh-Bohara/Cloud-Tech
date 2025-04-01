// src/api.js
import axios from 'axios';
import Cookies from 'js-cookie';

// Axios instance for API requests
const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1/',
  withCredentials: true,
});

// Get CSRF token and set it in Axios headers
export const getCSRFToken = async () => {
  const response = await api.get('/csrf-token');
  const csrfToken = response.data.csrfToken;
  axios.defaults.headers['CSRF-Token'] = csrfToken;
  Cookies.set('csrf-token', csrfToken); // Store CSRF token in Cookies
};

// Make a POST request to login
export const loginRequest = async (data) => {
  const response = await api.post('/auth/login', data);
  return response.data;
};

// Get user profile using JWT
export const getProfile = async (token) => {
  const response = await api.get('/auth/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
