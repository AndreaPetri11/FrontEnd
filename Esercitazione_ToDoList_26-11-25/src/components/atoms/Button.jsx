import "./Button.css";

export function Aggiungi({ onClick }) {
  return (
    <button className="btn-add" onClick={onClick}>
      Aggiungi alla lista
    </button>
  );
}

export function Cancella({ onClick }) {
  return (
    <button className="btn-delete" onClick={onClick}>
      X
    </button>
  );
}

export function CancellaTutto({ onClick }) {
  return (
    <button className="btn-deleteAll" onClick={onClick}>
      Cancella tutto
    </button>
  );
}
