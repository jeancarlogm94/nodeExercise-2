// Models
const { Task } = require('../models/task.model');

// Utils
const { AppError } = require('../utils/appError.util');
const { catchAsync } = require('../utils/catchAsync.util');

const tasksExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const tasks = await Task.findOne({ where: { id } });

  if (!tasks) {
    return next(new AppError('Task not found', 404));
  }
  req.task = tasks;
  next();
});

const taskStatusActive = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const tasks = await Task.findOne({ where: { id, status: 'active' } });

  if (!tasks) {
    return next(new AppError('Task status is not active', 404));
  }
  req.task = tasks;
  next();
});

// const tasksActive = (req, res, next) => {
//   const { status } = req.params;

//   const taskStatus = ['active', 'completed', 'late', 'cancelled'];

//   const task = taskStatus.find((taskStatus) => taskStatus === status);

//   if (!task) {
//     return next(new AppError('Task not found', 404));
//   }

//   next();
// };

module.exports = { tasksExists, taskStatusActive };
