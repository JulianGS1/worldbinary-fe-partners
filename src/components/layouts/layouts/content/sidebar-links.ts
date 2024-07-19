import { MdBarChart, MdDashboard, MdFileCopy } from "react-icons/md";

export const sidebarLinks = [
  {
    icon: MdDashboard,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: MdBarChart,
    label: "Ventas",
    href: "/sales",
  },
  {
    icon: MdFileCopy,
    label: "Registros",
    href: "/records",
  },
];
