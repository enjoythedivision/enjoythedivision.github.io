import "./About.scss";

export default function About() {
  return (
    <section className="about container">
      <h2>About</h2>

      <p className="description">
        I've always been drawn to problem solving and anything that
        involves logic, structure, and figuring out how things work.
      </p>

      <p className="description">
        I studied{" "}
        <span className="accent">
          Electrical & Computer Engineering at Democritus University of Thrace
        </span>
        , where I was introduced to programming, object-oriented development and 
        databases among other courses. Although I'm no
        longer actively pursuing the degree, that experience shaped the way I
        think about software and pushed me further toward computer science.
      </p>

      <p className="description">
        More recently, I've been focusing on practical software development
        through React projects, freelance work, and collaborative projects. I'm
        also learning C# and ASP.NET Core as I move toward full-stack
        development.
      </p>

      <p className="description">
        Outside of that, I like exploring new tools and technologies, usually by
        building something small with them and working my way around it.
      </p>
    </section>
  );
}
