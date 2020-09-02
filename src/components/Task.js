import React from 'react';

const Task = ({ task, id, status, onClick, deleteTask }) => {
  const handleClick = () => onClick(id);
  const handleDeleteButtonClick = () => deleteTask(id);
  const classes = `task ${status}`;
  return (
    <div className={classes}>
      <div className='task-container'>
        <div className='status' onClick={handleClick}></div>
        <div className='task-content' onClick={handleClick}>
          {task}
        </div>
      </div>
      <button className='delete-task' onClick={handleDeleteButtonClick}>
        x
      </button>
    </div>
  );
};

export default Task;
