// Palindromi

// let input = askUserWord();

// function askUserWord(
//   message = "inserisci una parola, e capirò se è palindroma!"
// ) {
//   let userWord = prompt(message).toLocaleLowerCase();
//   console.log(userWord);

//   while (userWord == "") {
//     alert("Temo tu non abbia inserito una parola");
//     let userWord = prompt(message).toLocaleLowerCase();
//     console.log(userWord);

//     return userWord;
//   }

//   return userWord;
// }

// function palindromesWords(input) {
//   for (let i = 0; i < input.lenght; i++) {
//     let palindromeWord = false;
//     straight = input.lenght[i];
//     backwards = input[input.lenght - i];
//     if (straight == backwards) {
//       palindromeWord = true;
//     }
//   }
//   return palindromesWords;
// }

// if (palindromesWords == input) {
//   alert("Scommetto che la parola : " + input + " è palindroma");
// } else {
//   alert("Vabbè non mi hai voluto sfidare :(");
//   while (palindromesWords == input) {
//     let userWord = prompt(message).toLocaleLowerCase();
//     console.log(userWord);
//   }
// }






// Pari e dispari

// const rightButton = document.getElementById("right");
// const leftButton = document.getElementById("left");
// // ON LOAD

// const userNumber = parseInt(prompt("inserisci un numero da 1 a 5"));
// while (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
//   alert("dati non validi");
//   userNumber = parseInt(prompt("inserisci un numero da 1 a 5"));
// }

// const userChoice = prompt("Scegli pari o dispari").trim().toLocaleLowerCase();
// while (userChoice != "pari" && userChoice != "dispari") {
//   alert("dati non validi");
//   userChoice = prompt("Scegli pari o dispari").trim().toLocaleLowerCase();
// }

// const pcNumber = generateRandomNumber(1, 5);
// const sumnumber = userNumber + pcNumber;

// const isUserWinner = userWon(sumnumber, userChoice);

// if (isUserWinner) {
//   console.log("utente vince");
// } else {
//   console.log("utente perde");
// }

// // FUNZIONI
// /**
//  * Funzione che genera un numero random
//  *
//  * @param {int} min valore minimo del numero generato
//  *  @param {int} max valore massimo del numero generato
//  * @returns {int} il numero randomico generato tra massimo e minimo
//  */

// function generateRandomNumber() {
//   const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//   return randomNumber;
// }
// /**
//  * funzione che dichiara se il vincitore è l'utente
//  *
//  * @parm {int} sum la somma del numero dell'utente e di quello del pc
//  *
//  * @param { string} userChoice la scelta dell'utente ('pari') o ('dispari')
//  * @returns {boolean} il risultato sarà positivo qualora avesse vinto l'utente
//  */
// function userWon() {
//   const isSumEven = sum % 2 == 0;
//   if (
//     (userChoice == "pari" && isSumEven) ||
//     (userChoice == "dispari" && !isSumEven)
//   ) {
//     return true;
//   }
//   return false;
}
