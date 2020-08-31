import React from 'react';
import InputBox from './InputBox';
import TaskList from './TaskList';
import { getDefaultStatus, toggleCurrentStatus } from './taskStatus';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
    };
    this.updateTaskStatus = this.updateTaskStatus.bind(this);
    this.saveTask = this.saveTask.bind(this);
  }

  updateTaskStatus(taskId) {
    const updatedTaskList = this.state.taskList.slice();
    const currentStatus = updatedTaskList[taskId].status;
    updatedTaskList[taskId].status = toggleCurrentStatus(currentStatus);
    this.setState({ taskList: updatedTaskList });
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

  render() {
    return (
      <div className='sub-container'>
        <TaskList tasks={this.state.taskList} onClick={this.updateTaskStatus} />
        <InputBox onEnter={this.saveTask} />
      </div>
    );
  }
}

export default Todo;
