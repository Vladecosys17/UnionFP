import React from 'react'


const programs = [
{id:1,title:'Capacitación Digital',desc:'Cursos intensivos en herramientas digitales y empleo remoto.'},
{id:2,title:'Emprende Local',desc:'Mentoría y microcréditos para iniciativas comunitarias.'},
{id:3,title:'Salud y Prevención',desc:'Jornadas médicas y talleres de prevención.'}
]


export default function Programs(){
return (
<div className="section">
<div className="container">
<h2>Programas</h2>
<p className="lead">Programas diseñados para generar resultados sostenibles en la comunidad.</p>


<div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginTop:18}}>
{programs.map(p => (
<div key={p.id} className="card">
<h4>{p.title}</h4>
<p className="small-muted">{p.desc}</p>
<div style={{marginTop:12}}>
<a href="/involve" className="btn-ghost">Más información</a>
</div>
</div>
))}
</div>
</div>
</div>
)
}