import './Footer.css';

function Footer() {
  return (
    <footer id="footer">
      <p>© 2025 Mi Portfolio — Desarrollado por Naim Cambe</p>

      <nav>
        <a href="#about">Sobre mí</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </nav>

      <div className='social-links'>
        <a href="https://github.com/NaimJG" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/naim-cambe/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:ncambe.dev@gmail.com">Email</a>
      </div>
    </footer>
  );
}

export default Footer;