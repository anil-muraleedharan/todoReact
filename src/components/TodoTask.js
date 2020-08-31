import React from 'react';

const getStatusClassName = ({ isDoing, isDone }) => {
  if (isDone) {
    return 'done';
  }
  return isDoing ? 'doing' : 'todo';
};

const TodoTask = ({ task, id, status, onClick }) => {
  const handleClick = () => onClick(id);
  const classes = `task ${getStatusClassName(status)}`;
  return (
    <div className={classes}>
      <div></div>
      <span onClick={handleClick}>{task}</span>
    </div>
  );
};

export default TodoTask;
