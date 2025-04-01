import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {user?.name} (Admin)</p>
    </div>
  );
};

export default AdminDashboard;