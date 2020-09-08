import React, { useState } from 'react';
import TodoHeader from './TodoHeader';
import InputBox from './InputBox';
import TaskList from './TaskList';
import TodoAPI from '../todoAPI';

const Todo = (props) => {
  const [todoTitle, setTodoTitle] = useState(TodoAPI.getTodoTitle());
  const [taskList, setTaskList] = useState(TodoAPI.getTaskList());

  const saveTask = (task) => setTaskList(TodoAPI.addTask(task));

  const updateTaskStatus = (taskId) =>
    setTaskList(TodoAPI.updateTaskStatus(taskId));

  const updateTitle = (title) => setTodoTitle(TodoAPI.updateTitle(title));

  const deleteTask = (taskId) => setTaskList(TodoAPI.deleteTask(taskId));

  const deleteTodo = () => {
    TodoAPI.resetTodo();
    setTodoTitle(TodoAPI.getTodoTitle());
    setTaskList(TodoAPI.getTaskList());
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
