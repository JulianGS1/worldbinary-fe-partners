import { Avatar } from "flowbite-react";
import { MdDarkMode, MdMenu, MdSunny } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/auth/useAuth";

interface Props {
  theme: "dark" | "light";
  toggleDarkMode: () => void;
  toggleSidebar: () => void;
}

export const AppHeader = ({ theme, toggleSidebar, toggleDarkMode }: Props) => {
  const { user } = useAuth();
  return (
    <div className="h-20 w-full bg-primary-700 dark:bg-primary-900 md:bg-transparent dark:md:bg-transparent flex items-center justify-between md:justify-end px-4">
      <Link to={"/"} className="md:hidden">
        <img src="/images/bw.png" alt="bw logo" className="w-24" />
      </Link>
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="md:hidden">
          <MdMenu size={25} />
        </button>
        <button onClick={toggleDarkMode}>
          {theme == "dark" && <MdSunny size={25} />}
          {theme == "light" && <MdDarkMode size={25} />}
        </button>
        {user?.user.avatar && <Avatar img={user.user.avatar} />}
      </div>
    </div>
  );
};
