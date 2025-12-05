const pool = require('../db/pool');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'email y password requeridos' });

  const client = await pool.connect();
  try {
    const exists = await client.query('SELECT id FROM users WHERE email=$1', [email]);
    if (exists.rowCount) return res.status(409).json({ error: 'Email ya registrado' });

    const password_hash = await bcrypt.hash(password, 10);
    const result = await client.query(
      'INSERT INTO users (email, password_hash, name) VALUES ($1,$2,$3) RETURNING id, email, name',
      [email, password_hash, name]
    );
    const user = result.rows[0];
    const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
    res.json({ user, token });
  } finally {
    client.release();
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT id, email, password_hash, name FROM users WHERE email=$1', [email]);
    if (!result.rowCount) return res.status(401).json({ error: 'Credenciales inválidas' });

    const user = result.rows[0];
    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ error: 'Credenciales inválidas' });

    const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
    res.json({ user: { id: user.id, email: user.email, name: user.name }, token });
  } finally {
    client.release();
  }
};

module.exports = { register, login };
