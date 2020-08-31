import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onClick }) => {
  const taskList = tasks.map(({ task, status }, index) => (
    <Task
      task={task}
      status={status}
      key={index}
      id={index}
      onClick={onClick}
    />
  ));
  return <div className='task-list'>{taskList}</div>;
};

export default TaskList;
