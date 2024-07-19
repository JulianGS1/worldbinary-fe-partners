import { createContext, useEffect, useState } from "react";
import { IAuthResponse } from "../../interfaces/auth/user.interface";
import { LoaderPage } from "../../components/ui/loader-page/loader-page";

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
  const [isLoading, setIsLoading] = useState(true);
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
    setIsLoading(false);
  }, []);
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user: authData, login, logout }}
    >
      {isLoading ? <LoaderPage /> : children}
    </AuthContext.Provider>
  );
};
