import { useEffect, useState } from "react";
import "../assets/css/Theme.css"

function Theme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button className="theme-btn" onClick={toggleTheme}>
      {theme === "light" ?  "☀️" : "🌙"}
    </button>
  );
}

export default Theme;