const sendPostFetchReq = (url) =>
  fetch(url, { method: 'post' }).then((res) => res.json());

const getTodoData = () => fetch('api/todoData').then((res) => res.json());

const addTask = (task) => sendPostFetchReq(`api/addTask/${task}`);

const updateTaskStatus = (taskId) =>
  sendPostFetchReq(`api/updateTaskStatus/${taskId}`);

const updateTitle = (title) => sendPostFetchReq(`api/updateTitle/${title}`);

const deleteTask = (taskId) => sendPostFetchReq(`api/deleteTask/${taskId}`);

const resetTodo = () => sendPostFetchReq('api/resetTodo');

export default {
  getTodoData,
  addTask,
  updateTaskStatus,
  updateTitle,
  deleteTask,
  resetTodo,
};
