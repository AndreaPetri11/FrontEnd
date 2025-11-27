import "./TodoList.css";
import { Cancella } from "../atoms/Button.jsx";

function TodoList({ puntiLista, onDelete }) {
  return (
    <div>
      <h3>My To Do List:</h3>
      <ul>
        {puntiLista.map((punto, index) => (
          <li key={index}>
            <strong>Titolo: </strong> {punto.name} <br></br>
            <strong>Decrizione:</strong> {punto.description} <br></br>
            <strong>Categoria:</strong> <i>{punto.category}</i>
            <Cancella onClick={() => onDelete(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
