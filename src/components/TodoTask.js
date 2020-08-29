import React from 'react';

const TodoTask = ({ task, id, isDone, onClick }) => {
  const handleClick = () => onClick(id);
  const classes = `task ${isDone ? 'done' : 'not-done'}`;
  return (
    <p className={classes} onClick={handleClick}>
      {task}
    </p>
  );
};

export default TodoTask;
