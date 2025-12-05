const express = require('express');
const pool = require('../db/pool');
const { authenticate } = require('../middleware/auth.middleware');
const router = express.Router();

router.use(authenticate);

router.get('/', async (req, res) => {
  const client = await pool.connect();
  try {
    const r = await client.query('SELECT * FROM projects WHERE user_id=$1 ORDER BY created_at DESC', [req.userId]);
    res.json(r.rows);
  } finally { client.release(); }
});

router.post('/', async (req, res) => {
  const { title, description } = req.body;
  const client = await pool.connect();
  try {
    const r = await client.query(
      'INSERT INTO projects (user_id, title, description) VALUES ($1,$2,$3) RETURNING *',
      [req.userId, title, description]
    );
    res.status(201).json(r.rows[0]);
  } finally { client.release(); }
});

module.exports = router;
