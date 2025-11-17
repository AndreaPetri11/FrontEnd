    
    
/* Lo SWITCH è un metodo per non dover annidare troppi if else if ed else 

      let mese = "Dicembre";

      switch (
        mese //dichiarazione switch
      ) {
        case "Gennaio": //casi vari inseribili
          console.log("-11 mesi a Capodanno!");
          break; //il break fa uscire il codice dallo switch
        case "Febbraio": //casi vari inseribili
          console.log("-10 mesi a Capodanno!");
          break;
        case "Marzo":
          console.log("-9 mesi a Capodanno!");
          break;
          case "Aprile":
          console.log("-8 mesi a Capodanno!");
          break;case "Maggio":
          console.log("-7 mesi a Capodanno!");
          break;case "Giugno":
          console.log("-6 mesi a Capodanno!");
          break;case "Luglio":
          console.log("-5 mesi a Capodanno!");
          break;case "Agosto":
          console.log("-4 mesi a Capodanno!");
          break;case "Settembre":
          console.log("-3 mesi a Capodanno!");
          break;case "Ottobre":
          console.log("-2 mesi a Capodanno!");
          break;case "Novembre":
          console.log("-1 mese a Capodanno!");
          break;case "Dicembre":
          console.log("Manca davvero poco a Capodanno!");
          break;
        default: //default viene lanciato se nessuna condizione viene esaudita
          console.log("Mese non riconosciuto");
      } 
        */

/* OPERATORI LOGICI 
*/

/* esempio 1
let isStudente = true;
let haEsami = true; */

/*

if (isStudente && haEsami) {
  console.log("Studia!");
} else {console.log("Vai pure al mare..");} 
 */

/* 

if (!isStudente || !haEsami) {      //con il ! davanti diventa falso
  console.log("Studia!");
} else {console.log("Vai pure al mare..");} */

/* esempio 2
let eta = 18;
let isSick = false;

if (eta >= 18 && isSick===false) {
  console.log("Ok per uscire");
} else {console.log("Non si esce!");} */

/* SCOPE: DOVE VIVONO LE VARIABILI 
*/

// Scope Globale
/*
let messaggio = "Ciao mondo";

function mostraMessaggio() {
  console.log(messaggio); // OK: accede alla variabile globale
}
mostraMessaggio(); */

//Scope Locale

/* 
function saluta() {
  let nome = "Luca";
  console.log("Ciao " + nome);
}

saluta();
console.log(nome); // ❌ Errore: nome è locale */


// Block Scope
/*
{
  let x = 5;
}
console.log(x); // ❌ Errore: x vive solo nel blocco */

/* ATTENZIONE: con `var`!** Non rispetta il blocco e può creare bug difficili da trovare. 
*/

/* FUNZIONI AVANZATE 
*/

// Parametri con valore predefinito
/*
function saluta(nome = "ospite") {
  console.log("Ciao " + nome);
}

saluta("Lorenzo");
//se nome non viene passato, userà ospite */

//Return multipli con oggetti 
/*
function datiPersona() {
  return {
    nome: "Anna",
    eta: 25 ,
    lavoro: "developer"
  };
}

console.log(datiPersona());

let Anna = datiPersona();

console.log(Anna.nome);
console.log(Anna.eta);
console.log(Anna.lavoro); 
*/

// Le funzioni sono valori! 
/*
function moltiplica(a, b) {
  return a * b;
}

let operazione = moltiplica;
console.log(operazione(4, 5)); // 20 

//JavaScript tratta le funzioni come valori di prima classe: puoi passarle, assegnarle, restituirle.
*/

/* GUARDATI TABELLA RIASSUNTIVA DEI "case styles" su JS -Lezione 1 su Notions
*/

/*ARROW FUNCION - LA FORMA COMPATTA


//Versione standard
const somma = (a, b) => a + b;

console.log(somma(5, 10));

//Con  parametri

const saluta = (nome , cognome) => console.log("Ciao " + nome + " " + cognome);

saluta("Mario" , "Rossi");
*/
/*📌 Arrow functions:

- Sono più brevi
- **Non hanno il proprio `this`** – utile nei callback

*/


/* esercizio esempio 

 
 const quadrato = (num) =>  num * num; 
 console.log(quadrato("5")); //25

const potenza = (num) =>  num ** num; 
console.log(potenza("5"));//3125

const somma = (num) => Number(num) + Number(num);
console.log(somma("5")); //10
//qua dove abbiamo scritto Number si può scrivere String o Boolean ecc 
 // per convertire il num nella funzione del console.log in cosa vogliamo
 //in questo caso con il + si converte altrimenti il risultato verrebbe 55

 */


/* TRUTHY e FALSY - COME DECIDE UN if? 

✅ Considerati veri (truthy):

- `"ciao"`, `42`, `true`, `[]`, `{}`

❌ Considerati falsi (falsy):

- `false`, `0`, `""`, `null`, `undefined`, `NaN`



if ("ciao") {
    console.log("Truthy"); 
} //Truthy


if (44) {
    console.log("Truthy"); 
} else {
    console.log("Falsy");
} //Truthy

if (-1) {
    console.log("Truthy"); 
} else {
    console.log("Falsy");
} //Truthy

if ("") {
    console.log("Truthy"); 
} else {
    console.log("Falsy");
} //Falsy

if (null) {
    console.log("Truthy"); 
} else {
    console.log("Falsy");
} //Falsy

if (0) {
    console.log("Truthy"); 
} else {
    console.log("Falsy");
} //Falsy

if ([]) {
    console.log("Truthy");
} else {
    console.log("Falsy"); 
} //Truthy

if (NaN) {
    console.log("Truthy"); 
} else {
    console.log("Falsy"); 
} //Falsy

if (false) {
    console.log("Truthy");
} else {
    console.log("Falsy"); 
} //Falsy

if (!false) {
    console.log("Truthy"); 
} else {
    console.log("Falsy"); 
} //Truthy

*/

/* CICLI AVANZATI */

/*
//for...of  - PER ARRAY E STRINGHE

let colori = ["rosso", "verde", "blu"];

for (let stampa of colori) {
  console.log(stampa);
}
//NON USARE FOR...OF PER GLI OGGETTI MA USA FOR...IN


//for...in - PER OGGETTI

let persona = { nome: "Luca", eta: 30 , lavoro:"insegnante" };

for (let chiave in persona) {
  console.log(chiave + ": " + persona[chiave]);
}
*/

/* TEMPLATE LITERALS 
*/

//con più righe:
let nome = "Giulia";
let saluto = `Ciao, ${nome}!`;
console.log(saluto); // "Ciao, Giulia!"

//con espressioni:

let a = 4;
let b = 5;
console.log(`La somma è: ${a + b}`); // "La somma è: 9"


