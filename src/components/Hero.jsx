import "./Hero.scss";
import { FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";


export default function Hero() {
  return (
    <section className="hero container">
      <h1>Maria Lappa</h1>

      <p className="subtitle">Junior Software Developer</p>

      <p className="description">
        Hi, I'm Maria, a developer based in Kavala, Greece. I mostly work with React and JavaScript, and I'm currently expanding into full-stack development with C# and ASP.NET Core.
      </p>
      
      <p className="description">
        This site is a place for my work, background, and a few things I'm currently interested in.
      </p>

      <div className="icons">
        <a
          href="https://github.com/enjoythedivision"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a href="mailto:marialapps@gmail.com">
          <FaEnvelope />
        </a>

        <a href="../../public/cv.pdf" target="_blank" rel="noreferrer">
          <FaFileAlt />
        </a>
      </div>
    </section>
  );
}
