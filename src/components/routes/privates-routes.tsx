import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/dashboard/dashboard.page";
import { AppLayout } from "../layouts/layouts/app.layout";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route element={<Dashboard />} index />
      </Route>
    </Routes>
  );
};
