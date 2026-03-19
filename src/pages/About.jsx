function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <h1>🚀 Fortinetic Solutions</h1>
        <p>
          Empowering businesses with cloud, DevOps, and cybersecurity solutions
          built for scale, speed, and security.
        </p>
      </section>

      {/* INTRO */}
      <section className="about-intro">
        <h2>Who We Are</h2>
        <p>
          Fortinetic Solutions is a modern technology startup focused on building
          scalable infrastructure, secure systems, and high-performance applications.
        </p>
      </section>

      {/* MISSION + VISION */}
      <section className="about-grid">
        <div className="about-card">
          <h3>🎯 Our Mission</h3>
          <p>
            To simplify complex infrastructure and deliver scalable,
            secure and efficient solutions.
          </p>
        </div>

        <div className="about-card">
          <h3>🌍 Our Vision</h3>
          <p>
            To grow into a trusted global partner in cloud, DevOps,
            and cybersecurity solutions.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <h2>Our Core Values</h2>

        <div className="values-grid">
          <div className="value-card">
            ⚡ Innovation
            <p>We evolve with modern technologies</p>
          </div>

          <div className="value-card">
            🔒 Security First
            <p>Every system is built with safety</p>
          </div>

          <div className="value-card">
            🚀 Performance
            <p>Fast, reliable and scalable systems</p>
          </div>

          <div className="value-card">
            🤝 Trust
            <p>Long-term client relationships</p>
          </div>
        </div>
      </section>

      {/* IMAGE SECTION */}
      <section className="about-image-section">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692"
          alt="team"
        />
        <div>
          <h2>Building Future-Ready Systems</h2>
          <p>
            We design modern cloud infrastructure, automate workflows,
            and build systems that scale with your business.
          </p>
        </div>
      </section>

      {/* TIMELINE (REAL 2026) */}
      <section className="timeline">
        <h2>Our Beginning</h2>

        <div className="timeline-item">
          <span>2026</span>
          <p>🚀 Fortinetic Solutions Founded</p>
        </div>

        <div className="timeline-item">
          <span>2026</span>
          <p>⚙️ Started building cloud & DevOps solutions</p>
        </div>

        <div className="timeline-item">
          <span>2026</span>
          <p>🔐 Expanded into cybersecurity services</p>
        </div>

        <div className="timeline-item">
          <span>2026</span>
          <p>🌍 Scaling towards global clients</p>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="clients">
        <h2>Trusted By</h2>

        <div className="client-logos">
          <img src="https://cdn-icons-png.flaticon.com/512/732/732221.png" />
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" />
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" />
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" />
        </div>
      </section>

    </div>
  );
}

export default About;