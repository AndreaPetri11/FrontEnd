import "./Button.css";

export function Aggiungi({ onClick }) {
  return (
    <button className="btn-add" onClick={onClick}>
      Aggiungi
    </button>
  );
}

export function Cancella({ onClick }) {
  return (
    <button className="btn-delete" onClick={onClick}>
      ✕
    </button>
  );
}
