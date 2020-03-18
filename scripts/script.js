
// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito19


// creo le variabili per chiedere i dati all'utente

var nomeUtente = prompt("Inserire nome");
var cognomeUtente = prompt("Inserire cognome");
var coloreUtente = prompt ("Inserire colore preferito");
var annoUtente = prompt("Inserire il suo anno di nascita")


// creo una variabile che unisca tutti i dati inseriti

var passUtente = nomeUtente + cognomeUtente + coloreUtente + annoUtente;

// creo il comando che mi manda la variabile in output sull html

document.getElementById("passUtente").innerHTML = "La sua password generata automaticamente è: " + passUtente + "";
