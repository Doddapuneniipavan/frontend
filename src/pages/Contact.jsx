import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="contact-page">

      {/* TITLE */}
      <h1 className="contact-title">Let’s Build Something Great 🚀</h1>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <h2>Let’s Talk</h2>

          <p>
            Have a project or hiring requirement? Reach out to us and
            we’ll get back to you quickly.
          </p>

          {/* NEW SERVICES INFO */}
          <p>
            We specialize in Cloud Solutions, DevOps Automation,
            Cybersecurity, and Web Development services.
          </p>

          <p style={{ marginTop: "10px", color: "#3b82f6" }}>
            ⚡ We usually respond within 24 hours
          </p>

          {/* CONTACT DETAILS */}
          <div className="info-box">

            <p>
              <strong>Website:</strong>{" "}
              <a href="https://fortineticsolutions.in" target="_blank" rel="noopener noreferrer">
                fortineticsolutions.in
              </a>
            </p>

            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@fortineticsolutions.in">
                info@fortineticsolutions.in
              </a>
            </p>

            <p>
              <strong>Alternate Email:</strong>{" "}
              <a href="mailto:contact@fortineticsolutions.in">
                contact@fortineticsolutions.in
              </a>
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+919502456273">
                +91 9502456273
              </a>
            </p>

            <p><strong>Location:</strong> Hyderabad, India</p>

            {/* BUSINESS HOURS */}
            <p style={{ marginTop: "15px" }}>
              <strong>Business Hours:</strong>
            </p>
            <p>Mon - Sat: 9:00 AM – 7:00 PM</p>
            <p>Sunday: Closed</p>

          </div>

          {/* TRUST LINE */}
          <p style={{ marginTop: "15px", fontSize: "14px", opacity: 0.7 }}>
            Trusted by growing startups and businesses
          </p>

        </div>

        {/* RIGHT SIDE FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>

        </form>

      </div>
    </div>
  );
}

export default Contact;