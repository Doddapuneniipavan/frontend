import { useEffect, useState } from "react";

export default function Admin() {
  const [data, setData] = useState([]);

  // 🔥 FETCH APPLICATIONS
  const fetchData = () => {
    fetch("https://backend-ai-18mn.onrender.com/applications")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 🔥 UPDATE STATUS
  const updateStatus = async (id, status) => {
    try {
      await fetch(
        `https://backend-ai-18mn.onrender.com/applications/${id}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ status })
        }
      );

      alert("Updated!");
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  // 🔐 LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("admin");
    window.location.href = "/admin";
  };

  return (
    <div style={container}>
      {/* 🔥 LOGOUT BUTTON */}
      <button onClick={handleLogout} style={logoutBtn}>
        Logout
      </button>

      <h2>Applications Dashboard</h2>

      {data.length === 0 ? (
        <p>No applications found</p>
      ) : (
        data.map((app, index) => (
          <div key={index} style={box}>
            <p><b>Name:</b> {app.name}</p>
            <p><b>Email:</b> {app.email}</p>
            <p><b>Role:</b> {app.role}</p>

            {/* 🔥 ACTION BUTTONS */}
            <button
              style={selectBtn}
              onClick={() => updateStatus(app._id, "selected")}
            >
              Select
            </button>

            <button
              style={rejectBtn}
              onClick={() => updateStatus(app._id, "rejected")}
            >
              Reject
            </button>
          </div>
        ))
      )}
    </div>
  );
}

// 🎨 STYLES

const container = {
  padding: "20px",
  position: "relative"
};

const box = {
  border: "1px solid #ccc",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "8px"
};

const selectBtn = {
  marginRight: "10px",
  backgroundColor: "green",
  color: "white",
  border: "none",
  padding: "6px 12px",
  borderRadius: "5px",
  cursor: "pointer"
};

const rejectBtn = {
  backgroundColor: "red",
  color: "white",
  border: "none",
  padding: "6px 12px",
  borderRadius: "5px",
  cursor: "pointer"
};

const logoutBtn = {
  position: "absolute",
  top: "20px",
  right: "20px",
  padding: "8px 14px",
  backgroundColor: "#ff4d4d",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};