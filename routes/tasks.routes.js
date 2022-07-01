const express = require('express');

// Controllers
const {
  createTasks,
  getAllTasks,
  getTaskById,
  getTaskByStatus,
  upadateTasks,
  deleteTasks,
} = require('../controllers/tasks.controller');

// Middlewares
const {
  createTaskValidators,
} = require('../middlewares/validators.middleware');

const {
  tasksExists,
  taskStatusActive,
} = require('../middlewares/tasks.middleware');

const tasksRouter = express.Router();

// Endpoints
tasksRouter.post('/', createTaskValidators, createTasks);

tasksRouter.get('/', getAllTasks);

tasksRouter.get('/:id', tasksExists, taskStatusActive, getTaskByStatus);

tasksRouter.get('/:status', taskStatusActive, getTaskByStatus);

tasksRouter.patch('/:id', tasksExists, taskStatusActive, upadateTasks);

tasksRouter.delete('/:id', tasksExists, taskStatusActive, deleteTasks);

module.exports = { tasksRouter };
