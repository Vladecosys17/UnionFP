import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero section">
      <div className="hero-content">
        <span className="tag">Comunidad · Acción · Cambio</span>

        <h1 className="hero-title">
          Unión Fuerza y Cambio — Transformando comunidades con proyectos
          sociales sostenibles
        </h1>

        <p className="lead">
          Somos una organización civil dedicada a promover educación,
          emprendimiento y desarrollo comunitario en zonas urbanas y rurales.
          Trabajamos con voluntariado local, aliados y donantes para generar
          impacto medible.
        </p>

        <div className="hero-actions">
          <Link to="/programs" className="btn-primary">
            Ver programas
          </Link>
          <Link to="/involve" className="btn-ghost">
            Cómo ayudar
          </Link>
        </div>

        <div className="grid grid-3 hero-features">
          <div className="card">
            <h4>Educación comunitaria</h4>
            <p className="small-muted">
              Capacitación para jóvenes y adultos en habilidades digitales y
              oficios.
            </p>
          </div>

          <div className="card">
            <h4>Emprendimiento</h4>
            <p className="small-muted">
              Apoyo a microemprendimientos con mentoría y microcréditos.
            </p>
          </div>

          <div className="card">
            <h4>Salud preventiva</h4>
            <p className="small-muted">
              Jornadas de salud y prevención en comunidades vulnerables.
            </p>
          </div>
        </div>
      </div>

      <aside className="hero-aside">
        <div className="hero-card">
          <h3>Próximo evento</h3>
          <p className="small-muted">
            Feria de Emprendimiento <br />
            Sábado 20 de septiembre · Centro Cultural Municipal
          </p>

          <Link to="/involve" className="btn-primary full-width">
            Registrar proyecto
          </Link>
        </div>

        <div className="card">
          <h4>Métodos de apoyo</h4>
          <ul className="small-muted list">
            <li>Donaciones periódicas</li>
            <li>Voluntariado</li>
            <li>Alianzas empresariales</li>
          </ul>
        </div>
      </aside>
    </section>
  );
}
