import ThemeToggle from "./ThemeToggle";
import "./Header.scss";
export default function Header() {
  return <header className="header"><div className="container header-inner">
    <a className="logo" href="#home" aria-label="Maria Lappa, home">:)</a>
    <nav className="nav" aria-label="Main navigation"><a href="#about">About</a><a href="#volunteering">Volunteering</a><a href="#projects">Projects</a><ThemeToggle /></nav>
  </div></header>;
}

