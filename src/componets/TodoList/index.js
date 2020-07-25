import React from 'react';

import TodoListItem from '../TodoListItem';

import './index.css';

const TodoList = ({ todos, onToggleImportant, onToggleDone, onDelete }) => {
  const elems = todos.map(({ id, ...item }) => (
    <li className="list-group-item" key={id}>
      <TodoListItem
        onDelete={() => onDelete(id)}
        onToggleImportant={() => onToggleImportant(id)}
        onToggleDone={() => onToggleDone(id)}
        {...item}
      />
    </li>
  ));

  return (
    <ul className='list-group todo-list'>
      {elems}
    </ul>
  );
}

export default TodoList;
