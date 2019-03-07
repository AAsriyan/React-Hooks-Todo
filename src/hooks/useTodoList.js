import React, { useState } from "react";

export const useTodoList = (todosData, todoInput) => {
  const [todos, setTodos] = useState(todosData);

  const addTodo = e => {
    e.preventDefault();

    const newTodo = {
      task: todoInput.value,
      id: Date.now(),
      completed: false
    };

    setTodos([...todos, newTodo]);
    todoInput.setValue("");
  };

  const toggleTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) return { ...todo, completed: !todo.completed };
        return todo;
      })
    );
  };

  return {
    todos,
    addTodo,
    toggleTodo
  };
};
