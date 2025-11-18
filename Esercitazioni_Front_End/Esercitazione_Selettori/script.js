
/*Esercizio 2.1: Selezioni multiple

1. Selezionare tutti gli elementi `<a>` nella pagina
2. Contare quanti paragrafi ci sono
3. Trovare tutti gli elementi che hanno un attributo `data-id`
4. Selezionare solo i link che portano a sezioni interne (href inizia con #) */

//1.
const allLink = document.querySelectorAll("a");
console.log("Tutti le <a>: " , allLink);

//2.
const pNum= document.querySelectorAll("p");
console.log("Numero di paragrafi: " , pNum.length);

//3.
const dataIdElement = document.querySelectorAll("[data-id]");
console.log("Elementi con data-id: " , dataIdElement);

//4.
const linkSezInt = document.querySelectorAll("a[href^='#']");
console.log("I link che portano alle sezioni interne sono: " , linkSezInt);


/*Esercizio 2.2: Navigazione DOM

1. Partire dall’ elemento con id "contenuto"
2. Trovare il suo elemento genitore
3. Trovare tutti i suoi elementi figli diretti
4. Trovare l'elemento fratello successivo (se esiste) */

