import "./Hero.scss";
import { FiArrowUpRight, FiDownload, FiGithub, FiMail, FiMapPin } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-copy">
        <h1>Maria Lappa</h1>
        <p className="subtitle">Junior Software Developer</p>
        <p className="description">I work with React and JavaScript, and I'm learning C# and ASP.NET Core as I get into full-stack development.</p>
        <div className="hero-meta">
          <span><FiMapPin /> Kavala, Greece</span>
          <a href="https://github.com/enjoythedivision" target="_blank" rel="noreferrer"><FiGithub /> GitHub <FiArrowUpRight /></a>
          <a href="mailto:marialapps@gmail.com"><FiMail /> marialapps@gmail.com</a>
          <button className="cv-button" type="button" disabled aria-label="Download CV (unavailable)"><FiDownload /> Download CV</button>
        </div>
      </div>
    </section>
  );
}
