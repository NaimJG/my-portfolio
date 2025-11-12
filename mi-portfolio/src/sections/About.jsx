import './About.css';

function About() {
  const tools = [
    { name: "Node.js", icon: "/Node.js.svg" },
    { name: "Express", icon: "/Express.svg"  },
    { name: "React", icon: "/React.svg"  },
    { name: "Vite", icon: "/public/Vite.svg"  },
    { name: "Angular", icon: "/Angular.svg"  },
    { name: "Spring Boot", icon: "/Spring.svg"  },
    { name: "Python", icon: "/Python.svg"  },
    { name: "HTML5", icon: "/HTML5.svg"  },
    { name: "CSS3", icon: "/CSS3.svg"  },
    { name: "JavaScript", icon: "/JavaScript.svg"  },
    { name: "TypeScript", icon: "/TypeScript.svg"  },
    { name: "MongoDB", icon: "/MongoDB.svg"  },
    { name: "MySQL", icon: "/MySQL.svg"  },
    { name: "Git", icon: "/Git.svg"  },
    { name: "GitHub", icon: "/GitHub.svg"  },
    { name: "Postman", icon: "/Postman.svg"  },
    { name: "DBeaver", icon: "/DBeaver.svg"  },
    { name: "Jira", icon: "/Jira.svg"  },
  ];

  const certifications = [
    "Curso de Angular: Componentes y Servicios",
    "Curso de Fundamentos de Angular",
    "Curso de Java SE Orientado a Objetos",
    "Curso de Java Spring",
    "Curso de Java Spring Data JPA: Bases de Datos",
    "Curso Profesional de Git y GitHub",
    "Curso Profesional de DevOps",
  ];

  return (
    <section id="about">
      <h1 >Sobre mí</h1>
      <p className="about-description">
        Soy un desarrollador <strong>Full Stack Semi-Senior</strong> con experiencia en el
        desarrollo de aplicaciones web utilizando tecnologías modernas del ecosistema
        Java y JavaScript. Me considero una persona <strong>responsable</strong>,
        <strong> comprometida</strong> y siempre dispuesta a aprender nuevas tecnologías
        para seguir creciendo profesionalmente. Disfruto trabajar en equipo, compartir
        conocimientos y participar en proyectos desafiantes que impulsen mi desarrollo.
      </p>

      <div className='about-content'>
        <section>
          <h2>Experiencia Laboral</h2>
          <div className='job-experience'>
            <h3>Software Developer Full-Stack Ssr.</h3>
            <p>ASJ Servicios (2023 - Actualidad)</p>
            <ul>
              <li>Desarrollo de proyectos backend con Java y Spring Boot.</li>
              <li>Diseño y desarrollo de pantallas con Angular y Typescript.</li>
              <li>Implementación de procesos BPM en Oracle JDeveloper.</li>
              <li>Manejo de bases de datos relacionales.</li>
              <li>Trabajo en equipo bajo metodología Scrum.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Educación</h2>
          <ul>
            <li>
              <strong>Técnico Superior en Desarrollo de Software</strong> - Instituto de
              Formación Técnica Superior N°16 (2023 - Actualidad)
            </li>
            <li>
              <strong>Bachiller en Ciencias</strong> - U.E. Nuestra Sra. de Lourdes II
              (Anzoátegui, Venezuela)
            </li>
          </ul>
        </section>

        {/* HERRAMIENTAS Y TECNOLOGÍAS*/}
        <section>
          <h2>Herramientas y Tecnologías</h2>
          <div className='tools-list'>
            {tools.map((tool) => (
              <>
                <img key={tool.name} src={tool.icon} alt={tool.name} title={tool.name} className="tool-icon"/>
              </>
            ))}
          </div>
        </section>

        {/* CERTIFICACIONES */}
        <section>
          <h2>Certificaciones</h2>
          <ul>
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}

export default About;