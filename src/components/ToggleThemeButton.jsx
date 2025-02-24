import {useEffect, useState} from "react";

export default function ToggleThemeButton() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  console.log("Toggle theme", theme);
  return (
    <div className="p-4 py-2">
      {theme === "light" ? (
        <img
          onClick={toggleTheme}
          className="w-8 h-8 cursor-pointer "
          src="dark.png"
        />
      ) : (
        <img
          onClick={toggleTheme}
          className="w-8 h-8 cursor-pointer"
          src="light.png"
        />
      )}
    </div>
  );
}
