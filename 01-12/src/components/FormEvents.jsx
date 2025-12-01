import React, { useState } from "react";

export function FormEvents() {
  const [formData, setFormData] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Impedisce il comportamento predefinito (ricarica pagina)

    console.log("Form inviato con dati:", formData);
    setSubmitted(true);

    // Reset dopo 3 secondi
    setTimeout(() => {
      setSubmitted(false);
      setFormData("");
    }, 3000);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setFormData(""); // ✔️ correggi così
    }
  };

  return (
    <div>
      <h3>Eventi Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
          style={{ width: "300px", height: "40px", fontSize: "18px" }}
          placeholder="Inserisci qualcosa..."
          required
          onKeyDown={handleKeyDown}
        />
        <button type="submit">Invia Form</button>
      </form>

      {submitted && (
        <p style={{ color: "green" }}>✅ Form inviato! Dati: "{formData}"</p>
      )}
    </div>
  );
}
