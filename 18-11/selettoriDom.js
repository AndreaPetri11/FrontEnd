/* Visualizzare l'intero documento
console.log(document); 
*/

/* Informazioni sul documento
*/
//console.log("Titolo:", document.title); 
//console.log("URL:", document.URL); 
//console.log("Dominio:", document.domain); 


/* Struttura principale 
*/
//console.log("Elemento HTML:", document.documentElement);
//console.log("Head:", document.head);
//console.log("Body:", document.body);


/* Analisi dettagliata di un elemento*/
//console.dir(document.body);// Mostra tutte le proprietà// Figli diretti del body
//console.log("Figli del body:", document.body.children);
//console.log("Primo figlio:", document.body.firstElementChild);
//console.log("Ultimo figlio:", document.body.lastElementChild);


/* Ottieni un elemento */
//const main = document.querySelector('main'); 


/* Navigazione*/
//console.log("Elemento successivo:", main.nextElementSibling);
//console.log("Elemento precedente:", main.previousElementSibling);
//console.log("Genitore:", main.parentElement);
//console.log("Tutti i figli:", main.children); 


/* Numero totale di li*/
/*const tuttiLi = document.getElementsByTagName('li');
console.log("Numero di li:", tuttiLi.length);*/

/* Testo del primo paragrafo */
/*const primoParagrafo = document.querySelector('p');
console.log("Primo paragrafo:", primoParagrafo.textContent); */

// Attributi dell'ul
/*const lista = document.getElementById('lista-elementi');
for (let attr of lista.attributes) {
    console.log(`${attr.name}: ${attr.value}`);
}*/

// Elemento con data-id="2"
/*const elementoDataId2 = document.querySelector('[data-id="2"]');
console.log("Elemento trovato:", elementoDataId2.textContent);
console.log("Elemento trovato:", elementoDataId2.innerHTML);*/

/*const primoDiv= document.querySelector('div')         // Primo <div>
console.log(primoDiv);*/

/*const intro= document.querySelector('.intro')        //intro
console.log("Intro:" , intro);*/

/*const contenuto= document.querySelector('#contenuto') //contenuto 
console.log("Contenuto:" , contenuto); */


