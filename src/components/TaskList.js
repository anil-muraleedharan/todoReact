import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onClick, deleteTask }) => {
  const taskList = tasks.map(({ id, task, status }, index) => (
    <Task
      id={id}
      task={task}
      status={status}
      key={index}
      onClick={onClick}
      deleteTask={deleteTask}
    />
  ));
  return <div className='task-list'>{taskList}</div>;
};

export default TaskList;
