import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ visibleTodos, actions }) => {
  return (
    <ul className="todo-list">
      {visibleTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} actions={actions} />
      ))}
    </ul>
  );
};

export default TodoList;
