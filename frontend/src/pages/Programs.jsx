import React from "react";
import { Link } from "react-router-dom";

const programs = [
  {
    id: 1,
    title: "Capacitación Digital",
    desc: "Cursos intensivos en herramientas digitales y empleo remoto.",
  },
  {
    id: 2,
    title: "Emprende Local",
    desc: "Mentoría y microcréditos para iniciativas comunitarias.",
  },
  {
    id: 3,
    title: "Salud y Prevención",
    desc: "Jornadas médicas y talleres de prevención.",
  },
];

export default function Programs() {
  return (
    <section className="section">
      <h2>Programas</h2>

      <p className="lead">
        Programas diseñados para generar resultados sostenibles en la comunidad.
      </p>

      <div className="grid grid-3">
        {programs.map((program) => (
          <div key={program.id} className="card">
            <h4>{program.title}</h4>

            <p className="small-muted">{program.desc}</p>

            <div className="card-actions">
              <Link to="/involve" className="btn-ghost-2">
                Más información
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
