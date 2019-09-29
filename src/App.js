import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Container>
        <List component="Todos">
          <Todos todos={todos} setTodos={setTodos} />
        </List>
        <AddTodo todos={todos} setTodos={setTodos} />
      </Container>
    </div>
  );
}

export default App;
