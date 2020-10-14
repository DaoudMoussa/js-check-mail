// Esercitazione 1: Check lista email
var accesso = false;
// Creare un array con un insieme di indirizzi email.
var emails = ["pippo@disney.com", "pluto@disney.com", "topolino@disney.com", "paperino@disney.com"]
// Chiedere all'utente il suo indirizzo email e verificare se è nella lista (tramite un ciclo for).
var emailUtente = prompt("Inserisci la tua mail");

for (var i = 0; i < emails.length; i++) {
    if (emailUtente == emails[i]) {
        accesso = true;
    }
}
// Comunicare quindi un messaggio appropriato (sei in lista/non sei in lista)
if (accesso) {
    console.log("Accesso consentito");
} else {
    console.log("accesso negato");
}
