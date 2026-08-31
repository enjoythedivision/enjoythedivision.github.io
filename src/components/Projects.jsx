import "./Experience.scss";

export default function Projects() {
  return (
    <section className="experience container">
      <h2>Projects</h2>

      <div className="work">
        <div className="job">
          <h3>Full Stack Library</h3>
          <p>
            A full-stack library application built with React, ASP.NET Core Web API, Entity Framework Core, ASP.NET Core Identity, and SQLite.
          </p>
          <p>
            It includes authentication, role-based authorization, CRUD operations, and user-specific book borrowing and returning.
          </p>
          <span className="badges">
            <span className="badge">React</span>
            <span className="badge">ASP.NET Core</span>
            <span className="badge">Entity Framework Core</span>
            <span className="badge">ASP.NET Core Identity</span>
            <span className="badge">SQLite</span>
            <span className="badge">REST APIs</span>
          </span>
        </div>

        <div className="job">
          <h3>StudyFlow</h3>
          <p>
            A client-side course management application built with React and Vite, focused on reusable components, routing, and state-driven UI.
          </p>
          <span className="badges">
            <span className="badge">React</span>
            <span className="badge">Vite</span>
            <span className="badge">React Router</span>
          </span>
        </div>

        <div className="job">
          <h3>Eispraxis</h3>
          <p>
            A project showcasing practical software development skills and techniques.
          </p>
        </div>

        <div className="job">
          <h3>Nomad Riders</h3>
          <p>
            E-commerce website for a motorcycle-focused brand, including product browsing, shopping cart functionality, contact information, and supporting policy pages.
          </p>
          <p>
            The live site has Shop, cart functionality, contact/about sections, YouTube integration, and return/privacy/cookie policies.
          </p>
          <span className="badges">
            <span className="badge">WordPress</span>
            <span className="badge">WooCommerce</span>
            <span className="badge">Responsive Design</span>
            <span className="badge">E-commerce</span>
          </span>
        </div>

        <div className="job">
          <h3>Promousas Accounting</h3>
          <p>
            Business website for an accounting and consulting office, with service pages, appointment booking, FAQs, blog content, and contact information.
          </p>
          <p>
            The site includes accounting, tax, payroll and consulting service sections, external appointment booking, an FAQ area, and a regularly updated blog.
          </p>
          <span className="badges">
            <span className="badge">WordPress</span>
            <span className="badge">Responsive Design</span>
            <span className="badge">Content Management</span>
            <span className="badge">Third-party Integrations</span>
          </span>
        </div>
      </div>
    </section>
  );
}
