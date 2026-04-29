import "./About.scss";

export default function About() {
  return (
    <section className="about container">
      <h2>About</h2>

      <p className="description">
        Hey, I am Maria, a front-end developer working with one of the most popular JS libraries, <span className="accent">React</span>.
      </p>

      <p className="description">
        Since my elementary school years, I found myself deeply enjoying problem solving, from math and physics to logic-based thinking.
      </p>

      <p className="description">
        When I got in <span className="accent">Electrical & Computer Engineering</span> school, I was introduced to topics like OOP, web development, databases, operating systems and networks. That's when I happily realized that the pseudocode we were taught in high school was no different from real world algorithmic structures. Despite not actively pursuing my studies in Electrical Engineering anymore, I continue to explore everything CS-related through self-study and hands-on projects.
      </p>

      <p className="description">
        Recently I've been moving toward a more software-focused direction and gradually exploring <span className="accent">.NET development</span>. In the meantime, you can find me freelancing and contributing to open source projects.
      </p>
    </section>
  );
}