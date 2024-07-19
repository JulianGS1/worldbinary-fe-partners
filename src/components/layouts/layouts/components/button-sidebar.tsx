import { createElement } from "react";
import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";
import { Text } from "../../../ui/text/Text";
import clsx from "clsx";

interface ButtonSidebarProps {
  icon: IconType;
  label: string;
  href: string;
  toggleSidebar?: () => void;
}

export const ButtonSidebar = ({
  href,
  icon,
  label,
  toggleSidebar,
}: ButtonSidebarProps) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        clsx(
          "w-full flex items-center gap-4 p-2 rounded-lg hover:bg-primary-700",
          isActive && "bg-primary-900"
        )
      }
      onClick={toggleSidebar}
    >
      {createElement(icon, { size: 20 })}
      <Text model="h4">{label}</Text>
    </NavLink>
  );
};
