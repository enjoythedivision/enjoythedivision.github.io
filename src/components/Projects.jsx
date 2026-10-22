import { FiArrowUpRight } from "react-icons/fi";
const projects = [
  { name: "Full Stack Library", source: "", description: "Full-stack monorepo with a React frontend and ASP.NET Core backend. Uses Entity Framework Core with SQLite for persistence and ASP.NET Core Identity for authentication and role-based access to book borrowing features.", tags: ["React", "ASP.NET Core", "Entity Framework Core", "ASP.NET Core Identity", "SQLite"] },
  { name: "StudyFlow", source: "", description: "Course management monorepo with a React frontend built using Vite. Organizes the interface around reusable components, React Router navigation, and state-driven views for managing coursework.", tags: ["React", "Vite", "React Router"], href: "https://studyflow-dashboard-client.vercel.app/" },
  { name: "Eispraxis", source: "", description: "Full-stack application combining a React frontend, .NET Core Web APIs, and SQL Server persistence. Connects the user interface to backend services and a relational database.", tags: ["React", ".NET Core", "Web API", "SQL Server"] },
  { name: "Nomad Riders", description: "WordPress e-commerce site using WooCommerce for the product catalog and shopping cart. Combines content management with product browsing and cart functionality for a motorcycle brand.", tags: ["WordPress", "WooCommerce", "E-commerce"], href: "https://nomadriders.gr/" },
  { name: "Promousas Accounting", description: "Responsive WordPress site with appointment booking integration, service pages, FAQs, and a business blog. Uses the CMS to manage service information and publish articles.", tags: ["WordPress", "Responsive Design", "Integrations"], href: "https://promousas.gr/" },
  { name: "E-commerce Shop", description: "Placeholder for an upcoming e-commerce shop project.", tags: ["E-commerce"], placeholder: true },
  { name: "Task Manager API", description: "Placeholder for an upcoming task management API project.", tags: ["Task Management", "REST API"], placeholder: true },
];
export default function Projects() {
  return <section className="projects container" id="projects">
    <div className="section-heading"><div><h2>Projects</h2></div><a className="text-link" href="https://github.com/enjoythedivision" target="_blank" rel="noreferrer">More on GitHub <FiArrowUpRight /></a></div>
    <div className="project-grid">{projects.map(({ name, description, tags, href, source, placeholder }) =>
      <article className="project-card" key={name}>
        <div className="project-body"><h3>{name}</h3><p>{description}</p><div className="badges">{tags.map(tag => <span className="badge" key={tag}>{tag}</span>)}</div><div className="project-actions">
          {placeholder ? <span className="project-link project-status">Coming soon</span> : <>
            {href ? <a className="project-link" href={href} target="_blank" rel="noreferrer">{source !== undefined ? "Live website" : "Visit website"} <FiArrowUpRight /><span className="sr-only">: {name}</span></a> : <button className="project-link" type="button" disabled>Live website <FiArrowUpRight /><span className="sr-only">: {name} (unavailable)</span></button>}
            {source !== undefined && (source ? <a className="project-link" href={source} target="_blank" rel="noreferrer">Source <FiArrowUpRight /><span className="sr-only">: {name}</span></a> : <button className="project-link" type="button" disabled>Source <FiArrowUpRight /><span className="sr-only">: {name} (unavailable)</span></button>)}
          </>}
        </div></div>
      </article>
    )}</div>
  </section>;
}


