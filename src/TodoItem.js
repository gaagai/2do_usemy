import React from 'react';

function TodoItem({ task }) {
  return <div className='list-item'>{task.text}</div>;
}

export default TodoItem;
