import React from 'react';
import Todo from './components/Todo';
import './App.css';

const App = () => (
  <div className='main-container'>
    <h2 className='header'>TODO</h2>
    <Todo />
  </div>
);

export default App;
