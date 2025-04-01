// /src/components/Profile.js
import React, { useState, useEffect } from 'react';
import { postWithCsrf } from '../utils/authUtils';

const Profile = () => {
  const [profileData, setProfileData] = useState({ name: '', email: '' });

  useEffect(() => {
    // Fetch user profile data when component loads (this can be replaced with an actual API call)
    setProfileData({ name: 'John Doe', email: 'john@example.com' });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postWithCsrf('http://localhost:5000/api/v1/user/update', profileData);
      console.log('Profile updated:', response);
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={profileData.name}
            onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={profileData.email}
            onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
            required
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
