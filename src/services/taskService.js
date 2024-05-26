const taskModel = require('../models/task');

const getAllTasks = () => taskModel.getAllTasks();

const getTaskById = (id) => taskModel.getTaskById(id);

const createTask = (title, description) => taskModel.createTask(title, description);

const updateTask = (id, title, description) => taskModel.updateTask(id, title, description);

const deleteTask = (id) => taskModel.deleteTask(id);

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};
