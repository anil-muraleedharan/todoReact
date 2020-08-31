import React from 'react';

const Task = ({ task, id, status, onClick }) => {
  const handleClick = () => onClick(id);
  const classes = `task ${status}`;
  return (
    <div className={classes}>
      <div></div>
      <span onClick={handleClick}>{task}</span>
    </div>
  );
};

export default Task;
