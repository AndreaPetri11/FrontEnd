import ".//TodoList.css";

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, i) => (
        <li key={i}>
          <strong>{todo.name}</strong> <br></br>
          {todo.description}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
