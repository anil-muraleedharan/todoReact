import React from 'react';
import TodoTitle from './TodoTitle';
import DeleteButton from './DeleteButton';

const TodoHeader = ({ title, onEnter, onClick }) => (
  <div className='todo-header'>
    <TodoTitle title={title} onEnter={onEnter} />
    <DeleteButton className='delete-todo' onClick={onClick} />
  </div>
);

export default TodoHeader;
