import "./Experience.scss";

export default function Experience() {
  return (
    <section className="experience container">
      <h2>Experience</h2>

      <div className="work">
        <div className="job">
          <h3>Front-end Lead | Flameverse AI</h3>
          <span className="date">June 2025 - Present</span>
          <p>
            As a founding member and the Front-end team lead, I am responsible
            for building and maintaining the front-end architecture,
            implementing UI features, handling API integration, reviewing code,
            and collaborating on product design decisions among others. I
            closely collaborate with the back-end team and organize the
            front-end tasks using project management tools like KanBan boards on
            Trello.
          </p>
          <span className="badges">
            <span className="badge">JavaScript</span>
            <span className="badge">React</span>
            <span className="badge">HTML</span>
            <span className="badge">Modular CSS</span>
            <span className="badge">SCSS</span>
            <span className="badge">VS Code</span>
            <span className="badge">Git</span>
            <span className="badge">GitHub</span>
            <span className="badge">Trello</span>
            <span className="badge">Kanban</span>
            <span className="badge">REST API</span>
            <span className="badge">Swagger</span>
            <span className="badge">CI/CD</span>
          </span>
        </div>

        <div className="job">
          <h3>Freelance Developer</h3>
          <span className="date">January 2024 - Present</span>
          <p>
            Designed, built and deployed websites and WordPress projects, as well as
            custom headless CMS integrations for clients.
          </p>
          <span className="badges">
            <span className="badge">Headless CMS</span>
            <span className="badge">Netlify</span>
            <span className="badge">WordPress</span>
            <span className="badge">cPanel</span>
            <span className="badge">VS Code</span>
            <span className="badge">Git</span>
            <span className="badge">GitHub</span>
            <span className="badge">Figma</span>
            <span className="badge">CI/CD</span>
          </span>
        </div>
      </div>
    </section>
  );
}
