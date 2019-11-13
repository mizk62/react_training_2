import React from "react";

class Todo extends React.Component {
  render() {
    const {text} = this.props
    return (
      <div>
        <label>
          {text}
        </label>
      </div>
    );
  }
}

export default Todo;
