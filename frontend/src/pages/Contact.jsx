import React, {useState} from 'react'


export default function Contact(){
const [success, setSuccess] = useState(false)
const submit = (e) => { e.preventDefault(); setSuccess(true) }


return (
<div className="section">
<div className="container" style={{maxWidth:720}}>
<h2>Contacto</h2>
<p className="lead">Escríbenos para solicitar información, proponer alianzas o confirmar participación en programas.</p>


<form onSubmit={submit} style={{marginTop:18,display:'grid',gap:12}}>
<input className="input" placeholder="Nombre" required />
<input className="input" placeholder="Correo electrónico" type="email" required />
<input className="input" placeholder="Teléfono (opcional)" />
<textarea className="input textarea" placeholder="Mensaje" required />
<div style={{display:'flex',gap:12}}>
<button className="btn-primary" type="submit">Enviar</button>
<button className="btn-ghost" type="reset">Limpiar</button>
</div>
{success && <div style={{marginTop:12}} className="card">Gracias. Tu mensaje fue enviado.</div>}
</form>
</div>
</div>
)
}