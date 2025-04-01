// src/components/ProfilePage.js
import React, { useEffect, useState } from 'react';
import { getProfile } from '../api/axios';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const { token } = useSelector((state) => state.auth);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      getProfile(token)
        .then((response) => setUser(response.data))
        .catch((err) => console.log(err));
    }
  }, [token]);

  return (
    <div>
      {user ? (
        <div>
          <h1>Profile</h1>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfilePage;
