import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2 className="logo">🚀 Fortinetic</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;