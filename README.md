# TRACCIA

## Palidroma (Istruzioni)

- Chiedere all'utente di inserire una parola

- Creare una funzione per capire se la parola inserita è palindroma

## Pari e Dispari (Istruzioni)

- L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.

- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

- Sommiamo i due numeri

- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

- Dichiariamo chi ha vinto.

## Pari e Dispari (Svolgimento)

- Creo una variabile di appoggio booleana (true/false) per far scegliere il pari o dispari

  - **SE** sceglie pari = true
    - controllo la scelta possibile tra i numeri 2,4
  - **ALTRIMENTI SE** sceglie dispari = false
    - controllo la scelta possibile tra i numeri 1,3,5

- Creo una funzione per chiedere il numero all'utente

  - Controllo che effettivamente inserisca un numero con 'while'
  - Uso 'return' per poter accedere all'informazione di interesse dentro la funzione

- Creo una costante che genera un numero randomico per il computer definendo min e max (Math.floor(Math.random()\*(max - min)) + min;)

- Creo una costante con userNumber + computerNumber

- **SE** costante = userNumber + computerNumber % 2 == 0
  - il numero è pari
  - return con il valore del numero uscito
- **ALTRIMENTI**

  - il numero è dispari
  - return con il valore del numero uscito

- **SE** user ha scelto pari **E** il risultato è pari
  - ha vinto
- **ALTRIMENTI**
  - ha vinto il computer
