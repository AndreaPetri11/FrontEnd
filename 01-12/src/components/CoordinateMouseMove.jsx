import React, { useState } from "react";

export function CoordinateMouseMove() {
  const [eventInfo, setEventInfo] = useState("Nessun evento ancora");

  const handleClick = (event) => {
    setEventInfo(
      `Cliccato alle coordinate: ${event.clientX}, ${event.clientY}`
    );
  };

  const handleMouseMove = (event) => {
    setEventInfo(`Mouse a: ${event.clientX}, ${event.clientY}`);
  };

  const handleMouseEnter = () => {
    setEventInfo("Mouse entrato nell'area!");
  };

  const handleMouseLeave = () => {
    setEventInfo("Mouse uscito dall'area!");
  };

  return (
    <div>
      <h3>Coordinate del mouse</h3>

      <button onClick={handleClick}>Clicca per coordinate</button>

      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: "600px",
          height: "600px",
          border: "2px solid blue",
          margin: "10px 0",
          backgroundColor: "#f0f0f0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3>
          Muovi il mouse qui sopra per vedere le coordinate in tempo reale
        </h3>
      </div>
      <br />
      <p>Info evento: {eventInfo}</p>
    </div>
  );
}
