import React from "react";

export default function About() {
  return (
    <section className="section about">
      <div className="container">

        {/* Identidad */}
        <header className="about-header">
          <h2>Quiénes somos</h2>
          <p className="lead">
            Unión Fuerza y Cambio es una asociación civil fundada el 25 de enero de 2025 enfocada
            en la recuperación ambiental y la activación comunitaria como base
            para el desarrollo social sostenible.
          </p>
        </header>

        {/* Propósito */}
        <section className="about-block">
          <h3>Propósito</h3>
          <p className="small-muted">
            Atender el deterioro de espacios públicos mediante procesos de
            reforestación participativa que fortalezcan el tejido social y la
            corresponsabilidad ciudadana.
          </p>
        </section>

        {/* Misión y Visión */}
        <section className="about-block grid grid-2">
          <div className="card">
            <h4>Misión</h4>
            <p className="small-muted">
              Promover la rehabilitación y reforestación de espacios públicos a
              través de la participación comunitaria organizada, fomentando
              conciencia ambiental y responsabilidad social.
            </p>
          </div>

          <div className="card">
            <h4>Visión</h4>
            <p className="small-muted">
              Consolidarnos como una asociación referente en la transformación
              sostenible de espacios públicos, impulsando comunidades más
              verdes, cohesionadas y resilientes.
            </p>
          </div>
        </section>

        {/* Líneas de acción */}
        <section className="about-block">
          <h3>Líneas de acción</h3>
          <ul className="list">
            <li>Reforestación y rehabilitación de espacios públicos</li>
            <li>Educación ambiental comunitaria</li>
            <li>Participación ciudadana y voluntariado</li>
            <li>Alianzas con organizaciones y sector público</li>
          </ul>
        </section>

        {/* Valores */}
        <section className="about-block">
          <h3>Valores operativos</h3>
          <div className="grid grid-3">
            <div className="card">Transparencia</div>
            <div className="card">Trabajo comunitario</div>
            <div className="card">Sostenibilidad</div>
          </div>
        </section>

        {/* Equipo */}
        <section className="about-block">
          <h3>Equipo</h3>
          <div className="grid grid-3">
            <div className="card">
              <strong>María López</strong>
              <p className="small-muted">Directora Ejecutiva</p>
            </div>

            <div className="card">
              <strong>Vladimir Martínez</strong>
              <p className="small-muted">Coordinador de Programas</p>
            </div>

            <div className="card">
              <strong>Claudia Cárdenas</strong>
              <p className="small-muted">Responsable de Alianzas</p>
            </div>
          </div>
        </section>

        {/* Marco legal */}
        <section className="about-block about-legal">
          <p className="small-muted">
            Unión Fuerza y Cambio es una asociación civil sin fines de lucro,
            constituida conforme a la legislación mexicana.
          </p>
        </section>

      </div>
    </section>
  );
}
