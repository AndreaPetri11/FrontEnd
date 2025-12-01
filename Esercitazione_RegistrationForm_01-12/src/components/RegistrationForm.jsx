import { useState } from "react";
import { useForm } from "../hooks/useForm";
import "./RegistrationForm.css";

export function RegistrationForm() {
  const {
    values: formData,
    setValue,
    reset,
  } = useForm({
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
      setValue(field, "");
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

      reset(); //reset del form tramite hook

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
          onChange={(e) => setValue("name", e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, "name")}
          placeholder="inserisci qua il tuo nome"
        />
      </div>
      <br />
      <div>
        <label>Cognome:</label>
        <input
          type="text"
          value={formData.lastName}
          onChange={(e) => setValue("lastName", e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, "lastName")}
          placeholder="inserisci qua il tuo cognome"
        />
      </div>
      <br />
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={formData.username}
          onChange={(e) => setValue("username", e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, "username")}
          placeholder="inserisci qua il tuo username"
        />
      </div>
      <br />
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setValue("email", e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, "email")}
          placeholder="inserisci qua la tua email"
        />
      </div>
      <br />
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) => setValue("password", e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, "password")}
          placeholder="inserisci una password valida"
        />
      </div>
      <br />
      <div>
        <label>Conferma Password:</label>
        <input
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => setValue("confirmPassword", e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, "confirmPassword")}
          placeholder="conferma la tua password"
        />
      </div>
      <br />
      <div>
        <label>Paese:</label>
        <select
          value={formData.country}
          onChange={(e) => setValue("country", e.target.value)}
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
      <br />
      <div>
        <label>Genere:</label>
        <label>
          <input
            type="radio"
            value="male"
            checked={formData.gender === "male"}
            onChange={(e) => setValue("gender", e.target.value)}
          />
          Maschio
        </label>
        <label>
          <input
            type="radio"
            value="female"
            checked={formData.gender === "female"}
            onChange={(e) => setValue("gender", e.target.value)}
          />
          Femmina
        </label>
        <label>
          <input
            type="radio"
            value="none"
            checked={formData.gender === "none"}
            onChange={(e) => setValue("gender", e.target.value)}
          />
          "Vengo dalla Luna"
        </label>
      </div>
      <br />
      <div>
        <label>
          <input
            type="checkbox"
            checked={formData.newsletter}
            onChange={(e) => setValue("newsletter", e.target.checked)}
          />
          Iscriviti alla newsletter
        </label>
      </div>
      <br />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Registrazione in corso..." : "Registrati"}
      </button>
    </form>
  );
}
