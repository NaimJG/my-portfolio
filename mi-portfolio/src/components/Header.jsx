import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
        </div>
        
        <button className="hamburger" onClick={toggleMenu} aria-label="Menú">
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
        </button>

        <div className={`navList ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li><a href="#home" onClick={closeMenu}>Inicio</a></li>
            <li><a href="#about" onClick={closeMenu}>Sobre mí</a></li>
            <li><a href="#projects" onClick={closeMenu}>Proyectos</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contacto</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;