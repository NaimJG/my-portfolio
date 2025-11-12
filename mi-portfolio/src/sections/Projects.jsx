import './Projects.css';

// Tercera sección de la página
function Projects() {
  return (
    <section id="projects">
      <h1>Mis Proyectos</h1>
      <div className="projects-container">
        <div className="project-card">
          <div className='project-content-left'>
            <img src="/EsquinaLiterariaLanding.jpg" alt="Captura de pantalla de la esquina literaria"></img>
          </div>
          <div className='project-content-right'>
            <h2>La Esquina Literaria</h2>
            <p>
              <b>La Esquina Literaria</b> es una aplicación web creada con <b>Node.js, Express, MongoDB y React</b>,
               que invita a los usuarios a <b>explorar, reseñar y descubrir libros</b> compartidos por una comunidad lectora. 
               Combina una <b>experiencia social e interactiva</b> con la visión de integrar en el futuro una <b>lataforma de compra de libros.</b>
            </p>
            <a href="https://esquina-literaria.vercel.app/" className='btn' target="_blank" rel="noopener noreferrer">Ver proyecto</a>
          </div>
        </div>
        <div className="project-card">
          <div className='project-content-left'>
            <h2>Proyecto 2: Aplicación de Tareas</h2>
            <p>Una aplicación web para gestionar tareas diarias con funcionalidades de agregar, editar y eliminar tareas.</p>
            <a href="#" className='btn' target="_blank" rel="noopener noreferrer">Ver proyecto</a>
          </div>
          <div className='project-content-right'>
            <img src="/task-app.png" alt="Captura de pantalla de la aplicación de tareas"></img>
          </div>
        </div>
        <div className="project-card">
          <div className='project-content-left'>
            <img src="/task-app.png" alt="Captura de pantalla de la aplicación de tareas"></img>
          </div>
          <div className='project-content-right'>
            <h2>Proyecto 3: Aplicación de Tareas</h2>
            <p>Una aplicación web para gestionar tareas diarias con funcionalidades de agregar, editar y eliminar tareas.</p>
            <a href="#" className='btn' target="_blank" rel="noopener noreferrer">Ver proyecto</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;