
function calcola() {
let n1 = Number(document.getElementById("n1").value);
let n2 = Number(document.getElementById("n2").value);
let somma = n1 + n2;
	document.getElementById("risultato").textContent = "Risultato: " + somma;  
}

function sottrai() {
let n1 = Number(document.getElementById("n1").value);
let n2 = Number(document.getElementById("n2").value);
let sottrai = n1 - n2;
	document.getElementById("risultato").textContent = "Risultato: " + sottrai   
}

function moltiplica() {
let n1 = Number(document.getElementById("n1").value);
let n2 = Number(document.getElementById("n2").value);
let moltiplica = n1 * n2;
	document.getElementById("risultato").textContent = "Risultato: " + moltiplica;   
}

function dividi() {
let n1 = Number(document.getElementById("n1").value);
let n2 = Number(document.getElementById("n2").value);
let dividi = n1 / n2;
	document.getElementById("risultato").textContent = "Risultato: " + dividi;  
}
