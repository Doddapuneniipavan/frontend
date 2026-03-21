import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";

// Pages
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* 🔐 PROTECTED ADMIN */}
        <Route
          path="/admin"
          element={
            localStorage.getItem("admin") === "true"
              ? <Admin />
              : <Login />
          }
        />

        {/* CHATBOT */}
        <Route path="/chat" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;