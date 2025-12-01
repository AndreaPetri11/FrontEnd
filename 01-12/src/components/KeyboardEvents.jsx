import React, { useState } from "react";

export function KeyboardEvents() {
  const [pressedKey, setPressedKey] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (event) => {
    setPressedKey(`Ultimo tasto: ${event.key}`);

    if (event.key === "Enter") {
      alert(`Hai premuto Enter con valore: ${event.target.value}`);
    }
  };

  const handleKeyDown = (event) => {
    // Esempi di tasti speciali
    if (event.key === "Escape") {
      setInputValue(""); // Pulisce l'input con ESC [7]
    }
  };

  return (
    <div>
      <h3>Eventi Tastiera</h3>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress} // [8]
        onKeyDown={handleKeyDown} // [8]
        style={{ width: "300px", height: "40px", fontSize: "18px" }}
        placeholder="Scrivi qui... Prova Enter o ESC"
      />

      <p>{pressedKey}</p>
      <p>Valore input: {inputValue}</p>
    </div>
  );
}
