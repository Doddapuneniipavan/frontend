import { useState } from "react";

function Careers() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    resume: null,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "DevOps Engineer",
    "Cloud Engineer",
    "Data Engineer",
    "AI Engineer",
    "Cybersecurity Analyst",
    "QA Engineer",
    "Product Manager",
  ];

  const handleChange = (e) => {
    if (e.target.name === "resume") {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleRoleClick = (role) => {
    setFormData({ ...formData, role });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) =>
        data.append(key, formData[key])
      );

      const res = await fetch(
        "https://hiring-system-ee0z.onrender.com/apply",
        {
          method: "POST",
          body: data,
        }
      );

      if (res.ok) {
        setSuccess(true);
      } else {
        alert("Error submitting form");
      }
    } catch {
      alert("Server error");
    }

    setLoading(false);
  };

  return (
    <div className="career-page">
      {/* LEFT */}
      <div className="career-left">
        <h1>🚀 Join Fortinetic</h1>
        <p>Click a role to apply instantly</p>

        <div className="job-list">
          {roles.map((role) => (
            <div
              key={role}
              className="job"
              onClick={() => handleRoleClick(role)}
            >
              {role}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="career-right">
        <h2>Apply Now</h2>

        <form className="form" onSubmit={handleSubmit}>
          <input name="name" placeholder="Full Name" onChange={handleChange} required />
          <input name="email" placeholder="Email" onChange={handleChange} required />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} required />

          <select name="role" value={formData.role} onChange={handleChange} required>
            <option value="">Select Role</option>
            {roles.map((role) => (
              <option key={role}>{role}</option>
            ))}
          </select>

          <input type="file" name="resume" onChange={handleChange} required />

          <button type="submit">
            {loading ? "Submitting..." : "Apply Now"}
          </button>
        </form>

        {success && <p style={{ color: "lightgreen" }}>✅ Applied Successfully</p>}
      </div>
    </div>
  );
}

export default Careers;