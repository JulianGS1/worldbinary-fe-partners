import { createContext, useEffect, useState } from "react";
import { IAuthResponse } from "../../interfaces/auth/user.interface";

export interface AuthContextProps {
  user: IAuthResponse | null;
  login: (data: IAuthResponse) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authData, setAuthData] = useState<IAuthResponse | null>(null);
  const login = (data: IAuthResponse) => {
    setAuthData(data);
    localStorage.setItem("user-current", JSON.stringify(data));
  };
  const logout = () => {
    setAuthData(null);
    localStorage.removeItem("user-current");
  };

  const isAuthenticated = !!authData;

  useEffect(() => {
    const currentUser = localStorage.getItem("user-current");
    if (currentUser) {
      login(JSON.parse(currentUser));
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user: authData, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
