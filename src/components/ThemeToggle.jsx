import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import "./ThemeToggle.scss";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
}
