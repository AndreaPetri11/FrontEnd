import "./Buttons.css";

// Un componente React è come un mattoncino Lego
function Button({ text, onClick, className }) {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
