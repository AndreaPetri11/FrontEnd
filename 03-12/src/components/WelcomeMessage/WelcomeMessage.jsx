import { useEffect } from "react";
import { useState } from "react";

export function WelcomeMessage() {
  const [showMessage, setShowMessage] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // Questo si esegue SOLO una volta, quando il componente appare
  useEffect(() => {
    console.log("🎉 Componente montato per la prima volta!");

    // Simula un caricamento
    setTimeout(() => {
      setShowMessage(true);
      setCurrentTime(new Date().toLocaleTimeString());
    }, 3000);

    // Potremmo anche fare una chiamata API qui
    // fetchUserData();
  }, []); // Array vuoto = esegue solo al mount

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px",
        border: "2px solid #565656ff",
        borderRadius: "15px",
        backgroundColor: "#f8f9fa",
      }}
    >
      <h2>Benvenuto nella nostra app! 👋</h2>

      {showMessage ? (
        <div>
          <p style={{ color: "#28a745", fontSize: "18px" }}>
            ✅ Caricamento completato!
          </p>
          <p>Ora locale: {currentTime}</p>
        </div>
      ) : (
        <p style={{ color: "#6c757d" }}>⏳ Caricamento in corso...</p>
      )}
    </div>
  );
}
