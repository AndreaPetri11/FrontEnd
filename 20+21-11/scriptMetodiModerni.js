// dichiarazione variabili per funzione e bottone HTML
const btn = document.getElementById('run');
const out = document.getElementById('output');

// Utility per mostrare il risultato di ogni esempio
function log(title, content) {
  out.textContent += `-- ${title} --\n`;
  out.textContent += (typeof content === 'string' ? content : JSON.stringify(content, null, 2)) + '\n\n';
};
btn.addEventListener('click', () => {
  out.textContent = '';

/* inizio esempi */

/* 1. Operatore Ternario ===

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

/* 2. REST OPERATOR (i tre puntini ...) ===

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
  //(l'array colori resta invariata, creo solo spazi di memoria tra cui un'array usando lo SPREAD)
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
  // (l'oggetto persona resta invariato, creo solo spazi di memoria tra cui un oggetto usando lo SPREAD)
  const { cognome, ...infoPersonali } = persona;
  log("Destructuring oggetti + REST", {
    "Cognome estratto come una stringa": cognome,
    "Cognome estratto come una stringa": nome,
    "Resto delle info come un oggetto": infoPersonali,
  });

  // ESEMPIO PRATICO: Funzione che riceve oggetto e usa destructuring
  function presentaPersona({ nome, eta, citta }) {
    return `Ciao, sono ${nome}, ho ${eta} anni e vivo a ${citta}!`;
  }

  const presentazione = presentaPersona(persona);
  log("Funzione con destructuring", presentazione);

//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------

*/

/* Approfondimento:

// Cos'è il Destructuring?

//Il **destructuring** è una sintassi che permette di **estrarre** valori da array e oggetti e assegnarli a variabili in modo rapido e elegante.
//-----------------------------------------------------------------------
//1. DESTRUCTURING DI ARRAY

//**Sintassi Base**

// const [variabile1, variabile2, variabile3] = array;

//**Vantaggi Array Destructuring:**

//- **Meno codice**: Una riga invece di tre
//- **Più leggibile**: Assegnazioni multiple in una volta
//- **Posizionale**: L'ordine delle variabili corrisponde all'ordine nell'array

// 2. DESTRUCTURING CON REST OPERATOR

// `const [primo, secondo, ...resto] = ["a", "b", "c", "d", "e"];`

// primo = "a"

// secondo = "b"

// resto = ["c", "d", "e"]
//-----------------------------------------------------------------------
// **3. DESTRUCTURING DI OGGETTI**

// **Sintassi Base**

// `const { proprietà1, proprietà2 } = oggetto;`

// **Caratteristiche Oggetti:**

//- **Per nome**: Le variabili devono corrispondere ai nomi delle proprietà
//- **Ordine libero**: Non importa l'ordine delle proprietà
//- **Flessibile**: Puoi estrarre solo le proprietà che ti servono

//-----------------------------------------------------------------------

// **QUANDO USARE IL DESTRUCTURING?**

//✅ **Usa quando:**

//- Devi estrarre più valori da array/oggetti
//- Vuoi parametri di funzione più puliti
//- Lavori con API che restituiscono oggetti complessi

//❌ **Non usare quando:**

//- Serve solo una proprietà (più semplice `obj.prop`)

//Il destructuring rende il codice più pulito, leggibile e moderno! 🚀

*/

/* 5. MAP  ===  

//Cos'è il metodo map()?
//Il metodo map() è uno dei metodi più potenti degli array in JavaScript. 
//l'array originale resta invariata mentre la nuova array viene trasformata attraverso la funzione che scegliamo noi 
//Il nuovo array ha la stessa lunghezza	--> 5 elementi → 5 elementi
//si puo' usare al posto del "for of"

//Sintassi Base

// const nuovoArray = arrayOriginale.map((item) => trasformazione);

//log("METODO MAP()", "Trasforma ogni elemento di un array e crea un nuovo array");

  // ESEMPIO 1: Numeri - Raddoppiare ogni numero
  const numeri = [1, 2, 3, 4, 5];
  log("Array originale numeri", numeri);

   // Metodo tradizionale (LUNGO!)
  const raddoppiatiTradizionale = [];
  for (let i = 0; i < numeri.length; i++) {
    raddoppiatiTradizionale.push(numeri[i] * 2);
  }
  log("Metodo tradizionale", raddoppiatiTradizionale);

  // CON MAP (MODERNO!)
  const raddoppiati = numeri.map((numero) => numero * 2);
  log("Con map()", raddoppiati);
  console.table(raddoppiati);

  // ESEMPIO 2: Stringhe - Trasformare nomi in maiuscolo
  const nomi = ["mario", "luigi", "peach", "bowser"];
  log("Nomi originali", nomi);

  const nomiMaiuscoli = nomi.map((nome) => nome.toUpperCase());
  log("Nomi in maiuscolo", nomiMaiuscoli);

// ESEMPIO 3: Oggetti - Trasformare array di oggetti
  const prodotti = [
    { nome: "Laptop", prezzo: 800 },
    { nome: "Mouse", prezzo: 25 },
    { nome: "Tastiera", prezzo: 60 },
  ];
  log("Prodotti originali", prodotti);
  console.table(prodotti);

  // Aggiungere IVA del 22%
  const prodottiConIva = prodotti.map((prodotto) => ({
    nome: prodotto.nome,
    prezzoBase: prodotto.prezzo,
    prezzoConIva: prodotto.prezzo * 1.22,
    categoria: "elettronica" //numero elementi invariati ma aggiungiamo qualcosa agli oggetti dell'array
  }));
  log("Prodotti con IVA", prodottiConIva);
  console.table(prodottiConIva);

// ESEMPIO 4: Map con indice
  const lettere = ["a", "b", "c"];
  const lettereConIndice = lettere.map((lettera, indice) => `${indice}: ${lettera}`);
  log("Lettere con indice", lettereConIndice);
  console.table(lettereConIndice);

   // ESEMPIO 5: Map + Destructuring
  const persone = [
    { nome: "Anna", eta: 25 },
    { nome: "Marco", eta: 30 },
    { nome: "Sofia", eta: 22 },
    { nome: "Beatrice", eta: 42 },
  ];

  const saluti = persone.map(({ nome, eta }) => `Ciao ${nome}, hai ${eta} anni!`); 
  //grazie al map+destructoring stiamo trasformando un array di elementi in un array di stringhe
  log("Saluti personalizzati", saluti[1]);
  console.table(saluti[1]);//posso usare anche l'indice per restituire un elemento specifico
  log("Saluti personalizzati", saluti[3]);
  console.table(saluti[3]);


  //stessa cosa ma scritta senza destructoring
  const saluti2 = persone.map((item) => `Ciao${item.nome}, hai ${item.eta} anni!`);
  log("Saluti personalizzati", saluti2[3]);
  console.table(saluti2[3]);

   // ESEMPIO PRATICO: Creare lista HTML
  const frutta = ["mela", "banana", "arancia"];
  const listaHTML = frutta.map((frutto) => `<li>${frutto}</li>`);
  log("Lista HTML", listaHTML);
  console.table(listaHTML);

  */

/* 6. METODO FILTER() - RESTITUISCE UNA NUOVO ARRAY COMPOSTA DA ELEMENTI CHE RISPETTANO DELLE CONDIZIONI===  
//Il metodo filter() filtra gli elementi di un array in base a una condizione. 
//Restituisce un nuovo array contenente solo gli elementi che soddisfano il criterio specificato.


//Sintassi Base
// const arrayFiltrato = arrayOriginale.filter(elemento => condizione);

//log("METODO FILTER()", "Filtra elementi di un array basandosi su una condizione");

// ESEMPIO 1: Numeri - Filtrare numeri pari
  const numeriMisti = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  log("Array originale", numeriMisti);

  // Metodo tradizionale (LUNGO!)
  const pariTradizionale = [];
  for (let i = 0; i < numeriMisti.length; i++) {
    if (numeriMisti[i] % 2 === 0) {
      pariTradizionale.push(numeriMisti[i]);
    }
  }
  log("Metodo tradizionale", pariTradizionale);

  // CON FILTER (MODERNO!)
  const pari = numeriMisti.filter((numero) => numero % 2 === 0);
  log("Con filter()", pari);

  // ESEMPIO 2: Stringhe - Filtrare nomi lunghi
  const nomiVarii = ["Ana", "Alessandro", "Bo", "Francesca", "Giuseppe"];
  log("Nomi originali", nomiVarii);

  const nomiLunghi = nomiVarii.filter((nome) => nome.length > 4);
  log("Nomi con più di 4 lettere", nomiLunghi);

  // ESEMPIO 3: Oggetti - Filtrare prodotti per prezzo
  const tuttiProdotti = [
    { nome: "Laptop", prezzo: 800, categoria: "tech" },
    { nome: "Mouse", prezzo: 25, categoria: "tech" },
    { nome: "Libro", prezzo: 15, categoria: "cultura" },
    { nome: "Tastiera", prezzo: 60, categoria: "tech" },
    { nome: "Penna", prezzo: 3, categoria: "ufficio" },
  ];
  log("Tutti i prodotti", tuttiProdotti);

  // Prodotti sotto i 50 euro
  const prodottiEconomici = tuttiProdotti.filter((prodotto) => prodotto.prezzo < 50);
  log("Prodotti sotto 50€", prodottiEconomici);

  // Prodotti tech
  const prodottiTech = tuttiProdotti.filter((prodotto) => prodotto.categoria === "tech");
  log("Prodotti tech", prodottiTech);

  // ESEMPIO 4: Filter con condizioni multiple
  const studenti = [
    { nome: "Mario", voto: 8, presente: true },
    { nome: "Luigi", voto: 6, presente: false },
    { nome: "Peach", voto: 9, presente: true },
    { nome: "Bowser", voto: 4, presente: true },
  ];

  const studentiPromossi = studenti.filter((studente) => studente.voto >= 6 && studente.presente === true);
  log("Studenti promossi (voto≥6 E presenti)", studentiPromossi);

  // ESEMPIO 5: Filter + Map combinati
  const prezziScontati = tuttiProdotti
    .filter((prodotto) => prodotto.prezzo > 20) // Solo prodotti sopra 20€
    .map((prodotto) => ({
      ...prodotto,
      prezzoScontato: prodotto.prezzo * 0.8, // Sconto del 20%
    }));
  log("Prodotti sopra 20€ con sconto", prezziScontati);

  // ESEMPIO PRATICO: Ricerca/Search  //pattern per ricerca con .toLowerCase
  const ricerca = "R";
  const fruttiTrovati = ["Mela", "Banana", "Arancia", "Pera", "Uva"].filter((frutto) => frutto.toLowerCase().includes(ricerca.toLowerCase()));
  log(`Frutti che contengono "${ricerca}"`, fruttiTrovati);

*/

/* 7. Metodi più usati:  
vedi sotto */

/* 7.1 Date e ora

//- `Date.now()` → numero di millisecondi dal 1/1/1970.
//- `new Date()` → oggetto data completo.

const ms = Date.now();
const adesso = new Date();
log('Date.now()', ms);
console.log(adesso);
log('new Date()', adesso.toLocaleString());
console.log(adesso.toLocaleString());
log('new Date()', adesso.toLocaleTimeString());
console.log(adesso.toLocaleTimeString());
log('new Date()', adesso.toLocaleDateString());
console.log(adesso.toLocaleDateString());
log('new Date()', adesso.getFullYear());
console.log(adesso.getFullYear());
log('new Date()', adesso.getMonth()+1); //+1 perchè l'indice del mese parte da Gennaio=0
console.log(adesso.getMonth()+1);       //+1 perchè l'indice del mese parte da Gennaio=0
log('new Date()', adesso.getDay());
console.log(adesso.getDay());

*/

/* 7.2 Metodi Math

//- `Math.random()`       -> generae numero casuale
//  `Math.floor()`        -> 
//  `Math.ceil()`         -> 
//  `Math.round()`        -> arrotonda il numero
//  `Math.max(a, b, ...)` -> 
//  `Math.min(...)`       -> 

const casuale = Math.random();
const arrotondato = Math.round(casuale * 10);
log('Math.random()', casuale);
log('Arrotondato', arrotondato);

*/

/* 7.3 Metodi stringa

// `toUpperCase()`, `toLowerCase()`  - trasformazione
// `includes(substr)`, `startsWith()`, `endsWith()`  - booleani
// `slice(start, end)`, `trim()` - taglio

const testo = '           proograMmazione         ';
log('toUpperCase', testo.toUpperCase());
log('trim', testo.trim());
log('includes "oo"', testo.includes('oo')); //restituisce true o false

*/  

/*funzione per normalizzare i campi inseriti dall'utente es: "   MaRiO rOsSi   "--> "Mario Rossi"
      function capitalize(str) {
        return str
          .trim()
          .toLowerCase()
          .split(/\s+/) // separa qualunque numero di spazi
          .map((word) => word.replace(/^./, (c) => c.toUpperCase()))
          .join(" ");
      }
*/

/* funzione per mettere la prima lettera maiuscola
function capitalizeFirstLetter(str) {
  return str.substring(0, 1).toUpperCase() + str.substring(1);
} */

/* 8. METODO REDUCE ===

//Nel codice sopra abbiamo usato il metodo `reduce()` per calcolare il totale del carrello.
//Questo è uno dei metodi più potenti di JavaScript, ma può sembrare complicato all'inizio.
//Il metodo `reduce()` **riduce** un array a un singolo valore, processando ogni elemento e accumulando il risultato.

//Sintassi base:

array.reduce((accumulatore, elementoCorrente) => {
    // logica per combinare accumulatore con elemento corrente
    return nuovoAccumulatore;
}, valoreIniziale);  // ← Questo valore iniziale è fondamentale!



//Il Valore Iniziale: Perché quello 0 è Cruciale
const total = items.reduce((sum, item) =>
    sum + (item.price * item.quantity), 0 );
//                                      ↑
//                              Questo 0 è il valore iniziale!

//Il valore iniziale (0) dice a reduce() da dove iniziare il calcolo.
//Senza di esso, JavaScript userebbe il primo elemento dell'array come punto di partenza, causando errori!

*/
/* ❌ SENZA valore iniziale (SBAGLIATO!)
const totalSbagliato = items.reduce((sum, item) =>
    sum + (item.price * item.quantity)
);
*/
// Se items[0] = {id: 1, name: "Pizza", price: 12.50, quantity: 2}
// sum diventerebbe l'oggetto Pizza, non un numero!
// Risultato: NaN ❌

/* ✅ CON valore iniziale (CORRETTO!)
const totalCorretto = items.reduce((sum, item) =>
    sum + (item.price * item.quantity), 0
); 
// sum inizia da 0 (numero), quindi tutto funziona
// Risultato: numero corretto ✅

/* Come Funziona nel Nostro Esempio Step-by-Step

// I nostri items del carrello
const items = [
    { id: 1, name: "Pizza", price: 12.50, quantity: 2 },
    { id: 2, name: "Bibita", price: 3.00, quantity: 1 },
    { id: 3, name: "Dolce", price: 5.50, quantity: 1 }
];

// Calcolo del totale con reduce
const total = items.reduce((sum, item) =>
    sum + (item.price * item.quantity), 0
);

console.log();

🔄 Cosa succede passo dopo passo:

INIZIO:
- sum = 0 (il valore iniziale che abbiamo fornito)

Iterazione 1:
- sum = 0 (valore iniziale)
- item = { id: 1, name: "Pizza", price: 12.50, quantity: 2 }
- calcolo: 0 + (12.50 * 2) = 0 + 25.00 = 25.00
- nuovo sum = 25.00

Iterazione 2:
- sum = 25.00 (risultato dell'iterazione precedente)
- item = { id: 2, name: "Bibita", price: 3.00, quantity: 1 }
- calcolo: 25.00 + (3.00 * 1) = 25.00 + 3.00 = 28.00
- nuovo sum = 28.00

Iterazione 3:
- sum = 28.00 (risultato dell'iterazione precedente)
- item = { id: 3, name: "Dolce", price: 5.50, quantity: 1 }
- calcolo: 28.00 + (5.50 * 1) = 28.00 + 5.50 = 33.50
- nuovo sum = 33.50

Risultato finale: total = 33.50 ✅

*/

/* Esempi con Diversi Valori Iniziali 


//Il valore iniziale cambia a seconda di quello che vogliamo ottenere:

const numeri = [1, 2, 3, 4, 5];

// 1. Per SOMMARE: valore iniziale = 0
const somma = numeri.reduce((acc, num) => acc + num, 0);
// 0 + 1 + 2 + 3 + 4 + 5 = 15

// 2. Per MOLTIPLICARE: valore iniziale = 1 (non 0!)
const prodotto = numeri.reduce((acc, num) => acc * num, 1);
// 1 * 1 * 2 * 3 * 4 * 5 = 120

// 3. Per CONCATENARE STRINGHE: valore iniziale = ""
const parole = ['Ciao', 'mondo', 'React'];
const frase = parole.reduce((acc, parola) => acc + ' ' + parola, '');
// '' + ' Ciao' + ' mondo' + ' React' = ' Ciao mondo React'

// 4. Per CREARE OGGETTI: valore iniziale = {}
const studenti = [
    { id: 1, nome: 'Mario' },
    { id: 2, nome: 'Anna' }
];
const studentiPerId = studenti.reduce((acc, studente) => {
    acc[studente.id] = studente;
    return acc;
}, {}); // ← Oggetto vuoto come punto di partenza
// Risultato: { 1: {id: 1, nome: 'Mario'}, 2: {id: 2, nome: 'Anna'} }

// 5. Per CREARE ARRAY: valore iniziale = []
const arrayDiArray = [[1, 2], [3, 4], [5, 6]];
const appiattito = arrayDiArray.reduce((acc, arr) => acc.concat(arr), []);
// [] + [1,2] + [3,4] + [5,6] = [1, 2, 3, 4, 5, 6]

//POSSO FARE LA STESSA COSA CON  flat()
//Il metodo flat() appiattisce gli array annidati di un livello (o più, se indicato).
const arrayDiArray = [[1, 2], [3, 4], [5, 6]];

const appiattito = arrayDiArray.flat();
console.log(appiattito); // [1, 2, 3, 4, 5, 6]

//OPPURE CON concat() E spread operator
//Puoi appiattire usando concat() con lo spread operator:
const appiattito = [].concat(...arrayDiArray);
console.log(appiattito); // [1, 2, 3, 4, 5, 6]

//REGOLA D'ORO PER VALORE INIZIALE CON REDUCE
//Usa sempre un valore iniziale che ha lo stesso tipo del risultato che vuoi ottenere:**

//- Vuoi un **numero**? → Inizia con `0` (per somme) o `1` (per prodotti)
//- Vuoi una **stringa**? → Inizia con `''`
//- Vuoi un **array**? → Inizia con `[]`
//- Vuoi un **oggetto**? → Inizia con `{}`
//- Vuoi un **booleano**? → Inizia con `true` o `false`

/* Altri Esempi Pratici di reduce() 
*/

/*Esempi utili nelle applicazioni React:

// 1. Contare elementi per categoria
const prodotti = [
    { nome: 'iPhone', categoria: 'elettronica' },
    { nome: 'Maglietta', categoria: 'abbigliamento' },
    { nome: 'iPad', categoria: 'elettronica' }
];

const prodottiPerCategoria = prodotti.reduce((acc, prodotto) => {
    acc[prodotto.categoria] = (acc[prodotto.categoria] || 0) + 1; //Se è true(il prodotto contato ha la stessa categoria della chiave creata inizialmente(categoria)) or è 0(la categoria non è presente) conta +1 altrimenti non conta
    return acc;
}, {}); // ← Oggetto vuoto come valore iniziale
// Risultato: { elettronica: 2, abbigliamento: 1 }

// 2. Trovare il valore massimo/minimo
const voti = [85, 92, 78, 96, 88];
const votoMassimo = voti.reduce((max, voto) => voto > max ? voto : max, 0); //mette il primo che trova dentro max e poi confronta gli altri applicando la condizione e sostituendo se la condizione è true
// Risultato: 96

// 3. Creare una mappa chiave-valore
const utenti = [
    { id: 1, nome: 'Mario', email: 'mario@email.com' },
    { id: 2, nome: 'Anna', email: 'anna@email.com' }
];

const utentiPerId = utenti.reduce((acc, utente) => {
    acc[utente.id] = utente;
    return acc;
}, {}); // ← Oggetto vuoto come valore iniziale
// Risultato: { 1: {id: 1, nome: 'Mario', ...}, 2: {id: 2, nome: 'Anna', ...} }

*/


}); //chiusura finale x far funzionare bottone HTML





