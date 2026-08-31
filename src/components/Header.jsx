import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">:)</div>

        <nav className="nav">
          <Link to="/about">About</Link>
          <Link to="/work">Experience</Link>
          <Link to="/projects">Projects</Link>
        </nav>
      </div>
    </header>
  );
}