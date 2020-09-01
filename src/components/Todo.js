import React from 'react';
import TodoTitle from './TodoTitle';
import InputBox from './InputBox';
import TaskList from './TaskList';
import { getDefaultStatus, toggleCurrentStatus } from './taskStatus';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Todo',
      taskList: [],
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.saveTask = this.saveTask.bind(this);
    this.updateTaskStatus = this.updateTaskStatus.bind(this);
  }

  saveTask(task) {
    this.setState(({ taskList }) => {
      const updatedTaskList = taskList.concat({
        task: task,
        status: getDefaultStatus(),
      });
      return { taskList: updatedTaskList };
    });
  }

  updateTaskStatus(taskId) {
    const updatedTaskList = this.state.taskList.slice();
    const currentStatus = updatedTaskList[taskId].status;
    updatedTaskList[taskId].status = toggleCurrentStatus(currentStatus);
    this.setState({ taskList: updatedTaskList });
  }

  updateTitle(title) {
    this.setState({ title });
  }

  render() {
    return (
      <div className='sub-container'>
        <TodoTitle title={this.state.title} onEnter={this.updateTitle} />
        <TaskList tasks={this.state.taskList} onClick={this.updateTaskStatus} />
        <InputBox onEnter={this.saveTask} className='new-task' value='' />
      </div>
    );
  }
}

export default Todo;
