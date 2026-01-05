// Carga automática de variables de entorno
import 'dotenv/config';
import dns from 'dns';

import express from 'express';
import logger from './config/logger.js';

// Middleware de errores
import { errorHandler } from './middleware/error.middleware.js';

// Rutas
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import projectRoutes from './routes/projects.routes.js';

dns.setDefaultResultOrder('ipv4first');

const app = express();
const PORT = process.env.PORT || 4000;

// ======================
// Middleware base
// ======================
app.use(express.json());

// ======================
// Rutas
// ======================
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/projects', projectRoutes);

// Healthcheck
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

// ======================
// Middleware de errores (SIEMPRE AL FINAL)
// ======================
app.use(errorHandler);

// ======================
// Manejo global de errores Node
// ======================
process.on('unhandledRejection', (reason) => {
  logger.error({ reason }, 'Unhandled Promise Rejection');
});

process.on('uncaughtException', (error) => {
  logger.fatal(error, 'Uncaught Exception');
  process.exit(1);
});

// ======================
// Start server
// ======================
app.listen(PORT, () => {
  logger.info(`Backend running on port ${PORT}`);
});

console.log('DATABASE_URL loaded:', !!process.env.DATABASE_URL);
