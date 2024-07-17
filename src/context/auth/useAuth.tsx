import { useContext } from "react";
import type { AuthContextProps } from "./auth.context";
import { AuthContext } from "./auth.context";

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
