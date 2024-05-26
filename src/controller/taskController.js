const taskService = require('../services/taskService');

const getAllTasks = (req, res) => {
    const tasks = taskService.getAllTasks();
    res.status(200).json(tasks);
};

const getTaskById = (req, res) => {
    const task = taskService.getTaskById(parseInt(req.params.id));
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json(task);
};

const createTask = (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }
    const newTask = taskService.createTask(title, description);
    res.status(201).json(newTask);
};

const updateTask = (req, res) => {
    const { title, description } = req.body;
    const updatedTask = taskService.updateTask(parseInt(req.params.id), title, description);
    if (!updatedTask) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json(updatedTask);
};

const deleteTask = (req, res) => {
    const success = taskService.deleteTask(parseInt(req.params.id));
    if (!success) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.status(204).send();
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};
