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
  console.log('[postWithCsrf] Initiating request to:', url);
  
  try {
    // 1. Get CSRF Token
    const csrfToken = await getCsrfToken();
    console.log('[postWithCsrf] CSRF Token:', csrfToken ? 'Received' : 'Missing');
    
    if (!csrfToken) {
      throw new Error('CSRF token is required');
    }

    // 2. Make the Request
    console.log('[postWithCsrf] Sending request with data:', data);
    const response = await axios.post(url, data, {
      headers: {
        'CSRF-Token': csrfToken,
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });

    // 3. Log and Return Response
    console.log('[postWithCsrf] Request successful:', {
      status: response.status,
      data: response.data
    });
    return response.data;

  } catch (error) {
    console.error('[postWithCsrf] Request failed:', {
      url,
      status: error.response?.status,
      data: error.response?.data,
      message: error.message
    });
    throw error;
  }
};
