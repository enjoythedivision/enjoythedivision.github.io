import "./About.scss";

export default function About() {
  return (
    <section className="about container">
      <h2>About</h2>

      <p className="description">
        I'm a front-end developer working with one of the most popular JS
        libraries, <span className="accent">React</span>.
      </p>

      <p className="description">
        I've always deeply enjoyed problem-solving, from math and physics to
        logic-based thinking. My interest in programming started back in
        high school.
      </p>

      <p className="description">
        During my studies in <span className="accent">Electrical & Computer Engineering</span>, I
        was introduced to topics like OOP, web development, databases, operating
        systems and networks. Although I am not currently pursuing formal
        studies in Electrical Engineering, I continue to explore everything
        CS-related through self-study and hands-on projects.
      </p>

      <p className="description">
        I aim to keep my code structure organized and scalable. Recently, I've
        been moving toward a more software-focused direction and gradually
        exploring <span className="accent">.NET development</span>. In the meantime, you can find me freelancing and contributing to open source projects.
      </p>
    </section>
  );
}
