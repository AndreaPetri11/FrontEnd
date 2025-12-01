import { useState } from "react";

export function CompleteForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    age: "",
    country: "",
    gender: "",
    newsletter: false,
    interests: [],
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleInterestChange = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest) // Rimuovi se già presente
        : [...prev.interests, interest], // Aggiungi se non presente
    }));
  };

  return (
    <form>
      {/* Input text */}
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={formData.username}
          onChange={(e) => updateField("username", e.target.value)}
        />
      </div>
      <br />
      {/* Select dropdown */}
      <div>
        <label>Paese:</label>
        <select
          value={formData.country}
          onChange={(e) => updateField("country", e.target.value)}
        >
          <option value="">Seleziona un paese</option>
          <option value="italy">Italia</option>
          <option value="france">Francia</option>
          <option value="germany">Germania</option>
        </select>
      </div>
      <br />
      {/* Radio buttons */}
      <div>
        <label>Genere:</label>
        <label>
          <input
            type="radio"
            value="male"
            checked={formData.gender === "male"}
            onChange={(e) => updateField("gender", e.target.value)}
          />
          Maschio
        </label>
        <label>
          <input
            type="radio"
            value="female"
            checked={formData.gender === "female"}
            onChange={(e) => updateField("gender", e.target.value)}
          />
          Femmina
        </label>
      </div>
      <br />
      {/* Checkbox singolo */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={formData.newsletter}
            onChange={(e) => updateField("newsletter", e.target.checked)}
          />
          Iscriviti alla newsletter
        </label>
      </div>
      <br />
      {/* Checkbox multipli */}
      <div>
        <label>Interessi:</label>
        {["Sport", "Musica", "Viaggi", "Tecnologia"].map((interest) => (
          <label key={interest}>
            <input
              type="checkbox"
              checked={formData.interests.includes(interest)}
              onChange={() => handleInterestChange(interest)}
            />
            {interest}
          </label>
        ))}
      </div>

      {/* Anteprima dati */}
      <div
        style={{
          marginTop: "20px",
          backgroundColor: "#f5f5f5",
          padding: "10px",
        }}
      >
        <h4>Anteprima dati:</h4>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </form>
  );
}
