import React, { useState } from 'react';
import TodoHeader from './TodoHeader';
import InputBox from './InputBox';
import TaskList from './TaskList';
import { getDefaultStatus, toggleCurrentStatus } from './taskStatus';

const Todo = (props) => {
  const [todoTitle, setTodoTitle] = useState('Todo');
  const [currentTaskId, setCurrentTaskId] = useState(1);
  const [taskList, setTaskList] = useState([]);

  const saveTask = (task) => {
    setTaskList(
      taskList.concat({
        id: currentTaskId,
        task: task,
        status: getDefaultStatus(),
      })
    );
    setCurrentTaskId(currentTaskId + 1);
  };

  const updateTaskStatus = (taskId) => {
    const updatedTaskList = taskList.slice();
    const taskIndex = updatedTaskList.findIndex((task) => task.id === taskId);
    const currentStatus = updatedTaskList[taskIndex].status;
    updatedTaskList[taskIndex].status = toggleCurrentStatus(currentStatus);
    setTaskList(updatedTaskList);
  };

  const updateTitle = (title) => setTodoTitle(title);

  const deleteTask = (taskId) =>
    setTaskList(taskList.filter(({ id }) => id !== taskId));

  const deleteTodo = () => {
    setTodoTitle('Todo');
    setCurrentTaskId(1);
    setTaskList([]);
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
