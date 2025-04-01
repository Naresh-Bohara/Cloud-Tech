import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Role: {user?.role}</p>
    </div>
  );
};

export default Profile;