import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">

        </div>
        <div className="navList">
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#about">Sobre mí</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;