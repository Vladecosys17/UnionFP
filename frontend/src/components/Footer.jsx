import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer(){
return (
<footer className="footer">
<div className="container">
<div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
<div style={{maxWidth:320}}>
<div style={{display:'flex',alignItems:'center',gap:12}}>
<div className="logo">
        <img src="/images/logo.jpg" alt="Unión Fuerza y Cambio" />
</div>
<div>
<div style={{fontWeight:700}}>Unión Fuerza y Cambio</div>
<div className="small-muted">Fomentando cambio local con proyectos sostenibles</div>
</div>
</div>


<p className="small-muted" style={{marginTop:12}}>Dirección: Calle Ejemplo 123 · Ciudad · País<br/>RFC / ID fiscal: 000000000</p>
</div>


<div className="cols" style={{display:'flex',gap:40}}>
<div>
<h4>Explorar</h4>
<ul style={{listStyle:'none',marginTop:12}}>
<li><Link to="/about">Quiénes somos</Link></li>
<li><Link to="/programs">Programas</Link></li>
<li><Link to="/involve">Involúcrate</Link></li>
</ul>
</div>


<div>
<h4>Contacto</h4>
<p className="small-muted" style={{marginTop:12}}>hola@unionfuerzaycambio.org<br/>+52 55 0000 0000</p>
</div>
</div>
</div>


<div style={{borderTop:'1px solid rgba(16,24,40,0.04)',marginTop:24,paddingTop:18,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
<div className="small-muted">© {new Date().getFullYear()} Unión Fuerza y Cambio — Todos los derechos reservados</div>
<div className="small-muted">Política de privacidad · Términos</div>
</div>
</div>
</footer>
)
}
