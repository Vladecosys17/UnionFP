import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Marca */}
          <div className="footer-brand">
            <div className="footer-brand-header">
              <div className="logo">
                <img src="/images/logo.jpg" alt="Unión Fuerza y Cambio" />
              </div>

              <div>
                <strong>Unión Fuerza y Cambio</strong>
                <p className="small-muted">
                  Fomentando cambio local con proyectos sostenibles
                </p>
              </div>
            </div>

            <p className="small-muted footer-address">
              Dirección: Calle Ejemplo 123 · Ciudad · País
              <br />
              RFC / ID fiscal: 000000000
            </p>
          </div>

          {/* Navegación */}
          <div className="footer-cols">
            <div>
              <h4>Explorar</h4>
              <ul className="footer-links">
                <li><Link to="/about">Quiénes somos</Link></li>
                <li><Link to="/programs">Programas</Link></li>
                <li><Link to="/involve">Involúcrate</Link></li>
              </ul>
            </div>

            <div>
              <h4>Contacto</h4>
              <p className="small-muted footer-contact">
                hola@unionfuerzaycambio.org
                <br />
                +52 55 0000 0000
              </p>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="footer-bottom">
          <p className="small-muted">
            © {new Date().getFullYear()} Unión Fuerza y Cambio — Todos los derechos reservados
          </p>
          <p className="small-muted">Política de privacidad · Términos</p>
        </div>
      </div>
    </footer>
  );
}
