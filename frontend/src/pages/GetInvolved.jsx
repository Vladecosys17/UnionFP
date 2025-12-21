import React from "react";
import { Link } from "react-router-dom";

export default function GetInvolved() {
  return (
    <section className="section">
      <div className="container">
        <h2>Involúcrate</h2>

        <p className="lead">
          Formas prácticas de apoyar: donaciones, voluntariado y alianzas.
        </p>

        <div className="grid grid-3">
          <div className="card">
            <h4>Donar</h4>

            <p className="small-muted">
              Apoya con donaciones puntuales o recurrentes para financiar
              proyectos.
            </p>

            <div className="card-actions">
              <Link to="/contact" className="btn-primary">
                Donar ahora
              </Link>
            </div>
          </div>

          <div className="card">
            <h4>Voluntariado</h4>

            <p className="small-muted">
              Únete a jornadas y capacitaciones como voluntario.
            </p>

            <div className="card-actions">
              <Link to="/contact" className="btn-ghost-2">
                Registrar
              </Link>
            </div>
          </div>

          <div className="card">
            <h4>Alianzas</h4>

            <p className="small-muted">
              Colabora como empresa o institución para ampliar impacto.
            </p>

            <div className="card-actions">
              <Link to="/contact" className="btn-ghost-2">
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
