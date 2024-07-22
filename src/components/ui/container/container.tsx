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
            {user && (
              <Avatar
                img={user?.userInfo?.avatar ?? "/images/neil-sims.png"}
                rounded
              />
            )}
          </div>
        </div>
      </div>
      <div className="mt-6">{children}</div>
    </div>
  );
};
