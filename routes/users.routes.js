const express = require('express');

const usersRouter = express.Router();

// Controllers
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/users.controller');

// Midlewares
const {
  createUserValidators,
} = require('../middlewares/validators.middleware');

const { userExists } = require('../middlewares/users.middleware');

// Endpoints
usersRouter.post('/', createUserValidators, createUser);

usersRouter.get('/', getAllUsers);

usersRouter.get('/:id', userExists, getUserById);

usersRouter.patch('/:id', userExists, updateUser);

usersRouter.delete('/:id', userExists, deleteUser);

module.exports = { usersRouter };
