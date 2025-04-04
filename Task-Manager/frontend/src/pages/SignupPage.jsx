import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

const SignupPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    if (isLoggedIn === true) {
      navigate("/home");
    }
  const [data, setData] = useState({ username: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [csrfToken, setCsrfToken] = useState('');

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

    if (!data.username || !data.email || !data.password) {
      alert('All fields are required');
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        'http://localhost:9005/api/v1/auth/signup',
        data,
        {
          headers: { 'CSRF-Token': csrfToken },
          withCredentials: true,
        }
      );

      console.log(response);
      alert('Signup Successful!');
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'An unexpected error occurred.'; // Handle error properly
      console.error(errorMessage);
      alert(errorMessage); // Display error message to user
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <div className="p-8 w-full max-w-md bg-white rounded-lg shadow-xl">
        <h2 className="text-center text-3xl font-extrabold text-gray-800 mb-6">Create an Account</h2>
        <form className="space-y-5" onSubmit={submit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              className="w-full bg-gray-100 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={data.username}
              onChange={change}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full bg-gray-100 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={data.email}
              onChange={change}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full bg-gray-100 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={data.password}
              onChange={change}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 ease-in-out"
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline font-medium">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
