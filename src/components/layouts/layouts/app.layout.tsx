import clsx from "clsx";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useDarkMode } from "../../hooks/useDarkMode";
import { AppHeader } from "../headers/app-header";
import { SidebarMobile } from "./components/sidebar-mobile";
import { ButtonSidebar } from "./components/button-sidebar";
import { sidebarLinks } from "./content/sidebar-links";
import { MdLogout } from "react-icons/md";
import { Text } from "../../ui/text/Text";

export const AppLayout = () => {
  const { theme, toggleDarkMode } = useDarkMode();
  const [sidebar, setSidebar] = useState<boolean>(false);
  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };
  return (
    <div className={clsx("relative", theme == "dark" && "text-white")}>
      <SidebarMobile sidebar={sidebar} toggleSidebar={toggleSidebar} />
      <div className="h-screen flex flex-col bg-gray-200 dark:bg-gradient-to-br dark:from-primary-900 dark:to-primary-950">
        <AppHeader
          theme={theme}
          toggleDarkMode={toggleDarkMode}
          toggleSidebar={toggleSidebar}
        />
        <div className="flex h-full">
          <div className="w-64 h-full  fixed top-0 left-0 hidden md:block p-6">
            <div className="bg-primary-600 dark:bg-primary-800 h-full p-4 rounded-lg shadow-md flex flex-col">
              <Link to={"/"} className="">
                <img
                  src="/images/bw.png"
                  alt="bw logo"
                  className="w-32 mx-auto"
                />{" "}
              </Link>
              <div className="mt-4 flex flex-col gap-3 grow">
                {sidebarLinks.map((link) => (
                  <ButtonSidebar
                    key={link.href}
                    href={link.href}
                    icon={link.icon}
                    label={link.label}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 p-3">
                <MdLogout size={20} />{" "}
                <Text className="font-semibold">Logout</Text>
              </div>
            </div>
          </div>
          <main className="grow md:ml-64">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};
