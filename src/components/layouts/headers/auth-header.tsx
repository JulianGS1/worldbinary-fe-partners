import { Button } from "flowbite-react";
import { MdDarkMode, MdSunny } from "react-icons/md";
import { useDarkMode } from "../../hooks/useDarkMode";

export const AuthHeader = () => {
  const { theme, toggleDarkMode } = useDarkMode();
  return (
    <div className="absolute w-full p-4 flex items-center justify-between">
      <img src="/images/bw.png" alt="wb icon" className="w-20" />
      <Button onClick={toggleDarkMode}>
        {theme == "dark" && <MdSunny />}
        {theme == "light" && <MdDarkMode />}
      </Button>
    </div>
  );
};
