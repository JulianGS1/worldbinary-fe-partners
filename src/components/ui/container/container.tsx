import clsx from "clsx";
import { Avatar } from "flowbite-react";
import { useAuth } from "../../../context/auth/useAuth";
import { Text } from "../text/Text";

interface Props {
  children: React.ReactNode;
  title: string;
  className?: string;
}

export const Container = ({ children, title, className }: Props) => {
  const { user } = useAuth();
  return (
    <div className={clsx("my-12 mx-4 md:mx-0 flex flex-col", className)}>
      <div className="flex items-center justify-between w-full">
        <div>
          <Text model="h1" className="text-primary-950">
            {title}
          </Text>
        </div>
        <div className="items-center gap-4 hidden md:flex">
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
      <div className="mt-6">{children}</div>
    </div>
  );
};
