
function operazione(tipo) {
    const n1 = Number(document.getElementById("n1").value);
    const n2 = Number(document.getElementById("n2").value);

    let risultato;

    switch (tipo) {
        case "somma": risultato = n1 + n2; 
        break;
        case "sottrai": risultato = n1 - n2; 
        break;
        case "moltiplica": risultato = n1 * n2; 
        break;
        case "dividi": risultato = n1 / n2; 
        break;
    }

    document.getElementById("risultato").textContent = "Risultato: " + risultato;
}
