import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = username.trim();
    const pass = password.trim();

    if (user === "admin" && pass === "admin123") {
      localStorage.setItem("admin", "true");
      window.location.href = "/admin";
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={container}>
      <h2>Admin Login</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={input}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={input}
      />

      <button onClick={handleLogin} style={btn}>
        Login
      </button>
    </div>
  );
}

const container = {
  display: "flex",
  flexDirection: "column",
  width: "300px",
  margin: "100px auto",
  gap: "10px"
};

const input = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const btn = {
  padding: "10px",
  backgroundColor: "blue",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};