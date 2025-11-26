import "./Input.css";

function AddOnList({ action, onUpdateList, addTodo }) {
  const pressEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTodo();
    }
  };
  return (
    <div>
      <h3>Inserisci azione da fare alla lista</h3>

      <input
        type="text"
        value={action.name}
        onChange={(e) => onUpdateList({ ...action, name: e.target.value })}
        onKeyDown={pressEnter}
      />
      <span>Inserisci titolo azione</span>
      <br />

      <input
        type="text"
        value={action.description}
        onChange={(e) =>
          onUpdateList({ ...action, description: e.target.value })
        }
        onKeyDown={pressEnter}
      />
      <span>Inserisci descrizione azione</span>
    </div>
  );
}

export default AddOnList;
