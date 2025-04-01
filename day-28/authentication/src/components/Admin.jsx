// /src/components/Admin.js
import React, { useState } from 'react';
import { postWithCsrf } from '../utils/authUtils';

const Admin = () => {
  const [adminData, setAdminData] = useState({ role: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postWithCsrf('http://localhost:5000/api/v1/admin/update', adminData);
      console.log('Admin updated:', response);
    } catch (error) {
      console.error('Failed to update admin:', error);
    }
  };

  return (
    <div>
      <h2>Admin</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Role</label>
          <input
            type="text"
            value={adminData.role}
            onChange={(e) => setAdminData({ ...adminData, role: e.target.value })}
            required
          />
        </div>
        <button type="submit">Update Role</button>
      </form>
    </div>
  );
};

export default Admin;
