import { useState } from "react";
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    alert("Formulario enviado");
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <section id="contact">
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">
            Nombre
          </label>
          <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Tu nombre" required/>
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email
          </label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="tuemail@ejemplo.com" required/>
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">
            Mensaje
          </label>
          <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} placeholder="Escribe tu mensaje..." required rows="5"/>
        </div>

        <button type="submit" className="btn">
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}

export default Contact;