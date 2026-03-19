function Trust() {
  return (
    <section className="trust">
      <h2>Why Choose Fortinetic?</h2>

      <div className="trust-grid">

        <div className="trust-card">
          <img
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
            alt="Tech"
          />
          <h3>Modern Tech Stack</h3>
          <p>We use AWS, Docker, Kubernetes & latest tools</p>
        </div>

        <div className="trust-card">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            alt="Security"
          />
          <h3>Secure Systems</h3>
          <p>Security-first approach in every project</p>
        </div>

        <div className="trust-card">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
            alt="Team"
          />
          <h3>Expert Team</h3>
          <p>Experienced engineers & DevOps specialists</p>
        </div>

      </div>
    </section>
  );
}

export default Trust;