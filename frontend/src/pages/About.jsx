import React from "react";

export default function About() {
  return (
    <div className="section">
      <div className="container">
        <h2>Quiénes somos</h2>
        <p className="lead">
          Unión Fuerza y Cambio es una asociación civil fundada en 2024 con la
          misión de fortalecer capacidades locales y promover oportunidades de
          desarrollo en comunidades vulnerables.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            marginTop: 20,
          }}
        >
          <div className="card">
            <h4>Misión</h4>
            <p className="small-muted">
              Promover la rehabilitación y reforestación de espacios públicos
              mediante la participación activa de la comunidad, fomentando la
              conciencia ambiental, el sentido de pertenencia y la
              responsabilidad social, para construir entornos mas verdes,
              saludable y humanos.
            </p>
          </div>
          <div className="card">
            <h4>Visión</h4>
            <p className="small-muted">
              Ser una asociación líder en la transformación y conservación de
              espacios públicos a través de la reforestación y la partición
              comunitaria, reconocida por inspirar una cultura ambiental
              responsable, solidaria y sostenible, donde cada persona se sienta
              parte activa del cambió hacia comunidades más verdes , unidas y
              resilientes.
            </p>
          </div>
        </div>

        <h3 style={{ marginTop: 20 }}>Equipo</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 16,
            marginTop: 12,
          }}
        >
          <div className="card">
            <strong>María López</strong>
            <p className="small-muted">Directora Ejecutiva</p>
          </div>
          <div className="card">
            <strong>Carlos Rivera</strong>
            <p className="small-muted">Coordinador de Programas</p>
          </div>
          <div className="card">
            <strong>Ana Pérez</strong>
            <p className="small-muted">Responsable de Alianzas</p>
          </div>
        </div>
      </div>
    </div>
  );
}
