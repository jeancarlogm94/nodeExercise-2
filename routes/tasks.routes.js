const express = require('express');

// Controllers
const {
  createTasks,
  getAllTasks,
  getTaskByStatus,
  upadateTasks,
  deleteTasks,
} = require('../controllers/tasks.controller');

// Middlewares
const {
  createTaskValidators,
} = require('../middlewares/validators.middleware');

const { tasksExists } = require('../middlewares/tasks.middleware');

const tasksRouter = express.Router();

// Endpoints
tasksRouter.get('/', createTaskValidators, createTasks);

tasksRouter.get('/', getAllTasks);

tasksRouter.post('/:status', tasksExists, getTaskByStatus);

tasksRouter.patch('/:id', tasksExists, upadateTasks);

tasksRouter.delete('/:id', tasksExists, deleteTasks);

module.exports = { tasksRouter };
