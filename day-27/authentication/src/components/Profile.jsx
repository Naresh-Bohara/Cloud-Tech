import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios'; // API configuration
import { logout } from '../redux/authSlice'; // Redux action for logout

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const csrfToken = useSelector((state) => state.auth.csrfToken); 

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      // Redirect to login if there's no token
      navigate('/login');
      return;
    }

    // Fetch profile data using token and CSRF token from Redux
    const fetchProfileData = async () => {
      try {
        const response = await api.get('/api/v1/auth/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
            'CSRF-Token': csrfToken, // Include CSRF token in the header
          },
        });

        setProfileData(response.data.data); // Set profile data
      } catch (error) {
        console.error('Error fetching profile data:', error);
        navigate('/login'); // Redirect to login if error occurs
      }
    };

    fetchProfileData();
  }, [csrfToken, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    dispatch(logout()); // Reset Redux state
    navigate('/login'); // Redirect to login page
  };

  if (!profileData) {
    return <div>Loading profile...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <strong>Name:</strong> {profileData.name}
      </div>
      <div>
        <strong>Email:</strong> {profileData.email}
      </div>
      <div>
        <strong>Role:</strong> {profileData.role}
      </div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
