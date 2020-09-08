import { getDefaultStatus, toggleCurrentStatus } from './components/taskStatus';

class TodoAPI {
  constructor() {
    this.todoTitle = 'Todo';
    this.currentId = 1;
    this.taskList = [];
  }

  getTaskList() {
    return this.taskList.slice();
  }

  getTodoTitle() {
    return this.todoTitle;
  }

  addTask(task) {
    this.taskList.push({
      id: this.currentId,
      task,
      status: getDefaultStatus(),
    });
    this.currentId++;
    return this.getTaskList();
  }

  updateTaskStatus(taskId) {
    const taskToUpdate = this.taskList.find((task) => task.id === taskId);
    taskToUpdate.status = toggleCurrentStatus(taskToUpdate.status);
    return this.getTaskList();
  }

  updateTitle(title) {
    this.todoTitle = title;
    return this.getTodoTitle();
  }

  deleteTask(taskId) {
    this.taskList = this.taskList.filter(({ id }) => id !== taskId);
    return this.getTaskList();
  }

  resetTodo() {
    this.todoTitle = 'Todo';
    this.currentId = 1;
    this.taskList = [];
  }
}

export default TodoAPI;
