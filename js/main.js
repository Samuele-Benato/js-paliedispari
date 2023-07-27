let input = askUserWord();

function askUserWord(
  message = "inserisci una parola, e capirò se è palindroma!"
) {
  let userWord = prompt(message).toLocaleLowerCase();
  console.log(userWord);

  while (userWord == "") {
    alert("Temo tu non abbia inserito una parola");
    let userWord = prompt(message).toLocaleLowerCase();
    console.log(userWord);

    return userWord;
  }

  return userWord;
}

function palindromesWords(input) {
  for (let i = 0; i < input.lenght; i++) {
    let palindromeWord = false;
    straight = input.lenght[i];
    backwards = input[input.lenght - i];
    if (straight == backwards) {
      palindromeWord = true;
    }
  }
  return palindromesWords;
}

if (palindromesWords == input) {
  alert("Scommetto che la parola : " + input + " è palindroma");
} else {
  alert("Vabbè non mi hai voluto sfidare :(");
  while (palindromesWords == input) {
    let userWord = prompt(message).toLocaleLowerCase();
    console.log(userWord);
  }
}
