import React from 'react';

const TodoTask = ({ task, isDone }) => (
  <p className={isDone ? 'done' : 'not-done'}>{task}</p>
);

export default TodoTask;
