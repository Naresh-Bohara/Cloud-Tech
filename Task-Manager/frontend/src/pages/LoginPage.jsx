import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { authActions } from '../store/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const LoginPage = () => {
  const [data, setData] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [csrfToken, setCsrfToken] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    if (isLoggedIn === true) {
      navigate("/home");
    }

  // Fetch CSRF token when the component mounts
  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get('http://localhost:9005/api/v1/csrf-token', { withCredentials: true });
        setCsrfToken(response.data.csrfToken);
      } catch (error) {
        console.error('Error fetching CSRF token:', error);
      }
    };

    fetchCsrfToken();
  }, []);

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!data.username || !data.password) {
      setError('Both fields are required');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        'http://localhost:9005/api/v1/auth/login',
        data,
        {
          headers: { 'CSRF-Token': csrfToken },
          withCredentials: true,
        }
      );

      console.log(response)
      // Store the JWT token and id
      localStorage.setItem('id', response.data.id);
      localStorage.setItem('token', response.data.token);
      dispatch(authActions.login())

      // Redirect to the home page or wherever necessary after successful login
      alert("login successful.")
      navigate("/home");
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'An unexpected error occurred.';
      setError(errorMessage); // Display error message to user
      console.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 h-[98vh] flex items-center justify-center">
      <div className="p-6 w-2/6 rounded-lg bg-white shadow-lg">
        <div className="text-center font-semibold text-2xl mb-6 text-gray-800">Log In</div>
        <form className="space-y-4" onSubmit={submit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="w-full bg-gray-100 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={data.username}
              onChange={change}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full bg-gray-100 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={data.password}
              onChange={change}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
            disabled={loading}
          >
            {loading ? 'Logging In...' : 'Log In'}
          </button>
        </form>
        <div className="text-center mt-4 text-sm text-gray-600">
          Don't have an account? <Link to={"/signup"} className="text-blue-500 hover:underline">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
