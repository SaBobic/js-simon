/*
Visualizzare in pagina 5 numeri casuali diversi tra loro. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite i prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

//* Procedimento step by step

// Creo una funzione che mi permetta di generare 5 numeri casuali diversi e di raggrupparli in un array
// Prendo i 5 numeri casuali e li stampo su schermo
// Genero un timer che parte da 30 a 0 secondi
// Raggiunto lo 0, deve far sparire i 5 numeri generati random
// Raggiunto lo 0, escono dei prompt che chiedono i 5 numeri, uno ad uno
// Confronto i numeri dati dall'utente con quelli generati random, e assegno i punti
// Mostro il punteggio all'utente

const displayNumbers = document.getElementById("numbers");
const displayTimer = document.getElementById("timer");
let timerStart = 30;
const max = 100;

// Creo una funzione che mi permetta di generare 5 numeri casuali e di raggrupparli in un array
const randomNumbers = () => {
    let array = [max];
    let number;
    for (let i = 0; i < 5; i++) {
        do {
            number = Math.floor(Math.random() * max + 1);
        } while (array.includes(number));
        array.push(number);
    }
    return array;
};

const numbers = randomNumbers(max);

// Prendo i 5 numeri casuali e li stampo su schermo
const numberSpans = document.querySelectorAll("#numbers span");

for (let i = 0; i < 5; i++) {
    numberSpans[i].innerText = numbers[i];
}

// Stampo su schermo un timer che parte da timerStart a 0
displayTimer.innerText = timerStart;

const timer = setInterval(() => {
    displayTimer.innerText = --timerStart;
    if (timerStart === 0) {
        clearInterval(timer);
        // Raggiunto lo 0, deve far sparire i 5 numeri generati random
        displayNumbers.style.display = "none";
    }
}, 1000);

// Raggiunto lo 0, escono dei prompt che chiedono i 5 numeri, uno ad uno

setTimeout(() => {
    let score = 0;
    let userNumbers = "";
    for (let i = 0; i < 5; i++) {
        let userNumber;
        do {
            userNumber = prompt(`Dimmi il ${i + 1}° numero (da 1 a 100)`);
        } while (isNaN(userNumber) || userNumber < 1 || userNumber > 100);

        // Confronto i numeri dati dall'utente con quelli generati random, e assegno i punti1
        if (numbers[i] === parseInt(userNumber)) {
            score++;
            userNumbers += userNumber + " ";
        }
    }

    // Mostro il punteggio all'utente
    let resultMessage = "Non hai indovinato alcun numero";
    if (score > 0)
        resultMessage = `Hai totalizzato ${score} punti indovinando i seguenti numeri: ${userNumbers.trim()}`;
    alert(resultMessage);
}, 30100);
