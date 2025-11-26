import "./TodoList.css";
import { Cancella } from "../atoms/Button.jsx";

function TodoList({ todos, onDelete }) {
  return (
    <div>
      <h3>My To Do List:</h3>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            <strong>{todo.name}</strong> <br></br>
            {todo.description}
            <Cancella onClick={() => onDelete(i)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
