import { useState } from "react";
import "./App.css";

import AddOnList from "./components/atoms/Input.jsx";
import { Aggiungi, Cancella } from "./components/atoms/Button.jsx";
import TodoList from "./components/organisms/TodoList.jsx";

function App() {
  const [action, setAction] = useState({ name: "", description: "" });
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!action.name || !action.description) return;
    setTodos([...todos, action]);
    setAction({ name: "", description: "" });
  };

  const deleteTodo = (i) => {
    const newTodos = [...todos];
    newTodos.splice(i, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <AddOnList action={action} onUpdateList={setAction} addTodo={addTodo} />
      <Aggiungi onClick={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
