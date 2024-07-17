import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/auth/login.page";

export const Router = () => {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
    </Routes>
  );
};
