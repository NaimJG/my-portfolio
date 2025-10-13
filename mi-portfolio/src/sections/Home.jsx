import './Home.css';

function Home() {
  return (
    <>
      <section id='home'>
        <div className='home-text'>
          <h1>¡Hola! Soy Naim Cambe</h1>
          <h2>Desarrollador Full-Stack</h2>
          <p>Bienvenido a mi portafolio personal.</p> 
          <p>Aquí encontrarás información sobre mis proyectos, habilidades y experiencia en desarrollo web.</p>
          <a href="#contact" className='btn'>Contáctame</a>
        </div>
        <div className='home-image'>
          <img src="/naim.jpg" alt="Naim Cambe"></img>
        </div>
      </section>
    </>
  );
}

export default Home;