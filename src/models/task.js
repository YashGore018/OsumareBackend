// src/models/task.js
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/tasks.json');

const readTasksFromFile = () => {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
};

const writeTasksToFile = (tasks) => {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
};

let tasks = readTasksFromFile();
let nextId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

const getAllTasks = () => tasks;

const getTaskById = (id) => tasks.find(task => task.id === id);

const createTask = (title, description) => {
    const newTask = { id: nextId++, title, description };
    tasks.push(newTask);
    writeTasksToFile(tasks);
    return newTask;
};

const updateTask = (id, title, description) => {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.title = title;
        task.description = description;
        writeTasksToFile(tasks);
    }
    return task;
};

const deleteTask = (id) => {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        writeTasksToFile(tasks);
        return true;
    }
    return false;
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};
