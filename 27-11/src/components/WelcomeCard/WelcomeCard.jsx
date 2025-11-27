// 1. Import delle dipendenze
import { useState } from "react";

// 2. Definizione del componente (funzione)
function WelcomeCard({ name, age, isVip }) {
  // 3. Props in ingresso

  // 4. State interno (se necessario)
  const [isExpanded, setIsExpanded] = useState(false);

  // 5. Logica del componente
  const greeting = isVip ? `Benvenuto VIP, ${name}!` : `Ciao ${name}!`;
  const canVote = age >= 18;

  // 6. Event handlers
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  // 7. Rendering JSX
  return (
    <div className={`welcome-card ${isVip ? "vip" : "standard"}`}>
      <h2>{greeting}</h2>

      <button onClick={handleToggle}>
        {isExpanded ? "Nascondi dettagli" : "Mostra dettagli"}
      </button>

      {isExpanded && (
        <div className="details">
          <p>Età: {age} anni</p>
          <p>Può votare: {canVote ? "Sì" : "No"}</p>
          {isVip && <p>🌟 Membro VIP 🌟</p>}
        </div>
      )}
    </div>
  );
}

// 8. Export del componente
export default WelcomeCard;
