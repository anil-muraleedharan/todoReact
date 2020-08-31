import React from 'react';
import InputBox from './InputBox';
import TodoTask from './TodoTask';

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
    let { isDoing, isDone } = updatedTaskList[taskId].status;
    let status = { isDone: false, isDoing: true };
    if (isDoing) {
      status.isDone = true;
      status.isDoing = false;
    }
    if (isDone) {
      status.isDoing = false;
    }
    updatedTaskList[taskId].status = status;
    this.setState({ taskList: updatedTaskList });
  }

  saveTask(task) {
    const updatedTaskList = this.state.taskList.concat({
      task: task,
      status: { isDone: false, isDoing: false },
    });
    this.setState({ taskList: updatedTaskList });
  }

  render() {
    const tasks = this.state.taskList.map(({ task, status }, index) => (
      <TodoTask
        task={task}
        status={status}
        key={index}
        id={index}
        onClick={this.updateTaskStatus}
      />
    ));

    return (
      <div className='sub-container'>
        {tasks}
        <InputBox onEnter={this.saveTask} />
      </div>
    );
  }
}

export default Todo;
