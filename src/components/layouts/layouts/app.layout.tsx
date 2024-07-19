import clsx from "clsx";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AppHeader } from "../headers/app-header";
import { SidebarDesktop } from "./components/sidebar-desktop";
import { SidebarMobile } from "./components/sidebar-mobile";

export const AppLayout = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };
  return (
    <div
      className={clsx(
        "relative min-h-screen max-w-screen flex flex-col bg-gray-200 dark:bg-gradient-to-br dark:from-primary-900 dark:to-primary-950 dark:text-white"
      )}
    >
      <SidebarMobile sidebar={sidebar} toggleSidebar={toggleSidebar} />
      <AppHeader toggleSidebar={toggleSidebar} />
      <SidebarDesktop />
      <main className="md:ml-64 md:mr-8 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};
