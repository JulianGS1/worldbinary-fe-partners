import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { MdDarkMode, MdSunny } from "react-icons/md";

export const AuthHeader = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const toggleDarkMode = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
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
