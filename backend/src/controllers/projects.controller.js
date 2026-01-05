import { prisma } from '../config/prisma.js';

/*
  GET /projects
*/
export const getProjects = async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      where: {
        userId: req.userId
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return res.json(projects);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to fetch projects' });
  }
};

/*
  GET /projects/:id
*/
export const getProjectById = async (req, res) => {
  const id = Number(req.params.id);

  try {
    const project = await prisma.project.findFirst({
      where: {
        id,
        userId: req.userId
      }
    });

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    return res.json(project);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to fetch project' });
  }
};

/*
  POST /projects
*/
export const createProject = async (req, res) => {
  const { title, description } = req.body;

  try {
    const project = await prisma.project.create({
      data: {
        title,
        description,
        userId: req.userId
      }
    });

    return res.status(201).json(project);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to create project' });
  }
};

/*
  PUT /projects/:id
*/
export const updateProject = async (req, res) => {
  const id = Number(req.params.id);
  const { title, description } = req.body;

  try {
    const project = await prisma.project.updateMany({
      where: {
        id,
        userId: req.userId
      },
      data: {
        title,
        description
      }
    });

    if (project.count === 0) {
      return res.status(404).json({ error: 'Project not found' });
    }

    return res.json({ updated: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to update project' });
  }
};

/*
  DELETE /projects/:id
*/
export const deleteProject = async (req, res) => {
  const id = Number(req.params.id);

  try {
    const result = await prisma.project.deleteMany({
      where: {
        id,
        userId: req.userId
      }
    });

    if (result.count === 0) {
      return res.status(404).json({ error: 'Project not found' });
    }

    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to delete project' });
  }
};
