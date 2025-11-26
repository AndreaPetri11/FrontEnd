import "./Input.css";
import Button from "./Button";

function AddOnList({ action, onUpdateList, addTodo }) {
  return (
    <div>
      <h3>Inserisci azione da fare alla lista</h3>

      <span></span>
      <input
        type="text"
        value={action.name}
        onChange={(e) => onUpdateList({ ...action, name: e.target.value })}
      />
      <br />
      <br />
      <input
        type="text"
        value={action.description}
        onChange={(e) =>
          onUpdateList({ ...action, description: e.target.value })
        }
      />
    </div>
  );
}

export default AddOnList;
