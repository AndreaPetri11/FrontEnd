import { useState } from "react";
import "./App.css";

import AddOnList from "./components/atoms/Input.jsx";
import Button from "./components/atoms/Button.jsx";
import TodoList from "./components/organisms/TodoList.jsx";

function App() {
  const [action, setAction] = useState({ name: "", description: "" });
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!action.name || !action.description) return;

    setTodos([...todos, action]);

    setAction({ name: "", description: "" });
  };

  return (
    <div>
      <AddOnList action={action} onUpdateList={setAction} appTodo={addTodo} />
      <Button onClick={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
