import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import api from '../api/api';
import { loginSuccess } from '../redux/authSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('api/v1/auth/login', { email, password });
      dispatch(loginSuccess(response.data.data.detail)); // Store user details in Redux
      alert('Login successful!');
    } catch (error) {
      console.error('Login error:', error);
      alert('Failed to login');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
