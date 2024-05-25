import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import AdminLayout from "../components/layout";
import Dashboard from "../pages/Dashboard";
import TravelerManagement from "../pages/TravelerManagement";
import AgentManagement from "../pages/AgentManagement";
import AdminManagement from "../pages/AdminManagement";
import SubscriptionPlans from "../pages/SubscriptionPlans";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />

      {/* admin layout */}
      <Route path='/' element={<AdminLayout />}>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='traveler-management' element={<TravelerManagement />} />
        <Route path='agent-management' element={<AgentManagement />} />
        <Route path='admin-management' element={<AdminManagement />} />
        <Route path='subscription-plans' element={<SubscriptionPlans />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
