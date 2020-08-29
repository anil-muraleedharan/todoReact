import React from 'react';
import InputBox from './InputBox';
import TodoTask from './TodoTask';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
      taskToAdd: '',
    };
    this.updateTaskToAdd = this.updateTaskToAdd.bind(this);
    this.saveTask = this.saveTask.bind(this);
  }

  updateTaskToAdd(value) {
    this.setState({ taskToAdd: value });
  }

  saveTask() {
    const { taskList, taskToAdd } = this.state;
    const updatedTaskList = taskList.concat({ task: taskToAdd, isDone: false });
    this.setState({ taskList: updatedTaskList, taskToAdd: '' });
  }

  render() {
    const tasks = this.state.taskList.map(({ task, isDone }, index) => (
      <TodoTask task={task} isDone={isDone} key={index} />
    ));

    return (
      <div>
        <InputBox
          value={this.state.taskToAdd}
          onChange={this.updateTaskToAdd}
          onEnter={this.saveTask}
        />
        {tasks}
      </div>
    );
  }
}

export default Todo;
