const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000/api/v1';

async function request(path, opts = {}) {
  const res = await fetch(API_BASE + path, {
    headers: { 'Content-Type': 'application/json', ...(opts.headers || {}) },
    credentials: 'include',
    ...opts
  });
  if (!res.ok) {
    const err = await res.json().catch(()=>({ error: res.statusText }));
    throw err;
  }
  return res.json();
}

export const auth = {
  register: (data) => request('/auth/register', { method: 'POST', body: JSON.stringify(data) }),
  login: (data) => request('/auth/login', { method: 'POST', body: JSON.stringify(data) })
};

export const projects = {
  list: (token) => request('/projects', { headers: { Authorization: `Bearer ${token}` } }),
  create: (body, token) => request('/projects', { method: 'POST', body: JSON.stringify(body), headers: { Authorization: `Bearer ${token}` } })
};
