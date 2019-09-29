import React from 'react';
import TodoItem from './TodoItem';

export default function Todos(props) {
  return props.todos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        todos={props.todos}
        setTodos={props.setTodos}
      />
    );
  });
}
