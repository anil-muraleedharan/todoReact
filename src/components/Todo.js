import React, { useState, useEffect } from 'react';
import TodoHeader from './TodoHeader';
import InputBox from './InputBox';
import TaskList from './TaskList';
import TodoAPI from '../todoAPI';

const Todo = (props) => {
  const [todoTitle, setTodoTitle] = useState('');
  const [taskList, setTaskList] = useState([]);

  const updateTaskList = ({ taskList }) => setTaskList(taskList);
  const updateTodoTitle = ({ todoTitle }) => setTodoTitle(todoTitle);
  const updateTodo = ({ todoTitle, taskList }) => {
    setTodoTitle(todoTitle);
    setTaskList(taskList);
  };

  useEffect(() => {
    TodoAPI.getTodoData().then(updateTodo);
  }, []);

  const saveTask = (task) => TodoAPI.addTask(task).then(updateTaskList);

  const updateTaskStatus = (taskId) =>
    TodoAPI.updateTaskStatus(taskId).then(updateTaskList);

  const updateTitle = (title) =>
    TodoAPI.updateTitle(title).then(updateTodoTitle);

  const deleteTask = (taskId) =>
    TodoAPI.deleteTask(taskId).then(updateTaskList);

  const deleteTodo = () => TodoAPI.resetTodo().then(updateTodo);

  return (
    <div className='sub-container'>
      <TodoHeader
        title={todoTitle}
        onEnter={updateTitle}
        onClick={deleteTodo}
      />
      <TaskList
        tasks={taskList}
        onClick={updateTaskStatus}
        deleteTask={deleteTask}
      />
      <InputBox onEnter={saveTask} className='new-task' value='' />
    </div>
  );
};

export default Todo;
