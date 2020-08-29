import React from 'react';

const TodoTask = ({ task, isDone }) => (
  <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{task}</p>
);

export default TodoTask;
