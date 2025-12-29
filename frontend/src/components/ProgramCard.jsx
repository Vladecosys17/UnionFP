import React from "react";
import { Link } from "react-router-dom";

export default function ProgramCard({ title, desc, location, eventDate, facebookLink }) {
  return (
    <div className="card">
      <h4>{title}</h4>
      <p className="small-muted">{desc}</p>
        {location && (
          <p>
            📍
            <a 
              href={`https://www.google.com/maps?q=${encodeURIComponent(location)}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {location}
            </a>
          </p>
        )}
         {eventDate && (
          <p>Fecha del evento: {new Date(eventDate).toLocaleDateString()}</p>
        )}
      <div className="card-actions">
        <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="btn-ghost-2">
          Más información
        </a>
      </div>
    </div>
  );
}
