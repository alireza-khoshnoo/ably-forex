import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import Button from "./Button";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    const newTheme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div onClick={toggleDarkMode}>
      <Button>
        <BiSun className="dark:hidden text-xl" />
        <BiMoon className="text-xl hidden dark:grid" />
      </Button>
    </div>
  );
};

export default DarkModeToggle;
