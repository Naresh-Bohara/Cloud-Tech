import React, { useState } from 'react';
import { postWithCsrf } from '../utils/authUtils';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    console.log('[Login] Form submitted');

    try {
      // 1. Make the request
      const response = await postWithCsrf(
        'http://localhost:8080/api/v1/auth/login', 
        { email, password }
      );

      // 2. Handle response (supports both response structures)
      const token = response.token || response.data?.token;
      const userData = response.detail || response.data?.detail;

      if (!token) {
        throw new Error('Authentication token not received');
      }

      console.log('[Login] Received token:', token);
      console.log('[Login] User data:', userData);

      // 3. Store token and navigate
      localStorage.setItem('jwtToken', token);
      console.log('[Login] Token stored successfully');
      navigate('/dashboard');

    } catch (error) {
      const errorMessage = error.response?.data?.message || 
                         error.message || 
                         'Login failed. Please try again.';
      console.error('[Login] Error:', errorMessage);
      setError(errorMessage);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;