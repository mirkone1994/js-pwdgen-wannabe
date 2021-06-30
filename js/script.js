/*Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 */
var name = prompt("Quale è il tuo nome?");
var surname = prompt("Quale è il tuo cognome?");
var color = prompt("Quale è il tuo colore preferito?");
var randomNumber = 21
var passwordPlaceholder = document.getElementById("password");
passwordPlaceholder.innerHTML = name + surname + color + randomNumber;
console.log(name, surname, color, randomNumber, passwordPlaceholder)