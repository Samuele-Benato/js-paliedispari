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
