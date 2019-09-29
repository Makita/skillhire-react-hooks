import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function TodoItem(props) {
  const toggleTodo = (e) => {
    props.setTodos(props.todos.map(todo => {
      todo.completed = todo.id === props.todo.id ? !todo.completed : todo.completed;

      return todo;
    }));
  };

  const itemStyle = {
    textDecoration: props.todo.completed ? 'line-through' : 'none',
  };

  return (
    <ListItem button onClick={toggleTodo} style={itemStyle}>
      <ListItemText primary={props.todo.task} />
    </ListItem>
  );
}
