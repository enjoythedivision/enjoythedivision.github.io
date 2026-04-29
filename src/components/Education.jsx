import "./Education.scss";

export default function Education() {
  return (
    <section className="container">
        <h2>Education</h2>
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
        </div>

        <div className="job">
          <h3>Freelance Developer</h3>
          <span className="date">January 2024 - Present</span>
          <p>
            Designed, built and deployed websites, WordPress projects, and
            custom headless CMS integrations for clients.
          </p>
        </div>
      </div>
    </section>
  );
}
