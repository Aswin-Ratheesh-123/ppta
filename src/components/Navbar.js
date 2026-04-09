import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">

        {/* Logo */}
        <div className="nav-logo">
          <Link to="/">PPTA</Link>
        </div>

        {/* Menu */}
        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>

          <div className="close-btn" onClick={() => setMenuOpen(false)}>✕</div>

          <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={() => setMenuOpen(false)}>Home</Link>

          <Link to="/courses" className={location.pathname === "/courses" ? "active" : ""} onClick={() => setMenuOpen(false)}>Courses</Link>

          <Link to="/services" className={location.pathname === "/services" ? "active" : ""} onClick={() => setMenuOpen(false)}>Services</Link>

          <Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={() => setMenuOpen(false)}>About</Link>

          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""} onClick={() => setMenuOpen(false)}>Contact</Link>

          {/* CTA */}
          <a
            href="https://wa.me/919XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn"
          >
            💬 Chat Now
          </a>

        </nav>

        {/* Mobile Icon */}
        <span className="menu-icon" onClick={() => setMenuOpen(true)}>
          ☰
        </span>

      </div>

      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>}
    </header>
  );
}

export default Navbar;