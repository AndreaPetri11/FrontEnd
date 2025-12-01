import React, { useState } from "react";

export function CoordinateAlClick() {
  const [eventInfo, setEventInfo] = useState("Nessun evento ancora");

  const handleClick = (event) => {
    // 'event' è un SyntheticEvent, non un evento nativo del browser [2]
    console.log("Tipo evento:", event.type); // "click" [2, 4]
    console.log("Elemento cliccato:", event.target); // L'elemento HTML che ha scatenato l'evento [2, 4]

    const x = event.clientX; // Coordinata X del mouse relativa alla finestra [3, 4]
    const y = event.clientY; // Coordinata Y del mouse relativa alla finestra [3, 4]

    setEventInfo(`Cliccato alle coordinate: ${x}, ${y}`);
  };

  return (
    <div>
      <h3>Coordinate al click</h3>
      <button onClick={handleClick}>Clicca per vedere le coordinate</button>
      <p>Info evento: {eventInfo}</p>
    </div>
  );
}
