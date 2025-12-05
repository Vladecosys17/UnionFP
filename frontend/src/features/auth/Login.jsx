import { useState } from 'react';
import { auth } from '../../services/api';

export default function Login({ onLogin }) {
  const [email,setEmail] = useState(''); const [password,setPassword]=useState('');
  const [err,setErr] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await auth.login({ email, password });
      onLogin(res.token, res.user);
    } catch (e) {
      setErr(e.error || 'Error');
    }
  };

  return (
    <form onSubmit={submit}>
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Correo" />
      <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Contraseña" type="password" />
      <button>Entrar</button>
      {err && <div>{err}</div>}
    </form>
  );
}
