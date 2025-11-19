//dichiaro un array che conterrà gli utenti creati
      const utenti = [];

      document
        .getElementById("btnAggiungi")
        .addEventListener("click", function aggiungiUtente() {
          //al click del bottone scateno la funzione
          const name = capitalize(document.getElementById("nome").value);
          const age = document.getElementById("eta").value.trim();
          const job = capitalize(document.getElementById("professione").value);

          // assegno il nuovo utente ad uno spazio di memoria
          const nuovoUtente = creaUtente(name, age, job);

          // salvo lo spazio di memoria nell'array utenti con il push
          utenti.push(nuovoUtente);

          if (name.length > 3 && Number(age) > 0 && job.length > 3) {
            // creo uno spazio di memoria con l'arrow function così da far restituire una stringa che descriva l'utente
            const generaMessaggio = (utente) => {
              return `<strong>${utente.nome} </strong> ha <strong>${utente.eta}</strong> anni ed è classificato/a come <strong>${utente.categoria}</strong>`;
            };

            //se i dati soddisfano i requisiti che ho imposto
            // Creo un div vuoto con stile al quale assegno uno spazio di memoria dove inserirò i dati degli utenti
            const userCard = document.createElement("div");
            userCard.style.border = "1px solid #aaa";
            userCard.style.padding = "10px";
            userCard.style.margin = "10px 0";
            userCard.style.width = "200px";
            userCard.style.borderRadius = "5px";

            //modifico il DOM (con .innerHTML) inserendoci stringhe html
            //seguite dai i dati immessi dall'utente grazie al metodo template strings
            userCard.innerHTML = `
            <strong> Nome: </strong> ${name}
            <br>
            <strong> Età: </strong> ${age}
            <br>
            <strong> Professione: </strong> ${job}
            <br>
            <strong> Categoria: </strong> ${nuovoUtente.categoria}
            <br>
            <br>
            ${generaMessaggio(nuovoUtente)}
            `;
            //inserisco il tutto nel div lista
            document.getElementById("lista").appendChild(userCard);
            alert("Utente inserito con successo!");

            // e pulisco i campi
            document.getElementById("mioForm").reset();
          } else {
            alert("Inserire i campi correttamente"); //se i dati non soddisfano i requisiti che ho imposto
          }
        });

      //creo una funzione che crea utenti e categorizza la loro professione con uno switch
      function creaUtente(name, age, job = "non specificata") {
        console.log("Creazione nuovo utente...");

        const j = job.trim().toLowerCase();
        let categoria;
        
        switch (j) {
          case "studente":
          case "studentessa":
            categoria = "studente";
            break;
          case "developer" && "web developer":
          case "programmatore":
          case "sviluppatore":
            categoria = "developer";
            break;
          case "designer":
          case "grafico":
            categoria = "designer";
            break;
          default:
            categoria = "altro";
        }

        return {
          nome: name,
          eta: age,
          professione: job,
          categoria: categoria,
        };
      }

