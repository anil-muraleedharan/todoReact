import React from 'react';

const TodoTask = ({ task, id, isDone, onClick }) => {
  const handleClick = () => onClick(id);
  const classes = `task ${isDone ? 'done' : 'not-done'}`;
  return (
    <div className={classes}>
      <div></div>
      <span onClick={handleClick}>{task}</span>
    </div>
  );
};

export default TodoTask;
