import React, { useState } from "react";
import ReactDOM from "react-dom";

import TodoList from "./components/TodoList";
import { useTodoList } from "./hooks/useTodoList";
import { useInput } from "./hooks/useInput";

import "./styles.css";

const todosData = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  state = {
    title: "This is a title",
    inputText: ""
  };

  updateInput = e => {
    this.setState({ inputText: e.target.value });
  };

  updateTitle = e => {
    e.preventDefault();
    this.setState({ title: this.state.inputText });
    this.setState({ inputText: "" });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <form onSubmit={this.updateTitle}>
          <input
            type="text"
            value={this.state.inputText}
            onChange={this.updateInput}
          />
          <button>Set Title</button>
        </form>
      </div>
    );
  }
}

const HooksApp = () => {
  const todoInput = useInput();
  const todoList = useTodoList(todosData, todoInput);

  // const updateTitle = e => {
  //   e.preventDefault();
  //   setTitle(titleInput.value);
  //   titleInput.setValue("");
  //   console.log("What is happening????");
  // };

  return (
    <div className="App">
      <h1>Todos Are So Fun</h1>
      <TodoList
        todos={todoList.todos}
        handleToggleComplete={todoList.toggleTodo}
      />
      <form onSubmit={todoList.addTodo}>
        <input
          type="text"
          value={todoInput.value}
          onChange={todoInput.updateValue}
        />
        <button>Set Title</button>
      </form>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<HooksApp />, rootElement);

// const obg = { oneProp: 'one', twoProp: 'two };

// const {
//   oneProp,
//   twoProp,
// } = obj;

// const oneProp = obj.oneProp
// const twoProp = obj.twoProp

// const arr = ['a', 'b', 'c'];

// const [a, b, c] = arr;
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]
