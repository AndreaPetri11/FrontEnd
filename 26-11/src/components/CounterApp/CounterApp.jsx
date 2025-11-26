import { useState } from "react";
import "./CounterApp.css";

function CounterApp() {
  // 🎯 SINGLE SOURCE OF TRUTH: tutto lo stato vive qui!
  const [count, setCount] = useState(0);

  // 📊 Calcoliamo tutto basandoci su questo unico stato
  const isEven = count % 2 === 0;
  const parity = isEven ? "Pari" : "Dispari";

  let status, color;
  if (count > 0) {
    status = "Positivo";
    color = "green";
  } else if (count < 0) {
    status = "Negativo";
    color = "red";
  } else {
    status = "Zero";
    color = "gray";
  }

  return (
    <div className="counter-app">
      <h1>CounterApp con React</h1>
      {/* 🎯 Tutti questi elementi si basano sullo stesso stato */}
      <h2 style={{ fontSize: "2em" }}>{count}</h2>
      <div>Parità: {parity}</div>
      <div style={{ color: color }}>Status: {status}</div>

      {/* 🎯 I pulsanti modificano SOLO lo stato centrale */}
      <button className="button" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default CounterApp;
