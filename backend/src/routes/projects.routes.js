import express from 'express';

// Middleware
import { authenticate } from '../middleware/auth.middleware.js';

// controllers
import { 
  getProjects, 
  getProjectById,
  createProject,
  updateProject,
  deleteProject
   } from '../controllers/projects.controller.js';

const router = express.Router();

router.use(authenticate);

// Obtener todos
router.get('/', authenticate, getProjects);
// Obtener por ID
router.get('/:id', authenticate, getProjectById);
// Crear
router.post('/', authenticate, createProject);
// Actualizar
router.put('/:id', authenticate, updateProject);
// Eliminar
router.delete('/:id', authenticate, deleteProject);

export default router;
