
//LIVELLO 1 - Operazioni sugli array

/* 1.1 Playlist dinamica

let playlist = ["Heat", "Sunrise", "Echo"];

//Aggiungi due brani insieme in fondo.
playlist.push("Bohemian Rhapsody");
playlist.push("My Way");
    console.log(playlist); // ['Heat', 'Sunrise', 'Echo', 'Bohemian Rhapsody', 'My Way']

//Sposta il primo brano in ultima posizione (rimuovilo e reinseriscilo).
let primo = playlist.shift();
playlist.push("Heat");
    console.log(playlist); // ['Sunrise', 'Echo', 'Bohemian Rhapsody', 'My Way', 'Heat']

//Estrai una copia dei brani centrali (escluso primo e ultimo) senza modificare l'array originale.
let braniCentrali = playlist.slice(1, 4);
    console.log(braniCentrali); // ['Echo', 'Bohemian Rhapsody', 'My Way']
    console.log(playlist); //['Sunrise', 'Echo', 'Bohemian Rhapsody', 'My Way', 'Heat']
*/

/* 1.2 Coda clienti

coda = ["A", "B", "C", "D"];

// Simula due nuove persone che arrivano contemporaneamente (inseriscile all’inizio).
coda.unshift("E", "F");
    console.log(coda); // ['E', 'F', 'A', 'B', 'C', 'D']

//Fai uscire una persona dal fondo.    
let ultima = coda.pop();
    console.log(coda); // ['E', 'F', 'A', 'B', 'C']

//Rimuovi la persona che sta al posto 2 (indice 1) e ritorna il suo nome.
let seconda = coda.splice(1, 1);
console.log(seconda); //['F']
console.log(coda); //['E', 'A', 'B', 'C']
*/

/* 1.3 Serie numerica 

numeri = [5, 3, 9, 1, 4];

//Rimuovi il primo e l’ultimo, poi aggiungi il valore 7 in coda.     
    numeri.pop();
    numeri.shift();
        console.log(numeri); // [3, 9, 1]
    numeri.push(7); 
        console.log(numeri); // [3, 9, 1, 7]

//Ottieni una sottoserie composta dai primi due elementi dell’array risultante.
    const [primoElemento, secondoElemento, terzoElemento, quartoElemento] = numeri;
        console.log(`primo: ${primoElemento}, secondo: ${secondoElemento}`); // primo: 3, secondo: 9
        console.log(numeri); //[3, 9, 1, 7]
*/

/* 1.4 Lista regali 

regali = ["Libro", "Puzzle", "Sciarpa"];

//Aggiungi in testa due nuovi regali.
regali.unshift("Computer");
regali.unshift("Cellulare");
console.log(regali); // ['Cellulare', 'Computer', 'Libro', 'Puzzle', 'Sciarpa']

//Rimuovi il secondo elemento della lista (indice 1).
regali.splice(1, 1);
console.log(regali); //['Cellulare', 'Libro', 'Puzzle', 'Sciarpa']

//Ottieni una copia degli ultimi due elementi senza modificare l’array originale.
let copia = regali.slice(2, 4);
    console.log(copia); // ['Puzzle', 'Sciarpa']
    console.log(regali); //['Cellulare', 'Libro', 'Puzzle', 'Sciarpa']
*/

/* 1.5 Storico messaggi 

messaggi = ["hey", "ciao", "tutto bene?", "ok"];

//Aggiungi un messaggio in fondo e uno in testa.
messaggi.push("anche io");
messaggi.unshift("Ehilà");
    console.log(messaggi); // ['Ehilà', 'hey', 'ciao', 'tutto bene?', 'ok', 'anche io']

//Rimuovi l’ultimo messaggio arrivato.
messaggi.pop();
    console.log(messaggi); //['Ehilà', 'hey', 'ciao', 'tutto bene?', 'ok']

//Ricava un array contenente solo i messaggi centrali (senza il primo e l’ultimo).
let msgCentrali = messaggi.slice(1, 4);
    console.log(msgCentrali); // ['hey', 'ciao', 'tutto bene?']
    console.log(messaggi); // ['Ehilà', 'hey', 'ciao', 'tutto bene?', 'ok']
*/

/* 1.6 Scorte magazzino 

scorte = [12, 5, 8, 3, 9];

//Aumenta in fondo la lista aggiungendo due nuovi valori.
scorte.push(7, 11);
console.log(scorte); // [12, 5, 8, 3, 9, 7, 11]

//Togli il primo e sposta l’ultimo in testa.
scorte.shift();
scorte.pop();
scorte.unshift(11);
    console.log(scorte); // [11, 5, 8, 3, 9, 7]


//Estrai una copia delle quantità centrali (senza modificare l’originale).
let copia = scorte.slice(2, 4);
    console.log(copia); // ['Puzzle', 'Sciarpa']
    console.log(regali); //['Cellulare', 'Libro', 'Puzzle', 'Sciarpa']

*/

//LIVELLO 2 - Ternario + Rest/Spread (scenari nuovi)

/* 2.1 Controllo sconto (ternario) 

// Hai una variabile `spesa`. Restituisci `"sconto"` se `spesa >= 100`, altrimenti `"nessuno"`.
const spesaIniziale = Math.floor(Math.random() * 1000); // spesa casuale
console.log(`La spesa iniziale è pari a ${spesaIniziale}`);

const sconto = (spesaIniziale >= 100) //se la spesa iniziale è >100
? spesaIniziale * 30 / 100 //true
: 0; //false

const spesaFinale = spesaIniziale - sconto;  

console.log(`Lo sconto è pari a ${sconto}`); //sconto varia in base alla spesa iniziale
console.log(`La spesa finale è pari a ${spesaFinale}`); //spesa finale varia in base alla spesa iniziale e allo sconto applicato

*/

/* 2.2 Funzione concatenatore con rest *

//Scrivi `concatenaSep(sep, ...pezzi)` che ritorna una stringa con i `pezzi` uniti usando `sep` (separatore) come separatore.
//Chiama la funzione con argomenti individuali e con un array espanso.
//**Hint:** non restituire un array ma una stringa.

function concatenaSep(sep, ...pezzi) {
    return pezzi.join(sep);
};
const figure = ["cerchio", "triangolo", "quadrato"];

console.log(concatenaSep(" - ",...figure)); //cerchio - triangolo - quadrato

*/

/* 2.3 Merge profili (spread) 
//Hai due array di tags: `t1 = ["js","es6"]`, `t2 = ["alg", "db"]`.
//Crea `allTags` senza modificare i due originali.

const t1 = ["js","es6"];
const t2 = ["alg", "db"];

const allTags= [...t1,...t2]; 
    console.log(allTags); // ['js', 'es6', 'alg', 'db']
    console.log(t1); // ['js', 'es6']
    console.log(t2); // ['alg', 'db']

*/

/* 2.4 Verifica accesso (ternario) 
//Hai `eta`. Restituisci `"adulto"` se `eta >= 18`, altrimenti `"minore"`.

const eta = Math.floor(Math.random() * 100); 
console.log(eta);

  const persona = (eta > 18)
    ? 'Adulto'
    : 'Minore';
  console.log(`Questa persona è un ${persona}`);

*/

/* 2.5 Sommatore flessibile (rest) */
//Scrivi `sommaVariabile(...nums)` che **ritorna la somma** di tutti i numeri ricevuti.
//Provala con numeri individuali e con un array espanso.
//**Hint:** i parametri rest diventano un array. 

//ARRIVATO QUA 