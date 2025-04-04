// services/auth.js
import axios from "axios";

const API_URL = "http://localhost:9005/api/v1";

export const signup = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, data);
    return response.data;  // Return the response data
  } catch (error) {
    throw error.response ? error.response.data : error.message;  // Handle errors appropriately
  }
};

export const login = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/login`, data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
