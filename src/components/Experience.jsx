import "./Experience.scss";

export default function Experience() {
  return (
    <section className="experience container">
      <h2>Experience</h2>

      <div className="work">
        <div className="job">
          <h3>Frontend Lead | FlameVerse AI</h3>
          <span className="date">June 2025 - Present</span>
          <p>
            I contribute to the frontend codebase while coordinating tasks across a volunteer frontend team. My work includes building UI features, integrating REST APIs, reviewing code, and collaborating with backend developers and product contributors.
          </p>
          <p>
            I also help organize frontend work using Kanban boards and GitHub-based workflows.
          </p>
          <span className="badges">
            <span className="badge">JavaScript</span>
            <span className="badge">React</span>
            <span className="badge">HTML</span>
            <span className="badge">CSS / SCSS</span>
            <span className="badge">REST APIs</span>
            <span className="badge">Git</span>
            <span className="badge">GitHub</span>
            <span className="badge">Trello</span>
            <span className="badge">Swagger</span>
            <span className="badge">CI/CD</span>
          </span>
        </div>

        <div className="job">
          <h3>Freelance Frontend Developer</h3>
          <span className="date">January 2024 - Present</span>
          <p>
            I design, build, and deploy websites for clients using JavaScript, React, and WordPress.
          </p>
          <p>
            My work has included responsive interfaces, custom WordPress implementations, headless CMS integrations, deployment, and working directly with clients to turn requirements into working solutions.
          </p>
          <span className="badges">
            <span className="badge">React</span>
            <span className="badge">JavaScript</span>
            <span className="badge">WordPress</span>
            <span className="badge">Headless CMS</span>
            <span className="badge">Netlify</span>
            <span className="badge">cPanel</span>
            <span className="badge">Git</span>
            <span className="badge">GitHub</span>
            <span className="badge">Figma</span>
          </span>
        </div>
      </div>
    </section>
  );
}
