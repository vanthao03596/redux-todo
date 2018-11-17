import React from 'react';
import classnames from 'classnames';

const TodoItem = ({ todo, actions }) => {
  let listClass = classnames({
    completed: todo.completed,
    view: !todo.completed
  });
  return (
    <li className={listClass}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => actions.completeTodo(todo.id)}
        />
        <label> {todo.text} </label>
        <button className="destroy"> </button>
      </div>{' '}
      <input className="edit" />
    </li>
  );
};

export default TodoItem;
