import { Route, Routes } from "react-router-dom";
import { useAuth } from "../../context/auth/useAuth";
import { PrivateRoutes } from "./privates-routes";
import { PublicRoutes } from "./public-routes";

export const Router = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Routes>
      {isAuthenticated ? (
        <Route path="/*" element={<PrivateRoutes />} />
      ) : (
        <Route path="/auth/*" element={<PublicRoutes />} />
      )}
    </Routes>
  );
};
