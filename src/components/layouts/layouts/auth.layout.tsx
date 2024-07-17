import { Outlet } from "react-router-dom";
import { AuthHeader } from "../headers/auth-header";
import { Text } from "../../ui/text/Text";

export const AuthLayout = () => {
  const year = new Date().getFullYear();
  return (
    <div className="relative w-screen h-screen bg-gradient-to-tr from-primary-500 to-primary-800 dark:from-primary-800 dark:to-primary-950">
      <AuthHeader />
      <div className="flex items-center justify-center h-full">
        <div className="bg-primary-400 dark:bg-primary-800 hidden lg:flex flex-col rounded-r-lg h-full w-1/2  items-center justify-center">
          <img
            src="/images/logo-bw-grey.png"
            alt="wb icon"
            className="w-64 2xl:w-96"
          />
          <div className="mt-8 text-center">
            <Text model="sm">
              World Binary © {year}. Todos los derechos reservados.
            </Text>
            <Text model="sm">Información general: info@worldbinary.pro</Text>
            <Text model="sm">Soporte técnico: support@worldbinary.pro</Text>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="w-fit mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
