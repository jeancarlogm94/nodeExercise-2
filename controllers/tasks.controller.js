// Models
const { Task } = require('../models/task.model');

// Utils
const { catchAsync } = require('../utils/catchAsync.util');

const createTasks = catchAsync(async (req, res, next) => {
  const { title, userId, limitDate } = req.body;

  const newTask = await Task.create({
    title,
    userId,
    limitDate,
  });

  res.status(201).json({
    status: 'success',
    newTask,
  });
});

const getAllTasks = catchAsync(async (req, res, next) => {
  const tasks = await Task.findAll();

  res.status(200).json({
    status: 'success',
    tasks,
  });
});

const getTaskByStatus = catchAsync(async (req, res, next) => {
  const { task } = req;

  res.status(200).json({
    status: 'success',
    task,
  });
});

const upadateTasks = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const task = await Task.findOne({ where: id });
  const finishDate = new Date();
  const limitDate = task.limitDate;

  if (finishDate.getTime() - limitDate.getTime() < 0) {
    await task.update({
      finishDate: finishDate,
      status: 'complete',
    });
  } else {
    await task.update({
      finishDate: finishDate,
      status: 'late',
    });
  }

  res.status(204).json({
    status: succes,
    task,
  });
});

const deleteTasks = catchAsync(async (req, res, next) => {
  const { task } = req;

  await task.update({ status: 'deleted' });

  res.status(204).json({ status: 'success' });
});

module.exports = {
  createTasks,
  getAllTasks,
  getTaskByStatus,
  upadateTasks,
  deleteTasks,
};
