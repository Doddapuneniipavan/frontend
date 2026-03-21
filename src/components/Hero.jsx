function Hero() {
  return (
    <div style={container}>

      {/* LEFT SIDE */}
      <div>
        <h1 style={title}>
          Turning Your Vision into Reality
        </h1>

        <p style={subtitle}>
          Crafting modern digital solutions using Cloud, DevOps, and Cybersecurity technologies.
        </p>

        <div style={{ marginTop: "30px" }}>
          <button style={btn}>Get Started</button>
          <button style={btn}>Explore Services</button>
        </div>
      </div>

      {/* RIGHT SIDE TEXT LOGO */}
      <div style={logoBox}>
        <h1 style={logoText}>FORTINETIC</h1>
      </div>

    </div>
  );
}

export default Hero;

// 🎨 STYLES

const container = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "60px",
  minHeight: "90vh",
  background: "linear-gradient(135deg, #0f172a, #1e293b)"
};

const title = {
  fontSize: "48px",
  color: "white"
};

const subtitle = {
  marginTop: "20px",
  color: "#cbd5e1"
};

const btn = {
  marginRight: "10px",
  padding: "12px 20px",
  borderRadius: "8px",
  border: "none",
  background: "linear-gradient(45deg, #3b82f6, #2563eb)",
  color: "white",
  cursor: "pointer"
};

const logoBox = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const logoText = {
  fontSize: "60px",
  fontWeight: "bold",
  background: "linear-gradient(45deg, #3b82f6, #9333ea)",
  WebkitBackgroundClip: "text",
  color: "transparent",
  textShadow: "0 0 20px rgba(59,130,246,0.6)"
};