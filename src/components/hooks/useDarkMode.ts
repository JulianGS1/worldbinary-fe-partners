import { useEffect, useState } from "react";

export const useDarkMode = () => {
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

  return {
    theme,
    toggleDarkMode,
  };
};
