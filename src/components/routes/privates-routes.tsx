import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/dashboard/dashboard.page";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<Dashboard />} index />
    </Routes>
  );
};
