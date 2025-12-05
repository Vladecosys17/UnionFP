require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('express-async-errors');

const authRoutes = require('./src/routes/auth.routes');
const projectsRoutes = require('./src/routes/projects.routes');

const app = express();
app.use(helmet());
app.use(express.json());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/projects', projectsRoutes);

// simple error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Server error' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend listening on ${PORT}`));
