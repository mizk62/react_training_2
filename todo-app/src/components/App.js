import React from 'react';

import Form from './Form';
import Todo from './Todo';

let currentId = 0;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}/>

        <ul>
          {this.state.todos.map(({ id, text }) => (
            <li key={id}>
              <Todo text={text}/>
            </li>
          ))}
        </ul>

      </div>
    );
  }

  handleSubmit = text => {
    const newTodo ={
      id: currentId,
      text,
    }
    const newTodos = [...this.state.todos, newTodo]
    this.setState({ todos: newTodos})
    currentId++;
  }
}

export default App;
