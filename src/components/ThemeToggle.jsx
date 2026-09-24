import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import "./ThemeToggle.scss";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === "light" ? <HiOutlineMoon /> : <HiOutlineSun />}
    </button>
  );
}
