import React from "react";

function Todo(props) {
  const {text} = props
  return (
    <div>
      {text}
    </div>
  );
}

export default Todo;
