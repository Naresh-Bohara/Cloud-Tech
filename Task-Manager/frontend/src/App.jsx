import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import AllTasksPage from './pages/AllTasksPage';
import HomePage from './pages/HomePage';
import ImportantTasksPage from './pages/ImportantTasksPage';
import CompletedTasksPage from './pages/CompletedTasksPage';
import PendingTasksPage from './pages/PendingTasksPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage'; 
import { authActions } from './store/authSlice';
import LoadingComponent from './components/LoadingComponent';
import TaskProgressPieChart from './pages/TaskProgressPieChart';

const RouteGuard = ({ children, isProtected = false }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    if (userId && token) {
      dispatch(authActions.login());
    }

    setLoading(false);
  }, [dispatch]);

  if (loading) return <LoadingComponent />;
  if (isProtected && !isLoggedIn) return <Navigate to="/" replace />;
  if (!isProtected && isLoggedIn) return <Navigate to="/tasks" replace />;
  
  return children;
};

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 h-screen p-2 relative">
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<RouteGuard><LandingPage /></RouteGuard>} />
        <Route path="/login" element={<RouteGuard><LoginPage /></RouteGuard>} />
        <Route path="/signup" element={<RouteGuard><SignupPage /></RouteGuard>} />

        {/* Protected routes */}
        <Route path="/tasks" element={<RouteGuard isProtected={true}><HomePage /></RouteGuard>}>
          <Route index element={<AllTasksPage />} />
          <Route path="important-tasks" element={<ImportantTasksPage />} />
          <Route path="completed-tasks" element={<CompletedTasksPage />} />
          <Route path="pending-tasks" element={<PendingTasksPage />} />
          <Route path="tasks-progress" element={<TaskProgressPieChart />} />
        </Route>

        {/* Catch-all route */}
        <Route path="*" element={<RouteGuard isProtected={true}><Navigate to="/tasks" replace /></RouteGuard>} />
      </Routes>
    </div>
  );
}

export default App;
