import clsx from "clsx";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useDarkMode } from "../../hooks/useDarkMode";
import { AppHeader } from "../headers/app-header";
import { SidebarDesktop } from "./components/sidebar-desktop";
import { SidebarMobile } from "./components/sidebar-mobile";

export const AppLayout = () => {
  const { theme } = useDarkMode();
  const [sidebar, setSidebar] = useState<boolean>(false);
  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };
  return (
    <div className={clsx("relative", theme == "dark" && "text-white")}>
      <SidebarMobile sidebar={sidebar} toggleSidebar={toggleSidebar} />
      <div className="h-screen w-screen flex flex-col md:block bg-gray-200 dark:bg-gradient-to-br dark:from-primary-900 dark:to-primary-950">
        <AppHeader toggleSidebar={toggleSidebar} />
        <div className="flex w-full h-full">
          <SidebarDesktop />
          <main className="md:ml-64 w-full">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};
