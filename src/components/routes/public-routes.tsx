import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/auth/login.page";
import { AuthLayout } from "../layouts/layouts/auth.layout";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};
