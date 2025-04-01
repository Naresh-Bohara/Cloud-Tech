// src/components/AdminPage.js
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const AdminPage = () => {
  const { token, role } = useSelector((state) => state.auth);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    if (role === 'admin' && token) {
      // Fetch admin data if user is admin
      fetch('http://localhost:8080/api/v1/auth/admin', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setAdmins(data.data))
        .catch((err) => console.log(err));
    }
  }, [role, token]);

  if (role !== 'admin') {
    return <p>You are not authorized to view this page.</p>;
  }

  return (
    <div>
      <h1>Admin Page</h1>
      <h2>Admins:</h2>
      <ul>
        {admins.map((admin) => (
          <li key={admin._id}>{admin.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
