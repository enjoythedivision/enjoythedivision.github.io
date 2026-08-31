import "./Education.scss";

export default function Education() {
  return (
    <section className="container">
      <h2>Education</h2>
      <div className="work">
        <div className="job">
          <h3>Software Applications Technician | IEK Delta 360</h3>
          <span className="date">October 2024 - June 2026</span>
          <p>
            Focused on software development fundamentals, including programming, web development, databases, and practical software development.
          </p>
        </div>

        <div className="job">
          <h3>
            Electrical & Computer Engineering | Democritus University of Thrace
          </h3>
          <span className="date">October 2014 - Present</span>
          <p>
            Currently enrolled, though not actively pursuing the degree.
          </p>
          <p>
            Coursework included programming, object-oriented development, databases, operating systems, computer networks, and web development.
          </p>
        </div>
      </div>
    </section>
  );
}
