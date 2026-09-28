import ThemeToggle from "./ThemeToggle";
import "./Header.scss";
import { useEffect, useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = [...document.querySelectorAll("main section[id]")];
    let frame;
    const updateSection = () => {
      const marker = window.innerHeight * 0.35;
      let current = "home";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= marker) current = section.id;
      }
      if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        current = sections.at(-1)?.id ?? current;
      }
      setActiveSection(current);
    };
    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateSection);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return <header className="header"><div className="container header-inner">
    <a className="logo" href="#home" aria-label="Maria Lappa, home">
      <span className="logo-path" aria-hidden="true">
        {activeSection === "home"
          ? <><span className="logo-prefix">~/</span>maria</>
          : <><span className="logo-prefix">cd</span>{" "}{activeSection}</>}
      </span>
      <span className="logo-terminal" aria-hidden="true">
        <span className="terminal-command"><span className="terminal-prompt">$</span> whoami</span>
        <span className="terminal-output">frontend developer</span>
      </span>
    </a>
    <nav className="nav" aria-label="Main navigation"><a href="#about">About</a><a href="#volunteering">Volunteering</a><a href="#projects">Projects</a><ThemeToggle /></nav>
  </div></header>;
}

