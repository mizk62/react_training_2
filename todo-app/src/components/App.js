import React from 'react';

import Form from './Form';
import Todo from './Todo';

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
          {this.state.todos.map(({ text }, index) => (
            <li key={index}>
              <Todo text={text}/>
            </li>
          ))}
        </ul>

      </div>
    );
  }

  handleSubmit = text => {
    const newTodo ={
      text,
    }
    const newTodos = [...this.state.todos, newTodo]
    this.setState({ todos: newTodos})
  }
}

export default App;
