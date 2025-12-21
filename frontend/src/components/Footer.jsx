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
              Dirección: Calle Francisco I. Madero #307, Col. Loma de Pérez
              <br />
              RFC / ID fiscal: UFC250124616
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
                Email: unionfuerzaycambio@gmail.com
                <br />
                +52 (639)1346427
              </p>
              <div className="social-actions">
  <a
    href="https://www.facebook.com/share/1GrWiihRpz/"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-ghost"
  >
    Facebook
  </a>

  <a
    href="https://wa.me/526391346427"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-primary"
  >
    WhatsApp
  </a>
</div>

            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="footer-bottom">
          <p className="small-muted">
            © {new Date().getFullYear()} Unión Fuerza y Cambio de Delicias A.C.
          </p>
          <p className="small-muted">Política de privacidad · Términos</p>
        </div>
      </div>
    </footer>
  );
}
