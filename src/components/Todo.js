import React from "react";

import "./todo.css";

const Todo = props => {
  return (
    <div
      className="todo"
      style={props.todo.completed ? { textDecoration: "line-through" } : null}
      onClick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};

export default Todo;
