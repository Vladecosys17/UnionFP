import React from 'react'


export default function GetInvolved(){
return (
<div className="section">
<div className="container">
<h2>Involúcrate</h2>
<p className="lead">Formas prácticas de apoyar: donaciones, voluntariado y alianzas.</p>


<div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginTop:18}}>
<div className="card">
<h4>Donar</h4>
<p className="small-muted">Apoya con donaciones puntuales o recurrentes para financiar proyectos.</p>
<div style={{marginTop:12}}><a className="btn-primary" href="#">Donar ahora</a></div>
</div>


<div className="card">
<h4>Voluntariado</h4>
<p className="small-muted">Únete a jornadas y capacitaciones como voluntario.</p>
<div style={{marginTop:12}}><a className="btn-ghost" href="#">Registrar</a></div>
</div>


<div className="card">
<h4>Alianzas</h4>
<p className="small-muted">Colabora como empresa o institución para ampliar impacto.</p>
<div style={{marginTop:12}}><a className="btn-ghost" href="#">Contactar</a></div>
</div>
</div>
</div>
</div>
)
}