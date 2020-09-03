import React from 'react';
import TodoHeader from './TodoHeader';
import InputBox from './InputBox';
import TaskList from './TaskList';
import { getDefaultStatus, toggleCurrentStatus } from './taskStatus';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Todo',
      currentTaskId: 1,
      taskList: [],
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.saveTask = this.saveTask.bind(this);
    this.updateTaskStatus = this.updateTaskStatus.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  saveTask(task) {
    this.setState(({ taskList, currentTaskId }) => {
      const updatedTaskList = taskList.concat({
        id: currentTaskId,
        task: task,
        status: getDefaultStatus(),
      });
      return { taskList: updatedTaskList, currentTaskId: currentTaskId + 1 };
    });
  }

  updateTaskStatus(taskId) {
    const updatedTaskList = this.state.taskList.slice();
    const taskIndex = updatedTaskList.findIndex((task) => task.id === taskId);
    const currentStatus = updatedTaskList[taskIndex].status;
    updatedTaskList[taskIndex].status = toggleCurrentStatus(currentStatus);
    this.setState({ taskList: updatedTaskList });
  }

  updateTitle(title) {
    this.setState({ title });
  }

  deleteTask(taskId) {
    this.setState(({ taskList }) => ({
      taskList: taskList.filter(({ id }) => id !== taskId),
    }));
  }

  deleteTodo() {
    this.setState((state) => ({
      title: 'Todo',
      currentTaskId: 1,
      taskList: [],
    }));
  }

  render() {
    return (
      <div className='sub-container'>
        <TodoHeader
          title={this.state.title}
          onEnter={this.updateTitle}
          onClick={this.deleteTodo}
        />
        <TaskList
          tasks={this.state.taskList}
          onClick={this.updateTaskStatus}
          deleteTask={this.deleteTask}
        />
        <InputBox onEnter={this.saveTask} className='new-task' value='' />
      </div>
    );
  }
}

export default Todo;
