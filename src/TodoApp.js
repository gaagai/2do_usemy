import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const InitialTasks = [
  { id: 1, text: 'ללמוד ריאקט', completed: false },
  { id: 2, text: 'לכבוש את העולם', completed: true },
  { id: 3, text: 'לסיים את הקורס', completed: false },
];

const TodoApp = () => {
  const [tasks, setTasks] = useState(InitialTasks);

  return (
    <div>
      <h1>רשימת מטלות:</h1>
      <TodoForm />
      <TodoList tasks={tasks} />
    </div>
  );
};

export default TodoApp;
