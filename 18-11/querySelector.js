// Selezione per ID
const titolo = document.querySelector("#titolo-principale");

// Selezione per classe
const intro = document.querySelector(".intro");

// Selezione per tag
const primoLi = document.querySelector("li");

// Selettori complessi
const primoLinkMenu = document.querySelector(".menu li a");
const paragrafoContenuto = document.querySelector("#contenuto p.intro");

// Selettori con attributi
const elementoConDataId = document.querySelector("[data-id='2']");
const linkHome = document.querySelector("a[href='#home']");

// Pseudo-selettori
const ultimoLi = document.querySelector("li:last-child");
const primoFiglio = document.querySelector("section:first-child");
console.log(primoFiglio);

// Selettore discendente
const linkInMenu = document.querySelectorAll(".menu a");

// Selettore figlio diretto
const figliFiretti = document.querySelectorAll("ul > li");

// Selettore fratello adiacente
const elementiSuccessivi = document.querySelectorAll("h2 + p");

// Selettori con pseudo-classi
const elementiPari = document.querySelectorAll("li:nth-child(even)");
const elementiDispari = document.querySelectorAll("li:nth-child(odd)");

// Combinazioni complesse
const complex = document.querySelectorAll("section#contenuto p.intro, section#contenuto p.descrizione");

// Selezionare all'interno di un elemento specifico
const sezione = document.getElementById("contenuto");
const paragrafiInSezione = sezione.querySelectorAll("p");
const primaLista = sezione.querySelector("ul");

// Evitare selezioni globali quando possibile// LENTO:
const tuttiLi = document.querySelectorAll("li");

// PIÙ VELOCE se sappiamo dove cercare:
const container = document.querySelector(".container");
const liInContainer = container.querySelectorAll("li");
