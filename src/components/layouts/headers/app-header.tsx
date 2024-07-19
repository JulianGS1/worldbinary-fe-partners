import { Avatar } from "flowbite-react";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/auth/useAuth";

interface Props {
  toggleSidebar: () => void;
}

export const AppHeader = ({ toggleSidebar }: Props) => {
  const { user } = useAuth();
  return (
    <div className="md:hidden h-20 w-full shrink-0 bg-primary-700 dark:bg-primary-900 md:bg-transparent dark:md:bg-transparent flex items-center justify-between px-4">
      <Link to={"/"}>
        <img src="/images/bw.png" alt="bw logo" className="w-24" />
      </Link>
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="md:hidden">
          <MdMenu size={25} />
        </button>
        {user?.user.avatar && <Avatar img={user.user.avatar} />}
      </div>
    </div>
  );
};
