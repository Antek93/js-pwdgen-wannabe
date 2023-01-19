// Alert iniziale
alert('Per proseguire rispondi al seguente questionario');
// verifica debug 
console.log('fin qui tutto bene');

// Creazione variabile per NOME utente tramite prompt
const userName = prompt("Inserisci il tuo nome");
// Risposta questionario tramite sostituz di getElement 
document.getElementById('user-name').innerHTML = userName;

// verifica debug
console.log('fin qui tutto bene');

// Creazione variabile per COGNOME utente tramite prompt
const userSurname = prompt("Inserisci il tuo cognome");
// Risposta questionario tramite sostituz di getElement 
document.getElementById('user-surname').innerHTML = userSurname;

// verifica debug 
console.log('fin qui tutto bene');

// Creazione variabile per COLORE PREFERITO utente tramite prompt
const favouriteColor = prompt("Inserisci il tuo colore preferito");
document.getElementById('favourite-color').innerHTML = favouriteColor;

// verifica debug 
console.log('fin qui tutto bene');

// SOLUZIONE ESERCIZIO
let randomNumber= '21'; // tra virgolette per trasformarlo in un valore stringa
const solution = userName + userSurname + favouriteColor + randomNumber;
document.getElementById('solution').innerHTML = solution;

// verifica debug 
console.log('fin qui tutto bene');








// Prove aggiuntive "Gli spazi
let email= 'antonio.savino1993@gmail.com';
const prova = userName + '  ' + userSurname + '  ' + favouriteColor + '  ' + email;
document.getElementById('bonus').innerHTML = prova;

// Prove aggiuntive "Template Literal"
let testo_uno = 'Qualcuno';
let testo_due = 'sul';
let testo_tre = 'del';
let testo_completo = `
${testo_uno} volò
${testo_due} nido
${testo_tre} cuculo
`;
document.getElementById('bonus-due').innerHTML = testo_completo

console.log(testo_completo)





 