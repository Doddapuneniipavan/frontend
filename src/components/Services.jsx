function Services() {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <p className="section-subtitle">
        We provide cutting-edge solutions to help businesses grow faster
      </p>

      <div className="service-grid">
        <div className="service-card">
          <h3>☁️ Cloud Solutions</h3>
          <p>AWS, Azure, GCP deployment & architecture</p>
        </div>

        <div className="service-card">
          <h3>⚙️ DevOps Automation</h3>
          <p>CI/CD pipelines, Docker, Kubernetes</p>
        </div>

        <div className="service-card">
          <h3>🔐 Cybersecurity</h3>
          <p>Threat detection & security auditing</p>
        </div>

        <div className="service-card">
          <h3>🌐 Web Development</h3>
          <p>Modern scalable web applications</p>
        </div>

        <div className="service-card">
          <h3>📊 Monitoring</h3>
          <p>Prometheus, Grafana, logging systems</p>
        </div>

        <div className="service-card">
          <h3>🚀 Scaling Systems</h3>
          <p>High-performance infrastructure solutions</p>
        </div>
      </div>
    </section>
  );
}

export default Services;