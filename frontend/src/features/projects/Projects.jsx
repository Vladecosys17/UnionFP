import { useEffect, useState } from 'react';
import { projects } from '../../services/api';

export default function Projects({ token }) {
  const [list, setList] = useState([]);
  useEffect(()=> {
    if (!token) return;
    projects.list(token).then(setList).catch(console.error);
  }, [token]);

  return (
    <div>
      <h3>Proyectos</h3>
      <ul>{list.map(p => <li key={p.id}>{p.title}</li>)}</ul>
    </div>
  );
}
