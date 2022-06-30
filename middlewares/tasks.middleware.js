// Models
// const { Task } = require('../models/task.model');

// Utils
const { AppError } = require('../utils/appError.util');
// const { catchAsync } = require('../utils/catchAsync.util');

const tasksExists = (req, res, next) => {
  const { status } = req.params;

  const taskStatus = ['active', 'completed', 'late', 'cancelled'];

  const task = taskStatus.find((taskStatus) => taskStatus === status);

  if (!task) {
    return next(new AppError('Task not found', 404));
  }

  next();
};

module.exports = { tasksExists };
