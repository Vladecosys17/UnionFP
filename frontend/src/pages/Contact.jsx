import React, { useState } from "react";

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <section className="section">
      <div className="container container-sm">
        <h2>Contacto</h2>

        <p className="lead">
          Escríbenos para solicitar información, proponer alianzas o confirmar
          participación en programas.
        </p>

        <form className="form" onSubmit={submit}>
          <input
            className="input"
            placeholder="Nombre"
            required
          />

          <input
            className="input"
            placeholder="Correo electrónico"
            type="email"
            required
          />

          <input
            className="input"
            placeholder="Teléfono (opcional)"
          />

          <textarea
            className="input textarea"
            placeholder="Mensaje"
            required
          />

          <div className="form-actions">
            <button className="btn-primary" type="submit">
              Enviar
            </button>

            <button className="btn-ghost" type="reset">
              Limpiar
            </button>
          </div>

          {success && (
            <div className="card form-success">
              Gracias. Tu mensaje fue enviado.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
