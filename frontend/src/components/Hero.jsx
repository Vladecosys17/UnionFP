import React from "react";

export default function Hero() {
  return (
    <section className="hero section">
      <div>
        <div className="tag">Comunidad · Acción · Cambio</div>
        <h1>
          Unión Fuerza y Cambio — Transformando comunidades con proyectos
          sociales sostenibles
        </h1>
        <p className="lead">
          Somos una organización civil dedicada a promover educación,
          emprendimiento y desarrollo comunitario en zonas urbanas y rurales.
          Trabajamos con voluntariado local, aliados y donantes para generar
          impacto medible.
        </p>

        <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
          <a href="/programs" className="btn-primary">
            Ver programas
          </a>
          <a href="/involve" className="btn-ghost">
            Cómo ayudar
          </a>
        </div>

        <div className="grid" style={{ marginTop: 24 }}>
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

      <aside>
        <div className="hero-card">
          <h3>Próximo evento: Feria de Emprendimiento</h3>
          <p className="small-muted">
            Sábado 20 de septiembre · Centro Cultural Municipal
          </p>
          <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
            <div style={{ flex: 1 }}>
              <a className="btn-primary" href="/involve">
                Registrar proyecto
              </a>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 16 }} className="card">
          <h4>Métodos de apoyo</h4>
          <ul className="small-muted" style={{ marginTop: 8 }}>
            <li>Donaciones periódicas</li>
            <li>Voluntariado</li>
            <li>Alianzas empresariales</li>
          </ul>
        </div>
      </aside>
    </section>
  );
}
