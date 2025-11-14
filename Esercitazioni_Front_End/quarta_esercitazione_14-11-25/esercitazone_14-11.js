/*Esercizi Base su Variabili e tipi
1. Crea una variabile `let citta = "Palermo";` e stampala in console.
2. Crea una costante `const pi = 3.14;` e prova a riassegnarla. Che errore ottieni?
3. Crea una variabile `let temperatura = 25;` e stampa in console `"La temperatura è 25 gradi"`.
4. Dichiarane una `let vuota;` e stampane il valore. Che ottieni?
5. Stampa il tipo di queste variabili: 
let numero = 42;
let parola = "ciao";
let flag = false;
let nulla = null;
let nonDefinito; */

//1
let citta ="Palermo";
console.log(citta);//Palermo

//2 const pi = 3.14;
//let pi =1; //errore: variabile già dichiarata

//3
let temperatura = 25;
console.log("La temperatura è " + temperatura + " gradi");//La temperatura è 25 gradi

//4
let secchio;
console.log(secchio); //undefined

//5
let numero = 42;
let parola = "ciao";
let flag = false;
let nulla = null;
let nonDefinito;

console.log(typeof numero , typeof parola , typeof flag , typeof nulla , typeof nonDefinito);
//number string boolean object undefined

/* Esercizi su Operatori
1. Calcola `7 + 5`, `10 - 3`, `4 * 6`, `20 / 4` e stampali.
2. Calcola il resto di `17 % 3`.
3. Usa l’operatore `+=` per sommare 10 a una variabile `let punti = 50;`.
4. Confronta e prendi visione:
console.log(5 == "5");
console.log(5 === "5");
console.log(5 != 7);
console.log(8 !== "8");*/

//1
let somma = 3 + 2;
let differenza = 10 - 3;
let modulo = 4 * 6;
let frazione = 20 / 4;

console.log(somma , differenza , modulo , frazione); //5 7 24 5

//2 
let resto = 17 % 3;
console.log(resto); //2

//3
let punti = 50;
punti += 10;
console.log(punti); //60

4//
console.log(5 == "5"); //true
console.log(5 === "5");//false
console.log(5 != 7); //true
console.log(8 !== "8"); //true

/* Esercizi su condizioni
1. Crea una variabile `let eta = 20;` e stampa `"Maggiorenne"` se >= 18, altrimenti `"Minorenne"`.
2. Crea una variabile `let voto = 30;` e stampa `"Ottimo"` se è 30, `"Buono"` se è >= 18, `"Insufficiente"` altrimenti.
3. Usa un `if...else if...else` per salutare in base a `let ora = 9, 15, 21`. */

//1
let eta = 20 ;
if (eta>=18) { console.log("Maggiorenne");}
    else {console.log("Minorenne");}

//2
let voto = 30;
    if (voto === 30) {
        console.log("Ottimo");
    } else if (voto >= 18) 
    {console.log("Buono");
        }else {console.log("Insufficiente");}

//3
let ora = 10;

if (ora >= 22) {
    console.log("Buonanotte");
    } else if (ora >= 21) {console.log("Buonasera");
        } else if (ora >= 15) {console.log("Buon pomeriggio");
            } else if (ora >= 9) {console.log("Buongiorno");
                } else {console.log("Buonanotte");}

/* Esercizi su cicli
1. Stampa i numeri da 1 a 20 con un ciclo `for`.
2. Stampa i numeri pari da 2 a 20.
3. Con un ciclo `while` stampa i numeri da 10 a 1 (conto alla rovescia).
4. Con un ciclo `for` stampa la tabellina del 5 (da `5x1` a `5x10`).
5. Somma i numeri da 1 a 100 con un ciclo `for`.*/

//1
for (let num = 0; num < 21; num++) {
        console.log("Numero:", num);
      }

//2
for (let num = 0; num < 21; num++) {
       if (num % 2 === 0) {
        console.log("Numeri Pari: " + num);}}


        // DA FINIRE.......