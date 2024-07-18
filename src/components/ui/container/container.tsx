import clsx from "clsx";
import { Avatar } from "flowbite-react";
import { useAuth } from "../../../context/auth/useAuth";
import { Text } from "../text/Text";
import { useDarkMode } from "../../hooks/useDarkMode";
import { MdDarkMode, MdSunny } from "react-icons/md";

interface Props {
  children: React.ReactNode;
  title: string;
  className?: string;
}

export const Container = ({ children, title, className }: Props) => {
  const { user } = useAuth();
  const { theme, toggleDarkMode } = useDarkMode();
  return (
    <div
      className={clsx("my-12 mx-4 md:mx-0 md:pr-6 flex flex-col ", className)}
    >
      <div className="flex items-center justify-between w-full">
        <div>
          <Text model="h1" className="text-primary-950">
            {title}
          </Text>
        </div>
        <div className="items-center gap-4 hidden md:flex">
          <button onClick={toggleDarkMode}>
            {theme == "dark" && <MdSunny size={25} />}
            {theme == "light" && <MdDarkMode size={25} />}
          </button>
          <div className="">
            {user?.user.avatar && (
              <Avatar img={user.user.avatar} rounded>
                <Text className="flex flex-col font-semibold" model="sm">
                  {user.user.username}
                  <Text tag="span" model="sm" className="truncate text-[11px]">
                    {user.user.email}
                  </Text>
                </Text>
              </Avatar>
            )}
          </div>
        </div>
      </div>
      <div className=" dark:bg-transparent my-4">{children}</div>
    </div>
  );
};
