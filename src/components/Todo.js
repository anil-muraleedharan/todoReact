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
    updatedTaskList[taskId].isDone = !updatedTaskList[taskId].isDone;
    this.setState({ taskList: updatedTaskList });
  }

  saveTask(task) {
    const updatedTaskList = this.state.taskList.concat({
      task: task,
      isDone: false,
    });
    this.setState({ taskList: updatedTaskList });
  }

  render() {
    const tasks = this.state.taskList.map(({ task, isDone }, index) => (
      <TodoTask
        task={task}
        isDone={isDone}
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
