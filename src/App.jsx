import "./App.css";
import { useState } from "react";
import { TodoItem } from "../components/TodoItem";
import { AddTodo } from "../components/AddTodo";

function App() {
  const initialTodos = [
    { id: 1, text: "lern react" },
    { id: 2, text: "create todo-app" },
    { id: 3, text: "to do deploy" },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const onAdd = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
    };
    setTodos([...todos, newTodo]);
  };

  const onDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <div>
        <h1>My Todo App</h1>
        <AddTodo onAdd={onAdd} />
        <div>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
