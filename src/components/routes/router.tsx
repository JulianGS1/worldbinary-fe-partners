import { Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./public-routes";

export const Router = () => {
  return (
    <Routes>
      <Route path="/*" element={<PublicRoutes />} />
    </Routes>
  );
};
