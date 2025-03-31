import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCsrfToken } from './redux/authSlice';
import api from './api/api';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await api.get('/csrf-token');
        dispatch(setCsrfToken(response.data.csrfToken)); 
      } catch (error) {
        console.error('Error fetching CSRF token:', error);
      }
    };

    fetchCsrfToken();
  }, [dispatch]);

  return (
    <div className="App">
      <h1>This is HomePage</h1>
      <Login />
      <Register />
    </div>
  );
}

export default App;
