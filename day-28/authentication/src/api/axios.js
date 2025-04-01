import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  withCredentials: true, // For sending cookies (JWT & CSRF)
});

// Request interceptor to attach CSRF token
api.interceptors.request.use((config) => {
  const csrfToken = localStorage.getItem("csrf-token");
  if (csrfToken) {
    config.headers["CSRF-Token"] = csrfToken;
  }
  return config;
});

// Response interceptor to handle token refresh (if needed)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    // If 401 (Unauthorized), try refreshing token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { data } = await api.post("/auth/refresh-token");
        localStorage.setItem("token", data.token);
        return api(originalRequest);
      } catch (refreshError) {
        // Logout if refresh fails
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default api;