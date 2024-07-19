import { Link } from "react-router-dom";
import { sidebarLinks } from "../content/sidebar-links";
import { ButtonSidebar } from "./button-sidebar";
import { MdLogout } from "react-icons/md";
import { Text } from "../../../ui/text/Text";
import { useAuth } from "../../../../context/auth/useAuth";

export const SidebarDesktop = () => {
  const { logout } = useAuth();
  return (
    <div className="w-64 h-full fixed top-0 left-0 hidden md:block p-6 shrink-0">
      <div className="bg-primary-600 dark:bg-primary-800 h-full p-4 rounded-lg shadow-md flex flex-col">
        <Link to={"/"} className="">
          <img src="/images/bw.png" alt="bw logo" className="w-32 mx-auto" />{" "}
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
        <button className="flex items-center gap-2 p-3" onClick={logout}>
          <MdLogout size={20} /> <Text className="font-semibold">Salir</Text>
        </button>
      </div>
    </div>
  );
};
