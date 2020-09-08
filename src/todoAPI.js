import { getDefaultStatus, toggleCurrentStatus } from './components/taskStatus';

let todoTitle = 'Todo';
let currentId = 1;
let taskList = [];

const getTaskList = () => taskList.slice();

const getTodoTitle = () => todoTitle;

const addTask = (task) => {
  taskList.push({
    id: currentId,
    task,
    status: getDefaultStatus(),
  });
  currentId++;
  return getTaskList();
};

const updateTaskStatus = (taskId) => {
  const taskToUpdate = taskList.find((task) => task.id === taskId);
  taskToUpdate.status = toggleCurrentStatus(taskToUpdate.status);
  return getTaskList();
};

const updateTitle = (title) => {
  todoTitle = title;
  return getTodoTitle();
};

const deleteTask = (taskId) => {
  taskList = taskList.filter(({ id }) => id !== taskId);
  return getTaskList();
};

const resetTodo = () => {
  todoTitle = 'Todo';
  currentId = 1;
  taskList = [];
};

export default {
  getTodoTitle,
  getTaskList,
  addTask,
  updateTaskStatus,
  updateTitle,
  deleteTask,
  resetTodo,
};
