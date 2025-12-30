import React from "react";
import ProgramCard from "../components/ProgramCard";
import { programs } from "../data/programs";

export default function Programs() {
  return (
    <section className="section">
      <h2>Programas</h2>

      <p className="lead">
        Programas diseñados para generar resultados sostenibles en la comunidad.
      </p>

      <div className="grid grid-3">
        {programs.map((program) => (
          <ProgramCard
            key={program.id}
            title={program.title}
            desc={program.desc}
            facebookLink={program.facebookLink}
            location={program.location}
            eventDate={program.eventDate}
          />
        ))}
      </div>
    </section>
  );
}
  