import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks }) {
  return (
    <div className='list'>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TodoList;
