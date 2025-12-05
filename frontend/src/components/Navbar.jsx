import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(){
return (
<header className="container navbar">
<div className="brand">
<div className="logo">UFC</div>
<div>
<div style={{fontWeight:700}}>Unión Fuerza y Cambio</div>
<div className="small-muted">Asociación civil sin fines de lucro</div>
</div>
</div>


<nav className="nav-links">
<Link to="/">Inicio</Link>
<Link to="/about">Quiénes somos</Link>
<Link to="/programs">Programas</Link>
<Link to="/involve">Involúcrate</Link>
<Link to="/contact">Contacto</Link>
</nav>


<div style={{display:'flex',gap:12}}>
<Link to="/involve" className="btn-primary">Donar</Link>
<Link to="/contact" className="btn-ghost">Contacto</Link>
</div>
</header>
)
}