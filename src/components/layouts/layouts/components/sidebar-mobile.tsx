import clsx from "clsx";
import { MdClose, MdLogout } from "react-icons/md";
import { Text } from "../../../ui/text/Text";
import { sidebarLinks } from "../content/sidebar-links";
import { ButtonSidebar } from "./button-sidebar";

interface Props {
  sidebar: boolean;
  toggleSidebar: () => void;
}

export const SidebarMobile = ({ sidebar, toggleSidebar }: Props) => {
  return (
    <div
      className={clsx(
        "fixed left-0 top-0 w-full z-20 h-full bg-[#000000aa] flex transition-all duration-200 md:hidden",
        sidebar ? "visible" : "invisible"
      )}
    >
      <div
        className={clsx(
          "h-full w-72 bg-primary-500 dark:bg-primary-950 duration-200 p-8 flex flex-col justify-between",
          sidebar ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div>
          <div className="mb-4 flex items-center justify-between">
            <img src="/images/bw.png" className="w-32" alt="bw icon" />
            <MdClose size={30} onClick={toggleSidebar} />
          </div>
          <div className="flex flex-col gap-4">
            {sidebarLinks.map((link) => (
              <ButtonSidebar
                key={link.href}
                href={link.href}
                label={link.label}
                icon={link.icon}
                toggleSidebar={toggleSidebar}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-5 rounded-lg p-3">
          <MdLogout size={20} />
          <Text className="font-bold">Salir</Text>
        </div>
      </div>
      <div className="h-full grow" onClick={toggleSidebar}></div>
    </div>
  );
};
