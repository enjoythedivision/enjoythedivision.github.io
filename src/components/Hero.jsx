import "./Hero.scss";
import { FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";


export default function Hero() {
  return (
    <section className="hero container">
      <h1>Maria Lappa</h1>

      <p className="subtitle">Front-end Developer</p>

      <p className="description">
        Hi, I am Maria, a front-end developer based in Kavala, Greece. This is a
        space where you can find info about me with a personal sprinkle. :)
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
