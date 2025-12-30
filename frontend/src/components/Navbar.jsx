import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <div className="overlay" onClick={() => setOpen(false)} />}

      <header className="navbar">
        <div className="container navbar-inner">
          <div className="brand">
            <div className="logo">
              <img src="/images/logo.jpg" alt="Unión Fuerza y Cambio" />
            </div>

            <div className="brand-text">
              <div className="brand-title">Unión Fuerza y Cambio</div>
              <div className="small-muted">
                Asociación civil sin fines de lucro
              </div>
            </div>
          </div>

          <nav className={`nav-links ${open ? "open" : ""}`}>
            <Link to="/" onClick={() => setOpen(false)}>Inicio</Link>
            <Link to="/about" onClick={() => setOpen(false)}>Quiénes somos</Link>
            <Link to="/programs" onClick={() => setOpen(false)}>Programas</Link>
            <Link to="/involve" onClick={() => setOpen(false)}>Involúcrate</Link>
          </nav>

          <div className="nav-actions">
            <Link
              to="/contact"
              className="btn-primary"
              onClick={() => setOpen(false)}
            >
              Contacto
            </Link>

            <button
              className="hamburger"
              aria-label="Abrir menú"
              onClick={() => setOpen(!open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
