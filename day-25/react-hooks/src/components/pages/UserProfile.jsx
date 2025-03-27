import React from 'react';
import { useParams } from 'react-router-dom'; 

const UserProfile = () => {
  const { id } = useParams();

  return (
    <div className="page">
      <h1>User Profile</h1>
      <div className="card">
        <h2>User ID: {id}</h2> 
        <p>This is the profile page for user {id}.</p>
      </div>
    </div>
  );
};

export default UserProfile;
