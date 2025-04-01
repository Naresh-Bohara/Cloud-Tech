import { createContext, useState, useEffect } from "react";
import api from "../api/axios";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch CSRF token on initial load
  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const { data } = await api.get("/csrf-token");
        localStorage.setItem("csrf-token", data.csrfToken);
      } catch (err) {
        console.error("Failed to fetch CSRF token:", err);
      }
    };
    fetchCsrfToken();
  }, []);

  // Decode user from JWT
  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setUser(decoded);
    }
    setLoading(false);
  }, [token]);

  const login = async (email, password) => {
    try {
      const { data } = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", data.token);
      setToken(data.token);
      return { success: true };
    } catch (err) {
      return { success: false, error: err.response?.data?.message || "Login failed" };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  const register = async (name, email, password, role) => {
    try {
      const { data } = await api.post("/auth/register", { name, email, password, role });
      return { success: true, data };
    } catch (err) {
      return { success: false, error: err.response?.data?.message || "Registration failed" };
    }
  };

  return (
    <AuthContext.Provider value={{ token, user, loading, login, logout, register }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};