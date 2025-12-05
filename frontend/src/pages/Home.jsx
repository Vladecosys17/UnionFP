import React from 'react'
import Hero from '../components/Hero'


export default function Home(){
return (
<div>
<Hero />


<section className="section">
<div className="container">
<h2>Impacto reciente</h2>
<p className="lead">Resultados cuantificables de nuestros proyectos durante el último año.</p>


<div className="grid" style={{marginTop:18}}>
<div className="card">
<h3>1,200+</h3>
<p className="small-muted">Personas capacitadas</p>
</div>
<div className="card">
<h3>85</h3>
<p className="small-muted">Proyectos apoyados</p>
</div>
<div className="card">
<h3>24</h3>
<p className="small-muted">Comunidades beneficiadas</p>
</div>
</div>
</div>
</section>


<section className="section">
<div className="container">
<h2>Nuestros pilares</h2>
<div className="grid" style={{marginTop:16}}>
<div className="card">
<h4>Educación</h4>
<p className="small-muted">Programas de formación técnica y habilidades digitales.</p>
</div>
<div className="card">
<h4>Emprendimiento</h4>
<p className="small-muted">Acompañamiento para formalizar microempresas.</p>
</div>
<div className="card">
<h4>Salud</h4>
<p className="small-muted">Campañas de prevención y acceso a servicios básicos.</p>
</div>
</div>
</div>
</section>
</div>
)
}