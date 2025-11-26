import "./Input.css";

function AddOnList({ action, onUpdateList, addPunto }) {
  const pressEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addPunto();
    }
  };
  return (
    <div>
      <h3>Inserisci azione da fare alla lista</h3>

      <input
        type="text"
        value={action.name}
        placeholder="Inserisci titolo qua"
        onChange={(e) => onUpdateList({ ...action, name: e.target.value })}
        onKeyDown={pressEnter}
      />

      <br />

      <input
        type="text"
        value={action.description}
        placeholder="Inserisci descrizione qua"
        onChange={(e) =>
          onUpdateList({ ...action, description: e.target.value })
        }
        onKeyDown={pressEnter}
      />

      <br />
      <input
        type="text"
        value={action.category}
        placeholder="Inserisci categoria qua"
        onChange={(e) => onUpdateList({ ...action, category: e.target.value })}
        onKeyDown={pressEnter}
      />
    </div>
  );
}

export default AddOnList;
