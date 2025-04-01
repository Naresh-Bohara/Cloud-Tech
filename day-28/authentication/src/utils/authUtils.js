// /src/utils/authUtils.js
import axios from 'axios';

// Function to get CSRF token from the backend
export const getCsrfToken = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/v1/csrf-token', {
      withCredentials: true, // Ensure cookies are sent
    });
    return response.data.csrfToken;
  } catch (error) {
    console.error('Error fetching CSRF token:', error);
    return null;
  }
};

// Function to make POST requests with CSRF protection
export const postWithCsrf = async (url, data) => {
  const csrfToken = await getCsrfToken();
  if (!csrfToken) {
    console.error('CSRF token is missing!');
    return;
  }
  try {
    const response = await axios.post(
      url,
      data,
      {
        headers: {
          'CSRF-Token': csrfToken, // Add CSRF token to headers
        },
        withCredentials: true, // Ensure cookies are sent
      }
    );
    return response.data;
  } catch (error) {
    console.error('Request failed:', error);
    throw error;
  }
};
