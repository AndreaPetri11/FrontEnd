 //funzione per normalizzare i campi inseriti dall'utente es: "   MaRiO rOsSi   "--> "Mario Rossi"
      function capitalize(str) {
        return str
          .trim()
          .toLowerCase()
          .split(/\s+/) // separa qualunque numero di spazi
          .map((word) => word.replace(/^./, (c) => c.toUpperCase()))
          .join(" ");
      }