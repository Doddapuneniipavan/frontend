import { useEffect, useState } from "react";

function Admin() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [statusMap, setStatusMap] = useState({});

  useEffect(() => {
    fetch("https://hiring-system-ee0z.onrender.com/applications")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  // FILTER + SEARCH
  const filteredData = data.filter((item) => {
    const matchesRole = filter ? item.role === filter : true;
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase());

    return matchesRole && matchesSearch;
  });

  // STATUS HANDLER (LOCAL ONLY)
  const updateStatus = (id, status) => {
    setStatusMap({ ...statusMap, [id]: status });
  };

  return (
    <div className="admin-page">
      <h1>📊 Admin Dashboard</h1>

      {/* FILTER + SEARCH */}
      <div className="admin-controls">

        <input
          type="text"
          placeholder="Search by name or email..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="">All Roles</option>
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
          <option>Full Stack Developer</option>
          <option>DevOps Engineer</option>
          <option>Cloud Engineer</option>
          <option>Data Engineer</option>
          <option>AI Engineer</option>
          <option>Cybersecurity Analyst</option>
          <option>QA Engineer</option>
          <option>Product Manager</option>
        </select>

      </div>

      {/* LIST */}
      <div className="list">
        {filteredData.map((item, index) => (
          <div key={index} className="card">

            <h3>{item.name}</h3>
            <p>{item.email}</p>
            <p><strong>Role:</strong> {item.role}</p>

            <a href={item.resume} target="_blank">
              View Resume
            </a>

            {/* STATUS */}
            <div className="status-buttons">
              <button
                className="btn-accept"
                onClick={() => updateStatus(index, "Selected")}
              >
                Select
              </button>

              <button
                className="btn-reject"
                onClick={() => updateStatus(index, "Rejected")}
              >
                Reject
              </button>
            </div>

            {statusMap[index] && (
              <p className="status-text">
                Status: {statusMap[index]}
              </p>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;