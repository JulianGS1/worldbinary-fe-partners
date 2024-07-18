import { createElement } from "react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";
import { Text } from "../../../ui/text/Text";

interface ButtonSidebarProps {
  icon: IconType;
  label: string;
  href: string;
}

export const ButtonSidebar = ({ href, icon, label }: ButtonSidebarProps) => {
  return (
    <Link
      to={href}
      className="w-full flex items-center gap-4 dark:bg-primary-900 dark:hover:bg-primary-800 p-2 rounded-lg"
    >
      {createElement(icon, { size: 20 })}
      <Text model="h4">{label}</Text>
    </Link>
  );
};
