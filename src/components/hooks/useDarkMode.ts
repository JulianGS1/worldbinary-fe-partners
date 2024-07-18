import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const currentTheme: "dark" | "light" =
    (document.documentElement.getAttribute("data-theme") as "dark" | "light") ??
    "light";
  const [theme, setTheme] = useState<"dark" | "light">(currentTheme);
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
