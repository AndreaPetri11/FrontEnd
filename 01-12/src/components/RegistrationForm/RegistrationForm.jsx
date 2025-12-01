import { useState } from "react";

// Componente principale del form di registrazione
export function RegistrationForm() {
  // Stato che contiene i valori dei campi del form
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Stato che contiene eventuali errori di validazione
  const [errors, setErrors] = useState({});

  // Stato che registra se un campo è stato "toccato" o è stato sottoposto a errore
  const [touched, setTouched] = useState({});

  // Stato che indica se il form è stato inviato con successo
  const [success, setSuccess] = useState(false);

  // Stato per mostrare il messaggio di successo
  const [showMessage, setShowMessage] = useState(false);

  // Stato per disabilitare il pulsante durante il verde di successo
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Funzione per aggiornare i valori dei campi
  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Rimuove l'errore relativo a questo campo mentre l'utente digita
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  // Aggiorna lo stato touched quando un campo perde il focus
  const handleBlur = (field) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  // Funzione che valida i campi del form
  const validateForm = () => {
    const newErrors = {};

    // --- Validazione Username ---
    if (!formData.username.trim()) {
      newErrors.username = "Username obbligatorio";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username deve essere almeno 3 caratteri";
    }

    // --- Validazione Email con regex ---
    /*
      La regex verifica che la email sia nel formato corretto:
      - ^[^\s@]+     → all'inizio della stringa ci deve essere almeno un carattere che NON sia spazio o '@'
      - @[^\s@]+     → deve contenere il simbolo '@' seguito da almeno un carattere che NON sia spazio o '@'
      - \.[^\s@]+$   → deve contenere un punto '.' seguito da almeno un carattere che NON sia spazio o '@', fino alla fine della stringa
      In pratica controlla che la email abbia un formato tipo: esempio@dominio.com
    */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email obbligatoria";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email non valida";
    }

    // --- Validazione Password con regex ---
    /*
      La regex verifica che la password:
      - Contenga almeno una lettera minuscola [a-z]
      - Contenga almeno una lettera maiuscola [A-Z]
      - Contenga almeno un numero \d
      - Contenga almeno un carattere speciale [!@#$%^&*]
      - Abbia una lunghezza minima di 6 caratteri
    */
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;
    if (!formData.password) {
      newErrors.password = "Password obbligatoria";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password deve avere almeno 6 caratteri, una maiuscola, una minuscola, un numero e un carattere speciale";
    }

    // --- Validazione Conferma Password ---
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Conferma password obbligatoria";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Le password non coincidono";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Gestione submit del form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Tutti i campi diventano "toccati" al primo submit
    setTouched({
      username: true,
      email: true,
      password: true,
      confirmPassword: true,
    });

    if (validateForm()) {
      const { confirmPassword, ...dataToLog } = formData;
      console.log("Dati del form validi:", dataToLog);

      setSuccess(true);
      setShowMessage(true);
      setIsSubmitting(true);

      // Dopo 2 secondi resetta il form
      setTimeout(() => {
        setFormData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        setErrors({});
        setTouched({});
        setSuccess(false);
        setShowMessage(false);
        setIsSubmitting(false);
      }, 2000);
    } else {
      alert("Form Non Valido!!!");
    }
  };

  // ESC pulisce il campo corrente
  const handleKeyDown = (event, field) => {
    if (event.key === "Escape") updateField(field, "");
  };

  // Determina lo stile dei campi
  const getFieldStyle = (field) => {
    // Se il form è valido, tutti i campi diventano verdi con glow
    if (success) {
      return {
        border: "2px solid green",
        transition: "box-shadow 0.5s ease, border 0.5s ease",
      };
    }

    // Se ci sono errori e il campo è "toccato", bordo rosso
    if (errors[field] && touched[field]) {
      return { border: "2px solid red", transition: "border 0.3s ease" };
    }

    // Altrimenti bordo grigio
    return { border: "1px solid gray", transition: "border 0.3s ease" };
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      {/* Messaggio di conferma verde */}
      {showMessage && (
        <div
          style={{
            color: "green",
            marginBottom: "10px",
            fontWeight: "bold",
            opacity: showMessage ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        >
          Registrazione completata con successo!
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div style={{ marginBottom: "10px" }}>
          <label>Username:</label>
          <input
            type="text"
            value={formData.username}
            onChange={(e) => updateField("username", e.target.value)}
            onBlur={() => handleBlur("username")}
            onKeyDown={(e) => handleKeyDown(e, "username")}
            style={{
              ...getFieldStyle("username"),
              width: "100%",
              padding: "5px",
            }}
          />
          {errors.username && touched.username && (
            <div style={{ color: "red" }}>{errors.username}</div>
          )}
        </div>

        {/* Email */}
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            onKeyDown={(e) => handleKeyDown(e, "email")}
            style={{ ...getFieldStyle("email"), width: "100%", padding: "5px" }}
          />
          {errors.email && touched.email && (
            <div style={{ color: "red" }}>{errors.email}</div>
          )}
        </div>

        {/* Password */}
        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => updateField("password", e.target.value)}
            onBlur={() => handleBlur("password")}
            onKeyDown={(e) => handleKeyDown(e, "password")}
            style={{
              ...getFieldStyle("password"),
              width: "100%",
              padding: "5px",
            }}
          />
          {errors.password && touched.password && (
            <div style={{ color: "red" }}>{errors.password}</div>
          )}
        </div>

        {/* Conferma Password */}
        <div style={{ marginBottom: "10px" }}>
          <label>Conferma Password:</label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => updateField("confirmPassword", e.target.value)}
            onBlur={() => handleBlur("confirmPassword")}
            onKeyDown={(e) => handleKeyDown(e, "confirmPassword")}
            style={{
              ...getFieldStyle("confirmPassword"),
              width: "100%",
              padding: "5px",
            }}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <div style={{ color: "red" }}>{errors.confirmPassword}</div>
          )}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Registrazione in corso..." : "Registrati"}
        </button>
      </form>
    </div>
  );
}
