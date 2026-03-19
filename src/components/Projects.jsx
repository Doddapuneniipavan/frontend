function Projects() {
  return (
    <section className="projects">

      <h2>Our Work</h2>

      <div className="projects-grid">

        <div className="project-card">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" />
          <h3>Hiring System</h3>
          <p>Full-stack recruitment platform</p>
        </div>

        <div className="project-card">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" />
          <h3>Cloud Infrastructure</h3>
          <p>Scalable AWS-based deployments</p>
        </div>

        <div className="project-card">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475" />
          <h3>Security Monitoring</h3>
          <p>Real-time monitoring systems</p>
        </div>

      </div>

    </section>
  );
}

export default Projects;