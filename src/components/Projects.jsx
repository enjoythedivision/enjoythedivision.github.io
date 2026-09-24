import { FiArrowUpRight } from "react-icons/fi";
const projects = [
  { name: "Full Stack Library", description: "A library, from shelf to screen. Authentication, role-based access, and personal book borrowing, built across the full stack.", tags: ["React", "ASP.NET Core", "Entity Framework Core", "ASP.NET Core Identity", "SQLite"] },
  { name: "StudyFlow", description: "A little more structure for student life. A course management app with reusable components, routing, and a state-driven interface.", tags: ["React", "Vite", "React Router"], href: "https://studyflow-dashboard-client.vercel.app/" },
  { name: "Eispraxis", description: "Putting software development into practice with a React frontend, .NET Core APIs, and a SQL Server database.", tags: ["React", ".NET Core", "Web API", "SQL Server"] },
  { name: "Nomad Riders", description: "An online home for a motorcycle brand. Product browsing, a shopping cart, and the essentials that bring a store to life.", tags: ["WordPress", "WooCommerce", "E-commerce"], href: "https://nomadriders.gr/" },
  { name: "Promousas Accounting", description: "A clear, approachable website for an accounting office, connecting services, appointment booking, FAQs, and a business blog.", tags: ["WordPress", "Responsive Design", "Integrations"], href: "https://promousas.gr/" },
];
export default function Projects() {
  return <section className="projects container" id="projects">
    <div className="section-heading"><div><h2>Projects</h2></div><a className="text-link" href="https://github.com/enjoythedivision" target="_blank" rel="noreferrer">More on GitHub <FiArrowUpRight /></a></div>
    <div className="project-grid">{projects.map(({ name, description, tags, href }) =>
      <article className="project-card" key={name}>
        <div className="project-body"><h3>{name}</h3><p>{description}</p><div className="badges">{tags.map(tag => <span className="badge" key={tag}>{tag}</span>)}</div>{href && <a className="project-link" href={href} target="_blank" rel="noreferrer">Visit website <FiArrowUpRight /><span className="sr-only">: {name}</span></a>}</div>
      </article>
    )}</div>
  </section>;
}


