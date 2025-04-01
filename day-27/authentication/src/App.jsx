import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as jwt_decode from 'jwt-decode';

import { loginSuccess } from './redux/authSlice';
import LoginPage from './pages/Login';
import ProfilePage from './pages/Profile';
import AdminPage from './pages/Admin';
import PrivateRoute from './components/ProtectedRoutes';

const App = () => {
  const dispatch = useDispatch();

  const token = localStorage.getItem('token');
  if (token) {
    // Decode token and dispatch login
    const decoded = jwt_decode(token);
    dispatch(loginSuccess({ token, user: decoded, role: decoded.role }));
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<PrivateRoute component={ProfilePage} />} />
        <Route path="/admin" element={<PrivateRoute component={AdminPage} />} />
      </Routes>
    </Router>
  );
};

export default App;
