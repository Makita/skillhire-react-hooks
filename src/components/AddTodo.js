import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';

export default function AddTodo(props) {
  const [inputValue, changeValue] = useState('');
  const onKeyUp = (e) => {
    e.preventDefault();

    if (e.which === 13) {
      const lastId = props.todos.length ? props.todos[props.todos.length - 1].id : 1;

      props.setTodos([...props.todos, { id: lastId + 1, task: inputValue, completed: false }]);
      changeValue('');
    }
  };

  return (
    <div>
      <TextField
        id="add-todo"
        label="New Todo"
        className="input-field"
        value={inputValue}
        onChange={(e) => changeValue(e.target.value)}
        onKeyUp={onKeyUp}
      />
    </div>
  );
}
