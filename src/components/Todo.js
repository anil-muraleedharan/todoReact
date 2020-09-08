import React, { useState } from 'react';
import TodoHeader from './TodoHeader';
import InputBox from './InputBox';
import TaskList from './TaskList';
import TodoAPI from '../todoAPI';

const todoAPI = new TodoAPI();

const Todo = (props) => {
  const [todoTitle, setTodoTitle] = useState(todoAPI.getTodoTitle());
  const [taskList, setTaskList] = useState(todoAPI.getTaskList());

  const saveTask = (task) => setTaskList(todoAPI.addTask(task));

  const updateTaskStatus = (taskId) =>
    setTaskList(todoAPI.updateTaskStatus(taskId));

  const updateTitle = (title) => setTodoTitle(todoAPI.updateTitle(title));

  const deleteTask = (taskId) => setTaskList(todoAPI.deleteTask(taskId));

  const deleteTodo = () => {
    todoAPI.resetTodo();
    setTodoTitle(todoAPI.getTodoTitle());
    setTaskList(todoAPI.getTaskList());
  };

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
