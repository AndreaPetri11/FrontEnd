// script.js
const btn = document.getElementById('run');
const out = document.getElementById('output');

// Utility per mostrare il risultato di ogni esempio
function log(title, content) {
  out.textContent += `-- ${title} --\n`;
  out.textContent += (typeof content === 'string' ? content : JSON.stringify(content, null, 2)) + '\n\n';
}

btn.addEventListener('click', () => {
  out.textContent = '';
  // Qui inizieremo a incastrare gli esempi

/* 1. Operatore Ternario

  const numero = Math.floor(Math.random() * 10); // VEDI APPUNTI IN FONDO
  const esito = (numero % 2 === 0)
    ? 'pari'
    : 'dispari';
  log('Operatore ternario', `Il numero scelto casualmente ${numero} è ${esito}`);
  */

/* Math.random()

- **Cosa fa**: Genera un numero decimale pseudo-casuale
- **Range**: Da 0 (incluso) a 1 (escluso)
- **Esempi**: `0.7834592`, `0.1234567`, `0.9999999`
- **Non può mai essere**: `1.0` esatto o numeri negativi
*/

/* Math.floor()**

- **Cosa fa**: Arrotonda verso il basso (verso l'infinito negativo)
- **Differenza da Math.round()**: Non arrotonda al più vicino, sempre verso il basso
- **Con numeri negativi**: Math.floor(-2.8) = `3` (non `2`)
*/

/* Combinazione Math.floor(Math.random() * n)**

- **Formula**: Math.floor(Math.random() * n) genera numeri da `0` a `n-1`
- **Nel tuo caso**: Math.floor(Math.random() * 10) genera `0, 1, 2, 3, 4, 5, 6, 7, 8, 9`
- **Per range personalizzato**: Math.floor(Math.random() * (max - min + 1)) + min
*/

/* ALTRO ESEMPIO PER NUMERO CASUALE

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
*/

/* 2. REST OPERATOR (i tre puntini ...)

  log("REST OPERATOR SPIEGAZIONE", "I tre puntini (...) raccolgono tutti i parametri in un array");

  // === ECCO COME FUNZIONA STEP BY STEP ===

// Quando scrivi una funzione normale:
  function somma(a, b, c) {
    return a + b + c;
  }
    
  Puoi chiamarla solo con esattamente 3 numeri: somma(1, 2, 3)
  
// Ma con il REST OPERATOR:
  function sommaRest(...numeri) {};
    /*  log("MAGIA DEL REST OPERATOR", "I numeri che hai passato sono diventati un array!");
        log("Cosa ricevo", `Array di numeri: [${numeri}]`);
        log("Da dove vengono?", "Dalla chiamata della funzione!");

    let totale = 0;
    for (let num of numeri) {
      totale += num;
    }
    return totale;
  }

// === ECCO DOVE "NASCONO" I NUMERI ===
  log("CHIAMATA 1", "sommaRest(10, 20) - passo 2 numeri");
  const risultato1 = sommaRest(10, 20); // QUI passi 10, 20
  log("Risultato", risultato1);

  log("CHIAMATA 2", "sommaRest(1, 2, 3, 4, 5) - passo 5 numeri");
  const risultato2 = sommaRest(1, 2, 3, 4, 5); // QUI passi 1, 2, 3, 4, 5
  log("Risultato", risultato2);

  log("CHIAMATA 3", "sommaRest(100) - passo 1 numero solo");
  const risultato3 = sommaRest(100); // QUI passi solo 100
  log("Risultato", risultato3);

 // Esempio con stringhe
  function creaFrase(...parole) {
    log("Parole ricevute", `Array: [${parole}]`);

    //SE NON SEI ALLA POSIZIONE INIZIALE 0 O ALL'ULTIMA POSIZIONE-->AGGIUNGI " - "
    let frase = "";
    for (let i = 0; i < parole.length; i++) {
      frase += parole[i];
      if (i < parole.length - 1) {
        frase += " - ";
      }
    }
    return frase;
  }

  const questaFrase = creaFrase("Ciao", "mondo", "JavaScript");
  log("Frase creata", questaFrase);

*/

/* 3. SPREAD OPERATOR - IL CONTRARIO DEL REST ===

  log("SPREAD OPERATOR", "I tre puntini (...) ESPANDONO un array in argomenti separati");

  // Abbiamo un array di numeri
  const arrayNumeri = [10, 20, 30, 40];
  log("Array originale", arrayNumeri);

  // SENZA spread: passiamo tutto l'array come UN singolo parametro
  log("SENZA SPREAD", "Se passo l'array direttamente:");
  const risultatoSbagliato = sommaRest(arrayNumeri);
  log("Risultato sbagliato", risultatoSbagliato); // NaN perché cerca di sommare un array

  // CON spread: l'array viene ESPANSO in argomenti separati
  log("CON SPREAD", "Se uso ...array, viene espanso:");
  const risultatoCorretto = sommaRest(...arrayNumeri); // ...arrayNumeri diventa 10, 20, 30, 40
  log("Risultato corretto", risultatoCorretto);

  // Altro esempio con array di stringhe
  const paroleArray = ["JavaScript", "è", "fantastico"];
  log("Array di parole", paroleArray);

  const fraseSpread = creaFrase(...paroleArray); // SPREAD - espande l'array
  log("Frase con spread", fraseSpread);
});
*/

/* 4. DESTRUCTURING - ESTRARRE VALORI DA ARRAY E OGGETTI ===

*/

  log("DESTRUCTURING", "Estrarre valori da array e oggetti in modo semplice");

  log("DESTRUCTURING DI ARRAY");
  const colori = ["rosso", "verde", "blu", "giallo", "viola"];
  log("Array originale", colori);

  // Metodo tradizionale (NOIOSO!)
  const primo = colori[0];
  const secondo = colori[1];
  const terzo = colori[2];
  log("Metodo tradizionale", `primo: ${primo}, secondo: ${secondo}, terzo: ${terzo}`);

  // DESTRUCTURING (Moderno!)
  const [primoColore, secondoColore, terzoColore] = colori;
  log("Con destructuring", `primo: ${primoColore}, secondo: ${secondoColore}, terzo: ${terzoColore}`);

  // DESTRUCTURING con REST
  const [principale, secondario, ...altriColori] = colori;
  log("Destructuring + REST", {
    "Colore principale come stringa": principale,
    "Colore secondario come stringa": secondario,
    "Altri colori come un'Array": altriColori,
  });
//-----------------------------------------------------------------------
  log("DESTRUCTURING DI OGGETTI");
  const persona = {
    nome: "Mario",
    cognome: "Rossi",
    eta: 30,
    citta: "Roma",
    lavoro: "Programmatore",
  };
  log("Oggetto originale", persona);

  // Metodo tradizionale (NOIOSO!)
  const nomePersona = persona.nome;
  const etaPersona = persona.eta;
  const cittaPersona = persona.citta;
  log("Metodo tradizionale", `${nomePersona}, ${etaPersona} anni, vive a ${cittaPersona}`);

  // DESTRUCTURING (MODERNO!)
  const { nome, eta, citta } = persona;
  log("Con destructuring", `${nome}, ${eta} anni, vive a ${citta}`);

  // DESTRUCTURING con nomi diversi
  const { nome: nomeCompleto, lavoro: professione } = persona;
  log("Destructuring con rinomina", `${nomeCompleto} fa il ${professione}`);

  // DESTRUCTURING con REST per oggetti
  const { cognome, ...infoPersonali } = persona;
  log("Destructuring oggetti + REST", {
    "Cognome estratto": cognome,
    "Resto delle info": infoPersonali,
  });

  // ESEMPIO PRATICO: Funzione che riceve oggetto e usa destructuring
  function presentaPersona({ nome, eta, citta }) {
    return `Ciao, sono ${nome}, ho ${eta} anni e vivo a ${citta}!`;
  }

  const presentazione = presentaPersona(persona);
  log("Funzione con destructuring", presentazione);

  // prossimi esempi...
  
});
