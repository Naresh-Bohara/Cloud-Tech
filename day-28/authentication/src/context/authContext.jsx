import { createContext, useState, useEffect, useContext } from "react";
import api from "../api/axios";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch CSRF token on initial load
  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const { data } = await api.get("/csrf-token");
        localStorage.setItem("csrf-token", data.csrfToken);
      } catch (err) {
        console.error("Failed to fetch CSRF token:", err);
        setError("Failed to initialize security token");
      }
    };
    fetchCsrfToken();
  }, []);

  // Decode user from JWT and validate token
  useEffect(() => {
    const validateToken = () => {
      if (token) {
        try {
          const decoded = jwtDecode(token);
          
          // Check if token is expired
          if (decoded.exp * 1000 < Date.now()) {
            logout();
            return;
          }
          
          setUser(decoded);
        } catch (err) {
          console.error("Invalid token:", err);
          logout();
        }
      }
      setLoading(false);
    };

    validateToken();
  }, [token]);

  const login = async (email, password) => {
    try {
      setError(null);
      const { data } = await api.post("/auth/login", { email, password });
      
      localStorage.setItem("token", data.token);
      setToken(data.token);
      
      return { success: true };
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Login failed";
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  const register = async (name, email, password) => {
    try {
      setError(null);
      const { data } = await api.post("/auth/register", { 
        name, 
        email, 
        password 
        // Role is now handled by backend
      });
      
      // Auto-login after registration
      if (data.token) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
      }
      
      return { success: true, data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Registration failed";
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  return (
    <AuthContext.Provider value={{ 
      token, 
      user, 
      loading, 
      error,
      login, 
      logout, 
      register,
      setError
    }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};