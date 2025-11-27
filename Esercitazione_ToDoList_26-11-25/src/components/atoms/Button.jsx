import "./Button.css";

export default function Aggiungi({ onClick }) {
  return (
    <button className="btn-add" onClick={onClick}>
      Aggiungi alla lista
    </button>
  );
}

export default function Cancella({ onClick }) {
  return (
    <button className="btn-delete" onClick={onClick}>
      X
    </button>
  );
}

export default function CancellaTutto({ onClick }) {
  return (
    <button className="btn-deleteAll" onClick={onClick}>
      Cancella tutto
    </button>
  );
}
