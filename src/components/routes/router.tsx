import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../../context/auth/useAuth";
import { AppLayout } from "../layouts/layouts/app.layout";
import { AuthLayout } from "../layouts/layouts/auth.layout";
import { Login } from "../pages/auth/login.page";
import { Dashboard } from "../pages/dashboard/dashboard.page";
import { Records } from "../pages/records/records.page";
import { Sales } from "../pages/sales/sales.page";
import { RecoveryPasswordSend } from "../pages/auth/recovery-password-send";

export const Router = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Routes>
      {isAuthenticated ? (
        <>
          <Route element={<AppLayout />}>
            <Route element={<Dashboard />} index />
            <Route path="/sales" element={<Sales />} />
            <Route path="/records" element={<Records />} />
          </Route>
          <Route path="*" element={<Navigate to={"/"} />} />
        </>
      ) : (
        <>
          <Route path="/auth/*" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="recover-password" element={<RecoveryPasswordSend />} />
          </Route>
          <Route path="*" element={<Navigate to={"/auth/login"} />} />
        </>
      )}
    </Routes>
  );
};
