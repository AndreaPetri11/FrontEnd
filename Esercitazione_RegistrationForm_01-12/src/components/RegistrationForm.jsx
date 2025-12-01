import { useState } from "react";

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    gender: "",
    newsletter: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Funzione per aggiornare i valori dei campi
  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleKeyDown = (event, field) => {
    const textFields = [
      "name",
      "lastName",
      "username",
      "email",
      "password",
      "confirmPassword",
    ];

    if (event.key === "Escape" && textFields.includes(field)) {
      updateField(field, "");
    }
  };

  const validateForm = () => {
    return (
      formData.name.trim() &&
      formData.lastName.trim() &&
      formData.username.trim() &&
      formData.email.includes("@") &&
      formData.password.length >= 6 &&
      formData.password === formData.confirmPassword &&
      formData.country &&
      formData.gender
    );
  };

  // Gestione submit del form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Form Non Valido!");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const { confirmPassword, ...dataToLog } = formData;
      console.log("Dati validi:", dataToLog);
      alert("Registrazione effettuata con successo!");

      // RESET DEL FORM
      setFormData({
        name: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        country: "",
        gender: "",
        newsletter: false,
      });

      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => updateField("name", e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, "name")}
        />
      </div>

      <div>
        <label>Cognome:</label>
        <input
          type="text"
          value={formData.lastName}
          onChange={(e) => updateField("lastName", e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, "lastName")}
        />
      </div>

      <div>
        <label>Username:</label>
        <input
          type="text"
          value={formData.username}
          onChange={(e) => updateField("username", e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, "username")}
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, "email")}
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) => updateField("password", e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, "password")}
        />
      </div>

      <div>
        <label>Conferma Password:</label>
        <input
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => updateField("confirmPassword", e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, "confirmPassword")}
        />
      </div>

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
          <option value="spain">Spagna</option>
          <option value="portugal">Portogallo</option>
          <option value="netherlands">Paesi Bassi</option>
          <option value="belgium">Belgio</option>
          <option value="switzerland">Svizzera</option>
          <option value="austria">Austria</option>
          <option value="sweden">Svezia</option>
          <option value="norway">Norvegia</option>
          <option value="denmark">Danimarca</option>
          <option value="finland">Finlandia</option>
        </select>
      </div>

      <div>
        <label>Genere:</label>
        <label>
          <input
            type="radio"
            value="male"
            checked={formData.gender === "male"}
            onChange={(e) => updateField("gender", e.target.value)}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="female"
            checked={formData.gender === "female"}
            onChange={(e) => updateField("gender", e.target.value)}
          />
          Female
        </label>
      </div>

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

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Registrazione in corso..." : "Registrati"}
      </button>
    </form>
  );
}
