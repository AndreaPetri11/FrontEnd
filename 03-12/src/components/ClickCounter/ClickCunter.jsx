import { useState } from "react";
import { useEffect } from "react";

export function ClickCounter() {
  const [count, setCount] = useState(0);

  // Questo si esegue DOPO ogni render
  useEffect(() => {
    console.log("Componente renderizzato! Count è:", count);
    document.title = `Hai cliccato ${count} volte`;
  });

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px",
        border: "2px solid #930000ff",
        borderRadius: "15px",
        backgroundColor: "#f8f9fa",
      }}
    >
      <h2>Contatore: {count}</h2>
      <br></br>
      <button onClick={() => setCount(count + 1)}>Cliccami!</button>
      <br></br>
      <br></br>
      <p style={{ color: "#6c757d", fontSize: "14px" }}>
        Guarda il titolo della scheda del browser!
      </p>
    </div>
  );
}
